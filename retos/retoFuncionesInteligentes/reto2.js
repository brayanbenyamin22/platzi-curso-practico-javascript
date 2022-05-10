function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickButtonPriceDiscount(){
    const coupons = ["verano", "invierno", "bfday"];

    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupons = document.getElementById("InputCoupons");
    const couponsValue = inputCoupons.value;
    let discountValue;
    switch(couponsValue){
        case coupons[0]:
            discountValue = 10;
        break;
        case coupons[1]:
            discountValue = 25;
        break;
        case coupons[2]:
            discountValue = 30;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);  
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento son: $" +precioConDescuento;
}