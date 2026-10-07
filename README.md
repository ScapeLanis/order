# Kassensystem – lokale GitHub-Pages-Version

Mobile Kasse für GitHub Pages, ohne Benutzerkonten und ohne externe Datenbank.

## Enthalten

- schnelle mobile Kassenoberfläche
- Warenkorb und Abschlussdialog
- Barzahlung mit **Passend + 1–2 sinnvollen Zahlvorschlägen**
- **Scheine und Münzen einzeln antippen** und dadurch den gegebenen Betrag zusammensetzen
- automatische Rückgeldberechnung
- empfohlene Rückgeld-Stückelung
- Tages- und Gesamtstatistik
- Verkaufsverlauf und letzten Verkauf stornieren
- CSV-Export sowie Backup/Import
- separates Menü in `menu.js`
- installierbar als PWA mit eigenem Kassensystem-Icon
- Offline-Cache über `sw.js`

## Welche Dateien brauchst du?

- `index.html` — die eigentliche Kassen-App. Pflicht.
- `menu.js` — dein zentrales Ausgangsmenü. Pflicht, wenn du das Menü separat verwalten willst.
- `manifest.webmanifest` — App-Name, Icon und Standalone-Darstellung. Für die Installation als App empfohlen.
- `sw.js` — Offline-Cache. Für die App-/Offline-Nutzung empfohlen.
- `icons/` — App-Symbole. Für die Installation als App empfohlen.

Nur als normale Webseite reichen `index.html` und `menu.js`. Für die Nutzung wie eine App auf dem Homescreen solltest du **alle Dateien** hochladen.

## Bezahlen

Beim Abschluss zeigt das Kassensystem zuerst **Passend** und zusätzlich ein oder zwei sinnvolle Beträge an. Bei 11,00 € zum Beispiel typischerweise 12,00 € und 15,00 €.

Darunter können Münzen und Scheine einzeln angetippt werden. Beispiel: Der Kunde gibt 12,00 € → `10 €` und `2 €` antippen. Mehrfaches Antippen ist möglich. Mit **Letzten Betrag** lässt sich die letzte Auswahl zurücknehmen, mit **Zurücksetzen** beginnt man wieder bei 0,00 €.

Der gegebene Betrag kann bei Bedarf weiterhin manuell eingegeben werden. Das Rückgeld und eine mögliche Stückelung werden sofort berechnet.

## Menü bearbeiten

Öffne `menu.js`. Ein Artikel sieht so aus:

```js
{ id: 'd2', name: 'Cola', price: 3.00, icon: '🥤', category: 'drinks', active: true }
```

Bedeutung:

- `id`: eindeutige, dauerhafte ID. Nach Möglichkeit später nicht ändern.
- `name`: Name auf der Kasse.
- `price`: Preis mit Punkt, z. B. `3.50`.
- `icon`: Emoji/Symbol.
- `category`: `food`, `drinks` oder `other`.
- `active`: `true` = verfügbar, `false` = ausverkauft.

Neue Artikel fügst du als weitere Zeile innerhalb von `window.KASSENSYSTEM_MENU = [ ... ];` ein.

### Änderungen aus menu.js auf einem bestehenden Gerät übernehmen

Die App speichert Menüänderungen lokal im Browser. Wenn du `menu.js` auf GitHub geändert hast, gehe auf dem Gerät zu:

**Menü → Menü-Datei neu laden → Menü aus menu.js übernehmen**

Die Verkaufsstatistik bleibt erhalten.

## Als App installieren

Das Projekt enthält eigene Icons in 192×192 und 512×512 sowie ein Maskable-Icon für Android. Dadurch erscheint beim Installieren ein eigenes grünes **Kassensystem-Symbol mit Kassenmotiv** statt eines generischen Browser-Icons.

- iPhone/iPad: in Safari **Teilen → Zum Home-Bildschirm**.
- Android: in Chrome **App installieren** bzw. **Zum Startbildschirm hinzufügen**.

Wenn eine ältere Version bereits installiert war und noch der alte Name oder das alte Icon angezeigt wird, die Homescreen-App einmal entfernen und die aktuelle Seite erneut hinzufügen.

## GitHub Pages

1. Lade den kompletten Inhalt dieses Ordners in dein Repository hoch.
2. GitHub: **Settings → Pages**.
3. **Deploy from a branch**, Branch **main**, Ordner **/(root)** wählen.
4. Speichern.

## Datenspeicherung

Verkäufe und Statistiken liegen ausschließlich im Browser dieses Geräts (`localStorage`). Bei mehreren Handys hat jedes Gerät seine eigene Statistik.


## Bargeld-Auswahl
Im Bezahlfenster stehen zuerst stilisierte Euro-Scheine (5–200 €), danach runde Euro-Münzen (2 € bis 1 Cent). Die Darstellung orientiert sich an den typischen Farben, verwendet aber keine exakten Reproduktionen offizieller Banknotenmotive.
