'use strict';


function playSound(e){
  var audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
  var key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
   
  if(!audio) return; //stop the function from running all together
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
  // setTimeout(function(){

  // }, 0.07);
}  

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitioned', removeTransition));
window.addEventListener('keydown', playSound);