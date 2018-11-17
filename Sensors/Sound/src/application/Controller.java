/**
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
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
        // Global
    private static final boolean default_continue = true;

        // FileSystem
    /**
     *
     */
    private boolean Continue = default_continue;

    // Function
    /**
     *
     */
    public final void execute()
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
