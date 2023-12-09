let fontSize = 12;

text = document.getElementsByTagName("p");

function increaseText() {
  fontSize = fontSize + 1;
  text.style.fontSize = fontSize;
}

function decreaseText() {
  fontSize = fontSize - 1;
  document.getElementById('testparagraph').style.fontSize = fontSize + 'px';
  console.log(document.getElementById('testparagraph').style.fontSize);
}
