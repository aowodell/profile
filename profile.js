//shrink header on scroll
window.onscroll = function(){
    if(document.documentElement.scrollTop>50){
        document.getElementById("header").style.height = "100px";
    }
    else{
        document.getElementById("header").style.height = "144px";
    }
}