const rel = document.querySelector("#container-relogio");
const cron = document.querySelector("#container-cronometro");
const bar = document.querySelector("#seletor")
const buttonContainer = document.querySelector('#container-botoes')

rel.style.display = 'none';
cron.style.display = 'flex';
buttonContainer.style.display = 'none';
bar.style.cssText = 'position: absolute; top: 98px; left: 56%; transition: 0.8s';

function seletorRel() {
    if(rel.style.display = 'none') {
        rel.style.display = 'flex';
        cron.style.display = 'none';
        buttonContainer.style.display = 'none'

        bar.style.cssText = 'position: absolute; top: 98px; left: 35.9%; transition: 0.8s'
    }
}

function seletorCron() {
    if(cron.style.display = 'none') {
        cron.style.display = 'flex';
        rel.style.display = 'none';
        buttonContainer.style.display = 'flex'

        bar.style.cssText = 'position: absolute; top: 98px; left: 56%; transition: 0.8s'
    }
}