package serviceRegister;

import services.Service;

/**
 *
 */
public class ServerRegister
{
    // Accessor
    /**
     *
     */
    public ServerRegister()
    {

    }

    // Variables
    private ServiceRegisterEntry[] services = null;

    private static final int index_start_bound = 0;
    private static final int index_end_bound = Integer.MAX_VALUE;

    // Functions

        // Add
    /**
     *
     * @param service
     */
    public final void create( Service service )
    {

    }

        // Update
    /**
     *
     * @param begin
     * @param end
     */
    public final void update( Service begin,
                              Service end )
    {

    }

    /**
     *
     * @param index
     * @param service
     */
    public final void update( int index,
                              Service service )
    {

    }

    // Remove Operation
    /**
     *
     * @param index
     */
    public final void delete( int index )
    {

    }

    /**
     *
     * @param service
     */
    public final void delete( Service service )
    {

    }

    // Internal
    /**
     * Expands the current buffer array
     * @param size
     */
    protected final void expand( int size )
            throws Exception
    {


    }

    /**
     *
     * @param index
     * @return
     */
    protected final boolean isEmptyAt( int index )
    {
        return false;
    }

    // ToArray
    /**
     *
     * @return
     */
    public final Service[] toArrayService()
    {

        return null;
    }

    /**
     *
     * @return
     */
    public final ServiceRegisterEntry[] toArrayEntries()
    {
        //
        ServiceRegisterEntry[] entries = new ServiceRegisterEntry[this.services.length];



        return null;
    }

    /**
     *
     * @return
     */
    public final ServiceRegisterEntry[] toArrayEntriesRelated()
    {
        return this.services;
    }

    // Accessor
    /**
     *
     * @return
     */
    public final ServiceRegisterEntry[] getServices()
    {
        return this.services;
    }

    /**
     *
     * @param services
     */
    public final void setServices( ServiceRegisterEntry[] services )
    {
        this.services = services;
    }

    // Object Implementation

    //


    //


    /**
     *
     * @param entryA
     * @param entryB
     */
    protected static void requestReplicate( ServiceRegisterEntry[] entryA,
                                            ServiceRegisterEntry[] entryB )
    {

    }

    // Raw functions
    /**
     *
     * @param entries
     * @param index_position
     * @return
     * @throws Exception
     */
    protected static ServiceRegisterEntry ArrayGetEntryFromSecured( ServiceRegisterEntry[] entries,
                                                                    int index_position )
                    throws Exception
    {
        // Is index position out of range
        if( ArrayIsEntryAllowed( entries,
                                 index_position ) )
            throw new ArrayIndexOutOfBoundsException();

        // Retrieve Entry
        return ArrayGetEntryFrom( entries,
                                  index_position );
    }

    /**
     *
     * @param entries
     * @param index_position
     * @return
     */
    protected static boolean ArrayIsEntryAllowed( ServiceRegisterEntry[] entries,
                                                  int index_position )
    {
        // comment natural boundary. by index_max_bound
        // outside (index_position (-1) < 0)
        if( index_position < index_start_bound )
            return false;

        // outside (0 < array length)
        if( index_position < entries.length )
            return true;

        return false;
    }

    /**
     *
     * @param entries
     * @param index_position
     * @return
     */
    protected static ServiceRegisterEntry ArrayGetEntryFrom( ServiceRegisterEntry[] entries,
                                                             int index_position )
    {
        //
        ServiceRegisterEntry entry;

        //
        entry = entries[ index_position ];

        //
        return entry;
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
