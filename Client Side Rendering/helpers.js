
let searchTargetInTable = () => {
    let searchField = document.getElementById("searchField").value
    let studentList = document.querySelectorAll("tbody > tr");

    Array.from(studentList).forEach(item => (isMatched(item.innerHTML, searchField)) ? item.className = 'select' : item.classList.remove('select'))
    searchField = ""


}


let isMatched = (row, searchText) => (row.toLowerCase().includes(searchText.toLowerCase())) ? true : false



let renderAllRowns = async (dataStudent, template) => {
    let tBody = document.querySelector("tbody")

    return await dataStudent()
        .then(data => appendStudentTbody(data, tBody, template))
        .catch(e => console.error(e))
}


let appendStudentTbody = (data, tbody, template) => {
    return Object.values(data).forEach(student => {
        tbody.innerHTML += template(student);
    })
}



export {
    searchTargetInTable,
    renderAllRowns
}
