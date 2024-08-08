let password = document.getElementById ('password');
let icon = document.getElementById ('icon');

function showHide(){
    if(password.type === 'password'){
        password.setAttribute('type', 'text');
        icon.classList.add('hide')
    }
    else{
        password.setAttribute('type', 'password');
        icon.classList.remove ('hide')
    }
}


function logar(){
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    console.log(JSON.stringify({
        email: email,
        password: password
    }));

    fetch("login",{
        method: 'POST',
        body: JSON.stringify({
            email: email,
            password: password
        }),
        headers: {"content-type" : "application/json"}
    })

    .then(async(resp) =>{
        var status = await resp.text();
        console.log(status)
        if(status == 'conectado'){
            location.href = '/acesso.html'
        }else{
            alert('nome ou senha invalidos!')
        }
    })

}