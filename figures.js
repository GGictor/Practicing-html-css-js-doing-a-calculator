
////////////
//Triangle//
////////////

function perimeterTriangle(Leg1Triangle, Leg2Triangle, baseTriangle){
    const perimeter = Leg1Triangle + Leg2Triangle + baseTriangle;
    return  perimeter;
}

function triangleArea(Leg1Triangle, Leg2Triangle, baseTriangle){
    const s_value = (Leg1Triangle + Leg2Triangle + baseTriangle)/2
    const heronTriangleArea = Math.sqrt(s_value*(s_value-Leg1Triangle)*(s_value-Leg2Triangle)*(s_value-baseTriangle));
    //debugger
    return heronTriangleArea;  
}

function angleOfTriangle(cateto1Triangulo, cateto2Triangulo, baseTriangulo){
    const angleA = Math.acos(
        (Math.pow(cateto2Triangulo,2)+Math.pow(baseTriangulo,2)-Math.pow(cateto1Triangulo,2))
        /(2*cateto2Triangulo*baseTriangulo))*(180/Math.PI);
    const angleB = Math.acos(
        (Math.pow(cateto1Triangulo,2)+Math.pow(baseTriangulo,2)-Math.pow(cateto2Triangulo,2))
        /(2*cateto1Triangulo*baseTriangulo))*(180/Math.PI);
    const angleC = Math.acos(
        (Math.pow(cateto1Triangulo,2)+Math.pow(cateto2Triangulo,2)-Math.pow(baseTriangulo,2))
        /(2*cateto1Triangulo*cateto2Triangulo))*(180/Math.PI);
    let values = [angleA,angleB,angleC];
    return values;
}

function resultAngleOfTriangle(){
    const inputLeg1 = document.getElementById("InputTrianguloCateto1")
    const inputLeg2 = document.getElementById("InputTrianguloCateto2")
    const inputBase = document.getElementById("InputTrianguloBase")
    const triangleAngles = angleOfTriangle(parseInt(inputLeg1.value), parseInt(inputLeg2.value), parseInt(inputBase.value))
    const ResultAngle = document.getElementById("ResultAngle");
    ResultAngle.innerText = "The angle between 1st and 2nd, 2nd and base, base and 1st are: " + triangleAngles[2]+ ", " + triangleAngles[0]+ ", " + triangleAngles[1]+ ", respectively.";
}

function verifiedTriangleByLeg(leg1Triangle, leg2Triangle, baseTriangle){
    if(leg1Triangle == leg2Triangle && leg2Triangle==baseTriangle){
        return "equilateral";
    }
    else if(leg1Triangle == leg2Triangle && leg2Triangle != baseTriangle){
        return "isosceles";
    }
    else{
        return "scalene";
    }
}

function calledVerifiedTriangleByLeg(){
    const inputLeg1 = document.getElementById("InputTrianguloCateto1")
    const inputLeg2 = document.getElementById("InputTrianguloCateto2")
    const inputBase = document.getElementById("InputTrianguloBase")
    const triangleTipeByLeg = verifiedTriangleByLeg(parseInt(inputLeg1.value), parseInt(inputLeg2.value), parseInt(inputBase.value));
    const ResultType = document.getElementById("ResultTypeLeg");
    ResultType.innerText = "The triangle is : " + triangleTipeByLeg;
}

function calledVerifiedTriangleByAngle(){
    
    const inputLeg1 = document.getElementById("InputTrianguloCateto1")
    const inputLeg2 = document.getElementById("InputTrianguloCateto2")
    const inputBase = document.getElementById("InputTrianguloBase")
    const angleValues = angleOfTriangle(parseInt(inputLeg1.value), parseInt(inputLeg2.value), parseInt(inputBase.value));
    const triangleTipeByAngle = verifiedTriangleByAngle(angleValues[0],angleValues[1],angleValues[2]);
    const ResultType = document.getElementById("ResultTypeAngle");
    ResultType.innerText = "The triangle is : " + triangleTipeByAngle;

}

function  verifiedTriangleByAngle(angle1Triangle,angle2Triangle,angle3Triangle){
    
    function existsGreaterThan(value,array){
        return array.some(e => e > value);
    }

    function existsEqual(value,array){
        return array.some(e => e == value);
    }
    let values = [angle1Triangle.toFixed(2),angle2Triangle.toFixed(2),angle3Triangle.toFixed(2)]; 
    console.log(values)
    if(existsGreaterThan(90,values)){
        return "Obtuse Triangle";
    }
    else if(existsEqual(90,values)){
        return "Right Triangle";
    }
    else if(values[0] == 60 && values[1] == 60 && values[2] == 60){
        return "Equiangular Triangle";
    }
    else{
        return "Acute Triangle";
    }

}

function calculateTrianglePerimeter(){
    const inputLeg1 = document.getElementById("InputTrianguloCateto1")
    const inputLeg2 = document.getElementById("InputTrianguloCateto2")
    const inputBase = document.getElementById("InputTrianguloBase")
    const ResultP = document.getElementById("ResultPerimeter")
    const resultTrianglePerimeter = perimeterTriangle(parseInt(inputLeg1.value), parseInt(inputLeg2.value), parseInt(inputBase.value));

    ResultP.innerText = "The perimeter of the triangle is: " + resultTrianglePerimeter + "."; 
}

function calcuteTriangleArea(){
    const inputLeg1 = document.getElementById("InputTrianguloCateto1")
    const inputLeg2 = document.getElementById("InputTrianguloCateto2")
    const inputBase = document.getElementById("InputTrianguloBase")
    const ResultArea = document.getElementById("ResultArea")
    let resultTriangleArea = triangleArea(parseInt(inputLeg1.value), parseInt(inputLeg2.value), parseInt(inputBase.value))
    
    ResultArea.innerText = "The Area of the triangle is: " + resultTriangleArea + ".";

}


//////////
//Circle//
//////////


function circlePerimeter(circleRadio){
    const PI = Math.PI;
    const circlePerimeter = circleRadio * 2 *PI;
    //console.log("The perimeter of the circle is: "+ circlePerimeter);    
    return circlePerimeter;
}

function circleArea(circleRadio){
    const PI = Math.PI;
    const circleArea = circleRadio ** 2 *PI;
    //console.log("The area of the circle is: "+ circleArea);    
    return circleArea;
}

// Aquí interactuamos con el HTML
function calculateCirclePerimeter() {
    const input = document.getElementById("InputCircle");
    const resultP = document.getElementById("ResultP");
    const value = input.value;
    const perimeter = circlePerimeter(parseInt(value));
    resultP.innerText = "The perimeter is: " + perimeter;
}
function calculateCircleArea() {
    const input = document.getElementById("InputCircle");
    const resultP = document.getElementById("ResultP");
    const value = input.value;
    const area = circleArea(parseInt(value));
    resultP.innerText = "The area is: " + area;
}

//////////
//Square//
//////////

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

// Aquí interactuamos con el HTML
function calculateSquarePerimeter() {
    const input = document.getElementById("InputSquare");
    const resultP = document.getElementById("ResultP");
    const value = input.value;
    const perimetro = squarePerimeter(parseInt(value));
    resultP.innerText = "The perimeter is : " + perimetro;
}
function calculateSquareArea() {
    const input = document.getElementById("InputSquare");
    const resultP = document.getElementById("ResultP");
    const value = input.value;
    const area = squareArea(parseInt(value));
    resultP.innerText = "The area is : " + area;
}