
let form = document.querySelector("#form");

let firstName = document.querySelector("#firstName");
let firstNameErrorIcon = document.querySelector(".error-icon1");
let firstNameErrorMessage = document.querySelector(".error-firstname");

let lastName = document.querySelector("#lastName");
let lastNameErrorIcon = document.querySelector(".error-icon2");
let lastNameErrorMessage = document.querySelector(".error-lastname");

let email = document.querySelector("#email");
let emailErrorIcon = document.querySelector(".error-icon3");
let emailErrorMessage = document.querySelector(".error-email");

let password = document.querySelector("#password");
let passwordErrorIcon = document.querySelector(".error-icon4");
let passwordErrorMessage = document.querySelector(".error-password");

let button = document.querySelector(".submit-btn");

let inputs = document.querySelectorAll(".inputElement");

/* button.addEventListener("click", () => {
  console.log(firstName.validity)
}) */


button.addEventListener("click", () => {
  if(firstName.validity.valueMissing) {
    firstNameErrorIcon.style.display = "block";
    firstNameErrorMessage.style.display = "block";
  }
  else{
    firstNameErrorIcon.style.display = "none";
    firstNameErrorMessage.style.display = "none";
}


  if(lastName.validity.valueMissing) {
    lastNameErrorIcon.style.display = "block";
    lastNameErrorMessage.style.display = "block";
  }
  else{
    lastNameErrorIcon.style.display = "none";
    lastNameErrorMessage.style.display = "none";
}


  if(email.validity.valueMissing) {
    emailErrorIcon.style.display = "block";
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "Email field cannot be empty";
}
  else if(email.validity.typeMismatch) {
    emailErrorIcon.style.display = "block";
    emailErrorMessage.style.display = "block";
    emailErrorMessage.textContent = "Please enter a valid email address";
}
  else{
    errorErrorIcon.style.display = "none";
    errorErrorMessage.style.display = "none";
}

  
  if(password.validity.valueMissing) {
    passwordErrorIcon.style.display = "block";
    passwordErrorMessage.style.display = "block";
}
  else {
    passwordErrorIcon.style.display = "none";
    passwordErrorMessage.style.display = "none";
}
})


/* button.addEventListener("click", () => {
  console.log(firstName.validity)
  if(firstName.validity.valueMissing) {
    firstName.setCustomValidity("Test");
  }
  }
  else if(lastName.validity.valueMissing) {
    firstName.setCustomValidity("Test");
  }
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I am expecting an email address!");
      } else {
        email.setCustomValidity("");
      }
}); */