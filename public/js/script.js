$(document).on('ready', function() {
    //console.log($('button'));
    var $hotelSelect = $('#hotel-choices');
    var $hotelAdd = $hotelSelect.next();
    var $hotelLat;
    var $hotelLong;
    var $hotelId;

    var $restSelect = $('#restaurant-choices');
    var $restAdd = $restSelect.next();
    var $restLat;
    var $restLong;

    var $actSelect = $('#activity-choices');
    var $actAdd = $actSelect.next();
    var $actLat;
    var $actLong;

    var $addSelect = $('#day-add');
    var $itinerary = $('#itinerary').find('.list-group');

    var deleteMarker = function(id){
        for (var i = 0; i  <markers.length; i++){
            if(markers[i].venueId == id) {
                markers[i].setMap(null);
            }
            markers.splice(i, 1);
            return;
        }
    }


    /* couldn't get this to work - kept adding it on load
          var itineraryMaker = function(itinerary, selection){
          itinerary.first().append('<div class="itinerary-item"><span class="title">' + selection.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>')
        }*/


    // listen for changes in the hotel/rest/act selection and
    // update the corresponding lat and long

    $hotelSelect.change(function() {
        $hotelLat = $('#hotel-choices option:selected').attr('data-lat');
        $hotelId = $('#hotel-choices option:selected').attr('data-hotelid');
        $hotelLong = $('#hotel-choices option:selected').attr('data-lon');
    });

    $restSelect.change(function() {
        $restLat = $('#restaurant-choices option:selected').attr('data-lat')
        $restId = $('#restaurant-choices option:selected').attr('data-restid');
        $restLong = $('#restaurant-choices option:selected').attr('data-lon')
    });

    $actSelect.change(function() {
        $actLat = $('#activity-choices option:selected').attr('data-lat')
        $actId = $('#activity-choices option:selected').attr('data-actid');
        $actLong = $('#activity-choices option:selected').attr('data-lon')
    });


    $hotelAdd.on('click', function() {
        if ($hotelSelect.val() !== "") {
            $itinerary.first().append('<div class="itinerary-item"><span class="title" data-hotelid="' + $hotelId+ '">' + $hotelSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
            drawMarker('hotel', [$hotelLat, $hotelLong], $hotelId);
        }
    });

    $restAdd.on('click', function() {
        if ($restSelect.val() !== "") {
            $($itinerary[1]).append('<div class="itinerary-item"><span class="title" data-restid="' + $restId + '">' + $restSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
            //var latLng = new google.maps.LatLng(coords)
            drawMarker('restaurant', [$restLat, $restLong], $restId);
        }
    });

    $actAdd.on('click', function() {
        if ($actSelect.val() !== "") {
            $itinerary.last().append('<div class="itinerary-item"><span class="title" data-actid="'+ $actId +'">' + $actSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
            drawMarker('activity', [$actLat, $actLong], $actId);
        }
    })

    // add button functionality
    $addSelect.on('click', function(event) {
        var dayNumber = parseInt($(this).prev().text())+1 || 1; 
        $(this).before("<button class='btn btn-circle day-btn'>"+dayNumber+"</button>");
    })


    // remove functionality
    $itinerary.on('click', 'div', function(event) {
        //marker.idsetmAp(null)
        var searchKey = Object.keys($(this).children().data()).toString();

        var venueId = $(this).children().data(searchKey);

        deleteMarker(venueId);
        $(this).remove();
    })


})
