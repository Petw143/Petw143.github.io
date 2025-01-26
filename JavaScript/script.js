document.addEventListener("DOMContentLoaded", () => {
    const abas = document.querySelectorAll("nav a");  // Seleciona os links no header
    const conteudos = document.querySelectorAll(".conteudo");

    abas.forEach(aba => {
        aba.addEventListener("click", (event) => {
            event.preventDefault();

            // Remover a classe 'active' de todos os links
            abas.forEach(link => link.classList.remove("active"));

            // Esconder todos os conteúdos
            conteudos.forEach(conteudo => conteudo.style.display = "none");

            // Mostrar o conteúdo correto
            const target = document.querySelector(aba.getAttribute("href"));
            if (target) {
                target.style.display = "block";  // Exibe o conteúdo com o id correspondente
            }

            // Adicionar 'active' ao link clicado
            aba.classList.add("active");
        });
    });

    // Garantir que o primeiro conteúdo seja exibido inicialmente
    const primeiroConteudo = document.querySelector("nav a[href='#inicio']");
    if (primeiroConteudo) {
        primeiroConteudo.click();  // Simula o clique na primeira aba para exibir seu conteúdo
    }
});
