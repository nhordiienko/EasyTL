$(window).on("load", function() {
	$(".load").delay(1000).fadeOut();
});
$(document).ready(function(){
	$('.menu a').click(function(e){
		new Menu().Redirect(e, this);
	});
	new HelpFAQ('.help-faq', '.help-answers');
	$('.profile nav a').click(function(e) {
		new Menu().ProfileRedirect(e, this);
	});
	$('.help-faq p').click(function(){
		$('.help-faq p').removeClass("active");
		$(this).addClass("active");
		$('.help-answers p').removeClass('active');
		$('.help-answers p:nth-child(' + ($(this).index() + 1) + ')').addClass('active');
	});
	$('.topic').click(function() {
		new Menu().TheoryRedirect(this);
	});
	$('.help-back').click(function(){
		$('.help').removeClass('active');
		$('.main-menu').addClass('active');
	});

	$('.topic-back').click(function(){
		$('.theory').removeClass('active');
		$('.main-menu').addClass('active');
	});	

	$('.reg-click').click(function(){
		$('.unlogged').removeClass('active');
		$('.registration').addClass('active');
	});

	$('.enter-click').click(function(){
		$('.unlogged').removeClass('active');
		$('.login').addClass('active');
	});

	$('.back-to-guest').click(function(){
		$('.login').removeClass('active');
		$('.registration').removeClass('active');
		$('.unlogged').addClass('active');
	});

	$('.share-back').click(() => {
		$('.share').fadeOut();
	});

	$('.share-result').click(() => {
		$('.share').fadeIn();
	});

	$('.contact-back').click(() => {
		$('.contact-us').fadeOut();
	});
	
	$('.contact-us-but').click(() => {
		$('.contact-us').fadeIn();
	});

	$('.fbsharelink').click( function() 
	{
		FB.init({
		  appId      : '1308312569327502',
		  status     : true,
		  xfbml      : true,
		  version    : 'v2.7'
		});
		FB.ui({ method: 'feed', 
	        message: 'Facebook for Websites is super-cool',
	        name: 'Facebook Dialogs',
	        caption: 'Reference Documentation',
	        description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
        });
	    //var shareurl = $(this).data('shareurl');
	    //window.open('https://www.facebook.com/sharer/sharer.php?u='+escape(shareurl)+'&t='+document.title, '', 
	    //'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
	    return false;
	});
	$('.to-quick-test').click(function() {
		$('.theory-topic').removeClass('active');
		new Quick(true, CURRENT_TOPIC);
		$('.quick').addClass('active');
	})
	$('.to-topics-list').click(function() {
		$('.theory-topic').removeClass('active');
		$('.theory').addClass('active');
	})
	new Profile(userStatistic);
});
