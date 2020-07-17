const btnSubmit = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnSubmit.addEventListener("click", event =>{
    event.preventDefault()
    form.classList.add("form-hide")
});