import * as d3 from 'd3';
import { Panel } from './Panel';
import { getCSSColor } from '@/utils';

export interface GraphNode extends d3.SimulationNodeDatum {
  id: string;
  label: string;
  type: 'target' | 'vulnerability' | 'osint' | 'device' | 'person' | 'org';
  val?: number;
}

export interface GraphLink extends d3.SimulationLinkDatum<GraphNode> {
  source: string | GraphNode;
  target: string | GraphNode;
  label?: string;
}

export class RelationshipGraph extends Panel {
  private svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null = null;
  private simulation: d3.Simulation<GraphNode, GraphLink> | null = null;
  private nodes: GraphNode[] = [];
  private links: GraphLink[] = [];
  private resizeObserver: ResizeObserver | null = null;

  constructor(id: string, title: string) {
    super({ id, title, showCount: false });
    this.initGraph();
    this.setupResizeObserver();
  }

  private initGraph(): void {
    const width = this.content.clientWidth || 400;
    const height = 400;

    this.svg = d3.select(this.content)
      .append('svg')
      .attr('width', '100%')
      .attr('height', height)
      .attr('style', 'display: block; background: rgba(0,0,0,0.1); border-radius: 4px;');

    this.simulation = d3.forceSimulation<GraphNode>(this.nodes)
      .force('link', d3.forceLink<GraphNode, GraphLink>(this.links).id(d => d.id).distance(80))
      .force('charge', d3.forceManyBody().strength(-150))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(30))
      .on('tick', () => this.ticked());

    // Add arrow markers for directed links
    this.svg.append('defs').append('marker')
      .attr('id', 'arrowhead')
      .attr('viewBox', '-0 -5 10 10')
      .attr('refX', 20)
      .attr('refY', 0)
      .attr('orient', 'auto')
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('xoverflow', 'visible')
      .append('svg:path')
      .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
      .attr('fill', getCSSColor('--border'))
      .style('stroke', 'none');
  }

  private setupResizeObserver(): void {
    this.resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const height = 400;
        if (this.simulation) {
          this.simulation.force('center', d3.forceCenter(width / 2, height / 2));
          this.simulation.alpha(0.3).restart();
        }
      }
    });
    this.resizeObserver.observe(this.content);
  }

  private ticked(): void {
    if (!this.svg) return;

    this.svg.selectAll('.link')
      .attr('x1', (d: any) => d.source.x)
      .attr('y1', (d: any) => d.source.y)
      .attr('x2', (d: any) => d.target.x)
      .attr('y2', (d: any) => d.target.y);

    this.svg.selectAll('.node-group')
      .attr('transform', (d: any) => `translate(${d.x},${d.y})`);
  }

  public updateData(nodes: GraphNode[], links: GraphLink[]): void {
    this.nodes = nodes;
    this.links = links;
    this.render();
  }

  private render(): void {
    if (!this.svg || !this.simulation) return;

    const link = this.svg.selectAll('.link')
      .data(this.links)
      .join('line')
      .attr('class', 'link')
      .attr('stroke', getCSSColor('--border'))
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5)
      .attr('marker-end', 'url(#arrowhead)');

    const nodeGroup = this.svg.selectAll('.node-group')
      .data(this.nodes)
      .join('g')
      .attr('class', 'node-group')
      .call(this.drag(this.simulation) as any);

    nodeGroup.selectAll('circle')
      .data(d => [d])
      .join('circle')
      .attr('r', d => (d.type === 'target' ? 12 : 8))
      .attr('fill', d => this.getColor(d.type))
      .attr('stroke', getCSSColor('--bg'))
      .attr('stroke-width', 2);

    nodeGroup.selectAll('text')
      .data(d => [d])
      .join('text')
      .attr('dy', 20)
      .attr('text-anchor', 'middle')
      .attr('font-size', '9px')
      .attr('font-weight', '500')
      .attr('fill', getCSSColor('--text'))
      .text(d => d.label)
      .style('pointer-events', 'none')
      .style('text-shadow', `0 1px 2px ${getCSSColor('--bg')}`);

    this.simulation.nodes(this.nodes);
    this.simulation.force<d3.ForceLink<GraphNode, GraphLink>>('link')!.links(this.links);
    this.simulation.alpha(1).restart();
  }

  private getColor(type: GraphNode['type']): string {
    switch (type) {
      case 'target': return '#ff4444';
      case 'vulnerability': return '#ffaa00';
      case 'osint': return '#64b4ff';
      case 'device': return '#b478ff';
      case 'person': return '#44ff88';
      case 'org': return '#ffffff';
      default: return '#888888';
    }
  }

  private drag(simulation: d3.Simulation<GraphNode, GraphLink>) {
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }
    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }
    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }
    return d3.drag<SVGGElement, GraphNode>()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended);
  }

  public destroy(): void {
    this.resizeObserver?.disconnect();
    this.simulation?.stop();
    super.destroy();
  }
}
