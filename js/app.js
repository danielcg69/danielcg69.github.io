// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  //valida que las dos password sean iguales
  function validpass(p){
    var pass=p.password.value
    var passr=p.rptpassword.value

    if (pass != passr){
    alert ("Las claves son distintas, Verifique por favor!")}
    else
    {alert("Claves coinciden")}
}
