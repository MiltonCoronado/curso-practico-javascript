// calcular precio con descuento.

function calcularPrecioConDescuento(precio,descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}



function onClickButtonPriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const DiscountValue = inputDiscount.value;    
    

    const precioConDescuento = calcularPrecioConDescuento(priceValue,DiscountValue);
    

    const resultP = document.getElementById("resultP");
    resultP.innerText = `el precio de tu producto es ${precioConDescuento} $`
};