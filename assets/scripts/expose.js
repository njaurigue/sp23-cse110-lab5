// expose.js
let select, audio, volume, icon;

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()
  audio = document.getElementsByClassName("hidden")[0];
  volume = document.getElementById('volume');
  icon = document.querySelector("[alt='Volume level 2']");
  select = document.getElementById('horn-select');

  volume.addEventListener('input', function(){
    updateVolume();
  });
  select.addEventListener('input', function(){
    updateImage(select.value);
  });
  document.getElementsByTagName('button')[0].addEventListener('click', function(){
    audio.play();
    if(select.value == 'party-horn'){
      jsConfetti.addConfetti()
    }
  });
}

function updateImage(val){
  document.querySelector("[alt='No image selected']").setAttribute('src', 'assets/images/' + val + '.svg');
  audio.setAttribute('src', 'assets/audio/' + val + '.mp3');
}

function updateVolume(){
  let val = volume.value;
  if(val == 0){
    icon.setAttribute('src', 'assets/icons/volume-level-0.svg');
  }else if(val < 33){
    icon.setAttribute('src', 'assets/icons/volume-level-1.svg');
  }else if(val < 67){
    icon.setAttribute('src', 'assets/icons/volume-level-2.svg');
  }else{
    icon.setAttribute('src', 'assets/icons/volume-level-3.svg');
  }
  audio.volume = (val*1.0 / 100);
}