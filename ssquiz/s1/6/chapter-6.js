// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 6  સ્થાયી જીવનની શરૂઆત",
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
            "q": "ગોમટુંને રોજ શિકારે જવામાં કોની વધારે હૂંફ મળે છે ?",
            "a": [
                {
                    "option": "મિત્રોની",
                    "correct": false
                },
                {
                    "option": "ગૂલુની",
                    "correct": true
                },
                {
                    "option": "જોમાની",
                    "correct": false
                },
                {
                    "option": "પિતાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગૂલુની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ગોમટુંની આખી ટોળીને રોજ શિકાર માટે ભટકવાનું હોય છે, કારણ કે . . .",
            "a": [
                {
                    "option": "એક જગ્યાએ રહેવું ગમતું નથી",
                    "correct": false
                },
                {
                    "option": "જંગલી પ્રાણીઓથી ભાગતા રહેતાં હતાં ",
                    "correct": false
                },
                {
                    "option": "તો જ તેઓને શિકાર મળતો",
                    "correct": false
                },
                {
                    "option": "એમને ઘર જેવું કંઈ છે જ નહિ.",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એમને ઘર જેવું કંઈ છે જ નહિ.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આદિમાનવ રહેઠાણના સ્થળ તરીકે મોટે ભાગે શું પસંદ કરતો ?",
            "a": [
                {
                    "option": "ગુફા",
                    "correct": true
                },
                {
                    "option": "વાડો",
                    "correct": false
                },
                {
                    "option": "પર્વતની તળેટી",
                    "correct": false
                },
                {
                    "option": "ખેતર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુફા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "આદિમાનવનું ભટકતા રહેવાનું એકમાત્ર કારણ કયું હતું ?",
            "a": [
                {
                    "option": "ગરમી-ઠંડી",
                    "correct": false
                },
                {
                    "option": "ખોરાકની જરૂરિયાત",
                    "correct": true
                },
                {
                    "option": "વરસાદ",
                    "correct": false
                },
                {
                    "option": "પ્રાણીઓની અછત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખોરાકની જરૂરિયાત</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "જોમાનું ઝૂંપડું પ્રવૃત્તિઓનું કેન્દ્ર રહેતું, કારણ કે . . .",
            "a": [
                {
                    "option": "તેનું ઝૂંપડું ખૂબ મોટું હતું.",
                    "correct": false
                },
                {
                    "option": "તેના ઝૂંપડામાં બધી સગવડો હતી.",
                    "correct": false
                },
                {
                    "option": "તેના પિતા કબીલાના નાયક હતા.",
                    "correct": true
                },
                {
                    "option": "તેનું ઝૂંપડું કસબાની બરાબર વચ્ચે હતું.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તેના પિતા કબીલાના નાયક હતા.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ખોદકામ કરતાં પુરાતત્ત્વવિદોને મળેલા અવશેષોમાં કઈ વસ્તુ નહોતી ?",
            "a": [
                {
                    "option": "અનાજના દાણા",
                    "correct": false
                },
                {
                    "option": "પશુઓનાં હાડકાં",
                    "correct": false
                },
                {
                    "option": "રમકડાં",
                    "correct": true
                },
                {
                    "option": "ખેતીનાં ઓજારો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રમકડાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "સંભવતઃ સૌથી પહેલાં ઘઉં અને જવ ઉગાડવાનું ક્યા પુરાતન સ્થળે શરૂ થયેલું મનાય છે ?",
            "a": [
                {
                    "option": "મેહરગઢમાં",
                    "correct": true
                },
                {
                    "option": "મહાગઢમાં",
                    "correct": false
                },
                {
                    "option": "હુલ્લરમાં",
                    "correct": false
                },
                {
                    "option": "ચિરાદમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મેહરગઢમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "પુરાતત્ત્વવિદોને ક્યા સ્થળેથી ઘેટાં-બકરાં અને ગાયોનાં હાડકાં વધુ પ્રમાણમાં મળ્યાં છે ?",
            "a": [
                {
                    "option": "હુલ્લરમાંથી",
                    "correct": false
                },
                {
                    "option": "મહાગઢમાંથી",
                    "correct": false
                },
                {
                    "option": "મેહરગઢમાંથી",
                    "correct": true
                },
                {
                    "option": "ચિરાદમાંથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મેહરગઢમાંથી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "મેહરગઢમાંથી મળેલ ઘરના ઓરડા કેટલા છે ?",
            "a": [
                {
                    "option": "2 કે તેથી વધુ ",
                    "correct": false
                },
                {
                    "option": "3 કે તેથી વધુ ",
                    "correct": false
                },
                {
                    "option": "5 કે તેથી વધુ ",
                    "correct": false
                },
                {
                    "option": "4 કે તેથી વધુ ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4 કે તેથી વધુ </p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આદિમાનવ ખેતી અને પશુઓની સારસંભાળ રાખવાનું શીખતા કેવું જીવન જીવવા લાગ્યો ?",
            "a": [
                {
                    "option": "જંગલી",
                    "correct": false
                },
                {
                    "option": "સ્થાયી",
                    "correct": true
                },
                {
                    "option": "ભટકતું",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્થાયી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 11
            "q": "પુરાતન સ્થળ મેહરગઢ હાલ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઉત્તરપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "કશ્મીરમાં",
                    "correct": false
                },
                {
                    "option": "પાકિસ્તાનમાં",
                    "correct": true
                },
                {
                    "option": "બિહારમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાકિસ્તાનમાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પુરાતન સ્થળ મહાગઢ હાલ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઉત્તરપ્રદેશમાં",
                    "correct": true
                },
                {
                    "option": "કશ્મીરમાં",
                    "correct": false
                },
                {
                    "option": "પાકિસ્તાનમાં",
                    "correct": false
                },
                {
                    "option": "બિહારમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તરપ્રદેશમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 13
            "q": "પુરાતન સ્થળ બુર્જહોમ હાલ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઉત્તરપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "કશ્મીરમાં",
                    "correct": true
                },
                {
                    "option": "આંધ્રપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "બિહારમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કશ્મીરમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 14
            "q": "પુરાતન સ્થળ ચિરાદ હાલ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઉત્તરપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "કશ્મીરમાં",
                    "correct": false
                },
                {
                    "option": "પાકિસ્તાનમાં",
                    "correct": false
                },
                {
                    "option": "બિહારમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બિહારમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 15
            "q": "પુરાતન સ્થળ હુલ્લર હાલ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઉત્તરપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "કશ્મીરમાં",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશમાં",
                    "correct": true
                },
                {
                    "option": "બિહારમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંધ્રપ્રદેશમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 16
            "q": "મેહરગઢમાંથી મળેલી એક કબરમાં સામાનની સાથે શું દાટવામાં આવ્યું હતું ?",
            "a": [
                {
                    "option": "ગાય",
                    "correct": false
                },
                {
                    "option": "ભેંસ",
                    "correct": false
                },
                {
                    "option": "બકરી",
                    "correct": true
                },
                {
                    "option": "કૂતરો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બકરી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 17
            "q": "પાલતું બનાવાયેલ સૌપ્રથમ પ્રાણી કયું હતું ?",
            "a": [
                {
                    "option": "ગાય",
                    "correct": false
                },
                {
                    "option": "ઘેટાં બકરાં",
                    "correct": false
                },
                {
                    "option": "ભેંસ",
                    "correct": false
                },
                {
                    "option": "કૂતરો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૂતરો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 18
            "q": "અનાજ અને વનસ્પતિઓ વાટવા માટે પુરાતત્ત્વવિદોને જમીનમાંથી શું મળ્યું હતું ?  ",
            "a": [
                {
                    "option": "ચાકુ",
                    "correct": false
                },
                {
                    "option": "ખરલ",
                    "correct": true
                },
                {
                    "option": "ચકમક પથ્થર",
                    "correct": false
                },
                {
                    "option": "દાતરડું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખરલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        }// no comma here 
    ]
};
