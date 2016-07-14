Ext.define('PocUsability.controller.Application', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            tela: null,
            telas: 'tela',
            artigos: 'artigos',
            mostraArtigos: 'mostraArtigo'
        },

        control: {
            telas: {
                itemtap: 'onTelaSelect'
            },
            artigos: {
                itemtap: 'onArtigoSelect'
            }
        }
    },

    onTelaSelect: function(list, index, node, record) {
        this.tela = Ext.create(record.data.tela);

        this.getMain().push(this.tela);  
    },

    onArtigoSelect: function(list, index, node, record) {
        if (!this.mostraArtigos) {
            this.mostraArtigos = Ext.create('PocUsability.view.Mostra');
        }

        // Bind the record onto the show tela view
        this.mostraArtigos.setRecord(record);

        this.getMain().push(this.mostraArtigos);  
    }
});
