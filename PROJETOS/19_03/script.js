class DevCard {
    constructor(nome, linguagem, nivel, nomeAvatar) {
        this.nome = nome;
        this.linguagem = linguagem;
        this.nivel = nivel;
        this.fotoUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${nomeAvatar}`;
    }

    renderizar() {

        var cor = ""

        if(this.nivel == "Júnior") {
            cor = "bg-success";
        } else if(this.nivel == "Pleno") {
            cor = "bg-warning";
        } else if(this.nivel == "Sênior") {
            cor = "bg-danger";
        } else {
            cor = "bg-info";
        }
        
        return `
            <div class="col-md-4 mb-3">
                <div class="card shadow-sm border-0">
                    <img src="${this.fotoUrl}" class="card-img-top bg-secondary bg-opacity-10 p-3" alt="Avatar" height="200">
                    
                    <div class="card-body text-center">
                        <h5 class="card-title fw-bold">
                            ${this.nome}
                        </h5>
                        <p class="card-text">Linguagem:<strong>${this.linguagem}</strong></p>
                        <span class="badge ${cor} fs-6">${this.nivel}</span>
                    </div>
                </div>
            </div>
        `;
    
    }
}



// A função que conectar o HTML com a classe
function fabricar() {
    // Capturar os elementos do HTML
    const nome = document.getElementById("input-nome").value;
    const lang = document.getElementById("input-lang").value;
    const nivel = document.getElementById("input-nivel").value;
    const tela = document.getElementById('container-cards');

    // Validação básica
    if (!nome || !lang) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Instanciando: Criando o objeto a partir da classe
    const novoDev = new DevCard(nome, lang, nivel, nome);

    // Renderização: Injetando o HTML do objeto na tela
    tela.innerHTML += novoDev.renderizar();

    document.getElementById("input-nome").value = "";
    document.getElementById("input-lang").value = "";
    
}


// Pegamos a div vazia do HTML onde os cards irão ficar
const tela = document.getElementById('container-cards');

// Instanciando (criando) os objetos da vida real!
let aluno1 = new DevCard("João Pé de Feijão", "Java", "Pleno", "João");
let aluno2 = new DevCard("Yuri Barros", "Java", "Júnior", "Yuri");
let aluno3 = new DevCard("Nicole Rodrigues", "Java", "Júnior", "Nicole");
let professor = new DevCard("Danilo Ferreira", "PHP + Laravel", "Sênior", "Danilo");


tela.innerHTML += aluno1.renderizar();
tela.innerHTML += aluno2.renderizar();
tela.innerHTML += aluno3.renderizar();
tela.innerHTML += professor.renderizar();
