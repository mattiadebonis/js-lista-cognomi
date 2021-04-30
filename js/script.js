// variabili
var posizioneUmana = 0;
var array = ["Bianchi", "Verdi", "Rossi", "Neri", "Gialli"];
var cognomeCorretto = ""

// 1. chiedi all'utente il cognome
var cognome = prompt("Inserisci il tuo cognome");

// formatta il cognome con iniziale maiuscola
for (var i=0; i<cognome.length; i++){
    console.log(cognome[i])
    if (i == 0){
        cognomeCorretto = cognome[i].toUpperCase();
    }else{
        cognomeCorretto = cognomeCorretto + cognome[i];  
    }
}

// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
array.push(cognomeCorretto);

// 3. stampa la lista ordinata alfabeticamente
array.sort();

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
for (var a=0; a<array.length; a++){
    document.getElementById("elenco_cognomi").innerHTML += "<li>"+array[a] +"</li>";
    if (array[a] == cognomeCorretto){
        posizioneUmana = a + 1;
        document.getElementById("posizione_umana").innerHTML = "Sei in " + posizioneUmana +"° posizione.";
    }
}