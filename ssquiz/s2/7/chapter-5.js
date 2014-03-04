// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 5  ભારત : ખેતી, ઉદ્યોગ અને પરિવહન",
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
            "q": "બાજરીનું સૌથી વધુ ઉત્પાદન ક્યાં થાય છે ?",
            "a": [
                {
                    "option": "ગુજરાત",
                    "correct": false
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": true
                },
                {
                    "option": "પંજાબ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજસ્થાન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ચાનો પાક ક્યાં ઉગાડવામાં આવે છે ?",
            "a": [
                {
                    "option": "ઢોળાવવાળી જમીનમાં",
                    "correct": true
                },
                {
                    "option": "રેતાળ જમીનમાં",
                    "correct": false
                },
                {
                    "option": "કાળી જમીનમાં",
                    "correct": false
                },
                {
                    "option": "પાણી ભરાઈ રહે તેવી જમીનમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઢોળાવવાળી જમીનમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "કુટીર ઉદ્યોગમાં શું બનાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "બસ",
                    "correct": false
                },
                {
                    "option": "સિમેન્ટ",
                    "correct": false
                },
                {
                    "option": "પાપડ",
                    "correct": true
                },
                {
                    "option": "ખાંડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાપડ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ઊની ઉદ્યોગ માટેનું મુખ્ય કેન્દ્ર કયું છે ?",
            "a": [
                {
                    "option": "જામનગર",
                    "correct": false
                },
                {
                    "option": "લુધિયાણા",
                    "correct": true
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "ઉત્તર પ્રદેશ ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લુધિયાણા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ભારતમાં રાષ્ટ્રીય ધોરીમાર્ગના માઈલ સ્ટોનમાં શું લખેલું હોય છે ?",
            "a": [
                {
                    "option": "D.M.R.",
                    "correct": false
                },
                {
                    "option": "S.H.",
                    "correct": false
                },
                {
                    "option": "N.H.",
                    "correct": true
                },
                {
                    "option": "S.T.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  N.H.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ભારતમાં મગફળીનું સૌથી વધુ ઉત્પાદન કયા રાજ્યમાં થાય છે ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": true
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "આંધ્ર પ્રદેશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુજરાત</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "માત્ર વરસાદ દ્વારા થતી ખેતીને કઈ ખેતી કહે છે ?",
            "a": [
                {
                    "option": "સામાન્ય",
                    "correct": true
                },
                {
                    "option": "ખરીફ",
                    "correct": false
                },
                {
                    "option": "રવી",
                    "correct": false
                },
                {
                    "option": "સૂકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સામાન્ય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "દુનિયામાં શેરડીનું સૌથી વધુ ઉત્પાદન કયા દેશમાં થાય છે ?",
            "a": [
                {
                    "option": "યુ.એસ.એ.",
                    "correct": false
                },
                {
                    "option": "ચીન",
                    "correct": false
                },
                {
                    "option": "ભારત",
                    "correct": true
                },
                {
                    "option": "રશિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભારત</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ભારતનું કયું રાજ્ય કપાસના ઉત્પાદનમાં મોખરે છે ?",
            "a": [
                {
                    "option": "હરિયાણા",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": true
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "પંજાબ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુજરાત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ભારતમાં ઘઉંનું વિપુલ ઉત્પાદન ક્યા રાજ્યમાં થાય છે ?",
            "a": [
                {
                    "option": "પંજાબ",
                    "correct": true
                },
                {
                    "option": "બિહાર",
                    "correct": false
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પંજાબ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ભારતનો સૌથી વધુ મહત્ત્વનો પાક કયો છે ?",
            "a": [
                {
                    "option": "જુવાર",
                    "correct": false
                },
                {
                    "option": "શણ",
                    "correct": false
                },
                {
                    "option": "બાજરી",
                    "correct": false
                },
                {
                    "option": "ડાંગર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ડાંગર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ભારતમાં ચાનું સૌથી વધુ ઉત્પાદન કયા રાજ્યમાં થાય છે ?",
            "a": [
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                },
                {
                    "option": "અસમ",
                    "correct": true
                },
                {
                    "option": "હિમાચલ પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "પશ્ચીમ બંગાળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અસમ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ભારતમાં કૉફીનું સૌથી વધુ ઉત્પાદન કયા રાજ્યમાં થાય છે ?",
            "a": [
                {
                    "option": "કર્ણાટક",
                    "correct": true
                },
                {
                    "option": "મધ્ય પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "અસમ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર પ્રદેશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કર્ણાટક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "નીચેનામાંથી કઈ વસ્તુ લધુ ઉદ્યોગમાં બને છે ?",
            "a": [
                {
                    "option": "લોખંડ-પોલાદ",
                    "correct": false
                },
                {
                    "option": "જહાજ",
                    "correct": false
                },
                {
                    "option": "વાસણો",
                    "correct": true
                },
                {
                    "option": "સિમેન્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વાસણો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "નીચેનામાંથી ક્યા સ્થળે વર્તમાનપત્રોનો કાગળ બને છે ?",
            "a": [
                {
                    "option": "હોશંગાબાદમાં",
                    "correct": false
                },
                {
                    "option": "નેપાનગરમાં",
                    "correct": true
                },
                {
                    "option": "ઔરંગાબાદમાં",
                    "correct": false
                },
                {
                    "option": "દેવાસમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નેપાનગર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "દુનિયામાં સૌથી મોટી સડકજાળ કયા દેશમાં છે ?",
            "a": [
                {
                    "option": "જાપાનમાં",
                    "correct": false
                },
                {
                    "option": "પાકિસ્તાનમાં",
                    "correct": false
                },
                {
                    "option": "શ્રીલંકામાં",
                    "correct": false
                },
                {
                    "option": "ભારતમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભારતમાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ભારતમાં સૌથી ટૂંકો ધોરીમાર્ગ કયો છે ?",
            "a": [
                {
                    "option": "ધોરીમાર્ગ નંબર 5",
                    "correct": false
                },
                {
                    "option": "ધોરીમાર્ગ નંબર 35",
                    "correct": true
                },
                {
                    "option": "ધોરીમાર્ગ નંબર 7",
                    "correct": false
                },
                {
                    "option": "ધોરીમાર્ગ નંબર 8",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ધોરીમાર્ગ નંબર 35</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ભારતમાં સૌથી લાંબો ધોરીમાર્ગ કયો છે ?",
            "a": [
                {
                    "option": "ધોરીમાર્ગ નંબર 5",
                    "correct": false
                },
                {
                    "option": "ધોરીમાર્ગ નંબર 35",
                    "correct": false
                },
                {
                    "option": "ધોરીમાર્ગ નંબર 8",
                    "correct": false
                },
                {
                    "option": "ધોરીમાર્ગ નંબર 7",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ધોરીમાર્ગ નંબર 7</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગુજરાતમાં આમાંથી કયા સ્થળે રોપ-વે આવેલો છે ?",
            "a": [
                {
                    "option": "પાવાગઢમાં",
                    "correct": true
                },
                {
                    "option": "ભવનાથ",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢમાં",
                    "correct": false
                },
                {
                    "option": "સોનગઢમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાવાગઢમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "શિયાળુ પાકને ક્યો પાક કહે છે ?",
            "a": [
                {
                    "option": "સામાન્ય",
                    "correct": false
                },
                {
                    "option": "ખરીફ",
                    "correct": false
                },
                {
                    "option": "રવી",
                    "correct": true
                },
                {
                    "option": "સૂકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રવી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ભારત કેવો દેશ છે ?",
            "a": [
                {
                    "option": "કૃષિપ્રધાન",
                    "correct": true
                },
                {
                    "option": "ઉદ્યોગપ્રધાન",
                    "correct": false
                },
                {
                    "option": "સેવાપ્રધાન",
                    "correct": false
                },
                {
                    "option": "દાનપ્રધાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૃષિપ્રધાન</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "ભારતના આશરે કેટલા લોકો ખેતીના વ્યવસાય સાથે સંકળાયેલા છે ?",
            "a": [
                {
                    "option": "60%",
                    "correct": false
                },
                {
                    "option": "70%",
                    "correct": true
                },
                {
                    "option": "50%",
                    "correct": false
                },
                {
                    "option": "40%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 70%</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "બાજરી અને જુવારને કેવી જમીન માફક આવે છે ?",
            "a": [
                {
                    "option": "વધુ કસવાળી",
                    "correct": false
                },
                {
                    "option": "વધુ પાણીવાળી",
                    "correct": false
                },
                {
                    "option": "ઓછા કસવાળી",
                    "correct": true
                },
                {
                    "option": "ચીકણી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓછા કસવાળી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "નીચેનામાંથી ક્યા પાકના ઉત્પાદનમાં ભારત આખા વિશ્વમાં પ્રથમ ક્રમે છે ?",
            "a": [
                {
                    "option": "મકાઈ",
                    "correct": false
                },
                {
                    "option": "મગફળી",
                    "correct": false
                },
                {
                    "option": "ડાંગર",
                    "correct": false
                },
                {
                    "option": "બાજરી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાજરી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "જે જમીનમાં કૂવા, તળાવ, નહેરો વગેરેના આધારે સિંચાઈ કરીને ખેતી થતી હોય તેને કઈ ખેતી કહે છે ?",
            "a": [
                {
                    "option": "બાગાયતી ખેતી",
                    "correct": false
                },
                {
                    "option": "સિંચાઈ ખેતી ",
                    "correct": true
                },
                {
                    "option": "અવકાશીય ખેતી",
                    "correct": false
                },
                {
                    "option": "સૂકી ખેતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિંચાઈ ખેતી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "બગીચાની પદ્ધતિએ સારસંભાળ લઈને થતી ખેતીને કઈ ખેતી કહે છે ?",
            "a": [
                {
                    "option": "બાગાયતી ખેતી",
                    "correct": true
                },
                {
                    "option": "સિંચાઈ ખેતી ",
                    "correct": false
                },
                {
                    "option": "અવકાશીય ખેતી",
                    "correct": false
                },
                {
                    "option": "સૂકી ખેતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાગાયતી ખેતી</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "મગફળીમાંથી જ દેશનું કેટલાં ટકા ખાદ્યતેલ પ્રાપ્ત કરવામાં આવે છે ?",
            "a": [
                {
                    "option": "70%",
                    "correct": false
                },
                {
                    "option": "60%",
                    "correct": false
                },
                {
                    "option": "50%",
                    "correct": true
                },
                {
                    "option": "30%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 50%</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ભારતમાં કેટલાં ટકા ખેતી સિંચાઈથી થાય છે ? ",
            "a": [
                {
                    "option": "50%",
                    "correct": false
                },
                {
                    "option": "60%",
                    "correct": false
                },
                {
                    "option": "40%",
                    "correct": false
                },
                {
                    "option": "30%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30%</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "કપાસનો પાક તૈયાર થતા કેટલાં મહિના લાગે છે ?",
            "a": [
                {
                    "option": "6 થી 8 મહિના",
                    "correct": true
                },
                {
                    "option": "16 થી 18 મહિના",
                    "correct": false
                },
                {
                    "option": "8 થી 10 મહિના",
                    "correct": false
                },
                {
                    "option": "10 થી 12 મહિના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 6 થી 8 મહિના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "શણનો પાક તૈયાર થતા કેટલાં મહિના લાગે છે ?",
            "a": [
                {
                    "option": "6 થી 8 મહિના",
                    "correct": false
                },
                {
                    "option": "16 થી 18 મહિના",
                    "correct": false
                },
                {
                    "option": "8 થી 10 મહિના",
                    "correct": true
                },
                {
                    "option": "10 થી 12 મહિના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8 થી 10 મહિના</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "નીચેનામાંથી ક્યા પાકના ઉત્પાદનમાં ભારત આખા વિશ્વમાં પ્રથમ ક્રમે છે ?",
            "a": [
                {
                    "option": "મકાઈ",
                    "correct": false
                },
                {
                    "option": "મગફળી",
                    "correct": false
                },
                {
                    "option": "ડાંગર",
                    "correct": false
                },
                {
                    "option": "ચા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "શેરડીને કેવી આબોહવા વધુ માફક આવે છે ?",
            "a": [
                {
                    "option": "ગરમ અને ભેજ વગરની",
                    "correct": false
                },
                {
                    "option": "ઠંડી અને ભેજ વગરની",
                    "correct": false
                },
                {
                    "option": "ઠંડી અને ભેજવાળી",
                    "correct": false
                },
                {
                    "option": "ગરમ અને ભેજવાળી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગરમ અને ભેજવાળી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "શણના છોડને શામાં કોહડાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "પાણીમાં",
                    "correct": true
                },
                {
                    "option": "કેરોસીનમાં",
                    "correct": false
                },
                {
                    "option": "તેલમાં",
                    "correct": false
                },
                {
                    "option": "પેટ્રોલમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણીમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "'ઘઉંનો ભંડાર' કોને કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "ગુજરાતને",
                    "correct": false
                },
                {
                    "option": "પંજાબને",
                    "correct": true
                },
                {
                    "option": "ઓરિસ્સાને",
                    "correct": false
                },
                {
                    "option": "ઉત્તરપ્રદેશને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંજાબને</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "ગુજરાતમાં કયા પ્રદેશમાં થતા ઘઉંને 'ભાલિયા ઘઉં' તરીકે ઓળખવામાં આવે છે ?",
            "a": [
                {
                    "option": "કાનમ",
                    "correct": false
                },
                {
                    "option": "ભાલણ",
                    "correct": false
                },
                {
                    "option": "ભાલ",
                    "correct": true
                },
                {
                    "option": "ચરોતર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભાલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "કૉફીના છોડની શોધ કોણે કરી હતી ?",
            "a": [
                {
                    "option": "કાદડીએ",
                    "correct": false
                },
                {
                    "option": "કાકડીએ",
                    "correct": false
                },
                {
                    "option": "કાગડીએ",
                    "correct": false
                },
                {
                    "option": "કાલદીએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાલદીએ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "ભારતનું ચોમાસું કેવું છે ?",
            "a": [
                {
                    "option": "અનિયમિત અને અનિશ્ચિત",
                    "correct": true
                },
                {
                    "option": "નિયમિત અને અનિશ્ચિત",
                    "correct": false
                },
                {
                    "option": "અનિયમિત અને નિશ્ચિત",
                    "correct": false
                },
                {
                    "option": "નિયમિત અને નિશ્ચિત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અનિયમિત અને અનિશ્ચિત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "શાના કારણે ભારતમાં એક કરતાં વધારે પાક વર્ષ દરમિયાન લેવાનું શક્ય બન્યું ?",
            "a": [
                {
                    "option": "વરસાદથી",
                    "correct": false
                },
                {
                    "option": "સિંચાઇથી",
                    "correct": true
                },
                {
                    "option": "સંચાથી",
                    "correct": false
                },
                {
                    "option": "સંઘથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિંચાઇથી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "હાલ દુનિયાની સૌથી મોટી નહેરયોજના કઈ છે ?",
            "a": [
                {
                    "option": "ઉકાઈ",
                    "correct": false
                },
                {
                    "option": "કાંકરાપાર",
                    "correct": false
                },
                {
                    "option": "ભાખરાનાંગલ",
                    "correct": false
                },
                {
                    "option": "ઇન્દિરા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇન્દિરા</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "મૂડીરોકાણ, શ્રમિકોની સંખ્યા અને ઉત્પાદનના આધારે ઉદ્યોગોના કેટલા પ્રકાર પાડવામાં આવે છે ?",
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
            "q": "મૂડીરોકાણ, શ્રમિકોની સંખ્યા અને ઉત્પાદનના આધારે કયો ઉદ્યોગનો પ્રકાર નથી ?",
            "a": [
                {
                    "option": "કુટિરઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "હલકા ઉદ્યોગ",
                    "correct": true
                },
                {
                    "option": "લઘુઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "ભારે ઉદ્યોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હલકા ઉદ્યોગ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
   },
        { // Question 42
            "q": "જે ઉદ્યોગમાં લોકો પોતાના ઘરમાં હાથેથી વસ્તુઓ બનાવે, જેમાં મૂડીરોકાણ ઓછું હોય તેને કયો ઉદ્યોગ કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "કુટિરઉદ્યોગ",
                    "correct": true
                },
                {
                    "option": "હલકા ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "લઘુઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "ભારે ઉદ્યોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુટિરઉદ્યોગ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 43
            "q": "જે ઉદ્યોગમાં એક કારખાનું હોય, થોડાં યંત્રો હોય, વધારે મજૂરો હોય, જેનું મૂડીરોકાણ ગૃહ ઉદ્યોગ કરતા વધારે હોય તેને કયો ઉદ્યોગ કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "કુટિરઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "હલકા ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "લઘુઉદ્યોગ",
                    "correct": true
                },
                {
                    "option": "ભારે ઉદ્યોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લઘુઉદ્યોગ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "જે ઉદ્યોગમાં મોટાં-મોટાં કારખાનાં હોય, મોટાં યંત્રો હોય, હજારો મજૂરો કામ કરતાં હોય અને સૌથી વધુ મૂડીરોકાણ હોય તેને કયો ઉદ્યોગ કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "કુટિરઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "હલકા ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "લઘુઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "ભારે ઉદ્યોગ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભારે ઉદ્યોગ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "નીચેનામાંથી કઈ વસ્તુ ગૃહઉદ્યોગમાં બને છે ?",
            "a": [
                {
                    "option": "અગરબત્તી",
                    "correct": true
                },
                {
                    "option": "રમકડાં",
                    "correct": false
                },
                {
                    "option": "ટી.વી.",
                    "correct": false
                },
                {
                    "option": "લોખંડ-પોલાદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અગરબત્તી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "નીચેનામાંથી કઈ વસ્તુ ભારે ઉદ્યોગમાં બને છે ?",
            "a": [
                {
                    "option": "અથાણા",
                    "correct": false
                },
                {
                    "option": "મોટર",
                    "correct": true
                },
                {
                    "option": "પાપડ",
                    "correct": false
                },
                {
                    "option": "ફ્રીઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મોટર</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "સુતરાઉ કાપડ બનાવવા માટે શાની જરૂર પડે છે ?",
            "a": [
                {
                    "option": "શેરડીની",
                    "correct": false
                },
                {
                    "option": "શણની",
                    "correct": false
                },
                {
                    "option": "રૂની",
                    "correct": true
                },
                {
                    "option": "ચાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રૂની</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "કયો પાક પુષ્કળ પ્રમાણમાં થતો હોય ત્યાં સુતરાઉ કાપડનો ઉદ્યોગ વિકસે છે ?",
            "a": [
                {
                    "option": "ઘઉંનો",
                    "correct": false
                },
                {
                    "option": "શણનો",
                    "correct": false
                },
                {
                    "option": "શેરડીનો",
                    "correct": false
                },
                {
                    "option": "કપાસનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કપાસનો</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "ઇ.સ 1818માં ક્યાં પહેલી સુતરાઉ કાપડની મીલ શરૂ થઇ હતી ?",
            "a": [
                {
                    "option": "ફૉર્ટ ગ્લોસ્ટમાં",
                    "correct": true
                },
                {
                    "option": "વિલિયમ ફૉર્ટમાં",
                    "correct": false
                },
                {
                    "option": "ફોર્ટ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "ગોર્ડ જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફૉર્ટ ગ્લોસ્ટમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "નીચેનામાંથી કયા રાજ્યમાં જુવારનું ઉત્પાદન થાય છે ?",
            "a": [
                {
                    "option": "અસમમાં",
                    "correct": false
                },
                {
                    "option": "મહારાષ્ટ્રમાં",
                    "correct": true
                },
                {
                    "option": "પંજાબમાં",
                    "correct": false
                },
                {
                    "option": "હરિયાણામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહારાષ્ટ્રમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "ખાંડ બનાવવા માટે ક્યા પાકની જરૂર પડે છે ?",
            "a": [
                {
                    "option": "ઘઉંના",
                    "correct": false
                },
                {
                    "option": "શણના",
                    "correct": false
                },
                {
                    "option": "શેરડીના",
                    "correct": true
                },
                {
                    "option": "કપાસના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શેરડીના</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "સિમેન્ટ ઉદ્યોગ માટે મુખ્ય કયા ખનીજની જરૂર પડે છે ?",
            "a": [
                {
                    "option": "બૉક્સાઇડની",
                    "correct": false
                },
                {
                    "option": "ડોલોમાઈટની",
                    "correct": false
                },
                {
                    "option": "ગ્રૅફાઈટની",
                    "correct": false
                },
                {
                    "option": "ચૂનાના પથ્થરની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચૂનાના પથ્થરની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "નીચેનામાંથી ક્યા સ્થળે ચલણી નોટો બનાવવાનો કાગળ બને છે ?",
            "a": [
                {
                    "option": "હોશંગાબાદમાં",
                    "correct": true
                },
                {
                    "option": "નેપાનગરમાં",
                    "correct": false
                },
                {
                    "option": "ઔરંગાબાદમાં",
                    "correct": false
                },
                {
                    "option": "વડોદરામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હોશંગાબાદમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "ભારતમાં 'પોલાદ-ઉદ્યોગના પિતા' કોને કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "રતન ટાટા",
                    "correct": false
                },
                {
                    "option": "જમશેદજી ટાટા",
                    "correct": true
                },
                {
                    "option": "મુકેશ અંબાણી",
                    "correct": false
                },
                {
                    "option": "ધીરૂભાઈ અંબાણી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જમશેદજી ટાટા</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "હાલ ખોળ ભરવા માટે મોટાં ભાગે શામાંથી બનેલા કોથળાંનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "પ્લાસ્ટિકમાંથી",
                    "correct": false
                },
                {
                    "option": "રેશમના રેસામાંથી",
                    "correct": false
                },
                {
                    "option": "શણના રેસામાંથી",
                    "correct": true
                },
                {
                    "option": "સુતરના રેસામાંથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શણના રેસામાંથી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "ગુજરાતમાં ખનીજ તેલ શુદ્ધ કરવાની રિફાઇનરી ક્યાં આવેલી છે ?",
            "a": [
                {
                    "option": "કલોલ",
                    "correct": false
                },
                {
                    "option": "કંડલા",
                    "correct": false
                },
                {
                    "option": "ભરૂચ",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડોદરા</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "ગુજરાતમાં નીચેનામાંથી કયા સ્થળે રાસાયણિક ખાતરનું કારખાનું આવેલું છે ?",
            "a": [
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "ભુજ",
                    "correct": false
                },
                {
                    "option": "પાટણ",
                    "correct": false
                },
                {
                    "option": "કલોલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કલોલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 58
            "q": "નીચેનામાંથી કયા રાજ્યમાં બાજરીનું ઉત્પાદન થાય છે ?",
            "a": [
                {
                    "option": "તમિલનાડુમાં",
                    "correct": false
                },
                {
                    "option": "ગુજરાતમાં",
                    "correct": true
                },
                {
                    "option": "કેરલમાં",
                    "correct": false
                },
                {
                    "option": "મધ્ય પ્રદેશમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુજરાતમાં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 59
            "q": "નીચેનામાંથી કયા રાજ્યમાં મકાઈનું ઉત્પાદન થાય છે ?",
            "a": [
                {
                    "option": "જમ્મુ-કાશ્મીરમાં",
                    "correct": false
                },
                {
                    "option": "પંજાબમાં",
                    "correct": false
                },
                {
                    "option": "હરિયાણામાં",
                    "correct": false
                },
                {
                    "option": "મધ્ય પ્રદેશમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મધ્ય પ્રદેશમાં</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "સૂકી ખેતીમાં કયો પાક સારો થાય છે ?",
            "a": [
                {
                    "option": "શેરડીનો",
                    "correct": false
                },
                {
                    "option": "કપાસનો",
                    "correct": false
                },
                {
                    "option": "મકાઈનો",
                    "correct": false
                },
                {
                    "option": "ઘઉંનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘઉંનો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 61
            "q": "ઘરમાં રહીને ખાખરા બનાવવા એ કયો ઉદ્યોગ છે ?",
            "a": [
                {
                    "option": "કુટિરઉદ્યોગ",
                    "correct": true
                },
                {
                    "option": "હલકા ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "લઘુઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "ભારે ઉદ્યોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુટિરઉદ્યોગ</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 62
            "q": "ટાંકણીથી માંડીને મોટાં, વિશાળ યંત્રો અને તેમના ભાગો શામાંથી બને છે ?",
            "a": [
                {
                    "option": "સિમેન્ટમાંથી",
                    "correct": false
                },
                {
                    "option": "લોખંડ-પોલાદમાંથી",
                    "correct": true
                },
                {
                    "option": "પેટ્રોકૅમિકલ્સમાંથી",
                    "correct": false
                },
                {
                    "option": "ખનિજમાંથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોખંડ-પોલાદમાંથી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 63
            "q": "ભારતમાં સડકમાર્ગના પ્રકાર કેટલાં છે ?",
            "a": [
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": true
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 64
            "q": "ભારતમાં સૌથી લાંબો રાષ્ટ્રીય ધોરીમાર્ગ વારાણસીને કોની સાથે જોડે છે ?",
            "a": [
                {
                    "option": "કન્યાકુમારી સાથે",
                    "correct": true
                },
                {
                    "option": "બોનગાઉ સાથે",
                    "correct": false
                },
                {
                    "option": "કોચી સાથે",
                    "correct": false
                },
                {
                    "option": "મદુરાઈ સાથે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કન્યાકુમારી સાથે</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 65
            "q": "ભારતમાં સૌથી ટૂંકો રાષ્ટ્રીય ધોરીમાર્ગ કોલકાતાને કોની સાથે જોડે છે ?",
            "a": [
                {
                    "option": "કન્યાકુમારી સાથે",
                    "correct": false
                },
                {
                    "option": "બોનગાઉ સાથે",
                    "correct": true
                },
                {
                    "option": "કોચી સાથે",
                    "correct": false
                },
                {
                    "option": "મદુરાઈ સાથે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બોનગાઉ સાથે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 66
            "q": "ભારતમાં રાજ્ય ધોરીમાર્ગના માઈલ સ્ટોનમાં શું લખેલું હોય છે ?",
            "a": [
                {
                    "option": "D.M.R.",
                    "correct": false
                },
                {
                    "option": "S.H.",
                    "correct": true
                },
                {
                    "option": "N.H.",
                    "correct": false
                },
                {
                    "option": "S.T.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: S.H.</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 67
            "q": "ભારતમાં પીળા માઈલસ્ટોન વાળો માર્ગ કયો છે ?",
            "a": [
                {
                    "option": "ગ્રામ માર્ગ",
                    "correct": false
                },
                {
                    "option": "જિલ્લા માર્ગ",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય માર્ગ",
                    "correct": true
                },
                {
                    "option": "રાજ્ય  માર્ગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાષ્ટ્રીય માર્ગ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 68
            "q": "ભારતમાં લીલા માઈલસ્ટોન વાળો માર્ગ કયો છે ?",
            "a": [
                {
                    "option": "ગ્રામ માર્ગ",
                    "correct": false
                },
                {
                    "option": "જિલ્લા માર્ગ",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય માર્ગ",
                    "correct": false
                },
                {
                    "option": "રાજ્ય  માર્ગ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્ય  માર્ગ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 69
            "q": "ભારતમાં સુવર્ણ ચતુર્ભુજ કયા ચાર મોટાં શહેરોને જોડશે ?",
            "a": [
                {
                    "option": "મુંબઈ-દિલ્હી-કોલકાતા-ચેન્નાઈ",
                    "correct": true
                },
                {
                    "option": "સુરત-દિલ્હી-જયપુર-ચેન્નાઈ",
                    "correct": false
                },
                {
                    "option": "જયપુર-દિલ્હી-અમદાવાદ-ચેન્નાઈ",
                    "correct": false
                },
                {
                    "option": "મુંબઈ-અમદાવાદ-જયપુર-ચેન્નાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુંબઈ-દિલ્હી-કોલકાતા-ચેન્નાઈ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 70
            "q": "ભારતમાં લગભગ કેટલા રાષ્ટ્રીય ધોરીમાર્ગો આવેલાં છે ?",
            "a": [
                {
                    "option": "40",
                    "correct": false
                },
                {
                    "option": "50",
                    "correct": true
                },
                {
                    "option": "30",
                    "correct": false
                },
                {
                    "option": "25",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 50</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 71
            "q": "ભારતમાં મેટ્રોટ્રેન ક્યાં આવેલી છે ?",
            "a": [
                {
                    "option": "જયપુર,અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "સુરત,વડોદરા",
                    "correct": false
                },
                {
                    "option": "દિલ્હી,કોલકાતા",
                    "correct": true
                },
                {
                    "option": "અમૃતસર,પૂણે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિલ્હી,કોલકાતા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 72
            "q": "ભારતમાં સૌથી સસ્તી અને ઝડપી મુસાફરી પુરી પાડતો માર્ગ કયો છે ?",
            "a": [
                {
                    "option": "સડકમાર્ગ",
                    "correct": false
                },
                {
                    "option": "જળમાર્ગ",
                    "correct": false
                },
                {
                    "option": "હવાઈમાર્ગ",
                    "correct": false
                },
                {
                    "option": "રેલમાર્ગ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રેલમાર્ગ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 73
            "q": "ભારતમાં આંતરિક હવાઇ મુસાફરી માટે કઈ સંસ્થા કામ કરે છે ?",
            "a": [
                {
                    "option": "ઇન્ડિયન ઍર લાઇન્સ",
                    "correct": true
                },
                {
                    "option": "ઍરન્ડિયા",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિયન લાઇન્સ",
                    "correct": false
                },
                {
                    "option": "મુંબઈ ઇન્ડિયન્સ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇન્ડિયન ઍર લાઇન્સ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 74
            "q": "ભારતમાં આંતરાષ્ટ્રીય હવાઇ મુસાફરી માટે કઈ સંસ્થા કામ કરે છે ?",
            "a": [
                {
                    "option": "ઇન્ડિયન ઍર લાઇન્સ",
                    "correct": false
                },
                {
                    "option": "ઍરન્ડિયા",
                    "correct": true
                },
                {
                    "option": "ઇન્ડિયન લાઇન્સ",
                    "correct": false
                },
                {
                    "option": "મુંબઈ ઇન્ડિયન્સ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍરન્ડિયા</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 75
            "q": "નીચેનામાંથી આંતરરાષ્ટ્રીય હવાઇમથક ક્યાં આવેલું નથી ?",
            "a": [
                {
                    "option": "અમદાવાદમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "થિરુવનંતપુરમાં",
                    "correct": false
                },
                {
                    "option": "સુરેન્દ્રનગરમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુરેન્દ્રનગરમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 76
            "q": "ભારતમાં સૌથી મોંઘી અને ઝડપી મુસાફરી પુરૂ પાડતો માર્ગ કયો છે ?",
            "a": [
                {
                    "option": "સડકમાર્ગ",
                    "correct": false
                },
                {
                    "option": "જળમાર્ગ",
                    "correct": false
                },
                {
                    "option": "હવાઈમાર્ગ",
                    "correct": true
                },
                {
                    "option": "રેલમાર્ગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હવાઈમાર્ગ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 77
            "q": "બિહારમાં ક્યાં રોપ-વેની વ્યવસ્થા છે ?",
            "a": [
                {
                    "option": "રાજગિરિમાં",
                    "correct": true
                },
                {
                    "option": "રાજકોટમાં",
                    "correct": false
                },
                {
                    "option": "રાજપુરમાં",
                    "correct": false
                },
                {
                    "option": "રાજગઢમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજગિરિમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 78
            "q": "પર્વતીય પ્રદેશોમાં જ્યાં રેલમાર્ગ કે સડકમાર્ગ શક્ય નથી, ત્યાં શું શરૂ કરવામાં આવ્યું છે ?",
            "a": [
                {
                    "option": "હવાઈમાર્ગ",
                    "correct": false
                },
                {
                    "option": "રોપ-વે",
                    "correct": true
                },
                {
                    "option": "રોકડી",
                    "correct": false
                },
                {
                    "option": "જળમાર્ગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રોપ-વે</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        } // no comma here
    ]
};
