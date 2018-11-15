package business.services;

/**
 *
 */
public abstract class Service
{
    // Constructor
    /**
     *
     */
    public Service()
    {
        this( ServiceType.None );
    }

    /**
     *
     * @param type
     */
    public Service( ServiceType type )
    {
        this.setType( type );
    }

    // Variables
    /**
     *
     */
    private ServiceType type = null;

    // Interface
    /**
     *
     */
    public abstract void execute();

    // Accessors
    /**
     *
     * @param type
     */
    protected final void setType( ServiceType type )
    {
        this.type = type;
    }

    /**
     *
     * @return
     */
    public final ServiceType getType()
    {
        return this.type;
    }

    //
    /**
     *
     * @return
     */
    @Override
    public String toString()
    {
        return super.toString();
    }
}
