class Matrix {
    constructor(pos, width, height, size = 1) {
        this.pos = new Position(pos.x, pos.y);
        this.height = height;
        this.width = width;
        this.length = width * height;
        this.elements = [];
        for (var i = 0; i < this.length; i++) { // 0 empty, 1 filled
            this.elements.push(0);
        }
    }

    addElementByIndex(i, element) {
        if (i < 0 || i >= this.length)
            return false;
        this.elements[i] = element;
        return true;
    }

    getElementById(index) {
        if (index < 0 || index >= this.length) {
            return -1;
        } else {
            return this.elements[index];
        }
    }

    getElementByPos(x, y) {
        if (x < 0 || x >= this.width ||
            y < 0 || y >= this.height)
            return -1;
        else {
            var index = this.getIndexOf(x, y);
            return getElementById(index);
        }
    }

    addElementByPosition(x, y, element) {
        if (x > this.width || y > this.height || x < 0 || y < 0)
            return false;
        else {

            addElementByIndex(getIndexOf(x, y));
            return true;
        }
    }

    getPosFromIndex(index) {
        var x = (Math.floor(index / this.width)) + this.pos.x;
        var y = (index % this.width) + this.pos.y;
        return new Position(x, y);
    }

    getIndexOf(x, y) { // return -1 on error
        if (x > this.width || y > this.height || x < 0 || y < 0)
            return -1;
        else
            return (x * this.width) + y;
    }

    move(x, y) { // x & y are "directions"
        this.pos.move(x, y);
    }

    rotate(turnNumber) {
        while (turnNumber--) {
            var size = this.width;
            var result = [];

            for (var i = 0; i < size; ++i) {
                for (var j = 0; j < size; ++j) {
                    result[i * size + j] = this.elements[(size - j - 1) * size + i];
                }
            }

            this.elements = result;
        }
    }

    print() {
        console.log('Pos: ' + this.pos.toString() + '\n');
        console.log('Width: ' + this.width + '\n');
        console.log('Height: ' + this.height + '\n');
        console.log('Length: ' + this.length + '\n');

        var str = "";
        for (var i = 0; i < this.length; i++) {
            if (i % this.width == 0) {
                str += '\n';
            }
            str += this.elements[i];
        }
        console.log(str);
    }
}