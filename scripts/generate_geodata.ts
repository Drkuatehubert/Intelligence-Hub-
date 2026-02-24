import {
  STRATEGIC_WATERWAYS,
  ECONOMIC_CENTERS,
  CRITICAL_MINERALS,
  INTEL_HOTSPOTS,
  CONFLICT_ZONES,
  MILITARY_BASES,
  NUCLEAR_FACILITIES,
  AI_DATA_CENTERS
} from '../src/config/geo';
import * as fs from 'fs';
import * as path from 'path';

function toGeoJSON(data: any[], type: string) {
  return {
    type: 'FeatureCollection',
    features: data.map(item => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [item.lon, item.lat]
      },
      properties: {
        ...item,
        dataType: type
      }
    }))
  };
}

const outDir = path.join(__dirname, '../geodata');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

fs.writeFileSync(path.join(outDir, 'strategic_waterways.geojson'), JSON.stringify(toGeoJSON(STRATEGIC_WATERWAYS, 'waterway'), null, 2));
fs.writeFileSync(path.join(outDir, 'economic_centers.geojson'), JSON.stringify(toGeoJSON(ECONOMIC_CENTERS, 'economic'), null, 2));
fs.writeFileSync(path.join(outDir, 'critical_minerals.geojson'), JSON.stringify(toGeoJSON(CRITICAL_MINERALS, 'mineral'), null, 2));
fs.writeFileSync(path.join(outDir, 'hotspots.geojson'), JSON.stringify(toGeoJSON(INTEL_HOTSPOTS, 'hotspot'), null, 2));
fs.writeFileSync(path.join(outDir, 'military_bases.geojson'), JSON.stringify(toGeoJSON(MILITARY_BASES, 'base'), null, 2));
fs.writeFileSync(path.join(outDir, 'nuclear_facilities.geojson'), JSON.stringify(toGeoJSON(NUCLEAR_FACILITIES, 'nuclear'), null, 2));

console.log('GeoJSON files generated in geodata/');
