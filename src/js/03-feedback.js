import { throttle } from "lodash";

const form = document.querySelector('form')
const input = document.querySelector('form textarea')
const email = document.querySelector('form input')
const obj = {};
returnTextValue()

function onEmailInput(e) {
     const textValue = e.currentTarget.value;
    obj.email = textValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}

function onMessageInput(e) {
    const textValue = e.currentTarget.value;    
    obj.message = textValue;
    localStorage.setItem("feedback-form-state", JSON.stringify(obj))
}

email.addEventListener('input', throttle(onEmailInput, 500));


input.addEventListener('input',throttle(onMessageInput, 500))


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

