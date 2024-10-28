import {cargar, escribirEnUnaLinea, comparar, intercambiar} from './helpers'


//Aplica el algoritmo Bubble sort
function burbuja(arreglo: number[], cantidad: number) {
    for (let i: number = 0; i < cantidad; i++) {
        for (let j: number = 0; j < (cantidad - 1); j++) {
            if (comparar(arreglo, j, j + 1) == 1) {
                intercambiar(arreglo, j, j + 1);
            }
        }
    }
}

let limite: number = 10;
let arreglo: number[] = new Array(limite);
cargar(arreglo, limite, 100);
escribirEnUnaLinea(arreglo, limite);
burbuja(arreglo, limite);
escribirEnUnaLinea(arreglo, limite);
;
//Lo unico que hay que hacer es cambiar un valor en la comparacion para determinar de que lado queda el numero.
