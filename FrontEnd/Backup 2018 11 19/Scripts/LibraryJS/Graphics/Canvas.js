
// Tag: context draw functions
function InverseYAxisAlongCanvas( parameterYPosition )
{
  var rotateYAxisOnCanvas = basicSubstract( canvas_size.positionY(),
                                            parameterYPosition );

  return rotateYAxisOnCanvas;
}

// Tag: Clean Functions
function clearScreenAt( parameterStartPoint,
                        parameterLength,
                        context )
{
    var toPoint = parameterLength.addition( parameterStartPoint.getPositionX(),
                                            parameterStartPoint.getPositionY() );

    context.clearRect( parameterStartPoint.getPositionX(), parameterStartPoint.getPositionY(),
                       toPoint.getLengthX(), toPoint.getLengthY() );
}
