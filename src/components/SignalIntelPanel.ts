export class SignalIntelPanel {
  private element: HTMLElement;

  constructor(id: string, label: string) {
    this.element = document.createElement('div');
    this.element.className = 'panel';
    this.element.setAttribute('data-panel', id);
    this.element.innerHTML = `
      <div class="panel-header">
        <span>📶 ${label}</span>
      </div>
      <table class="data-table">
        <thead>
          <tr>
            <th>TYPE</th>
            <th>ID</th>
            <th>STRENGTH</th>
          </tr>
        </thead>
        <tbody id="signal-body"></tbody>
      </table>
    `;
  }

  public getElement() { return this.element; }

  public updateDevices(devices: any[]) {
    const body = this.element.querySelector('#signal-body');
    if (!body) return;
    body.innerHTML = devices.map(d => `
      <tr>
        <td>${d.type}</td>
        <td>${d.ssid || d.bssid}</td>
        <td>${d.rssi}dBm</td>
      </tr>
    `).join('');
  }

  public toggle(enabled: boolean) {
    this.element.classList.toggle('hidden', !enabled);
  }
}
