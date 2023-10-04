const saludar = () => 'hola';
const division = (a, b) => a / b;
const miNombre = (nombre) => `Mi nombre es ${nombre}`;
const test2 = () => console.log('Funcion test 2 ejecutada');
const test1 = (callback) => callback();

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

const genteMayor = [];
gente.forEach(persona => persona.edad > 25 && genteMayor.push(persona))
const empJ = [];
gente.forEach(persona => persona.nombre[0] == 'J' && empJ.push(persona));

let mapGenteMayor = gente.map(persona => persona.edad > 25 && persona.nombre);
console.log(mapGenteMayor);
let mapEmpJ = gente.map(persona => persona.nombre[0] == "J" && persona.nombre)
console.log(mapEmpJ);
const numbers = [4, 5, 6, 7, 8, 9, 10];
const numbersCuadrado = numbers.map(number => number ** number)
// console.log(numbers2)

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersImp = numbers2.filter(number => number % 2)
// console.log(numbersImp)
const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
];
const vegetariano = foodList.filter(plato => plato.isVeggie).map(plato => `Que rico ${plato.name} voy a comer!`)
console.log(vegetariano)

const numeros3 = [39, 2, 4, 25, 62];
const numMultiplo = numeros3.reduce((a, b) => a * b)
console.log(numMultiplo)

const staff = [
    {
        name: "Pepe",
        role: "The Boss",
        hobbies: ["leer", "ver pelis"],
    },
    {
        name: "Ana",
        role: "becaria",
        hobbies: ["nadar", "bailar"],
    },
    {
        name: "Luis",
        role: "programador",
        hobbies: ["dormir", "comprar"],
    },
    {
        name: "Carlos",
        role: "secretario",
        hobbies: ["futbol", "queso"],
    },
];

const hobbies = staff.map(persona => `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`)
console.log(hobbies)