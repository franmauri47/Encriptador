let input = document.getElementById("cuadroInput");
let caracteresValidos = "abcdefghijklmnñopqrstuvwxyz., ".split('');
let output = document.getElementById("cuadroOutput");
input.focus();

function esCaracterValido(letra){
    for(let i = 0; i < caracteresValidos.length; i++){
        if (letra == caracteresValidos[i]){
            return true;
            break;          
        } else if (i == (caracteresValidos.length - 1)){
            return false;
        }
    }
}

function encriptar(){
    let textoIntroducido = input.value.toLowerCase();
    let textoIntroducidoArray = textoIntroducido.split('');    
    let textoEncriptado = "";

    if (textoIntroducido.trim() == "") {
        alert("Por favor, introduzca un mensaje primero.");        
    } 
    else {
        for(let i=0; i<textoIntroducidoArray.length; i++){
            if(esCaracterValido(textoIntroducidoArray[i]) && (textoIntroducidoArray[0] != " ")){
                textoEncriptado = textoIntroducido.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
                output.style.backgroundImage = "none";
            } 
            else {                
                alert("Por favor, introducir mensaje sin caracteres especiales ni acentos.");
                textoEncriptado = "";
                break;
            }
        }
    }    
    document.getElementById("cuadroOutput").innerHTML = textoEncriptado;
    input.focus();
}

function desencriptar(){
    let textoIntroducido = input.value.toLowerCase();
    let textoIntroducidoArray = textoIntroducido.split('');    

    if (textoIntroducido.trim() == "") {
        alert("Primero introduzca un mensaje");
    } 
    else {
        for(let i=0; i<textoIntroducidoArray.length; i++){
            if(esCaracterValido(textoIntroducidoArray[i]) && textoIntroducidoArray[0] != " "){
                textoDesencriptado = textoIntroducido.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
                output.style.backgroundImage = "none";
            } 
            else {
                textoDesencriptado = "";
                alert("Por favor, introducir mensaje sin caracteres especiales ni acentos.");
                break;
            }
        }
    }    
    document.getElementById("cuadroOutput").innerHTML = textoDesencriptado;
    input.focus();
}

function copiarTexto(){
    let resultado = document.getElementById("cuadroOutput");

    if (resultado.innerHTML.trim() == "") {
        alert("Primero debe encriptar/desencriptar un mensaje");
    } 
    else {
        navigator.clipboard.writeText(resultado.innerHTML);
        alert("Texto copiado!");
    }
    input.focus();
}