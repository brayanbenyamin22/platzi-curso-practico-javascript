function alturaTI(lado1, lado2, base){
    if(lado1 === lado2 && (lado1 != base || lado2 != base)){
        const lado = lado1;
        const resultado = Math.sqrt(Math.pow(lado, 2) - (Math.pow(base, 2)/ 4)); //Formula para calcular TI
        const redondeado = resultado.toFixed(2); //toFixed redondea los numeros decimales
        return redondeado; //Resultado redondeado 
    }
    else {
        alert("Vuelva a intentarlo nuevamente");
    }
}
function CalcularAlturaTI(){
    const input1 = document.getElementById("InputLado1");
    const input2 = document.getElementById("InputLado2");
    const input3 = document.getElementById("InputBase");
    const lado1 = input1.value;
    const lado2 = input2.value;
    const base = input3.value;
    const resultado = alturaTI(lado1, lado2, base);
    alert(resultado);
    
}