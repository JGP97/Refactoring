function CalculoDeMedias(){
    let Alum1_PrimeraNota, Alum1_SegundaNota, Alum1_TerceraNota, Alum2_PrimeraNota, Alum2_SegundaNota, Alum2_TerceraNota;

    //Variables de las notas del primer Alumno.
    Alum1_PrimeraNota = parseFloat(document.getElementById("1Alum_nota1").value);
    Alum1_SegundaNota = parseFloat(document.getElementById("1Alum_nota2").value);
    Alum1_TerceraNota = parseFloat(document.getElementById("1Alum_nota3").value);

    //Variables de las notas del segundo Alumno.
    Alum2_PrimeraNota = parseFloat(document.getElementById("2Alum_nota1").value);
    Alum2_SegundaNota = parseFloat(document.getElementById("2Alum_nota2").value);
    Alum2_TerceraNota = parseFloat(document.getElementById("2Alum_nota3").value);

    //Cálculo de la media de los dos alumnos.
    document.getElementById("alumno1").innerHTML += ( Alum1_PrimeraNota +  Alum1_SegundaNota +  Alum1_TerceraNota) / 3;
    document.getElementById("alumno2").innerHTML += ( Alum2_PrimeraNota +  Alum2_SegundaNota +  Alum2_TerceraNota) / 3;

   
}    


