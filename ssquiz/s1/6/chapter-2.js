// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 2  ચાલો, નકશો સમજીએ",
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
            "q": "પૃથ્વીના કોઈ પણ ભાગના સપાટ કાગળ પરના આલેખનને શું કહે છે ?",
            "a": [
                {
                    "option": "રૂઢ સંજ્ઞા",
                    "correct": false
                },
                {
                    "option": "નકશો",
                    "correct": true
                },
                {
                    "option": "પ્રમાણમાપ",
                    "correct": false
                },
                {
                    "option": "રૂટ મૅપ ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નકશો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "નકશાના અંગો કેટલાં છે ?",
            "a": [
                {
                    "option": "2",
                    "correct": false
                },
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
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આમાંથી કયું નક્શાનું અંગ નથી ?",
            "a": [
                {
                    "option": "રૂઢ સંજ્ઞાઓ",
                    "correct": false
                },
                {
                    "option": "દિશાસૂચન",
                    "correct": false
                },
                {
                    "option": "પ્રમાણમાપ",
                    "correct": false
                },
                {
                    "option": "રાજકીય નક્શો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજકીય નક્શો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "સૂર્ય કઈ દિશામાં ઉગે છે ?",
            "a": [
                {
                    "option": "ઉત્તર",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ",
                    "correct": false
                },
                {
                    "option": "પૂર્વ",
                    "correct": true
                },
                {
                    "option": "પશ્ચિમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂર્વ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ઊગતા સૂર્યની સામે મુખ રાખીને બન્ને હાથ બાજુ પર ફેલાવીને ઉભા રહો તો તમારા જમણા હાથ બાજુ કઈ દિશા આવશે ?",
            "a": [
                {
                    "option": "ઉત્તર",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ",
                    "correct": true
                },
                {
                    "option": "પૂર્વ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ઉત્તર અને પશ્ચિમ દિશા વચ્ચે કયો ખૂણો આવે ?",
            "a": [
                {
                    "option": "ઈશાન",
                    "correct": false
                },
                {
                    "option": "અગ્નિ",
                    "correct": false
                },
                {
                    "option": "વાયવ્ય",
                    "correct": true
                },
                {
                    "option": "નૈઋત્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયવ્ય</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "પશ્ચિમ અને દક્ષિણ દિશા વચ્ચે કયો ખૂણો આવે ?",
            "a": [
                {
                    "option": "ઈશાન",
                    "correct": false
                },
                {
                    "option": "અગ્નિ",
                    "correct": false
                },
                {
                    "option": "વાયવ્ય",
                    "correct": false
                },
                {
                    "option": "નૈઋત્ય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નૈઋત્ય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ઉત્તર અને પૂર્વ દિશા વચ્ચે કયો ખૂણો આવે ?",
            "a": [
                {
                    "option": "ઈશાન",
                    "correct": true
                },
                {
                    "option": "અગ્નિ",
                    "correct": false
                },
                {
                    "option": "વાયવ્ય",
                    "correct": false
                },
                {
                    "option": "નૈઋત્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈશાન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "દરેક નકશામાં કઈ દિશાનું ચિન્હ આપેલું જ હોય છે ?",
            "a": [
                {
                    "option": "ઉત્તર",
                    "correct": true
                },
                {
                    "option": "દક્ષિણ",
                    "correct": false
                },
                {
                    "option": "પૂર્વ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી કયું નકશાનું અંગ છે ?",
            "a": [
                {
                    "option": "દિશા સૂચન",
                    "correct": true
                },
                {
                    "option": "ભૌગોલિક નકશા",
                    "correct": false
                },
                {
                    "option": "રાજકીય નકશા",
                    "correct": false
                },
                {
                    "option": "ઔદ્યોગિક નક્શા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિશા સૂચન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "નકશામાં કથ્થાઈ રંગ શું દર્શાવે છે ?",
            "a": [
                {
                    "option": "જંગલ",
                    "correct": false
                },
                {
                    "option": "ઊંચાઈ",
                    "correct": true
                },
                {
                    "option": "મેદાન",
                    "correct": false
                },
                {
                    "option": "બરફ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઊંચાઈ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "દિશા દર્શક તરીકે કયા સાધનનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "થર્મોમીટર",
                    "correct": false
                },
                {
                    "option": "વર્ષામાપક",
                    "correct": false
                },
                {
                    "option": "સિસ્મોગ્રાફ",
                    "correct": false
                },
                {
                    "option": "હોકાયંત્ર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હોકાયંત્ર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "'PS' આ રૂઢ સંજ્ઞા નકશામાં કઈ બાબત બતાવે છે ?",
            "a": [
                {
                    "option": "પોસ્ટ ઑફિસ",
                    "correct": false
                },
                {
                    "option": "પોલીસ સ્ટેશન",
                    "correct": true
                },
                {
                    "option": "જિલ્લાની સીમા",
                    "correct": false
                },
                {
                    "option": "દેશની રાજધાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોલીસ સ્ટેશન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "'...........'  આ રૂઢ સંજ્ઞા નકશામાં કઈ બાબત બતાવે છે ?",
            "a": [
                {
                    "option": "રાજ્યની સીમા",
                    "correct": true
                },
                {
                    "option": "પર્વત",
                    "correct": false
                },
                {
                    "option": "શિખર",
                    "correct": false
                },
                {
                    "option": "નદી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યની સીમા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "'---------' આ રૂઢ સંજ્ઞા નકશામાં કઈ બાબત બતાવે છે ?",
            "a": [
                {
                    "option": "આંતરરાષ્ટ્રીય સીમા",
                    "correct": false
                },
                {
                    "option": "પ્રમાણમાપ",
                    "correct": false
                },
                {
                    "option": "શહેર",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની સીમા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની સીમા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "'PO' આ રૂઢ સંજ્ઞા નકશામાં કઈ બાબત બતાવે છે ?",
            "a": [
                {
                    "option": "પોસ્ટ ઑફિસ",
                    "correct": true
                },
                {
                    "option": "પોલીસ સ્ટેશન",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની સીમા",
                    "correct": false
                },
                {
                    "option": "દેશની રાજધાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોસ્ટ ઑફિસ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "જંગલ અને વનસ્પતિ માટે નકશામાં કયો રંગ વપરાય છે ?",
            "a": [
                {
                    "option": "કથ્થાઈ",
                    "correct": false
                },
                {
                    "option": "પીળો",
                    "correct": false
                },
                {
                    "option": "લીલો",
                    "correct": true
                },
                {
                    "option": "સફેદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લીલો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "મેદાન માટે નકશામાં કયો રંગ વપરાય છે ?",
            "a": [
                {
                    "option": "કથ્થાઈ",
                    "correct": false
                },
                {
                    "option": "પીળો",
                    "correct": true
                },
                {
                    "option": "લીલો",
                    "correct": false
                },
                {
                    "option": "સફેદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પીળો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "1 સેમી=200 કીમી આ નકશાનું કયું અંગ બતાવે છે ?",
            "a": [
                {
                    "option": "દિશા સૂચન",
                    "correct": false
                },
                {
                    "option": "પ્રમાણમાપ",
                    "correct": true
                },
                {
                    "option": "રાજકીય નકશા",
                    "correct": false
                },
                {
                    "option": "રૂઢ સંજ્ઞાઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રમાણમાપ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "વિતરણ દર્શાવતા નકશાઓનું નિર્માણ કરતી સંસ્થા NATMO ક્યાં આવેલી છે ?",
            "a": [
                {
                    "option": "દિલ્લી",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "કોલકાતા",
                    "correct": true
                },
                {
                    "option": "મુંબઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોલકાતા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "કોઈ પણ બે સ્થળ વચ્ચેનું કેવું અંતર પ્રમાણમાપ વડે જાણી શકાય છે ?",
            "a": [
                {
                    "option": "આભાસી",
                    "correct": false
                },
                {
                    "option": "કાલ્પનિક",
                    "correct": false
                },
                {
                    "option": "વાસ્તવિક",
                    "correct": true
                },
                {
                    "option": "ધારેલું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાસ્તવિક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 22
            "q": "કોની મદદથી જે-તે પ્રદેશનું સાચું ચિત્ર જાણી શકાય છે ?",
            "a": [
                {
                    "option": "નકશાની",
                    "correct": true
                },
                {
                    "option": "ઍટલાસની",
                    "correct": false
                },
                {
                    "option": "રૂટ મૅપની",
                    "correct": false
                },
                {
                    "option": "દિશાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નકશાની</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 23
            "q": "ઊગતા સૂર્યની સામે મુખ રાખીને બન્ને હાથ બાજુ પર ફેલાવીને ઉભા રહો તો તમારા ડાબા હાથ બાજુ કઈ દિશા આવશે ?",
            "a": [
                {
                    "option": "ઉત્તર",
                    "correct": true
                },
                {
                    "option": "દક્ષિણ",
                    "correct": false
                },
                {
                    "option": "પૂર્વ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 24
            "q": "સૂર્ય કઈ દિશામાં આથમે છે ?",
            "a": [
                {
                    "option": "ઉત્તર",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ",
                    "correct": false
                },
                {
                    "option": "પૂર્વ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પશ્ચિમ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "સામાન્ય રીતે નકશામાં દિશાનું ચિન્હ ક્યાં આપેલું હોય છે ?",
            "a": [
                {
                    "option": "ડાબી બાજુ",
                    "correct": false
                },
                {
                    "option": "ઉપરની બાજુ",
                    "correct": false
                },
                {
                    "option": "નીચેની બાજુ",
                    "correct": false
                },
                {
                    "option": "જમણી બાજુ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જમણી બાજુ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        } // no comma here
    ]
};
