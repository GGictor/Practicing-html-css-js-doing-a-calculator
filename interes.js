


function calcularInteres(){    
    const tipoInteres =  document.getElementsByName('tipoInteres');
    //console.log("El valor de tipoInteres es de: " + tipoInteres);
    let validate;
    // just checked the value selected in the radio section
    for (var i = 0, length = tipoInteres.length; i < length; i++) {
        if (tipoInteres[i].checked) {
            validate = tipoInteres[i].value;
            //alert(tipoInteres[i].value);
            // only one radio can be logically checked, don't check the rest
            break;
        }
    }

    if(validate==="1"){
        //console.log("Se escogió interés simple D:")
        const inputCapital = document.getElementById("Capital");
        const Capital = parseInt(inputCapital.value);
    
        const inputInteres = document.getElementById("Interes");
        const Interes = parseFloat(inputInteres.value);
    
        const inputTiempo = document.getElementById("tiempo");
        const Tiempo = parseInt(inputTiempo.value);

        let Resultado = Capital * Interes * Tiempo/100;

        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El interés total generado por el interés simple es de: $" + Resultado;
        /* if(Tiempo === 3){
            console.log("Si pasa como entero");

        }
        else if(Tiempo == 3){
            console.log("Pasa como string");
        }
        else{
            console.log("No se que pasa :,( ");
        }  */

    }
    else{
        //console.log("Se escogió interés compuesto D:!")
        const inputCapital = document.getElementById("Capital");
        const Capital = parseFloat(inputCapital.value);
    
        const inputInteres = document.getElementById("Interes");
        const Interes = parseFloat(inputInteres.value);
    
        const inputTiempo = document.getElementById("tiempo");
        const Tiempo = parseInt(inputTiempo.value);

        let resultadoCapitalFinal = Capital * (1+(Interes/100))**(Tiempo);
        
        let interesSinInicial = resultadoCapitalFinal - Capital;
        const resultP = document.getElementById("ResultP");
        resultP.innerText = "El interés total generado por el interés compuesto es de: $" + interesSinInicial;
    }
}