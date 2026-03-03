// JS Connected Check
//alert("JS Connected!");

//Subscribe Button
document.getElementById("subscribeBtn")
.addEventListener("click", function (){
    alert("Thanks for Subscribing!");
});

//Image Click
document.querySelectorAll(".vlog-image").forEach(function(image){
    image.addEventListener("click", function(){
        let page = this.getAttribute("data-page");
        window.location.href= page;
    })
});
