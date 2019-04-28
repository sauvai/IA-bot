class Ball {
    constructor(p, radius, options) {
        this.options = {
            color: 'black',
            frictionAir: 0.1
        }
        this.options = Utils.extend(this.options, options);
        this.speed = this.options.speed;
        this.radius = radius;
        this.color = options.color;
        this.body = Matter.Bodies.circle(p.x, p.y, this.radius, this.options);
        Matter.World.add(world, this.body);
    }

    draw() {
        var p = this.body.position;
        this.pos = new Pos(p.x, p.y)
        var angle = this.body.angle;

        pDraw.pushAppearance();
        pDraw.translateDrawing(this.pos);
        pDraw.rotateDrawing(angle, RADIANS);
        pDraw.drawCircle(new Pos(0, 0), this.radius * 2, this.color);
        pDraw.popAppearance();
    }

    exportToJson() {
        return 'TODO';
    }

    offScreen() {
        var x = this.body.position.x;
        var y = this.body.position.y;

        return (x < -50 || x > canvasWidth + 50 ||
            y < -50 || y > canvasHeight + 50);
    }
}