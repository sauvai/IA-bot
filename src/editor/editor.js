let boxes = [];
var rot = 0;
var width;
var height;
var startPos;
var endPos;

function editorDraw() {
    // pDraw.drawBackground('white');

    // for (var i = 0; i < boundaries.length; i++) {
    //     boundaries[i].draw();
    // }

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].draw();
    }

    dragAndDrawRectangle();
}

function dragAndDrawRectangle() {


    pDraw.drawMode = CORNER;

    if (mouseIsPressed && typeof startPos == 'undefined') {
        startPos = pDraw.mousePos();
    } else if (mouseIsPressed && typeof startPos != 'undefined') {

        pDraw.pushAppearance();
        pDraw.translateDrawing(startPos)
        if (mouseX - startPos.x < 0 && mouseY - startPos.y < 0) {
            width = Math.abs(mouseX - startPos.x);
            height = Math.abs(mouseY - startPos.y);
            rot = 180;
        } else if (mouseX - startPos.x > 0 && mouseY - startPos.y < 0) {
            height = Math.abs(mouseX - startPos.x);
            width = Math.abs(mouseY - startPos.y);
            rot = 270;
        } else if (mouseX - startPos.x > 0 && mouseY - startPos.y > 0) {
            width = Math.abs(mouseX - startPos.x);
            height = Math.abs(mouseY - startPos.y);
            rot = 0;
        } else if (mouseX - startPos.x < 0 && mouseY - startPos.y > 0) {
            height = Math.abs(mouseX - startPos.x);
            width = Math.abs(mouseY - startPos.y);
            rot = 90;
        }
        pDraw.rotateDrawing(rot);
        pDraw.drawRectangle(new Pos(0, 0), width, height, 'blue');
        pDraw.popAppearance();

        endPos = new Pos(mouseX, mouseY);
    }
    if (!mouseIsPressed && typeof startPos != 'undefined' && typeof endPos != 'undefined') {
        startPos.x = (startPos.x + endPos.x) / 2;
        startPos.y = (startPos.y + endPos.y) / 2;

        console.log(startPos);

        boxes.push(new Box(startPos, width, height, {
            angle: radians(rot),
            isStatic: true
        }));
        startPos = undefined;
        endPos = undefined;
        width = 0;
        height = 0;
        rot = 0;
    }
}