function habilitar(){
    let name = document.getElementById('name').value;              //selecciona nombre
    let val = 0;   

    if (name == ""){
        val ++;                          //Si "name" tiene "" (caracter vacio), suma val a 1
    }
    if (val == 0){
        document.getElementById('registro').disabled = false;
    }else{                                                          //si el valor de val es 0, el boton.disabled es false. Si vale 1 o mas, el boton disabled es true, es decir, sigue como esta en el html
        document.getElementById('registro').disabled = true;

    }
    
}
//function entrarAJugar(){
  //  document.getElementById('entrar').disabled = false;                   //funcion que solo activa el boton desactivado "entrar"
//}
document.getElementById('name').addEventListener('keyup',habilitar);     //keyup es cuando se escribe algo en ese elemento seleccionado
//document.getElementById('registro').addEventListener('click',entrarAJugar);   //click es cuando se clickea el elemento seleccionado



