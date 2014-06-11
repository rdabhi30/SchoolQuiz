// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 2  પર્યાવરણીય પ્રદૂષણ",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "8",
        "semester": "2",
        "main": "",
        "results": "<h5>વધુ વાંચન કરો</h5><p></p>",
        "level1": "(ગ્રેડ A) ખૂબ સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> પણ મહેનત જરૂર કરવી.</p>",
        "level2": "(ગ્રેડ B) સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> મહેનત કરવાની જરૂર છે.</p>",
        "level3": "(ગ્રેડ C) સાધારણ પરિણામ <p><strong class='inst'>સૂચન:</strong> ઘરે મહેનત કરવાની જરૂર છે.</p>",
        "level4": "(ગ્રેડ D) નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપો.</span></p>",
        "level5": "(ગ્રેડ E) ખૂબ જ નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપવાની ખૂબ જ જરૂર છે.</p>" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "નીચેના પૈકી ક્યો રોગ જળ-પ્રદૂષણથી ફેલાય છે ?",
            "a": [
                {
                    "option": "કૉલેરા",
                    "correct": true
                },
                {
                    "option": "ન્યુમોનિયા",
                    "correct": false
                },
                {
                    "option": "શરદી",
                    "correct": false
                },
                {
                    "option": "ખાંસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૉલેરા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "વાતારણમાં ક્યો વાયુ વધવાથી ગ્લોબલ વોર્મિંગની સમસ્યા ઊભી થઈ છે ?",
            "a": [
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                },
                {
                    "option": "હાઈડ્રોજન",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયૉક્સાઇડ",
                    "correct": true
                },
                {
                    "option": "ઑક્સિજન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "વાતાવરણના ઓઝોન સ્તરને સૌથી વધુ નુકસાન કરતો વાયુ ક્યો છે ?",
            "a": [
                {
                    "option": "CO<sub>2</sub>",
                    "correct": false
                },
                {
                    "option": "CFC",
                    "correct": true
                },
                {
                    "option": "મિથેન",
                    "correct": false
                },
                {
                    "option": "N<sub>2</sub>",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  CFC</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "વૃક્ષો ઓછાં થવાથી ક્યા વાયુનું પ્રમાણ વધી ગયું છે ?",
            "a": [
                {
                    "option": "ઑક્સિજન",
                    "correct": false
                },
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                },
                {
                    "option": "નાઇટ્રસ ઑક્સાઇડ",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયૉક્સાઇડ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાર્બન ડાયૉક્સાઇડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "નીચેના પૈકી ક્યા વાયુથી ઍસિડનો વરસાદ થાય છે ?",
            "a": [
                {
                    "option": "નાઇટ્રસ ઑક્સાઇડ",
                    "correct": true
                },
                {
                    "option": "કાર્બન મોનૉક્સાઇડ",
                    "correct": false
                },
                {
                    "option": "ઓઝોન",
                    "correct": false
                },
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નાઇટ્રસ ઑક્સાઇડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "વાહન માટેનું કયું બળતણ પ્રદૂષણમુક્ત છે ?",
            "a": [
                {
                    "option": "કેરોસીન",
                    "correct": false
                },
                {
                    "option": "CNG",
                    "correct": true
                },
                {
                    "option": "ડીઝલ",
                    "correct": false
                },
                {
                    "option": "પેટ્રોલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  CNG</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "આમાંથી ક્યો રોગ હવાના પ્રદૂષણથી થાય છે ?",
            "a": [
                {
                    "option": "ઝાડા-ઊલટી",
                    "correct": false
                },
                {
                    "option": "કમળો ",
                    "correct": false
                },
                {
                    "option": "દમ ",
                    "correct": true
                },
                {
                    "option": "કૅન્સર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દમ </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "માનવનિર્મિત સમસ્યાઓમાં ક્યું પ્રદૂષણ અગ્રસ્થાને છે ?",
            "a": [
                {
                    "option": "હવાનું",
                    "correct": false
                },
                {
                    "option": "પાણીનું",
                    "correct": true
                },
                {
                    "option": "ઘોંઘાટનું",
                    "correct": false
                },
                {
                    "option": "જમીનનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો!</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાણીનું</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ક્યો રોગ જળ પ્રદૂષણથી થાય છે ?",
            "a": [
                {
                    "option": "તાવ",
                    "correct": false
                },
                {
                    "option": "દમ ",
                    "correct": false
                },
                {
                    "option": "કૅન્સર",
                    "correct": false
                },
                {
                    "option": "કમળો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કમળો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી શું જમીનમાં સડી અને ભળી જતું નથી ?",
            "a": [
                {
                    "option": "કાપડ",
                    "correct": false
                },
                {
                    "option": "પ્લાસ્ટિક",
                    "correct": true
                },
                {
                    "option": "લાકડું",
                    "correct": false
                },
                {
                    "option": "પાંદડાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પ્લાસ્ટિક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": " 'જળ, જમીન અને જંગલ એ સામૂદાયિક સ્ત્રોતો છે. એની ઉપર સૌનો સમાન હક છે. એને 'વેપારની વસ્તુ' બનાવવી નૈતિક ગુનો છે.' એવું કોણે કહ્યું હતું ?",
            "a": [
                {
                    "option": "ઠક્કર બાપાએ",
                    "correct": false
                },
                {
                    "option": "ગાંધીજીએ",
                    "correct": true
                },
                {
                    "option": "નારાયણ ગુરુએ",
                    "correct": false
                },
                {
                    "option": "રવિશંકર મહારાજે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગાંધીજીએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગટરનાં પાણીથી કયું પ્રદૂષણ થાય છે ?",
            "a": [
                {
                    "option": "જમીનનું પ્રદૂષણ ",
                    "correct": false
                },
                {
                    "option": "હવાનું પ્રદૂષણ",
                    "correct": false
                },
                {
                    "option": "ધ્વનિનું પ્રદૂષણ ",
                    "correct": false
                },
                {
                    "option": "પાણીનું પ્રદૂષણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાણીનું પ્રદૂષણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "રાસાયણિક ખાતરો અને જંતુનાશક દવાઓ શાનું પ્રદૂષણ ફેલાવે છે ?",
            "a": [
                {
                    "option": "જમીનનું પ્રદૂષણ ",
                    "correct": true
                },
                {
                    "option": "હવાનું પ્રદૂષણ",
                    "correct": false
                },
                {
                    "option": "ધ્વનિનું પ્રદૂષણ",
                    "correct": false
                },
                {
                    "option": "પાણીનું પ્રદૂષણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જમીનનું પ્રદૂષણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "80 ડેસિમલનો અવાજ શાનું  પ્રદૂષણ ફેલાવે છે ?",
            "a": [
                {
                    "option": "જમીનનું પ્રદૂષણ ",
                    "correct": false
                },
                {
                    "option": "હવાનું પ્રદૂષણ",
                    "correct": false
                },
                {
                    "option": "ધ્વનિનું પ્રદૂષણ ",
                    "correct": true
                },
                {
                    "option": "પાણીનું પ્રદૂષણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ધ્વનિનું પ્રદૂષણ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "દવાખાનાં, હૉસ્પિટલ, પ્રસૂતિગૃહ વગેરે સ્થળોએ દરદીની સારવારમાં વપરાયેલી સાધનસામગ્રીનો કચરો શું કહેવાય ?",
            "a": [
                {
                    "option": "વેસ્ટર્ન",
                    "correct": false
                },
                {
                    "option": "મેડિકલ વેસ્ટ",
                    "correct": true
                },
                {
                    "option": "પોલીસ સ્ટેશન વેસ્ટ",
                    "correct": false
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મેડિકલ વેસ્ટ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
             },
        { // Question 16
            "q": "આપણું જીવન ટકાવી રાખવા માટે કયું તત્ત્વ મહત્વનું નથી ?",
            "a": [
                {
                    "option": "હવા",
                    "correct": false
                },
                {
                    "option": "પાણી",
                    "correct": false
                },
                {
                    "option": "જમીન",
                    "correct": false
                },
                {
                    "option": "જસત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જસત</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "શું આવવાથી પર્યાવરણને અસર કરતાં અનેક પ્રકારનાં પ્રદૂષણો વધ્યાં છે ?",
            "a": [
                {
                    "option": "રેલ ગાડીઓ",
                    "correct": false
                },
                {
                    "option": "ઉદ્યોગો",
                    "correct": true
                },
                {
                    "option": "પક્ષીઓ",
                    "correct": false
                },
                {
                    "option": "પશુઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉદ્યોગો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 18
            "q": "શાના અમર્યાદિત ઉપયોગથી પાણી, હવા અને વનસ્પતિમાં અશુદ્ધિઓ પેદા થઈ છે ?",
            "a": [
                {
                    "option": "કૃત્રિમ સ્ત્રોતોના",
                    "correct": false
                },
                {
                    "option": "માનવનિર્મિત સ્ત્રોતોના",
                    "correct": false
                },
                {
                    "option": "કુદરતી સ્ત્રોતોના",
                    "correct": true
                },
                {
                    "option": "પશુનિર્મિત સ્ત્રોતોના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુદરતી સ્ત્રોતોના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 19
            "q": "પાણીનું પ્રદૂષણ થવાનું કારણ કયું નથી ?",
            "a": [
                {
                    "option": "વરસાદ સાથે ઉદ્યોગના ધુમાડા ભળતા",
                    "correct": false
                },
                {
                    "option": "ઉદ્યોગોનું ગંદુ પાણી જળાશયમાં ઠાલવતા",
                    "correct": false
                },
                {
                    "option": "જમીન પરનું ગંદુ પાણી ભૂગર્ભજળ સાથે ભળતા",
                    "correct": false
                },
                {
                    "option": "શહેરોનું ચોખ્ખુ પાણી જળાશયમાં ઠાલવતા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શહેરોનું ચોખ્ખુ પાણી જળાશયમાં ઠાલવતા</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 20
            "q": "જળપ્રદૂષણની અસર શું થાય છે ?",
            "a": [
                {
                    "option": "જળચર પ્રાણીઓ વૃદ્ધિ પામે",
                    "correct": false
                },
                {
                    "option": "ગંદા પાણીથી શાકભાજી પ્રદૂષકોથી ભરેલા પાકે",
                    "correct": true
                },
                {
                    "option": "જળપ્રદૂષણથી રોગ ન ફેલાય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગંદા પાણીથી શાકભાજી પ્રદૂષકોથી ભરેલા પાકે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 21
            "q": "જળપ્રદૂષણથી બચવાનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "ઉદ્યોગોનું પાણી શુદ્ધ કરી જળાશયમાં ઠાલવવું ",
                    "correct": true
                },
                {
                    "option": "સરકારે ઉદ્યોગો ઉપર નિયંત્રણ રાખવું નહીં",
                    "correct": false
                },
                {
                    "option": "પાણીનો અવિવેકપૂર્વક ઉપયોગ કરવો",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉદ્યોગોનું પાણી શુદ્ધ કરી જળાશયમાં ઠાલવવું </p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "હવાનું પ્રદૂષણ થવાનું કારણ કયું છે ?",
            "a": [
                {
                    "option": "ઉદ્યોગોના ધુમાડાથી",
                    "correct": false
                },
                {
                    "option": "વાહનોના ધુમાડાથી",
                    "correct": false
                },
                {
                    "option": "જંગલો કાપવાથી",
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
        { // Question 23
            "q": "હવાના પ્રદૂષણની અસર શું થાય છે ? ",
            "a": [
                {
                    "option": "ગુંગળાઈને પ્રાણીઓનું મૃત્યુ થાય",
                    "correct": true
                },
                {
                    "option": "ઉડતા ધૂળના રજકણોથી હવા શુદ્ધ થાય",
                    "correct": false
                },
                {
                    "option": "ઝેરી વાયુથી ઍસિડ વરસાદ ન થાય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુંગળાઈને પ્રાણીઓનું મૃત્યુ થાય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 24
            "q": "હવાનું પ્રદૂષણ અટકાવવાનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": false
                },
                {
                    "option": "ઝેરી ગૅસ ઉત્પન્ન થાય તેવા સાધનો વિકસાવવા",
                    "correct": false
                },
                {
                    "option": "પર્યાવરણ જાગૃતિ અભિયાન ચલાવવું",
                    "correct": true
                },
                {
                    "option": "વાહનોમાં P.U.C.નો  અમલ ન કરવો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્યાવરણ જાગૃતિ અભિયાન ચલાવવું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "જમીનનું પ્રદૂષણ થવાનું કારણ કયું છે ?",
            "a": [
                {
                    "option": "ઉદ્યોગોનું પાણી જમીન પર છોડી દેતા",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "પ્લાસ્ટિક જમીન પર ફેંકી દેતા",
                    "correct": false
                },
                {
                    "option": "રાસાયણિક ખાતરનો વધુ પડતો ઉપયોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "જમીન પ્રદૂષણથી શું અસર થાય છે ?",
            "a": [
                {
                    "option": "પ્લાસ્ટિક સૂક્ષ્મ જીવાણુઓનો નાશ કરે",
                    "correct": false
                },
                {
                    "option": "હાડકાંના રોગો થાય",
                    "correct": false
                },
                {
                    "option": "પ્રદૂષિત જમીનમાં ઉગતા પાક પ્રદૂષિત હોય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "નીચેનામાંથી જમીન પ્રદૂષણથી કયો રોગ થાય છે ?",
            "a": [
                {
                    "option": "ક્ષય",
                    "correct": true
                },
                {
                    "option": "ન્યુમોનિયા",
                    "correct": false
                },
                {
                    "option": "શરદી",
                    "correct": false
                },
                {
                    "option": "કૉલેરા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્ષય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 28
            "q": "જમીન પ્રદૂષણ અટકાવવાનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "પ્લાસ્ટિકને રિસાઈકલ કરી ફરી ઉપયોગ કરવો",
                    "correct": false
                },
                {
                    "option": "ઉપજાઉ જમીન પર ઉદ્યોગ ન સ્થાપવો",
                    "correct": false
                },
                {
                    "option": "જંતુનાશક દવાઓનો ઓછો ઉપયોગ કરવો",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "ધ્વનિનું પ્રદૂષણ થવાનું કારણ કયું છે ?",
            "a": [
                {
                    "option": "કારખાનામાં ચાલતા યંત્રોથી",
                    "correct": true
                },
                {
                    "option": "મોટા લાઉડસ્પીકરો ન વગાડવાથી",
                    "correct": false
                },
                {
                    "option": "ફટાકડા ન ફોડવાથી",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કારખાનામાં ચાલતા યંત્રોથી</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 30
            "q": "ધ્વનિ પ્રદૂષણથી થતી અસર કઈ છે ?",
            "a": [
                {
                    "option": "બહેરાશ આવે",
                    "correct": true
                },
                {
                    "option": "માનસિક સ્વાસ્થ્ય ઉપર અસર થતી નથી",
                    "correct": false
                },
                {
                    "option": "ચીડિયાપણું ઘટી જાય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહેરાશ આવે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ધ્વનિ પ્રદૂષણ અટકાવવા કયો ઉપાય કરવો જોઈએ ?",
            "a": [
                {
                    "option": "વાહનોમાં P.U.C.નો કડક અમલ કરવો",
                    "correct": false
                },
                {
                    "option": "રસ્તાની આજુબાજુ વૃક્ષો વાવવા",
                    "correct": false
                },
                {
                    "option": "ફટાકડા ન ફોડવા",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
    ]
};
