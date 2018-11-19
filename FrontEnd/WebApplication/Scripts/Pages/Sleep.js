/*
    Header : Game.js
    Name : Game.js
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

var co = null;

var v         = null;
var iteration = null;

var waitRequest = 1000;

var loadCircle = null;
var loadCount = null;

function initialise()
{
    iteration = new Counter();
    
    co = new CanvasOverview( 'dashview' );

    co.setColor('rgba(255, 255, 255, 0.5)');

    loadCircle = new Circle();
    loadCircle.setRadius(10);

    var mid =( new Point2D( co.getWidth()/2, co.getHeight()/2 ) );
    heightIncrement = co.getHeight/12;

    loadCount = new Counter();

    newPointer = new Point2D(0, mid.get);
    lastPointer = new Point2D(0, 0);

    play();
}

var n = 3;
var heightIncrement = null;

var lastPointer = null;
var newPointer = null;

function play()
{
    co.clear();

    iteration.increment();

    var i = iteration.getValue() % co.getWidth();
    if(i == 0)
    {
        iteration.setValue( -1 );
    }
    

    window.setTimeout( requestAnimationFrame( play ),
                       waitRequest );
}

initialise();