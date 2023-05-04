// explore.js
const synth = window.speechSynthesis;
let select, button, voices, image;
window.addEventListener('DOMContentLoaded', init);

function init() {
  select = document.getElementById('voice-select');
  button = document.getElementsByTagName('button')[0];
  image = document.querySelector("[alt='Smiling face']");
  console.log(button.innerHTML);

  //Get voices and append to dropdown
  setTimeout(() => {
    voices = synth.getVoices();

    for(let i = 0; i < voices.length; i++){
      let option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      option.setAttribute('value', voices[i].name);
      select.appendChild(option);
    }
  }, 100);

  button.addEventListener('click', function(){
    speakText();
  });
}

function speakText(){
  let utterance = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
  for(let i = 0; i < voices.length; i++){
    if(voices[i].name == select.value){
      utterance.voice = voices[i];
      break;
    }
  }
  image.setAttribute('src', 'assets/images/smiling-open.png');
  setInterval(() => {
    if(!synth.speaking){
      image.setAttribute('src', 'assets/images/smiling.png');
    }
  }, 100);
  synth.speak(utterance);
}