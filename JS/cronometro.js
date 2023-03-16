    
    let horasCronometro = document.querySelector('#horas-cron');
    let minutosCronometro = document.querySelector('#minutos-cron');
    let segundosCronometro = document.querySelector('#segundos-cron');

    let s = 0;
    let m = 0;
    let h = 0;

// SUMIR BOTÃO DE INICIAR
    let ini = document.querySelector('#iniciar')
    let botãoContainer = document.querySelector('#container-botoes')
    ini.style.cssText = 'Display: flex; Background-Color: #00ff00 ; transition: 1s';
    botãoContainer.style.cssText = "position: absolute; top: 75vh; left: max(36.8vw, 20vw); transition: 1s"

    let cronometro;

function start() {

    ini.style.cssText = 'Display: none; Background-Color: #00ff00 ; transition: 1s';
    botãoContainer.style.cssText = "position: absolute; top: 75vh; left: max(41vw, 20vw);"

    cronometro = setInterval(function timer() {
        s++

        if(s > 59) {
            s = 00;
            m++;
        }
        
        if(m > 59) {
            m = 00;
            h++;
        }

       if(s < 10) {
             segundosCronometro.textContent = "0" + s
            } else { 
                segundosCronometro.textContent = s; 
            }
       
        if(m < 10) {
             minutosCronometro.textContent = "0" + m
            } else { 
                minutosCronometro.textContent = m; 
            }
       
        if(h < 10) {
             horasCronometro.textContent = "0" + h
            } else { 
                horasCronometro.textContent = h; 
            }

    }, 1000);

}


function pausar() {
    clearInterval(cronometro)
    ini.style.cssText = 'Display: flex; Background-Color: #00ff00 ; transition: 1s';
    botãoContainer.style.cssText = "position: absolute; top: 75vh; left: max(36.8vw, 20vw);"
}

function zerar() {
    clearInterval(cronometro, 500);
        s = 0;
        segundosCronometro.textContent = "00";
    
        m = 0;
        minutosCronometro.textContent = "00";
    
        h = 0;
        horasCronometro.textContent = "00";
        
        ini.style.cssText = 'Display: flex; Background-Color: #00ff00 ; transition: 1s';
        botãoContainer.style.cssText = "position: absolute; top: 75vh; left: max(36.8vw, 20vw);"

}



