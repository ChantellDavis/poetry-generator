function generatePoem(event) {
    event.preventDefault()

    new Typewriter("#poem", {
  strings: 'Because I could not stop for Death',
  autoStart: true,
  delay: 1,
  cursor: ""
});
    
}

let poetryInputElement = document.querySelector("#poetry-Input");
poetryInputElement.addEventListener("submit", generatePoem);