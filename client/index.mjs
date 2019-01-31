console.log('hi');
import dialogPolyfill from 'dialog-polyfill';
console.log('why');

var h1 = document.createElement('h1');
h1.innerHTML = 'Hello world!';
document.body.prepend(h1);

(function() {
    var updateButton = document.getElementById('updateDetails');
    var favDialog = document.getElementById('favDialog');
    var outputBox = document.getElementsByTagName('output')[0];
  
    // “Update details” button opens the <dialog> modally
    updateButton.addEventListener('click', function() {
        if(typeof favDialog.showModal === 'function') {
            favDialog.showModal();
        } else {
            favDialog.setAttribute('open', '');
        }
      
      outputBox.value += favDialog.returnValue + " button clicked!\x2028";
    });
  })();

  

  if(window.HTMLDialogElement) {
    console.log('dialog SUPPORTED!');
  } else {
    console.log('dialog not supported!');
    //var dia = require('dialog-polyfill');
  }
