const allLinks = document.querySelectorAll("a");

// for (let link of allLinks) {
//   link.innerText = "I AM A LINK!!!!";
// }
for (let link of allLinks) {
  link.style.color = "green";
  link.style.textDecorationColor = "magenta";
}
const allImages = document.getElementsByTagName("#img");
for (let img of allImages) {
  img.src = "photos/Chicken.webp";
}
const squareImg = document.getElementsByClassName(".square");

for (let square of squareImg) {
  square.src = "photos/chicken4.jpeg";
}

// r (let link of allLinks) {
//   link.style.color = "rgb(0, 108, 134)";
//   link.style.textDecorationColor = "magenta";
//   link.style.textDecorationStyle = "wavy";
// }fo
