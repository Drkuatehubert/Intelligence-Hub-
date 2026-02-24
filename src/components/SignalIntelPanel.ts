import { Panel } from './Panel';
import { escapeHtml } from '@/utils/sanitize';

export interface SignalDevice {
  id: string;
  type: string;
  ssid?: string;
  vendor?: string;
  signal?: number;
  lat: number;
  lon: number;
  timestamp?: string;
}

export class SignalIntelPanel extends Panel {
  constructor(id: string, title: string) {
    super({ id, title, showCount: true, trackActivity: true });
  }

  public updateDevices(devices: SignalDevice[]): void {
    this.setCount(devices.length);
    if (devices.length === 0) {
      this.setContent('<div class="panel-empty">No signals detected in area</div>');
      return;
    }

    const html = devices.map(d => `
      <div class="item signal-item">
        <div class="item-source">
          <span class="signal-type-badge ${escapeHtml(d.type)}">${escapeHtml(d.type.toUpperCase())}</span>
          ${d.timestamp ? `<span class="item-time">${escapeHtml(d.timestamp)}</span>` : ''}
        </div>
        <div class="item-title">${escapeHtml(d.ssid || d.id)}</div>
        <div class="signal-meta">
          <span class="signal-strength ${this.getSignalClass(d.signal)}">
            📶 ${d.signal ? `${d.signal} dBm` : 'N/A'}
          </span>
          <span class="signal-vendor">${escapeHtml(d.vendor || 'Unknown Vendor')}</span>
        </div>
      </div>
    `).join('');
    this.setContent(html);
  }

  private getSignalClass(dbm?: number): string {
    if (!dbm) return 'signal-unknown';
    if (dbm > -60) return 'signal-strong';
    if (dbm > -80) return 'signal-medium';
    return 'signal-weak';
  }
}
