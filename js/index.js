var trocar = true;

function alternarTema(){
    if (trocar === true){
        document.querySelector('nav > ul').style.backgroundColor = 'green'
        document.getElementById('sobre').style.backgroundColor = 'black'
        document.getElementById('projetos').style.backgroundColor = 'black'
        document.getElementById('contato').style.backgroundColor = 'black'
        document.querySelector('body').style.color = 'white'

        document.querySelector('section > ul').style.borderColor = 'white'
        document.querySelector('h3.borda1').style.borderColor = 'white'
        document.querySelector('h3.borda2').style.borderColor = 'white'
        document.querySelector('h3.borda3').style.borderColor = 'white'
        trocar = false}
        

    else {
        document.querySelector('nav > ul').style.backgroundColor = 'rgb(212, 255, 143)'
        document.getElementById('sobre').style.backgroundColor = 'white'
        document.getElementById('projetos').style.backgroundColor = 'white'
        document.getElementById('contato').style.backgroundColor = 'white'
        document.querySelector('body').style.color = 'black'
        document.querySelector('section > ul').style.borderColor = 'black'
        document.querySelector('h3.borda1').style.borderColor = 'black'
        document.querySelector('h3.borda2').style.borderColor = 'black'
        document.querySelector('h3.borda3').style.borderColor = 'black'
        trocar = true
    }};

// Adiciona evento de clique e toque
document.getElementById('toggle-theme').addEventListener('click', alternarTema)
document.getElementById('toggle-theme').addEventListener('touchstart', alternarTema)


