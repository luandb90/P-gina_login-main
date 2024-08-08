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


function cadastrar(){
    var nomecard = document.getElementById('nomecard').value
    var sobrenomecard = document.getElementById('sobrenomecard').value
    var email = document.getElementById('emailcard').value
    var password = document.getElementById('password').value
    var diacard = document.getElementById('diacard').value
    var mescard = document.getElementById('mescard').value
    var anocard = document.getElementById('anocard').value
    var generocard = document.getElementById('generocard').value

console.log(JSON.stringify({
    nomecard: nomecard,
    sobrenomecard: sobrenomecard,
    email: email,
    password: password,
    diacard: diacard,
    mescard: mescard,
    anocard: anocard,
    generocard: generocard
}))

    fetch("/cadastro",{
        method: 'POST',
        BODY: JSON.stringify({
            nomecard: nomecard,
            sobrenomecard: sobrenomecard,
            email: email,
            password: password,
            diacard: diacard,
            mescard: mescard,
            anocard: anocard,
            generocard: generocard
        }),
        headers: {"content-Type" : "application/json"}
    })

    .then(async (resp) => {
        console.log('deu certo')
    });



}