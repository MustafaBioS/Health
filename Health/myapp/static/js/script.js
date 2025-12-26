document.addEventListener("DOMContentLoaded", ()=> {
    const sign = document.querySelector("#btn");
    const login = document.querySelector("#btn2");
    const anc = document.querySelector("#anc");
    const identifier = document.querySelector('#identifier');
    const pfp = document.querySelector('.pic');
    const sidebar = document.querySelector("#sidebar");
    const toggler = document.querySelector("#toggler");

    const profileBtn = document.querySelector('#profileBtn');
    const goalsBtn = document.querySelector('#goalsBtn');
    const secBtn = document.querySelector('#secBtn');
    const accBtn = document.querySelector('#accBtn');

    const profileBox = document.querySelector('#profileBox');
    const goalsBox = document.querySelector('#goalsBox');
    const secBox = document.querySelector('#secBox');
    const accBox = document.querySelector('#accBox');


    if (profileBtn && goalsBtn && secBtn && accBtn && profileBox && goalsBox && secBox && accBox) {
        profileBtn.classList.add('clicked');
        profileBox.classList.add('chosen');

        profileBtn.addEventListener('click', ()=> {
            profileBtn.classList.add('clicked');
            goalsBtn.classList.remove('clicked');
            secBtn.classList.remove('clicked');
            accBtn.classList.remove('clicked');

            profileBox.classList.add('chosen');
            goalsBox.classList.remove('chosen');
            secBox.classList.remove('chosen');
            accBox.classList.remove('chosen');
        })

        goalsBtn.addEventListener('click', ()=> {
            profileBtn.classList.remove('clicked');
            goalsBtn.classList.add('clicked');
            secBtn.classList.remove('clicked');
            accBtn.classList.remove('clicked');

            profileBox.classList.remove('chosen');
            goalsBox.classList.add('chosen');
            secBox.classList.remove('chosen');
            accBox.classList.remove('chosen');
        })

        secBtn.addEventListener('click', ()=> {
            profileBtn.classList.remove('clicked');
            goalsBtn.classList.remove('clicked');
            secBtn.classList.add('clicked');
            accBtn.classList.remove('clicked');

            profileBox.classList.remove('chosen');
            goalsBox.classList.remove('chosen');
            secBox.classList.add('chosen');
            accBox.classList.remove('chosen');
        })

        accBtn.addEventListener('click', ()=> {
            profileBtn.classList.remove('clicked');
            goalsBtn.classList.remove('clicked');
            secBtn.classList.remove('clicked');
            accBtn.classList.add('clicked');

            profileBox.classList.remove('chosen');
            goalsBox.classList.remove('chosen');
            secBox.classList.remove('chosen');
            accBox.classList.add('chosen');
        })
    }

    if (toggler && sidebar) {
        toggler.addEventListener('click', ()=> {
            sidebar.classList.toggle("closed");
            if (sidebar.classList.contains("closed")) {
                toggler.textContent = '<';
            }
            else {
                toggler.textContent = ">";
            }
        });
    }

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

    if (pfp) {
        pfp.addEventListener('click', ()=> {
            window.location.href = pfp.dataset.settingsUrl;
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