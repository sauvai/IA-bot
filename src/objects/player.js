class Player {
    constructor(p, options, controls = [UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW]) {
        this.options = {
            color: 'black',
            radius: 20,
            friction: 0.5,
            frictionAir: 0.1,
            speed: 0.004,
            rotationSpeed: 0.2
        }
        this.options = Utils.extend(this.options, options);

        // movement
        this.speed = this.options.speed;
        this.rotationSpeed = this.options.rotationSpeed;

        // game
        this.controls = controls; // up, down, left, right
        this.rotation = Geo.degreeToRad(90);

        // drawing
        this.radius = this.options.radius;
        this.color = options.color;

        // object
        this.body = Matter.Bodies.circle(p.x, p.y, this.radius, this.options);
        Matter.World.add(world, this.body);
    }

    draw() {
        var pos = new Pos(this.body.position.x, this.body.position.y)

        pDraw.pushAppearance();
        pDraw.translateDrawing(pos);
        pDraw.rotateDrawing(this.body.angle, RADIANS);
        pDraw.drawCircle(new Pos(0, 0), this.radius * 2, this.color);
        strokeWeight(2);
        pDraw.drawLine(new Pos(0, 0), new Pos(0, -this.radius), 'red');
        pDraw.popAppearance();
    }

    move() {
        var velX = 0;
        var velY = 0;
        var pushRot = 0;

        if (keyIsDown(this.controls[0])) { // UP
            var radRotation = Geo.radToDegree(this.rotation);

            velX = this.speed * Math.sin(radRotation * Math.PI / 180) * -1;
            velY = this.speed * Math.cos(radRotation * Math.PI / 180);

            velX *= -1;
            velY *= -1;
        }

        if (keyIsDown(this.controls[1])) { // DOWN
            var radRotation = Geo.radToDegree(this.rotation);

            velX = this.speed * Math.sin(radRotation * Math.PI / 180) * -1;
            velY = this.speed * Math.cos(radRotation * Math.PI / 180);
        }

        if (keyIsDown(this.controls[2])) { // LEFT
            pushRot = -this.rotationSpeed;
        }

        if (keyIsDown(this.controls[3])) { // RIGHT
            pushRot = +this.rotationSpeed;
        }

        this.rotation += pushRot;

        Matter.Body.applyForce(this.body, {
            x: this.body.position.x,
            y: this.body.position.y
        }, {
            x: velX,
            y: velY
        });
        Matter.Body.setAngle(this.body, this.rotation);
    }

    exportToJson() {
        return 'TODO';
    }
}