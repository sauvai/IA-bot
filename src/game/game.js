function gameUpdate() {
    player.move();
}

function gameDraw() {

    //drawing
    pDraw.drawBackground('white');

    // for (var i = 0; i < boxes.length; i++) {
    //     boxes[i].draw();
    //     if (boxes[i].offScreen()) {
    //         Matter.World.remove(world, boxes[i].body);
    //         boxes.splice(i, 1);
    //     }
    // }

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].draw();
    }

    // portal.draw();
    player.draw();
}