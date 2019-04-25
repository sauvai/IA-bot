class Entity {
    constructor(pos, solid = true, lethal = false) {
        this.posArr = [new Position(pos.x, pos.y)];
        this.show = true;
        this.solid = solid;
        this.lethal = lethal;
    }

    collide(entity) {
        // text('pos: ' + entity.pos.x + ', ' + entity.pos.y, 50, 20);
        for (var i = 0; i < entity.posArr.length; i++) {
            for (var y = 0; y < this.posArr.length; y++) {
                if (entity.posArr[i].equal(this.posArr[y]))
                    return true;
            }
        }
        return false;
    }

    show() { //a !show entity do not collide
        this.show = !show;
    }

    move(x, y) { // x & y are "directions"
        for (var i = 0; i < this.posArr.length; i++) {
            this.posArr.move(x, y);
        }
    }

    rotate(turnNumber) {
        var id; = (row * length_of_row) + column;
        for (var i = 0; i < posArr.length; i++) {
            id = posArr[i].x * posArr
        }
    }
}