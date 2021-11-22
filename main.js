function area()
{
    var l = document.getElementById("length").value;
   // window.alert(l*l);
   document.getElementById("result").innerHTML="area :"+(l*l);
}

function peri()
{
    var l = document.getElementById("length").value;
    //window.alert("Perimeter :"+(4*l));
    document.getElementById("result").innerHTML="Perimeter :"+(l*l);
}