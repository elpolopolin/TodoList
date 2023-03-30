var listado = [];
var ids = -1;


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
        var now = new Date().toLocaleTimeString('en-AR');
        var obj ={
            id: ids,
            titulo: input,
            realizado: false,
            fechaCreado: now, 
            fechaTachado: null 
        };
    
        listado.push(obj);
        ReestablecerIds(listado)
        console.log(listado)
        // llamo a funcion refresh screen
        PintarEnPantalla();
        document.getElementById("input").value = "";
    }
    
}


function PintarEnPantalla(){
   var pantalla = document.getElementById("tasks");
   pantalla.innerHTML = "";
   listado.map(item=>{  
    if(item.realizado == true){
        pantalla.innerHTML += `
        <li>
                   
            <li class="list-group-item list-group-item-success"> <p> <b> Tarea: </b> ${item.titulo} <b> Creado: </b> ${item.fechaCreado}  <b> Realizado: </b> ${item.fechaTachado} <input type="checkbox" class="a" checked onchange="realizar(${item.id})" >
            <button class="btn btn-outline-danger"  onclick="borrar(${item.id})">Borrar</button>  </p>  </li>
        </li>
        `
    }else{
        pantalla.innerHTML += `
        <li>
                  
        <p class=""> <li class="list-group-item">  ${item.titulo} ${item.fechaCreado}  <input type="checkbox" class="a" onchange="realizar(${item.id})"> <button class="btn btn-outline-danger" onclick="borrar(${item.id})">Borrar</button> </p> </li>
        </li>
        
        `

    }      

   })
}

function realizar(id)
{
    for (var i = 0; i < listado.length; i++)
    {
        if (listado[i].id == id){
            if(listado[i].realizado == true){                               
                listado[i].realizado = false;
                listado[i].fechaTachado = null;
            }else{                
                listado[i].realizado = true;
                var now = new Date().toLocaleTimeString('en-AR');
                listado[i].fechaTachado = now;
                
            }
        }
    }
    PintarEnPantalla();
}

function borrar(id){
    let nuevoArray = listado.filter(todo => todo.id != id);
    listado = nuevoArray;

    ReestablecerIds(listado);
    PintarEnPantalla();


}


function ReestablecerIds(nuevoArray){
    var auxiliar = 1
    nuevoArray.map((TODO) =>{
  
        TODO.id = auxiliar
      
        
        auxiliar++
        
        
    });
   
  }





