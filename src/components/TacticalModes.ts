export type TacticalMode = 'none' | 'crt' | 'nv' | 'flir';

export class TacticalModes {
  private container: HTMLElement;
  private currentMode: TacticalMode = 'none';
  private onChange?: (mode: TacticalMode) => void;
  private el: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    this.el = document.createElement('div');
    this.el.className = 'tactical-modes-selector';
    this.render();
  }

  public setOnChange(callback: (mode: TacticalMode) => void) {
    this.onChange = callback;
  }

  private render() {
    this.el.innerHTML = `
      <div class="mode-btns">
        <button class="mode-btn ${this.currentMode === 'none' ? 'active' : ''}" data-mode="none">STD</button>
        <button class="mode-btn ${this.currentMode === 'crt' ? 'active' : ''}" data-mode="crt">CRT</button>
        <button class="mode-btn ${this.currentMode === 'nv' ? 'active' : ''}" data-mode="nv">NVG</button>
        <button class="mode-btn ${this.currentMode === 'flir' ? 'active' : ''}" data-mode="flir">FLIR</button>
      </div>
    `;

    this.el.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = (btn as HTMLElement).dataset.mode as TacticalMode;
        this.setMode(mode);
      });
    });

    this.container.appendChild(this.el);
  }

  public setMode(mode: TacticalMode) {
    if (this.currentMode === mode) return;
    this.currentMode = mode;

    // Update active state in UI
    this.el.querySelectorAll('.mode-btn').forEach(btn => {
      btn.classList.toggle('active', (btn as HTMLElement).dataset.mode === mode);
    });

    if (this.onChange) {
      this.onChange(mode);
    }
  }

  public getMode(): TacticalMode {
    return this.currentMode;
  }
}
