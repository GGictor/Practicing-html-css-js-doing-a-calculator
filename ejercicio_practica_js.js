/// Funciones

//función del tipo declarativa para una respuesta de nombre 
/* function print_name(name,lastname,nickname){
    let completeName = name + " " + lastname
    console.log("Mi nombre es "+completeName+", pero prefiero que me llames "+nickname+".")
}

print_name("victor","cortés","ggictor");
 */

///Condicionales

// funcion de if y else para ciertos tipos de solicitudes
/* const tipoSuscripcion = "Expert";

if(tipoSuscripcion === "Free"){
    console.log("Solo algunas series y peliculas están diponibles.")
}

else if(tipoSuscripcion === "Basic"){
    console.log("Se tiene acceso a todas las series y peliculas, pero hasta en calidad HD y para 1 solo dispositivo activo.")
}

else if(tipoSuscripcion === "Expert"){
    console.log("Se tiene acceso a todas las series y peliculas, hasta en calidad 4k y para 1 solo dispositivo activo.")
}

else if(tipoSuscripcion === "ExpertPlus"){
    console.log("Se tiene acceso a todas las series y peliculas, hasta en calidad 4k y para 4 dispositivos activos al mismo tiempo.")
}
else{
    console.log("Ocurrió un error al revisar la información referente al tipo de suscripción a solicitar.")
} */


//solución alternativa al caso anterior solamente usando 1 condicional y con arrays.
/* const tipoSuscripcion = "Expert";
const arregloSituaciones = ["Free","Basic","Expert","ExpertPlus"];
const respuestas = ["Solo puedes tomar los cursos gratis",
"Puedes tomar casi todos los cursos de Platzi durante un mes",
"Puedes tomar casi todos los cursos de Platzi durante un año",
"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];

console.log(arregloSituaciones.includes( tipoSuscripcion ));

if(arregloSituaciones.includes( tipoSuscripcion )){
    let aux=arregloSituaciones.indexOf(tipoSuscripcion);
    console.log(respuestas[aux]);
}
else{
    console.log("Ocurrió un error al revisar la información referente al tipo de suscripción a solicitar.")
} */

///Ciclos

// para el caso de el primer for
/* let i = 10;
while(i>=2){
    console.log("El valor de i es: "+ i);
    i--;
} */

// para el caso del segundo for 
/* let i = 0;
while(i<5){
    console.log("El valor de i es: "+ i);
    ++i;
} */

// esto sirve para hacer una pequeña trivia la cual no terminará hasta que se responda de forma correcta.
/* let verificador = false;

while(verificador === false){
    let respuestaUsuario = prompt("What is the result of 2+2?");
    if(respuestaUsuario == "4"){
        verificador = true;
    }
    else{
        console.log("resultado erroneo :(.");
    }
} */

///Listas


// parte 2 para crear funcion que reciba array
/* function printFirst(arreglo){
    console.log(arreglo[0]);
}

let testArray = ["Free","Basic","Expert","ExpertPlus"];

printFirst(testArray); */


// parte 2 para crear funcion que reciba array
/* function printAllArray(arreglo){
    for(let element of arreglo){
        console.log(element);
    }
}

let testArray = ["Free","Basic","Expert","ExpertPlus"];

printAllArray(testArray);
 */


//Finao pregunta 4 de la parte de Listas, estas correspondientes a 
/* let testObject = {
    name: "GGictor",
    sport: "Taekwondo",
    skills: "High determination, reader",
    age: "23"
}

function printObject(objectToPrint){
    Object.keys(objectToPrint).forEach(key => {
        console.log(key+ ": "+ objectToPrint[key]);        // the name of the current key, the value of the current key.
      });
}

printObject(testObject); */