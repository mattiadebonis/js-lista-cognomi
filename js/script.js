// 1. chiedi all'utente il cognome

var cognome = prompt("Inserisci il tuo cognome");
var array = ["Bianchi", "Verdi", "Rossi", "Neri", "Gialli"];
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'

console.log(array);

array.push(cognome);

console.log(array);

// 3. stampa la lista ordinata alfabeticamente

array.sort();
console.log(array);
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
