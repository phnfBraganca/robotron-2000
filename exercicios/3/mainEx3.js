const botao = document.querySelectorAll('[data-botao]');
const cores = document.querySelectorAll('[cor]');

function manipularLista(acao){
    if(acao === "Sumir"){
        cores.forEach(element => {
            element.innerHTML = " ";
        })
        // console.log("Sumir Lista");
    }
    if(acao === "Aparecer"){
        cores.forEach(element => {
            element.innerHTML = `Tinta ${element.attributes[0].nodeValue}`;
        })
        // console.log("Aparecer Lista");
    }

}

botao.forEach(element => {
    element.addEventListener("click", (event) => {
        manipularLista(event.target.dataset.botao);
    });
});
