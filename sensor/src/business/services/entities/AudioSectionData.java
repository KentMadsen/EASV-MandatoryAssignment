package business.services.entities;

/**
 *
 */
public class AudioSectionData
{
    /**
     *
     */
    public AudioSectionData()   
    {
        this.setDuration();
    }

    /**
     *
     * @param duration
     */
    public AudioSectionData( long duration )
    {
        this.setDuration( duration );
    }

    /**
     * TimeStamp for current 'view'
     */
    private long duration = empty;

    /**
     *
     */
    private static final long empty = -1;

    // Accessors
    /**
     *
     * @return
     */
    public final boolean getDurationEmpty()
    {
        return ( this.getDuration() == empty );
    }

    /**
     *
     * @param i
     * @return
     */
    public final boolean getIsAt( long i )
    {
        return this.getDuration() == i;
    }

    // Accessors
    /**
     * Default
     */
    public final void setDuration()
    {
        this.setDuration( getTimeInMs() );
    }

    /**
     *
     * @return
     */
    public final static long getTimeInMs()
    {
        long r = System.currentTimeMillis();
        return r;
    }

    /**
     *
     * @param duration
     */
    public final void setDuration( long duration )
    {
        this.duration = duration;
    }

    /**
     *
     * @return
     */
    public final long getDuration()
    {
        return this.duration;
    }

    // Object
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
