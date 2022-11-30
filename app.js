var btnTranslate = document.querySelector("#btn-Translate");
var txtInput = document.querySelector("#txtInput");
var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text){
    return serverURL+"?text="+text;
}

function errorHandler(error){ //errorhandling using catch , this is a callback function
    console.log("Error Occured"+error);
    alert("Error Occured, Please try after sometime")
}

function clickHandler() {    
    var inputText = txtInput.value; //extracting inputText
    //fetch using translation URL, calling server for processing
   fetch(getTranslationURL(inputText)) 
   .then(read => read.json())
   .then(reads => {var translatedText=reads.contents.translated;
    outputDiv.innerText=translatedText;}) //output as innertext
    .catch(errorHandler)
   }

   btnTranslate.addEventListener("click",clickHandler);