package business.services.serviceRegister;

import business.services.Service;

import javax.naming.SizeLimitExceededException;

// Copyright 2018, Kent Madsen

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

    public static void test()
    {
        try
        {
            ServiceRegisterEntry[] a = ArrayGenerate(200);

            for( ServiceRegisterEntry c : a )
            {
                System.out.println( c.toString() );
                System.out.println("\r\n");
            }
        }
        catch ( Exception ex )
        {
            System.out.println(
                    ex.toString()
            );
        }
    }

    // Variables
    private ServiceRegisterEntry[] services = null;

    private boolean warningNearlyFull       = false;

    private static final int index_start_bound = 0;
    private static final int index_end_bound   = Integer.MAX_VALUE;

    private static final int default_expand_size = 100;

    private static final ServiceRegisterEntry sre_state_empty = null;

    private static final int one    = 1;
    private static final int zero   = 0;

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
        ServiceRegisterEntry[] entries = new ServiceRegisterEntry[ this.services.length ];




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

    /**
     *
     * @param warningNearlyFull
     */
    public final void setWarningNearlyFull( boolean warningNearlyFull )
    {
        this.warningNearlyFull = warningNearlyFull;
    }

    /**
     *
     * @return
     */
    public final boolean isWarningNearlyFull()
    {
        return this.warningNearlyFull;
    }

    // Global
    /**
     *
     * @param from
     * @param to
     * @return
     */
    protected static boolean ArrayStateNotEnoughElements( ServiceRegisterEntry[] from,
                                                          ServiceRegisterEntry[] to )
    {
        // From is bigger than to
        if( to.length < from.length )
            return true;

        return false;
    }

    /**
     *
     * @return
     */
    protected static ServiceRegisterEntry ArrayGenerate()
            throws Exception
    {
        return new ServiceRegisterEntry(null,
                                        false );
    }

    /**
     *
     * @param service
     * @return
     */
    protected static ServiceRegisterEntry ArrayGenerate( Service service )
            throws Exception
    {
        return
                new ServiceRegisterEntry( service );
    }

    /**
     *
     * @param x
     * @return
     */
    protected static int increment( int x )
    {
        return increase( x,
                         one );
    }

    /**
     *
     * @param x
     * @param y
     * @return
     */
    protected static int increase( int x,
                                   int y )
    {
        return (x + y);
    }

    /**
     *
     * @param size
     * @return
     */
    protected static ServiceRegisterEntry[] ArrayGenerate( int size )
        throws Exception
    {
        //
        if( size == 0 )
            throw new ArrayIndexOutOfBoundsException();

        //
        ServiceRegisterEntry[] generatedArray = new ServiceRegisterEntry[size];

        // Loop
        for( int index = 0;
                 index < generatedArray.length;
                 index = increment( index ) )
        {
            // Insert Empty Fields
            ArrayAppendEntryTo( generatedArray,
                                ArrayGenerate(),
                                index );
            //
        }

        return generatedArray;
    }

    /**
     *
     * @param from
     * @param to
     */
    protected static void ArrayReplicate( ServiceRegisterEntry[] from,
                                          ServiceRegisterEntry[] to )
            throws Exception
    {
        // is to shorter than from ? execute error
        if( ArrayStateNotEnoughElements( from, to ) )
            throw new SizeLimitExceededException();

        // loops both arrays, given the assumption that @to is bigger than @from
        for( int index = zero;
                 index < Integer.min( from.length,
                                      to.length );
                 index = increment( index ) )
        {
            //
            ServiceRegisterEntry fromEntry = ArraySelectEntrySecuredFrom( from,
                                                                          index );

            //
            ArrayAppendEntryToSecured( to,
                                       fromEntry,
                                       index );
        }

    }


    // Raw functions
    /**
     *
     * @param entries
     * @param index_position
     * @return
     * @throws Exception
     */
    protected static ServiceRegisterEntry ArraySelectEntrySecuredFrom( ServiceRegisterEntry[] entries,
                                                                       int index_position )
                    throws Exception
    {
        // Is index position out of range
        if( ArrayIsEntryAllowed( entries,
                                 index_position ) )
            throw new ArrayIndexOutOfBoundsException();

        // Retrieve Entry
        return ArraySelectEntryFrom( entries,
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
    protected static boolean ArrayIsElementEmptyAtSecured( ServiceRegisterEntry[] entries,
                                                           int index_position )
    {
        if( ArrayIsEntryAllowed( entries, index_position ) )
            throw new ArrayIndexOutOfBoundsException();

        return ArrayIsElementEmptyAt( entries, index_position );
    }


    /**
     *
     * @param entries
     * @param index_position
     * @return
     */
    protected static boolean ArrayIsElementEmptyAt( ServiceRegisterEntry[] entries,
                                                    int index_position )
    {
        return ( entries[ index_position ] == sre_state_empty );
    }

    /**
     *
     * @param entries
     * @param index_position
     * @return
     */
    protected static boolean ArrayIsElementWritebleSecuredAt( ServiceRegisterEntry[] entries,
                                                              int index_position )
    {
        if( ArrayIsEntryAllowed( entries, index_position ) )
            throw new Exception();

        return ArrayIsElementWritebleAt( entries,
                                         index_position );
    }

    /**
     *
     * @param entries
     * @param index_position
     * @return
     */
    protected static boolean ArrayIsElementWritebleAt( ServiceRegisterEntry[] entries,
                                                       int index_position )
    {
        return ( ArrayNot( entries[ index_position ].isLocked() ) );
    }

    /**
     *
     * @param entries
     * @param index_position
     * @return
     */
    protected static boolean ArrayIsElementLockedAt( ServiceRegisterEntry[] entries,
                                                     int index_position )
    {
        return ( entries[ index_position ].isLocked() );
    }

    /**
     *
     * @param state
     * @return
     */
    protected static boolean ArrayNot( boolean statee )
    {
        return !state;
    }

    /**
     *
     * @param entries
     * @param index_position
     * @return
     */
    protected static ServiceRegisterEntry ArraySelectEntryFrom( ServiceRegisterEntry[] entries,
                                                                int index_position )
    {
        //
        ServiceRegisterEntry entry;

        //
        entry = entries[ index_position ];

        //
        return entry;
    }

    /**
     *
     * @param entries
     * @param index_position
     */
    protected static void ArrayAppendEntryToSecured( ServiceRegisterEntry[] entries,
                                                     ServiceRegisterEntry append_entry,
                                                     int index_position )
    {
        /**
         *
         */
        if( ArrayIsEntryAllowed( entries,
                                 index_position ) )
            throw new ArrayIndexOutOfBoundsException();

        //
        ArrayAppendEntryTo( entries,
                            append_entry,
                            index_position );

    }

    /**
     *
     * @param entries
     * @param index_position
     */
    protected static void ArrayAppendEntryTo( ServiceRegisterEntry[] entries,
                                              ServiceRegisterEntry append_entry,
                                              int index_position )
    {
        entries[ index_position ] = append_entry;
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
