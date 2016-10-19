/**
 * Created by saurabh on 19/10/16.
 */

function slidertoggel_requests(id) {
    console.log("#"+id+"-data-response");
    $( "#"+id+"-data-request" ).slideToggle( "fast", function() {

    });
}

function slidertoggel_response(id) {
    console.log("#"+id+"-data-response");
    $( "#"+id+"-data-response" ).slideToggle( "fast", function() {

    });
}

