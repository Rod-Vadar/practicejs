const heightMark = 1.88;
const massMark = 95;

const heightJohn = 1.76;
const massJohn = 85;

const BMIMark = massMark / heightMark **2;
const BMIJohn = massJohn / heightJohn **2;

let body = document.body;

if(BMIMark > BMIJohn){
  let higherMark =  `Mark's BMI is ${BMIMark.toFixed(2)} which is greater than John's BMI ${BMIJohn.toFixed(2)}`;
  let markPara = document.createElement('p');
  markPara.textContent = higherMark;
  body.appendChild(markPara);
} else if(BMIJohn > BMIMark){
   let higherJohn = `John's BMI is ${BMIJohn.toFixed(2)} which is greater than Mark's BMI ${BMIMark.toFixed(2)}`;
  let johnPara = document.createElement('p');
  johnPara.textContent = higherJohn;
  body.appendChild(johnPara);
}else if(BMIMark === BMIJohn){
  let BMIEqual =  `Mark's BMI of ${BMIMark.toFixed(2)} is equal to John's BMI of ${BMIJohn.toFixed(2)}`;
  let equalPara = document.createElement('p');
  equalPara.textContent = BMIEqual;
  body.appendChild(equalPara);
}

let button = document.createElement('button');
button.id = 'calculate';
button.classList.add('btn');
button.textContent = 'Calculate BMI';
body.appendChild(button);