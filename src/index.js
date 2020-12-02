console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton');
// console.log(launchButton);

const confirmButton = document.querySelector('#confirmButton');
// console.log(confirmButton);

const cancelButton = document.querySelector('#cancelButton');
// console.log(cancelButton);

// B- MESSAGES
const successMessage = document.querySelector('.success');
// console.log(successMessage);

const failureMessage = document.querySelector('.failure');
// console.log(failureMessage);

// C- MODAL
const modal = document.querySelector('.modal');
// console.log(modal)
// modal.classList.remove('off');

// debugger makes sure that every single line before it has executed successfully
// debugger;
// Scope is also useful in the debugger tools

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
{/* <button id="launchButton" onclick="console.log('HTML on click')">Launch!</button> */}

//  B- The DOM's element.onclick attribute
launchButton.onclick = function(event) {
  console.log('old school way of doing it');
}
//  C- element.addEventListener('click', callback)
launchButton.addEventListener('click', event => {
  console.log('modern way of doing it');
});

document.addEventListener('click', event => {
  if(event.target === launchButton) {
    console.log('you clicked the button');
  } else {
    console.log('you clicked somewhere else');
  }
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

function launchModal() {
  return modal.classList.remove('off');
}

launchButton.addEventListener('click', (event) => {
  failureMessage.classList.add('off');
  successMessage.classList.add('off');
  modal.classList.remove('off');
});

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.

// function confirmLaunch() {
//   modal.classList.add('off');
//   console.log('Launch successful!')
// }

confirmButton.addEventListener('click', event => {
  modal.classList.add('off');
  successMessage.classList.remove('off');
})

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.

// function cancelLaunch() {
//   modal.classList.add('off');
//   console.log('Launch canceled!')
// }

cancelButton.addEventListener('click', event => {
  modal.classList.add('off');
  failureMessage.classList.remove('off');
});

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
document.addEventListener('keydown', function(event) {
  if(event.key === 'Escape') {
  modal.classList.add('off');
}
})

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
Array.from(document.all).forEach((elem) => {
  elem.addEventListener('click', (event) => {
    console.log('🎯 target', event.target);
    console.log('🧭 current target', event.currentTarget);
    console.log('\n');
    event.stopPropagation();
  })
})
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
// function openModal() {

// }

// function closeModal() {

// }

// function killReports() {

// }


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
