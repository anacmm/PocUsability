Ext.define('PocUsability.view.Mostra', {
    extend: 'Ext.Container',
    xtype: 'mostraArtigo',
    config: {
        title: 'Arquivo Acadêmico',
        scrollable: true,
        layout: 'vbox',

        items: [
            {
                id: 'content',
                cls: 'x-mostra',
                tpl: [
                    '<div class="top">',
                        '<div class="foto" style="background-image:url(resources/images/alunos/{foto}); background-position: center center;"></div>',
                        '<div class="artigo"><span> <b>{titulo}</b> </span> <p> Autor: {autor} <p>  Orientador: {orientador}</div>',
                        '<div class="resumo"> {resumo} </div>',
                    '</div>'
                ].join('')
            }, 
            {
                xtype: 'container',
                layout: {
                    type: 'hbox',
                    pack: 'center',
                    align: 'stretch'
                },
                items: 
                [
                    {
                        xtype: 'spacer',
                        flex: 1
                    },
                    {
                        xtype: 'button',
                        text : 'Download',
                        flex: 1,
                        ui: 'decline',
                        scope: this,
                        handler: function() {
                            Ext.Msg.confirm( 'Confirme', 'Deseja realmete realizar o download do arquivo completo?',  function(answer){ if(answer=='yes') {  Ext.Msg.alert('Download Concluído', 'Artigo baixado com sucesso!', Ext.emptyFn); } }, this);
                        }
                    },
                    {
                        xtype: 'spacer',
                        flex: 1
                    }                   
                ]
            }
        ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
            this.down('#content').setData(newRecord.data);
        }
    }
});
