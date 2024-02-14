const image = document.querySelector(".image");
const a = ['./image/it.jpg', './image/goz.jpg', './image/adam.png'];
let index = 0; 
function spinner() {
    image.src = './image/spinner.gif';
    setTimeout(changeImage, 1000); 
}
function changeImage() {
    image.src = a[index];
    index = (index + 1) % a.length; 
}
let t=setInterval(spinner, 5000); 

image.addEventListener('mouseenter',function(){
    clearInterval(t)
})
image.addEventListener('mouseleave',function(){
    t=setInterval(spinner, 5000)
})