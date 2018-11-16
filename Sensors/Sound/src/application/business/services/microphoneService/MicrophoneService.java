
/**
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
 */
package business.services.microphoneService;

/*
    @Override
    public void asynch() throws Exception
    {
        int iteration = 0;
        byte[] tempbuffer = new byte[96000];

        AudioSectionData currentMeta = new AudioSectionData();

        while ( Continue )
        {
            try
            {
                AudioFormat format = null;
                format =  new AudioFormat(96000.0f,
                                          16,
                                          1,
                                          true,
                                          false );

                DataLine.Info info = new DataLine.Info( TargetDataLine.class,
                                                        format );

                line = (TargetDataLine)AudioSystem.getLine( info );

                line.open( format );
                line.start();

                //
                int n = line.read( tempbuffer,
                                  0,
                                   tempbuffer.length );

                if( n > 0 )
                {
                    //
                    if( currentMeta.getDurationEmpty() )
                        currentMeta.setDuration();

                    // Reset Counter
                    if( iteration == 1023 )
                    {
                        iteration = 0;
                        currentMeta.setEnd();
                    }

                    //
                    iteration = iteration + 1;
                    AudioBufferSample sample = new AudioBufferSample( iteration,
                                                          tempbuffer,
                                                          currentMeta );

                    // If current meta has next property set.
                    if( !currentMeta.msNextEmpty() )
                    {
                        //
                        AudioSectionData newMeta = new AudioSectionData();
                        newMeta.setDuration( currentMeta.getDuration() );

                        // Exchange
                        currentMeta = newMeta;
                    }
                }


                line.close();

            }
            catch ( Exception ex )
            {
                System.out.println("Exception: " + ex.toString() );
            }

        }

    }

    /**
     *
     * @return
     */
/*
    @Override
    public final byte[] transfer()
    {
        return new byte[0];
    }

    public final boolean isContinue()
    {
        return Continue;
    }

    public final void setLine( TargetDataLine line )
    {
        this.line = line;
    }

    public final TargetDataLine getLine()
    {
        return this.line;
    }

    public void setContinue( boolean aContinue )
    {
        Continue = aContinue;
    }
    */

import business.services.Service;
import business.services.entities.Buffer;
import persistence.panel.PipelineOut;

/**
 *
 */
public class MicrophoneService
        extends Service
            implements PipelineOut<Buffer>
{
    //
    /**
     *
     */
    public MicrophoneService()
    {
        this.setBufferSize( default_size );
    }

    // Variable
        //
    /**
     *
     */
    private Buffer buffer    = null;

    /**
     *
     */
    private boolean Continue = true;

    /**
     *
     */
    private int bufferSize = 0;

        // Global
    private static final int buffer_size_level_1  = 8000;
    private static final int buffer_size_level_2  = 11025;
    private static final int buffer_size_level_3  = 16000;
    private static final int buffer_size_level_4  = 22050;
    private static final int buffer_size_level_5  = 32000;
    private static final int buffer_size_level_6  = 44100;
    private static final int buffer_size_level_7  = 48000;
    private static final int buffer_size_level_8  = 88200;
    private static final int buffer_size_level_9  = 96000;
    private static final int buffer_size_level_10 = 176400;
    private static final int buffer_size_level_11 = 192000;
    private static final int buffer_size_level_12 = 352800;
    private static final int buffer_size_level_13 = 384000;

    private static int default_size = buffer_size_level_6;


    // Implemented Interface
    /**
     *
     */
    @Override
    public void execute()
    {

    }

    // Accessor
    /**
     *
     * @return
     */
    public final boolean isContinue()
    {
        return this.Continue;
    }

    /**
     *
     * @param buffer
     */
    public final void setBuffer( Buffer buffer )
    {
        this.buffer = buffer;
    }

    /**
     *
     * @return
     */
    public final Buffer getBuffer()
    {
        return this.buffer;
    }

    /**
     *
     * @param aContinue
     */
    public final void setContinue( boolean aContinue )
    {
        this.Continue = aContinue;
    }

    /**
     *
     * @return
     */
    public final int getBufferSize()
    {
        return this.bufferSize;
    }

    /**
     *
     * @param bufferSize
     */
    public final void setBufferSize( int bufferSize )
    {
        this.bufferSize = bufferSize;
    }

    // Object implementation
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
