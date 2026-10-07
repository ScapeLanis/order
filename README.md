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
- **Tagesabschluss exportieren und mehrere Kassen zu einer Gesamtstatistik zusammenführen**
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

Darunter können zuerst Scheine und danach Münzen einzeln angetippt werden. Beispiel: Der Kunde gibt 12,00 € → `10 €` und `2 €` antippen. Mehrfaches Antippen ist möglich. Mit **Letzte Eingabe löschen** lässt sich die letzte Auswahl zurücknehmen, mit **Alles zurücksetzen** beginnt man wieder bei 0,00 €.

Die manuelle Texteingabe wurde entfernt, damit der Bezahlbildschirm vollständig auf eine Handy-Seite passt. **Zu zahlen, Geld-Auswahl, Rückgeld, empfohlene Stückelung und Verkauf abschließen** bleiben gleichzeitig sichtbar.

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

## Datenspeicherung und Gesamtstatistik

Verkäufe liegen weiterhin ausschließlich lokal im Browser des jeweiligen Geräts (`localStorage`). Es gibt keine externe Datenbank und keine Benutzerkonten.

Für mehrere Handys kannst du die Statistiken trotzdem zusammenführen:

1. Auf jedem Kassengerät unter **Statistik → Tagesabschluss exportieren** eine JSON-Datei erzeugen.
2. Beim ersten Export vergibst du einmal einen Kassennamen, z. B. `Getränke 1` oder `Essen`. Dieser Name wird auf dem Gerät gespeichert.
3. Auf einem Hauptgerät unter **Statistik → Abschlüsse zusammenführen** die Abschlussdateien auswählen. Du kannst mehrere Dateien gleichzeitig markieren.
4. Die Ansichten **Heute** und **Gesamt**, Top-Artikel und der CSV-Export enthalten danach lokale und importierte Verkäufe gemeinsam.

Jede Bestellung besitzt eine eindeutige Herkunft. Wenn dieselbe Abschlussdatei erneut importiert wird oder ein späterer Export derselben Kasse bereits bekannte Verkäufe enthält, werden diese **nicht doppelt gezählt**. Nur neue Bestellungen werden ergänzt.

**Wichtig:** „Letzten Verkauf stornieren“ betrifft nur Verkäufe, die auf dem aktuellen Gerät entstanden sind. Importierte Abschlüsse bleiben unverändert.


## Bargeld-Auswahl
Im Bezahlfenster stehen zuerst stilisierte Euro-Scheine (5–200 €), danach runde Euro-Münzen (2 € bis 1 Cent). Die Darstellung orientiert sich an den typischen Farben, verwendet aber keine exakten Reproduktionen offizieller Banknotenmotive.
## Vollbild-Barzahlung

Die Barzahlung nutzt jetzt den kompletten Bildschirm. Rückgeld und empfohlene Stückelung werden deutlich größer dargestellt; Scheine und Münzen sind visuell getrennt.
