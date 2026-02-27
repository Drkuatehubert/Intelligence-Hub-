export interface Satellite {
  id: string;
  name: string;
  type: 'comm' | 'gps' | 'science' | 'mil' | 'station';
  lat: number;
  lon: number;
  alt: number; // in km
  velocity: number; // in deg/sec (simulated)
}

export const MAJOR_SATELLITES: Satellite[] = [
  { id: 'iss', name: 'ISS (ZARYA)', type: 'station', lat: 0, lon: 0, alt: 420, velocity: 0.07 },
  { id: 'hst', name: 'HUBBLE SPACE TELESCOPE', type: 'science', lat: 0, lon: 0, alt: 540, velocity: 0.06 },
  { id: 'starlink-1', name: 'STARLINK-1007', type: 'comm', lat: 45, lon: -120, alt: 550, velocity: 0.08 },
  { id: 'starlink-2', name: 'STARLINK-1008', type: 'comm', lat: 30, lon: -100, alt: 550, velocity: 0.08 },
  { id: 'starlink-3', name: 'STARLINK-1009', type: 'comm', lat: 10, lon: -80, alt: 550, velocity: 0.08 },
  { id: 'gps-1', name: 'GPS BIIF-1', type: 'gps', lat: 20, lon: 40, alt: 20200, velocity: 0.01 },
  { id: 'gps-2', name: 'GPS BIIF-2', type: 'gps', lat: -20, lon: 160, alt: 20200, velocity: 0.01 },
  { id: 'noaa-19', name: 'NOAA 19', type: 'science', lat: 60, lon: 20, alt: 850, velocity: 0.05 },
  { id: 'milstar-1', name: 'USA 169 (MILSTAR 5)', type: 'mil', lat: 0, lon: -90, alt: 35786, velocity: 0 },
];

// Generate more Starlink-like satellites for high density
for (let i = 0; i < 50; i++) {
  MAJOR_SATELLITES.push({
    id: `starlink-sim-${i}`,
    name: `STARLINK-${1100 + i}`,
    type: 'comm',
    lat: (Math.random() * 160) - 80,
    lon: (Math.random() * 360) - 180,
    alt: 550,
    velocity: 0.07 + (Math.random() * 0.02)
  });
}
