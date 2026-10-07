# Order Tally – lokale Version

Mobile Kasse für GitHub Pages, komplett ohne Benutzerkonten und ohne externe Datenbank.

## Enthalten
- Cleanes Dark-UI für Handy, Tablet und Desktop
- Kasse / Statistik / Menü als klare Hauptnavigation
- Smarte Bargeld-Schnelltasten: Passend, nächster Euro, 5er/10er-Schritte und passende Scheine
- Freie Eingabe des gegebenen Betrags
- Automatische Rückgeldberechnung
- Empfohlene Rückgeld-Stückelung mit Euro-Scheinen und -Münzen
- Tages- und Gesamtstatistik
- Letzten Verkauf stornieren
- Verkaufsverlauf
- Artikel als „Ausverkauft“ markieren
- CSV-Export
- JSON-Backup und Import
- PWA/Offline-Unterstützung inkl. App-Icon
- Keine Anmeldung, kein Supabase, keine externe Datenbank

## GitHub Pages
1. Lade den kompletten Inhalt dieses Ordners in dein Repository hoch.
2. Wichtig: `index.html`, `manifest.webmanifest`, `sw.js` und der Ordner `icons` müssen im selben Root liegen.
3. GitHub: **Settings → Pages**.
4. **Deploy from a branch**, Branch **main**, Ordner **/(root)** wählen.
5. Speichern.

## Datenspeicherung
Menü, Verkäufe und Statistiken werden nur im Browser dieses Geräts gespeichert (`localStorage`). Die App funktioniert damit auch ohne externe Datenbank.

Wenn mehrere Handys verwendet werden, hat jedes Gerät seine eigene Statistik. Über **Backup speichern** kannst du die Daten sichern oder auf ein anderes Gerät übertragen.
