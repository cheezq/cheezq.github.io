// Splash Screen
let intro = document.querySelector('.intro')
let intro_welcome = document.querySelector('.intro-welcome')
let welcome = document.querySelectorAll('.welcome')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        welcome.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 300)
        });

        setTimeout(() => {
            welcome.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 100)
            })
        }, 2000)

        setTimeout(() => {
            intro.style.top = '-100vh';
        }, 2200)
    })
})



