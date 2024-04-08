function cadastrarCompra(){
  let valorProduto = prompt("Digite o valor do produto")
  valorProduto = parseFloat(valorProduto)
  if(valorProduto <= 0){
    alert("Digite um valor valido")
  }else{
    let valorPagamento = prompt("Digite o valor que o cliente deu")
    valorPagamento = parseFloat(valorPagamento)
    if(valorPagamento<=0){
      alert("Digite um valor valido")
    }else{
      if(valorPagamento >= valorProduto){
        let troco =valorPagamento - valorProduto
        alert("O valor do troco é: " + troco)
      } else{
        alert("Está faltando dinheiro ai!")
      }
    }
  }
}
