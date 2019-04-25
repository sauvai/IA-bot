class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }

    move(x, y) {
        this.x += x;
        this.y += y;
    }

    distance(pos) {
        var xParam = Math.pow((this.x - pos.x), 2);
        var yParam = Math.pow((this.y - pos.y), 2);
        return Math.sqrt(xParam + yParam);
    }

    pathToGo(pos) { //calculate the x and y moves need to get to a pos
        var movePos = new Position(pos.x - this.x, pos.y - this.y);
        return movePos;
    }

    equal(pos) {
        return (this.x == pos.x && this.y == pos.y);
    }
}