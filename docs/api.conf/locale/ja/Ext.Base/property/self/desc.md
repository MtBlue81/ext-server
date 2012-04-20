Get the reference to the current class from which this object was instantiated. Unlike
<a href="#!/api/Ext.Base-method-statics" rel="Ext.Base-method-statics" class="docClass" id="ext-gen1668">statics</a>,
`this.self` is scope-dependent and it's meant to be used for dynamic inheritance. See
<a href="#!/api/Ext.Base-method-statics" rel="Ext.Base-method-statics" class="docClass" id="ext-gen1668">statics</a>
for a detailed comparison

    Ext.define('My.Cat', {
        statics: {
            speciesName: 'Cat' // My.Cat.speciesName = 'Cat'
        },

        constructor: function() {
            alert(this.self.speciesName); // dependent on 'this'
        },

        clone: function() {
            return new this.self();
        }
    });


    Ext.define('My.SnowLeopard', {
        extend: 'My.Cat',
        statics: {
            speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'
        }
    });

    var cat = new My.Cat();                     // alerts 'Cat'
    var snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'

    var clone = snowLeopard.clone();
    alert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'

