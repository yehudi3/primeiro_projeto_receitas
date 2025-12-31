const botao = document.getElementById("buscar");
const input = document.getElementById("receita");
const resultado = document.getElementById("resultado");

botao.addEventListener("click", buscarReceitas);

function buscarReceitas() {
  const nome = input.value;

  fetch("https://backend-receitas-2.onrender.com/receitas?nome=" + nome)
    .then(response => response.json())
    .then(dados => {
      mostrarReceitas(dados);
    })
    .catch(err => {
      console.error("Erro:", err);
    });

    input.value = "";


  
}

function mostrarReceitas(receitas) {
  resultado.innerHTML = "";
  receita.placeholder = "Search for a recipe...";

  if (receitas.length === 0) {

  receita.placeholder = "We did not find any recipe.";
  return;
}

    
  receitas.forEach(r => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="img" style="background-image:url('${r.imagem}')"></div>
      <div class="content">
        <h3>${r.nome}</h3>
        <span class="meta">${r.categoria}</span>
      </div>
    `;

    card.addEventListener("click", () => {
      localStorage.setItem("receitaSelecionada", JSON.stringify(r));
      window.location.href = "detalhe.html";

    });

    resultado.appendChild(card);
  });
}

