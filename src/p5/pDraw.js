class PDraw {
    constructor() {}
    initCanvas(cWidth, cHeight, parFps) {

        this.canvasWidth = cWidth;
        this.canvasHeight = cHeight;
        this.fps = parFps;

        let canvas = createCanvas(this.canvasWidth, this.canvasHeight);
        canvas.parent('CanvasHolder');
        frameRate(fps);
        strokeWeight(0);
    }

    drawBackground(color) {
        background(color);
    }

    rotateDrawing(angle, angleType = DEGREES) {
        angleMode(angleType);
        rotate(angle);
    }

    translateDrawing(pos) {
        translate(pos.x, pos.y);
    }

    mousePos() {
        return new Pos(mouseX, mouseY);
    }

    pushAppearance() {
        push();
    }

    popAppearance() {
        pop();
    }

    setAppearance(fillColor = 'white', strokeColor = 'white') {
        rectMode(CENTER);
        ellipseMode(CENTER);
        imageMode(CENTER);
        stroke(strokeColor);
        fill(color(fillColor));
    }

    write(str, p, size = 10, fillColor = 'white', strokeColor = 'white') {
        this.setAppearance(fillColor, strokeColor);

        textSize(size);
        text(str, p.x, p.y);

        return p.getCopy();
    }

    drawImg(img, p, width, height) {
        image(img, p.x, p.y, width, height);
        return p.getCopy();
    }

    drawEllipse(p, width, height, fillColor = 'white', strokeColor = 'white') {
        this.setAppearance(fillColor, strokeColor);

        ellipse(p.x, p.y, width, height);

        return p.getCopy();
    }

    drawCircle(p, radius, fillColor = 'white', strokeColor = 'white') {
        this.setAppearance(fillColor, strokeColor);

        circle(p.x, p.y, radius);

        return p.getCopy();
    }

    drawRectangle(p, width, height, fillColor = 'white', strokeColor = 'white') {
        this.setAppearance(fillColor, strokeColor);

        rect(p.x, p.y, width, height);

        return p.getCopy();
    }

    drawQuad(posArr, fillColor = 'white', strokeColor = 'white') {
        this.setAppearance(fillColor, strokeColor);

        quad(posArray[0].x, posArray[0].y,
            posArray[1].x, posArray[1].y,
            posArray[2].x, posArray[2].y,
            posArray[3].x, posArray[3].y);

        return new [posArr.slice(0)];
    }

    drawTriangle(posArr, fillColor = 'white', strokeColor = 'white') {
        this.setAppearance(fillColor, strokeColor);

        quad(posArray[0].x, posArray[0].y,
            posArray[1].x, posArray[1].y,
            posArray[2].x, posArray[2].y);

        return new [posArr.slice(0)];
    }

    drawPoint(p, fillColor = 'white') {
        this.setAppearance(fillColor, fillColor);

        point(p.x, p.y);

        return [p.getCopy()];
    }

    drawLine(p1, p2, fillColor = 'white') {
        this.setAppearance(fillColor, fillColor);

        line(p1.x, p1.y, p2.x, p2.y);

        return [p1.getCopy(), p2.getCopy()];
    }
}