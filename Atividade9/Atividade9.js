function Maior(){

    var matriz = []
    
    for(var i = 0;i < 3;i++){
        matriz[i] = prompt("Digite o " + (i + 1) + " número");
    }

    alert(Math.max.apply(null, matriz));
}

function Crescente(){
    var matriz = [];

    for(var i = 0;i < 3;i++){
        matriz[i] = prompt("Digite o " + (i + 1) + " número");
    }

    alert(matriz.sort(function(a, b){ return a - b}))
}