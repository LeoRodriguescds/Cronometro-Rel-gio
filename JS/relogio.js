
let horas = document.querySelector("#horas-rel");
let minutos = document.querySelector("#minutos-rel")
let segundos = document.querySelector("#segundos-rel");

setInterval(() => {
    
    const data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();    
    let seg = data.getSeconds();

    hr < 10 ? horas.textContent = '0' + hr : horas.textContent = hr;

    min < 10 ? minutos.textContent = '0' + min : minutos.textContent = min;

    seg < 10 ? segundos.textContent = '0' + seg : segundos.textContent = seg;

}, 1000)

