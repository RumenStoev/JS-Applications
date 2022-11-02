let takeDataPostForm = (form) =>  Object.fromEntries([...new FormData(form).entries()])

let clearInputFields = (inputs) => inputs.values(input => input.value = "") 


export { takeDataPostForm, clearInputFields }
