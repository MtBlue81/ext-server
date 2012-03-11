/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */

/*!
 * Ext Server
 * Copyright (c)2012 Xenophy.CO.,LTD All rights Reserved.
 * MIT Licensed
 */

// {{{ Ext.Array

/**
 * @class Ext.Array
 *
 * 配列を扱うための静的メソッドのセット。
 *
 * @singleton
 */
module.exports = {

    // {{{ clean

    /**
     * 配列をフィルタリングし、Ext.isEmptyで定義される要素を取り除きます。
     *
     * @param {Array} array
     * @return {Array} 取り除かれた結果
     */
    clean: function(array) {

        var results = [],
            i = 0,
            ln = array.length,
            item;

        for(; i < ln; i++) {

            item = array[i];

            if(!Ext.isEmpty(item)) {
                results.push(item);
            }
        }

        return results;
    },

    // }}}
    // {{{ clone

    /**
     * 一次配列のコピー（参照ではない）を生成します。
     * このメソッドはExt.cloneと違い、再帰的なコピー処理を行わないという点に注意してください。
     * これは、単にArray.prototype.slice.call(array)を使いやすくするためのメソッドです。
     *
     * @param {Array} array
     * @return {Array} コピーされた配列
     */
    clone: function(array) {
        return Array.prototype.slice.call(array);
    },

    // }}}
    // {{{ contains

    /**
     * 指定した項目（item）が配列（array）に存在するかどうかをチェックします。
     *
     * @param {Array} チェックされる配列
     * @param {Mixed} 検索する項目
     * @return {Boolean} 配列に項目が含まれている場合はtrue、そうでない場合はfalse
     */
    contains: function(array, item) {
        return array.indexOf(item) !== -1;
    },

    // }}}
    // {{{ difference

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    difference: function(arrayA, arrayB) {

        var slice = Array.prototype.slice;
        var erase = function(array, index, removeCount) {
            array.splice(index, removeCount);
            return array;
        };
        var clone = slice.call(arrayA),
        ln = clone.length,
        i, j, lnB;

        for(i = 0, lnB = arrayB.length; i < lnB; i++) {

            for(j = 0; j < ln; j++) {

                if(clone[j] === arrayB[i]) {

                    erase(clone, j, 1);
                    j--;
                    ln--;

                }
            }
        }

        return clone;
    },

    // }}}
    // {{{ each

    /**
     * @method each
     *
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    each: function(array, fn, scope, reverse) {

        array = Ext.Array.from(array);

        var i, ln = array.length;

        if(reverse !== true) {

            for(i = 0; i < ln; i++) {
                if(fn.call(scope || array[i], array[i], i, array) === false) {
                    return i;
                }
            }

        } else {

            for(i = ln - 1; i > -1; i--) {
                if(fn.call(scope || array[i], array[i], i, array) === false) {
                    return i;
                }
            }
        }

        return true;
    },

    // }}}
    // {{{ every

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    every: function(array, fn, scope) {
        return array.every(fn, scope);
    },

    // }}}
    // {{{ from

    /**
     * @method from
     *
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    from: function(value, newReference) {

        var slice = Array.prototype.slice;

        if(value === undefined || value === null) {
            return [];
        }

        if(Ext.isArray(value)) {
            return (newReference) ? slice.call(value) : value;
        }

        if(value && value.length !== undefined && typeof value !== 'string') {
            return Ext.toArray(value);
        }

        return [value];
    },

    // }}}
    // {{{ include

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    include: function(array, item) {
        if(!Ext.Array.contains(array, item)) {
            array.push(item);
        }
    },

    // }}}
    // {{{ indexOf

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    indexOf: function(array, item, from) {
        return array.indexOf(item, from);
    },

    // }}}
    // {{{ insert

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    insert: function (array, index, items) {
        return Ext.Array.replace(array, index, 0, items);
    },

    // }}}
    // {{{ lastIndexOf

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    lastIndexOf: function(array, item, from) {

        var len = array.length, from = Number(from);

        if(isNaN(from)) {

            from = len - 1;

        } else {

            from = (from < 0) ? Math.ceil(from) : Math.floor(from);

            if(from < 0) {
                from += len;
            } else if(from >= len) {
                from = len - 1;
            }
        }

        return array.lastIndexOf(item, from);
    },

    // }}}
    // {{{ replace

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    replace: function(array, index, removeCount, insert) {

        if(insert && insert.length) {

            if(index < array.length) {
                array.splice.apply(array, [index, removeCount].concat(insert));
            } else {
                array.push.apply(array, insert);
            }

        } else {

            array.splice(index, removeCount);

        }

        return array;
    },

    // }}}
    // {{{ slice

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    slice: function(array, begin, end) {
        return Array.prototype.slice.call(array, begin, end);
    },

    // }}}
    // {{{ splice

    /**
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    splice: function(array) {
        return array.splice.apply(array, Ext.Array.slice(Ext.toArray(arguments), 1));
    },

    // }}}
    // {{{ toArray

    /**
     * @method toArray
     *
     * "write it"
     *
     * @param o {Object} xxx
     * @return {Object}
     */
    toArray: function(iterable, start, end) {

        if(!iterable || !iterable.length) {
            return [];
        }

        if(typeof iterable === 'string') {
            iterable = iterable.split('');
        }

        var array = [], i;

        start = start || 0;
        end = end ? ((end < 0) ? iterable.length + end : end) : iterable.length;

        for(i = start; i < end; i++) {
            array.push(iterable[i]);
        }

        return array;
    }

    // }}}

};

// }}}

/*
 * Local variables:
 * tab-width: 4
 * c-basic-offset: 4
 * c-hanging-comment-ender-p: nil
 * End:
 */
