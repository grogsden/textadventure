let currentRoom = "start";
let commands = ["go", "pickup", "look", "talk", "inventory", "go fuck yourself"];
let inventory = [];

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
        $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>")
    } else {
        $('#game-text').append("<p>" + "You cant go that way." + "</p>")

    }
}

function showHelp() {
    $('#game-text').append("<p>Here are all the commands: </p>");
    $('#game-text').append("<p><ul>");
    for (let i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function showInventory() {
    if (inventory.length === 0) {
        $('#game-text').append("<p>You dont have anything, bitch.</p>");
        return;
    }
    $('#game-text').append("<p>Here is your inventory</p>");
    $('#game-text').append("<p><ul>");
    for (let i = 0; i < inventory.length; i++) {
        $('#game-text').append("<li>" + inventory[i] + "</li>");
    }
    $('#game-text').append("</ul></p>");
}

function playerInput(input) {
    let command = input.split(" ")[0];
    switch (command) {
        case "go":
            let dir = input.split(" ")[1];
            changeRoom(dir);
            break;
        case "help":
            showHelp();
            break;
        case "inventory":
            showInventory();
            break;

        default:
            alert("invadid command");
    }
}

$(document).ready(function () {
    $('#game-text').append("<p>" + rooms.start.description + "</p>")

    $(document).keypress(function (key) {
        if (key.which === 13 && $('#user-input').is(':focus')) {
            let value = $('#user-input').val().toLowerCase();
            $('#user-input').val("");
            playerInput(value)
        }
    })

})

