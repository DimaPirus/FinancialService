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

$( function() {
$( "#slider-range-1" ).slider({
range: "min",
value: 16800000,
min: 0,
max: 22000000,
slide: function( event, ui ) {
$( "#amount1" ).val(ui.value + "₽" );
}
});
$( "#amount1" ).val($( "#slider-range-1" ).slider( "value") + "₽");
} );

$( function() {
$( "#slider-range-2" ).slider({
range: "min",
value: 1200000,
min: 0,
max: 5000000,
slide: function( event, ui ) {
$( "#amount2" ).val(ui.value + "₽" );
}
});
$( "#amount2" ).val($( "#slider-range-2" ).slider( "value") + "₽");
} );

$( function() {
$( "#slider-range-3" ).slider({
range: "min",
value: 20,
min: 1,
max: 100,
slide: function( event, ui ) {
$( "#amount3" ).val(ui.value );
}
});
$( "#amount3" ).val($( "#slider-range-3" ).slider( "value"));
} );