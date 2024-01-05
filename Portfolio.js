// preload=====================================================

// const preload = document.getElementById('preloader');
// window.addEventListener('load', () => {
//     document.querySelector('body').style.overflow = 'auto';
//     preload.style.display = 'none';
// })
// when scroll ================================================
const scrollDown = () => {
    document.addEventListener('scroll', () => {
        const img = document.querySelector('#myLogo');
        const header = document.querySelector('header');
        if(window.scrollY > 0) {
            img.classList.add('shrink');
            header.classList.add('scrolled');   
        }else{
            img.classList.remove('shrink');
            header.classList.remove('scrolled'); 
        };
    })
}
scrollDown();

// message gmail===============================================
const form = document.querySelector('.form-send');
function sendMsg(e) {
    e.reset();
    let params = {
        name : document.querySelector('#name').value,
        email : document.querySelector('#email').value,
        msg : document.querySelector('#msg').value
    }; 

    const templateId = "template_mogyxog";
    const serviceId = "service_vv4bu4l";

    emailjs.send(serviceId, templateId, params)
        .then(function(response) {
        alert('Email Sent Succesfully to Gmail!', response.status, response.text);
        }, function(error) {
        console.log('FAILED...', error);
        });
}

form.addEventListener('submit', sendMsg);

// photo fade==================================================

const photoFade = document.querySelectorAll('.moving-img');

let imageIndex = 0;

const fadePicture = () => {
    photoFade[imageIndex].classList.remove('showing');

    imageIndex++;

    if(imageIndex >= photoFade.length){
        imageIndex = 0;
    }

    photoFade[imageIndex].classList.add('showing');
};

setInterval(fadePicture, 8000);

// close========================================================

// const closePhoto = document.querySelector('.close');
// const photoContainer = document.querySelector('.photo-container');

// let closing = true;
// closePhoto.addEventListener('click', () => {
//     if(closing){
//         closePhoto.innerHTML = 'Open';
//         photoContainer.classList.add('open');
//         closing = false;
//     }else{
//         closePhoto.innerHTML = 'Close';
//         photoContainer.classList.remove('open');
//         closing = true;
//     }
// });
// intersection==================================================

const heroSections = document.querySelector('.hero-section');
const heroLeft = document.querySelector('.left-hero');
const heroRight = document.querySelector('.right-hero');

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            heroLeft.classList.add('left-slide');
            heroRight.classList.add('right-slide');
        }
    })
});

observer.observe(heroSections);

// nav links====================================================
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-items');

window.onscroll = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav ul li a[href*= ' + id + ']').classList.add('active');
            });
        };
    });
};
// navLinks.forEach(link => {
//     link.addEventListener('click', () => {
//         document.querySelector('.active')?.classList.remove('active');
//         link.classList.add('active'); 
//     })
// })