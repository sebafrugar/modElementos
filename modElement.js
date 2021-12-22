


// metodo split

let cliente = 'Juan Carlos;29;jcarlos@gmail.com';
let arregloCliente = cliente.split(';');
console.log(arregloCliente);

let filtros = "Comida china rm nunoa";
let filtross = filtros.split(" ");
console.log(filtross);

let casa = "mesa silla comedor";
let casas = casa.split(" ");
console.log(casas);

// metodo join

let dirección = ["Rebeca Matte 18","Santiago"];
console.log(dirección.join(", "));

let pokemon = ["pikachu","ditto","bulbasaur"];
console.log(pokemon.join("-"))

// metodo map 

let clientess = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 17},
    {nombre: 'Karla', edad: 27},
    ];

cliente_modificado = clientess.map(function(cliente){
    if(cliente.edad >= 18){
        cliente.adulto = true;
    }else{
        cliente.adulto = false;
    }
    return cliente;
});

console.log(cliente_modificado);

let numeros = [10,15,20,25,30];
numeros_nuevo = numeros.map(function(num) {
    return num * 2;
});
console.log(numeros_nuevo);

let num = [1,2,3,5,8,13,21];
num_nuevos = num.map(function(number){
    return number * number
});
console.log(num_nuevos)

// metodo reduce

let deudas = [10000, 5000, 50000, 35000];
let sumatoriaDeudas = deudas.reduce(function(contador, deuda){
return contador + deuda;
});
console.log(sumatoriaDeudas);

let experiencias = [
    {
    titulo: "Practica",
    anos: 1,
    },
    {
    titulo: "Programador Junior",
    anos: 2,
    },
    {
    titulo: "Programador Senior",
    anos: 4,
    },
    {
    titulo: "Jefe de proyecto",
    anos: 5,
    }
    ];

let totalexp = experiencias.reduce(function(acomulador , experiencia){
    return acomulador + experiencia.anos;
},0);
console.log(totalexp);

// metodo filter

let cliente2 = [
    {nombre: 'Juan', edad: 28},
    {nombre: 'Carlos', edad: 17},
    {nombre: 'Karla', edad: 27},
    ];

let adultos = cliente2.filter(function(cliente2){
    return cliente2.edad >= 18
    });
    console.log(adultos);
        
let experiencia2 = [
        {
        titulo: "Practica",
        anos: 1,
        },
        {
        titulo: "Programador Junior",
        anos: 2,
        },
        {
        titulo: "Programador Senior",
        anos: 4,
        },
        {
        titulo: "Jefe de proyecto",
        anos: 5,
        }
    ];

let experienciamin = experiencia2.filter(function(experiencia2){
    return experiencia2.anos > 2 
});
console.log(experienciamin)

// metodo concat 
        

let autosCompactos = [
    {marca: 'Toyota', modelo: 'Corolla', combustible: 'Gasolina'},
    {marca: 'Mazda', modelo: '3', combustible: 'Gasolina'},
    {marca: 'Honda', modelo: 'Civic', combustible: 'Gasolina'},
    {marca: 'Bmw', modelo: '116d', combustible: 'Diesel'},
    ];
let autosDeportivos = [
    {marca: 'Opel', modelo: 'Astra OPC', combustible: 'Gasolina'},
    {marca: 'Renault', modelo: 'Megane RS', combustible: 'Gasolina'},
    {marca: 'Mitsubishi', modelo: 'Lancer Evo', combustible: 'Gasolina'},
    ];

let autos = autosCompactos.concat(autosDeportivos);
console.log(autos)