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

async function selectionSort(values,i){
  if(i < values.length){
    var min = i;
    for(var j = i+1; j < values.length; j++){
      if(values[j] < values[min]){
        min = j;
      }
    }
    states[min]=0
    states[i]=2
    await swap(values, i, min);
    states[min]=-1;
    states[i]=1
  }else{
    console.log('finished');
    return;
  }
}

function draw(){
  background(51);
  selectionSort(values,i)
  i++;
  if(i==values.length){
    states[i-1]=1
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
  await sleep(10);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}









  