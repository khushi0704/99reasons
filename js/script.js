$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
  window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("image1");
    image.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
    let imagee = document.getElementById("image8");
    imagee.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
}