package services.obj;

/**
 *
 */
public class AudioSample
{
    /**
     *
     */
    public AudioSample()
    {

    }

    /**
     *
     * @param currentIteration
     * @param samples
     */
    public AudioSample( int currentIteration,
                        byte[] samples )
    {
        this( samples );
        this.setIndexPoint( currentIteration );
    }

    /**
     *
     * @param currentIteration
     * @param samples
     * @param meta
     */
    public AudioSample( int currentIteration,
                        byte[] samples,
                        AudioMetaData meta )
    {
        this(currentIteration, samples);
        setMeta(meta);
    }

    /**
     *
     * @param samples
     */
    public AudioSample( byte[] samples )
    {
        this.setSamples( samples );
    }

    // Variable
        // Core
    private byte[] samples = null;
    private int indexPoint = 0;

        // Model Entities
    private AudioMetaData meta = null;

    /**
     *
     * @param samples
     */
    public final void setSamples( byte[] samples )
    {
        this.samples = samples;
    }

    /**
     *
     * @return
     */
    public final byte[] getSamples()
    {
        return this.samples;
    }

    /**
     *
     * @return
     */
    public final int getIndexPoint()
    {
        return this.indexPoint;
    }

    /**
     *
     * @param indexPoint
     */
    public final void setIndexPoint( int indexPoint )
    {
        this.indexPoint = indexPoint;
    }

    //
    /**
     *
     * @return
     * @throws Exception
     */
    public final int size()
            throws Exception
    {
        if( this.samples == null )
            return -1;

        return this.samples.length;
    }

    /**
     *
     * @return
     */
    public final AudioMetaData getMeta()
    {
        return this.meta;
    }

    /**
     *
     * @param meta
     */
    public final void setMeta( AudioMetaData meta )
    {
        this.meta = meta;
    }
}
