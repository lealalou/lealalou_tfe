/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'alice, serif': '<script src=\"http://use.edgefonts.net/alice:n4:all.js\"></script>'        },
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
                            id: 'fond_maison_jour',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"fond_maison_jour.svg",'0px','0px']
                        },
                        {
                            id: 'ciel',
                            type: 'image',
                            rect: ['0', '-904px', '1024px', '1695px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"ciel.svg",'0px','0px']
                        },
                        {
                            id: 'maison_bas',
                            type: 'image',
                            rect: ['331px', '177px', '273px', '468px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"maison_bas.svg",'0px','0px']
                        },
                        {
                            id: 'maison_haut',
                            type: 'image',
                            rect: ['333px', '175px', '268px', '468px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"maison_haut.svg",'0px','0px'],
                            transform: [[],['10']]
                        },
                        {
                            id: 'maison_bleu',
                            type: 'image',
                            rect: ['527px', '391px', '38px', '65px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"maison_bleu.svg",'0px','0px']
                        },
                        {
                            id: 'dome_lahaut',
                            type: 'image',
                            rect: ['0', '7', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"dome_lahaut.svg",'0px','0px']
                        },
                        {
                            id: 'vertige',
                            type: 'image',
                            rect: ['0', '4px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"vertige.svg",'0px','0px']
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['183px', '655px', '650px', '87px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['289px', '685px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -2.4970703125px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​J'avoue avoir quand même un peu le vertige ...</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "italic", "break-word", "nowrap"]
                        },
                        {
                            id: 'tete_charlie',
                            type: 'image',
                            rect: ['200px', '669px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1024px', '768px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 29163,
                    autoPlay: true,
                    data: [
                        [
                            "eid32",
                            "left",
                            0,
                            1729,
                            "easeInQuad",
                            "${maison_haut}",
                            '333px',
                            '333px'
                        ],
                        [
                            "eid36",
                            "left",
                            1729,
                            1731,
                            "easeInQuad",
                            "${maison_haut}",
                            '333px',
                            '286px'
                        ],
                        [
                            "eid51",
                            "left",
                            3460,
                            3040,
                            "easeInQuad",
                            "${maison_haut}",
                            '286px',
                            '423px'
                        ],
                        [
                            "eid74",
                            "left",
                            7250,
                            8750,
                            "easeInQuad",
                            "${maison_haut}",
                            '210px',
                            '605px'
                        ],
                        [
                            "eid31",
                            "top",
                            0,
                            1729,
                            "easeInQuad",
                            "${maison_haut}",
                            '175px',
                            '150px'
                        ],
                        [
                            "eid35",
                            "top",
                            1729,
                            1731,
                            "easeInQuad",
                            "${maison_haut}",
                            '150px',
                            '106px'
                        ],
                        [
                            "eid50",
                            "top",
                            3460,
                            3040,
                            "easeInQuad",
                            "${maison_haut}",
                            '106px',
                            '-551px'
                        ],
                        [
                            "eid73",
                            "top",
                            7250,
                            8750,
                            "easeInQuad",
                            "${maison_haut}",
                            '815px',
                            '-307px'
                        ],
                        [
                            "eid11",
                            "left",
                            0,
                            3460,
                            "easeInQuad",
                            "${maison_bas}",
                            '331px',
                            '298px'
                        ],
                        [
                            "eid53",
                            "left",
                            3460,
                            3040,
                            "easeInQuad",
                            "${maison_bas}",
                            '298px',
                            '411px'
                        ],
                        [
                            "eid72",
                            "left",
                            7250,
                            8750,
                            "easeInQuad",
                            "${maison_bas}",
                            '203px',
                            '605px'
                        ],
                        [
                            "eid115",
                            "height",
                            0,
                            0,
                            "easeInQuad",
                            "${maison_haut}",
                            '468px',
                            '468px'
                        ],
                        [
                            "eid69",
                            "height",
                            7250,
                            0,
                            "easeInQuad",
                            "${maison_haut}",
                            '468px',
                            '292px'
                        ],
                        [
                            "eid12",
                            "top",
                            0,
                            1730,
                            "easeInQuad",
                            "${maison_bas}",
                            '177px',
                            '144px'
                        ],
                        [
                            "eid14",
                            "top",
                            1730,
                            1730,
                            "easeInQuad",
                            "${maison_bas}",
                            '144px',
                            '106px'
                        ],
                        [
                            "eid52",
                            "top",
                            3460,
                            3040,
                            "easeInQuad",
                            "${maison_bas}",
                            '106px',
                            '-552px'
                        ],
                        [
                            "eid71",
                            "top",
                            7250,
                            8750,
                            "easeInQuad",
                            "${maison_bas}",
                            '815px',
                            '-307px'
                        ],
                        [
                            "eid107",
                            "top",
                            21163,
                            8000,
                            "easeInQuad",
                            "${maison_bleu}",
                            '391px',
                            '208px'
                        ],
                        [
                            "eid102",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${dome_lahaut}",
                            '0',
                            '0'
                        ],
                        [
                            "eid101",
                            "opacity",
                            21163,
                            0,
                            "easeInQuad",
                            "${dome_lahaut}",
                            '0',
                            '1'
                        ],
                        [
                            "eid57",
                            "top",
                            7000,
                            0,
                            "easeInQuad",
                            "${ciel}",
                            '-904px',
                            '-904px'
                        ],
                        [
                            "eid34",
                            "rotateZ",
                            0,
                            1729,
                            "easeInQuad",
                            "${maison_haut}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid37",
                            "rotateZ",
                            1729,
                            1731,
                            "easeInQuad",
                            "${maison_haut}",
                            '10deg',
                            '-10deg'
                        ],
                        [
                            "eid54",
                            "rotateZ",
                            3460,
                            3040,
                            "easeInQuad",
                            "${maison_haut}",
                            '-10deg',
                            '10deg'
                        ],
                        [
                            "eid82",
                            "rotateZ",
                            7250,
                            3615,
                            "easeInQuad",
                            "${maison_haut}",
                            '10deg',
                            '0deg'
                        ],
                        [
                            "eid85",
                            "rotateZ",
                            10865,
                            904,
                            "easeInQuad",
                            "${maison_haut}",
                            '0deg',
                            '-5deg'
                        ],
                        [
                            "eid100",
                            "rotateZ",
                            11769,
                            2231,
                            "easeInQuad",
                            "${maison_haut}",
                            '-5deg',
                            '10deg'
                        ],
                        [
                            "eid129",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '0'
                        ],
                        [
                            "eid130",
                            "opacity",
                            17500,
                            500,
                            "easeInQuad",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid132",
                            "opacity",
                            20662,
                            501,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid127",
                            "opacity",
                            20662,
                            501,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid108",
                            "left",
                            21163,
                            8000,
                            "easeInQuad",
                            "${maison_bleu}",
                            '527px',
                            '493px'
                        ],
                        [
                            "eid116",
                            "height",
                            0,
                            0,
                            "easeInQuad",
                            "${maison_bas}",
                            '468px',
                            '468px'
                        ],
                        [
                            "eid67",
                            "height",
                            7250,
                            0,
                            "easeInQuad",
                            "${maison_bas}",
                            '468px',
                            '292px'
                        ],
                        [
                            "eid124",
                            "clip",
                            17750,
                            1250,
                            "linear",
                            "${Text}",
                            [0,-2.4970703125,28,0],
                            [0,494,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid117",
                            "width",
                            0,
                            0,
                            "easeInQuad",
                            "${maison_bas}",
                            '273px',
                            '273px'
                        ],
                        [
                            "eid68",
                            "width",
                            7250,
                            0,
                            "easeInQuad",
                            "${maison_bas}",
                            '273px',
                            '170px'
                        ],
                        [
                            "eid110",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${vertige}",
                            '0',
                            '0'
                        ],
                        [
                            "eid113",
                            "opacity",
                            16000,
                            0,
                            "easeInQuad",
                            "${vertige}",
                            '0',
                            '1'
                        ],
                        [
                            "eid118",
                            "opacity",
                            21171,
                            0,
                            "easeInQuad",
                            "${vertige}",
                            '1',
                            '0'
                        ],
                        [
                            "eid103",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${maison_bleu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid104",
                            "opacity",
                            21163,
                            0,
                            "easeInQuad",
                            "${maison_bleu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${RoundRect2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid122",
                            "opacity",
                            17500,
                            500,
                            "easeInQuad",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            20662,
                            501,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid128",
                            "opacity",
                            21163,
                            7,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid114",
                            "width",
                            0,
                            0,
                            "easeInQuad",
                            "${maison_haut}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid70",
                            "width",
                            7250,
                            0,
                            "easeInQuad",
                            "${maison_haut}",
                            '268px',
                            '170px'
                        ],
                        [
                            "eid56",
                            "opacity",
                            0,
                            0,
                            "easeInQuad",
                            "${ciel}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid58",
                            "opacity",
                            7000,
                            0,
                            "easeInQuad",
                            "${ciel}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("lahaut_edgeActions.js");
})("EDGE-42833803");
