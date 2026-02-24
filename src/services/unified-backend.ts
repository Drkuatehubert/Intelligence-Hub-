/**
 * Unified Backend Service
 * Interconnects WorldMonitor with integrated OSINT and Security backends.
 */

const GEOSENTINEL_BASE = import.meta.env.VITE_GEOSENTINEL_URL || 'http://localhost:8000';
const WIRETAPPER_BASE = import.meta.env.VITE_WIRETAPPER_URL || 'http://localhost:8080';
const PENTAGI_BASE = import.meta.env.VITE_PENTAGI_URL || 'http://localhost:8443';

export interface WirelessDevice {
  lat: number;
  lon: number;
  ssid?: string;
  bssid?: string;
  vendor?: string;
  signal?: number;
  type: string;
  timestamp?: string;
}

export interface PentestStatus {
  status: 'idle' | 'running' | 'completed' | 'error';
  lastAction: string;
  target?: string;
}

export class UnifiedBackendService {
  /**
   * Fetch nearby wireless signals from WireTapper
   */
  async getNearbySignals(lat: number, lon: number, mode: 'wifi' | 'bluetooth' = 'wifi'): Promise<WirelessDevice[]> {
    try {
      const resp = await fetch(`${WIRETAPPER_BASE}/nearby?lat=${lat}&lon=${lon}&mode=${mode}`);
      if (!resp.ok) throw new Error('WireTapper unavailable');
      const data = await resp.json();
      return data.devices || [];
    } catch (e) {
      console.error('[UnifiedBackend] WireTapper fetch failed:', e);
      return [];
    }
  }

  /**
   * Get GeoSentinel real-time flight data
   */
  async getGeoSentinelFlights() {
    try {
      const resp = await fetch(`${GEOSENTINEL_BASE}/api/geo/flights`);
      return await resp.json();
    } catch (e) {
      console.error('[UnifiedBackend] GeoSentinel flights failed:', e);
      return [];
    }
  }

  /**
   * Get GeoSentinel real-time vessel data
   */
  async getGeoSentinelVessels() {
    try {
      const resp = await fetch(`${GEOSENTINEL_BASE}/api/geo/vessels`);
      return await resp.json();
    } catch (e) {
      console.error('[UnifiedBackend] GeoSentinel vessels failed:', e);
      return [];
    }
  }

  /**
   * Interact with GeoSential AI
   */
  async chatWithGeoSential(message: string, context: any = {}) {
    try {
      const resp = await fetch(`${GEOSENTINEL_BASE}/api/geosentialai/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, context }),
      });
      return await resp.json();
    } catch (e) {
      console.error('[UnifiedBackend] GeoSential AI chat failed:', e);
      return { error: 'AI service unreachable' };
    }
  }

  /**
   * Get PentAGI operational status
   */
  async getPentestStatus(): Promise<PentestStatus> {
    // Mocking PentAGI integration for now as it requires complex auth/GraphQL
    return {
      status: 'idle',
      lastAction: 'No active session',
    };
  }
}

export const unifiedBackend = new UnifiedBackendService();
