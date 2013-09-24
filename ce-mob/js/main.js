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

$("#headerLocation").click(function(){
	$(this).addClass('loading');
	var t = $(this);
	setTimeout(function() { t.removeClass('loading'); }, 3000);
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
hideResultFilters = function(){
	$searchResultListing.show(); 
	$filterContainer.hide();	
	$resultFiltersButton.removeClass('selected');
}
showResultFilters = function(){
	$filterContainer.show();
	$searchResultListing.hide();
	$resultFiltersButton.addClass('selected');
}

hideResultMap = function(){
	$searchResultListing.show(); 
	$mapContainer.hide();
	$resultMapButton.removeClass('selected');	
}
showResultMap = function(){
	$mapContainer.show();
	$searchResultListing.hide();
	$resultMapButton.addClass('selected');
}
var $filterContainer, $mapContainer, $searchResultListing = $('.search-result-listing');

if($resultFiltersButton = $("#resultFiltersButton")){
	$filterContainer = $('.filter-container');
	$(resultFiltersButton).click(function(){
		if($(this).hasClass('selected')){
			hideResultFilters();
		}
		else{
			hideResultMap();
			showResultFilters();
		}
	})
}

if($resultMapButton = $("#resultMapButton")){
	$mapContainer = $('.map-container')
	$(resultMapButton).click(function(){
		if($(this).hasClass('selected')){
			hideResultMap();
		}
		else{
			hideResultFilters();
			showResultMap();
		}
	})
}
