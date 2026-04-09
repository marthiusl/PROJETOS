async function carregarProdutos() {

    let vitrine = document.getElementById("vitrineProdutos");

    try { 
        let resposta = await fetch(`https://fakestoreapi.com/products`);

        if(!resposta.ok) {
            throw new Error("Erro ao carregar o catálogo de produtos.");
        }

        let listaProdutos = await resposta.json();
        
        console.log(listaProdutos)
       
       let cardsHtml = listaProdutos.map(produto => { 
        return ` 
        <div class="col-md-3 mb-4"> 
        <div class="card h-100 p-3"> 
        <img src="${produto.image}" class="card-img-top" alt="Imagem do 
        Produto" style="height: 200px; object-fit: contain;"> 
        <div class="card-body d-flex flex-column"> 
        <h6 class="card-title">${produto.title}</h6> 
        <h5 class="text-success mt-auto"> ${produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5> 
        <button class="btn btn-primary w-100 mt-2">Comprar</button> 
        </div> 
        </div> 
        </div> 
        `; 
        }).join(''); 

        vitrine.innerHTML = cardsHtml

    } catch (erroTratado) {
        
        console.error(erroTratado);
        
    } finally {

    }

    }