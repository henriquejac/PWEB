function jokenpo(x){
    var opt = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    var optName;
    var xName;
    var status;
    switch(opt){
        case 1:
            optName = "Tesoura"
            break;
        case 2:
            optName = "Pedra"
            break;
        case 3:
            optName = "Papel"
            break;
    }
    switch(x){
        case 1:
            xName = "Tesoura"
            break;
        case 2:
            xName = "Pedra"
            break;
        case 3:
            xName = "Papel"
            break;
    }
    status = x == opt ? "Empate" : x > opt ? x != 3 || opt != 1? "Você ganhou!" : "O mestre ganhou!" : opt != 3 || x != 1 ? "O mestre ganhou!": "Você ganhou!";

    alert("Você: " + xName + "\n" +"    x  \nMestre: " + optName + "\n\n" + status)
    
}