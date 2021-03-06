// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 2  ગુજરાતની આબોહવા અને કુદરતી સંસાધનો",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "6",
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
            "q": "ગુજરાતનો મોટાભાગનો વિસ્તાર ક્યા કટિબંધમાં છે ?",
            "a": [
                {
                    "option": "શીત ",
                    "correct": false
                },
                {
                    "option": "સમશીતોષ્ણ ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ",
                    "correct": true
                },
                {
                    "option": "મોસમી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઉષ્ણ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ગુજરાતમાં કઈ ઋતુમાં માવઠું પડે છે ?",
            "a": [
                {
                    "option": "શિયાળામાં",
                    "correct": true
                },
                {
                    "option": "ચોમાસામાં",
                    "correct": false
                },
                {
                    "option": "ઉનાળામાં",
                    "correct": false
                },
                {
                    "option": "પાછા ફરતા મોસમી પવનોની ઋતુમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શિયાળામાં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ગુજરાતમાં મે મહિના પછી ક્યા પવનો વાય છે ?",
            "a": [
                {
                    "option": "ઈશાનના પવનો",
                    "correct": false
                },
                {
                    "option": "નૈઋત્યના પવનો",
                    "correct": true
                },
                {
                    "option": "વાયવ્યના પવનો",
                    "correct": false
                },
                {
                    "option": "અગ્નિના પવનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નૈઋત્યના પવનો</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ગુજરાતમાં ક્યા મહિનામાં સૌથી વધુ ઠંડી પડે છે ?",
            "a": [
                {
                    "option": "ડિસેમ્બર",
                    "correct": false
                },
                {
                    "option": "ફેબ્રુઆરી",
                    "correct": false
                },
                {
                    "option": "જુલાઈ",
                    "correct": false
                },
                {
                    "option": "જાન્યુઆરી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાન્યુઆરી</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગુજરાતમાં ક્યા મહિનામાં સૌથી વધુ ગરમી પડે છે ?",
            "a": [
                {
                    "option": "ઑગસ્ટ",
                    "correct": false
                },
                {
                    "option": "મે",
                    "correct": true
                },
                {
                    "option": "માર્ચ",
                    "correct": false
                },
                {
                    "option": "જુલાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "નીચેનામાંથી કઈ નદી અંત:સ્થ નદી નથી ?",
            "a": [
                {
                    "option": "બનાસ",
                    "correct": false
                },
                {
                    "option": "સરસ્વતી",
                    "correct": false
                },
                {
                    "option": "રૂપેણ",
                    "correct": false
                },
                {
                    "option": "મચ્છુ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મચ્છુ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ગુજરાતની સૌથી મોટી નદી કઈ છે ?",
            "a": [
                {
                    "option": "મહી",
                    "correct": false
                },
                {
                    "option": "સાબરમતી",
                    "correct": false
                },
                {
                    "option": "તાપી",
                    "correct": false
                },
                {
                    "option": "નર્મદા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નર્મદા </p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "દાંતીવાડા યોજના કઈ નદી પર આવેલી છે ?",
            "a": [
                {
                    "option": "બનાસ",
                    "correct": true
                },
                {
                    "option": "સાબરમતી",
                    "correct": false
                },
                {
                    "option": "તાપી",
                    "correct": false
                },
                {
                    "option": "સરસ્વતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બનાસ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ગુજરાતનું સૌથી મોટું બંદર કયું છે ?",
            "a": [
                {
                    "option": "ઓખા",
                    "correct": false
                },
                {
                    "option": "મગદલ્લા",
                    "correct": false
                },
                {
                    "option": "કંડલા",
                    "correct": true
                },
                {
                    "option": "વેરાવળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કંડલા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી ક્યા જિલ્લામાં મૅન્ગ્રુવ જંગલો આવેલાં છે ?",
            "a": [
                {
                    "option": "કચ્છ",
                    "correct": true
                },
                {
                    "option": "વડોદરા",
                    "correct": false
                },
                {
                    "option": "દાહોદ",
                    "correct": false
                },
                {
                    "option": "પંચમહાલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કચ્છ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "કાગળ બનાવવા માટે ક્યા વૃક્ષનું લાકડું વપરાય છે ?",
            "a": [
                {
                    "option": "શીમળાનું",
                    "correct": false
                },
                {
                    "option": "મહુડાનું",
                    "correct": false
                },
                {
                    "option": "ખાખરાનું",
                    "correct": false
                },
                {
                    "option": "વાંસનું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વાંસનું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પિરોટન ટાપુ પાસેથી કઈ માછલી મળે છે ?",
            "a": [
                {
                    "option": "વહેલ માછલી",
                    "correct": false
                },
                {
                    "option": "શાર્ક માછલી",
                    "correct": false
                },
                {
                    "option": "સીલ માછલી",
                    "correct": false
                },
                {
                    "option": "કાલુ માછલી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાલુ માછલી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ગુજરાતનો દરિયાકિનારો આશરે કેટલા કિલોમીટર લાંબો છે ?",
            "a": [
                {
                    "option": "2100",
                    "correct": false
                },
                {
                    "option": "1600",
                    "correct": true
                },
                {
                    "option": "1200",
                    "correct": false
                },
                {
                    "option": "1480",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  1600</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "દરિયાઈ  રાષ્ટ્રીય ઉદ્યાન ક્યા જિલ્લામાં આવેલો છે ?",
            "a": [
                {
                    "option": "જૂનાગઢ",
                    "correct": false
                },
                {
                    "option": "જામનગર",
                    "correct": true
                },
                {
                    "option": "ભરૂચ",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જામનગર</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કયું ખનીજ સિમેન્ટ ઉદ્યોગમાં વપરાય છે ?",
            "a": [
                {
                    "option": "ડોલોમાઈટ",
                    "correct": false
                },
                {
                    "option": "ફ્લોરોસ્પાર",
                    "correct": false
                },
                {
                    "option": "ગ્રૅફાઈટ",
                    "correct": false
                },
                {
                    "option": "ચૂનાનો પથ્થર ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચૂનાનો પથ્થર </p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "કયું ખનીજ ધાતુઓને ઓગાળવા માટે ખૂબ જ ઉપયોગી છે ?",
            "a": [
                {
                    "option": "ચિનાઈ માટી",
                    "correct": false
                },
                {
                    "option": "ચિરોડી",
                    "correct": false
                },
                {
                    "option": "બૉક્સાઇટ",
                    "correct": false
                },
                {
                    "option": "ફ્લોરોસ્પાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફ્લોરોસ્પાર</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "કયું ખનીજ પેન્સીલ બનાવવામાં વપરાય છે ?",
            "a": [
                {
                    "option": "ગ્રૅફાઈટ",
                    "correct": true
                },
                {
                    "option": "ગ્રૅનાઇટ",
                    "correct": false
                },
                {
                    "option": "અકીક",
                    "correct": false
                },
                {
                    "option": "બૉક્સાઇટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગ્રૅફાઈટ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "એશિયાભરમાં સિંહો માટે જાણીતું અભ્યારણ્ય કયું છે ?",
            "a": [
                {
                    "option": "બરડો અભ્યારણ્ય",
                    "correct": false
                },
                {
                    "option": "સાસણગીર અભ્યારણ્ય",
                    "correct": true
                },
                {
                    "option": "ડેડીયાપાડાનું અભ્યારણ્ય",
                    "correct": false
                },
                {
                    "option": "વેરાવળનું અભ્યારણ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સાસણગીર અભ્યારણ્ય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "કડાણા યોજના કઈ નદી ઉપર આવેલી છે ?",
            "a": [
                {
                    "option": "સાબરમતી",
                    "correct": false
                },
                {
                    "option": "મહી",
                    "correct": true
                },
                {
                    "option": "તાપી",
                    "correct": false
                },
                {
                    "option": "નર્મદા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "નળ સરોવર કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "નર્મદા",
                    "correct": false
                },
                {
                    "option": "દાહોદ",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                },
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "આપણે ત્યાં મુખ્ય ઋતુઓ કેટલી છે ?",
            "a": [
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
                },
                {
                    "option": "છ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્રણ</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કોઈપણ જગ્યા કે સ્થળની હવામાં રહેલા તાપમાન અને ભેજની લાંબા ગાળાની સ્થિતિને શું કહે છે ?",
            "a": [
                {
                    "option": "વાતાવરણ",
                    "correct": false
                },
                {
                    "option": "આબોહવા",
                    "correct": true
                },
                {
                    "option": "વાતાનુકૂલન",
                    "correct": false
                },
                {
                    "option": "આબેહૂબ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આબોહવા</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "દરિયાકિનારાનાં પ્રદેશોમાં કેવી આબોહવા અનુભવાય છે ?",
            "a": [
                {
                    "option": "વિષમઘાત",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ",
                    "correct": false
                },
                {
                    "option": "સમઘાત",
                    "correct": true
                },
                {
                    "option": "શીત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમઘાત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "નીચેનામાંથી કયું દરિયાકિનારે આવેલું વિહારધામ નથી ?",
            "a": [
                {
                    "option": "તીથલ",
                    "correct": false
                },
                {
                    "option": "ઉભરાટ",
                    "correct": false
                },
                {
                    "option": "ડુમસ",
                    "correct": false
                },
                {
                    "option": "સાપુતારા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાપુતારા</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ગુજરાતમાં શિયાળો ક્યારે હોય છે ?",
            "a": [
                {
                    "option": "ડિસેમ્બરથી ફેબ્રુઆરી સુધી",
                    "correct": true
                },
                {
                    "option": "માર્ચથી મે સુધી",
                    "correct": false
                },
                {
                    "option": "જૂનથી સ્પ્ટેમ્બર સુધી",
                    "correct": false
                },
                {
                    "option": "ઓક્ટોબર-નવેમ્બરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડિસેમ્બરથી ફેબ્રુઆરી સુધી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ગુજરાતમાં ઉનાળો ક્યારે હોય છે ?",
            "a": [
                {
                    "option": "ડિસેમ્બરથી ફેબ્રુઆરી સુધી",
                    "correct": false
                },
                {
                    "option": "માર્ચથી મે સુધી",
                    "correct": true
                },
                {
                    "option": "જૂનથી સ્પ્ટેમ્બર સુધી",
                    "correct": false
                },
                {
                    "option": "ઓક્ટોબર-નવેમ્બરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માર્ચથી મે સુધી</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ગુજરાતમાં ચોમાસું ક્યારે હોય છે ?",
            "a": [
                {
                    "option": "ડિસેમ્બરથી ફેબ્રુઆરી સુધી",
                    "correct": false
                },
                {
                    "option": "માર્ચથી મે સુધી",
                    "correct": false
                },
                {
                    "option": "જૂનથી સ્પ્ટેમ્બર સુધી",
                    "correct": true
                },
                {
                    "option": "ઓક્ટોબર-નવેમ્બરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જૂનથી સ્પ્ટેમ્બર સુધી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "નીચેનામાંથી શિયાળામાં કયું ફળ ખવાય છે ?",
            "a": [
                {
                    "option": "કેરી",
                    "correct": false
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                },
                {
                    "option": "જાંબુ",
                    "correct": false
                },
                {
                    "option": "બોર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બોર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "નીચેનામાંથી ઉનાળામાં કયું ફળ ખવાય છે ?",
            "a": [
                {
                    "option": "કેરી",
                    "correct": true
                },
                {
                    "option": "જામફળ",
                    "correct": false
                },
                {
                    "option": "જાંબુ",
                    "correct": false
                },
                {
                    "option": "બોર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેરી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "નીચેનામાંથી ચોમાસામાં કયું ફળ ખવાય છે ?",
            "a": [
                {
                    "option": "કેરી",
                    "correct": false
                },
                {
                    "option": "જામફળ",
                    "correct": false
                },
                {
                    "option": "જાંબુ",
                    "correct": true
                },
                {
                    "option": "બોર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાંબુ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "આપણી પાસેની વિવિધ પ્રકારની સંપત્તિને શું કહે છે ?",
            "a": [
                {
                    "option": "સંસદ",
                    "correct": false
                },
                {
                    "option": "સંપાદન",
                    "correct": false
                },
                {
                    "option": "સંસાધન",
                    "correct": true
                },
                {
                    "option": "સંચાલન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંસાધન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "નીચેનામાંથી સંસાધનમાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "હવા",
                    "correct": false
                },
                {
                    "option": "પ્રાણીઓ",
                    "correct": false
                },
                {
                    "option": "ખનીજો",
                    "correct": false
                },
                {
                    "option": "આપેલા બધા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "નીચેનામાંથી કઈ નદી ગુજરાતની નદી નથી ?",
            "a": [
                {
                    "option": "કાવેરી",
                    "correct": true
                },
                {
                    "option": "વાત્રક",
                    "correct": false
                },
                {
                    "option": "સાબરમતી",
                    "correct": false
                },
                {
                    "option": "કીમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાવેરી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "ઉકાઈ યોજના કઈ નદી ઉપર આવેલી છે ?",
            "a": [
                {
                    "option": "સાબરમતી",
                    "correct": false
                },
                {
                    "option": "મહી",
                    "correct": false
                },
                {
                    "option": "તાપી",
                    "correct": true
                },
                {
                    "option": "નર્મદા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાપી</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "કાકરાપાર યોજના કઈ નદી ઉપર આવેલી છે ?",
            "a": [
                {
                    "option": "સાબરમતી",
                    "correct": false
                },
                {
                    "option": "મહી",
                    "correct": false
                },
                {
                    "option": "તાપી",
                    "correct": true
                },
                {
                    "option": "નર્મદા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાપી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "વણાકબોરી યોજના કઈ નદી ઉપર આવેલી છે ?",
            "a": [
                {
                    "option": "સાબરમતી",
                    "correct": false
                },
                {
                    "option": "મહી",
                    "correct": true
                },
                {
                    "option": "તાપી",
                    "correct": false
                },
                {
                    "option": "નર્મદા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહી</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "ધરોઈ યોજના કઈ નદી ઉપર આવેલી છે ?",
            "a": [
                {
                    "option": "સાબરમતી",
                    "correct": true
                },
                {
                    "option": "મહી",
                    "correct": false
                },
                {
                    "option": "બનાસ",
                    "correct": false
                },
                {
                    "option": "નર્મદા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાબરમતી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "સરદાર સરોવર યોજના કઈ નદી ઉપર આવેલી છે ?",
            "a": [
                {
                    "option": "સાબરમતી",
                    "correct": false
                },
                {
                    "option": "નર્મદા",
                    "correct": true
                },
                {
                    "option": "ભાદર",
                    "correct": false
                },
                {
                    "option": "શેત્રુંજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નર્મદા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "કચ્છ જિલ્લામાં કયું સરોવર આવેલું છે ?",
            "a": [
                {
                    "option": "આજવા સરોવર",
                    "correct": false
                },
                {
                    "option": "નળ સરોવર",
                    "correct": false
                },
                {
                    "option": "નારાયણ સરોવર",
                    "correct": true
                },
                {
                    "option": "સરદાર સરોવર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નારાયણ સરોવર</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "વડોદરા જિલ્લામાં કયું સરોવર આવેલું છે ?",
            "a": [
                {
                    "option": "આજવા સરોવર",
                    "correct": true
                },
                {
                    "option": "નળ સરોવર",
                    "correct": false
                },
                {
                    "option": "નારાયણ સરોવર",
                    "correct": false
                },
                {
                    "option": "સરદાર સરોવર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આજવા સરોવર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "ગુજરાતના દરિયાકિનારે  નાના મોટા કેટલાં બંદરો આવેલાં છે ?",
            "a": [
                {
                    "option": "40",
                    "correct": true
                },
                {
                    "option": "50",
                    "correct": false
                },
                {
                    "option": "60",
                    "correct": false
                },
                {
                    "option": "70",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 40</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "એશિયાનું સૌથી મોટું વિન્ડફાર્મ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઓખા અને બેડી ખાતે",
                    "correct": false
                },
                {
                    "option": "ઓખા અને લાંબા ખાતે",
                    "correct": true
                },
                {
                    "option": "બેડી અને લાંબા ખાતે",
                    "correct": false
                },
                {
                    "option": "ઓખા અને મુંદ્રા ખાતે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓખા અને લાંબા ખાતે</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "કયા બે બંદર વચ્ચેનાં દરિયાકાંઠે કિંમતી એવી વ્હેલ અને શાર્ક માછલી શિયાળામાં દરિયાકાંઠે આવતી હોય છે ?",
            "a": [
                {
                    "option": "ઓખા અને બેડી ",
                    "correct": false
                },
                {
                    "option": "ઓખા અને લાંબા",
                    "correct": false
                },
                {
                    "option": "ઓખા અને વેરાવળ",
                    "correct": true
                },
                {
                    "option": "વેરાવળ અને લાંબા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓખા અને વેરાવળ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "120 સેમી કે તેથી વધુ વરસાદવાળા પ્રદેશોમાં ક્યા પ્રકારના જંગલો આવેલાં છે ?",
            "a": [
                {
                    "option": "સૂકાં ઝાંખરાવાળાં જંગલો",
                    "correct": false
                },
                {
                    "option": "સૂકાં પાનખર જંગલો",
                    "correct": false
                },
                {
                    "option": "મેન્ગ્રુવના જંગલો",
                    "correct": false
                },
                {
                    "option": "ભેજવાળાં પાનખર જંગલો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભેજવાળાં પાનખર જંગલો</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "60 સેમી થી120 સેમી જેટલા મધ્યમ વરસાદવાળા પ્રદેશોમાં ક્યા પ્રકારના જંગલો આવેલાં છે ?",
            "a": [
                {
                    "option": "સૂકાં ઝાંખરાવાળાં જંગલો",
                    "correct": false
                },
                {
                    "option": "સૂકાં પાનખર જંગલો",
                    "correct": true
                },
                {
                    "option": "મેન્ગ્રુવના જંગલો",
                    "correct": false
                },
                {
                    "option": "ભેજવાળાં પાનખર જંગલો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂકાં પાનખર જંગલો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "60 સેમી કરતાં ઓછા વરસાદવાળા પ્રદેશોમાં ક્યા પ્રકારના જંગલો આવેલાં છે ?",
            "a": [
                {
                    "option": "સૂકાં ઝાંખરાવાળાં જંગલો",
                    "correct": true
                },
                {
                    "option": "સૂકાં પાનખર જંગલો",
                    "correct": false
                },
                {
                    "option": "મેન્ગ્રુવના જંગલો",
                    "correct": false
                },
                {
                    "option": "ભેજવાળાં પાનખર જંગલો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂકાં ઝાંખરાવાળાં જંગલો</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "કચ્છના પશ્ચિમ તથા દરિયાકિનારે કાદવ-કીચડવાળા પ્રદેશોમાં ક્યા પ્રકારના જંગલો આવેલાં છે ?",
            "a": [
                {
                    "option": "સૂકાં ઝાંખરાવાળાં જંગલો",
                    "correct": false
                },
                {
                    "option": "સૂકાં પાનખર જંગલો",
                    "correct": false
                },
                {
                    "option": "મેન્ગ્રુવના જંગલો",
                    "correct": true
                },
                {
                    "option": "ભેજવાળાં પાનખર જંગલો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મેન્ગ્રુવના જંગલો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "વિશ્વ પર્યાવરણ દિવસ કઈ તારીખે ઉજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "2જી માર્ચ",
                    "correct": false
                },
                {
                    "option": "5મી જુલાઈ",
                    "correct": false
                },
                {
                    "option": "17મી જૂન",
                    "correct": false
                },
                {
                    "option": "5મી જૂન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5મી જૂન</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "વિશ્વ વન દિવસ કઈ તારીખે ઉજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "2જી માર્ચ",
                    "correct": true
                },
                {
                    "option": "5મી જુલાઈ",
                    "correct": false
                },
                {
                    "option": "17મી જૂન",
                    "correct": false
                },
                {
                    "option": "5મી જૂન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2જી માર્ચ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "રણ અટકાવવા માટેનો દિવસ કઈ તારીખે ઉજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "2જી માર્ચ",
                    "correct": false
                },
                {
                    "option": "5મી જુલાઈ",
                    "correct": false
                },
                {
                    "option": "17મી જૂન",
                    "correct": true
                },
                {
                    "option": "5મી જૂન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 17મી જૂન</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "દીવાસળીની પેટી કયા વૃક્ષનાં લાકડામાંથી બનાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "મહુડાનાં",
                    "correct": false
                },
                {
                    "option": "શીમળાનાં",
                    "correct": true
                },
                {
                    "option": "વાંસનાં",
                    "correct": false
                },
                {
                    "option": "ખાખરાનાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શીમળાનાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "કયા વૃક્ષના લાકડાંને લાંબા સમય સુધી ઊધઈ લાગતી નથી ?",
            "a": [
                {
                    "option": "મહુડાનાં",
                    "correct": false
                },
                {
                    "option": "શીમળાનાં",
                    "correct": false
                },
                {
                    "option": "વાંસનાં",
                    "correct": false
                },
                {
                    "option": "સાલનાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાલનાં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "કયા વૃક્ષના લાકડાંમાંથી રેલવેના સ્લીપર અને રેલવેના ડબ્બા બનાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "મહુડાનાં",
                    "correct": false
                },
                {
                    "option": "શીમળાનાં",
                    "correct": false
                },
                {
                    "option": "વાંસનાં",
                    "correct": false
                },
                {
                    "option": "સાલનાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાલનાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "કયા વૃક્ષના પાનમાંથી પડિયાં-પતરાળાં બનાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "મહુડાનાં",
                    "correct": false
                },
                {
                    "option": "શીમળાનાં",
                    "correct": false
                },
                {
                    "option": "વાંસનાં",
                    "correct": false
                },
                {
                    "option": "ખાખરાનાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખાખરાનાં</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "કયા વૃક્ષના ફળમાંથી તેલ કાઢી તેમાંથી સાબુ બનાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "મહુડાનાં",
                    "correct": true
                },
                {
                    "option": "શીમળાનાં",
                    "correct": false
                },
                {
                    "option": "વાંસનાં",
                    "correct": false
                },
                {
                    "option": "ખાખરાનાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહુડાનાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "જ્યાં પશુપંખી નિર્ભયતાથી રહી શકે, તેમનું સંવર્ધન થઈ શકે અને જ્યાં શિકાર પર પ્રતિબંધ હોય તેવા વિસ્તારને શું કહે છે",
            "a": [
                {
                    "option": "અભ્યાસ",
                    "correct": false
                },
                {
                    "option": "અભિસંધાન",
                    "correct": false
                },
                {
                    "option": "અભ્યાન",
                    "correct": false
                },
                {
                    "option": "અભ્યારણ્ય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અભ્યારણ્ય</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "નીચેનામાંથી રાષ્ટ્રીય ઉદ્યાનનું લક્ષણ કયું છે ?",
            "a": [
                {
                    "option": "શિકાર પર પ્રતિબંધ",
                    "correct": false
                },
                {
                    "option": "પાલતું પ્રાણીના ચારણ પર પ્રતિબંધ",
                    "correct": false
                },
                {
                    "option": "સહેલાણીઓના હરવાફરવા પર પ્રતિબંધ",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 58
            "q": "નીચેનામાંથી અભ્યારણ્યનું લક્ષણ કયું છે ?",
            "a": [
                {
                    "option": "શિકાર પર પ્રતિબંધ",
                    "correct": false
                },
                {
                    "option": "પાલતું પ્રાણીના ચારણ કરી શકે",
                    "correct": false
                },
                {
                    "option": "સહેલાણીઓના હરીફરી શકે",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 59
            "q": "રીંછ માટેનું ડેડિયાપાડા અભ્યારણ્ય કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "નર્મદા જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "દાહોદ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "ડાંગ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "બનાસકાંઠા જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નર્મદા જિલ્લામાં</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "ખીજડિયા અને ગાગા પક્ષીઓ માટેનું અભ્યારણ્ય કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "નર્મદા જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "દાહોદ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "ડાંગ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જામનગર જિલ્લામાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 61
            "q": "ઘુડખર માટેનું અભ્યારણ્ય કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "નર્મદા જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "દાહોદ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "કચ્છ જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "બનાસકાંઠા જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કચ્છ જિલ્લામાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 62
            "q": "જેસોર રીંછ અભ્યારણ્ય કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "નર્મદા જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "દાહોદ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "કચ્છ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "બનાસકાંઠા જિલ્લામાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બનાસકાંઠા જિલ્લામાં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 63
            "q": "બરડીપાડાનું અભ્યારણ્ય કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "ડાંગ જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "દાહોદ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "કચ્છ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડાંગ જિલ્લામાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 64
            "q": "રતનમહાલ રીંછ અભ્યારણ્ય ક્યા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "ડાંગ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "દાહોદ જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "કચ્છ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દાહોદ જિલ્લામાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 65
            "q": "પાણિયા અભ્યારણ્ય ક્યા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "અમરેલી જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "દાહોદ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "કચ્છ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અમરેલી જિલ્લામાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 66
            "q": "રામપુરા અને હિંગોળગઢ અભ્યારણ્ય ક્યા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "અમરેલી જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "રાજકોટ જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "કચ્છ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજકોટ જિલ્લામાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 67
            "q": "થોળ ખાતે વિવિધરંગી પક્ષી અભ્યારણ્ય ક્યા જિલ્લામાં આવેલું છે ? ",
            "a": [
                {
                    "option": "અમરેલી જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "રાજકોટ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "મહેસાણા જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહેસાણા જિલ્લામાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 68
            "q": "વાંસદા રાષ્ટ્રીય ઉદ્યાન કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "ડાંગ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "દાહોદ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "વલસાડ જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વલસાડ જિલ્લામાં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 69
            "q": "વેળાવદર કાળિયાર રાષ્ટ્રીય ઉદ્યાન કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "ડાંગ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "ભાવનગર જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "વલસાડ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભાવનગર જિલ્લામાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 70
            "q": "એલ્યુમિનિયમ આધારિત કારખાનામાં શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "ચિનાઈ માટી",
                    "correct": false
                },
                {
                    "option": "ચિરોડી",
                    "correct": false
                },
                {
                    "option": "બૉક્સાઇટ",
                    "correct": true
                },
                {
                    "option": "ફ્લોરોસ્પાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૉક્સાઇટ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 71
            "q": "દરિયાના પાણીના શુદ્ધિકરણમાં શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "ચિનાઈ માટી",
                    "correct": false
                },
                {
                    "option": "ડોલોમાઈટ",
                    "correct": true
                },
                {
                    "option": "બૉક્સાઇટ",
                    "correct": false
                },
                {
                    "option": "ફ્લોરોસ્પાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડોલોમાઈટ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 72
            "q": "શૃંગારની ચીજવસ્તુઓની બનાવટમાં શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "અકીક",
                    "correct": true
                },
                {
                    "option": "ડોલોમાઈટ",
                    "correct": false
                },
                {
                    "option": "બૉક્સાઇટ",
                    "correct": false
                },
                {
                    "option": "ફ્લોરોસ્પાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અકીક</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 73
            "q": "તાપ વિદ્યુતનાં ઉત્પાદનમાં અને ડામર રસાયણ ઉદ્યોગમાં શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "લિગ્નાઈટ",
                    "correct": true
                },
                {
                    "option": "ડોલોમાઈટ",
                    "correct": false
                },
                {
                    "option": "બૉક્સાઇટ",
                    "correct": false
                },
                {
                    "option": "ફ્લોરોસ્પાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લિગ્નાઈટ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 74
            "q": "સ્ટોરેજ બેટરી અને ઝીંક ઓક્સાઈડ બનાવવા માટે શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "સીસું",
                    "correct": true
                },
                {
                    "option": "જસત",
                    "correct": false
                },
                {
                    "option": "તાંબું",
                    "correct": false
                },
                {
                    "option": "એલ્યુમિનિયમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સીસું</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 75
            "q": "વીજળીના તાર બનાવવા અને વાસણો બનાવવા માટે શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "સીસું",
                    "correct": false
                },
                {
                    "option": "જસત",
                    "correct": false
                },
                {
                    "option": "તાંબું",
                    "correct": true
                },
                {
                    "option": "ગ્રેફાઈટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાંબું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 76
            "q": "ગેલ્વેનાઈઝ પતરાંમાં ઢોળ ચડાવવા માટે શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "સીસું",
                    "correct": false
                },
                {
                    "option": "જસત",
                    "correct": true
                },
                {
                    "option": "તાંબું",
                    "correct": false
                },
                {
                    "option": "ગ્રેફાઈટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જસત</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 77
            "q": "ડાયનાસોરનો અર્થ શું થાય છે ?",
            "a": [
                {
                    "option": "ભયાનક બકરી",
                    "correct": false
                },
                {
                    "option": "જંગલી ભેંસ",
                    "correct": false
                },
                {
                    "option": "જંગલી ગધેડો",
                    "correct": false
                },
                {
                    "option": "ભયાનક ગરોળી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભયાનક ગરોળી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 78
            "q": "ભારતનું સૌથી જૂનું પ્રાણી સંગ્રહાલય ક્યું છે ?",
            "a": [
                {
                    "option": "જૂનાગઢનું શક્કરબાગ",
                    "correct": true
                },
                {
                    "option": "અમદાવાદનું કાકરીયા",
                    "correct": false
                },
                {
                    "option": "વડોદરાનું કમાટીબાગ",
                    "correct": false
                },
                {
                    "option": "રાજકોટનું હિંગોળગઢ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જૂનાગઢનું શક્કરબાગ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 79
            "q": "નીચેનામાંથી કઈ માછલી મોતી આપે છે ?",
            "a": [
                {
                    "option": "સીલ માછલી",
                    "correct": false
                },
                {
                    "option": "કાલુ માછલી",
                    "correct": true
                },
                {
                    "option": "વહેલ માછલી",
                    "correct": false
                },
                {
                    "option": "શાર્ક માછલી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાલુ માછલી</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 80
            "q": "મેન્ગ્રુવ જંગલનું બીજું નામ શું છે ?",
            "a": [
                {
                    "option": "ચેસનું જંગલ",
                    "correct": false
                },
                {
                    "option": "ભરતીનું જંગલ",
                    "correct": true
                },
                {
                    "option": "ભારતનું જંગલ",
                    "correct": false
                },
                {
                    "option": "ભરતનું જંગલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભરતીનું જંગલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};
