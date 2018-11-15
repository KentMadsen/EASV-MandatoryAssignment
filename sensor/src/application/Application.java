/**
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
 */
import business.services.serviceRegister.ServerRegister;

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

        ServerRegister.test();
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
