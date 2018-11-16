
// Tag: context draw functions
function inverse_y_axis_along_canvas( parameterYPosition )
{
  var rotateYAxisOnCanvas = basicSubstract( canvas_size.y,
                                            parameterYPosition );

  return rotateYAxisOnCanvas;
}
function clearScreenAt( parameterStartPoint, 
    parameterLength )
{
var toPoint = parameterLength.addition( parameterStartPoint.x, 
                        parameterStartPoint.y );

canvas_context.clearRect( parameterStartPoint.x, parameterStartPoint.y,
          toPoint.x, toPoint.y);
}