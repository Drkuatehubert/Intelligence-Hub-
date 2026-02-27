import { Panel } from './Panel';

export class CommandConsole extends Panel {
  constructor(id: string, label: string) {
    super({ id, title: label, className: 'terminal' });

    this.content.innerHTML = `
      <div class="terminal-output" style="height: 100px; overflow-y: auto; margin-bottom: 5px;"></div>
      <input type="text" class="terminal-input" placeholder="Enter tactical command..." style="width: 100%; background: #000; color: #00ff88; border: 1px solid #1f242d; outline: none; font-family: monospace;" />
    `;

    const input = this.content.querySelector('.terminal-input') as HTMLInputElement;
    input?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.log(`EXECUTING: ${input.value}`);
        input.value = '';
      }
    });
  }

  public getElement() { return this.element; }

  public log(msg: string) {
    const output = this.content.querySelector('.terminal-output');
    if (!output) return;
    const line = document.createElement('div');
    line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

}
