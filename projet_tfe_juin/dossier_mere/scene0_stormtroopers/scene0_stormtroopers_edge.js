/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
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
                            id: 'interieur_etoile_noir_sous',
                            type: 'image',
                            rect: ['-118px', '-1px', '1280px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"interieur_etoile_noir_sous.png",'0px','0px']
                        },
                        {
                            id: 'porte_gauche3',
                            type: 'image',
                            rect: ['261px', '371px', '295px', '236px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"porte_gauche3.png",'0px','0px']
                        },
                        {
                            id: 'interieur_etoile_noir',
                            type: 'image',
                            rect: ['-118px', '1px', '1280px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"interieur_etoile_noir.png",'0px','0px']
                        },
                        {
                            id: 'storm_2eme_gaucheCopy',
                            symbolName: 'stroomp',
                            type: 'rect',
                            rect: ['371px', '350px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3332','0.32322']]
                        },
                        {
                            id: 'porte_droite3',
                            type: 'image',
                            rect: ['501px', '218px', '277px', '233px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"porte_droite3.png",'0px','0px']
                        },
                        {
                            id: 'storm_2eme_droiteCopy2',
                            symbolName: 'stroomp',
                            type: 'rect',
                            rect: ['463px', '350px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3332','0.32322']]
                        },
                        {
                            id: 'storm_milieu',
                            symbolName: 'stroomp',
                            type: 'rect',
                            rect: ['399px', '352px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3332']]
                        },
                        {
                            id: 'storm_2eme_droite',
                            symbolName: 'stroomp',
                            type: 'rect',
                            rect: ['450px', '358px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.29531','0.32322']]
                        },
                        {
                            id: 'storm_2eme_gauche',
                            symbolName: 'stroomp',
                            type: 'rect',
                            rect: ['389px', '359px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3332','0.32322']]
                        },
                        {
                            id: 'interieur_etoile2Copy',
                            type: 'image',
                            rect: ['-2115px', '-1439px', '5190px', '3134px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"interieur_etoile3.png",'0px','0px']
                        },
                        {
                            id: 'fond_etoile_noir',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"fond_etoile_noir.png",'0px','0px']
                        },
                        {
                            id: 'stroomp',
                            symbolName: 'stroomp',
                            type: 'rect',
                            rect: ['421px', '334px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.69622','1.64542']]
                        },
                        {
                            id: 'face_stromCopy7',
                            type: 'image',
                            rect: ['154px', '371px', '307px', '313px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"face_strom22.png",'0px','0px']
                        },
                        {
                            id: 'face_stromCopy6',
                            type: 'image',
                            rect: ['239px', '404px', '307px', '325px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"face_strom22.png",'0px','0px']
                        },
                        {
                            id: 'face_stromCopy5',
                            type: 'image',
                            rect: ['575px', '371px', '325px', '325px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"face_strom22.png",'0px','0px']
                        },
                        {
                            id: 'face_stromCopy4',
                            type: 'image',
                            rect: ['541px', '404px', '307px', '313px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"face_strom22.png",'0px','0px']
                        },
                        {
                            id: 'Symbol_4Copy',
                            symbolName: 'Symbol_4',
                            type: 'rect',
                            rect: ['386px', '382px', '345', '342', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'interieur_etoile_noir_sousCopy',
                            type: 'image',
                            rect: ['-140px', '-2px', '1280px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"interieur_etoile_noir_sous2.png",'0px','0px']
                        },
                        {
                            id: 'storm_2eme_gaucheCopy5',
                            symbolName: 'stroomp_2',
                            type: 'rect',
                            rect: ['352px', '349px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3332','0.32322']]
                        },
                        {
                            id: 'storm_2eme_droiteCopy5',
                            symbolName: 'stroomp_2',
                            type: 'rect',
                            rect: ['444px', '349px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3332','0.32322']]
                        },
                        {
                            id: 'storm_2eme_gaucheCopy4',
                            symbolName: 'stroomp_2',
                            type: 'rect',
                            rect: ['370px', '358px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3332','0.32322']]
                        },
                        {
                            id: 'storm_2eme_droiteCopy4',
                            symbolName: 'stroomp_2',
                            type: 'rect',
                            rect: ['437px', '360px', '218', '219', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0.3332','0.32322']]
                        },
                        {
                            id: 'face_strom2',
                            type: 'image',
                            rect: ['472px', '429px', '81px', '79px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"face_strom2.png",'0px','0px']
                        },
                        {
                            id: 'porte_gauche3Copy2',
                            type: 'image',
                            rect: ['340px', '296px', '316px', '253px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"porte_gauche33.png",'0px','0px']
                        },
                        {
                            id: 'porte_droite3Copy2',
                            type: 'image',
                            rect: ['384px', '207px', '297px', '250px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"porte_droite33.png",'0px','0px']
                        },
                        {
                            id: 'vaisseau_imperial2',
                            type: 'image',
                            rect: ['287px', '895px', '10px', '10px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"vaisseau_imperial.png",'0px','0px']
                        },
                        {
                            id: 'interieur_etoile_noirCopy',
                            type: 'image',
                            rect: ['-132px', '1px', '1280px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"interieur_etoile_noir2.png",'0px','0px']
                        },
                        {
                            id: 'vaisseau_imperial3',
                            type: 'image',
                            rect: ['1308px', '665px', '31px', '31px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"vaisseau_imperial.png",'0px','0px']
                        },
                        {
                            id: 'planete',
                            type: 'image',
                            rect: ['735px', '521px', '220px', '220px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"planete.png",'0px','0px']
                        },
                        {
                            id: 'vaisseau_imperial',
                            type: 'image',
                            rect: ['851px', '883px', '223px', '31px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"vaisseau_imperial.png",'0px','0px']
                        },
                        {
                            id: 'son_ambient',
                            display: 'none',
                            volume: '0.23621651785714',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"Chris_Zabriskie_-_09_-_Cylinder_Nine.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'marche_electrique3',
                            display: 'none',
                            volume: '0.05',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"marche_electrique.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'marche_electrique3Copy',
                            display: 'none',
                            volume: '0.05',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"marche_electrique.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'vaisseausw2',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"vaisseausw2.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'vaisseausw1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"vaisseausw1.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'ambiance_sf',
                            display: 'none',
                            volume: '0.10301339285714',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"ambiance_sf.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'ambiance_sfCopy',
                            display: 'none',
                            volume: '0.10301339285714',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"ambiance_sf.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'porte_sas',
                            display: 'none',
                            volume: '0.28297991071429',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"porte_sas.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'stoormvoix',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"stoormvoix.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'fond_espace3',
                            type: 'image',
                            rect: ['-2px', '-1px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"fond_espace3.png",'0px','0px']
                        },
                        {
                            id: 'Text1',
                            type: 'text',
                            rect: ['219px', '352px', '628px', '232px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\">Il y a bien longtemps dans un galaxie lointaine,</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\">​trés lointaine ...</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['517px', '275px', '425px', '176px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\">Le début de cette super, géniale, épopée commence à bord du vaisseau de L’empire.​</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['176px', '767px', '682px', '176px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-size: 30px;\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif; font-size: 30px;\">Où les Stormtroopers ont remportés leur 1ère victoire.&nbsp;</span></p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text7',
                            type: 'text',
                            rect: ['192px', '-171px', '646px', '71px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\">Au coeur de la bataille, la princesse Léa,</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\"> oups Leïa , ainsi que son armée sont arrivées à dérober le DVD sur les plans horrible</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\"> de L’Empire.&nbsp;</span></p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text7Copy',
                            type: 'text',
                            rect: ['108px', '-163px', '902px', '71px', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px; text-align: left;\">​<span style=\"color: rgb(255, 251, 251); font-family: source-sans-pro, sans-serif;\">La princesse n’ayant pu s’échapper, est vite rattrapé par l’armée de &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Stormtroopers. &nbsp;</span><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\">Elle décide alors de confier les DVD</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"color: rgb(255, 255, 255);\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; à sonfidèle B1MO et de l'envoyer loin</span></p><p style=\"margin: 0px; text-align: left;\"><span style=\"color: rgb(255, 255, 255);\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; au plus vite.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\"></span><br></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\"></span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(255, 255, 255); font-family: source-sans-pro, sans-serif;\"></span></p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [32, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(44,31,74,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 34937.192431649,
                    autoPlay: true,
                    labels: {
                        "Label 1 copy 1": 5000,
                        "Label 1 copy": 9500,
                        "Label 1 copy 3": 9750,
                        "Label 1 copy 2": 11000,
                        "Label 1": 17035
                    },
                    data: [
                        [
                            "eid774",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${interieur_etoile2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid812",
                            "opacity",
                            15035,
                            0,
                            "linear",
                            "${interieur_etoile2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid786",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${interieur_etoile2Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid770",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Symbol_4Copy}",
                            '382px',
                            '382px'
                        ],
                        [
                            "eid932",
                            "opacity",
                            11000,
                            0,
                            "easeOutCubic",
                            "${vaisseau_imperial3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid907",
                            "opacity",
                            11668,
                            82,
                            "easeOutCubic",
                            "${vaisseau_imperial3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid964",
                            "volume",
                            18500,
                            0,
                            "easeOutCubic",
                            "${marche_electrique3}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid838",
                            "top",
                            11000,
                            3000,
                            "linear",
                            "${porte_gauche3Copy2}",
                            '296px',
                            '376px'
                        ],
                        [
                            "eid754",
                            "left",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_gauche}",
                            '389px',
                            '389px'
                        ],
                        [
                            "eid756",
                            "left",
                            25216,
                            0,
                            "linear",
                            "${storm_2eme_gauche}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid859",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid865",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid883",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid896",
                            "left",
                            11000,
                            0,
                            "linear",
                            "${interieur_etoile_noir_sousCopy}",
                            '-140px',
                            '-140px'
                        ],
                        [
                            "eid498",
                            "scaleX",
                            18966,
                            6250,
                            "linear",
                            "${storm_2eme_gauche}",
                            '0.3332',
                            '1.57341'
                        ],
                        [
                            "eid1067",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1069",
                            "opacity",
                            5446,
                            588,
                            "easeInQuad",
                            "${Text2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1082",
                            "opacity",
                            10250,
                            750,
                            "easeInQuad",
                            "${Text2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid431",
                            "left",
                            18035,
                            4000,
                            "linear",
                            "${stroomp}",
                            '421px',
                            '529px'
                        ],
                        [
                            "eid844",
                            "left",
                            11000,
                            2993,
                            "linear",
                            "${porte_droite3Copy2}",
                            '384px',
                            '471px'
                        ],
                        [
                            "eid619",
                            "scaleY",
                            23169,
                            7616,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '0.32322',
                            '1.52628'
                        ],
                        [
                            "eid771",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${face_stromCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid777",
                            "opacity",
                            15035,
                            0,
                            "linear",
                            "${face_stromCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid783",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${face_stromCopy6}",
                            '1',
                            '0'
                        ],
                        [
                            "eid920",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${interieur_etoile_noir_sousCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid888",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${interieur_etoile_noir_sousCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid887",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${interieur_etoile_noir_sousCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid430",
                            "scaleY",
                            18035,
                            4000,
                            "linear",
                            "${stroomp}",
                            '0.44555',
                            '1.64542'
                        ],
                        [
                            "eid1140",
                            "left",
                            26546,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '108px',
                            '108px'
                        ],
                        [
                            "eid1139",
                            "width",
                            26546,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '902px',
                            '902px'
                        ],
                        [
                            "eid1108",
                            "top",
                            11196,
                            379,
                            "linear",
                            "${Text3}",
                            '767px',
                            '665px'
                        ],
                        [
                            "eid1110",
                            "top",
                            11575,
                            93,
                            "easeInQuad",
                            "${Text3}",
                            '665px',
                            '689px'
                        ],
                        [
                            "eid1111",
                            "top",
                            11668,
                            82,
                            "easeInQuad",
                            "${Text3}",
                            '689px',
                            '666px'
                        ],
                        [
                            "eid801",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${porte_gauche3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid794",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${porte_gauche3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid775",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${face_stromCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid781",
                            "opacity",
                            15035,
                            0,
                            "linear",
                            "${face_stromCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid788",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${face_stromCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid902",
                            "height",
                            5012,
                            4970,
                            "easeOutCubic",
                            "${vaisseau_imperial}",
                            '232px',
                            '31px'
                        ],
                        [
                            "eid1134",
                            "opacity",
                            26546,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1135",
                            "opacity",
                            26846,
                            0,
                            "linear",
                            "${Text7Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid1133",
                            "opacity",
                            34761,
                            176,
                            "linear",
                            "${Text7Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1117",
                            "opacity",
                            11196,
                            1554,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1113",
                            "opacity",
                            14500,
                            500,
                            "easeInQuad",
                            "${Text3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid860",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${porte_gauche3Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid866",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${porte_gauche3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid881",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${porte_gauche3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid614",
                            "scaleX",
                            23169,
                            7616,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '0.3332',
                            '1.57341'
                        ],
                        [
                            "eid1129",
                            "top",
                            26546,
                            465,
                            "linear",
                            "${Text7Copy}",
                            '-163px',
                            '65px'
                        ],
                        [
                            "eid1130",
                            "top",
                            27011,
                            166,
                            "linear",
                            "${Text7Copy}",
                            '65px',
                            '25px'
                        ],
                        [
                            "eid1131",
                            "top",
                            27177,
                            84,
                            "linear",
                            "${Text7Copy}",
                            '25px',
                            '40px'
                        ],
                        [
                            "eid1136",
                            "top",
                            27261,
                            36,
                            "linear",
                            "${Text7Copy}",
                            '40px',
                            '28px'
                        ],
                        [
                            "eid803",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_2eme_droite}",
                            '0',
                            '0'
                        ],
                        [
                            "eid796",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_droite}",
                            '0',
                            '1'
                        ],
                        [
                            "eid843",
                            "top",
                            11000,
                            2993,
                            "linear",
                            "${porte_droite3Copy2}",
                            '299px',
                            '207px'
                        ],
                        [
                            "eid1125",
                            "opacity",
                            18035,
                            300,
                            "linear",
                            "${Text7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1128",
                            "opacity",
                            26250,
                            176,
                            "linear",
                            "${Text7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid798",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_milieu}",
                            '0',
                            '0'
                        ],
                        [
                            "eid791",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${storm_milieu}",
                            '0',
                            '1'
                        ],
                        [
                            "eid924",
                            "opacity",
                            5000,
                            0,
                            "easeOutCubic",
                            "${planete}",
                            '1',
                            '1'
                        ],
                        [
                            "eid923",
                            "opacity",
                            11000,
                            0,
                            "easeOutCubic",
                            "${planete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid759",
                            "left",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '371px',
                            '371px'
                        ],
                        [
                            "eid418",
                            "top",
                            18035,
                            0,
                            "linear",
                            "${porte_gauche3}",
                            '371px',
                            '371px'
                        ],
                        [
                            "eid845",
                            "width",
                            11000,
                            0,
                            "linear",
                            "${porte_droite3Copy2}",
                            '297px',
                            '297px'
                        ],
                        [
                            "eid757",
                            "top",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_droite}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid502",
                            "top",
                            20285,
                            0,
                            "linear",
                            "${storm_2eme_droite}",
                            '358px',
                            '359px'
                        ],
                        [
                            "eid505",
                            "top",
                            21216,
                            6250,
                            "linear",
                            "${storm_2eme_droite}",
                            '359px',
                            '862px'
                        ],
                        [
                            "eid548",
                            "top",
                            27466,
                            319,
                            "linear",
                            "${storm_2eme_droite}",
                            '862px',
                            '1007px'
                        ],
                        [
                            "eid549",
                            "top",
                            27785,
                            750,
                            "linear",
                            "${storm_2eme_droite}",
                            '1007px',
                            '877px'
                        ],
                        [
                            "eid761",
                            "left",
                            18035,
                            0,
                            "linear",
                            "${storm_milieu}",
                            '399px',
                            '399px'
                        ],
                        [
                            "eid917",
                            "width",
                            5750,
                            4982,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            '233px',
                            '46px'
                        ],
                        [
                            "eid918",
                            "width",
                            10732,
                            268,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            '46px',
                            '10px'
                        ],
                        [
                            "eid898",
                            "rotateZ",
                            5000,
                            1196,
                            "easeOutCubic",
                            "${vaisseau_imperial}",
                            '0deg',
                            '-12deg'
                        ],
                        [
                            "eid899",
                            "rotateZ",
                            6196,
                            54,
                            "easeOutCubic",
                            "${vaisseau_imperial}",
                            '-12deg',
                            '-10deg'
                        ],
                        [
                            "eid900",
                            "rotateZ",
                            6250,
                            679,
                            "easeOutCubic",
                            "${vaisseau_imperial}",
                            '-10deg',
                            '0deg'
                        ],
                        [
                            "eid901",
                            "rotateZ",
                            7439,
                            520,
                            "easeOutCubic",
                            "${vaisseau_imperial}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid910",
                            "rotateZ",
                            5000,
                            0,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            '0deg',
                            '0deg'
                        ],
                        [
                            "eid926",
                            "opacity",
                            5000,
                            0,
                            "easeOutCubic",
                            "${fond_etoile_noir}",
                            '1',
                            '1'
                        ],
                        [
                            "eid925",
                            "opacity",
                            12367,
                            0,
                            "easeOutCubic",
                            "${fond_etoile_noir}",
                            '1',
                            '0'
                        ],
                        [
                            "eid903",
                            "opacity",
                            9816,
                            73,
                            "easeOutCubic",
                            "${vaisseau_imperial}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1074",
                            "left",
                            5446,
                            453,
                            "easeInQuad",
                            "${Text2}",
                            '1024px',
                            '544px'
                        ],
                        [
                            "eid1077",
                            "left",
                            5899,
                            153,
                            "easeInQuad",
                            "${Text2}",
                            '544px',
                            '582px'
                        ],
                        [
                            "eid1078",
                            "left",
                            6052,
                            239,
                            "easeInQuad",
                            "${Text2}",
                            '582px',
                            '517px'
                        ],
                        [
                            "eid605",
                            "scaleY",
                            23035,
                            7181,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '0.32322',
                            '1.43638'
                        ],
                        [
                            "eid921",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${interieur_etoile_noir_sous}",
                            '0',
                            '0'
                        ],
                        [
                            "eid929",
                            "opacity",
                            18035,
                            0,
                            "easeOutCubic",
                            "${interieur_etoile_noir_sous}",
                            '0',
                            '1'
                        ],
                        [
                            "eid908",
                            "location",
                            7919,
                            4449,
                            "easeOutCubic",
                            "${vaisseau_imperial3}",
                            [[1323.5, 680.5, 0, 0, 0, 0,0],[293.43, 252.59, 0, 0, 0, 0,1115.42]]
                        ],
                        [
                            "eid800",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid793",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid905",
                            "width",
                            5012,
                            4970,
                            "easeOutCubic",
                            "${vaisseau_imperial}",
                            '223px',
                            '31px'
                        ],
                        [
                            "eid1116",
                            "width",
                            11196,
                            0,
                            "linear",
                            "${Text3}",
                            '682px',
                            '682px'
                        ],
                        [
                            "eid987",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${interieur_etoile2Copy}",
                            '-2115px',
                            '-2115px'
                        ],
                        [
                            "eid1118",
                            "left",
                            15035,
                            3000,
                            "linear",
                            "${interieur_etoile2Copy}",
                            '-2427px',
                            '-2449px'
                        ],
                        [
                            "eid772",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${face_stromCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid778",
                            "opacity",
                            15035,
                            0,
                            "linear",
                            "${face_stromCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid784",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${face_stromCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid915",
                            "height",
                            5750,
                            4982,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            '233px',
                            '46px'
                        ],
                        [
                            "eid916",
                            "height",
                            10732,
                            268,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            '46px',
                            '10px'
                        ],
                        [
                            "eid897",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${face_strom2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid889",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${face_strom2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid890",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${face_strom2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1002",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Text1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1005",
                            "opacity",
                            4487,
                            0,
                            "linear",
                            "${Text1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid861",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid867",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid884",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid858",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid864",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid882",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid760",
                            "top",
                            18035,
                            0,
                            "linear",
                            "${storm_milieu}",
                            '352px',
                            '352px'
                        ],
                        [
                            "eid583",
                            "top",
                            21290,
                            0,
                            "linear",
                            "${storm_milieu}",
                            '352px',
                            '353px'
                        ],
                        [
                            "eid588",
                            "top",
                            21317,
                            2473,
                            "linear",
                            "${storm_milieu}",
                            '353px',
                            '433px'
                        ],
                        [
                            "eid589",
                            "top",
                            23790,
                            4681,
                            "linear",
                            "${storm_milieu}",
                            '433px',
                            '764px'
                        ],
                        [
                            "eid769",
                            "left",
                            5000,
                            0,
                            "linear",
                            "${Symbol_4Copy}",
                            '386px',
                            '386px'
                        ],
                        [
                            "eid857",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid863",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid880",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid980",
                            "volume",
                            0,
                            0,
                            "linear",
                            "${ambiance_sfCopy}",
                            '0.10301339285714',
                            '0.10301339285714'
                        ],
                        [
                            "eid410",
                            "width",
                            18035,
                            0,
                            "linear",
                            "${porte_gauche3}",
                            '295px',
                            '295px'
                        ],
                        [
                            "eid752",
                            "top",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_gauche}",
                            '359px',
                            '359px'
                        ],
                        [
                            "eid753",
                            "top",
                            18966,
                            0,
                            "linear",
                            "${storm_2eme_gauche}",
                            '359px',
                            '360px'
                        ],
                        [
                            "eid494",
                            "top",
                            19966,
                            1819,
                            "linear",
                            "${storm_2eme_gauche}",
                            '360px',
                            '526px'
                        ],
                        [
                            "eid508",
                            "top",
                            21785,
                            3431,
                            "linear",
                            "${storm_2eme_gauche}",
                            '526px',
                            '840px'
                        ],
                        [
                            "eid853",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy5}",
                            '352px',
                            '352px'
                        ],
                        [
                            "eid429",
                            "scaleX",
                            18035,
                            4000,
                            "linear",
                            "${stroomp}",
                            '0.45931',
                            '1.69622'
                        ],
                        [
                            "eid840",
                            "left",
                            11000,
                            3000,
                            "linear",
                            "${porte_gauche3Copy2}",
                            '340px',
                            '248px'
                        ],
                        [
                            "eid802",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_2eme_gauche}",
                            '0',
                            '0'
                        ],
                        [
                            "eid795",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_gauche}",
                            '0',
                            '1'
                        ],
                        [
                            "eid911",
                            "location",
                            5750,
                            5000,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            [[291.77, 900, 0, 0, 0, 0,0],[291.32, 721.87, -438.06, -66.47, -666.6, -101.14,282.87],[248.82, 620.25, 147.9, -64.98, 186.84, -82.09,481.15],[351.77, 559.16, -58.07, -296.6, -27.72, -141.57,613.36],[180.12, 458.09, -25.32, -346.3, -20.66, -282.59,836.3],[271.5, 339.98, 134.19, -112.49, 96.28, -80.71,1005.24],[269.14, 257.34, 0, 0, 0, 0,1099.84]]
                        ],
                        [
                            "eid591",
                            "scaleY",
                            21317,
                            4473,
                            "linear",
                            "${storm_milieu}",
                            '0.32322',
                            '0.92331'
                        ],
                        [
                            "eid799",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid792",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid841",
                            "width",
                            11000,
                            0,
                            "linear",
                            "${porte_gauche3Copy2}",
                            '316px',
                            '316px'
                        ],
                        [
                            "eid978",
                            "volume",
                            11250,
                            0,
                            "easeOutCubic",
                            "${porte_sas}",
                            '0.28297991071429',
                            '0.28297991071429'
                        ],
                        [
                            "eid977",
                            "volume",
                            11369,
                            0,
                            "easeOutCubic",
                            "${porte_sas}",
                            '0.28297991071429',
                            '0.53560271428571'
                        ],
                        [
                            "eid763",
                            "left",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '463px',
                            '463px'
                        ],
                        [
                            "eid906",
                            "height",
                            7627,
                            4740,
                            "easeOutCubic",
                            "${vaisseau_imperial3}",
                            '89px',
                            '31px'
                        ],
                        [
                            "eid994",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${fond_espace3}",
                            '1',
                            '1'
                        ],
                        [
                            "eid996",
                            "opacity",
                            4487,
                            513,
                            "linear",
                            "${fond_espace3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid842",
                            "height",
                            11000,
                            0,
                            "linear",
                            "${porte_droite3Copy2}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid851",
                            "top",
                            14000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy5}",
                            '349px',
                            '349px'
                        ],
                        [
                            "eid904",
                            "location",
                            5000,
                            4982,
                            "easeOutCubic",
                            "${vaisseau_imperial}",
                            [[866.78, 898.5, 0, 0, 0, 0,0],[785, 410.38, -412.92, -454.46, -459.55, -505.79,511.5],[283.47, 256.5, 0, 0, 0, 0,1047.87]]
                        ],
                        [
                            "eid839",
                            "height",
                            11000,
                            0,
                            "linear",
                            "${porte_gauche3Copy2}",
                            '253px',
                            '253px'
                        ],
                        [
                            "eid797",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${stroomp}",
                            '0',
                            '0'
                        ],
                        [
                            "eid790",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${stroomp}",
                            '0',
                            '1'
                        ],
                        [
                            "eid590",
                            "scaleX",
                            21317,
                            4473,
                            "linear",
                            "${storm_milieu}",
                            '0.3332',
                            '0.95182'
                        ],
                        [
                            "eid990",
                            "left",
                            0,
                            0,
                            "linear",
                            "${interieur_etoile_noirCopy}",
                            '-132px',
                            '-132px'
                        ],
                        [
                            "eid714",
                            "left",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_droite}",
                            '450px',
                            '450px'
                        ],
                        [
                            "eid504",
                            "left",
                            20285,
                            5505,
                            "linear",
                            "${storm_2eme_droite}",
                            '450px',
                            '531px'
                        ],
                        [
                            "eid765",
                            "left",
                            25790,
                            1676,
                            "linear",
                            "${storm_2eme_droite}",
                            '531px',
                            '574px'
                        ],
                        [
                            "eid507",
                            "scaleY",
                            20285,
                            7181,
                            "linear",
                            "${storm_2eme_droite}",
                            '0.32322',
                            '1.43638'
                        ],
                        [
                            "eid922",
                            "top",
                            5000,
                            0,
                            "easeOutCubic",
                            "${interieur_etoile2Copy}",
                            '-1439px',
                            '-1439px'
                        ],
                        [
                            "eid811",
                            "top",
                            15035,
                            0,
                            "linear",
                            "${interieur_etoile2Copy}",
                            '-1439px',
                            '-1579px'
                        ],
                        [
                            "eid847",
                            "top",
                            11000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy4}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid848",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy4}",
                            '370px',
                            '370px'
                        ],
                        [
                            "eid499",
                            "scaleY",
                            18966,
                            6250,
                            "linear",
                            "${storm_2eme_gauche}",
                            '0.32322',
                            '1.52628'
                        ],
                        [
                            "eid809",
                            "width",
                            15035,
                            0,
                            "linear",
                            "${interieur_etoile2Copy}",
                            '5190px',
                            '5855px'
                        ],
                        [
                            "eid758",
                            "top",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid622",
                            "top",
                            22035,
                            1134,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '351px',
                            '360px'
                        ],
                        [
                            "eid616",
                            "top",
                            24388,
                            2216,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '360px',
                            '526px'
                        ],
                        [
                            "eid617",
                            "top",
                            26604,
                            4181,
                            "linear",
                            "${storm_2eme_gaucheCopy}",
                            '526px',
                            '840px'
                        ],
                        [
                            "eid1121",
                            "top",
                            18035,
                            465,
                            "linear",
                            "${Text7}",
                            '-171px',
                            '65px'
                        ],
                        [
                            "eid1122",
                            "top",
                            18500,
                            166,
                            "linear",
                            "${Text7}",
                            '65px',
                            '25px'
                        ],
                        [
                            "eid1123",
                            "top",
                            18666,
                            84,
                            "linear",
                            "${Text7}",
                            '25px',
                            '40px'
                        ],
                        [
                            "eid713",
                            "scaleX",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_droite}",
                            '0.29531',
                            '0.29531'
                        ],
                        [
                            "eid506",
                            "scaleX",
                            20285,
                            5505,
                            "linear",
                            "${storm_2eme_droite}",
                            '0.3332',
                            '1.27232'
                        ],
                        [
                            "eid764",
                            "scaleX",
                            25790,
                            833,
                            "linear",
                            "${storm_2eme_droite}",
                            '1.27232',
                            '1.57'
                        ],
                        [
                            "eid676",
                            "scaleX",
                            26623,
                            843,
                            "linear",
                            "${storm_2eme_droite}",
                            '1.57',
                            '1.48073'
                        ],
                        [
                            "eid776",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${Symbol_4Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid782",
                            "opacity",
                            15035,
                            0,
                            "linear",
                            "${Symbol_4Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid785",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${Symbol_4Copy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid768",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${stroomp}",
                            '334px',
                            '358px'
                        ],
                        [
                            "eid424",
                            "top",
                            18035,
                            4000,
                            "linear",
                            "${stroomp}",
                            '358px',
                            '839px'
                        ],
                        [
                            "eid849",
                            "top",
                            14000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy4}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid862",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${porte_droite3Copy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid868",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${porte_droite3Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid879",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${porte_droite3Copy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid909",
                            "width",
                            7627,
                            4740,
                            "easeOutCubic",
                            "${vaisseau_imperial3}",
                            '89px',
                            '31px'
                        ],
                        [
                            "eid976",
                            "volume",
                            15870,
                            0,
                            "linear",
                            "${ambiance_sf}",
                            '0.10301339285714',
                            '0.10301339285714'
                        ],
                        [
                            "eid919",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${interieur_etoile_noirCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid886",
                            "opacity",
                            11000,
                            0,
                            "linear",
                            "${interieur_etoile_noirCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid885",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${interieur_etoile_noirCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid846",
                            "left",
                            11000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy4}",
                            '437px',
                            '437px'
                        ],
                        [
                            "eid1006",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text1}",
                            '219px',
                            '219px'
                        ],
                        [
                            "eid852",
                            "top",
                            14000,
                            0,
                            "linear",
                            "${storm_2eme_gaucheCopy5}",
                            '349px',
                            '349px'
                        ],
                        [
                            "eid965",
                            "volume",
                            18035,
                            0,
                            "easeOutCubic",
                            "${marche_electrique3Copy}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid773",
                            "opacity",
                            5000,
                            0,
                            "linear",
                            "${face_stromCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid779",
                            "opacity",
                            15035,
                            0,
                            "linear",
                            "${face_stromCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid787",
                            "opacity",
                            18035,
                            0,
                            "linear",
                            "${face_stromCopy7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid600",
                            "scaleX",
                            23035,
                            7181,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '0.3332',
                            '1.48073'
                        ],
                        [
                            "eid850",
                            "left",
                            14000,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy5}",
                            '444px',
                            '444px'
                        ],
                        [
                            "eid928",
                            "opacity",
                            5000,
                            0,
                            "easeOutCubic",
                            "${interieur_etoile_noir}",
                            '0',
                            '0'
                        ],
                        [
                            "eid927",
                            "opacity",
                            18035,
                            0,
                            "easeOutCubic",
                            "${interieur_etoile_noir}",
                            '0',
                            '1'
                        ],
                        [
                            "eid415",
                            "height",
                            18035,
                            0,
                            "linear",
                            "${porte_gauche3}",
                            '236px',
                            '236px'
                        ],
                        [
                            "eid762",
                            "top",
                            18035,
                            0,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '350px',
                            '350px'
                        ],
                        [
                            "eid608",
                            "top",
                            20785,
                            2250,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '351px',
                            '359px'
                        ],
                        [
                            "eid602",
                            "top",
                            23966,
                            6250,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '359px',
                            '862px'
                        ],
                        [
                            "eid603",
                            "top",
                            30216,
                            319,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '862px',
                            '1007px'
                        ],
                        [
                            "eid604",
                            "top",
                            30535,
                            750,
                            "linear",
                            "${storm_2eme_droiteCopy2}",
                            '1007px',
                            '877px'
                        ],
                        [
                            "eid912",
                            "opacity",
                            5446,
                            4482,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            '1',
                            '0.92740091463415'
                        ],
                        [
                            "eid913",
                            "opacity",
                            9928,
                            500,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            '0.92740091463415',
                            '1'
                        ],
                        [
                            "eid914",
                            "opacity",
                            10428,
                            18,
                            "easeOutCubic",
                            "${vaisseau_imperial2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid417",
                            "left",
                            18035,
                            0,
                            "linear",
                            "${porte_gauche3}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid808",
                            "height",
                            15035,
                            0,
                            "linear",
                            "${interieur_etoile2Copy}",
                            '3134px',
                            '3536px'
                        ],
                            [ "eid982", "trigger", 0, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ambiance_sfCopy}', [] ] ],
                            [ "eid813", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_milieu}', [] ] ],
                            [ "eid815", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_droite}', [] ] ],
                            [ "eid869", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_gaucheCopy5}', [] ] ],
                            [ "eid814", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${stroomp}', [] ] ],
                            [ "eid816", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_droiteCopy2}', [] ] ],
                            [ "eid818", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_gaucheCopy}', [] ] ],
                            [ "eid871", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_gaucheCopy4}', [] ] ],
                            [ "eid817", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Symbol_4Copy}', [] ] ],
                            [ "eid819", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_gauche}', [] ] ],
                            [ "eid870", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_droiteCopy5}', [] ] ],
                            [ "eid981", "trigger", 5000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${vaisseausw2}', [] ] ],
                            [ "eid872", "trigger", 5000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_droiteCopy4}', [] ] ],
                            [ "eid983", "trigger", 6250, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${vaisseausw1}', [] ] ],
                            [ "eid984", "trigger", 11369, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${porte_sas}', [] ] ],
                            [ "eid820", "trigger", 15000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_4Copy}', [] ] ],
                            [ "eid985", "trigger", 15278, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${stoormvoix}', [] ] ],
                            [ "eid986", "trigger", 15870, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ambiance_sf}', [] ] ],
                            [ "eid821", "trigger", 15870, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Symbol_4Copy}', [] ] ],
                            [ "eid610", "trigger", 18035, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_droiteCopy2}', [] ] ],
                            [ "eid378", "trigger", 18035, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${stroomp}', [] ] ],
                            [ "eid972", "trigger", 18035, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${marche_electrique3Copy}', [] ] ],
                            [ "eid566", "trigger", 18035, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_droite}', [] ] ],
                            [ "eid973", "trigger", 18500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${marche_electrique3}', [] ] ],
                            [ "eid550", "trigger", 18965.815525906, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_gauche}', [] ] ],
                            [ "eid551", "trigger", 20285, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_droite}', [] ] ],
                            [ "eid611", "trigger", 20785, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_droiteCopy2}', [] ] ],
                            [ "eid612", "trigger", 20927, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_droiteCopy2}', [] ] ],
                            [ "eid613", "trigger", 21317, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_milieu}', [] ] ],
                            [ "eid623", "trigger", 23169.192431649, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_gaucheCopy}', [] ] ],
                            [ "eid570", "trigger", 24155, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_droite}', [] ] ],
                            [ "eid554", "trigger", 24426, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_gauche}', [] ] ],
                            [ "eid974", "trigger", 26555, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${marche_electrique3Copy}', [0.2] ] ],
                            [ "eid572", "trigger", 28785, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_droite}', [] ] ],
                            [ "eid624", "trigger", 29822.390335608, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${storm_2eme_gaucheCopy}', [] ] ],
                            [ "eid975", "trigger", 31000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${marche_electrique3Copy}', [] ] ],
                            [ "eid1142", "trigger", 34937, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${storm_2eme_gaucheCopy}', [] ] ]
                    ]
                }
            },
            "stroomp1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '194px', '221px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            id: 'stormtrooper_marche',
                            type: 'image',
                            rect: ['-8px', '0px', '210px', '452px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/stormtrooper_marche.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '194px', '222px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "stroomp": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '219px', '218px', '0px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'marche_test32',
                            rect: ['-130px', '-34px', '493px', '1309px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/marche_test32.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '218px', '219px']
                        }
                    }
                },
                timeline: {
                    duration: 8377,
                    autoPlay: true,
                    data: [
                        [
                            "eid642",
                            "top",
                            0,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-34px'
                        ],
                        [
                            "eid643",
                            "top",
                            115,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-292px'
                        ],
                        [
                            "eid644",
                            "top",
                            250,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-564px'
                        ],
                        [
                            "eid645",
                            "top",
                            379,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-819px'
                        ],
                        [
                            "eid646",
                            "top",
                            500,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-1070px'
                        ],
                        [
                            "eid647",
                            "top",
                            629,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-1070px',
                            '-819px'
                        ],
                        [
                            "eid648",
                            "top",
                            750,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-564px'
                        ],
                        [
                            "eid649",
                            "top",
                            869,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-292px'
                        ],
                        [
                            "eid650",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-34px'
                        ],
                        [
                            "eid658",
                            "top",
                            1121,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-292px'
                        ],
                        [
                            "eid657",
                            "top",
                            1256,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-564px'
                        ],
                        [
                            "eid656",
                            "top",
                            1384,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-819px'
                        ],
                        [
                            "eid655",
                            "top",
                            1506,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-1070px'
                        ],
                        [
                            "eid654",
                            "top",
                            1635,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-1070px',
                            '-819px'
                        ],
                        [
                            "eid653",
                            "top",
                            1756,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-564px'
                        ],
                        [
                            "eid652",
                            "top",
                            1875,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-292px'
                        ],
                        [
                            "eid651",
                            "top",
                            2006,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-34px'
                        ],
                        [
                            "eid675",
                            "top",
                            2121,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-34px'
                        ],
                        [
                            "eid659",
                            "top",
                            2236,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-292px'
                        ],
                        [
                            "eid660",
                            "top",
                            2371,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-564px'
                        ],
                        [
                            "eid661",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-819px'
                        ],
                        [
                            "eid662",
                            "top",
                            2621,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-1070px'
                        ],
                        [
                            "eid663",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-1070px',
                            '-819px'
                        ],
                        [
                            "eid664",
                            "top",
                            2871,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-564px'
                        ],
                        [
                            "eid665",
                            "top",
                            2990,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-292px'
                        ],
                        [
                            "eid666",
                            "top",
                            3121,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-34px'
                        ],
                        [
                            "eid667",
                            "top",
                            3242,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-292px'
                        ],
                        [
                            "eid668",
                            "top",
                            3377,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-564px'
                        ],
                        [
                            "eid669",
                            "top",
                            3505,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-819px'
                        ],
                        [
                            "eid670",
                            "top",
                            3627,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-1070px'
                        ],
                        [
                            "eid671",
                            "top",
                            3756,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-1070px',
                            '-819px'
                        ],
                        [
                            "eid672",
                            "top",
                            3877,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-564px'
                        ],
                        [
                            "eid673",
                            "top",
                            3996,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-292px'
                        ],
                        [
                            "eid674",
                            "top",
                            4127,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-34px'
                        ],
                        [
                            "eid677",
                            "top",
                            4250,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-34px'
                        ],
                        [
                            "eid678",
                            "top",
                            4365,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-292px'
                        ],
                        [
                            "eid679",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-564px'
                        ],
                        [
                            "eid680",
                            "top",
                            4629,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-819px'
                        ],
                        [
                            "eid681",
                            "top",
                            4750,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-1070px'
                        ],
                        [
                            "eid682",
                            "top",
                            4879,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-1070px',
                            '-819px'
                        ],
                        [
                            "eid683",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-564px'
                        ],
                        [
                            "eid684",
                            "top",
                            5119,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-292px'
                        ],
                        [
                            "eid685",
                            "top",
                            5250,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-34px'
                        ],
                        [
                            "eid686",
                            "top",
                            5371,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-292px'
                        ],
                        [
                            "eid687",
                            "top",
                            5506,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-564px'
                        ],
                        [
                            "eid688",
                            "top",
                            5634,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-819px'
                        ],
                        [
                            "eid689",
                            "top",
                            5756,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-1070px'
                        ],
                        [
                            "eid690",
                            "top",
                            5885,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-1070px',
                            '-819px'
                        ],
                        [
                            "eid691",
                            "top",
                            6006,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-564px'
                        ],
                        [
                            "eid692",
                            "top",
                            6125,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-292px'
                        ],
                        [
                            "eid693",
                            "top",
                            6256,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-34px'
                        ],
                        [
                            "eid694",
                            "top",
                            6371,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-34px'
                        ],
                        [
                            "eid695",
                            "top",
                            6486,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-292px'
                        ],
                        [
                            "eid696",
                            "top",
                            6621,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-564px'
                        ],
                        [
                            "eid697",
                            "top",
                            6750,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-819px'
                        ],
                        [
                            "eid698",
                            "top",
                            6871,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-1070px'
                        ],
                        [
                            "eid699",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-1070px',
                            '-819px'
                        ],
                        [
                            "eid700",
                            "top",
                            7121,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-564px'
                        ],
                        [
                            "eid701",
                            "top",
                            7240,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-292px'
                        ],
                        [
                            "eid702",
                            "top",
                            7371,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-34px'
                        ],
                        [
                            "eid703",
                            "top",
                            7492,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-34px',
                            '-292px'
                        ],
                        [
                            "eid704",
                            "top",
                            7627,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-564px'
                        ],
                        [
                            "eid705",
                            "top",
                            7755,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-819px'
                        ],
                        [
                            "eid706",
                            "top",
                            7877,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-1070px'
                        ],
                        [
                            "eid707",
                            "top",
                            8006,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-1070px',
                            '-819px'
                        ],
                        [
                            "eid708",
                            "top",
                            8127,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-819px',
                            '-564px'
                        ],
                        [
                            "eid709",
                            "top",
                            8246,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-564px',
                            '-292px'
                        ],
                        [
                            "eid710",
                            "top",
                            8377,
                            0,
                            "linear",
                            "${marche_test32}",
                            '-292px',
                            '-34px'
                        ]
                    ]
                }
            },
            "Symbol_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '342px', '345px', '0px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            overflow: 'hidden',
                            id: 'face_strom_parle6',
                            rect: ['-9px', '1px', '345px', '720px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/face_strom_parle2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '345px', '342px']
                        }
                    }
                },
                timeline: {
                    duration: 1870,
                    autoPlay: true,
                    data: [
                        [
                            "eid84",
                            "top",
                            0,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '1px',
                            '1px'
                        ],
                        [
                            "eid85",
                            "top",
                            117,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '1px',
                            '-345px'
                        ],
                        [
                            "eid86",
                            "top",
                            250,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '-345px',
                            '0px'
                        ],
                        [
                            "eid87",
                            "top",
                            370,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '0px',
                            '-344px'
                        ],
                        [
                            "eid91",
                            "top",
                            500,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '-344px',
                            '1px'
                        ],
                        [
                            "eid92",
                            "top",
                            617,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '1px',
                            '-345px'
                        ],
                        [
                            "eid93",
                            "top",
                            750,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '-345px',
                            '0px'
                        ],
                        [
                            "eid94",
                            "top",
                            870,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '0px',
                            '-344px'
                        ],
                        [
                            "eid95",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '-344px',
                            '1px'
                        ],
                        [
                            "eid96",
                            "top",
                            1117,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '1px',
                            '-345px'
                        ],
                        [
                            "eid97",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '-345px',
                            '0px'
                        ],
                        [
                            "eid98",
                            "top",
                            1370,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '0px',
                            '-344px'
                        ],
                        [
                            "eid99",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '-344px',
                            '1px'
                        ],
                        [
                            "eid100",
                            "top",
                            1617,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '1px',
                            '-345px'
                        ],
                        [
                            "eid101",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '-345px',
                            '0px'
                        ],
                        [
                            "eid102",
                            "top",
                            1870,
                            0,
                            "linear",
                            "${face_strom_parle6}",
                            '0px',
                            '-344px'
                        ]
                    ]
                }
            },
            "stroomp_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '219px', '218px', '0px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            id: 'stormtrooper_marche2',
                            type: 'image',
                            rect: ['-2px', '-243px', '222px', '485px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/stormtrooper_marche22.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '218px', '219px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "top",
                            0,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-20px',
                            '-243px'
                        ],
                        [
                            "eid38",
                            "top",
                            500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-21px'
                        ],
                        [
                            "eid39",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-21px',
                            '-243px'
                        ],
                        [
                            "eid41",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-20px'
                        ],
                        [
                            "eid42",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-20px',
                            '-243px'
                        ],
                        [
                            "eid43",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-22px'
                        ],
                        [
                            "eid44",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-22px',
                            '-243px'
                        ],
                        [
                            "eid45",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-19px'
                        ],
                        [
                            "eid46",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-19px',
                            '-243px'
                        ],
                        [
                            "eid279",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-18px'
                        ],
                        [
                            "eid47",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-18px',
                            '-243px'
                        ],
                        [
                            "eid280",
                            "top",
                            5500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-18px'
                        ],
                        [
                            "eid281",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-18px',
                            '-243px'
                        ],
                        [
                            "eid282",
                            "top",
                            6500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-19px'
                        ],
                        [
                            "eid283",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-19px',
                            '-243px'
                        ]
                    ]
                }
            },
            "stroomp_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '219px', '218px', '0px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'stormtrooper_marche2',
                            rect: ['-2px', '-243px', '222px', '485px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/stormtrooper_marche23.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '218px', '219px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [
                        [
                            "eid37",
                            "top",
                            0,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-20px',
                            '-243px'
                        ],
                        [
                            "eid38",
                            "top",
                            500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-21px'
                        ],
                        [
                            "eid39",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-21px',
                            '-243px'
                        ],
                        [
                            "eid41",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-20px'
                        ],
                        [
                            "eid42",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-20px',
                            '-243px'
                        ],
                        [
                            "eid43",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-22px'
                        ],
                        [
                            "eid44",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-22px',
                            '-243px'
                        ],
                        [
                            "eid45",
                            "top",
                            3500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-19px'
                        ],
                        [
                            "eid46",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-19px',
                            '-243px'
                        ],
                        [
                            "eid279",
                            "top",
                            4500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-18px'
                        ],
                        [
                            "eid47",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-18px',
                            '-243px'
                        ],
                        [
                            "eid280",
                            "top",
                            5500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-18px'
                        ],
                        [
                            "eid281",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-18px',
                            '-243px'
                        ],
                        [
                            "eid282",
                            "top",
                            6500,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-243px',
                            '-19px'
                        ],
                        [
                            "eid283",
                            "top",
                            7000,
                            0,
                            "linear",
                            "${stormtrooper_marche2}",
                            '-19px',
                            '-243px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("scene0_stormtroopers_edgeActions.js");
})("EDGE-24283699");
