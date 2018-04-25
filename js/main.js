'use strict';

window.addEventListener('keydown', function(e){
  
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  const key = document.querySelector(`key[data-key = "${e.keyCode}"]`);
   
  if(!audio) return; //stop the function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  // setTimeout(function(){

  // }, 0.07);
});