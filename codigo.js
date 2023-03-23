varlistado = [];
var ids = 0;

function agregar()
{    
    var input =  document.getElementById("input").value;
    document.getElementById("input").value = "";
    ids = ids+1;
    var obj ={
        id: ids,
        titulo: input,
        realizado: false
    };

    listado.push(obj);
    console.log(listado)
    // llamo a funcion refresh screen
    PintarEnPantalla();
}


function PintarEnPantalla(){
   var pantalla = document.getElementById("pantalla");
    for (var i = 0; i <= listado.length; i++){
        pantalla.innerHTML += listado[i];
        
    }
}





