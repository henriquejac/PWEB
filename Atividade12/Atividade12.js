var quebrada = false; 
function abrir(janela){
    if(!quebrada){
        janela.src = "src/janelaaberta.png"
    }
    
}

function fechar(janela){
    if(!quebrada){
        janela.src = "src/janelafechada.png"
    }
}

function quebrar(janela){

    janela.src = "src/janelaquebra.png"
    quebrada = true

    document.querySelector("h1").innerText = "Vixe Quebrou. Agora não dá para abrir e fechar"
}