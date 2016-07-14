Ext.define('PocUsability.view.Lista', {
    extend: 'Ext.List',
    xtype: 'artigos',

    config: {
        title: 'Artigos dos Alunos',
        store: 'Artigos',
        cls: 'x-artigos',
        itemTpl:  [
            '<div class="top">',
                '<div class="icone" style="background-image:url(resources/images/icones/5.png); background-position: center center;"></div>',
                '<div class="artigo"><span> <b> {titulo}</b> </span> <p> {autor} </div>',
            '</div>'
        ].join('') 
    }
});
