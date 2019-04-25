class Wall extends Entity {
    constructor(pos, width, height) {
        super(pos, width, height, 10);
        this.matrix.elements.fill(1);
    }
}