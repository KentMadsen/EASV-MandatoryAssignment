/* 
    Name : Kent v. Madsen

*/

// Tag: Basic calculation functions
function basic_substract( a, b )
{
  return a - b;
}

function basic_addition( a, b )
{
  return a + b;
}

function basic_multiply( a, b )
{
  return a * b;
}

function basic_divide( a, b )
{
  return a / b;
}

// Tag: Convertion, Degrees or Radians
// Convertion of Degrees or Radians
// Source
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
    this.pos = GenerateEmptyPoint();
  }

  // get x pos
  apply_x( i )
  {
    return -1;
  }

  // get y pos
  apply_y( i )
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
  function( i )
{
  return this.pos.getX() + this.r * Math.cos( toRadians( i ) );
}

Circle.prototype.apply_y = 
  function( i )
{
  return this.pos.getY() + this.r * Math.sin( toRadians( i ) );
}

// Tag: Entities
class Counter
{
  // Init
  constructor()
  {
    this.value = 0;

    this.default_distance = 1;
  }

  // Functions
  reset()
  {
    this.setValue( 0 );
  };

  increase( i )
  {
    this.setValue( this.getValue() + i )
  };

  increment()
  {
    this.increase( this.default_distance );
  };

  decrease( i )
  {
    this.setValue( this.getValue() - i )
  };

  decrement()
  {
    this.decrease( this.default_distance );
  };

  // Accessor
  setValue( i )
  {
    this.value = i;
  };

  getValue()
  {
    return this.value;
  };
  
}

// Tag: Vector Points
class Point
{
  //
    constructor( pX, pY )
    {
        this.x = pX;
        this.y = pY;
    }

    //
    getX()
    {
      return this.x;
    }

    setX( value )
    {
      this.x = value;
    }

    //
    getY()
    {
      return this.y;
    }

    setY( value )
    {
      this.y = value;
    }

}

// Tag: Vector
class Vector
{
    //
    constructor( pX, pY )
    {
        this.x = pX;
        this.y = pY;
    }

    // Accessors
    getX()
    {
      return this.x;
    }

    setX( value )
    {
      this.x = value;
    }

    getY()
    {
      return this.y;
    }

    setY( value )
    {
      this.y = value;
    }    

    // Function
      // Works
    substract( px, py )
    {
        var nv = GenerateVector( basic_substract( this.x, px ),
                                 basic_substract( this.y, py ) );

        return nv;
    }

    // Works
    addition( px, py )
    {
        var nv = GenerateVector( basic_addition( this.x, px ),
                                 basic_addition( this.y, py ) );

        return nv;
    }

    // Works
    scaleByScalar( s )
    {
        var nv = GenerateVector( basic_multiply( s, this.x ),
                                 basic_multiply( s, this.y ) );

        return nv;
    }

    // Not sure ?
    unitVector()
    {
      // x_e = (x)/|v| and y_e = (y)/|v|
      var nv = GenerateVector( basic_divide( this.x, this.distance() ),
                               basic_divide( this.y, this.distance() ) );

      return nv;
    }

    //
    projectAgaintsUnitVector( v )
    {
      var nv = GenerateVector( basic_multiply( v.x, this.distance() ),
                               basic_multiply( v.y, this.distance() ) );


      return nv;
    }

    // |v(->)| = distance.
    // Calculates the currents vectors, distance or length
    distance()
    {
        // x^2
        var x_result = Math.pow( this.x, two );

        // y^2
        var y_result = Math.pow( this.y, two );

        // x_result + y_result
        var combined = ( x_result + y_result );

        // sqrt(x^2 + y^2) = |v^(->)|
        return Math.sqrt( combined );
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
/**
 * 
 */
class Entity
{
    constructor()
    {
      this.originPoint = GenerateEmptyVector();

    };



};


// Tag: Object
/**
 * 
 */
class Object
  extends Entity
{
  constructor()
  {
    super();

  };


};


// Tag: Actor
/*
 *
 */
class Actor
    extends Entity
{
    constructor()
    {
      super();

    };

};


// Tag: Effect
/*
 *
 */
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

  setOrigin( x, y )
  {
    this.originPoint = GeneratePoint( x, y );
  }

  // amount of given entries, over a specific distance
  apply( n_entries, distance )
  {
    var du = basic_divide( distance, n_entries );
    return du;
  }

  append( particle_element )
  {
    this.particles = this.particles.concat( particle_element );
  }

  //
  generate()
  {
    var ps = this.number_of_particles;

    //
    for( var i = 0; 
             i < ps; 
             i ++ )
    {
      var s = new Particle();
      
      this.append( s );
    }
    
  };

  //
  debug()
  {
    for( var i = 0; 
             i < this.particles.length; 
             i++ )
    {
      //
      var current = this.particles[i];

      //
      var actual_position = GeneratePoint( this.originPoint.getX() + current.x, 
                                           this.originPoint.getY() + current.y );

      //
      illustrate_point( actual_position, 
                        GenerateVector(8, 1), 
                        'red', 
                        'white' );
    }
  };

  // next 'Frame'
  update()
  {
    this.sequence.increase( 1 );
    

  };

};

// Tag: Camera Field
/*
 *
 */
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
  function GenerateVector( pX, pY )
  {
    return new Vector( pX, pY );
  }
  
    // Default Generic Object
  function GenerateEmptyVector()
  {
    return GenerateVector( 0, 0 );
  }

  // Choose parameters
function GeneratePoint( pX, pY )
{
  return new Point( pX, pY );
}

  // Default Generic Object
function GenerateEmptyPoint()
{
  return GeneratePoint( 0, 0 );
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

const debug_system = true;

    // Tag: Global
var canvas_id = null;
var context   = null;

var Continue = true;

var start_screen_pos  = GeneratePoint( 0, 0 );
var canvas_size       = GenerateVector( 1280, 720 );

var canvas_id_name = 'dashboard';

var ps_test;

// Tag: context draw functions
  // Inverse function, for the y axis in canvas.
function inverse_y_axis_along_canvas( y_position )
{
  var rv = basic_substract( canvas_size.y, 
                            y_position );

  return rv;
}

function line( point_begin,
               point_end )
{
    context.beginPath();

    context.moveTo( point_begin.x,
                    inverse_y_axis_along_canvas( point_begin.y ) );

    context.lineTo( point_end.x,
                    inverse_y_axis_along_canvas( point_end.y ) );

    context.stroke();
}

// Parameters: SP (Start Point), V: Vector (size and direction)
function clearScreenAt( SP, V )
{
    var toPoint = V.addition( SP.x, SP.y );

    context.clearRect( SP.x, SP.y,
                       toPoint.x, toPoint.y);
}


// P: p.x, p.y, center point, inside x, y coordinate system
// V: v.x = radius, v.y = width
function illustrate_point( p, 
                           v, 
                           fillcolor, 
                           strokecolor )
{
  // Skip, if debugging is off
  if( debug_system == false )
    return;

  //
  context.beginPath();

  context.arc( p.x, inverse_y_axis_along_canvas( p.y ),
               v.x,
               0, (2 * Math.PI) );

  context.fillStyle = fillcolor;
  context.fill();

  context.lineWidth = v.y;
  context.strokeStyle = strokecolor;

// Draw
  context.stroke();
}


// Tag: Business Logic
        // Configuration
function configure()
{
    configure_stage();


}

            // setup required components
function configure_stage()
{
    canvas_id = document.getElementById( canvas_id_name );
    context = canvas_id.getContext( d2 );
}

// Phrases

    //
function analyze()
{

}

    //
function map()
{

}

    //
function representation()
{

}

    // final stage:
function present()
{

}

// Program Structure

// Internal Business Logic Phrase
function prepare()
{
  prepare_test();
}


function prepare_test()
{
  


};

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
  clear();

  //
  analyze();

  //
  map();

  // Outline
  representation();

  // Draw
  present();

  //
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
        window.requestAnimationFrame( draw );
    }
}

// Tag: Update Model
function update()
{
  ps_test.update();


}

// Tag: Application Event


// Tag: Application Entry
init();
