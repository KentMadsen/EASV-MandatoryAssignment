function getHeader()
{
    $("#placeholder-header").load("./body/header.html");
}

function getFooter()
{
    $("#placeholder-footer").load("./body/footer.html");
}

function selectPage(name)
{
    var id = document.getElementById(name);
    var child_li = id.firstElementChild;
    child_li.id = "menu-header-selected";
}