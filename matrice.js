class Matrice {
    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.length = width * height;
        for (var i = 0; i < this.length; i++) { // 0 empty, 1 filled
            this.elements[i] = 0;
        }
    }

    addElementByIndex(i, element) {
        if (i >= length)
            return false
        this.element[i] = element;
        return true
    }

    addElementByPosition(x, y, element) {
        if (x > width || y > height)
            return false
        addElementByIndex(getIndexOf(x, y));
    }

    getIndexOf(x, y) {
        return (x * this.width) + y;
    }
}