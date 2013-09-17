window.featuredEventSlider = Swipe(document.getElementById('featuredEventSlider'),
	{
		auto:4000,
		continuous: true,
	    callback: function(pos) {

	      var i = bullets.length;
	      while (i--) {
	        bullets[i].className = ' ';
	      }
	      bullets[pos].className = 'on';

	    }
	});

var bullets;
if(document.getElementById('position')){
	bullets = document.getElementById('position').getElementsByTagName('li');
}

var $curr_cat_tab = $('.cat-active');
$('.cat-tab').click(function(){
	$curr_cat_tab.removeClass('cat-active');
	$curr_cat_tab = $(this);
	$curr_cat_tab.addClass('cat-active');
});

var $resultFiltersButton, $resultMapButton;
if($resultFiltersButton = $("#resultFiltersButton")){
	var $filterWrapper = $('.filter-wrapper');
	$(resultFiltersButton).click(function(){
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$filterWrapper.hide();
		}
		else{
			$(this).addClass('selected');
			$filterWrapper.show();
		}
	})
}

if($resultMapButton = $("#resultMapButton")){
	$(resultMapButton).click(function(){
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
		}
		else{
			$(this).addClass('selected');
		}
	})
}
