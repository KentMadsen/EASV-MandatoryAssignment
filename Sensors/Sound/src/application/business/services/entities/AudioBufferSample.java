/**
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
 */
package business.services.entities;

/**
 *
 */
public class AudioBufferSample
{
    // Constructors
    /**
     *
     */
    public AudioBufferSample()
    {

    }

    /**
     *
     * @param currentIndexPoint
     * @param _in_samples
     */
    public AudioBufferSample( int currentIndexPoint,
                              byte[] _in_samples )
    {
        this( currentIndexPoint );

        this.setDataSamples( _in_samples );
    }

    /**
     *
     * @param currentIndexPoint
     * @param _in_samples
     * @param meta
     */
    public AudioBufferSample( int currentIndexPoint,
                              byte[] _in_samples,
                              AudioSectionData meta )
    {
        this( currentIndexPoint,
              _in_samples );

        this.setMeta( meta );
    }

    /**
     *
     * @param _in_samples
     */
    public AudioBufferSample( byte[] _in_samples )
    {
        this.setDataSamples( _in_samples );
    }

    /**
     *
     * @param currentIndexPoint
     */
    public AudioBufferSample( int currentIndexPoint )
    {
        this.setIndexPoint( currentIndexPoint );
    }

    // Variable
        // Core
    private byte[] dataSamples = null;

        //
    private int indexPoint = 0;

        // Model Entities
    private AudioSectionData meta = null;

    // Accessors
    /**
     *
     * @param _in_samples
     */
    public final void setDataSamples( byte[] _in_samples )
    {
        this.dataSamples = _in_samples;
    }

    /**
     *
     * @return
     */
    public final byte[] getDataSamples()
    {
        return this.dataSamples;
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
        if( this.dataSamples == null )
            return -1;

        return this.dataSamples.length;
    }

    /**
     *
     * @return
     */
    public final AudioSectionData getMeta()
    {
        return this.meta;
    }

    /**
     *
     * @param meta
     */
    public final void setMeta( AudioSectionData meta )
    {
        this.meta = meta;
    }
}
