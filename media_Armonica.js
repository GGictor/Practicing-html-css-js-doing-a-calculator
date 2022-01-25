const listaArmonica= [5,10,15,2,4,6,8,12,16,1,13];

const largoListaArmonica = listaArmonica.length;

const sumaLista = listaArmonica.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + (1/nuevoElemento);
    }
  );

const valorFinal = largoListaArmonica/sumaLista;

console.log("El valor de la media armonica es de: " +  valorFinal);

