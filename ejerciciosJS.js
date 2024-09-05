//Variables y Tipos de Datos
const nombre = "Juan";
const edad = 20;
const puedoConducir = false;

console.log(nombre);
console.log(typeof nombre);

console.log(edad);
console.log(typeof edad);

console.log(puedoConducir);
console.log(typeof puedoConducir);

//Operadores Aritméticos
const numero1 = 20;
const numero2 = 40;

console.log(numero1 + numero2);

console.log(numero1 - numero2);

console.log(numero1 * numero2);

console.log(numero1 / numero2);

console.log(numero1 % numero2);

//Operadores de asignación y comparación
const numero3 = 15;
const numero4 = 20;
const numero5 = '25';

if (numero3 >= numero4) {
	console.log("El %d es mayor o igual al %d", numero3, numero4);
}

if (numero3 <= numero4) {
	console.log("El %d es menor o igual al %d", numero3, numero4);
}

if (numero3 < numero5) {
	console.log("El %d es menor que " + numero5, numero3);
}

if (numero5 < numero4) {
	console.log("El " + numero5 + " es menor que %d", numero4);
}

if (numero3 != numero5) {
	console.log("El %d distinto del " + numero5, numero3);
}

if (numero3 == numero4) {
	console.log("El %d igual al %d", numero3, numero4);
}
//Condicionales
const numero6 = 10;
const numero7 = 20;
const numero8 = 30;

if (numero6 > numero7 && numero6 > numero8) {
	console.log("El numero %d es el mayor", numero6);
}
if (numero7 > numero6 && numero7 > numero8) {
	console.log("El numero %d es el mayor", numero7);
}
if (numero8 > numero6 && numero8 > numero7) {
	console.log("El numero %d es el mayor", numero8);
}


if (numero6 < numero7 && numero6 < numero8) {
	console.log("El numero %d es el menor", numero6);
}
if (numero7 < numero6 && numero7 < numero8) {
	console.log("El numero %d es el menor", numero7);
}
if (numero8 < numero6 && numero8 < numero7) {
	console.log("El numero %d es el menor", numero8);
}

if (numero6 % 2) {
	console.log("El numero6 es impar");
} else {
	console.log("El numero6 es par");
}

if (numero7 % 2) {
	console.log("El numero7 es impar");
} else {
	console.log("El numero7 es par");
}

if (numero8 % 2) {
	console.log("El numero8 es impar");
} else {
	console.log("El numero8 es par");
}

if (numero6 % 5 == 0) {
	console.log("El numero6 es multiplo de 5");
} else {
	console.log("El numero6 no es multiplo de 5");
}

if (numero7 % 5 == 0) {
	console.log("El numero7 es multiplo de 5");
} else {
	console.log("El numero7 no es multiplo de 5");
}

if (numero8 % 5 == 0) {
	console.log("El numero8 es multiplo de 5");
} else {
	console.log("El numero8 no es multiplo de 5");
}

//Ciclos

//1 al 10
console.log("1 al 10");
for (let i = 0; i <= 10; i++) {
	console.log(i);
}
//10 al 1
console.log("10 al 1");
for (let i = 10; i > 0; i--) {
	console.log(i);
}
//pares
console.log("pares");
for (let i = 1; i <= 10; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}
//impares
console.log("impares");
for (let i = 1; i <= 10; i++) {
	if (i % 2) {
		console.log(i);
	}
}
//multiplos de 3
console.log("multiplos de 3");
for (let i = 1; i <= 10; i++) {
	if (i % 3 == 0) {
		console.log(i);
	}
}
//multiplos de 5
console.log("multiplos de 5");
for (let i = 1; i <= 10; i++) {
	if (i % 5 == 0) {
		console.log(i);
	}
}
//multiplos de 3 y 5
console.log("multiplos de 3 y 5");
for (let i = 1; i <= 10; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
		console.log(i);
		//no existen multiplos de 3 y cinco que esten entre el 1 y el 10 el primero es el 15 o el 0
	}
}

//Funciones
function mayus(palabra) {
	return palabra.toUpperCase();
}

function minus(palabra) {
	return palabra.toLowerCase();
}

function resta(n1, n2) {
	return n1 - n2;
}

function div(n1, n2) {
	return n1 / n2;
}

function mult(n1, n2) {
	return n1 * n2;
}

function largo(palabra) {
	return palabra.length;
}

//Arrays
const numeros = [1, 2, 3, 4, 5];
const palabras = ["hola","chao"];
function sumaArray(num) {
	let suma=0;
	for (let i = 0; i < num.length; i++) {
		suma += num[i];
	}
	return suma;
}

console.log("suma = "+sumaArray(numeros));

function promArray(num){
	return sumaArray(num)/num.length;
}

console.log("promedio = "+ promArray(numeros));

function mayusArray(arr){
	let may=[];
	for (let i = 0; i < arr.length; i++) {
		may.push(arr[i].toUpperCase());
	}
	return may;
}

console.log(mayusArray(palabras));

function soloPares(num){
	return num.filter((num)=>num%2==0);
}

console.log(soloPares(numeros));

//Objetos
const persona={
nombre:"Juan",
edad:"20",
genero:"M"
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.genero);

const caja={
	cuadernos:3,
	lapices:7,
	papel:"blanco",
	fotografias: 10,
	estado:"Bueno"
}
console.log(typeof caja.cuadernos);
console.log(caja.cuadernos);
console.log(typeof caja.lapices);
console.log(caja.lapices);
console.log(typeof caja.papel);
console.log(caja.papel);
console.log(typeof caja.fotografias);
console.log(caja.fotografias);
console.log(typeof caja.estado);
console.log(caja.estado);