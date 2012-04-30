Ext.data.JsonP.Ext_Error({"parentMixins":[],"singleton":false,"statics":{"cfg":[],"property":[],"method":[{"owner":"Ext.Error","meta":{"static":true},"tagname":"method","name":"handle","id":"static-method-handle"},{"owner":"Ext.Error","meta":{"static":true},"tagname":"method","name":"raise","id":"static-method-raise"}],"event":[],"css_var":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Error.html#Ext-Error' target='_blank'>Error.js</a></div></pre><div class='doc-contents'><p><p>Error クラス。</p></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ignore' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Error'>Ext.Error</span><br/><a href='source/Error.html#Ext-Error-property-ignore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Error-property-ignore' class='name expandable'>ignore</a><span> : Boolean</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='static-method-handle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Error'>Ext.Error</span><br/><a href='source/Error.html#Ext-Error-static-method-handle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Error-static-method-handle' class='name expandable'>handle</a>( <span class='pre'>Object o</span> )<strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Globally handle any Ext errors that may be rais...</p> ...</div><div class='long'><p><p>Globally handle any Ext errors that may be raised, optionally providing custom logic to\nhandle different errors individually. Return true from the function to bypass throwing the\nerror to the browser, otherwise the error will be thrown and execution will halt.</p>\n\n<p>Example usage:</p>\n\n<pre><code>Ext.Error.handle = function(err) {\n    if (err.someProperty == 'NotReallyAnError') {\n        // maybe log something to the application here if applicable\n        return true;\n    }\n    // any non-true return value (including none) will cause the error to be thrown\n}\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>{Object} xxx</p>\n</div></li></ul></div></div></div><div id='static-method-raise' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Error'>Ext.Error</span><br/><a href='source/Error.html#Ext-Error-static-method-raise' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Error-static-method-raise' class='name expandable'>raise</a>( <span class='pre'>Object o</span> ) : Object<strong class='static signature'>static</strong></div><div class='description'><div class='short'><p>Raise an error that can include additional data...</p> ...</div><div class='long'><p><p>Raise an error that can include additional data and supports automatic console logging if available.\nYou can pass a string error message or an object with the <code>msg</code> attribute which will be used as the\nerror message. The object can contain any other name-value attributes (or objects) to be logged\nalong with the error.</p>\n\n<p>Note that after displaying the error message a JavaScript error will ultimately be thrown so that\nexecution will halt.</p>\n\n<p>Example usage:</p>\n\n<pre><code>Ext.Error.raise('A simple string error message');\n\n// or...\n\nExt.define('Ext.Foo', {\n    doSomething: function(option) {\n        if (someCondition === false) {\n            Ext.Error.raise({\n                msg: 'You cannot do that!',\n                option: option,   // whatever was passed into the method\n                'error code': 100 // other arbitrary info\n            });\n        }\n    }\n});\n</code></pre></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>{Object} xxx</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"requires":[],"mixins":[],"code_type":"assignment","inheritable":false,"meta":{},"files":[{"href":"Error.html#Ext-Error","filename":"Error.js"}],"uses":[],"members":{"cfg":[],"event":[],"method":[],"property":[{"owner":"Ext.Error","meta":{},"tagname":"property","name":"ignore","id":"property-ignore"}],"css_var":[],"css_mixin":[]},"html_meta":{},"aliases":{},"superclasses":[],"component":false,"tagname":"class","name":"Ext.Error","alternateClassNames":[],"inheritdoc":null,"id":"class-Ext.Error","mixedInto":[],"extends":null});