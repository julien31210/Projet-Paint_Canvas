$(document).ready(function(){

var mousePressed = false;
var lastX, lastY, originX, originY, duringX, duringY, endX, endY;
var ctx;
var canvas = document.getElementById('myCanvas')

ctx = canvas.getContext("2d");

var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
var data=imgData.data;
for(var i=0;i<data.length;i+=4){
    if(data[i+3]<255){
        data[i]=255;
        data[i+1]=255;
        data[i+2]=255;
        data[i+3]=255;
    }
}
ctx.putImageData(imgData,0,0);

var isActiveLine;
var isActiveRec;
       
$('#myCanvas').css('background-color', 'rgba(158, 167, 184, 0.2)');

$('button').each(function () {
    var $this = $(this);
    $this.on("click", function () {
        
        var tool = ($(this).data('tools'));
        // console.log(tool);

    $('#myCanvas').mousedown(function (e) {
        mousePressed = true;
        originX = e.pageX - $(this).offset().left
        originY = e.pageY - $(this).offset().top
        $(this).mousemove(function (e) {
            if (mousePressed) {
                
            duringX = e.pageX - $(this).offset().left
            duringY = e.pageY - $(this).offset().top
            if (tool == "brushOn") {
            
                console.log("brush on")
                Draw(duringX, duringY, true);
            } else{
                console.log("brush off")
                canvas.oncontextmenu = function() {
                        return false;
                        console.log(canvas.oncontextmenu)
                    }
            }
            if (tool == "squareOn") {
                console.log("square on")
                DrawRectangle(originX, originY, true);
            } else{
                console.log("square off")
                canvas.oncontextmenu = function() {
                        return false;
                    }
            }
            }


                $('#myCanvas').mouseup(function (e) {
                    mousePressed = false;
                    endX = e.pageX - $(this).offset().left
                    endY = e.pageY - $(this).offset().top
                    $(this).unbind('mousemove');
                });
                    $('#myCanvas').mouseleave(function (e) {
                    mousePressed = false;
                });

	
        });
    });

    });
});


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

}



$("#clear").click(function(){
    console.log("cleeaaar")
    clearArea();
})
function clearArea() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
var data=imgData.data;
for(var i=0;i<data.length;i+=4){
    if(data[i+3]<255){
        data[i]=255;
        data[i+1]=255;
        data[i+2]=255;
        data[i+3]=255;
    }
}
ctx.putImageData(imgData,0,0);
}


function download() {
    var dt = canvas.toDataURL('image/png');
    this.href = dt;
};
downloadLnk.addEventListener('click', download, false);


    
})




// if ($('button').click && tool == "square") {
//     console.log("carré!");
//     Rec();
// }

// $("#line").click(function(){ 
//     if (isActive) {
//         Line(); 
//     } else {
//         isActive = false;
//     }
// })

// $("#carre").click(function(){
//     if (isActive) {
//         Rec()
//     } else {
//         isActive = false
//     }
// })



// function Line() {

//     if (isActiveLine = true) {
        
//     console.log();
//     $('#myCanvas').mousedown(function (e) {
//         mousePressed = true;
//         originX = e.pageX - $(this).offset().left
//         originY = e.pageY - $(this).offset().top
//         Draw(originX, originY, false);
//     });

//     $('#myCanvas').mousemove(function (e) {
//         if (mousePressed) {
//         duringX = e.pageX - $(this).offset().left
//         duringY = e.pageY - $(this).offset().top
//         Draw(duringX, duringY, true);
//         }
//     });

//     $('#myCanvas').mouseup(function (e) {
//         mousePressed = false;
//         endX = e.pageX - $(this).offset().left
//         endY = e.pageY - $(this).offset().top
//         Draw(duringX, duringY, true);
//     });
	
//     $('#myCanvas').mouseleave(function (e) {
//         mousePressed = false;
//     });

//     } else {
//         console.log("line is off");
//     }
// }



// function Rec(arg) {
//     console.log('here');
// console.log(arg);
//    if (isActiveRec = true) {
       
//     ctx = document.getElementById('myCanvas').getContext("2d");

//     $('#myCanvas').mousedown(function (e) {
//         mousePressed = true;
//         originX = e.pageX - $(this).offset().left
//         originY = e.pageY - $(this).offset().top
//         DrawRectangle(originX, originY, false);
//     });

//     $('#myCanvas').mousemove(function (e) {
//         if (mousePressed) {
//         duringX = e.pageX - $(this).offset().left
//         duringY = e.pageY - $(this).offset().top
//         DrawRectangle(duringX, duringY, false);
//         }
//     });

//     $('#myCanvas').mouseup(function (e) {
//         mousePressed = false;
    
//         endX = e.pageX - $(this).offset().left
//         endY = e.pageY - $(this).offset().top
//         DrawRectangle(duringX, duringY, true);
//     });
	
//     $('#myCanvas').mouseleave(function (e) {
//         mousePressed = false;
//     });
//    } else { 
//        console.log("rec is off")
//    }
// }
