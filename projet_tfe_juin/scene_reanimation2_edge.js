/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-code-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-code-pro:n9,n7,n2,n3,n4,n6,n5:all.js\"></script>',
            'alice, serif': '<script src=\"http://use.edgefonts.net/alice:n4:all.js\"></script>',
            'josefin-sans, sans-serif': '<script src=\"http://use.edgefonts.net/josefin-sans:i7,n7,n3,i4,i3,n4,i1,n6,n1,i6:all.js\"></script>',
            'bentham, serif': '<script src=\"http://use.edgefonts.net/bentham:n4:all.js\"></script>'        },
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
                            id: 'bimo_reload',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"bimo_reload.svg",'0px','0px']
                        },
                        {
                            id: 'pomme',
                            type: 'image',
                            rect: ['486px', '252px', '88px', '124px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"pomme.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_ettone',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"charlie_ettone.svg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['497px', '163px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 120px;\">!</span></p>",
                            font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'yeux_bimo2',
                            type: 'image',
                            rect: ['408px', '286px', '176px', '48px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"yeux_bimo2.svg",'0px','0px']
                        },
                        {
                            id: 'Texthello',
                            type: 'text',
                            rect: ['730px', '340px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; font-family: source-code-pro, sans-serif;\">Hello</span>&nbsp;</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(244,160,25,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Textbonjour',
                            type: 'text',
                            rect: ['145px', '482px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 30px; font-family: source-code-pro, sans-serif;\">Bonjour</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(244,160,25,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Texthola',
                            type: 'text',
                            rect: ['309px', '85px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<font face=\"source-code-pro, sans-serif\"><span style=\"font-size: 30px;\">Hola</span></font><font face=\"source-code-pro, sans-serif\"><span style=\"font-size: 30px;\">​</span></font></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(244,160,25,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Textchinois',
                            type: 'text',
                            rect: ['802px', '85px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 41px;\">你好</span><font face=\"source-code-pro, sans-serif\"><span style=\"font-size: 30px;\"></span></font><font face=\"source-code-pro, sans-serif\"><span style=\"font-size: 30px;\"></span></font></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(249,167,21,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'text_bonjour2',
                            type: 'text',
                            rect: ['700px', '85px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"font-size: 32px; color: rgb(255, 98, 96);\">Bonjour ?</span><font face=\"source-code-pro, sans-serif\"><span style=\"font-size: 30px;\"></span></font><font face=\"source-code-pro, sans-serif\"><span style=\"font-size: 30px;\"></span></font></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [24, "px"], "rgba(249,167,21,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'fond_charlie',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fond_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_parle5',
                            symbolName: 'charlie_parle',
                            type: 'rect',
                            rect: ['360px', '206px', '328', '409', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0'
                        },
                        {
                            id: 'bimo_dort',
                            type: 'image',
                            rect: ['0', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_dort.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_peche3_decor',
                            type: 'image',
                            rect: ['0', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"charlie_peche3.svg",'0px','0px']
                        },
                        {
                            id: 'flotteur',
                            type: 'image',
                            rect: ['341px', '585px', '36px', '43px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"flotteur.svg",'0px','0px']
                        },
                        {
                            id: 'bimo_face',
                            type: 'image',
                            rect: ['761px', '278px', '123px', '173px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_face.svg",'0px','0px']
                        },
                        {
                            id: 'bimo_saute',
                            symbolName: 'bimo_saute',
                            type: 'rect',
                            rect: ['421px', '164px', '125', '247', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'charlie_peche_perso',
                            type: 'image',
                            rect: ['524px', '119px', '556px', '417px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"charlie_peche_perso.svg",'0px','0px']
                        },
                        {
                            id: 'bimo_parle_peche_zoom',
                            type: 'image',
                            rect: ['0', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_parle_peche_zoom.svg",'0px','0px']
                        },
                        {
                            id: 'Text_oh',
                            type: 'text',
                            rect: ['774px', '362px', '176px', '116px', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(255, 98, 96);\">OH !</span></p>",
                            align: "left",
                            font: ['source-sans-pro, sans-serif', [32, "px"], "rgba(249,167,21,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'bimo_face_noeyes',
                            type: 'image',
                            rect: ['157px', '103px', '389px', '546px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_face_noeyes.svg",'0px','0px']
                        },
                        {
                            id: 'yeux_bimo2Copy',
                            type: 'image',
                            rect: ['250px', '204px', '227px', '62px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"yeux_bimo2.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_parle_zoom',
                            type: 'image',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"charlie_parle_zoom.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_parle2',
                            symbolName: 'charlie_parle',
                            type: 'rect',
                            rect: ['134px', '218px', '328', '409', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '0',
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'charlie_parle_zoom2',
                            type: 'image',
                            rect: ['5px', '4px', '1360px', '1020px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"charlie_parle_zoom.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_parle3_bigplan',
                            symbolName: 'charlie_parle',
                            type: 'rect',
                            rect: ['366px', '166px', '328', '409', 'auto', 'auto'],
                            overflow: 'hidden',
                            opacity: '1',
                            transform: [[],[],[],['2.14701','2.14701']]
                        },
                        {
                            id: 'bimo_moitie_dos',
                            type: 'image',
                            rect: ['624px', '780px', '399px', '560px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bimo_moitie_dos.svg",'0px','0px']
                        },
                        {
                            id: 'section_menu2',
                            type: 'image',
                            rect: ['191px', '105px', '678px', '957px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"section_menu2.svg",'0px','0px']
                        },
                        {
                            id: 'menu_bimo2',
                            type: 'image',
                            rect: ['0px', '2px', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"menu_bimo.svg",'0px','0px']
                        },
                        {
                            id: 'charlie_ettone2',
                            type: 'image',
                            rect: ['0px', '0', '1024px', '768px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"charlie_ettone2.svg",'0px','0px']
                        },
                        {
                            id: 'sectionblanhe',
                            type: 'rect',
                            rect: ['207px', '662px', '640px', '85px', 'auto', 'auto'],
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            opacity: '0.81',
                            fill: ["rgba(255,255,255,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'tete_charlie',
                            type: 'image',
                            rect: ['186px', '662px', '60px', '60px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete_charlie.svg",'0px','0px']
                        },
                        {
                            id: 'tete2',
                            type: 'image',
                            rect: ['73px', '666px', '50px', '50px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"tete.svg",'0px','0px']
                        },
                        {
                            id: 'Textbonjourquestion',
                            type: 'text',
                            rect: ['260px', '659px', '0px', '32px', 'auto', 'auto'],
                            clip: 'rect(0.8256840109825134px 109.60791015625px 32.82568359375px -0.2817380130290985px)',
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Bonjour ?<span style=\"font-size: 24px;\">​</span></p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_abonjouralors',
                            type: 'text',
                            rect: ['269px', '658px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Bonjour ? Bonjour ! Configuration française activée.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.03303']]
                        },
                        {
                            id: 'Text_abonjouralorsCopy4',
                            type: 'text',
                            rect: ['260px', '658px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">Bonjour ?</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.03303']]
                        },
                        {
                            id: 'Text_jesuisBimo',
                            type: 'text',
                            rect: ['260px', '693px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Je suis B1MO un robot personnel.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_abonjouralorsCopy',
                            type: 'text',
                            rect: ['260px', '653px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Je suis à votre disposition maintenant.&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy',
                            type: 'text',
                            rect: ['260px', '700px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Avez-vous du wifi afin de continuer les réglages ?</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_abonjouralorsCopy2',
                            type: 'text',
                            rect: ['260px', '653px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Euh...Mais j'en sais rien moi ...&nbsp;c’est toi qui es tombé</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_abonjouralorsCopy3',
                            type: 'text',
                            rect: ['260px', '653px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Je n'ai pas compris la question ...&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy3',
                            type: 'text',
                            rect: ['258px', '700px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​sur ma maison ... Je n'airien demandé moi. Tu es qui ?</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy2',
                            type: 'text',
                            rect: ['261px', '667px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Oula, il a l'air bien fatigué le pauvre après tout ça ...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy4',
                            type: 'text',
                            rect: ['260px', '691px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​On va lui faire faire un somme et réparer le nid.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "italic", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy5',
                            type: 'text',
                            rect: ['125px', '679px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.81',
                            text: "<p style=\"margin: 0px;\">​Bonjour !&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(2,53,88,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy6',
                            type: 'text',
                            rect: ['123px', '679px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.81',
                            text: "<p style=\"margin: 0px;\"><span style=\"color:  rgb(0, 53, 89, 1);\">Tu vas mieux ?</span></p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(2,53,88,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'Text_ouimerciencore',
                            type: 'text',
                            rect: ['127px', '677px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.81',
                            text: "<p style=\"margin: 0px;\"><span style=\"color:rgba(0,35,61,1);\">Oui, merci encore. D'où je viens je serais</span></p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(2,53,88,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'Text_jesuisBimoCopy8',
                            type: 'text',
                            rect: ['126px', '704px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.81',
                            text: "<p style=\"margin: 0px;\"><span style=\"color:rgba(0,35,61,1);\">sûrement en pièce si j'étais confus à ce point .</span></p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(19,14,6,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'Text_jesuisBimoCopy9',
                            type: 'text',
                            rect: ['636px', '579px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.81',
                            text: "<p style=\"margin: 0px;\">Oui, tu as juste eu le temps de me&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'Text_jesuisBimoCopy10',
                            type: 'text',
                            rect: ['631px', '611px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.81',
                            text: "<p style=\"margin: 0px;\">​dire que tu étais un robot.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'Text_jesuisBimoCopy11',
                            type: 'text',
                            rect: ['655px', '583px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.81',
                            text: "<p style=\"margin: 0px;\">​Oui, je suis le B1MO&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'Text_jesuisBimoCopy12',
                            type: 'text',
                            rect: ['655px', '610px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.82',
                            text: "<p style=\"margin: 0px;\">d'une grande princesse !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'Text_uneprincesse',
                            type: 'text',
                            rect: ['655px', '583px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.81',
                            text: "<p style=\"margin: 0px;\">​Une princesse ?</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'Text_quelleprincesse',
                            type: 'text',
                            rect: ['655px', '610px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '0.82',
                            text: "<p style=\"margin: 0px;\">Quelle princesse ?</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,62,1.00)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            transform: [[],[],[],['1.01063']]
                        },
                        {
                            id: 'tete',
                            type: 'image',
                            rect: ['78px', '674px', '72px', '65px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"tete.svg",'0px','0px']
                        },
                        {
                            id: 'Text_jesuisBimoCopy14',
                            type: 'text',
                            rect: ['150px', '700px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Je ne sais pas si vous pouvez avoir accès à ce</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy15',
                            type: 'text',
                            rect: ['153px', '706px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​fichier, afin que je puisse vous en dire plus ...&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy18',
                            type: 'text',
                            rect: ['150px', '700px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Je sais juste que je dois transmettre un tweet</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy17',
                            type: 'text',
                            rect: ['153px', '706px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​mais je ne sais pas à qui ... il n'y a pas de destinataire</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy20',
                            type: 'text',
                            rect: ['150px', '700px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​ Oui je comprends, mais bon comme tu l'as&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy21',
                            type: 'text',
                            rect: ['150px', '680px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Hum ... Je ne sais vraiment pas ....</p><p style=\"margin: 0px;\">​</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy22',
                            type: 'text',
                            rect: ['281px', '674px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Si cela peut te rassurer je suis seul par ici.&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy23',
                            type: 'text',
                            rect: ['281px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Je ne vois pas à qui je pourrai le dire ...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy24',
                            type: 'text',
                            rect: ['281px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​J'avoue ne pas avoir vraiment le choix.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy25',
                            type: 'text',
                            rect: ['281px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Mais au final tu ne sais pas comment voir ce tweet...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy29',
                            type: 'text',
                            rect: ['248px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Ici, c'est ma petite tête, évite de la toucher trop fort.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy28',
                            type: 'text',
                            rect: ['252px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">Là &nbsp;tu dois avec ton petit doigt scroller vers le bas. &nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy31',
                            type: 'text',
                            rect: ['248px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Dans la section \"Films capturés\", tu peux enregister&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy30',
                            type: 'text',
                            rect: ['252px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">tous les messages et moments importants.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy33',
                            type: 'text',
                            rect: ['248px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​La partie \"Sauvegarde\" permet de retrouver &nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy32',
                            type: 'text',
                            rect: ['252px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">son chemin à tout moment.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy35',
                            type: 'text',
                            rect: ['248px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">La section \"Adresses\", comme l'indique son nom &nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy34',
                            type: 'text',
                            rect: ['252px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">est pour enregistrer toutes les adresses importantes.&nbsp;</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy37',
                            type: 'text',
                            rect: ['248px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">A présent je te laisse aller voir le message là où je</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy36',
                            type: 'text',
                            rect: ['252px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">t'ai dit que se trouve les messages importants.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy26',
                            type: 'text',
                            rect: ['281px', '708px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​Explique moi alors comment tu marches.</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy19',
                            type: 'text',
                            rect: ['153px', '706px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​dit, je ne t'ai pas trasformé en lampe donc ...</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text_jesuisBimoCopy27',
                            type: 'text',
                            rect: ['153px', '706px', 'auto', 'auto', 'auto', 'auto'],
                            clip: 'rect(0px -1.3359375px 28px 0px)',
                            opacity: '1',
                            text: "<p style=\"margin: 0px;\">​D'accord. Mais tu n'auras qu'une chance !</p>",
                            align: "left",
                            font: ['alice, serif', [24, "px"], "rgba(0,35,61,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
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
                    duration: 158000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1305",
                            "left",
                            0,
                            0,
                            "linear",
                            "${charlie_ettone2}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1666",
                            "top",
                            116898,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy24}",
                            '706px',
                            '674px'
                        ],
                        [
                            "eid1093",
                            "scaleX",
                            25596,
                            0,
                            "linear",
                            "${Text_abonjouralorsCopy4}",
                            '1.03303',
                            '1.03303'
                        ],
                        [
                            "eid296",
                            "top",
                            53357,
                            0,
                            "linear",
                            "${bimo_dort}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid1263",
                            "left",
                            85000,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy12}",
                            '655px',
                            '655px'
                        ],
                        [
                            "eid382",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_saute}",
                            '0',
                            '0'
                        ],
                        [
                            "eid385",
                            "opacity",
                            58857,
                            0,
                            "linear",
                            "${bimo_saute}",
                            '1',
                            '1'
                        ],
                        [
                            "eid417",
                            "opacity",
                            64357,
                            0,
                            "linear",
                            "${bimo_saute}",
                            '1',
                            '0'
                        ],
                        [
                            "eid72",
                            "color",
                            10976,
                            0,
                            "linear",
                            "${Textchinois}",
                            'rgba(249,167,21,1.00)',
                            'rgba(249,167,21,1.00)'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_reload}",
                            '1',
                            '1'
                        ],
                        [
                            "eid503",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Text_oh}",
                            '774px',
                            '774px'
                        ],
                        [
                            "eid412",
                            "left",
                            62274,
                            669,
                            "linear",
                            "${Text_oh}",
                            '774px',
                            '863px'
                        ],
                        [
                            "eid1065",
                            "opacity",
                            30501,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid71",
                            "color",
                            9572,
                            0,
                            "linear",
                            "${Textbonjour}",
                            'rgba(244,160,25,1.00)',
                            'rgba(244,160,25,1.00)'
                        ],
                        [
                            "eid51",
                            "left",
                            7644,
                            832,
                            "linear",
                            "${Texthola}",
                            '530px',
                            '309px'
                        ],
                        [
                            "eid1042",
                            "top",
                            16346,
                            0,
                            "linear",
                            "${Text_jesuisBimo}",
                            '693px',
                            '693px'
                        ],
                        [
                            "eid394",
                            "top",
                            58857,
                            3500,
                            "linear",
                            "${bimo_saute}",
                            '164px',
                            '252px'
                        ],
                        [
                            "eid1749",
                            "left",
                            137071,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy31}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid10",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${pomme}",
                            '0',
                            '0'
                        ],
                        [
                            "eid9",
                            "opacity",
                            2500,
                            1000,
                            "linear",
                            "${pomme}",
                            '0',
                            '1'
                        ],
                        [
                            "eid274",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${pomme}",
                            '1',
                            '0'
                        ],
                        [
                            "eid276",
                            "opacity",
                            37761,
                            500,
                            "linear",
                            "${pomme}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid279",
                            "opacity",
                            39261,
                            500,
                            "linear",
                            "${pomme}",
                            '1',
                            '0'
                        ],
                        [
                            "eid913",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_moitie_dos}",
                            '0',
                            '0'
                        ],
                        [
                            "eid914",
                            "opacity",
                            113750,
                            0,
                            "linear",
                            "${bimo_moitie_dos}",
                            '1',
                            '1'
                        ],
                        [
                            "eid821",
                            "opacity",
                            125250,
                            0,
                            "linear",
                            "${bimo_moitie_dos}",
                            '0.9724537037037',
                            '0'
                        ],
                        [
                            "eid915",
                            "top",
                            0,
                            0,
                            "linear",
                            "${bimo_moitie_dos}",
                            '780px',
                            '780px'
                        ],
                        [
                            "eid774",
                            "top",
                            113750,
                            500,
                            "linear",
                            "${bimo_moitie_dos}",
                            '780px',
                            '642px'
                        ],
                        [
                            "eid1669",
                            "clip",
                            117756,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy25}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid15",
                            "opacity",
                            0,
                            3500,
                            "linear",
                            "${Text}",
                            '0.000000',
                            '0'
                        ],
                        [
                            "eid16",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ],
                        [
                            "eid21",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${Text}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1405",
                            "left",
                            12211,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '186px',
                            '186px'
                        ],
                        [
                            "eid1352",
                            "left",
                            67184,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '186px',
                            '55px'
                        ],
                        [
                            "eid1582",
                            "left",
                            76750,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '55px',
                            '564px'
                        ],
                        [
                            "eid1584",
                            "left",
                            101500,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '564px',
                            '63px'
                        ],
                        [
                            "eid1648",
                            "left",
                            110390,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '63px',
                            '201px'
                        ],
                        [
                            "eid1688",
                            "left",
                            122370,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '201px',
                            '201px'
                        ],
                        [
                            "eid1257",
                            "clip",
                            84500,
                            1357,
                            "linear",
                            "${Text_jesuisBimoCopy11}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1576",
                            "clip",
                            103250,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy19}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1721",
                            "clip",
                            125750,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy27}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid115",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_parle5}",
                            '0',
                            '0'
                        ],
                        [
                            "eid116",
                            "opacity",
                            12000,
                            0,
                            "linear",
                            "${charlie_parle5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid163",
                            "opacity",
                            14000,
                            0,
                            "linear",
                            "${charlie_parle5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid210",
                            "opacity",
                            25405,
                            0,
                            "linear",
                            "${charlie_parle5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid223",
                            "opacity",
                            31944,
                            0,
                            "linear",
                            "${charlie_parle5}",
                            '1',
                            '0'
                        ],
                        [
                            "eid343",
                            "left",
                            53357,
                            2616,
                            "linear",
                            "${flotteur}",
                            '341px',
                            '323px'
                        ],
                        [
                            "eid344",
                            "left",
                            55973,
                            2259,
                            "linear",
                            "${flotteur}",
                            '323px',
                            '341px'
                        ],
                        [
                            "eid345",
                            "left",
                            58232,
                            1125,
                            "linear",
                            "${flotteur}",
                            '341px',
                            '354px'
                        ],
                        [
                            "eid396",
                            "left",
                            59357,
                            5000,
                            "linear",
                            "${flotteur}",
                            '341px',
                            '323px'
                        ],
                        [
                            "eid947",
                            "top",
                            0,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '289px',
                            '289px'
                        ],
                        [
                            "eid951",
                            "top",
                            4500,
                            1396,
                            "linear",
                            "${yeux_bimo2}",
                            '289px',
                            '308px'
                        ],
                        [
                            "eid954",
                            "top",
                            5896,
                            2792,
                            "linear",
                            "${yeux_bimo2}",
                            '308px',
                            '254px'
                        ],
                        [
                            "eid956",
                            "top",
                            8688,
                            3312,
                            "linear",
                            "${yeux_bimo2}",
                            '254px',
                            '290px'
                        ],
                        [
                            "eid1111",
                            "top",
                            14000,
                            1396,
                            "linear",
                            "${yeux_bimo2}",
                            '289px',
                            '308px'
                        ],
                        [
                            "eid1112",
                            "top",
                            15396,
                            2792,
                            "linear",
                            "${yeux_bimo2}",
                            '308px',
                            '254px'
                        ],
                        [
                            "eid1113",
                            "top",
                            18188,
                            3612,
                            "linear",
                            "${yeux_bimo2}",
                            '254px',
                            '290px'
                        ],
                        [
                            "eid1115",
                            "top",
                            21800,
                            3450,
                            "linear",
                            "${yeux_bimo2}",
                            '290px',
                            '326px'
                        ],
                        [
                            "eid1128",
                            "top",
                            31944,
                            3056,
                            "linear",
                            "${yeux_bimo2}",
                            '326px',
                            '286px'
                        ],
                        [
                            "eid1142",
                            "top",
                            35895,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '286px',
                            '286px'
                        ],
                        [
                            "eid1145",
                            "top",
                            36774,
                            181,
                            "linear",
                            "${yeux_bimo2}",
                            '286px',
                            '220px'
                        ],
                        [
                            "eid1146",
                            "top",
                            36956,
                            189,
                            "linear",
                            "${yeux_bimo2}",
                            '220px',
                            '338px'
                        ],
                        [
                            "eid1147",
                            "top",
                            37145,
                            173,
                            "linear",
                            "${yeux_bimo2}",
                            '338px',
                            '227px'
                        ],
                        [
                            "eid1148",
                            "top",
                            37319,
                            181,
                            "linear",
                            "${yeux_bimo2}",
                            '227px',
                            '292px'
                        ],
                        [
                            "eid349",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_peche_perso}",
                            '0',
                            '0'
                        ],
                        [
                            "eid350",
                            "opacity",
                            53357,
                            0,
                            "linear",
                            "${charlie_peche_perso}",
                            '0',
                            '1'
                        ],
                        [
                            "eid419",
                            "opacity",
                            64357,
                            0,
                            "linear",
                            "${charlie_peche_perso}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1748",
                            "opacity",
                            141423,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy31}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1577",
                            "top",
                            101500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy20}",
                            '673px',
                            '673px'
                        ],
                        [
                            "eid1644",
                            "top",
                            111250,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy23}",
                            '703px',
                            '706px'
                        ],
                        [
                            "eid1307",
                            "left",
                            28096,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy3}",
                            '258px',
                            '258px'
                        ],
                        [
                            "eid1521",
                            "clip",
                            90750,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy14}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1751",
                            "top",
                            143178,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy32}",
                            '708px',
                            '708px'
                        ],
                        [
                            "eid1670",
                            "left",
                            117750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy25}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid585",
                            "top",
                            75357,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '218px',
                            '218px'
                        ],
                        [
                            "eid1036",
                            "clip",
                            19999,
                            2000,
                            "linear",
                            "${Text_abonjouralorsCopy}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1360",
                            "color",
                            69427,
                            0,
                            "linear",
                            "${Text_ouimerciencore}",
                            'rgba(2,53,88,1.00)',
                            'rgba(2,53,88,1.00)'
                        ],
                        [
                            "eid1552",
                            "top",
                            96302,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy18}",
                            '673px',
                            '673px'
                        ],
                        [
                            "eid1694",
                            "clip",
                            122376,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy26}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1222",
                            "color",
                            70000,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy8}",
                            'rgba(19,14,6,1.00)',
                            'rgba(19,14,6,1.00)'
                        ],
                        [
                            "eid61",
                            "left",
                            8740,
                            832,
                            "linear",
                            "${Textbonjour}",
                            '530px',
                            '145px'
                        ],
                        [
                            "eid1252",
                            "clip",
                            78384,
                            1357,
                            "linear",
                            "${Text_jesuisBimoCopy10}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1765",
                            "top",
                            148602,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy34}",
                            '708px',
                            '708px'
                        ],
                        [
                            "eid1668",
                            "opacity",
                            121250,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy25}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1051",
                            "top",
                            21845,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid872",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${section_menu2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid873",
                            "opacity",
                            130000,
                            0,
                            "linear",
                            "${section_menu2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1192",
                            "opacity",
                            68541,
                            907,
                            "linear",
                            "${Text_jesuisBimoCopy6}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid294",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_dort}",
                            '0',
                            '0'
                        ],
                        [
                            "eid295",
                            "opacity",
                            47543,
                            0,
                            "linear",
                            "${bimo_dort}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1601",
                            "left",
                            106750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy21}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid1770",
                            "opacity",
                            152102,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy35}",
                            '1',
                            '0'
                        ],
                        [
                            "eid11",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_ettone}",
                            '0',
                            '0'
                        ],
                        [
                            "eid12",
                            "opacity",
                            3500,
                            0,
                            "linear",
                            "${charlie_ettone}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${charlie_ettone}",
                            '1',
                            '0'
                        ],
                        [
                            "eid745",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_parle_zoom2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid746",
                            "opacity",
                            109521,
                            0,
                            "linear",
                            "${charlie_parle_zoom2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid823",
                            "opacity",
                            125250,
                            0,
                            "linear",
                            "${charlie_parle_zoom2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid337",
                            "top",
                            53357,
                            1500,
                            "linear",
                            "${flotteur}",
                            '585px',
                            '570px'
                        ],
                        [
                            "eid339",
                            "top",
                            54857,
                            1125,
                            "linear",
                            "${flotteur}",
                            '570px',
                            '585px'
                        ],
                        [
                            "eid341",
                            "top",
                            55982,
                            1500,
                            "linear",
                            "${flotteur}",
                            '585px',
                            '570px'
                        ],
                        [
                            "eid342",
                            "top",
                            57482,
                            1125,
                            "linear",
                            "${flotteur}",
                            '570px',
                            '586px'
                        ],
                        [
                            "eid346",
                            "top",
                            58607,
                            750,
                            "linear",
                            "${flotteur}",
                            '586px',
                            '593px'
                        ],
                        [
                            "eid397",
                            "top",
                            59357,
                            2143,
                            "linear",
                            "${flotteur}",
                            '585px',
                            '570px'
                        ],
                        [
                            "eid398",
                            "top",
                            61500,
                            2857,
                            "linear",
                            "${flotteur}",
                            '570px',
                            '585px'
                        ],
                        [
                            "eid1328",
                            "height",
                            0,
                            0,
                            "linear",
                            "${tete2}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1233",
                            "color",
                            76832,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy9}",
                            'rgba(0,35,62,1.00)',
                            'rgba(0,35,62,1.00)'
                        ],
                        [
                            "eid489",
                            "top",
                            64357,
                            2827,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '243px',
                            '289px'
                        ],
                        [
                            "eid490",
                            "top",
                            67184,
                            4543,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '289px',
                            '304px'
                        ],
                        [
                            "eid612",
                            "top",
                            71727,
                            2542,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '304px',
                            '285px'
                        ],
                        [
                            "eid1800",
                            "top",
                            90566,
                            13486,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '285px',
                            '204px'
                        ],
                        [
                            "eid1803",
                            "top",
                            104052,
                            5093,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '204px',
                            '246px'
                        ],
                        [
                            "eid351",
                            "left",
                            53357,
                            0,
                            "linear",
                            "${charlie_peche_perso}",
                            '524px',
                            '524px'
                        ],
                        [
                            "eid510",
                            "color",
                            12418,
                            0,
                            "linear",
                            "${text_bonjour2}",
                            'rgba(249,167,21,1.00)',
                            'rgba(249,167,21,1.00)'
                        ],
                        [
                            "eid488",
                            "left",
                            64357,
                            2827,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '259px',
                            '245px'
                        ],
                        [
                            "eid491",
                            "left",
                            67184,
                            4543,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '245px',
                            '270px'
                        ],
                        [
                            "eid1798",
                            "left",
                            90566,
                            6041,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '270px',
                            '220px'
                        ],
                        [
                            "eid1799",
                            "left",
                            96607,
                            2482,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '220px',
                            '250px'
                        ],
                        [
                            "eid1802",
                            "left",
                            104052,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '250px',
                            '250px'
                        ],
                        [
                            "eid1201",
                            "scaleX",
                            69827,
                            0,
                            "linear",
                            "${Text_ouimerciencore}",
                            '1.01063',
                            '1.01063'
                        ],
                        [
                            "eid1729",
                            "opacity",
                            134503,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy28}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1421",
                            "color",
                            87401,
                            0,
                            "linear",
                            "${Text_uneprincesse}",
                            'rgba(0,35,62,1.00)',
                            'rgba(0,35,62,1.00)'
                        ],
                        [
                            "eid324",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${flotteur}",
                            '0',
                            '0'
                        ],
                        [
                            "eid325",
                            "opacity",
                            53357,
                            0,
                            "linear",
                            "${flotteur}",
                            '0',
                            '1'
                        ],
                        [
                            "eid418",
                            "opacity",
                            64357,
                            0,
                            "linear",
                            "${flotteur}",
                            '1',
                            '0'
                        ],
                        [
                            "eid578",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid582",
                            "opacity",
                            37761,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid583",
                            "opacity",
                            75357,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid627",
                            "opacity",
                            81357,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid662",
                            "opacity",
                            90566,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid69",
                            "color",
                            6972,
                            0,
                            "linear",
                            "${Texthello}",
                            'rgba(244,160,25,1.00)',
                            'rgba(244,160,25,1.00)'
                        ],
                        [
                            "eid414",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Text_oh}",
                            '0',
                            '0'
                        ],
                        [
                            "eid415",
                            "opacity",
                            62107,
                            987,
                            "linear",
                            "${Text_oh}",
                            '0',
                            '1'
                        ],
                        [
                            "eid416",
                            "opacity",
                            64357,
                            0,
                            "linear",
                            "${Text_oh}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1268",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1270",
                            "opacity",
                            84000,
                            500,
                            "linear",
                            "${tete}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1280",
                            "opacity",
                            86512,
                            415,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1539",
                            "opacity",
                            90750,
                            500,
                            "linear",
                            "${tete}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1540",
                            "opacity",
                            94905,
                            645,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1558",
                            "opacity",
                            96302,
                            500,
                            "linear",
                            "${tete}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1557",
                            "opacity",
                            100457,
                            645,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1609",
                            "opacity",
                            106744,
                            500,
                            "linear",
                            "${tete}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1610",
                            "opacity",
                            108500,
                            645,
                            "linear",
                            "${tete}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1664",
                            "left",
                            116898,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy24}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid1573",
                            "top",
                            103250,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy19}",
                            '706px',
                            '706px'
                        ],
                        [
                            "eid1407",
                            "top",
                            14499,
                            0,
                            "linear",
                            "${tete2}",
                            '666px',
                            '666px'
                        ],
                        [
                            "eid1377",
                            "top",
                            64357,
                            0,
                            "linear",
                            "${tete2}",
                            '666px',
                            '681px'
                        ],
                        [
                            "eid1675",
                            "top",
                            74258,
                            0,
                            "linear",
                            "${tete2}",
                            '681px',
                            '681px'
                        ],
                        [
                            "eid1677",
                            "top",
                            117000,
                            0,
                            "linear",
                            "${tete2}",
                            '681px',
                            '680px'
                        ],
                        [
                            "eid1710",
                            "top",
                            125750,
                            0,
                            "linear",
                            "${tete2}",
                            '680px',
                            '674px'
                        ],
                        [
                            "eid1522",
                            "top",
                            90750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy14}",
                            '700px',
                            '673px'
                        ],
                        [
                            "eid1069",
                            "clip",
                            26250,
                            2000,
                            "linear",
                            "${Text_abonjouralorsCopy2}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1768",
                            "left",
                            148602,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy34}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1300",
                            "height",
                            0,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '91px',
                            '91px'
                        ],
                        [
                            "eid1184",
                            "height",
                            64000,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '91px',
                            '85px'
                        ],
                        [
                            "eid1435",
                            "height",
                            89840,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '85px',
                            '85px'
                        ],
                        [
                            "eid1720",
                            "left",
                            125750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy27}",
                            '153px',
                            '150px'
                        ],
                        [
                            "eid1094",
                            "opacity",
                            13000,
                            645,
                            "linear",
                            "${Text_abonjouralorsCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1732",
                            "top",
                            130151,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy29}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid1756",
                            "opacity",
                            146678,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy33}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1165",
                            "clip",
                            43750,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy4}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1045",
                            "top",
                            20003,
                            9,
                            "linear",
                            "${Text_abonjouralorsCopy}",
                            '653px',
                            '663px'
                        ],
                        [
                            "eid928",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${pomme}",
                            '472px',
                            '472px'
                        ],
                        [
                            "eid1436",
                            "left",
                            89522,
                            0,
                            "linear",
                            "${pomme}",
                            '472px',
                            '486px'
                        ],
                        [
                            "eid1030",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0'
                        ],
                        [
                            "eid920",
                            "opacity",
                            12211,
                            163,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.68755787037037'
                        ],
                        [
                            "eid1052",
                            "opacity",
                            12374,
                            626,
                            "linear",
                            "${sectionblanhe}",
                            '0.6875579953193665',
                            '0.69'
                        ],
                        [
                            "eid1099",
                            "opacity",
                            13000,
                            1250,
                            "linear",
                            "${sectionblanhe}",
                            '0.69',
                            '0'
                        ],
                        [
                            "eid1098",
                            "opacity",
                            14250,
                            250,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.69'
                        ],
                        [
                            "eid1100",
                            "opacity",
                            14500,
                            4500,
                            "linear",
                            "${sectionblanhe}",
                            '0.69',
                            '0.68913892772463'
                        ],
                        [
                            "eid1083",
                            "opacity",
                            19000,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.68913892772463',
                            '0'
                        ],
                        [
                            "eid1084",
                            "opacity",
                            19645,
                            354,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.69'
                        ],
                        [
                            "eid1086",
                            "opacity",
                            19999,
                            4501,
                            "linear",
                            "${sectionblanhe}",
                            '0.6899999976158142',
                            '0.69'
                        ],
                        [
                            "eid1089",
                            "opacity",
                            24500,
                            395,
                            "linear",
                            "${sectionblanhe}",
                            '0.6899999976158142',
                            '0'
                        ],
                        [
                            "eid1062",
                            "opacity",
                            25750,
                            500,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.69'
                        ],
                        [
                            "eid1073",
                            "opacity",
                            26250,
                            4500,
                            "linear",
                            "${sectionblanhe}",
                            '0.6899999976158142',
                            '0.69'
                        ],
                        [
                            "eid1074",
                            "opacity",
                            30750,
                            610,
                            "linear",
                            "${sectionblanhe}",
                            '0.6899999976158142',
                            '0'
                        ],
                        [
                            "eid1080",
                            "opacity",
                            31944,
                            306,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.69'
                        ],
                        [
                            "eid1081",
                            "opacity",
                            32250,
                            3000,
                            "linear",
                            "${sectionblanhe}",
                            '0.6899999976158142',
                            '0.69'
                        ],
                        [
                            "eid1082",
                            "opacity",
                            35250,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.69',
                            '0'
                        ],
                        [
                            "eid1157",
                            "opacity",
                            35895,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1158",
                            "opacity",
                            41251,
                            501,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.69'
                        ],
                        [
                            "eid1168",
                            "opacity",
                            46155,
                            595,
                            "linear",
                            "${sectionblanhe}",
                            '0.6899999976158142',
                            '0'
                        ],
                        [
                            "eid1182",
                            "opacity",
                            64000,
                            857,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1189",
                            "opacity",
                            65714,
                            907,
                            "linear",
                            "${sectionblanhe}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1369",
                            "opacity",
                            67184,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1368",
                            "opacity",
                            73851,
                            342,
                            "linear",
                            "${sectionblanhe}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1386",
                            "opacity",
                            75357,
                            393,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81345486111111'
                        ],
                        [
                            "eid1274",
                            "opacity",
                            82500,
                            907,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1277",
                            "opacity",
                            84000,
                            500,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1281",
                            "opacity",
                            84500,
                            2000,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0.81'
                        ],
                        [
                            "eid1282",
                            "opacity",
                            86500,
                            439,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1411",
                            "opacity",
                            87401,
                            449,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1427",
                            "opacity",
                            89413,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1510",
                            "opacity",
                            90750,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1547",
                            "opacity",
                            94905,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1562",
                            "opacity",
                            96302,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1561",
                            "opacity",
                            100457,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1569",
                            "opacity",
                            101500,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1570",
                            "opacity",
                            105655,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1595",
                            "opacity",
                            106750,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1596",
                            "opacity",
                            108500,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1626",
                            "opacity",
                            110390,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1625",
                            "opacity",
                            115576,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1658",
                            "opacity",
                            117000,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1659",
                            "opacity",
                            120927,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1685",
                            "opacity",
                            122370,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1684",
                            "opacity",
                            124500,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1706",
                            "opacity",
                            125750,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1707",
                            "opacity",
                            128250,
                            645,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1725",
                            "opacity",
                            130151,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1724",
                            "opacity",
                            134503,
                            322,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1739",
                            "opacity",
                            137071,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1740",
                            "opacity",
                            141423,
                            322,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1761",
                            "opacity",
                            142326,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1760",
                            "opacity",
                            146678,
                            322,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1774",
                            "opacity",
                            147748,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1775",
                            "opacity",
                            152100,
                            322,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1787",
                            "opacity",
                            153326,
                            427,
                            "linear",
                            "${sectionblanhe}",
                            '0',
                            '0.81'
                        ],
                        [
                            "eid1788",
                            "opacity",
                            157678,
                            322,
                            "linear",
                            "${sectionblanhe}",
                            '0.8100000023841858',
                            '0'
                        ],
                        [
                            "eid1784",
                            "clip",
                            153332,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy37}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1718",
                            "top",
                            125750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy27}",
                            '706px',
                            '676px'
                        ],
                        [
                            "eid1351",
                            "left",
                            67184,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy6}",
                            '88px',
                            '123px'
                        ],
                        [
                            "eid1408",
                            "color",
                            78309,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy10}",
                            'rgba(255,98,96,1.00)',
                            'rgba(0,35,62,1.00)'
                        ],
                        [
                            "eid1602",
                            "clip",
                            106750,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy21}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1745",
                            "clip",
                            137922,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy30}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1320",
                            "top",
                            41251,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy4}",
                            '691px',
                            '691px'
                        ],
                        [
                            "eid1163",
                            "top",
                            43750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy4}",
                            '691px',
                            '696px'
                        ],
                        [
                            "eid1753",
                            "clip",
                            143177,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy32}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1580",
                            "left",
                            101500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy20}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid1341",
                            "color",
                            64357,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy5}",
                            'rgba(2,53,88,1.00)',
                            'rgba(2,53,88,1.00)'
                        ],
                        [
                            "eid1404",
                            "top",
                            85000,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy12}",
                            '689px',
                            '610px'
                        ],
                        [
                            "eid449",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '0',
                            '0'
                        ],
                        [
                            "eid454",
                            "opacity",
                            64357,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid668",
                            "opacity",
                            90566,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid813",
                            "opacity",
                            100478,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '1',
                            '1'
                        ],
                        [
                            "eid824",
                            "opacity",
                            125250,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1555",
                            "clip",
                            96302,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy18}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1696",
                            "top",
                            122370,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy26}",
                            '708px',
                            '681px'
                        ],
                        [
                            "eid73",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${fond_charlie}",
                            '0',
                            '0'
                        ],
                        [
                            "eid75",
                            "opacity",
                            12000,
                            0,
                            "linear",
                            "${fond_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid165",
                            "opacity",
                            14000,
                            0,
                            "linear",
                            "${fond_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid211",
                            "opacity",
                            25405,
                            0,
                            "linear",
                            "${fond_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid224",
                            "opacity",
                            31944,
                            0,
                            "linear",
                            "${fond_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1420",
                            "top",
                            87401,
                            0,
                            "linear",
                            "${Text_uneprincesse}",
                            '583px',
                            '583px'
                        ],
                        [
                            "eid1419",
                            "left",
                            87901,
                            0,
                            "linear",
                            "${Text_quelleprincesse}",
                            '655px',
                            '655px'
                        ],
                        [
                            "eid1322",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1310",
                            "opacity",
                            12211,
                            163,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1313",
                            "opacity",
                            13000,
                            442,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1314",
                            "opacity",
                            26087,
                            163,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1315",
                            "opacity",
                            30918,
                            442,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1316",
                            "opacity",
                            41251,
                            163,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1317",
                            "opacity",
                            46308,
                            442,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1356",
                            "opacity",
                            67184,
                            173,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1359",
                            "opacity",
                            68750,
                            677,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1397",
                            "opacity",
                            76832,
                            186,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1400",
                            "opacity",
                            82500,
                            907,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1413",
                            "opacity",
                            87401,
                            449,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1431",
                            "opacity",
                            89413,
                            449,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1581",
                            "opacity",
                            101522,
                            449,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0.81'
                        ],
                        [
                            "eid1588",
                            "opacity",
                            105655,
                            645,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1647",
                            "opacity",
                            110390,
                            427,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1651",
                            "opacity",
                            115576,
                            645,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1689",
                            "opacity",
                            122370,
                            427,
                            "linear",
                            "${tete_charlie}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1690",
                            "opacity",
                            124500,
                            645,
                            "linear",
                            "${tete_charlie}",
                            '1',
                            '0'
                        ],
                        [
                            "eid576",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_parle_zoom}",
                            '0',
                            '0'
                        ],
                        [
                            "eid577",
                            "opacity",
                            75357,
                            0,
                            "linear",
                            "${charlie_parle_zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid663",
                            "opacity",
                            90566,
                            0,
                            "linear",
                            "${charlie_parle_zoom}",
                            '1',
                            '0'
                        ],
                        [
                            "eid353",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_face}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1077",
                            "clip",
                            32250,
                            2000,
                            "linear",
                            "${Text_abonjouralorsCopy3}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1262",
                            "opacity",
                            86512,
                            427,
                            "linear",
                            "${Text_jesuisBimoCopy12}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1692",
                            "opacity",
                            124178,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy26}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1066",
                            "clip",
                            28096,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy3}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1623",
                            "top",
                            109500,
                            0,
                            "linear",
                            "${charlie_parle3_bigplan}",
                            '166px',
                            '191px'
                        ],
                        [
                            "eid1643",
                            "top",
                            110396,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy22}",
                            '676px',
                            '674px'
                        ],
                        [
                            "eid1743",
                            "top",
                            137923,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy30}",
                            '708px',
                            '708px'
                        ],
                        [
                            "eid853",
                            "top",
                            130000,
                            0,
                            "linear",
                            "${charlie_parle_zoom2}",
                            '4px',
                            '4px'
                        ],
                        [
                            "eid1190",
                            "top",
                            67184,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy6}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid509",
                            "left",
                            11586,
                            832,
                            "linear",
                            "${text_bonjour2}",
                            '530px',
                            '685px'
                        ],
                        [
                            "eid1636",
                            "clip",
                            110396,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy22}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid587",
                            "scaleY",
                            75357,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid1641",
                            "left",
                            111250,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy23}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid1208",
                            "opacity",
                            73500,
                            907,
                            "linear",
                            "${Text_jesuisBimoCopy8}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1778",
                            "top",
                            154178,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy36}",
                            '708px',
                            '708px'
                        ],
                        [
                            "eid1361",
                            "top",
                            69448,
                            0,
                            "linear",
                            "${Text_ouimerciencore}",
                            '677px',
                            '677px'
                        ],
                        [
                            "eid1406",
                            "top",
                            12211,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1353",
                            "top",
                            67184,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '662px',
                            '676px'
                        ],
                        [
                            "eid1583",
                            "top",
                            76750,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '676px',
                            '580px'
                        ],
                        [
                            "eid1585",
                            "top",
                            101500,
                            0,
                            "linear",
                            "${tete_charlie}",
                            '580px',
                            '674px'
                        ],
                        [
                            "eid1744",
                            "opacity",
                            141423,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy30}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1068",
                            "opacity",
                            30501,
                            645,
                            "linear",
                            "${Text_abonjouralorsCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1735",
                            "left",
                            130151,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy29}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid1575",
                            "left",
                            103250,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy19}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid1733",
                            "opacity",
                            134503,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy29}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1553",
                            "opacity",
                            100457,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy18}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1545",
                            "left",
                            92500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy15}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid47",
                            "top",
                            7644,
                            832,
                            "linear",
                            "${Texthola}",
                            '340px',
                            '85px'
                        ],
                        [
                            "eid52",
                            "top",
                            8477,
                            1023,
                            "linear",
                            "${Texthola}",
                            '85px',
                            '119px'
                        ],
                        [
                            "eid1782",
                            "top",
                            153326,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy37}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid48",
                            "opacity",
                            1102,
                            0,
                            "linear",
                            "${Texthola}",
                            '0',
                            '0'
                        ],
                        [
                            "eid49",
                            "opacity",
                            7974,
                            503,
                            "linear",
                            "${Texthola}",
                            '0',
                            '1'
                        ],
                        [
                            "eid50",
                            "opacity",
                            8477,
                            1023,
                            "linear",
                            "${Texthola}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1622",
                            "left",
                            109500,
                            0,
                            "linear",
                            "${charlie_parle3_bigplan}",
                            '375px',
                            '366px'
                        ],
                        [
                            "eid1258",
                            "left",
                            84500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy11}",
                            '534px',
                            '655px'
                        ],
                        [
                            "eid1032",
                            "opacity",
                            24250,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1326",
                            "left",
                            0,
                            0,
                            "linear",
                            "${tete2}",
                            '179px',
                            '179px'
                        ],
                        [
                            "eid1329",
                            "left",
                            14499,
                            0,
                            "linear",
                            "${tete2}",
                            '179px',
                            '191px'
                        ],
                        [
                            "eid1371",
                            "left",
                            64357,
                            9901,
                            "linear",
                            "${tete2}",
                            '58px',
                            '59px'
                        ],
                        [
                            "eid1676",
                            "left",
                            117000,
                            0,
                            "linear",
                            "${tete2}",
                            '59px',
                            '204px'
                        ],
                        [
                            "eid1722",
                            "left",
                            125750,
                            0,
                            "linear",
                            "${tete2}",
                            '63px',
                            '73px'
                        ],
                        [
                            "eid1330",
                            "left",
                            14499,
                            0,
                            "linear",
                            "${Text_abonjouralors}",
                            '269px',
                            '269px'
                        ],
                        [
                            "eid1072",
                            "left",
                            28096,
                            0,
                            "linear",
                            "${Text_abonjouralors}",
                            '269px',
                            '248px'
                        ],
                        [
                            "eid1174",
                            "opacity",
                            65714,
                            907,
                            "linear",
                            "${Text_jesuisBimoCopy5}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1154",
                            "opacity",
                            46155,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1321",
                            "top",
                            3699,
                            0,
                            "linear",
                            "${Text_abonjouralorsCopy3}",
                            '653px',
                            '653px'
                        ],
                        [
                            "eid1075",
                            "top",
                            32254,
                            9,
                            "linear",
                            "${Text_abonjouralorsCopy3}",
                            '653px',
                            '663px'
                        ],
                        [
                            "eid1155",
                            "clip",
                            41251,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy2}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1319",
                            "left",
                            43750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy4}",
                            '260px',
                            '260px'
                        ],
                        [
                            "eid852",
                            "left",
                            130000,
                            0,
                            "linear",
                            "${charlie_parle_zoom2}",
                            '5px',
                            '5px'
                        ],
                        [
                            "eid1415",
                            "top",
                            87901,
                            0,
                            "linear",
                            "${Text_quelleprincesse}",
                            '610px',
                            '610px'
                        ],
                        [
                            "eid37",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${Texthello}",
                            '0',
                            '0'
                        ],
                        [
                            "eid45",
                            "opacity",
                            6470,
                            503,
                            "linear",
                            "${Texthello}",
                            '0',
                            '1'
                        ],
                        [
                            "eid46",
                            "opacity",
                            6972,
                            1023,
                            "linear",
                            "${Texthello}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1303",
                            "top",
                            0,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '648px',
                            '648px'
                        ],
                        [
                            "eid1379",
                            "top",
                            64000,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '648px',
                            '663px'
                        ],
                        [
                            "eid1380",
                            "top",
                            74258,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '663px',
                            '663px'
                        ],
                        [
                            "eid1387",
                            "top",
                            75357,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '663px',
                            '568px'
                        ],
                        [
                            "eid1432",
                            "top",
                            89840,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '568px',
                            '568px'
                        ],
                        [
                            "eid1492",
                            "top",
                            90750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '568px',
                            '662px'
                        ],
                        [
                            "eid1560",
                            "top",
                            96302,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1568",
                            "top",
                            101500,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1594",
                            "top",
                            106750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1624",
                            "top",
                            110390,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1657",
                            "top",
                            117000,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1683",
                            "top",
                            122370,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1705",
                            "top",
                            125750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1723",
                            "top",
                            130151,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1738",
                            "top",
                            137071,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1759",
                            "top",
                            142326,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1773",
                            "top",
                            147748,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid1786",
                            "top",
                            153326,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '662px',
                            '662px'
                        ],
                        [
                            "eid871",
                            "top",
                            130151,
                            0,
                            "linear",
                            "${section_menu2}",
                            '107px',
                            '107px'
                        ],
                        [
                            "eid869",
                            "top",
                            135550,
                            645,
                            "linear",
                            "${section_menu2}",
                            '105px',
                            '-329px'
                        ],
                        [
                            "eid893",
                            "top",
                            152660,
                            509,
                            "linear",
                            "${section_menu2}",
                            '-329px',
                            '105px'
                        ],
                        [
                            "eid1528",
                            "top",
                            92500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy15}",
                            '706px',
                            '706px'
                        ],
                        [
                            "eid347",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_peche3_decor}",
                            '0',
                            '0'
                        ],
                        [
                            "eid348",
                            "opacity",
                            53357,
                            0,
                            "linear",
                            "${charlie_peche3_decor}",
                            '0',
                            '1'
                        ],
                        [
                            "eid420",
                            "opacity",
                            64357,
                            0,
                            "linear",
                            "${charlie_peche3_decor}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1388",
                            "left",
                            77018,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy10}",
                            '631px',
                            '631px'
                        ],
                        [
                            "eid1251",
                            "left",
                            78500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy10}",
                            '631px',
                            '630px'
                        ],
                        [
                            "eid504",
                            "top",
                            11586,
                            832,
                            "linear",
                            "${text_bonjour2}",
                            '340px',
                            '371px'
                        ],
                        [
                            "eid505",
                            "top",
                            13442,
                            0,
                            "linear",
                            "${text_bonjour2}",
                            '371px',
                            '119px'
                        ],
                        [
                            "eid1621",
                            "scaleY",
                            109500,
                            0,
                            "linear",
                            "${charlie_parle3_bigplan}",
                            '1.82927',
                            '1.95214'
                        ],
                        [
                            "eid1318",
                            "left",
                            41251,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy2}",
                            '261px',
                            '261px'
                        ],
                        [
                            "eid44",
                            "left",
                            6140,
                            832,
                            "linear",
                            "${Texthello}",
                            '530px',
                            '730px'
                        ],
                        [
                            "eid1780",
                            "left",
                            154178,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy36}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1071",
                            "scaleX",
                            28096,
                            0,
                            "linear",
                            "${Text_abonjouralors}",
                            '1.03303',
                            '1.03303'
                        ],
                        [
                            "eid1642",
                            "clip",
                            111256,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy23}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1219",
                            "top",
                            70000,
                            1027,
                            "linear",
                            "${Text_jesuisBimoCopy8}",
                            '704px',
                            '711px'
                        ],
                        [
                            "eid1218",
                            "top",
                            71027,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy8}",
                            '711px',
                            '709px'
                        ],
                        [
                            "eid1637",
                            "left",
                            110390,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy22}",
                            '150px',
                            '281px'
                        ],
                        [
                            "eid1209",
                            "clip",
                            71027,
                            1357,
                            "linear",
                            "${Text_jesuisBimoCopy8}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid917",
                            "left",
                            12000,
                            0,
                            "linear",
                            "${charlie_parle5}",
                            '360px',
                            '360px'
                        ],
                        [
                            "eid423",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '0',
                            '0'
                        ],
                        [
                            "eid424",
                            "opacity",
                            64357,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid743",
                            "opacity",
                            109500,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '1',
                            '0'
                        ],
                        [
                            "eid825",
                            "opacity",
                            125250,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1550",
                            "clip",
                            98052,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy17}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1620",
                            "scaleX",
                            109500,
                            0,
                            "linear",
                            "${charlie_parle3_bigplan}",
                            '1.82927',
                            '1.95214'
                        ],
                        [
                            "eid1757",
                            "clip",
                            142332,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy33}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1250",
                            "opacity",
                            82500,
                            907,
                            "linear",
                            "${Text_jesuisBimoCopy10}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1606",
                            "top",
                            106744,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy21}",
                            '676px',
                            '676px'
                        ],
                        [
                            "eid1607",
                            "top",
                            106750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy21}",
                            '676px',
                            '676px'
                        ],
                        [
                            "eid67",
                            "left",
                            10144,
                            832,
                            "linear",
                            "${Textchinois}",
                            '530px',
                            '802px'
                        ],
                        [
                            "eid1301",
                            "width",
                            0,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '678px',
                            '678px'
                        ],
                        [
                            "eid1337",
                            "width",
                            64000,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '678px',
                            '620px'
                        ],
                        [
                            "eid1383",
                            "width",
                            75357,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '620px',
                            '455px'
                        ],
                        [
                            "eid1434",
                            "width",
                            89840,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '455px',
                            '455px'
                        ],
                        [
                            "eid1566",
                            "width",
                            90750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '455px',
                            '600px'
                        ],
                        [
                            "eid1567",
                            "width",
                            96302,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '600px',
                            '640px'
                        ],
                        [
                            "eid1572",
                            "width",
                            101500,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '640px',
                            '600px'
                        ],
                        [
                            "eid1598",
                            "width",
                            106750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '600px',
                            '600px'
                        ],
                        [
                            "eid1630",
                            "width",
                            110390,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '600px',
                            '650px'
                        ],
                        [
                            "eid1661",
                            "width",
                            117000,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid1687",
                            "width",
                            122370,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid1709",
                            "width",
                            125750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '650px',
                            '600px'
                        ],
                        [
                            "eid1727",
                            "width",
                            130151,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '600px',
                            '650px'
                        ],
                        [
                            "eid1742",
                            "width",
                            137071,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid1763",
                            "width",
                            142326,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid1777",
                            "width",
                            147748,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid1790",
                            "width",
                            153326,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '650px',
                            '650px'
                        ],
                        [
                            "eid999",
                            "clip",
                            14500,
                            2000,
                            "linear",
                            "${Text_abonjouralors}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1529",
                            "opacity",
                            94905,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy15}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1064",
                            "top",
                            28096,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy3}",
                            '700px',
                            '700px'
                        ],
                        [
                            "eid921",
                            "top",
                            11750,
                            0,
                            "linear",
                            "${menu_bimo2}",
                            '2px',
                            '2px'
                        ],
                        [
                            "eid1640",
                            "opacity",
                            115899,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy23}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1200",
                            "clip",
                            69448,
                            1357,
                            "linear",
                            "${Text_ouimerciencore}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1076",
                            "opacity",
                            35250,
                            645,
                            "linear",
                            "${Text_abonjouralorsCopy3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1671",
                            "top",
                            117750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy25}",
                            '674px',
                            '708px'
                        ],
                        [
                            "eid410",
                            "top",
                            62274,
                            0,
                            "linear",
                            "${Text_oh}",
                            '362px',
                            '362px'
                        ],
                        [
                            "eid64",
                            "opacity",
                            3602,
                            0,
                            "linear",
                            "${Textchinois}",
                            '0',
                            '0'
                        ],
                        [
                            "eid65",
                            "opacity",
                            10474,
                            503,
                            "linear",
                            "${Textchinois}",
                            '0',
                            '1'
                        ],
                        [
                            "eid66",
                            "opacity",
                            10977,
                            1023,
                            "linear",
                            "${Textchinois}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1264",
                            "clip",
                            85000,
                            1357,
                            "linear",
                            "${Text_jesuisBimoCopy12}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid57",
                            "top",
                            8740,
                            832,
                            "linear",
                            "${Textbonjour}",
                            '340px',
                            '482px'
                        ],
                        [
                            "eid1766",
                            "opacity",
                            152102,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy34}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1579",
                            "clip",
                            101500,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy20}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1028",
                            "opacity",
                            19000,
                            645,
                            "linear",
                            "${Text_jesuisBimo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1663",
                            "opacity",
                            121250,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy24}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1265",
                            "color",
                            84500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy11}",
                            'rgba(255,98,96,1.00)',
                            'rgba(0,35,62,1.00)'
                        ],
                        [
                            "eid1327",
                            "width",
                            0,
                            0,
                            "linear",
                            "${tete2}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1754",
                            "left",
                            143178,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy32}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid43",
                            "top",
                            6140,
                            832,
                            "linear",
                            "${Texthello}",
                            '340px',
                            '188px'
                        ],
                        [
                            "eid1737",
                            "left",
                            131003,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy28}",
                            '252px',
                            '249px'
                        ],
                        [
                            "eid1193",
                            "clip",
                            67184,
                            1357,
                            "linear",
                            "${Text_jesuisBimoCopy6}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid62",
                            "top",
                            10144,
                            832,
                            "linear",
                            "${Textchinois}",
                            '340px',
                            '119px'
                        ],
                        [
                            "eid68",
                            "top",
                            12000,
                            0,
                            "linear",
                            "${Textchinois}",
                            '119px',
                            '119px'
                        ],
                        [
                            "eid1746",
                            "left",
                            137923,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy30}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid1235",
                            "clip",
                            77027,
                            1357,
                            "linear",
                            "${Text_jesuisBimoCopy9}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid584",
                            "left",
                            75357,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '134px',
                            '134px'
                        ],
                        [
                            "eid929",
                            "top",
                            2500,
                            0,
                            "linear",
                            "${pomme}",
                            '252px',
                            '252px'
                        ],
                        [
                            "eid470",
                            "height",
                            64357,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid667",
                            "height",
                            90566,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid812",
                            "height",
                            100478,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid586",
                            "scaleX",
                            75357,
                            0,
                            "linear",
                            "${charlie_parle2}",
                            '1.5',
                            '1.5'
                        ],
                        [
                            "eid1234",
                            "opacity",
                            82500,
                            907,
                            "linear",
                            "${Text_jesuisBimoCopy9}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid916",
                            "top",
                            12000,
                            0,
                            "linear",
                            "${charlie_parle5}",
                            '206px',
                            '206px'
                        ],
                        [
                            "eid1578",
                            "opacity",
                            105655,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy20}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1038",
                            "top",
                            14500,
                            0,
                            "linear",
                            "${Text_abonjouralors}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid1039",
                            "top",
                            14504,
                            0,
                            "linear",
                            "${Text_abonjouralors}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid1197",
                            "left",
                            64357,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy5}",
                            '125px',
                            '125px'
                        ],
                        [
                            "eid1198",
                            "scaleX",
                            67563,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy6}",
                            '1.01063',
                            '1.01063'
                        ],
                        [
                            "eid70",
                            "color",
                            8477,
                            0,
                            "linear",
                            "${Texthola}",
                            'rgba(244,160,25,1.00)',
                            'rgba(244,160,25,1.00)'
                        ],
                        [
                            "eid1389",
                            "left",
                            77018,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy9}",
                            '636px',
                            '625px'
                        ],
                        [
                            "eid598",
                            "top",
                            64357,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '103px',
                            '103px'
                        ],
                        [
                            "eid1574",
                            "opacity",
                            105655,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy19}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1719",
                            "opacity",
                            128573,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy27}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1423",
                            "left",
                            87401,
                            0,
                            "linear",
                            "${Text_uneprincesse}",
                            '655px',
                            '655px'
                        ],
                        [
                            "eid949",
                            "left",
                            0,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '426px',
                            '426px'
                        ],
                        [
                            "eid953",
                            "left",
                            4500,
                            2792,
                            "linear",
                            "${yeux_bimo2}",
                            '426px',
                            '451px'
                        ],
                        [
                            "eid955",
                            "left",
                            7292,
                            2708,
                            "linear",
                            "${yeux_bimo2}",
                            '451px',
                            '409px'
                        ],
                        [
                            "eid1109",
                            "left",
                            14000,
                            2792,
                            "linear",
                            "${yeux_bimo2}",
                            '426px',
                            '451px'
                        ],
                        [
                            "eid1110",
                            "left",
                            16792,
                            2708,
                            "linear",
                            "${yeux_bimo2}",
                            '451px',
                            '409px'
                        ],
                        [
                            "eid1114",
                            "left",
                            19500,
                            4025,
                            "linear",
                            "${yeux_bimo2}",
                            '409px',
                            '448px'
                        ],
                        [
                            "eid1124",
                            "left",
                            31944,
                            2056,
                            "linear",
                            "${yeux_bimo2}",
                            '448px',
                            '408px'
                        ],
                        [
                            "eid1135",
                            "left",
                            35895,
                            154,
                            "linear",
                            "${yeux_bimo2}",
                            '408px',
                            '457px'
                        ],
                        [
                            "eid1136",
                            "left",
                            36049,
                            181,
                            "linear",
                            "${yeux_bimo2}",
                            '457px',
                            '396px'
                        ],
                        [
                            "eid1137",
                            "left",
                            36230,
                            189,
                            "linear",
                            "${yeux_bimo2}",
                            '396px',
                            '450px'
                        ],
                        [
                            "eid1138",
                            "left",
                            36420,
                            173,
                            "linear",
                            "${yeux_bimo2}",
                            '450px',
                            '405px'
                        ],
                        [
                            "eid1139",
                            "left",
                            36593,
                            181,
                            "linear",
                            "${yeux_bimo2}",
                            '405px',
                            '427px'
                        ],
                        [
                            "eid23",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1150",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${yeux_bimo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1152",
                            "opacity",
                            37319,
                            181,
                            "linear",
                            "${yeux_bimo2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1323",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${tete2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1325",
                            "opacity",
                            14500,
                            163,
                            "linear",
                            "${tete2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1331",
                            "opacity",
                            19171,
                            442,
                            "linear",
                            "${tete2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1333",
                            "opacity",
                            19750,
                            163,
                            "linear",
                            "${tete2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1334",
                            "opacity",
                            24250,
                            442,
                            "linear",
                            "${tete2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1335",
                            "opacity",
                            31944,
                            163,
                            "linear",
                            "${tete2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1336",
                            "opacity",
                            35308,
                            442,
                            "linear",
                            "${tete2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1344",
                            "opacity",
                            64357,
                            393,
                            "linear",
                            "${tete2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1349",
                            "opacity",
                            65750,
                            750,
                            "linear",
                            "${tete2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1364",
                            "opacity",
                            69427,
                            0,
                            "linear",
                            "${tete2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1366",
                            "opacity",
                            73851,
                            342,
                            "linear",
                            "${tete2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1673",
                            "opacity",
                            117000,
                            427,
                            "linear",
                            "${tete2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1682",
                            "opacity",
                            120927,
                            645,
                            "linear",
                            "${tete2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1711",
                            "opacity",
                            125750,
                            500,
                            "linear",
                            "${tete2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid1712",
                            "opacity",
                            128250,
                            645,
                            "linear",
                            "${tete2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1402",
                            "left",
                            84141,
                            0,
                            "linear",
                            "${tete}",
                            '570px',
                            '570px'
                        ],
                        [
                            "eid1542",
                            "left",
                            90750,
                            0,
                            "linear",
                            "${tete}",
                            '78px',
                            '63px'
                        ],
                        [
                            "eid1559",
                            "left",
                            96302,
                            0,
                            "linear",
                            "${tete}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid1611",
                            "left",
                            106744,
                            0,
                            "linear",
                            "${tete}",
                            '63px',
                            '63px'
                        ],
                        [
                            "eid1171",
                            "left",
                            64357,
                            0,
                            "linear",
                            "${bimo_face_noeyes}",
                            '157px',
                            '157px'
                        ],
                        [
                            "eid1424",
                            "clip",
                            87401,
                            1357,
                            "linear",
                            "${Text_uneprincesse}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid842",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${menu_bimo2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid848",
                            "opacity",
                            130000,
                            0,
                            "linear",
                            "${menu_bimo2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1634",
                            "opacity",
                            115899,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1153",
                            "top",
                            41251,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy2}",
                            '667px',
                            '667px'
                        ],
                        [
                            "eid1267",
                            "color",
                            85000,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy12}",
                            'rgba(255,98,96,1.00)',
                            'rgba(0,35,62,1.00)'
                        ],
                        [
                            "eid1248",
                            "top",
                            78500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy10}",
                            '611px',
                            '611px'
                        ],
                        [
                            "eid1162",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_ettone2}",
                            '0',
                            '0'
                        ],
                        [
                            "eid1160",
                            "opacity",
                            39761,
                            0,
                            "linear",
                            "${charlie_ettone2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1170",
                            "opacity",
                            47543,
                            0,
                            "linear",
                            "${charlie_ettone2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1418",
                            "clip",
                            87901,
                            1357,
                            "linear",
                            "${Text_quelleprincesse}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1755",
                            "top",
                            142326,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy33}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid1027",
                            "opacity",
                            19000,
                            645,
                            "linear",
                            "${Text_abonjouralors}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1350",
                            "color",
                            67184,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy6}",
                            'rgba(2,53,88,1.00)',
                            'rgba(2,53,88,1.00)'
                        ],
                        [
                            "eid1006",
                            "clip",
                            16346,
                            2000,
                            "linear",
                            "${Text_jesuisBimo}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1092",
                            "top",
                            12211,
                            0,
                            "linear",
                            "${Text_abonjouralorsCopy4}",
                            '660px',
                            '660px'
                        ],
                        [
                            "eid1363",
                            "left",
                            70000,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy8}",
                            '126px',
                            '126px'
                        ],
                        [
                            "eid1173",
                            "top",
                            64357,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy5}",
                            '679px',
                            '679px'
                        ],
                        [
                            "eid1422",
                            "opacity",
                            89413,
                            427,
                            "linear",
                            "${Text_uneprincesse}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1403",
                            "top",
                            84500,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy11}",
                            '659px',
                            '583px'
                        ],
                        [
                            "eid395",
                            "left",
                            58857,
                            3500,
                            "linear",
                            "${bimo_saute}",
                            '790px',
                            '421px'
                        ],
                        [
                            "eid1175",
                            "clip",
                            64357,
                            1357,
                            "linear",
                            "${Text_jesuisBimoCopy5}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1758",
                            "left",
                            142326,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy33}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid1600",
                            "opacity",
                            108823,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy21}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1306",
                            "left",
                            16346,
                            0,
                            "linear",
                            "${Text_jesuisBimo}",
                            '260px',
                            '260px'
                        ],
                        [
                            "eid1095",
                            "clip",
                            12211,
                            789,
                            "linear",
                            "${Text_abonjouralorsCopy4}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1246",
                            "top",
                            77027,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy9}",
                            '663px',
                            '579px'
                        ],
                        [
                            "eid1779",
                            "opacity",
                            157678,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy36}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1549",
                            "opacity",
                            100457,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy17}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1416",
                            "color",
                            87901,
                            0,
                            "linear",
                            "${Text_quelleprincesse}",
                            'rgba(0,35,62,1.00)',
                            'rgba(0,35,62,1.00)'
                        ],
                        [
                            "eid1362",
                            "left",
                            69427,
                            0,
                            "linear",
                            "${Text_ouimerciencore}",
                            '127px',
                            '127px'
                        ],
                        [
                            "eid1520",
                            "opacity",
                            94905,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy14}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1164",
                            "opacity",
                            46155,
                            645,
                            "linear",
                            "${Text_jesuisBimoCopy4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1767",
                            "clip",
                            148601,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy34}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1551",
                            "left",
                            98052,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy17}",
                            '153px',
                            '153px'
                        ],
                        [
                            "eid1750",
                            "clip",
                            137077,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy31}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1531",
                            "clip",
                            92500,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy15}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1781",
                            "clip",
                            154177,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy36}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1401",
                            "top",
                            84141,
                            0,
                            "linear",
                            "${tete}",
                            '575px',
                            '575px'
                        ],
                        [
                            "eid1543",
                            "top",
                            90750,
                            0,
                            "linear",
                            "${tete}",
                            '683px',
                            '674px'
                        ],
                        [
                            "eid1556",
                            "top",
                            96302,
                            0,
                            "linear",
                            "${tete}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid1608",
                            "top",
                            106744,
                            0,
                            "linear",
                            "${tete}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid1783",
                            "opacity",
                            157678,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy37}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1693",
                            "left",
                            122370,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy26}",
                            '281px',
                            '281px'
                        ],
                        [
                            "eid1548",
                            "top",
                            98052,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy17}",
                            '706px',
                            '706px'
                        ],
                        [
                            "eid471",
                            "width",
                            64357,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '227px',
                            '227px'
                        ],
                        [
                            "eid671",
                            "width",
                            90566,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '227px',
                            '227px'
                        ],
                        [
                            "eid816",
                            "width",
                            100478,
                            0,
                            "linear",
                            "${yeux_bimo2Copy}",
                            '227px',
                            '227px'
                        ],
                        [
                            "eid1752",
                            "opacity",
                            146678,
                            322,
                            "linear",
                            "${Text_jesuisBimoCopy32}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1255",
                            "opacity",
                            86500,
                            427,
                            "linear",
                            "${Text_jesuisBimoCopy11}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1554",
                            "left",
                            96302,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy18}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid1769",
                            "top",
                            147750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy35}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid1772",
                            "clip",
                            147756,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy35}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1747",
                            "top",
                            137071,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy31}",
                            '674px',
                            '674px'
                        ],
                        [
                            "eid501",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '0',
                            '0'
                        ],
                        [
                            "eid502",
                            "opacity",
                            64357,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid744",
                            "opacity",
                            109500,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '1',
                            '0'
                        ],
                        [
                            "eid826",
                            "opacity",
                            125250,
                            0,
                            "linear",
                            "${bimo_parle_peche_zoom}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1067",
                            "top",
                            26254,
                            9,
                            "linear",
                            "${Text_abonjouralorsCopy2}",
                            '653px',
                            '663px'
                        ],
                        [
                            "eid1544",
                            "left",
                            90750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy14}",
                            '150px',
                            '150px'
                        ],
                        [
                            "eid1417",
                            "opacity",
                            89413,
                            427,
                            "linear",
                            "${Text_quelleprincesse}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid1033",
                            "clip",
                            21845,
                            2000,
                            "linear",
                            "${Text_jesuisBimoCopy}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1302",
                            "left",
                            0,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid1372",
                            "left",
                            64000,
                            10258,
                            "linear",
                            "${sectionblanhe}",
                            '44px',
                            '45px'
                        ],
                        [
                            "eid1382",
                            "left",
                            75357,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '45px',
                            '556px'
                        ],
                        [
                            "eid1433",
                            "left",
                            89840,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '556px',
                            '556px'
                        ],
                        [
                            "eid1491",
                            "left",
                            90750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '556px',
                            '50px'
                        ],
                        [
                            "eid1563",
                            "left",
                            96302,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1571",
                            "left",
                            101500,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1597",
                            "left",
                            106750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '50px',
                            '50px'
                        ],
                        [
                            "eid1631",
                            "left",
                            110390,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '211px',
                            '189px'
                        ],
                        [
                            "eid1660",
                            "left",
                            117000,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid1686",
                            "left",
                            122370,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '189px',
                            '189px'
                        ],
                        [
                            "eid1708",
                            "left",
                            125750,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '189px',
                            '50px'
                        ],
                        [
                            "eid1726",
                            "left",
                            130151,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '50px',
                            '207px'
                        ],
                        [
                            "eid1741",
                            "left",
                            137071,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid1762",
                            "left",
                            142326,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid1776",
                            "left",
                            147748,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid1789",
                            "left",
                            153326,
                            0,
                            "linear",
                            "${sectionblanhe}",
                            '207px',
                            '207px'
                        ],
                        [
                            "eid1734",
                            "clip",
                            130157,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy29}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1771",
                            "left",
                            147750,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy35}",
                            '248px',
                            '248px'
                        ],
                        [
                            "eid1728",
                            "top",
                            131003,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy28}",
                            '708px',
                            '708px'
                        ],
                        [
                            "eid1035",
                            "opacity",
                            24250,
                            645,
                            "linear",
                            "${Text_abonjouralorsCopy}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1730",
                            "clip",
                            131002,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy28}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid750",
                            "opacity",
                            0,
                            0,
                            "linear",
                            "${charlie_parle3_bigplan}",
                            '0',
                            '0'
                        ],
                        [
                            "eid756",
                            "opacity",
                            109521,
                            0,
                            "linear",
                            "${charlie_parle3_bigplan}",
                            '0',
                            '1'
                        ],
                        [
                            "eid822",
                            "opacity",
                            125250,
                            0,
                            "linear",
                            "${charlie_parle3_bigplan}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1202",
                            "opacity",
                            73500,
                            1000,
                            "linear",
                            "${Text_ouimerciencore}",
                            '0.81',
                            '0'
                        ],
                        [
                            "eid58",
                            "opacity",
                            2600,
                            0,
                            "linear",
                            "${Textbonjour}",
                            '0',
                            '0'
                        ],
                        [
                            "eid59",
                            "opacity",
                            9070,
                            503,
                            "linear",
                            "${Textbonjour}",
                            '0',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            9572,
                            1023,
                            "linear",
                            "${Textbonjour}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1665",
                            "clip",
                            116904,
                            998,
                            "linear",
                            "${Text_jesuisBimoCopy24}",
                            [0,-1.3359375,28,0],
                            [0,545,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid1785",
                            "left",
                            153326,
                            0,
                            "linear",
                            "${Text_jesuisBimoCopy37}",
                            '248px',
                            '248px'
                        ],
                            [ "eid297", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${charlie_parle5}', [] ] ],
                            [ "eid766", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${charlie_parle3_bigplan}', [] ] ],
                            [ "eid421", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${bimo_saute}', [] ] ],
                            [ "eid614", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${charlie_parle2}', [] ] ],
                            [ "eid298", "trigger", 12000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle5}', [] ] ],
                            [ "eid299", "trigger", 12414, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${charlie_parle5}', [] ] ],
                            [ "eid300", "trigger", 25405, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle5}', [] ] ],
                            [ "eid301", "trigger", 27440, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle5}', [] ] ],
                            [ "eid615", "trigger", 36761, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle2}', [] ] ],
                            [ "eid422", "trigger", 58857, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${bimo_saute}', [] ] ],
                            [ "eid1292", "trigger", 75357, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${charlie_parle2}', [] ] ],
                            [ "eid616", "trigger", 76000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle2}', [] ] ],
                            [ "eid617", "trigger", 78500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle2}', [] ] ],
                            [ "eid741", "trigger", 88271, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle2}', [] ] ],
                            [ "eid776", "trigger", 110000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${charlie_parle3_bigplan}', [] ] ]
                    ]
                }
            },
            "charlie_parle": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '409px', '328px', '0px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'image',
                            id: 'charlie_parle6',
                            rect: ['0px', '6px', '1347px', '409px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/charlie_parle.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '328px', '409px']
                        }
                    }
                },
                timeline: {
                    duration: 1819,
                    autoPlay: true,
                    data: [
                        [
                            "eid117",
                            "top",
                            0,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '6px'
                        ],
                        [
                            "eid93",
                            "top",
                            100,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid120",
                            "top",
                            208,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid121",
                            "top",
                            308,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid124",
                            "top",
                            411,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid125",
                            "top",
                            511,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid132",
                            "top",
                            711,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid133",
                            "top",
                            811,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid134",
                            "top",
                            919,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid135",
                            "top",
                            1019,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid136",
                            "top",
                            1122,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid137",
                            "top",
                            1222,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid144",
                            "top",
                            1308,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid145",
                            "top",
                            1408,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid146",
                            "top",
                            1516,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid147",
                            "top",
                            1616,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid148",
                            "top",
                            1719,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '7px',
                            '6px'
                        ],
                        [
                            "eid149",
                            "top",
                            1819,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '6px',
                            '7px'
                        ],
                        [
                            "eid80",
                            "left",
                            0,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid83",
                            "left",
                            100,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid118",
                            "left",
                            208,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid119",
                            "left",
                            308,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid122",
                            "left",
                            411,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid123",
                            "left",
                            511,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid126",
                            "left",
                            711,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid127",
                            "left",
                            811,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid128",
                            "left",
                            919,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid129",
                            "left",
                            1019,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid130",
                            "left",
                            1122,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid131",
                            "left",
                            1222,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid138",
                            "left",
                            1308,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid139",
                            "left",
                            1408,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid140",
                            "left",
                            1516,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid141",
                            "left",
                            1616,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ],
                        [
                            "eid142",
                            "left",
                            1719,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '-335px',
                            '0px'
                        ],
                        [
                            "eid143",
                            "left",
                            1819,
                            0,
                            "linear",
                            "${charlie_parle6}",
                            '0px',
                            '-335px'
                        ]
                    ]
                }
            },
            "bimo_saute": {
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
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            rect: ['0px', '247px', '125px', '0px', 'auto', 'auto'],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            rect: ['1px', '79px', '123px', '173px', 'auto', 'auto'],
                            id: 'bimo_face2',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/bimo_face.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '125px', '247px']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: true,
                    data: [
                        [
                            "eid365",
                            "top",
                            0,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '79px',
                            '0px'
                        ],
                        [
                            "eid366",
                            "top",
                            292,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid367",
                            "top",
                            583,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '74px',
                            '0px'
                        ],
                        [
                            "eid368",
                            "top",
                            875,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid369",
                            "top",
                            1167,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '74px',
                            '0px'
                        ],
                        [
                            "eid375",
                            "top",
                            1458,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid376",
                            "top",
                            1750,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '79px',
                            '0px'
                        ],
                        [
                            "eid377",
                            "top",
                            2042,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid378",
                            "top",
                            2333,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '74px',
                            '0px'
                        ],
                        [
                            "eid379",
                            "top",
                            2625,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '0px',
                            '74px'
                        ],
                        [
                            "eid380",
                            "top",
                            2917,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '74px',
                            '0px'
                        ],
                        [
                            "eid381",
                            "top",
                            3208,
                            292,
                            "linear",
                            "${bimo_face2}",
                            '0px',
                            '74px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("scene_reanimation2_edgeActions.js");
})("EDGE-51998952");
