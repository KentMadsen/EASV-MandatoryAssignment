/*
    Header : Dashboard.js
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

// Tag: Object Buffer Types
  	// Tag: Model
class Model
{
  constructor()
  {
    this.originPoint = GenerateEmptyVector();


  };

}


  	// Tag: Container
class Container
{
  constructor()
  {

  };
}


  	// Tag: Frame
class Frame
{
  constructor()
  {

  };
}


// Tag: Entity
class Entity
{
    constructor()
    {
      this.originPoint = GenerateEmptyVector();

    };



};


// Tag: Object
class Object
  extends Entity
{
  constructor()
  {
    super();

  };


};


// Tag: Actor
class Actor
    extends Entity
{
    constructor()
    {
      super();

    };

};


// Tag: Effect
class Effect
    extends Entity
{
    constructor()
    {
      super();
      //
    };



};

// Tag: Interactive
class Interactive
    extends Entity
{
    constructor()
    {
      super();
      //
    };

};

// Tag: Systems
class ParticleSystem
  extends Effect
{
  //
  constructor()
  {
      super();

      this.number_of_particles = 256;
      this.particles           = new Array();

      this.sequence            = new Counter();

      this.sequence_end        = 500;
  };

  setOrigin( parameterPositionX, 
             parameterPositionY )
  {
    this.originPoint = GeneratePoint( parameterPositionX, 
                                      parameterPositionY );
  }

  // appends a particle unit, to the particle list 
  addToParticles( append_particle_child )
  {
    this.particles = this.particles.concat( append_particle_child );
  }

  //
  generate()
  {
    
  };

  //
  update()
  {
    

  };




};

// Tag: Camera Field
class CameraField
    extends Actor
{
    constructor()
    {
      super();
      //

    };

};

// Tag: Generator Functions
  // Generators
function GenerateVector( parameterX, parameterY )
{
  return new Vector( parameterX,
                     parameterY );
}

function GeneratePoint( parameterX, 
                        parameterY )
{
  return new Point( parameterX, 
                    parameterY );
}

// Generates vectors or points at 0, 0
function GenerateEmptyVector()
{
  return GenerateVector( zero, 
                         zero );
}

function GenerateEmptyPoint()
{
  return GeneratePoint( zero, 
                        zero );
}


// Tag: System Variables
    // Tag: Global
var canvas_document = null;
var canvas_context  = null;

var Continue = true;

var wait_for_next_frame = default_wait;

var start_screen_pos  = GeneratePoint( 0, 0 );
var canvas_size       = GenerateVector( 1280, 720 );

var canvas_document_identity = 'dashboard';


// Tag: context draw functions
function inverse_y_axis_along_canvas( parameterYPosition )
{
  var rotateYAxisOnCanvas = basicSubstract( canvas_size.y,
                                            parameterYPosition );

  return rotateYAxisOnCanvas;
}

function clearScreenAt( parameterStartPoint, 
                        parameterLength )
{
    var toPoint = parameterLength.addition( parameterStartPoint.x, 
                                            parameterStartPoint.y );

    canvas_context.clearRect( parameterStartPoint.x, parameterStartPoint.y,
                              toPoint.x, toPoint.y);
}

// Tag: Business Logic
        // Configuration
function configure()
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
function prepare()
{
  
}

// Tag: Initialise Screen
function init()
{
  //
  configure();

  //
  prepare();

  // Starts system
  next();
}

// Tag: Update Screen
function draw()
{
  // resets canvas display
  clear();

  analyze();
  map();
  representation();
  present();

  // request next frame
  next();
}

// Tag: Clear
function clear()
{
  // Clean current Canvas
  clearScreen();
}


function clearScreen()
{
    clearScreenAt( start_screen_pos,
                   canvas_size )
}

// Tag: Next Frame Iteration
function next()
{
    //
    if( Continue )
    {
        // Updates System Model
        update();

        //
        setTimeout( request,
                    wait_for_next_frame );
    }
}

function request()
{
    window.requestAnimationFrame( draw );
}

// Tag: Update Model
function update()
{


}

// Tag: Application Event


// Tag: Application Entry
init();
