function displayPoem(response) {
    
        new Typewriter("#poem", {
  strings: response.data.answer,
  autoStart: true,
  delay: 1,
  cursor: ""
});
}



function generatePoem(event) {
    event.preventDefault()

    let infoInput = document.querySelector("#Info");
let prompt = `Can you please make a poem about ${Info.value}`
let context = "You are a expert poem write who loves to write short and sweet poems in HTML format and please do not display you answer the context just display the poem and poem title please. Please do not display that it is html"
let apiKey = "50a8380f4oe8265a54940c506tc9b3e0";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

axios.get(apiUrl).then(displayPoem);
  
    
}

let poetryInputElement = document.querySelector("#poetry-Input");
poetryInputElement.addEventListener("submit", generatePoem);