document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelector(".carousel-items");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
  
    let currentIndex = 0;
    const totalItems = items.children.length;
    const itemWidth = carousel.clientWidth;
  
    prevBtn.addEventListener("click", function() {
      currentIndex = currentIndex > 0 ? currentIndex - 1 : totalItems - 1;
      updateCarousel();
    });
  
    nextBtn.addEventListener("click", function() {
      currentIndex = currentIndex < totalItems - 1 ? currentIndex + 1 : 0;
      updateCarousel();
    });
  
    function updateCarousel() {
      items.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  });
  