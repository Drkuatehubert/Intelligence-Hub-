export class CommandConsole {
  private element: HTMLElement;

  constructor(id: string, label: string) {
    this.element = document.createElement('div');
    this.element.className = 'panel terminal';
    this.element.setAttribute('data-panel', id);
    this.element.innerHTML = `
      <div class="panel-header">
        <span>⌨️ ${label}</span>
      </div>
      <div class="terminal-output" style="height: 100px; overflow-y: auto; margin-bottom: 5px;"></div>
      <input type="text" class="terminal-input" placeholder="Enter tactical command..." style="width: 100%; background: #000; color: #00ff88; border: 1px solid #1f242d; outline: none; font-family: monospace;" />
    `;

    const input = this.element.querySelector('.terminal-input') as HTMLInputElement;
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.log(`EXECUTING: ${input.value}`);
        input.value = '';
      }
    });
  }

  public getElement() { return this.element; }

  public log(msg: string) {
    const output = this.element.querySelector('.terminal-output');
    if (!output) return;
    const line = document.createElement('div');
    line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  public toggle(enabled: boolean) {
    this.element.classList.toggle('hidden', !enabled);
  }
}
