// https://www.omnicalculator.com/construction/pipe-volume#volume-of-a-pipe-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const volumeRadio = document.getElementById('volumeRadio');
const innerdiameterRadio = document.getElementById('innerdiameterRadio');
const lengthRadio = document.getElementById('lengthRadio');

let volume;
const PI = Math.PI;
let innerdiameter = v1;
let length = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

volumeRadio.addEventListener('click', function() {
  variable1.textContent = 'Inner diameter';
  variable2.textContent = 'Length';
  innerdiameter = v1;
  length = v2;
  result.textContent = '';
});

innerdiameterRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume';
  variable2.textContent = 'Length';
  volume = v1;
  length = v2;
  result.textContent = '';
});

lengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Volume';
  variable2.textContent = 'Inner diameter';
  volume = v1;
  innerdiameter = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(volumeRadio.checked)
    result.textContent = `Volume = ${computevolume().toFixed(2)}`;

  else if(innerdiameterRadio.checked)
    result.textContent = `Inner diameter = ${computeinnerdiameter().toFixed(2)}`;

  else if(lengthRadio.checked)
    result.textContent = `Length = ${computelength().toFixed(2)}`;
})

// calculation

// volume = π * (innerdiameter / 2)² * length

function computevolume() {
  return PI * Math.pow((Number(innerdiameter.value) / 2), 2) * Number(length.value);
}

function computeinnerdiameter() {
  return Math.sqrt((Number(volume.value) / (PI * Number(length.value)))) * 2;
}

function computelength() {
  return Number(volume.value) / (PI * Math.pow((Number(innerdiameter.value) / 2), 2));
}