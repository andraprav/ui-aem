$(document).ready(function () {
    $.getJSON({
        url: 'http://localhost:8080/data/temperature.json',
        dataType: 'json',
        async: true,
        success: function (data) {
            console.log(data["temperature"]);

            var handle = $("#custom-handle");

            $("#slider").slider({
                min: 10,
                max: 30,
                value: data["temperature"],
                create: function () {
                    var value = $(this).slider("value");
                    handle.text(value);
                    changeColor(value, handle);
                },

                slide: function (event, ui) {
                    slideFunction(ui, handle);
                }
            });

        }
    });

    var slideFunction = function (ui, handle) {
        handle.text(ui.value);
        changeColor(ui.value, handle);

        $.ajax({
            type: "POST",
            dataType: 'JSON',
            url: 'http://localhost:8080/data/temperature.json',
            data: ('"temperature":' + ui.value),
            success: function (data) {
                message(data);
            }
        });
    };
    var changeColor = function (value, handle) {
        var redColor = "#e50000";
        var yellowColor = "#ffff7f";
        var blueColor = "#4d71d4";
        if (value > 24) {
            handle.css("background-color", redColor);
        }
        if (value >= 20 && value <= 24) {
            handle.css("background-color", yellowColor);
        }
        if (value < 20) {
            handle.css("background-color", blueColor);
        }
    };
});