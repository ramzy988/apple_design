let img =document.querySelector('.imgs');
let container =document.querySelector('.container');
function phones (phone){
    img.src=phone;
}
function colors(color){
    container.style.background=color;
}
$(document).ready(function(){
    $('.menu').click(function(){
        $('ul').toggleClass('show');
    });
});
