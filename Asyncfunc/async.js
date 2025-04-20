// const login = async (username, password) => {
//   if (!username || !password) throw "missing credentials";
//   if (password === "prayerproof") return "WELCOME!";
//   throw "INVALID Password";
// };
// login("isipraise", "prayerproof")
//   .then((msg) => {
//     console.log("logged in!");
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log("error!");
//     console.log(err);
//   });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

// delayedColorChange("red", 1000)
//   .then(() => delayedColorChange("orange", 1000))
//   .then(() => delayedColorChange("yellow", 1000))
//   .then(() => delayedColorChange("blue", 1000))
//   .then(() => delayedColorChange("indigo", 1000))
//   .then(() => delayedColorChange("violet", 1000));

async function rainbow() {
  await delayedColorChange("red", 1000);
  await delayedColorChange("orange", 1000);
  await delayedColorChange("yellow", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("indigo", 1000);
  await delayedColorChange("violet", 1000);
  return "ALL DONE";
}

async function printRainbow() {
  await rainbow();
  console.log("END OF RAINBOW");
}
printRainbow();
