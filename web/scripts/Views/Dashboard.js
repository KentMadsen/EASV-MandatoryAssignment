/*
    Header : Dashboard.js
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

// Tag: System Variables
    // Tag: Global
var canvas_document = null;
var canvas_context  = null;

var Continue = true;

var wait_for_next_frame = default_wait;

var start_screen_pos  = GeneratePoint( 0, 0 );
var canvas_size       = GenerateVector( 1280, 720 );

var canvas_document_identity = 'dashboard';

// Tag: Business Logic
        // Configuration
function configureSetup()
{
  // Setup Canvas Document
    configure_stage();


}

// setup required components
function configure_stage()
{
    canvas_document = document.getElementById( canvas_document_identity );
    canvas_context  = canvas_document.getContext( d2 );
}

// Phrases
function analyze()
{

}

function map()
{

}

function representation()
{

}

function present()
{

}

// Program Structure
  // Internal Business Logic Phrase
function prepareModel()
{
  
}

// Tag: Initialise Screen
function initialise()
{
  //
  configureSetup();

  //
  prepareModel();

  // Starts system
  nextFrame();
}

// Tag: Update Screen
function drawFrame()
{
    

  // request next frame
  nextFrame();
}

// Tag: Clear
function clearFrame()
{
  // Clean current Canvas
  clearFrameScreen();

  // other
}

function clearFrameScreen()
{
    clearScreenAt( start_screen_pos,
                   canvas_size )
}

// Tag: Next Frame Iteration
function nextFrame()
{
    
    // Updates System Model
    updateModel();

    //
    if( Continue )
    {
        // resets canvas display
        clearFrame();

        //
        setTimeout( requestFrame,
                    wait_for_next_frame );
    }
}

//
function requestFrame()
{
    window.requestAnimationFrame( drawFrame );
}

// Tag: Update Model
function updateModel()
{


}

// Tag: Application Event


// Tag: Application Entry
initialise();
