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

Circle.prototype.applyX =
  function( degrees )
{
  return this.centerPosition.getPositionX() + this.radius * Math.cos( toRadians( degrees ) );
}

Circle.prototype.applyY =
  function( degrees )
{
  return this.centerPosition.getPositionY() + this.radius * Math.sin( toRadians( degrees ) );
}