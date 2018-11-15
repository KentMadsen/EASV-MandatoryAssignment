

// Tag: Vector Points
class Point
{
  
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
