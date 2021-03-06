// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 3  સરકાર",
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
            "q": "આખા રાજ્યનો વહીવટ કરતી સરકારને શું કહેવાય ?",
            "a": [
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": true
                },
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": false
                },
                {
                    "option": "કેન્દ્ર સરકાર",
                    "correct": false
                },
                {
                    "option": "મહાનગરપાલિકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્ય સરકાર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "સરકારના અંગો કેટલા છે ?",
            "a": [
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": true
                },
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "1",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આર્થિક અને સામાજિક સમસ્યાઓનો ઉકેલ કોણ લાવે છે ?",
            "a": [
                {
                    "option": "સરકાર",
                    "correct": true
                },
                {
                    "option": "મહિલામંડળો",
                    "correct": false
                },
                {
                    "option": "અર્થશાસ્ત્રીઓ",
                    "correct": false
                },
                {
                    "option": "વડા પ્રધાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરકાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "સરકારનું કયું અંગ ન્યાયવિષયક કામ કરે છે ?",
            "a": [
                {
                    "option": "ધારાસભા",
                    "correct": false
                },
                {
                    "option": "કારોબારી",
                    "correct": false
                },
                {
                    "option": "મંત્રીમંડળ",
                    "correct": false
                },
                {
                    "option": "ન્યાયતંત્ર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ન્યાયતંત્ર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "સરકારનું કયું અંગ કાયદા ઘડવાનું કામ કરે છે ?",
            "a": [
                {
                    "option": "ન્યાયતંત્ર",
                    "correct": false
                },
                {
                    "option": "ધારાસભા",
                    "correct": true
                },
                {
                    "option": "કારોબારી",
                    "correct": false
                },
                {
                    "option": "પોલીસતંત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધારાસભા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "સરકારનું કયું અંગ કાયદાનો અમલ કરાવવાનું કામ કરે છે ?`",
            "a": [
                {
                    "option": "કારોબારી",
                    "correct": true
                },
                {
                    "option": "ન્યાયતંત્ર",
                    "correct": false
                },
                {
                    "option": "ધારાસભા",
                    "correct": false
                },
                {
                    "option": "પોલીસતંત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કારોબારી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "રાજ્ય સરકારનાં ત્રણેય અંગોમાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "વડાપ્રધાનનો",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલનો",
                    "correct": true
                },
                {
                    "option": "મુખ્યમંત્રીનો",
                    "correct": false
                },
                {
                    "option": "મુખ્ય ન્યાયમૂર્તિનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "રાજ્યની ધારાસભાનું નીચલું ગૃહ કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "વિધાનસભા",
                    "correct": true
                },
                {
                    "option": "લોકસભા",
                    "correct": false
                },
                {
                    "option": "રાજ્યસભા",
                    "correct": false
                },
                {
                    "option": "વિધાનપરિષદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિધાનસભા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "રાજ્યની ધારાસભાનું ઉપલું ગૃહ કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "રાજ્યસભા",
                    "correct": false
                },
                {
                    "option": "વિધાનસભા",
                    "correct": false
                },
                {
                    "option": "લોકસભા",
                    "correct": false
                },
                {
                    "option": "વિધાનપરિષદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિધાનપરિષદ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "રાજ્યની કારોબારીમાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "રાજ્યપાલ તથા મુખ્યમંત્રી અને મંત્રીમંડળ",
                    "correct": true
                },
                {
                    "option": "રાજ્યપાલ તથા વિધાનસભા-વિધાનપરિષદ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ તથા વડી અદાલત",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિ તથા પ્રધાનમંત્રી અને પ્રધાનમંડળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ તથા મુખ્યમંત્રી અને મંત્રીમંડળ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "રાજ્યની ધારાસભામાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "લોકસભા-રાજ્યસભા",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ તથા વિધાનસભા-વિધાનપરિષદ",
                    "correct": true
                },
                {
                    "option": "પ્રધાનમંત્રી અને પ્રધાનમંડળ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ તથા વડી અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ તથા વિધાનસભા-વિધાનપરિષદ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "રાજ્યના ન્યાયતંત્રમાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ તથા વિધાનસભા-વિધાનપરિષદ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ તથા વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "રાજ્યપાલ તથા મુખ્યમંત્રી અને મંત્રીમંડળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ તથા વડી અદાલત</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "આખા ભારતનો વહીવટ કરતી સરકારને શું કહે છે ?",
            "a": [
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": false
                },
                {
                    "option": "કેન્દ્ર સરકાર",
                    "correct": true
                },
                {
                    "option": "મહાનગરપાલિકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેન્દ્ર સરકાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "દરેક દેશને જુદા જુદા નિર્ણયો લેવા માટે તેમજ પ્રજાનાં કામો કરવા માટે કોની જરૂર પડે છે ?",
            "a": [
                {
                    "option": "નાગરિક સંગઠનોની",
                    "correct": false
                },
                {
                    "option": "દેશનેતાની",
                    "correct": false
                },
                {
                    "option": "સરકારની",
                    "correct": true
                },
                {
                    "option": "ન્યાયાધીશની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરકારની</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "આપણે ત્યાં મુખ્ય કેટલી સરકાર છે ?",
            "a": [
                {
                    "option": "1",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": true
                },
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "સરકાર એક શું છે ?",
            "a": [
                {
                    "option": "સંગઠન ",
                    "correct": false
                },
                {
                    "option": "સંઘ",
                    "correct": false
                },
                {
                    "option": "સંચાલક મંડળ",
                    "correct": true
                },
                {
                    "option": "સેનાપતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંચાલક મંડળ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "પ્રાથમિક શાળામાં શિક્ષકોની નિમણૂક કોણ કરે ?",
            "a": [
                {
                    "option": "ગ્રામ પંચાયત",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": true
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા પંચાયત</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ગામમાં સ્ટ્રીટ લાઈટની વ્યવસ્થા કોણ કરે ?",
            "a": [
                {
                    "option": "ગ્રામ પંચાયત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયત",
                    "correct": false
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રામ પંચાયત</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "બે શહેરો વચ્ચે નવી ટ્રેન શરૂ કોણ કરે ?",
            "a": [
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયત",
                    "correct": false
                },
                {
                    "option": "કેન્દ્ર સરકાર",
                    "correct": true
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેન્દ્ર સરકાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "બે ગામ વચ્ચે રસ્તા કોણ બનાવે ?",
            "a": [
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયત",
                    "correct": true
                },
                {
                    "option": "ગ્રામ પંચાયત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાલુકા પંચાયત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "દરેક સ્થાનિક સ્વરાજ્યની સંસ્થાને અનુદાન કોણ આપે ?",
            "a": [
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": true
                },
                {
                    "option": "તાલુકા પંચાયત",
                    "correct": false
                },
                {
                    "option": "ગ્રામ પંચાયત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્ય સરકાર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 22
            "q": "આપણા દેશમાં સરકાર કેટલા સ્તરે કામ કરે છે ?",
            "a": [
                {
                    "option": "3",
                    "correct": true
                },
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "1",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};
