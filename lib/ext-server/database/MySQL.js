/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.database.MySQL

/**
 * @class Ext.database.MySQL
 *
 * {Ext_database_MySQL:doc-contents}
 */
Ext.define('Ext.database.MySQL', {

    // {{{ extend

    extend: 'Ext.database.Database',

    // }}}
    // {{{ constructor

    constructor: function(config) {

        var driver;

        config = config || {};

        driver = Ext.database.Manager.get(config);

        if(driver === undefined) {

            // TODO: そのまま渡さないでちゃんと再設計

            driver = Ext.$dependencies.mysql.createClient(config);
            Ext.database.Manager.set(config, driver);

        }

        Ext.apply(this, config);
        Ext.applyIf(this, {
            driver: driver
        });

        // スーパークラスメソッドコール
        this.callParent(arguments);

    },

    // }}}
    // {{{ connect

    connect: function(next) {

        if(this.database) {

            this.driver.query('USE ' + this.database, function(err, results, fields) {

                if(err) {

                    // TODO: SQL Error. ex.)not exists database.
                    next();
                    return;

                }

                next();
            });

        } else {
            next();
        }
    },

    // }}}
    // {{{ buildSQL

    buildSQL: function(type, table, where, cond) {

        var me = this, sql = '';

        sql = Ext.database.MySQL[type](table, where, cond);

        return sql;

    },

    // }}}
    // {{{ statics

    statics: {

        // {{{ select

        select: function(table, fields, cond) {

            var me = this, tpl = '', sql = '';

            tpl += ' SELECT ';

            if(!cond) {

                /*
                 // {{{ 取得フィールド作成

                 var i = 0;
                 Ext.iterate(fields, function(key, value) {

                     if(i > 0) {
                         tpl += ', ';
                     }

                     tpl += key;
                     i++;
                 });

                 // }}}
                 */

                tpl += '*';


            }

            tpl += ' FROM ' + table + ' ';

            if(!cond) {

                // {{{ WHERE句生成

                tpl += Ext.database.MySQL['where'](fields);

                // }}}

            }

            sql = tpl;

            return sql;
        },

        // }}}
        // {{{ where

        where: function(cond) {

            var me = this,
            sql = '';

            if(Ext.isObject(cond)) {

                var limit = '';
                var i = 0;
                var sp = '';
                var op = ' = ';

                Ext.iterate(cond, function(key, value) {

                    if(i > 0) {
                        sp = ' AND ';
                    }

                    sql += sp;

                    if(Ext.isObject(value)) {

                        var tmpsql = '';
                        var j = 0;

                        Ext.iterate(value, function(opkey, opval) {

                            if(j > 0) {
                                tmpsql += ' AND ';
                            }

                            op = parseOperator(opkey);
                            value = opval;

                            if(Ext.isString(value)) {
                                value = '"' + value + '"';
                            }

                            tmpsql += key + op + value;

                            j++;
                        });

                        if(j > 1) {
                            tmpsql = '(' + tmpsql + ')';
                        }

                        if(i === 0) {
                            sql += 'WHERE ';
                        }

                        sql += tmpsql;

                    } else {

                        // {{{ 文字列の場合はSQLにダブルクォーテーションを付加

                        if(Ext.isString(value)) {
                            value = '"' + value + '"';
                        }

                        // }}}

                        if(key === '$limit') {

                            if(Ext.isArray(value)) {
                                value = value.join(', ');
                            }

                            limit = ' LIMIT ' + value;

                        } else {

                            if(i === 0) {
                                sql += 'WHERE ';
                            }
                            sql += key + op + value;

                        }

                    }

                    i++;
                });

                sql += limit;

            } else if(Ext.isString(cond)) {

                // {{{ 文字列が直接指定された場合は、WHERE句としてそのまま扱う

                sql += 'WHERE ';
                sql += cond;

                // }}}

            }

            return sql;
        }

        // }}}

    },

    // }}}
    // {{{ query

    query: function(sql, fn) {

        var me = this;

        me.driver.query(sql, fn);
    },

    // }}}
    // {{{ find

    find: function(table, o, fn) {

        var me = this, sql = '';

        // SQLビルド
        sql = me.buildSQL('select', table, o);

        // SQL実行
        me.driver.query(sql, fn);

    },

    // }}}
    // {{{ beginTrans

    beginTrans: function(fn) {

        var me = this, sql = '';

        // {{{ トランザクション開始

        me.driver.query('set autocommit = 0', function(err) {
            if(err) {
                fn(err);
            } else {
                me.driver.query('begin', function(err) {
                    fn(err);
                });
            }
        });

        // }}}

    },

    // }}}
    // {{{ commit

    commit: function(fn) {

        var me = this, sql = '';

        // {{{ コミット

        me.driver.query('commit', function(err) {
            fn(err);
        });

        // }}}

    },

    // }}}
    // {{{ rollback

    rollback: function(fn) {

        var me = this, sql = '';

        // {{{ ロールバック

        me.driver.query('rollback', function(err) {
            fn(err);
        });

        // }}}

    },

    // }}}
    // {{{ insert

    insert: function(table, o, fn) {

        var me = this, i, sql = '';


        sql += 'INSERT INTO ' + table;
        sql += '(';

        i = 0;
        Ext.iterate(o, function(key) {
            if(i > 0) {
                sql += ', ';
            }
            sql += key;
            i++;
        });

        sql += ') VALUES (';

        i = 0;
        Ext.iterate(o, function(key, value) {

            if(i > 0) {
                sql += ', ';
            }

            if(Ext.isString(value)) {
                value = '"' + value + '"';
            }

            sql += value;
            i++;
        });

        sql += ')';

        // {{{ インサート

        me.driver.query(sql, function(err) {
            fn(err);
        });

        // }}}

    },

    // }}}
    // {{{ update

    update: function(table, o, fn) {

        var me = this, where = '', sql = '';

        sql += 'UPDATE ' + table + ' SET ';

        var i = 0;
        Ext.iterate(o, function(key, value) {

            if(key === '$where') {

                where = ' ' + Ext.database.MySQL['where'](value);

            } else {

                if(i > 0) {
                    sql += ', ';
                }

                if(Ext.isString(value)) {
                    value = '"' + value + '"';
                }

                sql += key + ' = ' + value;
                i++;
            }

        });

        sql += where;

        // {{{ アップデート

        me.driver.query(sql, function(err) {
            fn(err);
        });

        // }}}

    },

    // }}}
    // {{{ remove

    remove: function(table, o, fn) {

        var me = this, where = '', sql = '';

        sql += 'DELETE FROM ' + table;
        where = ' ' + Ext.database.MySQL['where'](o);
        sql += where;

        me.driver.query(sql, function(err) {
            fn(err);
        });

    },

    // }}}
    // {{{ set

    set: function(table, o, fn) {

        var me = this, where = '', sql = '';

        sql += 'REPLACE INTO ' + table;
        sql += '(';

        i = 0;
        Ext.iterate(o, function(key) {
            if(i > 0) {
                sql += ', ';
            }
            sql += key;
            i++;
        });

        sql += ') VALUES (';

        i = 0;
        Ext.iterate(o, function(key, value) {

            if(i > 0) {
                sql += ', ';
            }

            if(Ext.isString(value)) {
                value = '"' + value + '"';
            }

            sql += value;
            i++;
        });

        sql += ')';

        // {{{ replace into

        me.driver.query(sql, function(err) {
            fn(err);
        });

        // }}}

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
