
let takeDataForm = (form) => Object.fromEntries([...new FormData(form).entries()])

let validInput = (input) => input !== "" || input !== undefined 
   
let equalPassAndRepass = (form) => form.password === form.rePass;




let checkEmptyInput = (form) =>  {
    let currForm = takeDataForm(form)

    return Object.values(currForm).every(data => validInput(data));
}


let isEqualPasswordsRegister = (form) => {
    let currForm = takeDataForm(form)

    return equalPassAndRepass(currForm)
}





export { checkEmptyInput, isEqualPasswordsRegister, takeDataForm }
