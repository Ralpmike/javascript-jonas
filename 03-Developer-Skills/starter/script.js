// Remember, we're gonna use strict mode in all scripts now!
'use strict';

let user = {
  name: 'Raphael',
  surename: 'Michael',
};

const temperatures = [17, 21, 23];
const temperatures1 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  let forecast = '';
  for (let i = 0; i < arr.length; i++) {
    forecast += `...${arr[i]}\u2103 in ${i + 1} day${i === 0 ? '' : "'s"}${
      i === arr.length - 1 ? '....' : ''
    } `;
  }
  return forecast;
}

console.table(printForecast(temperatures));
console.table(printForecast(temperatures1));

const forcast = cast => 2027 - cast;

console.log();

TODO:;

DEBUG:;

REVIEW:;

FIXME:;

NOTE:;

BUG:;

let clickMe = document.getElementById('click-me');
const showDialog = document.getElementById('show-dialog');
let randomNumber = document.getElementById('random-number-value');

clickMe.addEventListener('click', () => {
  let randomNumberValue = Math.trunc(Math.random() * 100) + 1;
  randomNumber.innerText = randomNumberValue;
  showDialog.showModal();
  // console.log(randomNumberValue);
});

const confirmDialog = document.getElementById('confirmDialog');
const itemNameSpan = document.getElementById('itemName');
const confirmYes = document.getElementById('confirmYes');
const confirmNo = document.getElementById('confirmNo');

let currentItem = null; // Will hold the item div being deleted

// Attach event listeners to each delete button
document.querySelectorAll('.deleteBtn').forEach(btn => {
  btn.addEventListener('click', e => {
    const item = e.target.closest('.item');
    const name = item.dataset.name;

    // Store current item reference for deletion
    currentItem = item;

    // Update dialog content
    itemNameSpan.textContent = name;
    confirmDialog.showModal();
  });
});

// If "Yes", delete the current item
confirmYes.addEventListener('click', () => {
  if (currentItem) {
    currentItem.remove(); // remove from DOM
    currentItem = null;
  }
  confirmDialog.close();
});

// If "No", just close the dialog
confirmNo.addEventListener('click', () => {
  confirmDialog.close();
});
