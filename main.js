const mostrarReloj = () => {
    let fecha = new Date();
    let hora = formatoHora(fecha.getHours());
    let minutos = formatoHora(fecha.getMinutes());
    let segundos = formatoHora(fecha.getSeconds());

    document.getElementById("hora").innerHTML = `${hora}:${minutos}:${segundos}`
}
//para la fecha en formato hora tengo que sumarle 1, porque el mes 0 no existe.
const mostrarFecha = () => {
    let fecha1 = new Date();
    let dia = formatoHora(fecha1.getDate());
    let mes = formatoHora(fecha1.getMonth()+1);
    let año = fecha1.getFullYear();

    document.getElementById("fecha").innerHTML = `${dia}/${mes}/${año}`


    //añadimos el pulso al borde
    document.getElementById("contenedor").classList.toggle("animar");
}


//para que la hora siempre tenga dos digitos en los segundos
const formatoHora = (hora) => {
    if(hora <10) {
        hora = "0" + hora;
    }
    return hora;
}



//para mostrar la funcion por pantalla y que se repita cada segundo hacemos esto
setInterval(() => {
    mostrarReloj();
    mostrarFecha(); // aquí se hace el toggle del borde
}, 1000);
