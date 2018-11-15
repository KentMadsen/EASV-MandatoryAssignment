/*
    Header : Dashboard.js
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

// Tag: Basic calculation functions
function basic_substract( a, b )
{
  return ( a - b );
}

function basic_addition( a, b )
{
  return ( a + b );
}

function basic_multiply( a, b )
{
  return ( a * b );
}

function basic_divide( a, b )
{
  return ( a / b );
}

// Tag: Convertion functions, Degrees or Radians
// Source: 
function toRadians( degrees )
{
    return ( degrees * ( Math.PI / 180 ) );
}

function toDegress( radians )
{
  return ( radians * ( 180 / Math.PI ) );
}

// Tag: Vector Functions
class VectorParameterFunction
{
  //
  constructor()
  {
    this.centerPosition = GenerateEmptyPoint();
  }

  apply_x( valueI )
  {
    return -1;
  }

  apply_y( valueI )
  {
    return -1;
  }

}

// Tag: Circle class
class Circle
  extends VectorParameterFunction
{
  constructor()
  {
    super();

    this.radius = 1;
  }

  getRadius()
  {
    return this.radius;
  }

  setRadius( i )
  {
    this.radius = i;
  }

}

Circle.prototype.apply_x =
  function( degrees )
{
  return this.centerPosition.getPositionX() + this.radius * Math.cos( toRadians( degrees ) );
}

Circle.prototype.apply_y =
  function( degrees )
{
  return this.centerPosition.getPositionY() + this.radius * Math.sin( toRadians( degrees ) );
}

// Tag: Entities
class Counter
{
  // Init
  constructor()
  {
    this.value = 0;

    this.default_position = 0;
    this.default_distance = 1;
  }

  // Functions
  reset()
  {
    this.setValue( this.default_position );
  };

  increment()
  {
    this.increase( this.default_distance );
  };

  increase( size )
  {
    this.setValue( this.getValue() + size )
  };

  decrement()
  {
    this.decrease( this.default_distance );
  };


  decrease( size )
  {
    this.setValue( this.getValue() - size )
  };

  // Accessor methods
  setValue( position )
  {
    this.value = position;
  };

  getValue()
  {
    return this.value;
  };

  getDefaultPosition()
  {
    return this.default_position;
  };

  setDefaultPosition( parameterDefaultStartPosition )
  {
    this.default_position = parameterDefaultStartPosition;
  };

  getDefaultDistance()
  {
    return this.default_distance;
  };

  setDefaultDistance( parameterDefaultDistance )
  {
    this.default_distance = parameterDefaultDistance;
  };

}

// Tag: Vector Points
class Point
{
  //
  constructor( parameterX, 
               parameterY )
  {
    this.setPositionX( parameterX );
    this.setPositionY( parameterY );
  }

  // Accessor Methods
  getPositionX()
  {
    return this.positionX;
  }

  setPositionX( value )
  {
    this.positionX = value;
  }

  getPositionY()
  {
    return this.positionY;
  }

  setPositionY( value )
  {
    this.positionY = value;
  }
}

// Tag: Vector
class Vector
{
    //
    constructor( parameterX,
                 parameterY )
    {
      this.setLengthX( parameterX );
      this.setLengthY( parameterY );
    }

    // Accessors
    getLengthX()
    {
      return this.x;
    }

    setLengthX( value )
    {
      this.x = value;
    }

    getLengthY()
    {
      return this.y;
    }

    setLengthY( value )
    {
      this.y = value;
    }

    // Vector Methods
    substract( parameterX, 
               parameterY )
    {
        var newVector = GenerateVector( basic_substract( this.x, parameterX ),
                                        basic_substract( this.y, parameterY ) );

        return newVector;
    }

    addition( parameterX, 
              parameterY )
    {
        var newVector = GenerateVector( basic_addition( this.x, 
                                                        parameterX ),
                                        basic_addition( this.y, 
                                                        parameterY ) );

        return newVector;
    }

    scaleByScalar( scalarValue )
    {
        var newVector = GenerateVector( basic_multiply( scalarValue, 
                                                        this.x ),

                                        basic_multiply( scalarValue, 
                                                        this.y ) );

        return newVector;
    }

    // Not sure ?
    calculateUnitVector()
    {
      var newVector = GenerateVector( basic_divide( this.x, 
                                                    this.distance() ),

                                      basic_divide( this.y, 
                                                    this.distance() ) );

      return newVector;
    }

    projectAgaintsUnitVector( unitVector )
    {
      var newVector = GenerateVector( basic_multiply( unitVector.x, 
                                                      this.distance() ),
                                      basic_multiply( unitVector.y, 
                                                      this.distance() ) 
      );

      return newVector;
    }

    powerOf2( parameterX )
    {
      return Math.pow( parameterX, two );
    }

    distance()
    {
        return Math.sqrt( ( this.powerOf2( this.x ) + this.powerOf2( this.y ) ) );
    }
}

// Tag: Particle Unit
class Particle
  extends Point
{
  constructor()
  {
      super();

      this.dv = GenerateEmptyVector();
  }

}

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
  // Set Parameters
function GenerateVector( parameterX, parameterY )
{
  return new Vector( parameterX,
                     parameterY );
}

    // Default Generic Object
function GenerateEmptyVector()
{
  return GenerateVector( zero, 
                         zero );
}

  // Choose parameters
function GeneratePoint( parameterX, 
                        parameterY )
{
  return new Point( parameterX, 
                    parameterY );
}

  // Default Generic Object
function GenerateEmptyPoint()
{
  return GeneratePoint( zero, 
                        zero );
}


// Tag: System Variables
  // Tag: Global Static Variables
const zero  = 0;
const one   = 1;
const two   = 2;
const three = 3;
const four  = 4;
const five  = 5;
const six   = 6;
const seven = 7;
const eight = 8;
const nine  = 9;

const d2 = '2d';
const d3 = '3d';

const default_wait = 25;

const debug_system = true;

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
  var rotateYAxisOnCanvas = basic_substract( canvas_size.y,
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
