# Ext Server

An application server having the class system which is compatible with Ext JS

## Getting it

    $ npm install ext-server

## Usage

    require('ext-server');

    // global.Ext Object is Available
    Ext.emptyFn();

## API Documentation

[Ext Server API Documentation](http://xenophy.github.com/ext-server/)


## Road Map

**current version: version 0.0.8**
:   checked action spec, session, database, All which has been implemented so far.

Version 0.1.x
:   set a time limit for the execute time of the action.
:   display all error indication about Ext.Server for a browser.
:   Socket.IO support.
:   Ext Direct supprt(for Ext JS 4.1 and Sencha Touch 2.0).
:   this.mail method in action, used by "emailjs".
:   implement UserAgent util.
:   Ext.String.markdown/Ext.markdown implement, used by "node-markdown"
:   SSL support.
:   The switch of the document root by Virtual Host.

Version 0.2.x
:   Ext Classs System, watch a required file and update it automatically.
:   special dir "(-_-)v" support, and make an error page beautiful.

Version 0.3.x
:   create Ext.shell.Shell base action execute enviroment.
:   create REST Controller.

higher versions.
:   Ext.media.PDF class implement, used by "PDFKit".
:   Ext.media.Excel/Ext.media.Word/Ext.media.PowerPoint, implement it in reference to "PHP Excel" etc.
:   Ext.canvas.Canvas implement, used by "node-canvas" and combination with socket.io.
:   Ext.template.Smart(Ext.SmartTemplate), smarty like template engine.
:   PostgreSQL support, with windows. (Solution to issue of node-gyp)
:   Oracle support, with windows. (Solution to issue of node-gyp)
:   iconv(node-iconv-jp) (Solution to issue of node-gyp)
:   legecy Japanese Mobile Phone pict.
:   bind Server monitor and loggin solution.
:   Ext JS / Sencha Touch client test operation from server side.(this old project name "Vergina")

