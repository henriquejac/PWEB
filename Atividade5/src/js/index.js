async function getNoticias(){
    var noticias = await fetch("http://noticias.gov.br/noticias-api/noticias/busca?b=Sorocaba", {"mode": "no-cors"})
    
    return noticias;
}

window.onload = getNoticias;