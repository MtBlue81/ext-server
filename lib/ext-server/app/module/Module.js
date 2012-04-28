/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.app.module.Module

/**
 * @class Ext.app.module.Module
 *
 * {Ext_app_module_Module:doc-contents}
 */
Ext.define('Ext.app.module.Module', {

    // {{{ constructor

    constructor: function(config) {

        config = config || {};

        Ext.apply(this, config);
    },

    // }}}
    // {{{ init

    init: function(config, next) {

        // TODO: DB利用処理


        next();
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
