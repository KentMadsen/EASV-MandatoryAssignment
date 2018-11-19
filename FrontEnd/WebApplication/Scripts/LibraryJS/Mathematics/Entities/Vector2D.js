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

    //
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
        return GenerateVector( this.substractX( parameterX ), 
                               this.substractY( parameterY ) );
    }

    substractX( parameterX )
    {
      return basicSubstract( this.getLengthX(), 
                             parameterX );
    }

    substractY( parameterY )
    {
      return basicSubstract( this.getLengthY(), 
                             parameterY );
    }

    // Addition function
    addition( parameterX, 
              parameterY )
    {
        return GenerateVector( this.additionX( parameterX ),
                               this.additionY( parameterY ) );
    }

    //
    additionX( parameterX )
    {
      return basicAddition( this.getLengthX(),
                            parameterX );
    }

    additionY( parameterY )
    {
      return basicAddition( this.getLengthY(),
                            parameterY );
    }

    calculateUnitVector()
    {
      var distanceLength = this.distance();

      return this.divideByScalar( distanceLength );
    }

    divideByScalar( scalar )
    {
      return GenerateVector( this.divideByScalarX( scalar ), 
                             this.divideByScalarY( scalar )
      );
    }

    divideByScalarX( scalar )
    {
      return this.getLengthX() / scalar;
    }

    divideByScalarY( scalar )
    {
      return this.getLengthY() / scalar;
    }

    projectAgaintsUnitVector( unitVector )
    {
      return  GenerateVector( this.scaleByScalarX( unitVector.getLengthX ),
                              this.scaleByScalarY( unitVector.getLengthY ) );
    }

    isUnitVector()
    {
      return ( this.distance() == one );
    }

    //
    scaleByScalar( scalarValue )
    {
      return GenerateVector( this.scaleByScalarX( scalarValue ),
                             this.scaleByScalarY( scalarValue ) );
    };
    
    scaleByScalarX( scalarValue )
    {
      return basicMultiply( scalarValue, 
                            this.getLengthX() );
    }
    
    scaleByScalarY( scalarValue )
    {
      return basicMultiply( scalarValue, 
                            this.getLengthY() );
    }

    powerOf2( parameter )
    {
      return Math.pow( parameter,
                       two );
    }

    //
    distance()
    {
        return Math.sqrt( basicAddition( this.powerOf2( this.getLengthX() ),
                                         this.powerOf2( this.getLengthY() ) ) 
        );
    }


}

// 
function GenerateVector( parameterX, 
                         parameterY )
{
  return new Vector( parameterX,
                     parameterY );
}

function GenerateEmptyVector()
{
  return GenerateVector( zero, 
                         zero );
}
