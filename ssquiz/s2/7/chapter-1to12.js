// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પાઠ-1 થી 12",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "7",
        "semester": "2",
        "main": "",
        "results": "<h5>વધુ વાંચન કરો</h5>",
        "level1": "(ગ્રેડ A) ખૂબ સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> પણ મહેનત જરૂર કરવી.</p>",
        "level2": "(ગ્રેડ B) સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> મહેનત કરવાની જરૂર છે.</p>",
        "level3": "(ગ્રેડ C) સાધારણ પરિણામ <p><strong class='inst'>સૂચન:</strong> ઘરે મહેનત કરવાની જરૂર છે.</p>",
        "level4": "(ગ્રેડ D) નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપો.</span></p>",
        "level5": "(ગ્રેડ E) ખૂબ જ નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપવાની ખૂબ જ જરૂર છે.</p>" 
    },
    "questions": [
        { // Question 1
            "q": "પાટણ શહેર કયા પ્રકારની સાડી માટે પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "બાંધણી",
                    "correct": false
                },
                {
                    "option": "કાંજીવરમ",
                    "correct": false
                },
                {
                    "option": "પટોળું",
                    "correct": true
                },
                {
                    "option": "બનારસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પટોળું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "સૌ પ્રથમ પંચાસરમાં કયા વંશના શાસકો રાજ્ય કરતા હતા ?",
            "a": [
                {
                    "option": "ચાવડા",
                    "correct": true
                },
                {
                    "option": "વાઘેલા",
                    "correct": false
                },
                {
                    "option": "સોલંકી",
                    "correct": false
                },
                {
                    "option": "પ્રતિહાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચાવડા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "વનરાજ ચાવડાએ કઈ નદી ઉપર નવું નગર વસાવ્યું ?",
            "a": [
                {
                    "option": "ખારી",
                    "correct": false
                },
                {
                    "option": "સરસ્વતી",
                    "correct": true
                },
                {
                    "option": "રૂપેણ",
                    "correct": false
                },
                {
                    "option": "બનાસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સરસ્વતી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ચાવડા વંશ પછી ગુજરાતની રાજસત્તા કયા વંશના શાસકોએ સંભાળી ?",
            "a": [
                {
                    "option": "વાઘેલા",
                    "correct": false
                },
                {
                    "option": "સોલંકી",
                    "correct": true
                },
                {
                    "option": "રાઠોડ",
                    "correct": false
                },
                {
                    "option": "ચૌહાણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સોલંકી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ક્યા રાજાના સમયમાં કલિકાલસર્વજ્ઞ હેમચંન્દ્રાચાર્ય થઈ ગયા ?",
            "a": [
                {
                    "option": "કુમારપાળ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહ",
                    "correct": true
                },
                {
                    "option": "ભીમદેવ સોલંકી",
                    "correct": false
                },
                {
                    "option": "મૂળરાજ સોલંકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિદ્ધરાજ જયસિંહ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ક્યા રાજાના સમયમાં અણહિલવાડ પાટણ વિદ્યાનું ધામ બન્યું હતું ?",
            "a": [
                {
                    "option": "સિદ્ધરાજ જયસિંહના",
                    "correct": true
                },
                {
                    "option": "કુમારપાળના",
                    "correct": false
                },
                {
                    "option": "અજયપાળના",
                    "correct": false
                },
                {
                    "option": "મૂળરાજ સોલંકીના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિદ્ધરાજ જયસિંહના</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ક્યા રાજાના શાસનમાં ગુજરાતની સમૃદ્ધિ ટોચ પર હતી ?",
            "a": [
                {
                    "option": "અજયપાળના",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહના",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ સોલંકીના",
                    "correct": false
                },
                {
                    "option": "કુમારપાળના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કુમારપાળના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગુજરાતમાં રાણીની વાવ ક્યાં આવેલી છે ?",
            "a": [
                {
                    "option": "વડનગરમાં",
                    "correct": false
                },
                {
                    "option": "પાટણમાં",
                    "correct": true
                },
                {
                    "option": "જૂનાગઢમાં",
                    "correct": false
                },
                {
                    "option": "વડોદરામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાટણમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "રાણીની વાવનું બાંધકામ કોણે કરાવ્યું હતું ?",
            "a": [
                {
                    "option": "રાણી ભાનુમતીએ",
                    "correct": false
                },
                {
                    "option": "રાજમાતા મીનળદેવીએ",
                    "correct": false
                },
                {
                    "option": "રાણી ઉદયમતીએ",
                    "correct": true
                },
                {
                    "option": "રાણી નાયિકાદેવીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાણી ઉદયમતીએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "રાણીની વાવ કેટલા માળની છે ?",
            "a": [
                {
                    "option": "સાત",
                    "correct": true
                },
                {
                    "option": "નવ",
                    "correct": false
                },
                {
                    "option": "છ",
                    "correct": false
                },
                {
                    "option": "પાંચ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સાત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "કોના કહેવાથી ધોળકામાં મલાવ તળાવ અને વિરમગામમાં મુનસર તળાવ બાંધવામાં આવ્યાં હતાં ?",
            "a": [
                {
                    "option": "રાણી ઉદયમતીના",
                    "correct": false
                },
                {
                    "option": "રાજમાતા મીનળદેવીના",
                    "correct": true
                },
                {
                    "option": "રાણી રૂપમતીના",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજમાતા મીનળદેવીના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગુજરાતમાં સહસ્ત્રલિંગ તળાવ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "પાટણમાં",
                    "correct": true
                },
                {
                    "option": "જૂનાગઢમાં",
                    "correct": false
                },
                {
                    "option": "અમદાવાદમાં",
                    "correct": false
                },
                {
                    "option": "વડનગરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાટણમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ઈ.સ. 1178માં શાહબુદ્દીન ઘોરીને કોણે હરાવ્યો હતો ?",
            "a": [
                {
                    "option": "ભીમદેવ સોલંકીએ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહે",
                    "correct": false
                },
                {
                    "option": "રાણી ઉદયમતીએ",
                    "correct": false
                },
                {
                    "option": "રાણી નાઈકીદેવીએ ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાણી નાઈકીદેવીએ </p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "અમદાવાદ શહેર કોણે વસાવ્યું હતું ?",
            "a": [
                {
                    "option": "મહંદ બેગડાએ",
                    "correct": false
                },
                {
                    "option": "શહેનશાહ શાહઆલમે",
                    "correct": false
                },
                {
                    "option": "સુલતાન કુત્બુદ્દીને",
                    "correct": false
                },
                {
                    "option": "સુલતાન અહમદશાહે ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુલતાન અહમદશાહે </p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "હેમચંદ્રાચાર્યે રચેલા વ્યાકરણ ગ્રંથનું નામ શું હતું ?",
            "a": [
                {
                    "option": "ગુજરાત કોશ",
                    "correct": false
                },
                {
                    "option": "ભગવતગોમંડળ",
                    "correct": false
                },
                {
                    "option": "જોડણીકોશ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધહેમ શબ્દાનુશાસન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિદ્ધહેમ શબ્દાનુશાસન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "સોલંકીયુગમાં સોમનાથ પાટણ ક્યા ધર્મનું પ્રખ્યાત ધામ ગણાતું હતું ?",
            "a": [
                {
                    "option": "શૈવ",
                    "correct": true
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "વૈષ્ણવ",
                    "correct": false
                },
                {
                    "option": "સ્વામીનારાયણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શૈવ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "સોલંકીયુગમાં ગુજરાતમાં વૈષ્ણવ ધર્મનું સુપ્રસિદ્ધધામ કયું હતું ?",
            "a": [
                {
                    "option": "અંબાજી",
                    "correct": false
                },
                {
                    "option": "સોમનાથ",
                    "correct": false
                },
                {
                    "option": "પાટણ",
                    "correct": false
                },
                {
                    "option": "દ્વારકા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દ્વારકા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ગુજરાતમાં સૂર્યમંદિર ક્યા સ્થળે આવેલું છે ?",
            "a": [
                {
                    "option": "પાટણ",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢ",
                    "correct": false
                },
                {
                    "option": "વડનગર",
                    "correct": false
                },
                {
                    "option": "મોઢેરા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મોઢેરા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગુજરાતમાં સુપ્રસિદ્ધ કીર્તિતોરણ ક્યા સ્થળે આવેલું છે ?",
            "a": [
                {
                    "option": "પાલિતાણા",
                    "correct": false
                },
                {
                    "option": "વડનગર",
                    "correct": true
                },
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "મહેસાણા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વડનગર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "વનરાજના પિતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "અજયપાળ",
                    "correct": false
                },
                {
                    "option": "જયદેવ",
                    "correct": false
                },
                {
                    "option": "જયશિખરી",
                    "correct": true
                },
                {
                    "option": "જયસિંહ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જયશિખરી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "અણહિલવાડ પાટણના પશ્ચિમે આવેલા હાલના કયા ગામનું અપભ્રંશ થયેલું નામ છે ? ",
            "a": [
                {
                    "option": "અનાનાશ",
                    "correct": false
                },
                {
                    "option": "અનાવાડ",
                    "correct": true
                },
                {
                    "option": "અણહિલ",
                    "correct": false
                },
                {
                    "option": "અનાથાલય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અનાવાડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "નવા વસાવેલા નગરનું નામ 'અણહિલવાડ પાટણ' વનરાજે શાના ઉપરથી રાખ્યું હતું ?",
            "a": [
                {
                    "option": "પોતાના મિત્ર અણહિલના નામ પરથી",
                    "correct": true
                },
                {
                    "option": "પોતાના ભાઈ અણહિલના નામ પરથી",
                    "correct": false
                },
                {
                    "option": "પોતાના ભાણેજ અણહિલના નામ પરથી",
                    "correct": false
                },
                {
                    "option": "પોતાના ગામ અણહિલના નામ પરથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોતાના મિત્ર અણહિલના નામ પરથી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ચાવડા વંશના શાસકોએ આશરે કેટલા વર્ષ સુધી ગુજરાત પર રાજસત્તા સંભાળી ?",
            "a": [
                {
                    "option": "199",
                    "correct": false
                },
                {
                    "option": "196",
                    "correct": true
                },
                {
                    "option": "169",
                    "correct": false
                },
                {
                    "option": "191",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 196</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "નીચેનામાંથી કયો રાજા સોલંકી વંશનો રાજા ન હતો ?",
            "a": [
                {
                    "option": "મૂળરાજ",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહ",
                    "correct": false
                },
                {
                    "option": "કરણઘેલો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કરણઘેલો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "સોલંકી વંશના કેટલા શાસકો રાજ્ય-સિંહાસન છોડી, મુગટધારીમાંથી કંથાધારી બન્યા હતા ?",
            "a": [
                {
                    "option": "સાત",
                    "correct": false
                },
                {
                    "option": "છ",
                    "correct": true
                },
                {
                    "option": "આઠ",
                    "correct": false
                },
                {
                    "option": "નવ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: છ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "કોણે રાજયમાંથી યાત્રાવેરો બંધ કરાવ્યો હતો ? ",
            "a": [
                {
                    "option": "મીનળદેવીએ",
                    "correct": true
                },
                {
                    "option": "ઉદયમતીએ",
                    "correct": false
                },
                {
                    "option": "નયિકાદેવીએ",
                    "correct": false
                },
                {
                    "option": "મીનાદેવીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીનળદેવીએ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "કરણદેવ વાઘેલા કોની સેના સામે હારી ગયો ?",
            "a": [
                {
                    "option": "અલાઉદ્દીન બલ્બનની",
                    "correct": false
                },
                {
                    "option": "અલાઉદ્દીન ખીલજીની",
                    "correct": true
                },
                {
                    "option": "જલાલુદ્દીન ખીલજીની",
                    "correct": false
                },
                {
                    "option": "શાહબુદ્દીન ઘોરીની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અલાઉદ્દીન ખીલજીની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગુજરાતના છેલ્લા રાજપૂત રાજા કોણ હતા ?",
            "a": [
                {
                    "option": "મૂળરાજ",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ",
                    "correct": false
                },
                {
                    "option": "વનરાજ ચાવડા",
                    "correct": false
                },
                {
                    "option": "કરણદેવ વાઘેલો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કરણદેવ વાઘેલો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "સોલંકી વંશ પછી કયા વંશનું શાસન ગુજરાતમાં આવ્યું ?",
            "a": [
                {
                    "option": "ચાવડા",
                    "correct": false
                },
                {
                    "option": "ગુહિલોત",
                    "correct": false
                },
                {
                    "option": "વાઘેલા",
                    "correct": true
                },
                {
                    "option": "જાદવ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાઘેલા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "સોલંકીઓના રાજ્યતંત્રમાં કોનું સ્થાન સર્વોપરી હતું ?",
            "a": [
                {
                    "option": "લોકોનું",
                    "correct": false
                },
                {
                    "option": "રાજાનું",
                    "correct": true
                },
                {
                    "option": "નેતાનું",
                    "correct": false
                },
                {
                    "option": "ભાઈનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજાનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "સોલંકીઓનાં રાજ્યતંત્રમાં મુખ્ય અમાત્યને શું કહેવામાં આવતું ?",
            "a": [
                {
                    "option": "મહાત્મા",
                    "correct": false
                },
                {
                    "option": "મહામાત્ય",
                    "correct": true
                },
                {
                    "option": "મહારાજા",
                    "correct": false
                },
                {
                    "option": "મહાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહામાત્ય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "સોલંકીઓના રાજ્યતંત્રમાં નાણાખાતાને કયા નામે ઓળખવામાં આવતું ?",
            "a": [
                {
                    "option": "શ્રીકૃષ્ણ",
                    "correct": false
                },
                {
                    "option": "શ્રીકરણ",
                    "correct": true
                },
                {
                    "option": "શ્રીનમન",
                    "correct": false
                },
                {
                    "option": "શ્રીકર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્રીકરણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "સોલંકીઓના રાજ્યતંત્રમાં વહીવટી વિભાગોમાં સૌથી મોટો ભાગ શું કહેવાતો ?",
            "a": [
                {
                    "option": "મંડલ",
                    "correct": true
                },
                {
                    "option": "પંથક",
                    "correct": false
                },
                {
                    "option": "ગામ",
                    "correct": false
                },
                {
                    "option": "મંડપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મંડલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "સોલંકીઓના રાજ્યતંત્રમાં વહીવટી વિભાગોમાં મંડલનો પેટા વિભાગ કયા નામે ઓળખાતો હતો ?",
            "a": [
                {
                    "option": "ગામ",
                    "correct": false
                },
                {
                    "option": "પંથક",
                    "correct": true
                },
                {
                    "option": "મંડપ",
                    "correct": false
                },
                {
                    "option": "પથિક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંથક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "સોલંકી શાસન વખતે ગુજરાતમાં કયા ધર્મના અનુયાયી વધારે હતા ?",
            "a": [
                {
                    "option": "વૈષ્ણવ",
                    "correct": false
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "શૈવ",
                    "correct": true
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શૈવ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "આબુમાં કયું મંદિર પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "સૂર્યમંદિર",
                    "correct": false
                },
                {
                    "option": "સોમનાથ",
                    "correct": false
                },
                {
                    "option": "વિમલવસહિ",
                    "correct": true
                },
                {
                    "option": "વિમવસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિમલવસહિ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "સલ્તનત કાળમાં જ્યારે સત્તાનું કેન્દ્ર અમદાવાદ બન્યું ત્યારે કઈ ભાષામાં કેટલાક પુસ્તકો લખાયા ?",
            "a": [
                {
                    "option": "ગુજરાતી",
                    "correct": false
                },
                {
                    "option": "ફારસી",
                    "correct": true
                },
                {
                    "option": "ઉર્દૂ",
                    "correct": false
                },
                {
                    "option": "પાલિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફારસી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
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
        },
	{ // Question 1
            "q": "આપણા દેશમાં ક્યા પ્રકારની શાસન પદ્ધતિ છે ?",
            "a": [
                {
                    "option": "સમાજવાદી",
                    "correct": false
                },
                {
                    "option": "સરમુખત્યારશાહી",
                    "correct": false
                },
                {
                    "option": "લોકશાહી",
                    "correct": true
                },
                {
                    "option": "પ્રમુખશાહી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકશાહી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ન્યાયતંત્રને ઝડપી અને બિનખર્ચાળ બનાવવા માટે કોણ કામ કરે છે ?",
            "a": [
                {
                    "option": "લોકઅદાલતો",
                    "correct": true
                },
                {
                    "option": "ન્યાયસમિતિઓ",
                    "correct": false
                },
                {
                    "option": "ન્યાયાધીશો",
                    "correct": false
                },
                {
                    "option": "ન્યાયપંચાયતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકઅદાલતો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "બધી અદાલતોમાં સૌથી નાની અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "ગ્રામ્ય અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": true
                },
                {
                    "option": "લોકઅદાલત",
                    "correct": false
                },
                {
                    "option": "મંડળ અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા અદાલત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ગુજરાત રાજ્યની વડી અદાલતની સ્થાપના ક્યારે થઈ ?",
            "a": [
                {
                    "option": "ઈ.સ.1960માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1951માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1965માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1955માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1960માં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગુજરાત રાજ્યની વડી અદાલત ક્યા શહેરમાં આવેલી છે ?",
            "a": [
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "મકાન, જમીન કે અન્ય સંપત્તિ અંગેનો વિવાદ કેવો વિવાદ કહેવાય ?",
            "a": [
                {
                    "option": "સ્થાનિક",
                    "correct": false
                },
                {
                    "option": "મહેસૂલી",
                    "correct": false
                },
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દીવાની</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ચોરી, લૂંટફાટ, મારામારી, ખૂન, શારીરિક ઈજા કે ઝઘડાનો વિવાદ કેવો વિવાદ કહેવાય ?",
            "a": [
                {
                    "option": "અદાલતી",
                    "correct": false
                },
                {
                    "option": "મૂળભૂત",
                    "correct": false
                },
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફોજદારી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ન્યાયની દેવીનું નામ શું છે ?",
            "a": [
                {
                    "option": "આમટિન",
                    "correct": false
                },
                {
                    "option": "આસ્ટીન",
                    "correct": true
                },
                {
                    "option": "આર્મી",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આસ્ટીન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ન્યાયની દેવીને ક્યાં પાટો બાંધેલો છે ?",
            "a": [
                {
                    "option": "પગે",
                    "correct": false
                },
                {
                    "option": "આંખે",
                    "correct": true
                },
                {
                    "option": "મોઢે",
                    "correct": false
                },
                {
                    "option": "હાથે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આંખે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ન્યાયની દેવીના બંન્ને હાથમાં શું છે ?",
            "a": [
                {
                    "option": "તીર-ફૂલ",
                    "correct": false
                },
                {
                    "option": "ભાલુ-તલવાર",
                    "correct": false
                },
                {
                    "option": "તલવાર-ત્રાજવું",
                    "correct": true
                },
                {
                    "option": "ઢાલ-તલવાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તલવાર-ત્રાજવું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "તાલુકા અદાલતને બીજી કઈ અદાલત પણ કહે છે ?",
            "a": [
                {
                    "option": "જીલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "ટ્રાયલ કોર્ટ",
                    "correct": true
                },
                {
                    "option": "ટ્રાય",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ટ્રાયલ કોર્ટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પોલીસને ગુનાની પ્રથમ જાણ થાય ત્યારે તે પોલીસ-સ્ટેશનમાં શું નોંધે છે ?",
            "a": [
                {
                    "option": "FIR",
                    "correct": true
                },
                {
                    "option": "RIF",
                    "correct": false
                },
                {
                    "option": "DIG",
                    "correct": false
                },
                {
                    "option": "GEN",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  FIR</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ઘરમાં ચોરી થઈ હોય તો સૌપ્રથમ કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "તાલુકા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા ફોજદારી અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા ફોજદારી અદાલતમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "કોઈએ ઘર પચાવી પાડ્યું હોય તો સૌપ્રથમ કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "જિલ્લા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "તાલુકા દીવાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "જિલ્લા ફોજદારી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા દીવાની અદાલતમાં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "તાલુકા અદાલતમાં ન્યાય ના મળ્યો હોય તો કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                },
                {
                    "option": "ન્યાયપંચાયતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "એકેયેમાં નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા અદાલતમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 16
            "q": "તાલુકા અદાલતની ઉપર કઈ અદાલત કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": true
                },
                {
                    "option": "ગ્રામ અદાલત",
                    "correct": false
                },
                {
                    "option": "લોકઅદાલત",
                    "correct": false
                },
                {
                    "option": "મુખી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા અદાલત</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "આપણા દેશમાં ન્યાયતંત્રની વ્યવસ્થા કેવી છે ?",
            "a": [
                {
                    "option": "તૂટક",
                    "correct": false
                },
                {
                    "option": "સળંગ",
                    "correct": true
                },
                {
                    "option": "વાંકી",
                    "correct": false
                },
                {
                    "option": "આડી અવળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સળંગ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 18
            "q": "આપણા દેશનું ન્યાયતંત્ર કેવું છે ?",
            "a": [
                {
                    "option": "સ્વતંત્ર અને નિષ્પક્ષ",
                    "correct": true
                },
                {
                    "option": "બંધક અને એકપક્ષીય",
                    "correct": false
                },
                {
                    "option": "સ્વતંત્ર અને એકપક્ષીય",
                    "correct": false
                },
                {
                    "option": "બંધક અને નિષ્પક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વતંત્ર અને નિષ્પક્ષ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 19
            "q": "દેશના કાયદાનું પાલન ન કરનાર શું છે ?",
            "a": [
                {
                    "option": "સારો માણસ",
                    "correct": false
                },
                {
                    "option": "સુપુત્ર",
                    "correct": false
                },
                {
                    "option": "આદર્શ માણસ",
                    "correct": false
                },
                {
                    "option": "ગુનેગાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનેગાર</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 20
            "q": "ગુનો કરનાર વ્યક્તિ બીજાનું શું છીનવે છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": true
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "કામ",
                    "correct": false
                },
                {
                    "option": "કર્તવ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હક</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 21
            "q": "કઈ અદાલતના વડા જિલ્લાની બધી અદાલતોના વડા છે ?",
            "a": [
                {
                    "option": "તાલુકા",
                    "correct": false
                },
                {
                    "option": "જિલ્લા",
                    "correct": true
                },
                {
                    "option": "ગ્રામ",
                    "correct": false
                },
                {
                    "option": "મંડળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "રાજ્યની સૌથી મોટી અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "દેશની સૌથી મોટી અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": true
                },
                {
                    "option": "વડી અદાલત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સર્વોચ્ચ અદાલત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 24
            "q": "કઈ અદાલતને નજીરી અદાલત કહે છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "રાજ્યની વડી અદાલતના ન્યાયાધીશને પ્રતિજ્ઞા કોણ લેવડાવે છે ?",
            "a": [
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": true
                },
                {
                    "option": "લોકપાલ",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "રાજયની વડી અદાલતને અંગ્રેજીમાં શું કહે છે ?",
            "a": [
                {
                    "option": "સુપ્રિમ કોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાઇકોર્ટ",
                    "correct": true
                },
                {
                    "option": "હાઇટકોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાયરકોર્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇકોર્ટ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "અદાલતમાં દાવો કરનારને શું કહેવાય ?",
            "a": [
                {
                    "option": "ફરિયાદી",
                    "correct": true
                },
                {
                    "option": "વકીલ",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફરિયાદી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગુનો કરનારને પોલીસ પકડીને લઈ જાય તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "ધરપકડ",
                    "correct": true
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધરપકડ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "તહોમતદારને-ગુનેગારને પકડી લાવવા માટે ન્યાયાધીશ હુકમ કરે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "ધરપકડ",
                    "correct": false
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": true
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અટકાયત",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૉરન્ટ/p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 30
            "q": "બાર કાઉન્સિલ તરફથી વકીલાત કરવા માટેની સનદ ધરાવતો કાયદાનો નિષ્ણાત કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "જજ",
                    "correct": false
                },
                {
                    "option": "ફરિયાદી",
                    "correct": false
                },
                {
                    "option": "વકીલ",
                    "correct": true
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વકીલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "નીચલી અદાલતના ચુકાદાનો ન્યાય મેળવવા માટે ઉપલી અદાલતમાં દાખલ કરવાની અરજીને શું કહે છે ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": false
                },
                {
                    "option": "ફરિયાદ",
                    "correct": false
                },
                {
                    "option": "દાવો",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અપીલ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "પોતાના કેસ માટે વકીલ રોકનાર વ્યક્તિને શું કહે છે ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": true
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "એફ.આર.આઈ",
                    "correct": false
                },
                {
                    "option": "જુબાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અસીલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 33
            "q": "ન્યાયાધીશની રૂબરૂ કોઈનો જવાબ લેવામાં કે નોંધવામાં આવે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "જવાની",
                    "correct": false
                },
                {
                    "option": "જુબાની",
                    "correct": true
                },
                {
                    "option": "અટકાયત",
                    "correct": false
                },
                {
                    "option": "ભવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જુબાની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 34
            "q": "ગુનાહિત કૃત્ય કરનારને પોલીસ દ્વારા પકડવામાં આવે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": false
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અટકાયત",
                    "correct": true
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અટકાયત</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 35
            "q": "'ફળિયામાં ઝઘડો થયો. માજીને વાગ્યું.' આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 36
            "q": "'ફળિયામાં ઝઘડો થયો. માજીને વાગ્યું.' આ કેસની કાર્યવાહી કઈ અદાલતમાં ચાલશે ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની અદાલતમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "'રમેશભાઈ ઉપર હુમલો થયો.' આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 38
            "q": "'વાહનને અકસ્માત થયો.' આ કેસની કાર્યવાહી કઈ અદાલતમાં ચાલશે ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની અદાલતમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 39
            "q": "જિલ્લા અદાલતના ચુકાદાથી સંતોષ ન થાય તો કઈ અદાલતમાં કાર્યવાહી કરી શકીએ ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલતમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 40
            "q": "'જમીનદારે હંસાબેનની જમીન પચાવી પાડી. તેના બદલામાં કોઈ નાણા આપ્યા ન હતા.'  આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 41
            "q": "તાલુકા અદાલતમાં કયા દાવાઓ સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાની</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "જિલ્લા અદાલતમાં કયા દાવાઓ સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી-દીવાની બન્ને</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 43
            "q": "વડી અદાલતમાં કયા દાવા સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી-દીવાની બન્ને</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "અદાલતમાં ન્યાયની દેવીના હાથમાં ત્રાજવું શાનું પ્રતિક છે ?",
            "a": [
                {
                    "option": "સમતોલ ન્યાય આપવાનું",
                    "correct": true
                },
                {
                    "option": "અસમતોલ ન્યાય આપવાનું",
                    "correct": false
                },
                {
                    "option": "અસંતોષ ન્યાય આપવાનું",
                    "correct": false
                },
                {
                    "option": "સંતોષ ન્યાય આપવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમતોલ ન્યાય આપવાનું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "અદાલતમાં ન્યાયની દેવીના હાથમાં તલવાર શાનું પ્રતિક છે ?",
            "a": [
                {
                    "option": "ગુનો સાબિત થાય તો સજા કરવાનું",
                    "correct": true
                },
                {
                    "option": "ગુનો સાબિત થાય તો છોડી મુકવાનું",
                    "correct": false
                },
                {
                    "option": "ગુનો સાબિત ન થાય તો સજા કરવાનું",
                    "correct": false
                },
                {
                    "option": "સમતોલ સજા આપવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનો સાબિત થાય તો સજા કરવાનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 45
            "q": "ન્યાયની દેવીની આંખે પાટા શું સૂચવે છે ?",
            "a": [
                {
                    "option": "પક્ષપાત રાખ્યા વિના સૌ માટે સમાન ન્યાય તોલવાનું",
                    "correct": true
                },
                {
                    "option": "પક્ષપાત રાખી સૌ માટે સમાન ન્યાય તોલવાનું",
                    "correct": false
                },
                {
                    "option": "પક્ષપાત રાખ્યા વિના સૌ માટે અસમાન ન્યાય તોલવાનું",
                    "correct": false
                },
                {
                    "option": "ભેદભાવ રાખી સૌ માટે અસમાન ન્યાય તોલવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પક્ષપાત રાખ્યા વિના સૌ માટે સમાન ન્યાય તોલવાનું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 46
            "q": "અદાલતોનું ભારણ ઘટાડવા માટે કઈ અદાલતો કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "લોક અદાલતો",
                    "correct": true
                },
                {
                    "option": "ન્યાય સમિતિની અદાલતો",
                    "correct": false
                },
                {
                    "option": "ગ્રામ અદાલતો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય અદાલતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોક અદાલતો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 47
            "q": "લોક-અદાલતો બન્ને પક્ષો વચ્ચે શું કરાવે છે ?",
            "a": [
                {
                    "option": "સમાધાન",
                    "correct": true
                },
                {
                    "option": "ઝઘડા",
                    "correct": false
                },
                {
                    "option": "વેરઝેર",
                    "correct": false
                },
                {
                    "option": "લૂંટફાટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમાધાન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "પાણીપતના મેદાનમાં બાબરે કોને હરાવ્યો ?",
            "a": [
                {
                    "option": "ઇબ્રાહીમ લોદીને",
                    "correct": true
                },
                {
                    "option": "શેરશાહ સૂરીને",
                    "correct": false
                },
                {
                    "option": "શાહજહાંને",
                    "correct": false
                },
                {
                    "option": "હુમાયુને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇબ્રાહીમ લોદીને </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ભારતમાં મુઘલ વંશની સ્થાપના કોણે કરી ?",
            "a": [
                {
                    "option": "અકબરે",
                    "correct": false
                },
                {
                    "option": "હુમાયુએ",
                    "correct": false
                },
                {
                    "option": "બાબરે",
                    "correct": true
                },
                {
                    "option": "બયરામખાને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બાબરે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ચિતોડના વીર યોદ્ધા રાણા સાંગાને બાબરે કયા મેદાનમાં હરાવ્યા ?",
            "a": [
                {
                    "option": "પાણીપતના",
                    "correct": false
                },
                {
                    "option": "પ્લાસીના",
                    "correct": false
                },
                {
                    "option": "હલદીઘાટીના",
                    "correct": false
                },
                {
                    "option": "કાનવાના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાનવાના</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "બાબરના પુત્રનું નામ શું હતું ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": true
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "શેરશાહ સૂરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હુમાયુ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "કોનો જન્મ અમરકોટના રાણાને ત્યાં થયો હતો ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": true
                },
                {
                    "option": "શેરશાહ સૂરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અકબર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "આમાંથી કોને મુઘલ શાસક ગણી શકાય નહિ ?",
            "a": [
                {
                    "option": "હુમાયુ",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "શેરશાહ સૂર",
                    "correct": true
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શેરશાહ સૂર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "શેરશાહે હુમાયુને કેટલી વાર હરાવ્યો હતો ?",
            "a": [
                {
                    "option": "ત્રણ",
                    "correct": false
                },
                {
                    "option": "ચાર",
                    "correct": false
                },
                {
                    "option": "બે",
                    "correct": true
                },
                {
                    "option": "એક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "બૈરામખાનની દોરવણી નીચે અકબરે કોને હરાવ્યો હતો ?",
            "a": [
                {
                    "option": "શેરશાહને",
                    "correct": false
                },
                {
                    "option": "બહાદુરશાહને",
                    "correct": false
                },
                {
                    "option": "ઇબ્રાહીમ લોદીને",
                    "correct": false
                },
                {
                    "option": "હેમુને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હેમુને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "અકબરના અવસાન પછી સલીમ કયું નામ ધારણ કરી દિલ્લીની ગાદીએ બેઠો ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": true
                },
                {
                    "option": "હુમાયુ",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જહાંગીર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "મેવાડના કયા રજપૂતોએ લાંબા સમય સુધી અકબર સામે યુદ્ધો કર્યા ?",
            "a": [
                {
                    "option": "વાઘેલા ",
                    "correct": false
                },
                {
                    "option": "કંથારિયા",
                    "correct": false
                },
                {
                    "option": "સિસોદિયા",
                    "correct": true
                },
                {
                    "option": "સોલંકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિસોદિયા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "હુમાયુને કેટલા વર્ષ સુધી રઝળપાટ કરવી પડી ?",
            "a": [
                {
                    "option": "15 વર્ષ ",
                    "correct": true
                },
                {
                    "option": "13 વર્ષ",
                    "correct": false
                },
                {
                    "option": "14 વર્ષ ",
                    "correct": false
                },
                {
                    "option": "12 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  15 વર્ષ </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "અકબરના રાજ્યમાં પરગણાની મહેસૂલ કોણ ઉઘરાવતું હતું ?",
            "a": [
                {
                    "option": "સૂબેદાર",
                    "correct": false
                },
                {
                    "option": "મુકાદ્દમ",
                    "correct": false
                },
                {
                    "option": "ચૌધરી",
                    "correct": false
                },
                {
                    "option": "આમીલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આમીલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "અકબરે ક્યો વેરો નાબૂદ કર્યો ?",
            "a": [
                {
                    "option": "નાકાવેરો",
                    "correct": false
                },
                {
                    "option": "જજિયાવેરો",
                    "correct": true
                },
                {
                    "option": "મંડલવેરો",
                    "correct": false
                },
                {
                    "option": "ખિરાજવેરો ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જજિયાવેરો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "આમાંથી કઈ આત્મકથા અબુલ ફઝલે લખી હતી ?",
            "a": [
                {
                    "option": "હુમાયુનામા",
                    "correct": false
                },
                {
                    "option": "બાબરનામા",
                    "correct": false
                },
                {
                    "option": "અકબરનામા",
                    "correct": true
                },
                {
                    "option": "જહાંગીરનામા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અકબરનામા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "રાણા પ્રતાપ અને અકબરના લશ્કર વચ્ચે કયા મેદાનમાં યુદ્ધ થયું હતું ?",
            "a": [
                {
                    "option": "ખેબરઘાટના",
                    "correct": false
                },
                {
                    "option": "હલદીઘાટીના",
                    "correct": true
                },
                {
                    "option": "બોલનઘાટના",
                    "correct": false
                },
                {
                    "option": "પાણીપતના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હલદીઘાટીના</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "આમાંથી કયા શાસકે ટંકશાળો સ્થાપીને ચાંદીના સિક્કા પડાવ્યા હતા ?",
            "a": [
                {
                    "option": "હુમાયુએ",
                    "correct": false
                },
                {
                    "option": "અકબરે",
                    "correct": false
                },
                {
                    "option": "શેરશાહે",
                    "correct": true
                },
                {
                    "option": "બાબરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શેરશાહે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "અકબરે કયા સ્થળે ઇબાદતખાનું ખોલાવ્યું હતું ?",
            "a": [
                {
                    "option": "આગરામાં",
                    "correct": false
                },
                {
                    "option": "ફતેપુર સિક્રીમાં",
                    "correct": true
                },
                {
                    "option": "બિજાપુરમાં",
                    "correct": false
                },
                {
                    "option": "દિલ્લીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફતેપુર સિક્રીમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "આમાંથી કોનો સમાવેશ અકબરના દરબારના નવરત્નોમાં થતો નહોતો ? ",
            "a": [
                {
                    "option": "બીરબલ",
                    "correct": false
                },
                {
                    "option": "તાનસેન",
                    "correct": false
                },
                {
                    "option": "હેમચંદ્રાચાર્ય",
                    "correct": true
                },
                {
                    "option": "મૂલ્લાં દોપ્યા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હેમચંદ્રાચાર્ય</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "મહારાણા પ્રતાપના ઘોડાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "કેતક",
                    "correct": false
                },
                {
                    "option": "ચેતક",
                    "correct": true
                },
                {
                    "option": "ચેતન",
                    "correct": false
                },
                {
                    "option": "કેતન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચેતક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "શેરશાહ ઈતિહાસમાં શાના તરીકે પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "સંત",
                    "correct": false
                },
                {
                    "option": "મહાત્મા",
                    "correct": false
                },
                {
                    "option": "સમાજસેવક",
                    "correct": false
                },
                {
                    "option": "સુધારક શાસક",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુધારક શાસક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "સ્વતંત્રતા દિન અને ગણતંત્ર દિન નિમિત્તે ભારતમાં સૌ પ્રથમ તિરંગો ક્યાં લહેરાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "દિલ્લીમાં લાલ કિલ્લા ઉપર ",
                    "correct": true
                },
                {
                    "option": "દિલ્લીમાં લીલા કિલ્લા ઉપર",
                    "correct": false
                },
                {
                    "option": "દિલ્લીમાં લાલ મહેલ ઉપર",
                    "correct": false
                },
                {
                    "option": "દિલ્લીમાં લીલા મહેલ ઉપર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિલ્લીમાં લાલ કિલ્લા ઉપર</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "બાબરે કઈ સાલમાં દિલ્લી ઉપર આક્રમણ કર્યું ?",
            "a": [
                {
                    "option": "ઈ.સ. 1530માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1526માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1562માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1535માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1526માં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ઇબ્રાહીમ લોદી હારી જતા કયા યુગનો અંત થયો ?",
            "a": [
                {
                    "option": "મુઘલ",
                    "correct": false
                },
                {
                    "option": "રાજપૂત",
                    "correct": false
                },
                {
                    "option": "સલ્તનત",
                    "correct": true
                },
                {
                    "option": "મરાઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સલ્તનત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ઇબ્રાહીમ લોદી હારી જતા કયા યુગની શરૂઆત થઈ ?",
            "a": [
                {
                    "option": "મુઘલ",
                    "correct": true
                },
                {
                    "option": "રાજપૂત",
                    "correct": false
                },
                {
                    "option": "સલ્તનત",
                    "correct": false
                },
                {
                    "option": "મરાઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુઘલ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "બાબરના મૃત્યુ પછી કોણ દિલ્લીની ગાદી ઉપર આવ્યું ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": true
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "શેરશાહ સૂરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હુમાયુ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "હુમાયુના ભાઈનું નામ શું હતું ?",
            "a": [
                {
                    "option": "કાદરખાન",
                    "correct": false
                },
                {
                    "option": "કામરાન",
                    "correct": true
                },
                {
                    "option": "કસાબ",
                    "correct": false
                },
                {
                    "option": "કાનરાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કામરાન</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "હુમાયુને કોની સામે સતત સંઘર્ષ કરવો પડ્યો ?",
            "a": [
                {
                    "option": "કામરાન અને અફઘાનો સામે",
                    "correct": true
                },
                {
                    "option": "કાનરાન અને અફઘાનો સામે",
                    "correct": false
                },
                {
                    "option": "કસાબ અને અફઘાનો સામે",
                    "correct": false
                },
                {
                    "option": "કામરાન અને તુર્કો સામે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કામરાન અને અફઘાનો સામે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "શેરશાહ સૂર કોણ હતો ?",
            "a": [
                {
                    "option": "તુર્ક સરદાર",
                    "correct": false
                },
                {
                    "option": "ઇરાની સરદાર",
                    "correct": false
                },
                {
                    "option": "ખાલિસ્તાની સરદાર",
                    "correct": false
                },
                {
                    "option": "અફઘાન સરદાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અફઘાન સરદાર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "હુમાયુ પછી કોણ દિલ્લીની ગાદીએ આવ્યું ?",
            "a": [
                {
                    "option": "અકબર",
                    "correct": true
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                },
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અકબર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "પિતાના અવસાન સમયે અકબરની ઉંમર કેટલા વર્ષની હતી ?",
            "a": [
                {
                    "option": "11 વર્ષની",
                    "correct": false
                },
                {
                    "option": "13 વર્ષની",
                    "correct": true
                },
                {
                    "option": "15 વર્ષની",
                    "correct": false
                },
                {
                    "option": "17 વર્ષની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 13 વર્ષની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "પિતાના અવસાન બાદ અકબરનો ઉછેર કોણે કર્યો ?",
            "a": [
                {
                    "option": "બહાદુરખાને",
                    "correct": false
                },
                {
                    "option": "કામરાને",
                    "correct": false
                },
                {
                    "option": "બૈરામખાને",
                    "correct": true
                },
                {
                    "option": "બૈજંતિમાલાએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૈરામખાને</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "અક્બર સામે કયા રાજપૂતોએ લાંબા સમય સુધી ટક્કર લીધી હતી ?",
            "a": [
                {
                    "option": "ગુહિલોત",
                    "correct": true
                },
                {
                    "option": "ચાલુક્ય",
                    "correct": false
                },
                {
                    "option": "પરમાર",
                    "correct": false
                },
                {
                    "option": "ચૌહાણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુહિલોત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "મુઘલ શાસનમાં રાજ્ય કોને મળતું ?",
            "a": [
                {
                    "option": "પુત્રો વચ્ચે સરખા ભાગે વહેંચાતું",
                    "correct": true
                },
                {
                    "option": "મોટા પુત્રને મળતું",
                    "correct": false
                },
                {
                    "option": "નાના પુત્રને મળતું",
                    "correct": false
                },
                {
                    "option": "વચેટ પુત્રને મળતું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુત્રો વચ્ચે સરખા ભાગે વહેંચાતું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "મુઘલ શાસનમાં શું અમલમાં હતું ?",
            "a": [
                {
                    "option": "લોકશાહી",
                    "correct": false
                },
                {
                    "option": "સુબાગીરી",
                    "correct": true
                },
                {
                    "option": "પ્રજાસત્તક",
                    "correct": false
                },
                {
                    "option": "ગણતંત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુબાગીરી</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "મુઘલ શાસનમાં રાજ્યના કેટલા વિભાગો પાડી શાસન કરવામાં આવતું ?",
            "a": [
                {
                    "option": "12",
                    "correct": false
                },
                {
                    "option": "13",
                    "correct": false
                },
                {
                    "option": "15",
                    "correct": true
                },
                {
                    "option": "18",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 15</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "મુઘલ શાસનમાં રાજ્યના પ્રત્યેક વિભાગ કયા નામે ઓળખાતા હતા ?",
            "a": [
                {
                    "option": "કુબા",
                    "correct": false
                },
                {
                    "option": "બુબા",
                    "correct": false
                },
                {
                    "option": "સરકાર",
                    "correct": false
                },
                {
                    "option": "સુબા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુબા</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "મુઘલ શાસનમાં સુબાના પેટા વિભાગ કયા નામે ઓળખાતા હતા ?",
            "a": [
                {
                    "option": "કુબા",
                    "correct": false
                },
                {
                    "option": "સહકાર",
                    "correct": false
                },
                {
                    "option": "સરકાર",
                    "correct": true
                },
                {
                    "option": "પરગણા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરકાર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "મુઘલ શાસનમાં સરકારના પેટા વિભાગને શું કહેવામાં આવતું હતું ?",
            "a": [
                {
                    "option": "કુબા",
                    "correct": false
                },
                {
                    "option": "સહકાર",
                    "correct": false
                },
                {
                    "option": "પરદેશ",
                    "correct": false
                },
                {
                    "option": "પરગણું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરગણું</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "મુઘલ શાસનમાં પરગણાનો ઉપરી કોણ હતો ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": false
                },
                {
                    "option": "આમીલ",
                    "correct": true
                },
                {
                    "option": "દીવાન",
                    "correct": false
                },
                {
                    "option": "મીરેબહાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આમીલ</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "મુઘલ શાસનમાં સરકારનો ઉપરી કોણ હતો ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": true
                },
                {
                    "option": "આમીલ",
                    "correct": false
                },
                {
                    "option": "દીવાન",
                    "correct": false
                },
                {
                    "option": "મીરેબહાર",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદાર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "મુઘલ શાસનમાં ગામડાઓમાં ગ્રામપંચાયતના પ્રમુખ કયા નામે ઓળખાતા ?",
            "a": [
                {
                    "option": "પટેલ",
                    "correct": false
                },
                {
                    "option": "ચૌધરી",
                    "correct": false
                },
                {
                    "option": "મુકાદમ",
                    "correct": false
                },
                {
                    "option": "આપેલ બધા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલ બધા</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "મુઘલ શાસનમાં બંદરો, જકાત, હોડીઓના નિયંત્રણો તથા તેનું દાણ વસુલ લેનાર કયા નામે ઓળખાતો ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": false
                },
                {
                    "option": "આમીલ",
                    "correct": false
                },
                {
                    "option": "દીવાન",
                    "correct": false
                },
                {
                    "option": "મીરેબહાર",
                    "correct": true
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીરેબહાર</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "અકબર કયા વારે ધર્મ સભા ભરતો હતો ?",
            "a": [
                {
                    "option": "સોમવારે",
                    "correct": false
                },
                {
                    "option": "શનિવારે",
                    "correct": false
                },
                {
                    "option": "શુક્રવારે",
                    "correct": true
                },
                {
                    "option": "ગુરૂવારે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુક્રવારે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "મુઘલ શાસનમાં મહેસૂલી વ્યવસ્થાનો સર્વોચ્ચ અધિકારી કયા નામે ઓળખાતો હતો ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": false
                },
                {
                    "option": "આમીલ",
                    "correct": false
                },
                {
                    "option": "દીવાન",
                    "correct": true
                },
                {
                    "option": "મીરેબહાર",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાન</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "મુઘલ શાસનમાં ન્યાયાધીશ કયા નામે ઓળખાતા હતા ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": false
                },
                {
                    "option": "કાઝી",
                    "correct": true
                },
                {
                    "option": "દીવાન",
                    "correct": false
                },
                {
                    "option": "મીરેબહાર",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાઝી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "શેરશાહનું શાસન દિલ્લીમાં કેટલા વર્ષ જેટલું હતું ?",
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
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "શેરશાહ સૂરે કોની મદદથી જમીન મહેસૂલનો કોઠો તૈયાર કર્યો હતો‌?",
            "a": [
                {
                    "option": "ટોડરમલ",
                    "correct": true
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "તાનસેન",
                    "correct": false
                },
                {
                    "option": "મુલ્લા દોપ્યાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટોડરમલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "શેરશાહ સૂરે કયો સુધારો કર્યો હતો ?",
            "a": [
                {
                    "option": "જકાતો કાઢી નાખી",
                    "correct": false
                },
                {
                    "option": "મોટા રાહદારી રસ્તા બનાવ્યા",
                    "correct": false
                },
                {
                    "option": "રસ્તા પર રોકાણ માટે આવાસ બનાવ્યા",
                    "correct": false
                },
                {
                    "option": "આપેલા બધા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "મરાણા પ્રતાપ પાસે કેટલા સૈનિકો હતા ?",
            "a": [
                {
                    "option": "વીસથી બાવીસ હજાર",
                    "correct": true
                },
                {
                    "option": "પચ્ચીસથી પચાસ હજાર",
                    "correct": false
                },
                {
                    "option": "પચ્ચીસથી પચાસ લાખ",
                    "correct": false
                },
                {
                    "option": "વીસથી ચાલીસ હજાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વીસથી બાવીસ હજાર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "કયા વેપારીએ મહારાણા પ્રતાપને આર્થિક મદદ કરી ?",
            "a": [
                {
                    "option": "ભોમિયાએ",
                    "correct": false
                },
                {
                    "option": "ભામાશાએ",
                    "correct": true
                },
                {
                    "option": "ભાલણે",
                    "correct": false
                },
                {
                    "option": "રતનજીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભામાશાએ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
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
        },
	{ // Question 1
            "q": "મુઘલ શાસકોમાં સૌથી વધારે પ્રતિભાશાળી શાસક કોણ હતો ?",
            "a": [
                {
                    "option": "બાબર",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": true
                },
                {
                    "option": "શાહજહાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અકબર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ક્યા મુઘલ બાદશાહના સમયમાં વિશેષ પ્રમાણમાં બાંધકામો થયાં ?",
            "a": [
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "શાહજહાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "જહાંગીરે કયા શીખગુરુનો વધ કર્યો હતો ?",
            "a": [
                {
                    "option": "તેગબહાદુરનો",
                    "correct": false
                },
                {
                    "option": "ગોવિંદસિંહનો",
                    "correct": false
                },
                {
                    "option": "અર્જુનસિંહનો",
                    "correct": true
                },
                {
                    "option": "હરગોવિંદસિંહનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અર્જુનસિંહનો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "કયો મુઘલ બાદશાહ અરબી અને ફારસી ભાષાનો નિષ્ણાંત હતો ?",
            "a": [
                {
                    "option": "જહાંગીર",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": true
                },
                {
                    "option": "શાહજહાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઔરંગઝેબ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "કયા મુઘલ બાદશાહને સંગીતકલા અને ચિત્રકલા પ્રત્યે અણગમો હતો ?",
            "a": [
                {
                    "option": "અકબરને",
                    "correct": false
                },
                {
                    "option": "શાહજહાંને",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબને",
                    "correct": true
                },
                {
                    "option": "જહાંગીરને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઔરંગઝેબને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "કયા મુઘલ બાદશાહને ચિત્રકલાનો ભારે શોખ હતો ?",
            "a": [
                {
                    "option": "અકબરને",
                    "correct": false
                },
                {
                    "option": "શાહજહાંને",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબને",
                    "correct": false
                },
                {
                    "option": "જહાંગીરને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જહાંગીરને</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કયા બાદશાહનો શાસનકાળ મુઘલ શાસનનો 'સુવર્ણ યુગ' કહેવાય છે ?",
            "a": [
                {
                    "option": "અકબરનો",
                    "correct": false
                },
                {
                    "option": "શાહજહાંનો",
                    "correct": true
                },
                {
                    "option": "જહાંગીરનો",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાંનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "જહાંગીરની પત્નીનું નામ શું હતું ?",
            "a": [
                {
                    "option": "નરગીશ",
                    "correct": false
                },
                {
                    "option": "નૂરજહાં",
                    "correct": true
                },
                {
                    "option": "અનારકલી",
                    "correct": false
                },
                {
                    "option": "નરીમન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નૂરજહાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કોણે ઔરંગઝેબ સામે પચ્ચીસ વર્ષ સુધી સંઘર્ષ કર્યો હતો ?",
            "a": [
                {
                    "option": "મહારાણા પ્રતાપ",
                    "correct": false
                },
                {
                    "option": "વીર દુર્ગાદાસ",
                    "correct": true
                },
                {
                    "option": "શિવાજી",
                    "correct": false
                },
                {
                    "option": "લક્ષ્મીબાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીર દુર્ગાદાસ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "દક્ષિણ ભારતમાં મરાઠા રાજ્યની સ્થાપના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "મહારાણા પ્રતાપ",
                    "correct": false
                },
                {
                    "option": "વીર દુર્ગાદાસ",
                    "correct": false
                },
                {
                    "option": "શિવાજી",
                    "correct": true
                },
                {
                    "option": "લક્ષ્મીબાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શિવાજી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "શિવાજીના માતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "જીજાબાઈ",
                    "correct": true
                },
                {
                    "option": "મહાપ્રજાપતી",
                    "correct": false
                },
                {
                    "option": "માયાવતી",
                    "correct": false
                },
                {
                    "option": "કુંતામાતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જીજાબાઈ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "શિવાજીનો ઉછેર કોની નજર તળે થયો ?",
            "a": [
                {
                    "option": "મનમોહન",
                    "correct": false
                },
                {
                    "option": "કોંસાડ",
                    "correct": false
                },
                {
                    "option": "કુંતામાતા",
                    "correct": false
                },
                {
                    "option": "દાદાજી કોંડદેવ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દાદાજી કોંડદેવ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "શિવાજીનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "શિવનેરીના કિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "તોરણાના કિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "પુરંદરના કિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "બિજાપુરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શિવનેરીના કિલ્લામાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "શિવાજીનો રાજ્યાભિષેક ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "શિવનેરીમાં",
                    "correct": false
                },
                {
                    "option": "તોરણામાં",
                    "correct": false
                },
                {
                    "option": "રાયગઢમાં",
                    "correct": true
                },
                {
                    "option": "પુરંદરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાયગઢમાં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કોના શાસન પછી મુઘલ શાસનનું પતન થયું ?",
            "a": [
                {
                    "option": "શાહજહાંના",
                    "correct": false
                },
                {
                    "option": "અકબરના",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબના",
                    "correct": true
                },
                {
                    "option": "જહાંગીરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:   ઔરંગઝેબના</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "શાહજહાંએ જૂની દિલ્હી પાસે ક્યું નવું શહેર વસાવ્યું ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "શાહજહાંબાદ",
                    "correct": true
                },
                {
                    "option": "જહાંગીરપુર",
                    "correct": false
                },
                {
                    "option": "હૈદરાબાદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાંબાદ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "આગ્રાનો તાજમહાલ કોણે બનાવ્યો હતો ? ",
            "a": [
                {
                    "option": "જહાંગીરે",
                    "correct": false
                },
                {
                    "option": "અકબરે",
                    "correct": false
                },
                {
                    "option": "બાબરે",
                    "correct": false
                },
                {
                    "option": "શાહજહાંએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાંએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "હોકિન્સ અને ટોમસ રો ભારતમાં વેપારનો પરવાનો મેળવવા ક્યા મુઘલ બદશાહના સમયમાં આવ્યા હતા?",
            "a": [
                {
                    "option": "ઔરંગઝેબના",
                    "correct": false
                },
                {
                    "option": "જહાંગીરના",
                    "correct": true
                },
                {
                    "option": "શાહજહાંના",
                    "correct": false
                },
                {
                    "option": "અકબરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જહાંગીરના</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ભારતમાં મુઘલ સમયમાં એક મણના કેટલા રતલ હતા?",
            "a": [
                {
                    "option": "66.6",
                    "correct": false
                },
                {
                    "option": "55.5",
                    "correct": true
                },
                {
                    "option": "55.1",
                    "correct": false
                },
                {
                    "option": "44.4",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  55.5</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "શિવાજીનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ.1630માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1674માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1707માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1526માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1630માં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "અકબર પછી કોણ દિલ્લીની ગાદીએ આવ્યું ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": true
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જહાંગીર</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કોના શાસનમાં મુઘલ સામ્રાજ્યના પતનના બીજ રોપાયા ?",
            "a": [
                {
                    "option": "બાબરના",
                    "correct": false
                },
                {
                    "option": "જહાંગીરના",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબના",
                    "correct": true
                },
                {
                    "option": "હુમાયુના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઔરંગઝેબના</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "જહાંગીરનો અર્થ શું થાય ?",
            "a": [
                {
                    "option": "દુનિયાને હારના",
                    "correct": false
                },
                {
                    "option": "ગામને જીતનાર",
                    "correct": false
                },
                {
                    "option": "દુનિયાને જીતનાર",
                    "correct": true
                },
                {
                    "option": "શહેરને જીતનાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દુનિયાને જીતનાર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "જહાંગીરના કયા શાહજાદાએ બંડ પોકાર્યું હતું ?",
            "a": [
                {
                    "option": "કામરાને",
                    "correct": false
                },
                {
                    "option": "ખુશરુએ",
                    "correct": true
                },
                {
                    "option": "શાહજહાંએ",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખુશરુએ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ભારતમાં વેપારનો પરવાનો મેળવવા આવેલા હોકિન્સ અને ટોમસ રો કયા દેશના રાજાના પ્રતિનિધિ હતા ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": true
                },
                {
                    "option": "અમેરિકા",
                    "correct": false
                },
                {
                    "option": "પોર્ટુગલ",
                    "correct": false
                },
                {
                    "option": "ફાંસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇંગ્લૅન્ડ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "રાજ્યની આબાદીનો પાયો ખેતી છે. એવું કયો મુઘલ બાદશાહ માનતો હતો ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": true
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાહજહાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "શાહજહાંએ નીચેનામાંથી કયા સ્થાપત્યનું બાંધકામ નહોતું કરાવ્યું ?",
            "a": [
                {
                    "option": "તાજમહાલ",
                    "correct": false
                },
                {
                    "option": "મોતી મસ્જિદ",
                    "correct": false
                },
                {
                    "option": "કુતુબ મિનાર",
                    "correct": true
                },
                {
                    "option": "જુમ્મા મસ્જિદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુતુબ મિનાર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "કયા મુઘલ બાદશાહની યાદશક્તિ ગજબની હતી ?",
            "a": [
                {
                    "option": "શાહજહાંની",
                    "correct": false
                },
                {
                    "option": "જહાંગીરની",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબની",
                    "correct": true
                },
                {
                    "option": "હુમાયુની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઔરંગઝેબની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "કુર્રાને શરીફનો કયા મુઘલ બાદશાહએ ઊંડો અભ્યાસ કર્યો હતો ?",
            "a": [
                {
                    "option": "શાહજહાંએ",
                    "correct": false
                },
                {
                    "option": "જહાંગીરે",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબે",
                    "correct": true
                },
                {
                    "option": "હુમાયુએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઔરંગઝેબે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ઔરંગઝેબે દક્ષિણમાં બીજાપુર અને ગોવલકોંડાનાં શિયારાજ્યો સાથે કેટલા વર્ષ સંઘર્ષ કર્યો ? ",
            "a": [
                {
                    "option": "30 વર્ષ",
                    "correct": false
                },
                {
                    "option": "25 વર્ષ",
                    "correct": true
                },
                {
                    "option": "20 વર્ષ",
                    "correct": false
                },
                {
                    "option": "15 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 25 વર્ષ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ઔરંગઝેબ સામે મરાઠા ઉપરાંત કઈ પ્રજાએ બળવો કર્યો હતો ?",
            "a": [
                {
                    "option": "જાટ અને શીખ",
                    "correct": true
                },
                {
                    "option": "ગુર્જર અને જાટ",
                    "correct": false
                },
                {
                    "option": "પારસી અને શીખ",
                    "correct": false
                },
                {
                    "option": "પારસી અને જાટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાટ અને શીખ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "મુઘલ સમયમાં સમાજ કઈ વ્યવસ્થા ઉપર રચાયેલો હતો ?",
            "a": [
                {
                    "option": "આમીલ",
                    "correct": false
                },
                {
                    "option": "સરકાર",
                    "correct": false
                },
                {
                    "option": "મુખી",
                    "correct": false
                },
                {
                    "option": "સામંત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સામંત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "દર વર્ષે બાદશાહ માટે એક હજાર જેટલા કીંમતી પોશાક તૈયાર કરવામાં આવતા. એવું કોણે લખ્યું છે ? ",
            "a": [
                {
                    "option": "અબુલ ફઝલે",
                    "correct": true
                },
                {
                    "option": "અફઝલે",
                    "correct": false
                },
                {
                    "option": "અમીર ખુશરુએ",
                    "correct": false
                },
                {
                    "option": "અલાઉદ્દીને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અબુલ ફઝલે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "દશેરાનો ઉત્સવ કયા મુઘલ બાદશાહના સમયમાં ઠાઠમાઠથી ઊજવવામાં આવતો ?",
            "a": [
                {
                    "option": "શાહજહાંના",
                    "correct": false
                },
                {
                    "option": "જહાંગીરના",
                    "correct": true
                },
                {
                    "option": "ઔરંગઝેબના",
                    "correct": false
                },
                {
                    "option": "હુમાયુના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જહાંગીરના</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "મુઘલ સમયમાં લાહોરની કઈ વસ્તુ દુનિયાભરમાં જાણીતી હતી ?",
            "a": [
                {
                    "option": "શાલ",
                    "correct": true
                },
                {
                    "option": "શેતરંજીઓ",
                    "correct": false
                },
                {
                    "option": "સુતરાઉ કાપડ",
                    "correct": false
                },
                {
                    "option": "મલમલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "મુઘલ સમયમાં ગુજરાતની કઈ વસ્તુ દુનિયાભરમાં જાણીતી હતી ? ",
            "a": [
                {
                    "option": "શાલ",
                    "correct": false
                },
                {
                    "option": "શેતરંજીઓ",
                    "correct": false
                },
                {
                    "option": "સુતરાઉ કાપડ",
                    "correct": true
                },
                {
                    "option": "મલમલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુતરાઉ કાપડ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "મુઘલ સમયમાં સિક્રીની કઈ વસ્તુ દુનિયાભરમાં જાણીતી હતી ? ",
            "a": [
                {
                    "option": "શાલ",
                    "correct": false
                },
                {
                    "option": "શેતરંજીઓ",
                    "correct": true
                },
                {
                    "option": "સુતરાઉ કાપડ",
                    "correct": false
                },
                {
                    "option": "મલમલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શેતરંજીઓ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "મુઘલ સમયમાં ઢાકાની કઈ વસ્તુ દુનિયાભરમાં જાણીતી હતી ? ",
            "a": [
                {
                    "option": "શાલ",
                    "correct": false
                },
                {
                    "option": "શેતરંજીઓ",
                    "correct": false
                },
                {
                    "option": "સુતરાઉ કાપડ",
                    "correct": false
                },
                {
                    "option": "મલમલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મલમલ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "મુઘલ સમયમાં ગામડાંઓ કેવા હતા ? ",
            "a": [
                {
                    "option": "પરાવલંબી",
                    "correct": false
                },
                {
                    "option": "પરરાજ્યલંબી",
                    "correct": false
                },
                {
                    "option": "સ્વાવલંબી",
                    "correct": true
                },
                {
                    "option": "સ્વાનલંબી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વાવલંબી</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "વૈષ્ણવ આચાર્ય વિઠ્ઠલનાથજીના કયા શિષ્યએ હિંદી કાવ્યો લખ્યાં ?",
            "a": [
                {
                    "option": "રસખાને",
                    "correct": true
                },
                {
                    "option": "કબીરે",
                    "correct": false
                },
                {
                    "option": "રહીમે",
                    "correct": false
                },
                {
                    "option": "તુલસીદાસે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રસખાને</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "મુઘલકાળમાં કયા ફ્રેંચ મુસાફરો ભારતમાં આવ્યા હતા ?",
            "a": [
                {
                    "option": "ટેવર્નિયર અને બર્નિયર",
                    "correct": true
                },
                {
                    "option": "હોકિન્સ અને ટોમસ રો",
                    "correct": false
                },
                {
                    "option": "ટેવર્નિયર અને ટોમસ રો",
                    "correct": false
                },
                {
                    "option": "હોકિન્સર અને બર્નિયર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટેવર્નિયર અને બર્નિયર</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "બર્નિયર કેટલાં વર્ષ સુધી ભારતમાં રહ્યો હતો ?",
            "a": [
                {
                    "option": "10 વર્ષ",
                    "correct": false
                },
                {
                    "option": "12 વર્ષ",
                    "correct": true
                },
                {
                    "option": "14 વર્ષ",
                    "correct": false
                },
                {
                    "option": "16 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 12 વર્ષ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "જોધપુરના મહારાજાનું અવસાન થતાં તેમના પુત્ર અને રાણીને મુઘલ શાસનના ભયથી રક્ષણ કોણે આપ્યું ?",
            "a": [
                {
                    "option": "વીર દુર્ગાદાસે",
                    "correct": true
                },
                {
                    "option": "મહારાણા પ્રતાપે",
                    "correct": false
                },
                {
                    "option": "શિવાજીએ",
                    "correct": false
                },
                {
                    "option": "ટોડરમલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વીર દુર્ગાદાસે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "શિવાજીનો રાજ્યાભિષેક ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ.1630માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1674માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1707માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1526માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ.1674માં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "મહારાષ્ટ્ર એટલે કોનું વતન ?",
            "a": [
                {
                    "option": "મરાઠાઓનું",
                    "correct": true
                },
                {
                    "option": "પારસીઓનું",
                    "correct": false
                },
                {
                    "option": "શીખોનું",
                    "correct": false
                },
                {
                    "option": "મુસ્લિમોનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મરાઠાઓનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "ક્યાંની જાગીરમાં શિવાજીએ સ્વરાજ્યના સ્વપ્ન સેવ્યાં ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રની",
                    "correct": false
                },
                {
                    "option": "પૂનાની",
                    "correct": true
                },
                {
                    "option": "પૂનમની",
                    "correct": false
                },
                {
                    "option": "સિક્કીમની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂનાની</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	 { // Question 1
            "q": "પાટણ શહેર કયા પ્રકારની સાડી માટે પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "બાંધણી",
                    "correct": false
                },
                {
                    "option": "કાંજીવરમ",
                    "correct": false
                },
                {
                    "option": "પટોળું",
                    "correct": true
                },
                {
                    "option": "બનારસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પટોળું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "સૌ પ્રથમ પંચાસરમાં કયા વંશના શાસકો રાજ્ય કરતા હતા ?",
            "a": [
                {
                    "option": "ચાવડા",
                    "correct": true
                },
                {
                    "option": "વાઘેલા",
                    "correct": false
                },
                {
                    "option": "સોલંકી",
                    "correct": false
                },
                {
                    "option": "પ્રતિહાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચાવડા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "વનરાજ ચાવડાએ કઈ નદી ઉપર નવું નગર વસાવ્યું ?",
            "a": [
                {
                    "option": "ખારી",
                    "correct": false
                },
                {
                    "option": "સરસ્વતી",
                    "correct": true
                },
                {
                    "option": "રૂપેણ",
                    "correct": false
                },
                {
                    "option": "બનાસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સરસ્વતી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ચાવડા વંશ પછી ગુજરાતની રાજસત્તા કયા વંશના શાસકોએ સંભાળી ?",
            "a": [
                {
                    "option": "વાઘેલા",
                    "correct": false
                },
                {
                    "option": "સોલંકી",
                    "correct": true
                },
                {
                    "option": "રાઠોડ",
                    "correct": false
                },
                {
                    "option": "ચૌહાણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સોલંકી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ક્યા રાજાના સમયમાં કલિકાલસર્વજ્ઞ હેમચંન્દ્રાચાર્ય થઈ ગયા ?",
            "a": [
                {
                    "option": "કુમારપાળ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહ",
                    "correct": true
                },
                {
                    "option": "ભીમદેવ સોલંકી",
                    "correct": false
                },
                {
                    "option": "મૂળરાજ સોલંકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિદ્ધરાજ જયસિંહ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ક્યા રાજાના સમયમાં અણહિલવાડ પાટણ વિદ્યાનું ધામ બન્યું હતું ?",
            "a": [
                {
                    "option": "સિદ્ધરાજ જયસિંહના",
                    "correct": true
                },
                {
                    "option": "કુમારપાળના",
                    "correct": false
                },
                {
                    "option": "અજયપાળના",
                    "correct": false
                },
                {
                    "option": "મૂળરાજ સોલંકીના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિદ્ધરાજ જયસિંહના</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ક્યા રાજાના શાસનમાં ગુજરાતની સમૃદ્ધિ ટોચ પર હતી ?",
            "a": [
                {
                    "option": "અજયપાળના",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહના",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ સોલંકીના",
                    "correct": false
                },
                {
                    "option": "કુમારપાળના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કુમારપાળના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગુજરાતમાં રાણીની વાવ ક્યાં આવેલી છે ?",
            "a": [
                {
                    "option": "વડનગરમાં",
                    "correct": false
                },
                {
                    "option": "પાટણમાં",
                    "correct": true
                },
                {
                    "option": "જૂનાગઢમાં",
                    "correct": false
                },
                {
                    "option": "વડોદરામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાટણમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "રાણીની વાવનું બાંધકામ કોણે કરાવ્યું હતું ?",
            "a": [
                {
                    "option": "રાણી ભાનુમતીએ",
                    "correct": false
                },
                {
                    "option": "રાજમાતા મીનળદેવીએ",
                    "correct": false
                },
                {
                    "option": "રાણી ઉદયમતીએ",
                    "correct": true
                },
                {
                    "option": "રાણી નાયિકાદેવીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાણી ઉદયમતીએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "રાણીની વાવ કેટલા માળની છે ?",
            "a": [
                {
                    "option": "સાત",
                    "correct": true
                },
                {
                    "option": "નવ",
                    "correct": false
                },
                {
                    "option": "છ",
                    "correct": false
                },
                {
                    "option": "પાંચ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સાત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "કોના કહેવાથી ધોળકામાં મલાવ તળાવ અને વિરમગામમાં મુનસર તળાવ બાંધવામાં આવ્યાં હતાં ?",
            "a": [
                {
                    "option": "રાણી ઉદયમતીના",
                    "correct": false
                },
                {
                    "option": "રાજમાતા મીનળદેવીના",
                    "correct": true
                },
                {
                    "option": "રાણી રૂપમતીના",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજમાતા મીનળદેવીના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગુજરાતમાં સહસ્ત્રલિંગ તળાવ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "પાટણમાં",
                    "correct": true
                },
                {
                    "option": "જૂનાગઢમાં",
                    "correct": false
                },
                {
                    "option": "અમદાવાદમાં",
                    "correct": false
                },
                {
                    "option": "વડનગરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાટણમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ઈ.સ. 1178માં શાહબુદ્દીન ઘોરીને કોણે હરાવ્યો હતો ?",
            "a": [
                {
                    "option": "ભીમદેવ સોલંકીએ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહે",
                    "correct": false
                },
                {
                    "option": "રાણી ઉદયમતીએ",
                    "correct": false
                },
                {
                    "option": "રાણી નાઈકીદેવીએ ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાણી નાઈકીદેવીએ </p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "અમદાવાદ શહેર કોણે વસાવ્યું હતું ?",
            "a": [
                {
                    "option": "મહંદ બેગડાએ",
                    "correct": false
                },
                {
                    "option": "શહેનશાહ શાહઆલમે",
                    "correct": false
                },
                {
                    "option": "સુલતાન કુત્બુદ્દીને",
                    "correct": false
                },
                {
                    "option": "સુલતાન અહમદશાહે ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુલતાન અહમદશાહે </p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "હેમચંદ્રાચાર્યે રચેલા વ્યાકરણ ગ્રંથનું નામ શું હતું ?",
            "a": [
                {
                    "option": "ગુજરાત કોશ",
                    "correct": false
                },
                {
                    "option": "ભગવતગોમંડળ",
                    "correct": false
                },
                {
                    "option": "જોડણીકોશ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધહેમ શબ્દાનુશાસન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિદ્ધહેમ શબ્દાનુશાસન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "સોલંકીયુગમાં સોમનાથ પાટણ ક્યા ધર્મનું પ્રખ્યાત ધામ ગણાતું હતું ?",
            "a": [
                {
                    "option": "શૈવ",
                    "correct": true
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "વૈષ્ણવ",
                    "correct": false
                },
                {
                    "option": "સ્વામીનારાયણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શૈવ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "સોલંકીયુગમાં ગુજરાતમાં વૈષ્ણવ ધર્મનું સુપ્રસિદ્ધધામ કયું હતું ?",
            "a": [
                {
                    "option": "અંબાજી",
                    "correct": false
                },
                {
                    "option": "સોમનાથ",
                    "correct": false
                },
                {
                    "option": "પાટણ",
                    "correct": false
                },
                {
                    "option": "દ્વારકા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દ્વારકા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ગુજરાતમાં સૂર્યમંદિર ક્યા સ્થળે આવેલું છે ?",
            "a": [
                {
                    "option": "પાટણ",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢ",
                    "correct": false
                },
                {
                    "option": "વડનગર",
                    "correct": false
                },
                {
                    "option": "મોઢેરા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મોઢેરા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગુજરાતમાં સુપ્રસિદ્ધ કીર્તિતોરણ ક્યા સ્થળે આવેલું છે ?",
            "a": [
                {
                    "option": "પાલિતાણા",
                    "correct": false
                },
                {
                    "option": "વડનગર",
                    "correct": true
                },
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "મહેસાણા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વડનગર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "વનરાજના પિતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "અજયપાળ",
                    "correct": false
                },
                {
                    "option": "જયદેવ",
                    "correct": false
                },
                {
                    "option": "જયશિખરી",
                    "correct": true
                },
                {
                    "option": "જયસિંહ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જયશિખરી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "અણહિલવાડ પાટણના પશ્ચિમે આવેલા હાલના કયા ગામનું અપભ્રંશ થયેલું નામ છે ? ",
            "a": [
                {
                    "option": "અનાનાશ",
                    "correct": false
                },
                {
                    "option": "અનાવાડ",
                    "correct": true
                },
                {
                    "option": "અણહિલ",
                    "correct": false
                },
                {
                    "option": "અનાથાલય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અનાવાડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "નવા વસાવેલા નગરનું નામ 'અણહિલવાડ પાટણ' વનરાજે શાના ઉપરથી રાખ્યું હતું ?",
            "a": [
                {
                    "option": "પોતાના મિત્ર અણહિલના નામ પરથી",
                    "correct": true
                },
                {
                    "option": "પોતાના ભાઈ અણહિલના નામ પરથી",
                    "correct": false
                },
                {
                    "option": "પોતાના ભાણેજ અણહિલના નામ પરથી",
                    "correct": false
                },
                {
                    "option": "પોતાના ગામ અણહિલના નામ પરથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોતાના મિત્ર અણહિલના નામ પરથી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ચાવડા વંશના શાસકોએ આશરે કેટલા વર્ષ સુધી ગુજરાત પર રાજસત્તા સંભાળી ?",
            "a": [
                {
                    "option": "199",
                    "correct": false
                },
                {
                    "option": "196",
                    "correct": true
                },
                {
                    "option": "169",
                    "correct": false
                },
                {
                    "option": "191",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 196</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "નીચેનામાંથી કયો રાજા સોલંકી વંશનો રાજા ન હતો ?",
            "a": [
                {
                    "option": "મૂળરાજ",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહ",
                    "correct": false
                },
                {
                    "option": "કરણઘેલો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કરણઘેલો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "સોલંકી વંશના કેટલા શાસકો રાજ્ય-સિંહાસન છોડી, મુગટધારીમાંથી કંથાધારી બન્યા હતા ?",
            "a": [
                {
                    "option": "સાત",
                    "correct": false
                },
                {
                    "option": "છ",
                    "correct": true
                },
                {
                    "option": "આઠ",
                    "correct": false
                },
                {
                    "option": "નવ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: છ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "કોણે રાજયમાંથી યાત્રાવેરો બંધ કરાવ્યો હતો ? ",
            "a": [
                {
                    "option": "મીનળદેવીએ",
                    "correct": true
                },
                {
                    "option": "ઉદયમતીએ",
                    "correct": false
                },
                {
                    "option": "નયિકાદેવીએ",
                    "correct": false
                },
                {
                    "option": "મીનાદેવીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીનળદેવીએ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "કરણદેવ વાઘેલા કોની સેના સામે હારી ગયો ?",
            "a": [
                {
                    "option": "અલાઉદ્દીન બલ્બનની",
                    "correct": false
                },
                {
                    "option": "અલાઉદ્દીન ખીલજીની",
                    "correct": true
                },
                {
                    "option": "જલાલુદ્દીન ખીલજીની",
                    "correct": false
                },
                {
                    "option": "શાહબુદ્દીન ઘોરીની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અલાઉદ્દીન ખીલજીની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગુજરાતના છેલ્લા રાજપૂત રાજા કોણ હતા ?",
            "a": [
                {
                    "option": "મૂળરાજ",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ",
                    "correct": false
                },
                {
                    "option": "વનરાજ ચાવડા",
                    "correct": false
                },
                {
                    "option": "કરણદેવ વાઘેલો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કરણદેવ વાઘેલો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "સોલંકી વંશ પછી કયા વંશનું શાસન ગુજરાતમાં આવ્યું ?",
            "a": [
                {
                    "option": "ચાવડા",
                    "correct": false
                },
                {
                    "option": "ગુહિલોત",
                    "correct": false
                },
                {
                    "option": "વાઘેલા",
                    "correct": true
                },
                {
                    "option": "જાદવ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાઘેલા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "સોલંકીઓના રાજ્યતંત્રમાં કોનું સ્થાન સર્વોપરી હતું ?",
            "a": [
                {
                    "option": "લોકોનું",
                    "correct": false
                },
                {
                    "option": "રાજાનું",
                    "correct": true
                },
                {
                    "option": "નેતાનું",
                    "correct": false
                },
                {
                    "option": "ભાઈનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજાનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "સોલંકીઓનાં રાજ્યતંત્રમાં મુખ્ય અમાત્યને શું કહેવામાં આવતું ?",
            "a": [
                {
                    "option": "મહાત્મા",
                    "correct": false
                },
                {
                    "option": "મહામાત્ય",
                    "correct": true
                },
                {
                    "option": "મહારાજા",
                    "correct": false
                },
                {
                    "option": "મહાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહામાત્ય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "સોલંકીઓના રાજ્યતંત્રમાં નાણાખાતાને કયા નામે ઓળખવામાં આવતું ?",
            "a": [
                {
                    "option": "શ્રીકૃષ્ણ",
                    "correct": false
                },
                {
                    "option": "શ્રીકરણ",
                    "correct": true
                },
                {
                    "option": "શ્રીનમન",
                    "correct": false
                },
                {
                    "option": "શ્રીકર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્રીકરણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "સોલંકીઓના રાજ્યતંત્રમાં વહીવટી વિભાગોમાં સૌથી મોટો ભાગ શું કહેવાતો ?",
            "a": [
                {
                    "option": "મંડલ",
                    "correct": true
                },
                {
                    "option": "પંથક",
                    "correct": false
                },
                {
                    "option": "ગામ",
                    "correct": false
                },
                {
                    "option": "મંડપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મંડલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "સોલંકીઓના રાજ્યતંત્રમાં વહીવટી વિભાગોમાં મંડલનો પેટા વિભાગ કયા નામે ઓળખાતો હતો ?",
            "a": [
                {
                    "option": "ગામ",
                    "correct": false
                },
                {
                    "option": "પંથક",
                    "correct": true
                },
                {
                    "option": "મંડપ",
                    "correct": false
                },
                {
                    "option": "પથિક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંથક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "સોલંકી શાસન વખતે ગુજરાતમાં કયા ધર્મના અનુયાયી વધારે હતા ?",
            "a": [
                {
                    "option": "વૈષ્ણવ",
                    "correct": false
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "શૈવ",
                    "correct": true
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શૈવ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "આબુમાં કયું મંદિર પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "સૂર્યમંદિર",
                    "correct": false
                },
                {
                    "option": "સોમનાથ",
                    "correct": false
                },
                {
                    "option": "વિમલવસહિ",
                    "correct": true
                },
                {
                    "option": "વિમવસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિમલવસહિ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "સલ્તનત કાળમાં જ્યારે સત્તાનું કેન્દ્ર અમદાવાદ બન્યું ત્યારે કઈ ભાષામાં કેટલાક પુસ્તકો લખાયા ?",
            "a": [
                {
                    "option": "ગુજરાતી",
                    "correct": false
                },
                {
                    "option": "ફારસી",
                    "correct": true
                },
                {
                    "option": "ઉર્દૂ",
                    "correct": false
                },
                {
                    "option": "પાલિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફારસી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
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
        },
	{ // Question 1
            "q": "આપણા દેશમાં ક્યા પ્રકારની શાસન પદ્ધતિ છે ?",
            "a": [
                {
                    "option": "સમાજવાદી",
                    "correct": false
                },
                {
                    "option": "સરમુખત્યારશાહી",
                    "correct": false
                },
                {
                    "option": "લોકશાહી",
                    "correct": true
                },
                {
                    "option": "પ્રમુખશાહી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકશાહી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ન્યાયતંત્રને ઝડપી અને બિનખર્ચાળ બનાવવા માટે કોણ કામ કરે છે ?",
            "a": [
                {
                    "option": "લોકઅદાલતો",
                    "correct": true
                },
                {
                    "option": "ન્યાયસમિતિઓ",
                    "correct": false
                },
                {
                    "option": "ન્યાયાધીશો",
                    "correct": false
                },
                {
                    "option": "ન્યાયપંચાયતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકઅદાલતો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "બધી અદાલતોમાં સૌથી નાની અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "ગ્રામ્ય અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": true
                },
                {
                    "option": "લોકઅદાલત",
                    "correct": false
                },
                {
                    "option": "મંડળ અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા અદાલત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ગુજરાત રાજ્યની વડી અદાલતની સ્થાપના ક્યારે થઈ ?",
            "a": [
                {
                    "option": "ઈ.સ.1960માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1951માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1965માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1955માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1960માં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગુજરાત રાજ્યની વડી અદાલત ક્યા શહેરમાં આવેલી છે ?",
            "a": [
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "મકાન, જમીન કે અન્ય સંપત્તિ અંગેનો વિવાદ કેવો વિવાદ કહેવાય ?",
            "a": [
                {
                    "option": "સ્થાનિક",
                    "correct": false
                },
                {
                    "option": "મહેસૂલી",
                    "correct": false
                },
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દીવાની</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ચોરી, લૂંટફાટ, મારામારી, ખૂન, શારીરિક ઈજા કે ઝઘડાનો વિવાદ કેવો વિવાદ કહેવાય ?",
            "a": [
                {
                    "option": "અદાલતી",
                    "correct": false
                },
                {
                    "option": "મૂળભૂત",
                    "correct": false
                },
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફોજદારી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ન્યાયની દેવીનું નામ શું છે ?",
            "a": [
                {
                    "option": "આમટિન",
                    "correct": false
                },
                {
                    "option": "આસ્ટીન",
                    "correct": true
                },
                {
                    "option": "આર્મી",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આસ્ટીન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ન્યાયની દેવીને ક્યાં પાટો બાંધેલો છે ?",
            "a": [
                {
                    "option": "પગે",
                    "correct": false
                },
                {
                    "option": "આંખે",
                    "correct": true
                },
                {
                    "option": "મોઢે",
                    "correct": false
                },
                {
                    "option": "હાથે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આંખે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ન્યાયની દેવીના બંન્ને હાથમાં શું છે ?",
            "a": [
                {
                    "option": "તીર-ફૂલ",
                    "correct": false
                },
                {
                    "option": "ભાલુ-તલવાર",
                    "correct": false
                },
                {
                    "option": "તલવાર-ત્રાજવું",
                    "correct": true
                },
                {
                    "option": "ઢાલ-તલવાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તલવાર-ત્રાજવું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "તાલુકા અદાલતને બીજી કઈ અદાલત પણ કહે છે ?",
            "a": [
                {
                    "option": "જીલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "ટ્રાયલ કોર્ટ",
                    "correct": true
                },
                {
                    "option": "ટ્રાય",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ટ્રાયલ કોર્ટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પોલીસને ગુનાની પ્રથમ જાણ થાય ત્યારે તે પોલીસ-સ્ટેશનમાં શું નોંધે છે ?",
            "a": [
                {
                    "option": "FIR",
                    "correct": true
                },
                {
                    "option": "RIF",
                    "correct": false
                },
                {
                    "option": "DIG",
                    "correct": false
                },
                {
                    "option": "GEN",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  FIR</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ઘરમાં ચોરી થઈ હોય તો સૌપ્રથમ કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "તાલુકા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા ફોજદારી અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા ફોજદારી અદાલતમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "કોઈએ ઘર પચાવી પાડ્યું હોય તો સૌપ્રથમ કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "જિલ્લા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "તાલુકા દીવાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "જિલ્લા ફોજદારી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા દીવાની અદાલતમાં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "તાલુકા અદાલતમાં ન્યાય ના મળ્યો હોય તો કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                },
                {
                    "option": "ન્યાયપંચાયતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "એકેયેમાં નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા અદાલતમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 16
            "q": "તાલુકા અદાલતની ઉપર કઈ અદાલત કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": true
                },
                {
                    "option": "ગ્રામ અદાલત",
                    "correct": false
                },
                {
                    "option": "લોકઅદાલત",
                    "correct": false
                },
                {
                    "option": "મુખી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા અદાલત</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "આપણા દેશમાં ન્યાયતંત્રની વ્યવસ્થા કેવી છે ?",
            "a": [
                {
                    "option": "તૂટક",
                    "correct": false
                },
                {
                    "option": "સળંગ",
                    "correct": true
                },
                {
                    "option": "વાંકી",
                    "correct": false
                },
                {
                    "option": "આડી અવળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સળંગ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 18
            "q": "આપણા દેશનું ન્યાયતંત્ર કેવું છે ?",
            "a": [
                {
                    "option": "સ્વતંત્ર અને નિષ્પક્ષ",
                    "correct": true
                },
                {
                    "option": "બંધક અને એકપક્ષીય",
                    "correct": false
                },
                {
                    "option": "સ્વતંત્ર અને એકપક્ષીય",
                    "correct": false
                },
                {
                    "option": "બંધક અને નિષ્પક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વતંત્ર અને નિષ્પક્ષ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 19
            "q": "દેશના કાયદાનું પાલન ન કરનાર શું છે ?",
            "a": [
                {
                    "option": "સારો માણસ",
                    "correct": false
                },
                {
                    "option": "સુપુત્ર",
                    "correct": false
                },
                {
                    "option": "આદર્શ માણસ",
                    "correct": false
                },
                {
                    "option": "ગુનેગાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનેગાર</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 20
            "q": "ગુનો કરનાર વ્યક્તિ બીજાનું શું છીનવે છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": true
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "કામ",
                    "correct": false
                },
                {
                    "option": "કર્તવ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હક</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 21
            "q": "કઈ અદાલતના વડા જિલ્લાની બધી અદાલતોના વડા છે ?",
            "a": [
                {
                    "option": "તાલુકા",
                    "correct": false
                },
                {
                    "option": "જિલ્લા",
                    "correct": true
                },
                {
                    "option": "ગ્રામ",
                    "correct": false
                },
                {
                    "option": "મંડળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "રાજ્યની સૌથી મોટી અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "દેશની સૌથી મોટી અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": true
                },
                {
                    "option": "વડી અદાલત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સર્વોચ્ચ અદાલત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 24
            "q": "કઈ અદાલતને નજીરી અદાલત કહે છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "રાજ્યની વડી અદાલતના ન્યાયાધીશને પ્રતિજ્ઞા કોણ લેવડાવે છે ?",
            "a": [
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": true
                },
                {
                    "option": "લોકપાલ",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "રાજયની વડી અદાલતને અંગ્રેજીમાં શું કહે છે ?",
            "a": [
                {
                    "option": "સુપ્રિમ કોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાઇકોર્ટ",
                    "correct": true
                },
                {
                    "option": "હાઇટકોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાયરકોર્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇકોર્ટ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "અદાલતમાં દાવો કરનારને શું કહેવાય ?",
            "a": [
                {
                    "option": "ફરિયાદી",
                    "correct": true
                },
                {
                    "option": "વકીલ",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફરિયાદી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગુનો કરનારને પોલીસ પકડીને લઈ જાય તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "ધરપકડ",
                    "correct": true
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધરપકડ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "તહોમતદારને-ગુનેગારને પકડી લાવવા માટે ન્યાયાધીશ હુકમ કરે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "ધરપકડ",
                    "correct": false
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": true
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અટકાયત",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૉરન્ટ/p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 30
            "q": "બાર કાઉન્સિલ તરફથી વકીલાત કરવા માટેની સનદ ધરાવતો કાયદાનો નિષ્ણાત કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "જજ",
                    "correct": false
                },
                {
                    "option": "ફરિયાદી",
                    "correct": false
                },
                {
                    "option": "વકીલ",
                    "correct": true
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વકીલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "નીચલી અદાલતના ચુકાદાનો ન્યાય મેળવવા માટે ઉપલી અદાલતમાં દાખલ કરવાની અરજીને શું કહે છે ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": false
                },
                {
                    "option": "ફરિયાદ",
                    "correct": false
                },
                {
                    "option": "દાવો",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અપીલ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "પોતાના કેસ માટે વકીલ રોકનાર વ્યક્તિને શું કહે છે ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": true
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "એફ.આર.આઈ",
                    "correct": false
                },
                {
                    "option": "જુબાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અસીલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 33
            "q": "ન્યાયાધીશની રૂબરૂ કોઈનો જવાબ લેવામાં કે નોંધવામાં આવે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "જવાની",
                    "correct": false
                },
                {
                    "option": "જુબાની",
                    "correct": true
                },
                {
                    "option": "અટકાયત",
                    "correct": false
                },
                {
                    "option": "ભવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જુબાની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 34
            "q": "ગુનાહિત કૃત્ય કરનારને પોલીસ દ્વારા પકડવામાં આવે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": false
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અટકાયત",
                    "correct": true
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અટકાયત</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 35
            "q": "'ફળિયામાં ઝઘડો થયો. માજીને વાગ્યું.' આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 36
            "q": "'ફળિયામાં ઝઘડો થયો. માજીને વાગ્યું.' આ કેસની કાર્યવાહી કઈ અદાલતમાં ચાલશે ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની અદાલતમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "'રમેશભાઈ ઉપર હુમલો થયો.' આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 38
            "q": "'વાહનને અકસ્માત થયો.' આ કેસની કાર્યવાહી કઈ અદાલતમાં ચાલશે ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની અદાલતમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 39
            "q": "જિલ્લા અદાલતના ચુકાદાથી સંતોષ ન થાય તો કઈ અદાલતમાં કાર્યવાહી કરી શકીએ ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલતમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 40
            "q": "'જમીનદારે હંસાબેનની જમીન પચાવી પાડી. તેના બદલામાં કોઈ નાણા આપ્યા ન હતા.'  આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 41
            "q": "તાલુકા અદાલતમાં કયા દાવાઓ સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાની</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "જિલ્લા અદાલતમાં કયા દાવાઓ સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી-દીવાની બન્ને</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 43
            "q": "વડી અદાલતમાં કયા દાવા સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી-દીવાની બન્ને</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "અદાલતમાં ન્યાયની દેવીના હાથમાં ત્રાજવું શાનું પ્રતિક છે ?",
            "a": [
                {
                    "option": "સમતોલ ન્યાય આપવાનું",
                    "correct": true
                },
                {
                    "option": "અસમતોલ ન્યાય આપવાનું",
                    "correct": false
                },
                {
                    "option": "અસંતોષ ન્યાય આપવાનું",
                    "correct": false
                },
                {
                    "option": "સંતોષ ન્યાય આપવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમતોલ ન્યાય આપવાનું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "અદાલતમાં ન્યાયની દેવીના હાથમાં તલવાર શાનું પ્રતિક છે ?",
            "a": [
                {
                    "option": "ગુનો સાબિત થાય તો સજા કરવાનું",
                    "correct": true
                },
                {
                    "option": "ગુનો સાબિત થાય તો છોડી મુકવાનું",
                    "correct": false
                },
                {
                    "option": "ગુનો સાબિત ન થાય તો સજા કરવાનું",
                    "correct": false
                },
                {
                    "option": "સમતોલ સજા આપવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનો સાબિત થાય તો સજા કરવાનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 45
            "q": "ન્યાયની દેવીની આંખે પાટા શું સૂચવે છે ?",
            "a": [
                {
                    "option": "પક્ષપાત રાખ્યા વિના સૌ માટે સમાન ન્યાય તોલવાનું",
                    "correct": true
                },
                {
                    "option": "પક્ષપાત રાખી સૌ માટે સમાન ન્યાય તોલવાનું",
                    "correct": false
                },
                {
                    "option": "પક્ષપાત રાખ્યા વિના સૌ માટે અસમાન ન્યાય તોલવાનું",
                    "correct": false
                },
                {
                    "option": "ભેદભાવ રાખી સૌ માટે અસમાન ન્યાય તોલવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પક્ષપાત રાખ્યા વિના સૌ માટે સમાન ન્યાય તોલવાનું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 46
            "q": "અદાલતોનું ભારણ ઘટાડવા માટે કઈ અદાલતો કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "લોક અદાલતો",
                    "correct": true
                },
                {
                    "option": "ન્યાય સમિતિની અદાલતો",
                    "correct": false
                },
                {
                    "option": "ગ્રામ અદાલતો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય અદાલતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોક અદાલતો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 47
            "q": "લોક-અદાલતો બન્ને પક્ષો વચ્ચે શું કરાવે છે ?",
            "a": [
                {
                    "option": "સમાધાન",
                    "correct": true
                },
                {
                    "option": "ઝઘડા",
                    "correct": false
                },
                {
                    "option": "વેરઝેર",
                    "correct": false
                },
                {
                    "option": "લૂંટફાટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમાધાન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "પાણીપતના મેદાનમાં બાબરે કોને હરાવ્યો ?",
            "a": [
                {
                    "option": "ઇબ્રાહીમ લોદીને",
                    "correct": true
                },
                {
                    "option": "શેરશાહ સૂરીને",
                    "correct": false
                },
                {
                    "option": "શાહજહાંને",
                    "correct": false
                },
                {
                    "option": "હુમાયુને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇબ્રાહીમ લોદીને </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ભારતમાં મુઘલ વંશની સ્થાપના કોણે કરી ?",
            "a": [
                {
                    "option": "અકબરે",
                    "correct": false
                },
                {
                    "option": "હુમાયુએ",
                    "correct": false
                },
                {
                    "option": "બાબરે",
                    "correct": true
                },
                {
                    "option": "બયરામખાને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બાબરે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ચિતોડના વીર યોદ્ધા રાણા સાંગાને બાબરે કયા મેદાનમાં હરાવ્યા ?",
            "a": [
                {
                    "option": "પાણીપતના",
                    "correct": false
                },
                {
                    "option": "પ્લાસીના",
                    "correct": false
                },
                {
                    "option": "હલદીઘાટીના",
                    "correct": false
                },
                {
                    "option": "કાનવાના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાનવાના</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "બાબરના પુત્રનું નામ શું હતું ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": true
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "શેરશાહ સૂરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હુમાયુ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "કોનો જન્મ અમરકોટના રાણાને ત્યાં થયો હતો ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": true
                },
                {
                    "option": "શેરશાહ સૂરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અકબર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "આમાંથી કોને મુઘલ શાસક ગણી શકાય નહિ ?",
            "a": [
                {
                    "option": "હુમાયુ",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "શેરશાહ સૂર",
                    "correct": true
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શેરશાહ સૂર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "શેરશાહે હુમાયુને કેટલી વાર હરાવ્યો હતો ?",
            "a": [
                {
                    "option": "ત્રણ",
                    "correct": false
                },
                {
                    "option": "ચાર",
                    "correct": false
                },
                {
                    "option": "બે",
                    "correct": true
                },
                {
                    "option": "એક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "બૈરામખાનની દોરવણી નીચે અકબરે કોને હરાવ્યો હતો ?",
            "a": [
                {
                    "option": "શેરશાહને",
                    "correct": false
                },
                {
                    "option": "બહાદુરશાહને",
                    "correct": false
                },
                {
                    "option": "ઇબ્રાહીમ લોદીને",
                    "correct": false
                },
                {
                    "option": "હેમુને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હેમુને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "અકબરના અવસાન પછી સલીમ કયું નામ ધારણ કરી દિલ્લીની ગાદીએ બેઠો ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": true
                },
                {
                    "option": "હુમાયુ",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જહાંગીર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "મેવાડના કયા રજપૂતોએ લાંબા સમય સુધી અકબર સામે યુદ્ધો કર્યા ?",
            "a": [
                {
                    "option": "વાઘેલા ",
                    "correct": false
                },
                {
                    "option": "કંથારિયા",
                    "correct": false
                },
                {
                    "option": "સિસોદિયા",
                    "correct": true
                },
                {
                    "option": "સોલંકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિસોદિયા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "હુમાયુને કેટલા વર્ષ સુધી રઝળપાટ કરવી પડી ?",
            "a": [
                {
                    "option": "15 વર્ષ ",
                    "correct": true
                },
                {
                    "option": "13 વર્ષ",
                    "correct": false
                },
                {
                    "option": "14 વર્ષ ",
                    "correct": false
                },
                {
                    "option": "12 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  15 વર્ષ </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "અકબરના રાજ્યમાં પરગણાની મહેસૂલ કોણ ઉઘરાવતું હતું ?",
            "a": [
                {
                    "option": "સૂબેદાર",
                    "correct": false
                },
                {
                    "option": "મુકાદ્દમ",
                    "correct": false
                },
                {
                    "option": "ચૌધરી",
                    "correct": false
                },
                {
                    "option": "આમીલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આમીલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "અકબરે ક્યો વેરો નાબૂદ કર્યો ?",
            "a": [
                {
                    "option": "નાકાવેરો",
                    "correct": false
                },
                {
                    "option": "જજિયાવેરો",
                    "correct": true
                },
                {
                    "option": "મંડલવેરો",
                    "correct": false
                },
                {
                    "option": "ખિરાજવેરો ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જજિયાવેરો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "આમાંથી કઈ આત્મકથા અબુલ ફઝલે લખી હતી ?",
            "a": [
                {
                    "option": "હુમાયુનામા",
                    "correct": false
                },
                {
                    "option": "બાબરનામા",
                    "correct": false
                },
                {
                    "option": "અકબરનામા",
                    "correct": true
                },
                {
                    "option": "જહાંગીરનામા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અકબરનામા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "રાણા પ્રતાપ અને અકબરના લશ્કર વચ્ચે કયા મેદાનમાં યુદ્ધ થયું હતું ?",
            "a": [
                {
                    "option": "ખેબરઘાટના",
                    "correct": false
                },
                {
                    "option": "હલદીઘાટીના",
                    "correct": true
                },
                {
                    "option": "બોલનઘાટના",
                    "correct": false
                },
                {
                    "option": "પાણીપતના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હલદીઘાટીના</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "આમાંથી કયા શાસકે ટંકશાળો સ્થાપીને ચાંદીના સિક્કા પડાવ્યા હતા ?",
            "a": [
                {
                    "option": "હુમાયુએ",
                    "correct": false
                },
                {
                    "option": "અકબરે",
                    "correct": false
                },
                {
                    "option": "શેરશાહે",
                    "correct": true
                },
                {
                    "option": "બાબરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શેરશાહે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "અકબરે કયા સ્થળે ઇબાદતખાનું ખોલાવ્યું હતું ?",
            "a": [
                {
                    "option": "આગરામાં",
                    "correct": false
                },
                {
                    "option": "ફતેપુર સિક્રીમાં",
                    "correct": true
                },
                {
                    "option": "બિજાપુરમાં",
                    "correct": false
                },
                {
                    "option": "દિલ્લીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફતેપુર સિક્રીમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "આમાંથી કોનો સમાવેશ અકબરના દરબારના નવરત્નોમાં થતો નહોતો ? ",
            "a": [
                {
                    "option": "બીરબલ",
                    "correct": false
                },
                {
                    "option": "તાનસેન",
                    "correct": false
                },
                {
                    "option": "હેમચંદ્રાચાર્ય",
                    "correct": true
                },
                {
                    "option": "મૂલ્લાં દોપ્યા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હેમચંદ્રાચાર્ય</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "મહારાણા પ્રતાપના ઘોડાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "કેતક",
                    "correct": false
                },
                {
                    "option": "ચેતક",
                    "correct": true
                },
                {
                    "option": "ચેતન",
                    "correct": false
                },
                {
                    "option": "કેતન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચેતક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "શેરશાહ ઈતિહાસમાં શાના તરીકે પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "સંત",
                    "correct": false
                },
                {
                    "option": "મહાત્મા",
                    "correct": false
                },
                {
                    "option": "સમાજસેવક",
                    "correct": false
                },
                {
                    "option": "સુધારક શાસક",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુધારક શાસક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "સ્વતંત્રતા દિન અને ગણતંત્ર દિન નિમિત્તે ભારતમાં સૌ પ્રથમ તિરંગો ક્યાં લહેરાવવામાં આવે છે ?",
            "a": [
                {
                    "option": "દિલ્લીમાં લાલ કિલ્લા ઉપર ",
                    "correct": true
                },
                {
                    "option": "દિલ્લીમાં લીલા કિલ્લા ઉપર",
                    "correct": false
                },
                {
                    "option": "દિલ્લીમાં લાલ મહેલ ઉપર",
                    "correct": false
                },
                {
                    "option": "દિલ્લીમાં લીલા મહેલ ઉપર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિલ્લીમાં લાલ કિલ્લા ઉપર</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "બાબરે કઈ સાલમાં દિલ્લી ઉપર આક્રમણ કર્યું ?",
            "a": [
                {
                    "option": "ઈ.સ. 1530માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1526માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1562માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1535માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1526માં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ઇબ્રાહીમ લોદી હારી જતા કયા યુગનો અંત થયો ?",
            "a": [
                {
                    "option": "મુઘલ",
                    "correct": false
                },
                {
                    "option": "રાજપૂત",
                    "correct": false
                },
                {
                    "option": "સલ્તનત",
                    "correct": true
                },
                {
                    "option": "મરાઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સલ્તનત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ઇબ્રાહીમ લોદી હારી જતા કયા યુગની શરૂઆત થઈ ?",
            "a": [
                {
                    "option": "મુઘલ",
                    "correct": true
                },
                {
                    "option": "રાજપૂત",
                    "correct": false
                },
                {
                    "option": "સલ્તનત",
                    "correct": false
                },
                {
                    "option": "મરાઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુઘલ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "બાબરના મૃત્યુ પછી કોણ દિલ્લીની ગાદી ઉપર આવ્યું ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": true
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "શેરશાહ સૂરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હુમાયુ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "હુમાયુના ભાઈનું નામ શું હતું ?",
            "a": [
                {
                    "option": "કાદરખાન",
                    "correct": false
                },
                {
                    "option": "કામરાન",
                    "correct": true
                },
                {
                    "option": "કસાબ",
                    "correct": false
                },
                {
                    "option": "કાનરાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કામરાન</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "હુમાયુને કોની સામે સતત સંઘર્ષ કરવો પડ્યો ?",
            "a": [
                {
                    "option": "કામરાન અને અફઘાનો સામે",
                    "correct": true
                },
                {
                    "option": "કાનરાન અને અફઘાનો સામે",
                    "correct": false
                },
                {
                    "option": "કસાબ અને અફઘાનો સામે",
                    "correct": false
                },
                {
                    "option": "કામરાન અને તુર્કો સામે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કામરાન અને અફઘાનો સામે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "શેરશાહ સૂર કોણ હતો ?",
            "a": [
                {
                    "option": "તુર્ક સરદાર",
                    "correct": false
                },
                {
                    "option": "ઇરાની સરદાર",
                    "correct": false
                },
                {
                    "option": "ખાલિસ્તાની સરદાર",
                    "correct": false
                },
                {
                    "option": "અફઘાન સરદાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અફઘાન સરદાર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "હુમાયુ પછી કોણ દિલ્લીની ગાદીએ આવ્યું ?",
            "a": [
                {
                    "option": "અકબર",
                    "correct": true
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                },
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અકબર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "પિતાના અવસાન સમયે અકબરની ઉંમર કેટલા વર્ષની હતી ?",
            "a": [
                {
                    "option": "11 વર્ષની",
                    "correct": false
                },
                {
                    "option": "13 વર્ષની",
                    "correct": true
                },
                {
                    "option": "15 વર્ષની",
                    "correct": false
                },
                {
                    "option": "17 વર્ષની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 13 વર્ષની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "પિતાના અવસાન બાદ અકબરનો ઉછેર કોણે કર્યો ?",
            "a": [
                {
                    "option": "બહાદુરખાને",
                    "correct": false
                },
                {
                    "option": "કામરાને",
                    "correct": false
                },
                {
                    "option": "બૈરામખાને",
                    "correct": true
                },
                {
                    "option": "બૈજંતિમાલાએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૈરામખાને</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "અક્બર સામે કયા રાજપૂતોએ લાંબા સમય સુધી ટક્કર લીધી હતી ?",
            "a": [
                {
                    "option": "ગુહિલોત",
                    "correct": true
                },
                {
                    "option": "ચાલુક્ય",
                    "correct": false
                },
                {
                    "option": "પરમાર",
                    "correct": false
                },
                {
                    "option": "ચૌહાણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુહિલોત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "મુઘલ શાસનમાં રાજ્ય કોને મળતું ?",
            "a": [
                {
                    "option": "પુત્રો વચ્ચે સરખા ભાગે વહેંચાતું",
                    "correct": true
                },
                {
                    "option": "મોટા પુત્રને મળતું",
                    "correct": false
                },
                {
                    "option": "નાના પુત્રને મળતું",
                    "correct": false
                },
                {
                    "option": "વચેટ પુત્રને મળતું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુત્રો વચ્ચે સરખા ભાગે વહેંચાતું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "મુઘલ શાસનમાં શું અમલમાં હતું ?",
            "a": [
                {
                    "option": "લોકશાહી",
                    "correct": false
                },
                {
                    "option": "સુબાગીરી",
                    "correct": true
                },
                {
                    "option": "પ્રજાસત્તક",
                    "correct": false
                },
                {
                    "option": "ગણતંત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુબાગીરી</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "મુઘલ શાસનમાં રાજ્યના કેટલા વિભાગો પાડી શાસન કરવામાં આવતું ?",
            "a": [
                {
                    "option": "12",
                    "correct": false
                },
                {
                    "option": "13",
                    "correct": false
                },
                {
                    "option": "15",
                    "correct": true
                },
                {
                    "option": "18",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 15</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "મુઘલ શાસનમાં રાજ્યના પ્રત્યેક વિભાગ કયા નામે ઓળખાતા હતા ?",
            "a": [
                {
                    "option": "કુબા",
                    "correct": false
                },
                {
                    "option": "બુબા",
                    "correct": false
                },
                {
                    "option": "સરકાર",
                    "correct": false
                },
                {
                    "option": "સુબા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુબા</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "મુઘલ શાસનમાં સુબાના પેટા વિભાગ કયા નામે ઓળખાતા હતા ?",
            "a": [
                {
                    "option": "કુબા",
                    "correct": false
                },
                {
                    "option": "સહકાર",
                    "correct": false
                },
                {
                    "option": "સરકાર",
                    "correct": true
                },
                {
                    "option": "પરગણા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરકાર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "મુઘલ શાસનમાં સરકારના પેટા વિભાગને શું કહેવામાં આવતું હતું ?",
            "a": [
                {
                    "option": "કુબા",
                    "correct": false
                },
                {
                    "option": "સહકાર",
                    "correct": false
                },
                {
                    "option": "પરદેશ",
                    "correct": false
                },
                {
                    "option": "પરગણું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરગણું</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "મુઘલ શાસનમાં પરગણાનો ઉપરી કોણ હતો ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": false
                },
                {
                    "option": "આમીલ",
                    "correct": true
                },
                {
                    "option": "દીવાન",
                    "correct": false
                },
                {
                    "option": "મીરેબહાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આમીલ</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "મુઘલ શાસનમાં સરકારનો ઉપરી કોણ હતો ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": true
                },
                {
                    "option": "આમીલ",
                    "correct": false
                },
                {
                    "option": "દીવાન",
                    "correct": false
                },
                {
                    "option": "મીરેબહાર",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદાર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "મુઘલ શાસનમાં ગામડાઓમાં ગ્રામપંચાયતના પ્રમુખ કયા નામે ઓળખાતા ?",
            "a": [
                {
                    "option": "પટેલ",
                    "correct": false
                },
                {
                    "option": "ચૌધરી",
                    "correct": false
                },
                {
                    "option": "મુકાદમ",
                    "correct": false
                },
                {
                    "option": "આપેલ બધા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલ બધા</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "મુઘલ શાસનમાં બંદરો, જકાત, હોડીઓના નિયંત્રણો તથા તેનું દાણ વસુલ લેનાર કયા નામે ઓળખાતો ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": false
                },
                {
                    "option": "આમીલ",
                    "correct": false
                },
                {
                    "option": "દીવાન",
                    "correct": false
                },
                {
                    "option": "મીરેબહાર",
                    "correct": true
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીરેબહાર</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "અકબર કયા વારે ધર્મ સભા ભરતો હતો ?",
            "a": [
                {
                    "option": "સોમવારે",
                    "correct": false
                },
                {
                    "option": "શનિવારે",
                    "correct": false
                },
                {
                    "option": "શુક્રવારે",
                    "correct": true
                },
                {
                    "option": "ગુરૂવારે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુક્રવારે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "મુઘલ શાસનમાં મહેસૂલી વ્યવસ્થાનો સર્વોચ્ચ અધિકારી કયા નામે ઓળખાતો હતો ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": false
                },
                {
                    "option": "આમીલ",
                    "correct": false
                },
                {
                    "option": "દીવાન",
                    "correct": true
                },
                {
                    "option": "મીરેબહાર",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાન</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "મુઘલ શાસનમાં ન્યાયાધીશ કયા નામે ઓળખાતા હતા ?",
            "a": [
                {
                    "option": "ફોજદાર",
                    "correct": false
                },
                {
                    "option": "કાઝી",
                    "correct": true
                },
                {
                    "option": "દીવાન",
                    "correct": false
                },
                {
                    "option": "મીરેબહાર",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાઝી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "શેરશાહનું શાસન દિલ્લીમાં કેટલા વર્ષ જેટલું હતું ?",
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
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "શેરશાહ સૂરે કોની મદદથી જમીન મહેસૂલનો કોઠો તૈયાર કર્યો હતો‌?",
            "a": [
                {
                    "option": "ટોડરમલ",
                    "correct": true
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "તાનસેન",
                    "correct": false
                },
                {
                    "option": "મુલ્લા દોપ્યાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટોડરમલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "શેરશાહ સૂરે કયો સુધારો કર્યો હતો ?",
            "a": [
                {
                    "option": "જકાતો કાઢી નાખી",
                    "correct": false
                },
                {
                    "option": "મોટા રાહદારી રસ્તા બનાવ્યા",
                    "correct": false
                },
                {
                    "option": "રસ્તા પર રોકાણ માટે આવાસ બનાવ્યા",
                    "correct": false
                },
                {
                    "option": "આપેલા બધા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "મરાણા પ્રતાપ પાસે કેટલા સૈનિકો હતા ?",
            "a": [
                {
                    "option": "વીસથી બાવીસ હજાર",
                    "correct": true
                },
                {
                    "option": "પચ્ચીસથી પચાસ હજાર",
                    "correct": false
                },
                {
                    "option": "પચ્ચીસથી પચાસ લાખ",
                    "correct": false
                },
                {
                    "option": "વીસથી ચાલીસ હજાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વીસથી બાવીસ હજાર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "કયા વેપારીએ મહારાણા પ્રતાપને આર્થિક મદદ કરી ?",
            "a": [
                {
                    "option": "ભોમિયાએ",
                    "correct": false
                },
                {
                    "option": "ભામાશાએ",
                    "correct": true
                },
                {
                    "option": "ભાલણે",
                    "correct": false
                },
                {
                    "option": "રતનજીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભામાશાએ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
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
        },
	{ // Question 1
            "q": "મુઘલ શાસકોમાં સૌથી વધારે પ્રતિભાશાળી શાસક કોણ હતો ?",
            "a": [
                {
                    "option": "બાબર",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": true
                },
                {
                    "option": "શાહજહાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અકબર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ક્યા મુઘલ બાદશાહના સમયમાં વિશેષ પ્રમાણમાં બાંધકામો થયાં ?",
            "a": [
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "શાહજહાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "જહાંગીરે કયા શીખગુરુનો વધ કર્યો હતો ?",
            "a": [
                {
                    "option": "તેગબહાદુરનો",
                    "correct": false
                },
                {
                    "option": "ગોવિંદસિંહનો",
                    "correct": false
                },
                {
                    "option": "અર્જુનસિંહનો",
                    "correct": true
                },
                {
                    "option": "હરગોવિંદસિંહનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અર્જુનસિંહનો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "કયો મુઘલ બાદશાહ અરબી અને ફારસી ભાષાનો નિષ્ણાંત હતો ?",
            "a": [
                {
                    "option": "જહાંગીર",
                    "correct": false
                },
                {
                    "option": "અકબર",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": true
                },
                {
                    "option": "શાહજહાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઔરંગઝેબ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "કયા મુઘલ બાદશાહને સંગીતકલા અને ચિત્રકલા પ્રત્યે અણગમો હતો ?",
            "a": [
                {
                    "option": "અકબરને",
                    "correct": false
                },
                {
                    "option": "શાહજહાંને",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબને",
                    "correct": true
                },
                {
                    "option": "જહાંગીરને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઔરંગઝેબને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "કયા મુઘલ બાદશાહને ચિત્રકલાનો ભારે શોખ હતો ?",
            "a": [
                {
                    "option": "અકબરને",
                    "correct": false
                },
                {
                    "option": "શાહજહાંને",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબને",
                    "correct": false
                },
                {
                    "option": "જહાંગીરને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જહાંગીરને</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કયા બાદશાહનો શાસનકાળ મુઘલ શાસનનો 'સુવર્ણ યુગ' કહેવાય છે ?",
            "a": [
                {
                    "option": "અકબરનો",
                    "correct": false
                },
                {
                    "option": "શાહજહાંનો",
                    "correct": true
                },
                {
                    "option": "જહાંગીરનો",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાંનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "જહાંગીરની પત્નીનું નામ શું હતું ?",
            "a": [
                {
                    "option": "નરગીશ",
                    "correct": false
                },
                {
                    "option": "નૂરજહાં",
                    "correct": true
                },
                {
                    "option": "અનારકલી",
                    "correct": false
                },
                {
                    "option": "નરીમન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નૂરજહાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કોણે ઔરંગઝેબ સામે પચ્ચીસ વર્ષ સુધી સંઘર્ષ કર્યો હતો ?",
            "a": [
                {
                    "option": "મહારાણા પ્રતાપ",
                    "correct": false
                },
                {
                    "option": "વીર દુર્ગાદાસ",
                    "correct": true
                },
                {
                    "option": "શિવાજી",
                    "correct": false
                },
                {
                    "option": "લક્ષ્મીબાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીર દુર્ગાદાસ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "દક્ષિણ ભારતમાં મરાઠા રાજ્યની સ્થાપના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "મહારાણા પ્રતાપ",
                    "correct": false
                },
                {
                    "option": "વીર દુર્ગાદાસ",
                    "correct": false
                },
                {
                    "option": "શિવાજી",
                    "correct": true
                },
                {
                    "option": "લક્ષ્મીબાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શિવાજી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "શિવાજીના માતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "જીજાબાઈ",
                    "correct": true
                },
                {
                    "option": "મહાપ્રજાપતી",
                    "correct": false
                },
                {
                    "option": "માયાવતી",
                    "correct": false
                },
                {
                    "option": "કુંતામાતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જીજાબાઈ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "શિવાજીનો ઉછેર કોની નજર તળે થયો ?",
            "a": [
                {
                    "option": "મનમોહન",
                    "correct": false
                },
                {
                    "option": "કોંસાડ",
                    "correct": false
                },
                {
                    "option": "કુંતામાતા",
                    "correct": false
                },
                {
                    "option": "દાદાજી કોંડદેવ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દાદાજી કોંડદેવ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "શિવાજીનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "શિવનેરીના કિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "તોરણાના કિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "પુરંદરના કિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "બિજાપુરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શિવનેરીના કિલ્લામાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "શિવાજીનો રાજ્યાભિષેક ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "શિવનેરીમાં",
                    "correct": false
                },
                {
                    "option": "તોરણામાં",
                    "correct": false
                },
                {
                    "option": "રાયગઢમાં",
                    "correct": true
                },
                {
                    "option": "પુરંદરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાયગઢમાં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કોના શાસન પછી મુઘલ શાસનનું પતન થયું ?",
            "a": [
                {
                    "option": "શાહજહાંના",
                    "correct": false
                },
                {
                    "option": "અકબરના",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબના",
                    "correct": true
                },
                {
                    "option": "જહાંગીરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:   ઔરંગઝેબના</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "શાહજહાંએ જૂની દિલ્હી પાસે ક્યું નવું શહેર વસાવ્યું ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "શાહજહાંબાદ",
                    "correct": true
                },
                {
                    "option": "જહાંગીરપુર",
                    "correct": false
                },
                {
                    "option": "હૈદરાબાદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાંબાદ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "આગ્રાનો તાજમહાલ કોણે બનાવ્યો હતો ? ",
            "a": [
                {
                    "option": "જહાંગીરે",
                    "correct": false
                },
                {
                    "option": "અકબરે",
                    "correct": false
                },
                {
                    "option": "બાબરે",
                    "correct": false
                },
                {
                    "option": "શાહજહાંએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાંએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "હોકિન્સ અને ટોમસ રો ભારતમાં વેપારનો પરવાનો મેળવવા ક્યા મુઘલ બદશાહના સમયમાં આવ્યા હતા?",
            "a": [
                {
                    "option": "ઔરંગઝેબના",
                    "correct": false
                },
                {
                    "option": "જહાંગીરના",
                    "correct": true
                },
                {
                    "option": "શાહજહાંના",
                    "correct": false
                },
                {
                    "option": "અકબરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જહાંગીરના</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ભારતમાં મુઘલ સમયમાં એક મણના કેટલા રતલ હતા?",
            "a": [
                {
                    "option": "66.6",
                    "correct": false
                },
                {
                    "option": "55.5",
                    "correct": true
                },
                {
                    "option": "55.1",
                    "correct": false
                },
                {
                    "option": "44.4",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  55.5</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "શિવાજીનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ.1630માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1674માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1707માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1526માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1630માં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "અકબર પછી કોણ દિલ્લીની ગાદીએ આવ્યું ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": false
                },
                {
                    "option": "જહાંગીર",
                    "correct": true
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જહાંગીર</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કોના શાસનમાં મુઘલ સામ્રાજ્યના પતનના બીજ રોપાયા ?",
            "a": [
                {
                    "option": "બાબરના",
                    "correct": false
                },
                {
                    "option": "જહાંગીરના",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબના",
                    "correct": true
                },
                {
                    "option": "હુમાયુના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઔરંગઝેબના</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "જહાંગીરનો અર્થ શું થાય ?",
            "a": [
                {
                    "option": "દુનિયાને હારના",
                    "correct": false
                },
                {
                    "option": "ગામને જીતનાર",
                    "correct": false
                },
                {
                    "option": "દુનિયાને જીતનાર",
                    "correct": true
                },
                {
                    "option": "શહેરને જીતનાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દુનિયાને જીતનાર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "જહાંગીરના કયા શાહજાદાએ બંડ પોકાર્યું હતું ?",
            "a": [
                {
                    "option": "કામરાને",
                    "correct": false
                },
                {
                    "option": "ખુશરુએ",
                    "correct": true
                },
                {
                    "option": "શાહજહાંએ",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખુશરુએ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ભારતમાં વેપારનો પરવાનો મેળવવા આવેલા હોકિન્સ અને ટોમસ રો કયા દેશના રાજાના પ્રતિનિધિ હતા ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": true
                },
                {
                    "option": "અમેરિકા",
                    "correct": false
                },
                {
                    "option": "પોર્ટુગલ",
                    "correct": false
                },
                {
                    "option": "ફાંસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇંગ્લૅન્ડ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "રાજ્યની આબાદીનો પાયો ખેતી છે. એવું કયો મુઘલ બાદશાહ માનતો હતો ?",
            "a": [
                {
                    "option": "શાહજહાં",
                    "correct": true
                },
                {
                    "option": "જહાંગીર",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબ",
                    "correct": false
                },
                {
                    "option": "હુમાયુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાહજહાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "શાહજહાંએ નીચેનામાંથી કયા સ્થાપત્યનું બાંધકામ નહોતું કરાવ્યું ?",
            "a": [
                {
                    "option": "તાજમહાલ",
                    "correct": false
                },
                {
                    "option": "મોતી મસ્જિદ",
                    "correct": false
                },
                {
                    "option": "કુતુબ મિનાર",
                    "correct": true
                },
                {
                    "option": "જુમ્મા મસ્જિદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુતુબ મિનાર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "કયા મુઘલ બાદશાહની યાદશક્તિ ગજબની હતી ?",
            "a": [
                {
                    "option": "શાહજહાંની",
                    "correct": false
                },
                {
                    "option": "જહાંગીરની",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબની",
                    "correct": true
                },
                {
                    "option": "હુમાયુની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઔરંગઝેબની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "કુર્રાને શરીફનો કયા મુઘલ બાદશાહએ ઊંડો અભ્યાસ કર્યો હતો ?",
            "a": [
                {
                    "option": "શાહજહાંએ",
                    "correct": false
                },
                {
                    "option": "જહાંગીરે",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબે",
                    "correct": true
                },
                {
                    "option": "હુમાયુએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઔરંગઝેબે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ઔરંગઝેબે દક્ષિણમાં બીજાપુર અને ગોવલકોંડાનાં શિયારાજ્યો સાથે કેટલા વર્ષ સંઘર્ષ કર્યો ? ",
            "a": [
                {
                    "option": "30 વર્ષ",
                    "correct": false
                },
                {
                    "option": "25 વર્ષ",
                    "correct": true
                },
                {
                    "option": "20 વર્ષ",
                    "correct": false
                },
                {
                    "option": "15 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 25 વર્ષ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ઔરંગઝેબ સામે મરાઠા ઉપરાંત કઈ પ્રજાએ બળવો કર્યો હતો ?",
            "a": [
                {
                    "option": "જાટ અને શીખ",
                    "correct": true
                },
                {
                    "option": "ગુર્જર અને જાટ",
                    "correct": false
                },
                {
                    "option": "પારસી અને શીખ",
                    "correct": false
                },
                {
                    "option": "પારસી અને જાટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાટ અને શીખ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "મુઘલ સમયમાં સમાજ કઈ વ્યવસ્થા ઉપર રચાયેલો હતો ?",
            "a": [
                {
                    "option": "આમીલ",
                    "correct": false
                },
                {
                    "option": "સરકાર",
                    "correct": false
                },
                {
                    "option": "મુખી",
                    "correct": false
                },
                {
                    "option": "સામંત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સામંત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "દર વર્ષે બાદશાહ માટે એક હજાર જેટલા કીંમતી પોશાક તૈયાર કરવામાં આવતા. એવું કોણે લખ્યું છે ? ",
            "a": [
                {
                    "option": "અબુલ ફઝલે",
                    "correct": true
                },
                {
                    "option": "અફઝલે",
                    "correct": false
                },
                {
                    "option": "અમીર ખુશરુએ",
                    "correct": false
                },
                {
                    "option": "અલાઉદ્દીને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અબુલ ફઝલે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "દશેરાનો ઉત્સવ કયા મુઘલ બાદશાહના સમયમાં ઠાઠમાઠથી ઊજવવામાં આવતો ?",
            "a": [
                {
                    "option": "શાહજહાંના",
                    "correct": false
                },
                {
                    "option": "જહાંગીરના",
                    "correct": true
                },
                {
                    "option": "ઔરંગઝેબના",
                    "correct": false
                },
                {
                    "option": "હુમાયુના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જહાંગીરના</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "મુઘલ સમયમાં લાહોરની કઈ વસ્તુ દુનિયાભરમાં જાણીતી હતી ?",
            "a": [
                {
                    "option": "શાલ",
                    "correct": true
                },
                {
                    "option": "શેતરંજીઓ",
                    "correct": false
                },
                {
                    "option": "સુતરાઉ કાપડ",
                    "correct": false
                },
                {
                    "option": "મલમલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "મુઘલ સમયમાં ગુજરાતની કઈ વસ્તુ દુનિયાભરમાં જાણીતી હતી ? ",
            "a": [
                {
                    "option": "શાલ",
                    "correct": false
                },
                {
                    "option": "શેતરંજીઓ",
                    "correct": false
                },
                {
                    "option": "સુતરાઉ કાપડ",
                    "correct": true
                },
                {
                    "option": "મલમલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુતરાઉ કાપડ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "મુઘલ સમયમાં સિક્રીની કઈ વસ્તુ દુનિયાભરમાં જાણીતી હતી ? ",
            "a": [
                {
                    "option": "શાલ",
                    "correct": false
                },
                {
                    "option": "શેતરંજીઓ",
                    "correct": true
                },
                {
                    "option": "સુતરાઉ કાપડ",
                    "correct": false
                },
                {
                    "option": "મલમલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શેતરંજીઓ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "મુઘલ સમયમાં ઢાકાની કઈ વસ્તુ દુનિયાભરમાં જાણીતી હતી ? ",
            "a": [
                {
                    "option": "શાલ",
                    "correct": false
                },
                {
                    "option": "શેતરંજીઓ",
                    "correct": false
                },
                {
                    "option": "સુતરાઉ કાપડ",
                    "correct": false
                },
                {
                    "option": "મલમલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મલમલ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "મુઘલ સમયમાં ગામડાંઓ કેવા હતા ? ",
            "a": [
                {
                    "option": "પરાવલંબી",
                    "correct": false
                },
                {
                    "option": "પરરાજ્યલંબી",
                    "correct": false
                },
                {
                    "option": "સ્વાવલંબી",
                    "correct": true
                },
                {
                    "option": "સ્વાનલંબી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વાવલંબી</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "વૈષ્ણવ આચાર્ય વિઠ્ઠલનાથજીના કયા શિષ્યએ હિંદી કાવ્યો લખ્યાં ?",
            "a": [
                {
                    "option": "રસખાને",
                    "correct": true
                },
                {
                    "option": "કબીરે",
                    "correct": false
                },
                {
                    "option": "રહીમે",
                    "correct": false
                },
                {
                    "option": "તુલસીદાસે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રસખાને</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "મુઘલકાળમાં કયા ફ્રેંચ મુસાફરો ભારતમાં આવ્યા હતા ?",
            "a": [
                {
                    "option": "ટેવર્નિયર અને બર્નિયર",
                    "correct": true
                },
                {
                    "option": "હોકિન્સ અને ટોમસ રો",
                    "correct": false
                },
                {
                    "option": "ટેવર્નિયર અને ટોમસ રો",
                    "correct": false
                },
                {
                    "option": "હોકિન્સર અને બર્નિયર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટેવર્નિયર અને બર્નિયર</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "બર્નિયર કેટલાં વર્ષ સુધી ભારતમાં રહ્યો હતો ?",
            "a": [
                {
                    "option": "10 વર્ષ",
                    "correct": false
                },
                {
                    "option": "12 વર્ષ",
                    "correct": true
                },
                {
                    "option": "14 વર્ષ",
                    "correct": false
                },
                {
                    "option": "16 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 12 વર્ષ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "જોધપુરના મહારાજાનું અવસાન થતાં તેમના પુત્ર અને રાણીને મુઘલ શાસનના ભયથી રક્ષણ કોણે આપ્યું ?",
            "a": [
                {
                    "option": "વીર દુર્ગાદાસે",
                    "correct": true
                },
                {
                    "option": "મહારાણા પ્રતાપે",
                    "correct": false
                },
                {
                    "option": "શિવાજીએ",
                    "correct": false
                },
                {
                    "option": "ટોડરમલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વીર દુર્ગાદાસે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "શિવાજીનો રાજ્યાભિષેક ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ.1630માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1674માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1707માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1526માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ.1674માં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "મહારાષ્ટ્ર એટલે કોનું વતન ?",
            "a": [
                {
                    "option": "મરાઠાઓનું",
                    "correct": true
                },
                {
                    "option": "પારસીઓનું",
                    "correct": false
                },
                {
                    "option": "શીખોનું",
                    "correct": false
                },
                {
                    "option": "મુસ્લિમોનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મરાઠાઓનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "ક્યાંની જાગીરમાં શિવાજીએ સ્વરાજ્યના સ્વપ્ન સેવ્યાં ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રની",
                    "correct": false
                },
                {
                    "option": "પૂનાની",
                    "correct": true
                },
                {
                    "option": "પૂનમની",
                    "correct": false
                },
                {
                    "option": "સિક્કીમની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂનાની</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here 



    ]
};
