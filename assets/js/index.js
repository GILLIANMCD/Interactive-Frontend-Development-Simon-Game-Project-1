
let strict = false;
let noise = true;
let start;

const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");
const level4 = document.getElementById("level4");
const turnCounter = document.getElementById("turn");
const green = document.getElementsByClassName("green");
const red = document.getElementsByClassName("red");
const yellow = document.getElementsByClassName("yellow");
const blue = document.getElementsByClassName("blue");
const strictButton = document.getElementById("strict");
const startButton = document.getElementById("start");


level1.addEventListener('click', (event) => {
	console.log("checked")
})

level2.addEventListener('click', (event) => {
	console.log("checked")
})

level3.addEventListener('click', (event) => {
	console.log("checked")
})

level4.addEventListener('click', (event) => {
	console.log("checked")
})


strictButton.addEventListener('click', (event) => {
 if (strictButton.click == true){
     strict = true;
 } else {
     strict = false;
 }
});


startButton.addEventListener('click', (event) => {
	console.log("checked")
})



function one() {
  if (noise) {
    let audio = document.getElementById("green");
    audio.play();
  }
  noise = true;
  green.style.backgroundColor = "lightgreen";
}
$('strict').on('click', function() {
    $('strict').removeClass('selected');
});



