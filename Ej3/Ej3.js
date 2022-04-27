function FunctionNumeros(){
    var num;
    for(i=0;i<=20;i++){
        num=i;
        if(i<10){
            document.getElementById("1").innerHTML +=" "+ i;
        }else{
            if(num<=20){
                document.getElementById("1").innerHTML+=" "+num;
            }
        }
        
    }
}