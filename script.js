// This algorithm bottoms down to:
// -If the branch is long enough attatch two branches to both sides. 
// Each branch most be shorter than parent
// -Repeat for new branches

// set canvas Element to variable
let canvas = document.getElementById("fractal");
// drawing object for canvas
let ctx = canvas.getContext("2d");
// set fillstyle for canvas drawer
ctx.fillStyle = "#FF0000";
ctx.strokeStyle = "#000000";


// draw function that takes X cord and Y cord, lenght and angle of branch
function draw(startX, startY, len, angle){
    // begin path or resset current path
    ctx.beginPath();
    ctx.save();

    // specify how much the canvas will move on the X and Y axis
    ctx.translate(startX, startY);
    // rotate canvas to not have only straight line
    ctx.rotate(angle * Math.PI / 180);
    ctx.moveTo(0, 0);
    // add new point and create line to specified point
    ctx.lineTo(0, -len);
    // actually draw path
    ctx.stroke();

    // if branch can't branch further add circle based leaves
    if(len < 10){
        ctx.beginPath();
        ctx.arc(0, -len, 10, 0, Math.PI/2);
        ctx.fill();
        ctx.restore();
        return;
    }

    // recursive call
    draw(0, -len, len*0.8, angle+10);
    draw(0, -len, len*0.8, angle-10);

    ctx.restore();
}

draw(450,600,120,0);