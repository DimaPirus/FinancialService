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
// зона загрузки
$(document).ready(function(){
var dropZone = $('#upload-container');
$('#file-input').focus(function() {
$('label').addClass('focus');
})
.focusout(function() {
$('label').removeClass('focus');
});
dropZone.on('drag dragstart dragend dragover dragenter dragleave drop', function(){
return false;
});
dropZone.on('dragover dragenter', function() {
dropZone.addClass('dragover');
});
dropZone.on('dragleave', function(e) {
let dx = e.pageX - dropZone.offset().left;
let dy = e.pageY - dropZone.offset().top;
if ((dx < 0) || (dx > dropZone.width()) || (dy < 0) || (dy > dropZone.height())) {
dropZone.removeClass('dragover');
}
});
dropZone.on('drop', function(e) {
dropZone.removeClass('dragover');
let files = e.originalEvent.dataTransfer.files;
sendFiles(files);
});
$('#file-input').change(function() {
let files = this.files;
sendFiles(files);
});
function sendFiles(files) {
let maxFileSize = 5242880;
let Data = new FormData();
$(files).each(function(index, file) {
if ((file.size <= maxFileSize) && ((file.type == 'image/png') || (file.type == 'image/jpeg'))) {
Data.append('images[]', file);
};
});
$.ajax({
url: dropZone.attr('action'),
type: dropZone.attr('method'),
data: Data,
contentType: false,
processData: false,
success: function(data) {
alert ('Файлы были успешно загружены!');
}
});
}
})
// скрыть/открыть блок
function change_visibility (block_4_close, block_4_open) {
document.getElementById(block_4_close).style.display='block';
document.getElementById(block_4_open).style.display='none';
}
// Select
$('.slct').click(function(){
/* Заносим выпадающий список в переменную */
var dropBlock = $(this).parent().find('.drop');
/* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
if( dropBlock.is(':hidden') ) {
dropBlock.slideDown();
/* Выделяем ссылку открывающую select */
$(this).addClass('active');
/* Работаем с событием клика по элементам выпадающего списка */
$('.drop').find('li').click(function(){
/* Заносим в переменную HTML код элемента
списка по которому кликнули */
var selectResult = $(this).html();
/* Находим наш скрытый инпут и передаем в него
значение из переменной selectResult */
$(this).parent().parent().find('input').val(selectResult);
/* Передаем значение переменной selectResult в ссылку которая
открывает наш выпадающий список и удаляем активность */
$(this).parent().parent().find('.slct').removeClass('active').html(selectResult);
/* Скрываем выпадающий блок */
dropBlock.slideUp();
});
/* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
} else {
$(this).removeClass('active');
dropBlock.slideUp();
}
/* Предотвращаем обычное поведение ссылки при клике */
return false;
});
//скопировать iframe
var button = document.getElementById('userButton');
button.addEventListener('click', function () {
  //нашли наш контейнер
  var ta = document.getElementById('cont'); 
  //производим его выделение
  var range = document.createRange();
  range.selectNode(ta); 
  window.getSelection().addRange(range); 
  //пытаемся скопировать текст в буфер обмена
  try { 
    document.execCommand('copy'); 
  } catch(err) { 
    console.log('Can`t copy, boss'); 
  } 
  //очистим выделение текста, чтобы пользователь "не парился"
  window.getSelection().removeAllRanges();
}); 