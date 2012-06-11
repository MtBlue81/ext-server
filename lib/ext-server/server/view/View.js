/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.view.View

/**
 * @class Ext.server.view.View
 *
 * {Ext_server_view_View:doc-contents}
 */
Ext.define('Ext.server.view.View', {

    // {{{ requires

    requires: [
        'Ext.server.view.Static',
        'Ext.server.view.Template'
    ],

    // }}}
    // {{{ mixins

    mixins: [
        'Ext.server.view.Util'
    ],

    // }}}
    // {{{ extend

    extend: 'Ext.app.view.View',

    // }}}
    // {{{ constructor

    constructor: function() {
    },

    // }}}
    // {{{ isTempalte

    isTemplate: function(ext, template_exts) {

        var ret = true;

        if(ext || ext === '') {

            if(ext === '') {
                ext = '.html';
            }

            ext = ext.substr(1);

            if(Ext.Array.indexOf(template_exts, ext) === -1) {
                ret = false;
            }

        }

        return ret;
    },

    // }}}
    // {{{ render

    render: function(config, next) {

        var me, req, res, url, path, paths, ext,
            directoryIndex, template_exts,
            actionResultConfig, mime, options;

        me                  = this;
        req                 = config.req;
        res                 = config.res;
        url                 = require('url').parse(req.url);
        path                = decodeURIComponent(url.pathname);
        paths               = config.config.app.paths;
        ext                 = require('path').extname(require('url').parse(req.url, true).pathname);
        directoryIndex      = config.config.app.directoryIndex;
        template_exts       = config.config.app.template_exts;
        mime                = Ext.$dependencies.mime;
        actionResultConfig  = config.actionResultConfig;

        if(actionResultConfig.abort) {

            if(actionResultConfig.abort === 500) {

                // internal server error
                me.printErrors(res, 500, config.config.app.errors, actionResultConfig);

            } else if(actionResultConfig.forbidden) {

                // forbidden
                me.printErrors(res, 403, config.config.app.errors, actionResultConfig);

            } else if(actionResultConfig.redirect) {

                // redirect
                res.statusCode = 302;
                res.setHeader('Location', actionResultConfig.redirect);
                res.end('Redirecting to ' + actionResultConfig.redirect);

            }

            return;
        }

        options = {
            root: config.config.app.paths.public,
            req: config.req,
            res: config.res
        };

        if(res.headerSent) {
            return;
        }

        config.res.actionresult = config.res.actionresult || {};

        if(config.res.actionresult.$switchTemplate) {
            root = me.paths.templates;
            me.path = decodeURIComponent(node.url.parse(config.res.actionresult.$switchTemplate).pathname)
        }

        if(this.isTemplate(
            require('path').extname(require('url').parse(config.req.url, true).pathname),
            config.config.app.template_exts
        ) === false) {

            // Static send
            Ext.create('Ext.server.view.Static', Ext.apply(options, {
            }), next);

        } else {

            // Template send
            Ext.create('Ext.server.view.Template', Ext.apply(options, {
                engineName          : config.config.app.template_engine,
                path                : path,
                errors              : config.config.app.errors,
                actionResultConfig  : actionResultConfig
            }), next);

        }

    }

    // }}}

});

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
