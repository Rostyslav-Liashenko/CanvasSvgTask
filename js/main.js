let canvas  = document.querySelector(".canvas-picture__canvas");
canvas.width = window.screen.width;
canvas.height = 700;

drawCanvas(canvas);
function drawCanvas(canvas) {
    let ctx = canvas.getContext("2d");
    drawSun(ctx, 0, 0);
    drawClouds(ctx);
    drawTrees(ctx);
}

function drawSun(ctx, begX, begY) {
    const radiusSun = 80;
    ctx.fillStyle = "yellow";
    drawCircle(ctx, begX, begY, radiusSun);
}

function drawClouds(ctx) {
    const heightLines = [120, 180];
    const countCloud = 6;

    for (let i = 0; i < countCloud; i++) {
        const heightCloud = i % 2 === 0 ? heightLines[0] : heightLines[1];
        drawCloud(ctx, canvas.width - ((i + 1) * 220), heightCloud);
    }
}

function drawCloud(ctx, begX, begY) {
    const colorCloud = "#42F5EC";
    const bigCircleRadius = 50;
    const smallCircleRadius = 40;
    const offsetCircleSmall = 30;
    ctx.fillStyle = colorCloud;
    drawCircle(ctx, begX, begY, bigCircleRadius);
    drawCircle(ctx, begX - bigCircleRadius, begY + offsetCircleSmall, smallCircleRadius);
    drawCircle(ctx, begX + bigCircleRadius, begY + offsetCircleSmall, smallCircleRadius);
    ctx.fillRect(begX-65, begY + 8, 120, 60);
}

function drawTrees(ctx) {
    const heightTree = [400, 600];
    const countTree = 6;

    for (let i  = 0; i < countTree; i++) {
        const heightCloud = i % 2 === 0 ? heightTree[0] : heightTree[1];
        drawTree(ctx, canvas.width - ((i + 1) * 220), heightCloud);
    }
}

function drawTree(ctx, begX, begY) {
    ctx.fillStyle = "#42f548";
    const sizeStem = 100;
    drawLine(ctx, begX, begY, begX, begY + sizeStem);
    drawCircle(ctx, begX, begY, 35);
    drawCircle(ctx, begX + 35, begY - 20, 35);
    drawCircle(ctx, begX - 10, begY - 50, 30);
    drawCircle(ctx, begX, begY + 30, 35);
    drawCircle(ctx, begX - 40, begY, 35);
}

function drawCircle(ctx, begX, begY, radius) {
    ctx.beginPath();
    ctx.arc(begX, begY, radius, 0, 2 * Math.PI);
    ctx.fill();
}

function drawLine(ctx, begX, begY, endX, endY) {
    ctx.beginPath();
    ctx.moveTo(begX, begY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
}