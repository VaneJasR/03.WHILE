
//Ejercicio 1 
let x= 1;
let y =Number(prompt("escribe un numero")) 
while(x !== y+1 ){
    console.log(5 * x)
    x ++   
}

// Ejercicio 2
let num = ("15,29")
let num2 = prompt("escribe dos numeros del 1 al 50 separados por comas")
if(num == num2)
{
    alert( "🥳LOTERIA🥳")
}


// Ejercicio 3

let dati = Number(prompt('ingrese un numero'));
let numi = [15]
while(dati != numi ) {
    console.log(dato);
    dato = prompt('ingrese un numero')
}

console.log('fin del ciclo - linea')


// Ejercicio 4 
let dato = prompt('ingrese una letra o palabra');
let letr = ['R'], pal = ['economia']
while(dato != letr && dato != pal ) {
    console.log(dato);
    dato = prompt('ingrese una letra o palabra')
}
console.log('fin del ciclo - linea')

 // Ejercicio 5 
 let dia=prompt("ingrese un dia");
 let t=['domingo']
 while(dia != t) {
    if (dia == 'lunes'){
   alert('buen inicio de semana🤓');
   dia=prompt("ingrese un dia")
    }
    if( dia =='martes'){
    alert('vamos con todo 💃');
    dia=prompt("ingrese un dia")
    }
    if( dia =='miercoles'){
    alert('media semana👽');
    dia=prompt("ingrese un dia")
    }
    if( dia =='jueves'){
    alert('ya casi viernes🤖');
    dia=prompt("ingrese un dia")
    }
    if( dia =='viernes'){
    alert('por fin viernes🍻');
    dia=prompt("ingrese un dia")
    }
    if( dia =='sabado'){
    alert('dia de basketball🏀');
    dia=prompt("ingrese un dia")
    }
 }
    
alert("ya descansa😴")
   