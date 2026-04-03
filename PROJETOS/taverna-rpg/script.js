  //Nosso banco de dados bruto
  let estoque = [
    {nome: "Espata longa", tipo: "Arma", preco: 150},
    {nome: "Pocao de Vida", tipo: "Pocao", preco: 50},
    {nome: "Escuto de Madeira", tipo: "Armadura", preco: 80},
    {nome: "Pocao de Mana", tipo: "Pocao", preco: 60},
];

function processarrmas() {
    let apenasArmas = estoque.filter(function(item) {
        return item.tipo === "Arma";
    });

    let cartoesHTML = apenasArmas.map(function(item) {
        return `
            <div class="col-md-4 b-3">
                <div class="card bg-secondary text-white p-3">
                    <h4>${item.nome}</h4>
                    <p>Preço: ${item.preco} Ouro</p>
                </div>
            </div>
        `;
    });

    document.getElementById('vitrine').innerHTML = cartoesHTML.join('');

    calculoTotal(apenasArmas)
}

function processarEstoque() {
    //1-Filter: Pega a lista original e deixa passar SÓ quem tem tipo == "Poção"
    let apenasPocoes = estoque.filter(function(item) {
        return item.tipo === "Pocao";
    });

    //2-MAP: Pega a lista de poções e transforma cada uma em um bloco de HTML
    let cartoesHTML = apenasPocoes.map(function(item) {
        return `
            <div class="col-md-4 mb-3">
                <div class="card bg-secondary text-white p-3">
                    <h4>${item.nome}</h4>
                    <p>Preço: ${item.preco} Ouro</p>
                </div>
            </div>
        `;
    });

    //O Map devolve um Array de textos HTML. Usamos o join('') para juntar tudo num textão só!
    document.getElementById('vitrine').innerHTML = cartoesHTML.join('');

    //Chamamos o cálculo matemático na sequência
    calculoTotal(apenasPocoes)
}

function calculoTotal(listaFiltrada) {
    //3-REDUCE: Pega a lista inteira, vai espremendo e somando numa variável chamada 'acumulador'
    let somaFinal = listaFiltrada.reduce(function(acumulador, itemAtual) {
        return acumulador + itemAtual.preco;
    }, 0); //Esse 0 é o valor inicial do acumulador!

    document.getElementById('valor-total').innerHTML = `Valor Estoque: ${somaFinal} Ouro`;
}