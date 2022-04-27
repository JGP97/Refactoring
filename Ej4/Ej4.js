function Myfunction(){
    document.getElementById("alumno1").innerHTML+= (parseFloat(document.getElementById("nota1").value)+parseFloat(document.getElementById("nota2").value)+parseFloat(document.getElementById("nota3").value))/3;
    document.getElementById("alumno2").innerHTML+= (parseFloat(document.getElementById("nota21").value)+parseFloat(document.getElementById("nota22").value)+parseFloat(document.getElementById("nota23").value))/3;
}