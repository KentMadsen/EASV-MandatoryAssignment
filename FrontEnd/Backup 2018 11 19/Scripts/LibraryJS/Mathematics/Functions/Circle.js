/*
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

//
function sinus( degrees )
{
  return Math.sin( toRadians( degrees%360 ) );
}

//
function cosinus( degrees )
{
  return Math.cos( toRadians( degrees%360 ) );
}


// Tag: Circle class
class Circle
  extends VectorFunction
{
  //
  constructor()
  {
    super();

    this.radius = 1;
    
  }

  //
  getRadius()
  {
    return this.radius;
  }

  setRadius( i )
  {
    this.radius = i;
  }

  getResult( i )
  {
    return new Vector2D(this.applyX( i ), this.applyY(i) );
  }
}

//
Circle.prototype.applyX =
  function( degrees )
{
  return ( this.getRadius() * sinus( degrees ) );
}

Circle.prototype.applyY =
  function( degrees )
{
  return ( this.getRadius() * cosinus( degrees ) );
}

Circle.prototype.applyP =
  function( degrees )
{
  return ( this.applyX(degrees), this.applyY(degrees) );
}