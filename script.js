function checkSecondary(){
  // alert('It is connected')

  let userInput = document.getElementById('input').value
  let display = document.getElementById('displayArea')

  if (userInput > 100){
    display.innerHTML = `<p>Input should not be greater than 100!</p>`
    return
  } else if (userInput < 0){
    display.innerHTML = `<p>input should not be lesser than 0!</p>`
    return
  } else if (userInput == '' || userInput == ' ' || userInput == '  ' || userInput == '   ' || userInput == '    '){
    display.innerHTML = `<p>Input should not be empty!</p>`
    return
  } else if(isNaN(userInput)){
    display.innerHTML = `<p>Input a valid score!</p>`
  }

  if (userInput >= 75){
    display.innerHTML = `<p>A1 - Excellent!</p>`
  } else if (userInput >= 70 || userInput == 74) {
    display.innerHTML = `<p>B2 - Very Good!</p>`
  } else if (userInput >= 65 || userInput == 69){
    display.innerHTML = `<p>B3 - Good!</p>`
  } else if(userInput >= 60 || userInput == 64){
    display.innerHTML = `<p>C4 - Credit!</p>`
  } else if (userInput >= 55 || userInput == 59){
    display.innerHTML = `<p>C5 - Credit!</p>`
  } else if (userInput >= 50 || userInput == 54){
    display.innerHTML = `<p>C6 - Credit!</p>`
  } else if (userInput >= 45 || userInput == 49){
    display.innerHTML = `<p>D7 - Pass!</p>`
  } else if (userInput >= 40 || userInput == 44){
    display.innerHTML = `<p>E8 - Pass!</p>`
  } else if (userInput >= 0 || userInput == 39){
    display.innerHTML = `<p>F9 - Fail!</p>`
  }
  document.getElementById('input').value = ''
}

function checkPoly(){
  // alert ('It is connected!')

  let userInput = document.getElementById('input').value
  let display = document.getElementById('displayArea')

  if (userInput == '' || userInput == ' ' || userInput == '  ' || userInput == '   ' || userInput == '    '){
    display.innerHTML = `<p>Input should not be empty!</p>`
    return
  } else if (isNaN(userInput)){
    display.innerHTML = `<p>Input valid CGPA!</p>`
    return
  }

  if (userInput < 0){
    display.innerHTML = `<p>CGPA can not be lesser than 0!</p>`
    return
  } else if (userInput > 4.0){
    display.innerHTML = `<p>input can not be greater than 4.0!</p>`
    return
  }

  if (userInput >= 3.50 || userInput == 4.00){
    display.innerHTML = `<p>Distinction!</p>`
  } else if (userInput >= 3.00 || userInput == 3.49){
    display.innerHTML = `<p>Upper Credit!</p>`
  } else if (userInput >= 2.50 || userInput == 2.99){
    display.innerHTML = `<p>Lower Credit!</p>`
  } else if (userInput >= 2.00 || userInput == 2.49){
    display.innerHTML = `<p>Pass!</p>`
  } else {
    display.innerHTML = `<p>Fail!</p>`
  }
  document.getElementById('userInput') = ''
}

function checkUniversity(){
  // alert ('It is connected!')

  let userInput = document.getElementById('input').value
  let display = document.getElementById('displayArea')

  if (userInput == '' || userInput == ' ' || userInput == '  ' || userInput == '   '  || userInput == '    '){
    display.innerHTML = `<p>Input should not be empty!</p>`
  } else if (isNaN(userInput)){
    display.innerHTML = `<p>Do not input words!</p>`
    return
  } else if (userInput > 5.00){
    display.innerHTML = `<p>CGPA can not be greater than 5.00!</p>`
    return
  } else if (userInput < 0){
    display.innerHTML = `<p>CGPA can not be lesser than 0!</p>`
    return
  }

  if (userInput >= 4.50 || userInput == 5.00){
    display.innerHTML = `<p>First Class Honour!</p>`
  } else if (userInput >= 3.50 || userInput == 4.49){
    display.innerHTML = `<p>Second Class Upper!</p>`
  } else if (userInput >= 2.50 || userInput == 2.99){
    display.innerHTML = `<p>Second Class Lower!</p>`
  } else if (userInput >= 2.00 || userInput == 2.49){
    display.innerHTML = `<p>Third Class!</p>`
  } else {
    display.innerHTML = `<p>Fail!</p>`
  }
}