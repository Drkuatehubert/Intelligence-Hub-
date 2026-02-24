export class RelationshipGraph {
  private element: HTMLElement;

  constructor(id: string, label: string) {
    this.element = document.createElement('div');
    this.element.className = 'panel';
    this.element.setAttribute('data-panel', id);
    this.element.innerHTML = `
      <div class="panel-header">
        <span>🕸️ ${label}</span>
      </div>
      <div class="graph-canvas" style="height: 200px; display: flex; align-items: center; justify-content: center; color: var(--gotham-text-dim);">
        [GRAPH VISUALIZATION ACTIVE]
      </div>
    `;
  }

  public getElement() { return this.element; }

  public updateData(nodes: any[], links: any[]) {
    const canvas = this.element.querySelector('.graph-canvas');
    if (canvas) canvas.textContent = `Rendering ${nodes.length} entities and ${links.length} relationships...`;
  }

  public toggle(enabled: boolean) {
    this.element.classList.toggle('hidden', !enabled);
  }
}
