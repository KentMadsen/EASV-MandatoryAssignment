public class Application
{
    // Entry
    /**
     *
     * @param args
     */
    public static void main( String[] args )
    {
        Application app = new Application();

        app.initialise();
        app.execute();
        app.deInitialise();
    }

    // Variables
        //
    private final static boolean default_Continue_state = true;

        // Local
    private Controller controller = new Controller( default_Continue_state );

    // Functions
    /**
     *
     */
    public final void initialise()
    {

    }

    /**
     *
     */
    public final void execute()
    {
        while ( controller.isContinue() )
            controller.execute();
    }

    /**
     *
     */
    public final void deInitialise()
    {

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
