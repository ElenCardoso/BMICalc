function bmiCalculator () {
    let height = document.querySelector('input#height').value
    let weight = document.querySelector('input#weight').value
    let bmi = Number(weight / (height/100*height/100))
    let bingo = Math.floor(bmi)

        
     if (bmi <= 18.5) {
          document.querySelector('div#res').innerHTML = `Your BMI is ${bingo}, so you are underweight.`;
    }
    
    else if (bmi > 18.5 && bmi <= 24.9) {
         document.querySelector('div#res').innerHTML = `Your BMI is ${bingo}, so you have a normal weight.`;
    }
    
    else if (bmi > 24.9) { 
        document.querySelector('div#res').innerHTML = `Your BMI is ${bingo}, so you are overweight.`;

    } else if (bmi >= 30 && bmi <= 34.9 ) {
         document.querySelector('div#res').innerHTML = `Your BMI is ${bingo}, so you are obese.`;

  }  else {
       document.querySelector('div#res').innerHTML = `Your BMI is ${bingo}, so you are extremely obese.`;
  }
    } 
    
    