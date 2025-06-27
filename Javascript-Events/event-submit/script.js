document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const error = document.getElementById("error");

    form.addEventListener("submit", function(event){
        // preventDefault is a inbuild function to prevent from the default browser setting
        // especially a page reload
        event.preventDefault();

        // logical operator AND(&&), OR(||), NOT(!)
        if(username.value === "" || password.value === ""){
            error.innerText = "Both username and password fields are required";
        }else{
            error.innerText = "";
            username.value = ""
            password.value="";
            alert("Login successful");
        }

    })
})