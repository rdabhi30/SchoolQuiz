// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 5  સ્થળ અને સમય",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "7",
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
            "q": "પૃથ્વીના ગોળા પર રહેલી કાલ્પનિક આડી રેખાઓને શું કહે છે ?",
            "a": [
                {
                    "option": "રેખાંશવૃત્તો",
                    "correct": false
                },
                {
                    "option": "અર્ધવૃત્તો",
                    "correct": false
                },
                {
                    "option": "અક્ષાંશવૃત્તો",
                    "correct": true
                },
                {
                    "option": "પૂર્ણવૃત્તો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અક્ષાંશવૃત્તો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "પૃથ્વીના ગોળા પર રહેલી કાલ્પનિક ઉભી રેખાઓને શું કહે છે ?",
            "a": [
                {
                    "option": "રેખાંશવૃત્તો",
                    "correct": true
                },
                {
                    "option": "અર્ધવૃત્તો",
                    "correct": false
                },
                {
                    "option": "અક્ષાંશવૃત્તો",
                    "correct": false
                },
                {
                    "option": "પૂર્ણવૃત્તો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રેખાંશવૃત્તો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ધ્રુવનો તારો કઈ દિશામાં હોય છે ?",
            "a": [
                {
                    "option": "દક્ષિણ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર",
                    "correct": true
                },
                {
                    "option": "પશ્ચિમ",
                    "correct": false
                },
                {
                    "option": "પૂર્વ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "કયા રેખાંશવૃત્તને 'આંતરરાષ્ટ્રીય દિનાંતર રેખા' કહે છે ?",
            "a": [
                {
                    "option": "82.5<sup>0</sup>ને",
                    "correct": false
                },
                {
                    "option": "85<sup>0</sup>ને",
                    "correct": false
                },
                {
                    "option": "360<sup>0</sup>ને",
                    "correct": false
                },
                {
                    "option": "180<sup>0</sup>ને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 180<sup>0</sup>ને</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "પૃથ્વીનું સૌથી મોટું ઘડિયાળ કયું છે ?",
            "a": [
                {
                    "option": "તારા",
                    "correct": false
                },
                {
                    "option": "નક્ષત્રો",
                    "correct": false
                },
                {
                    "option": "સૂર્ય",
                    "correct": true
                },
                {
                    "option": "ચંદ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂર્ય</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "0<sup>0</sup> અક્ષાંશવૃત્ત એટલે કયું વૃત્ત ?",
            "a": [
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિષુવવૃત્ત</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "0<sup>0</sup> રેખાંશવૃત્તને શું કહે છે ?",
            "a": [
                {
                    "option": "આંતરરાષ્ટ્રીય દિનાંતર રેખા",
                    "correct": false
                },
                {
                    "option": "પ્રમાણમાપ",
                    "correct": false
                },
                {
                    "option": "ગ્રિનિચ રેખા",
                    "correct": true
                },
                {
                    "option": "પ્રમાણસમય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રિનિચ રેખા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "કુલ રેખાંશવૃત્તો કેટલા છે ?",
            "a": [
                {
                    "option": "180",
                    "correct": false
                },
                {
                    "option": "200",
                    "correct": false
                },
                {
                    "option": "300",
                    "correct": false
                },
                {
                    "option": "360",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 360</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "એક રેખાંશવૃત્તને સૂર્યની સામેથી પસાર થતાં કેટલો સમય લાગે છે ?",
            "a": [
                {
                    "option": "8 મિનિટ",
                    "correct": false
                },
                {
                    "option": "4 મિનિટ",
                    "correct": true
                },
                {
                    "option": "16 મિનિટ",
                    "correct": false
                },
                {
                    "option": "12 મિનિટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4 મિનિટ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આંતરરાષ્ટ્રીય દિનાંતર રેખા કેવી છે ?",
            "a": [
                {
                    "option": "સીધી",
                    "correct": false
                },
                {
                    "option": "લાંબી",
                    "correct": false
                },
                {
                    "option": "વાંકીચૂકી",
                    "correct": true
                },
                {
                    "option": "ટૂંકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાંકીચૂકી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "જે રેખાંશવૃત્ત બરાબર સૂર્ય સામે આવે છે, તે રેખાંશ પર આવેલાં બધાં સ્થળોએ ક્યો સમય ગણાય છે ?",
            "a": [
                {
                    "option": "સવારના 6:00 વાગ્યાનો",
                    "correct": false
                },
                {
                    "option": "સાંજના 6:00 વાગ્યાનો",
                    "correct": false
                },
                {
                    "option": "બપોરના 11:00 વાગ્યાનો",
                    "correct": false
                },
                {
                    "option": "બપોરના 12:00 વાગ્યાનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બપોરના 12:00 વાગ્યાનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "આપણા દેશમાં પ્રમાણસમય રેખા કયા શહેર પરથી પસાર થાય છે ?",
            "a": [
                {
                    "option": "અમૃતસર",
                    "correct": false
                },
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "અલાહાબાદ",
                    "correct": true
                },
                {
                    "option": "દિલ્લી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અલાહાબાદ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "આપણા દેશનો પ્રમાણસમય કેટલાં પૂર્વ રેખાંશ પરથી નક્કી કરવામાં આવે છે ?",
            "a": [
                {
                    "option": "85<sup>0</sup>",
                    "correct": false
                },
                {
                    "option": "360<sup>0</sup>",
                    "correct": false
                },
                {
                    "option": "82.5<sup>0</sup>",
                    "correct": true
                },
                {
                    "option": "180<sup>0</sup>",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 82.5<sup>0</sup></p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "1 કલાકમાં કેટલા રેખાંશવૃત્તો સૂર્ય સામેથી પસાર થાય છે ?",
            "a": [
                {
                    "option": "14",
                    "correct": false
                },
                {
                    "option": "15",
                    "correct": true
                },
                {
                    "option": "16",
                    "correct": false
                },
                {
                    "option": "17",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 15</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "0<sup>0</sup> રેખાંશવૃત્તની બન્ને તરફ કેટલા અંશ સુધી રેખાંશો આવેલા છે ?",
            "a": [
                {
                    "option": "350<sup>0</sup>",
                    "correct": false
                },
                {
                    "option": "85<sup>0</sup>",
                    "correct": false
                },
                {
                    "option": "180<sup>0</sup>",
                    "correct": true
                },
                {
                    "option": "82.5<sup>0</sup>",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 180<sup>0</sup></p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "0<sup>0</sup> અક્ષાંશવૃત્તથી ઉપર તરફના ભાગને શું કહે છે ?",
            "a": [
                {
                    "option": "ઉત્તર ગોળાર્ધ",
                    "correct": true
                },
                {
                    "option": "દક્ષિણ ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "પૂર્વ ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ગોળાર્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર ગોળાર્ધ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "0<sup>0</sup> અક્ષાંશવૃત્તથી નીચે તરફના ભાગને શું કહે છે ?",
            "a": [
                {
                    "option": "પૂર્વ ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ગોળાર્ધ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ ગોળાર્ધ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "23.5<sup>0</sup> ઉત્તર અક્ષાંશવૃત્તની કાલ્પનિક રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": true
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્કવૃત્ત</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": " 23.5<sup>0</sup> દક્ષિણ અક્ષાંશવૃત્તની કાલ્પનિક રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": true
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકરવૃત્ત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "કયા દેશમાં ગ્રિનિચ નામનું શહેર આવેલું છે ?",
            "a": [
                {
                    "option": "અમેરિકા",
                    "correct": false
                },
                {
                    "option": "ભારત",
                    "correct": false
                },
                {
                    "option": "ફ્રાંસ",
                    "correct": false
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇંગ્લૅન્ડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
        },
        { // Question 21
            "q": "કઈ કાલ્પનિક રેખા પૃથ્વીના ઊભા બે સરખા ભાગ કરે છે ?",
            "a": [
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ગ્રિનિચ રેખા",
                    "correct": true
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "આંતરરાષ્ટ્રીય દિનાંતર રેખા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રિનિચ રેખા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કઈ કાલ્પનિક રેખા પૃથ્વીના આડા બે સરખા ભાગ કરે છે ?",
            "a": [
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": true
                },
                {
                    "option": "ગ્રિનિચ રેખા",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "આંતરરાષ્ટ્રીય દિનાંતર રેખા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિષુવવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
        },
        { // Question 23
            "q": "બે અક્ષાંશવૃત્તો વચ્ચે વાસ્તવિક જમીનસપાટી ઉપર આશરે કેટલા કિલોમીટરનું અંતર હોય છે ?",
            "a": [
                {
                    "option": "112 કિલોમીટરનું",
                    "correct": false
                },
                {
                    "option": "111 કિલોમીટરનું",
                    "correct": true
                },
                {
                    "option": "110 કિલોમીટરનું",
                    "correct": false
                },
                {
                    "option": "222 કિલોમીટરનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 111 કિલોમીટરનું</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "બે રેખાંશવૃત્તો વચ્ચેનું અંતર ફક્ત વિષુવવૃત્ત ઉપર આશરે કેટલા કિલોમીટરનું હોય છે ?",
            "a": [
                {
                    "option": "112 કિલોમીટરનું",
                    "correct": false
                },
                {
                    "option": "111 કિલોમીટરનું",
                    "correct": true
                },
                {
                    "option": "110 કિલોમીટરનું",
                    "correct": false
                },
                {
                    "option": "222 કિલોમીટરનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 111 કિલોમીટરનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 25
            "q": "પૃથ્વી પરનાં સ્થળોનો સમય શાની મદદથી નક્કી કરવામાં આવે છે ?",
            "a": [
                {
                    "option": "રેખાંશવૃત્તો",
                    "correct": true
                },
                {
                    "option": "અર્ધવૃત્તો",
                    "correct": false
                },
                {
                    "option": "અક્ષાંશવૃત્તો",
                    "correct": false
                },
                {
                    "option": "પૂર્ણવૃત્તો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રેખાંશવૃત્તો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 26
            "q": "આંતરાષ્ટ્રીય દિનાંતર રેખા ક્યા મહાસાગર પરથી પસાર થાય છે ?",
            "a": [
                {
                    "option": "પૅસિફિક",
                    "correct": true
                },
                {
                    "option": "ઍટલૅન્ટિક",
                    "correct": false
                },
                {
                    "option": "આર્કટિક",
                    "correct": false
                },
                {
                    "option": "હિન્દ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૅસિફિક</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 27
            "q": "મધ્યાહન પ્રમાણે નક્કી કરેલા સમયને ક્યો સમય કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "પ્રમાણ સમય",
                    "correct": false
                },
                {
                    "option": "સ્થાનિક સમય",
                    "correct": true
                },
                {
                    "option": "સમાંતર સમય",
                    "correct": false
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્થાનિક સમય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here 
    ]
};
