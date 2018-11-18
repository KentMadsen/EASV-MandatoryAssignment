/*
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

// Tag: Vector
class Vector2D
{
    //
    constructor( parameterX,
                 parameterY )
    {
      this.setLengthX( parameterX );
      this.setLengthY( parameterY );
    }

    // Accessor Method
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
        var newVector = GenerateVector( basicSubstract( this.x, parameterX ),
                                        basicSubstract( this.y, parameterY ) );

        return newVector;
    }

    addition( parameterX, 
              parameterY )
    {
        var newVector = GenerateVector( basicAddition( this.x, 
                                                        parameterX ),
                                        basicAddition( this.y, 
                                                        parameterY ) );

        return newVector;
    }

    scaleByScalar( scalarValue )
    {
        var newVector = GenerateVector( basicMultiply( scalarValue, 
                                                        this.x ),

                                        basicMultiply( scalarValue, 
                                                        this.y ) );

        return newVector;
    }

    calculateUnitVector()
    {
      var newVector = GenerateVector( basicDivide( this.x, 
                                                    this.distance() ),

                                      basicDivide( this.y, 
                                                    this.distance() ) );

      return newVector;
    }

    projectAgaintsUnitVector( unitVector )
    {
      var newVector = GenerateVector( basicMultiply( unitVector.x, 
                                                      this.distance() ),
                                      basicMultiply( unitVector.y, 
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

// 
function GenerateVector( parameterX, parameterY )
{
  return new Vector( parameterX,
                     parameterY );
}

function GenerateEmptyVector()
{
  return GenerateVector( zero, 
                         zero );
}
