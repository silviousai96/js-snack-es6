// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. 
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. 
// Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. 
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console.


//Funzione per generare numeri casuali.
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


const squadre = 
[
    {
        "nome": "Juventus",  
        "punti": 0,     
        "falli": 0,
    },

    {
        "nome": "Inter",
        "punti": 0,     
        "falli": 0, 
    },

    {
        "nome": "Milan",
        "punti": 0,     
        "falli": 0, 
    },

    {
        "nome": "Napoli",
        "punti": 0,     
        "falli": 0,  
    },
];

const arrayFalli = [];

for( let i=0; i < squadre.length; i++) {

    let thisSquadra = squadre[i];
    thisSquadra.punti = getRndInteger(0, 100);
    thisSquadra.falli = getRndInteger(0, 100);

    
    const {nome, falli} = thisSquadra;

    arrayFalli.push({nome, falli});
    
}


console.log(squadre);
console.log(arrayFalli);
