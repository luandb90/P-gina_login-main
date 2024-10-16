function validateFields(){
    document.getElementById("email").value;
    if (!email){
        document.getElementById("esqueci_senha").disabled+ true;
    } else if (validateEmail (email)) {
        document.getElementById("esqueci_senha").disabled+ false;

    }

    function validateEmail(email){
        return /\S+@\S+\.\S+/.test(email);
    } 
    }
