class Portal {
    constructor(p1, p2, radius, options) {
        this.options = {
            color1: 'red',
            color2: 'blue',
            isSensor: true
        }
        this.radius = radius;


        var option1 = Utils.extend(this.options, options);

        var option2 = Utils.extend(this.options, options);

        this.portal1 = new Ball(p1, this.radius, option1);
        this.portal2 = new Ball(p2, this.radius, option2);

        Matter.Body.set(this.portal1, 'portalLinkId', this.portal2.id);
        Matter.Body.set(this.portal2, 'portalLinkId', this.portal1.id);

    }

    draw() {
        this.portal1.draw();
        this.portal2.draw();
    }

    offScreen() {
        return (this.portal1.offScreen() || this.portal2.offScreen());
    }

    exportToJson() {
        return 'TODO';
    }
}