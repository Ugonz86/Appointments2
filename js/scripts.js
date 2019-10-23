

$(document).ready(function() {
  $("form#appointments").submit(function(event) {
    event.preventDefault();
    $("#appointments").hide();
    //$("#success").show(); //This line will show result in the same page.
    location.href="success.html" //This line will show the same result in another html page.
  });
});
