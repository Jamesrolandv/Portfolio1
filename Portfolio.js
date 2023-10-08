// preload=====================================================

const preload = document.getElementById('preloader');

window.addEventListener('load', () => {
    preload.style.display = 'none';
})

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