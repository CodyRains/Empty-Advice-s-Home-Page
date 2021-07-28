//alert("Hello, this is from my js file!");

// menu toggle

function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");
}
let x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// JavaScript for contact form

$('.submit').click(function (event) {
    console.log('clicked button')

    var email = $('.email').val()
    var subject= $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if(email.length > 5 && email.includes('@') && email.includes('.')) {
        statusElm.append('<div>Email is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Email is not valid</div>')
    }

    if(subject.length >= 2) {
        statusElm.append('<div>Subject is valid</div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Subject is not valid</div>')
    }

    if(message.length >= 10) {
        statusElm.append('<div>Message is valid<div>')
    } else {
        event.preventDefault()
        statusElm.append('<div>Message is not valid</div>')
    }
})

//  JS for show more/less

document.addEventListener('DOMContentLoaded',() => {
    const expandsMore = document.querySelectorAll('[expand-more]')

    function expand() {
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')) {
            this.innerHTML=this.dataset.showtext;
        } else {
            this.innerHTML=this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }
    expandsMore.forEach(expandMore => {
        expandMore.addEventListener('click', expand)
    })
})