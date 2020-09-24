let rooms = {
    "start": {
        "description": "You are in a dark, musty room. You can see a faint light to the <b>north</b> and you hear a distant tapping to the <b>west</b>",
        "directions": {
            "north": "clearing1",
            "west": "bridge1"
        }
    },
    "clearing1": {
        "description": "You exit the dark, musty room and end up in a open clearing, you see a lighthouse to the <b>north</b> and there is a strange smell coming form the <b>east</b>",
        "directions": {
            "north": "lighthouse",
            "south": "start",
            "east": "trolls"
        }
    },
    "lighthouse": {
        "description": "You arrive at the lighthouse and walk up to the door. A strange old lady opens the door, what do you do?",
        "directions": {
            "south": "clearing1"
        }
    },
    "trolls": {
        "description": "You enter another clearing, there are some trolls. They haven't seen you yet. What do you do?",
        "directions": {
            "west": "clearing1"
        }
    },
    "bridge1": {
        "description": "You You see a river and there is a bridge to the <b>west</b>.",
        "directions": {
            "east": "start",
            "west": "bridge2"
        }
    },
    "bridge2": {
        "description": "You try to cross the bridge but a troll jumps out and bites you",
        "directions": {
            "east": "bridge1"
        }
    }
}

