// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 5  ગુજરાત : ખેતી, ઉદ્યોગ અને પરિવહન",
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
            "q": "ગુજરાતની મોટામાં મોટી ડેરી કઈ અને કયા જિલ્લામાં આવેલી છે ?",
            "a": [
                {
                    "option": "અમૂલ-આણંદ",
                    "correct": true
                },
                {
                    "option": "બનાસ-બનાસકાંઠા",
                    "correct": false
                },
                {
                    "option": "દૂધસાગર-મહેસાણા",
                    "correct": false
                },
                {
                    "option": "સાબર-સાબરકાંઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમૂલ-આણંદ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "હીરા ઉદ્યોગમાં નીચેનામાંથી ગુજરાતનો ક્યો જિલ્લો જાણીતો છે ?",
            "a": [
                {
                    "option": "ભાવનગર",
                    "correct": false
                },
                {
                    "option": "અમરેલી",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": true
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુરત</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "નીચેનામાંથી કયું સમુદ્ર આધારિત ઉદ્યોગનું નામ છે ?",
            "a": [
                {
                    "option": "સિમેન્ટ ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "મત્સ્ય ઉદ્યોગ",
                    "correct": true
                },
                {
                    "option": "હીરા ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "ડેરી ઉદ્યોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મત્સ્ય ઉદ્યોગ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "નીચેનામાંથી કયું ખેતી આધારિત ઉદ્યોગનું નામ નથી ?",
            "a": [
                {
                    "option": "ઈજનેરી ઉદ્યોગ",
                    "correct": true
                },
                {
                    "option": "ખાંડ ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "કાપડ ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "ડેરી ઉદ્યોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈજનેરી ઉદ્યોગ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "નીચેનામાંથી કયું ખનીજ આધારિત ઉદ્યોગનું નામ છે ?",
            "a": [
                {
                    "option": "સિમેન્ટ ઉદ્યોગ",
                    "correct": true
                },
                {
                    "option": "મત્સ્ય ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "ખાંડ ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "ડેરી ઉદ્યોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિમેન્ટ ઉદ્યોગ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ગુજરાતમાં સૌથી વધુ મગફળી ક્યા જિલ્લામાં થાય છે ?",
            "a": [
                {
                    "option": "જામનગર",
                    "correct": false
                },
                {
                    "option": "ભાવનગર",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જૂનાગઢ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કપાસ ગુજરાતનાં ક્યા પ્રદેશમાં સૌથી વધુ થાય છે ?",
            "a": [
                {
                    "option": "ચરોતર",
                    "correct": false
                },
                {
                    "option": "કાનમ",
                    "correct": true
                },
                {
                    "option": "સોરઠ",
                    "correct": false
                },
                {
                    "option": "મકાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાનમ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "શેરડીમાંથી શું બને છે ?",
            "a": [
                {
                    "option": "ખાંડ",
                    "correct": true
                },
                {
                    "option": "કાપડ",
                    "correct": false
                },
                {
                    "option": "મીઠું",
                    "correct": false
                },
                {
                    "option": "સોડા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખાંડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "નીચેનામાંથી દરિયાકાંઠાના વિસ્તારોમાં શું થાય છે ?",
            "a": [
                {
                    "option": "કેરી",
                    "correct": false
                },
                {
                    "option": "કેળાં",
                    "correct": false
                },
                {
                    "option": "નાળિયેર",
                    "correct": true
                },
                {
                    "option": "ચીકુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નાળિયેર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ગુજરાતમાં કાપડ ઉદ્યોગનું મુખ્ય કેન્દ્ર કયું છે ?",
            "a": [
                {
                    "option": "ભાવનગર",
                    "correct": false
                },
                {
                    "option": "કચ્છ",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "પરિવહનના મુખ્ય કેટલા પ્રકાર છે ?",
            "a": [
                {
                    "option": "ત્રણ",
                    "correct": true
                },
                {
                    "option": "બે",
                    "correct": false
                },
                {
                    "option": "ચાર  ",
                    "correct": false
                },
                {
                    "option": "આઠ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્રણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગુજરાતનું આંતરરાષ્ટ્રીય હવાઈમથક ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": false
                },
                {
                    "option": "ભાવનગર",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ગુજરાતનું સૌથી મોટું બંદર કયું છે ?",
            "a": [
                {
                    "option": "પીપાવાવ",
                    "correct": false
                },
                {
                    "option": "દહેજ",
                    "correct": false
                },
                {
                    "option": "નવલખી",
                    "correct": false
                },
                {
                    "option": "કંડલા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કંડલા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ગુજરાતમાં રોપ-વેની સુવિધા નીચેનામાંથી ક્યાં નથી ?",
            "a": [
                {
                    "option": "જૂનાગઢ",
                    "correct": true
                },
                {
                    "option": "અંબાજી",
                    "correct": false
                },
                {
                    "option": "પાવાગઢ",
                    "correct": false
                },
                {
                    "option": "સાપુતારા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જૂનાગઢ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "નીચેનામાંથી સરળ અને સસ્તા દરે મુસાફરી કરાવતું વાહન કયું છે ?",
            "a": [
                {
                    "option": "ડંપર",
                    "correct": false
                },
                {
                    "option": "રેલવે",
                    "correct": true
                },
                {
                    "option": "બસ",
                    "correct": false
                },
                {
                    "option": "વિમાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રેલવે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "નીચેનામાંથી ખર્ચાળ અને ઝડપી મુસાફરી કરાવતું વાહન કયું છે ?",
            "a": [
                {
                    "option": "બસ",
                    "correct": false
                },
                {
                    "option": "વિમાન",
                    "correct": true
                },
                {
                    "option": "રેલવે",
                    "correct": false
                },
                {
                    "option": "સ્ટીમર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વિમાન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ગુજરાતમાં સૌથી વધુ બાજરી કયા જિલ્લામાં થાય છે ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "બનાસકાંઠા",
                    "correct": true
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "સાબરકાંઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બનાસકાંઠા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ગુજરાતમાં કયા પ્રદેશના ઘઉં પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "સૌરાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "સોરઠ",
                    "correct": false
                },
                {
                    "option": "ચરોતર",
                    "correct": false
                },
                {
                    "option": "ભાલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભાલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગુજરાતમાં સૌથી વધુ ડાંગર કયા જિલ્લામાં થાય છે ?",
            "a": [
                {
                    "option": "ખેડા",
                    "correct": true
                },
                {
                    "option": "નવસારી",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખેડા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "ગુજરાતમાં વાવેતરની દ્રષ્ટિએ બીજો અગત્યનો પાક કયો છે ?",
            "a": [
                {
                    "option": "ઘઉં",
                    "correct": false
                },
                {
                    "option": "શેરડી",
                    "correct": false
                },
                {
                    "option": "બાજરી",
                    "correct": false
                },
                {
                    "option": "જુવાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જુવાર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ગુજરાતમાં ભાલનો મોટાભાગનો વિસ્તાર ક્યાં આવેલો છે ?",
            "a": [
                {
                    "option": "ધંધૂકા તાલુકામાં",
                    "correct": true
                },
                {
                    "option": "ધોળકા તાલુકામાં",
                    "correct": false
                },
                {
                    "option": "ધ્રાંગધ્રા તાલુકામાં",
                    "correct": false
                },
                {
                    "option": "ધ્રોલ તાલુકામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધંધૂકા તાલુકામાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "તમાકુ ગુજરાતનાં ક્યા પ્રદેશમાં સૌથી વધુ થાય છે ?",
            "a": [
                {
                    "option": "ચરોતર",
                    "correct": true
                },
                {
                    "option": "કાનમ",
                    "correct": false
                },
                {
                    "option": "સોરઠ",
                    "correct": false
                },
                {
                    "option": "મકાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચરોતર</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ગુજરાતમાં ચરોતર વિસ્તાર ક્યાં આવેલો છે ?",
            "a": [
                {
                    "option": "ખેડા-અમદાવાદમાં",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ-વડોદરામાં",
                    "correct": false
                },
                {
                    "option": "ખેડા-વડોદરામાં",
                    "correct": true
                },
                {
                    "option": "ખેડા-બોટાદમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખેડા-વડોદરામાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "નીચેનામાંથી કઠોળમાં કોનો સમાવેશ થતો નથી ?",
            "a": [
                {
                    "option": "ચણા",
                    "correct": false
                },
                {
                    "option": "મગ",
                    "correct": false
                },
                {
                    "option": "મઠ",
                    "correct": false
                },
                {
                    "option": "જીરૂ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જીરૂ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "નીચેનામાંથી મસાલામાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "ઇસબગુલ",
                    "correct": true
                },
                {
                    "option": "અડદ",
                    "correct": false
                },
                {
                    "option": "ઘઉં",
                    "correct": false
                },
                {
                    "option": "તુવેર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇસબગુલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ગુજરાતમાં કૃષિવિકાસ પાછળ સૌથી અગત્યનું કારણ કયું છે ?",
            "a": [
                {
                    "option": "સીવવાની સુવિધામાં વધારો",
                    "correct": false
                },
                {
                    "option": "વીજળીની સુવિધામાં વધારો",
                    "correct": false
                },
                {
                    "option": "સિંચાઈની સુવિધામાં વધારો",
                    "correct": true
                },
                {
                    "option": "જમીનની સુવિધામાં વધારો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિંચાઈની સુવિધામાં વધારો</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ખેતરમાં કૃત્રિમ વ્યવસ્થાથી પાણીનું સિંચન કરવામાં આવે તેને શું કહે છે ?",
            "a": [
                {
                    "option": "સીલાઈ",
                    "correct": false
                },
                {
                    "option": "વહન",
                    "correct": false
                },
                {
                    "option": "સિંચાઈ",
                    "correct": true
                },
                {
                    "option": "સિવાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિંચાઈ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગુજરાતમાં સૌથી મહત્ત્વની સિંચાઈ યોજના કઈ છે ?",
            "a": [
                {
                    "option": "ધરોઈ",
                    "correct": false
                },
                {
                    "option": "વણાકબોરી",
                    "correct": false
                },
                {
                    "option": "કડાણા",
                    "correct": false
                },
                {
                    "option": "નર્મદા(સરદાર સરોવર)",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નર્મદા(સરદાર સરોવર)</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ખેતરમાં ઢોળાવવાળી જમીન પર પાણીનો સંગ્રહ કરવા જે બનાવવામાં આવે તેને શું કહે છે ? ",
            "a": [
                {
                    "option": "ખેત તલાવડી",
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
                    "option": "ચેકડેમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખેત તલાવડી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "નદી, ઝરણાં કે વહેણનું પાણી વહી જતું અટકાવવા માટે તેની આગળ પાકો નાનો આડબંધ બાંધવામાં આવે તેને શું કહે છે ?",
            "a": [
                {
                    "option": "બોરીબંધ",
                    "correct": false
                },
                {
                    "option": "ચેકડેમ",
                    "correct": true
                },
                {
                    "option": "ખેત તલાવડી",
                    "correct": false
                },
                {
                    "option": "ચેકસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચેકડેમ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "એવું કાર્ય જેમાં કાચામાલનો ઉપયોગ કરીને જુદીજુદી વસ્તુઓ બનાવવામાં આવે તેને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "વેપાર",
                    "correct": false
                },
                {
                    "option": "ઉદ્યમ",
                    "correct": false
                },
                {
                    "option": "ઉદ્યોગ",
                    "correct": true
                },
                {
                    "option": "ઉદગમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉદ્યોગ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "ગુજરાતમાં પેટ્રોકેમિકલ્સ ઉદ્યોગનું મુખ્ય કેન્દ્ર કયું છે ?",
            "a": [
                {
                    "option": "અમદાવદ",
                    "correct": false
                },
                {
                    "option": "ભાવનગર",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડોદરા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "સિમેન્ટ ઉદ્યોગમાં અગત્યનો કાચોમાલ કયો છે ?",
            "a": [
                {
                    "option": "ચૂનાનો પથ્થર",
                    "correct": true
                },
                {
                    "option": "ચમની",
                    "correct": false
                },
                {
                    "option": "ગ્રેફાઈટ",
                    "correct": false
                },
                {
                    "option": "ડોલોમાઈટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચૂનાનો પથ્થર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "ગુજરાત રિફાઇનરી ક્યાં આવેલી છે ?",
            "a": [
                {
                    "option": "રાજકોટ નજીક કોયલી ખાતે",
                    "correct": false
                },
                {
                    "option": "વડોદરા નજીક કોયલી ખાતે",
                    "correct": true
                },
                {
                    "option": "અમદાવાદ નજીક કોયલી ખાતે",
                    "correct": false
                },
                {
                    "option": "જામનગર નજીક કોયલી ખાતે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડોદરા નજીક કોયલી ખાતે</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "ગુજરાતમાં રંગ રસાયણના કારખાના ક્યાં આવેલાં છે ?",
            "a": [
                {
                    "option": "વડોદરા ખાતે",
                    "correct": false
                },
                {
                    "option": "વઢવાણ ખાતે",
                    "correct": false
                },
                {
                    "option": "વલસાડ ખાતે",
                    "correct": true
                },
                {
                    "option": "જામનગર ખાતે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વલસાડ ખાતે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "નીચેનામાંથી ઇજનેરી ઉદ્યોગમાં કયું કેન્દ્ર જાણીતું છે ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "જામનગર",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજકોટ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "ગુજરાતમાં ટાઇલ્સનો ઉદ્યોગ ક્યાં વિકસ્યો છે ?",
            "a": [
                {
                    "option": "મોરબી",
                    "correct": true
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": false
                },
                {
                    "option": "જામનગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મોરબી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "ગુજરાતમાં ક્યાં શાર્ક માછલીના તેલને શુદ્ધ કરવા રિફાઈનરી બનાવવામાં આવી છે ?",
            "a": [
                {
                    "option": "વલસાડ",
                    "correct": false
                },
                {
                    "option": "વેરાવળ",
                    "correct": true
                },
                {
                    "option": "વડોદરા",
                    "correct": false
                },
                {
                    "option": "વઢવાણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વેરાવળ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ગુજરાતમાં કાગળ બનાવવાનો ઉદ્યોગ કયાં વિકસ્યો છે ?",
            "a": [
                {
                    "option": "વડોદરાના કોયલીમાં",
                    "correct": false
                },
                {
                    "option": "અમદાવાદના ધોળકામાં",
                    "correct": false
                },
                {
                    "option": "વડોદરાના બારેજડીમાં",
                    "correct": true
                },
                {
                    "option": "વલસાડના બારેજડીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડોદરાના બારેજડીમાં</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "ગુજરાતમાં પરિવહનના પ્રકાર કેટલાં છે ?",
            "a": [
                {
                    "option": "2",
                    "correct": false
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
                    "option": "3",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "જે તંત્ર મુસાફરો અને માલસામાનને એક સ્થાનથી બીજા સ્થાને લાવવા-લઈ જવાનું કાર્ય કરે તેને શું કહે છે ?",
            "a": [
                {
                    "option": "પરિવહન",
                    "correct": true
                },
                {
                    "option": "પર્યાવરણ",
                    "correct": false
                },
                {
                    "option": "પરિહવન",
                    "correct": false
                },
                {
                    "option": "પરિદમન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરિવહન</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "નીચેનામાંથી કયા પ્રકારના વાહનનો ઉપયોગ જમીન માર્ગે મુસાફરી માટે કરવામાં આવે છે ?",
            "a": [
                {
                    "option": "હેલિકોપ્ટર",
                    "correct": false
                },
                {
                    "option": "રેલગાડી",
                    "correct": true
                },
                {
                    "option": "હોડી",
                    "correct": false
                },
                {
                    "option": "વિમાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રેલગાડી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "ગુજરાતનું હાલનું મુખ્ય બંદર કયું છે ?",
            "a": [
                {
                    "option": "વેરાવળ",
                    "correct": false
                },
                {
                    "option": "બેડી",
                    "correct": false
                },
                {
                    "option": "કંડલા",
                    "correct": true
                },
                {
                    "option": "ઓખા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કંડલા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "કયા વાહન દ્વારા સૌથી ઝડપી અને ખૂબ જ ખર્ચાળ મુસાફરી થાય છે ?",
            "a": [
                {
                    "option": "બસ",
                    "correct": false
                },
                {
                    "option": "રેલગાડી",
                    "correct": false
                },
                {
                    "option": "હોડી",
                    "correct": false
                },
                {
                    "option": "વિમાન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિમાન</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        } // no comma here
    ]
};
