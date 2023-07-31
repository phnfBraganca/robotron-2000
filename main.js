const controles = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]');
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

controles.forEach((controle) => {
    controle.addEventListener("click", (event) => {
        manipularDados(event.target.dataset.controle, event.target.parentNode, event.target.dataset.peca);
    });
});

function manipularDados(controle, elemento, parte) {
    const peca = elemento.querySelector('[data-contador]');

    if(controle === "-"){
        if(peca.value > 0){
            peca.value--;
            estatisticas.forEach((estatistica) => {
                atualizarValor(-pecas[parte][estatistica.dataset.estatistica]);
            });
        }
    }

    if(controle === "+"){
        peca.value++;
        estatisticas.forEach((estatistica) => {
            atualizarValor(pecas[parte][estatistica.dataset.estatistica]);
        });
    }
}

function atualizarValor(valor){
    estatisticas.forEach((estatistica) => {
        estatistica.textContent = parseInt(estatistica.textContent) + valor;
    })
}
