const http = require('http')
const path = require('path')

const express = require('express')
const fs = require('fs')
var session = require('express-session')

const app = express()
const server = http.createServer(app)


app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret:"abc"}));

    app.set('port', process.env.PORT || 3000)


app.use('/acesso-restrito/acesso.html', (req, res, next) => {
    if(req.session.emailcard){
        next();
    }else{
        res.redirect('/index.html')
    }
});

app.use(express.static(path.join(__dirname, 'public')))

server.listen(app.get('port'), () => {
    console.log('server na porta', app.get('port'))


})

app.post('/login.js',(req, res,) => {
    const email = fs.readFileSync('/usuarios.json')
    const emailparce = JSON.parse(email)

    var emailusuario = req.body.emailcard
    var password = req.body.password

    for(var umUsuario of emailparce) {
        if (emailusuario === umUsuario.emailusuario && password === umUsuario.password)
            req.session.emailusuario == umUsuario
            res.send('conectado')
            return
    }
    res.send('falhou')

})



