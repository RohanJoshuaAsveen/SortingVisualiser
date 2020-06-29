let values = [];
let i = 0;
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

async function bubbleSort(values,i){
  if(i < values.length){
    for(let j=0 ; j<values.length-i-1;j++){
      let a = values[j];
      let b = values[j+1];
      if(a>b){
        states[j]=0
        states[j+1]=2
        await swap(values,j,j+1);
        states[j]=-1;
        states[j+1]=-1;
      }
      else{
        await sleep(10);
      }
    }
    states[values.length-i-1]=1
  }else{
    console.log('finished');
    return;
  }
}



function draw(){
    background(51);

    bubbleSort(values,i)
    i++;

    if(i==values.length){
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

async function swap(arr,a,b){
  await sleep(10)
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}










  