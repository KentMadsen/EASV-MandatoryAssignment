package services.obj;

/**
 *
 */
public class Counter
{
    /**
     *
     */
    public Counter()
    {
        this.setValue( zero );
    }

    /**
     *
     * @param Value
     */
    public Counter( int Value )
    {
        this.setValue( Value );
    }

    /**
     *
     * @param i
     */
    public final void increase( int i )
    {
        this.setValue( this.predictIncrease( i ) );
    }


    /**
     *
     * @param i
     */
    public final void decrease( int i )
    {
        this.setValue( this.predictDecrease( i ));
    }


    /**
     *
     */
    public final void increment()
    {
        this.increase( one );
    }

    /**
     *
     */
    public final void decrease()
    {
        this.decrease( one );
    }
    /**
     *
     * @param point
     * @return
     */
    public boolean isAt( int point )
    {
        return this.getValue() == point;
    }

    /**
     *
     * @param size
     * @return
     */
    public int predictIncrease( int size )
    {
        return ( this.getValue() + size );
    }

    /**
     *
     * @param size
     * @return
     */
    public int predictDecrease( int size )
    {
        return ( this.getValue() - size );
    }

    // Variables
    /**
     *
     */
    private final int one = 1;

    /**
     *
     */
    private final int zero = 0;

    /**
     *
     */
    private int value = 0;


    /**
     *
     * @return
     */
    public final int getValue()
    {
        return this.value;
    }

    /**
     *
     * @param value
     */
    public final void setValue( int value )
    {
        this.value = value;
    }

    /**
     *
     * @return
     */
    @Override
    public final String toString()
    {
        return super.toString();
    }
}
