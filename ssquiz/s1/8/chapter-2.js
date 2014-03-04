// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 2  આપણી આસપાસ શું ?",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "8",
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
            "q": "પૃથ્વીના મુખ્ય આવરણો કેટલાં છે ?",
            "a": [
                {
                    "option": "ત્રણ",
                    "correct": false
                },
                {
                    "option": "ચાર",
                    "correct": true
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
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચાર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "પૃથ્વીનું કયું આવરણ જોઈ શકાતું નથી ?",
            "a": [
                {
                    "option": "મૃદાવરણ",
                    "correct": false
                },
                {
                    "option": "જલાવરણ",
                    "correct": false
                },
                {
                    "option": "વાતાવરણ",
                    "correct": true
                },
                {
                    "option": "જીવાવરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાતાવરણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "મૃદાવરણ પૃથ્વીની સપાટીનો આશરે કેટલા ટકા ભાગ રોકે છે ?",
            "a": [
                {
                    "option": "99%",
                    "correct": false
                },
                {
                    "option": "98%",
                    "correct": false
                },
                {
                    "option": "71%",
                    "correct": false
                },
                {
                    "option": "29%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 29%</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "પૃથ્વીનું કયું આવરણ રંગ, સ્વાદ અને વાસ રહિત છે ?",
            "a": [
                {
                    "option": "જલાવરણ",
                    "correct": false
                },
                {
                    "option": "વાતાવરણ",
                    "correct": true
                },
                {
                    "option": "મૃદાવરણ",
                    "correct": false
                },
                {
                    "option": "જીવાવરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાતાવરણ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "પૃથ્વીના જે ભાગ ઉપર આપણે વસવાટ કરીએ છીએ, તેને કયું આવરણ કહે છે ?",
            "a": [
                {
                    "option": "વાતાવરણ",
                    "correct": false
                },
                {
                    "option": "જલાવરણ",
                    "correct": false
                },
                {
                    "option": "જીવાવરણ",
                    "correct": false
                },
                {
                    "option": "મૃદાવરણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૃદાવરણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "પૃથ્વીના પેટાળમાં રહેલા ખડકોના પીગળેલા રસને શું કહે છે ?",
            "a": [
                {
                    "option": "રેશ્મા",
                    "correct": false
                },
                {
                    "option": "મેગ્મા",
                    "correct": true
                },
                {
                    "option": "શિગ્મા",
                    "correct": false
                },
                {
                    "option": "લિગ્નાઈટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મેગ્મા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "જલાવરણ પૃથ્વીની સપાટીનો આશરે કેટલા ટકા વિસ્તાર રોકે છે ?",
            "a": [
                {
                    "option": "99%",
                    "correct": false
                },
                {
                    "option": "71%",
                    "correct": true
                },
                {
                    "option": "29%",
                    "correct": false
                },
                {
                    "option": "98%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 71%</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "પૃથ્વી પર કેટલા મહાસાગરો આવેલા છે ?",
            "a": [
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
                    "correct": true
                },
                {
                    "option": "પાંચ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચાર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "મીઠા પાણીનો મુખ્ય સ્ત્રોત કયો છે ?",
            "a": [
                {
                    "option": "નદી",
                    "correct": false
                },
                {
                    "option": "સમુદ્ર",
                    "correct": false
                },
                {
                    "option": "વરસાદ",
                    "correct": true
                },
                {
                    "option": "તળાવ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વરસાદ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "પૃથ્વી પરના પાણીના કુલ જથ્થામાંથી કેટલા ટકા પાણી મહાસાગરોમાં રહેલું છે ?",
            "a": [
                {
                    "option": "71%",
                    "correct": false
                },
                {
                    "option": "29%",
                    "correct": false
                },
                {
                    "option": "98%",
                    "correct": false
                },
                {
                    "option": "97%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 97%</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "વાતાવરણમાં નાઈટ્રોજન વાયુંનું પ્રમાણ આશરે કેટલા ટકા છે ?",
            "a": [
                {
                    "option": "71%",
                    "correct": false
                },
                {
                    "option": "48",
                    "correct": false
                },
                {
                    "option": "78%",
                    "correct": true
                },
                {
                    "option": "21%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 78%</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "વાતાવરણમાં ઑક્સિજન વાયુંનું પ્રમાણ આશરે કેટલા ટકા છે ?",
            "a": [
                {
                    "option": "21%",
                    "correct": true
                },
                {
                    "option": "48",
                    "correct": false
                },
                {
                    "option": "78%",
                    "correct": false
                },
                {
                    "option": "71%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 21%</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "વાતાવરણનો કયો વાયુ સૂર્યનાં પારજાંબલી કિરણોને અવરોધીને પૃથ્વી પર પહોંચતાં રોકે છે ?",
            "a": [
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                },
                {
                    "option": "ઓઝોન",
                    "correct": true
                },
                {
                    "option": "ઑક્સિજન",
                    "correct": false
                },
                {
                    "option": "હાઈડ્રોજન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓઝોન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ભેજ ઠરવાની ક્રિયાને શું કહે છે ?",
            "a": [
                {
                    "option": "ઘનાવરણ",
                    "correct": false
                },
                {
                    "option": "ઘનફળ",
                    "correct": false
                },
                {
                    "option": "ઘનીભવન",
                    "correct": true
                },
                {
                    "option": "ગલનબિંદુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘનીભવન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ક્યા વાયુનું પ્રમાણ વધવાથી પૃથ્વી પર ગરમીનું પ્રમાણ વધે છે ?",
            "a": [
                {
                    "option": "O<sub>2</sub>",
                    "correct": false
                },
                {
                    "option": "H<sub>2</sub>",
                    "correct": false
                },
                {
                    "option": "N<sub>2</sub>",
                    "correct": false
                },
                {
                    "option": "CO<sub>2</sub>",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: CO<sub>2</sub></p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "વધુ વાહનોની અવરજવરવાળા વિસ્તારોમાં ક્યા વાયુના પ્રમાણમાં વધારો થાય છે ?",
            "a": [
                {
                    "option": "કાર્બન મોનોક્સાઈડ",
                    "correct": true
                },
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયોક્સાઈડ",
                    "correct": false
                },
                {
                    "option": "રજકણો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન મોનોક્સાઈડ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "આપણને સ્ફૂર્તિ અને તાજગી આપતો વાયુ કયો છે ?",
            "a": [
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                },
                {
                    "option": "ઑક્સિજન",
                    "correct": false
                },
                {
                    "option": "ઓઝોન",
                    "correct": true
                },
                {
                    "option": "હાઈડ્રોજન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓઝોન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "વાતાવરણના કયા ઘટકને કારણે પૃથ્વી પર પડતો સૂર્યપ્રકાશ ચોતરફ ફેલાય છે ?",
            "a": [
                {
                    "option": "ઑક્સિજન",
                    "correct": false
                },
                {
                    "option": "કાર્બન મોનોક્સાઈડ",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયોક્સાઈડ",
                    "correct": false
                },
                {
                    "option": "રજકણો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રજકણો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "સૂર્યનું  કુટુંબ ક્યા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "સૌર ઊર્જા",
                    "correct": false
                },
                {
                    "option": "સૌર પરિવાર",
                    "correct": true
                },
                {
                    "option": "ગ્રહ",
                    "correct": false
                },
                {
                    "option": "સૌર પાવર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૌર પરિવાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "મહાસાગરોમાં વધારેમાં વધારે ઊંડી ખાઈઓ કેટલા કિલોમીટરની છે ?",
            "a": [
                {
                    "option": "8 થી 9",
                    "correct": false
                },
                {
                    "option": "10 થી 11",
                    "correct": true
                },
                {
                    "option": "5 થી 6",
                    "correct": false
                },
                {
                    "option": "14 થી 15",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 10 થી 11</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 21
            "q": "પૃથ્વી સપાટીનો નીચાણવાળો ભાગ પાણીથી ઘેરાયેલો છે, તેને શું કહે છે ?",
            "a": [
                {
                    "option": "વાતાવરણ",
                    "correct": false
                },
                {
                    "option": "મૃદાવરણ",
                    "correct": false
                },
                {
                    "option": "જીવાવરણ",
                    "correct": false
                },
                {
                    "option": "જલાવરણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જલાવરણ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "પૃથ્વીની ચારે બાજુ વીંટળાઈને આવેલા હવાના આવરણને શું કહે છે?",
            "a": [
                {
                    "option": "મૃદાવરણ",
                    "correct": false
                },
                {
                    "option": "જલાવરણ",
                    "correct": false
                },
                {
                    "option": "જીવાવરણ",
                    "correct": false
                },
                {
                    "option": "વાતાવરણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાતાવરણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "વાતાવરણ પૃથ્વીની સપાટીથી આશરે કેટલા કિલોમીટર સુધી વિસ્તરેલું છે ?",
            "a": [
                {
                    "option": "1000 કિલોમીટર",
                    "correct": false
                },
                {
                    "option": "1600 કિલોમીટર",
                    "correct": true
                },
                {
                    "option": "1200 કિલોમીટર",
                    "correct": false
                },
                {
                    "option": "1500 કિલોમીટર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1600 કિલોમીટર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 24
            "q": "વાતાવરણમાં ભારે વાયુ કયો છે ?",
            "a": [
                {
                    "option": "ઑક્સિજન",
                    "correct": false
                },
                {
                    "option": "ઓઝોન",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયોક્સાઈડ",
                    "correct": true
                },
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયોક્સાઈડ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "પૃથ્વીના મૃદાવરણ, જલાવરણ અને વાતાવરણના જે ભાગમાં જીવસૃષ્ટિ વ્યાપી છે, તેને શું કહે છે ?",
            "a": [
                {
                    "option": "મૃદાવરણ",
                    "correct": false
                },
                {
                    "option": "જલાવરણ",
                    "correct": false
                },
                {
                    "option": "જીવાવરણ",
                    "correct": true
                },
                {
                    "option": "વાતાવરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જીવાવરણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 26
            "q": "પૃથ્વી પરનું કેટલું પાણી સમુદ્રમાં છે ?",
            "a": [
                {
                    "option": "96%",
                    "correct": false
                },
                {
                    "option": "95%",
                    "correct": false
                },
                {
                    "option": "29%",
                    "correct": false
                },
                {
                    "option": "97%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 97%</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 27
            "q": "પૃથ્વીના ઉદ્ભવનો સ્વરૂપની દ્રષ્ટિએ સાચો ક્રમ કયો છે ?",
            "a": [
                {
                    "option": "વાયુ, પ્રવાહી, ઘન",
                    "correct": true
                },
                {
                    "option": "વાયુ, ઘન, પ્રવાહી",
                    "correct": false
                },
                {
                    "option": "પ્રવાહી, ઘન, વાયુ",
                    "correct": false
                },
                {
                    "option": "પ્રવાહી, વાયુ, ઘન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ, પ્રવાહી, ઘન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "મૃદ એટલે શું ?",
            "a": [
                {
                    "option": "મસ્ત",
                    "correct": false
                },
                {
                    "option": "મધ",
                    "correct": false
                },
                {
                    "option": "માટી",
                    "correct": true
                },
                {
                    "option": "મદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માટી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "પૃથ્વીનો ઉપરનો પોપડો માટી અને ખડકો જેવા ઘન પદાર્થોનો બનેલો છે તેથી તેને શું કહે છે ?",
            "a": [
                {
                    "option": "ઘનફળ",
                    "correct": false
                },
                {
                    "option": "ઘનીભવન",
                    "correct": false
                },
                {
                    "option": "ઘટાવરણ",
                    "correct": false
                },
                {
                    "option": "ઘનાવરણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘનાવરણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 30
            "q": "ઘનાવરણને બીજું શું કહે છે ?",
            "a": [
                {
                    "option": "શીતલવરણ",
                    "correct": false
                },
                {
                    "option": "શીલાવરણ",
                    "correct": true
                },
                {
                    "option": "મીલાવરણ",
                    "correct": false
                },
                {
                    "option": "ઢીલાવરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શીલાવરણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 31
            "q": "પૃથ્વીનો પોપડો આશરે કેટલી જાડાઈ ધરાવે છે ?",
            "a": [
                {
                    "option": "64 થી 100 મીટર",
                    "correct": false
                },
                {
                    "option": "64 થી 100 કિમી",
                    "correct": true
                },
                {
                    "option": "46 થી 95 કિમી",
                    "correct": false
                },
                {
                    "option": "46 થી 95 મીટર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 64 થી 100 કિમી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 32
            "q": "આપણે પૃથ્વીના પેટાળમાં જેમ જેમ ઊંડે જતા જઈએ તેમ તેમ શામાં વધારો થતો જાય છે ?",
            "a": [
                {
                    "option": "વરસાદમાં",
                    "correct": false
                },
                {
                    "option": "ઠંડીમાં",
                    "correct": false
                },
                {
                    "option": "તાપમાનમાં",
                    "correct": true
                },
                {
                    "option": "કીચડમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાપમાનમાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 33
            "q": "ગરમી અને દબાણ જેવાં બળો વચ્ચે સમતુલા જળવાય નહિ, ત્યારે કઈ આપત્તિ આવે ?",
            "a": [
                {
                    "option": "વાવાઝોડું",
                    "correct": false
                },
                {
                    "option": "ભૂસ્ખલન",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                },
                {
                    "option": "જ્વાળામુખી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જ્વાળામુખી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "મારા ઉપર ઘર બાંધવામાં આવે છે, કહો હું કોણ ?",
            "a": [
                {
                    "option": "મૃદાવરણ",
                    "correct": true
                },
                {
                    "option": "જલાવરણ",
                    "correct": false
                },
                {
                    "option": "જીવાવરણ",
                    "correct": false
                },
                {
                    "option": "વાતાવરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૃદાવરણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 35
            "q": "આમાંથી કયું નામ મહાસાગરનું નથી ?",
            "a": [
                {
                    "option": "ઍટલૅન્ટીક",
                    "correct": false
                },
                {
                    "option": "આર્કટિક",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": true
                },
                {
                    "option": "પૅસિફિક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍન્ટાર્કટિકા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "સૌર પરિવારમાં માત્ર શાના પર સજીવોને જીવવા માટે અનુકૂળ તાપમાન, પાણી અને હવા છે ?",
            "a": [
                {
                    "option": "મંગળ",
                    "correct": false
                },
                {
                    "option": "ગુરુ",
                    "correct": false
                },
                {
                    "option": "બુધ",
                    "correct": false
                },
                {
                    "option": "પૃથ્વી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૃથ્વી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 37
            "q": "જલાવરણના વિશાળ જળભંડાર ધરાવતા ભાગોને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "મહાસાગર",
                    "correct": true
                },
                {
                    "option": "તળાવ",
                    "correct": false
                },
                {
                    "option": "સરોવર",
                    "correct": false
                },
                {
                    "option": "નદી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહાસાગર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "વાતાવરણમાં મુખ્ય પ્રવાહી ઘટક કયું છે ?",
            "a": [
                {
                    "option": "પૅટ્રોલ",
                    "correct": false
                },
                {
                    "option": "કેરોસીન",
                    "correct": false
                },
                {
                    "option": "પાણી",
                    "correct": true
                },
                {
                    "option": "દૂધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 39
            "q": "ઑક્સિજનના જલદપણાને કયો વાયું મંદ કરે છે ?",
            "a": [
                {
                    "option": "નાઈટ્રોજન",
                    "correct": true
                },
                {
                    "option": "ઓઝોન",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયૉક્સાઈડ",
                    "correct": false
                },
                {
                    "option": "હાઈડ્રોજન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાઈટ્રોજન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 40
            "q": "ક્યા વાયુઓ પૃથ્વી પરની જીવસૃષ્ટિને જીવંત રાખે છે ?",
            "a": [
                {
                    "option": "ઑક્સિજન અને કાર્બન ડાયૉક્સાઈડ",
                    "correct": false
                },
                {
                    "option": "ઑક્સિજન અને નાઈટ્રોજન",
                    "correct": true
                },
                {
                    "option": "ઑક્સિજન અને હાઈડ્રોજન",
                    "correct": false
                },
                {
                    "option": "ઑક્સિજન અને ઓઝોન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન અને નાઈટ્રોજન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 41
            "q": "પૃથ્વી સપાટીથી જેમ ઉપર જઈએ તેમ વાતાવરણના મોટાભાગના વાયુઓનાં પ્રમાણમાં શું થાય છે ?",
            "a": [
                {
                    "option": "વધારો થાય છે.",
                    "correct": false
                },
                {
                    "option": "ઘટાડો થાય છે.",
                    "correct": true
                },
                {
                    "option": "એકસરખું રહે છે.",
                    "correct": false
                },
                {
                    "option": "વધારો-ઘાટાડો બન્ને થાય છે.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘટાડો થાય છે.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 42
            "q": "નીચેનામાંથી ભેજનું સ્વરૂપ કયું નથી ?",
            "a": [
                {
                    "option": "નદી",
                    "correct": true
                },
                {
                    "option": "વરસાદ",
                    "correct": false
                },
                {
                    "option": "હિમ",
                    "correct": false
                },
                {
                    "option": "કરા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નદી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 43
            "q": "ગરમીથી બાષ્પ બની પાણી વરાળ સ્વરૂપે હવામાં ભળે છે, તેને શું કહે છે ?",
            "a": [
                {
                    "option": "ભેળ",
                    "correct": false
                },
                {
                    "option": "ભેખડ",
                    "correct": false
                },
                {
                    "option": "ભેજ",
                    "correct": true
                },
                {
                    "option": "ભેખ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભેજ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "પૃથ્વી પરની જીવસૃષ્ટિમાં કોનો સમાવેશ થતો નથી ?",
            "a": [
                {
                    "option": "વનસ્પતિ",
                    "correct": false
                },
                {
                    "option": "પ્રાણીઓ",
                    "correct": false
                },
                {
                    "option": "જીવજંતુઓ",
                    "correct": false
                },
                {
                    "option": "કમ્પ્યુટર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કમ્પ્યુટર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 45
            "q": "જીવાવરણના અજૈવિક વિભાગમાં કોનો સમાવેશ થતો નથી ?",
            "a": [
                {
                    "option": "જલાવરણ",
                    "correct": false
                },
                {
                    "option": "સૂક્ષ્મ જીવાણુઓ",
                    "correct": true
                },
                {
                    "option": "મૃદાવરણ",
                    "correct": false
                },
                {
                    "option": "વાતાવરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂક્ષ્મ જીવાણુઓ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here 
    ]
};
