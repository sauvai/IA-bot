$('#addBall').click(function () {
    boxes.push(new Ball(new Pos(random(0 + 100, canvasWidth - 100), random(0 + 100, canvasHeight - 100)), random(10, 25), {
        color: 'red'
    }));
    console.log('addBall');
});