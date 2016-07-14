Ext.define('PocUsability.store.Artigos', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PocUsability.model.Artigo',
        autoLoad: true,
        sorters: 'autor',
        grouper: {
            groupFn: function(record) {
                return record.get('autor')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: 'artigos.json'
        }
    }
});
