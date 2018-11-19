/*
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
*/

const default_distance = 1;
const default_start_value = 0;

class Counter
{
  constructor()
  {
    this.distance = 0;

    this.counter_value = default_start_value;
  }

  // Functions
  reset()
  {
    this.setValue( 0 );
  };

  increment()
  {
    this.increase( default_distance );
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
    this.counter_value = position;
  };

  getValue()
  {
    return this.counter_value;
  };

}
