import { Panel } from './Panel';

export class SignalIntelPanel extends Panel {
  constructor(id: string, label: string) {
    super({ id, title: label });

    this.content.innerHTML = `
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

  public updateDevices(devices: any[]) {
    const body = this.content.querySelector('#signal-body');
    if (!body) return;
    body.innerHTML = devices.map(d => `
      <tr>
        <td>${d.type}</td>
        <td>${d.ssid || d.bssid}</td>
        <td>${d.rssi}dBm</td>
      </tr>
    `).join('');
  }

}
