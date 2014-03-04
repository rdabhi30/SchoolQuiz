// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પાઠ-1 થી 6",
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
             "q": "સૌથી જૂનો વેદ કયો છે ?",
             "a": [
                 {
                     "option": "સામવેદ",
                     "correct": false
                 },
                 {
                     "option": "અથર્વવેદ",
                     "correct": false
                 },
                 {
                     "option": "ઋગ્વેદ",
                     "correct": true
                 },
                 {
                     "option": "યજુર્વેદ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઋગ્વેદ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 2
             "q": "ઋચાઓના સમૂહને શું કહે છે ?",
             "a": [
                 {
                     "option": "સ્તુતિ",
                     "correct": false
                 },
                 {
                     "option": "સૂક્ત",
                     "correct": true
                 },
                 {
                     "option": "શક્તિ",
                     "correct": false
                 },
                 {
                     "option": "સમિતિ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સૂક્ત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
         { // Question 3
             "q": "વૈદિક મંત્રોના દ્રષ્ટા કોણ હતા ?",
             "a": [
                 {
                     "option": "દસ્યુઓ",
                     "correct": false
                 },
                 {
                     "option": "ઋષિઓ",
                     "correct": true
                 },
                 {
                     "option": "વિદ્યાર્થીઓ",
                     "correct": false
                 },
                 {
                     "option": "આર્યો",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઋષિઓ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 4
             "q": "ક્યા ઋષિએ બિયાસ અને સતલુજ નદીઓ સાથે સંવાદ કર્યો હતો ?",
             "a": [
                 {
                     "option": "વાલ્મીકિએ",
                     "correct": false
                 },
                 {
                     "option": "સાંદિપનિએ",
                     "correct": false
                 },
                 {
                     "option": "વિશ્વામિત્રે",
                     "correct": true
                 },
                 {
                     "option": "વસિષ્ઠે",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span> <p>સાચો જવાબ: વિશ્વામિત્રે</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
         { // Question 5
             "q": "યજ્ઞો અને અનુષ્ઠાનો કરવાનું કામ કોણ કરતું ?",
             "a": [
                 {
                     "option": "આચાર્યો",
                     "correct": false
                 },
                 {
                     "option": "ખેડુતો",
                     "correct": false
                 },
                 {
                     "option": "પુરોહિતો",
                     "correct": true
                 },
                 {
                     "option": "રાજાઓ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span> <p>સાચો જવાબ:  પુરોહિતો</p> વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
         { // Question 6
             "q": "પ્રાર્થનાઓના રચયિતા પોતાને શું કહેતા ?",
             "a": [
                 {
                     "option": "અનાર્ય",
                     "correct": false
                 },
                 {
                     "option": "નિષાદ",
                     "correct": false
                 },
                 {
                     "option": "ભારત",
                     "correct": false
                 },
                 {
                     "option": "આર્ય",
                     "correct": true
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આર્ય</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 7
             "q": "મહાપાષાણ કબરો બનાવવાની પ્રથા આશરે કેટલાં વર્ષ પહેલાં શરૂ થઈ હતી ?",
             "a": [
                 {
                     "option": "2500",
                     "correct": false
                 },
                 {
                     "option": "3000",
                     "correct": true
                 },
                 {
                     "option": "3500",
                     "correct": false
                 },
                 {
                     "option": "2700",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  3000</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 8
             "q": "ક્યા ગામની કબરમાંથી 33 સોનાના મણકા અને શંખ મળ્યા છે ?",
             "a": [
                 {
                     "option": "ઇનામગામની",
                     "correct": false
                 },
                 {
                     "option": "બ્રહ્મગીરીની",
                     "correct": true
                 },
                 {
                     "option": "ઇનામગીરીના",
                     "correct": false
                 },
                 {
                     "option": "બ્રહ્મનગરીની",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બ્રહ્મગીરીની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
         { // Question 9
             "q": "ક્યા ગામના લોકો મૃતદેહોને ઘરમાં જ દફનાવતા ?",
             "a": [
                 {
                     "option": "ઇનામગામના",
                     "correct": true
                 },
                 {
                     "option": "ઇનામગીરીના",
                     "correct": false
                 },
                 {
                     "option": "બ્રહ્મગીરીની",
                     "correct": false
                 },
                 {
                     "option": "કેદારગામના",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇનામગામના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 10
             "q": "કયા ગામમાંથી પુરાતત્ત્વવિદોને અનાજનાં બી મળ્યાં છે ?",
             "a": [
                 {
                     "option": "ભીમબેટકામાંથી",
                     "correct": false
                 },
                 {
                     "option": "ઇનામગામમાંથી",
                     "correct": true
                 },
                 {
                     "option": "ઇનામગીરીમાંથી",
                     "correct": false
                 },
                 {
                     "option": "બ્રહ્મગીરીમાંથી",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇનામગામમાંથી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
         { // Question 11
             "q": "વેદોની સંખ્યા કેટલી છે ?",
             "a": [
                 {
                     "option": "2",
                     "correct": false
                 },
                 {
                     "option": "5",
                     "correct": false
                 },
                 {
                     "option": "4",
                     "correct": true
                 },
                 {
                     "option": "3",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  4</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 12
             "q": "ઇન્દ્ર શાના દેવતા છે ?",
             "a": [
                 {
                     "option": "દયા",
                     "correct": false
                 },
                 {
                     "option": "યુદ્ધ",
                     "correct": true
                 },
                 {
                     "option": "પ્રેમ",
                     "correct": false
                 },
                 {
                     "option": "ક્રોધ્ધ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  યુદ્ધ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
         { // Question 13
             "q": "ઋગ્વેદના રચયિતાએ કોની સરખામણી ગાયો અને ઘોડા સાથે કરી છે ?",
             "a": [
                 {
                     "option": "વનસ્પતિ",
                     "correct": false
                 },
                 {
                     "option": "નદીઓ ",
                     "correct": true
                 },
                 {
                     "option": "સાગરો",
                     "correct": false
                 },
                 {
                     "option": "તળાવો",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નદીઓ </p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 14
             "q": "વૈદિકકાળમાં દસ્યુ લોકો ક્યા પ્રદેશની આજુબાજુ રહેતા હતા ?",
             "a": [
                 {
                     "option": "મહારાષ્ટ્ર",
                     "correct": false
                 },
                 {
                     "option": "રાજસ્થાન",
                     "correct": false
                 },
                 {
                     "option": "મધ્યપ્રદેશ",
                     "correct": false
                 },
                 {
                     "option": "પંજાબ",
                     "correct": true
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પંજાબ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
         { // Question 15
             "q": "પાષાણ એટલે શું ?",
             "a": [
                 {
                     "option": "રેતી",
                     "correct": false
                 },
                 {
                     "option": "પથ્થર",
                     "correct": true
                 },
                 {
                     "option": "પાણી",
                     "correct": false
                 },
                 {
                     "option": "ડુંગર",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પથ્થર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
         { // Question 16
             "q": "વૈદિક સમય દરમિયાન યજ્ઞોમાં શાની આહુતી આપવામાં આવતી હતી ?",
             "a": [
                 {
                     "option": "ઘી-અનાજ",
                     "correct": true
                 },
                 {
                     "option": "તેલ-ચણા",
                     "correct": false
                 },
                 {
                     "option": "ઘી-ચણા",
                     "correct": false
                 },
                 {
                     "option": "અનાજ-તેલ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઘી-અનાજ </p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 17
             "q": "સોમ એ શું છે ?",
             "a": [
                 {
                     "option": "પાણી",
                     "correct": false
                 },
                 {
                     "option": "એક છોડ",
                     "correct": true
                 },
                 {
                     "option": "નદી",
                     "correct": false
                 },
                 {
                     "option": "એકેય નહીં",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  એક છોડ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 18
             "q": "ઋગ્વેદમાં કેટલી ઋચાઓ છે ",
             "a": [
                 {
                     "option": "1000 થી વધુ",
                     "correct": true
                 },
                 {
                     "option": "10000 થી વધુ",
                     "correct": false
                 },
                 {
                     "option": "100000થી વધુ",
                     "correct": false
                 },
                 {
                     "option": "100 થી વધુ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  1000 થી વધુ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
         { // Question 19
             "q": "ઋગ્વેદની ભાષા શું કહેવાતી હતી ?",
             "a": [
                 {
                     "option": "ગુજરાતી",
                     "correct": false
                 },
                 {
                     "option": "વૈદિક સંસ્કૃત",
                     "correct": true
                 },
                 {
                     "option": "હિન્દી",
                     "correct": false
                 },
                 {
                     "option": "અંગ્રેજી",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈદિક સંસ્કૃત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 20
             "q": "વેદોને છાપવાનું કામ ક્યારે થયું ?",
             "a": [
                 {
                     "option": "200 વર્ષ પહેલાં",
                     "correct": true
                 },
                 {
                     "option": "2000 વર્ષ પહેલાં",
                     "correct": false
                 },
                 {
                     "option": "20 વર્ષ પહેલાં",
                     "correct": false
                 },
                 {
                     "option": "100 વર્ષ પહેલાં",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  200 વર્ષ પહેલાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
         { // Question 21
             "q": "રાજા ક્યું કામ કરતા હતા ?",
             "a": [
                 {
                     "option": "પ્રજાનું રક્ષણ",
                     "correct": false
                 },
                 {
                     "option": "આપેલ ત્રણેય",
                     "correct": true
                 },
                 {
                     "option": "ધર્મનું રક્ષણ",
                     "correct": false
                 },
                 {
                     "option": "ન્યાય આપવાનું કાર્ય",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલ ત્રણેય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 22
             "q": "જનતા અથવા પુરા સમુદાય માટે કયા શબ્દોનો ઉપયોગ થતો હતો ?",
             "a": [
                 {
                     "option": "જનાર્દન-વિશ",
                     "correct": false
                 },
                 {
                     "option": "જન-વિશ",
                     "correct": true
                 },
                 {
                     "option": "જન-વિશાલ",
                     "correct": false
                 },
                 {
                     "option": "જન-વિટ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જન-વિશ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
         { // Question 23
             "q": "અગ્નિ શાના દેવતા છે ?",
             "a": [
                 {
                     "option": "આગના",
                     "correct": true
                 },
                 {
                     "option": "ક્રોદ્ધના",
                     "correct": false
                 },
                 {
                     "option": "યુદ્ધના",
                     "correct": false
                 },
                 {
                     "option": "કાચના",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આગના</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 24
             "q": "નીચેનામાંથી કયો વેદ નથી ?",
             "a": [
                 {
                     "option": "ઋગ્વેદ",
                     "correct": false
                 },
                 {
                     "option": "અર્થવેદ",
                     "correct": true
                 },
                 {
                     "option": "સામવેદ",
                     "correct": false
                 },
                 {
                     "option": "યજુર્વેદ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અર્થવેદ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
         { // Question 25
             "q": "વેદો હજારો વર્ષો સુધી માત્ર કર્ણોપકર્ણ સાંભળીને, કંઠસ્થ કરીને યાદ રખાયા હોવાથી શું કહેવાય છે ?",
             "a": [
                 {
                     "option": "શ્રુતલેખન",
                     "correct": false
                 },
                 {
                     "option": "શ્રુતગ્રંથો",
                     "correct": false
                 },
                 {
                     "option": "શ્રુતિગ્રંથો",
                     "correct": true
                 },
                 {
                     "option": "શ્રવણગ્રંથો",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્રુતિગ્રંથો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
         { // Question 26
             "q": "ઋગ્વેદના અમુક સૂક્તો શાના રૂપમાં મુકાયેલા છે ?",
             "a": [
                 {
                     "option": "સંવાદ",
                     "correct": true
                 },
                 {
                     "option": "સંપાદ",
                     "correct": false
                 },
                 {
                     "option": "સંચાલ",
                     "correct": false
                 },
                 {
                     "option": "સંવાહ",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંવાદ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 27
             "q": "વૈદિક સમયના રાજાની વિશેષતા શું હતી ?",
             "a": [
                 {
                     "option": "તેઓને રાજધાની કે મહેલો ન હતા.",
                     "correct": false
                 },
                 {
                     "option": "તેઓની પાસે સેના ન હતી",
                     "correct": false
                 },
                 {
                     "option": "તેઓ કર ઉઘરાવતા ન હતા.",
                     "correct": false
                 },
                 {
                     "option": "આપેલ ત્રણેય",
                     "correct": true
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલ ત્રણેય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 28
             "q": "ઇનામગામ ક્યાં આવેલ છે ?",
             "a": [
                 {
                     "option": "ઘોડ નદીના  કિનારે",
                     "correct": true
                 },
                 {
                     "option": "ભીમા નદીના કિનારે",
                     "correct": false
                 },
                 {
                     "option": "નર્મદા નદીના કિનારે",
                     "correct": false
                 },
                 {
                     "option": "ઘોડાપુર નદીના કિનારે",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘોડ નદીના  કિનારે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
         { // Question 29
             "q": "ઋગ્વેદની રચના આશરે કેટલા વર્ષ પહેલાં થયેલ હોવાનું મનાય છે ?",
             "a": [
                 {
                     "option": "ઈ.સ. પૂર્વે 3000-3500",
                     "correct": true
                 },
                 {
                     "option": "ઈ.સ. 3000-3500",
                     "correct": false
                 },
                 {
                     "option": "ઈ.સ. પૂર્વે 3300-3700",
                     "correct": false
                 },
                 {
                     "option": "ઈ.સ. પૂર્વે 3400-3900",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. પૂર્વે 3000-3500</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
         { // Question 30
             "q": "ઋગ્વેદમાં આવેલા સૂક્ત કોની સ્તુતિ માટેના મંત્રો છે ?",
             "a": [
                 {
                     "option": "રાજા-રાણીઓની",
                     "correct": false
                 },
                 {
                     "option": "ભાઈ-ભાભીઓની",
                     "correct": false
                 },
                 {
                     "option": "દેવી-દેવતાઓની",
                     "correct": true
                 },
                 {
                     "option": "માતા-પિતાઓની",
                     "correct": false
                 } // no comma here
            ],
             "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
             "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દેવી-દેવતાઓની</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
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
                    "option": "ડાંગ જિલ્લ્લામાં",
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
                    "option": "ડાંગ જિલ્લ્લામાં",
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
                    "option": "કચ્છ જિલ્લ્લામાં",
                    "correct": true
                },
                {
                    "option": "બનાસકાંઠા જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કચ્છ જિલ્લ્લામાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
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
                    "option": "કચ્છ જિલ્લ્લામાં",
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
                    "option": "કચ્છ જિલ્લ્લામાં",
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
                    "option": "કચ્છ જિલ્લ્લામાં",
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
                    "option": "કચ્છ જિલ્લ્લામાં",
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
                    "option": "કચ્છ જિલ્લ્લામાં",
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
                    "option": "મહેસાણા જિલ્લ્લામાં",
                    "correct": true
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહેસાણા જિલ્લ્લામાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
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
                    "option": "વલસાડ જિલ્લ્લામાં",
                    "correct": true
                },
                {
                    "option": "જામનગર જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વલસાડ જિલ્લ્લામાં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
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
                    "option": "વલસાડ જિલ્લ્લામાં",
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
       },
	{ // Question 1
            "q": "ઇ.સ. પૂર્વે સાતમી કે છઠ્ઠી સદીમાં ઉત્તર ભારતમાં કેટલાં મહાજનપદો હતાં ?",
            "a": [
                {
                    "option": "12",
                    "correct": false
                },
                {
                    "option": "26",
                    "correct": false
                },
                {
                    "option": "18",
                    "correct": false
                },
                {
                    "option": "16",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  16</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "રાજતંત્ર રાજ્યવ્યવસ્થામાં કોને પ્રમુખ ગણવામાં આવતો હતો?",
            "a": [
                {
                    "option": "પ્રધાનને",
                    "correct": false
                },
                {
                    "option": "સેનાપતિને",
                    "correct": false
                },
                {
                    "option": "રાજાને",
                    "correct": true
                },
                {
                    "option": "નાગરિકને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજાને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આમાંથી કયું રાજ્ય રાજતંત્ર રાજ્યવ્યવસ્થા ધરાવતું હતું ?",
            "a": [
                {
                    "option": "કુશીનારા",
                    "correct": false
                },
                {
                    "option": "મિથિલા",
                    "correct": false
                },
                {
                    "option": "મગધ",
                    "correct": true
                },
                {
                    "option": "વૈશાલી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મગધ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "આમાંથી કયું રાજ્ય ગણરાજ્ય કહેવાતું હતું ?",
            "a": [
                {
                    "option": "અવંતિ",
                    "correct": false
                },
                {
                    "option": "કોશલ",
                    "correct": false
                },
                {
                    "option": "વત્સ",
                    "correct": false
                },
                {
                    "option": "વૈશાલી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈશાલી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "આમાંથી કયું રાજ્ય સૌથી વધુ શક્તિશાળી હતું ?",
            "a": [
                {
                    "option": "કોશલ",
                    "correct": false
                },
                {
                    "option": "અવંતિ",
                    "correct": false
                },
                {
                    "option": "મગધ",
                    "correct": true
                },
                {
                    "option": "વત્સ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મગધ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "વજ્જીસંઘ ગણરાજ્યનું મુખ્ય સ્થાન કયું હતું ?",
            "a": [
                {
                    "option": "વારાણસી",
                    "correct": false
                },
                {
                    "option": "કૌશામ્બી",
                    "correct": false
                },
                {
                    "option": "મિથિલા",
                    "correct": false
                },
                {
                    "option": "વૈશાલી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈશાલી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ગણરાજ્યોની રાજ્યવ્યવસ્થા સંપૂર્ણપણે કોના પર આધારિત હતી ?",
            "a": [
                {
                    "option": "પ્રમુખ પર",
                    "correct": false
                },
                {
                    "option": "રાજા પર",
                    "correct": false
                },
                {
                    "option": "લોકો પર",
                    "correct": true
                },
                {
                    "option": "લશ્કર પર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકો પર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગણરાજ્યોની રાજ્યવ્યવસ્થા કયા સ્વરૂપની હતી ?",
            "a": [
                {
                    "option": "રાજાશાહી",
                    "correct": false
                },
                {
                    "option": "સામંતશાહી",
                    "correct": false
                },
                {
                    "option": "પ્રમુખશાહી",
                    "correct": false
                },
                {
                    "option": "લોકશાહી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકશાહી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કોઈપણ દરખાસ્ત ગણરાજ્યોની સભામાં કેટલી વખત રજૂ થતી ?",
            "a": [
                {
                    "option": "ચાર વખત",
                    "correct": false
                },
                {
                    "option": "બે વખત",
                    "correct": false
                },
                {
                    "option": "ત્રણ વખત",
                    "correct": true
                },
                {
                    "option": "છ વખત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્રણ વખત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ગણરાજ્યોની સભા ભરાતી તે સ્થળને શું કહેતા ?",
            "a": [
                {
                    "option": "સંસદ",
                    "correct": false
                },
                {
                    "option": "વિધાન સભા",
                    "correct": false
                },
                {
                    "option": "સંથાગાર",
                    "correct": true
                },
                {
                    "option": "સ્થાનિક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સંથાગાર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "આપણા દેશના લોકો પોતાના શાસકોની પસંદગી શાનાથી કરે છે ?",
            "a": [
                {
                    "option": "મતદાનથી",
                    "correct": true
                },
                {
                    "option": "વંશપરંપરાગતથી",
                    "correct": false
                },
                {
                    "option": "ધ્વનિ મતથી",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મતદાનથી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ઇ.સ. પૂર્વે સાતમી કે છઠ્ઠી સદીમાં ઉત્તર ભારતમાં મોટાં રાજ્યો કયા નામે ઓળખાતાં હતાં?",
            "a": [
                {
                    "option": "જનપદ",
                    "correct": false
                },
                {
                    "option": "રાજપદ",
                    "correct": false
                },
                {
                    "option": "મહાજનપદ",
                    "correct": true
                },
                {
                    "option": "મહાપદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહાજનપદ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "જે રાજ્યમાં લોકો રાજાની પસંદગી કરતા તે રાજ્યને શું કહેવામાં આવતું ?",
            "a": [
                {
                    "option": "રાજાશાહી",
                    "correct": false
                },
                {
                    "option": "ગણરાજ્ય",
                    "correct": true
                },
                {
                    "option": "પ્રમુખ રાજ્ય",
                    "correct": false
                },
                {
                    "option": "લશ્કર રાજ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગણરાજ્ય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ગણરાજ્ય સમયમાં ખેડૂતો જમીનની ઊપજનો કેટલામો ભાગ કરરૂપે રાજકોષમાં આપતા ?",
            "a": [
                {
                    "option": "પાંચમો",
                    "correct": false
                },
                {
                    "option": "છઠ્ઠો",
                    "correct": true
                },
                {
                    "option": "ત્રીજો",
                    "correct": false
                },
                {
                    "option": "સાતમો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  છઠ્ઠો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ગણરાજ્ય સંઘના સભ્યોને મત આપવા માટે શું આપવામાં આવતું ?",
            "a": [
                {
                    "option": "કાગળ",
                    "correct": false
                },
                {
                    "option": "સળીયો",
                    "correct": false
                },
                {
                    "option": "સળી",
                    "correct": true
                },
                {
                    "option": "સિક્કો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સળી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "મગધમાં કઇ બે નદીઓ વહેતી હતી ?",
            "a": [
                {
                    "option": "ગંગા-યમુના",
                    "correct": false
                },
                {
                    "option": "ગંગા-બ્રહ્મપુત્રા",
                    "correct": false
                },
                {
                    "option": "ગંગા-સિંધુ",
                    "correct": false
                },
                {
                    "option": "ગંગા-સોન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગંગા-સોન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ગણરાજ્ય સમયમાં ચિત્રાંકન કરેલા વાસણને શું કહેવાતું ?",
            "a": [
                {
                    "option": "ચિત્રિત પાત્ર",
                    "correct": false
                },
                {
                    "option": "ચિત્રિત ",
                    "correct": false
                },
                {
                    "option": "ચિત્રિત ધૂસરપાત્ર",
                    "correct": true
                },
                {
                    "option": "ધૂસરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચિત્રિત ધૂસરપાત્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ગણરાજ્યોમાં ખેડૂતો જમીન ખેડવા માટે હળમાં શાનો ઉપયોગ કરતાં ?",
            "a": [
                {
                    "option": "લાકડાંની કોશનો ",
                    "correct": false
                },
                {
                    "option": "લોખંડની કોશનો",
                    "correct": true
                },
                {
                    "option": "માટીની કોશનો",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોખંડની કોશનો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "અલ્હાબાદથી મળેલ ઈંટની દીવાલ આશરે કેટલા વર્ષ પહેલાંની ગણાય છે ?",
            "a": [
                {
                    "option": "2000",
                    "correct": false
                },
                {
                    "option": "2500",
                    "correct": true
                },
                {
                    "option": "3000",
                    "correct": false
                },
                {
                    "option": "3500",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  2500</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "પ્રજાતંત્ર અને રાષ્ટ્રીય એકતાની વાત આવે ત્યારે કોને યાદ કરવામાં આવે છે ?",
            "a": [
                {
                    "option": "કોશલને",
                    "correct": false
                },
                {
                    "option": "મગધને",
                    "correct": false
                },
                {
                    "option": "વજ્જીસંઘના ગણરાજ્યોને",
                    "correct": true
                },
                {
                    "option": "રાજતંત્રના રાજ્યોને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વજ્જીસંઘના ગણરાજ્યોને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "માનવી શરૂઆતમાં ભટકતું જીવન શા માટે જીવતો હતો ?",
            "a": [
                {
                    "option": "ખોરાકની શોધમાં",
                    "correct": true
                },
                {
                    "option": "અગ્નિની શોધમાં",
                    "correct": false
                },
                {
                    "option": "પાણીની શોધમાં",
                    "correct": false
                },
                {
                    "option": "રહેવાની શોધમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખોરાકની શોધમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "એક જગ્યાએથી બીજી જગ્યાએ સ્થળાંતર કરતા ત્યારે તેઓ કેવી રીતે રહેતા ?",
            "a": [
                {
                    "option": "અલગ-અલગ રહેતા",
                    "correct": false
                },
                {
                    "option": "સમૂહમાં સાથે રહેતા",
                    "correct": true
                },
                {
                    "option": "ઝાડમાં રહેતા",
                    "correct": false
                },
                {
                    "option": "છૂપાઈને રહેતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમૂહમાં સાથે રહેતા</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "જ્યાં જ્યાં મોટા સમુદાયો રહેવા લાગ્યા, તે જનસમુદાયો ક્યા નામે ઓળખાવા લાગ્યા ?",
            "a": [
                {
                    "option": "જાનપદ",
                    "correct": false
                },
                {
                    "option": "જનસદ",
                    "correct": false
                },
                {
                    "option": "જનપદ",
                    "correct": true
                },
                {
                    "option": "માનપદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જનપદ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "'જનપદ'નો અર્થ શું થાય ?",
            "a": [
                {
                    "option": "માણસના વસવાટનું એક સ્થાન",
                    "correct": true
                },
                {
                    "option": "પશુના વસવાટનું એક સ્થાન",
                    "correct": false
                },
                {
                    "option": "રાજાના વસવાટનું એક સ્થાન",
                    "correct": false
                },
                {
                    "option": "પક્ષીના વસવાટનું એક સ્થાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માણસના વસવાટનું એક સ્થાન</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "જનપદોના નામ કોના ઉપરથી પડ્યા ?",
            "a": [
                {
                    "option": "જનપદની સ્થાપના કરવાવાળાના નામ ઉપરથી",
                    "correct": true
                },
                {
                    "option": "જનપદ સામે યુદ્ધ કરવાવાળાના નામ ઉપરથી",
                    "correct": false
                },
                {
                    "option": "જનપદને હરાવનારના નામ ઉપરથી",
                    "correct": false
                },
                {
                    "option": "જનપદને મારનારના નામ ઉપરથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જનપદની સ્થાપના કરવાવાળાના નામ ઉપરથી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "કયા કાળમાં અનેક જનપદોનો ઉલ્લેખ જોવા મળે છે ?",
            "a": [
                {
                    "option": "રામાયણ",
                    "correct": false
                },
                {
                    "option": "મહાભારત",
                    "correct": true
                },
                {
                    "option": "મહાયાન",
                    "correct": false
                },
                {
                    "option": "મહાનાયક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહાભારત</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "કઈ સદીમાં ઉત્તર ભારતમાં નાનાં-મોટાં અનેક રાજ્યો હતાં ?",
            "a": [
                {
                    "option": "ઈ.સ. પૂર્વેની સાતમી કે છઠ્ઠી સદીમાં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. પૂર્વેની સાતમી કે નવમી સદીમાં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. પૂર્વેની આઠમી કે છઠ્ઠી સદીમાં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. પૂર્વેની આઠમી કે નવમી સદીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. પૂર્વેની સાતમી કે છઠ્ઠી સદીમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ઈ.સ. પૂર્વેની સાતમી કે છઠ્ઠી સદીમાં ઉત્તર ભારતમાં મોટાં રાજ્યો કયા નામે ઓળખાતાં હતા ?",
            "a": [
                {
                    "option": "જનપદ",
                    "correct": false
                },
                {
                    "option": "મહાજનપદ",
                    "correct": true
                },
                {
                    "option": "મહાપદ",
                    "correct": false
                },
                {
                    "option": "જનસદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહાજનપદ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ઈ.સ. પૂર્વેની સાતમી કે છઠ્ઠી સદીમાં ઉત્તર ભારતમાં નાનાં રાજ્યો કયા નામે ઓળખાતાં હતા ?",
            "a": [
                {
                    "option": "જનપદ",
                    "correct": true
                },
                {
                    "option": "મહાજનપદ",
                    "correct": false
                },
                {
                    "option": "મહાપદ",
                    "correct": false
                },
                {
                    "option": "જનસદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જનપદ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "મહાજનપદોમાં કેટલા પ્રકારની રાજ્યવ્યવસ્થા સ્થાપિત હતી ?",
            "a": [
                {
                    "option": "4",
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
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "વૈશાલીમાં કઈ પ્રજાનું ગણરાજ્ય હતું ?",
            "a": [
                {
                    "option": "લિચ્છવી",
                    "correct": true
                },
                {
                    "option": "શાક્ય",
                    "correct": false
                },
                {
                    "option": "વિદેહ",
                    "correct": false
                },
                {
                    "option": "મલ્લ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લિચ્છવી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "કપિલવસ્તુમાં કઈ પ્રજાનું ગણરાજ્ય હતું ?",
            "a": [
                {
                    "option": "લિચ્છવી",
                    "correct": false
                },
                {
                    "option": "શાક્ય",
                    "correct": true
                },
                {
                    "option": "વિદેહ",
                    "correct": false
                },
                {
                    "option": "મલ્લ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાક્ય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "મિથિલામાં કઈ પ્રજાનું ગણરાજ્ય હતું ?",
            "a": [
                {
                    "option": "લિચ્છવી",
                    "correct": false
                },
                {
                    "option": "શાક્ય",
                    "correct": false
                },
                {
                    "option": "વિદેહ",
                    "correct": true
                },
                {
                    "option": "મલ્લ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિદેહ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "કુશીનારામાં કઈ પ્રજાનું ગણરાજ્ય હતું ?",
            "a": [
                {
                    "option": "લિચ્છવી",
                    "correct": false
                },
                {
                    "option": "શાક્ય",
                    "correct": false
                },
                {
                    "option": "વિદેહ",
                    "correct": false
                },
                {
                    "option": "મલ્લ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મલ્લ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "મહાજનપદના સમયમાં કોની વચ્ચે અવારનવાર સંઘર્ષ થતો ?",
            "a": [
                {
                    "option": "મગધ અને વત્સ વચ્ચે",
                    "correct": false
                },
                {
                    "option": "મગધ અને કોશલ વચ્ચે",
                    "correct": false
                },
                {
                    "option": "મગધ અને વજ્જિસંઘ વચ્ચે",
                    "correct": true
                },
                {
                    "option": "વજ્જિસંઘ અને વત્સ વચ્ચે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મગધ અને વજ્જિસંઘ વચ્ચે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "કેટલી જાતિના લોકોએ પોતાનું રક્ષણ કરવા માટે સંઘરાજ્ય સ્થાપ્યુ ?",
            "a": [
                {
                    "option": "છ-સાત",
                    "correct": false
                },
                {
                    "option": "સાત-આઠ",
                    "correct": false
                },
                {
                    "option": "પાંચ-છ",
                    "correct": false
                },
                {
                    "option": "આઠ-નવ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આઠ-નવ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "લિચ્છવી, વજ્જી, જ્ઞાતુક વગેરે જાતિના લોકોએ જે સંઘરાજ્ય સ્થાપ્યું તે કયા નામે ઓળખાતું હતું ?",
            "a": [
                {
                    "option": "વજીરસંઘનું ગણરાજ્ય",
                    "correct": false
                },
                {
                    "option": "વજ્જીસંઘનું ગણરાજ્ય",
                    "correct": true
                },
                {
                    "option": "વલયસંઘનું ગણરાજ્ય",
                    "correct": false
                },
                {
                    "option": "લિચ્છવીસંઘનું ગણરાજ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વજ્જીસંઘનું ગણરાજ્ય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "ગણરાજ્યના રાજયવહીવટનું સંચાલન કોના દ્વારા થતું હતું ?",
            "a": [
                {
                    "option": "મંડળ દ્વારા",
                    "correct": false
                },
                {
                    "option": "સભા દ્વારા",
                    "correct": true
                },
                {
                    "option": "રાજા દ્વારા",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સભા દ્વારા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ગણરાજ્યો રાજ્યવહીવટ માટે કોને પસંદ કરતા હતા ?",
            "a": [
                {
                    "option": "મંત્રીને",
                    "correct": false
                },
                {
                    "option": "સંત્રીને",
                    "correct": false
                },
                {
                    "option": "પ્રમુખને",
                    "correct": true
                },
                {
                    "option": "પ્રમાણને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રમુખને</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "ગણરાજ્યમાં પ્રત્યેક સભ્યને શું ગણવામાં આવતો ?",
            "a": [
                {
                    "option": "પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "મંત્રી",
                    "correct": false
                },
                {
                    "option": "ભાઈ",
                    "correct": false
                },
                {
                    "option": "રાજા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજા</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "ગણરાજ્યના પ્રમુખને કઈ સમિતિ રાજયવહીવટમાં મદદ કરતી ?",
            "a": [
                {
                    "option": "કાર્યવાહક સમિતિ",
                    "correct": true
                },
                {
                    "option": "નાણા સમિતિ",
                    "correct": false
                },
                {
                    "option": "વહીવટ સમિતિ",
                    "correct": false
                },
                {
                    "option": "કારોબારી સમિતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્યવાહક સમિતિ</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "કોઇપણ રાજ્યના શાસક પોતાના રાજ્યના સંરક્ષણ માટે રાજ્યની રાજધાનીની આસપાસ શું કરતા હતા ?",
            "a": [
                {
                    "option": "તળાવ બંધાવતા",
                    "correct": false
                },
                {
                    "option": "કિલ્લાઓ બંધાવતા",
                    "correct": true
                },
                {
                    "option": "મહેલ બંધાવતા",
                    "correct": false
                },
                {
                    "option": "મંદિર બંધાવતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિલ્લાઓ બંધાવતા</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "યુદ્ધ વખતે ગણરાજ્યોમાં બધા જ નાગરિકો પોતાને શું માનતા ?",
            "a": [
                {
                    "option": "રાજા",
                    "correct": false
                },
                {
                    "option": "સેનાપતિ",
                    "correct": false
                },
                {
                    "option": "સૈનિક",
                    "correct": true
                },
                {
                    "option": "પ્રજા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૈનિક</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "ગુજરાતમાં પંચાયતી રાજનું માળખું કેટલા પ્રકારનું છે ?",
            "a": [
                {
                    "option": "પાંચ",
                    "correct": false
                },
                {
                    "option": "ચાર",
                    "correct": false
                },
                {
                    "option": "બે",
                    "correct": false
                },
                {
                    "option": "ત્રણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્રણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "કેટલી વસ્તીવાળાં ગામોમાં ગ્રામપંચાયત હોય છે ?",
            "a": [
                {
                    "option": "15000થી વધુ",
                    "correct": false
                },
                {
                    "option": "15000થી ઓછી",
                    "correct": true
                },
                {
                    "option": "25000થી ઓછી",
                    "correct": false
                },
                {
                    "option": "5000થી ઓછી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  15000થી ઓછી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ગ્રામપંચાયતમાં કેટલા સભ્યો હોય છે ?",
            "a": [
                {
                    "option": "5 થી 15",
                    "correct": false
                },
                {
                    "option": "6 થી 15",
                    "correct": false
                },
                {
                    "option": "8 થી 18",
                    "correct": false
                },
                {
                    "option": "7 થી15",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  7 થી15</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "તાલુકા પંચાયતના વડાને શું કહે છે ?",
            "a": [
                {
                    "option": "તાલુકા વિકાસ અધિકારી",
                    "correct": false
                },
                {
                    "option": "તાલુકા પ્રમુખ",
                    "correct": true
                },
                {
                    "option": "જિલ્લા પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "તલાટી કમ મંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા પ્રમુખ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "તાલુકા પંચાયતની વહીવટી કામગીરી કોણ સંભાળે છે ?",
            "a": [
                {
                    "option": "જિલ્લા વિકાસ અધિકારી",
                    "correct": false
                },
                {
                    "option": "તાલુકા વિકાસ અધિકારી",
                    "correct": true
                },
                {
                    "option": "તાલુકા પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "તલાટી કમ મંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા વિકાસ અધિકારી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ગ્રામપંચાયતના વડાને શું કહે છે ?",
            "a": [
                {
                    "option": "તલાટી કમ મંત્રી",
                    "correct": false
                },
                {
                    "option": "તાલુકા પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "મુખી",
                    "correct": false
                },
                {
                    "option": "સરપંચ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સરપંચ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ગ્રામપંચાયતની વહીવટી કામગીરી કોણ સંભાળે છે ?",
            "a": [
                {
                    "option": "મુખી",
                    "correct": false
                },
                {
                    "option": "તલાટી કમ મંત્રી",
                    "correct": true
                },
                {
                    "option": "સરપંચ",
                    "correct": false
                },
                {
                    "option": "તાલુકા પ્રમુખ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તલાટી કમ મંત્રી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "જિલ્લા પંચાયતના વડાને શું કહે છે ?",
            "a": [
                {
                    "option": "જિલ્લા પ્રમુખ",
                    "correct": true
                },
                {
                    "option": "જિલ્લા વિકાસ અધિકારી",
                    "correct": false
                },
                {
                    "option": "જિલ્લા વહીવટી અધિકારી",
                    "correct": false
                },
                {
                    "option": "જિલ્લા કમિશ્નર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા પ્રમુખ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "જિલ્લા પંચાયતની વહીવટી કામગીરી કોણ સંભાળે છે ?",
            "a": [
                {
                    "option": "જિલ્લા કમિશ્નર",
                    "correct": false
                },
                {
                    "option": "જિલ્લા વહીવટી અધિકારી",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "જિલ્લા વિકાસ અધિકારી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા વિકાસ અધિકારી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "તાલુકા પંચાયતના પ્રમુખને કોણ ચૂંટે છે ?",
            "a": [
                {
                    "option": "તાલુકાનાં લોકો",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયતના હારેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયતના ચુંટાયેલા સભ્યો",
                    "correct": true
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા પંચાયતના ચુંટાયેલા સભ્યો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ગ્રામપંચાયતના વડાને કોણ ચુંટે છે ?",
            "a": [
                {
                    "option": "ગામનાં લોકો",
                    "correct": true
                },
                {
                    "option": "ગ્રામપંચાયતના હારેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "ગ્રામપંચાયતના ચુંટાયેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગામનાં લોકો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "તાલુકા પંચાયતમાં કેટલા સભ્યો હોય છે ?",
            "a": [
                {
                    "option": "31 થી 51",
                    "correct": false
                },
                {
                    "option": "7 થી15",
                    "correct": false
                },
                {
                    "option": "15 થી 31",
                    "correct": true
                },
                {
                    "option": "51 થી વધુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  15 થી 31</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "જિલ્લા પંચાયતમાં કેટલા સભ્યો હોય છે ?",
            "a": [
                {
                    "option": "7 થી15",
                    "correct": false
                },
                {
                    "option": "15 થી 31",
                    "correct": false
                },
                {
                    "option": "31 થી 51",
                    "correct": true
                },
                {
                    "option": "51 થી વધુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  31 થી 51</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "કેટલા વર્ષની ઉંમરે નાગરિકને મત આપવાનો હક મળે છે ?",
            "a": [
                {
                    "option": "16 વર્ષ કે તેથી વધુ",
                    "correct": false
                },
                {
                    "option": "21 વર્ષ કે તેથી વધુ",
                    "correct": false
                },
                {
                    "option": "18  વર્ષ કે તેથી વધુ",
                    "correct": true
                },
                {
                    "option": "25 વર્ષ કે તેથી વધુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  18  વર્ષ કે તેથી વધુ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કેટલા વર્ષની ઉંમરે નાગરિકને સ્થાનિક ચૂંટણીમાં ઉમેદવારી નોંધાવવાનો હક મળે છે?",
            "a": [
                {
                    "option": "16 વર્ષ કે તેથી વધુ",
                    "correct": false
                },
                {
                    "option": "21 વર્ષ કે તેથી વધુ",
                    "correct": true
                },
                {
                    "option": "18  વર્ષ કે તેથી વધુ",
                    "correct": false
                },
                {
                    "option": "25 વર્ષ કે તેથી વધુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  21 વર્ષ કે તેથી વધુ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "સ્થાનિક સ્વરાજ્યની સંસ્થાઓની મુદત કેટલા વર્ષની હોય છે ?",
            "a": [
                {
                    "option": "બે વર્ષ",
                    "correct": false
                },
                {
                    "option": "પાંચ વર્ષ",
                    "correct": true
                },
                {
                    "option": "અઢી વર્ષ",
                    "correct": false
                },
                {
                    "option": "દશ વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાંચ વર્ષ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ગ્રામસભામાં કોણ ભાગ લે છે ?",
            "a": [
                {
                    "option": "રાજ્યના લોકો",
                    "correct": false
                },
                {
                    "option": "શહેરના લોકો",
                    "correct": false
                },
                {
                    "option": "ગામના લોકો",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગામના લોકો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "લોક અદાલતમાં બન્ને પક્ષ વચ્ચે શું કરાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "ઝઘડો",
                    "correct": false
                },
                {
                    "option": "ચર્ચા",
                    "correct": false
                },
                {
                    "option": "સમાધાન",
                    "correct": true
                },
                {
                    "option": "વિવાદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સમાધાન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "સામાજિક ન્યાય આપવાનું કાર્ય કોણ કરે છે ?",
            "a": [
                {
                    "option": "ગ્રામસભા",
                    "correct": false
                },
                {
                    "option": "લોક અદાલત",
                    "correct": false
                },
                {
                    "option": "સામાજિક ન્યાય સમિતિ",
                    "correct": true
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સામાજિક ન્યાય સમિતિ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "કઈ અદાલતમાં ઝડપી અને બિનખર્ચાળ ન્યાય મળે છે ?",
            "a": [
                {
                    "option": "વડી અદાલત",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "લોક અદાલત",
                    "correct": true
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોક અદાલત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "BPLનો અર્થ શું થાય ?",
            "a": [
                {
                    "option": "ગરીબીરેખા નીચે આવતાં કુટુંબો ",
                    "correct": true
                },
                {
                    "option": "ગરીબીરેખા ઉપર આવતાં કુટુંબો",
                    "correct": false
                },
                {
                    "option": "ગરીબીરેખા જેવડા આવતાં કુટુંબો",
                    "correct": false
                },
                {
                    "option": "ગરીબીરેખા સાથે આવતાં કુટુંબો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગરીબીરેખા નીચે આવતાં કુટુંબો </p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "નીચેનામાંથી 'સ્થાનિક સ્વરાજ્ય'ની વ્યાખ્યામાં કઈ બાબતનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "સ્થાનિક કક્ષાએ લોકો મત આપે",
                    "correct": false
                },
                {
                    "option": "લોકો પોતાના પ્રતિનિધિને ચૂંટી મોકલે",
                    "correct": false
                },
                {
                    "option": "ચૂંટાયેલા પ્રતિનિધિ દ્વારા જ વહીવટ થાય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "સ્થાનિક સ્વરાજ્યનો વહીવટ કરતી સંસ્થાઓને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "સુરાજ્યની સંસ્થાઓ",
                    "correct": false
                },
                {
                    "option": "સમુહ સ્વરાજ્યની સંસ્થાઓ",
                    "correct": false
                },
                {
                    "option": "સ્થાનિક સ્વરાજ્યની સંસ્થાઓ",
                    "correct": true
                },
                {
                    "option": "રાજ્ય સ્વરાજ્યની સંસ્થાઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્થાનિક સ્વરાજ્યની સંસ્થાઓ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ગ્રામીણ સ્થાનિક સ્વરાજ્યની સંસ્થા કઈ નથી ?",
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
                    "correct": false
                },
                {
                    "option": "નગર પંચાયત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નગર પંચાયત</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "જિલ્લા પંચાયતના પ્રમુખને કોણ ચૂંટે છે ?",
            "a": [
                {
                    "option": "જિલ્લાનાં લોકો",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયતના હારેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયતના ચુંટાયેલા સભ્યો",
                    "correct": true
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા પંચાયતના ચુંટાયેલા સભ્યો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "જિલ્લા પંચાયતના વહીવટી અધિકારીની નિમણૂંક કોણ કરે છે ?",
            "a": [
                {
                    "option": "જિલ્લાનાં લોકો",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયતના હારેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયતના ચુંટાયેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્ય સરકાર</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ગ્રામપંચાયતના વહીવટી અધિકારીની નિમણૂંક કોણ કરે છે ?",
            "a": [
                {
                    "option": "ગામનાં લોકો",
                    "correct": false
                },
                {
                    "option": "ગ્રામપંચાયતના હારેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "ગ્રામપંચાયતના ચુંટાયેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજ્ય સરકાર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "તાલુકા પંચાયતના વહીવટી અધિકારીની નિમણૂંક કોણ કરે છે ?",
            "a": [
                {
                    "option": "તાલુકાનાં લોકો",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયતના હારેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયતના ચુંટાયેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્ય સરકાર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ગ્રામપંચાયતની ચૂંટણી માટે પાડવામાં આવેલા વિભાગને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "વોર્ડ",
                    "correct": true
                },
                {
                    "option": "વાડ",
                    "correct": false
                },
                {
                    "option": "કાર્ડ",
                    "correct": false
                },
                {
                    "option": "ચાર્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વોર્ડ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ગ્રામપંચાયતના કાર્યાલયને બીજું શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "ગ્રામ સભા",
                    "correct": false
                },
                {
                    "option": "ગ્રામ સચિવાલય",
                    "correct": true
                },
                {
                    "option": "ગ્રામ સચિન",
                    "correct": false
                },
                {
                    "option": "ગ્રામ મહાલય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રામ સચિવાલય</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "તાલુકા વિકાસ અધિકારીનું અંગ્રેજી ટૂંકું નામ શું છે ?",
            "a": [
                {
                    "option": "T.D.O.",
                    "correct": true
                },
                {
                    "option": "T.D.S.",
                    "correct": false
                },
                {
                    "option": "D.D.O.",
                    "correct": false
                },
                {
                    "option": "D.T.H.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: T.D.O.</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "જિલ્લા વિકાસ અધિકારીનું અંગ્રેજી ટૂંકું નામ શું છે ?",
            "a": [
                {
                    "option": "T.D.O.",
                    "correct": false
                },
                {
                    "option": "T.D.S.",
                    "correct": false
                },
                {
                    "option": "D.D.O.",
                    "correct": true
                },
                {
                    "option": "D.T.H.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: D.D.O.</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "જિલ્લા પ્રાથમિક શાળાઓમાં શિક્ષકોની નિમણૂક કરવાનું કામ કોણ કરે છે ?",
            "a": [
                {
                    "option": "જિલ્લા પંચાયત",
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
                    "option": "સામાજિક ન્યાય સમિતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા પંચાયત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "સામાજિક ન્યાય સમિતિ કઈ કક્ષાએ કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "ગ્રામ અને જિલ્લા",
                    "correct": false
                },
                {
                    "option": "તાલુકા અને જિલ્લા",
                    "correct": true
                },
                {
                    "option": "ગ્રામ અને તાલુકા",
                    "correct": false
                },
                {
                    "option": "નગર અને જિલ્લા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાલુકા અને જિલ્લા</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "જિલ્લા કક્ષાએ સામાજિક ન્યાય સમિતિની પસંદગી કોણ કરે છે ?",
            "a": [
                {
                    "option": "જિલ્લા પંચાયતના ચૂંટાયેલા સભ્યો",
                    "correct": true
                },
                {
                    "option": "તાલુકા પંચાયતના ચૂંટાયેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "ગ્રામપંચાયતના ચૂંટાયેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયતના હારેલા સભ્યો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા પંચાયતના ચૂંટાયેલા સભ્યો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "લોક અદાલતની સ્થાપનાનો હેતુ શું હતો ?",
            "a": [
                {
                    "option": "ગરીબ અને સામાજિક રીતે પછાત વર્ગને ન્યાય મળે",
                    "correct": false
                },
                {
                    "option": "કુદરતી આપત્તિનો ભોગ બનનારને ન્યાય મળે",
                    "correct": false
                },
                {
                    "option": "વાર્ષિક 50000 રૂ.થી ઓછી આવકવાળાને ન્યાય મળે",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "લોક અદાલતની કામગીરીમાં કોણ જોડાય છે ?",
            "a": [
                {
                    "option": "સ્થાનિક અગ્રણીઓ",
                    "correct": false
                },
                {
                    "option": "નિષ્ણાત શિક્ષકો",
                    "correct": false
                },
                {
                    "option": "વકીલો",
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
        { // Question 38
            "q": "ગ્રામપંચાયત કયાંની સ્થાનિક સ્વરાજ્યની સંસ્થા છે ?",
            "a": [
                {
                    "option": "ગામની",
                    "correct": true
                },
                {
                    "option": "તાલુકાના ગામોની",
                    "correct": false
                },
                {
                    "option": "જિલ્લાના ગામોની",
                    "correct": false
                },
                {
                    "option": "એક શહેરની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગામની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 39
            "q": "તાલુકા પંચાયત કયાંની સ્થાનિક સ્વરાજ્યની સંસ્થા છે ?",
            "a": [
                {
                    "option": "એક ગામની",
                    "correct": false
                },
                {
                    "option": "તાલુકાના ગામોની",
                    "correct": true
                },
                {
                    "option": "જિલ્લાના ગામોની",
                    "correct": false
                },
                {
                    "option": "એક શહેરની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાલુકાના ગામોની</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "જિલ્લા પંચાયત કયાંની સ્થાનિક સ્વરાજ્યની સંસ્થા છે ?",
            "a": [
                {
                    "option": "એક ગામની",
                    "correct": false
                },
                {
                    "option": "તાલુકાના ગામોની",
                    "correct": false
                },
                {
                    "option": "જિલ્લાના ગામોની",
                    "correct": true
                },
                {
                    "option": "એક શહેરની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાના ગામોની</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
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
        },
	{ // Question 1
            "q": "નગરપાલિકાના વડાને શું કહે છે ?",
            "a": [
                {
                    "option": "નગરસેવક",
                    "correct": false
                },
                {
                    "option": "પ્રમુખ",
                    "correct": true
                },
                {
                    "option": "ચીફ ઑફિસર",
                    "correct": false
                },
                {
                    "option": "મેયર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પ્રમુખ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "નગરપાલિકાના મુખ્ય વહીવટી અધિકારીને શું કહે છે ?",
            "a": [
                {
                    "option": "ચીફ ઑફિસર",
                    "correct": true
                },
                {
                    "option": "મ્યુનિસિપલ કમિશનર",
                    "correct": false
                },
                {
                    "option": "પ્રમુખ ",
                    "correct": false
                },
                {
                    "option": "મેયર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચીફ ઑફિસર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "મહાનગરપાલિકાના વડાને શું કહે છે ?",
            "a": [
                {
                    "option": "મેયર",
                    "correct": true
                },
                {
                    "option": "પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "ચીફ ઑફિસર",
                    "correct": false
                },
                {
                    "option": "સરપંચ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મેયર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "મહાનગરપાલિકાના મુખ્ય વહીવટી અધિકારીને શું કહે છે ?",
            "a": [
                {
                    "option": "મેયર",
                    "correct": false
                },
                {
                    "option": "મ્યુનિસિપલ કમિશનર",
                    "correct": true
                },
                {
                    "option": "પ્રમુખ ",
                    "correct": false
                },
                {
                    "option": "ચીફ ઑફિસર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મ્યુનિસિપલ કમિશનર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "15 હજારથી 5 લાખ સુધીની વસ્તીવાળા શહેરમાં કઈ સ્થાનિક સ્વરાજ્યની સંસ્થા વહીવટ કરે છે ? ",
            "a": [
                {
                    "option": "નગરપંચાયત",
                    "correct": false
                },
                {
                    "option": "નગરપાલિકા",
                    "correct": true
                },
                {
                    "option": "મહાનગરપાલિકા",
                    "correct": false
                },
                {
                    "option": "ગ્રામપંચાયત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નગરપાલિકા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "5 લાખથી વધુ વસ્તીવાળા શહેરમાં કઈ સ્થાનિક સ્વરાજ્યની સંસ્થા વહીવટ કરે છે ? ",
            "a": [
                {
                    "option": "નગરપાલિકા",
                    "correct": false
                },
                {
                    "option": "નગરપંચાયત",
                    "correct": false
                },
                {
                    "option": "મહાનગરપાલિકા",
                    "correct": true
                },
                {
                    "option": "ગ્રામપંચાયત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહાનગરપાલિકા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "નગરપાલિકાના ચીફ ઑફિસરની નિમણૂક કોણ કરે છે ?",
            "a": [
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": false
                },
                {
                    "option": "નગપાલિકાના ચૂંટાયેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": true
                },
                {
                    "option": "જિલ્લા વિકાસ અધિકારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજ્ય સરકાર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "મેયરની ચૂંટણી કેટલાં વર્ષે થાય છે ?",
            "a": [
                {
                    "option": "પાંચ વર્ષે",
                    "correct": false
                },
                {
                    "option": "દર વર્ષે ",
                    "correct": false
                },
                {
                    "option": "અઢી વર્ષે",
                    "correct": true
                },
                {
                    "option": "ચાર વર્ષે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અઢી વર્ષે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "મ્યુનિસિપલ કમિશનરની નિમણૂક કોણ કરે છે ?",
            "a": [
                {
                    "option": "મેયર",
                    "correct": false
                },
                {
                    "option": "મહાનગરપાલિકાના ચૂંટાયેલા સભ્યો",
                    "correct": false
                },
                {
                    "option": "મહાનગરપાલિકાની કારોબારી સમિતિ",
                    "correct": false
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજ્ય સરકાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "મહાનગરપાલિકાની સૌથી મહત્ત્વની સમિતિ કઈ છે ?",
            "a": [
                {
                    "option": "આરોગ્ય સમિતિ",
                    "correct": false
                },
                {
                    "option": "શિક્ષણ સમિતિ",
                    "correct": false
                },
                {
                    "option": "કારોબારી સમિતિ",
                    "correct": true
                },
                {
                    "option": "નાણાં સમિતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કારોબારી સમિતિ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "કઈ આંતરરાષ્ટ્રીય સંસ્થા મહાનગરપાલિકાને આર્થિક સહાય કરે છે ?",
            "a": [
                {
                    "option": "યુનેસ્કો",
                    "correct": false
                },
                {
                    "option": "યુનિસેફ",
                    "correct": false
                },
                {
                    "option": "સંયુક્ત રાષ્ટ્રો",
                    "correct": false
                },
                {
                    "option": "વિશ્વબૅન્ક",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વિશ્વબૅન્ક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "હાલમાં ગુજરાતમાં મહાનગરો કેટલાં છે ?",
            "a": [
                {
                    "option": "નવ",
                    "correct": false
                },
                {
                    "option": "સાત",
                    "correct": false
                },
                {
                    "option": "આઠ",
                    "correct": true
                },
                {
                    "option": "દશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આઠ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "નીચેના શહેરોમાંથી ક્યા શહેરમાં નગરપાલિકા છે ?",
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
                    "option": "દૂધરેજ",
                    "correct": true
                },
                {
                    "option": "ભાવનગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દૂધરેજ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "આ શહેરોમાંથી ક્યા શહેરમાં મહાનગરપાલિકા છે ?",
            "a": [
                {
                    "option": "સુરેન્દ્રનગર",
                    "correct": false
                },
                {
                    "option": "અમરેલી",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                },
                {
                    "option": "કચ્છ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "પીવાના ચોખ્ખા પાણીની વ્યવસ્થા નગરપાલિકાનું કેવું કામ છે ?",
            "a": [
                {
                    "option": "મરજિયાત કાર્ય",
                    "correct": false
                },
                {
                    "option": "ફરજિયાત કાર્ય",
                    "correct": true
                },
                {
                    "option": "બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફરજિયાત કાર્ય</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "જાહેર સ્નાનાગાર નગરપાલિકાનું કેવું કામ છે ?",
            "a": [
                {
                    "option": "ફરજિયાત કાર્ય",
                    "correct": false
                },
                {
                    "option": "મરજિયાત કાર્ય",
                    "correct": true
                },
                {
                    "option": "બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મરજિયાત કાર્ય</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
       },
        { // Question 17
            "q": "નગરપાલિકાની ચૂંટણી કેટલા વર્ષે આવે છે ?",
            "a": [
                {
                    "option": "5 વર્ષે",
                    "correct": true
                },
                {
                    "option": "4 વર્ષે",
                    "correct": false
                },
                {
                    "option": "2.5 વર્ષે",
                    "correct": false
                },
                {
                    "option": "6 વર્ષે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5 વર્ષે</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "નગરપાલિકામાં ચૂંટાયેલા સભ્યોને સોગંદ કોણ લેવડાવે છે ?",
            "a": [
                {
                    "option": "મામલતદાર",
                    "correct": false
                },
                {
                    "option": "કલેક્ટર",
                    "correct": true
                },
                {
                    "option": "તાલુકા પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "તાલુકા વિકાસ અધિકારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કલેક્ટર</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "નગરપાલિકાનું અધ્યક્ષપદ કોણ સંભાળે છે ?",
            "a": [
                {
                    "option": "નગરપાલિકા પ્રમુખ",
                    "correct": true
                },
                {
                    "option": "તાલુકા પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પ્રમુખ",
                    "correct": false
                },
                {
                    "option": "ચીફ ઑફિસર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નગરપાલિકા પ્રમુખ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "નગરપાલિકાનો બધો વહીવટ કોના નામે ચાલે છે ?",
            "a": [
                {
                    "option": "નગરપાલિકા પ્રમુખના",
                    "correct": true
                },
                {
                    "option": "તાલુકા પ્રમુખના",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પ્રમુખના",
                    "correct": false
                },
                {
                    "option": "ચીફ ઑફિસરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નગરપાલિકા પ્રમુખના</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 21
            "q": "નીચેનામાંથી કયું કાર્ય ફરજિયાત છે ?",
            "a": [
                {
                    "option": "પ્રાથમિક શિક્ષણની વ્યવસ્થા",
                    "correct": false
                },
                {
                    "option": "રસ્તા પર દીવાબત્તીની વ્યવસ્થા",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "ગટર વ્યવસ્થા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 22
            "q": "નીચેનામાંથી કયું કાર્ય મરજિયાત છે ?",
            "a": [
                {
                    "option": "બાગ-બગીચા બનાવવા",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "પુસ્તકાલયો",
                    "correct": false
                },
                {
                    "option": "વૃક્ષારોપણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "નગરપાલિકાએ ક્યાંની સ્થાનિક સ્વરાજ્યની સંસ્થા છે ?",
            "a": [
                {
                    "option": "ગામની",
                    "correct": false
                },
                {
                    "option": "શહેરની",
                    "correct": true
                },
                {
                    "option": "તાલુકાની",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શહેરની</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "કેટલા વર્ષની ઉંમરે નાગરિકને મત આપવાનો હક મળે છે ?",
            "a": [
                {
                    "option": "16 વર્ષ કે તેથી વધુ",
                    "correct": false
                },
                {
                    "option": "21 વર્ષ કે તેથી વધુ",
                    "correct": false
                },
                {
                    "option": "18  વર્ષ કે તેથી વધુ",
                    "correct": true
                },
                {
                    "option": "25 વર્ષ કે તેથી વધુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  18  વર્ષ કે તેથી વધુ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "કેટલા વર્ષની ઉંમરે નાગરિકને સ્થાનિક ચૂંટણીમાં ઉમેદવારી નોંધાવવાનો હક મળે છે?",
            "a": [
                {
                    "option": "16 વર્ષ કે તેથી વધુ",
                    "correct": false
                },
                {
                    "option": "21 વર્ષ કે તેથી વધુ",
                    "correct": true
                },
                {
                    "option": "18  વર્ષ કે તેથી વધુ",
                    "correct": false
                },
                {
                    "option": "25 વર્ષ કે તેથી વધુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  21 વર્ષ કે તેથી વધુ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }// no comma here
	



    ]
};
