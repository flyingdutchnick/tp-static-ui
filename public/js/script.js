$(document).on('ready', function() {
    //console.log($('button'));
    var $hotelSelect = $('#hotel-choices');
    var $hotelAdd = $hotelSelect.next();
    var $hotelLat;
    var $hotelLong;

    var $restSelect = $('#restaurant-choices');
    var $restAdd = $restSelect.next();
    var $restLat;
    var $restLong;

    var $actSelect = $('#activity-choices');
    var $actAdd = $actSelect.next();
    var $actLat;
    var $actLong;


    var $itinerary = $('#itinerary').find('.list-group');


    /* couldn't get this to work - kept adding it on load
          var itineraryMaker = function(itinerary, selection){
          itinerary.first().append('<div class="itinerary-item"><span class="title">' + selection.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>')
        }*/


    // listen for changes in the hotel/rest/act selection and 
    // update the corresponding lat and long 

    $hotelSelect.change(function() {
        $hotelLat = $('#hotel-choices option:selected').attr('data-lat');
        $hotelLong = $('#hotel-choices option:selected').attr('data-lon');
    });

    $restSelect.change(function() {
        $restLat = $('#restaurant-choices option:selected').attr('data-lat')
        $restLong = $('#restaurant-choices option:selected').attr('data-lon')
    });

    $actSelect.change(function() {
        $actLat = $('#activity-choices option:selected').attr('data-lat')
        $actLong = $('#activity-choices option:selected').attr('data-lon')
    });


    $hotelAdd.on('click', function() {
        if ($hotelSelect.val() !== "") {
            $itinerary.first().append('<div class="itinerary-item"><span class="title">' + $hotelSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
            drawMarker('hotel', [$hotelLat, $hotelLong]);
        }
    });

    $restAdd.on('click', function() {
        if ($restSelect.val() !== "") {
            $($itinerary[1]).append('<div class="itinerary-item"><span class="title">' + $restSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
            drawMarker('restaurant', [$restLat, $restLong]);
        }
    });

    $actAdd.on('click', function() {
        if ($actSelect.val() !== "") {
            $itinerary.last().append('<div class="itinerary-item"><span class="title">' + $actSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
            drawMarker('activity', [$actLat, $actLong]);
        }
    })

    $itinerary.on('click', 'div', function(event) {    
        $(this).remove();
    })


})
