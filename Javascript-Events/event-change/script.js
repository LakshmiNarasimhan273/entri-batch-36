document.addEventListener("DOMContentLoaded", function(){
    const password = document.getElementById("password");
    const checkbox = document.getElementById("togglePassword");

    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            password.type = "text";
        }else{
            password.type = "password";
        }
    })
})