const back = document.getElementsByClassName("back");

function goBack(){
    window.history.back();
}

function scrolltoLeft() {
    const container = document.querySelector(".scrollContainer");
    const currentPosition = container.scrollLeft;
    container.scrollTo({
        left: currentPosition - 200,
        behavior: 'smooth'
    });
}

function scrolltoRight() {
    const container = document.querySelector(".scrollContainer");
    const currentPosition = container.scrollLeft;
    container.scrollTo({
        left: currentPosition + 200,
        behavior: 'smooth'
    });
}

