Ext.define('PocUsability.model.Artigo', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'titulo',
            'autor',
            'orientador',
            'foto',
            'resumo'
        ]
    }
});
