/*
    Header : Game.js
    Name : Game.js
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

var document_canvas= null;
var canvas_context  = null;


function initialise()
{
    //
    document_canvas = document.getElementById('dashview');
    canvas_context = document_canvas.getContext('2d');
    
    load();
}

function load()
{
    // Mathematics
    requirement('/Mathematics/Functions/Calculate.js');
    
    requirement('/Mathematics/Functions/VectorParameterFunction.js');
    requirement('/Mathematics/Functions/Circle.js');
    requirement('/Mathematics/Functions/Counter.js');
    requirement('/Mathematics/Functions/Degrees.js');
    requirement('/Mathematics/Functions/Statistics.js');


        //
    requirement('/Mathematics/Entities/point2d.js');
    requirement('/Mathematics/Entities/vector2d.js');
    requirement('/Mathematics/Entities/particle2d.js');

        //
    requirement('/Mathematics/Entities/point3d.js');
    requirement('/Mathematics/Entities/vector3d.js');
    requirement('/Mathematics/Entities/particle3d.js');

        // Graphics
    requirement('/Graphics/Canvas.js');
    requirement('/Graphics/Operations.js');
    requirement('/Graphics/Phrases.js');



}

function play()
{

}

initialise();