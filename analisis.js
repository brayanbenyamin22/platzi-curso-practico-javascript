//Helpers
function esPar(numero) {
    return (numero % 2 ===0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora Mediana 
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana General
const salariosPa = panama.map(
    function (persona) {
        return persona.salary;
    }
);

const salariosPaSorted = salariosPa.sort(
    function (salaryA, salaryB) {
        return salaryA[1] - salaryB[1];
    }
);

const medianaGeneralPa =  medianaSalarios(salariosPaSorted);


//Mediana del top 10%
const spliceStart = (salariosPaSorted.length * 90) / 100;
const spliceCount = salariosPaSorted.length - spliceStart;

const salariosPaTop10 = salariosPaSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Pa =  medianaSalarios(salariosPaTop10);

console.log({
    medianaGeneralPa,
    medianaTop10Pa,
});