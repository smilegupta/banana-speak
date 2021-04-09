var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

serverURL = "https://api.funtranslations.com/translate/minion.json";

function Link(text) {
  return serverURL + "?text=" + text;
}

function clickEvent() {
  fetch(Link(textInput.value))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;
    });
}

btnTranslate.addEventListener("click", clickEvent);
