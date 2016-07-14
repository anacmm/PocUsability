Ext.define('PocUsability.store.Telas', {
    extend: 'Ext.data.Store',

    config: {
        model: 'PocUsability.model.Tela',
        autoLoad: true,
        sorters: 'icone',
        grouper: {
            groupFn: function(record) {
                return record.get('icone')[0];
            }
        },
        proxy: {
            type: 'ajax',
            url: 'telas.json'
        }
    }
});
