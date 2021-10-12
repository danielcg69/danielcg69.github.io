function validpass(p){
    var pass=p.password.value
    var passr=p.rptpassword.value

    if (pass != passr){
    alert ("las claves son distintas, Verifique por favor")}
    else
    {alert("CLAVES OK")}
}
