- **MapLibre internal crashes** — null-access in style layers, light, and placement that originate from the map chunk

A custom `beforeSend` hook provides second-stage filtering: it suppresses single-character error messages (minification artifacts), `Importing a module script failed` errors from browser extensions (identified by `chrome-extension:` or `moz-extension:` in the stack trace), and MapLibre internal null-access crashes when the stack trace originates from map chunk files.

**Chunk reload guard** — after deployments, users with stale browser tabs may encounter `vite:preloadError` events when dynamically imported chunks have new content-hash filenames. The guard listens for this event and performs a one-shot page reload, using `sessionStorage` to prevent infinite reload loops. If the reload succeeds (app initializes fully), the guard flag is cleared. This recovers gracefully from stale-asset 404s without requiring users to manually refresh.

**Storage quota management** — when a device's localStorage or IndexedDB quota is exhausted (common on mobile Safari with its 5MB limit), a global `_storageQuotaExceeded` flag disables all further write attempts across both the persistent cache (IndexedDB + localStorage fallback) and the utility `saveToStorage()` function. The flag is set on the first `DOMException` with `name === 'QuotaExceededError'` or `code === 22`, and prevents cascading errors from repeated failed writes. Read operations continue normally — cached data remains accessible, only new writes are suppressed.

Transactions are sampled at 10% to balance observability with cost. Release tracking (`worldmonitor@{version}`) enables regression detection across deployments.

---

## Tactical Integration Monolith (Docker)

The project unifies five major platforms into a single orchestrated ecosystem:

- **World Monitor**: Geopolitical intelligence and infrastructure tracking.
- **GeoSentinel**: Real-time flight/vessel tracking and AI-driven OSINT.
- **WireTapper**: Passive wireless signal intelligence (WiFi, Bluetooth, RF).
- **PentAGI**: Autonomous AI-powered security testing and vulnerability mapping.
- **PentestGPT**: LLM-driven interactive penetration testing assistant.

### Quick Start (Docker)

Ensure you have Docker and Docker Compose installed.
