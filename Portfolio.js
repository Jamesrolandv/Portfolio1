// preload=====================================================

const preload = document.getElementById('preloader');
window.addEventListener('load', () => {
    document.querySelector('body').style.overflow = 'auto';
    preload.style.display = 'none';
})
// when scroll ================================================
const scrollDown = () => {
    if(window.scrollY > 0) {
        const img = document.querySelector('.main_logo');
        console.log(img);
    }
}
scrollDown();

// message sending=============================================
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     Email.send({
//         Host : "smtp.elasticemail.com",
//         Username : "vedanajamesroland@gmail.com",
//         Password : "7767687C2AF260C35D7E8D18C9E70635A241",
//         To : 'vedanajamesroland@gmail.com',
//         From : "vedanajamesroland@gmail.com",
//         Subject : "New Message",
//         Body : "Name: " + document.getElementById('name').value
//                 + "<br> Email: " + document.getElementById('email').value
//                 + "<br> Message: " + document.getElementById('msg').value
//     }).then(
//       message => alert('Message Sent!')
//     )
// })
// photo fade==================================================

const photoFade = document.querySelectorAll('.picture-fade');

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

const closePhoto = document.querySelector('.close');
const photoContainer = document.querySelector('.photo-container');

let closing = true;
closePhoto.addEventListener('click', () => {
    if(closing){
        closePhoto.innerHTML = 'Open';
        photoContainer.classList.add('open');
        closing = false;
    }else{
        closePhoto.innerHTML = 'Close';
        photoContainer.classList.remove('open');
        closing = true;
    }
});
// intersection==================================================

const pages = document.querySelectorAll('.my-information');

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('bg-change', entry.isIntersecting)
    })
}, {
    threshold: .5,
});

pages.forEach(page => {
    observer.observe(page);
});