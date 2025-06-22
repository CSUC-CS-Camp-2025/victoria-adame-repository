document.addEventListener("DOMContentLoaded", () => {
  const text = "Guerrero";
  const heading = document.querySelector("h1");
  heading.textContent = "";
  let i = 0;
  const type = () => {
    if (i < text.length) {
      heading.textContent += text[i];
      i++;
      setTimeout(type, 150);
    }
  };
  type();
});

const revealElements = document.querySelectorAll("p, img");

window.addEventListener("scroll", () => {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
});

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = "translateY(20px)";
  el.style.transition = "all 1s ease";
});