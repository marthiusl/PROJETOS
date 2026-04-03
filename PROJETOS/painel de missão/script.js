
//1 Nosso Banco de Dados (Array vazio)
let bancoDeMissoes = [];
//2 Função que desenha a tela
function atualizarTela() {
    let ulHtml = document.getElementById('lista-html');
    ulHtml.innerHTML = ""; //Limpa a tela para não duplicar

    //O Loop For: Conta de 0 até o tamanho total a lista
    for(let i= 0; i < bancoDeMissoes.length; i++) {
        let missão = bancoDeMissoes[i]; //Pega a missão da posição atual

        //Injeta o HTML. Note o botão da Apagar passando o (i), que é a posição!
        ulHtml.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <strong>${missao}</strong>
            <button onclick="deletarMissao(${i})" class="btn btn-sm btn-danger">Apagar</button>
        </li>
    `;
    }
}
//3 Função de Adicionar
function adicionarMissao() {
    let tituloDigitado = document.getElementById('in-titulo').value;

    if(tituloDigitado === "") {
        alert("Digite o nome da missão!");
        return;
    }

    //Empurra (push) o texto para dentro do Array
    bancoDeMissoes.push(tituloDigitado);

    //Limpa o input
    documento.getElementById('in-titulo').value = "";

    //Manda desenhar a tela de novo
    atualizarTela();
}
//4 Função de Apagar
function deletarMissao(posicao) {
    //O splice vai na 'posicao' informada e arranca 1 item de lá
    bancoDeMissoes.splice(posicao, 1);

    //Manda desenhar a tela de novo (agora sem o item)
    atualizarTela();
}