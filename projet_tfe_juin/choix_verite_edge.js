/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
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
                            id: 'fondleiaexplication',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"explication0.png",'0px','0px']
                        },
                        {
                            id: 'leia_parlegrande',
                            symbolName: 'leia_parle',
                            type: 'rect',
                            rect: ['450px', '368px', '150', '128', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            transform: [[],[],[],['3.30543','3.30543']]
                        },
                        {
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['194px', '613px', '636px', '89px', 'auto', 'auto'],
                            fill: ["rgba(252,196,71,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'boutonbimo',
                            type: 'image',
                            rect: ['203px', '658px', '264px', '29px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"boutonbimo.svg",'0px','0px']
                        },
                        {
                            id: 'explication1',
                            type: 'image',
                            rect: ['-1px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"explication1.png",'0px','0px']
                        },
                        {
                            id: 'explication2',
                            type: 'image',
                            rect: ['0', '46px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"explication2.svg",'0px','0px']
                        },
                        {
                            id: 'explication3',
                            type: 'image',
                            rect: ['1px', '38px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"explication3.svg",'0px','0px']
                        },
                        {
                            id: 'explication4',
                            type: 'image',
                            rect: ['1px', '31px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"explication4.svg",'0px','0px']
                        },
                        {
                            id: 'explication5',
                            type: 'image',
                            rect: ['1px', '25px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"explication5.svg",'0px','0px']
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['205px', '644px', '615px', '109px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '1',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['232px', '662px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Bonjour à vous, Je me prénomme princesse Leïa.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['237px', '649px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Si vous entendez ce message, c'est que vous avez</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy2',
                            type: 'text',
                            rect: ['238px', '688px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​entre vos mains mon fidèle B1M0. Prenez en soin.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy7',
                            type: 'text',
                            rect: ['237px', '660px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​A présent je vais vous raconter se qui est caché &nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy6',
                            type: 'text',
                            rect: ['237px', '688px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​dans ces DVD.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy9',
                            type: 'text',
                            rect: ['237px', '649px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Il y a bien longtemps que mon peuple est opprimé par L’empire.​.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy8',
                            type: 'text',
                            rect: ['237px', '695px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Cela fait au moins 300 ans que la dictature règne.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy21',
                            type: 'text',
                            rect: ['237px', '660px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">En voulant devenir des hommes libres​</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy20',
                            type: 'text',
                            rect: ['237px', '695px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​ils se rebellèrent. Mais ce fut un échec total.</p><p style=\"margin: 0px;\">​&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy12',
                            type: 'text',
                            rect: ['237px', '653px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Pour les punir de leurs actes, les Stormtroopers</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy11',
                            type: 'text',
                            rect: ['239px', '679px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​les ont tous enfermés dans des dômes et leur ont&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy13',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​oté la mémoire, pour leur faire oublier ceux-ci.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy4',
                            type: 'text',
                            rect: ['237px', '641px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​J'ai été capturé par l'armée des Stormtoopers,</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy3',
                            type: 'text',
                            rect: ['237px', '679px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​parce que je suis le chef de l'armée des Rebelles et</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy5',
                            type: 'text',
                            rect: ['231px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">&nbsp;ennemie n°1 car je leur ai volé leurs DVDS secrets.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'leia_petite',
                            symbolName: 'leia_parle',
                            type: 'rect',
                            rect: ['231px', '504px', '150', '128', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['0.89576','0.89576']]
                        },
                        {
                            id: 'TextCopy15',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Du coup, au fil du temps, les dômes furent&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy14',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​complètement oubliés et la dictature maintenue.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy17',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Toute votre vie est filmée 24 h sur 24. Il y a même &nbsp;Certains faits</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy16',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​certains faits importants de votre vie qui sont créés &nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy19',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​afin de satisfaire au mieux leur l'audimat, car</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy18',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​toutes vos images sont retranscrites à l'antenne&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy23',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Pour divertir au mieux l'armée et le peuple, afin</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy22',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​de leur faire passer des moments plus attrayants.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy25',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Alors je vous en pris venez me sauver.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy24',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Le sors du monde est à présent entre vos mains.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy26',
                            type: 'text',
                            rect: ['239px', '666px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Je me trouve au dôme numéro &nbsp;*pshiiiiiiiiiiiiit*&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy27',
                            type: 'text',
                            rect: ['239px', '666px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Viiiiite ! B1M0 pars !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'charlie_parle_zoom',
                            type: 'image',
                            rect: ['-1px', '0', '1237px', '928px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"charlie_parle_zoom.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_parle_verite',
                            symbolName: 'charlie_parle_verite',
                            type: 'rect',
                            rect: ['376px', '230px', '270', '338', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['2.41','2.35556']]
                        },
                        {
                            id: 'flotteur',
                            type: 'image',
                            rect: ['26px', '486px', '36px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"flotteur.svg",'0px','0px']
                        },
                        {
                            id: 'RoundRect2Copy',
                            type: 'rect',
                            rect: ['205px', '644px', '615px', '109px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'TextCopy28',
                            type: 'text',
                            rect: ['239px', '666px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Viiiiite ! B1M0 pars !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy30',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Bon sang ! Je n'ai pas entendu où elle est !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy29',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Tout ce qu'elle dit est tellement dur à croire ...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy32',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Ecoute B1MO, après ça je vais avoir besoin&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy31',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">d'un peu de temps... Pour réfléchir à tout ca ...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy34',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Je ne suis qu'un petit bucheron sans histoire.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy33',
                            type: 'text',
                            rect: ['239px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Partir d'ici est déjà dur, mais sauver le monde ...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'bimo_parle_peche_zoom',
                            type: 'image',
                            rect: ['-1px', '1px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_parle_peche_zoom.svg",'0px','0px']
                        },
                        {
                            id: 'bimo_face_noeyes',
                            type: 'image',
                            rect: ['192px', '44px', '417px', '585px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_face_noeyes.svg",'0px','0px']
                        },
                        {
                            id: 'yeux_bimo2',
                            type: 'image',
                            rect: ['286px', '162px', '280px', '99px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"yeux_bimo2.svg",'0px','0px']
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['210px', '654px', '597px', '81px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'tete',
                            type: 'image',
                            rect: ['73px', '664px', '60px', '60px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tete.svg",'0px','0px']
                        },
                        {
                            id: 'TextCopy35',
                            type: 'text',
                            rect: ['239px', '665px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Moui peut être mais le problème c'est que</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy10',
                            type: 'text',
                            rect: ['155px', '703px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">maintenant l'Empire doit être au courant ...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy37',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Comme tu le sais tout est filmé. En ayant vu</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy36',
                            type: 'text',
                            rect: ['155px', '703px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">ce message tu deviens aussi un ennemi.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy39',
                            type: 'text',
                            rect: ['288px', '660px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Vraiment ?! Mais j'en n'ai pas envie moi ! C'est chez</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'tete_charlie',
                            type: 'image',
                            rect: ['221px', '668px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'TextCopy38',
                            type: 'text',
                            rect: ['291px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">moi ici ... J'ai plein de bois à couper. A livrer ...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy41',
                            type: 'text',
                            rect: ['288px', '660px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Je n'ai pas envie de partir. Pourquoi il fallait que</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy40',
                            type: 'text',
                            rect: ['291px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">tu tombes chez moi ... J'aurais pas du t'allumer...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy43',
                            type: 'text',
                            rect: ['239px', '681px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Ne paniquez pas ... Je suis là pour vous aider</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy42',
                            type: 'text',
                            rect: ['155px', '703px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">Reposez-vous je vais trouver une solution.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy45',
                            type: 'text',
                            rect: ['291px', '707px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">n'ai pas le choix. Alors sors moi de cette galère.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy44',
                            type: 'text',
                            rect: ['288px', '660px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Hum *grogne* de toute façon apparemment je</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy46',
                            type: 'text',
                            rect: ['288px', '660px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Bon voyons ce que j'ai dans mes bases de données</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'TextCopy47',
                            type: 'text',
                            rect: ['288px', '660px', '557px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 532.3447265625px 28px 0px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​pour pouvoir trouver un moyen de partir.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", ""],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['486px', '187px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​!<span style=\"font-size: 250px;\">​</span></p>",
                            align: "left",
                            font: ['alice, serif', [250, "px"], "rgba(244,160,25,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['236px', '668px', '552px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 2.29296875px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Données trouvées ! Ce ne sont que des données de</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'Text3Copy',
                            type: 'text',
                            rect: ['236px', '699px', '552px', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 2.29296875px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​film mais j'en ai &nbsp;deux qui pourraient aider à partir</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", ""]
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
                    duration: 176250,
                    autoPlay: true,
                    data: [
                        [
                            "eid665",
                            "width",
                            95500,
                            0,
                            "linear",
                            "${TextCopy30}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid420",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy18}",
                            '0',
                            '0'
                        ],
                        [
                            "eid421",
                            "opacity",
                            69698,
                            0,
                            "linear",
                            "${TextCopy18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid422",
                            "opacity",
                            73035,
                            476,
                            "linear",
                            "${TextCopy18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid591",
                            "top",
                            94250,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '230px',
                            '230px'
                        ],
                        [
                            "eid659",
                            "clip",
                            95500,
                            2000,
                            "linear",
                            "${TextCopy30}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid660",
                            "clip",
                            97500,
                            520,
                            "linear",
                            "${TextCopy30}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid703",
                            "clip",
                            109000,
                            2000,
                            "linear",
                            "${TextCopy34}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid704",
                            "clip",
                            111000,
                            520,
                            "linear",
                            "${TextCopy34}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid855",
                            "opacity",
                            6399,
                            0,
                            "linear",
                            "${TextCopy41}",
                            '0',
                            '0'
                        ],
                        [
                            "eid856",
                            "opacity",
                            134399,
                            0,
                            "linear",
                            "${TextCopy41}",
                            '0',
                            '1'
                        ],
                        [
                            "eid857",
                            "opacity",
                            140094,
                            476,
                            "linear",
                            "${TextCopy41}",
                            '1',
                            '0'
                        ],
                        [
                            "eid675",
                            "left",
                            101949,
                            0,
                            "linear",
                            "${TextCopy32}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid341",
                            "top",
                            55710,
                            0,
                            "linear",
                            "${TextCopy14}",
                            '707px',
                            '695px'
                        ],
                        [
                            "eid793",
                            "top",
                            121750,
                            0,
                            "linear",
                            "${TextCopy37}",
                            '665px',
                            '665px'
                        ],
                        [
                            "eid403",
                            "top",
                            61333,
                            0,
                            "linear",
                            "${TextCopy17}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid1109",
                            "width",
                            115500,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '280px',
                            '280px'
                        ],
                        [
                            "eid1116",
                            "width",
                            154627,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '280px',
                            '355px'
                        ],
                        [
                            "eid254",
                            "scaleX",
                            0,
                            0,
                            "linear",
                            "${leia_petite}",
                            '0.89576',
                            '0.89576'
                        ],
                        [
                            "eid188",
                            "width",
                            17851,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid1091",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1099",
                            "opacity",
                            168339,
                            0,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1102",
                            "opacity",
                            173250,
                            500,
                            "linear",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid916",
                            "left",
                            150500,
                            0,
                            "linear",
                            "${TextCopy45}",
                            '293px',
                            '293px'
                        ],
                        [
                            "eid758",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '0',
                            '0'
                        ],
                        [
                            "eid759",
                            "opacity",
                            118538,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid760",
                            "opacity",
                            121000,
                            520,
                            "linear",
                            "${TextCopy10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid481",
                            "top",
                            74236,
                            0,
                            "linear",
                            "${explication5}",
                            '25px',
                            '25px'
                        ],
                        [
                            "eid402",
                            "width",
                            63607,
                            0,
                            "linear",
                            "${TextCopy16}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid1009",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy47}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1010",
                            "opacity",
                            157250,
                            0,
                            "linear",
                            "${TextCopy47}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1011",
                            "opacity",
                            160580,
                            476,
                            "linear",
                            "${TextCopy47}",
                            '1',
                            '0'
                        ],
                        [
                            "eid346",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid361",
                            "opacity",
                            2809,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid167",
                            "opacity",
                            6399,
                            476,
                            "linear",
                            "${Text}",
                            '0.99',
                            '0'
                        ],
                        [
                            "eid342",
                            "opacity",
                            51,
                            0,
                            "linear",
                            "${explication3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid345",
                            "opacity",
                            60086,
                            0,
                            "linear",
                            "${explication3}",
                            '0.66227592054264',
                            '1'
                        ],
                        [
                            "eid485",
                            "opacity",
                            80801,
                            0,
                            "linear",
                            "${explication3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid932",
                            "top",
                            25500,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '657px',
                            '660px'
                        ],
                        [
                            "eid425",
                            "top",
                            67422,
                            0,
                            "linear",
                            "${TextCopy19}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid404",
                            "clip",
                            61333,
                            2000,
                            "linear",
                            "${TextCopy17}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid405",
                            "clip",
                            63333,
                            520,
                            "linear",
                            "${TextCopy17}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1111",
                            "top",
                            116411,
                            10839,
                            "linear",
                            "${yeux_bimo2}",
                            '233px',
                            '130px'
                        ],
                        [
                            "eid1112",
                            "top",
                            127250,
                            13276,
                            "linear",
                            "${yeux_bimo2}",
                            '130px',
                            '233px'
                        ],
                        [
                            "eid1121",
                            "top",
                            140526,
                            5063,
                            "linear",
                            "${yeux_bimo2}",
                            '233px',
                            '165px'
                        ],
                        [
                            "eid1122",
                            "top",
                            145589,
                            9038,
                            "linear",
                            "${yeux_bimo2}",
                            '165px',
                            '255px'
                        ],
                        [
                            "eid1021",
                            "top",
                            154627,
                            3873,
                            "linear",
                            "${yeux_bimo2}",
                            '255px',
                            '325px'
                        ],
                        [
                            "eid1036",
                            "top",
                            161056,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '325px',
                            '325px'
                        ],
                        [
                            "eid1106",
                            "top",
                            166250,
                            5661,
                            "linear",
                            "${yeux_bimo2}",
                            '304px',
                            '340px'
                        ],
                        [
                            "eid1107",
                            "top",
                            171911,
                            3839,
                            "linear",
                            "${yeux_bimo2}",
                            '340px',
                            '162px'
                        ],
                        [
                            "eid1108",
                            "top",
                            175750,
                            500,
                            "linear",
                            "${yeux_bimo2}",
                            '162px',
                            '173px'
                        ],
                        [
                            "eid457",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${explication5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid456",
                            "opacity",
                            74236,
                            0,
                            "linear",
                            "${explication5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid483",
                            "opacity",
                            80801,
                            0,
                            "linear",
                            "${explication5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid395",
                            "top",
                            63607,
                            0,
                            "linear",
                            "${TextCopy16}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid756",
                            "clip",
                            118536,
                            2000,
                            "linear",
                            "${TextCopy10}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid757",
                            "clip",
                            121000,
                            520,
                            "linear",
                            "${TextCopy10}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1013",
                            "width",
                            157250,
                            0,
                            "linear",
                            "${TextCopy47}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid355",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy13}",
                            '0',
                            '0'
                        ],
                        [
                            "eid389",
                            "opacity",
                            48676,
                            0,
                            "linear",
                            "${TextCopy13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid310",
                            "opacity",
                            52436,
                            476,
                            "linear",
                            "${TextCopy13}",
                            '1',
                            '0'
                        ],
                        [
                            "eid358",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid371",
                            "opacity",
                            15635,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid190",
                            "opacity",
                            24647,
                            476,
                            "linear",
                            "${TextCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid885",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy43}",
                            '0',
                            '0'
                        ],
                        [
                            "eid886",
                            "opacity",
                            141000,
                            0,
                            "linear",
                            "${TextCopy43}",
                            '0',
                            '1'
                        ],
                        [
                            "eid887",
                            "opacity",
                            145633,
                            476,
                            "linear",
                            "${TextCopy43}",
                            '1',
                            '0'
                        ],
                        [
                            "eid464",
                            "left",
                            76236,
                            0,
                            "linear",
                            "${TextCopy22}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid468",
                            "clip",
                            76236,
                            2000,
                            "linear",
                            "${TextCopy22}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid469",
                            "clip",
                            78236,
                            520,
                            "linear",
                            "${TextCopy22}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid514",
                            "width",
                            87486,
                            0,
                            "linear",
                            "${TextCopy26}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid681",
                            "width",
                            101949,
                            0,
                            "linear",
                            "${TextCopy32}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid470",
                            "width",
                            76236,
                            0,
                            "linear",
                            "${TextCopy22}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid161",
                            "clip",
                            2809,
                            2000,
                            "linear",
                            "${Text}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid163",
                            "clip",
                            4809,
                            520,
                            "linear",
                            "${Text}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid428",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy19}",
                            '0',
                            '0'
                        ],
                        [
                            "eid429",
                            "opacity",
                            67422,
                            0,
                            "linear",
                            "${TextCopy19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid430",
                            "opacity",
                            73035,
                            476,
                            "linear",
                            "${TextCopy19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid875",
                            "top",
                            143125,
                            0,
                            "linear",
                            "${TextCopy42}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid972",
                            "height",
                            0,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '585px',
                            '585px'
                        ],
                        [
                            "eid981",
                            "height",
                            154627,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '585px',
                            '908px'
                        ],
                        [
                            "eid843",
                            "top",
                            128000,
                            0,
                            "linear",
                            "${TextCopy39}",
                            '650px',
                            '660px'
                        ],
                        [
                            "eid837",
                            "left",
                            130125,
                            0,
                            "linear",
                            "${TextCopy38}",
                            '239px',
                            '293px'
                        ],
                        [
                            "eid418",
                            "clip",
                            69696,
                            2000,
                            "linear",
                            "${TextCopy18}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid419",
                            "clip",
                            71696,
                            520,
                            "linear",
                            "${TextCopy18}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid794",
                            "left",
                            121750,
                            0,
                            "linear",
                            "${TextCopy37}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid858",
                            "clip",
                            134399,
                            2000,
                            "linear",
                            "${TextCopy41}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid859",
                            "clip",
                            136399,
                            520,
                            "linear",
                            "${TextCopy41}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid692",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy33}",
                            '0',
                            '0'
                        ],
                        [
                            "eid693",
                            "opacity",
                            111127,
                            0,
                            "linear",
                            "${TextCopy33}",
                            '0',
                            '1'
                        ],
                        [
                            "eid694",
                            "opacity",
                            114651,
                            520,
                            "linear",
                            "${TextCopy33}",
                            '1',
                            '0'
                        ],
                        [
                            "eid546",
                            "clip",
                            90845,
                            2000,
                            "linear",
                            "${TextCopy27}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid547",
                            "clip",
                            92845,
                            520,
                            "linear",
                            "${TextCopy27}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid360",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid374",
                            "opacity",
                            20371,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid202",
                            "opacity",
                            24647,
                            476,
                            "linear",
                            "${TextCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid432",
                            "width",
                            67422,
                            0,
                            "linear",
                            "${TextCopy19}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid878",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy42}",
                            '0',
                            '0'
                        ],
                        [
                            "eid879",
                            "opacity",
                            143127,
                            0,
                            "linear",
                            "${TextCopy42}",
                            '0',
                            '1'
                        ],
                        [
                            "eid880",
                            "opacity",
                            145589,
                            520,
                            "linear",
                            "${TextCopy42}",
                            '1',
                            '0'
                        ],
                        [
                            "eid798",
                            "clip",
                            121750,
                            2000,
                            "linear",
                            "${TextCopy37}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid799",
                            "clip",
                            123750,
                            520,
                            "linear",
                            "${TextCopy37}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid465",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy22}",
                            '0',
                            '0'
                        ],
                        [
                            "eid466",
                            "opacity",
                            76238,
                            0,
                            "linear",
                            "${TextCopy22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid467",
                            "opacity",
                            79849,
                            476,
                            "linear",
                            "${TextCopy22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid987",
                            "left",
                            154627,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '192px',
                            '192px'
                        ],
                        [
                            "eid476",
                            "clip",
                            74236,
                            2000,
                            "linear",
                            "${TextCopy23}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid477",
                            "clip",
                            76236,
                            520,
                            "linear",
                            "${TextCopy23}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid351",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '0',
                            '0'
                        ],
                        [
                            "eid383",
                            "opacity",
                            31696,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "opacity",
                            38196,
                            476,
                            "linear",
                            "${TextCopy9}",
                            '1',
                            '0'
                        ],
                        [
                            "eid588",
                            "scaleX",
                            94250,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '2.35556',
                            '2.35556'
                        ],
                        [
                            "eid1002",
                            "width",
                            155500,
                            0,
                            "linear",
                            "${TextCopy46}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid550",
                            "top",
                            0,
                            0,
                            "linear",
                            "${flotteur}",
                            '494px',
                            '494px'
                        ],
                        [
                            "eid937",
                            "top",
                            40424,
                            0,
                            "linear",
                            "${TextCopy20}",
                            '695px',
                            '696px'
                        ],
                        [
                            "eid548",
                            "width",
                            90845,
                            0,
                            "linear",
                            "${TextCopy27}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid502",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy25}",
                            '0',
                            '0'
                        ],
                        [
                            "eid503",
                            "opacity",
                            81093,
                            0,
                            "linear",
                            "${TextCopy25}",
                            '0',
                            '1'
                        ],
                        [
                            "eid504",
                            "opacity",
                            86706,
                            476,
                            "linear",
                            "${TextCopy25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid296",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${explication2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid295",
                            "opacity",
                            43736,
                            0,
                            "linear",
                            "${explication2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid482",
                            "opacity",
                            80801,
                            0,
                            "linear",
                            "${explication2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid890",
                            "width",
                            141000,
                            0,
                            "linear",
                            "${TextCopy43}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid785",
                            "top",
                            123875,
                            0,
                            "linear",
                            "${TextCopy36}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid409",
                            "left",
                            61333,
                            0,
                            "linear",
                            "${TextCopy17}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid551",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${flotteur}",
                            '0',
                            '0'
                        ],
                        [
                            "eid592",
                            "opacity",
                            94250,
                            0,
                            "linear",
                            "${flotteur}",
                            '0',
                            '1'
                        ],
                        [
                            "eid962",
                            "opacity",
                            128000,
                            0,
                            "linear",
                            "${flotteur}",
                            '1',
                            '1'
                        ],
                        [
                            "eid866",
                            "opacity",
                            140570,
                            0,
                            "linear",
                            "${flotteur}",
                            '1',
                            '0'
                        ],
                        [
                            "eid947",
                            "opacity",
                            148000,
                            0,
                            "linear",
                            "${flotteur}",
                            '0',
                            '1'
                        ],
                        [
                            "eid965",
                            "opacity",
                            154627,
                            0,
                            "linear",
                            "${flotteur}",
                            '1',
                            '0'
                        ],
                        [
                            "eid673",
                            "width",
                            104073,
                            0,
                            "linear",
                            "${TextCopy31}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid240",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${leia_petite}",
                            '0',
                            '0'
                        ],
                        [
                            "eid258",
                            "opacity",
                            31236,
                            0,
                            "linear",
                            "${leia_petite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid299",
                            "opacity",
                            43736,
                            0,
                            "linear",
                            "${leia_petite}",
                            '1',
                            '1'
                        ],
                        [
                            "eid487",
                            "opacity",
                            80801,
                            0,
                            "linear",
                            "${leia_petite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid348",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid365",
                            "opacity",
                            10216,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid177",
                            "opacity",
                            13806,
                            476,
                            "linear",
                            "${TextCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid782",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete}",
                            '0',
                            '0'
                        ],
                        [
                            "eid783",
                            "opacity",
                            116411,
                            379,
                            "linear",
                            "${tete}",
                            '0',
                            '1'
                        ],
                        [
                            "eid784",
                            "opacity",
                            121044,
                            476,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid804",
                            "opacity",
                            121750,
                            379,
                            "linear",
                            "${tete}",
                            '0',
                            '1'
                        ],
                        [
                            "eid803",
                            "opacity",
                            126383,
                            476,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid873",
                            "opacity",
                            141000,
                            379,
                            "linear",
                            "${tete}",
                            '0',
                            '1'
                        ],
                        [
                            "eid874",
                            "opacity",
                            145633,
                            476,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid359",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid373",
                            "opacity",
                            17851,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid185",
                            "opacity",
                            24647,
                            476,
                            "linear",
                            "${TextCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid308",
                            "top",
                            48676,
                            0,
                            "linear",
                            "${TextCopy13}",
                            '707px',
                            '707px'
                        ],
                        [
                            "eid200",
                            "clip",
                            20371,
                            2000,
                            "linear",
                            "${TextCopy5}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid201",
                            "clip",
                            22371,
                            520,
                            "linear",
                            "${TextCopy5}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid230",
                            "clip",
                            25500,
                            2000,
                            "linear",
                            "${TextCopy7}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid231",
                            "clip",
                            27500,
                            520,
                            "linear",
                            "${TextCopy7}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid256",
                            "left",
                            0,
                            0,
                            "linear",
                            "${leia_petite}",
                            '450px',
                            '214px'
                        ],
                        [
                            "eid984",
                            "left",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid992",
                            "left",
                            154627,
                            0,
                            "linear",
                            "${RoundRect}",
                            '209px',
                            '210px'
                        ],
                        [
                            "eid1087",
                            "top",
                            170000,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '699px',
                            '699px'
                        ],
                        [
                            "eid375",
                            "top",
                            20371,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '702px',
                            '707px'
                        ],
                        [
                            "eid333",
                            "width",
                            55710,
                            0,
                            "linear",
                            "${TextCopy14}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid788",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy36}",
                            '0',
                            '0'
                        ],
                        [
                            "eid789",
                            "opacity",
                            123877,
                            0,
                            "linear",
                            "${TextCopy36}",
                            '0',
                            '1'
                        ],
                        [
                            "eid790",
                            "opacity",
                            126339,
                            520,
                            "linear",
                            "${TextCopy36}",
                            '1',
                            '0'
                        ],
                        [
                            "eid343",
                            "left",
                            51,
                            0,
                            "linear",
                            "${explication3}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid940",
                            "top",
                            69696,
                            0,
                            "linear",
                            "${TextCopy18}",
                            '695px',
                            '696px'
                        ],
                        [
                            "eid309",
                            "left",
                            48676,
                            0,
                            "linear",
                            "${TextCopy13}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid126",
                            "top",
                            0,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '368px',
                            '368px'
                        ],
                        [
                            "eid847",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy40}",
                            '0',
                            '0'
                        ],
                        [
                            "eid848",
                            "opacity",
                            136526,
                            0,
                            "linear",
                            "${TextCopy40}",
                            '0',
                            '1'
                        ],
                        [
                            "eid849",
                            "opacity",
                            140050,
                            520,
                            "linear",
                            "${TextCopy40}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1005",
                            "left",
                            155500,
                            0,
                            "linear",
                            "${TextCopy46}",
                            '255px',
                            '247px'
                        ],
                        [
                            "eid302",
                            "top",
                            44385,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid325",
                            "top",
                            53635,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid392",
                            "top",
                            60635,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid414",
                            "top",
                            67724,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid479",
                            "top",
                            74538,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid488",
                            "top",
                            81395,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid516",
                            "top",
                            87788,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid538",
                            "top",
                            91147,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '644px',
                            '644px'
                        ],
                        [
                            "eid653",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy29}",
                            '0',
                            '0'
                        ],
                        [
                            "eid654",
                            "opacity",
                            97502,
                            0,
                            "linear",
                            "${TextCopy29}",
                            '0',
                            '1'
                        ],
                        [
                            "eid655",
                            "opacity",
                            101113,
                            476,
                            "linear",
                            "${TextCopy29}",
                            '1',
                            '0'
                        ],
                        [
                            "eid398",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy16}",
                            '0',
                            '0'
                        ],
                        [
                            "eid399",
                            "opacity",
                            63609,
                            0,
                            "linear",
                            "${TextCopy16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid400",
                            "opacity",
                            66946,
                            476,
                            "linear",
                            "${TextCopy16}",
                            '1',
                            '0'
                        ],
                        [
                            "eid884",
                            "left",
                            141000,
                            0,
                            "linear",
                            "${TextCopy43}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid127",
                            "left",
                            0,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid834",
                            "width",
                            128000,
                            0,
                            "linear",
                            "${TextCopy39}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid426",
                            "clip",
                            67422,
                            2000,
                            "linear",
                            "${TextCopy19}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid427",
                            "clip",
                            69422,
                            520,
                            "linear",
                            "${TextCopy19}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid133",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '0'
                        ],
                        [
                            "eid134",
                            "opacity",
                            52,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid135",
                            "opacity",
                            97,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid139",
                            "opacity",
                            544,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '0'
                        ],
                        [
                            "eid140",
                            "opacity",
                            596,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            641,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid142",
                            "opacity",
                            704,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '0'
                        ],
                        [
                            "eid143",
                            "opacity",
                            756,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid144",
                            "opacity",
                            801,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid145",
                            "opacity",
                            1365,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '0'
                        ],
                        [
                            "eid146",
                            "opacity",
                            1417,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid147",
                            "opacity",
                            1462,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid138",
                            "opacity",
                            1521,
                            88,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid519",
                            "opacity",
                            88851,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid520",
                            "opacity",
                            88903,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid521",
                            "opacity",
                            88948,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid522",
                            "opacity",
                            89395,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '0'
                        ],
                        [
                            "eid523",
                            "opacity",
                            89447,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid524",
                            "opacity",
                            89492,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid525",
                            "opacity",
                            89555,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '0'
                        ],
                        [
                            "eid526",
                            "opacity",
                            89607,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid527",
                            "opacity",
                            89652,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid528",
                            "opacity",
                            90216,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '0'
                        ],
                        [
                            "eid529",
                            "opacity",
                            90268,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid530",
                            "opacity",
                            90313,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid532",
                            "opacity",
                            90383,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '0'
                        ],
                        [
                            "eid533",
                            "opacity",
                            90435,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '0',
                            '1'
                        ],
                        [
                            "eid534",
                            "opacity",
                            90480,
                            0,
                            "linear",
                            "${leia_parlegrande}",
                            '1',
                            '0'
                        ],
                        [
                            "eid755",
                            "top",
                            118536,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '703px',
                            '695px'
                        ],
                        [
                            "eid344",
                            "top",
                            51,
                            0,
                            "linear",
                            "${explication3}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid819",
                            "top",
                            130125,
                            0,
                            "linear",
                            "${TextCopy38}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid433",
                            "left",
                            17851,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '237px',
                            '236px'
                        ],
                        [
                            "eid542",
                            "left",
                            90845,
                            0,
                            "linear",
                            "${TextCopy27}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid846",
                            "left",
                            136524,
                            0,
                            "linear",
                            "${TextCopy40}",
                            '293px',
                            '293px'
                        ],
                        [
                            "eid841",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '0'
                        ],
                        [
                            "eid839",
                            "opacity",
                            128000,
                            379,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid840",
                            "opacity",
                            133651,
                            476,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid861",
                            "opacity",
                            134399,
                            379,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid862",
                            "opacity",
                            140050,
                            476,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid923",
                            "opacity",
                            148500,
                            379,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid924",
                            "opacity",
                            153580,
                            476,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid942",
                            "top",
                            83093,
                            0,
                            "linear",
                            "${TextCopy24}",
                            '695px',
                            '697px'
                        ],
                        [
                            "eid826",
                            "width",
                            130125,
                            0,
                            "linear",
                            "${TextCopy38}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid765",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy35}",
                            '0',
                            '0'
                        ],
                        [
                            "eid766",
                            "opacity",
                            116411,
                            0,
                            "linear",
                            "${TextCopy35}",
                            '0',
                            '1'
                        ],
                        [
                            "eid767",
                            "opacity",
                            121044,
                            476,
                            "linear",
                            "${TextCopy35}",
                            '1',
                            '0'
                        ],
                        [
                            "eid174",
                            "clip",
                            8000,
                            2000,
                            "linear",
                            "${TextCopy}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid175",
                            "clip",
                            10000,
                            520,
                            "linear",
                            "${TextCopy}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid939",
                            "top",
                            46402,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '679px',
                            '680px'
                        ],
                        [
                            "eid698",
                            "top",
                            109000,
                            0,
                            "linear",
                            "${TextCopy34}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid499",
                            "top",
                            81093,
                            0,
                            "linear",
                            "${TextCopy25}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid664",
                            "left",
                            95500,
                            0,
                            "linear",
                            "${TextCopy30}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid307",
                            "left",
                            46402,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid667",
                            "clip",
                            104073,
                            2000,
                            "linear",
                            "${TextCopy31}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid668",
                            "clip",
                            107600,
                            520,
                            "linear",
                            "${TextCopy31}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid941",
                            "top",
                            76236,
                            0,
                            "linear",
                            "${TextCopy22}",
                            '695px',
                            '696px'
                        ],
                        [
                            "eid353",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy12}",
                            '0',
                            '0'
                        ],
                        [
                            "eid387",
                            "opacity",
                            44186,
                            0,
                            "linear",
                            "${TextCopy12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid291",
                            "opacity",
                            52436,
                            476,
                            "linear",
                            "${TextCopy12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid424",
                            "width",
                            69696,
                            0,
                            "linear",
                            "${TextCopy18}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid471",
                            "top",
                            74236,
                            0,
                            "linear",
                            "${TextCopy23}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid498",
                            "width",
                            83093,
                            0,
                            "linear",
                            "${TextCopy24}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid510",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy26}",
                            '0',
                            '0'
                        ],
                        [
                            "eid511",
                            "opacity",
                            87488,
                            0,
                            "linear",
                            "${TextCopy26}",
                            '0',
                            '1'
                        ],
                        [
                            "eid512",
                            "opacity",
                            90006,
                            476,
                            "linear",
                            "${TextCopy26}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1063",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid1065",
                            "opacity",
                            164500,
                            500,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1070",
                            "opacity",
                            165500,
                            500,
                            "linear",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid973",
                            "width",
                            0,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '417px',
                            '417px'
                        ],
                        [
                            "eid982",
                            "width",
                            154627,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '417px',
                            '630px'
                        ],
                        [
                            "eid968",
                            "width",
                            0,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '1024px',
                            '1024px'
                        ],
                        [
                            "eid978",
                            "width",
                            154627,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '1024px',
                            '1547px'
                        ],
                        [
                            "eid822",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy38}",
                            '0',
                            '0'
                        ],
                        [
                            "eid823",
                            "opacity",
                            130127,
                            0,
                            "linear",
                            "${TextCopy38}",
                            '0',
                            '1'
                        ],
                        [
                            "eid824",
                            "opacity",
                            133651,
                            520,
                            "linear",
                            "${TextCopy38}",
                            '1',
                            '0'
                        ],
                        [
                            "eid931",
                            "top",
                            17851,
                            0,
                            "linear",
                            "${TextCopy3}",
                            '679px',
                            '681px'
                        ],
                        [
                            "eid915",
                            "top",
                            150500,
                            0,
                            "linear",
                            "${TextCopy45}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid164",
                            "width",
                            2809,
                            0,
                            "linear",
                            "${Text}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid257",
                            "top",
                            0,
                            0,
                            "linear",
                            "${leia_petite}",
                            '368px',
                            '504px'
                        ],
                        [
                            "eid294",
                            "width",
                            44186,
                            0,
                            "linear",
                            "${TextCopy12}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid292",
                            "clip",
                            44186,
                            2000,
                            "linear",
                            "${TextCopy12}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid293",
                            "clip",
                            46186,
                            520,
                            "linear",
                            "${TextCopy12}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid442",
                            "width",
                            40424,
                            0,
                            "linear",
                            "${TextCopy20}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid908",
                            "clip",
                            148500,
                            2000,
                            "linear",
                            "${TextCopy44}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid909",
                            "clip",
                            150500,
                            520,
                            "linear",
                            "${TextCopy44}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid204",
                            "width",
                            20371,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid657",
                            "width",
                            97500,
                            0,
                            "linear",
                            "${TextCopy29}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid478",
                            "width",
                            74236,
                            0,
                            "linear",
                            "${TextCopy23}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid232",
                            "width",
                            25500,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid176",
                            "width",
                            8000,
                            0,
                            "linear",
                            "${TextCopy}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid699",
                            "left",
                            109000,
                            0,
                            "linear",
                            "${TextCopy34}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid773",
                            "left",
                            116411,
                            0,
                            "linear",
                            "${TextCopy35}",
                            '239px',
                            '155px'
                        ],
                        [
                            "eid946",
                            "left",
                            154627,
                            0,
                            "linear",
                            "${TextCopy35}",
                            '155px',
                            '156px'
                        ],
                        [
                            "eid820",
                            "clip",
                            130125,
                            2000,
                            "linear",
                            "${TextCopy38}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid821",
                            "clip",
                            133651,
                            520,
                            "linear",
                            "${TextCopy38}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid920",
                            "clip",
                            150500,
                            2000,
                            "linear",
                            "${TextCopy45}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid921",
                            "clip",
                            153580,
                            520,
                            "linear",
                            "${TextCopy45}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid435",
                            "left",
                            20371,
                            0,
                            "linear",
                            "${TextCopy5}",
                            '238px',
                            '231px'
                        ],
                        [
                            "eid335",
                            "left",
                            53436,
                            0,
                            "linear",
                            "${TextCopy15}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid914",
                            "width",
                            148500,
                            0,
                            "linear",
                            "${TextCopy44}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid508",
                            "clip",
                            87486,
                            2000,
                            "linear",
                            "${TextCopy26}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid509",
                            "clip",
                            89486,
                            520,
                            "linear",
                            "${TextCopy26}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid339",
                            "width",
                            53436,
                            0,
                            "linear",
                            "${TextCopy15}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid354",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '0',
                            '0'
                        ],
                        [
                            "eid388",
                            "opacity",
                            46402,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid286",
                            "opacity",
                            52436,
                            476,
                            "linear",
                            "${TextCopy11}",
                            '1',
                            '0'
                        ],
                        [
                            "eid193",
                            "width",
                            15635,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid829",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy39}",
                            '0',
                            '0'
                        ],
                        [
                            "eid830",
                            "opacity",
                            128000,
                            0,
                            "linear",
                            "${TextCopy39}",
                            '0',
                            '1'
                        ],
                        [
                            "eid831",
                            "opacity",
                            133695,
                            476,
                            "linear",
                            "${TextCopy39}",
                            '1',
                            '0'
                        ],
                        [
                            "eid590",
                            "left",
                            94250,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '376px',
                            '376px'
                        ],
                        [
                            "eid913",
                            "left",
                            148500,
                            0,
                            "linear",
                            "${TextCopy44}",
                            '288px',
                            '288px'
                        ],
                        [
                            "eid966",
                            "height",
                            0,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '768px',
                            '768px'
                        ],
                        [
                            "eid977",
                            "height",
                            154627,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '768px',
                            '1192px'
                        ],
                        [
                            "eid883",
                            "top",
                            141000,
                            0,
                            "linear",
                            "${TextCopy43}",
                            '665px',
                            '665px'
                        ],
                        [
                            "eid1007",
                            "clip",
                            157250,
                            2000,
                            "linear",
                            "${TextCopy47}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1008",
                            "clip",
                            159250,
                            520,
                            "linear",
                            "${TextCopy47}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid749",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '0',
                            '0'
                        ],
                        [
                            "eid747",
                            "opacity",
                            115500,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid816",
                            "opacity",
                            127250,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '1',
                            '0'
                        ],
                        [
                            "eid868",
                            "opacity",
                            140526,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid902",
                            "opacity",
                            148000,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '1',
                            '0'
                        ],
                        [
                            "eid976",
                            "opacity",
                            154627,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "opacity",
                            4000,
                            0,
                            "linear",
                            "${explication1}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid238",
                            "opacity",
                            31236,
                            0,
                            "linear",
                            "${explication1}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid486",
                            "opacity",
                            80801,
                            0,
                            "linear",
                            "${explication1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid357",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy14}",
                            '0',
                            '0'
                        ],
                        [
                            "eid391",
                            "opacity",
                            55712,
                            0,
                            "linear",
                            "${TextCopy14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid331",
                            "opacity",
                            59470,
                            476,
                            "linear",
                            "${TextCopy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid313",
                            "width",
                            48676,
                            0,
                            "linear",
                            "${TextCopy13}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid437",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy20}",
                            '0',
                            '0'
                        ],
                        [
                            "eid438",
                            "opacity",
                            40424,
                            0,
                            "linear",
                            "${TextCopy20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid439",
                            "opacity",
                            43236,
                            375,
                            "linear",
                            "${TextCopy20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid423",
                            "left",
                            69696,
                            0,
                            "linear",
                            "${TextCopy18}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid304",
                            "top",
                            44186,
                            0,
                            "linear",
                            "${TextCopy12}",
                            '649px',
                            '653px'
                        ],
                        [
                            "eid406",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy17}",
                            '0',
                            '0'
                        ],
                        [
                            "eid407",
                            "opacity",
                            61333,
                            0,
                            "linear",
                            "${TextCopy17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid408",
                            "opacity",
                            66946,
                            476,
                            "linear",
                            "${TextCopy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid311",
                            "clip",
                            48676,
                            2000,
                            "linear",
                            "${TextCopy13}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid312",
                            "clip",
                            50676,
                            520,
                            "linear",
                            "${TextCopy13}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid269",
                            "width",
                            33912,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid396",
                            "clip",
                            63607,
                            2000,
                            "linear",
                            "${TextCopy16}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid397",
                            "clip",
                            65607,
                            520,
                            "linear",
                            "${TextCopy16}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid934",
                            "top",
                            33912,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '695px',
                            '696px'
                        ],
                        [
                            "eid340",
                            "top",
                            53436,
                            0,
                            "linear",
                            "${TextCopy15}",
                            '681px',
                            '660px'
                        ],
                        [
                            "eid1012",
                            "left",
                            157250,
                            0,
                            "linear",
                            "${TextCopy47}",
                            '247px',
                            '247px'
                        ],
                        [
                            "eid658",
                            "top",
                            95500,
                            0,
                            "linear",
                            "${TextCopy30}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid440",
                            "clip",
                            40424,
                            1581,
                            "linear",
                            "${TextCopy20}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid441",
                            "clip",
                            42004,
                            411,
                            "linear",
                            "${TextCopy20}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid506",
                            "width",
                            81093,
                            0,
                            "linear",
                            "${TextCopy25}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid1080",
                            "clip",
                            168339,
                            1911,
                            "linear",
                            "${Text3}",
                            [0,2.29296875,28,0],
                            [0,552,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1093",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1097",
                            "opacity",
                            170000,
                            0,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1101",
                            "opacity",
                            173250,
                            500,
                            "linear",
                            "${Text3Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid770",
                            "width",
                            116411,
                            0,
                            "linear",
                            "${TextCopy35}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid191",
                            "clip",
                            15635,
                            2000,
                            "linear",
                            "${TextCopy4}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid192",
                            "clip",
                            17635,
                            520,
                            "linear",
                            "${TextCopy4}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid264",
                            "left",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '205px',
                            '205px'
                        ],
                        [
                            "eid263",
                            "left",
                            31696,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '205px',
                            '217px'
                        ],
                        [
                            "eid453",
                            "left",
                            38672,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '217px',
                            '217px'
                        ],
                        [
                            "eid549",
                            "left",
                            81093,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '217px',
                            '205px'
                        ],
                        [
                            "eid186",
                            "clip",
                            17851,
                            2000,
                            "linear",
                            "${TextCopy3}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid187",
                            "clip",
                            19851,
                            520,
                            "linear",
                            "${TextCopy3}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid267",
                            "clip",
                            33912,
                            2000,
                            "linear",
                            "${TextCopy8}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid268",
                            "clip",
                            35912,
                            520,
                            "linear",
                            "${TextCopy8}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid225",
                            "clip",
                            27750,
                            2000,
                            "linear",
                            "${TextCopy6}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid226",
                            "clip",
                            29750,
                            520,
                            "linear",
                            "${TextCopy6}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid473",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy23}",
                            '0',
                            '0'
                        ],
                        [
                            "eid474",
                            "opacity",
                            74236,
                            0,
                            "linear",
                            "${TextCopy23}",
                            '0',
                            '1'
                        ],
                        [
                            "eid475",
                            "opacity",
                            79849,
                            476,
                            "linear",
                            "${TextCopy23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid493",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy24}",
                            '0',
                            '0'
                        ],
                        [
                            "eid494",
                            "opacity",
                            83095,
                            0,
                            "linear",
                            "${TextCopy24}",
                            '0',
                            '1'
                        ],
                        [
                            "eid495",
                            "opacity",
                            86706,
                            476,
                            "linear",
                            "${TextCopy24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid786",
                            "clip",
                            123875,
                            2000,
                            "linear",
                            "${TextCopy36}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid787",
                            "clip",
                            126339,
                            520,
                            "linear",
                            "${TextCopy36}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid714",
                            "top",
                            43736,
                            0,
                            "linear",
                            "${explication2}",
                            '37px',
                            '37px'
                        ],
                        [
                            "eid500",
                            "clip",
                            81093,
                            2000,
                            "linear",
                            "${TextCopy25}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid501",
                            "clip",
                            83093,
                            520,
                            "linear",
                            "${TextCopy25}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid853",
                            "top",
                            134399,
                            0,
                            "linear",
                            "${TextCopy41}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid410",
                            "width",
                            61333,
                            0,
                            "linear",
                            "${TextCopy17}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid713",
                            "top",
                            2809,
                            0,
                            "linear",
                            "${Text}",
                            '662px',
                            '656px'
                        ],
                        [
                            "eid272",
                            "clip",
                            31696,
                            2000,
                            "linear",
                            "${TextCopy9}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid273",
                            "clip",
                            33696,
                            520,
                            "linear",
                            "${TextCopy9}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid907",
                            "top",
                            148500,
                            0,
                            "linear",
                            "${TextCopy44}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid505",
                            "left",
                            81093,
                            0,
                            "linear",
                            "${TextCopy25}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid860",
                            "width",
                            134399,
                            0,
                            "linear",
                            "${TextCopy41}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid148",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid150",
                            "opacity",
                            2809,
                            191,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid210",
                            "opacity",
                            6399,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid214",
                            "opacity",
                            7500,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid215",
                            "opacity",
                            13806,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid216",
                            "opacity",
                            15635,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid220",
                            "opacity",
                            24647,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid221",
                            "opacity",
                            25500,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid222",
                            "opacity",
                            30236,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid259",
                            "opacity",
                            31736,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid260",
                            "opacity",
                            38196,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid454",
                            "opacity",
                            38712,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid455",
                            "opacity",
                            43148,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid278",
                            "opacity",
                            44186,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid279",
                            "opacity",
                            52436,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid326",
                            "opacity",
                            53436,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid327",
                            "opacity",
                            59470,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid393",
                            "opacity",
                            60436,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid394",
                            "opacity",
                            66946,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid415",
                            "opacity",
                            67422,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid416",
                            "opacity",
                            73035,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid480",
                            "opacity",
                            74236,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid461",
                            "opacity",
                            80325,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid489",
                            "opacity",
                            81093,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid490",
                            "opacity",
                            86706,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid517",
                            "opacity",
                            87486,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid518",
                            "opacity",
                            90236,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid539",
                            "opacity",
                            90845,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.000000',
                            '0.81'
                        ],
                        [
                            "eid540",
                            "opacity",
                            93595,
                            476,
                            "linear",
                            "${RoundRect2}",
                            '0.810000',
                            '0'
                        ],
                        [
                            "eid775",
                            "left",
                            118536,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid669",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy31}",
                            '0',
                            '0'
                        ],
                        [
                            "eid682",
                            "opacity",
                            104075,
                            0,
                            "linear",
                            "${TextCopy31}",
                            '0',
                            '1'
                        ],
                        [
                            "eid683",
                            "opacity",
                            107600,
                            520,
                            "linear",
                            "${TextCopy31}",
                            '1',
                            '0'
                        ],
                        [
                            "eid832",
                            "clip",
                            128000,
                            2000,
                            "linear",
                            "${TextCopy39}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid833",
                            "clip",
                            130000,
                            520,
                            "linear",
                            "${TextCopy39}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1000",
                            "clip",
                            155500,
                            2000,
                            "linear",
                            "${TextCopy46}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1001",
                            "clip",
                            157500,
                            520,
                            "linear",
                            "${TextCopy46}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid370",
                            "top",
                            10216,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '688px',
                            '698px'
                        ],
                        [
                            "eid1003",
                            "top",
                            155500,
                            0,
                            "linear",
                            "${TextCopy46}",
                            '660px',
                            '668px'
                        ],
                        [
                            "eid854",
                            "left",
                            134399,
                            0,
                            "linear",
                            "${TextCopy41}",
                            '288px',
                            '288px'
                        ],
                        [
                            "eid656",
                            "left",
                            97500,
                            0,
                            "linear",
                            "${TextCopy29}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid691",
                            "left",
                            111125,
                            0,
                            "linear",
                            "${TextCopy33}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid922",
                            "width",
                            150500,
                            0,
                            "linear",
                            "${TextCopy45}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid287",
                            "clip",
                            46402,
                            2000,
                            "linear",
                            "${TextCopy11}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid288",
                            "clip",
                            48402,
                            520,
                            "linear",
                            "${TextCopy11}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid651",
                            "clip",
                            97500,
                            2000,
                            "linear",
                            "${TextCopy29}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid652",
                            "clip",
                            99500,
                            520,
                            "linear",
                            "${TextCopy29}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid881",
                            "left",
                            143125,
                            0,
                            "linear",
                            "${TextCopy42}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid431",
                            "left",
                            67422,
                            0,
                            "linear",
                            "${TextCopy19}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid412",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${explication4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid411",
                            "opacity",
                            67422,
                            0,
                            "linear",
                            "${explication4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid484",
                            "opacity",
                            80801,
                            0,
                            "linear",
                            "${explication4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid543",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy27}",
                            '0',
                            '0'
                        ],
                        [
                            "eid544",
                            "opacity",
                            90847,
                            0,
                            "linear",
                            "${TextCopy27}",
                            '0',
                            '1'
                        ],
                        [
                            "eid545",
                            "opacity",
                            93365,
                            476,
                            "linear",
                            "${TextCopy27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid356",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy15}",
                            '0',
                            '0'
                        ],
                        [
                            "eid390",
                            "opacity",
                            53436,
                            0,
                            "linear",
                            "${TextCopy15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid336",
                            "opacity",
                            59470,
                            476,
                            "linear",
                            "${TextCopy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid672",
                            "left",
                            104073,
                            0,
                            "linear",
                            "${TextCopy31}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid695",
                            "clip",
                            111125,
                            2000,
                            "linear",
                            "${TextCopy33}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid696",
                            "clip",
                            114651,
                            520,
                            "linear",
                            "${TextCopy33}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid262",
                            "height",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid413",
                            "height",
                            67422,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '102px',
                            '109px'
                        ],
                        [
                            "eid1066",
                            "left",
                            164500,
                            0,
                            "linear",
                            "${Text2}",
                            '486px',
                            '486px'
                        ],
                        [
                            "eid589",
                            "scaleY",
                            94250,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '2.35556',
                            '2.35556'
                        ],
                        [
                            "eid842",
                            "left",
                            128000,
                            0,
                            "linear",
                            "${TextCopy39}",
                            '294px',
                            '288px'
                        ],
                        [
                            "eid768",
                            "clip",
                            116411,
                            2000,
                            "linear",
                            "${TextCopy35}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid769",
                            "clip",
                            118411,
                            520,
                            "linear",
                            "${TextCopy35}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1067",
                            "top",
                            164500,
                            0,
                            "linear",
                            "${Text2}",
                            '187px',
                            '187px'
                        ],
                        [
                            "eid337",
                            "clip",
                            53436,
                            2000,
                            "linear",
                            "${TextCopy15}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid338",
                            "clip",
                            55436,
                            520,
                            "linear",
                            "${TextCopy15}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid792",
                            "width",
                            123875,
                            0,
                            "linear",
                            "${TextCopy36}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid943",
                            "top",
                            87486,
                            0,
                            "linear",
                            "${TextCopy26}",
                            '666px',
                            '661px'
                        ],
                        [
                            "eid347",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid364",
                            "opacity",
                            8000,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid173",
                            "opacity",
                            13806,
                            476,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid748",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid754",
                            "opacity",
                            115500,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid817",
                            "opacity",
                            127250,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid869",
                            "opacity",
                            140526,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid903",
                            "opacity",
                            148000,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1029",
                            "opacity",
                            154627,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1031",
                            "opacity",
                            161056,
                            944,
                            "linear",
                            "${yeux_bimo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1034",
                            "opacity",
                            166250,
                            750,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid178",
                            "clip",
                            10216,
                            2000,
                            "linear",
                            "${TextCopy2}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid179",
                            "clip",
                            12216,
                            520,
                            "linear",
                            "${TextCopy2}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid289",
                            "width",
                            46402,
                            0,
                            "linear",
                            "${TextCopy11}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid352",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid384",
                            "opacity",
                            33912,
                            0,
                            "linear",
                            "${TextCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid266",
                            "opacity",
                            38196,
                            476,
                            "linear",
                            "${TextCopy8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid513",
                            "left",
                            87486,
                            0,
                            "linear",
                            "${TextCopy26}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid969",
                            "left",
                            0,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '-1px',
                            '-1px'
                        ],
                        [
                            "eid227",
                            "width",
                            27750,
                            0,
                            "linear",
                            "${TextCopy6}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid800",
                            "width",
                            121750,
                            0,
                            "linear",
                            "${TextCopy37}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid650",
                            "top",
                            97500,
                            0,
                            "linear",
                            "${TextCopy29}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid910",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy44}",
                            '0',
                            '0'
                        ],
                        [
                            "eid911",
                            "opacity",
                            148500,
                            0,
                            "linear",
                            "${TextCopy44}",
                            '0',
                            '1'
                        ],
                        [
                            "eid912",
                            "opacity",
                            153580,
                            476,
                            "linear",
                            "${TextCopy44}",
                            '1',
                            '0'
                        ],
                        [
                            "eid447",
                            "clip",
                            38672,
                            1581,
                            "linear",
                            "${TextCopy21}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid448",
                            "clip",
                            40253,
                            411,
                            "linear",
                            "${TextCopy21}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid639",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid641",
                            "opacity",
                            95500,
                            500,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid687",
                            "opacity",
                            101113,
                            500,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid689",
                            "opacity",
                            101613,
                            500,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid688",
                            "opacity",
                            107600,
                            500,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid706",
                            "opacity",
                            108100,
                            900,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid709",
                            "opacity",
                            114651,
                            520,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid835",
                            "opacity",
                            128000,
                            900,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid836",
                            "opacity",
                            133080,
                            571,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid863",
                            "opacity",
                            134399,
                            900,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid864",
                            "opacity",
                            139479,
                            571,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid905",
                            "opacity",
                            148500,
                            900,
                            "linear",
                            "${RoundRect2Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid906",
                            "opacity",
                            153580,
                            571,
                            "linear",
                            "${RoundRect2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid329",
                            "clip",
                            55710,
                            2000,
                            "linear",
                            "${TextCopy14}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid330",
                            "clip",
                            57710,
                            520,
                            "linear",
                            "${TextCopy14}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid888",
                            "clip",
                            141000,
                            2000,
                            "linear",
                            "${TextCopy43}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid889",
                            "clip",
                            143000,
                            520,
                            "linear",
                            "${TextCopy43}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid762",
                            "width",
                            118536,
                            0,
                            "linear",
                            "${TextCopy10}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid948",
                            "left",
                            94250,
                            2274,
                            "linear",
                            "${flotteur}",
                            '29px',
                            '42px'
                        ],
                        [
                            "eid949",
                            "left",
                            96524,
                            2558,
                            "linear",
                            "${flotteur}",
                            '42px',
                            '26px'
                        ],
                        [
                            "eid950",
                            "left",
                            99082,
                            2971,
                            "linear",
                            "${flotteur}",
                            '26px',
                            '36px'
                        ],
                        [
                            "eid951",
                            "left",
                            102053,
                            3224,
                            "linear",
                            "${flotteur}",
                            '36px',
                            '29px'
                        ],
                        [
                            "eid952",
                            "left",
                            105277,
                            2723,
                            "linear",
                            "${flotteur}",
                            '29px',
                            '38px'
                        ],
                        [
                            "eid953",
                            "left",
                            108000,
                            2374,
                            "linear",
                            "${flotteur}",
                            '38px',
                            '28px'
                        ],
                        [
                            "eid954",
                            "left",
                            110374,
                            4797,
                            "linear",
                            "${flotteur}",
                            '28px',
                            '43px'
                        ],
                        [
                            "eid955",
                            "left",
                            128000,
                            2842,
                            "linear",
                            "${flotteur}",
                            '29px',
                            '42px'
                        ],
                        [
                            "eid956",
                            "left",
                            130842,
                            3198,
                            "linear",
                            "${flotteur}",
                            '42px',
                            '26px'
                        ],
                        [
                            "eid957",
                            "left",
                            134040,
                            3713,
                            "linear",
                            "${flotteur}",
                            '26px',
                            '36px'
                        ],
                        [
                            "eid958",
                            "left",
                            137753,
                            4030,
                            "linear",
                            "${flotteur}",
                            '36px',
                            '29px'
                        ],
                        [
                            "eid959",
                            "left",
                            141784,
                            3404,
                            "linear",
                            "${flotteur}",
                            '29px',
                            '38px'
                        ],
                        [
                            "eid960",
                            "left",
                            145187,
                            2967,
                            "linear",
                            "${flotteur}",
                            '38px',
                            '28px'
                        ],
                        [
                            "eid961",
                            "left",
                            148155,
                            5996,
                            "linear",
                            "${flotteur}",
                            '28px',
                            '43px'
                        ],
                        [
                            "eid679",
                            "clip",
                            101949,
                            2000,
                            "linear",
                            "${TextCopy32}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid680",
                            "clip",
                            103949,
                            520,
                            "linear",
                            "${TextCopy32}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid705",
                            "width",
                            109000,
                            0,
                            "linear",
                            "${TextCopy34}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid180",
                            "width",
                            10216,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid985",
                            "top",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '654px',
                            '654px'
                        ],
                        [
                            "eid777",
                            "top",
                            116411,
                            0,
                            "linear",
                            "${TextCopy35}",
                            '668px',
                            '665px'
                        ],
                        [
                            "eid369",
                            "top",
                            7976,
                            0,
                            "linear",
                            "${TextCopy}",
                            '649px',
                            '660px'
                        ],
                        [
                            "eid690",
                            "top",
                            111125,
                            0,
                            "linear",
                            "${TextCopy33}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid741",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy21}",
                            '0',
                            '0'
                        ],
                        [
                            "eid743",
                            "opacity",
                            38672,
                            0,
                            "linear",
                            "${TextCopy21}",
                            '0',
                            '1'
                        ],
                        [
                            "eid446",
                            "opacity",
                            43236,
                            375,
                            "linear",
                            "${TextCopy21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid697",
                            "width",
                            111125,
                            0,
                            "linear",
                            "${TextCopy33}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid255",
                            "scaleY",
                            31236,
                            0,
                            "linear",
                            "${leia_petite}",
                            '0.89576',
                            '0.89576'
                        ],
                        [
                            "eid795",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy37}",
                            '0',
                            '0'
                        ],
                        [
                            "eid796",
                            "opacity",
                            121750,
                            0,
                            "linear",
                            "${TextCopy37}",
                            '0',
                            '1'
                        ],
                        [
                            "eid797",
                            "opacity",
                            126383,
                            476,
                            "linear",
                            "${TextCopy37}",
                            '1',
                            '0'
                        ],
                        [
                            "eid350",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid379",
                            "opacity",
                            27750,
                            0,
                            "linear",
                            "${TextCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            30270,
                            476,
                            "linear",
                            "${TextCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid852",
                            "width",
                            136524,
                            0,
                            "linear",
                            "${TextCopy40}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid933",
                            "top",
                            27750,
                            0,
                            "linear",
                            "${TextCopy6}",
                            '694px',
                            '696px'
                        ],
                        [
                            "eid552",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_parle_zoom}",
                            '0',
                            '0'
                        ],
                        [
                            "eid553",
                            "opacity",
                            94250,
                            0,
                            "linear",
                            "${charlie_parle_zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid867",
                            "opacity",
                            140570,
                            0,
                            "linear",
                            "${charlie_parle_zoom}",
                            '1',
                            '0'
                        ],
                        [
                            "eid897",
                            "opacity",
                            148000,
                            0,
                            "linear",
                            "${charlie_parle_zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid963",
                            "opacity",
                            154627,
                            0,
                            "linear",
                            "${charlie_parle_zoom}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1014",
                            "top",
                            157250,
                            0,
                            "linear",
                            "${TextCopy47}",
                            '668px',
                            '698px'
                        ],
                        [
                            "eid492",
                            "left",
                            83093,
                            0,
                            "linear",
                            "${TextCopy24}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid496",
                            "clip",
                            83093,
                            2000,
                            "linear",
                            "${TextCopy24}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid497",
                            "clip",
                            85093,
                            520,
                            "linear",
                            "${TextCopy24}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid882",
                            "width",
                            143125,
                            0,
                            "linear",
                            "${TextCopy42}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid401",
                            "left",
                            63607,
                            0,
                            "linear",
                            "${TextCopy16}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid876",
                            "clip",
                            143125,
                            2000,
                            "linear",
                            "${TextCopy42}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid877",
                            "clip",
                            145589,
                            520,
                            "linear",
                            "${TextCopy42}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid332",
                            "left",
                            55710,
                            0,
                            "linear",
                            "${TextCopy14}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid1081",
                            "clip",
                            170000,
                            1911,
                            "linear",
                            "${Text3Copy}",
                            [0,2.29296875,28,0],
                            [0,552,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid261",
                            "width",
                            0,
                            0,
                            "linear",
                            "${RoundRect2}",
                            '615px',
                            '615px'
                        ],
                        [
                            "eid979",
                            "height",
                            154627,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '99px',
                            '99px'
                        ],
                        [
                            "eid274",
                            "width",
                            31696,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '557px',
                            '557px'
                        ],
                        [
                            "eid363",
                            "left",
                            2809,
                            0,
                            "linear",
                            "${Text}",
                            '232px',
                            '232px'
                        ],
                        [
                            "eid700",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy34}",
                            '0',
                            '0'
                        ],
                        [
                            "eid701",
                            "opacity",
                            109000,
                            0,
                            "linear",
                            "${TextCopy34}",
                            '0',
                            '1'
                        ],
                        [
                            "eid702",
                            "opacity",
                            114695,
                            476,
                            "linear",
                            "${TextCopy34}",
                            '1',
                            '0'
                        ],
                        [
                            "eid938",
                            "top",
                            38672,
                            0,
                            "linear",
                            "${TextCopy21}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid944",
                            "top",
                            90845,
                            0,
                            "linear",
                            "${TextCopy27}",
                            '666px',
                            '662px'
                        ],
                        [
                            "eid666",
                            "top",
                            104073,
                            0,
                            "linear",
                            "${TextCopy31}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid917",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy45}",
                            '0',
                            '0'
                        ],
                        [
                            "eid918",
                            "opacity",
                            150502,
                            0,
                            "linear",
                            "${TextCopy45}",
                            '0',
                            '1'
                        ],
                        [
                            "eid919",
                            "opacity",
                            153580,
                            520,
                            "linear",
                            "${TextCopy45}",
                            '1',
                            '0'
                        ],
                        [
                            "eid674",
                            "top",
                            101949,
                            0,
                            "linear",
                            "${TextCopy32}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid1110",
                            "left",
                            115500,
                            6250,
                            "linear",
                            "${yeux_bimo2}",
                            '286px',
                            '244px'
                        ],
                        [
                            "eid1119",
                            "left",
                            127250,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '244px',
                            '244px'
                        ],
                        [
                            "eid1118",
                            "left",
                            140750,
                            4839,
                            "linear",
                            "${yeux_bimo2}",
                            '244px',
                            '283px'
                        ],
                        [
                            "eid1120",
                            "left",
                            145589,
                            3037,
                            "linear",
                            "${yeux_bimo2}",
                            '283px',
                            '288px'
                        ],
                        [
                            "eid1123",
                            "left",
                            148626,
                            6001,
                            "linear",
                            "${yeux_bimo2}",
                            '288px',
                            '335px'
                        ],
                        [
                            "eid1020",
                            "left",
                            154627,
                            2384,
                            "linear",
                            "${yeux_bimo2}",
                            '335px',
                            '388px'
                        ],
                        [
                            "eid1022",
                            "left",
                            157011,
                            1489,
                            "linear",
                            "${yeux_bimo2}",
                            '388px',
                            '389px'
                        ],
                        [
                            "eid1023",
                            "left",
                            158500,
                            2556,
                            "linear",
                            "${yeux_bimo2}",
                            '389px',
                            '308px'
                        ],
                        [
                            "eid1104",
                            "left",
                            166250,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '308px',
                            '339px'
                        ],
                        [
                            "eid1105",
                            "left",
                            167792,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '339px',
                            '339px'
                        ],
                        [
                            "eid745",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '0',
                            '0'
                        ],
                        [
                            "eid744",
                            "opacity",
                            115500,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid818",
                            "opacity",
                            127250,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '1',
                            '0'
                        ],
                        [
                            "eid870",
                            "opacity",
                            140526,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid901",
                            "opacity",
                            148000,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '1',
                            '0'
                        ],
                        [
                            "eid974",
                            "opacity",
                            154627,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid850",
                            "clip",
                            136524,
                            2000,
                            "linear",
                            "${TextCopy40}",
                            [0,-0.388671875,28,0],
                            [0,508.82421875,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid851",
                            "clip",
                            140050,
                            520,
                            "linear",
                            "${TextCopy40}",
                            [0,508.82421875,28,0],
                            [0,532.3447265625,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid994",
                            "top",
                            154627,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '44px',
                            '44px'
                        ],
                        [
                            "eid791",
                            "left",
                            123875,
                            0,
                            "linear",
                            "${TextCopy36}",
                            '155px',
                            '155px'
                        ],
                        [
                            "eid377",
                            "top",
                            15635,
                            0,
                            "linear",
                            "${TextCopy4}",
                            '641px',
                            '655px'
                        ],
                        [
                            "eid349",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid378",
                            "opacity",
                            25500,
                            0,
                            "linear",
                            "${TextCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid229",
                            "opacity",
                            30236,
                            476,
                            "linear",
                            "${TextCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid750",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid753",
                            "opacity",
                            116411,
                            379,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid781",
                            "opacity",
                            121044,
                            476,
                            "linear",
                            "${RoundRect}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid801",
                            "opacity",
                            121750,
                            379,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid802",
                            "opacity",
                            126383,
                            476,
                            "linear",
                            "${RoundRect}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid871",
                            "opacity",
                            141000,
                            379,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid872",
                            "opacity",
                            145633,
                            476,
                            "linear",
                            "${RoundRect}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid991",
                            "opacity",
                            155500,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1018",
                            "opacity",
                            160580,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1043",
                            "opacity",
                            168339,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1044",
                            "opacity",
                            173250,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid586",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '0',
                            '0'
                        ],
                        [
                            "eid587",
                            "opacity",
                            94250,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid865",
                            "opacity",
                            140570,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid899",
                            "opacity",
                            148000,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid964",
                            "opacity",
                            154627,
                            0,
                            "linear",
                            "${charlie_parle_verite}",
                            '1',
                            '0'
                        ],
                        [
                            "eid845",
                            "top",
                            136524,
                            0,
                            "linear",
                            "${TextCopy40}",
                            '695px',
                            '695px'
                        ],
                        [
                            "eid935",
                            "top",
                            31696,
                            0,
                            "linear",
                            "${TextCopy9}",
                            '657px',
                            '660px'
                        ],
                        [
                            "eid676",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy32}",
                            '0',
                            '0'
                        ],
                        [
                            "eid677",
                            "opacity",
                            101949,
                            0,
                            "linear",
                            "${TextCopy32}",
                            '0',
                            '1'
                        ],
                        [
                            "eid678",
                            "opacity",
                            107644,
                            476,
                            "linear",
                            "${TextCopy32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid997",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy46}",
                            '0',
                            '0'
                        ],
                        [
                            "eid998",
                            "opacity",
                            155500,
                            0,
                            "linear",
                            "${TextCopy46}",
                            '0',
                            '1'
                        ],
                        [
                            "eid999",
                            "opacity",
                            160580,
                            476,
                            "linear",
                            "${TextCopy46}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1061",
                            "top",
                            165500,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid366",
                            "left",
                            10216,
                            0,
                            "linear",
                            "${TextCopy2}",
                            '238px',
                            '238px'
                        ],
                        [
                            "eid472",
                            "left",
                            74236,
                            0,
                            "linear",
                            "${TextCopy23}",
                            '239px',
                            '239px'
                        ],
                        [
                            "eid661",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${TextCopy30}",
                            '0',
                            '0'
                        ],
                        [
                            "eid662",
                            "opacity",
                            95500,
                            0,
                            "linear",
                            "${TextCopy30}",
                            '0',
                            '1'
                        ],
                        [
                            "eid663",
                            "opacity",
                            101113,
                            476,
                            "linear",
                            "${TextCopy30}",
                            '1',
                            '0'
                        ],
                            [ "eid317", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_petite}', [] ] ],
                            [ "eid710", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${charlie_parle_verite}', [] ] ],
                            [ "eid316", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_parlegrande}', [] ] ],
                            [ "eid318", "trigger", 3000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parlegrande}', [] ] ],
                            [ "eid319", "trigger", 5329, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_petite}', [] ] ],
                            [ "eid320", "trigger", 5329, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_parlegrande}', [] ] ],
                            [ "eid321", "trigger", 7044, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parlegrande}', [] ] ],
                            [ "eid322", "trigger", 7939, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parlegrande}', [] ] ],
                            [ "eid114", "trigger", 15635, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parlegrande}', [] ] ],
                            [ "eid115", "trigger", 18859, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_parlegrande}', [] ] ],
                            [ "eid716", "trigger", 19000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parlegrande}', [] ] ],
                            [ "eid717", "trigger", 25500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parlegrande}', [] ] ],
                            [ "eid323", "trigger", 31236, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid324", "trigger", 34944, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid718", "trigger", 36250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_petite}', [] ] ],
                            [ "eid719", "trigger", 38672, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid720", "trigger", 40590, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid721", "trigger", 42199, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_petite}', [] ] ],
                            [ "eid722", "trigger", 44186, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid723", "trigger", 46202, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid724", "trigger", 49468, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid725", "trigger", 50761, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_petite}', [] ] ],
                            [ "eid726", "trigger", 53436, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid727", "trigger", 55436, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid728", "trigger", 61333, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid729", "trigger", 67422, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid730", "trigger", 70646, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid731", "trigger", 71942, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${leia_petite}', [] ] ],
                            [ "eid732", "trigger", 74236, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid733", "trigger", 76236, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_petite}', [] ] ],
                            [ "eid734", "trigger", 81093, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parlegrande}', [] ] ],
                            [ "eid735", "trigger", 87486, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parlegrande}', [] ] ],
                            [ "eid711", "trigger", 95500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid736", "trigger", 97600, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid737", "trigger", 101949, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid738", "trigger", 104093, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid739", "trigger", 109025, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid740", "trigger", 111125, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid925", "trigger", 128000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid926", "trigger", 130811, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [0] ] ],
                            [ "eid927", "trigger", 134399, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid928", "trigger", 137250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid1124", "trigger", 148750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ],
                            [ "eid1125", "trigger", 151882, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle_verite}', [] ] ]
                    ]
                }
            },
            "leia_parle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '128px', '150px', '0px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['-163px', '0', '309px', '128px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'buste_leiaparle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/buste_leiaparle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '150px', '128px']
                        }
                    }
                },
                timeline: {
                    duration: 3224,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "left",
                            0,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-8px'
                        ],
                        [
                            "eid37",
                            "left",
                            131,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid38",
                            "left",
                            250,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid39",
                            "left",
                            364,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid40",
                            "left",
                            500,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid41",
                            "left",
                            610,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid42",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid43",
                            "left",
                            1131,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid44",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid45",
                            "left",
                            1364,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid46",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid47",
                            "left",
                            1610,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid48",
                            "left",
                            1713,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid49",
                            "left",
                            1844,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid50",
                            "left",
                            1963,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid51",
                            "left",
                            2077,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid52",
                            "left",
                            2213,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid53",
                            "left",
                            2322,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid54",
                            "left",
                            2614,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid55",
                            "left",
                            2745,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid56",
                            "left",
                            2864,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid57",
                            "left",
                            2978,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ],
                        [
                            "eid58",
                            "left",
                            3114,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-163px',
                            '-8px'
                        ],
                        [
                            "eid59",
                            "left",
                            3224,
                            0,
                            "linear",
                            "${buste_leiaparle}",
                            '-8px',
                            '-163px'
                        ]
                    ]
                }
            },
            "charlie_parle_verite": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '338px', '270px', '0px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-278px', '1px', '1113px', '338px', 'auto', 'auto'],
                            id: 'charlie_parle3',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/charlie_parle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '270px', '338px']
                        }
                    }
                },
                timeline: {
                    duration: 2100,
                    autoPlay: true,
                    data: [
                        [
                            "eid557",
                            "top",
                            0,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid556",
                            "top",
                            200,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid560",
                            "top",
                            402,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid561",
                            "top",
                            596,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid566",
                            "top",
                            784,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid567",
                            "top",
                            856,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid568",
                            "top",
                            931,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid569",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid578",
                            "top",
                            1100,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid579",
                            "top",
                            1300,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid580",
                            "top",
                            1502,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid581",
                            "top",
                            1696,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid582",
                            "top",
                            1884,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid583",
                            "top",
                            1956,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid584",
                            "top",
                            2031,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid585",
                            "top",
                            2100,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid554",
                            "left",
                            0,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid555",
                            "left",
                            200,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '-278px'
                        ],
                        [
                            "eid558",
                            "left",
                            402,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid559",
                            "left",
                            596,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '-278px'
                        ],
                        [
                            "eid562",
                            "left",
                            784,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid563",
                            "left",
                            856,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '-278px'
                        ],
                        [
                            "eid564",
                            "left",
                            931,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid565",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '-278px'
                        ],
                        [
                            "eid570",
                            "left",
                            1100,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid571",
                            "left",
                            1300,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '-278px'
                        ],
                        [
                            "eid572",
                            "left",
                            1502,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid573",
                            "left",
                            1696,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '-278px'
                        ],
                        [
                            "eid574",
                            "left",
                            1884,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid575",
                            "left",
                            1956,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '-278px'
                        ],
                        [
                            "eid576",
                            "left",
                            2031,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '-278px',
                            '0px'
                        ],
                        [
                            "eid577",
                            "left",
                            2100,
                            0,
                            "linear",
                            "${charlie_parle3}",
                            '0px',
                            '-278px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("choix_verite_edgeActions.js");
})("EDGE-38300156");
