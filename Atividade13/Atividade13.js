function check(){
    var radios = document.getElementsByName('caps');
    if(radios[0].checked){
        maiusculas();
    }else{
        minusculas();
    }
}

function maiusculas(){
    document.querySelector("#texto").value = document.querySelector("#texto").value.toUpperCase() ;
}

function minusculas(){
    document.querySelector("#texto").value = document.querySelector("#texto").value.toLowerCase();
}