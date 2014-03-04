// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 10  જાહેર મિલકત",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "7",
        "semester": "2",
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
            "q": "જે સામગ્રીનો કે સ્થળનો યોગ્ય ઉપયોગ બધા કરી શકે તે કઈ મિલકત કહેવાય ?",
            "a": [
                {
                    "option": "વ્યક્તિગત",
                    "correct": false
                },
                {
                    "option": "પેઢીની",
                    "correct": false
                },
                {
                    "option": "જાહેર",
                    "correct": true
                },
                {
                    "option": "ભાગીદારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાહેર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "સૌની સંપત્તિનો યોગ્ય રીતે ઉપયોગ કરવો એ આપણા સૌની શું કહે છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": false
                },
                {
                    "option": "ગુનો",
                    "correct": false
                },
                {
                    "option": "ઝઘડો",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફરજ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ઘરમાં હોય તે સંપત્તિ કઈ મિલકત કહેવાય ?",
            "a": [
                {
                    "option": "જાહેર",
                    "correct": false
                },
                {
                    "option": "વ્યક્તિગત",
                    "correct": true
                },
                {
                    "option": "ભાગીદારી",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વ્યક્તિગત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ઘર આગળ ઉછરેલું વૃક્ષ કઈ મિલકત કહેવાય ?",
            "a": [
                {
                    "option": "વ્યક્તિગત",
                    "correct": false
                },
                {
                    "option": "જાહેર",
                    "correct": true
                },
                {
                    "option": "પેઢીની",
                    "correct": false
                },
                {
                    "option": "ભાગીદારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાહેર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "જાહેર સંપત્તિને નુકસાન કરવાથી શું બને છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "ગુનો",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુનો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "આપણા દેશનાં સ્મારકો આપણું શું છે ?",
            "a": [
                {
                    "option": "હાનિ",
                    "correct": false
                },
                {
                    "option": "અધોગતિ",
                    "correct": false
                },
                {
                    "option": "ગૌરવ",
                    "correct": true
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગૌરવ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "જાહેર સ્મારકોમાં આપણા શું વપરાય છે ?",
            "a": [
                {
                    "option": "સિમેન્ટ",
                    "correct": false
                },
                {
                    "option": "નાણાં",
                    "correct": true
                },
                {
                    "option": "સોના",
                    "correct": false
                },
                {
                    "option": "ચાંદી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાણાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "જાહેર સંપત્તિ અને પર્યાવરણનું રક્ષણ કરવું એ આપણી શું છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": false
                },
                {
                    "option": "ગુનો",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": true
                },
                {
                    "option": "ઝઘડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફરજ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કોની મિલકત આપણા સૌની મિલકત છે ?",
            "a": [
                {
                    "option": "મારી",
                    "correct": false
                },
                {
                    "option": "તમારી",
                    "correct": false
                },
                {
                    "option": "સરકારની",
                    "correct": true
                },
                {
                    "option": "મહેશની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સરકારની</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી કઈ જાહેર મિલકત નથી ?",
            "a": [
                {
                    "option": "શાળા",
                    "correct": false
                },
                {
                    "option": "પ્રાથમિક આરોગ્ય કેન્દ્ર",
                    "correct": false
                },
                {
                    "option": "બસ સ્ટૅન્ડ",
                    "correct": false
                },
                {
                    "option": "મહેશનું ઘર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહેશનું ઘર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 11
            "q": "સરકારની મિલકત એ કોની મિલકત છે ?",
            "a": [
                {
                    "option": "આપણા સૌની",
                    "correct": true
                },
                {
                    "option": "મુખ્યમંત્રીની",
                    "correct": false
                },
                {
                    "option": "વડાપ્રધાનની",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપણા સૌની</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પોતાની માંગણી મનાવવા બસ કે રેલવેને નુકસાન કરવું એ શું છે ?",
            "a": [
                {
                    "option": "સારૂં કામ",
                    "correct": false
                },
                {
                    "option": "ગુનો",
                    "correct": true
                },
                {
                    "option": "હકનું કામ",
                    "correct": false
                },
                {
                    "option": "સહકારનું કામ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "જાહેર રસ્તા પરનાં વૃક્ષો કોની સંપત્તિ છે ?",
            "a": [
                {
                    "option": "સૌની",
                    "correct": true
                },
                {
                    "option": "વ્યક્તિગત",
                    "correct": false
                },
                {
                    "option": "ભાગીદારી",
                    "correct": false
                },
                {
                    "option": "પેઠીની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૌની</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "આપણે સહિયારી મિલકત વાપરવાની સાથે આ મિલકતનું શું કરવું જોઇએ ?",
            "a": [
                {
                    "option": "સર્વનાશ",
                    "correct": false
                },
                {
                    "option": "જમણ",
                    "correct": false
                },
                {
                    "option": "વિનાશ",
                    "correct": false
                },
                {
                    "option": "જતન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જતન</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "નીચેનામાંથી કઈ જાહેર મિલકત છે ?",
            "a": [
                {
                    "option": "તમારા ઘરનું ટીવી",
                    "correct": false
                },
                {
                    "option": "મહેશનું મકાન",
                    "correct": false
                },
                {
                    "option": "પાણી",
                    "correct": true
                },
                {
                    "option": "તમારા ઘરનું ફ્રિજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here
    ]
};
