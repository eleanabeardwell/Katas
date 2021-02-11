const MoveCommands = require("./move-commands")
const TurnCommands = require("./turn-commands")

class Rover {
    constructor() {
        this._x = 0;
        this._y = 0;
        this._direction = "N";
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
    }
    get direction () {
        return this._direction;
    }
    move (command) {
        if(command !== MoveCommands.Forward !== MoveCommands.Backward) {
            throw new Error(`${command} is not a valid move command.`)
        }
    }
    turn (command) {
        if(command !== TurnCommands.Left && command !== TurnCommands.Right ) {
            throw new Error(`${command} is not a valid turn command.`);
        }
    }
}

module.exports = Rover;