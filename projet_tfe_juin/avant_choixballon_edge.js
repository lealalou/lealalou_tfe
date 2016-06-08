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
                            id: 'attente_scene',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"attente_scene.svg",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['278px', '656px', '464px', '79px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'interieur_maisonchoix',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"interieur_maisonchoix.svg",'0px','0px']
                        },
                        {
                            id: 'tete',
                            type: 'image',
                            rect: ['289px', '666px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['366px', '668px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Charlie !!! J'ai trouvé une solution !</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['366px', '698px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Viens à la maison.&nbsp;</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'yeux_bimo22',
                            type: 'image',
                            rect: ['709px', '470px', '90px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"yeux_bimo2.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_parleballon',
                            symbolName: 'charlie_parleballon',
                            type: 'rect',
                            rect: ['84px', '224px', '400', '502', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['539px', '664px', '454px', '79px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'tete2',
                            type: 'image',
                            rect: ['548px', '674px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlie',
                            type: 'image',
                            rect: ['548px', '674px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['619px', '676px', '352px', '28px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Oui ?</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['366px', '698px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Alors j'ai fouillée dans ta cuisine</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['366px', '705px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Et j'ai trouvé des ballons.</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy5',
                            type: 'text',
                            rect: ['366px', '698px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​J'ai trouvé que l'on peut voler</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['366px', '705px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​suffisament haut et avec ta maison</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""],
                            transform: [[],[],[],['0.94309']]
                        },
                        {
                            id: 'TextCopy7',
                            type: 'text',
                            rect: ['366px', '698px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Si on en gonfle assez.</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy9',
                            type: 'text',
                            rect: ['366px', '698px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Oh j'avais oublié ces ballons</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy8',
                            type: 'text',
                            rect: ['366px', '705px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​C'était pour mon anniversaire&nbsp;</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy11',
                            type: 'text',
                            rect: ['366px', '698px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Mais personne n'est venu ...</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'TextCopy10',
                            type: 'text',
                            rect: ['366px', '705px', '492px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px -0.806640625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Ecoute testons ! je te fais confiance</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""],
                            transform: [[],[],[],['0.97343']]
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
                    duration: 30578.317193922,
                    autoPlay: true,
                    data: [
                        [
                            "eid189",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid190",
                            "opacity",
                            20930,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid191",
                            "opacity",
                            25254,
                            500,
                            "linear",
                            "${TextCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid179",
                            "top",
                            1824,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid180",
                            "top",
                            22754,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '698px',
                            '705px'
                        ],
                        [
                            "eid221",
                            "left",
                            7476,
                            7774,
                            "linear",
                            "${yeux_bimo22}",
                            '709px',
                            '721px'
                        ],
                        [
                            "eid222",
                            "left",
                            15250,
                            1750,
                            "linear",
                            "${yeux_bimo22}",
                            '721px',
                            '702px'
                        ],
                        [
                            "eid227",
                            "left",
                            18750,
                            4250,
                            "linear",
                            "${yeux_bimo22}",
                            '702px',
                            '716px'
                        ],
                        [
                            "eid132",
                            "clip",
                            15447,
                            2000,
                            "linear",
                            "${TextCopy4}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid87",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid89",
                            "opacity",
                            7858,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid92",
                            "opacity",
                            8750,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            9250,
                            0,
                            "linear",
                            "${Text2}",
                            '1',
                            '0.000000'
                        ],
                        [
                            "eid186",
                            "clip",
                            22754,
                            2000,
                            "linear",
                            "${TextCopy8}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid193",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid194",
                            "left",
                            20930,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '365px',
                            '619px'
                        ],
                        [
                            "eid201",
                            "left",
                            1824,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid213",
                            "left",
                            27578,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '619px',
                            '613px'
                        ],
                        [
                            "eid26",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid34",
                            "left",
                            4476,
                            0,
                            "linear",
                            "${TextCopy}",
                            '299px',
                            '366px'
                        ],
                        [
                            "eid107",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid108",
                            "opacity",
                            9325,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "opacity",
                            13649,
                            500,
                            "linear",
                            "${TextCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid8",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid12",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${tete}",
                            '0',
                            '1'
                        ],
                        [
                            "eid36",
                            "opacity",
                            6976,
                            500,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid117",
                            "top",
                            1824,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid126",
                            "top",
                            11149,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '676px',
                            '705px'
                        ],
                        [
                            "eid104",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid115",
                            "top",
                            9325,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '697px',
                            '676px'
                        ],
                        [
                            "eid197",
                            "opacity",
                            1824,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid198",
                            "opacity",
                            27578,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid199",
                            "opacity",
                            30078,
                            500,
                            "linear",
                            "${TextCopy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid39",
                            "top",
                            7476,
                            0,
                            "linear",
                            "${charlie_parleballon}",
                            '224px',
                            '224px'
                        ],
                        [
                            "eid119",
                            "opacity",
                            1824,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            11149,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            13649,
                            500,
                            "linear",
                            "${TextCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid208",
                            "clip",
                            25754,
                            2000,
                            "linear",
                            "${TextCopy11}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid68",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${interieur_maisonchoix}",
                            '0',
                            '0'
                        ],
                        [
                            "eid71",
                            "opacity",
                            7476,
                            0,
                            "linear",
                            "${interieur_maisonchoix}",
                            '0',
                            '1'
                        ],
                        [
                            "eid103",
                            "left",
                            9325,
                            0,
                            "linear",
                            "${tete2}",
                            '548px',
                            '548px'
                        ],
                        [
                            "eid80",
                            "left",
                            7858,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '548px',
                            '548px'
                        ],
                        [
                            "eid133",
                            "left",
                            1824,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid150",
                            "left",
                            15447,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '619px',
                            '605px'
                        ],
                        [
                            "eid32",
                            "left",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '278px',
                            '278px'
                        ],
                        [
                            "eid219",
                            "top",
                            7476,
                            3524,
                            "linear",
                            "${yeux_bimo22}",
                            '470px',
                            '487px'
                        ],
                        [
                            "eid220",
                            "top",
                            11000,
                            3000,
                            "linear",
                            "${yeux_bimo22}",
                            '487px',
                            '467px'
                        ],
                        [
                            "eid225",
                            "top",
                            14000,
                            4750,
                            "linear",
                            "${yeux_bimo22}",
                            '467px',
                            '491px'
                        ],
                        [
                            "eid226",
                            "top",
                            18750,
                            2250,
                            "linear",
                            "${yeux_bimo22}",
                            '491px',
                            '468px'
                        ],
                        [
                            "eid228",
                            "top",
                            21000,
                            4408,
                            "linear",
                            "${yeux_bimo22}",
                            '468px',
                            '451px'
                        ],
                        [
                            "eid229",
                            "top",
                            25408,
                            5170,
                            "linear",
                            "${yeux_bimo22}",
                            '451px',
                            '487px'
                        ],
                        [
                            "eid67",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${yeux_bimo22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid70",
                            "opacity",
                            7476,
                            0,
                            "linear",
                            "${yeux_bimo22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid18",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid20",
                            "opacity",
                            4476,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17",
                            "opacity",
                            6976,
                            500,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid112",
                            "clip",
                            9325,
                            2000,
                            "linear",
                            "${TextCopy2}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid66",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_parleballon}",
                            '0',
                            '0'
                        ],
                        [
                            "eid69",
                            "opacity",
                            7476,
                            0,
                            "linear",
                            "${charlie_parleballon}",
                            '0',
                            '1'
                        ],
                        [
                            "eid181",
                            "opacity",
                            1824,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid182",
                            "opacity",
                            22754,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid183",
                            "opacity",
                            25254,
                            500,
                            "linear",
                            "${TextCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid200",
                            "clip",
                            27578,
                            2000,
                            "linear",
                            "${TextCopy10}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid169",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid170",
                            "left",
                            18194,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '365px',
                            '619px'
                        ],
                        [
                            "eid28",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '366px',
                            '366px'
                        ],
                        [
                            "eid141",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid142",
                            "left",
                            14149,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '365px',
                            '619px'
                        ],
                        [
                            "eid77",
                            "top",
                            7858,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '664px',
                            '664px'
                        ],
                        [
                            "eid96",
                            "top",
                            9325,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '664px',
                            '664px'
                        ],
                        [
                            "eid33",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '656px',
                            '656px'
                        ],
                        [
                            "eid27",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid22",
                            "top",
                            4476,
                            0,
                            "linear",
                            "${TextCopy}",
                            '698px',
                            '699px'
                        ],
                        [
                            "eid35",
                            "top",
                            4588,
                            0,
                            "linear",
                            "${TextCopy}",
                            '699px',
                            '697px'
                        ],
                        [
                            "eid2",
                            "clip",
                            3000,
                            2000,
                            "linear",
                            "${Text}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid195",
                            "top",
                            1824,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid196",
                            "top",
                            27578,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '698px',
                            '705px'
                        ],
                        [
                            "eid211",
                            "scaleX",
                            27578,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '0.97343',
                            '0.97343'
                        ],
                        [
                            "eid148",
                            "scaleX",
                            17250,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '0.94309',
                            '0.94309'
                        ],
                        [
                            "eid209",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid210",
                            "left",
                            25754,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '365px',
                            '619px'
                        ],
                        [
                            "eid205",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid206",
                            "opacity",
                            25754,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid207",
                            "opacity",
                            30078,
                            500,
                            "linear",
                            "${TextCopy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid137",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid138",
                            "opacity",
                            14149,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "opacity",
                            17694,
                            500,
                            "linear",
                            "${TextCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid30",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tete}",
                            '289px',
                            '289px'
                        ],
                        [
                            "eid79",
                            "top",
                            7858,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid123",
                            "left",
                            1824,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid124",
                            "left",
                            11149,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '365px',
                            '619px'
                        ],
                        [
                            "eid192",
                            "clip",
                            20930,
                            2000,
                            "linear",
                            "${TextCopy9}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid160",
                            "opacity",
                            1824,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid162",
                            "opacity",
                            15447,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            17694,
                            500,
                            "linear",
                            "${TextCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid76",
                            "height",
                            7858,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid93",
                            "height",
                            9325,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid29",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '668px',
                            '668px'
                        ],
                        [
                            "eid24",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${Text}",
                            '668px',
                            '669px'
                        ],
                        [
                            "eid25",
                            "width",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '464px',
                            '464px'
                        ],
                        [
                            "eid168",
                            "clip",
                            18194,
                            2000,
                            "linear",
                            "${TextCopy7}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid184",
                            "left",
                            1824,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid185",
                            "left",
                            22754,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '365px',
                            '619px'
                        ],
                        [
                            "eid81",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '0'
                        ],
                        [
                            "eid82",
                            "opacity",
                            7858,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid91",
                            "opacity",
                            8750,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid175",
                            "opacity",
                            20930,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid215",
                            "opacity",
                            30078,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid74",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid75",
                            "opacity",
                            7858,
                            500,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid90",
                            "opacity",
                            8750,
                            500,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid94",
                            "opacity",
                            9325,
                            500,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid171",
                            "opacity",
                            20293,
                            500,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid176",
                            "opacity",
                            20930,
                            500,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid214",
                            "opacity",
                            30078,
                            500,
                            "linear",
                            "${RoundRect2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid163",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid164",
                            "top",
                            18194,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '698px',
                            '676px'
                        ],
                        [
                            "eid140",
                            "clip",
                            14149,
                            2000,
                            "linear",
                            "${TextCopy5}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid122",
                            "clip",
                            11149,
                            2000,
                            "linear",
                            "${TextCopy3}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid16",
                            "clip",
                            4476,
                            2000,
                            "linear",
                            "${TextCopy}",
                            [0,-0.806640625,28,0],
                            [0,492,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid203",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid204",
                            "top",
                            25754,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '698px',
                            '676px'
                        ],
                        [
                            "eid127",
                            "top",
                            1824,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid128",
                            "top",
                            15447,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '698px',
                            '705px'
                        ],
                        [
                            "eid165",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid166",
                            "opacity",
                            18194,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            20293,
                            500,
                            "linear",
                            "${TextCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid135",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid136",
                            "top",
                            14149,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '698px',
                            '676px'
                        ],
                        [
                            "eid78",
                            "left",
                            7858,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '539px',
                            '539px'
                        ],
                        [
                            "eid95",
                            "left",
                            9325,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '539px',
                            '539px'
                        ],
                        [
                            "eid7",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid11",
                            "opacity",
                            2500,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            6976,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid187",
                            "top",
                            0,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '698px',
                            '698px'
                        ],
                        [
                            "eid188",
                            "top",
                            20930,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '698px',
                            '676px'
                        ],
                        [
                            "eid101",
                            "top",
                            9325,
                            0,
                            "linear",
                            "${tete2}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid38",
                            "left",
                            7476,
                            0,
                            "linear",
                            "${charlie_parleballon}",
                            '84px',
                            '84px'
                        ],
                        [
                            "eid31",
                            "top",
                            0,
                            0,
                            "linear",
                            "${tete}",
                            '666px',
                            '666px'
                        ],
                        [
                            "eid110",
                            "left",
                            0,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '365px',
                            '365px'
                        ],
                        [
                            "eid116",
                            "left",
                            9325,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '366px',
                            '619px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid21",
                            "opacity",
                            3000,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            6976,
                            500,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid97",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid102",
                            "opacity",
                            9325,
                            500,
                            "linear",
                            "${tete2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid172",
                            "opacity",
                            20293,
                            500,
                            "linear",
                            "${tete2}",
                            '1',
                            '0'
                        ],
                            [ "eid216", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${charlie_parleballon}', [] ] ],
                            [ "eid217", "trigger", 7858, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parleballon}', [] ] ],
                            [ "eid218", "trigger", 8488, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${charlie_parleballon}', [] ] ],
                            [ "eid230", "trigger", 20930, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parleballon}', [] ] ],
                            [ "eid231", "trigger", 22712, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parleballon}', [] ] ],
                            [ "eid232", "trigger", 25754, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parleballon}', [] ] ],
                            [ "eid233", "trigger", 27578, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parleballon}', [] ] ]
                    ]
                }
            },
            "charlie_parleballon": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '502px', '400px', '0px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'Rectangle',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            id: 'charlie_parle2',
                            type: 'image',
                            rect: ['0px', '10px', '1619px', '492px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/charlie_parle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '400px', '502px']
                        }
                    }
                },
                timeline: {
                    duration: 1660.4040240352,
                    autoPlay: true,
                    data: [
                        [
                            "eid41",
                            "top",
                            0,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid43",
                            "top",
                            110,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '10px',
                            '13px'
                        ],
                        [
                            "eid46",
                            "top",
                            214,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '13px',
                            '10px'
                        ],
                        [
                            "eid47",
                            "top",
                            318,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '10px',
                            '13px'
                        ],
                        [
                            "eid50",
                            "top",
                            410,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '13px',
                            '10px'
                        ],
                        [
                            "eid51",
                            "top",
                            660,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '10px',
                            '13px'
                        ],
                        [
                            "eid54",
                            "top",
                            910,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '13px',
                            '10px'
                        ],
                        [
                            "eid55",
                            "top",
                            1160,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '10px',
                            '13px'
                        ],
                        [
                            "eid61",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '13px',
                            '10px'
                        ],
                        [
                            "eid62",
                            "top",
                            1360,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '10px',
                            '13px'
                        ],
                        [
                            "eid63",
                            "top",
                            1464,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '13px',
                            '10px'
                        ],
                        [
                            "eid64",
                            "top",
                            1568,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '10px',
                            '13px'
                        ],
                        [
                            "eid65",
                            "top",
                            1660,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '13px',
                            '10px'
                        ],
                        [
                            "eid40",
                            "left",
                            0,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid42",
                            "left",
                            110,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0px',
                            '-404px'
                        ],
                        [
                            "eid44",
                            "left",
                            214,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '-404px',
                            '0px'
                        ],
                        [
                            "eid45",
                            "left",
                            318,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0px',
                            '-404px'
                        ],
                        [
                            "eid48",
                            "left",
                            410,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '-404px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "left",
                            660,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0px',
                            '-404px'
                        ],
                        [
                            "eid52",
                            "left",
                            910,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '-404px',
                            '0px'
                        ],
                        [
                            "eid53",
                            "left",
                            1160,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0px',
                            '-404px'
                        ],
                        [
                            "eid56",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '-404px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "left",
                            1360,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0px',
                            '-404px'
                        ],
                        [
                            "eid58",
                            "left",
                            1464,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '-404px',
                            '0px'
                        ],
                        [
                            "eid59",
                            "left",
                            1568,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0px',
                            '-404px'
                        ],
                        [
                            "eid60",
                            "left",
                            1660,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '-404px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("avant_choixballon_edgeActions.js");
})("EDGE-14341040");
