/*
    Header : Game.js
    Name : Game.js
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

var co = null;

var v         = null;
var iteration = null;

var waitRequest = 200;

var sleep_state = true;

function initialise()
{
    iteration = new Counter();

    co = new CanvasOverview( 'dashview' );

    play();
}

function sleep()
{
    

}

function play()
{

    window.setTimeout( requestAnimationFrame( play ),
                       waitRequest );
}

initialise();