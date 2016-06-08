/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='assets/media/',
        vid='assets/media/',
        js='js/',
        fonts = {
            'source-code-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-code-pro:n9,n7,n2,n3,n4,n6,n5:all.js\"></script>',
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>',
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
                            id: 'fond_bimo_prise',
                            type: 'image',
                            rect: ['0px', '1px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/fond_bimo_prise.svg','0px','0px']
                        },
                        {
                            id: 'bimo_prise',
                            type: 'image',
                            rect: ['2px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/bimo_prise.svg','0px','0px']
                        },
                        {
                            id: 'rallumer_bimo',
                            type: 'image',
                            rect: ['0px', '-41px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/rallumer_bimo.svg','0px','0px']
                        },
                        {
                            id: 'fond_bimo_prise3',
                            type: 'image',
                            rect: ['0', '2', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fond_bimo_prise.svg",'0px','0px']
                        },
                        {
                            id: 'fond_bimo_priseCopy2',
                            type: 'image',
                            rect: ['0px', '1px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/fond_bimo_prise.svg','0px','0px']
                        },
                        {
                            id: 'reflexion_charlie2',
                            type: 'image',
                            rect: ['0', '-72px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0.000000',
                            fill: ["rgba(0,0,0,0)",im+"reflexion_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['-6px', '694px', '1034px', '76px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(141,199,63,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'bimo_prise3',
                            type: 'image',
                            rect: ['-1px', '2px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_prise.svg",'0px','0px']
                        },
                        {
                            id: 'rallumer_bimo2',
                            type: 'image',
                            rect: ['2', '-72px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"rallumer_bimo.svg",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['219px', '668px', '576px', '76px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tete_charlie',
                            type: 'image',
                            rect: ['237px', '677px', '56px', '56px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'bimo_casse',
                            type: 'image',
                            rect: ['0px', '-32px', '1024px', '841px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bimo_casse.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['323px', '677px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0.328125px 56px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-family: alice, serif;\">Un si petit truc qui fait autant de dégât ?!</span></p><p style=\"margin: 0px;\"><br></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,35,61,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['323px', '705px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0.328125px 56px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px; font-family: alice, serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 35, 61); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">C'est pas le ciel qui me tombe sur la tête !</p><p style=\"margin: 0px;\"><br></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,35,61,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['323px', '677px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0.328125px 56px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">Il<font face=\"alice, serif\">&nbsp;doit être cassé. Essayons de le réparer.&nbsp;</font></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,35,61,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['323px', '705px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0.328125px 56px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px; font-family: alice, serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 35, 61); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Ça doit être aussi simple qu'un grillepain.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,35,61,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['334px', '705px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 0.328125px 56px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px; font-family: alice, serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 24px; color: rgb(0, 35, 61); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: left; text-indent: 0px; line-height: normal;\">Par où commencer pour l'allumer ?</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(0,35,61,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 18750,
                    autoPlay: true,
                    data: [
                        [
                            "eid153",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_casse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid152",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${bimo_casse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid141",
                            "left",
                            13859,
                            0,
                            "linear",
                            "${bimo_prise3}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid97",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${reflexion_charlie2}",
                            '-72px',
                            '-72px'
                        ],
                        [
                            "eid155",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bimo_casse}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid131",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${TextCopy4}",
                            '1',
                            '0'
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
                            "eid130",
                            "clip",
                            7500,
                            2000,
                            "linear",
                            "${TextCopy4}",
                            [0,0.328125,56,0],
                            [0,431,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid95",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${reflexion_charlie2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid96",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${reflexion_charlie2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid134",
                            "opacity",
                            12993,
                            0,
                            "linear",
                            "${reflexion_charlie2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid145",
                            "opacity",
                            15946,
                            0,
                            "linear",
                            "${reflexion_charlie2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid81",
                            "top",
                            15250,
                            0,
                            "linear",
                            "${rallumer_bimo}",
                            '-41px',
                            '-1px'
                        ],
                        [
                            "eid85",
                            "top",
                            14500,
                            0,
                            "linear",
                            "${fond_bimo_priseCopy2}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid103",
                            "clip",
                            2000,
                            2000,
                            "linear",
                            "${Text}",
                            [0,0.328125,56,0],
                            [0,431,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid143",
                            "top",
                            13859,
                            1641,
                            "linear",
                            "${bimo_prise3}",
                            '2px',
                            '649px'
                        ],
                        [
                            "eid165",
                            "left",
                            16750,
                            0,
                            "linear",
                            "${TextCopy}",
                            '334px',
                            '342px'
                        ],
                        [
                            "eid121",
                            "opacity",
                            6750,
                            500,
                            "linear",
                            "${TextCopy2}",
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
                            "eid127",
                            "top",
                            9500,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '705px',
                            '705px'
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
                            "eid128",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${TextCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid122",
                            "opacity",
                            6750,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid133",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid159",
                            "opacity",
                            16750,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid129",
                            "clip",
                            9500,
                            2000,
                            "linear",
                            "${TextCopy3}",
                            [0,0.328125,56,0],
                            [0,431,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid112",
                            "opacity",
                            6750,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
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
                            "eid100",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid101",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid137",
                            "opacity",
                            12993,
                            0,
                            "linear",
                            "${Rectangle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            15946,
                            0,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid158",
                            "clip",
                            16750,
                            2000,
                            "linear",
                            "${TextCopy}",
                            [0,0.328125,56,0],
                            [0,431,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
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
                            "eid163",
                            "top",
                            16750,
                            0,
                            "linear",
                            "${TextCopy}",
                            '705px',
                            '693px'
                        ],
                        [
                            "eid117",
                            "opacity",
                            0,
                            1500,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid119",
                            "opacity",
                            6750,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid125",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid126",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            16750,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid154",
                            "height",
                            0,
                            0,
                            "linear",
                            "${bimo_casse}",
                            '841px',
                            '841px'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${rallumer_bimo2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid147",
                            "opacity",
                            15946,
                            0,
                            "linear",
                            "${rallumer_bimo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid106",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '705px',
                            '705px'
                        ],
                        [
                            "eid139",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_prise3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid138",
                            "opacity",
                            12993,
                            0,
                            "linear",
                            "${bimo_prise3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid86",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${fond_bimo_priseCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid87",
                            "opacity",
                            14503,
                            0,
                            "linear",
                            "${fond_bimo_priseCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid136",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${fond_bimo_prise3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid151",
                            "opacity",
                            2000,
                            0,
                            "linear",
                            "${fond_bimo_prise3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid135",
                            "opacity",
                            12993,
                            0,
                            "linear",
                            "${fond_bimo_prise3}",
                            '0.45914351851852',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            15946,
                            0,
                            "linear",
                            "${fond_bimo_prise3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid104",
                            "clip",
                            4000,
                            2000,
                            "linear",
                            "${TextCopy2}",
                            [0,0.328125,56,0],
                            [0,431,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("scene_reanimation0_edgeActions.js");
})("EDGE-9827876");
