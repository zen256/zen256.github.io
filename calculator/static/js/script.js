var myAudio = new Audio;
var a = 0;
var b = 0;
var zn = "plus";
function buttonclick1 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 1;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick2 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 2;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick3 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 3;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick4 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 4;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick5 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 5;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick6 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 6;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick7 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 7;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick8 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 8;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick9 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 9;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function buttonclick0 (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + 0;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function fullstop (button) {
    document.getElementById('butt').value = document.getElementById('butt').value + ".";
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function CE (button) {
    document.getElementById('butt').value = "";
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function plus (button) {
    a = document.getElementById('butt').value;
    zn = "plus";
    document.getElementById('butt').value = "";
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function um (button) {
    a = document.getElementById('butt').value;
    zn = "um";
    document.getElementById('butt').value = "";
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function minos (button) {
    a = document.getElementById('butt').value;
    zn = "minos";
    document.getElementById('butt').value = "";
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function ste (button) {
    a = document.getElementById('butt').value;
    zn = "ste";
    document.getElementById('butt').value = "";
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function del (button) {
    a = document.getElementById('butt').value;
    zn = "del";
    document.getElementById('butt').value = "";
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}
function sqrt (button) {
    a = document.getElementById('butt').value;
    document.getElementById('butt').value = Math.sqrt(a);
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
   
}
function rawn (button) {
    b = document.getElementById('butt').value;
    if (zn === "plus") document.getElementById('butt').value = a * 1 + b * 1;
    if (zn === "um") document.getElementById('butt').value = a * b;
    if (zn === "minos") document.getElementById('butt').value = a - b;
    if (zn === "ste") document.getElementById('butt').value = a ** b;
    if (zn === "del") document.getElementById('butt').value = a / b;
    myAudio.src = "https://raw.githubusercontent.com/zen256/zen256.github.io/master/b.mp3";
    myAudio.play();
}

