class Entity {
    constructor(pos, width = 1, height = 1, size = 1, solid = true, lethal = false) {
        this.matrix = new Matrix(pos, width, height);
        this.size = size;
        this.show = true;
        this.solid = solid;
        this.lethal = lethal;
    }

    getElementByIndex(index) {
        return this.matrix.getElementById(index);
    }

    getElementByPos(x, y) {
        return this.matrix.getElementByPos(x, y);
    }

    collide(entity) {
        for (var i = 0; i < entity.matrix.elements.length; i++) {
            for (var j = 0; j < this.matrix.elements.length; j++) {

                if (entity.matrix.elements[i] != 0 &&
                    entity.solid && this.solid &&
                    entity.show && this.show &&
                    this.matrix.elements[j] != 0 &&
                    entity.matrix.getPosFromIndex(i).equal(this.matrix.getPosFromIndex(j))) {
                    return true;
                }
            }
        }
        return false;
    }

    show() { //a !show entity do not collide
        this.show = !show;
    }

    getPos() {
        return this.matrix.pos;
    }

    move(x, y) { // x & y are "directions"
        this.matrix.move(x, y);
    }

    rotate(turnNumber) {
        this.matrix.rotate(turnNumber);
    }

    print() {
        console.log('Show: ' + this.show);
        console.log('Solid: ' + this.solid);
        console.log('Lethal: ' + this.lethal);
        this.matrix.print();
    }
}