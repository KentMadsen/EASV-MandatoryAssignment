/*
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

// Tag: Vector Functions
class VectorFunction
{
    constructor()
    {
      this.centerPosition = new Point2D(0, 0);
    }

    applyX( valueI )
    {
      return this.centerPosition.setPositionX(valueI);
    }

    applyY( valueI )
    {
      return this.centerPosition.setPositionY(valueI);
    }

    applyP( valueX, valueY )
    { 
      return GenerateVector(valueX, valueY);
    }

}