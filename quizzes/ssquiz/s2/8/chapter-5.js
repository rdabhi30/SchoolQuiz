// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 5  ભારતના ક્રાન્તિવીરો",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "8",
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
            "q": "ભારતમાં ક્રાંતિકારી પ્રવૃત્તિની શરૂઆત કોણે કરી હતી ?",
            "a": [
                {
                    "option": "વીર સાવરકરે",
                    "correct": false
                },
                {
                    "option": "ચંન્દ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": true
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વાસુદેવ બળવંત ફડકેએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ક્યા ક્રાંતિવીરના માથા માટે અંગ્રેજ સરકારે રૂપિયા ચાર હજારનું ઇનામ જાહેર કર્યું હતું ?",
            "a": [
                {
                    "option": "વાસુદેવ બળવંત ફડકેના",
                    "correct": true
                },
                {
                    "option": "મદનલાલ ઢીંગરાના",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદના",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વાસુદેવ બળવંત ફડકેના</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ભારતમાં વિદેશી કાપડની હોળી સૌપ્રથમ કોણે કરી હતી ?",
            "a": [
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "ખુદીરામ બોઝે",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીર સાવરકરે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "'1857: ભારતનો પ્રથમ સ્વાતંત્ર્યસંગ્રામ' નામનું પુસ્તક કોણે લખ્યું હતું ?",
            "a": [
                {
                    "option": "ખુદીરામ બોઝે",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરે",
                    "correct": true
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીર સાવરકરે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગંગા નદીમાં મીઠું લઈને પસાર થતી હોડીઓને કોણ ઉથલાવી દેતું હતું ?",
            "a": [
                {
                    "option": "રામપ્રસાદ બિસ્મિલ",
                    "correct": false
                },
                {
                    "option": "ખુદીરામ બોઝ",
                    "correct": true
                },
                {
                    "option": "અશફાક ઉલ્લાખાં",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખુદીરામ બોઝ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "કાકોરી ટ્રેન ધાડ સફળતાપૂર્વક પાર પાડવામાં કોણે મહત્ત્વનો ભાગ ભજવ્યો હતો ?",
            "a": [
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": true
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રામપ્રસાદ બિસ્મિલે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કયા ક્રાંતિવીરની કવિતાઓએ રાષ્ટ્રીય ચેતનાનું પ્રેરકબળ પૂરું પાડ્યું ?",
            "a": [
                {
                    "option": "અશફાક ઉલ્લાખાંની",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરની",
                    "correct": false
                },
                {
                    "option": "રામપ્રસાદ બિસ્મિલની",
                    "correct": true
                },
                {
                    "option": "ખુદીરામ બોઝની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રામપ્રસાદ બિસ્મિલની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ક્યા ક્રાંતિવીરે હિંદુ-મુસ્લિમ એકતાનું ઉદાહરણ પૂરું પાડ્યું હતું ?",
            "a": [
                {
                    "option": "નવાબ સલીમુલ્લાએ",
                    "correct": false
                },
                {
                    "option": "અશફાક ઉલ્લાખાંએ",
                    "correct": true
                },
                {
                    "option": "બહાદુરશાહ ઝફરે",
                    "correct": false
                },
                {
                    "option": "અશફાક આગાખાએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અશફાક ઉલ્લાખાંએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ક્યા ક્રાતિવીરે પ્રતિજ્ઞા લીધી હતી કે, 'હું જીવતો અંગ્રેજ સરકારના હાથમાં પકડાઈશ નહિ.'?",
            "a": [
                {
                    "option": "વીર સાવરકરે",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": true
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": false
                },
                {
                    "option": "ભગતસિંહે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચંદ્રશેખર આઝાદે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "'મિત્રમેલા' નામની સંસ્થા કોણે સ્થાપી હતી ?",
            "a": [
                {
                    "option": "વીર સાવરકરે",
                    "correct": true
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": false
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીર સાવરકરે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "આર્યસમાજના મંદિર પર થયેલો હુમલો કોણે અટકાવ્યો હતો ?",
            "a": [
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "અશફાક ઉલ્લાખાંએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અશફાક ઉલ્લાખાંએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ક્યા ક્રાંતિવીરે દિલ્લીની ધારાસભામાં બૉમ્બ ફેંક્યો હતો ?",
            "a": [
                {
                    "option": "સુખદેવે",
                    "correct": false
                },
                {
                    "option": "ભગતસિંહે",
                    "correct": true
                },
                {
                    "option": "રાજગુરુએ",
                    "correct": false
                },
                {
                    "option": "સરદારસિંહ રાણાએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભગતસિંહે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ક્યા દેશનેતાના અવસાનનો બદલો લેવા માટે સોન્ડર્સનું ખૂન સુખદેવ, ભગતસિંહ, રાજગુરુએ કર્યું ?",
            "a": [
                {
                    "option": "બાળા ગંગાધર ટિળકના",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલેના",
                    "correct": false
                },
                {
                    "option": "લાલા લજપતરાયના",
                    "correct": true
                },
                {
                    "option": "સુરેન્દ્રનાથ બેનરજીના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાલા લજપતરાયના</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ઇંગ્લૅન્ડમાં ક્રાંતિકારી પ્રવૃતિની સૌપ્રથમ શરૂઆત કોણે કરી હતી ?",
            "a": [
                {
                    "option": "લાલા હરદયાળે",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્યામજી કૃષ્ણ વર્માએ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "લંડનમાં 'ઇન્ડિયન હોમરૂલ સોસાયટી' ની સ્થાપના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "મૅડમ કામાએ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્યામજી કૃષ્ણ વર્માએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ક્યા ક્રાંતિવીરે ભરબજારે કર્નલ વિલિયમ વાયલીને ગોળીથી ઠાર કર્યો હતો ?",
            "a": [
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": true
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "ભગતસિંહે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મદનલાલ ઢીંગરાએ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ક્યા ક્રાંતિવીરનું સ્વિટ્ઝરલૅન્ડમાં અવસાન થયું હતું ?",
            "a": [
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માનું",
                    "correct": true
                },
                {
                    "option": "ભગતસિંહનું",
                    "correct": false
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેનું",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્યામજી કૃષ્ણ વર્માનું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ક્યા ક્રાતિવીરે વિદેશમાં ભારતીયો માટે શિષ્યવૃત્તિની વ્યવસ્થા કરી હતી ?",
            "a": [
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": true
                },
                {
                    "option": "લાલા હરદયાળે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્યામજી કૃષ્ણ વર્માએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "વિદેશમાં ભારતનો ત્રિરંગો રાષ્ટ્રધ્વજ કોણે ફરકાવ્યો ?",
            "a": [
                {
                    "option": "સરદારસિંહ રાણાએ",
                    "correct": false
                },
                {
                    "option": "મૅડમ કામાએ",
                    "correct": true
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": false
                },
                {
                    "option": "લાલા હરદયાળે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મૅડમ કામાએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "કોણે પોતાના પિતાનું નામ 'સ્વાધીનતા' અને પોતાનું ઘર 'જેલખાનું' બતાવ્યું હતું ?",
            "a": [
                {
                    "option": "ભગતસિંહે ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": true
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચંદ્રશેખર આઝાદે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "કયા ક્રાંતિવીર ખેલકૂદના શોખીન તેમજ ઘોડેસવારી અને બંદૂક ચલાવવામાં પ્રવીણ હતા ?",
            "a": [
                {
                    "option": "અશફાક ઉલ્લાખાં",
                    "correct": true
                },
                {
                    "option": "વીર સાવરકર",
                    "correct": false
                },
                {
                    "option": "રામપ્રસાદ બિસ્મિલ",
                    "correct": false
                },
                {
                    "option": "ખુદીરામ બોઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અશફાક ઉલ્લાખાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કોના ત્રાસથી વાસુદેવ બળવંત ફડકેએ નોકરી છોડી દીધી ?",
            "a": [
                {
                    "option": "ફેંચોના",
                    "correct": false
                },
                {
                    "option": "અંગ્રેજોના",
                    "correct": true
                },
                {
                    "option": "પોર્ટુગીઝોના",
                    "correct": false
                },
                {
                    "option": "ડચ લોકોના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંગ્રેજોના</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "વાસુદેવ બળવંત ફડકે ક્યાં નોકરી કરતા હતા ?",
            "a": [
                {
                    "option": "બૉમ્બેમાં",
                    "correct": false
                },
                {
                    "option": "દિલ્લીમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": true
                },
                {
                    "option": "સિક્કીમમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂણેમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "દેશને ગુલામીમાંથી મુક્ત ન કરું, ત્યાં સુધી કપાળ પર ચંદન ન લગાડવાની તથા કેશકર્તન ન કરવાની કોણે પ્રતિજ્ઞા લીધી ?",
            "a": [
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાસુદેવ બળવંત ફડકેએ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "નીચેનામાંથી વાસુદેવ બળવંત ફડકે કઈ ક્રાંતિકારી પ્રવૃત્તિ કરતા હતા ?",
            "a": [
                {
                    "option": "આપેલી બધી",
                    "correct": true
                },
                {
                    "option": "અંગેજ થાણાં પર હુમલા કરવા",
                    "correct": false
                },
                {
                    "option": "સરકારી તિજોરી લૂંટવી",
                    "correct": false
                },
                {
                    "option": "હિન્દીઓને બંદૂક ચલાવવાની તાલીમ આપવી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલી બધી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "વીર સાવરકરનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "28 એપ્રિલ, 1888માં",
                    "correct": false
                },
                {
                    "option": "28 મે, 1883માં",
                    "correct": true
                },
                {
                    "option": "31 મે, 1883માં",
                    "correct": false
                },
                {
                    "option": "28 મે, 1885માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 28 મે, 1883માં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "વીર સાવરકરનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં",
                    "correct": true
                },
                {
                    "option": "રાજસ્થાનના જયપુરના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશના ધાર જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "ગુજરાતના કચ્છ જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "'મિત્રમેલા' નામની સંસ્થા પાછળથી ક્યા નામે જાણીતી બની ?",
            "a": [
                {
                    "option": "અત્યારનું ભારત",
                    "correct": false
                },
                {
                    "option": "અભિનય ભારત",
                    "correct": false
                },
                {
                    "option": "અભિનેતા ભારત",
                    "correct": false
                },
                {
                    "option": "અભિનવ ભારત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અભિનવ ભારત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "મિત્રમેલા સંસ્થાનો હેતુ શું હતો ?",
            "a": [
                {
                    "option": "સશસ્ત્ર વિપ્લવ દ્વારા અંગ્રેજ શાસનનો અંત",
                    "correct": true
                },
                {
                    "option": "સમજાવટ દ્વારા અંગ્રેજ શાસનનો અંત",
                    "correct": false
                },
                {
                    "option": "સવિનય કાનૂનભંગ દ્વારા અંગ્રેજ શાસનનો અંત",
                    "correct": false
                },
                {
                    "option": "આંદોલન દ્વારા અંગ્રેજ શાસનનો અંત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સશસ્ત્ર વિપ્લવ દ્વારા અંગ્રેજ શાસનનો અંત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "વીર સાવરકર કોની સંસ્થામાંથી શિષ્યવૃત્તિ મેળવી વધુ અભ્યાસ માટે લંડન ગયા ?",
            "a": [
                {
                    "option": "મદનલાલ ઢીંગરાની",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદની",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માની",
                    "correct": true
                },
                {
                    "option": "લાલા હરદયાળની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્યામજી કૃષ્ણ વર્માની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ક્યા ક્રાંતિવીરનું પુસ્તક પ્રકાશન પહેલાં જ પ્રતિબંધિત થયેલું વિશ્વનું પ્રથમ પુસ્તક હતું ?",
            "a": [
                {
                    "option": "ચંદ્રશેખર આઝાદનું",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાનું",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરનું",
                    "correct": true
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિનાયક સાવરકરનું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "વીર સાવરકરને કાળાપાણીની સજા થતા કઈ જેલમાં મોકલાયા ?",
            "a": [
                {
                    "option": "દિલ્લીની",
                    "correct": false
                },
                {
                    "option": "મુંબઈની",
                    "correct": false
                },
                {
                    "option": "નિકોબારની",
                    "correct": false
                },
                {
                    "option": "આંદામાનની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંદામાનની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "કઈ તારીખે વીર સાવરકર અવસાન પામ્યા ?",
            "a": [
                {
                    "option": "28 એપ્રિલ, 1988માં",
                    "correct": false
                },
                {
                    "option": "28 મે, 1883માં",
                    "correct": false
                },
                {
                    "option": "26 ફેબ્રુઆરી, 1966માં",
                    "correct": true
                },
                {
                    "option": "28 મે, 1985માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 26 ફેબ્રુઆરી, 1966માં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "ખુદીરામ બોઝનો જ્ન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાનના જયપુરના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશના ધાર જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "બંગાળાના મેદિનીપુર જિલ્લાના મોહબની ગામમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંગાળાના મેદિનીપુર જિલ્લાના મોહબની ગામમાં</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "ખુદીરામ બોઝને કયા શિક્ષકે ક્રાન્તિકારીપથની દીક્ષા આપી ?",
            "a": [
                {
                    "option": "સજ્જનબાબુએ",
                    "correct": false
                },
                {
                    "option": "અરવિંદ ઘોષે",
                    "correct": false
                },
                {
                    "option": "સત્યેનબાબુએ",
                    "correct": true
                },
                {
                    "option": "રવિન્દ્રનાથ ટાગોરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સત્યેનબાબુએ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "કોને ખતમ કરવા માટે ખુદીરામ અને પ્રફુલ્લ ચાકીએ ન્યાયાધીશની ઘોડાગાડી ઉપર બૉમ્બ ફેંક્યો ?",
            "a": [
                {
                    "option": "કૅનેડીને",
                    "correct": false
                },
                {
                    "option": "જનરલ ડાયરને",
                    "correct": false
                },
                {
                    "option": "સાયમનને",
                    "correct": false
                },
                {
                    "option": "કિંગ્સફૉર્ડને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિંગ્સફૉર્ડને</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "રામપ્રસાદ બિસ્મિલનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્ર રાજ્યના ભગૂરમાં",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન રાજ્યના શાહજહાંપુરમાં ",
                    "correct": false
                },
                {
                    "option": "ઉત્તરપ્રદેશ રાજ્યના શાહજહાંપુરમાં",
                    "correct": true
                },
                {
                    "option": "બંગાળાના મોહબનીમાં ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તરપ્રદેશ રાજ્યના શાહજહાંપુરમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "શાહજહાંપુરમાં આર્યસમાજના મંદિર પર થયેલ હુમલો કોણે રોક્યો હતો ?",
            "a": [
                {
                    "option": "અશફાક ઉલ્લાખાંએ",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરે",
                    "correct": false
                },
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": true
                },
                {
                    "option": "ખુદીરામ બોઝે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રામપ્રસાદ બિસ્મિલે</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ચંદ્રશેખર આઝાદનું મૂળ નામ શું હતું ?",
            "a": [
                {
                    "option": "ચંદ્રશેખર રામકુમાર તિવારી",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર સાખકુમાર તિવારી",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર સીતારામ તિવારી",
                    "correct": true
                },
                {
                    "option": "ચંદ્રશેખર સીતસાગર તિવારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચંદ્રશેખર સીતારામ તિવારી</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "ચંદ્રશેખર આઝાદનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાનના જયપુરના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશના ઝાબુઆ જિલ્લાના ભાવરા ગામમાં",
                    "correct": true
                },
                {
                    "option": "બંગાળાના મેદિનીપુર જિલ્લાના મોહબની ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મધ્યપ્રદેશના ઝાબુઆ જિલ્લાના ભાવરા ગામમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "ચંદ્રશેખર આઝાદે પ્રારંભિક અભ્યાસ ક્યાં કર્યો હતો ?",
            "a": [
                {
                    "option": "કાશીમાં",
                    "correct": true
                },
                {
                    "option": "કાશ્મીરમાં",
                    "correct": false
                },
                {
                    "option": "કચ્છમાં",
                    "correct": false
                },
                {
                    "option": "કાંચીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાશીમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "અદાલતમાં ચંદ્રશેખર આઝાદે પોતાનું ઘર કયું બતાવ્યું હતું ?",
            "a": [
                {
                    "option": "જંજીર",
                    "correct": false
                },
                {
                    "option": "જેલખાનું",
                    "correct": true
                },
                {
                    "option": "બંગલો",
                    "correct": false
                },
                {
                    "option": "જીમખાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જેલખાનું</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "ચંદ્રશેખર આઝાદ ક્યાં બેઠા હતા ત્યારે અંગેજોએ એમને ઘેરી લીધા ?",
            "a": [
                {
                    "option": "અલાહાબાદના આલ્ફ્રેડ બાગમાં",
                    "correct": true
                },
                {
                    "option": "અમદાવાદના કાકરિયા બાગમાં",
                    "correct": false
                },
                {
                    "option": "અમૃતસરના જલિયાંવાલા બાગમાં",
                    "correct": false
                },
                {
                    "option": "વડોદરાના કમાટીબાગમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અલાહાબાદના આલ્ફ્રેડ બાગમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "ચંદ્રશેખર આઝાદનું મૃત્યુ કેવી રીતે થયું ?",
            "a": [
                {
                    "option": "અંગેજોની ગોળીથી",
                    "correct": false
                },
                {
                    "option": "પોલીસની ગોળીથી",
                    "correct": false
                },
                {
                    "option": "વિમાન દુર્ઘનાથી",
                    "correct": false
                },
                {
                    "option": "પોતાની ગોળીથી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોતાની ગોળીથી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "9 ઑગષ્ટ,1925ના રોજ સરકારી ખજાનો રેલવે દ્વારા સહરાનપુરથી લખનૌ જતો હતો ત્યારે ક્રાંતિકારીઓએ ક્યા રેલવે-સ્ટેશને આ ગાડીને લૂંટી હતી ?",
            "a": [
                {
                    "option": "કાકોરી",
                    "correct": true
                },
                {
                    "option": "કાવેરી",
                    "correct": false
                },
                {
                    "option": "કાંકડી",
                    "correct": false
                },
                {
                    "option": "કાંગડી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાકોરી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "ભગતસિંહનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "પંજાબના લાયલપુર જિલ્લાના બંગા ગામમાં",
                    "correct": true
                },
                {
                    "option": "મધ્યપ્રદેશના ઝાબુઆ જિલ્લાના ભાવરા ગામમાં",
                    "correct": false
                },
                {
                    "option": "બંગાળાના મેદિનીપુર જિલ્લાના મોહબની ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંજાબના લાયલપુર જિલ્લાના બંગા ગામમાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "ક્યાં ભણવા ગયા ત્યારે ભગતસિંહને સુખદેવ, ભગવતીચરણ અને યશપાલનો પરિચય થયો ?",
            "a": [
                {
                    "option": "લાહોર નેશનલ કૉલેજમાં",
                    "correct": true
                },
                {
                    "option": "લાહોર  મુસ્લિમ કૉલેજમાં",
                    "correct": false
                },
                {
                    "option": "અલીગઢ નેશનલ કૉલેજમાં",
                    "correct": false
                },
                {
                    "option": "અલીગઢ  મુસ્લિમ કૉલેજમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાહોર નેશનલ કૉલેજમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "ભગતસિંહ અને બટુકેશ્વર દત્તનો ધારાસભામાં બૉમ્બ ફેંકવાનો ઇરાદો શું હતો ?",
            "a": [
                {
                    "option": "બાડી થઈ ગયેલી અંગ્રેજ સરકારને જોતી કરવાનો હતો.",
                    "correct": false
                },
                {
                    "option": "લંગડી થઈ ગયેલી અંગ્રેજ સરકારને સહારો આપવાનો હતો.",
                    "correct": false
                },
                {
                    "option": "મૂંગી થઈ ગયેલી અંગ્રેજ સરકારને બોલતી કરવાનો હતો.",
                    "correct": false
                },
                {
                    "option": "બહેરી થઈ ગયેલી અંગ્રેજ સરકારને જગાડવાનો હતો.",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહેરી થઈ ગયેલી અંગ્રેજ સરકારને જગાડવાનો હતો.</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "23 માર્ચ, 1931ના રોજ કોને ફાંસી આપવામાં આવી ?",
            "a": [
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "ભગતસિંહ",
                    "correct": false
                },
                {
                    "option": "સુખદેવ",
                    "correct": false
                },
                {
                    "option": "રાજગુરુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "શ્યામજી કૃષ્ણ વર્માનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "રાજકોટના માંડલમાં",
                    "correct": false
                },
                {
                    "option": "કચ્છના માંડવીમાં",
                    "correct": true
                },
                {
                    "option": "અમદાવાદના માંડલમાં",
                    "correct": false
                },
                {
                    "option": "કચ્છના રાપરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કચ્છના માંડવીમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "લંડનમાં 'ઇન્ડિયન હોમરૂલ સોસાયટી'નામની સંસ્થાનું કાર્યાલય કયા મકાનમાં રાખવામાં આવ્યું હતું ?",
            "a": [
                {
                    "option": "ઇન્ડિયા-મકાન",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિયન સોશિયોલૉજિસ્ટ",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિયા-હાઉસ",
                    "correct": true
                },
                {
                    "option": "વેસ્ટ ઇન્ડિઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇન્ડિયા-હાઉસ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "'ઇન્ડિયન હોમરૂલ સોસાયટી'નામની સંસ્થાના પ્રચાર માટે કયું સામયિક શ્યામજી કૃષ્ણ વર્માએ શરૂ કર્યું ?",
            "a": [
                {
                    "option": "ન્યૂ ઇન્ડિયા",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિયન સોશિયોલૉજિસ્ટ",
                    "correct": true
                },
                {
                    "option": "ઇન્ડિયા-હાઉસ",
                    "correct": false
                },
                {
                    "option": "યંગ ઇન્ડિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇન્ડિયન સોશિયોલૉજિસ્ટ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "મૅડમ કામાનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મુંબઈમાં",
                    "correct": true
                },
                {
                    "option": "દિલ્લીમાં",
                    "correct": false
                },
                {
                    "option": "ચેન્નઈમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુંબઈમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "ઇ.સ. 1907માં કયાં યોજાયેલી બીજી આંતરાષ્ટ્રીય સમાજવાદી પરિષદમાં મૅડમ કામાએ હાજરી આપી હતી ?",
            "a": [
                {
                    "option": "જર્મનીના સ્ટુઅર્ટ ગાર્ડમાં",
                    "correct": true
                },
                {
                    "option": "સ્વીડનના સ્ટોકહોમમાં",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલના રિયો-ડી-જેનરોમાં",
                    "correct": false
                },
                {
                    "option": "ભારતના દિલ્લીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જર્મનીના સ્ટુઅર્ટ ગાર્ડમાં</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "શ્યામજી કૃષ્ણ વર્માનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "4 ઑક્ટોબર,1857માં",
                    "correct": true
                },
                {
                    "option": "24 સપ્ટેમ્બર,1857માં",
                    "correct": false
                },
                {
                    "option": "4 નવેમ્બર,1857માં",
                    "correct": false
                },
                {
                    "option": "4 સપ્ટેમ્બર,1861માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4 ઑક્ટોબર,1857માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "મૅડમ કામાનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "4 ઑક્ટોબર,1857માં",
                    "correct": false
                },
                {
                    "option": "24 સપ્ટેમ્બર,1857માં",
                    "correct": false
                },
                {
                    "option": "4 નવેમ્બર,1857માં",
                    "correct": false
                },
                {
                    "option": "4 સપ્ટેમ્બર,1861માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4 સપ્ટેમ્બર,1861માં</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
    ]
};
