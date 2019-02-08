// owl-carousel
$('.owl-carousel-bank').owlCarousel({
loop:true,
margin:40,
nav:false,
dots:false,
navText : ["",""],
navContainer: ".navigation",
responsive:{
0:{
items:1,
nav:false,
dots:true
},
400:{
items:2,
nav:false,
dots:true
},
600:{
items:3,
nav:false,
dots:true
},
767:{
items:5
}
}
})
// owl-carousel-2
$('.owl-carousel-2').owlCarousel({
items: 1,
loop:true,
margin: 0,
nav:false,
dots:true
})
// bxslider
jQuery(document).ready(function(){
jQuery('.bxslider').bxSlider({
controls: false,
pagerCustom: '#bx-pager'
});
});