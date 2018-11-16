class ApplicationFramework
{
    constructor()
    {
        this.name = "Valkyrier";
        this.description = "";

        this.language = "en-GB";
        
        this.current_view = 0;
    }

    // Setup Methods
    setup()
    {

    }




    
}

var application = null;

// Application start
function entry()
{
    application = new ApplicationFramework();
    
    application.setup();

    console.log(application);
}

entry();