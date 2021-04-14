// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal.

const biciclette = 
[
    {
        "nome": "Atala",  
        "peso": 10,     
    },

    {
        "nome": "Lombardo",
        "peso": 15,  
    },

    {
        "nome": "Trek",
        "peso": 20,  
    },

];



let biciLeggera = biciclette[0];

console.log(biciLeggera);

for( let i=0; i < biciclette.length; i++) {
    let thisBicicletta = biciclette[i];
        
    if( thisBicicletta.peso < biciLeggera.peso) {
        biciLeggera = thisBicicletta;
    }    
}

console.log("bici piu leggera:", biciLeggera);


alert(`La bici più leggera è ${biciLeggera.nome}.`);