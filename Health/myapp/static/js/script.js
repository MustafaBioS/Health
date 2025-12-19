const sign = document.querySelector("#btn");
const login = document.querySelector("#btn2");
const anim = document.querySelectorAll('.anim');

sign.addEventListener('click', ()=> {
    window.location.href = sign.dataset.createUrl;
})

login.addEventListener('click', ()=> {
    window.location.href = login.dataset.loginUrl;
})

window.addEventListener('load', ()=> {
    anim.forEach(animation => {
        animation.classList.add('animate');
    });
})