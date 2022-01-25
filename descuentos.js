// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento, descuentoCupon) {
  const porcentajePrecioConDescuento = 100 - (parseInt(descuentoCupon) + parseInt(descuento));

  if(porcentajePrecioConDescuento>0){
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  //console.log(" Los valores del precio, descuento y descuentoCupon son de :" 
  //+precio+ ", "+ descuento+ ", " + descuentoCupon + " respectivamente. ")
  
  //console.log(" Los valores del porcentajePrecioConDescuento y precioConDescuento son de : " + porcentajePrecioConDescuento + " y " + precioConDescuento +  ".");
  return precioConDescuento;

  }
  else{
    return 0;
  }

}

function validateCoupon(inputCoupon){
  const coupons = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
  ];


  const isCouponValueValid = function (coupon) {
    return coupon.name === inputCoupon;
};

  const userCoupon = coupons.find(isCouponValueValid);

  if (!userCoupon) {
    alert("El cupón " + userCoupon + " no es válido");
    return 0;
  }
  else{
    alert("El cupón " + userCoupon + " es válido");
    return userCoupon.discount;
  }

/// cttrl + k + c
//   const listaCupones = {
//     cupon1: 10,
//     cupon2: 15,
//     cupon3: 20,
//  }; 
 
//  function descuentoDelCupon() {
//     const nombreCupon = document.getElementById('inputCupon').value;
//     const cuponDefault = 0;
//     const cuponDescuento = listaCupones[nombreCupon] || cuponDefault;
//     return cuponDescuento;
//  } 

}

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const inputCoupon = document.getElementById("InputCoupon");
  const discountCoupon = inputCoupon.value;
  console.log("El retorno de validate Coupon es de: "+ validateCoupon(discountCoupon))
  if(validateCoupon(discountCoupon)){
    const discountCouponValue = validateCoupon(discountCoupon)
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, discountCouponValue)
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de: $" + precioConDescuento;
  }
  else{
    const discountCouponValue = validateCoupon(discountCoupon)
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue, discountCouponValue)
    const resultP = document.getElementById("ResultP");
    resultP.innerText = "El precio con descuento es de : $" + precioConDescuento;
    
  }
}

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
