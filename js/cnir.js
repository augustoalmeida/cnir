// habilitar alto contraste
$('#alto-contraste').click(function (e) {
	e.preventDefault();
	
	$(this).parents('body').toggleClass('contraste');
});

// habilitar popover
$('[data-toggle="popover"]').popover();
