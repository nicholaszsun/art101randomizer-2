//Create array of Computer Parts
//{} = creating array of objects
let pcparts = [{
  name: "CPU",
  description: "Central Proccesing Unit"
}, {
  name: "GPU",
  description: "Graphic Proccesing Unit"
}, {
  name: "RAM",
  description: "Random Access Memory"
}, {
  name: "MOTHERBOARD",
  description: "Main Housing for Pc Parts"
}, {
  name: "SSD",
  description: "Solid State Drive"
}, {
  name: "HDD",
  description: "Hybrid Hard Drive"
}]

let randomIndex;

function setup() {
  createCanvas(600, 600)
  background(230)

}

function draw() {

}

function mousePressed() {
  background(random(200,255));
  randomIndex = int(random(pcparts.length));
  text(pcparts[randomIndex].name, 100, 100);
  pcparts.splice(randomIndex, 1);

}
