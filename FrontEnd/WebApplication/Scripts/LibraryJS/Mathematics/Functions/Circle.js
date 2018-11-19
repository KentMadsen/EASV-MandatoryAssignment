/*
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

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

}

//
Circle.prototype.applyX =
  function( degrees )
{
  return this.centerPosition.getPositionX() + this.getRadius() * Math.cos( toRadians( degrees ) );
}

Circle.prototype.applyY =
  function( degrees )
{
  return this.centerPosition.getPositionY() + this.getRadius() * Math.sin( toRadians( degrees ) );
}

//
Circle.prototype.applyP =
  function( valueX, valueY )
{
  return  GeneratePoint( this.applyX( valueX ), 
                         this.applyY( valueY ) );
}