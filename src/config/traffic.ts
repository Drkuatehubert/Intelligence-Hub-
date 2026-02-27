export interface TrafficPath {
  id: string;
  city: string;
  path: [number, number][];
  color: [number, number, number];
}

export const TRAFFIC_PATHS: TrafficPath[] = [
  // NYC
  { id: 'nyc-1', city: 'NYC', path: [[-74.006, 40.7128], [-73.996, 40.7228], [-73.986, 40.7328]], color: [255, 200, 0] },
  // London
  { id: 'ldn-1', city: 'London', path: [[-0.1278, 51.5074], [-0.1178, 51.5174], [-0.1078, 51.5274]], color: [255, 100, 0] },
  // Taipei
  { id: 'tpe-1', city: 'Taipei', path: [[121.5654, 25.033], [121.5754, 25.043], [121.5854, 25.053]], color: [0, 210, 255] },
  // Kyiv
  { id: 'kyiv-1', city: 'Kyiv', path: [[30.5234, 50.4501], [30.5334, 50.4601], [30.5434, 50.4701]], color: [0, 255, 100] },
];

// Generate more random paths around hotspots
const hotspots = [
  { name: 'Taipei', lat: 25.033, lon: 121.5654 },
  { name: 'Seoul', lat: 37.5665, lon: 126.978 },
  { name: 'Singapore', lat: 1.3521, lon: 103.8198 },
  { name: 'Dubai', lat: 25.2048, lon: 55.2708 },
  { name: 'Tel Aviv', lat: 32.0853, lon: 34.7818 },
];

hotspots.forEach(h => {
  for (let i = 0; i < 10; i++) {
    const startLat = h.lat + (Math.random() - 0.5) * 0.1;
    const startLon = h.lon + (Math.random() - 0.5) * 0.1;
    TRAFFIC_PATHS.push({
      id: `traffic-${h.name}-${i}`,
      city: h.name,
      path: [
        [startLon, startLat],
        [startLon + (Math.random() - 0.5) * 0.05, startLat + (Math.random() - 0.5) * 0.05],
        [startLon + (Math.random() - 0.5) * 0.1, startLat + (Math.random() - 0.5) * 0.1],
      ],
      color: [255, 255, 255]
    });
  }
});
