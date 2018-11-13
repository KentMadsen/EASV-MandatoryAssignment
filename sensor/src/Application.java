public class Application
{
    public static void main( String[] args )
    {
        Application app = new Application();
        app.initialise();
        app.execute();
        app.deinitialise();
    }

    private Controller controller = new Controller();

    public void initialise()
    {

    }

    public void execute()
    {
        while ( controller.isContinue() )
            controller.execute();
    }

    public void deinitialise()
    {

    }
}
