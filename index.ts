const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const canvas = createCanvas(1056, 816);
const ctx = canvas.getContext("2d");

const printIt = (name: string) => {
  loadImage("./certi.png").then((image: any) => {
    ctx.drawImage(image, 0, 0, 1056, 816);

    var text = ctx.measureText(name);

    ctx.font = "bold 40pt Menlo";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "#FF2B7E";
    ctx.fillText(name, 1056 / 2, 380);

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(`./dist/${name}.png`, buffer);
  });
};

["Arpit Bhalla", "Khushal"].map((e) => printIt(e));
