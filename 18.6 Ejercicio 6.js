const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];


const numero = prompt("Ponga un número para el Documento Nacional de Identidad (DNI):");

if (numero < 0) {
	alert("Los números negativos no son válidos.")
};
if (numero > 99999999) {
	alert("Este número excede a la cifra requerida.")
};
// if (numero == numero.String) {
// 	alert("No puede.")
// };

console.log(letras.length)

// let cal = document.getElementById(".calculo")
// console.log(a = letras.length%numero)	//variable del número > a
// document.write("Cálculo del proceso: ");

let a = letras.length%numero;
document.write(a);	// cal + "<br>"
pedro = document.getElementById(".calculo").innerText = 'a';
document.write(pedro);


// let resultado = document.querySelector(".codigo");
// console.log(resultado = letras[a])	//variable de la letra > resultado
// document.write("Código correspondiente: ");
// resultado = letras[cal];
// document.write(resultado + "<br>");
