$(document).on('ready', function(){
  //console.log($('button'));
    var $hotelSelect = $('#hotel-choices');
    var $restSelect = $('#restaurant-choices');
    var $actSelect = $('#activity-choices');
    var $hotelAdd = $hotelSelect.next();
    var $restAdd = $restSelect.next();
    var $actAdd = $actSelect.next();

    var $itinerary = $('#itinerary').find('.list-group');


/* couldn't get this to work - kept adding it on load
      var itineraryMaker = function(itinerary, selection){
      itinerary.first().append('<div class="itinerary-item"><span class="title">' + selection.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>')
    }*/

    $hotelAdd.on('click', function(){
      $itinerary.first().append('<div class="itinerary-item"><span class="title">' + $hotelSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    });

    $restAdd.on('click', function(){
      $($itinerary[1]).append('<div class="itinerary-item"><span class="title">' + $restSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    });

    $actAdd.on('click', function(){
      $itinerary.last().append('<div class="itinerary-item"><span class="title">' + $actSelect.val() + '<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    })
})
