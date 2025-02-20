function calcular(tipo, valor){
    
    if(tipo === 'acao'){

        if (valor === 'c'){
            limparResultado();
        } 
        
        if (valor != 'c' && valor != '='){
            concatenarValor(valor)
        }

        if (valor === '='){
            var valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
    } else if(tipo === 'valor'){
        concatenarValor(valor)
    }
}

function limparResultado(){
    document.getElementById('resultado').value = ''
}

function concatenarValor(valor){
    document.getElementById('resultado').value += valor
}