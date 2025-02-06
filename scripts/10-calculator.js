let calculation = localStorage.getItem('calculation') || '';
    document.querySelector('.js-output')
          .innerHTML = calculation;
    /*
    if (!calculation) {
      calculation = '';
    }
      */
      /*
    let calculationObject = JSON.parse(localStorage.getItem('calculation')) || {
        calculation: (calculation)
      };
      */

    function updateCalculation(operation) {
      calculation += operation;
      console.log(calculation);
      /*let calculationObject = {
        calculation: calculation
      };
      console.log(calculationObject);
      
      localStorage.setItem('calculation', JSON.stringify(calculationObject));  
      */ 

      localStorage.setItem('calculation', calculation);   
      
      
      displayOutput();

      }
      function displayOutput() {
        document.querySelector('.js-output')
          .innerHTML = calculation;
      }
      function saveCalculation() {
        localStorage.setItem('calculation', calculation)        
      };