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

        var id = document.getElementById(identity);

        this.width  = id.clientWidth;
        this.height = id.clientHeight;

        this.lastPosition = null;

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
            // Width
    setWidth( width )
    {
        this.width = width;
    }

    getWidth()
    {
        return this.width;
    }
            // Height
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

    getLastPosition()
    {
        return this.lastPosition;
    }

    setLastPosition(p)
    {
        this.setLastPosition = p;
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

    }

    createLineTo( end )
    {
        this.createABLine(this.getLastPosition(), end);
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
        var sp = new Point2D(0, 0);
        var toV = new Vector2D(this.width, this.height);

        clearScreenAt( sp, toV,
                       this.docFrame );
    }

}


