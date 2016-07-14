Ext.define('PocUsability.view.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'mainview',

    requires: [
        'PocUsability.view.Tela',
        'PocUsability.view.Lista',
        'PocUsability.view.Cadastro',
        'PocUsability.view.Video',
        'PocUsability.view.Mais',
        'PocUsability.view.Mostra'
    ],

    config: { 
        autoDestroy: false,

        navigationBar: {
            ui: 'light',
            items: [
               /* {
                    xtype: 'button',
                    id: 'editButton',
                    text: 'Edit',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                },*/
                {
                    xtype: 'button',
                    id: 'saveButton',
                    text: 'Save',
                    //ui: 'light',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]
        },

        items: [
            { xtype: 'tela' }
        ]
    }
});
