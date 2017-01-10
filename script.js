var mousePressed = false;
var lastX, lastY;
var ctx;

        var originX 
        var originY 
        var duringX
        var duringY 
        var endX
        var endY

function InitThis() {
    
    ctx = document.getElementById('myCanvas').getContext("2d");

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        originX = e.pageX - $(this).offset().left
        originY = e.pageY - $(this).offset().top
        console.log(originX);
        console.log(originY);
        DrawRectangle(originX, originY, false);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
        duringX = e.pageX - $(this).offset().left
        duringY = e.pageY - $(this).offset().top
        console.log(duringX)
        console.log(duringY)
        DrawRectangle(duringX, duringY, true);
        }
    });

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
        endX = e.pageX - $(this).offset().left
        endY = e.pageY - $(this).offset().top
        console.log(endX)
        console.log(endY)
    });
	
    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}



function Draw(x, y, isDown) {
    if (isDown) {
        ctx.beginPath();
        ctx.strokeStyle = $('#selColor').val();
        ctx.lineWidth = $('#selWidth').val();
        ctx.lineJoin = "round";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.closePath();
        ctx.stroke();
    }
    lastX = x; lastY = y;
}


function DrawRectangle() {
        var width= endX-originX;
        console.log(width);
        var height= endY-originY;
        console.log(height)
        ctx.beginPath();
        ctx.rect(originX, originY, width,height);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }



	
function clearArea() {
    // Use the identity matrix while clearing the canvas
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}