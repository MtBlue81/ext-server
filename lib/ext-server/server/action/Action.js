/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.server.action.Action

/**
 * @class Ext.server.action.Action
 *
 * {Ext_server_action_Action:doc-contents}
 */
Ext.define('Ext.server.action.Action', {

    // {{{ extend

    extend: 'Ext.app.action.Action',

    // }}}
    // {{{ $execute

    $execute: function() {

        return Ext.Function.bind(function(config, next) {

            var callback = function() {
                next();
            };

            if(this.execute.length === 0) {
                this.execute();
                callback();
            } else {
                this.execute(callback);
            }

        }, this);

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
