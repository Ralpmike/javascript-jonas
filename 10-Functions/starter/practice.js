'use strict';

const dialogue = document.getElementById('show-dialog');
const closeDialogue = document.getElementById('close-dialogue');

const showDialogue = document.getElementById('show-dialogue');

showDialogue.addEventListener('click', () => {
  console.log(dialogue.showModal());
});

// closeDialogue.addEventListener('click', () => {
//   console.log(dialogue.close());
// });
