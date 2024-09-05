document.addEventListener('DOMContentLoaded', function(){
    let datoGuardado = localStorage.getItem("datos");
    
    document.getElementById("data").innerText = datoGuardado
  
});