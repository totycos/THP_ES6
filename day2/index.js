/////////////////////////////////////////////////////////
//////////////////// FORM CONSTANTS /////////////////////
/////////////////////////////////////////////////////////

const lotoForm = document.getElementById("lotoForm");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");


/////////////////////////////////////////////////////////
//////////////////// EVENT LISTENERS ////////////////////
/////////////////////////////////////////////////////////

// Form submit listener
lotoForm.addEventListener("submit", checkLoto);

// First name listener
fname.addEventListener('input', () => {
    const isValidFname = fname.value.length > 0;
    if (isValidFname) {
        document.getElementById('fnameError').innerHTML = "";
    } else {
        document.getElementById('fnameError').innerHTML = "Veuillez fournir un prénom";
    }
})

// Last name listerner
lname.addEventListener('input', () => {
    const isValidLname = lname.value.length > 0;
    if (isValidLname) {
        document.getElementById('lnameError').innerHTML = "";
    } else {
        document.getElementById('lnameError').innerHTML = "Veuillez fournir un nom";
    }
})

// Email listener
email.addEventListener('input', () => {
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValidEmail = email.value.length >= 8 && email.value.length < 30 && emailRegExp.test(email.value);
    if (email.value.length === 0) {
        document.getElementById('emailError').innerHTML = "Veuillez fournir un email";
    }
    else if (isValidEmail) {
        document.getElementById('emailError').innerHTML = "";
    }
    else {
        document.getElementById('emailError').innerHTML = "Votre email n'est pas valide";
    }
})

// Numbers listeners
for (let i = 1; i <= 6; i++) {
    const currentNumberInput = document.getElementById(`number${i}`);
    const currentNumberError = document.getElementById(`number${i}Error`);

    currentNumberInput.addEventListener('input', () => {
        const isValidNumber = currentNumberInput.value.length <= 2 && currentNumberInput.value.length > 0 && currentNumberInput.value >= 0 && currentNumberInput.value <= 49;
        if (isValidNumber) {
            currentNumberError.innerHTML = "";
        } else {
            currentNumberError.innerHTML = "Choisissez un numéro de 0 à 49";
        }
    });
}


/////////////////////////////////////////////////////////
/////////////////////// FUNCTIONS ///////////////////////
/////////////////////////////////////////////////////////

// Actions on Submit
function checkLoto(event) {
    const isValidFname = fname.value.length > 0;
    const isValidLname = lname.value.length > 0;
    const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isValidEmail = email.value.length >= 8 && email.value.length < 30 && emailRegExp.test(email.value);
    const isValidNumbers = checkAllNumbersAreValid()

    if (isValidFname && isValidLname && isValidEmail && isValidNumbers) {
        event.preventDefault();
        const lotoNumbersArray = [1,2,3,4,5,6] //randomLotoNumbersArray()
        const selectNumbersArray = [number1.value, number2.value, number3.value, number4.value, number5.value, number6.value].sort()

        const result = checkNumbers(lotoNumbersArray, selectNumbersArray)
        console.log(lotoNumbersArray)
        console.log(selectNumbersArray)
        console.log(result)
        result ? alert("Félicitations, vous avez gagné 1 million!!!!!") : alert("Vous avez perdu.")
    }  
    else{
        alert("Remplissez tous les champs correctement !")
    }  
}

// Creat 6 random loto numbers
const randomLotoNumbersArray = () => {
    let numbers = [];
    for (let i = 1; i <= 6; i++) {
        numbers.push(Math.floor(Math.random() * 49));
      }  
      return numbers.sort((a, b) => a - b)
}

// Check if all the numbers are valid
const checkAllNumbersAreValid = () => {
    let result = true;
    for (let i = 1; i <= 6; i++) {
        const currentNumberInput = document.getElementById(`number${i}`);
        const isValidNumber = currentNumberInput.value.length <= 2 && currentNumberInput.value.length > 0 && currentNumberInput.value >= 0 && currentNumberInput.value <= 49;

        if (!isValidNumber) {
            result = false
        }
    }
    return result
}

// Check if the selected numbers match with the loto numbers
const checkNumbers = (lotoNumbers, selectNumbers) => {
    return lotoNumbers.every((element, index) => element == selectNumbers[index]);
}

