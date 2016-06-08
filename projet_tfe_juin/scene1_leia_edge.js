/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='assets/media/',
        vid='assets/media/',
        js='js/',
        fonts = {
            'unifrakturmaguntia, fantasy': '<script src=\"http://use.edgefonts.net/unifrakturmaguntia:n4:all.js\"></script>',
            'astloch, serif': '<script src=\"http://use.edgefonts.net/astloch:n4,n7:all.js\"></script>'        },
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
                            id: 'Symbol_1',
                            symbolName: 'Symbol_1',
                            type: 'rect',
                            rect: ['-135px', '-2px', '1280', '768', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['1','1.01873']]
                        },
                        {
                            id: 'leia_parle',
                            symbolName: 'Symbol_2',
                            type: 'rect',
                            rect: ['388px', '434px', '239', '240', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'b1mo_de_dos',
                            symbolName: 'test',
                            type: 'rect',
                            rect: ['393px', '252px', '239', '409', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],[],[],['0.55416','0.51645']]
                        },
                        {
                            id: 'scene3_leia',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '615px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'assets/images/scene3_leia.png','0px','0px']
                        },
                        {
                            id: 'microphone',
                            symbolName: 'microphone',
                            type: 'rect',
                            rect: ['358px', '389px', '327', '381', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'b1m0_face',
                            symbolName: 'b1m0_normal',
                            type: 'rect',
                            rect: ['351px', '392px', '327', '381', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'font_porte_etoile',
                            type: 'rect',
                            rect: ['0px', '5px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(33,20,53,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'interieur_porte_etoile',
                            type: 'image',
                            rect: ['185px', '52px', '646px', '646px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/interieur_porte_etoile.png','0px','0px']
                        },
                        {
                            id: 'porte_etoile',
                            type: 'image',
                            rect: ['185px', '52px', '646px', '646px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/porte_etoile.png','0px','0px'],
                            transform: [[],['1300']]
                        },
                        {
                            id: 'cache_porte_etoile',
                            type: 'rect',
                            rect: ['206px', '615px', '632px', '126px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(33,20,53,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'b1m0_dos',
                            type: 'image',
                            rect: ['422px', '463px', '178px', '9px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'assets/images/b1m0_dos.png','0px','0px']
                        },
                        {
                            id: 'bouton_vert',
                            type: 'ellipse',
                            rect: ['886px', '380px', '40px', '40px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '1',
                            fill: ["rgba(141,199,63,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'fond_etoile_noir',
                            type: 'image',
                            rect: ['0px', '2px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/fond_etoile_noir.png','0px','0px']
                        },
                        {
                            id: 'fond_espace2',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/fond_espace2.png','0px','0px']
                        },
                        {
                            id: 'b1m0_heureux',
                            type: 'image',
                            rect: ['237px', '78px', '18px', '26px', 'auto', 'auto'],
                            autoOrient: false,
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/b1m0_heureux.png','0px','0px'],
                            transform: [[],['620']]
                        },
                        {
                            id: 'b1m0_heureux2',
                            type: 'image',
                            rect: ['493px', '-81px', '40px', '55px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",'assets/images/b1m0_heureux.png','0px','0px']
                        },
                        {
                            id: 'baleine2',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1034px', '271', '486', '258', 'auto', 'auto']
                        },
                        {
                            id: 'foret',
                            type: 'image',
                            rect: ['0px', '-4px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/foret.png','0px','0px']
                        },
                        {
                            id: 'b1m0_dos3',
                            type: 'image',
                            rect: ['786px', '231px', '26px', '36px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'assets/images/b1m0_dos.png','0px','0px'],
                            transform: [[],['45']]
                        },
                        {
                            id: 'salon_bucheron',
                            type: 'image',
                            rect: ['-14px', '-4px', '1034px', '768px', 'auto', 'auto'],
                            opacity: '0.030011432926829',
                            fill: ["rgba(0,0,0,0)",'assets/images/salon_bucheron.png','0px','0px']
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['-32px', '-42px', '1151px', '861px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,35,61,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'chambre_bucheron2',
                            type: 'image',
                            rect: ['0px', '-63px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",'assets/images/chambre_bucheron.png','0px','0px']
                        },
                        {
                            id: 'oeil_gauche',
                            type: 'ellipse',
                            rect: ['243px', '281px', '23px', '22px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,35,61,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'oeil_droit',
                            type: 'ellipse',
                            rect: ['356px', '281px', '23px', '22px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,35,61,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'beep',
                            display: 'none',
                            volume: '0.15027923214286',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/beep.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'decolage',
                            display: 'none',
                            volume: '0.15435273214286',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/decolage.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'mignaturisation',
                            display: 'none',
                            volume: '0.074162946428571',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/mignaturisation.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'baleine',
                            display: 'none',
                            volume: '0.094363839285715',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/baleine.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'maison_detruite',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/maison_detruite.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'ambiance_sf',
                            display: 'none',
                            volume: '0.092745535714286',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"ambiance_sf.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'radar',
                            display: 'none',
                            volume: '0.068749785714286',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/radar.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'ambiance_sfCopy',
                            display: 'none',
                            volume: '0.092745535714286',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"ambiance_sf.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'nuit',
                            display: 'none',
                            volume: '0.0050223214285716',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/nuit.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'horloge',
                            display: 'none',
                            volume: '0.06640625',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/horloge.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'horlogeCopy',
                            display: 'none',
                            volume: '0.06640625',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/horloge.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'ambiance_sfCopy2',
                            display: 'none',
                            volume: '0.092745535714286',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: [aud+"ambiance_sf.mp3"],
                            preload: 'auto'
                        },
                        {
                            id: 'r2d2',
                            display: 'none',
                            volume: '0.148046875',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/r2d2.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'alerte',
                            display: 'none',
                            volume: '0.15385044642857',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/alerte.mp3'],
                            preload: 'auto'
                        },
                        {
                            id: 'atterissageb1',
                            display: 'none',
                            type: 'audio',
                            tag: 'audio',
                            rect: ['0', '0', '320px', '45px', 'auto', 'auto'],
                            source: ['assets/media/atterissageb1.mp3'],
                            preload: 'auto'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(30,16,58,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 86144,
                    autoPlay: true,
                    data: [
                        [
                            "eid542",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${cache_porte_etoile}",
                            '0',
                            '0'
                        ],
                        [
                            "eid543",
                            "opacity",
                            56134,
                            0,
                            "linear",
                            "${cache_porte_etoile}",
                            '0',
                            '1'
                        ],
                        [
                            "eid687",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${fond_etoile_noir}",
                            '0',
                            '0'
                        ],
                        [
                            "eid688",
                            "opacity",
                            64500,
                            0,
                            "linear",
                            "${fond_etoile_noir}",
                            '0',
                            '1'
                        ],
                        [
                            "eid740",
                            "opacity",
                            66498,
                            0,
                            "easeInExpo",
                            "${fond_etoile_noir}",
                            '1',
                            '0'
                        ],
                        [
                            "eid489",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${font_porte_etoile}",
                            '0',
                            '0'
                        ],
                        [
                            "eid490",
                            "opacity",
                            56134,
                            0,
                            "linear",
                            "${font_porte_etoile}",
                            '0',
                            '1'
                        ],
                        [
                            "eid495",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${porte_etoile}",
                            '0',
                            '0'
                        ],
                        [
                            "eid497",
                            "opacity",
                            56134,
                            0,
                            "linear",
                            "${porte_etoile}",
                            '0',
                            '1'
                        ],
                        [
                            "eid569",
                            "height",
                            49000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '615px',
                            '615px'
                        ],
                        [
                            "eid624",
                            "width",
                            57000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '28px',
                            '40px'
                        ],
                        [
                            "eid628",
                            "width",
                            57750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid633",
                            "width",
                            58500,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid637",
                            "width",
                            59250,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid641",
                            "width",
                            60000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid645",
                            "width",
                            60750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid673",
                            "width",
                            61500,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid677",
                            "width",
                            62250,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid681",
                            "width",
                            63000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid685",
                            "width",
                            63750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid718",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${b1m0_heureux}",
                            '0',
                            '0'
                        ],
                        [
                            "eid738",
                            "opacity",
                            64500,
                            0,
                            "easeInExpo",
                            "${b1m0_heureux}",
                            '0',
                            '1'
                        ],
                        [
                            "eid739",
                            "opacity",
                            66498,
                            0,
                            "easeInExpo",
                            "${b1m0_heureux}",
                            '1',
                            '0'
                        ],
                        [
                            "eid619",
                            "height",
                            57000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '27px',
                            '40px'
                        ],
                        [
                            "eid626",
                            "height",
                            57750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid631",
                            "height",
                            58500,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid635",
                            "height",
                            59250,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid639",
                            "height",
                            60000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid643",
                            "height",
                            60750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid671",
                            "height",
                            61500,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid675",
                            "height",
                            62250,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid679",
                            "height",
                            63000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid683",
                            "height",
                            63750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '40px',
                            '26px'
                        ],
                        [
                            "eid943",
                            "volume",
                            74312,
                            0,
                            "linear",
                            "${ambiance_sfCopy}",
                            '0.092745535714286',
                            '0.092745535714286'
                        ],
                        [
                            "eid904",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${oeil_droit}",
                            '0',
                            '0'
                        ],
                        [
                            "eid906",
                            "opacity",
                            82569,
                            0,
                            "linear",
                            "${oeil_droit}",
                            '0',
                            '1'
                        ],
                        [
                            "eid864",
                            "width",
                            80997,
                            0,
                            "linear",
                            "${salon_bucheron}",
                            '1034px',
                            '1034px'
                        ],
                        [
                            "eid494",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${interieur_porte_etoile}",
                            '0',
                            '0'
                        ],
                        [
                            "eid496",
                            "opacity",
                            56134,
                            0,
                            "linear",
                            "${interieur_porte_etoile}",
                            '0',
                            '1'
                        ],
                        [
                            "eid562",
                            "scaleY",
                            46000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '1.01873',
                            '1.01873'
                        ],
                        [
                            "eid625",
                            "left",
                            57000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '893px',
                            '886px'
                        ],
                        [
                            "eid629",
                            "left",
                            57750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid632",
                            "left",
                            58500,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid636",
                            "left",
                            59250,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid640",
                            "left",
                            60000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid644",
                            "left",
                            60750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid672",
                            "left",
                            61500,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid676",
                            "left",
                            62250,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid680",
                            "left",
                            63000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid684",
                            "left",
                            63750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '886px',
                            '893px'
                        ],
                        [
                            "eid971",
                            "volume",
                            56454,
                            46,
                            "linear",
                            "${alerte}",
                            '0.13666294642857',
                            '0.13'
                        ],
                        [
                            "eid968",
                            "volume",
                            56454,
                            0,
                            "linear",
                            "${beep}",
                            '0.15027923214286',
                            '0.15027923214286'
                        ],
                        [
                            "eid950",
                            "volume",
                            75777,
                            0,
                            "linear",
                            "${horloge}",
                            '0.06640625',
                            '0.06640625'
                        ],
                        [
                            "eid945",
                            "volume",
                            66631,
                            0,
                            "linear",
                            "${radar}",
                            '0.068749785714286',
                            '0.068749785714286'
                        ],
                        [
                            "eid498",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '0',
                            '0'
                        ],
                        [
                            "eid499",
                            "opacity",
                            56134,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid540",
                            "opacity",
                            63000,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '1',
                            '1'
                        ],
                        [
                            "eid541",
                            "opacity",
                            63250,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '1',
                            '0'
                        ],
                        [
                            "eid965",
                            "volume",
                            52000,
                            0,
                            "linear",
                            "${r2d2}",
                            '0.148046875',
                            '0.148046875'
                        ],
                        [
                            "eid288",
                            "scaleX",
                            46000,
                            0,
                            "easeOutBack",
                            "${b1mo_de_dos}",
                            '0.94142',
                            '1'
                        ],
                        [
                            "eid471",
                            "scaleX",
                            53933,
                            2202,
                            "linear",
                            "${b1mo_de_dos}",
                            '1.07299',
                            '0.55416'
                        ],
                        [
                            "eid568",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid567",
                            "opacity",
                            49000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid578",
                            "opacity",
                            51000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid579",
                            "opacity",
                            52000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid586",
                            "opacity",
                            54000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid558",
                            "width",
                            46000,
                            0,
                            "linear",
                            "${font_porte_etoile}",
                            '1024px',
                            '1024px'
                        ],
                        [
                            "eid946",
                            "volume",
                            46000,
                            0,
                            "linear",
                            "${ambiance_sfCopy2}",
                            '0.092745535714286',
                            '0.092745535714286'
                        ],
                        [
                            "eid571",
                            "left",
                            49000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid951",
                            "volume",
                            78236,
                            0,
                            "linear",
                            "${horlogeCopy}",
                            '0.06640625',
                            '0.06640625'
                        ],
                        [
                            "eid970",
                            "volume",
                            56901,
                            5349,
                            "linear",
                            "${decolage}",
                            '0.15435273214286',
                            '0.31534598214286'
                        ],
                        [
                            "eid942",
                            "volume",
                            62250,
                            2250,
                            "linear",
                            "${decolage}",
                            '0.31534598214286',
                            '0'
                        ],
                        [
                            "eid787",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${foret}",
                            '0',
                            '0'
                        ],
                        [
                            "eid807",
                            "opacity",
                            74000,
                            1500,
                            "linear",
                            "${foret}",
                            '1',
                            '0.99'
                        ],
                        [
                            "eid596",
                            "left",
                            56134,
                            0,
                            "linear",
                            "${interieur_porte_etoile}",
                            '185px',
                            '185px'
                        ],
                        [
                            "eid598",
                            "left",
                            56134,
                            0,
                            "linear",
                            "${porte_etoile}",
                            '185px',
                            '185px'
                        ],
                        [
                            "eid514",
                            "left",
                            57000,
                            0,
                            "linear",
                            "${porte_etoile}",
                            '185px',
                            '185px'
                        ],
                        [
                            "eid595",
                            "top",
                            56134,
                            0,
                            "linear",
                            "${cache_porte_etoile}",
                            '615px',
                            '615px'
                        ],
                        [
                            "eid263",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1',
                            '1'
                        ],
                        [
                            "eid563",
                            "opacity",
                            49000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid576",
                            "opacity",
                            51000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid262",
                            "opacity",
                            52000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1',
                            '0'
                        ],
                        [
                            "eid265",
                            "opacity",
                            54000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '0',
                            '0'
                        ],
                        [
                            "eid812",
                            "top",
                            74000,
                            1490,
                            "linear",
                            "${b1m0_dos3}",
                            '-35px',
                            '204px'
                        ],
                        [
                            "eid976",
                            "top",
                            75490,
                            10,
                            "linear",
                            "${b1m0_dos3}",
                            '204px',
                            '252px'
                        ],
                        [
                            "eid827",
                            "top",
                            77000,
                            32,
                            "linear",
                            "${b1m0_dos3}",
                            '252px',
                            '303px'
                        ],
                        [
                            "eid978",
                            "top",
                            77032,
                            801,
                            "linear",
                            "${b1m0_dos3}",
                            '303px',
                            '368px'
                        ],
                        [
                            "eid572",
                            "top",
                            49000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid200",
                            "top",
                            51129,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '0px',
                            '2px'
                        ],
                        [
                            "eid561",
                            "top",
                            46000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '-2px',
                            '-2px'
                        ],
                        [
                            "eid268",
                            "left",
                            46000,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '507px',
                            '507px'
                        ],
                        [
                            "eid510",
                            "left",
                            56134,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '507px',
                            '421px'
                        ],
                        [
                            "eid536",
                            "left",
                            63000,
                            250,
                            "linear",
                            "${b1m0_dos}",
                            '421px',
                            '627px'
                        ],
                        [
                            "eid833",
                            "left",
                            81248,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '-32px',
                            '-32px'
                        ],
                        [
                            "eid905",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${oeil_gauche}",
                            '0',
                            '0'
                        ],
                        [
                            "eid907",
                            "opacity",
                            82569,
                            0,
                            "linear",
                            "${oeil_gauche}",
                            '0',
                            '1'
                        ],
                        [
                            "eid743",
                            "opacity",
                            46000,
                            0,
                            "easeInExpo",
                            "${b1m0_heureux2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid744",
                            "opacity",
                            66498,
                            0,
                            "easeInExpo",
                            "${b1m0_heureux2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid104",
                            "top",
                            46000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '434px',
                            '434px'
                        ],
                        [
                            "eid420",
                            "top",
                            54000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '434px',
                            '386px'
                        ],
                        [
                            "eid574",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${b1mo_de_dos}",
                            '1',
                            '1'
                        ],
                        [
                            "eid564",
                            "opacity",
                            49000,
                            0,
                            "linear",
                            "${b1mo_de_dos}",
                            '1',
                            '0'
                        ],
                        [
                            "eid577",
                            "opacity",
                            51000,
                            0,
                            "linear",
                            "${b1mo_de_dos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid580",
                            "opacity",
                            52000,
                            0,
                            "linear",
                            "${b1mo_de_dos}",
                            '1',
                            '0'
                        ],
                        [
                            "eid587",
                            "opacity",
                            53933,
                            0,
                            "linear",
                            "${b1mo_de_dos}",
                            '0',
                            '1'
                        ],
                        [
                            "eid107",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '0',
                            '0'
                        ],
                        [
                            "eid110",
                            "opacity",
                            49000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid198",
                            "opacity",
                            51000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '1',
                            '0'
                        ],
                        [
                            "eid202",
                            "opacity",
                            52000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid264",
                            "opacity",
                            54000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '1',
                            '0'
                        ],
                        [
                            "eid927",
                            "volume",
                            56000,
                            0,
                            "linear",
                            "${ambiance_sf}",
                            '0.092745535714286',
                            '0.092745535714286'
                        ],
                        [
                            "eid601",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${bouton_vert}",
                            '0',
                            '0'
                        ],
                        [
                            "eid610",
                            "opacity",
                            56500,
                            0,
                            "linear",
                            "${bouton_vert}",
                            '0',
                            '1'
                        ],
                        [
                            "eid611",
                            "opacity",
                            57000,
                            0,
                            "linear",
                            "${bouton_vert}",
                            '1',
                            '1'
                        ],
                        [
                            "eid734",
                            "rotateZ",
                            64500,
                            1998,
                            "easeInExpo",
                            "${b1m0_heureux}",
                            '0deg',
                            '620deg'
                        ],
                        [
                            "eid908",
                            "top",
                            82750,
                            0,
                            "linear",
                            "${oeil_droit}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid830",
                            "left",
                            81000,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid878",
                            "left",
                            81061,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '39px'
                        ],
                        [
                            "eid879",
                            "left",
                            81133,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '39px',
                            '0px'
                        ],
                        [
                            "eid880",
                            "left",
                            81188,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '37px'
                        ],
                        [
                            "eid881",
                            "left",
                            81248,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '37px',
                            '0px'
                        ],
                        [
                            "eid882",
                            "left",
                            81304,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '32px'
                        ],
                        [
                            "eid883",
                            "left",
                            81365,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '32px',
                            '-4px'
                        ],
                        [
                            "eid884",
                            "left",
                            81430,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '-4px',
                            '31px'
                        ],
                        [
                            "eid885",
                            "left",
                            81500,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '31px',
                            '0px'
                        ],
                        [
                            "eid886",
                            "left",
                            81552,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '39px'
                        ],
                        [
                            "eid887",
                            "left",
                            81624,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '39px',
                            '0px'
                        ],
                        [
                            "eid888",
                            "left",
                            81679,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '37px'
                        ],
                        [
                            "eid889",
                            "left",
                            81739,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '37px',
                            '0px'
                        ],
                        [
                            "eid890",
                            "left",
                            81795,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '32px'
                        ],
                        [
                            "eid891",
                            "left",
                            81856,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '32px',
                            '-4px'
                        ],
                        [
                            "eid892",
                            "left",
                            81921,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '-4px',
                            '31px'
                        ],
                        [
                            "eid893",
                            "left",
                            81991,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '31px',
                            '0px'
                        ],
                        [
                            "eid894",
                            "left",
                            82052,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '39px'
                        ],
                        [
                            "eid895",
                            "left",
                            82124,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '39px',
                            '0px'
                        ],
                        [
                            "eid896",
                            "left",
                            82179,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '37px'
                        ],
                        [
                            "eid897",
                            "left",
                            82239,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '37px',
                            '0px'
                        ],
                        [
                            "eid898",
                            "left",
                            82295,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0px',
                            '32px'
                        ],
                        [
                            "eid899",
                            "left",
                            82356,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '32px',
                            '-4px'
                        ],
                        [
                            "eid900",
                            "left",
                            82421,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '-4px',
                            '31px'
                        ],
                        [
                            "eid901",
                            "left",
                            82491,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '31px',
                            '0px'
                        ],
                        [
                            "eid730",
                            "width",
                            64500,
                            1998,
                            "easeInExpo",
                            "${b1m0_heureux}",
                            '18px',
                            '327px'
                        ],
                        [
                            "eid597",
                            "top",
                            56134,
                            0,
                            "linear",
                            "${interieur_porte_etoile}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid599",
                            "top",
                            56134,
                            0,
                            "linear",
                            "${porte_etoile}",
                            '52px',
                            '52px'
                        ],
                        [
                            "eid752",
                            "rotateZ",
                            66498,
                            1502,
                            "linear",
                            "${b1m0_heureux2}",
                            '0deg',
                            '620deg'
                        ],
                        [
                            "eid861",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid862",
                            "opacity",
                            78236,
                            0,
                            "linear",
                            "${Rectangle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid566",
                            "left",
                            49000,
                            0,
                            "linear",
                            "${microphone}",
                            '358px',
                            '358px'
                        ],
                        [
                            "eid493",
                            "top",
                            56134,
                            0,
                            "linear",
                            "${font_porte_etoile}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid582",
                            "top",
                            52000,
                            0,
                            "linear",
                            "${b1m0_face}",
                            '392px',
                            '392px'
                        ],
                        [
                            "eid289",
                            "scaleY",
                            46000,
                            0,
                            "easeOutBack",
                            "${b1mo_de_dos}",
                            '0.93197',
                            '0.93197'
                        ],
                        [
                            "eid472",
                            "scaleY",
                            53933,
                            2202,
                            "linear",
                            "${b1mo_de_dos}",
                            '1',
                            '0.51645'
                        ],
                        [
                            "eid575",
                            "left",
                            46000,
                            0,
                            "linear",
                            "${b1mo_de_dos}",
                            '423px',
                            '394px'
                        ],
                        [
                            "eid477",
                            "left",
                            53933,
                            67,
                            "linear",
                            "${b1mo_de_dos}",
                            '407px',
                            '393px'
                        ],
                        [
                            "eid481",
                            "left",
                            54000,
                            2134,
                            "linear",
                            "${b1mo_de_dos}",
                            '393px',
                            '393px'
                        ],
                        [
                            "eid292",
                            "top",
                            46000,
                            0,
                            "easeOutBack",
                            "${b1mo_de_dos}",
                            '402px',
                            '410px'
                        ],
                        [
                            "eid478",
                            "top",
                            53933,
                            67,
                            "linear",
                            "${b1mo_de_dos}",
                            '405px',
                            '399px'
                        ],
                        [
                            "eid482",
                            "top",
                            54000,
                            2134,
                            "linear",
                            "${b1mo_de_dos}",
                            '399px',
                            '252px'
                        ],
                        [
                            "eid781",
                            "left",
                            68000,
                            6000,
                            "linear",
                            "${baleine2}",
                            '1034px',
                            '-486px'
                        ],
                        [
                            "eid909",
                            "top",
                            82750,
                            0,
                            "linear",
                            "${oeil_gauche}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid517",
                            "rotateZ",
                            57000,
                            2000,
                            "linear",
                            "${porte_etoile}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid518",
                            "rotateZ",
                            59000,
                            2000,
                            "linear",
                            "${porte_etoile}",
                            '0deg',
                            '620deg'
                        ],
                        [
                            "eid519",
                            "rotateZ",
                            61000,
                            2000,
                            "linear",
                            "${porte_etoile}",
                            '0deg',
                            '1240deg'
                        ],
                        [
                            "eid545",
                            "rotateZ",
                            63000,
                            750,
                            "linear",
                            "${porte_etoile}",
                            '1240deg',
                            '1300deg'
                        ],
                        [
                            "eid903",
                            "top",
                            82569,
                            0,
                            "linear",
                            "${salon_bucheron}",
                            '-4px',
                            '-4px'
                        ],
                        [
                            "eid584",
                            "left",
                            49000,
                            0,
                            "linear",
                            "${b1m0_face}",
                            '351px',
                            '351px'
                        ],
                        [
                            "eid581",
                            "left",
                            52000,
                            0,
                            "linear",
                            "${b1m0_face}",
                            '351px',
                            '366px'
                        ],
                        [
                            "eid228",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${b1m0_face}",
                            '0',
                            '0'
                        ],
                        [
                            "eid229",
                            "opacity",
                            52000,
                            0,
                            "linear",
                            "${b1m0_face}",
                            '0',
                            '1'
                        ],
                        [
                            "eid247",
                            "opacity",
                            53933,
                            0,
                            "linear",
                            "${b1m0_face}",
                            '1',
                            '0'
                        ],
                        [
                            "eid248",
                            "opacity",
                            54000,
                            0,
                            "linear",
                            "${b1m0_face}",
                            '0',
                            '0'
                        ],
                        [
                            "eid828",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid829",
                            "opacity",
                            78236,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid863",
                            "left",
                            80997,
                            0,
                            "linear",
                            "${salon_bucheron}",
                            '-14px',
                            '-14px'
                        ],
                        [
                            "eid902",
                            "left",
                            82569,
                            0,
                            "linear",
                            "${salon_bucheron}",
                            '-14px',
                            '-12px'
                        ],
                        [
                            "eid972",
                            "volume",
                            62912,
                            0,
                            "linear",
                            "${mignaturisation}",
                            '0.074162946428571',
                            '0.074162946428571'
                        ],
                        [
                            "eid594",
                            "left",
                            56134,
                            0,
                            "linear",
                            "${cache_porte_etoile}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid570",
                            "width",
                            49000,
                            0,
                            "linear",
                            "${scene3_leia}",
                            '1024px',
                            '1024px'
                        ],
                        [
                            "eid507",
                            "height",
                            46000,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '345px',
                            '345px'
                        ],
                        [
                            "eid512",
                            "height",
                            56134,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '345px',
                            '240px'
                        ],
                        [
                            "eid539",
                            "height",
                            63000,
                            250,
                            "linear",
                            "${b1m0_dos}",
                            '240px',
                            '9px'
                        ],
                        [
                            "eid747",
                            "location",
                            66498,
                            1502,
                            "linear",
                            "${b1m0_heureux2}",
                            [[506.84, -90.52, 0, 0, 0, 0,0],[395.7, 73.42, 0.79, 140.83, 1.67, 295.45,206.26],[572.71, 176.88, 0.78, 138.22, 0.96, 171.13,422.06],[418.28, 296.54, -8.73, 151.49, -8.78, 152.44,625.05],[590.98, 427.25, 13.83, 127.23, 16.88, 155.29,849.73],[445.24, 537.18, -13.28, 120.57, -13.62, 123.67,1039.23],[577.49, 648.2, 52.61, 298.08, 19.42, 110.02,1217.46],[512.03, 829.73, 0, 0, 0, 0,1417.21]]
                        ],
                        [
                            "eid508",
                            "top",
                            46000,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '453px',
                            '453px'
                        ],
                        [
                            "eid523",
                            "top",
                            56134,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '453px',
                            '451px'
                        ],
                        [
                            "eid537",
                            "top",
                            63000,
                            250,
                            "linear",
                            "${b1m0_dos}",
                            '451px',
                            '321px'
                        ],
                        [
                            "eid841",
                            "top",
                            80997,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '-63px',
                            '-63px'
                        ],
                        [
                            "eid839",
                            "top",
                            82500,
                            0,
                            "linear",
                            "${chambre_bucheron2}",
                            '-2px',
                            '-33px'
                        ],
                        [
                            "eid509",
                            "width",
                            46000,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '178px',
                            '178px'
                        ],
                        [
                            "eid513",
                            "width",
                            56134,
                            0,
                            "linear",
                            "${b1m0_dos}",
                            '178px',
                            '172px'
                        ],
                        [
                            "eid538",
                            "width",
                            63000,
                            250,
                            "linear",
                            "${b1m0_dos}",
                            '173px',
                            '7px'
                        ],
                        [
                            "eid728",
                            "location",
                            64500,
                            2000,
                            "easeInExpo",
                            "${b1m0_heureux}",
                            [[311.51, 177.22, 0, 0, 0, 0,0],[217.39, 308.54, 61.96, 51.2, 205.85, 170.09,191.49],[444.35, 285.66, 130.46, 89.01, 84.37, 57.56,422.06],[266.13, 539.76, 237.93, 461.7, 124.29, 241.19,751.16],[1282.84, 846.62, 0, 0, 0, 0,1825.49]]
                        ],
                        [
                            "eid973",
                            "volume",
                            68000,
                            0,
                            "linear",
                            "${baleine}",
                            '0.094363839285715',
                            '0.094363839285715'
                        ],
                        [
                            "eid267",
                            "left",
                            46000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '388px',
                            '388px'
                        ],
                        [
                            "eid266",
                            "left",
                            54000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '388px',
                            '368px'
                        ],
                        [
                            "eid729",
                            "height",
                            64500,
                            1998,
                            "easeInExpo",
                            "${b1m0_heureux}",
                            '26px',
                            '468px'
                        ],
                        [
                            "eid795",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${salon_bucheron}",
                            '0',
                            '0'
                        ],
                        [
                            "eid796",
                            "opacity",
                            75500,
                            0,
                            "linear",
                            "${salon_bucheron}",
                            '0',
                            '1'
                        ],
                        [
                            "eid799",
                            "opacity",
                            77000,
                            0,
                            "linear",
                            "${salon_bucheron}",
                            '1',
                            '0.030011432926829'
                        ],
                        [
                            "eid910",
                            "opacity",
                            77045,
                            0,
                            "linear",
                            "${salon_bucheron}",
                            '0.030011432926829',
                            '0'
                        ],
                        [
                            "eid810",
                            "left",
                            74000,
                            1490,
                            "linear",
                            "${b1m0_dos3}",
                            '1046px',
                            '715px'
                        ],
                        [
                            "eid975",
                            "left",
                            75490,
                            10,
                            "linear",
                            "${b1m0_dos3}",
                            '715px',
                            '618px'
                        ],
                        [
                            "eid826",
                            "left",
                            77000,
                            32,
                            "linear",
                            "${b1m0_dos3}",
                            '618px',
                            '572px'
                        ],
                        [
                            "eid977",
                            "left",
                            77032,
                            801,
                            "linear",
                            "${b1m0_dos3}",
                            '572px',
                            '508px'
                        ],
                        [
                            "eid559",
                            "left",
                            46000,
                            0,
                            "linear",
                            "${Symbol_1}",
                            '-135px',
                            '-135px'
                        ],
                        [
                            "eid565",
                            "top",
                            49000,
                            0,
                            "linear",
                            "${microphone}",
                            '389px',
                            '389px'
                        ],
                        [
                            "eid623",
                            "top",
                            57000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '380px',
                            '375px'
                        ],
                        [
                            "eid627",
                            "top",
                            57750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid630",
                            "top",
                            58500,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid634",
                            "top",
                            59250,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid638",
                            "top",
                            60000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid642",
                            "top",
                            60750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid670",
                            "top",
                            61500,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid674",
                            "top",
                            62250,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid678",
                            "top",
                            63000,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid682",
                            "top",
                            63750,
                            750,
                            "linear",
                            "${bouton_vert}",
                            '375px',
                            '380px'
                        ],
                        [
                            "eid741",
                            "opacity",
                            46000,
                            0,
                            "easeInExpo",
                            "${fond_espace2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid742",
                            "opacity",
                            66498,
                            0,
                            "easeInExpo",
                            "${fond_espace2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid784",
                            "opacity",
                            74010,
                            0,
                            "linear",
                            "${fond_espace2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid159",
                            "opacity",
                            46000,
                            0,
                            "linear",
                            "${microphone}",
                            '0',
                            '0'
                        ],
                        [
                            "eid160",
                            "opacity",
                            49000,
                            0,
                            "linear",
                            "${microphone}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "opacity",
                            51000,
                            0,
                            "linear",
                            "${microphone}",
                            '1',
                            '0'
                        ],
                            [ "eid161", "trigger", 46000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${microphone}', [] ] ],
                            [ "eid462", "trigger", 46000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${b1mo_de_dos}', [] ] ],
                            [ "eid952", "trigger", 46000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ambiance_sfCopy2}', [] ] ],
                            [ "eid241", "trigger", 48000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${leia_parle}', [] ] ],
                            [ "eid162", "trigger", 49000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${microphone}', [] ] ],
                            [ "eid230", "trigger", 51932.694596176, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${b1m0_face}', [] ] ],
                            [ "eid932", "trigger", 52000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${r2d2}', [] ] ],
                            [ "eid491", "trigger", 53932.694596176, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${b1mo_de_dos}', [] ] ],
                            [ "eid492", "trigger", 56000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${b1mo_de_dos}', [] ] ],
                            [ "eid931", "trigger", 56000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ambiance_sf}', [] ] ],
                            [ "eid916", "trigger", 56454, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${beep}', [] ] ],
                            [ "eid933", "trigger", 56454, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${alerte}', [] ] ],
                            [ "eid917", "trigger", 56901, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${decolage}', [] ] ],
                            [ "eid934", "trigger", 62912, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${mignaturisation}', [] ] ],
                            [ "eid953", "trigger", 64180.99644382, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${decolage}', [] ] ],
                            [ "eid954", "trigger", 64180.99644382, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${radar}', [] ] ],
                            [ "eid955", "trigger", 65216, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${atterissageb1}', [] ] ],
                            [ "eid782", "trigger", 68000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleine2}', [] ] ],
                            [ "eid920", "trigger", 68051, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${baleine}', [] ] ],
                            [ "eid783", "trigger", 71010, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleine2}', [] ] ],
                            [ "eid921", "trigger", 73844, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${baleine}', [] ] ],
                            [ "eid956", "trigger", 73969, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${radar}', [] ] ],
                            [ "eid957", "trigger", 73969, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${nuit}', [] ] ],
                            [ "eid937", "trigger", 74000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${atterissageb1}', [] ] ],
                            [ "eid958", "trigger", 74312, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${ambiance_sfCopy}', [] ] ],
                            [ "eid959", "trigger", 75500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${nuit}', [] ] ],
                            [ "eid938", "trigger", 75500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${atterissageb1}', [] ] ],
                            [ "eid960", "trigger", 75777, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${horloge}', [] ] ],
                            [ "eid962", "trigger", 77000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${nuit}', [] ] ],
                            [ "eid961", "trigger", 77000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${horloge}', [] ] ],
                            [ "eid939", "trigger", 77000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${atterissageb1}', [] ] ],
                            [ "eid940", "trigger", 78000, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${atterissageb1}', [] ] ],
                            [ "eid963", "trigger", 78236, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${horlogeCopy}', [] ] ],
                            [ "eid935", "trigger", 80997, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${maison_detruite}', [] ] ],
                            [ "eid936", "trigger", 84059, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['pause', '${maison_detruite}', [] ] ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1280px', '768px', 'auto', 'auto'],
                            id: 'scene1_leia2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'assets/images/scene1_leia2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1280px', '768px']
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
            "Symbol_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '240px', '239px', '0px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(28,16,46,1)']
                        },
                        {
                            rect: ['-279px', '3px', '1058px', '240px', 'auto', 'auto'],
                            id: 'leia_parle',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'assets/images/leia_parle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '239px', '240px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid56",
                            "left",
                            0,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-9px',
                            '-9px'
                        ],
                        [
                            "eid57",
                            "left",
                            128,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-9px',
                            '-279px'
                        ],
                        [
                            "eid59",
                            "left",
                            250,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-279px',
                            '-547px'
                        ],
                        [
                            "eid60",
                            "left",
                            373,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-546px',
                            '-279px'
                        ],
                        [
                            "eid61",
                            "left",
                            500,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-290px',
                            '-9px'
                        ],
                        [
                            "eid76",
                            "left",
                            628,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-9px',
                            '-279px'
                        ],
                        [
                            "eid77",
                            "left",
                            750,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-279px',
                            '-547px'
                        ],
                        [
                            "eid78",
                            "left",
                            873,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-547px',
                            '-279px'
                        ],
                        [
                            "eid79",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-279px',
                            '-9px'
                        ],
                        [
                            "eid94",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-9px',
                            '-9px'
                        ],
                        [
                            "eid95",
                            "left",
                            1628,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-9px',
                            '-279px'
                        ],
                        [
                            "eid96",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-279px',
                            '-547px'
                        ],
                        [
                            "eid97",
                            "left",
                            1873,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-547px',
                            '-279px'
                        ],
                        [
                            "eid98",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-279px',
                            '-9px'
                        ],
                        [
                            "eid71",
                            "top",
                            0,
                            0,
                            "linear",
                            "${leia_parle}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid72",
                            "top",
                            128,
                            0,
                            "linear",
                            "${leia_parle}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid73",
                            "top",
                            250,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1px',
                            '-1px'
                        ],
                        [
                            "eid74",
                            "top",
                            373,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-1px',
                            '1px'
                        ],
                        [
                            "eid75",
                            "top",
                            500,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid80",
                            "top",
                            628,
                            0,
                            "linear",
                            "${leia_parle}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid81",
                            "top",
                            750,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1px',
                            '-1px'
                        ],
                        [
                            "eid82",
                            "top",
                            873,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-1px',
                            '1px'
                        ],
                        [
                            "eid83",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1px',
                            '3px'
                        ],
                        [
                            "eid99",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${leia_parle}",
                            '3px',
                            '3px'
                        ],
                        [
                            "eid100",
                            "top",
                            1628,
                            0,
                            "linear",
                            "${leia_parle}",
                            '3px',
                            '1px'
                        ],
                        [
                            "eid101",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1px',
                            '-1px'
                        ],
                        [
                            "eid102",
                            "top",
                            1873,
                            0,
                            "linear",
                            "${leia_parle}",
                            '-1px',
                            '1px'
                        ],
                        [
                            "eid103",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${leia_parle}",
                            '1px',
                            '3px'
                        ]
                    ]
                }
            },
            "b1m1_parle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '295px', '338px', 'auto', 'auto'],
                            fill: ['rgba(28,16,46,1)']
                        },
                        {
                            id: 'b1m0_parle2',
                            type: 'image',
                            rect: ['-954px', '-1px', '1256px', '340px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'assets/images/b1m0_parle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '295px', '338px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid111",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '55px',
                            '55px'
                        ],
                        [
                            "eid112",
                            "left",
                            250,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '55px',
                            '-195px'
                        ],
                        [
                            "eid113",
                            "left",
                            500,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '-195px',
                            '-447px'
                        ],
                        [
                            "eid114",
                            "left",
                            750,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '-447px',
                            '-702px'
                        ],
                        [
                            "eid115",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '-702px',
                            '-954px'
                        ],
                        [
                            "eid116",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '-954px',
                            '-195px'
                        ],
                        [
                            "eid117",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '-195px',
                            '-447px'
                        ],
                        [
                            "eid118",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '-447px',
                            '-702px'
                        ],
                        [
                            "eid119",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${b1m0_parle2}",
                            '-702px',
                            '-954px'
                        ]
                    ]
                }
            },
            "microphone": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '381px', '327px', '0px', 'auto', 'auto'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(28,16,46,1)']
                        },
                        {
                            type: 'image',
                            id: 'microphone_b1m0',
                            rect: ['31px', '6px', '1070px', '378px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'assets/images/microphone_b1m0.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '327px', '381px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid122",
                            "top",
                            0,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid131",
                            "top",
                            250,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '8px',
                            '10px'
                        ],
                        [
                            "eid132",
                            "top",
                            500,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '9px',
                            '6px'
                        ],
                        [
                            "eid134",
                            "top",
                            750,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '6px',
                            '9px'
                        ],
                        [
                            "eid136",
                            "top",
                            1000,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '9px',
                            '6px'
                        ],
                        [
                            "eid193",
                            "top",
                            1250,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '6px',
                            '8px'
                        ],
                        [
                            "eid194",
                            "top",
                            1500,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '8px',
                            '10px'
                        ],
                        [
                            "eid195",
                            "top",
                            1750,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '10px',
                            '6px'
                        ],
                        [
                            "eid196",
                            "top",
                            2000,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '6px',
                            '9px'
                        ],
                        [
                            "eid128",
                            "left",
                            0,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid129",
                            "left",
                            250,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '32px',
                            '-369px'
                        ],
                        [
                            "eid130",
                            "left",
                            500,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '-369px',
                            '-769px'
                        ],
                        [
                            "eid133",
                            "left",
                            750,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '-769px',
                            '-370px'
                        ],
                        [
                            "eid135",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '-370px',
                            '32px'
                        ],
                        [
                            "eid189",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '32px',
                            '32px'
                        ],
                        [
                            "eid190",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '32px',
                            '-369px'
                        ],
                        [
                            "eid191",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '-369px',
                            '-769px'
                        ],
                        [
                            "eid192",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${microphone_b1m0}",
                            '-769px',
                            '-370px'
                        ]
                    ]
                }
            },
            "Symbol_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '397px', '317px', '0px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            id: 'b1m0_parle2',
                            type: 'image',
                            rect: ['36px', '10px', '1397px', '378px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'assets/images/b1m0_parle.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '317px', '397px']
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
            "b1m0_normal": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '381px', '327px', '0px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['-161px', '2px', '1070px', '378px', 'auto', 'auto'],
                            id: 'b1m0_normal_face',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'assets/images/b1m0_normal_face.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '327px', '381px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid225",
                            "left",
                            0,
                            0,
                            "linear",
                            "${b1m0_normal_face}",
                            '-162px',
                            '-162px'
                        ],
                        [
                            "eid226",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${b1m0_normal_face}",
                            '-162px',
                            '-557px'
                        ],
                        [
                            "eid227",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${b1m0_normal_face}",
                            '-557px',
                            '-161px'
                        ]
                    ]
                }
            },
            "b1m0_dos_marche": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '239px', '409px', 'auto', 'auto'],
                            fill: ['rgba(28,16,46,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '239px', '409px']
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
            "test": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '204px', '239', '409', 'auto', 'auto'],
                            id: 'b1m0_dos_marche',
                            symbolName: 'b1m0_dos_marche',
                            type: 'rect',
                            transform: [[], [], [], ['1', '0.00122']]
                        },
                        {
                            type: 'image',
                            id: 'b1m0_dos2',
                            rect: ['37px', '194px', '158px', '215px', 'auto', 'auto'],
                            autoOrient: false,
                            fill: ['rgba(0,0,0,0)', 'assets/images/b1m0_dos.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '239px', '409px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid270",
                            "top",
                            0,
                            0,
                            "linear",
                            "${b1m0_dos_marche}",
                            '204px',
                            '204px'
                        ],
                        [
                            "eid371",
                            "top",
                            0,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '194px',
                            '128px'
                        ],
                        [
                            "eid374",
                            "top",
                            250,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '128px',
                            '194px'
                        ],
                        [
                            "eid380",
                            "top",
                            500,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '194px',
                            '128px'
                        ],
                        [
                            "eid381",
                            "top",
                            750,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '128px',
                            '194px'
                        ],
                        [
                            "eid382",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '194px',
                            '128px'
                        ],
                        [
                            "eid383",
                            "top",
                            1250,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '128px',
                            '194px'
                        ],
                        [
                            "eid384",
                            "top",
                            1500,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '194px',
                            '128px'
                        ],
                        [
                            "eid385",
                            "top",
                            1750,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '128px',
                            '194px'
                        ],
                        [
                            "eid386",
                            "top",
                            2000,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '194px',
                            '128px'
                        ],
                        [
                            "eid387",
                            "top",
                            2250,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '128px',
                            '194px'
                        ],
                        [
                            "eid388",
                            "top",
                            2500,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '194px',
                            '128px'
                        ],
                        [
                            "eid389",
                            "top",
                            2750,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '128px',
                            '194px'
                        ],
                        [
                            "eid390",
                            "top",
                            3000,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '194px',
                            '128px'
                        ],
                        [
                            "eid391",
                            "top",
                            3250,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '128px',
                            '194px'
                        ],
                        [
                            "eid392",
                            "top",
                            3500,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '194px',
                            '128px'
                        ],
                        [
                            "eid393",
                            "top",
                            3750,
                            250,
                            "linear",
                            "${b1m0_dos2}",
                            '128px',
                            '194px'
                        ],
                        [
                            "eid269",
                            "scaleY",
                            0,
                            0,
                            "linear",
                            "${b1m0_dos_marche}",
                            '0.00122',
                            '0.00122'
                        ]
                    ]
                }
            },
            "baleine": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '258px', '487px', '0px', 'auto', 'auto'],
                            id: 'baleine',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['-15px', '-1px', '1618px', '259px', 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'baleine_nage2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'assets/images/baleine_nage.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, '486px', '258px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: true,
                    data: [
                        [
                            "eid754",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-15px',
                            '-15px'
                        ],
                        [
                            "eid756",
                            "left",
                            804,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-15px',
                            '-566px'
                        ],
                        [
                            "eid770",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-566px',
                            '-15px'
                        ],
                        [
                            "eid778",
                            "left",
                            2300,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-15px',
                            '-566px'
                        ],
                        [
                            "eid779",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-566px',
                            '-15px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("scene1_leia_edgeActions.js");
})("EDGE-12235232");
