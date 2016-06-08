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
                            id: 'bimo_mensonge22',
                            type: 'image',
                            rect: ['-2469px', '-1302px', '6926px', '4640px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bimo_mensonge2.png",'0px','0px'],
                            transform: [[],['1080']]
                        },
                        {
                            id: 'chambre_bucheron',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"chambre_bucheron.png",'0px','0px']
                        },
                        {
                            id: 'baleine',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1036px', '268px', '588', '327', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'baleineCopy',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1036px', '0px', '588', '327', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'baleineCopy2',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1036px', '432px', '588', '327', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'baleineCopy3',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1036px', '105px', '588', '327', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'baleineCopy8',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1036px', '268px', '588', '327', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'baleineCopy7',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1036px', '0px', '588', '327', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'baleineCopy6',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1036px', '432px', '588', '327', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'baleineCopy5',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1036px', '105px', '588', '327', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'baleineCopy4',
                            symbolName: 'baleine',
                            type: 'rect',
                            rect: ['1765px', '-17px', '588', '327', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['11.10849','11.38546']]
                        },
                        {
                            id: 'tete_charlie',
                            type: 'image',
                            rect: ['168px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy3',
                            type: 'image',
                            rect: ['168px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy2',
                            type: 'image',
                            rect: ['700px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy4',
                            type: 'image',
                            rect: ['700px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy9',
                            type: 'image',
                            rect: ['168px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy8',
                            type: 'image',
                            rect: ['168px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy7',
                            type: 'image',
                            rect: ['414px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy6',
                            type: 'image',
                            rect: ['700px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy5',
                            type: 'image',
                            rect: ['700px', '768px', '255px', '257px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete_charlieCopy',
                            type: 'image',
                            rect: ['-735px', '-1224px', '1523px', '1535px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'chambre_bucheron2',
                            type: 'image',
                            rect: ['-1017px', '-1099px', '5014px', '3758px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"chambre_bucheron2.png",'0px','0px']
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['0px', '-29px', '113px', '858px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,35,61,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'chambre',
                            type: 'image',
                            rect: ['-897px', '-1106px', '1533px', '1150px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"chambre.svg",'0px','0px']
                        },
                        {
                            id: 'fond_espace2',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fond_espace2.png",'0px','0px']
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['269px', '339px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 255, 255); font-size: 100px;\">Game Over</span></p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'planete',
                            type: 'image',
                            rect: ['183px', '431px', '11px', '11px', 'auto', 'auto'],
                            autoOrient: true,
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"planete.png",'0px','0px']
                        },
                        {
                            id: 'planeteCopy',
                            type: 'image',
                            rect: ['239px', '487px', '11px', '11px', 'auto', 'auto'],
                            autoOrient: true,
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"planete.png",'0px','0px']
                        },
                        {
                            id: 'planeteCopy3',
                            type: 'image',
                            rect: ['239px', '487px', '11px', '11px', 'auto', 'auto'],
                            autoOrient: true,
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"planete.png",'0px','0px']
                        },
                        {
                            id: 'planeteCopy2',
                            type: 'image',
                            rect: ['239px', '487px', '11px', '11px', 'auto', 'auto'],
                            autoOrient: true,
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"planete.png",'0px','0px']
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['441px', '397px', '36px', '34px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['608px', '396px', '36px', '34px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['228px', '672px', '639px', '65px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['269', '691px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 1.3984375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Oh mon dieu ! Ouf ! Cela n'était qu'un stupide rêve !<span style=\"font-family: alice, serif;\">​</span></p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'TextCopy',
                            type: 'text',
                            rect: ['269', '691px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px 1.3984375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Et bien je retourne dormir ! car c'était éprouvant.</p>",
                            font: ['alice, serif', [24, ""], "rgba(0,35,61,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '1024px', '768px'],
                            overflow: 'hidden',
                            fill: ["rgba(215,231,251,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 69589,
                    autoPlay: true,
                    data: [
                        [
                            "eid172",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baleineCopy7}",
                            '0',
                            '0'
                        ],
                        [
                            "eid173",
                            "opacity",
                            17000,
                            0,
                            "linear",
                            "${baleineCopy7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid196",
                            "left",
                            17995,
                            0,
                            "linear",
                            "${tete_charlieCopy7}",
                            '414px',
                            '414px'
                        ],
                        [
                            "eid192",
                            "top",
                            19245,
                            4745,
                            "linear",
                            "${tete_charlieCopy5}",
                            '-257px',
                            '768px'
                        ],
                        [
                            "eid170",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baleineCopy7}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid171",
                            "top",
                            17000,
                            0,
                            "linear",
                            "${baleineCopy7}",
                            '268px',
                            '0px'
                        ],
                        [
                            "eid119",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baleineCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid120",
                            "opacity",
                            8750,
                            0,
                            "linear",
                            "${baleineCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid271",
                            "width",
                            22250,
                            500,
                            "linear",
                            "${planeteCopy3}",
                            '19px',
                            '122px'
                        ],
                        [
                            "eid272",
                            "width",
                            25000,
                            990,
                            "linear",
                            "${planeteCopy3}",
                            '112px',
                            '11px'
                        ],
                        [
                            "eid235",
                            "height",
                            20250,
                            500,
                            "linear",
                            "${planete}",
                            '19px',
                            '122px'
                        ],
                        [
                            "eid244",
                            "height",
                            23000,
                            990,
                            "linear",
                            "${planete}",
                            '112px',
                            '11px'
                        ],
                        [
                            "eid255",
                            "width",
                            21250,
                            500,
                            "linear",
                            "${planeteCopy}",
                            '19px',
                            '122px'
                        ],
                        [
                            "eid256",
                            "width",
                            24000,
                            990,
                            "linear",
                            "${planeteCopy}",
                            '112px',
                            '11px'
                        ],
                        [
                            "eid197",
                            "top",
                            18745,
                            255,
                            "linear",
                            "${tete_charlieCopy8}",
                            '-257px',
                            '-209px'
                        ],
                        [
                            "eid198",
                            "top",
                            19000,
                            4490,
                            "linear",
                            "${tete_charlieCopy8}",
                            '-209px',
                            '768px'
                        ],
                        [
                            "eid182",
                            "top",
                            12995,
                            2505,
                            "linear",
                            "${tete_charlieCopy}",
                            '-257px',
                            '290px'
                        ],
                        [
                            "eid205",
                            "top",
                            15500,
                            4750,
                            "linear",
                            "${tete_charlieCopy}",
                            '290px',
                            '-355px'
                        ],
                        [
                            "eid243",
                            "location",
                            20750,
                            2250,
                            "linear",
                            "${planete}",
                            [[244, 492.04, 0, 0, 0, 0,0],[420.02, 414.37, 172.41, 0, 261.37, 0,195.8],[610.78, 576.69, 353.33, 7.48, 218.14, 4.62,453.22],[785.6, 492.04, 0, 0, 0, 0,655.02]]
                        ],
                        [
                            "eid267",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${planeteCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid268",
                            "opacity",
                            22000,
                            250,
                            "linear",
                            "${planeteCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid269",
                            "opacity",
                            25990,
                            99,
                            "linear",
                            "${planeteCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid123",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baleineCopy2}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid124",
                            "top",
                            9500,
                            0,
                            "linear",
                            "${baleineCopy2}",
                            '268px',
                            '432px'
                        ],
                        [
                            "eid381",
                            "height",
                            27273,
                            0,
                            "linear",
                            "${chambre}",
                            '3749px',
                            '3749px'
                        ],
                        [
                            "eid389",
                            "height",
                            29250,
                            3750,
                            "linear",
                            "${chambre}",
                            '3749px',
                            '1150px'
                        ],
                        [
                            "eid127",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleineCopy2}",
                            '1036px',
                            '1036px'
                        ],
                        [
                            "eid128",
                            "left",
                            9500,
                            7000,
                            "linear",
                            "${baleineCopy2}",
                            '1036px',
                            '-557px'
                        ],
                        [
                            "eid447",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '0'
                        ],
                        [
                            "eid408",
                            "opacity",
                            35000,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid421",
                            "opacity",
                            38618,
                            632,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid422",
                            "opacity",
                            39750,
                            500,
                            "linear",
                            "${RoundRect}",
                            '0',
                            '1'
                        ],
                        [
                            "eid423",
                            "opacity",
                            43368,
                            632,
                            "linear",
                            "${RoundRect}",
                            '1',
                            '0'
                        ],
                        [
                            "eid176",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baleineCopy8}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid177",
                            "top",
                            14250,
                            0,
                            "linear",
                            "${baleineCopy8}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid121",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleineCopy}",
                            '1036px',
                            '1036px'
                        ],
                        [
                            "eid122",
                            "left",
                            8750,
                            7000,
                            "linear",
                            "${baleineCopy}",
                            '1036px',
                            '-557px'
                        ],
                        [
                            "eid400",
                            "height",
                            29250,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '858px',
                            '858px'
                        ],
                        [
                            "eid395",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '0',
                            '0'
                        ],
                        [
                            "eid394",
                            "opacity",
                            29250,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baleineCopy3}",
                            '0',
                            '0'
                        ],
                        [
                            "eid132",
                            "opacity",
                            11250,
                            0,
                            "linear",
                            "${baleineCopy3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid110",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baleine}",
                            '0',
                            '0'
                        ],
                        [
                            "eid113",
                            "opacity",
                            6000,
                            0,
                            "linear",
                            "${baleine}",
                            '0',
                            '1'
                        ],
                        [
                            "eid85",
                            "width",
                            1250,
                            4000,
                            "linear",
                            "${bimo_mensonge22}",
                            '1155px',
                            '6926px'
                        ],
                        [
                            "eid208",
                            "height",
                            15500,
                            4750,
                            "linear",
                            "${tete_charlieCopy}",
                            '257px',
                            '1535px'
                        ],
                        [
                            "eid334",
                            "height",
                            27881,
                            0,
                            "linear",
                            "${tete_charlieCopy}",
                            '1535px',
                            '1535px'
                        ],
                        [
                            "eid87",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${chambre_bucheron}",
                            '0.000000',
                            '0.000000'
                        ],
                        [
                            "eid217",
                            "rotateZ",
                            15500,
                            4750,
                            "linear",
                            "${tete_charlieCopy}",
                            '0deg',
                            '360deg'
                        ],
                        [
                            "eid251",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${planeteCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid252",
                            "opacity",
                            21000,
                            250,
                            "linear",
                            "${planeteCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid253",
                            "opacity",
                            24990,
                            99,
                            "linear",
                            "${planeteCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid158",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baleineCopy5}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid159",
                            "top",
                            19500,
                            0,
                            "linear",
                            "${baleineCopy5}",
                            '268px',
                            '105px'
                        ],
                        [
                            "eid71",
                            "rotateZ",
                            1250,
                            4000,
                            "linear",
                            "${bimo_mensonge22}",
                            '0deg',
                            '1080deg'
                        ],
                        [
                            "eid162",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleineCopy5}",
                            '1024px',
                            '1024px'
                        ],
                        [
                            "eid163",
                            "left",
                            19500,
                            7000,
                            "linear",
                            "${baleineCopy5}",
                            '1024px',
                            '-557px'
                        ],
                        [
                            "eid112",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baleine}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid115",
                            "top",
                            6000,
                            0,
                            "linear",
                            "${baleine}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid191",
                            "left",
                            19245,
                            0,
                            "linear",
                            "${tete_charlieCopy5}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid399",
                            "top",
                            29250,
                            3750,
                            "linear",
                            "${chambre}",
                            '-1106px',
                            '-76px'
                        ],
                        [
                            "eid111",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleine}",
                            '1036px',
                            '1036px'
                        ],
                        [
                            "eid116",
                            "left",
                            6000,
                            7000,
                            "linear",
                            "${baleine}",
                            '1036px',
                            '-557px'
                        ],
                        [
                            "eid258",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${planeteCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid259",
                            "opacity",
                            23074,
                            250,
                            "linear",
                            "${planeteCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid260",
                            "opacity",
                            27064,
                            99,
                            "linear",
                            "${planeteCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid425",
                            "opacity",
                            4750,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid426",
                            "opacity",
                            39724,
                            0,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid427",
                            "opacity",
                            43368,
                            632,
                            "linear",
                            "${TextCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid178",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baleineCopy8}",
                            '0',
                            '0'
                        ],
                        [
                            "eid179",
                            "opacity",
                            14250,
                            0,
                            "linear",
                            "${baleineCopy8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid125",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baleineCopy2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid126",
                            "opacity",
                            9500,
                            0,
                            "linear",
                            "${baleineCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid403",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid405",
                            "opacity",
                            34000,
                            0,
                            "linear",
                            "${Ellipse}",
                            '0',
                            '1'
                        ],
                        [
                            "eid430",
                            "opacity",
                            44367,
                            0,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '0'
                        ],
                        [
                            "eid82",
                            "height",
                            1250,
                            4000,
                            "linear",
                            "${bimo_mensonge22}",
                            '774px',
                            '4640px'
                        ],
                        [
                            "eid168",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleineCopy6}",
                            '1036px',
                            '1036px'
                        ],
                        [
                            "eid169",
                            "left",
                            17750,
                            7000,
                            "linear",
                            "${baleineCopy6}",
                            '1036px',
                            '-557px'
                        ],
                        [
                            "eid166",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baleineCopy6}",
                            '0',
                            '0'
                        ],
                        [
                            "eid167",
                            "opacity",
                            17750,
                            0,
                            "linear",
                            "${baleineCopy6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "width",
                            20250,
                            500,
                            "linear",
                            "${planete}",
                            '19px',
                            '122px'
                        ],
                        [
                            "eid245",
                            "width",
                            23000,
                            990,
                            "linear",
                            "${planete}",
                            '112px',
                            '11px'
                        ],
                        [
                            "eid444",
                            "opacity",
                            49000,
                            1369,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid249",
                            "height",
                            21250,
                            500,
                            "linear",
                            "${planeteCopy}",
                            '19px',
                            '122px'
                        ],
                        [
                            "eid250",
                            "height",
                            24000,
                            990,
                            "linear",
                            "${planeteCopy}",
                            '112px',
                            '11px'
                        ],
                        [
                            "eid439",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${fond_espace2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid434",
                            "opacity",
                            48024,
                            0,
                            "linear",
                            "${fond_espace2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid440",
                            "opacity",
                            65500,
                            0,
                            "linear",
                            "${fond_espace2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid441",
                            "opacity",
                            65750,
                            0,
                            "linear",
                            "${fond_espace2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid438",
                            "opacity",
                            69589,
                            0,
                            "linear",
                            "${fond_espace2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid157",
                            "top",
                            11500,
                            4745,
                            "linear",
                            "${tete_charlie}",
                            '-257px',
                            '768px'
                        ],
                        [
                            "eid160",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${baleineCopy5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid161",
                            "opacity",
                            19500,
                            0,
                            "linear",
                            "${baleineCopy5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid424",
                            "top",
                            39724,
                            0,
                            "linear",
                            "${TextCopy}",
                            '691px',
                            '691px'
                        ],
                        [
                            "eid184",
                            "top",
                            11995,
                            4745,
                            "linear",
                            "${tete_charlieCopy2}",
                            '-257px',
                            '768px'
                        ],
                        [
                            "eid401",
                            "top",
                            29250,
                            0,
                            "linear",
                            "${Rectangle4}",
                            '-29px',
                            '-29px'
                        ],
                        [
                            "eid414",
                            "clip",
                            34974,
                            3250,
                            "linear",
                            "${Text}",
                            [0,1.3984375,28,0],
                            [0,541,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid83",
                            "top",
                            1250,
                            4000,
                            "linear",
                            "${bimo_mensonge22}",
                            '-6px',
                            '-1302px'
                        ],
                        [
                            "eid412",
                            "top",
                            34974,
                            0,
                            "linear",
                            "${Text}",
                            '691px',
                            '691px'
                        ],
                        [
                            "eid409",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '0'
                        ],
                        [
                            "eid417",
                            "opacity",
                            34974,
                            0,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid420",
                            "opacity",
                            38618,
                            632,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid402",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid404",
                            "opacity",
                            34000,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid431",
                            "opacity",
                            44367,
                            0,
                            "linear",
                            "${EllipseCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid398",
                            "left",
                            29250,
                            3750,
                            "linear",
                            "${chambre}",
                            '-897px',
                            '110px'
                        ],
                        [
                            "eid380",
                            "width",
                            27273,
                            0,
                            "linear",
                            "${chambre}",
                            '5000px',
                            '5000px'
                        ],
                        [
                            "eid388",
                            "width",
                            29250,
                            3750,
                            "linear",
                            "${chambre}",
                            '5000px',
                            '1533px'
                        ],
                        [
                            "eid377",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${chambre}",
                            '0',
                            '0'
                        ],
                        [
                            "eid379",
                            "opacity",
                            27273,
                            1477,
                            "linear",
                            "${chambre}",
                            '0',
                            '1'
                        ],
                        [
                            "eid261",
                            "height",
                            23324,
                            500,
                            "linear",
                            "${planeteCopy2}",
                            '19px',
                            '122px'
                        ],
                        [
                            "eid262",
                            "height",
                            26074,
                            990,
                            "linear",
                            "${planeteCopy2}",
                            '112px',
                            '11px'
                        ],
                        [
                            "eid180",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleineCopy8}",
                            '1036px',
                            '1036px'
                        ],
                        [
                            "eid181",
                            "left",
                            14250,
                            7000,
                            "linear",
                            "${baleineCopy8}",
                            '1036px',
                            '-557px'
                        ],
                        [
                            "eid270",
                            "location",
                            22750,
                            2250,
                            "linear",
                            "${planeteCopy3}",
                            [[244, 492.04, 0, 0, 0, 0,0],[420.02, 414.37, 172.41, 0, 261.37, 0,195.8],[610.78, 576.69, 353.33, 7.48, 218.14, 4.62,453.22],[785.6, 492.04, 0, 0, 0, 0,655.02]]
                        ],
                        [
                            "eid133",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleineCopy3}",
                            '1036px',
                            '1024px'
                        ],
                        [
                            "eid134",
                            "left",
                            11250,
                            7000,
                            "linear",
                            "${baleineCopy3}",
                            '1024px',
                            '-557px'
                        ],
                        [
                            "eid265",
                            "height",
                            22250,
                            500,
                            "linear",
                            "${planeteCopy3}",
                            '19px',
                            '122px'
                        ],
                        [
                            "eid266",
                            "height",
                            25000,
                            990,
                            "linear",
                            "${planeteCopy3}",
                            '112px',
                            '11px'
                        ],
                        [
                            "eid117",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baleineCopy}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid118",
                            "top",
                            8750,
                            0,
                            "linear",
                            "${baleineCopy}",
                            '268px',
                            '0px'
                        ],
                        [
                            "eid84",
                            "left",
                            1250,
                            4000,
                            "linear",
                            "${bimo_mensonge22}",
                            '-54px',
                            '-2469px'
                        ],
                        [
                            "eid263",
                            "width",
                            23324,
                            500,
                            "linear",
                            "${planeteCopy2}",
                            '19px',
                            '122px'
                        ],
                        [
                            "eid264",
                            "width",
                            26074,
                            990,
                            "linear",
                            "${planeteCopy2}",
                            '112px',
                            '11px'
                        ],
                        [
                            "eid188",
                            "top",
                            14245,
                            4745,
                            "linear",
                            "${tete_charlieCopy4}",
                            '-257px',
                            '768px'
                        ],
                        [
                            "eid187",
                            "top",
                            13745,
                            255,
                            "linear",
                            "${tete_charlieCopy3}",
                            '-257px',
                            '-209px'
                        ],
                        [
                            "eid190",
                            "top",
                            14000,
                            4490,
                            "linear",
                            "${tete_charlieCopy3}",
                            '-209px',
                            '768px'
                        ],
                        [
                            "eid194",
                            "left",
                            16995,
                            0,
                            "linear",
                            "${tete_charlieCopy6}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid257",
                            "location",
                            23824,
                            2250,
                            "linear",
                            "${planeteCopy2}",
                            [[244, 492.04, 0, 0, 0, 0,0],[420.02, 414.37, 172.41, 0, 261.37, 0,195.8],[610.78, 576.69, 353.33, 7.48, 218.14, 4.62,453.22],[785.6, 492.04, 0, 0, 0, 0,655.02]]
                        ],
                        [
                            "eid428",
                            "clip",
                            39724,
                            3250,
                            "linear",
                            "${TextCopy}",
                            [0,1.3984375,28,0],
                            [0,541,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid189",
                            "left",
                            14245,
                            0,
                            "linear",
                            "${tete_charlieCopy4}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid254",
                            "location",
                            21750,
                            2250,
                            "linear",
                            "${planeteCopy}",
                            [[244, 492.04, 0, 0, 0, 0,0],[420.02, 414.37, 172.41, 0, 261.37, 0,195.8],[610.78, 576.69, 353.33, 7.48, 218.14, 4.62,453.22],[785.6, 492.04, 0, 0, 0, 0,655.02]]
                        ],
                        [
                            "eid207",
                            "left",
                            12995,
                            2505,
                            "linear",
                            "${tete_charlieCopy}",
                            '414px',
                            '414px'
                        ],
                        [
                            "eid210",
                            "left",
                            15500,
                            4750,
                            "linear",
                            "${tete_charlieCopy}",
                            '414px',
                            '-243px'
                        ],
                        [
                            "eid448",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_mensonge22}",
                            '1',
                            '1'
                        ],
                        [
                            "eid219",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${planete}",
                            '0',
                            '0'
                        ],
                        [
                            "eid226",
                            "opacity",
                            20000,
                            250,
                            "linear",
                            "${planete}",
                            '0',
                            '1'
                        ],
                        [
                            "eid248",
                            "opacity",
                            23990,
                            99,
                            "linear",
                            "${planete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid129",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baleineCopy3}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid130",
                            "top",
                            11250,
                            0,
                            "linear",
                            "${baleineCopy3}",
                            '268px',
                            '105px'
                        ],
                        [
                            "eid195",
                            "top",
                            17995,
                            4745,
                            "linear",
                            "${tete_charlieCopy7}",
                            '-257px',
                            '768px'
                        ],
                        [
                            "eid174",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleineCopy7}",
                            '1036px',
                            '1036px'
                        ],
                        [
                            "eid175",
                            "left",
                            17000,
                            7000,
                            "linear",
                            "${baleineCopy7}",
                            '1036px',
                            '-557px'
                        ],
                        [
                            "eid186",
                            "left",
                            11995,
                            0,
                            "linear",
                            "${tete_charlieCopy2}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid209",
                            "width",
                            15500,
                            4750,
                            "linear",
                            "${tete_charlieCopy}",
                            '255px',
                            '1523px'
                        ],
                        [
                            "eid333",
                            "width",
                            27881,
                            0,
                            "linear",
                            "${tete_charlieCopy}",
                            '1523px',
                            '1523px'
                        ],
                        [
                            "eid193",
                            "top",
                            16995,
                            4745,
                            "linear",
                            "${tete_charlieCopy6}",
                            '-257px',
                            '768px'
                        ],
                        [
                            "eid164",
                            "top",
                            0,
                            0,
                            "linear",
                            "${baleineCopy6}",
                            '268px',
                            '268px'
                        ],
                        [
                            "eid165",
                            "top",
                            17750,
                            0,
                            "linear",
                            "${baleineCopy6}",
                            '268px',
                            '432px'
                        ],
                        [
                            "eid199",
                            "top",
                            16500,
                            4745,
                            "linear",
                            "${tete_charlieCopy9}",
                            '-257px',
                            '768px'
                        ],
                            [ "eid273", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${baleine}', [] ] ],
                            [ "eid274", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${baleineCopy3}', [] ] ],
                            [ "eid275", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${baleineCopy7}', [] ] ],
                            [ "eid276", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${baleineCopy5}', [] ] ],
                            [ "eid277", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${baleineCopy8}', [] ] ],
                            [ "eid278", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${baleineCopy2}', [] ] ],
                            [ "eid279", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${baleineCopy6}', [] ] ],
                            [ "eid280", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${baleineCopy}', [] ] ],
                            [ "eid281", "trigger", 6000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleine}', [] ] ],
                            [ "eid282", "trigger", 8750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy}', [] ] ],
                            [ "eid283", "trigger", 9500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy2}', [] ] ],
                            [ "eid284", "trigger", 10000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleine}', [] ] ],
                            [ "eid285", "trigger", 11250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy3}', [] ] ],
                            [ "eid286", "trigger", 12750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy}', [] ] ],
                            [ "eid287", "trigger", 13500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy2}', [] ] ],
                            [ "eid288", "trigger", 14250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy8}', [] ] ],
                            [ "eid289", "trigger", 15250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy3}', [] ] ],
                            [ "eid290", "trigger", 17000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy7}', [] ] ],
                            [ "eid291", "trigger", 17750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy6}', [] ] ],
                            [ "eid292", "trigger", 18250, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy8}', [] ] ],
                            [ "eid293", "trigger", 19500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy5}', [] ] ],
                            [ "eid294", "trigger", 21000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy7}', [] ] ],
                            [ "eid295", "trigger", 21750, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy6}', [] ] ],
                            [ "eid296", "trigger", 23500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${baleineCopy5}', [] ] ]
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
                            rect: ['0px', '327px', '588px', '0px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(215,231,251,1)']
                        },
                        {
                            id: 'baleine_nage2',
                            type: 'image',
                            rect: ['-16px', '0', '2000px', '320px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/baleine_nage.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '588px', '327px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid89",
                            "left",
                            0,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-16px',
                            '-16px'
                        ],
                        [
                            "eid90",
                            "left",
                            250,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-16px',
                            '-699px'
                        ],
                        [
                            "eid91",
                            "left",
                            500,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-699px',
                            '-1434px'
                        ],
                        [
                            "eid92",
                            "left",
                            750,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-1434px',
                            '-698px'
                        ],
                        [
                            "eid93",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-698px',
                            '-17px'
                        ],
                        [
                            "eid98",
                            "left",
                            1250,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-17px',
                            '-699px'
                        ],
                        [
                            "eid99",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-699px',
                            '-1434px'
                        ],
                        [
                            "eid100",
                            "left",
                            1750,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-1434px',
                            '-698px'
                        ],
                        [
                            "eid101",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-698px',
                            '-17px'
                        ],
                        [
                            "eid102",
                            "left",
                            2250,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-17px',
                            '-699px'
                        ],
                        [
                            "eid103",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-699px',
                            '-1434px'
                        ],
                        [
                            "eid104",
                            "left",
                            2750,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-1434px',
                            '-698px'
                        ],
                        [
                            "eid105",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-698px',
                            '-17px'
                        ],
                        [
                            "eid106",
                            "left",
                            3250,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-17px',
                            '-699px'
                        ],
                        [
                            "eid107",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-699px',
                            '-1434px'
                        ],
                        [
                            "eid108",
                            "left",
                            3750,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-1434px',
                            '-698px'
                        ],
                        [
                            "eid109",
                            "left",
                            4000,
                            0,
                            "linear",
                            "${baleine_nage2}",
                            '-698px',
                            '-17px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("mensonge_edgeActions.js");
})("EDGE-5026698");
