class Boundary extends Box {
    constructor(pos, width, height, options) {
        var boundaryOpt = {
            color: 'black',
            isStatic: true
        }
        super(pos, width, height, Utils.extend(boundaryOpt, options));
    }
}