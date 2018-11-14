package services;

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

import services.entities.Buffer;

/**
 *
 */
public class MicrophoneService
        extends Service
{
    //
    /**
     *
     */
    public MicrophoneService()
    {

    }

    //
    private Buffer buffer = null;
    private boolean Continue = true;

    /**
     *
     */
    @Override
    public void execute()
    {

    }

    // Accessor
    public final boolean isContinue()
    {
        return Continue;
    }

    public final void setBuffer(Buffer buffer)
    {
        this.buffer = buffer;
    }

    public final Buffer getBuffer()
    {
        return buffer;
    }

    public final void setContinue(boolean aContinue)
    {
        Continue = aContinue;
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
