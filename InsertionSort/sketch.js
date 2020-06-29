let values = [];
let i = 1;
let w = 10;
let states = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width / w));
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    states[i] = -1;
  }
  frameRate(15);
}


async function insertionSort(values,i){
  if(i < values.length){
    let j = i - 1
    let temp = values[i]
    states[i+1]=0
    while (j >= 0 && values[j] > temp) {
      values[j+1] = values[j]
      j--
      states[j]=2
      states[j+1]=1
    }
    await sleep(10)
    values[j+1] = temp
    states[j]=1
    states[i+1]=1
  }else{
    noLoop();
  }
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function draw(){
    background(51);

    insertionSort(values,i)
    i++
    if(i==values.length){
      for(let k=0;k<values.length;k++)
        states[k]=1
      noLoop();
    }

    for (let i = 0; i < values.length; i++) {
      noStroke();
      if (states[i] == 0) {
        fill('#E0777D');
      } else if (states[i] == 1) {
        fill('#D6FFB7');
      } else if(states[i] ==2) {
        fill('#add8e6');
      } else {
        fill(255);
      }
      rect(i * w, height - values[i], w, values[i]);
    }
}











  