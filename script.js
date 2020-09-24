let currentRoom = "start";

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>")
    } else {
        $('#game-text').append("<p>" + "You cant go that way." + "</p>")

    }
}

$(document).ready(function () {
    $('#game-text').append("<p>" + rooms.start.description + "</p>")

    $(document).keypress(function (key) {
        if (key.which === 13 && $('#user-input').is(':focus')) {
            let value = $('#user-input').val().toLowerCase();
            switch (value) {
                case "north":
                    changeRoom("north");
                    break;
                case "south":
                    changeRoom("south");
                    break;
                case "east":
                    changeRoom("east");
                    break;
                case "west":
                    changeRoom("west");
                    break;
                default:
                    alert("invadid command");
            }
        }
    })

})

