public class FFProbeProcedure
{
    // Constructpr
    /**
     *
     * @param path
     */
    public FFProbeProcedure( String path )
    {
        this.setFilePath( path );
    }


    // Variables
    /**
     *
     */
    private FFProbeBatch[] batches = null;

    /**
     *
     */
    private String filePath = null;

    // Accessor
    /**
     *
     * @return
     */
    public final FFProbeBatch[] getBatches()
    {
        return this.batches;
    }

    /**
     *
     * @param batches
     */
    public final void setBatches( FFProbeBatch[] batches )
    {
        this.batches = batches;
    }

    /**
     *
     * @return
     */
    public final String getFilePath()
    {
        return filePath;
    }

    /**
     *
     * @param filePath
     */
    public final void setFilePath(String filePath)
    {
        this.filePath = filePath;
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
