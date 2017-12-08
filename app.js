var startButton = document.querySelector('.start');
var stopButton = document.querySelector('.stop');
var driSpeed = 0;

function dribbling(){
  var img = document.querySelector('img');
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft) + 10 + 'px';
  if (img.style.left == '1000px') {
    stop();
    reverseStart();
  }
}

function dribbleBack (){
  var img = document.querySelector('img');
  img.classList.add("return");
  currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft) - 10 + 'px';
  if (img.style.left == '0px') {
    stop();
    img.classList.remove("return");
    direction = false;
    start();
  }
}

function start(){
  driSpeed = setInterval(dribbling, 100);
}

function reverseStart(){
  driSpeed = setInterval(dribbleBack, 100);
}

function stop(){
  clearInterval(driSpeed);
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
