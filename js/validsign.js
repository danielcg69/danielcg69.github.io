function validpass(p){
    var pass=p.password.value
    var passr=p.rptpassword.value

    if (pass != passr){
    alert ("Las claves son distintas, Verifique por favor!")}
    else
    {alert("Claves coinciden")}
}
