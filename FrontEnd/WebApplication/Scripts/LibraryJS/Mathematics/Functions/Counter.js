/*
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

const default_position = 0;
const default_distance = 1;

class Counter
{
  constructor()
  {
    this.distance = default_distance;

    this.value = this.getDefaultPosition();
  }

  // Functions
  reset()
  {
    this.setValue( this.default_position );
  };

  increment()
  {
    this.increase( this.default_distance );
  };

  increase( size )
  {
    this.setValue( this.getValue() + size )
  };

  decrement()
  {
    this.decrease( this.default_distance );
  };


  decrease( size )
  {
    this.setValue( this.getValue() - size )
  };

  // Accessor methods
  setValue( position )
  {
    this.value = position;
  };

  getValue()
  {
    return this.value;
  };

  getDefaultPosition()
  {
    return this.default_position;
  };

  setDefaultPosition( parameterDefaultStartPosition )
  {
    this.default_position = parameterDefaultStartPosition;
  };

  getDefaultDistance()
  {
    return this.default_distance;
  };

  setDefaultDistance( parameterDefaultDistance )
  {
    this.default_distance = parameterDefaultDistance;
  };

}
