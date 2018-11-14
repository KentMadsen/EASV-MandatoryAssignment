// Mandatory Assignment
// Dashboard

//
var canvas_id = null;
var context = null;


// Properties
var canvas_size = 
[
    width = 1280, 
    height = 720
]


//
function Vector( vX, vY )
{
    this.x = vX;
    this.y = vY;
}

//
function Point( pX, pY )
{
    this.x = pX;
    this.y = pY;
}


function GenEmptyVector()
{
    return GenVec(0, 0);
}

function GenVec( pX, pY )
{
    return new Vector( pX, pY );
}

function init()
{
    canvas_id = document.getElementById('dashboard');
    context   = canvas_id.getContext('2d');

    next();
}

function line( v1, 
               v2 )
{    
    context.beginPath();

    context.moveTo( v1.x, 
                    v1.y );

    context.lineTo( v2.x, 
                    v2.y );

    context.stroke();
}

// Draw Operations
function axis()
{

}

function relations()
{

}

function plot()
{

}

function draw()
{
    axis();

    plot();    

    next();
}


function next()
{
    window.requestAnimationFrame( draw );
}

init();