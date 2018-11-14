package business.serviceRegister;

import business.services.Service;

/**
 *
 */
public class ServiceRegisterEntry
{
    // Accessor
    /**
     *
     */
    public ServiceRegisterEntry()
    {

    }

    /**
     *
     * @param v
     */
    public ServiceRegisterEntry( Service v )
    {
        this( v, true );
    }

    /**
     *
     * @param v
     * @param lock
     */
    public ServiceRegisterEntry(Service v, boolean lock)
    {
        this.setKey( v );
        this.setLocked( lock );
    }

    // Variables
    private Service key = null;
    private boolean locked = false;

    // Accessor
    /**
     *
     * @return
     */
    public Service getKey()
    {
        return this.key;
    }

    /**
     *
     * @param key
     */
    public void setKey( Service key )
    {
        this.key = key;
    }

    /**
     *
     * @return
     */
    public final boolean isLocked()
    {
        return this.locked;
    }

    /**
     *
     * @param locked
     */
    public final void setLocked( boolean locked )
    {
        this.locked = locked;
    }

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
