document.addEventListener('DOMContentLoaded', () =>{
    let datoGuardado = localStorage.getItem("datos");
    
    document.getElementById("data").innerText = datoGuardado
  
});