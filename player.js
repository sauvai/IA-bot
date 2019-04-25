class Player extends Entity {
    constructor(pos) {
        super(pos, 1, 1, 10);
        this.matrix.elements = [1];
        this.color = 'green';
    }

    move(direction) {
        if (direction == 'right') {
            this.matrix.move(1, 0);
        } else if (direction == 'left') {
            this.matrix.move(-1, 0);

        } else if (direction == 'up') {
            this.matrix.move(0, -1);

        } else if (direction == 'down') {
            this.matrix.move(0, 1);
        }
    }

    x() {
        return this.getPos().x;
    }

    y() {
        return this.getPos().y;
    }
}