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

window.onload = () => {
  document.querySelectorAll("p, img, h1").forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 10s";
    setTimeout(() => el.style.opacity = 1, 300);
  });
};