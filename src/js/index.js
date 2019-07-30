import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

$(function() {
  $.ajax({
    type: "GET",
    async: true,
    url: 'https://picsum.photos/v2/list?limit=10',
    dataType: 'json',
    success: function (data) {
      $.each(data, function (key, elem) {
        $('#slideContainer').append($('<figure class="carousel-item"><img src='+ elem.download_url +' class="d-block w-100" alt='+ elem.author +'><figcaption class="figure-caption">'+ elem.author +'</figcaption></figure>'));
      });
        console.log(data);
        $('.carousel-item').first().addClass(" active");
        
    },
    error: function (data) {
        console.log('Error:', data);
    }
  });
});
