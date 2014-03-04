// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 3  ભારતમાં રાષ્ટ્રવાદ",
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
            "q": "વિશ્વમાં આધુનિક રાષ્ટ્રવાદનો સૌપ્રથમ ઉદ્ભવ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "યુ.એસ.એ. માં",
                    "correct": false
                },
                {
                    "option": "ભારતમાં ",
                    "correct": false
                },
                {
                    "option": "યુરોપમાં",
                    "correct": true
                },
                {
                    "option": "રશિયામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  યુરોપમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "અંગ્રેજોની કઈ નીતિએ ભારતને પાયમાલ કર્યું ?",
            "a": [
                {
                    "option": "મહેસૂલ નીતિ",
                    "correct": false
                },
                {
                    "option": "આર્થિક નીતિ",
                    "correct": true
                },
                {
                    "option": "રાજકીય નીતિ",
                    "correct": false
                },
                {
                    "option": "ધાર્મિક નીતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આર્થિક નીતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "અમેરિકન સ્વાતંત્ર્ય વિગ્રહમાંથી ભારતને શાની પ્રેરણા મળી ?",
            "a": [
                {
                    "option": "લોકશાહીની",
                    "correct": true
                },
                {
                    "option": "સમાજવાદની",
                    "correct": false
                },
                {
                    "option": "સમાનતાની",
                    "correct": false
                },
                {
                    "option": "સ્વતંત્રતાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકશાહીની</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "કઈ ક્રાંતિમાંથી ભારતને સ્વતંત્રતા, સમાનતા અને બંધુત્વની ભાવનાની પ્રેરણા મળી‌ ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડની",
                    "correct": false
                },
                {
                    "option": "ફ્રાન્સની",
                    "correct": true
                },
                {
                    "option": "યૂ.એસ.એ.ની",
                    "correct": false
                },
                {
                    "option": "રશિયાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફ્રાન્સની</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "હિંદી રાષ્ટ્રીય મહાસભાના પ્રથમ અધિવેશનના પ્રમુખ કોણ હતા ?",
            "a": [
                {
                    "option": "વ્યોમેશચન્દ્ર બેનરજી",
                    "correct": true
                },
                {
                    "option": "દાદાભાઈ નવરોજી",
                    "correct": false
                },
                {
                    "option": "સુરેન્દ્રનાથ બેનરજી",
                    "correct": false
                },
                {
                    "option": "બદરુદ્દીન તૈયબજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વ્યોમેશચન્દ્ર બેનરજી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "'ભાગલા પાડો અને રાજ કરો' એ નીતિ કોણે અમલમાં મૂકી ?",
            "a": [
                {
                    "option": "લૉર્ડ લિટને",
                    "correct": false
                },
                {
                    "option": "લૉર્ડ રિપને",
                    "correct": false
                },
                {
                    "option": "લૉર્ડ કૅનિંગે",
                    "correct": false
                },
                {
                    "option": "લૉર્ડ કર્ઝને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લૉર્ડ કર્ઝને</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "બંકિમચંદ્રનું ક્યું ગીત બંગભંગના અંદોલનનો નારો બન્યું ?",
            "a": [
                {
                    "option": "'જન ગણ મન...'",
                    "correct": false
                },
                {
                    "option": "'વંદે માતરમ્' ",
                    "correct": true
                },
                {
                    "option": "'ઝંડા ઊંચા રહે હમારા' ",
                    "correct": false
                },
                {
                    "option": "'સોનાર બંગલા' ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'વંદે માતરમ્' </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "'વંદે માતરમ્' નામનું રાષ્ટ્રીય ગીત બંકિમચંદ્રની કઈ નવલકથામાંથી લેવામાં આવ્યું છે ?",
            "a": [
                {
                    "option": "આનંદમઠ",
                    "correct": true
                },
                {
                    "option": "સુંદરમઠ",
                    "correct": false
                },
                {
                    "option": "ગીતાંજલિ",
                    "correct": false
                },
                {
                    "option": "જ્યોતિમઠ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આનંદમઠ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "બંગાળાના ભાગલાના અમલનો દિવસ ક્યા દિવસ તરીકે ઊજવવામાં આવ્યો ?",
            "a": [
                {
                    "option": "'શોકદિન'",
                    "correct": true
                },
                {
                    "option": "'સ્વાતંત્ર્યદિન'",
                    "correct": false
                },
                {
                    "option": "'રાષ્ટ્રીયદિન'",
                    "correct": false
                },
                {
                    "option": "વિરોધદિન'",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'શોકદિન'</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી કોણ મવાળવાદી નેતા ન હતા ?",
            "a": [
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલે",
                    "correct": false
                },
                {
                    "option": "લોકમાન્ય ટિળક",
                    "correct": true
                },
                {
                    "option": "સુરેન્દ્રનાથ બેનરજી",
                    "correct": false
                },
                {
                    "option": "દાદાભાઈ નવરોજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકમાન્ય ટિળક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "જહાલવાદના મુખ્ય નેતા કોણ હતા ?",
            "a": [
                {
                    "option": "વ્યોમેશચન્દ્ર બેનરજી",
                    "correct": false
                },
                {
                    "option": "લોકમાન્ય ટિળક",
                    "correct": true
                },
                {
                    "option": "લાલા લજપતરાય",
                    "correct": false
                },
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકમાન્ય ટિળક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "'સ્વરાજ મારો જન્મસિદ્ધ હક છે અને હું તે મેળવીને જ જંપીશ.' આ મંત્ર કોણે આપ્યો હતો ?",
            "a": [
                {
                    "option": "દાદાભાઈ નવરોજીએ",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલેએ",
                    "correct": false
                },
                {
                    "option": "લોકમાન્ય ટિળકે",
                    "correct": true
                },
                {
                    "option": "મહાત્મા ગાંધીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકમાન્ય ટિળકે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "'શેર-એ-પંજાબ' તરીકે કોણ જાણીતા બન્યા હતા ?",
            "a": [
                {
                    "option": "ફિરોજશાહ મહેતા",
                    "correct": false
                },
                {
                    "option": "લાલા લજપતરાય",
                    "correct": true
                },
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્મા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાલા લજપતરાય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "સાયમન કમિશનના વિરોધ પ્રદર્શન વખતે પોલીસના લાઠીચાર્જને કારણે કોનું અવસાન થયું ?",
            "a": [
                {
                    "option": "લાલા લજપતરાય",
                    "correct": true
                },
                {
                    "option": "પંડિત ગોવિંદ વલ્લભ પંતનુમ્",
                    "correct": false
                },
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "બાળ ગંગાધર ટિળક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાલા લજપતરાય</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "સુભાષચંદ્ર બોઝનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "કટકમાં",
                    "correct": true
                },
                {
                    "option": "અમૃતસરમાં",
                    "correct": false
                },
                {
                    "option": "ભુવનેશ્વરમાં",
                    "correct": false
                },
                {
                    "option": "રામગિરિમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કટકમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "સુભાષચંદ્ર બોઝે ક્યો પક્ષ સ્થાપ્યો ?",
            "a": [
                {
                    "option": "યંગ ઇન્ડિયા",
                    "correct": false
                },
                {
                    "option": "ફોરવર્ડ બ્લૉક",
                    "correct": true
                },
                {
                    "option": "સ્વરાજ્ય પક્ષ",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિપેન્ડન્સ ઇન્ડિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફોરવર્ડ બ્લૉક</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "'આઝાદ હિંદ ફોજ'ની રચના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "જાપાનની સરકારે",
                    "correct": false
                },
                {
                    "option": "રાસબિહારી બોઝે",
                    "correct": false
                },
                {
                    "option": "કૅપ્ટન મોહનસિંગે",
                    "correct": true
                },
                {
                    "option": "સુભાષચંદ્ર બોઝે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૅપ્ટન મોહનસિંગે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "'આઝાદ હિંદ ફોજ'ના વડા બન્યા પછી સુભાષબાબુ ક્યા નામે ઓળખાયા ?",
            "a": [
                {
                    "option": "સરદાર",
                    "correct": false
                },
                {
                    "option": "નેતાજી",
                    "correct": true
                },
                {
                    "option": "સેનાપતિ ",
                    "correct": false
                },
                {
                    "option": "કૅપ્ટન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નેતાજી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "સુભાષચંદ્ર બોઝે આઝાદ હિંદ ફોજને ક્યું સૂત્ર આપ્યું ? ",
            "a": [
                {
                    "option": "'ઇન્કલાબ ઝિંદાબાદ'",
                    "correct": false
                },
                {
                    "option": "'ચલો દિલ્લી'",
                    "correct": true
                },
                {
                    "option": "'વંદે ભારત'",
                    "correct": false
                },
                {
                    "option": "'જય હિંદ'",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'ચલો દિલ્લી'</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "પ્રથમ વિશ્વયુદ્ધ દરમિયાન કયા દેશ પર અણુબૉમ્બ ફેંકવામાં આવ્યા ?",
            "a": [
                {
                    "option": "યુ.એસ.એ. ",
                    "correct": false
                },
                {
                    "option": "જર્મની",
                    "correct": false
                },
                {
                    "option": "જાપાન",
                    "correct": true
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાપાન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "કયા પાશ્ચાત્ય પુરાતત્ત્વવિદે ભારતની સંસ્કૃતિની ગૌરવગાથાના અવશેષો શોધી કાઢ્યા ?",
            "a": [
                {
                    "option": "મૅક્સર મૂલરે",
                    "correct": false
                },
                {
                    "option": "ફર્ગ્યુસને",
                    "correct": false
                },
                {
                    "option": "વિલિયમ હામે",
                    "correct": false
                },
                {
                    "option": "કનિંગહામે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કનિંગહામે</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કયા નિવૃત્ત અંગ્રેજ અધિકારીના પ્રયત્નોથી હિંદી રાષ્ટ્રીય મહાસભાની સ્થાપના થઈ ?",
            "a": [
                {
                    "option": "સર ચાર્લ્સ વુડના",
                    "correct": false
                },
                {
                    "option": "લૉર્ડ મૅકોલેના",
                    "correct": false
                },
                {
                    "option": "એ. ઓ. હ્યુમના",
                    "correct": true
                },
                {
                    "option": "લૉર્ડ મેયોના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એ. ઓ. હ્યુમના</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "હિંદી રાષ્ટ્રીય મહાસભાએ શરૂઆતમાં અંગ્રેજ સરકાર સમક્ષ કરેલી માગણીઓમાં નીચેનામાંથી કઈ માગણી ન હતી ?",
            "a": [
                {
                    "option": "ગૃહઉદ્યોગોને સજીવન કરવા.",
                    "correct": false
                },
                {
                    "option": "ખેડૂતોને દેવામાં રાહત આપવી.",
                    "correct": false
                },
                {
                    "option": "અદાલતોમાં હિંદી ન્યાયાધીશો નીમવા.",
                    "correct": true
                },
                {
                    "option": "સરકારી નોકરીમાં હિંદિઓની સંખ્યા વધારવી.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અદાલતોમાં હિંદી ન્યાયાધીશો નીમવા.</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "વાઇસરૉય લૉર્ડ કર્ઝને બંગાળાના ભાગલા ક્યારે પાડ્યા ?",
            "a": [
                {
                    "option": "ઈ.સ. 1909માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1906માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1911માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1905માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1905માં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ઈ.સ. 1901માં શાંતિનિકેતનમાં વિશ્વભારતી વિદ્યાલય કોણે શરૂ કરી ?",
            "a": [
                {
                    "option": "રવીન્દ્રનાથા ટાગોરે",
                    "correct": true
                },
                {
                    "option": "અવનીન્દ્રનાથ ટાગોરે",
                    "correct": false
                },
                {
                    "option": "કેદારનાથ ટાગોરે",
                    "correct": false
                },
                {
                    "option": "સુભાષચંદ્ર બોઝે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રવીન્દ્રનાથા ટાગોરે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "જહાલવાદ એટલે શું ?",
            "a": [
                {
                    "option": "સ્વદેશી માલનો વિરોધ કરનારા.",
                    "correct": false
                },
                {
                    "option": "ઉગ્ર અને સક્રિય આંદોલનમાં માનનારા.",
                    "correct": true
                },
                {
                    "option": "નરમ કાર્યશૈલીમાં માનનારા.",
                    "correct": false
                },
                {
                    "option": "બ્રિટિશરોને સાચા માનનારા.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉગ્ર અને સક્રિય આંદોલનમાં માનનારા.</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "નીચેનામાંથી કોણ જહાલવાદી નેતા ન હતા ?",
            "a": [
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલે",
                    "correct": true
                },
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "લાલા લજપતરાય",
                    "correct": false
                },
                {
                    "option": "લોકમાન્ય ટિળક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોપાલકૃષ્ણ ગોખલે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "મવાળવાદ એટલે શું ?",
            "a": [
                {
                    "option": "સ્વદેશી માલનો વિરોધ કરનારા.",
                    "correct": false
                },
                {
                    "option": "ઉગ્ર અને સક્રિય આંદોલનમાં માનનારા.",
                    "correct": false
                },
                {
                    "option": "નરમ કાર્યશૈલીમાં માનનારા.",
                    "correct": true
                },
                {
                    "option": "બ્રિટિશરોને સાચા માનનારા.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નરમ કાર્યશૈલીમાં માનનારા.</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "અંગ્રેજ સરકારે કયા નેતા પર યુવાનોને હિંસક માર્ગે ઉશ્કેરવાનો આરોપ મૂક્યો હતો ?",
            "a": [
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": true
                },
                {
                    "option": "લાલા લજપતરાય",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલે",
                    "correct": false
                },
                {
                    "option": "સુરેન્દ્રનાથ બેનરજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બિપિનચંદ્ર પાલ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "'મુસ્લિમ લીગ'ની સ્થાપના ક્યારે થઈ ?",
            "a": [
                {
                    "option": "ઈ.સ. 1909માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1906માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1911માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1905માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1906માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ઈ.સ. 1916માં કૉંગ્રેસે અને મુસ્લિમ લીગે તેમનાં વાર્ષિક અધિવેશનો એકસાથે કયા શહેરમાં ભર્યાં ?",
            "a": [
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમં",
                    "correct": false
                },
                {
                    "option": "લખનૌમાં",
                    "correct": true
                },
                {
                    "option": "સુરતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લખનૌમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "સુભાષચંદ્ર બોઝનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ. 1897માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1887માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1903માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1905માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1897માં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "ઈ.સ. 1938માં હરિપુરામાં અને ઈ.સ. 1939માં ત્રિપુરામાં ભરાયેલા કૉંગ્રેસ અધિવેશનના પ્રમુખ કોણ બન્યા હતા ?",
            "a": [
                {
                    "option": "સુભાષચંદ્ર બોઝ",
                    "correct": true
                },
                {
                    "option": "ગાંધીજી",
                    "correct": false
                },
                {
                    "option": "જવાહરલાલ નહેરુ",
                    "correct": false
                },
                {
                    "option": "મોતીલાલ નહેરુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુભાષચંદ્ર બોઝ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "સુભાષચંદ્ર બોઝે 'કામચલાઉ સરકાર'ની સ્થાપના કયાં કરી ? ",
            "a": [
                {
                    "option": "બર્લિનમાં",
                    "correct": false
                },
                {
                    "option": "રંગૂનમાં",
                    "correct": false
                },
                {
                    "option": "ટોકિયોમાં",
                    "correct": false
                },
                {
                    "option": "સિંગાપુરમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિંગાપુરમાં</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "સુભાષચંદ્ર બોઝે કઈ પ્રતિજ્ઞા લીધી હતી ?",
            "a": [
                {
                    "option": "'હું ગુલામ હિંદુસ્તાનમાં પગ મૂકીશ નહિ.'",
                    "correct": true
                },
                {
                    "option": "'હું આઝાદી મેળવવા તમામ પ્રયત્નો કરીશ.'",
                    "correct": false
                },
                {
                    "option": "'હું ભારતમાંથી બ્રિટિશ સરકારને ભગાડીને જ રહીશ.'",
                    "correct": false
                },
                {
                    "option": "'હું માતૃભૂમિની ગુલામીની ઝંઝીરો તોડીને જ રહીશ.'",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 'હું ગુલામ હિંદુસ્તાનમાં પગ મૂકીશ નહિ.'</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "ભારતમાં રાષ્ટ્રીય જાગૃતિનાં પરિબળો ખાસ કરીને ક્યારે વિકાસ પામ્યા ?",
            "a": [
                {
                    "option": "ઇ.સ. 1853ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1856ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1851ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1857ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1857ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "આપણા દેશમાં આપણું રાજ્ય એટલે શું ?",
            "a": [
                {
                    "option": "સ્વરાજ્ય",
                    "correct": true
                },
                {
                    "option": "સુરાજ્ય",
                    "correct": false
                },
                {
                    "option": "સમરસરાજય",
                    "correct": false
                },
                {
                    "option": "સમરાજ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વરાજ્ય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "અંગેજો ભારતમાંથી કાચો માલ ક્યાં લઈ જતા હતા ?",
            "a": [
                {
                    "option": "ફ્રાંસ",
                    "correct": false
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": true
                },
                {
                    "option": "અમેરિકા",
                    "correct": false
                },
                {
                    "option": "જર્મની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇંગ્લૅન્ડ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ભારતમાં અંગ્રેજ શાસન દરમ્યાન ક્યા માલ ઉપર વધુ જકાત લેવામાં આવતી હતી ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડમાં ઉત્પન્ન થયેલા",
                    "correct": false
                },
                {
                    "option": "અમેરિમાં ઉત્પન્ન થયેલા",
                    "correct": false
                },
                {
                    "option": "હિંદમાં ઉત્પન્ન થયેલા",
                    "correct": true
                },
                {
                    "option": "પોર્ટુગલમાં ઉત્પન્ન થયેલા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિંદમાં ઉત્પન્ન થયેલા</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "'બંગાળ બ્રિટિશ ઇન્ડિયન સોસાયટી' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોલકાતામાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "'બૉમ્બે એસોસિયેશન' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": true
                },
                {
                    "option": "પૂણેમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુંબઈમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "'મદ્રાસ નેટિવ સભા' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": true
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચેન્નાઈમાં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "'ઇન્ડિયન એસોસિયેશન' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોલકાતામાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "'સાર્વજનિક સભા' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": true
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂણેમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "હિંદી રાષ્ટ્રીય મહાસભાની સ્થાપના ક્યારે કરવામાં આવી ?",
            "a": [
                {
                    "option": "ઈ.સ. 1888માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1885માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1890માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1895માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1885માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "હિંદી રાષ્ટ્રીય મહાસભાના પ્રથમ અધિવેશનમાં કેટલાં પ્રતિનિધિઓએ હાજરી આપી હતી ? ",
            "a": [
                {
                    "option": "78",
                    "correct": false
                },
                {
                    "option": "72",
                    "correct": true
                },
                {
                    "option": "75",
                    "correct": false
                },
                {
                    "option": "80",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 72</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "હિંદી રાષ્ટ્રીય મહાસભાની રજૂઆતને લીધે સરકારે શાના પરના નિયંત્રણો દૂર કર્યા ?",
            "a": [
                {
                    "option": "અહેવાલો પરનાં",
                    "correct": false
                },
                {
                    "option": "અરજીઓ પરનાં",
                    "correct": false
                },
                {
                    "option": "અખબારો પરનાં",
                    "correct": true
                },
                {
                    "option": "એખલાસ પરનાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અખબારો પરનાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "લોર્ડ કર્ઝને ઓરિસ્સા અને બિહાર પ્રદેશને બદલે બંગાળાના કયા ધર્મનીબહુમતી ધરાવતા વિસ્તારને અલગ કર્યો ? ",
            "a": [
                {
                    "option": "હિંદુ",
                    "correct": false
                },
                {
                    "option": "પારસી",
                    "correct": false
                },
                {
                    "option": "શીખ",
                    "correct": false
                },
                {
                    "option": "મુસ્લિમ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુસ્લિમ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "બંગાળના ભાગલા રદ કરવા માટેના આંદોલનને કયા નામે ઓળખવામાં આવે છે ?",
            "a": [
                {
                    "option": "બંગભંગ આંદોલન",
                    "correct": true
                },
                {
                    "option": "રંગભંગ આંદોલન",
                    "correct": false
                },
                {
                    "option": "મીઠાભંગ આંદોલન",
                    "correct": false
                },
                {
                    "option": "અંગભંગ આંદોલન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંગભંગ આંદોલન</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "અંગ્રેજોને કઈ સાલમાં બંગાળના ભાગલા રદ કરવાની ફરજ પડી ?",
            "a": [
                {
                    "option": "ઈ.સ. 1906માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1911માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1905માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1895માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1911માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "બંગાળામાં ઈ.સ. 1907માં અનુક્રમે કેટલી રાષ્ટ્રીય માધ્યમિક શાળાઓ અને રાષ્ટ્રીય પ્રાથમિક શાળાઓ શરૂ કરવામાં આવી ?",
            "a": [
                {
                    "option": "205,  350",
                    "correct": false
                },
                {
                    "option": "25,  350",
                    "correct": false
                },
                {
                    "option": "25,  300",
                    "correct": true
                },
                {
                    "option": "35,  300",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 25,300</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "બંગાળના ભાગલાની ચળવળનું લક્ષણ કયું હતું ?",
            "a": [
                {
                    "option": "સ્વદેશી માલનો વેપાર કરવો.",
                    "correct": false
                },
                {
                    "option": "વિદેશી માલનો બહિષ્કાર",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય શિક્ષણ લેવું",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "'લાલ, બાલ, પાલ'ની ત્રિપુટીથી કોણ ઓળખાતુ હતું ?",
            "a": [
                {
                    "option": "લાલા લજપતરાય, બાળ ગંગાધર, બિપિનચંદ્ર પાલ",
                    "correct": true
                },
                {
                    "option": "લાલા લજપતરાય, બાળ ગંગાધર, જતિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "લાલા હરદયાળ,  બાળ ગંગાધર, બિપિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "લાલા હરદયાળ, બાળ ગંગાધર, જતિનચંદ્ર પાલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાલા લજપતરાય, બાળ ગંગાધર, બિપિનચંદ્ર પાલ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "લોકમાન્ય ટિળકે કયા બે ઉત્સવો ઊજવવાનું શરૂ કર્યું ?",
            "a": [
                {
                    "option": "ગણેશ ચતુર્થી અને શિવાજી જયંતિ",
                    "correct": true
                },
                {
                    "option": "દિવાળી અને નવરાત્રી",
                    "correct": false
                },
                {
                    "option": "ગણેશ ચતુર્થી અને નવરાત્રી",
                    "correct": false
                },
                {
                    "option": "જન્માષ્ટમી અને હનુમાન જયંતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગણેશ ચતુર્થી અને શિવાજી જયંતિ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "લોકમાન્ય ટિળકે મરાઠી ભાષામાં કયું વર્તમાનપત્ર શરૂ કર્યું ?",
            "a": [
                {
                    "option": "કેસરી",
                    "correct": true
                },
                {
                    "option": "મરાઠા",
                    "correct": false
                },
                {
                    "option": "વંદેમાતરમ્",
                    "correct": false
                },
                {
                    "option": "પંજાબી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેસરી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "લોકમાન્ય ટિળકે અંગ્રેજી ભાષામાં કયું વર્તમાનપત્ર શરૂ કર્યું ?",
            "a": [
                {
                    "option": "કેસરી",
                    "correct": false
                },
                {
                    "option": "મરાઠા",
                    "correct": true
                },
                {
                    "option": "વંદેમાતરમ્",
                    "correct": false
                },
                {
                    "option": "પંજાબી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મરાઠા</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "લાલા લજપરાયે કયા વર્તમાનપત્ર શરૂ કર્યા ?",
            "a": [
                {
                    "option": "કેસરી અને મરાઠા",
                    "correct": false
                },
                {
                    "option": "મરાઠા અને વંદેમાતરમ્",
                    "correct": false
                },
                {
                    "option": "ધી પંજાબી અને ધી પ્યુપિલ",
                    "correct": true
                },
                {
                    "option": "પંજાબી અને મરાઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધી પંજાબી અને ધી પ્યુપિલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 58
            "q": "બિપિનચંદ્ર પાલે અનુક્રમે કયું સામયિક અને વર્તમાનપત્ર શરૂ કર્યું ?",
            "a": [
                {
                    "option": "કેસરી અને મરાઠા",
                    "correct": false
                },
                {
                    "option": "ન્યૂ ઇન્ડિયા અને વંદેમાતરમ્",
                    "correct": true
                },
                {
                    "option": "ધી પંજાબી અને ધી પ્યુપિલ",
                    "correct": false
                },
                {
                    "option": "પંજાબી અને મરાઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ન્યૂ ઇન્ડિયા અને વંદેમાતરમ્</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 59
            "q": "ઇ.સ. 1916માં પૂનામાં કોણે 'ઇન્ડિયન હોમરૂલ લીગ'ની સ્થાપના કરી ?",
            "a": [
                {
                    "option": "બાળ ગંગાધર ટીળકે",
                    "correct": true
                },
                {
                    "option": "લજપતરાયે",
                    "correct": false
                },
                {
                    "option": "ઍની બેસન્ટે",
                    "correct": false
                },
                {
                    "option": "બિપિનચંદ્ર પાલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાળ ગંગાધર ટીળકે</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "ઇ.સ. 1916માં મદ્રાસમાં કોણે 'હોમરૂલ લીગ'ની સ્થાપના કરી ?",
            "a": [
                {
                    "option": "બાળ ગંગાધર ટીળકે",
                    "correct": false
                },
                {
                    "option": "લજપતરાયે",
                    "correct": false
                },
                {
                    "option": "ઍની બેસન્ટે",
                    "correct": true
                },
                {
                    "option": "બિપિનચંદ્ર પાલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍની બેસન્ટે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 61
            "q": "હોમરૂલ લીગની નામની સંસ્થાનો હેતું શું હતો ?",
            "a": [
                {
                    "option": "બંધારણીય માર્ગે ગૃહસ્વરાજ્ય મેળવવાનો",
                    "correct": true
                },
                {
                    "option": "ગેરબંધારણીય માર્ગે ગૃહસ્વરાજ્ય મેળવવાનો",
                    "correct": false
                },
                {
                    "option": "ઝઘડા દ્વારા ગૃહસ્વરાજ્ય મેળવવાનો",
                    "correct": false
                },
                {
                    "option": "ભાઈચારા દ્વારા ગૃહસ્વરાજ્ય મેળવવાનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંધારણીય માર્ગે ગૃહસ્વરાજ્ય મેળવવાનો </p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 62
            "q": "ઍની બેસન્ટે બ્રિટિશ સરકારને હિન્દને શું આપવા અનુરોધ કર્યો ?",
            "a": [
                {
                    "option": "જવાબદાર લોકો અને ગૃહસ્વરાજ્ય",
                    "correct": false
                },
                {
                    "option": "જવાબદાર રાજ્યતંત્ર અને ગૃહસ્વરાજ્ય",
                    "correct": true
                },
                {
                    "option": "જવાબદાર ભાષા અને ગૃહસ્વરાજ્ય",
                    "correct": false
                },
                {
                    "option": "જવાબદાર રાજા અને વિદેશીરાજ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જવાબદાર રાજ્યતંત્ર અને ગૃહસ્વરાજ્ય</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 63
            "q": "સુભાષચંદ્ર બોઝની માતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "પદ્માવતી",
                    "correct": false
                },
                {
                    "option": "માયાવતી",
                    "correct": false
                },
                {
                    "option": "પ્રભાવતી",
                    "correct": true
                },
                {
                    "option": "મહાપ્રજાપતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રભાવતી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 64
            "q": "સુભાષચંદ્ર બોઝના પિતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "જનકનાથ",
                    "correct": false
                },
                {
                    "option": "જયદત્તનાથ",
                    "correct": false
                },
                {
                    "option": "જશવંતનાથ",
                    "correct": false
                },
                {
                    "option": "જાનકીનાથ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાનકીનાથ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 65
            "q": "સુભાષચંદ્ર બોઝ કેટલી વખત રાજકીય કેદી તરીકે પકડાયા ?",
            "a": [
                {
                    "option": "11",
                    "correct": true
                },
                {
                    "option": "8",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "12",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 11</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 66
            "q": "આઝાદ હિંદ ફોજે શા કારણે પીછેહઠ કરી ?",
            "a": [
                {
                    "option": "સૈનિકો મરવાના અને ભારે વરસાદને કારણે",
                    "correct": false
                },
                {
                    "option": "પુરવઠાની તંગી અને ભારે વરસાદને કારણે",
                    "correct": true
                },
                {
                    "option": "પુરવઠાની તંગી અને લોકોની નાકામી કારણે",
                    "correct": false
                },
                {
                    "option": "સૈનિકો મરવાના અને લોકોની નાકામી કારણે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુરવઠાની તંગી અને ભારે વરસાદને કારણે</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 67
            "q": "સુભાષચંદ્ર બોઝનું મૃત્યું કઈ રીતે થયું ?",
            "a": [
                {
                    "option": "અંગ્રેજોની ગોળીથી",
                    "correct": false
                },
                {
                    "option": "પોતાની ગોળીથી",
                    "correct": false
                },
                {
                    "option": "વિમાન દુર્ઘટનાથી",
                    "correct": true
                },
                {
                    "option": "ટ્રક અકસ્માતથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિમાન દુર્ઘટનાથી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 68
            "q": "જાપાન સરકાર સાથે કોને મતભેદ થતા આઝાદ હિંદ ફોઝમાંથી મોહનસિંગે રાજીનામું મૂક્યું ?",
            "a": [
                {
                    "option": "રાસબિહારી બોઝને",
                    "correct": true
                },
                {
                    "option": "સુભાષચંદ્ર બોઝને",
                    "correct": false
                },
                {
                    "option": "લાલા લજપતરાયને",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાસબિહારી બોઝને</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 69
            "q": "સુભાષચંદ્ર બોઝે ભારતને કયો મંત્ર આપ્યો ?",
            "a": [
                {
                    "option": "'ઇન્કલાબ ઝિંદાબાદ'",
                    "correct": false
                },
                {
                    "option": "'ચલો દિલ્લી'",
                    "correct": false
                },
                {
                    "option": "'વંદે ભારત'",
                    "correct": false
                },
                {
                    "option": "'જય હિંદ'",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 'જય હિંદ'</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 70
            "q": "'તુમ મુઝે ખૂન દો, મૈં તુમ્હે આઝાદી દૂંગા.' આ સૂત્ર કોણે આપ્યું હતું ?",
            "a": [
                {
                    "option": "જાપાનની સરકારે",
                    "correct": false
                },
                {
                    "option": "રાસબિહારી બોઝે",
                    "correct": false
                },
                {
                    "option": "કૅપ્ટન મોહનસિંગે",
                    "correct": false
                },
                {
                    "option": "સુભાષચંદ્ર બોઝે",
                    "correct": true
                } // no
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુભાષચંદ્ર બોઝે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 71
            "q": "સુભાષચંદ્ર બોઝે આઝાદ હિંદ ફોજમાં કેટલી લશ્કરી ટુકડીઓ ઊભી કરેલી ?",
            "a": [
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 72
            "q": "સુભાષચંદ્ર બોઝે આઝાદ હિંદ ફોજમાં એક સ્ત્રી લશ્કરી ટુકડી ઊભી કરી તેનું નામ શું આપ્યું હતું ?",
            "a": [
                {
                    "option": "ઝાંસીની રાણી",
                    "correct": true
                },
                {
                    "option": "લક્ષ્મીબાઈ",
                    "correct": false
                },
                {
                    "option": "ઝામ રાણી",
                    "correct": false
                },
                {
                    "option": "જોધા બાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઝાંસીની રાણી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here
    ]
};
