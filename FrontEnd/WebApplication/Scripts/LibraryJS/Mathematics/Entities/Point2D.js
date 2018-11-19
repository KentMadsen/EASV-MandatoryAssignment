/*
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

// Tag: Vector Points
class Point2D
{
  //
  constructor( parameterX,
               parameterY )
  {
    this.setPositionX( parameterX );
    this.setPositionY( parameterY );
  }

  // Accessor Methods
    //
  getPositionX()
  {
    return this.positionX;
  }

  getPositionY()
  {
    return this.positionY;
  }

    //
  setPositionX( value )
  {
    this.positionX = value;
  }

  setPositionY( value )
  {
    this.positionY = value;
  }
}

//
function GeneratePoint( parameterX, 
                        parameterY )
{
  return new Point( parameterX, 
                    parameterY );
}

function GenerateEmptyPoint()
{
  return GeneratePoint( zero, 
                        zero );
}
