"use strict";
class User {
    constructor(nome, cognome) {
        this.nome = nome;
        this.cognome = cognome;
        this.credito = 0;
        this.numeroChiamate = 0;
    }
    ricarica(importo) {
        this.credito += importo;
    }
    chiamata(minuti) {
        const costoMinuto = 0.20;
        const costoChiamata = minuti * costoMinuto;
        if (this.credito >= costoChiamata) {
            this.credito -= costoChiamata;
            this.numeroChiamate += minuti;
        }
        else {
            console.log("credito insufficiente");
        }
    }
    chiamata404() {
        return this.credito;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChimate() {
        this.numeroChiamate = 0;
    }
}
const utente1 = new User("Riccardino", "ciufolo");
utente1.ricarica(10);
console.log(utente1.chiamata404(), "credito residuo"); // Stampa il credito residuo: 10
utente1.chiamata(30); //chiamata di trenta minuti
console.log(utente1.chiamata404(), "credito dopo la chiamata"); //credito dopo la chiamata
console.log(utente1.getNumeroChiamata()); // Stampa il numero di minuti di chiamata effettuati
utente1.azzeraChimate(); //azzera numero chiamate
console.log(utente1.getNumeroChiamata()); //numero chiamate post azzeramento
/////////////////////////////////////
const utente2 = new User("Riccardino", "ciufolo");
utente2.ricarica(45);
console.log(utente2.chiamata404(), "credito residuo"); // Stampa il credito residuo: 10
utente2.chiamata(30); //chiamata di trenta minuti
console.log(utente2.chiamata404(), "credito dopo la chiamata"); //credito dopo la chiamata
console.log(utente2.getNumeroChiamata()); // Stampa il numero di minuti di chiamata effettuati
utente2.azzeraChimate(); //azzera numero chiamate
console.log(utente2.getNumeroChiamata()); //numero chiamate post azzeramento
