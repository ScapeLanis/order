/*
  Zentrales Ausgangsmenü für das Kassensystem.

  Bearbeiten:
  - name: Anzeigename
  - price: Preis mit Punkt als Dezimaltrennzeichen, z. B. 3.50
  - icon: Emoji oder kurzes Symbol
  - category: "food", "drinks" oder "other"
  - active: true = verfügbar, false = ausverkauft

  Wichtig: Jede id muss eindeutig und möglichst dauerhaft gleich bleiben,
  damit Verkaufsstatistiken einem Artikel korrekt zugeordnet werden können.
*/
window.KASSENSYSTEM_MENU = [
  { id: 'f1', name: 'Hot Dog', price: 4.50, icon: '🌭', category: 'food',   active: true },
  { id: 'f2', name: 'Pommes',  price: 3.50, icon: '🍟', category: 'food',   active: true },
  { id: 'f3', name: 'Burger',  price: 7.50, icon: '🍔', category: 'food',   active: true },
  { id: 'f4', name: 'Brezel',  price: 2.50, icon: '🥨', category: 'food',   active: true },

  { id: 'd1', name: 'Wasser',  price: 2.50, icon: '💧', category: 'drinks', active: true },
  { id: 'd2', name: 'Cola',    price: 3.00, icon: '🥤', category: 'drinks', active: true },
  { id: 'd3', name: 'Spezi',   price: 3.00, icon: '🥤', category: 'drinks', active: true },
  { id: 'd4', name: 'Kaffee',  price: 2.80, icon: '☕', category: 'drinks', active: true }
];
