document.addEventListener("DOMContentLoaded", () => {
    const abas = document.querySelectorAll(".aba");
    const conteudos = document.querySelectorAll(".conteudo");

    abas.forEach(aba => {
        aba.addEventListener("click", (event) => {
            event.preventDefault();
            
            // Remover a classe 'active' de todas as abas
            abas.forEach(aba => aba.classList.remove("active"));

            // Esconder todos os conteúdos
            conteudos.forEach(conteudo => conteudo.style.display = "none");

            // Mostrar o conteúdo correto
            const target = document.getElementById(aba.dataset.target);
            target.style.display = "block";

            // Adicionar 'active' à aba clicada
            aba.classList.add("active");
        });
    });
});
