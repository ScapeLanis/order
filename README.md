# Order Tally Clean

Eine mobile-first Kasse für GitHub Pages.

## Enthalten
- Cleanes Dark-UI für Handy/Tablet/Desktop
- Kasse / Statistik / Menü als klare Hauptnavigation
- Smarte Bargeld-Schnelltasten + automatische Rückgeldberechnung
- Tages- und Gesamtstatistik
- Letzten Verkauf stornieren
- Verkaufsverlauf
- Artikel als "Ausverkauft" markieren
- CSV-Export
- JSON-Backup und Import
- PWA/Offline-Unterstützung inkl. App-Icon
- Übernimmt bestehende Order-Tally+-Daten, weil dieselben localStorage-Keys verwendet werden

## GitHub Pages
Alle Dateien und den Ordner `icons` in die Root deines GitHub-Pages-Repositories hochladen. Danach unter Settings > Pages `main` und `/ (root)` veröffentlichen.

Hinweis: Menü und Statistiken sind weiterhin lokal pro Gerät gespeichert. Für mehrere Kassen mit gemeinsamer Statistik wäre ein Backend (z.B. Supabase/Firebase) der nächste Schritt.
