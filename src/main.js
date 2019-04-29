let sketchMode = 'editor';

function setup() {
    initPDraw();
    initMatter();
    initGame();
    initMap();
}

function draw() {
    //update
    // Matter.Engine.update(engine);

    if (sketchMode == 'game') {
        gameUpdate();
        gameDraw();
    } else if (sketchMode == 'editor') {
        editorDraw();
    }

}

function mouseReleased() {
    mouseButton = '';
}

function keyReleased() {
    keyCode = -1;
}