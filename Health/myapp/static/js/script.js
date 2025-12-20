document.addEventListener("DOMContentLoaded", ()=> {
    const sign = document.querySelector("#btn");
    const login = document.querySelector("#btn2");
    const anc = document.querySelector("#anc");
    const identifier = document.querySelector('#identifier');


    if (anc && identifier) {
        anc.addEventListener('click', ()=> {
            if (identifier.type == "text") {
                identifier.type = "email";
                identifier.placeholder = "Enter Your Email Address"
                anc.textContent = "Login With Username Instead?"
            } else if (identifier.type == "email") {
                identifier.type = "text";
                identifier.placeholder = "Enter Your Username"
                anc.textContent = "Login With Email Address Instead?"
            }
        })
    }

    if (sign) {
        sign.addEventListener('click', ()=> {
            window.location.href = sign.dataset.createUrl;
        })
    }

    if (login) {
        login.addEventListener('click', ()=> {
            window.location.href = login.dataset.loginUrl;
        })
    }
})

const anim = document.querySelectorAll('.anim');


window.addEventListener('load', ()=> {
    anim.forEach(animation => {
        animation.classList.add('animate');
    });
})