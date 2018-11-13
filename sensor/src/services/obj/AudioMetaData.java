package services.obj;

/**
 *
 */
public class AudioMetaData
{
    /**
     *
     */
    public AudioMetaData()
    {

    }

    /**
     *
     * @param begin
     */
    public AudioMetaData( long begin )
    {
        this.setMsBegin( begin );
    }

    /**
     *
     * @param begin
     * @param end
     */
    public AudioMetaData( long begin, long end )
    {
        this(begin);
        this.setMsNext( end );
    }

    /**
     *
     */
    private long msBegin = -1;

    /**
     *
     */
    private long msNext = -1;

    // Accessors
    /**
     *
     * @return
     */
    public final boolean msBeginEmpty()
    {
        return getMsBegin() == -1;
    }

    /**
     *
     * @return
     */
    public final boolean msNextEmpty()
    {
        return getMsNext() == -1;
    }

    //

    /**
     *
     */
    public final void setBegin()
    {
        this.setMsBegin( this.getMs() );
    }

    /**
     *
     */
    public final void setEnd()
    {
        this.setMsBegin( this.getMs() );
    }

    /**
     *
     * @return
     */
    public final long getMs()
    {
        return System.currentTimeMillis();
    }

    /**
     *
     * @param msBegin
     */
    public final void setMsBegin( long msBegin )
    {
        this.msBegin = msBegin;
    }

    /**
     *
     * @return
     */
    public final long getMsBegin()
    {
        return msBegin;
    }

    /**
     *
     * @return
     */
    public final long getMsNext()
    {
        return msNext;
    }

    /**
     *
     * @param msNext
     */
    public final void setMsNext( long msNext )
    {
        this.msNext = msNext;
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
