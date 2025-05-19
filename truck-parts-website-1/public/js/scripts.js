document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach((carousel) => {
        const items = carousel.querySelector(".carousel-items");
        const prevButton = carousel.querySelector(".carousel-control.prev");
        const nextButton = carousel.querySelector(".carousel-control.next");
        const itemWidth = carousel.querySelector(".carousel-item").offsetWidth;
        let currentIndex = 0;

        // Função para atualizar a posição do carrossel
        const updateCarousel = () => {
            items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
        };

        // Evento para o botão "Anterior"
        prevButton.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        // Evento para o botão "Próximo"
        nextButton.addEventListener("click", () => {
            if (currentIndex < items.children.length - 5) {
                currentIndex++;
                updateCarousel();
            }
        });

        // Adiciona efeito de hover nos itens
        const carouselItems = carousel.querySelectorAll(".carousel-item");
        carouselItems.forEach((item) => {
            const img = item.querySelector("img");
            const productName = document.createElement("div");
            productName.textContent = img.alt; // Usa o atributo "alt" como nome do produto
            productName.style.position = "absolute";
            productName.style.bottom = "10px";
            productName.style.left = "50%";
            productName.style.transform = "translateX(-50%)";
            productName.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            productName.style.color = "#fff";
            productName.style.padding = "5px 10px";
            productName.style.borderRadius = "5px";
            productName.style.fontSize = "14px";
            productName.style.display = "none";
            item.style.position = "relative";
            item.appendChild(productName);

            item.addEventListener("mouseenter", () => {
                img.style.transform = "scale(1.1)";
                img.style.transition = "transform 0.3s ease";
                productName.style.display = "block";
            });

            item.addEventListener("mouseleave", () => {
                img.style.transform = "scale(1)";
                productName.style.display = "none";
            });
        });
    });
});