const arrayNombres = [
  "Leonel",
  "Lucia",
  "Lorena",
  "Luis",
  "Angel",
  "Daniel",
  "Carlos",
  "Miguel",
  "Sara",
  "Valentina",
  "Jorge",
  "Andres",
  "Kevin",
  "Diana",
  "Camila",
  "Mateo",
  "Sebastian",
  "Julian",
  "Natalia",
  "Brayan"
];
//el break lo que hace es salirse de el bloque donde esta ejecutando se.
for (let i = 0; i < arrayNombres.length; i++) {
    let letra = 'a'
    if (arrayNombres[i][0] === letra.toUpperCase()){
        console.log(`EL nombre con la palabra es : ${arrayNombres[i]}`)
          console.log('--------------------')
        break;
    }else{
        console.log(arrayNombres[i])
      
    }
    
};
//continue lo que hace es como saltarlo 

for(let i = 0; i < arrayNombres.length; i++){
    if(arrayNombres[i] === 'Leonel'){
        continue;
    }
        console.log(arrayNombres[i]);
};