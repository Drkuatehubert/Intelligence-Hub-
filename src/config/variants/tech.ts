// Tech/AI/Startups variant - tech.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Tech-specific exports
export * from '../tech-geo';
export * from '../ai-regulations';

// Re-export feeds infrastructure
export {
  SOURCE_TIERS,
  getSourceTier,
  SOURCE_TYPES,
  getSourceType,
  getSourcePropagandaRisk,
  type SourceRiskProfile,
  type SourceType,
} from '../feeds';

// Tech-specific FEEDS configuration
import type { Feed } from '@/types';

const rss = (url: string) => `/api/rss-proxy?url=${encodeURIComponent(url)}`;

export const FEEDS: Record<string, Feed[]> = {
  // AI, Machine Learning & LLMs
  ai: [
    { name: 'OpenAI Blog', url: rss('https://openai.com/news/rss.xml') },
    { name: 'Google AI', url: rss('https://blog.google/technology/ai/rss/') },
    { name: 'Anthropic', url: rss('https://www.anthropic.com/news/rss.xml') },
    { name: 'Meta AI', url: rss('https://ai.meta.com/blog/rss/') },
    { name: 'Mistral AI', url: rss('https://mistral.ai/news/rss.xml') },
    { name: 'Hugging Face', url: rss('https://huggingface.co/blog/feed.xml') },
    { name: 'DeepMind', url: rss('https://news.google.com/rss/search?q=site:deepmind.google+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI News', url: rss('https://news.google.com/rss/search?q="artificial+intelligence"+OR+LLM+OR+"generative+AI"+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Technology & Consumer Tech
  tech: [
    { name: 'The Verge', url: rss('https://www.theverge.com/rss/index.xml') },
    { name: 'TechCrunch', url: rss('https://techcrunch.com/feed/') },
    { name: 'Wired', url: rss('https://www.wired.com/feed/rss') },
    { name: 'Engadget', url: rss('https://www.engadget.com/rss.xml') },
    { name: 'Ars Technica', url: rss('https://feeds.arstechnica.com/arstechnica/index') },
    { name: 'CNET', url: rss('https://www.cnet.com/rss/news/') },
    { name: 'ZDNet', url: rss('https://www.zdnet.com/news/rss.xml') },
  ],

  // Startups & Venture Capital
  startups: [
    { name: 'Y Combinator', url: rss('https://blog.ycombinator.com/feed/') },
    { name: 'Crunchbase', url: rss('https://news.google.com/rss/search?q=site:crunchbase.com+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'VentureBeat', url: rss('https://venturebeat.com/feed/') },
    { name: 'Startup News', url: rss('https://news.google.com/rss/search?q=startup+funding+OR+acquisition+when:1d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Global Startup Ecosystems
  regionalStartups: [
    { name: 'Sifted (Europe)', url: rss('https://sifted.eu/feed/') },
    { name: 'Tech in Asia', url: rss('https://news.google.com/rss/search?q=site:techinasia.com+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Menabytes (MENA)', url: rss('https://www.menabytes.com/feed/') },
    { name: 'LatamList', url: rss('https://latamlist.com/feed/') },
  ],

  // Cybersecurity
  security: [
    { name: 'Krebs on Security', url: rss('https://krebsonsecurity.com/feed/') },
    { name: 'The Hacker News', url: rss('https://feeds.feedburner.com/TheHackersNews') },
    { name: 'Dark Reading', url: rss('https://www.darkreading.com/rss.xml') },
    { name: 'BleepingComputer', url: rss('https://www.bleepingcomputer.com/feed/') },
    { name: 'Threatpost', url: rss('https://threatpost.com/feed/') },
  ],

  // Policy, Ethics & Regulation
  policy: [
    { name: 'Tech Policy Press', url: rss('https://techpolicy.press/feed/') },
    { name: 'Platformer', url: rss('https://www.platformer.news/feed') },
    { name: 'AI Ethics', url: rss('https://news.google.com/rss/search?q="AI+ethics"+OR+"AI+regulation"+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Semiconductors & Hardware
  hardware: [
    { name: 'AnandTech', url: rss('https://www.anandtech.com/rss/') },
    { name: 'NVIDIA News', url: rss('https://nvidianews.nvidia.com/releases.xml') },
    { name: 'Intel News', url: rss('https://newsroom.intel.com/feed/') },
    { name: 'TSMC Watch', url: rss('https://news.google.com/rss/search?q=TSMC+semiconductor+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Tom\'s Hardware', url: rss('https://www.tomshardware.com/feeds/all') },
  ],

  // Cloud & Infrastructure
  cloud: [
    { name: 'AWS Blog', url: rss('https://aws.amazon.com/blogs/aws/feed/') },
    { name: 'Google Cloud', url: rss('https://blog.google/products/google-cloud/rss/') },
    { name: 'Azure Blog', url: rss('https://azure.microsoft.com/en-us/blog/feed/') },
    { name: 'Cloudflare', url: rss('https://blog.cloudflare.com/rss/') },
  ],

  // VC Partner Blogs & Essays
  vcblogs: [
    { name: 'Andreessen Horowitz', url: rss('https://a16z.com/feed/') },
    { name: 'Sequoia Capital', url: rss('https://www.sequoiacap.com/feed/') },
    { name: 'Paul Graham', url: rss('http://www.paulgraham.com/rss.xml') },
    { name: 'Elad Gil', url: rss('https://eladgil.com/feed/') },
    { name: 'Stratechery', url: rss('https://stratechery.com/feed/') },
  ],

  // Developer Community & Open Source
  dev: [
    { name: 'Hacker News', url: rss('https://news.ycombinator.com/rss') },
    { name: 'GitHub Blog', url: rss('https://github.blog/feed/') },
    { name: 'Dev.to', url: rss('https://dev.to/feed') },
    { name: 'Stack Overflow', url: rss('https://stackoverflow.blog/feed/') },
  ],
};

// Panel configuration for tech/startup variant
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Tech Map', enabled: true, priority: 1 },
  'live-news': { name: 'Tech Headlines', enabled: true, priority: 1 },
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
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
};

// Tech-focused map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
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

// Mobile defaults for tech variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
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

export const VARIANT_CONFIG: VariantConfig = {
  name: 'tech',
  description: 'Technology, startups & AI intelligence dashboard',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
