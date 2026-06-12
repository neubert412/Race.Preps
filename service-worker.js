self.addEventListener("install", () => {
  console.log("Racepreps PWA installiert");
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", () => {
  // optional: später Offline Cache
});
