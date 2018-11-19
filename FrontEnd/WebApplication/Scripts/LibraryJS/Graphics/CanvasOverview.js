function  getDocumentEntity( identity )
{
    return document.getElementById( identity ).getContext('2d');
}

//
class CanvasOverview 
{
    //
    constructor( identity ) 
    {   
        this.docFrame = getDocumentEntity( identity );

        this.color  = null;

        this.width  = null;
        this.height = null;

        this.origin = null;
    }

    // Accessor
        //
    getCanvas() 
    {
        return this.docFrame;
    }

    setCanvas( canvas )
    {
        this.docFrame = canvas;
    }

        // Dimension
    setWidth( width )
    {
        this.width = width;
    }

    getWidth()
    {
        return this.width;
    }

    setHeight( height )
    {
        this.height = height;
    }

    getHeight()
    {
        return this.height;
    }

    //
    getColor()
    {
        return this.color;
    }

    setColor( c )
    {
        this.color = c;
    }

    setOrigin( o )
    {
        this.origin = o; 
    }

    getOrigin()
    {
        return this.origin;
    }

    // Functions
        // Line from A to B
    createABLine( begin,
                  end ) 
    {
        this.createABLine( begin, 
                           end, 
                           this.getColor() );
    }

    createABLine( begin,
                  end,
                  strokeColor ) 
    {
        var v = this.getCanvas();

        v.beginPath();

        v.moveTo( begin.getPositionX(),
                  begin.getPositionY() );
        
        v.lineTo( end.getPositionX(),
                  end.getPositionY() );

        v.strokeStyle = strokeColor;

        v.stroke();

        this.setOrigin( end );
    }

    createLineTo( end )
    {

    }

    // Position (x, y), Size(x, y), StopsArray
    createGradient( position, size, stops )
    {
        v = this.getCanvas();


    }

    update()
    {

    }

    clear()
    {
        clearScreenAt( this.width,
                       this.height );
    }

}


