function Palabras(){
    const palabra=document.getElementById("texto").value;
    const palabra2=document.getElementById("texto1").value;
    const sol= palabra+palabra2;
    document.getElementById("1").innerHTML=sol;
}