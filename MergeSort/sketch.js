let values = [];
let w = 10;
let states = [];

async function mergeSort(a, start, end) {
    if (end-start <= 1)
        return;

    var mid = Math.round((end+start) / 2);

    await mergeSort(a, start, mid);
    await mergeSort(a, mid, end);

    let i = start, j = mid;
    while (i < end && j < end) {
        if (a[i] > a[j]) {
            let t = a[j]; a.splice(j, 1); a.splice(i, 0, t);
            j ++;
            states[i]=0;
        }
        i ++;
        if (i==j) j ++;

        values = a.slice();
        
        await sleep(15);
        for (let i = start; i < end; i++) {
            states[i] = 1;
        }
    }
}

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setup() { 
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / w));
        for (let i = 0; i < values.length; i++) {
            values[i] = random(height);
        }
    mergeSort(values, 0, values.length);
    frameRate(60);
}

function draw() {
    background(51);
    for (let i = 0; i < values.length; i++) {
      noStroke();
      if (states[i] == 0) {
        fill(255,0,0);
        //'#E0777D'
      } else if (states[i] == 1) {
        fill('#D6FFB7');
      } else {
        fill(255);
      }
      rect(i * w, height - values[i], w, values[i]);
    }
}


