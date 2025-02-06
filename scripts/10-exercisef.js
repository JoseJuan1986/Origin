
function turnOnOffButtons(buttonType) {
  const button = document.querySelector(`.js-${buttonType}-button`);
  const generalbutton = document.querySelectorAll('.example');
  //if (button.classList.contains('is-toggled')) {
  //button.classList.remove('is-toggled'); 
  //} 
  /*
  if (generalbutton.classList.contains('is-toggled')) {
    generalbutton.classList.remove('is-toggled');
  } 
  else {
  button.classList.add('is-toggled');
  }
  */
   // Check if button exist first
   if (button) {
    // Remove is-toggled from all .example buttons
    generalbutton.forEach(generalbutton => {
      generalbutton.classList.remove('is-toggled');
    });

    // Now toggle the specific button
    button.classList.add('is-toggled');
  } else {
    console.error(`Button with class .js-${buttonType}-button not found.`);
  }
}