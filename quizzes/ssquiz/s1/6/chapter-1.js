// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 1  ઇતિહાસ જાણવાના સ્ત્રોત",
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
            "q": "ચિત્રો, વસ્તુઓ કે સિક્કા જેવા સ્ત્રોતોના આધારે કોના વિશે જાણી શકાય છે ?",
            "a": [
                {
                    "option": "સમય",
                    "correct": false
                },
                {
                    "option": "ઇતિહાસ",
                    "correct": true
                },
                {
                    "option": "દેશ-વિદેશ",
                    "correct": false
                },
                {
                    "option": "ફિલ્મો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇતિહાસ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "તાડપત્રો અને ભોજપત્રો પર મુખ્યત્વે કઈ લિપિ જોવા મળે છે ?",
            "a": [
                {
                    "option": "સધુક્કડી",
                    "correct": false
                },
                {
                    "option": "ભોજપુરી",
                    "correct": false
                },
                {
                    "option": "અવધિ",
                    "correct": false
                },
                {
                    "option": "પાંડુ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાંડુ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ધાતુ કે પથ્થર પર કોતરેલા લેખો કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "અભિલેખો",
                    "correct": true
                },
                {
                    "option": "ધાતુલેખો",
                    "correct": false
                },
                {
                    "option": "પાષાણલેખો",
                    "correct": false
                },
                {
                    "option": "ભોજલેખો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અભિલેખો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "પ્રાચીન સમયનો ઇતિહાસ જાણવાવાળી વ્યક્તિને કયા નામે ઓળખશો ?",
            "a": [
                {
                    "option": "ભાષાવિદ",
                    "correct": false
                },
                {
                    "option": "સમાજવિદ",
                    "correct": false
                },
                {
                    "option": "પુરાતત્ત્વવિદ",
                    "correct": true
                },
                {
                    "option": "ઇતિહાસવિદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુરાતત્ત્વવિદ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "શ્રી હેમચંદ્રાચાર્ય લાઇબ્રેરી કયા શહેરમાં આવેલી છે ?",
            "a": [
                {
                    "option": "અમદાવાદમાં",
                    "correct": false
                },
                {
                    "option": "રાજકોટમાં",
                    "correct": false
                },
                {
                    "option": "વડોદરામાં",
                    "correct": false
                },
                {
                    "option": "પાટણમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાટણમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "વર્તમાનને સમજવા માટે શાની જાણકારી હોવી જરૂરી છે ?",
            "a": [
                {
                    "option": "ભવિષ્યકાળની",
                    "correct": false
                },
                {
                    "option": "વર્તમાનકાળની",
                    "correct": false
                },
                {
                    "option": "ભૂતકાળની",
                    "correct": true
                },
                {
                    "option": "ત્રણેયની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભૂતકાળની</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "શામાંથી આપણને ઇતિહાસ વિષયક જાણકારી મળી રહે છે ?",
            "a": [
                {
                    "option": "સંગ્રહપોથીમાંથી",
                    "correct": true
                },
                {
                    "option": "આજના નકશામાંથી",
                    "correct": false
                },
                {
                    "option": "હાલના વાસણોમાંથી",
                    "correct": false
                },
                {
                    "option": "એકેયમાંથી નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંગ્રહપોથીમાંથી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ભૂર્જ નામનાં વિશિષ્ટ વૃક્ષો કયા પર્વત પર થાય છે ?",
            "a": [
                {
                    "option": "જૂનાગઢ",
                    "correct": false
                },
                {
                    "option": "પાવાગઢ",
                    "correct": false
                },
                {
                    "option": "હિમાલય",
                    "correct": true
                },
                {
                    "option": "અંબાજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિમાલય</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ભૂર્જ નામનાં વૃક્ષોની છાલનો ઉપયોગ કરીને બનાવાતા પત્રોને શું કહે છે ?",
            "a": [
                {
                    "option": "ભોજપત્ર",
                    "correct": true
                },
                {
                    "option": "તાડપત્ર",
                    "correct": false
                },
                {
                    "option": "તામ્રપત્ર",
                    "correct": false
                },
                {
                    "option": "ભૂપત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભોજપત્ર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10 
            "q": "જ્યાં અભિલેખો રાખવામાં આવે છે તેને શું કહે છે ?",
            "a": [
                {
                    "option": "અભિલેખાભવન",
                    "correct": false
                },
                {
                    "option": "અભિલેખામકાન",
                    "correct": false
                },
                {
                    "option": "અભિલેખાગાર",
                    "correct": true
                },
                {
                    "option": "અભ્યાસલેખાગાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અભિલેખાગાર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "તાંબાના પતરા ઉપર કોતરીને લખવામાં આવતા લખાણને શું કહે છે ?",
            "a": [
                {
                    "option": "ભોજપત્ર",
                    "correct": false
                },
                {
                    "option": "તામ્રપત્ર",
                    "correct": true
                },
                {
                    "option": "તાડપત્ર",
                    "correct": false
                },
                {
                    "option": "ભૂપત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તામ્રપત્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "રાષ્ટ્રીય અભિલેખાગાર ક્યાં આવેલો છે ?",
            "a": [
                {
                    "option": "મુંબઈ",
                    "correct": false
                },
                {
                    "option": "ચેન્નઈ",
                    "correct": false
                },
                {
                    "option": "દિલ્લી",
                    "correct": true
                },
                {
                    "option": "કોલકત્તા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિલ્લી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "જ્યારે વીસમી સદી‌ પૂરી થઈ ત્યારે ડિસેમ્બર 2000માં લગભગ તમામ વર્તમાનપત્રોમાં વીસમી સદીમાં બનેલા બનાવોની વિગતો ચિત્રાત્મક રીતે આવી હતી,તેને શું નામ આપવામાં આવ્યું હતું ?",
            "a": [
                {
                    "option": "મિનિમમ ગેલેરી",
                    "correct": false
                },
                {
                    "option": "મેક્સિમમ ગેલેરી",
                    "correct": false
                },
                {
                    "option": "મિલિયન ગેલેરી",
                    "correct": false
                },
                {
                    "option": "મિલેનિયમ ગેલેરી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મિલેનિયમ ગેલેરી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "તાડના વૃક્ષની છાલ ઉપર લખવામાં આવતા લેખોને શું કહેવામાં આવતું ? ",
            "a": [
                {
                    "option": "તાડપત્ર",
                    "correct": true
                },
                {
                    "option": "ભોજપત્ર",
                    "correct": false
                },
                {
                    "option": "તામ્રપત્ર",
                    "correct": false
                },
                {
                    "option": "ભૂપત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાડપત્ર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કઈ પદ્ધતિથી પુરાતન સમયના અવશેષોનો ચોક્કસ સમય જાણી શકાય છે ?",
            "a": [
                {
                    "option": "કાર્બન ડેટિંગ પદ્ધતિથી",
                    "correct": true
                },
                {
                    "option": "એસિડ ટેસ્ટ પદ્ધતિથી",
                    "correct": false
                },
                {
                    "option": "બેઈઝ ટેસ્ટ પદ્ધતિથી",
                    "correct": false
                },
                {
                    "option": "ત્રણેય પદ્ધતિથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડેટિંગ પદ્ધતિથી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 16
            "q": "અભિલેખોમાં કોનો સમાવેશ થતો નથી ?",
            "a": [
                {
                    "option": "તાડપત્રો",
                    "correct": true
                },
                {
                    "option": "શિલાલેખો",
                    "correct": false
                },
                {
                    "option": "તામ્રપત્રો",
                    "correct": false
                },
                {
                    "option": "ત્રણેયનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાડપત્રો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 17
            "q": "પથ્થર કોતરીને લખવામાં આવેલા લેખને શું કહે છે ?",
            "a": [
                {
                    "option": "તાડપત્ર",
                    "correct": false
                },
                {
                    "option": "શિલાલેખ",
                    "correct": true
                },
                {
                    "option": "તામ્રપત્ર",
                    "correct": false
                },
                {
                    "option": "ભોજપત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શિલાલેખ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};
