let indexletra = 1;
activarletra (indexletra);

function siguienteletra (n){
    activarletra(indexletra += n);
};

function currentletra(n) {
    activarletra(indexletra = n);
};
function activarletra(n) {
    let i;
    let slides = document.getElementsByClassName("letras");
    let dots = document.getElementsByClassName("dots");
    if (n > slides.length) {indexletra = 1}    
    if (n < 1) {indexletra = slides.length}
    for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
    for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    slides[indexletra-1].style.display = "block";  
    dots[indexletra-1].className += " active";
};