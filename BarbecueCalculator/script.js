let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao  = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

function carnePP(duracao) {
    return (duracao >= 8) ? 1200 : (duracao >= 6) ? 800 : 400;

}

function refriPP(duracao) {
    return (duracao >= 8) ? 1500 : (duracao >= 6) ? 900 : 300;

}

function aguaPP(duracao) {
    return (duracao >= 8) ? 1000 : (duracao >= 6) ? 750 : 500;
    
}

function cervejaPP(duracao) {
    return (duracao >= 8) ? 2800 : (duracao >=6) ? 2100 : 1400;   

}

function custoTTcarne (quantidade) {
    return quantidade * 34.85;
}


function custoTTrefri (quantidade) {
    return quantidade * 3.51;
}

function custoTTagua (quantidade) {
    return quantidade * 2.50;
}

function custoTTcerveja (quantidade) {
    return quantidade * 3.60;
}

function calcular() {
    console.log('Calculando...');

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) * criancas / 2);
    let qtdTotalRefri = refriPP(duracao) * adultos + (refriPP(duracao) * criancas / 2);
    let qtdTotalAgua  = aguaPP(duracao) * adultos + (aguaPP(duracao) * criancas / 2);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    
    let valorTotalCarne = custoTTcarne(qtdTotalCarne);
    let valorTotalRefri = custoTTrefri(qtdTotalRefri);
    let valorTotalAgua  = custoTTagua(qtdTotalAgua);
    let valorTotalCerveja = custoTTcerveja(qtdTotalCerveja);

    let valorTotalGasto = valorTotalCarne + valorTotalRefri + valorTotalAgua + valorTotalCerveja;

    resultado.innerHTML = 
    `<p style="background-color: lightblue; 
               font-weight: bold; 
               font-family: 'Arial', 'Helvetica', sans-serif;
               padding: 5px; ">
               ${qtdTotalCarne} Kg de Carne ${valorTotalCarne} R$</p>`
    
    resultado.innerHTML += 
    `<p style="background-color: lightblue; 
                 font-weight: bold; 
                 font-family: 'Arial', 'Helvetica', sans-serif; 
                 padding: 5px;">                  
                 ${qtdTotalRefri} Latas Refri ${valorTotalRefri} R$</p>`   
    
    resultado.innerHTML += 
    `<p style="background-color: lightblue; 
                 font-weight: bold; 
                 font-family: 'Arial', 'Helvetica', sans-serif; 
                 padding: 5px;">                  
                 ${qtdTotalAgua} Garrafas de Água ${valorTotalAgua} R$</p>`
    
    resultado.innerHTML += 
    `<p style="background-color: lightblue; 
                 font-weight: bold; 
                 font-family: 'Arial', 'Helvetica', sans-serif; 
                 padding: 5px;">                  
                 ${qtdTotalAgua} Garrafas de Água ${valorTotalAgua} R$</p>`  
      
    resultado.innerHTML += 
    `<p style="background-color: lightblue; 
                 font-weight: bold; 
                 font-family: 'Arial', 'Helvetica', sans-serif; 
                 padding: 5px;
                 font-size: 20px;">                  
                 Gasto TOTAL  ${valorTotalGasto} R$</p>`                            
             
}