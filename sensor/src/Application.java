import business.serviceRegister.ServerRegister;

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
        test();
    }

    /**
     *
     */
    public final void deInitialise()
    {

    }

    public void test()
    {
        ServerRegister register = new ServerRegister();

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
