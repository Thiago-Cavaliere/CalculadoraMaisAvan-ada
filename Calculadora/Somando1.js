// Soma
const somaPrimeiraCaixa = document.querySelector('.soma-primeira-caixa');
const somaSegundaCaixa = document.querySelector('.soma-segunda-caixa');
const somaResultadoInput = document.querySelector('#soma-inputResultado');
const somaButton = document.querySelector('.soma-button');

function soma() {
    const n1 = Number(somaPrimeiraCaixa.value);
    const n2 = Number(somaSegundaCaixa.value);
    const resultado = n1 + n2;
    somaResultadoInput.value = resultado;

    somaPrimeiraCaixa.value = '';
    somaSegundaCaixa.value = '';
}

somaButton.addEventListener('click', soma);

// Multiplicação
const multiplicacaoPrimeiraCaixa = document.querySelector('.multiplicacao-primeira-caixa');
const multiplicacaoSegundaCaixa = document.querySelector('.multiplicacao-segunda-caixa');
const multiplicacaoResultadoInput = document.querySelector('#multiplicacao-inputResultado');
const multiplicacaoButton = document.querySelector('.multiplicacao-button');

function multiplicar() {
    const n1 = Number(multiplicacaoPrimeiraCaixa.value);
    const n2 = Number(multiplicacaoSegundaCaixa.value);
    const resultado = n1 * n2;
    multiplicacaoResultadoInput.value = resultado;

    multiplicacaoPrimeiraCaixa.value = '';
    multiplicacaoSegundaCaixa.value = '';
}

multiplicacaoButton.addEventListener('click', multiplicar);

// Divisão
const divisaoPrimeiraCaixa = document.querySelector('.divisao-primeira-caixa');
const divisaoSegundaCaixa = document.querySelector('.divisao-segunda-caixa');
const divisaoResultadoInput = document.querySelector('#divisao-inputResultado');
const divisaoButton = document.querySelector('.divisao-button');

function dividir() {
    const n1 = Number(divisaoPrimeiraCaixa.value);
    const n2 = Number(divisaoSegundaCaixa.value);
    if (n2 === 0) {
        alert("Não é possível dividir por zero.");
        return;
    }
    const resultado = n1 / n2;
    divisaoResultadoInput.value = resultado.toFixed(2); // Arredonda o resultado para 2 casas decimais

    divisaoPrimeiraCaixa.value = '';
    divisaoSegundaCaixa.value = '';
}

divisaoButton.addEventListener('click', dividir);

// Subtração
const subtracaoPrimeiraCaixa = document.querySelector('.subtracao-primeira-caixa');
const subtracaoSegundaCaixa = document.querySelector('.subtracao-segunda-caixa');
const subtracaoResultadoInput = document.querySelector('#subtracao-inputResultado');
const subtracaoButton = document.querySelector('.subtracao-button');

function subtrair() {
    const n1 = Number(subtracaoPrimeiraCaixa.value);
    const n2 = Number(subtracaoSegundaCaixa.value);
    const resultado = n1 - n2;
    subtracaoResultadoInput.value = resultado;

    subtracaoPrimeiraCaixa.value = '';
    subtracaoSegundaCaixa.value = '';
}

subtracaoButton.addEventListener('click', subtrair);


// Selecionando os inputs
const inputs = document.querySelectorAll('input[type="text"]');

// Adicionando um evento de input para cada input
inputs.forEach(input => {
    input.addEventListener('input', function() {
        // Remove qualquer caractere que não seja número
        this.value = this.value.replace(/\D/g, '');
    });
});
