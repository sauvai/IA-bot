class Box {
    constructor(p, width, height, options) {
        this.options = {
            color: 'black',
            angle: 0
        }
        this.width = width;
        this.height = height;
        this.color = options.color;
        this.body = Matter.Bodies.rectangle(p.x, p.y, this.width, this.height, Utils.extend(this.options, options));
        this.body.angle = this.options.angle;
        Matter.World.add(world, this.body);
    }

    draw() {
        var p = this.body.position;
        this.pos = new Pos(p.x, p.y)
        var angle = this.body.angle;

        pDraw.pushAppearance();
        pDraw.translateDrawing(this.pos);
        pDraw.rotateDrawing(angle, RADIANS);
        pDraw.drawRectangle(new Pos(0, 0), this.width, this.height, this.color);
        pDraw.popAppearance();
    }

    offScreen() {
        var x = this.body.position.x;
        var y = this.body.position.y;

        return (x < -50 || x > canvasWidth + 50 ||
            y < -50 || y > canvasHeight + 50);
    }

    exportToJson() {
        return 'TODO';
    }
}