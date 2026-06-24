document.addEventListener("DOMContentLoaded", () => {
  const targetClass = ".flex-stretch";
  const elements = document.querySelectorAll(targetClass);

  elements.forEach(element => {
    const text = element.textContent.trim();

    element.innerHTML = "";

    [...text].forEach(char => {
      const span = document.createElement("span");

      span.innerHTML = char === " " ? "&nbsp;" : char;

      element.appendChild(span);
    });

    element.style.display = "flex";
    element.style.justifyContent = "space-between";
    element.style.width = "100%";
  });
});
