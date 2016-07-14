Ext.define('PocUsability.view.Cadastro', {
    extend: 'Ext.form.Panel',
    xtype: 'cadastro',
    fullscreen: true,
    requires: [
        'Ext.form.*',
        'Ext.field.*',
        'Ext.field.DatePicker',
        'Ext.Button',
        'Ext.Toolbar',
        'Ext.Spacer'
    ],
    config: 
    {
        title: 'Cadastro',
        scrollable: true,
        layout: {
            type: 'vbox',
            pack: 'center',
            align: 'stretch'
        },
        items: [
                { 
                    xtype: 'fieldset',
                    name: 'info',
                    title: 'Informações do Aluno',
                    defaults: {
                        required: true,
                        labelAlign: 'left',
                        labelWidth: '40%'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'nome',
                            label: 'Nome',
                            autoCapitalize: false
                        },
                        {
                            xtype: 'textfield',
                            name: 'RA',
                            label: 'RA'
                        },
                        {
                            xtype: 'emailfield',
                            name: 'email',
                            label: 'E-mail',
                            placeHolder: 'nome.sobrenome@fatec.sp.gov.br'
                        },
                        {
                            xtype: 'textfield',
                            name: 'cidade',
                            label: 'Cidade',
                            placeHolder: 'Sorocaba'
                        },
                        /*{
                            xtype: 'selectfield',
                            name: 'cursos',
                            label: 'Curso',
                            valueField: 'Selecione o curso',
                            displayField: 'title',
                            store: {
                                data: [
                                    { rank: 'ADS',  title: 'Análise e Desenvolvimento de Sistemas'},
                                    { rank: 'ELE',  title: 'Eletrônica Automotiva'},
                                    { rank: 'MEC',  title: 'Fabricação Mecânica'},
                                    { rank: 'LOG',  title: 'Logística'},
                                    { rank: 'POL',  title: 'Polímeros'},
                                    { rank: 'PROC', title: 'Processos Metalúrgicos'},
                                    { rank: 'PROJ', title: 'Projetos Mecânicos'},
                                    { rank: 'SAU',  title: 'Sistemas Biomédicos'}
                                ]
                            }
                        },*/
                        {
                            xtype: 'datepickerfield',
                            label: 'Dt. Nascimento',
                            name: 'nascimento',
                             picker: {
                                slotOrder: ['day', 'month', 'year']
                            },
                            value: new Date()
                        },
                    ],
                },
                {
                    xtype: 'fieldset',
                    title: 'Curso',
                    instructions: '* Por favor, preencha todos os campos acima',
                    defaults: { xtype: 'radiofield' },
                    items: [
                        { name: 'curso', label: 'Análise e Desenvolvimento de Sistemas', checked: true, value: 'ADS' },
                        { name: 'curso', label: 'Eletrônica Automotiva', value: 'AUT'},
                        { name: 'curso', label: 'Fabricação Mecânica', value: 'FAB'},
                        { name: 'curso', label: 'Logística', value: 'LOG'},
                        { name: 'curso', label: 'Polímeros', value: 'POL'},
                        { name: 'curso', label: 'Processos Metalúrgicos', value: 'PRO'}
                    ]
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
                            text : 'Enviar',
                            flex: 1,
                            ui: 'action',
                            scope: this,
                            handler: function() {
                                Ext.Msg.alert('Dados Enviados', 'Suas Informações foram enviadas com sucesso!', Ext.emptyFn);
                            }
                        },
                        {
                            xtype: 'spacer',
                            flex: 1
                        }                   
                    ]
                },
                {
                    xtype: 'spacer',
                    flex: 1
                },
        ]
    }
});