let contenedor
let cantidad = 35
let minimo = 1
function cargar_imagen(valor,num,titulo){
    var x=document.getElementById(valor);
    document.getElementById('monitor').src = x.src;
    contenedor = num;
    document.getElementById('titulo').innerHTML=titulo;
}
function siguiente_imagen(){
    contenedor++;
    if (contenedor>cantidad){
        contenedor = 1;
        var ur="img/"+contenedor+".jpg";
        document.getElementById('monitor').src =ur;
    }else{
        var ur="img/"+contenedor+".jpg";
        document.getElementById('monitor').src =ur;
    }

    if (contenedor>=1 && contenedor<=7){
        document.getElementById('titulo').innerHTML="FASE DE GRUPOS";
    } else { 
        if (contenedor<=14) {
        document.getElementById('titulo').innerHTML="OCTAVOS DE FINAL";
        } else{
            if(contenedor<=21){
                document.getElementById('titulo').innerHTML="CUARTOS DE FINAL";   
            }else { if (contenedor<=28){
                        document.getElementById('titulo').innerHTML="SEMIFINAL"; 
                    }else{
                        document.getElementById('titulo').innerHTML="FINAL"
                    }
                }        
        }
    }    
}
function anterior_imagen(){
    contenedor--;
    if (contenedor<minimo){
        contenedor = cantidad;
        var ur="img/"+contenedor+".jpg";
        document.getElementById('monitor').src =ur;
    }else{
        var ur="img/"+contenedor+".jpg";
        document.getElementById('monitor').src =ur;
    }   
    
    if (contenedor>=1 && contenedor<=7){
        document.getElementById('titulo').innerHTML="FASE DE GRUPOS";
    } else { 
        if (contenedor<=14) {
        document.getElementById('titulo').innerHTML="OCTAVOS DE FINAL";
        } else{
            if(contenedor<=21){
                document.getElementById('titulo').innerHTML="CUARTOS DE FINAL";   
            } else { if (contenedor<=28){
                document.getElementById('titulo').innerHTML="SEMIFINAL"; 
                    }else{
                        document.getElementById('titulo').innerHTML="FINAL"
                    }
                }    
        }
    }  
}