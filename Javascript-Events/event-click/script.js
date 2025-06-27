// Events
document.addEventListener("DOMContentLoaded", function(){
    const message = document.getElementById("title");
    const button = document.getElementById("changeButton");

    button.addEventListener("click", function(){
        message.innerText = "Welcome to javascript";
    })
})