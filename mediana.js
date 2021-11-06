function calcularMediaAritmetica(lista){
    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++){
    sumaLista = sumaLista + lista[i];
}

const promedioLista = sumaLista / lista.length;

return promedioLista;

};


const lista1 = [
    100,
    200,
    180,
    400000000,
    500,
];

const mitadLista1 = parseInt(lista1.length / 2);
  
function esPar(numero){
    if (numero % 2 === 0){ // el modulo en programacion es el residuo de una divicion!!!!
        return true
    }
    else {
        return false
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1];
    const elemento2 = lista1 [mitadLista1 - 1];
   
    const promedioElemento1y2 = calcularMediaAritmetica([elemento1,elemento2,]);

    mediana = promedioElemento1y2;

}
else {
    mediana = lista1[mitadLista1];
    //posicion mitadlista1 dentro de lista1
    //->mediana
}