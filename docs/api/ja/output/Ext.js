Ext.data.JsonP.Ext({"singleton":true,"statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]},"requires":[],"component":false,"mixins":[],"code_type":"nop","inheritable":false,"mixedInto":[],"meta":{},"uses":[],"parentMixins":[],"aliases":{},"members":{"event":[],"property":[],"method":[{"owner":"Ext","meta":{},"name":"apply","id":"method-apply","tagname":"method"},{"owner":"Ext","meta":{},"name":"applyIf","id":"method-applyIf","tagname":"method"},{"owner":"Ext","meta":{},"name":"clone","id":"method-clone","tagname":"method"},{"owner":"Ext","meta":{},"name":"emptyFn","id":"method-emptyFn","tagname":"method"},{"owner":"Ext","meta":{},"name":"getRandomInt","id":"method-getRandomInt","tagname":"method"},{"owner":"Ext","meta":{},"name":"isArray","id":"method-isArray","tagname":"method"},{"owner":"Ext","meta":{},"name":"isBoolean","id":"method-isBoolean","tagname":"method"},{"owner":"Ext","meta":{},"name":"isDate","id":"method-isDate","tagname":"method"},{"owner":"Ext","meta":{},"name":"isDefined","id":"method-isDefined","tagname":"method"},{"owner":"Ext","meta":{},"name":"isEmpty","id":"method-isEmpty","tagname":"method"},{"owner":"Ext","meta":{},"name":"isFunction","id":"method-isFunction","tagname":"method"},{"owner":"Ext","meta":{},"name":"isIterable","id":"method-isIterable","tagname":"method"},{"owner":"Ext","meta":{},"name":"isNumber","id":"method-isNumber","tagname":"method"},{"owner":"Ext","meta":{},"name":"isNumeric","id":"method-isNumeric","tagname":"method"},{"owner":"Ext","meta":{},"name":"isObject","id":"method-isObject","tagname":"method"},{"owner":"Ext","meta":{},"name":"isPrimitive","id":"method-isPrimitive","tagname":"method"},{"owner":"Ext","meta":{},"name":"isString","id":"method-isString","tagname":"method"},{"owner":"Ext","meta":{},"name":"iterate","id":"method-iterate","tagname":"method"},{"owner":"Ext","meta":{},"name":"merge","id":"method-merge","tagname":"method"},{"owner":"Ext","meta":{},"name":"microtime","id":"method-microtime","tagname":"method"},{"owner":"Ext","meta":{},"name":"moduleCacheClear","id":"method-moduleCacheClear","tagname":"method"},{"owner":"Ext","meta":{},"name":"setLocale","id":"method-setLocale","tagname":"method"},{"owner":"Ext","meta":{},"name":"toArray","id":"method-toArray","tagname":"method"},{"owner":"Ext","meta":{},"name":"uid","id":"method-uid","tagname":"method"}],"css_var":[],"css_mixin":[],"cfg":[]},"superclasses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Ext.html#Ext' target='_blank'>Ext.js</a></div></pre><div class='doc-contents'><p>名前空間 Ext (グローバルなオブジェクト)は、 クラス、シングルトン、便利なメソッドを内包するSenchaが提供するライブラリです。</p>\n\n<p>\"大部分のUIコンポーネントは、下層レベルの名前空間として階層化されています。\nしかし、多くの便利な関数は、Extオブジェクトのプロパティとして提供されます。 また、他のクラスメソッドで、頻繁に利用されるメソッドは、Extオブジェクトのショートカットとして提供されます。\"</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-apply' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-apply' class='name expandable'>apply</a>( <span class='pre'>Object object, Object config, Object defaults</span> ) : Object</div><div class='description'><div class='short'<p>設定されたコンフィグオブジェクトをオブジェクトに全てコピーします。</p></div><div class='long'><p>設定されたコンフィグオブジェクトをオブジェクトに全てコピーします。</p>\n\n<p>Note: オブジェクトや配列に対して、再帰的なコピーを行わず、クローンを作成してコピーする場合は、\n<a href=\"#!/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\" id=\"ext-gen3488\">Ext.Object.merge</a>\nを利用してください。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>適用されるオブジェクト\n</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>適用するオブジェクト\n</p>\n</div></li><li><span class='pre'>defaults</span> : Object<div class='sub-desc'><p>初期値として適用されるオブジェクト\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>適用後のオブジェクト</p>\n</div></li></ul></div></div></div><div id='method-applyIf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-applyIf' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-applyIf' class='name expandable'>applyIf</a>( <span class='pre'>Object object, Object config</span> ) : Object</div><div class='description'><div class='short'<p>プロパティ値が存在しないものに対して、設定されたコンフィグオブジェクトをオブジェクトにコピーし...</p></div><div class='long'><p>プロパティ値が存在しないものに対して、設定されたコンフィグオブジェクトをオブジェクトにコピーします。 既に存在するプロパティは上書きしません。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>適用されるオブジェクト\n</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>適用するオブジェクト\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>適用後のオブジェクト</p>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-clone' class='name expandable'>clone</a>( <span class='pre'>Object item</span> ) : Object</div><div class='description'><div class='short'<p>Clone almost any type of variable including arr...</p></div><div class='long'><p>Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'><p<p>Clone almost any type of variable including arr...</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>clone</p>\n</div></li></ul></div></div></div><div id='method-emptyFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-emptyFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-emptyFn' class='name expandable'>emptyFn</a>( <span class='pre'></span> )</div><div class='description'><div class='short'<p>A reusable empty function</p></div><div class='long'><p>A reusable empty function</p>\n</div></div></div><div id='method-getRandomInt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-getRandomInt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-getRandomInt' class='name expandable'>getRandomInt</a>( <span class='pre'>Number min, Number max</span> ) : Number</div><div class='description'><div class='short'<p>get between min value as max value.</p></div><div class='long'><p>get between min value as max value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>min</span> : Number<div class='sub-desc'><p>min value\n</p>\n</div></li><li><span class='pre'>max</span> : Number<div class='sub-desc'><p>max vlaue\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>{Ext:method-getRandomInt:return}random value</p>\n</div></li></ul></div></div></div><div id='method-isArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isArray' class='name expandable'>isArray</a>( <span class='pre'>Object target</span> ) : Boolean</div><div class='description'><div class='short'<p>Returns true if the passed value is a JavaScrip...</p></div><div class='long'><p>Returns true if the passed value is a JavaScript Array, false otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'><p>The target to test\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isBoolean' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isBoolean' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isBoolean' class='name expandable'>isBoolean</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>Returns true if the passed value is a boolean.</p></div><div class='long'><p>Returns true if the passed value is a boolean.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to test\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isDate' class='name expandable'>isDate</a>( <span class='pre'>Object object</span> ) : Boolean</div><div class='description'><div class='short'<p>Returns true if the passed value is a JavaScrip...</p></div><div class='long'><p>Returns true if the passed value is a JavaScript Date object, false otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The object to test\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isDefined' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isDefined' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isDefined' class='name expandable'>isDefined</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>Returns true if the passed value is defined.</p></div><div class='long'><p>Returns true if the passed value is defined.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to test\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isEmpty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isEmpty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isEmpty' class='name expandable'>isEmpty</a>( <span class='pre'>Object value, Boolean allowEmptyString</span> ) : Boolean</div><div class='description'><div class='short'<p>value値がnullまたは、undefined、または空文字列、空配列の場合、trueを返し...</p></div><div class='long'><p>value値がnullまたは、undefined、または空文字列、空配列の場合、trueを返します。 空文字列をEmpty(空)としない場合は、allowBlankにtrueを設定します。</p>\n\n<ul>\n<li><code>null</code></li>\n<li><code>undefined</code></li>\n<li>空配列</li>\n<li>空文字列(空文字列を空と判定しない場合は、allowEmptyStringをtrueに設定します。)</li>\n</ul>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>調べる値\n</p>\n</div></li><li><span class='pre'>allowEmptyString</span> : Boolean<div class='sub-desc'><p>(オプション)空文字列を空としない場合はtrueを設定(初期値:false)\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isFunction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isFunction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isFunction' class='name expandable'>isFunction</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>値が関数オブジェクトの場合はtrue、そうでない場合はfalseを返します。</p></div><div class='long'><p>値が関数オブジェクトの場合はtrue、そうでない場合はfalseを返します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p<p>値が関数オブジェクトの場合はtrue、そうでない場合はfalseを返します。</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isIterable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isIterable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isIterable' class='name expandable'>isIterable</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>Returns true if the passed value is iterable, f...</p></div><div class='long'><p>Returns true if the passed value is iterable, false otherwise</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to test\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isNumber' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isNumber' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isNumber' class='name expandable'>isNumber</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>値が数値型の場合true、そうでない場合はfalseを返します。</p></div><div class='long'><p>値が数値型の場合true、そうでない場合はfalseを返します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>調べる値\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isNumeric' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isNumeric' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isNumeric' class='name expandable'>isNumeric</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>Validates that a value is numeric.</p></div><div class='long'><p>Validates that a value is numeric.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>Examples: 1, '1', '2.34'\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>True if numeric, false otherwise</p>\n</div></li></ul></div></div></div><div id='method-isObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isObject' class='name expandable'>isObject</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>値が、オブジェクト型の場合true、そうでない場合はfalseを返します。</p></div><div class='long'><p>値が、オブジェクト型の場合true、そうでない場合はfalseを返します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>調べる値\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isPrimitive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isPrimitive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isPrimitive' class='name expandable'>isPrimitive</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>値が、文字列型か数値型か真偽型の場合はtrue、そうでない場合はfalseを返します。</p></div><div class='long'><p>値が、文字列型か数値型か真偽型の場合はtrue、そうでない場合はfalseを返します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>調べる値\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-isString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-isString' class='name expandable'>isString</a>( <span class='pre'>Object value</span> ) : Boolean</div><div class='description'><div class='short'<p>値が文字列型の場合はtrue、そうでない場合はfalseを返します。</p></div><div class='long'><p>値が文字列型の場合はtrue、そうでない場合はfalseを返します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>調べる値\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-iterate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-iterate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-iterate' class='name expandable'>iterate</a>( <span class='pre'>Object/Array object, Function fn, Object scope</span> )</div><div class='description'><div class='short'<p>配列の各要素か、オブジェクトのプロパティを繰り返します。</p></div><div class='long'><p>配列の各要素か、オブジェクトのプロパティを繰り返します。\nこのメソッドは列挙できる値の場合は、\n<a href=\"#!/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\" id=\"ext-gen2463\">Ext.Array.each</a>\nに、そうでなければ\n<a href=\"#!/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\" id=\"ext-gen2462\">Ext.Object.each</a>\nに処理を委譲します。</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object/Array<div class='sub-desc'><p>{Ext:method-microtime:param_object}</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>{Ext:method-microtime:param_fn}</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>{Ext:method-microtime:param_scope}</p>\n</div></li></ul></div></div></div><div id='method-merge' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-merge' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-merge' class='name expandable'>merge</a>( <span class='pre'>Object... object</span> ) : Object</div><div class='description'><div class=\"short\"><p>A convenient alias method for {@link Ext.Object...</p></div><div class='long'><p>A convenient alias method for {@link Ext.Object#merge}.</p>\n\n<p>{Ext_Object:method-merge:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object...<div class='sub-desc'><p>{Ext_Object:method-merge:param_object}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>{Ext_Object:method-merge:return}</p>\n</div></li></ul></div></div></div><div id='method-microtime' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-microtime' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-microtime' class='name expandable'>microtime</a>( <span class='pre'>Boolean get_as_float</span> ) : Boolean</div><div class='description'><div class='short'<p>get current time as microtime.</p></div><div class='long'><p>get current time as microtime.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>get_as_float</span> : Boolean<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>{Ext:method-microtime:return}</p>\n</div></li></ul></div></div></div><div id='method-moduleCacheClear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-moduleCacheClear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-moduleCacheClear' class='name expandable'>moduleCacheClear</a>( <span class='pre'>String path, Number mtime</span> )</div><div class='description'><div class='short'<p>clear module cache.</p></div><div class='long'><p>clear module cache.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : String<div class='sub-desc'><p<p>clear module cache.</p>\n</div></li><li><span class='pre'>mtime</span> : Number<div class='sub-desc'><p>{Ext:method-moduleCacheClear:desc}</p>\n</div></li></ul></div></div></div><div id='method-setLocale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-setLocale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-setLocale' class='name expandable'>setLocale</a>( <span class='pre'>String locale</span> ) : Boolean</div><div class='description'><div class='short'<p>setting locale for Ext Server.</p></div><div class='long'><p>setting locale for Ext Server.\ndefault 'en', output error message to locale.\nuse a value if can read process.env.LANG.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>locale</span> : String<div class='sub-desc'><p>locale (default:'en')\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-toArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-toArray' class='name expandable'>toArray</a>( <span class='pre'>Object iterable, Number start, Number end</span> ) : Array</div><div class='description'><div class='short'>{Ext_Array:method-toArray:desc} ...</div><div class='long'><p>{Ext_Array:method-toArray:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>iterable</span> : Object<div class='sub-desc'><p>{Ext_Array:method-toArray:param_iterable}</p>\n</div></li><li><span class='pre'>start</span> : Number<div class='sub-desc'><p>{Ext_Array:method-toArray:param_start}</p>\n</div></li><li><span class='pre'>end</span> : Number<div class='sub-desc'><p>{Ext_Array:method-toArray:param_end}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>{Ext_Array:method-toArray:return}</p>\n</div></li></ul></div></div></div><div id='method-uid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext'>Ext</span><br/><a href='source/Ext.html#Ext-method-uid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext-method-uid' class='name expandable'>uid</a>( <span class='pre'>Number len</span> ) : String</div><div class='description'><div class='short'<p>generate unique id.</p></div><div class='long'><p>generate unique id.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>len</span> : Number<div class='sub-desc'><p>length\n</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"name":"Ext","html_meta":{},"tagname":"class","extends":null,"id":"class-Ext","alternateClassNames":[],"inheritdoc":null,"files":[{"href":"Ext.html#Ext","filename":"Ext.js"}]});