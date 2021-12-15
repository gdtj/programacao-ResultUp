//adicionar os produtos

const items =[
    {
        id: 0,
        nome: "bolo de chocolate",
        img: "bolo-de-chocolate.jpg",
        quantidade: 0,
        preco: 185,
    },
    {
        id: 1,
        nome: "bolo de morango",
        img: "bolo de morango.jpg",
        quantidade: 0,
        preco: 190,
    },
    {
        id: 2,
        nome: "bolo de prestigio trufado",
        img: "bolo-de-prestigio-trufado.jpg",
        quantidade: 0,
        preco: 220,
    },
    {
        id: 3,
        nome: "bolo arco-iris",
        img: "bolo arco-iris.jpg",
        quantidade: 0,
        preco: 130,
    },
    {
        id: 4,
        nome: "bolo leite ninho",
        img: "bolo leite ninho.jpg",
        quantidade: 0,
        preco: 200,
    },
]
function inicializarConfeitaria(){
    var cantainerProdutos=document.getElementById('Produtos')
    items.map((val)=>{
        cantainerProdutos.innerHTML+=`
        <div class='produto-single'>
                <img src='${val.img}'width="250" />
                <p>${val.nome}(R$ ${val.preco})</p>
                <button key='${val.id}'class='adicionar' onclick='aumentaQuantidade(${val.id})'>Adicionar ao carrinho</button>
        `
    })
}

   
function atualizarCarrinho(){      
    var containerCarrinho = document.getElementById("Carrinho");
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
    if(val.quantidade >0){
        containerCarrinho.innerHTML+= `
        <div class="info-single-checkout">
        <p style="float:left;">Produtos: `+val.nome+`  ||Preço R$ ${val.preco*val.quantidade} ||
        Quantidade: `+val.quantidade+`</p>
        <div style="clear:both"></div>
        
        </div>

        `;
    }
})
}   

function aumentaQuantidade(id){
    for (let i = 0; i < items.length; i++) {
        if(items[i].id==id){
          items[i].quantidade++
        }
    }
    atualizarCarrinho()
  }