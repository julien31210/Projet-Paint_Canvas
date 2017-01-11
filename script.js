$(document).ready(function(){


var mousePressed = false;
var lastX, lastY, originX, originY, duringX, duringY, endX, endY, tool;
var ctx;
ctx = document.getElementById('myCanvas').getContext("2d");

         
        var isActive = false


// $('button').each(function () {
//     var $this = $(this);
//     $this.on("click", function () {
//         tool = ($(this).data('tools'));
//         console.log(tool);
//     });
// });

// if ($('button').click && tool == "square") {
//     console.log("carré!");
//     Rec();
// }

$("#line").click(function(){ 
    Line();
    isActive = !isActive
})
$("#carre").click(function(){
    Rec();
    isActive = !isActive
})


function Line() {
    console.log();
    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        originX = e.pageX - $(this).offset().left
        originY = e.pageY - $(this).offset().top
        // console.log(originX);
        // console.log(originY);
        Draw(originX, originY, false);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
        duringX = e.pageX - $(this).offset().left
        duringY = e.pageY - $(this).offset().top
        // console.log(duringX)
        // console.log(duringY)
        Draw(duringX, duringY, true);
        }
    });
    

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    
        endX = e.pageX - $(this).offset().left
        endY = e.pageY - $(this).offset().top
        // console.log(endX)
        // console.log(endY)
        Draw(duringX, duringY, true);
    });
	
    $('#myCanvas').mouseleave(function (e) {
        mousePressed = false;
    });
}



function Rec() {
    
    ctx = document.getElementById('myCanvas').getContext("2d");

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        originX = e.pageX - $(this).offset().left
        originY = e.pageY - $(this).offset().top
        // console.log(originX);
        // console.log(originY);
        DrawRectangle(originX, originY, false);
    });

    $('#myCanvas').mousemove(function (e) {
        if (mousePressed) {
        duringX = e.pageX - $(this).offset().left
        duringY = e.pageY - $(this).offset().top
        // console.log(duringX)
        // console.log(duringY)
        DrawRectangle(duringX, duringY, false);
        }
    });

    $('#myCanvas').mouseup(function (e) {
        mousePressed = false;
    
        endX = e.pageX - $(this).offset().left
        endY = e.pageY - $(this).offset().top
        // console.log(endX)
        // console.log(endY)
        DrawRectangle(duringX, duringY, true);
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


function DrawRectangle(x, y, isDown) {
    if (isDown) {
        var width= endX-originX;
        console.log(width);
        var height= endY-originY;
        console.log(height)
        ctx.beginPath();
        ctx.rect(originX, originY, width,height);
        ctx.stroke();
        ctx.closePath();
    }
        lastX = x; lastY = y;
}



$("#clear").click(function(){
    console.log("cleeaaar")
    clearArea();
})
function clearArea() {

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}


    
})