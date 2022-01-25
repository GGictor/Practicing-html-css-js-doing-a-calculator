
//Cuadrado.
function perimetroCuadrado(ladoCuadrado){
    const perimetroCuadrado = ladoCuadrado*4;
    console.log("El perimetro del cuadrado es de : "+ perimetroCuadrado);    
}

function areaCuadrado(ladoCuadrado){
    const areaCuadrado = ladoCuadrado*ladoCuadrado;
    console.log("El area del cuadrado es de : "+ areaCuadrado);    
}


//Triangulo

function perimetroTriangulo(cateto1Triangulo, cateto2Triangulo, baseTriangulo){
    if(cateto1Triangulo == cateto2Triangulo && cateto2Triangulo != baseTriangulo){
        const perimetroTriangulo = cateto1Triangulo + cateto2Triangulo + baseTriangulo;
        alert("El triangulo es iscoceles :)")
        console.log("El perimetro del triangulo es de : "+ perimetroTriangulo);    
    }
    else{
        const perimetroTriangulo = cateto1Triangulo + cateto2Triangulo + baseTriangulo;
        alert("El triangulo no cumple las condiciones para que sea iscoceles :(")
        console.log("El perimetro del triangulo es de : "+ perimetroTriangulo);    
    }
}

function areaTriangulo(cateto1Triangulo, cateto2Triangulo){
    const areaTriangulo = cateto2Triangulo * cateto1Triangulo / 2;
    console.log("El area del triangulo es de : "+ areaTriangulo);    
}

//Circulo 


function perimetroCirculo(radioCirculo){
    const PI = Math.PI;
    const perimetroCirculo = radioCirculo * 2 *PI;
    console.log("El perimetro del circulo es de : "+ perimetroCirculo);    
}

function areaCirculo(radioCirculo){
    const PI = Math.PI;
    const areaCirculo = radioCirculo ** 2 *PI;
    console.log("El area del circulo es de : "+ areaCirculo);    
}

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(input.value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function verificarIscoceles(cateto1Triangulo, cateto2Triangulo, baseTriangulo){
    if(cateto1Triangulo == cateto2Triangulo && cateto2Triangulo != baseTriangulo){
        return true;   
    }
    else{
        return false;
    }
}


function calcularAlturaTrianguloIscoceles(){
    const inputCateto1 = document.getElementById("InputTrianguloCateto1")
    const inputCateto2 = document.getElementById("InputTrianguloCateto2")
    const inputBase = document.getElementById("InputTrianguloBase")
    const iscocelesState = verificarIscoceles(parseInt(inputCateto1.value), parseInt(inputCateto2.value), parseInt(inputBase.value))
    if(iscocelesState == true){
        alert("El triangulo es iscoleles :)");
        const ResultadoAltura = Math.sqrt(parseInt(inputCateto1.value)**2 - ((parseInt(inputBase.value)**2)/4));
        console.log("La altura del triangulo iscoceles es de: " + ResultadoAltura)
        return ResultadoAltura
    }
    else {
        console.log("El triangulo no es Iscoceles :(")
        alert("El triangulo no es Iscoceles :(");
        return "El triangulo no es iscoceles :(";
    }
}

function calcularPerimetroTriangulo(){
    const inputCateto1 = document.getElementById("InputTrianguloCateto1")
    const inputCateto2 = document.getElementById("InputTrianguloCateto2")
    const inputBase = document.getElementById("InputTrianguloBase")
    const resultadoPerimetroTriangulo = perimetroTriangulo(parseInt(inputCateto1.value), parseInt(inputCateto2.value), parseInt(inputBase.value))
    alert(resultadoPerimetroTriangulo);
}
