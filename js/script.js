window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("image8");
    image.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
    let imagee = document.getElementById("image9");
    imagee.style.transform = "rotate(" + window.pageYOffset/7 + "deg)";
}