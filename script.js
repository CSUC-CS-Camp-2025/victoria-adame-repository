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



document.querySelectorAll("img").forEach(img => {
  img.addEventListener("click", () => {
    img.classList.add("shake");
    setTimeout(() => img.classList.remove("shake"), 500); // remove after animation
  });
});