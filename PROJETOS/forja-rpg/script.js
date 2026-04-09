//ARROW FUNCTION: Uma função de soma escrita em 1 única linha!
const somarDano = (danoBase, buff) => danoBase + buff;

let espadaBase = {
    nome: "Espada de Ferro",
    dano: 15,
    durabilidade: 100
};

function forjaArma() {
    let tipoEscolhido = document.getElementById('encantamento').value;

    // Exemplo de estrutura para você se basear: 
let catalogoDeBuffs = { 
    fogo: { elemento: "Fogo", danoExtra: 10, nomeAdicional: "Flamejante" }, 
    gelo: { elemento: "Gelo", danoExtra: 8, nomeAdicional: "Glacial"}, 
    raio: { elemento: "Raio", danoExtra: 15, nomeAdicional: "Trovejante" } 
    }; 

    let buffSelecionado = (catalogoDeBuffs[tipoEscolhido]);

    //SPREAD OPERATOR (...): Ele pega os pedaços da espada antiga, os pedaços do buff mágico, e cria uma arma NOVA sem estragar a original.
    let espadaEvoluida = {
        ...espadaBase,
        ...buffSelecionado,
        nome: 'Espada + nomeAdicional', //Sobreescreve o nome antigo
        danoTotal: somarDano(espadaBase.dano, buffSelecionado.danoExtra)
    };

    exibirResultado(espadaEvoluida);
}

function exibirResultado(arma) {
    //DESTRUCTURING: Arranca os dados de dentro do objeto e vira variáveis soltas!
    const {nome, danoTotal, elemento, durabilidade} = arma;

    let div = document.getElementById('resultado');
    div.innerHTML = `
        <div class="col-md-4 mb-3">
            <div class="card bg-secondary text-white p-3">
                <h3>Item: ${nome}</h3>
                <p>Dano Máximo: ${danoTotal}</p>
                <p>Elemento Especial: ${elemento}</p>
                <p>Durabilidade: ${durabilidade}</p>
            </div>
        </div>
    `; 
   
}

function estoqueCompleto(){
    

    let materiaisBasicos = [
        {nome: "Ferro", tipo: "comum", quantidade: 15},
        {nome: "Madeira", tipo: "comum", quantidade: 5},
        {nome:"Couro", tipo: "comum", quatidade: 5}
    ];

    let materiaisMagicos = [
        {nome: "Pó de fada", tipo: "magico", quantidade: 10},
        {nome: "Cristal de Fogo", tipo: "magico", quantidade: 20},
        {nome: "Cristal de Luz", tipo: "magico", quantidade: 25}
    ];

    let depositoTotal = {
        ...materiaisBasicos,
        ...materiaisMagicos,
    }

    console.log(depositoTotal)
    

}