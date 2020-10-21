// Init Input
const usernameInput = document.querySelector("input[name='username']");
const passwordInput = document.querySelector("input[name='password']");

// Init Result
const username = document.querySelector(".username span");
const password = document.querySelector(".password span");

console.log(username);
console.log(password);

window.addEventListener("keyup", ()=>{
    username.innerHTML = " " + usernameInput.value;
    password.innerHTML = " " + passwordInput.value;
})