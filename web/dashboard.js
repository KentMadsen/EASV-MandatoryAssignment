// Mandatory Assignment
// Dashboard
  // Class Definitions
class Vector
{
    //
    constructor( vX, vY )
    {
        this.x = vX;
        this.y = vY;
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

    // Works
    substract( px, py )
    {
        var newVector = GenerateVector( ( this.x - px ),
                                ( this.y - py ) );
        return newVector;
    }

    // Works
    addition( px, py )
    {
        var newVector = GenerateVector( ( this.x + px ),
                                ( this.y + py ) );
        return newVector;
    }

    // Works
    scaleByScalar( s )
    {
        var newVector = GenerateVector( ( s * this.x ),
                                ( s * this.y ) );
        return newVector;
    }

    // Not sure ?
    unitVector()
    {
      // x_e = (x)/|v| and y_e = (y)/|v|
      var newVector = GenerateVector( ( this.x / this.distance() ),
                              ( this.y / this.distance() ) );
      return newVector;
    }

    // NotSure
    /*scalarVector(v)
    {

          var newVector = GenVec( ( this.x + px ),
                                  ( this.y + py ) );
          return newVector;
    }
    */

    //
    projectAgaintsUnitVector( v )
    {
      var newVector = GenerateVector( ( v.x * this.distance() ),
                              ( v.y * this.distance() ) );

      return newVector;
    }

    // Works
    pow2( value )
    {
        return Math.pow( value,
                         two );
    }

    // |v(->)| = distance.
    // Calculates the currents vectors, distance or length
    distance()
    {
        // x^2
        var x_result = this.pow2( this.x );

        // y^2
        var y_result = this.pow2( this.y );

        // x_result + y_result
        var combined = (x_result + y_result);

        // sqrt(x^2 + y^2) = |v^(->)|
        return Math.sqrt( combined );
    }
}

// Generators
  // Set Parameters
function GenerateVector( pX, pY )
{
  return new Vector( pX, pY );
}

  // Default Generic Object
function GenEmptyVector()
{
  return GenerateVector( 0, 0 );
}

// Vector Coordinate
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

/*
*/
class Entity
{
    constructor()
    {
      this.originPoint = GenEmptyVector();

    };



};

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

class Object
  extends Entity
{
  constructor()
  {
    super();

  };


};

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

function toRadians( degrees )
{
    return degrees * Math.PI/180;
}

function toDegress( radians )
{
  return radians * 180/Math.PI;
}


class VectorParameterFunction
{
  constructor()
  {
    this.pos = GenerateEmptyPoint();
  }

  apply_x( i )
  {
    return -1;
  }

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

class Counter
{
  constructor()
  {
    this.value = 0;

    this.default_distance = 1;
  }

  reset()
  {
    this.setValue(0);
  }

  increase( i )
  {
    this.setValue( this.getValue() + i )
  }

  increment()
  {
    this.increase( this.default_distance );
  }

  decrease( i )
  {
    this.setValue( this.getValue() - i )
  }

  decrement()
  {
    this.decrease( this.default_distance );
  }

  setValue( i )
  {
    this.value = i;
  }

  getValue()
  {
    return this.value;
  }
  
}

class particle 
  extends Point
{
  constructor()
  {
      super();

      this.dv = GenerateEmptyPoint();
  }

}

//
class ParticleSystem 
  extends Effect
{
  //
  constructor()
  {
      super();

      this.number_of_particles = 256;
      this.particles           = new Array();
      
      this.sequence   = new Counter();
  };

  setOrigin( x, y )
  {
    this.originPoint = GeneratePoint(x, y);
  }

  // amount of given entries, over a specific distance
  apply( n_entries, distance )
  {
    var du = (distance / n_entries);
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
      
      this.append();
      

    }
    
  };

  //
  debug()
  {
    for( var i = 0; 
             i < this.particles.length; 
             i++)
    {
      //
      var current = this.particles[i];

      var actual_position = GeneratePoint( this.originPoint.getX() + current.x, 
                                           this.originPoint.getY() + current.y );

      illustrate_point( actual_position, 
                        GenerateVector(8, 1), 
                        'red', 
                        'white' );
    }
  };

  // next 'Frame'
  update()
  {
    Counter.increase(1);
    

  };

};

/*
 *
 */
class Interactive
    extends Entity
{
    constructor()
    {
      super();
      //
    };

};

//
class Model
{
  constructor()
  {
    this.originPoint = GenEmptyVector();


  };

}

class Container
{
  constructor()
  {

  };
}

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

// Tag: Variables
    // Application Variables
var canvas_id = null;
var context = null;

var Continue = true;

//
var start_screen_pos = new Point(0, 0);

// Properties
var canvas_size = new Vector( 1280, 720 );
var canvas_id_name = 'dashboard';

// Static Globals
const two = 2;
const dimension = '2d';

const debug_system = true;

var cameras = new CameraField(1);
var camera_index = 0;

//

// Tag: context functions
// Draw on Context: Base Functions
// Base Drawing
function line( point_begin,
               point_end )
{
    context.beginPath();

    context.moveTo( point_begin.x,
                    inverse_y_axis_along_canvas(point_begin.y) );

    context.lineTo( point_end.x,
                    inverse_y_axis_along_canvas(point_end.y) );

    context.stroke();
}

// P: p.x, p.y, center point, inside x, y coordinate system
// V: v.x = radius, v.y = width
//
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

///////////////////////////////////////////////////////
function inverse_y_axis_along_canvas( y_position )
{
  // canvas_height - y = ( y+ )
  var rv = canvas_size.y -  y_position;

// Inverses the y position on the canvas, so it's drawn alon the positive side of y, than -
  return rv;
}

// Parameters: SP (Start Point), V: Vector (size and direction)
function clearScreenAt( SP, V )
{
    var toPoint = V.addition( SP.x, SP.y );

    context.clearRect( SP.x, SP.y,
                       toPoint.x, toPoint.y);
}

function clearScreen()
{
    clearScreenAt( start_screen_pos,
                   canvas_size )
}

// Program Logic
        // Configuration
function configure()
{
    configure_stage();


}

            // setup required components
function configure_stage()
{
    canvas_id = document.getElementById( canvas_id_name );
    context = canvas_id.getContext( dimension );
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
//
function prepare()
{
  prepare_test();
}


var ps_test;

function prepare_test()
{
  ps_test = new ParticleSystem();
  ps_test.generate();
  

  var c = new Circle();

  console.log(c);

};

// Initialise Stage
function init()
{
  var c = new Counter();


  console.log(c);

  //
  configure();

  //
  prepare();

  // Starts system
  next();
}


// Draw Operations
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

// inside of next, maybe ?
function clear()
{
  // Clean current Canvas
  clearScreen();
}


// Request a new frame or stop
function next()
{
    //
    if( Continue )
    {
        //
        additional();

        // Update System Model
        update();

        //
        window.requestAnimationFrame( draw );
    }
}

//
function additional()
{

}

//

function update()
{
  ps_test.update();


}

// Execute Script
init();
