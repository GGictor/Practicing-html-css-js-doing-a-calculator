
//Cuadrado.
function squarePerimeter(squareSide){
    const squarePerimeter = squareSide*4;
    //console.log("The perimeter of the square is: "+ squarePerimeter);    
    return squarePerimeter;
}

function squareArea(squareSide){
    const squareArea = squareSide*squareSide;
    //console.log("The area of the square is: "+ squareArea);   
    return squareArea; 
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

function areaTriangulo(cateto1Triangulo, cateto2Triangulo, baseTriangulo){
    const s_value = (cateto1Triangulo + cateto2Triangulo + baseTriangulo)/2
    const areaTrianguloHeron = Math.sqrt(s_value*(s_value-cateto1Triangulo)*(s_value-cateto2Triangulo)*(s_value-baseTriangulo));
    debugger
    console.log("El area del triangulo es de : "+ areaTrianguloHeron);  
    return areaTrianguloHeron  
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
function calculateSquarePerimeter() {
    const input = document.getElementById("InputCuadrado");
    const resultP = document.getElementById("ResultP");
    const value = input.value;
    const perimetro = squarePerimeter(parseInt(value));
    resultP.innerText = "The perimeter is: " + perimetro;
}
function calculateSquareArea() {
    const input = document.getElementById("InputCuadrado");
    const resultP = document.getElementById("ResultP");
    const value = input.value;
    const area = squareArea(parseInt(value));
    resultP.innerText = "The area is: " + area;
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

function calcularAreaTriangulo(){
    const inputCateto1 = document.getElementById("InputTrianguloCateto1")
    const inputCateto2 = document.getElementById("InputTrianguloCateto2")
    const inputBase = document.getElementById("InputTrianguloBase")
    let resultadoAreaTriangulo = areaTriangulo(parseInt(inputCateto1.value), parseInt(inputCateto2.value), parseInt(inputBase.value))
    alert(`${String(resultadoAreaTriangulo)}`);
}