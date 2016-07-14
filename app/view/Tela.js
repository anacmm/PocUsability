Ext.define('PocUsability.view.Tela', {
    extend: 'Ext.List',
    xtype: 'tela',

    config: {
        title: 'Usabilidade Sencha',
        cls: Ext.os.is.Phone ? 'x-telas' : 'x-show-tela',
        store: 'Telas',
        itemTpl:  Ext.os.is.Phone ?  [
            '<div class="headshot" style="background-image:url(resources/images/icones/{icone}); background-position: center center;"></div>',
            '{name}',
            '<span>{title}</span>'
        ].join('') :
        [
            '<div class="top">',
                '<div class="headshot" style="background-image:url(resources/images/icones/{icone}); background-position: center center;"></div>',
                '<div class="name">{name}<span> <b>{title}</b> <p> {descricao}</span></div>',
            '</div>'
        ].join('')
    }
});
