// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 3  નાગરિકતા",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "6",
        "semester": "1",
        "main": "",
        "results": "<h5>વધુ વાંચન કરો</h5>",
        "level1": "(ગ્રેડ A) ખૂબ સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> પણ મહેનત જરૂર કરવી.</p>",
        "level2": "(ગ્રેડ B) સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> મહેનત કરવાની જરૂર છે.</p>",
        "level3": "(ગ્રેડ C) સાધારણ પરિણામ <p><strong class='inst'>સૂચન:</strong> ઘરે મહેનત કરવાની જરૂર છે.</p>",
        "level4": "(ગ્રેડ D) નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપો.</span></p>",
        "level5": "(ગ્રેડ E) ખૂબ જ નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપવાની ખૂબ જ જરૂર છે.</p>" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "આપણા સંપર્કમાં આવનારી પ્રથમ સામાજિક સંસ્થા કઈ છે ?",
            "a": [
                {
                    "option": "શાળા",
                    "correct": false
                },
                {
                    "option": "પડોશ",
                    "correct": false
                },
                {
                    "option": "કુટુંબ",
                    "correct": true
                },
                {
                    "option": "ગામ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુટુંબ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "કુટુંબમાંથી આપણને શું મળે છે ?",
            "a": [
                {
                    "option": "સંસ્કાર",
                    "correct": true
                },
                {
                    "option": "ઓળખપત્ર",
                    "correct": false
                },
                {
                    "option": "અધિકારો",
                    "correct": false
                },
                {
                    "option": "નાગરિકતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંસ્કાર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ભારતના નાગરિકને કેટલાં વર્ષની ઉંમરે મતદાન કરવાનો અધિકાર મળે છે ?",
            "a": [
                {
                    "option": "15 કે તેથી વધુ વર્ષ",
                    "correct": false
                },
                {
                    "option": "16 કે તેથી વધુ વર્ષ ",
                    "correct": false
                },
                {
                    "option": "17 કે તેથી વધુ વર્ષ ",
                    "correct": false
                },
                {
                    "option": "18 કે તેથી વધુ વર્ષ ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 18 કે તેથી વધુ વર્ષ </p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ભારતનું નાગરિકતા મેળવવાની કેટલી રીતો છે ?",
            "a": [
                {
                    "option": "એક",
                    "correct": false
                },
                {
                    "option": "બે",
                    "correct": true
                },
                {
                    "option": "ત્રણ",
                    "correct": false
                },
                {
                    "option": "ચાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "સમાજનું નાનામાં નાનું એકમ કયું છે ?",
            "a": [
                {
                    "option": "શાળા",
                    "correct": false
                },
                {
                    "option": "ગામ",
                    "correct": false
                },
                {
                    "option": "તાલુકો",
                    "correct": false
                },
                {
                    "option": "કુટુંબ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુટુંબ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "સમાજ અંગેનું સૌથી પહેલું જ્ઞાન આપણને કઈ સંસ્થામાંથી મળે છે ?",
            "a": [
                {
                    "option": "ગામ",
                    "correct": false
                },
                {
                    "option": "શાળા",
                    "correct": false
                },
                {
                    "option": "કુટુંબ",
                    "correct": true
                },
                {
                    "option": "કૉલેજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુટુંબ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કુટુંબ આપણામાં કઈ ભાવના જન્માવે છે ?",
            "a": [
                {
                    "option": "ઝઘડવાની",
                    "correct": false
                },
                {
                    "option": "રમવાની",
                    "correct": false
                },
                {
                    "option": "અસહકારની",
                    "correct": false
                },
                {
                    "option": "સહકારની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સહકારની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "આમાંથી ક્યું  મનુષ્યના વ્યક્તિત્ત્વ નિર્માણ માટે ચડતા ક્રમમાં સાચું છે ?",
            "a": [
                {
                    "option": "કુટુંબ-શાળા-પાડોશ",
                    "correct": false
                },
                {
                    "option": "પાડોશ-કુટુંબ-શાળા",
                    "correct": false
                },
                {
                    "option": "શાળા-પાડોશ-કુટુંબ",
                    "correct": false
                },
                {
                    "option": "કુટુંબ-પાડોશ-શાળા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુટુંબ-પાડોશ-શાળા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "નાગરિકત્વની બાબતમાં આધારભૂત દસ્તાવેજ કયો છે ?",
            "a": [
                {
                    "option": "ચૂંટણી ઓળખપત્ર",
                    "correct": true
                },
                {
                    "option": "શાળાનું ઓળખપત્ર",
                    "correct": false
                },
                {
                    "option": "કૉલેજ ઓળખપત્ર",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચૂંટણી ઓળખપત્ર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ભારતમાં પરદેશીઓને કયો હક મળતો નથી ?",
            "a": [
                {
                    "option": "ઉચ્ચ અભ્યાસ કરવાનો",
                    "correct": false
                },
                {
                    "option": "પ્રવાસ કરવાનો",
                    "correct": false
                },
                {
                    "option": "ચૂંટણીમાં ઊભા રહેવાનો",
                    "correct": true
                },
                {
                    "option": "કારખાનામાં કામ કરવાનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચૂંટણીમાં ઊભા રહેવાનો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ભારતીય નાગરિક કેવા પ્રકારનો ગુનો કરે તો તે ભારતનું નાગરિકત્વ ગુમાવે છે ?",
            "a": [
                {
                    "option": "દેશદ્રોહનો",
                    "correct": true
                },
                {
                    "option": "ચોરીનો",
                    "correct": false
                },
                {
                    "option": "ખૂનનો",
                    "correct": false
                },
                {
                    "option": "છેતરપિંડીનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દેશદ્રોહનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પરદેશી વ્યક્તિએ ભારતનું નાગરિકત્વ મેળવવા માટે કેટલા વર્ષ કરતા વધુ સમય ભારતમાં વસવાટ કર્યો હોવો જોઈએ ?",
            "a": [
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": true
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "7",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "કેવો નાગરિક દેશને હાનિ થાય એવું કોઈ કામ કરતો નથી ?",
            "a": [
                {
                    "option": "ખરાબ",
                    "correct": false
                },
                {
                    "option": "આતંકવાદી",
                    "correct": false
                },
                {
                    "option": "આદર્શ",
                    "correct": true
                },
                {
                    "option": "ત્રણેય ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આદર્શ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "જે દેશમાં વસતો હોય અને તે દેશના હકો ભોગવતો હોય તેમજ ફરજો અદા કરતો હોય તો તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "પરદેશનો નાગરિક",
                    "correct": false
                },
                {
                    "option": "તે દેશનો નાગરિક",
                    "correct": true
                },
                {
                    "option": "ગામનો નાગરિક",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તે દેશનો નાગરિક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },

        { // Question 15
            "q": "તમારી નાગરિકતા કઈ છે ?",
            "a": [
                {
                    "option": "અમેરિકન",
                    "correct": false
                },
                {
                    "option": "ભારતીય",
                    "correct": true
                },
                {
                    "option": "ગુજરાતી",
                    "correct": false
                },
                {
                    "option": "રશિયન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભારતીય</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 16
            "q": "ભારતના લોકોને કેટલી નાગરિકતા મળેલી છે ?",
            "a": [
                {
                    "option": "એક",
                    "correct": true
                },
                {
                    "option": "બે",
                    "correct": false
                },
                {
                    "option": "ત્રણ",
                    "correct": false
                },
                {
                    "option": "ચાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 17
            "q": "નીચેનામાંથી કોણ ભારતનો નાગરિક ગણાશે ?",
            "a": [
                {
                    "option": "અમેરિકાથી ભારત પ્રવાસે આવે",
                    "correct": false
                },
                {
                    "option": "રશિયાથી અભ્યાસ અર્થે ભારત આવે",
                    "correct": false
                },
                {
                    "option": "જાપાનના એલચી કે રાજદૂત ભારતમાં આવે ",
                    "correct": false
                },
                {
                    "option": "ચીની નાગરિક ભારતના નાગરિક સાથે લગ્ન કરે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચીની નાગરિક ભારતના નાગરિક સાથે લગ્ન કરે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here 
    ]
};
