
var start_location = "D:/Workspace/MandatoryAssignment/FrontEnd/WebApplication/Scripts/LibraryJS";

//
function requirement( path )
{
    var package_location = start_location + path;
    
    appendScript( package_location );
}

// Appends to the current html page, a required script
function appendScript( link_to_source )
{
    var script = document.createElement( "script" );
 
    script.type = 'application/javascript';
    script.src  = link_to_source;

    document.head.appendChild( script );
}

function removeScript()
{

};