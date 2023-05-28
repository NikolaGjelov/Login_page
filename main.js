let usernameInput = document.querySelector(".username-inp")
let passwordInput = document.querySelector(".password-inp")
let incorrectInput = document.querySelector(".incorrect-user")
const submitBtn = document.querySelector(".log-btn")
const body = document.querySelector("body")

function logIn(event){
  event.preventDefault()
  let username = usernameInput.value
  let password = passwordInput.value
  let user = find(username)
  if (user){
    if (user.password === password){
      body.innerHTML = `
      <h1>WELCOME!</h1>
      <button class="logout" onclick="logout()">LOG OUT</button>
      `
      return
    }
  }
  
    incorrectInput.innerHTML= "Incorrect username or password"
    setTimeout(()=> {
    incorrectInput.innerHTML= ""
    },3000)

}

function find(name){
  const users = JSON.parse(localStorage.getItem("users"))
  if (users){
    return users.find(user => user.name === name)
  }

}

function signUpDisplay(){
  body.innerHTML=
`<form onsubmit="signUp(event)" class="html-form">
<h1>SIGN UP</h1>
<input type="text" placeholder="Username" class="nameInput" required>
<input type="text" placeholder="Password" class="passwordInput" required>
<p class="user-busy"></p>
<button class="create-account" type="submit">CREATE ACCOUNT</button>
`
}

function signUp(event) {
event.preventDefault()
 const username = document.querySelector(".nameInput").value
 const password = document.querySelector(".passwordInput").value
 let userBusy = document.querySelector(".user-busy")
 
 if (find(username)){
 userBusy.innerHTML = "This Username is already in use!"
 setTimeout(()=>userBusy.innerHTML = "", 3000 )
 }
 else {
  const users = JSON.parse(localStorage.getItem("users")) || []
  users.push({
    name:username,
    password:password
  })
  localStorage.setItem("users", JSON.stringify(users))
 }
 location.reload()
}

function logout(){
  location.reload()
}
