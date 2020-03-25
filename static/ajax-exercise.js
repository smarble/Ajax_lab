"use strict";


// PART 1: SHOW A FORTUNE

function replaceFortune(results) {
    // render the results passed from showFortune to the html id fortune-text
    $("#fortune-text").html(results);
}

function showFortune(evt) {
    //TODO: trigger the /fortune view function and pass what it returns to the replaceFortune function
    $.get('/fortune', replaceFortune);
}

// listen to the html id get-fortune_button for a click, execute showFortune function
// will generate a evt object and pass it to showFortune as the first agument by default
$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function replaceForecast(results) {
    $("#weather-info").html(results.forecast);
}

function showWeather(evt) {
    // prevent default loading of page
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    $.get(url, formData, replaceForecast);
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    
function updateMelons(results) {
    if (results.code === "OK") {
        $('#order-status').html("<p>" + results.msg + "</p>");
    }
    else {
        $('#order-status').addClass("order-error");
        $('#order-status').html("<p><b>" + results.msg + "</b></p>");
    }
}

function orderMelons(evt) {
    evt.preventDefault();

    let formInputs = {
        "melon_type": $("#melon-type-field").val(),
        "qty": $("#qty-field").val()
    };

    $.post("/order-melons.json", formInputs, updateMelons);
}

$("#order-form").on('submit', orderMelons);



