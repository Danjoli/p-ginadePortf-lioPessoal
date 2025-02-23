// Adiciona um evento de clique ao botão
var trocar = true;

document.getElementById('toggle-theme').addEventListener('click', function() {
    if (trocar === true){
        const nav = document.querySelector('nav > ul').style.backgroundColor = 'green'
        const sob = document.getElementById('sobre').style.backgroundColor = 'black'
        const proj = document.getElementById('projetos').style.backgroundColor = 'black'
        const cant = document.getElementById('contato').style.backgroundColor = 'black'
        const subtitulos = document.querySelector('body').style.color = 'white'

        const borna = document.querySelector('section > ul').style.borderColor = 'white'
        const borna1 = document.querySelector('h3.borda1').style.borderColor = 'white'
        const borna2 = document.querySelector('h3.borda2').style.borderColor = 'white'
        const borna3 = document.querySelector('h3.borda3').style.borderColor = 'white'
        trocar = false}
        

    else {
        const nav = document.querySelector('nav > ul').style.backgroundColor = 'rgb(212, 255, 143)'
        const sob = document.getElementById('sobre').style.backgroundColor = 'white'
        const proj = document.getElementById('projetos').style.backgroundColor = 'white'
        const cant = document.getElementById('contato').style.backgroundColor = 'white'
        const subtitulos = document.querySelector('body').style.color = 'black'
        const borna = document.querySelector('section > ul').style.borderColor = 'black'
        const borna1 = document.querySelector('h3.borda1').style.borderColor = 'black'
        const borna2 = document.querySelector('h3.borda2').style.borderColor = 'black'
        const borna3 = document.querySelector('h3.borda3').style.borderColor = 'black'
        trocar = true
    }
});


