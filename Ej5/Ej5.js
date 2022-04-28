function CuentaVocales(){
    var texto=document.getElementById("texto").value;
    const vocales="aeiouáéíóú", vocalesmayus = vocales.toUpperCase();
    var cont=0;    
    for(i=0;i<texto.length;i++)
    {
        for(j=0; j<vocales.length; j++)
        {
            if(vocales[j]==texto[i] || vocalesmayus[j]==texto[i])
            {
                cont++;
                break;
            }
        }
    }
    document.getElementById("p1").innerHTML=cont;
}