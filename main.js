let isRunning = false;
document.getElementById('tab').style.display = 'none';
let valor = {
    numeroInicial: document.getElementById('numerobase')
}

function verificar(){
    if(isRunning)
        return;
    
    isRunning = true;
    let numeroBase = valor.numeroInicial.value;
    (numeroBase < 10 && numeroBase > 0 && numeroBase.length > 0) ? calcular() : parar();
}
function limpar(){
    location.reload();
}
function calcular(){
    document.getElementById('tab').style.display = 'block';
    let i = 1;
    let numeroBase = valor.numeroInicial.value;
    let tabuada = document.getElementById('seltab');
    let seletor = document.getElementsByName('op');
    let item = undefined;

    if((seletor[0].checked)){
        while(i < 11){
            let resultado = numeroBase*i;
            item = document.createElement('option');
            item.text = `${numeroBase} x ${i} = ${resultado}`;
            tabuada.appendChild(item);
            ++i;
        }
    }else if(seletor[1].checked){
        while(i < 11){
            let resultado = numeroBase%i;
            item = document.createElement('option');
            item.text = `${numeroBase} % ${i} = ${resultado}`;
            tabuada.appendChild(item);
            ++i;
        }
        
    }
}

function parar(){
    alert("Insira um valor válido");
    location.reload();
}