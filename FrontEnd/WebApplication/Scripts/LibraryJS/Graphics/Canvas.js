
// Tag: context draw functions
function InverseYAxisAlongCanvas( parameterYPosition )
{
  var rotateYAxisOnCanvas = basicSubstract( canvas_size.y,
                                            parameterYPosition );

  return rotateYAxisOnCanvas;
}

// Tag: Clean Functions
function clearScreenAt( parameterStartPoint, 
                        parameterLength )
{
    var toPoint = parameterLength.addition( parameterStartPoint.x, 
                                            parameterStartPoint.y );

    canvas_context.clearRect( parameterStartPoint.x, parameterStartPoint.y,
                              toPoint.x, toPoint.y);
}
