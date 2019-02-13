// Диапазон цены
$( function() {
$( "#slider-range__line" ).slider({
range: "min",
value: 20,
min: 1,
max: 100,
slide: function( event, ui ) {
$( "#amount" ).val(ui.value );
}
});
$( "#amount" ).val($( "#slider-range__line" ).slider( "value" ) );
} );