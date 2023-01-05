import { throttle } from "lodash";

const form = document.querySelector('form')
const input = document.querySelector('form textarea')
const email = document.querySelector('form input')
const obj = {};
returnTextValue()

form.addEventListener('input', throttle(onFormInput, 500))

function onFormInput(e) {
    obj[e.target.name] = e.target.value
   localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    const savedText = localStorage.getItem("feedback-form-state");
    const textValue = JSON.parse(savedText);
    console.log(textValue)
    localStorage.removeItem("feedback-form-state")
})

function returnTextValue() {
   const savedText = localStorage.getItem("feedback-form-state");
    const textValue = JSON.parse(savedText);
    if (textValue) {
        email.value = textValue.email
        input.value = textValue.message
    }
}

