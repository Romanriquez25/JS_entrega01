
var cantidad = document.querySelector('#cantidad').innerHTML;
var aumentar = document.querySelector('#aumentar');
var disminuir = document.querySelector('#disminuir');



aumentar.addEventListener('click', function () {
    
    var precioInicial = document.querySelector('#precioInicial').innerHTML;
    var precioFinal = parseInt (precioInicial) + parseInt(100000);

    cantidad++;
    document.querySelector('#cantidad').innerHTML = cantidad;
    if (cantidad > 1){
        document.querySelector('#precioInicial').innerHTML = precioFinal;

    } 
});

disminuir.addEventListener('click', function () {
    var precioInicial = document.querySelector('#precioInicial').innerHTML;
    var restaFinal = parseInt(precioInicial) - parseInt(100000);
    if (cantidad > 1){
        cantidad--;
        document.querySelector('#cantidad').innerHTML = cantidad;
        document.querySelector('#precioInicial').innerHTML = restaFinal;

    } else if (cantidad < 2){
        document.querySelector("#precioInicial").innerHTML = parseInt(100000);
        alert("No se puede disminuir mas");

    }
});

