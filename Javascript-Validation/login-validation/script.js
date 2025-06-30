document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // RegEx pattern - non hackable
        // email pattern - lakshmi_narasimhan123 - @ - mail - . - com
        // 5 places
        const emailPattern = /^[a-z0-9_-]+@[a-z]+\.[a-z]{2,}$/;
        const passwordPattern = /^[a-zA-Z0-9!@#$*]{6,}$/;

        let valid = true;

        if(!emailPattern.test(email)){
            document.getElementById("emailError").innerText = "Invalid email format";
            valid = false;
        }else{
            document.getElementById("emailError").innerText = "";
        }

        if(!passwordPattern.test(password)){
            document.getElementById("passwordError").innerText = 
            "Password must be above 6 characters with letters, numbers or special characters";
            valid = false;
        }else{
            document.getElementById("passwordError").innerText = "";
        }

        if(valid){
            document.getElementById("loginOutput").innerHTML = `Login successful, Welcome ${email}`
            form.reset();
        }
    })
})