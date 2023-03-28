var listado = [];
var ids = 0;

function agregar()
{    
    var input =  document.getElementById("input").value;
    
    if (document.getElementById("input").value.length == 0)
    {
        alert("Porfavor ingrese una tarea")
        document.getElementById("input").value = "";
    }
    else {
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
        document.getElementById("input").value = "";
    }
    
}


function PintarEnPantalla(){
   var pantalla = document.getElementById("tasks");
   pantalla.innerHTML = "";
   listado.map (item=>{

    if (item.realizado = true){
        var ñ = "<del>";
        var l = "</del>";
    }

    pantalla.innerHTML += `
        <li>
            <input type="checkbox" id="checkbox" onclick="realizar(${item.id})" />
            ${ñ} ${item.titulo} ${l}
        </li>
    `


   })
  
}

function realizar(id)
{
    for (var i = 0; i < listado.length; i++)
    {
        if (listado[i].id == id){
            listado.realizado = !listado.realizado;
        }
    }

    PintarEnPantalla();
}






