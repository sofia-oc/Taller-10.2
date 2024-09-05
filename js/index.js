document.addEventListener('DOMContentLoaded', function(){
    let btn = document.getElementById("buttonText");
    
    btn.addEventListener('click', function(){
    let dato = document.getElementById("inputText").value;
    
    localStorage.setItem("datos", dato);

    });
})