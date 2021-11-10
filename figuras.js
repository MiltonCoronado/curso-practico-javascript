// Codigo del cuadrado

function perimetroCuadrado(lado){
    return lado * 4;
} 

function areaCuadrado(lado){
    return lado * lado;
}




// Codigo del triangulo

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}

function areaTriangulo(base,altura){
    return (base * altura) / 2;
}




// Codigo del circulo

const PI = Math.PI;


function diametroCirculo(radio){
    return radio * 2;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio){
    return (radio * radio) * PI
}



//codigo Altura triangulo isosceles

function alturaTriangulo(trianguloGrandeLadoA,trianguloGrandeLadoB,trianguloGrandeLadoBase){
    if (trianguloGrandeLadoA != trianguloGrandeLadoB){
        console.error("este no es un triangulo isosceles.");
    }else {
        const trianguloPequenioLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenioLadoBase = trianguloGrandeLadoA;

        const trianguloPequenioLadoBCuadrado = trianguloPequenioLadoB * trianguloPequenioLadoB;
        const trianguloPequenioLadoBaseCuadrado = trianguloPequenioLadoBase * trianguloPequenioLadoBase;

        const trianguloPequenioLadoA = Math.sqrt(trianguloPequenioLadoBaseCuadrado - trianguloPequenioLadoBCuadrado);
        const trianguloGrandeAltura = trianguloPequenioLadoA;

        return trianguloGrandeAltura;
    }
}




// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}




