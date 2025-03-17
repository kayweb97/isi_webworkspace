const btn = document.querySelector("#v2");
btn.onclick = function () {
  console.log("you clicked me");
  console.log("hope it worked!!");
};

function scream() {
  console.log("AAAAHHHHH");
  console.log("STOP TOUCHING ME");
}
btn.onmouseenter = scream;
document.querySelector("h1").onclick = () => {
  alert("you clicked the h1");
};
const btn3 = document.querySelector("#v3");
btn3.addEventListener("dblclick", function () {
  alert("clicked");
});

function shout() {
  console.log("shout");
}
function Twist() {
  console.log("Twist");
}
const tasButton = document.querySelector("#tas");
// tasButton.onclick = shout;
tasButton.addEventListener("click", Twist);
tasButton.addEventListener("click", shout);
// tasButton.onclick = scream;
