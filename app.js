const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")

function loginBtnClick(event) {
  event.preventDefault()
  console.log(event)
}

loginForm.addEventListener("submit", loginBtnClick)