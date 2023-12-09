var zoom = 1;

$('.zoom').on('click', function(){
  zoom += 0.1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});
$('.zoom-init').on('click', function(){
  zoom = 1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});
$('.zoom-out').on('click', function(){
  zoom -= 0.1;
  $('.target').css('transform', 'scale(' + zoom + ')');
});
// set up text to print, each item in array is new line
var aText = new Array(
"There are only 10 types of people in the world:", 
"Those who understand binary, and those who don't"
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
sContents =  ' ';
iRow = Math.max(0, iIndex-iScrollAt);
var destination = document.getElementById("typedtext");

while ( iRow < iIndex ) {
sContents += aText[iRow++] + '<br />';
}
destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
if ( iTextPos++ == iArrLength ) {
iTextPos = 0;
iIndex++;
if ( iIndex != aText.length ) {
iArrLength = aText[iIndex].length;
setTimeout("typewriter()", 500);
}
} else {
setTimeout("typewriter()", iSpeed);
}
}


typewriter();
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};