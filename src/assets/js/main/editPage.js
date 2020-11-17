import Axios from "axios"

const form = document.getElementById("editPage__form")
const input = document.getElementById("editPage__input")
const submit = document.getElementById("editPage__submit")
const ul = document.getElementById("editPage__ul")
const mainMenuSave = document.getElementById("editPage__mainMenuSave")

const getUserId = () => {
    const href = window.location.href.split("/")
    const id = href[3]
    return id
}

let optionList = []

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const word = input.value
    if (word.length > 0) {
        addOption(word)
        input.value = ''
    }
})

const addOption = (word) => {
    const li = document.createElement('li')
    const xButton = document.createElement('button')
    const span = document.createElement('span')
    const id = Date.now()
    optionList.push({
        value: word,
        id: id
    })
    xButton.innerText = '❌'
    xButton.classList.add(id)
    span.innerText = word
    li.appendChild(span)
    li.appendChild(xButton)
    ul.appendChild(li)
    xButton.addEventListener('click', removeSelectedList)
}

const removeSelectedList = (e) => {
    const targetId = e.target.classList.value
    const newList = optionList.filter(option => option.id != targetId)
    optionList = newList
    e.target.parentNode.remove()
}

//POST DATA TO BACKEND
const postData = (newOption, optionName) => {
    const id = getUserId()
    Axios.post(`/${id}/editPage`, {
        options: newOption,
        optionName: optionName
    })
}

mainMenuSave.addEventListener('click', () => postData(optionList, "mainMenu"))

input.addEventListener('input', () => {
    // console.log(input.value)
})


