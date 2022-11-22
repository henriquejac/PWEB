function validar(){

    if(document.forms.form1.elements[0].value.length < 10){
        alert("Preencha campo NOME corretamente!");

      return false;  
    }
    
    if(!document.querySelector("#email").value.includes('@') && !document.querySelector("#email").textContent.includes('.')){
        alert("Preencha campo E-MAIL corretamente!");
       return false;  
    }
    
    if(document.querySelector("#comentario").value.length < 20){
        alert("O campo precisa estar com pelo menos 20 caracteres");

       return false;  
    }

    if(document.querySelector('#sim').checked == true){

        alert("Que bom que você voltou a visitar esta página!");
        return  "Que bom que você voltou a visitar esta página!"
    }else{
        alert("Volte sempre à está página!"); 
         return "Volte sempre à está página!";
    }

    return true;
}