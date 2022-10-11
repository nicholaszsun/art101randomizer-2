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

//randomIndex = int(random(pcparts.length))
//Command to call specific array of objects
  //console.log(pcparts[2].description);

//Command to call random object in the array
/////Remeber to use "int" to make the randomizer pull using whole numbers instead of fractions
///////////console.log(pcparts[int(random(pcparts.length))]);
//Command to call just the name in the array
///////console.log(pcparts[randomIndex].name);

//Command to display the array on the page instead of the console
//text(pcparts[randomIndex].name, 100, 100);

//Command to delete the recently called array so it is not called again
//pcparts.splice(randomIndex, 1);
}

function draw() {

}

function mousePressed() {
  background(random(200,255));
  randomIndex = int(random(pcparts.length));
  text(pcparts[randomIndex].name, 100, 100);
  pcparts.splice(randomIndex, 1);

}
