/**
    Header
    Name : Kent v. Madsen
    Source Code Author : Kent Madsen
    Copyright 2018 Kent v Madsen
 */
package business.services.serviceRegister;

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
            throws Exception
    {
        this(null );
    }

    /**
     *
     * @param v
     */
    public ServiceRegisterEntry( Service v )
            throws Exception
    {
        this( v, true );
    }

    /**
     *
     * @param serviceEntryElement
     * @param locked
     */
    public ServiceRegisterEntry( Service serviceEntryElement,
                                 boolean locked )
            throws Exception
    {
        this.setKey( serviceEntryElement );
        this.setLocked( locked );
    }

    // Variables
        //
    private final static String vKey         = "KEY";
    private final static String vLock        = "LOCKED";
    private final static String vSplit       = ":";
    private final static String vObjectString = "OBJECT";
    private final static String vNext = "\r\n";

    private final static String vFalse = "FALSE";
    private final static String vTrue = "TRUE";

        //
    private Service key    = null;
    private boolean locked = false;


    // Accessor
    /**
     *
     * @return
     */
    public final Service getKey()
    {
        return this.key;
    }

    /**
     *
     * @param key
     * @throws Exception
     */
    public final void setKey( Service key )
            throws Exception
    {
        if( this.isLocked() )
            throw new Exception();

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
        StringBuilder builder = new StringBuilder();

        // Key
        builder.append( vKey );
        builder.append( vSplit );

        if( this.getKey() == null )
            builder.append("Null");
        else
            builder.append( this.getKey().toString() );

        builder.append( vNext );

        // Lock
        builder.append( vLock );
        builder.append( vSplit );

        if( this.isLocked() )
            builder.append( vTrue );
        else
            builder.append( vFalse );

        builder.append( vNext );

        //
        builder.append( vObjectString );
        builder.append( vSplit );
        builder.append( super.toString() );

        return builder.toString();
    }
}
