const form = document.getElementById("editPage__form")
const input = document.getElementById("editPage__input")
const submit = document.getElementById("editPage__submit")

const getUserId = () => {
    const href = window.location.href.split("/")
    const id = href[3]
    return id
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const id = getUserId()
    fetch(`/${id}/editPage`, {
        method: "POST",
        body: JSON.stringify({
            word: "DFD"
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
})

input.addEventListener('input', () => {
    console.log(input.value)
})

