const form = document.getElementById('formulario');
const campo = document.getElementById('gb');

form.addEventListener('submit', function (e) {
  let kb = campo.value * 1000000
  let mb = campo.value * 1000
  let tb = campo.value * 0.001
  let pb = campo.value * 0.000001
  let eb = campo.value * 0.000000001 

  document.getElementById("kb").textContent = kb
  document.getElementById("mb").textContent = mb
  document.getElementById("tb").textContent = tb
  document.getElementById("pb").textContent = pb
  document.getElementById("eb").textContent = eb

  e.preventDefault();
});