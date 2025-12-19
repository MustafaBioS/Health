const sign = document.querySelector("#btn");
const login = document.querySelector("#btn2");

sign.addEventListener('click', ()=> {
    window.location.href = sign.dataset.createUrl;
})

login.addEventListener('click', ()=> {
    window.location.href = login.dataset.loginUrl;
})