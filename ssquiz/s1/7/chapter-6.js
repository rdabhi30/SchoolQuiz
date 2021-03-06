// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 6  મધ્યયુગીન શાસનવ્યવસ્થા અને સ્થાપત્ય",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "7",
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
            "q": "ગુજરાતના રાજા કુમારપાળની પસંદગી કોણે કરેલી ?",
            "a": [
                {
                    "option": "તેના પિતાએ",
                    "correct": false
                },
                {
                    "option": "તેના દાદાએ",
                    "correct": false
                },
                {
                    "option": "મંત્રીમંડળે",
                    "correct": true
                },
                {
                    "option": "લશ્કરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મંત્રીમંડળે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "જૈન આચાર્ય હેમચંદ્રાચાર્યે કયો વ્યાકરણગ્રંથ રચ્યો હતો ?",
            "a": [
                {
                    "option": "સિદ્ધહેમ શબ્દાનુશાસન",
                    "correct": true
                },
                {
                    "option": "શિશુપાલવધ",
                    "correct": false
                },
                {
                    "option": "નૈષધચરિત",
                    "correct": false
                },
                {
                    "option": "કથાસરિતસાગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિદ્ધહેમ શબ્દાનુશાસન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ખજૂરાહોનું મંદિર ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "મધ્યપ્રદેશમાં",
                    "correct": true
                },
                {
                    "option": "મહારાષ્ટ્રમાં",
                    "correct": false
                },
                {
                    "option": "ગુજરાતમાં",
                    "correct": false
                },
                {
                    "option": "કર્ણાટકમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મધ્યપ્રદેશમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "શાહબુદ્દીન કઈ રાણી સામે હારી ગયો હતો ?",
            "a": [
                {
                    "option": "રુપમતી",
                    "correct": false
                },
                {
                    "option": "ઉદયમતી",
                    "correct": false
                },
                {
                    "option": "મીનળદેવી",
                    "correct": false
                },
                {
                    "option": "નાયિકાદેવી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાયિકાદેવી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "મોઢેરાનું સૂર્યમંદિર ગુજરાતના ક્યા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "પાટણ જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "મહેસાણા જિલ્લામાં",
                    "correct": true
                },
                {
                    "option": "બનાસકાંઠા જિલ્લામાં",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ જિલ્લામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહેસાણા જિલ્લામાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "દિલ્લીમાં ગુલામ વંશનો પ્રથમ સુલતાન કોણ હતો ?",
            "a": [
                {
                    "option": "બલ્બન",
                    "correct": false
                },
                {
                    "option": "કુત્બુદ્દીન ઐબક",
                    "correct": true
                },
                {
                    "option": "ઇલ્તુત્મિશ",
                    "correct": false
                },
                {
                    "option": "રઝિયા સુલતાના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુત્બુદ્દીન ઐબક</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કશ્મીરના રાજા યશસ્કરની પસંદગી કોણે કરી હતી ?",
            "a": [
                {
                    "option": "મંત્રીસભાના સભ્યોએ",
                    "correct": false
                },
                {
                    "option": "તેના પિતાએ",
                    "correct": false
                },
                {
                    "option": "બ્રાહ્મણોની મંડળીએ",
                    "correct": true
                },
                {
                    "option": "સેનાપતિએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બ્રાહ્મણોની મંડળીએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગ્રામશાસનમાં ન્યાય અંગેનો ભાર કોના શિરે હતો ?",
            "a": [
                {
                    "option": "રાજાના પ્રધાન",
                    "correct": false
                },
                {
                    "option": "રાજા",
                    "correct": false
                },
                {
                    "option": "ન્યાયાધીશ",
                    "correct": false
                },
                {
                    "option": "ગામના મુખી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગામના મુખી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "મહાકાવ્ય 'શિશુપાલવધ'ની રચના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "મહાકવિ કાલિદાસે",
                    "correct": false
                },
                {
                    "option": "મહાકવિ બાણભટ્ટે",
                    "correct": false
                },
                {
                    "option": "મહાકવિ ભવભૂતિએ",
                    "correct": false
                },
                {
                    "option": "મહાકવિ માઘે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહાકવિ માઘે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "'નૈષધચરિત' નામના મહાકાવ્યની રચના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "કવિ કલ્હણે",
                    "correct": false
                },
                {
                    "option": "કવિ શ્રીહર્ષે",
                    "correct": true
                },
                {
                    "option": "કવિ બિલ્હણે",
                    "correct": false
                },
                {
                    "option": "કવિ વિશાખદત્તે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કવિ શ્રીહર્ષે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ઇલોરામાં કયા ધર્મની ગુફાઓ છે ?",
            "a": [
                {
                    "option": "હિંદુ",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્રણેય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "'ઉત્તરરામચરિત' નામના નાટકની રચના કોણે કરી છે ?",
            "a": [
                {
                    "option": "ભવભૂતિએ",
                    "correct": true
                },
                {
                    "option": "કાલિદાસે",
                    "correct": false
                },
                {
                    "option": "ભાસે",
                    "correct": false
                },
                {
                    "option": "સંત તુલસીદાસે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભવભૂતિએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ઓરિસ્સાના કોણાર્કમાં કયું મંદિર આવેલું છે ?",
            "a": [
                {
                    "option": "સૂર્યમંદિર",
                    "correct": true
                },
                {
                    "option": "કૈલાસ મંદિર",
                    "correct": false
                },
                {
                    "option": "મીનાક્ષી મંદિર",
                    "correct": false
                },
                {
                    "option": "બૃહદેશ્વર મંદિર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂર્યમંદિર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "કશ્મીરમાં કયું મંદિર આવેલું છે ?",
            "a": [
                {
                    "option": "મીનાક્ષી મંદિર",
                    "correct": false
                },
                {
                    "option": "વિરુપાક્ષનું મંદિર",
                    "correct": false
                },
                {
                    "option": "માર્તંડ મંદિર",
                    "correct": true
                },
                {
                    "option": "મહાબોધિ મંદિર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માર્તંડ મંદિર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ગુજરાતમાં સૂર્યમંદિર ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "પાટણમાં",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢમાં",
                    "correct": false
                },
                {
                    "option": "વડનગરમાં",
                    "correct": false
                },
                {
                    "option": "મોઢેરામાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મોઢેરામાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "કૈલાસ મંદિર ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઈલોરાની ગુફાઓમાં",
                    "correct": true
                },
                {
                    "option": "અજંતાની ગુફાઓમાં",
                    "correct": false
                },
                {
                    "option": "ઍલિફન્ટાની ગુફાઓમાં",
                    "correct": false
                },
                {
                    "option": "બાઘની ગુફાઓમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈલોરાની ગુફાઓમાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ભારતમાં રાજપૂત શાસનના છેલ્લા રાજા કોણ હતા ?",
            "a": [
                {
                    "option": "રાજાભોજ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહ",
                    "correct": false
                },
                {
                    "option": "પૃથ્વીરાજ ચૌહાણ",
                    "correct": true
                },
                {
                    "option": "ભીમદેવ સોલંકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૃથ્વીરાજ ચૌહાણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "મદુરાઈમાં કયું પ્રસિદ્ધ મંદિર આવેલું છે ?",
            "a": [
                {
                    "option": "વિરુપાક્ષનું મંદિર",
                    "correct": false
                },
                {
                    "option": "બૃહદેશ્વર મંદિર",
                    "correct": false
                },
                {
                    "option": "મીનાક્ષી મંદિર",
                    "correct": true
                },
                {
                    "option": "ખજૂરાહોનું મંદિર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીનાક્ષી મંદિર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "મહંમદ ગઝની સોમનાથ મંદિર ઉપર ચડી આવ્યો ત્યારે ગુજરાતમાં કયા રાજાનું શાસન હતું ?",
            "a": [
                {
                    "option": "મૂળરાજ સોલંકીનું",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ સોલંકીનું",
                    "correct": true
                },
                {
                    "option": "વનરાજ ચાવડાનું",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભીમદેવ સોલંકીનું</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "મહંમદ ગઝનીના અવસાન પછી ગઝની પ્રાંત ઉપર કોનું શાસન સ્થપાયું ?",
            "a": [
                {
                    "option": "શાહબુદ્દીન ઘોરીનું",
                    "correct": true
                },
                {
                    "option": "મોહમ્મદ તઘલખનું",
                    "correct": false
                },
                {
                    "option": "અલાઉદ્દીન ખીલજીનું",
                    "correct": false
                },
                {
                    "option": "બાબરનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાહબુદ્દીન ઘોરીનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "'હિતોપદેશ' નામે વાર્તાસંગ્રહની રચના કોણે કરી હતી?",
            "a": [
                {
                    "option": "ભવભૂતિએ",
                    "correct": false
                },
                {
                    "option": "નારાયણ પંડિતે",
                    "correct": true
                },
                {
                    "option": "હેમચંદ્રાચાર્યે",
                    "correct": false
                },
                {
                    "option": "વિષ્ણુશર્માએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નારાયણ પંડિતે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 22
            "q": "વિશાખાદત્તે કઈ કૃતિનું નિર્માણ કર્યુ હતું ?",
            "a": [
                {
                    "option": "મુદ્રારાક્ષસ",
                    "correct": true
                },
                {
                    "option": "રાજતરંગિણી",
                    "correct": false
                },
                {
                    "option": "વિક્રમાંકદેવ ચરિત્ર",
                    "correct": false
                },
                {
                    "option": "કથાસરિતસાગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુદ્રારાક્ષસ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "કલ્હણે કઈ કૃતિનું નિર્માણ કર્યુ હતું ?",
            "a": [
                {
                    "option": "મુદ્રારાક્ષસ",
                    "correct": false
                },
                {
                    "option": "રાજતરંગિણી",
                    "correct": true
                },
                {
                    "option": "વિક્રમાંકદેવ ચરિત્ર",
                    "correct": false
                },
                {
                    "option": "કથાસરિતસાગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજતરંગિણી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "બિલ્હણે કઈ કૃતિનું નિર્માણ કર્યુ હતું ?",
            "a": [
                {
                    "option": "પ્રબોધચિંતામણિ",
                    "correct": false
                },
                {
                    "option": "રાજતરંગિણી",
                    "correct": false
                },
                {
                    "option": "વિક્રમાંકદેવ ચરિત્ર",
                    "correct": true
                },
                {
                    "option": "કથાસરિતસાગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિક્રમાંકદેવ ચરિત્ર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 25
            "q": "સોમદેવે કઈ કૃતિનું નિર્માણ કર્યુ હતું ?",
            "a": [
                {
                    "option": "પ્રબોધચિંતામણિ",
                    "correct": false
                },
                {
                    "option": "રાજતરંગિણી",
                    "correct": false
                },
                {
                    "option": "પૃથ્વીરાજ રાસો",
                    "correct": false
                },
                {
                    "option": "કથાસરિતસાગર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કથાસરિતસાગર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 26
            "q": "મેરુતુંગે કઈ કૃતિનું નિર્માણ કર્યુ હતું ?",
            "a": [
                {
                    "option": "પ્રબોધચિંતામણિ",
                    "correct": true
                },
                {
                    "option": "રાજતરંગિણી",
                    "correct": false
                },
                {
                    "option": "પૃથ્વીરાજ રાસો",
                    "correct": false
                },
                {
                    "option": "કથાસરિતસાગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રબોધચિંતામણિ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 27
            "q": "જગન્નાથપુરીનું મંદિર ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "મોઢેરામાં",
                    "correct": false
                },
                {
                    "option": "ભુવનેશ્વરમાં",
                    "correct": true
                },
                {
                    "option": "લખનૌમાં",
                    "correct": false
                },
                {
                    "option": "નાગપુરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભુવનેશ્વરમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "દક્ષિણ ભારતના મંદિરોમાં ઊંચા ભવ્ય પ્રવેશદ્વાર ક્યા નામે જાણીતા છે ?",
            "a": [
                {
                    "option": "ગોપાલમ્",
                    "correct": false
                },
                {
                    "option": "ગોવર્ધનમ્",
                    "correct": false
                },
                {
                    "option": "ગોપુરમ્",
                    "correct": true
                },
                {
                    "option": "દૂન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોપુરમ્</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 29
            "q": "દિલ્લી ઉપર મુસ્લિમ સલ્તનતની શરૂઆત કોણે કરી ?",
            "a": [
                {
                    "option": "શાહબુદ્દીન ઘોરીએ",
                    "correct": true
                },
                {
                    "option": "મોહમ્મદ તઘલખએ",
                    "correct": false
                },
                {
                    "option": "કુત્બુદ્દીન ઐબકે",
                    "correct": false
                },
                {
                    "option": "મહંમદ ગઝનીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાહબુદ્દીન ઘોરીએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "પૃથ્વીરાજ ચૌહાણ અને શાહબુદ્દીન ઘોરી વચ્ચેની લડાઈમાં છેલ્લે જીત કોની થઈ ?",
            "a": [
                {
                    "option": "પૃથ્વીરાજ ચૌહાણની",
                    "correct": false
                },
                {
                    "option": "શાહબુદ્દીન ઘોરીની",
                    "correct": true
                },
                {
                    "option": "બન્નેએ સમાધાન કર્યું",
                    "correct": false
                },
                {
                    "option": "ઉપરના એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાહબુદ્દીન ઘોરીની </p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};
