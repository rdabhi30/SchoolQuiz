// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 2  ભારત : આબોહવા અને કુદરતી સંસાધનો",
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
            "q": "ભારતમાં કયા પવનોના લીધે વરસાદ પડે ? ",
            "a": [
                {
                    "option": "પશ્ચિમિયા",
                    "correct": false
                },
                {
                    "option": "મોસમી",
                    "correct": false
                },
                {
                    "option": "વ્યાપારી",
                    "correct": false
                },
                {
                    "option": "નૈઋત્ય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે. સાચો જવાબ: નૈઋત્ય</span> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "આમાંથી કયા રાજ્યમાં સૌથી વધુ વરસાદ પડે છે ?",
            "a": [
                {
                    "option": "મેઘાલય",
                    "correct": true
                },
                {
                    "option": "સિક્કીમ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ બંગાળ",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મેઘાલય</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આમાંથી કયા રાજ્યમાં સૌથી ઓછો વરસાદ પડે છે ?",
            "a": [
                {
                    "option": "પંજાબ",
                    "correct": false
                },
                {
                    "option": "હિમાચલ પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "બિહાર",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજસ્થાન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ભારતમાં આમાંથી કયા મહિનામાં શિયાળો હોય છે ?",
            "a": [
                {
                    "option": "ઑગસ્ટ",
                    "correct": false
                },
                {
                    "option": "માર્ચ",
                    "correct": false
                },
                {
                    "option": "જૂન ",
                    "correct": false
                },
                {
                    "option": "જાન્યુઆરી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાન્યુઆરી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ક્યા રાજ્યમાં સૌથી વધારે ગરમી પડે છે ?",
            "a": [
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
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
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજસ્થાન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ઉત્તર ભારતની નદી કઈ છે ?",
            "a": [
                {
                    "option": "કાવેરી",
                    "correct": false
                },
                {
                    "option": "કૃષ્ણા",
                    "correct": false
                },
                {
                    "option": "સતલુજ",
                    "correct": true
                },
                {
                    "option": "ગોદાવરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સતલુજ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કઈ નદી દક્ષિણ ભારતની નદી છે ?",
            "a": [
                {
                    "option": "નર્મદા",
                    "correct": true
                },
                {
                    "option": "ગંગા",
                    "correct": false
                },
                {
                    "option": "સતલુજ",
                    "correct": false
                },
                {
                    "option": "કોશી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નર્મદા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "નાગાર્જુન યોજના કઈ નદી પર આવેલી છે ?",
            "a": [
                {
                    "option": "કૃષ્ણા",
                    "correct": true
                },
                {
                    "option": "તુંગભદ્રા",
                    "correct": false
                },
                {
                    "option": "મહાનદી",
                    "correct": false
                },
                {
                    "option": "ગોદાવરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૃષ્ણા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ભાખરા-નાંગલ યોજના કઈ નદી પર આવેલી છે ?",
            "a": [
                {
                    "option": "ચિનાબ",
                    "correct": false
                },
                {
                    "option": "રાવી",
                    "correct": false
                },
                {
                    "option": "સતલુજ",
                    "correct": true
                },
                {
                    "option": "ઝેલમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સતલુજ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "પુલીકટ સરોવર કયા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": true
                },
                {
                    "option": "ઉડીસા",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તમિલનાડુ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ચિલિકા (ચિલ્કા) સરોવર કયા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સા",
                    "correct": true
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઓરિસ્સા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ધાતુમય ખનીજ કયું છે ?",
            "a": [
                {
                    "option": "કોલસો",
                    "correct": false
                },
                {
                    "option": "બૉક્સાઈટ",
                    "correct": false
                },
                {
                    "option": "ચુનાનો પથ્થર",
                    "correct": false
                },
                {
                    "option": "તાંબું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાંબું</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "અધાતુમય ખનીજ કયું છે ?",
            "a": [
                {
                    "option": "જસત",
                    "correct": false
                },
                {
                    "option": "ફ્લોરસ્પાર",
                    "correct": true
                },
                {
                    "option": "સોનું",
                    "correct": false
                },
                {
                    "option": "કલાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફ્લોરસ્પાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "વીજળીના તાર બનાવવા માટે કયું ખનીજ વપરાય છે ?",
            "a": [
                {
                    "option": "અબરખ",
                    "correct": false
                },
                {
                    "option": "તાંબું",
                    "correct": true
                },
                {
                    "option": "બૉક્સાઈટ",
                    "correct": false
                },
                {
                    "option": "મૅંગેનીઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાંબું</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કયું વૃક્ષ ખરાઉ કે મોસમી જંગલોનું વૃક્ષ છે ?",
            "a": [
                {
                    "option": "મેહોગની",
                    "correct": false
                },
                {
                    "option": "મહુડો",
                    "correct": true
                },
                {
                    "option": "સીસમ",
                    "correct": false
                },
                {
                    "option": "વાંસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહુડો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ક્યા વૃક્ષના લાકડામાંથી કાથો બનાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "તાડ",
                    "correct": false
                },
                {
                    "option": "ખેર",
                    "correct": true
                },
                {
                    "option": "વાંસ",
                    "correct": false
                },
                {
                    "option": "ચીડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખેર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "છાપકામની શાહી બનાવવા માટે શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "લાખનો",
                    "correct": true
                },
                {
                    "option": "સુંદરી વૃક્ષનો",
                    "correct": false
                },
                {
                    "option": "ચીડનો",
                    "correct": false
                },
                {
                    "option": "વાંસનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાખનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ભારતનું રાષ્ટ્રીય પ્રાણી કયું છે ?",
            "a": [
                {
                    "option": "સિંહ",
                    "correct": false
                },
                {
                    "option": "હાથી",
                    "correct": false
                },
                {
                    "option": "ચિત્તો",
                    "correct": false
                },
                {
                    "option": "વાઘ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વાઘ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ભારતનું રાષ્ટ્રીય પક્ષી કયું છે ?",
            "a": [
                {
                    "option": "પોપટ",
                    "correct": false
                },
                {
                    "option": "મોર",
                    "correct": true
                },
                {
                    "option": "હંસ",
                    "correct": false
                },
                {
                    "option": "કાગડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મોર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "નળ સરોવર કયા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": true
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુજરાત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "આબોહવા કોને કહેવાય ?",
            "a": [
                {
                    "option": "વાતાવરણની લાંબાગાળાની સ્થિતિને",
                    "correct": true
                },
                {
                    "option": "વાતાવરણની ટૂંકાગાળાની સ્થિતિને",
                    "correct": false
                },
                {
                    "option": "વાતાવરણની સમાનગાળાની સ્થિતિને",
                    "correct": false
                },
                {
                    "option": "વાતાવરણની મધ્યમગાળાની સ્થિતિને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાતાવરણની લાંબાગાળાની સ્થિતિને</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "ભારતનું ભૌગોલિક સ્થાન ક્યાં છે ?",
            "a": [
                {
                    "option": "દક્ષિણ ગોળાર્ધમાં",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ગોળાર્ધમાં",
                    "correct": true
                },
                {
                    "option": "અગ્નિ ગોળાર્ધમાં",
                    "correct": false
                },
                {
                    "option": "વાયવ્ય ગોળાર્ધમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર ગોળાર્ધમાં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ભારત કયા ઉત્તર અક્ષાંશો વચ્ચે આવેલો છે ?",
            "a": [
                {
                    "option": "8<sup>0</sup> થી 20<sup>0</sup>",
                    "correct": false
                },
                {
                    "option": "8<sup>0</sup> થી 37<sup>0</sup>",
                    "correct": true
                },
                {
                    "option": "36<sup>0</sup> થી 100<sup>0</sup>",
                    "correct": false
                },
                {
                    "option": "18<sup>0</sup> થી 50<sup>0</sup>",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8<sup>0</sup> થી 37<sup>0</sup></p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ભારતમાં શિયાળો ક્યારે હોય છે ?",
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
        { // Question 25
            "q": "ભારતમાં ઉનાળો ક્યારે હોય છે ?",
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
        { // Question 26
            "q": "ભારતમાં ચોમાસું ક્યારે હોય છે ?",
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
        { // Question 27
            "q": "મોસમ પ્રમાણે બદલાતા પવનોને શું કહેવાય ?",
            "a": [
                {
                    "option": "મોરની પવનો",
                    "correct": false
                },
                {
                    "option": "વ્યાપારી પવનો",
                    "correct": false
                },
                {
                    "option": "મોસમી પવનો",
                    "correct": true
                },
                {
                    "option": "માસના પવનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મોસમી પવનો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ઉંચાઈ પર આવેલા સ્થળોએ હવામાન કેવું રહે છે ?",
            "a": [
                {
                    "option": "ગરમ",
                    "correct": false
                },
                {
                    "option": "તાજું",
                    "correct": false
                },
                {
                    "option": "વાસી",
                    "correct": false
                },
                {
                    "option": "ઠંડુ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઠંડુ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "દરિયાકિનારે આબોહવા કેવી હોય છે ?",
            "a": [
                {
                    "option": "સમ",
                    "correct": true
                },
                {
                    "option": "વિષમ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ",
                    "correct": false
                },
                {
                    "option": "શીત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "મધ્ય અને વાયવ્ય ભારતમાં ઉનાળામાં કેટલું તાપમાન હોય છે ?",
            "a": [
                {
                    "option": "35<sup>0</sup> થી 40<sup>0</sup>",
                    "correct": false
                },
                {
                    "option": "40<sup>0</sup> થી 50<sup>0</sup>",
                    "correct": false
                },
                {
                    "option": "45<sup>0</sup> થી 50<sup>0</sup>",
                    "correct": true
                },
                {
                    "option": "5<sup>0</sup> થી 28<sup>0</sup>",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 45<sup>0</sup> થી 50<sup>0</sup></p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "માનવ દ્વારા સંગ્રહિત અને વિશ્વાસ બેસે તેવી વસ્તુ કે પદાર્થના ગુણ, ક્ષમતા અને કાર્ય-જે માનવની મિલકત બની જાય તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "સંસોધન",
                    "correct": false
                },
                {
                    "option": "સંવિધાન",
                    "correct": false
                },
                {
                    "option": "સંસાધન",
                    "correct": true
                },
                {
                    "option": "સંગઠન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંસાધન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "પૃથ્વી પર કુદરતી રીતે સર્જાયેલા, સરળતાથી મળી આવતા અને માનવીને ઉપયોગમાં આવતા કુદરતી પદાર્થોને શું કહેવાય ?",
            "a": [
                {
                    "option": "કુદરતી સંસોધન",
                    "correct": false
                },
                {
                    "option": "કુદરતીસંવિધાન",
                    "correct": false
                },
                {
                    "option": "કુદરતી સંગઠન",
                    "correct": false
                },
                {
                    "option": "કુદરતી સંસાધન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુદરતી સંસાધન</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "કઈ નદીઓ જળમાર્ગ તરીકે ઉપયોગી છે ?",
            "a": [
                {
                    "option": "ઉત્તર ભારતની નદીઓ",
                    "correct": true
                },
                {
                    "option": "દક્ષિણ ભારતની નદીઓ",
                    "correct": false
                },
                {
                    "option": "પૂર્વ ભારતની નદીઓ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ભારતની નદીઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર ભારતની નદીઓ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": " પંજાબ મુખ્ય કેટલી નદીઓ વહે છે  તેથી પંજાબ રાજ્યનું નામ પડ્યું છે ?",
            "a": [
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": true
                },
                {
                    "option": "15",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "કઈ નદી પંજાબ રાજ્યમાં થઈને વહે છે ?",
            "a": [
                {
                    "option": "ઝેલમ",
                    "correct": false
                },
                {
                    "option": "ચિનાબ",
                    "correct": false
                },
                {
                    "option": "રાવી",
                    "correct": false
                },
                {
                    "option": "આપેલી બધી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલી બધી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "કઈ નદી બિહારમાં થઈને વહે છે જેથી તે નદીમાં દર વર્ષે ભયંકર પૂર આવે છે ?",
            "a": [
                {
                    "option": "કાવેરી",
                    "correct": false
                },
                {
                    "option": "નર્મદા",
                    "correct": false
                },
                {
                    "option": "કોંકણી",
                    "correct": false
                },
                {
                    "option": "કોશી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોશી</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "કઈ નદીઓ જળમાર્ગ તરીકે ઉપયોગી નથી ?",
            "a": [
                {
                    "option": "ઉત્તર ભારતની નદીઓ",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ભારતની નદીઓ",
                    "correct": true
                },
                {
                    "option": "પૂર્વ ભારતની નદીઓ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ભારતની નદીઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ ભારતની નદીઓ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "નર્મદા અને તાપી નદી કોને મળે છે ?",
            "a": [
                {
                    "option": "બંગાળાની ખાડીને",
                    "correct": false
                },
                {
                    "option": "અરબ સાગરને",
                    "correct": true
                },
                {
                    "option": "ભૂમધ્ય સાગરને",
                    "correct": false
                },
                {
                    "option": "કાળા સાગરને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અરબ સાગરને</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ગોદાવરી, કાવેરી, તુંગભદ્રા નદી કોને મળે છે ?",
            "a": [
                {
                    "option": "બંગાળાની ખાડીને",
                    "correct": true
                },
                {
                    "option": "અરબ સાગરને",
                    "correct": false
                },
                {
                    "option": "ભૂમધ્ય સાગરને",
                    "correct": false
                },
                {
                    "option": "કાળા સાગરને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંગાળાની ખાડીને</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "હીરાકુંડ યોજના કઈ નદી પર આવેલી છે ?",
            "a": [
                {
                    "option": "કૃષ્ણા",
                    "correct": false
                },
                {
                    "option": "તુંગભદ્રા",
                    "correct": false
                },
                {
                    "option": "મહા નદી",
                    "correct": true
                },
                {
                    "option": "ગોદાવરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહા નદી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "હીરાકુંડ યોજના કયા રાજ્યમાં આવેલી છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સા",
                    "correct": true
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                },
                {
                    "option": "મધ્ય પ્રદેશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓરિસ્સા</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "નાગાર્જુન યોજના ક્યા રાજ્યમાં આવેલી છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સા",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": true
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                },
                {
                    "option": "મધ્ય પ્રદેશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંધ્રપ્રદેશ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "નીચેનામાંથી ખારાં પાણીનું સરોવર કયું છે ?",
            "a": [
                {
                    "option": "દલ",
                    "correct": false
                },
                {
                    "option": "કોલાર",
                    "correct": false
                },
                {
                    "option": "વુલર",
                    "correct": false
                },
                {
                    "option": "પુલીકટ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુલીકટ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "નીચેનામાંથી મીઠાં પાણીનું સરોવર કયું છે ?",
            "a": [
                {
                    "option": "ચિલ્કા",
                    "correct": false
                },
                {
                    "option": "સાંભર",
                    "correct": false
                },
                {
                    "option": "વુલર",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વુલર</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "કઈ નદીઓ જળ ધોધ બનાવે છે ?",
            "a": [
                {
                    "option": "ઉત્તર ભારતની નદીઓ",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ભારતની નદીઓ",
                    "correct": true
                },
                {
                    "option": "પૂર્વ ભારતની નદીઓ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ભારતની નદીઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ ભારતની નદીઓ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "સાંભર સરોવર કયા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સા",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": true
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજસ્થાન</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "કોલાર સરોવર કયા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સા",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": true
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંધ્રપ્રદેશ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "દલ અને વુલર સરોવર કયા રાજ્યમાં આવેલા છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સા",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "જમ્મુ કાશ્મીર",
                    "correct": true
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જમ્મુ કાશ્મીર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "નળ સરોવર કયા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સા",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": true
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુજરાત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "નીચેનામાંથી કયું કુદરતી સરોવર નથી ?",
            "a": [
                {
                    "option": "ગોવિંદ સાગર",
                    "correct": true
                },
                {
                    "option": "સાંભર સરોવર",
                    "correct": false
                },
                {
                    "option": "કોલાર સરોવર",
                    "correct": false
                },
                {
                    "option": "ચિલ્કા સરોવર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોવિંદ સાગર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "નીચેનામાંથી કયું કૃત્રિમ સરોવર નથી ?",
            "a": [
                {
                    "option": "નાગાર્જુન સાગર",
                    "correct": false
                },
                {
                    "option": "નિઝામ સગર",
                    "correct": false
                },
                {
                    "option": "પુલીકટ સરોવર",
                    "correct": true
                },
                {
                    "option": "ગાંધી સરોવર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુલીકટ સરોવર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "ગોવિંદ સાગર સરોવર કઈ નદી ઉપર આવેલું છે ?",
            "a": [
                {
                    "option": "કૃષ્ણા",
                    "correct": false
                },
                {
                    "option": "કાવેરી",
                    "correct": false
                },
                {
                    "option": "નર્મદા",
                    "correct": false
                },
                {
                    "option": "સતલુજ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સતલુજ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "ગાંધી સાગર સરોવર કઈ નદી ઉપર આવેલું છે ?",
            "a": [
                {
                    "option": "કૃષ્ણા",
                    "correct": false
                },
                {
                    "option": "કાવેરી",
                    "correct": false
                },
                {
                    "option": "ચંબલ",
                    "correct": true
                },
                {
                    "option": "સતલુજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચંબલ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "નિઝામ સાગર સરોવર કઈ નદી ઉપર આવેલું છે ?",
            "a": [
                {
                    "option": "કૃષ્ણા",
                    "correct": false
                },
                {
                    "option": "કાવેરી",
                    "correct": false
                },
                {
                    "option": "ચંબલ",
                    "correct": false
                },
                {
                    "option": "માંજરા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માંજરા</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "નિઝામ સાગર સરોવર કયા રાજ્યમાં આવેલું છે ? ",
            "a": [
                {
                    "option": "હિમાચલ પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": true
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંધ્રપ્રદેશ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "નાગાર્જુન સાગર સરોવર ક્યા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "હિમાચલ પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": true
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંધ્રપ્રદેશ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "ગાંધી સાગર સરોવર કયા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "હિમાચલ પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": true
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મધ્યપ્રદેશ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 58
            "q": "ગોવિંદ સાગર સરોવર કયા રાજ્યમાં આવેલું છે ?",
            "a": [
                {
                    "option": "હિમાચલ પ્રદેશ",
                    "correct": true
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિમાચલ પ્રદેશ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 59
            "q": "કઈ યોજનામાં મુખ્ય નહેર ક્ષમતાની દ્રષ્ટિએ સૌથી મોટી નહેર બનશે ?",
            "a": [
                {
                    "option": "સતલુજ",
                    "correct": false
                },
                {
                    "option": "તાપી",
                    "correct": false
                },
                {
                    "option": "નર્મદા",
                    "correct": true
                },
                {
                    "option": "ચંબલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નર્મદા</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "જૈવિક અને અજૈવિક પદાર્થો ગરમી અને દબાણને લીધે પરિવર્તન પામીને ચોક્કસ રાસાયણિક બંધારણ ધરાવે છે. આવા પદાર્થોને શું કહે છે ?",
            "a": [
                {
                    "option": "ખનન",
                    "correct": false
                },
                {
                    "option": "ખંજન",
                    "correct": false
                },
                {
                    "option": "ખાણ",
                    "correct": false
                },
                {
                    "option": "ખનીજ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખનીજ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 61
            "q": "પૃથ્વીના આંતરિક ક્ષેત્રોમાંથી ખનીજો શુદ્ધ સ્વરૂપે મળતી નથી તેમાં અશુદ્ધિઓ હોય છે તેથી તેને શું કહે છે ?",
            "a": [
                {
                    "option": "અયસ્ક",
                    "correct": true
                },
                {
                    "option": "વયસ્ક",
                    "correct": false
                },
                {
                    "option": "જયસ્ક",
                    "correct": false
                },
                {
                    "option": "ગયસ્ક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અયસ્ક</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 62
            "q": "ખનિજો કોની બક્ષિસ છે ?",
            "a": [
                {
                    "option": "સરકારની",
                    "correct": false
                },
                {
                    "option": "કુદરતની",
                    "correct": true
                },
                {
                    "option": "ગામની",
                    "correct": false
                },
                {
                    "option": "માણસની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુદરતની</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 63
            "q": "નીચેનામાંથી કયું સંચાલન શક્તિનું ખનીજ છે ?",
            "a": [
                {
                    "option": "હિરા",
                    "correct": false
                },
                {
                    "option": "ચુનાના પથ્થર",
                    "correct": false
                },
                {
                    "option": "કોલસો",
                    "correct": true
                },
                {
                    "option": "તાંબુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોલસો</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 64
            "q": "વાર્નિશ તથા છાપકામ ઉદ્યોગમાં ક્યું ખનીજ વપરાય છે ?",
            "a": [
                {
                    "option": "જસત",
                    "correct": false
                },
                {
                    "option": "ફ્લોરસ્પાર",
                    "correct": false
                },
                {
                    "option": "અબરખ",
                    "correct": false
                },
                {
                    "option": "મેંગેનીઝ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મેંગેનીઝ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 65
            "q": "વીજળીના તાર બનાવવા અને વાસણો બનાવવા માટે શાનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "સીસુ",
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
        { // Question 66
            "q": "ધ્વનિશોષક પડદામાં કયા ખનીજનો ઉપયોગ થાય છે ?",
            "a": [
                {
                    "option": "જસત",
                    "correct": false
                },
                {
                    "option": "ફ્લોરસ્પાર",
                    "correct": false
                },
                {
                    "option": "અબરખ",
                    "correct": true
                },
                {
                    "option": "મેંગેનીઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અબરખ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 67
            "q": "કયું ખનીજ ધાતુ ગાળણ ઉદ્યોગો માટે ખૂબ જ ઉપયોગી છે ?",
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
                    "option": "ફ્લોરસ્પાર",
                    "correct": true
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફ્લોરસ્પાર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 68
            "q": "ભારતમાં કેટલી જાતના વૃક્ષો થાય છે ?",
            "a": [
                {
                    "option": "2000",
                    "correct": false
                },
                {
                    "option": "3000",
                    "correct": false
                },
                {
                    "option": "4000",
                    "correct": false
                },
                {
                    "option": "5000",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5000</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 69
            "q": "આપણા આયુર્વેદમાં કેટલા વૃક્ષો અને છોડવાઓનું વર્ણન છે ?",
            "a": [
                {
                    "option": "2000",
                    "correct": true
                },
                {
                    "option": "3000",
                    "correct": false
                },
                {
                    "option": "4000",
                    "correct": false
                },
                {
                    "option": "5000",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2000</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 70
            "q": "કઈ ઋતુમાં વૃક્ષોનાં પાંદડાં ખરી પડે છે ?",
            "a": [
                {
                    "option": "પાદડા ઋતુમાં",
                    "correct": false
                },
                {
                    "option": "પાનખર ઋતુમાં",
                    "correct": true
                },
                {
                    "option": "વર્ષાઋતુમાં",
                    "correct": false
                },
                {
                    "option": "ગ્રીષ્મઋતુમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાનખર ઋતુમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 71
            "q": "ગંગા નદીના મુખત્રિકોણમાં બનેલું જંગલ શાના તરીકે જાણીતું બન્યું છે ?",
            "a": [
                {
                    "option": "સુંદરીભવાની",
                    "correct": false
                },
                {
                    "option": "કમાટીબાગ",
                    "correct": false
                },
                {
                    "option": "સુંદરવન",
                    "correct": true
                },
                {
                    "option": "સરસવન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુંદરવન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 72
            "q": "કયા વૃક્ષોના લાકડામાંથી હોડી કે સ્ટીમરો બને છે ?",
            "a": [
                {
                    "option": "સુંદરીના",
                    "correct": true
                },
                {
                    "option": "તાડના",
                    "correct": false
                },
                {
                    "option": "લાખના",
                    "correct": false
                },
                {
                    "option": "દેવદારના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુંદરીના</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 73
            "q": "ટોપલાં, સાદડી વગેરે કયા વૃક્ષના લાકડામાંથી બને છે ?",
            "a": [
                {
                    "option": "સુંદરીના",
                    "correct": false
                },
                {
                    "option": "તાડના",
                    "correct": false
                },
                {
                    "option": "લાખના",
                    "correct": false
                },
                {
                    "option": "વાંસના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાંસના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 74
            "q": "ટર્પેન્ટાઈન કયા વૃક્ષના રસમાંથી બને છે ?",
            "a": [
                {
                    "option": "સુંદરીના",
                    "correct": false
                },
                {
                    "option": "તાડના",
                    "correct": false
                },
                {
                    "option": "લાખના",
                    "correct": false
                },
                {
                    "option": "ચીડના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચીડના</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 75
            "q": "ભારતનું સૌથી મોટું સસ્તન વર્ગનું પ્રાણી કયું છે ?",
            "a": [
                {
                    "option": "હાથી",
                    "correct": true
                },
                {
                    "option": "સિંહ",
                    "correct": false
                },
                {
                    "option": "વાઘ",
                    "correct": false
                },
                {
                    "option": "ગેંડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાથી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 76
            "q": "ભારતનું વિશિષ્ટ પ્રાણી કયું છે ?",
            "a": [
                {
                    "option": "હાથી",
                    "correct": false
                },
                {
                    "option": "સિંહ",
                    "correct": false
                },
                {
                    "option": "વાઘ",
                    "correct": false
                },
                {
                    "option": "એકશીંગી ગેંડો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એકશીંગી ગેંડો</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 77
            "q": "વિશ્વભરમાં વાઘની કેટલી જાતિઓ છે ?",
            "a": [
                {
                    "option": "8",
                    "correct": true
                },
                {
                    "option": "7",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 78
            "q": "ભારતમાં રૉયલ ટાઈગર (સફેદ વાઘ) ક્યાં જોવા મળે છે ?",
            "a": [
                {
                    "option": "ગુજરાતમાં",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "ઉત્તરપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ બંગાળમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પશ્ચિમ બંગાળમાં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 79
            "q": "ભારતની મધ્યમાંથી શું પસાર થાય છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": true
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્કવૃત્ત</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 80
            "q": "કેવલા દેવી રાષ્ટ્રીય ઉદ્યાન કયાં આવેલું છે ?",
            "a": [
                {
                    "option": "રાજસ્થાનમાં",
                    "correct": true
                },
                {
                    "option": "મધ્યપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "ઉત્તરપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ બંગાળમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજસ્થાનમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 81
            "q": "ભારતમાં જોવા મળતું સૌથી વજનદાર પક્ષી કયું છે ?",
            "a": [
                {
                    "option": "સારસ",
                    "correct": false
                },
                {
                    "option": "હંસ",
                    "correct": false
                },
                {
                    "option": "સુરખાબ",
                    "correct": false
                },
                {
                    "option": "ઘોરાડ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘોરાડ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 82
            "q": "બે ફૂટ થી વધુ ઉંચાઈ ધરાવતું પક્ષી કયું છે ?",
            "a": [
                {
                    "option": "સારસ",
                    "correct": true
                },
                {
                    "option": "હંસ",
                    "correct": false
                },
                {
                    "option": "સુરખાબ",
                    "correct": false
                },
                {
                    "option": "ઘોરાડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સારસ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 83
            "q": "કચ્છમાં મોટા રણમાં કાદવકિચડના ઢગ બનાવી કયું પક્ષી ઈંડા મૂકે છે ?",
            "a": [
                {
                    "option": "સારસ",
                    "correct": false
                },
                {
                    "option": "હંસ",
                    "correct": false
                },
                {
                    "option": "સુરખાબ",
                    "correct": true
                },
                {
                    "option": "ઘોરાડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુરખાબ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 84
            "q": "ભારતમાં કેટલા અભ્યારણ્યો આવેલાં છે ?",
            "a": [
                {
                    "option": "300",
                    "correct": false
                },
                {
                    "option": "390",
                    "correct": false
                },
                {
                    "option": "490",
                    "correct": true
                },
                {
                    "option": "289",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 490</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 85
            "q": "ભારતમાં કેટલા રાષ્ટ્રીય ઉદ્યાનો આવેલાં છે ?",
            "a": [
                {
                    "option": "55",
                    "correct": false
                },
                {
                    "option": "79",
                    "correct": false
                },
                {
                    "option": "69",
                    "correct": false
                },
                {
                    "option": "89",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 89</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 86
            "q": "કાઝીરંગા રાષ્ટ્રીય ઉદ્યાન ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "અસમ",
                    "correct": true
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાંચલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અસમ</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 87
            "q": "થરનું રણ રાષ્ટ્રીય ઉદ્યાન ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "અસમ",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": true
                },
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાંચલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજસ્થાન</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 88
            "q": "કાન્હા રાષ્ટ્રીય ઉદ્યાન ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": true
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મધ્યપ્રદેશ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 89
            "q": "બાંદીપુર રાષ્ટ્રીય ઉદ્યાન ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "કર્ણાટક",
                    "correct": true
                },
                {
                    "option": "જમ્મુ અને કશ્મીર",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્ણાટક</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 90
            "q": "દચિગામ રાષ્ટ્રીય ઉદ્યાન ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "જમ્મુ અને કશ્મીર",
                    "correct": true
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જમ્મુ અને કશ્મીર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 91
            "q": "કોર્બેટ રાષ્ટ્રીય ઉદ્યાન ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "અસમ",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાખંડ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તરાખંડ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 92
            "q": "પૃથ્વીની સપાટી પર માનવીને પીવાલાયક મીઠું પાણી કેટલું છે ?",
            "a": [
                {
                    "option": "5% કરતાં પણ ઓછું",
                    "correct": false
                },
                {
                    "option": "4% કરતાં પણ ઓછું",
                    "correct": false
                },
                {
                    "option": "2% કરતાં પણ ઓછું",
                    "correct": true
                },
                {
                    "option": "2% કરતાં પણ વધું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2% કરતાં પણ ઓછું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 93
            "q": "સોનાની ખાણ ક્યાં આવેલી છે ?",
            "a": [
                {
                    "option": "અસમ",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "કર્ણાટક",
                    "correct": true
                },
                {
                    "option": "ઉત્તરાંચલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્ણાટક</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 94
            "q": "ભારતની મોટામાં મોટી નદી કઈ છે ?",
            "a": [
                {
                    "option": "ગંગા",
                    "correct": true
                },
                {
                    "option": "નર્મદા",
                    "correct": false
                },
                {
                    "option": "બ્રહ્મપુત્રા",
                    "correct": false
                },
                {
                    "option": "ગોદવરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગંગા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 95
            "q": "દક્ષિણ ભારતના લોકો ગરમીથી બચવા કેવા કપડાં પહેરવાનું પસંદ કરે છે ?",
            "a": [
                {
                    "option": "રેશમી",
                    "correct": false
                },
                {
                    "option": "સુતરાઉ",
                    "correct": true
                },
                {
                    "option": "ઊની",
                    "correct": false
                },
                {
                    "option": "શણના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુતરાઉ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here
    ]
};
