const addForm = document.getElementById("addForm")
const addInput = document.getElementById("addForm__input")
const select = document.getElementById('selectForm__select')

const addOption = (value) => {
    const option = document.createElement("option")
    option.value = value
    option.innerText = value
    select.appendChild(option)
}

const handleAddFormSubmit = (e) => {
    e.preventDefault()
    const value = addInput.value
    addInput.value = ''
    addOption(value)
}

addForm.addEventListener('submit', handleAddFormSubmit)


