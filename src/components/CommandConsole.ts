import { Panel } from './Panel';
import { unifiedBackend } from '@/services/unified-backend';
import { t } from '@/services/i18n';
import { escapeHtml } from '@/utils/sanitize';

/**
 * CommandConsole - Unified terminal for AI agents and platform commands
 */
export class CommandConsole extends Panel {
  private outputEl: HTMLElement;
  private inputEl: HTMLInputElement;

  constructor(id: string, title: string) {
    super(id, title);

    this.element.classList.add('command-console');
    this.element.innerHTML = `
      <div class="panel-header">
        <span class="panel-title">${escapeHtml(title)}</span>
        <div class="panel-actions">
          <button class="clear-btn" title="Clear Console">⎚</button>
        </div>
      </div>
      <div class="terminal-body">
        <div class="terminal-output"></div>
        <div class="terminal-input-wrapper">
          <span class="prompt">></span>
          <input type="text" class="terminal-input" placeholder="Type /help for commands..." autocomplete="off" spellcheck="false" />
        </div>
      </div>
    `;

    this.outputEl = this.element.querySelector('.terminal-output') as HTMLElement;
    this.inputEl = this.element.querySelector('.terminal-input') as HTMLInputElement;

    this.setupListeners();
    this.appendLine('System', 'Command Console Initialized. Ready for input.', 'system');
  }

  private setupListeners() {
    this.inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const cmd = this.inputEl.value.trim();
        if (cmd) {
          this.handleCommand(cmd);
          this.inputEl.value = '';
        }
      }
    });

    this.element.querySelector('.clear-btn')?.addEventListener('click', () => {
      this.outputEl.innerHTML = '';
      this.appendLine('System', 'Console cleared.', 'system');
    });
  }

  private async handleCommand(command: string) {
    this.appendLine('User', command, 'user');

    if (command === '/help') {
      this.appendLine('System', `
        Available commands:
        /osint <query> - Perform cross-platform OSINT search
        /pentest <target> - Launch autonomous security audit
        /scan - Trigger local signal intelligence scan
        /tor <query> - Search dark web via TOR proxy
        /clear - Clear terminal output
      `, 'system');
      return;
    }

    if (command === '/clear') {
      this.outputEl.innerHTML = '';
      return;
    }

    // Process command via Unified Backend
    this.appendLine('AI', 'Processing...', 'ai-pending');

    try {
      const response = await unifiedBackend.chatWithGeoSential(command);
      // Remove pending line
      this.outputEl.querySelector('.ai-pending')?.remove();

      if (response.error) {
        this.appendLine('Error', response.error, 'error');
      } else {
        this.appendLine('AI', response.reply || response.output || JSON.stringify(response), 'ai');
      }
    } catch (e) {
      this.outputEl.querySelector('.ai-pending')?.remove();
      this.appendLine('Error', 'Communication failure with backend services.', 'error');
    }
  }

  private appendLine(source: string, text: string, type: string) {
    const line = document.createElement('div');
    line.className = `terminal-line ${type}`;
    line.innerHTML = `
      <span class="line-timestamp">[${new Date().toLocaleTimeString()}]</span>
      <span class="line-source">${escapeHtml(source)}:</span>
      <span class="line-content">${escapeHtml(text).replace(/\n/g, '<br/>')}</span>
    `;
    this.outputEl.appendChild(line);
    this.outputEl.scrollTop = this.outputEl.scrollHeight;
  }
}
