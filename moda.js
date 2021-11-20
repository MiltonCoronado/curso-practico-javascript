const lista1 = [
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];

const lista1Count = {};

lista1.map(
    function (elemento) {
        if (lista1Count[elemento]){
            lista1Count[elemento] += 1;//le suma i++ si el elemento ya existe
        }
        else {
            lista1Count[elemento] = 1;//crea el objeto indicando que aparecio una vez.        
        }
    }
);


const lista1Array = Object.entries(lista1Countelemento    function (a,B) {
        return a[1] - B[1];
    }
);


const moda = lista1Array[lista1Array.length - 1];