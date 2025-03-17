const allImages = document.getElementsByTagName("img");

for (let img of allImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
}

const paraShift = document.querySelector("toctile");

for (let paraShift of toctile) {
  paraShift.classList.toggle("red");
}

const squareImages = document.getElementsByClassName("square");

for (let img of squareImages) {
  img.src =
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Male_and_female_chicken_sitting_together.jpg";
}
const links = document.querySelectorAll("p a");

for (let link of links) {
  console.log(link.href);
}
