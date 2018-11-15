package persistence;

/**
 *
 */
public abstract class Persistence
{
    /**
     *
     */
    public Persistence()
    {
        this( PersistenceType.None );
    }

    /**
     *
     * @param type
     */
    public Persistence( PersistenceType type )
    {
        this.setPersistenceType( type );
    }

    /**
     *
     */
    private PersistenceType persistenceType = PersistenceType.None;

    /**
     *
     * @return
     */
    public final PersistenceType getPersistenceType()
    {
        return this.persistenceType;
    }

    /**
     *
     * @param persistenceType
     */
    public final void setPersistenceType( PersistenceType persistenceType )
    {
        this.persistenceType = persistenceType;
    }

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
