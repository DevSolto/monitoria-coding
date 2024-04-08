function contador(){
  let paragrafo = document.getElementById("contador")
  let valorAtual = parseInt(paragrafo.textContent)+1
  paragrafo.textContent = valorAtual

}