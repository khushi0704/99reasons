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
   let imagee = document.getElementById("image8");
    imagee.style.transform = "rotate(" + window.pageYOffset/10 + "deg)";
}