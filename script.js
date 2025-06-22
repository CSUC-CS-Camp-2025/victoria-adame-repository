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