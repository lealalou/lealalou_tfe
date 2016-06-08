/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='assets/images/',
        aud='assets/media/',
        vid='assets/media/',
        js='js/',
        fonts = {
            'source-code-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-code-pro:n9,n7,n2,n3,n4,n6,n5:all.js\"></script>',
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'bimo_casse',
                            type: 'image',
                            rect: ['0px', '2px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bimo_casse.svg",'0px','0px']
                        },
                        {
                            id: 'reflexion_charlie',
                            type: 'image',
                            rect: ['0px', '2px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"reflexion_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'Text1',
                            type: 'text',
                            rect: ['200px', '161px', '623px', '94px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; color: rgb(255, 255, 255); font-size: 30px;\">Un si petit truc qui fait autant de dégat ? je croyais que c’etait le ciel qui me tombé sur la tête !</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['219px', '106px', '623px', '94px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: source-sans-pro, sans-serif; color: rgb(255, 255, 255); font-size: 30px;\">A mon avis il est complètement mort, </span></p><p style=\"margin: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(255, 255, 255); font-size: 30px;\">mais on peut toujours essayer de le rallumer,&nbsp;\n</span></p><p style=\"margin: 0px;\"><span style=\"font-family: source-sans-pro, sans-serif; color: rgb(255, 255, 255); font-size: 30px;\">ca doit bien etre aussi simple à allumer que mon gris pain ! &nbsp;</span><span style=\"font-size: 30px; color: rgb(255, 255, 255);\">Ramassons le !</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['219px', '193px', '623px', '94px', 'auto', 'auto'],
                            opacity: '0.0012704044715447',
                            text: "<p style=\"margin: 0px;\">​<font color=\"#ffffff\" face=\"source-sans-pro, sans-serif\"><span style=\"font-size: 30px;\">Par ou commencer pour réveiller ce petit truc ?&nbsp;</span></font></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                        },
                        {
                            id: 'fond_bimo_prise',
                            type: 'image',
                            rect: ['0px', '1px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fond_bimo_prise.svg",'0px','0px']
                        },
                        {
                            id: 'bimo_prise',
                            type: 'image',
                            rect: ['2px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_prise.svg",'0px','0px']
                        },
                        {
                            id: 'rallumer_bimo',
                            type: 'image',
                            rect: ['0px', '-2px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rallumer_bimo.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 18500,
                    autoPlay: true,
                    data: [
                        [
                            "eid23",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid14",
                            "opacity",
                            7000,
                            500,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            14000,
                            500,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid58",
                            "top",
                            14500,
                            0,
                            "linear",
                            "${fond_bimo_prise}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid44",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${rallumer_bimo}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid57",
                            "top",
                            15250,
                            0,
                            "linear",
                            "${rallumer_bimo}",
                            '-2px',
                            '-1px'
                        ],
                        [
                            "eid41",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rallumer_bimo}",
                            '0',
                            '0'
                        ],
                        [
                            "eid43",
                            "opacity",
                            15250,
                            0,
                            "linear",
                            "${rallumer_bimo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${fond_bimo_prise}",
                            '0',
                            '0'
                        ],
                        [
                            "eid34",
                            "opacity",
                            14503,
                            0,
                            "linear",
                            "${fond_bimo_prise}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${reflexion_charlie}",
                            '0',
                            '0'
                        ],
                        [
                            "eid6",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${reflexion_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${Text2}",
                            '106px',
                            '106px'
                        ],
                        [
                            "eid40",
                            "top",
                            14510,
                            740,
                            "linear",
                            "${bimo_prise}",
                            '0px',
                            '229px'
                        ],
                        [
                            "eid20",
                            "left",
                            7000,
                            0,
                            "linear",
                            "${Text2}",
                            '219px',
                            '219px'
                        ],
                        [
                            "eid35",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_prise}",
                            '0',
                            '0'
                        ],
                        [
                            "eid36",
                            "opacity",
                            14510,
                            0,
                            "linear",
                            "${bimo_prise}",
                            '0',
                            '1'
                        ],
                        [
                            "eid55",
                            "left",
                            18500,
                            0,
                            "linear",
                            "${bimo_prise}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_casse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${bimo_casse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text1}",
                            '0',
                            '0'
                        ],
                        [
                            "eid9",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${Text1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid12",
                            "opacity",
                            5932,
                            500,
                            "linear",
                            "${Text1}",
                            '1',
                            '0'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("scene_reanimation_edgeActions.js");
})("EDGE-9827876");
