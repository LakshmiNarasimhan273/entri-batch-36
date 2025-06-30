document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("paymentForm");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const card = document.getElementById("cardNumber").value.trim();
        const cvv = document.getElementById("cvv").value.trim();
        const expiry = document.getElementById("expiryDate").value.trim();

        // RegEx pattern
        const cardPattern = /^\d{16}$/;
        const cvvPattern = /^\d{3}$/;
        // 07/24
        const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;

        // Validation
        let valid = true;

        if(!cardPattern.test(card)){
            document.getElementById("cardError").innerText = "Card number must be 16 digits";
            valid = false;
        }else{
            document.getElementById("cardError").innerText = "";
        }

        if(!cvvPattern.test(cvv)){
            document.getElementById("cvvError").innerText = "CVV must be 3 digits";
            valid = false;
        }else{
            document.getElementById("cvvError").innerText = "";
        }

        if(!expiryPattern.test(expiry)){
            document.getElementById("expiryError").innerText = "Enter valid format MM/YY";
            valid = false;
        }else{
            document.getElementById("expiryError").innerText = "";
        }

        if(valid){
            document.getElementById("success").innerText = "Payment success";
            form.reset();
            console.log({ card, cvv, expiry });
            
        }
    })
})