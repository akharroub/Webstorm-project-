console.log("OK");

$("h1")
    .html("JQUERY")
    .css("color","red");

$("img").hide();

$("img").show();

/*
 * $('#id')
 * $('.class')
 * $('balise')
 */

$('img').fadeOut(2000);

$('img').fadeIn(2000);

/*for (let i = 0; i <1000 ; i++) {
 *    $('img').fadeOut(100);
 *  $('img').fadeIn(100);
 *}
 */
$('img').slideUp(2000);

$('#axe').slideDown(2000);
$('#lait').slideDown(2000);

$('.description')
    .css("background-color", "pink")
    .css("color", "green")
    .css("font-size", "120px")
;

$('#axe').addClass('erreur');

$('#axe').removeClass("erreur");

$('img').click(function () {
    alert("hello");
});