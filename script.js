// Abrir e fechar o menu em ecrãs pequenos
const botaoMenu = document.getElementById("botao-menu");
const menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
  const aberto = menu.classList.contains("aberto");
  botaoMenu.setAttribute("aria-expanded", aberto);
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

// Fechar o menu depois de escolher uma ligação
menu.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menu.classList.remove("aberto");
    botaoMenu.setAttribute("aria-expanded", "false");
  });
});

// Mostrar o ano actual no rodapé
document.getElementById("ano").textContent = new Date().getFullYear();

// Formulário de contacto: abre o programa de e-mail
const formulario = document.getElementById("formulario");

if (formulario) {
  formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const destino = "info@nexcode.co.mz"; // Substitua pelo e-mail real da NEXCODE

    const corpo = "Nome: " + nome + "\nE-mail: " + email + "\n\nMensagem:\n" + mensagem;
    document.getElementById("aviso-formulario").textContent =
      "A abrir o seu programa de e-mail...";

    window.location.href = "mailto:" + destino +
      "?subject=" + encodeURIComponent(assunto) +
      "&body=" + encodeURIComponent(corpo);
  });
}
