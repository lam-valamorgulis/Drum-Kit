var drum_list = document.querySelectorAll(".drum");
for (var i = 0; i<drum_list.length; i++) {
  drum_list[i].addEventListener("click", function gotsound() {
    var buttonHTML = this.innerHTML;
    makesound(buttonHTML);
    animation(buttonHTML);
  });
};

document.addEventListener("keydown", function(event) {
  makesound(event.key);
  animation(event.key);
});

function makesound(key) {
  if (key === 'w')
  {
    var audio1 = new Audio('sounds/crash.mp3');
    audio1.play();
  }
  else if (key === 'a')
  {
    var audio2 = new Audio('sounds/kick-bass.mp3');
    audio2.play();
  }
  else if (key === 's')
  {
    var audio3 = new Audio('sounds/snare.mp3');
    audio3.play();
  }
  else if (key === 'd')
  {
    var audio4 = new Audio('sounds/tom-4.mp3');
    audio4.play();
  }
  else if (key === 'j')
  {
    var audio5 = new Audio('sounds/tom-3.mp3');
    audio5.play();
  }
  else if (key === 'k')
  {
    var audio6 = new Audio('sounds/tom-2.mp3');
    audio6.play();
  }
  else if (key === 'l')
  {
    var audio7 = new Audio('sounds/tom-1.mp3');
    audio7.play();
  }
}

function animation(button) {
  var activeButton = document.querySelector("." + button);
  activeButton.classList.add("pressed");
  setTimeout(function() {activeButton.classList.remove("pressed");},100);
  }
