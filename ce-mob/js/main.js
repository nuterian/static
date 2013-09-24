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
	$("#locationLoaderStatus").html("Getting your location...");
	$("#locationModal").addClass('modal-show');
	$("#locationInput").focus();
	$("body").addClass('modal-mode');
	$(".modal-overlay").click(function(){
		$("body").removeClass('modal-mode');
		$("#locationModal").removeClass('modal-show');
	});
	$(this).addClass('loading');
	var t = $(this);
	setTimeout(function() { 
			t.removeClass('loading');
			$("#locationLoaderStatus").html("<strong>New York City</strong>, NY");
	}, 
	3000);
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


$resultFiltersButton = $("#resultFiltersButton");
$resultMapButton = $("#resultMapButton");

if($resultFiltersButton){

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
	$filterContainer = $('.filter-container');
	$resultFiltersButton.click(function(){
		if($(this).hasClass('selected')){
			hideResultFilters();
		}
		else{
			hideResultMap();
			showResultFilters();
		}
	});

	$mapContainer = $('.map-container')
	$resultMapButton.click(function(){
		if($(this).hasClass('selected')){
			hideResultMap();
		}
		else{
			hideResultFilters();
			showResultMap();
		}
	})
}
