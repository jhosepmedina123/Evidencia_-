//ejemplos:

//definir una funcion bajo la sintaxis
//sintaxis: declaracion de funcion
function saludo(nombre ){//parametro
    console.log (`Hola ${nombre} como estas`);
}
//invocar, llamar o ejecutar la funcion saludo
saludo(`jhosep`)

/*                                                              */

//sintaxis: expresion funcion:
//la expresion se asigna a una constante ( SALUDO )
const saludo2 = function(nombre = "camilo"){ //parametro por defecto
    console.log (`Hola ${nombre} como estas`);

}

//invocar saludo 2
//sin dato puedo llamar nombre
saludo2 ();