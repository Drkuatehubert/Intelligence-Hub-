import type { PanelConfig, MapLayers } from '@/types';
import type { DataSourceId } from '@/services/data-freshness';
import { SITE_VARIANT } from './variant';

// ============================================
// FULL VARIANT (Geopolitical)
// ============================================
// Panel order matters! First panels appear at top of grid.
// Desired order: live-news, AI Insights, AI Strategic Posture, cii, strategic-risk, then rest
const FULL_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Intelligence Map', enabled: true, priority: 1 },
  'live-news': { name: 'Situation Mondiale', enabled: true, priority: 1 },
  'live-webcams': { name: 'Webcams en Direct', enabled: true, priority: 1 },
  insights: { name: 'Insights IA', enabled: true, priority: 1 },
  'strategic-posture': { name: 'Posture Stratégique IA', enabled: true, priority: 1 },
  cii: { name: 'Instabilité Pays', enabled: true, priority: 1 },
  'strategic-risk': { name: 'Vue d\'ensemble des Risques Stratégiques', enabled: true, priority: 1 },
  intel: { name: 'Flux de Renseignements', enabled: true, priority: 1 },
  'gdelt-intel': { name: 'Renseignements en Direct', enabled: true, priority: 1 },
  cascade: { name: 'Cascade d\'Infrastructure', enabled: true, priority: 1 },
  politics: { name: 'Actualités Mondiales', enabled: true, priority: 1 },
  middleeast: { name: 'Moyen-Orient', enabled: true, priority: 1 },
  africa: { name: 'Afrique', enabled: true, priority: 1 },
  latam: { name: 'Amérique latine', enabled: true, priority: 1 },
  asia: { name: 'Asie-Pacifique', enabled: true, priority: 1 },
  energy: { name: 'Énergie & Ressources', enabled: true, priority: 1 },
  gov: { name: 'Gouvernement', enabled: true, priority: 1 },
  thinktanks: { name: 'Groupes de Réflexion', enabled: true, priority: 1 },
  polymarket: { name: 'Prédictions', enabled: true, priority: 1 },
  commodities: { name: 'Matières premières', enabled: true, priority: 1 },
  markets: { name: 'Marchés', enabled: true, priority: 1 },
  economic: { name: 'Indicateurs Économiques', enabled: true, priority: 1 },
  finance: { name: 'Finance', enabled: true, priority: 1 },
  tech: { name: 'Technologie', enabled: true, priority: 2 },
  crypto: { name: 'Crypto', enabled: true, priority: 2 },
  heatmap: { name: 'Carte Thermique', enabled: true, priority: 2 },
  ai: { name: 'IA/ML', enabled: true, priority: 2 },
  layoffs: { name: 'Suivi des Licenciements', enabled: true, priority: 2 },
  monitors: { name: 'Mes moniteurs', enabled: true, priority: 2 },
  'satellite-fires': { name: 'Incendies', enabled: true, priority: 2 },
  'macro-signals': { name: 'Radar de Marché', enabled: true, priority: 2 },
  'etf-flows': { name: 'Suivi ETF BTC', enabled: true, priority: 2 },
  stablecoins: { name: 'Stablecoins', enabled: true, priority: 2 },
  'ucdp-events': { name: 'Conflits UCDP', enabled: true, priority: 2 },
  displacement: { name: 'Déplacements HCR', enabled: true, priority: 2 },
  climate: { name: 'Anomalies Climatiques', enabled: true, priority: 2 },
  'population-exposure': { name: 'Exposition de la Population', enabled: true, priority: 2 },
  'command-console': { name: 'Tactical Console', enabled: true, priority: 1 },
};

const FULL_MAP_LAYERS: MapLayers = {
  conflicts: true,
  bases: true,
  cables: false,
  pipelines: false,
  hotspots: true,
  ais: false,
  nuclear: true,
  irradiators: false,
  sanctions: true,
  weather: true,
  economic: true,
  waterways: true,
  outages: true,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: true,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  rfSignals: false,
  satellites: false,
  traffic: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  // Tech layers (disabled in full variant)
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  // Finance layers (disabled in full variant)
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
};

const FULL_MOBILE_MAP_LAYERS: MapLayers = {
  conflicts: true,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: true,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: true,
  weather: true,
  economic: false,
  waterways: false,
  outages: true,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  rfSignals: false,
  satellites: false,
  traffic: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  // Tech layers (disabled in full variant)
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  // Finance layers (disabled in full variant)
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
};

// ============================================
// TECH VARIANT (Tech/AI/Startups)
// ============================================
const TECH_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Tech Map', enabled: true, priority: 1 },
  'live-news': { name: 'Tech Headlines', enabled: true, priority: 1 },
  'live-webcams': { name: 'Live Webcams', enabled: true, priority: 2 },
  insights: { name: 'AI Insights', enabled: true, priority: 1 },
  ai: { name: 'AI/ML News', enabled: true, priority: 1 },
  tech: { name: 'Technology', enabled: true, priority: 1 },
  startups: { name: 'Startups & VC', enabled: true, priority: 1 },
  vcblogs: { name: 'VC Insights & Essays', enabled: true, priority: 1 },
  regionalStartups: { name: 'Global Startup News', enabled: true, priority: 1 },
  unicorns: { name: 'Unicorn Tracker', enabled: true, priority: 1 },
  accelerators: { name: 'Accelerators & Demo Days', enabled: true, priority: 1 },
  security: { name: 'Cybersecurity', enabled: true, priority: 1 },
  policy: { name: 'AI Policy & Regulation', enabled: true, priority: 1 },
  regulation: { name: 'AI Regulation Dashboard', enabled: true, priority: 1 },
  layoffs: { name: 'Layoffs Tracker', enabled: true, priority: 1 },
  markets: { name: 'Tech Stocks', enabled: true, priority: 2 },
  finance: { name: 'Financial News', enabled: true, priority: 2 },
  crypto: { name: 'Crypto', enabled: true, priority: 2 },
  hardware: { name: 'Semiconductors & Hardware', enabled: true, priority: 2 },
  cloud: { name: 'Cloud & Infrastructure', enabled: true, priority: 2 },
  dev: { name: 'Developer Community', enabled: true, priority: 2 },
  github: { name: 'GitHub Trending', enabled: true, priority: 1 },
  ipo: { name: 'IPO & SPAC', enabled: true, priority: 2 },
  polymarket: { name: 'Tech Predictions', enabled: true, priority: 2 },
  funding: { name: 'Funding & VC', enabled: true, priority: 1 },
  producthunt: { name: 'Product Hunt', enabled: true, priority: 1 },
  events: { name: 'Tech Events', enabled: true, priority: 1 },
  'service-status': { name: 'Service Status', enabled: true, priority: 2 },
  economic: { name: 'Economic Indicators', enabled: true, priority: 2 },
  'tech-readiness': { name: 'Tech Readiness Index', enabled: true, priority: 1 },
  'macro-signals': { name: 'Market Radar', enabled: true, priority: 2 },
  'etf-flows': { name: 'BTC ETF Tracker', enabled: true, priority: 2 },
  stablecoins: { name: 'Stablecoins', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'command-console': { name: 'Tactical Console', enabled: true, priority: 1 },
};

const TECH_MAP_LAYERS: MapLayers = {
  conflicts: false,
  bases: false,
  cables: true,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: true,
  economic: true,
  waterways: false,
  outages: true,
  cyberThreats: false,
  datacenters: true,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  rfSignals: false,
  satellites: false,
  traffic: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  // Tech layers (enabled in tech variant)
  startupHubs: true,
  cloudRegions: true,
  accelerators: false,
  techHQs: true,
  techEvents: true,
  // Finance layers (disabled in tech variant)
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
};

const TECH_MOBILE_MAP_LAYERS: MapLayers = {
  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: false,
  economic: false,
  waterways: false,
  outages: true,
  cyberThreats: false,
  datacenters: true,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  rfSignals: false,
  satellites: false,
  traffic: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  // Tech layers (limited on mobile)
  startupHubs: true,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: true,
  // Finance layers (disabled in tech variant)
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
};

// ============================================
// FINANCE VARIANT (Markets/Trading)
// ============================================
const FINANCE_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Markets Map', enabled: true, priority: 1 },
  'live-news': { name: 'Market Headlines', enabled: true, priority: 1 },
  'live-webcams': { name: 'Live Webcams', enabled: true, priority: 2 },
  insights: { name: 'AI Market Insights', enabled: true, priority: 1 },
  markets: { name: 'Live Markets', enabled: true, priority: 1 },
  'markets-news': { name: 'Markets News', enabled: true, priority: 2 },
  forex: { name: 'Forex & Currencies', enabled: true, priority: 1 },
  bonds: { name: 'Fixed Income', enabled: true, priority: 1 },
  commodities: { name: 'Commodities & Futures', enabled: true, priority: 1 },
  'commodities-news': { name: 'Commodities News', enabled: true, priority: 2 },
  crypto: { name: 'Crypto & Digital Assets', enabled: true, priority: 1 },
  'crypto-news': { name: 'Crypto News', enabled: true, priority: 2 },
  centralbanks: { name: 'Central Bank Watch', enabled: true, priority: 1 },
  economic: { name: 'Economic Data', enabled: true, priority: 1 },
  'economic-news': { name: 'Economic News', enabled: true, priority: 2 },
  ipo: { name: 'IPOs, Earnings & M&A', enabled: true, priority: 1 },
  heatmap: { name: 'Sector Heatmap', enabled: true, priority: 1 },
  'macro-signals': { name: 'Market Radar', enabled: true, priority: 1 },
  derivatives: { name: 'Derivatives & Options', enabled: true, priority: 2 },
  fintech: { name: 'Fintech & Trading Tech', enabled: true, priority: 2 },
  regulation: { name: 'Financial Regulation', enabled: true, priority: 2 },
  institutional: { name: 'Hedge Funds & PE', enabled: true, priority: 2 },
  analysis: { name: 'Market Analysis', enabled: true, priority: 2 },
  'etf-flows': { name: 'BTC ETF Tracker', enabled: true, priority: 2 },
  stablecoins: { name: 'Stablecoins', enabled: true, priority: 2 },
  'gcc-investments': { name: 'GCC Investments', enabled: true, priority: 2 },
  gccNews: { name: 'GCC Business News', enabled: true, priority: 2 },
  polymarket: { name: 'Predictions', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'command-console': { name: 'Tactical Console', enabled: true, priority: 1 },
};

const FINANCE_MAP_LAYERS: MapLayers = {
  conflicts: false,
  bases: false,
  cables: true,
  pipelines: true,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: true,
  weather: true,
  economic: true,
  waterways: true,
  outages: true,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  rfSignals: false,
  satellites: false,
  traffic: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  // Tech layers (disabled in finance variant)
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  // Finance layers (enabled in finance variant)
  stockExchanges: true,
  financialCenters: true,
  centralBanks: true,
  commodityHubs: false,
  gulfInvestments: false,
};

const FINANCE_MOBILE_MAP_LAYERS: MapLayers = {
  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: false,
  economic: true,
  waterways: false,
  outages: true,
  cyberThreats: false,
  datacenters: true,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  rfSignals: false,
  satellites: false,
  traffic: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  // Tech layers (disabled)
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  // Finance layers (limited on mobile)
  stockExchanges: true,
  financialCenters: false,
  centralBanks: true,
  commodityHubs: false,
  gulfInvestments: false,
};

// ============================================
// WIRELESS VARIANT (OSINT/Signals)
// ============================================
const WIRELESS_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Wireless Intelligence Map', enabled: true, priority: 1 },
  'live-news': { name: 'Wireless Signals', enabled: true, priority: 1 },
  'signal-intel': { name: 'Signal Intelligence', enabled: true, priority: 1 },
  'relationship-graph': { name: 'Entity Relationships', enabled: true, priority: 1 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
  'command-console': { name: 'Tactical Console', enabled: true, priority: 1 },
};

const WIRELESS_MAP_LAYERS: MapLayers = {
  ...FULL_MAP_LAYERS,
  cables: true,
  outages: true,
  cyberThreats: true,
  datacenters: true,
  rfSignals: true,
  satellites: true,
  traffic: false,
};

// ============================================
// PENTEST VARIANT (Security/Operations)
// ============================================
const PENTEST_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Security Operations Map', enabled: true, priority: 1 },
  'pentest-monitor': { name: 'Autonomous Pentest', enabled: true, priority: 1 },
  'agent-logs': { name: 'Agent Activity Logs', enabled: true, priority: 1 },
  'relationship-graph': { name: 'Vulnerability Graph', enabled: true, priority: 1 },
  'service-status': { name: 'Target Status', enabled: true, priority: 2 },
  'command-console': { name: 'Tactical Console', enabled: true, priority: 1 },
};

const PENTEST_MAP_LAYERS: MapLayers = {
  ...FULL_MAP_LAYERS,
  cyberThreats: true,
  datacenters: true,
  satellites: false,
  traffic: false,
};

// ============================================
// VARIANT-AWARE EXPORTS
// ============================================
export const DEFAULT_PANELS =
  SITE_VARIANT === 'tech' ? TECH_PANELS :
  SITE_VARIANT === 'finance' ? FINANCE_PANELS :
  SITE_VARIANT === 'wireless' ? WIRELESS_PANELS :
  SITE_VARIANT === 'pentest' ? PENTEST_PANELS :
  FULL_PANELS;

export const DEFAULT_MAP_LAYERS =
  SITE_VARIANT === 'tech' ? TECH_MAP_LAYERS :
  SITE_VARIANT === 'finance' ? FINANCE_MAP_LAYERS :
  SITE_VARIANT === 'wireless' ? WIRELESS_MAP_LAYERS :
  SITE_VARIANT === 'pentest' ? PENTEST_MAP_LAYERS :
  FULL_MAP_LAYERS;

export const MOBILE_DEFAULT_MAP_LAYERS =
  SITE_VARIANT === 'tech' ? TECH_MOBILE_MAP_LAYERS :
  SITE_VARIANT === 'finance' ? FINANCE_MOBILE_MAP_LAYERS :
  FULL_MOBILE_MAP_LAYERS;

/** Maps map-layer toggle keys to their data-freshness source IDs (single source of truth). */
export const LAYER_TO_SOURCE: Partial<Record<keyof MapLayers, DataSourceId[]>> = {
  military: ['opensky', 'wingbits'],
  ais: ['ais'],
  natural: ['usgs'],
  weather: ['weather'],
  outages: ['outages'],
  cyberThreats: ['cyber_threats'],
  protests: ['acled', 'gdelt_doc'],
  ucdpEvents: ['ucdp_events'],
  displacement: ['unhcr'],
  climate: ['climate'],
};

// Monitor palette — fixed category colors persisted to localStorage (not theme-dependent)
export const MONITOR_COLORS = [
  '#44ff88',
  '#ff8844',
  '#4488ff',
  '#ff44ff',
  '#ffff44',
  '#ff4444',
  '#44ffff',
  '#88ff44',
  '#ff88ff',
  '#88ffff',
];

export const STORAGE_KEYS = {
  panels: 'worldmonitor-panels',
  monitors: 'worldmonitor-monitors',
  mapLayers: 'worldmonitor-layers',
  disabledFeeds: 'worldmonitor-disabled-feeds',
} as const;
