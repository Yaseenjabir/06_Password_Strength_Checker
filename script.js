// Selecting elements
const input = document.querySelector("input");
const lowerCase = document.querySelector("#LC");
const UpperCase = document.querySelector("#UC");
const number = document.querySelector("#NUM");
const symbol = document.querySelector("#SYM");


// const password = input.value;


// Adding Event Listner to input box
input.addEventListener('input', () => {
  const password = input.value;

  // Checking user input
  if (password === "") {
    input.placeholder = "Enter Password here";
    lowerCase.style.backgroundColor = "white";
    UpperCase.style.backgroundColor = "white";
    number.style.backgroundColor = "white";
    symbol.style.backgroundColor = "white";


  } else{
    //LowerCase Conditions
    if (password.search(/[a-z]/) !== -1) {
      lowerCase.style.backgroundColor = "green";
    }
    if (password.search(/[a-z]/) === -1) {
      lowerCase.style.backgroundColor = "white";
    }

    //UpperCase Conditions
    if (password.search(/[A-Z]/) !== -1){
      UpperCase.style.backgroundColor = "green";
    }
    if (password.search(/[A-Z]/) === -1){
      UpperCase.style.backgroundColor = "white";
    }

    //Numbers Conditions
    if(password.search(/[0-9]/) !== -1){
      number.style.backgroundColor = "green";
    }
    if(password.search(/[0-9]/) === -1){
      number.style.backgroundColor = "white";
    }

    //Symbols Conditions
    if(password.search(/[`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\:\;\"\'\<\,\>\.\?\/]/) !== -1){
      symbol.style.backgroundColor = "green";
    } 
    if(password.search(/[`\~\!\@\#\$\%\^\&\*\(\)\_\+\=\-\:\;\"\'\<\,\>\.\?\/]/) === -1){
      symbol.style.backgroundColor = "white";
    } 
  } 
})

// Empty the input when refresh the browser
window.addEventListener("beforeunload", ()=>{
  input.value = ''
})