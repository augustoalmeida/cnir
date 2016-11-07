// habilitar alto contraste
$('#alto-contraste').click(function (e) {
	e.preventDefault();
	
	$(this).parents('body').toggleClass('contraste');
});

// habilitar popover
$('[data-toggle="popover"]').popover();

// menu
// a cache to collapsed itens
var collpaseds = {};

$('#menu [data-toggle="collapse"]')
.append('<span class="fa fa-chevron-down pull-right" aria-hidden="true"></span>')
.click(function(event) {
    event.preventDefault();
    event.stopPropagation();

    $(this).toggleClass('open');

    var idCollapase = $(this).data('target');
    if (!collpaseds[idCollapase]) {
        collpaseds[idCollapase] = $(idCollapase);
    }

    if (collpaseds[idCollapase]) {
        collpaseds[idCollapase].collapse('toggle');
    } else {
        console.log('Element (id) not found: ', idCollapase);
    }
});