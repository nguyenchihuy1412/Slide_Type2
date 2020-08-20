document.addEventListener('DOMContentLoaded',function() {
    let button = document.querySelectorAll('.navigation ul li');
    let slides = document.querySelectorAll('.oneSlide');
    /* Auto Slide */
    let time = setInterval(function() {
        let buttonPosition = 0;
        let slidePosition = 0;
        let activeButton = document.querySelector('.navigation ul Li.active');
        let activeSlide = document.querySelector('.oneSlide.active');
        for (buttonPosition; activeButton = activeButton.previousElementSibling; buttonPosition++) { }
        for (slidePosition; activeSlide = activeSlide.previousElementSibling; slidePosition++) { }
        /* Active next button */
        if (buttonPosition < button.length - 1) {
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove('active');
                button[buttonPosition].nextElementSibling.classList.add('active');
            }   
        }
        else {
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove('active');
                button[0].classList.add('active');
            }   
        }
        /* Active next slide */
        if (slidePosition < slides.length - 1) {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[slidePosition].nextElementSibling.classList.add('active');
            }
        }
        else {
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[0].classList.add('active');
            }
        }
    },5000)
    /* Main logic */
    for (let i = 0; i < button.length; i++) {
        button[i].onclick = function(){
            clearInterval(time);
            /* Button logic */
            for (let i = 0; i < button.length; i++) {
                button[i].classList.remove('active');
                this.classList.add('active');
            }
            /* Slide logic */
            let buttonPosition = 0;
            let activeSlide = this
            for (buttonPosition; activeSlide = activeSlide.previousElementSibling; buttonPosition++) {}
            for (let i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[buttonPosition].classList.add('active');
            }
        };
    }
});