Ext.define('PocUsability.view.Mais', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.Button'
    ],
    xtype: 'mais',
    fullscreen: true,
    config: 
    {
        title: 'FATEC - Sorocaba',
        scrollable: true,
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'stretch'
        },
        items: [ {
             cls: 'x-fatec',
             html: ' <big> <b>FATEC José Crespo Gonzales </b> </big> <p> <br> <img src="resources/images/predio.jpg" alt="Fatec Sorocaba"> <br> <br>  <p> A Faculdade de Tecnologia de Sorocaba foi criada em 20/5/1970 pelo então Governador do Estado de São Paulo, Dr. Roberto Costa de Abreu Sodré. O primeiro dia letivo na Fatec Sorocaba ocorreu no dia 7/6/1971, nas instalações da atual Etec Prof. Rubens de Faria e Souza com 66 alunos que iniciavam seus estudos no então curso técnico superior de Oficinas, atualmente Tecnologia em Fabricação Mecânica. Em 1973, fixou-se em seu atual Campus. Considerada, segundo avaliação do MEC (IGC 2009), a melhor Faculdade de Tecnologia do Brasil. <p> <br> Visite o site completo em: <a href="http://www.fatecsorocaba.edu.br"  target="_blank">www.fatecsorocaba.edu.br</a>' 
        }
        ]
    }
});