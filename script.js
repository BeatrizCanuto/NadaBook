var nome = window.document.getElementById('nome')
var social = window.document.getElementById('social')
var celular = window.document.getElementById('celular')
var email = window.document.querySelector('#email')
var mensagem = window.document.getElementById('mensagem')
var nomeOk = false
var socialOk = false
var emailOk = false
var socialOk = false
var celularOk = false
var mensagemOk = false

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarSocial() {
    let txtNome = document.querySelector('#txtSocial')
    if (social.value.length < 2) {
        txtSocial.innerHTML = 'Nome social inválido!'
        txtSocial.style.color = 'red'
        socialOk = false
    } else {
        txtSocial.innerHTML = "Nome social válido!"
        txtSocial.style.color = 'green'
        socialOk = true
    }
}

function validarCelular() {
    let txtCelular = document.querySelector('#txtCelular')
    if (celular.value.length < 11) {
        txtCelular.innerHTML = 'Número de celular inválido!'
        txtCelular.style.color = 'red'
        celularOk = false
    } else {
        txtCelular.innerHTML = "Nome social válido!"
        txtCelular.style.color = 'green'
        celularOk = true
    }
}


function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0) {
        txtEmail.innerHTML = 'Email válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    } else {
        txtEmail.innerHTML = "Email inválido!"
        txtEmail.style.color = 'red'
        emailOk = false
    }
}

function validarMensagem() {
    let txtMensagem = document.querySelector('#txtMensagem')
    if (mensagem.value.length < 10 || mensagem.value.length > 1000) {
        txtMensagem.innerHTML = 'Mensagem precisa de mais caracteres!'
        txtMensagem.style.color = 'red'
        mensagemOk = false
    } else {
        txtMensagem.innerHTML = "Preenchimento válido!"
        txtMensagem.style.color = 'green'
        mensagemOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && mensagemOk == true) {
        alert('Preenchido corretamente, enviado')
    } else {
        alert('Necessário preencher todos os campos corretamente')
    }
}