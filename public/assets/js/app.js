$(document).ready(function(){



$('.btn_devour').on('click', function(){
	let btnId = $(this).data('id');
	let devoured = $(this).data('devour');

	let data = {
		id : btnId,
		devoured : devoured
	}

	$.ajax("/api/burger/" + btnId, {
      type: "PUT",
      data: data
    }).then(
      function() {
        console.log("Updated new Burger");
        location.reload();
      }
    );
});

$('.btn_trash').on('click', function(){
	let btnId = $(this).data('id');
	console.log(btnId);

	$.ajax("/api/burger/" + btnId, {
      type: "DELETE"
    }).then(
      function() {
        console.log("DELETED new Burger");
        location.reload();
      }
    );
});

 $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burger_new").val().trim(),
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 });