package business.services.entities;

/**
 *
 */
public class Buffer
{
    //
    public Buffer()
    {

    }

    public Buffer( byte[] bytes )
    {
        this.setContent( bytes );
    }

    //
    private byte[] content = null;

    // Accessors
    /**
     *
     * @return
     */
    public final byte[] getContent()
    {
        return this.content;
    }

    /**
     *
     * @param content
     */
    public final void setContent( byte[] content )
    {
        this.content = content;
    }

    /**
     *
     * @return
     */
    public final boolean isEmpty()
    {
        return (content == null);
    }
}
