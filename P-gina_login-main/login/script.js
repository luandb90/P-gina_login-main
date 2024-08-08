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

const http = require('http')
const path = require('path')

const express =  require('express')
const fs = require("fs");
var session = require('express-session')


const app = express()
const server = http.createServer(app)



app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:"abc"}));

   // configuraçoes
   app.set('port', process.env.PORT || 3000)




// secção de login
app.use('/acesso-restrito/*', (req, res, entrar) => {
    if( req.session.nome ){
        entrar();
    }else{
        res.redirect('/index.html')
    }
      });


      // artigos estaticos
app.use(express.static(path.join(__dirname, 'public')))

//start do server
server.listen(app.get('port'), () => {
    console.log('server na porta', app.get('port'))
   
   
})


// secção de login 2


app.post('/login',(req, res) => {
    const usuarioscad =   fs.readFileSync('./usuarios.json')
    const usuariosparse = JSON.parse(usuarioscad)
    

    var email = req.body.nomes
    var senha = req.body.senha


        for( var umUsuario of usuariosparse) {
            if(nome == umUsuario.nome && senha == umUsuario.senha ){
                    req.session.nome = umUsuario
                    res.send('conectado')
                    return
            }
                
            
        }
        res.send('falhou')
    
})


// area de cadastro


app.post('/cadastro',(req, res) => {
    const usuarioscad =   fs.readFileSync('./usuarios.json')
    const usuariosparse = JSON.parse(usuarioscad)
    
    
        var emailcard = req.body.emailcard
        var senhacard = req.body.senhacard
      
        const datauser = {
            nome: emailcard,
            senha: senhacard
        }
    
        usuariosparse.push(datauser)
        
        
        
        fs.writeFile('./usuarios.json', JSON.stringify(usuariosparse, null, 4 ) ,(error, result ) => {
            if (error){
                console.error(error)
        
                return
            }
        
            console.log(result)
        
        
        } )
        
    
    
    
    })