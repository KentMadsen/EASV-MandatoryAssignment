import services.MicrophoneService;

/**
 *
 */
public class Controller
{
    // Constructors
    /**
     *
     */
    public Controller()
    {

    }

    /**
     *
     * @param state
     */
    public Controller( boolean state )
    {
        this.setContinue( state );
    }

    // Variables
    /**
     *
     */
    private boolean Continue = true;

    // Function
    /**
     *
     */
    public void execute()
    {


    }

    // Accessors
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
     * @param aContinue
     */
    public final void setContinue( boolean aContinue )
    {
        Continue = aContinue;
    }

    // Object Implementation
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
