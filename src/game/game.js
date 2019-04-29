let player;

function initGame() {
    player = new Player(new Pos(50, 50), {
        color: 'blue'
    });
}

function gameUpdate() {
    player.move();
}

function gameDraw() {
    pDraw.drawBackground('white');

    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].draw();
    }

    player.draw();
}