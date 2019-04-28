let player;

function gameUpdate() {
    player.move();
}

function gameDraw() {

    //drawing
    pDraw.drawBackground('white');

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].draw();
    }

    // portal.draw();
    player.draw();
}