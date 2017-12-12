var slidewrapper;
var slideCount;
var imgWidth;
var slideNow = 1;
var translateWidth;



document.addEventListener("DOMContentLoaded", function(){
       var prevButton = document.getElementsByClassName("button-prev")[0];
       var nextButton = document.getElementsByClassName("button-next")[0];

       prevButton.addEventListener("click", prevButtonClick );
       nextButton.addEventListener("click", nextButtonClick );

        slidewrapper = document.getElementsByClassName("slidewrapper")[0];
        slideCount = document.getElementsByClassName("slide").length;

        imgWidth = document.getElementsByClassName("viewport")[0].offsetWidth;


});
function nextButtonClick(){
    if (slideNow < slideCount) {
       translateWidth = -slideNow * imgWidth;
       slidewrapper.style.transform = "translateX(" + translateWidth + "px)";
       slideNow++;
    } else{
        slidewrapper.style.transform = "translateX(0px)"; 
        slideNow = 1;
    }
    
}
function prevButtonClick() {
    if (slideNow <= 1) {
        translateWidth = -imgWidth * (slideCount - 1);
        slidewrapper.style.transform = 'translateX(' + translateWidth + 'px)';
        slideNow = slideCount;
    } else {
        translateWidth = -imgWidth * (slideNow - 2);
        slidewrapper.style.transform = 'translateX(' + translateWidth + 'px)';
        slideNow--;
    }
}



