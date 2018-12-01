public class FFProbeBatch
{
    public FFProbeBatch()
    {
        this("-print_format json -show_format -show_streams");

    }

    public FFProbeBatch( String args )
    {
        this.setArgs( args );
    }

    public FFProbeBatch( String args,
                         String fromLocation )
    {
        this( args );
        this.setFromLocation( fromLocation );
    }


    // Variables
    private String args         = null;
    private String fromLocation = null;

    // Accessor
    /**
     *
     * @return
     */
    public String getFromLocation()
    {
        return this.fromLocation;
    }

    /**
     *
     * @param fromLocation
     */
    public final void setFromLocation( String fromLocation )
    {
        this.fromLocation = fromLocation;
    }

    /**
     *
     * @return
     */
    public final String getArgs()
    {
        return this.args;
    }

    /**
     *
     * @param args
     */
    public final void setArgs( String args )
    {
        this.args = args;
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

