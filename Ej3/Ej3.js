function EscribeNumeros1a20(){
    let number;
    for(i=0;i<=20;i++){
        number=i;
        if(i<10){
            document.getElementById("1").innerHTML +=" "+ i;
        }
        else if(number<=20){
            document.getElementById("1").innerHTML+=" "+number;
        }
        
    }
}