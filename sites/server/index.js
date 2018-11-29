var express = require('express');
var mysql = require('mysql');
var filesystem = require('fs');

var app = express();


app.get( '/', function( req, res )
{

});

var server = app.listen( 8080, 
    function()
{
    var host = server.address().address;
    var port = server.address().port;

    console.log( "Application Listening at %s::%s", 
                 host, 
                 port );
});