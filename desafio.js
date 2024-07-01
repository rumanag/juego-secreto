
// 1. LISTA VACIA
let lengProg = []

// 2. LISTA CARGADA CON ALGUNOS LENGUAJES DE PROGRAMACIÓN

lengProg = ["JavaScript","C","C++","Kotlin", "Python"];

// 3. ADICIONAR A LA LISTA

lengProg.push("Java", "Rubi", "GoLang");

console.log(`Longitud del array: ${lengProg.length}`);

//4. MOSTRAR POR CONSOLA TODOS LOS ELEMENTOS.


function showLengProg(){

    for (i=0; i<lengProg.length; i++) {
       
        console.log(`${lengProg[i]}, elemento ${i+1}, en posición: ${i}`)
    }
    return    
}

showLengProg()

//5. MOSTRAR TODOS LOS ELEMENTOS EN ORDEN INVERSO



function showLengProgInverse(){
  
    
    for (i1=lengProg.length-1; i1>=0; i1--){
       
        console.log(`${lengProg[i1]}, elemento ${i1+1}, en posición${i1}`);

    }
}
showLengProgInverse() 



// 6. calcular el promedio de los elementos en una 
//    lista de numeros que entran a la función como parámetro


const miListaDeEntrada= prompt("digitar los numeros con comas dos");
const miListaArrayString = miListaDeEntrada.split(',');
const miListaArrayNumber= miListaArrayString.map(Number);


function PromedioLista(milistaArrayNumber){
   
    miListaArrayNumberWork = miListaArrayNumber;
    const initialvalue = 0;
    const sumWithInitial = miListaArrayNumberWork.reduce((accumulator, currentValue) => accumulator + currentValue, initialvalue,);
    console.log(`la suma total es: " ${sumWithInitial}; la cantidad de ítems: ${miListaArrayNumberWork.length}`);
    promedioLista= sumWithInitial/miListaArrayNumberWork.length;
    return;
}

PromedioLista();
alert(`El Promedio Aritmético es : ${promedioLista}`);

// 7. MOSTRAR EN LA CONSOLA EL NUMERO MÁS GRANDE Y EL NUMERO MAS PEQUEÑO DE UNA LISTA

var miListaNew = miListaArrayNumber;

function numbersHightShort() {
  
    miListaArrayNumberWork = miListaArrayNumber.map(Number);
     
    console.log (`El tipo de numero es : ${typeof(miListaArrayNumberWork[0])}`);

    largestNumber= Math.max(...miListaArrayNumberWork);
    console.log (`El número mayor es : ${largestNumber}`);

    lowestNumber = Math.min(...miListaArrayNumberWork);
    console.log (`El número menor es : ${lowestNumber}`);
    return;
}
numbersHightShort();


//8. devolver la suma de todos los elementos de una lista

function sumarElementos(){

    miListaArrayNumberWork = miListaArrayNumber.map(Number);
    sumValores = 0;
    for (i=0; i<miListaArrayNumberWork.length; i++) {
        sumValores = sumValores+miListaArrayNumberWork[i];
    }
      
}
sumarElementos();

console.log('Sumatoria de elementos :'+sumValores)

// 9. DEVOLVER LA POSICIÓN EN LA LISTA DE UN ELEMENTOS PASADO COMO PARÁMETRO. -1 SINO NO EXISTE
       nota: no entendí cómo funciona1!!!!!!!!!!!!
/*
const valorIngresado = prompt("Por favor digita el número a evaluar");
const valorParameter = parseInt(valorIngresado);

console.log(`Este es el valor de mi lista number antes de la funcion ${miListaArrayNumber[1]}`);

miListaBase =  miListaArrayNumber;

function findPosition(miListaArrayNumber,valorParameter) {

    const miListaBase = miListaArrayNumber;

    //console.log(`ENTRA A FIND POSITION miListaArrayNumber como miListaBase: ${miListaBase}`);


 //   console.log(`${miListaArrayNumber[1]}`);

    // const miListaW = miListaArrayNumber.map(Number);
    const paramenterW = valorParameter
    
    for(let i=0; i < miListaBase.length; i++) {

        if (miListaBase[i] === paramenterW){
            return i;
        }    
    }
    return -1;
    }
findPosition()

*/ 

let lista = [1,2,3,4,5,6,7,8,9,10];
let elemento = 2

function encontrarIndiceElemento(lista, elemento) {
    for (let i = 0; i < lista.length; i++) {
      if (lista[i] === elemento) {
        return i; // Retorna el índice del elemento encontrado
      }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
  }
  
console.log(i)