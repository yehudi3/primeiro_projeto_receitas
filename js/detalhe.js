const receita = JSON.parse(
  localStorage.getItem("receitaSelecionada")
);

if (!receita) {
  window.location.href = "index.html";
}

document.getElementById("foto").src = receita.imagem;


document.getElementById("nome").innerText = receita.nome;
document.getElementById("categoria").innerText = receita.categoria;
document.getElementById("ingredientes").innerText = receita.ingredientes;
document.getElementById("preparo").innerText = receita.preparo;

function voltar() {
  window.history.back();
}
