public class FFProbeProcedure
{

    public FFProbeProcedure( String path )
    {
        this.setFilePath( path );
    }


    /**
     *
     */
    private FFProbeBatch[] batches = null;
    private String filePath = null;

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
