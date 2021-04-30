// 1. chiedi all'utente il cognome

var cognome = prompt("Inserisci il tuo cognome");
var cognomeCorretto = ""
var array = ["Bianchi", "Verdi", "Rossi", "Neri", "Gialli"];
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'

console.log(array);

for (i=0; i<cognome.length; i++){
    console.log(cognome[i])
    if (i == 0){
        cognomeCorretto = cognome[i].toUpperCase();
    }else{
        cognomeCorretto = cognomeCorretto + cognome[i];  
    }
}

array.push(cognomeCorretto);

// 3. stampa la lista ordinata alfabeticamente

array.sort();
console.log(array);
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova



// for (i=0; i<cognome.length; i++){
//     console.log(cognome[i])
//     if (i == 0){
//         if (cognome[i] == cognome[i].toUpperCase){
//             cognome = cognome + cognome[i];
//         }else{
//             cognome = cognome + cognome[i].toUppercase;
//         }
//     }else{
//         cognome = cognome + cognome[i].toLowercase;
//     }

// }