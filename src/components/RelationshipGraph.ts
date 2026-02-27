import { Panel } from './Panel';

export class RelationshipGraph extends Panel {
  constructor(id: string, label: string) {
    super({ id, title: label });

    this.content.innerHTML = `
      <div class="graph-canvas" style="height: 200px; display: flex; align-items: center; justify-content: center; color: var(--gotham-text-dim);">
        [GRAPH VISUALIZATION ACTIVE]
      </div>
    `;
  }

  public updateData(nodes: any[], links: any[]) {
    const canvas = this.content.querySelector('.graph-canvas');
    if (canvas) canvas.textContent = `Rendering ${nodes.length} entities and ${links.length} relationships...`;
  }

}
