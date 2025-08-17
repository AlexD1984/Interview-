
# Interview-Training – Kleeschulte (GitHub Pages)

Static Web-App mit PWA-Manifest (installierbar).

## Struktur
- `index.html` – App-Oberfläche (aus deiner Datei übernommen)
- `assets/icon.png`, `assets/icon-192.png`, `assets/icon-512.png` – App-Icons
- `manifest.webmanifest` – PWA-Manifest
- `sw.js` – einfacher Service Worker (Cache-first)

## Deploy auf GitHub Pages
1. Neues Repository erstellen (z. B. **interview-training**).
2. Diese ZIP entpacken und den Inhalt committen/pushen **oder** die ZIP direkt über die GitHub-Weboberfläche hochladen.
3. In den Reiter **Settings → Pages** gehen:
   - **Build and deployment**: *Deploy from a branch*
   - Branch: `main` (oder `master`), Ordner: `/ (root)`
4. Nach dem Build ist die Seite unter `https://<dein-user>.github.io/interview-training/` erreichbar.

## Als App installieren
- Nach dem Öffnen erscheint im Browser (Chrome/Edge/Android/iOS Safari) ein *Installieren/Add to Home Screen*-Prompt.
- Alternativ: Browser-Menü → **Installieren** / **Zum Startbildschirm hinzufügen**.

Viel Erfolg! 🎯
