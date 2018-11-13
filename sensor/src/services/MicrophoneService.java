package services;

import services.obj.AudioMetaData;
import services.obj.AudioSample;

import javax.sound.sampled.AudioFormat;
import javax.sound.sampled.AudioSystem;
import javax.sound.sampled.DataLine;
import javax.sound.sampled.TargetDataLine;

public class MicrophoneService
        extends Service
{
    public MicrophoneService()
    {

    }
/*
    private TargetDataLine line = null;
    private boolean Continue = true;


    /**
     *
     */
/*
    @Override
    public final void start()
    {

    }

    /**
     *
     */
/*
    @Override
    public final void stop()
    {

    }

    /**
     *
     */
/*
    @Override
    public void asynch() throws Exception
    {
        int iteration = 0;
        byte[] tempbuffer = new byte[96000];

        AudioMetaData currentMeta = new AudioMetaData();

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
                    if( currentMeta.msBeginEmpty() )
                        currentMeta.setBegin();

                    // Reset Counter
                    if( iteration == 1023 )
                    {
                        iteration = 0;
                        currentMeta.setEnd();
                    }

                    //
                    iteration = iteration + 1;
                    AudioSample sample = new AudioSample( iteration,
                                                          tempbuffer,
                                                          currentMeta );

                    // If current meta has next property set.
                    if( !currentMeta.msNextEmpty() )
                    {
                        //
                        AudioMetaData newMeta = new AudioMetaData();
                        newMeta.setMsBegin( currentMeta.getMsBegin() );

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
}
