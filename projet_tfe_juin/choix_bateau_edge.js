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
                            id: 'scene_rencontre_bateau',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"scene_rencontre_bateau.svg",'0px','0px']
                        },
                        {
                            id: 'attente_scene',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"attente_scene.svg",'0px','0px']
                        },
                        {
                            id: 'fond_bateau2',
                            type: 'image',
                            rect: ['0', '-5px', '1024px', '3729px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fond_bateau2.svg",'0px','0px']
                        },
                        {
                            id: 'bateau2',
                            type: 'image',
                            rect: ['352px', '82px', '344px', '548px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bateau2.svg",'0px','0px']
                        },
                        {
                            id: 'porte_dome',
                            type: 'image',
                            rect: ['0px', '-6px', '1024px', '774px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"porte_dome.svg",'0px','0px','100%','100%', 'no-repeat']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['273px', '121px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -0.82568359375px 57px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​L'histoire continue ...<span style=\"font-size: 45px;\">​</span></p>",
                            align: "left",
                            font: ['alice, serif', [50, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
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
                            id: 'tete',
                            type: 'image',
                            rect: ['289px', '666px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete.svg",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['360px', '669px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Charlie ! J'ai trouvé une solution !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['353px', '696px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Viens, je suis juste au bout du jardin.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'Text3Copy3',
                            type: 'text',
                            rect: ['360px', '669px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Oui ?</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy2',
                            type: 'text',
                            rect: ['353px', '696px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Oh ! Mon bateau ?!</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'Text3Copy5',
                            type: 'text',
                            rect: ['360px', '669px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Oui ! je suis allée dans ta remise</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy6',
                            type: 'text',
                            rect: ['360px', '669px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Du coup j'ai regardé comment&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy4',
                            type: 'text',
                            rect: ['353px', '696px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​et je l'ai trouvé. Il ne marchais plus</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'Text3Copy7',
                            type: 'text',
                            rect: ['353px', '696px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​le réparer dans ma tête et voilà !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'tete_charlie',
                            type: 'image',
                            rect: ['287px', '656px', '471px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'Text3Copy12',
                            type: 'text',
                            rect: ['360px', '669px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Du coup j'ai regardé comment&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy11',
                            type: 'text',
                            rect: ['353px', '697px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​bateau de pèche de mon père .</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'Text3Copy10',
                            type: 'text',
                            rect: ['353px', '667px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Au vraiment ! Génial c'était l'ancien</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'Text3Copy14',
                            type: 'text',
                            rect: ['353px', '697px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Je prends des affaires et c'est partie !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'Text3Copy13',
                            type: 'text',
                            rect: ['353px', '667px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Ne perdons pas de temps alors !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'yeux_bimo2',
                            type: 'image',
                            rect: ['481px', '427px', '68px', '19px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"yeux_bimo2.svg",'0px','0px']
                        },
                        {
                            id: 'Text3Copy9',
                            type: 'text',
                            rect: ['360px', '669px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Oh regarde !!!</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy8',
                            type: 'text',
                            rect: ['353px', '696px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Je vois quelque chose au loin !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'Text3Copy16',
                            type: 'text',
                            rect: ['360px', '669px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​*Reflechie*</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy15',
                            type: 'text',
                            rect: ['353px', '696px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​On dirait un escalier !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
                        },
                        {
                            id: 'Text3Copy18',
                            type: 'text',
                            rect: ['360px', '669px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Oui ! On dirait bien.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3Copy17',
                            type: 'text',
                            rect: ['353px', '696px', '395px', '28px', 'auto', 'auto'],
                            clip: 'rect(0px 395px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Allons voir ce qui s'y trouve ! Lets'go&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['0.96709']]
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
                    duration: 62750,
                    autoPlay: true,
                    data: [
                        [
                            "eid380",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid405",
                            "opacity",
                            23697,
                            0,
                            "linear",
                            "${Text3Copy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid351",
                            "opacity",
                            27021,
                            500,
                            "linear",
                            "${Text3Copy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid455",
                            "clip",
                            43000,
                            1500,
                            "linear",
                            "${Text3Copy9}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid304",
                            "top",
                            15750,
                            0,
                            "linear",
                            "${Text3Copy6}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid444",
                            "top",
                            43750,
                            0,
                            "linear",
                            "${Text3Copy8}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid339",
                            "top",
                            21000,
                            0,
                            "linear",
                            "${Text3Copy11}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid520",
                            "top",
                            58250,
                            0,
                            "linear",
                            "${porte_dome}",
                            '-6px',
                            '-6px'
                        ],
                        [
                            "eid501",
                            "clip",
                            55074,
                            1500,
                            "linear",
                            "${Text3Copy17}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid342",
                            "clip",
                            21000,
                            1500,
                            "linear",
                            "${Text3Copy11}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid383",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid392",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            6976,
                            500,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid507",
                            "clip",
                            54324,
                            1500,
                            "linear",
                            "${Text3Copy18}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid382",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid402",
                            "opacity",
                            25197,
                            0,
                            "linear",
                            "${Text3Copy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid356",
                            "opacity",
                            27021,
                            500,
                            "linear",
                            "${Text3Copy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid335",
                            "scaleX",
                            19500,
                            0,
                            "linear",
                            "${Text3Copy10}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid511",
                            "scaleX",
                            55074,
                            0,
                            "linear",
                            "${Text3Copy17}",
                            '0.96709',
                            '0.93965'
                        ],
                        [
                            "eid311",
                            "left",
                            17092,
                            0,
                            "linear",
                            "${Text3Copy7}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid472",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Text3Copy16}",
                            '0',
                            '0'
                        ],
                        [
                            "eid473",
                            "opacity",
                            48000,
                            0,
                            "linear",
                            "${Text3Copy16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid474",
                            "opacity",
                            51610,
                            500,
                            "linear",
                            "${Text3Copy16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid357",
                            "clip",
                            25197,
                            1500,
                            "linear",
                            "${Text3Copy14}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid271",
                            "scaleX",
                            9000,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid449",
                            "clip",
                            43750,
                            1500,
                            "linear",
                            "${Text3Copy8}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid284",
                            "width",
                            8250,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '464px',
                            '60px'
                        ],
                        [
                            "eid439",
                            "width",
                            42500,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid443",
                            "width",
                            43000,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '464px',
                            '60px'
                        ],
                        [
                            "eid244",
                            "clip",
                            3000,
                            1500,
                            "linear",
                            "${Text3}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid421",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${porte_dome}",
                            '0',
                            '0'
                        ],
                        [
                            "eid422",
                            "opacity",
                            41006,
                            0,
                            "linear",
                            "${porte_dome}",
                            '0',
                            '1'
                        ],
                        [
                            "eid423",
                            "opacity",
                            43000,
                            0,
                            "linear",
                            "${porte_dome}",
                            '1',
                            '0'
                        ],
                        [
                            "eid476",
                            "opacity",
                            54000,
                            0,
                            "linear",
                            "${porte_dome}",
                            '0',
                            '1'
                        ],
                        [
                            "eid255",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${Text3}",
                            '669px',
                            '667px'
                        ],
                        [
                            "eid387",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid398",
                            "opacity",
                            17092,
                            0,
                            "linear",
                            "${Text3Copy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid309",
                            "opacity",
                            18916,
                            500,
                            "linear",
                            "${Text3Copy7}",
                            '1',
                            '0'
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
                            "eid267",
                            "opacity",
                            8250,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid268",
                            "opacity",
                            10824,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid287",
                            "opacity",
                            11500,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid288",
                            "opacity",
                            18916,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid318",
                            "opacity",
                            19500,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid319",
                            "opacity",
                            26916,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid429",
                            "opacity",
                            43000,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid430",
                            "opacity",
                            46610,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid461",
                            "opacity",
                            47250,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid462",
                            "opacity",
                            51610,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid483",
                            "opacity",
                            54337,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid484",
                            "opacity",
                            57934,
                            500,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid384",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid391",
                            "opacity",
                            3000,
                            0,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid245",
                            "opacity",
                            6976,
                            500,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid451",
                            "top",
                            43000,
                            0,
                            "linear",
                            "${Text3Copy9}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid452",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid453",
                            "opacity",
                            43000,
                            0,
                            "linear",
                            "${Text3Copy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid454",
                            "opacity",
                            46610,
                            500,
                            "linear",
                            "${Text3Copy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid297",
                            "scaleX",
                            13150,
                            0,
                            "linear",
                            "${Text3Copy4}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid510",
                            "left",
                            55074,
                            0,
                            "linear",
                            "${Text3Copy17}",
                            '353px',
                            '347px'
                        ],
                        [
                            "eid521",
                            "left",
                            58250,
                            2750,
                            "linear",
                            "${porte_dome}",
                            '0px',
                            '-547px'
                        ],
                        [
                            "eid337",
                            "clip",
                            19500,
                            1500,
                            "linear",
                            "${Text3Copy10}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid524",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid525",
                            "opacity",
                            61250,
                            0,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid307",
                            "top",
                            17092,
                            0,
                            "linear",
                            "${Text3Copy7}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid274",
                            "left",
                            9000,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid256",
                            "scaleX",
                            4500,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid517",
                            "height",
                            58250,
                            2750,
                            "linear",
                            "${porte_dome}",
                            '774px',
                            '1187px'
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
                            "eid413",
                            "top",
                            28500,
                            12500,
                            "linear",
                            "${fond_bateau2}",
                            '-5px',
                            '-2955px'
                        ],
                        [
                            "eid378",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid399",
                            "opacity",
                            15750,
                            0,
                            "linear",
                            "${Text3Copy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid345",
                            "opacity",
                            18916,
                            500,
                            "linear",
                            "${Text3Copy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid385",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid397",
                            "opacity",
                            15750,
                            0,
                            "linear",
                            "${Text3Copy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid305",
                            "opacity",
                            18916,
                            500,
                            "linear",
                            "${Text3Copy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid350",
                            "scaleX",
                            23697,
                            0,
                            "linear",
                            "${Text3Copy13}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid415",
                            "left",
                            28500,
                            500,
                            "linear",
                            "${bateau2}",
                            '352px',
                            '382px'
                        ],
                        [
                            "eid416",
                            "left",
                            29000,
                            500,
                            "linear",
                            "${bateau2}",
                            '382px',
                            '332px'
                        ],
                        [
                            "eid417",
                            "left",
                            29500,
                            2108,
                            "linear",
                            "${bateau2}",
                            '332px',
                            '372px'
                        ],
                        [
                            "eid418",
                            "left",
                            31608,
                            1406,
                            "linear",
                            "${bateau2}",
                            '372px',
                            '342px'
                        ],
                        [
                            "eid419",
                            "left",
                            33014,
                            4919,
                            "linear",
                            "${bateau2}",
                            '342px',
                            '422px'
                        ],
                        [
                            "eid420",
                            "left",
                            37933,
                            3067,
                            "linear",
                            "${bateau2}",
                            '422px',
                            '302px'
                        ],
                        [
                            "eid427",
                            "left",
                            43000,
                            0,
                            "linear",
                            "${bateau2}",
                            '302px',
                            '340px'
                        ],
                        [
                            "eid477",
                            "left",
                            52110,
                            0,
                            "linear",
                            "${bateau2}",
                            '340px',
                            '340px'
                        ],
                        [
                            "eid479",
                            "left",
                            52250,
                            0,
                            "linear",
                            "${bateau2}",
                            '340px',
                            '340px'
                        ],
                        [
                            "eid306",
                            "clip",
                            15750,
                            1500,
                            "linear",
                            "${Text3Copy6}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid386",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid393",
                            "opacity",
                            8250,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid276",
                            "opacity",
                            10824,
                            500,
                            "linear",
                            "${Text3Copy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid353",
                            "left",
                            23697,
                            0,
                            "linear",
                            "${Text3Copy13}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid364",
                            "top",
                            12000,
                            4000,
                            "linear",
                            "${yeux_bimo2}",
                            '427px',
                            '400px'
                        ],
                        [
                            "eid368",
                            "top",
                            18916,
                            4781,
                            "linear",
                            "${yeux_bimo2}",
                            '400px',
                            '442px'
                        ],
                        [
                            "eid370",
                            "top",
                            23697,
                            3824,
                            "linear",
                            "${yeux_bimo2}",
                            '442px',
                            '410px'
                        ],
                        [
                            "eid275",
                            "top",
                            8250,
                            0,
                            "linear",
                            "${Text3Copy3}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid346",
                            "clip",
                            15750,
                            1500,
                            "linear",
                            "${Text3Copy12}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
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
                            "eid496",
                            "top",
                            55074,
                            0,
                            "linear",
                            "${Text3Copy17}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid285",
                            "height",
                            8250,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '79px',
                            '60px'
                        ],
                        [
                            "eid440",
                            "height",
                            42500,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid433",
                            "height",
                            43000,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '60px',
                            '79px'
                        ],
                        [
                            "eid389",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid395",
                            "opacity",
                            12400,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid302",
                            "opacity",
                            14974,
                            500,
                            "linear",
                            "${Text3Copy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid469",
                            "clip",
                            48750,
                            1500,
                            "linear",
                            "${Text3Copy15}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid283",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${attente_scene}",
                            '1',
                            '1'
                        ],
                        [
                            "eid265",
                            "opacity",
                            7750,
                            0,
                            "linear",
                            "${attente_scene}",
                            '1',
                            '0'
                        ],
                        [
                            "eid340",
                            "scaleX",
                            21000,
                            0,
                            "linear",
                            "${Text3Copy11}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid465",
                            "scaleX",
                            48750,
                            0,
                            "linear",
                            "${Text3Copy15}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid308",
                            "scaleX",
                            17092,
                            0,
                            "linear",
                            "${Text3Copy7}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid258",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${scene_rencontre_bateau}",
                            '0',
                            '0'
                        ],
                        [
                            "eid259",
                            "opacity",
                            7750,
                            0,
                            "linear",
                            "${scene_rencontre_bateau}",
                            '0',
                            '1'
                        ],
                        [
                            "eid246",
                            "clip",
                            4500,
                            1500,
                            "linear",
                            "${Text3Copy}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid388",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid396",
                            "opacity",
                            13150,
                            0,
                            "linear",
                            "${Text3Copy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid298",
                            "opacity",
                            14974,
                            500,
                            "linear",
                            "${Text3Copy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid261",
                            "height",
                            2500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid266",
                            "height",
                            8250,
                            0,
                            "linear",
                            "${RoundRect}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid286",
                            "height",
                            11500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid317",
                            "height",
                            19500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid428",
                            "height",
                            43000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid460",
                            "height",
                            47250,
                            0,
                            "linear",
                            "${RoundRect}",
                            '79px',
                            '79px'
                        ],
                        [
                            "eid482",
                            "height",
                            54337,
                            0,
                            "linear",
                            "${RoundRect}",
                            '79px',
                            '79px'
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
                            "eid253",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '696px',
                            '697px'
                        ],
                        [
                            "eid348",
                            "top",
                            19500,
                            0,
                            "linear",
                            "${Text3Copy10}",
                            '697px',
                            '667px'
                        ],
                        [
                            "eid519",
                            "width",
                            58250,
                            2750,
                            "linear",
                            "${porte_dome}",
                            '1024px',
                            '1570px'
                        ],
                        [
                            "eid466",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Text3Copy15}",
                            '0',
                            '0'
                        ],
                        [
                            "eid467",
                            "opacity",
                            48750,
                            0,
                            "linear",
                            "${Text3Copy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid468",
                            "opacity",
                            51610,
                            500,
                            "linear",
                            "${Text3Copy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid355",
                            "scaleX",
                            25197,
                            0,
                            "linear",
                            "${Text3Copy14}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid438",
                            "top",
                            42500,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '665px',
                            '665px'
                        ],
                        [
                            "eid442",
                            "top",
                            43000,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '665px',
                            '656px'
                        ],
                        [
                            "eid354",
                            "top",
                            25197,
                            0,
                            "linear",
                            "${Text3Copy14}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid464",
                            "top",
                            48750,
                            0,
                            "linear",
                            "${Text3Copy15}",
                            '697px',
                            '697px'
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
                            "eid260",
                            "width",
                            2500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '464px',
                            '464px'
                        ],
                        [
                            "eid269",
                            "width",
                            8250,
                            0,
                            "linear",
                            "${RoundRect}",
                            '464px',
                            '464px'
                        ],
                        [
                            "eid289",
                            "width",
                            11500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '464px',
                            '464px'
                        ],
                        [
                            "eid320",
                            "width",
                            19500,
                            0,
                            "linear",
                            "${RoundRect}",
                            '464px',
                            '464px'
                        ],
                        [
                            "eid431",
                            "width",
                            43000,
                            0,
                            "linear",
                            "${RoundRect}",
                            '464px',
                            '464px'
                        ],
                        [
                            "eid463",
                            "width",
                            47250,
                            0,
                            "linear",
                            "${RoundRect}",
                            '464px',
                            '464px'
                        ],
                        [
                            "eid485",
                            "width",
                            54337,
                            0,
                            "linear",
                            "${RoundRect}",
                            '464px',
                            '464px'
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
                            "eid291",
                            "opacity",
                            11500,
                            500,
                            "linear",
                            "${tete}",
                            '0',
                            '1'
                        ],
                        [
                            "eid292",
                            "opacity",
                            18916,
                            500,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid487",
                            "opacity",
                            54337,
                            500,
                            "linear",
                            "${tete}",
                            '0',
                            '1'
                        ],
                        [
                            "eid488",
                            "opacity",
                            57934,
                            500,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid445",
                            "scaleX",
                            43750,
                            0,
                            "linear",
                            "${Text3Copy8}",
                            '0.96709',
                            '0.96709'
                        ],
                        [
                            "eid343",
                            "left",
                            21000,
                            0,
                            "linear",
                            "${Text3Copy11}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid527",
                            "clip",
                            61250,
                            1500,
                            "linear",
                            "${Text}",
                            [0,-0.82568359375,57,0],
                            [0,477,57,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid344",
                            "top",
                            15750,
                            0,
                            "linear",
                            "${Text3Copy12}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid503",
                            "top",
                            54324,
                            0,
                            "linear",
                            "${Text3Copy18}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid273",
                            "clip",
                            9000,
                            1500,
                            "linear",
                            "${Text3Copy2}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid377",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bateau2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid403",
                            "opacity",
                            28500,
                            0,
                            "linear",
                            "${bateau2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid315",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tete}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid294",
                            "width",
                            11500,
                            0,
                            "linear",
                            "${tete}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid490",
                            "width",
                            54106,
                            0,
                            "linear",
                            "${tete}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid495",
                            "width",
                            54337,
                            0,
                            "linear",
                            "${tete}",
                            '464px',
                            '60px'
                        ],
                        [
                            "eid338",
                            "left",
                            19500,
                            0,
                            "linear",
                            "${Text3Copy10}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid299",
                            "clip",
                            13150,
                            1500,
                            "linear",
                            "${Text3Copy4}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid446",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid447",
                            "opacity",
                            43750,
                            0,
                            "linear",
                            "${Text3Copy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid448",
                            "opacity",
                            46610,
                            500,
                            "linear",
                            "${Text3Copy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid358",
                            "left",
                            25197,
                            0,
                            "linear",
                            "${Text3Copy14}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid270",
                            "top",
                            9000,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid471",
                            "top",
                            48000,
                            0,
                            "linear",
                            "${Text3Copy16}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid379",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid400",
                            "opacity",
                            19500,
                            0,
                            "linear",
                            "${Text3Copy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid336",
                            "opacity",
                            22824,
                            500,
                            "linear",
                            "${Text3Copy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid296",
                            "top",
                            13150,
                            0,
                            "linear",
                            "${Text3Copy4}",
                            '697px',
                            '697px'
                        ],
                        [
                            "eid359",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid360",
                            "opacity",
                            7750,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid432",
                            "opacity",
                            28500,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid300",
                            "left",
                            13150,
                            0,
                            "linear",
                            "${Text3Copy4}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid257",
                            "left",
                            4500,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid303",
                            "clip",
                            12400,
                            1500,
                            "linear",
                            "${Text3Copy5}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid278",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '0'
                        ],
                        [
                            "eid280",
                            "opacity",
                            8250,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid281",
                            "opacity",
                            10824,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid322",
                            "opacity",
                            19500,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid323",
                            "opacity",
                            26916,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid434",
                            "opacity",
                            43000,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid435",
                            "opacity",
                            46610,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid457",
                            "opacity",
                            47250,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid458",
                            "opacity",
                            51610,
                            500,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid437",
                            "left",
                            42500,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '289px',
                            '289px'
                        ],
                        [
                            "eid441",
                            "left",
                            43000,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '289px',
                            '287px'
                        ],
                        [
                            "eid362",
                            "left",
                            7750,
                            4250,
                            "linear",
                            "${yeux_bimo2}",
                            '480px',
                            '462px'
                        ],
                        [
                            "eid366",
                            "left",
                            16000,
                            2916,
                            "linear",
                            "${yeux_bimo2}",
                            '462px',
                            '481px'
                        ],
                        [
                            "eid369",
                            "left",
                            18916,
                            4781,
                            "linear",
                            "${yeux_bimo2}",
                            '481px',
                            '472px'
                        ],
                        [
                            "eid371",
                            "left",
                            23697,
                            3824,
                            "linear",
                            "${yeux_bimo2}",
                            '472px',
                            '464px'
                        ],
                        [
                            "eid475",
                            "clip",
                            48000,
                            1500,
                            "linear",
                            "${Text3Copy16}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid277",
                            "clip",
                            8250,
                            1500,
                            "linear",
                            "${Text3Copy3}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid310",
                            "clip",
                            17092,
                            1500,
                            "linear",
                            "${Text3Copy7}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid316",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tete}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid295",
                            "height",
                            11500,
                            0,
                            "linear",
                            "${tete}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid491",
                            "height",
                            54106,
                            0,
                            "linear",
                            "${tete}",
                            '60px',
                            '60px'
                        ],
                        [
                            "eid494",
                            "height",
                            54337,
                            0,
                            "linear",
                            "${tete}",
                            '79px',
                            '60px'
                        ],
                        [
                            "eid424",
                            "top",
                            28500,
                            0,
                            "linear",
                            "${bateau2}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid425",
                            "top",
                            41000,
                            0,
                            "linear",
                            "${bateau2}",
                            '196px',
                            '196px'
                        ],
                        [
                            "eid426",
                            "top",
                            43000,
                            0,
                            "linear",
                            "${bateau2}",
                            '196px',
                            '82px'
                        ],
                        [
                            "eid478",
                            "top",
                            52110,
                            0,
                            "linear",
                            "${bateau2}",
                            '82px',
                            '82px'
                        ],
                        [
                            "eid481",
                            "top",
                            52250,
                            1750,
                            "linear",
                            "${bateau2}",
                            '82px',
                            '774px'
                        ],
                        [
                            "eid498",
                            "opacity",
                            11324,
                            0,
                            "linear",
                            "${Text3Copy17}",
                            '0',
                            '0'
                        ],
                        [
                            "eid499",
                            "opacity",
                            55074,
                            0,
                            "linear",
                            "${Text3Copy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid500",
                            "opacity",
                            57934,
                            500,
                            "linear",
                            "${Text3Copy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid376",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${fond_bateau2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid404",
                            "opacity",
                            28500,
                            0,
                            "linear",
                            "${fond_bateau2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid450",
                            "left",
                            43750,
                            0,
                            "linear",
                            "${Text3Copy8}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid301",
                            "top",
                            12400,
                            0,
                            "linear",
                            "${Text3Copy5}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid470",
                            "left",
                            48750,
                            0,
                            "linear",
                            "${Text3Copy15}",
                            '353px',
                            '353px'
                        ],
                        [
                            "eid504",
                            "opacity",
                            11324,
                            0,
                            "linear",
                            "${Text3Copy18}",
                            '0',
                            '0'
                        ],
                        [
                            "eid505",
                            "opacity",
                            54324,
                            0,
                            "linear",
                            "${Text3Copy18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid506",
                            "opacity",
                            57934,
                            500,
                            "linear",
                            "${Text3Copy18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid349",
                            "top",
                            23697,
                            0,
                            "linear",
                            "${Text3Copy13}",
                            '667px',
                            '667px'
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
                            "eid352",
                            "clip",
                            23697,
                            1500,
                            "linear",
                            "${Text3Copy13}",
                            [0,-0.07177734375,28,0],
                            [0,395,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid390",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid394",
                            "opacity",
                            9000,
                            0,
                            "linear",
                            "${Text3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid272",
                            "opacity",
                            10824,
                            500,
                            "linear",
                            "${Text3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid381",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid401",
                            "opacity",
                            21000,
                            0,
                            "linear",
                            "${Text3Copy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid341",
                            "opacity",
                            22824,
                            500,
                            "linear",
                            "${Text3Copy11}",
                            '1',
                            '0'
                        ]
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
                            opacity: '0',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            id: 'charlie_parle2',
                            rect: ['0px', '10px', '1619px', '492px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/charlie_parle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '400px', '502px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("choix_bateau_edgeActions.js");
})("EDGE-14341040");
