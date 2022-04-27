function CuentaVocales(){
    var texto=document.getElementById("texto").value;
    var cont=0;    
    for(i=0;i<texto.length;i++){
        if(texto[i]=='a'||texto[i]=='e'||texto[i]=='i'||texto[i]=='o'||texto[i]=='u'||texto[i]=='A'||texto[i]=='E'||texto[i]=='I'||texto[i]=='O'||texto[i]=='U'){
            cont++;            
        }
    }
    document.getElementById("p1").innerHTML=cont;
}