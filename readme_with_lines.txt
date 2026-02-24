  1210
  1211	- **Third-party WebView injections** — Twitter, Facebook, and Instagram in-app browsers inject scripts that reference undefined variables (`CONFIG`, `currentInset`)
  1212	- **Browser extensions** — Chrome/Firefox extensions that fail `importScripts` or violate CSP policies
  1213	- **WebGL context loss** — transient GPU crashes in MapLibre/deck.gl that self-recover
  1214	- **iOS Safari quirks** — IndexedDB connection drops on background tab kills, `NotAllowedError` from autoplay policies
  1215	- **Network transients** — `TypeError: Failed to fetch`, `TypeError: Load failed`, `TypeError: cancelled`
  1216	- **MapLibre internal crashes** — null-access in style layers, light, and placement that originate from the map chunk
  1217
  1218	A custom `beforeSend` hook provides second-stage filtering: it suppresses single-character error messages (minification artifacts), `Importing a module script failed` errors from browser extensions (identified by `chrome-extension:` or `moz-extension:` in the stack trace), and MapLibre internal null-access crashes when the stack trace originates from map chunk files.
  1219
  1220	**Chunk reload guard** — after deployments, users with stale browser tabs may encounter `vite:preloadError` events when dynamically imported chunks have new content-hash filenames. The guard listens for this event and performs a one-shot page reload, using `sessionStorage` to prevent infinite reload loops. If the reload succeeds (app initializes fully), the guard flag is cleared. This recovers gracefully from stale-asset 404s without requiring users to manually refresh.
  1221
  1222	**Storage quota management** — when a device's localStorage or IndexedDB quota is exhausted (common on mobile Safari with its 5MB limit), a global `_storageQuotaExceeded` flag disables all further write attempts across both the persistent cache (IndexedDB + localStorage fallback) and the utility `saveToStorage()` function. The flag is set on the first `DOMException` with `name === 'QuotaExceededError'` or `code === 22`, and prevents cascading errors from repeated failed writes. Read operations continue normally — cached data remains accessible, only new writes are suppressed.
  1223
  1224	Transactions are sampled at 10% to balance observability with cost. Release tracking (`worldmonitor@{version}`) enables regression detection across deployments.
  1225
  1226	---
  1227
  1228	## Tactical Integration Monolith (Docker)
  1229
  1230	The project unifies five major platforms into a single orchestrated ecosystem:
  1231
  1232	- **World Monitor**: Geopolitical intelligence and infrastructure tracking.
  1233	- **GeoSentinel**: Real-time flight/vessel tracking and AI-driven OSINT.
  1234	- **WireTapper**: Passive wireless signal intelligence (WiFi, Bluetooth, RF).
  1235	- **PentAGI**: Autonomous AI-powered security testing and vulnerability mapping.
