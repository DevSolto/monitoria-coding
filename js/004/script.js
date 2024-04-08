function antesDepois(){
  let numero = prompt("Digite qualquer numero inteiro")
  let antecessor = numero - 1
  let sucessor = parseInt(numero)  + 1 
  alert(
    "O antecessor de "+ numero + " é " + antecessor + "\n" +
    "O sucessor de "+ numero + " é " + sucessor + "\n"
  )
}