class Geo {

    static degreeToRad(angleDeg) {
        return angleDeg * (Math.PI / 180);
    }

    static radToDegree(angleRad) {
        return angleRad * (180 / Math.PI);
    }

    static distance(p1, p2) {
        var xParam = Math.pow((p1.x - p2.x), 2);
        var yParam = Math.pow((p1.y - p2.y), 2);
        return Math.sqrt(xParam + yParam);
    }

    static translatePoint(point, direction) {
        return new Pos(point.x + direction.x, point.y + direction.y);
    }

    static isPointOnLine(point, p1, p2) {
        return (this.distance(point, p1) + this.distance(point, p2) == this.distance(p1, p2));
    }

    static isPointOnShape(point, shape) {
        for (var i = 0; i + 1 < shape.length; i++) {
            if (this.isPointOnLine(point, shape[i], shape[i + 1]))
                return true;
        }
        if (shape.length > 0) {
            if (this.isPointOnLine(point, shape[0], shape[shape.length - 1]))
                return true;
        }
    }

    static rotatePoint(center, point, angle) // degree angle
    {
        var radAngle = this.degreeToRad(angle);

        var sinAngle = Math.sin(radAngle);
        var cosAngle = Math.cos(radAngle);

        var newX = ((point.x - center.x) * cosAngle) - ((point.y - center.y) * sinAngle);
        var newY = ((point.x - center.x) * sinAngle) + ((point.y - center.y) * cosAngle);

        newX += center.x;
        newY += center.y;

        return new Pos(newX, newY);
    }

    static getAngle(p1, p2, origin1 = new Pos(0, 0), origin2 = new Pos(0, 0)) {

        var newP1 = new Pos(p1.x, p1.y);
        var newP2 = new Pos(p2.x, p2.y);

        newP1.move(-origin1.x, -origin1.y);
        newP2.move(-origin2.x, -origin2.y);

        var determinant = (newP1.x * newP2.y) - (newP1.y * newP2.x);
        var dotProduct = (newP1.x * newP2.x) + (newP1.y * newP2.y);

        var angleRad = Math.atan2(determinant, dotProduct);
        var angleDeg = this.radToDegree(angleRad);

        return -angleDeg;
    }
}