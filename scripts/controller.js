$(document).ready(function (e) {
    e.preventDefault;
    var brokweAdd = "wss://test.mosquitto.org:8081/mqtt";
    var time = new Date($.now());
    client = mqtt.connect(brokweAdd);

    client.on("connect", function () {
        client.subscribe('jane/fan/status')
        $(document).on('click', 'button', function () {
            var click = $(this).attr("id")
            $('h2').empty();
            $('h2').append(click);
            client.publish('jane/fan/status', "Turned at " + click + " : " + time)
        })
    })
})