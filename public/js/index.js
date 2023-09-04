console.log("Hello Client Side JS Working")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const container = document.getElementById('container')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    fetch(`http://localhost:3000/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                container.innerText = data.error   
            }
            else {
                container.innerText = data.data   
            }
        })
    })
})