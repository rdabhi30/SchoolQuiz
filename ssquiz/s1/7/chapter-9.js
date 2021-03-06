// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 9  રાજ્યની શાસનવ્યવસ્થા",
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
            "q": "ગુજરાતમાં વિધાનસભાની કુલ બેઠકો કેટલી છે ?",
            "a": [
                {
                    "option": "180",
                    "correct": false
                },
                {
                    "option": "160",
                    "correct": false
                },
                {
                    "option": "182",
                    "correct": true
                },
                {
                    "option": "183",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 182</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "દેશનો વહીવટ કેટલા સ્તરે થાય છે ?",
            "a": [
                {
                    "option": "બે",
                    "correct": false
                },
                {
                    "option": "ત્રણ",
                    "correct": true
                },
                {
                    "option": "ચાર",
                    "correct": false
                },
                {
                    "option": "પાંચ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્રણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "રાજ્યના મુખ્યમંત્રીની નિમણૂક કોણ કરે છે ?",
            "a": [
                {
                    "option": "રાજ્યપાલ",
                    "correct": true
                },
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "વિરોધ પક્ષ",
                    "correct": false
                },
                {
                    "option": "સ્પીકર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ </p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "રાજય સરકારનું બીજું અંગ કયું છે ?",
            "a": [
                {
                    "option": "વિધાનપરિષદ",
                    "correct": false
                },
                {
                    "option": "ધારાસભા",
                    "correct": false
                },
                {
                    "option": "ન્યાયતંત્ર",
                    "correct": false
                },
                {
                    "option": "કારોબારી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કારોબારી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "રાજ્યના બંધારણીય વડા કોણ છે ?",
            "a": [
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": true
                },
                {
                    "option": "મુખ્ય ન્યાયાધીશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "રાજ્યના વહીવટી વડા કોણ છે ?",
            "a": [
                {
                    "option": "મુખ્ય ન્યાયાધીશ",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": true
                },
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખ્યમંત્રી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "રાજ્યના નાણાકીય ખરડા માટે કોની મંજૂરી જરૂરી છે ?",
            "a": [
                {
                    "option": "મુખ્યમંત્રીની",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિની",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલની",
                    "correct": true
                },
                {
                    "option": "નાણામંત્રીની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "રાજ્યના બજેટને મંજૂરી આપવાનું કાર્ય કોણ કરે છે ?",
            "a": [
                {
                    "option": "વિધાનસભા",
                    "correct": true
                },
                {
                    "option": "નાણામંત્રી",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                },
                {
                    "option": "ગૃહમંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિધાનસભા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "મંત્રીમંડળની પુનર્રચનાનું કામ કોણ કરે છે ?",
            "a": [
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "સ્પીકર",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખ્યમંત્રી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "રાજ્યની કામગીરી માટે નીતિ ઘડવાનું કાર્ય કોણ કરે છે ?",
            "a": [
                {
                    "option": "મંત્રીમંડળ",
                    "correct": true
                },
                {
                    "option": "વિધાનસભા",
                    "correct": false
                },
                {
                    "option": "ન્યાયતંત્ર",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મંત્રીમંડળ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ભારતમાં કુલ કેટલા રાજ્યો છે ?",
            "a": [
                {
                    "option": "26",
                    "correct": false
                },
                {
                    "option": "27",
                    "correct": false
                },
                {
                    "option": "28",
                    "correct": true
                },
                {
                    "option": "30",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 28</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "સંઘયાદીમાં કુલ કેટલા વિષયોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "47",
                    "correct": false
                },
                {
                    "option": "97",
                    "correct": true
                },
                {
                    "option": "66",
                    "correct": false
                },
                {
                    "option": "77",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 97</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "રાજ્યયાદીમાં કુલ કેટલા વિષયોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "47",
                    "correct": false
                },
                {
                    "option": "97",
                    "correct": false
                },
                {
                    "option": "66",
                    "correct": true
                },
                {
                    "option": "77",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 66</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "સંયુક્તયાદીમાં કુલ કેટલા વિષયોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "77",
                    "correct": false
                },
                {
                    "option": "97",
                    "correct": false
                },
                {
                    "option": "47",
                    "correct": true
                },
                {
                    "option": "66",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 47</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "રાજ્યપાલની નિમણૂંક કોણ કરે છે ?",
            "a": [
                {
                    "option": "મુખ્યમંત્રી મંત્રીમંડળની સલાહથી",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિ વડાપ્રધાનની સલાહથી",
                    "correct": true
                },
                {
                    "option": "રાષ્ટ્રપતિ નાણામંત્રીની સલાહથી",
                    "correct": false
                },
                {
                    "option": "મુખ્ય ન્યાયમૂર્તિ વડાપ્રધાનની સલાહથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાષ્ટ્રપતિ વડાપ્રધાનની સલાહથી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "વિધાનસભાના સભ્યને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "સંસદસભ્ય",
                    "correct": false
                },
                {
                    "option": "મૅયર",
                    "correct": false
                },
                {
                    "option": "કર્પોરેટર",
                    "correct": false
                },
                {
                    "option": "ધારાસભ્ય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધારાસભ્ય</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ગુજરાત રાજ્યનું વિધાનસભા ભવન ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "ગાંધીનગર",
                    "correct": true
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાંધીનગર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "રાજ્યમાં શાસન કરતા પક્ષ કે પક્ષોને શું કહે છે ?",
            "a": [
                {
                    "option": "વિરોધપક્ષ",
                    "correct": false
                },
                {
                    "option": "સમાધાનકારી પક્ષ",
                    "correct": false
                },
                {
                    "option": "શાસકપક્ષ",
                    "correct": true
                },
                {
                    "option": "રાજકીયપક્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાસકપક્ષ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "વિધાનસભા બેઠકનું સંચાલન કોણ કરે છે ?",
            "a": [
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                },
                {
                    "option": "કાયદામંત્રી",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": false
                },
                {
                    "option": "અધ્યક્ષ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અધ્યક્ષ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "આમાંથી કયા વિષયનો સમાવેશ રાજ્યયાદીમાં કરવામાં આવ્યો નથી ?",
            "a": [
                {
                    "option": "શિક્ષણ",
                    "correct": false
                },
                {
                    "option": "આરોગ્ય",
                    "correct": false
                },
                {
                    "option": "જંગલો",
                    "correct": false
                },
                {
                    "option": "ઉદ્યોગો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉદ્યોગો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "એમ.એલ.એ.ની ચુંટણી કોના દ્વારા થાય છે ?",
            "a": [
                {
                    "option": "લોકો દ્વારા",
                    "correct": true
                },
                {
                    "option": "નેતાઓ દ્વારા",
                    "correct": false
                },
                {
                    "option": "પ્રતિનિધિઓ દ્વારા",
                    "correct": false
                },
                {
                    "option": "ગુંડાઓ દ્વારા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોકો દ્વારા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "વડી અદાલતના તાબા હેઠળની અદાલતોના ન્યાયાધિશોની નિમણૂક કોણ કરે છે ?",
            "a": [
                {
                    "option": "વડાપ્રધાન",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 23
            "q": "રાજ્યમાં શાસન ન કરતા પક્ષ કે પક્ષોને શું કહે છે ?",
            "a": [
                {
                    "option": "વિરોધપક્ષ",
                    "correct": true
                },
                {
                    "option": "સમાધાનકારી પક્ષ",
                    "correct": false
                },
                {
                    "option": "શાસકપક્ષ",
                    "correct": false
                },
                {
                    "option": "રાજકીયપક્ષ",
                    "correct": false
                } // no comma here
],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિરોધપક્ષ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
		 } // no comma here
    ]
};
