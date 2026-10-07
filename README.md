# Order Tally+

Mobile-first Bestell-/Kassenoberfläche für GitHub Pages.

## Funktionen

- große Touch-Flächen für Handy und Tablet
- Kategorien für Essen und Getränke
- Warenkorb mit + / - Mengensteuerung
- großer **Abschließen**-Button
- abgeschlossene Bestellungen fließen automatisch in die Statistik
- Statistik: Bestellanzahl, verkaufte Artikel, Umsatz pro Artikel und Gesamtumsatz
- CSV-Export
- Menü direkt im Browser editierbar
- Menü, Warenkorb-Konfiguration und Statistik via `localStorage` auf dem Gerät gespeichert
- keine Abhängigkeiten, kein Build-Schritt — eine einzelne `index.html` reicht für GitHub Pages

## Installation auf GitHub Pages

Die vorhandene `index.html` im Pages-Repository durch diese Datei ersetzen und committen/pushen.

## Wichtig zur Statistik

Diese Version speichert die Verkaufsdaten **lokal im Browser des jeweiligen Geräts**. Das ist ideal, wenn an einem festen Handy/Tablet kassiert wird und kein Server nötig sein soll.

Wenn mehrere Geräte gleichzeitig verkaufen und eine gemeinsame Statistik benötigt wird, muss ein Backend ergänzt werden (z. B. Supabase, Firebase oder eine kleine API/DB).
