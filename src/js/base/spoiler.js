$(document).ready(function () {

	$('.footer__title').click(function (event) {
		if ($('.footer__nav-list').hasClass('one')) {
			$('.footer__title').not($(this)).removeClass('active');
			$('.footer__text').not($(this).next()).slideUp(300);
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
});