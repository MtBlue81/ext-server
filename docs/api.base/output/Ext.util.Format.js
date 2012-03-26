Ext.data.JsonP.Ext_util_Format({"singleton":true,"statics":{"property":[],"event":[],"method":[],"css_var":[],"css_mixin":[],"cfg":[]},"requires":[],"component":false,"mixins":[],"code_type":"assignment","inheritable":false,"mixedInto":[],"meta":{},"uses":[],"parentMixins":[],"aliases":{},"members":{"event":[],"property":[{"owner":"Ext.util.Format","meta":{},"name":"currencyAtEnd","id":"property-currencyAtEnd","tagname":"property"},{"owner":"Ext.util.Format","meta":{},"name":"currencyPrecision","id":"property-currencyPrecision","tagname":"property"},{"owner":"Ext.util.Format","meta":{},"name":"currencySign","id":"property-currencySign","tagname":"property"},{"owner":"Ext.util.Format","meta":{},"name":"decimalSeparator","id":"property-decimalSeparator","tagname":"property"},{"owner":"Ext.util.Format","meta":{},"name":"thousandSeparator","id":"property-thousandSeparator","tagname":"property"}],"method":[{"owner":"Ext.util.Format","meta":{},"name":"capitalize","id":"method-capitalize","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"currency","id":"method-currency","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"date","id":"method-date","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"dateRenderer","id":"method-dateRenderer","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"defaultValue","id":"method-defaultValue","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"ellipsis","id":"method-ellipsis","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"escapeRegex","id":"method-escapeRegex","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"fileSize","id":"method-fileSize","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"format","id":"method-format","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"htmlDecode","id":"method-htmlDecode","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"htmlEncode","id":"method-htmlEncode","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"jpMoney","id":"method-jpMoney","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"leftPad","id":"method-leftPad","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"lowercase","id":"method-lowercase","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"math","id":"method-math","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"nl2br","id":"method-nl2br","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"number","id":"method-number","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"numberFormat","id":"method-numberFormat","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"numberRenderer","id":"method-numberRenderer","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"parseBox","id":"method-parseBox","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"plural","id":"method-plural","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"round","id":"method-round","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"stripScripts","id":"method-stripScripts","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"stripTags","id":"method-stripTags","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"substr","id":"method-substr","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"trim","id":"method-trim","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"undef","id":"method-undef","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"uppercase","id":"method-uppercase","tagname":"method"},{"owner":"Ext.util.Format","meta":{},"name":"usMoney","id":"method-usMoney","tagname":"method"}],"css_var":[],"css_mixin":[],"cfg":[]},"superclasses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/Format.html#Ext-util-Format' target='_blank'>Format.js</a></div></pre><div class='doc-contents'><p>{Ext_util_Format:doc-contents}</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-currencyAtEnd' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-property-currencyAtEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-property-currencyAtEnd' class='name expandable'>currencyAtEnd</a><span> : Boolean</span></div><div class='description'><div class='short'>{Ext_util_Format:property-currencyAtEnd:desc} ...</div><div class='long'><p>{Ext_util_Format:property-currencyAtEnd:desc}</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-currencyPrecision' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-property-currencyPrecision' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-property-currencyPrecision' class='name expandable'>currencyPrecision</a><span> : Number</span></div><div class='description'><div class='short'>{Ext_util_Format:property-currencyPrecision:desc} ...</div><div class='long'><p>{Ext_util_Format:property-currencyPrecision:desc}</p>\n<p>Defaults to: <code>2</code></p></div></div></div><div id='property-currencySign' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-property-currencySign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-property-currencySign' class='name expandable'>currencySign</a><span> : String</span></div><div class='description'><div class='short'>{Ext_util_Format:property-currencySign:desc} ...</div><div class='long'><p>{Ext_util_Format:property-currencySign:desc}</p>\n<p>Defaults to: <code>&quot;$&quot;</code></p></div></div></div><div id='property-decimalSeparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-property-decimalSeparator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-property-decimalSeparator' class='name expandable'>decimalSeparator</a><span> : String</span></div><div class='description'><div class='short'>{Ext_util_Format:property-decimalSeparator:desc} ...</div><div class='long'><p>{Ext_util_Format:property-decimalSeparator:desc}</p>\n<p>Defaults to: <code>&quot;.&quot;</code></p></div></div></div><div id='property-thousandSeparator' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-property-thousandSeparator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-property-thousandSeparator' class='name expandable'>thousandSeparator</a><span> : String</span></div><div class='description'><div class='short'>{Ext_util_Format:property-thousandSeparator:desc} ...</div><div class='long'><p>{Ext_util_Format:property-thousandSeparator:desc}</p>\n<p>Defaults to: <code>&quot;,&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-capitalize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-capitalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-capitalize' class='name expandable'>capitalize</a>( <span class='pre'>String string</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-capitalize:desc}\n\n{Ext_String:method-capitalize:desc} ...</div><div class='long'><p>{Ext_util_Format:method-capitalize:desc}</p>\n\n<p>{Ext_String:method-capitalize:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>{Ext_String:method-capitalize:param_string}</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_String:method-capitalize:return}</p>\n\n</div></li></ul></div></div></div><div id='method-currency' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-currency' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-currency' class='name expandable'>currency</a>( <span class='pre'>Number/String value, String sign, Number decimals, Boolean end</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-currency:desc} ...</div><div class='long'><p>{Ext_util_Format:method-currency:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number/String<div class='sub-desc'><p>{Ext_util_Format:method-currency:param_value}</p>\n</div></li><li><span class='pre'>sign</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-currency:param_sign}</p>\n</div></li><li><span class='pre'>decimals</span> : Number<div class='sub-desc'><p>{Ext_util_Format:method-currency:param_decimals}</p>\n</div></li><li><span class='pre'>end</span> : Boolean<div class='sub-desc'><p>{Ext_util_Format:method-currency:param_end}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-currency:return}</p>\n</div></li></ul></div></div></div><div id='method-date' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-date' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-date' class='name expandable'>date</a>( <span class='pre'>String/Date value, String format</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-date:desc} ...</div><div class='long'><p>{Ext_util_Format:method-date:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String/Date<div class='sub-desc'><p>{Ext_util_Format:method-date:param_value}</p>\n</div></li><li><span class='pre'>format</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-date:param_format}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-date:return}</p>\n</div></li></ul></div></div></div><div id='method-dateRenderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-dateRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-dateRenderer' class='name expandable'>dateRenderer</a>( <span class='pre'>String format</span> ) : Function</div><div class='description'><div class='short'>{Ext_util_Format:method-dateRenderer:desc} ...</div><div class='long'><p>{Ext_util_Format:method-dateRenderer:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-dateRenderer:param_format}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>{Ext_util_Format:method-dateRenderer:return}</p>\n</div></li></ul></div></div></div><div id='method-defaultValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-defaultValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-defaultValue' class='name expandable'>defaultValue</a>( <span class='pre'>Object value, String defaultValue</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-defaultValue:desc} ...</div><div class='long'><p>{Ext_util_Format:method-defaultValue:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>{Ext_util_Format:method-defaultValue:param_value}</p>\n</div></li><li><span class='pre'>defaultValue</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-defaultValue:param_defaultValue}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-defaultValue:return}</p>\n</div></li></ul></div></div></div><div id='method-ellipsis' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-ellipsis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-ellipsis' class='name expandable'>ellipsis</a>( <span class='pre'>String value, Number length, Boolean word</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-ellipsis:desc}\n\n{Ext_String:method-ellipsis:desc} ...</div><div class='long'><p>{Ext_util_Format:method-ellipsis:desc}</p>\n\n<p>{Ext_String:method-ellipsis:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>{Ext_String:method-ellipsis:param_value}</p>\n\n</div></li><li><span class='pre'>length</span> : Number<div class='sub-desc'><p>{Ext_String:method-ellipsis:param_length}</p>\n\n</div></li><li><span class='pre'>word</span> : Boolean<div class='sub-desc'><p>{Ext_String:method-ellipsis:param_word}</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_String:method-ellipsis:return}</p>\n\n</div></li></ul></div></div></div><div id='method-escapeRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-escapeRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-escapeRegex' class='name expandable'>escapeRegex</a>( <span class='pre'>String str</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-escapeRegex:desc} ...</div><div class='long'><p>{Ext_util_Format:method-escapeRegex:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>str</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-escapeRegex:param_str}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-escapeRegex:return}</p>\n</div></li></ul></div></div></div><div id='method-fileSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-fileSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-fileSize' class='name expandable'>fileSize</a>( <span class='pre'>Number/String size</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-fileSize:desc} ...</div><div class='long'><p>{Ext_util_Format:method-fileSize:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>size</span> : Number/String<div class='sub-desc'><p>{Ext_util_Format:method-fileSize:param_size}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-fileSize:return}</p>\n</div></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-format' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-format' class='name expandable'>format</a>( <span class='pre'>String string, String value1, String value2</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-format:desc}\n\n{Ext_String:method-format:desc} ...</div><div class='long'><p>{Ext_util_Format:method-format:desc}</p>\n\n<p>{Ext_String:method-format:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>{Ext_String:method-format:param_string}</p>\n\n</div></li><li><span class='pre'>value1</span> : String<div class='sub-desc'><p>{Ext_String:method-format:param_value1}</p>\n\n</div></li><li><span class='pre'>value2</span> : String<div class='sub-desc'><p>{Ext_String:method-format:param_value2}</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_String:method-format:return}</p>\n\n</div></li></ul></div></div></div><div id='method-htmlDecode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-htmlDecode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-htmlDecode' class='name expandable'>htmlDecode</a>( <span class='pre'>String value</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-htmlDecode:desc}\n\n{Ext_String:method-htmlDecode:desc} ...</div><div class='long'><p>{Ext_util_Format:method-htmlDecode:desc}</p>\n\n<p>{Ext_String:method-htmlDecode:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>{Ext_String:method-htmlDecode:param_value}</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_String:method-htmlDecode:return}</p>\n\n</div></li></ul></div></div></div><div id='method-htmlEncode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-htmlEncode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-htmlEncode' class='name expandable'>htmlEncode</a>( <span class='pre'>String value</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-htmlEncode:desc}\n\n{Ext_String:method-htmlEncode:desc} ...</div><div class='long'><p>{Ext_util_Format:method-htmlEncode:desc}</p>\n\n<p>{Ext_String:method-htmlEncode:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>{Ext_String:method-htmlEncode:param_value}</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_String:method-htmlEncode:return}</p>\n\n</div></li></ul></div></div></div><div id='method-jpMoney' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-jpMoney' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-jpMoney' class='name expandable'>jpMoney</a>( <span class='pre'>Number/String value</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-jpMoney:desc} ...</div><div class='long'><p>{Ext_util_Format:method-jpMoney:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number/String<div class='sub-desc'><p>{Ext_util_Format:method-jpMoney:param_value}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-jpMoney:return}</p>\n</div></li></ul></div></div></div><div id='method-leftPad' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-leftPad' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-leftPad' class='name expandable'>leftPad</a>( <span class='pre'>String string, Number size, String character</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-leftPad:desc}\n\n{Ext_String:method-leftPad:desc} ...</div><div class='long'><p>{Ext_util_Format:method-leftPad:desc}</p>\n\n<p>{Ext_String:method-leftPad:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>{Ext_String:method-leftPad:param_string}</p>\n\n</div></li><li><span class='pre'>size</span> : Number<div class='sub-desc'><p>{Ext_String:method-leftPad:param_size}</p>\n\n</div></li><li><span class='pre'>character</span> : String<div class='sub-desc'><p>{Ext_String:method-leftPad:param_character}</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_String:method-leftPad:return}</p>\n\n</div></li></ul></div></div></div><div id='method-lowercase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-lowercase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-lowercase' class='name expandable'>lowercase</a>( <span class='pre'>String value</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-lowercase:desc} ...</div><div class='long'><p>{Ext_util_Format:method-lowercase:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-lowercase:param_value}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-lowercase:return}</p>\n</div></li></ul></div></div></div><div id='method-math' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-math' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-math' class='name expandable'>math</a>( <span class='pre'></span> ) : Function</div><div class='description'><div class='short'>{Ext_util_Format:method-math:desc} ...</div><div class='long'><p>{Ext_util_Format:method-math:desc}</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>{Ext_util_Format:method-math:return}</p>\n</div></li></ul></div></div></div><div id='method-nl2br' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-nl2br' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-nl2br' class='name expandable'>nl2br</a>( <span class='pre'>String v</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-nl2br:desc} ...</div><div class='long'><p>{Ext_util_Format:method-nl2br:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-nl2br:param_v}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-nl2br:return}</p>\n</div></li></ul></div></div></div><div id='method-number' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-number' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-number' class='name expandable'>number</a>( <span class='pre'>Number v, String format</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-number:desc} ...</div><div class='long'><p>{Ext_util_Format:method-number:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Number<div class='sub-desc'><p>{Ext_util_Format:method-number:param_v}</p>\n</div></li><li><span class='pre'>format</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-number:param_format}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-number:return}</p>\n</div></li></ul></div></div></div><div id='method-numberFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-numberFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-numberFormat' class='name expandable'>numberFormat</a>( <span class='pre'>String v</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-numberFormat:desc} ...</div><div class='long'><p>{Ext_util_Format:method-numberFormat:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-numberFormat:param_v}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-numberFormat:return}</p>\n</div></li></ul></div></div></div><div id='method-numberRenderer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-numberRenderer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-numberRenderer' class='name expandable'>numberRenderer</a>( <span class='pre'>String format</span> ) : Function</div><div class='description'><div class='short'>{Ext_util_Format:method-numberRenderer:desc} ...</div><div class='long'><p>{Ext_util_Format:method-numberRenderer:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>format</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-numberRenderer:param_format}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>{Ext_util_Format:method-numberRenderer:return}</p>\n</div></li></ul></div></div></div><div id='method-parseBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-parseBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-parseBox' class='name expandable'>parseBox</a>( <span class='pre'>Number/String v</span> ) : Object</div><div class='description'><div class='short'>{Ext_util_Format:method-parseBox:desc} ...</div><div class='long'><p>{Ext_util_Format:method-parseBox:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Number/String<div class='sub-desc'><p>{Ext_util_Format:method-parseBox:param_v}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>{Ext_util_Format:method-parseBox:return}</p>\n</div></li></ul></div></div></div><div id='method-plural' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-plural' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-plural' class='name expandable'>plural</a>( <span class='pre'>Number value, String singular, String plural</span> )</div><div class='description'><div class='short'>{Ext_util_Format:method-plural:desc} ...</div><div class='long'><p>{Ext_util_Format:method-plural:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>{Ext_util_Format:method-plural:param_value}</p>\n</div></li><li><span class='pre'>singular</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-plural:param_singular}</p>\n</div></li><li><span class='pre'>plural</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-plural:param_plural}</p>\n</div></li></ul></div></div></div><div id='method-round' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-round' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-round' class='name expandable'>round</a>( <span class='pre'>Number/String value, Number precision</span> ) : Number</div><div class='description'><div class='short'>{Ext_util_Format:method-round:desc} ...</div><div class='long'><p>{Ext_util_Format:method-round:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number/String<div class='sub-desc'><p>{Ext_util_Format:method-round:param_value}</p>\n</div></li><li><span class='pre'>precision</span> : Number<div class='sub-desc'><p>{Ext_util_Format:method-round:param_precision}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>{Ext_util_Format:method-round:return}</p>\n</div></li></ul></div></div></div><div id='method-stripScripts' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-stripScripts' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-stripScripts' class='name expandable'>stripScripts</a>( <span class='pre'>Object value</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-stripScripts:desc} ...</div><div class='long'><p>{Ext_util_Format:method-stripScripts:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>{Ext_util_Format:method-stripScripts:param_value}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-stripScripts:return}</p>\n</div></li></ul></div></div></div><div id='method-stripTags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-stripTags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-stripTags' class='name expandable'>stripTags</a>( <span class='pre'>Object value</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-stripTags:desc} ...</div><div class='long'><p>{Ext_util_Format:method-stripTags:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>{Ext_util_Format:method-stripTags:value}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-stripTags:return}</p>\n</div></li></ul></div></div></div><div id='method-substr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-substr' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-substr' class='name expandable'>substr</a>( <span class='pre'>String value, Number start, Number length</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-substr:desc} ...</div><div class='long'><p>{Ext_util_Format:method-substr:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : String<div class='sub-desc'><p>{Ext_util_Format:method-substr:param_value}</p>\n</div></li><li><span class='pre'>start</span> : Number<div class='sub-desc'><p>{Ext_util_Format:method-substr:param_start}</p>\n</div></li><li><span class='pre'>length</span> : Number<div class='sub-desc'><p>{Ext_util_Format:method-substr:param_length}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-substr:return}</p>\n</div></li></ul></div></div></div><div id='method-trim' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-trim' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-trim' class='name expandable'>trim</a>( <span class='pre'>String string</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-trim:desc}\n\n{Ext_String:method-trim:desc} ...</div><div class='long'><p>{Ext_util_Format:method-trim:desc}</p>\n\n<p>{Ext_String:method-trim:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>{Ext_String:method-trim:param_string}</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_String:method-trim:return}</p>\n\n</div></li></ul></div></div></div><div id='method-undef' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-undef' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-undef' class='name expandable'>undef</a>( <span class='pre'>Object value</span> ) : Object</div><div class='description'><div class='short'>{Ext_util_Format:method-undef:desc} ...</div><div class='long'><p>{Ext_util_Format:method-undef:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>{Ext_util_Format:method-undef:param_value}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>{Ext_util_Format:method-undef:return}</p>\n</div></li></ul></div></div></div><div id='method-uppercase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-uppercase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-uppercase' class='name expandable'>uppercase</a>( <span class='pre'>Object value</span> ) : Object</div><div class='description'><div class='short'>{Ext_util_Format:method-uppercase:desc} ...</div><div class='long'><p>{Ext_util_Format:method-uppercase:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>{Ext_util_Format:method-uppercase:param_value}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>{Ext_util_Format:method-uppercase:return}</p>\n</div></li></ul></div></div></div><div id='method-usMoney' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Format'>Ext.util.Format</span><br/><a href='source/Format.html#Ext-util-Format-method-usMoney' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Format-method-usMoney' class='name expandable'>usMoney</a>( <span class='pre'>Number/String value</span> ) : String</div><div class='description'><div class='short'>{Ext_util_Format:method-usMoney:desc} ...</div><div class='long'><p>{Ext_util_Format:method-usMoney:desc}</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number/String<div class='sub-desc'><p>{Ext_util_Format:method-usMoney:param_value}</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>{Ext_util_Format:method-usMoney:return}</p>\n</div></li></ul></div></div></div></div></div></div></div>","subclasses":[],"name":"Ext.util.Format","html_meta":{},"tagname":"class","extends":null,"id":"class-Ext.util.Format","alternateClassNames":[],"inheritdoc":null,"files":[{"href":"Format.html#Ext-util-Format","filename":"Format.js"}]});