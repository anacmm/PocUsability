Ext.define('PocUsability.view.Video', {
    extend: 'Ext.Video',
    xtype: 'pocvideo',
    fullscreen: true,
    config: 
    {
        title: 'Vídeo',
        scrollable: true,
        maxWidth: '100%',
        maxHeight: '100%',
        url: [
            'http://www.youtube.com/watch?v=HnOpPVR3OXg'
        ],
        posterUrl: 'resources/images/fatec.jpg'
    }
});