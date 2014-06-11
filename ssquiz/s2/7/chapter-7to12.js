// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પાઠ-7 થી 12",
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
            "q": "જે કોઈ વ્યક્તિ કોઈ પણ માલ, વસ્તુ કે સેવાની પૈસા આપીને ખરીદી કરે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "દલાલ",
                    "correct": false
                },
                {
                    "option": "ગ્રાહક",
                    "correct": true
                },
                {
                    "option": "વિક્રેતા",
                    "correct": false
                },
                {
                    "option": "ઉત્પાદક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગ્રાહક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ભારતમાં ખેતપેદાશોથી તૈયાર થતી વસ્તુઓ પર કયો માર્કો લગાડવામાં આવે છે ?",
            "a": [
                {
                    "option": "ISIનો",
                    "correct": false
                },
                {
                    "option": "ISOનો",
                    "correct": false
                },
                {
                    "option": "એગમાર્કનો",
                    "correct": true
                },
                {
                    "option": "BISનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  એગમાર્કનો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ભારતમાં ઘરવપરાશમાં ઉપયોગી ચીજવસ્તુઓ પર કયો માર્કો લગાડવામાં આવે છે ?",
            "a": [
                {
                    "option": "ISOનો",
                    "correct": false
                },
                {
                    "option": "ISIનો",
                    "correct": true
                },
                {
                    "option": "BISનો",
                    "correct": false
                },
                {
                    "option": "એગમાર્કનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ISIનો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ભારતમાં શાકાહારી ખાદ્યસામગ્રી પર કયા રંગનું ચિન્હ હોય છે ?",
            "a": [
                {
                    "option": "લાલ",
                    "correct": false
                },
                {
                    "option": "લીલા",
                    "correct": true
                },
                {
                    "option": "પીળા",
                    "correct": false
                },
                {
                    "option": "વાદળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લીલા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ભારતમાં માંસાહારી ખાદ્યસામગ્રી પર કયા રંગનું ચિન્હ હોય છે ?",
            "a": [
                {
                    "option": "લાલ",
                    "correct": true
                },
                {
                    "option": "વાદળી",
                    "correct": false
                },
                {
                    "option": "લીલા",
                    "correct": false
                },
                {
                    "option": "પીળા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાલ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ભારતમાં ઊનની બનાવટો અને પોશાકની વસ્તુ ઉપર કઈ નિશાની હોય છે ?",
            "a": [
                {
                    "option": "એગમાર્કનું",
                    "correct": false
                },
                {
                    "option": "વુલમાર્કનું",
                    "correct": true
                },
                {
                    "option": "BIS હોલમાર્કનું",
                    "correct": false
                },
                {
                    "option": "ISIનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વુલમાર્કનું</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ભારતમાં સોનાચાંદીની બનાવટો ઉપર શાની નિશાની હોય છે ?",
            "a": [
                {
                    "option": "BIS હોલમાર્કનું",
                    "correct": true
                },
                {
                    "option": "ISIનું",
                    "correct": false
                },
                {
                    "option": "એગમાર્કનું",
                    "correct": false
                },
                {
                    "option": "વુલમાર્કનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચોજવાબ:  BIS હોલમાર્કનું </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "જે કોઈ વ્યક્તિ કોઈ પણ માલ, વસ્તુ કે સેવાને પૈસા લઈને વેચે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "દલાલ",
                    "correct": false
                },
                {
                    "option": "ગ્રાહક",
                    "correct": false
                },
                {
                    "option": "વિક્રેતા",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વિક્રેતા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ગ્રાહકને શું માગવાનો અધિકાર છે ?",
            "a": [
                {
                    "option": "ભાડું",
                    "correct": false
                },
                {
                    "option": "વસ્તુની ખરીદીનું બીલ",
                    "correct": true
                },
                {
                    "option": "કિંમત",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વસ્તુની ખરીદીનું બીલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ટી.વી. ઉપર ગ્રાહક હિત માટે આવતી જાહેરાત કઈ છે ?",
            "a": [
                {
                    "option": "'ઉઠો ગ્રાહક ઉઠો'",
                    "correct": false
                },
                {
                    "option": "'ગ્રાહક રાજા'",
                    "correct": false
                },
                {
                    "option": "'જાગો ગ્રાહક જાગો'",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'જાગો ગ્રાહક જાગો'</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 11
            "q": "નીચેનામાંથી ગ્રાહકને કયો અધિકાર છે ?",
            "a": [
                {
                    "option": "આપેલા બધા",
                    "correct": true
                },
                {
                    "option": "પૈસાનું પૂરેપૂરૂં વળતર મેળવવાનો",
                    "correct": false
                },
                {
                    "option": "વસ્તુની જાણકારી મેળવવાનો",
                    "correct": false
                },
                {
                    "option": "વસ્તુની પસંદગી કરવાનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "બિલ લેવાથી અમુક રકમ સરકારમાં જાય છે, તેને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "ટેકસ્ટ",
                    "correct": false
                },
                {
                    "option": "ટૅક્સ",
                    "correct": true
                },
                {
                    "option": "ટેક્ષી",
                    "correct": false
                },
                {
                    "option": "ટેલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટૅક્સ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "2005 માં ઑક્ટોબરમાં ભારત સરકારે માહિતી મેળવામાં માટે એક કાયદો ઘડ્યો તેનું ટૂંકુ નામ શું છે ?",
            "a": [
                {
                    "option": "R.T.E.",
                    "correct": false
                },
                {
                    "option": "R.T.O.",
                    "correct": false
                },
                {
                    "option": "R.T.I.",
                    "correct": true
                },
                {
                    "option": "R.F.O.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: R.T.I.</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ગ્રાહક સુરક્ષા માટે કઈ કક્ષાએ ફરિયાદ કરી શકાય ?",
            "a": [
                {
                    "option": "જિલ્લા ફોરમમાં",
                    "correct": false
                },
                {
                    "option": "રાજ્ય કમિશનમાં",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય કમિશનમાં",
                    "correct": false
                },
                {
                    "option": "આપેલા બધામાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધામાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "રૂ. 20 લાખથી ઓછાની ફરિયાદ ગ્રાહક ક્યાં કરી શકે ?",
            "a": [
                {
                    "option": "જિલ્લા ફોરમમાં",
                    "correct": true
                },
                {
                    "option": "રાજ્ય કમિશનમાં",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય કમિશનમાં",
                    "correct": false
                },
                {
                    "option": "તાલુકા ફોરમમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા ફોરમમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "રૂ. 20 લાખથી 1 કરોડની ફરિયાદ ગ્રાહક ક્યાં કરી શકે ?",
            "a": [
                {
                    "option": "જિલ્લા ફોરમમાં",
                    "correct": false
                },
                {
                    "option": "રાજ્ય કમિશનમાં",
                    "correct": true
                },
                {
                    "option": "રાષ્ટ્રીય કમિશનમાં",
                    "correct": false
                },
                {
                    "option": "તાલુકા ફોરમમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્ય કમિશનમાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "રૂ. 1 કરોડ કરતાં વધુની ફરિયાદ ગ્રાહક ક્યાં કરી શકે ?",
            "a": [
                {
                    "option": "જિલ્લા ફોરમમાં",
                    "correct": false
                },
                {
                    "option": "રાજ્ય કમિશનમાં",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય કમિશનમાં",
                    "correct": true
                },
                {
                    "option": "તાલુકા ફોરમમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાષ્ટ્રીય કમિશનમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "વસ્તુ ખરાબ નીકળે તો આખેઆખી વસ્તુ દુકાનદાર ક્યારે બદલી આપે ?",
            "a": [
                {
                    "option": "ગેરંટી કાર્ડ હોય તો",
                    "correct": true
                },
                {
                    "option": "વોરંટી કાર્ડ હોય તો",
                    "correct": false
                },
                {
                    "option": "ગેસ કાર્ડ હોય તો",
                    "correct": false
                },
                {
                    "option": "વોટર કાર્ડ હોય તો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગેરંટી કાર્ડ હોય તો</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "વસ્તુ બગડી જાય તો દુકાનદાર રીપેરીંગ ક્યારે કરી આપે ?",
            "a": [
                {
                    "option": "પાન કાર્ડ હોય તો",
                    "correct": false
                },
                {
                    "option": "વોરંટી કાર્ડ હોય તો",
                    "correct": true
                },
                {
                    "option": "ગેસ કાર્ડ હોય તો",
                    "correct": false
                },
                {
                    "option": "વોટર કાર્ડ હોય તો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વોરંટી કાર્ડ હોય તો</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "સોમનાથ મંદિર કયાં આવેલું છે ?",
            "a": [
                {
                    "option": "પોરબંદરનાં પ્રભાસપાટણમાં",
                    "correct": false
                },
                {
                    "option": "ભાવનગરનાં પ્રભાસપાટણમાં",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢનાં પ્રભાસપાટણમાં ",
                    "correct": true
                },
                {
                    "option": "રાજકોટનાં પ્રભાસપાટણમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જૂનાગઢનાં પ્રભાસપાટણમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "સોમનાથ મંદિર કયા પંથનું અત્યંત મહત્ત્વનું મંદિર છે ?",
            "a": [
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                },
                {
                    "option": "શૈવ",
                    "correct": true
                },
                {
                    "option": "વૈષ્ણવ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શૈવ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ભારતમાં કેટલા જ્યોતિર્લિંગો છે ?",
            "a": [
                {
                    "option": "આઠ",
                    "correct": false
                },
                {
                    "option": "દશ",
                    "correct": false
                },
                {
                    "option": "અગિયાર",
                    "correct": false
                },
                {
                    "option": "બાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "દ્વારકાધીશનું મંદિર કઈ નદીના કિનારે આવેલું છે ?",
            "a": [
                {
                    "option": "ભાદર",
                    "correct": false
                },
                {
                    "option": "ગોમતી",
                    "correct": true
                },
                {
                    "option": "ભૂખી",
                    "correct": false
                },
                {
                    "option": "સરસ્વતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગોમતી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "દ્વારકાધીશના મંદિરનું શિખર કેટલા માળનું છે ?",
            "a": [
                {
                    "option": "6",
                    "correct": true
                },
                {
                    "option": "8",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "11",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 6</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "મોઢેરાનું સૂર્યમંદિર કયા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "હિંમતનગર",
                    "correct": false
                },
                {
                    "option": "પાટણ",
                    "correct": false
                },
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "મહેસાણા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહેસાણા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "મોઢેરાનું સૂર્યમંદિર કયા રાજાએ બંધાવ્યું હતું છે ?",
            "a": [
                {
                    "option": "સિદ્ધરાજ જયસિંહે",
                    "correct": false
                },
                {
                    "option": "મૂળરાજ પહેલાએ",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ પહેલાએ",
                    "correct": true
                },
                {
                    "option": "કુમારપાળે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભીમદેવ પહેલાએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગુજરાતમાં રુદ્રમહાલય કયા સ્થળે આવેલો છે ?",
            "a": [
                {
                    "option": "સિદ્ધપુરમાં",
                    "correct": true
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
                    "option": "દ્વારકામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિદ્ધપુરમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "સિદ્ધપુરનો રુદ્રમહાલય બાંધવાની શરૂઆત કોણે કરી હતી ?",
            "a": [
                {
                    "option": "રાણી રૂપમતીએ",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ સોલંકીએ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહે",
                    "correct": false
                },
                {
                    "option": "મૂળરાજ સોલંકીએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મૂળરાજ સોલંકીએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "પાલિતાણા જૈનતીર્થ ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "શેત્રુંજય પર્વત પર",
                    "correct": true
                },
                {
                    "option": "ગિરનાર પર્વત પર",
                    "correct": false
                },
                {
                    "option": "પાવાગઢ પર્વત પર",
                    "correct": false
                },
                {
                    "option": "બરડાના ડુંગર પર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શેત્રુંજય પર્વત પર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "શેત્રુંજય પર્વત કોનું સ્થાન ગણાય છે ?",
            "a": [
                {
                    "option": "મહાવીર સ્વામીનું",
                    "correct": false
                },
                {
                    "option": "ગૌતમબુદ્ધનું",
                    "correct": false
                },
                {
                    "option": "ઋષભદેવજીનું",
                    "correct": true
                },
                {
                    "option": "રામ ભગવાનનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઋષભદેવજીનું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "અમદાવાદની કઈ કલાત્મક જાળી જગવિખ્યાત છે ?",
            "a": [
                {
                    "option": "સીદી સૈયદની જાળી",
                    "correct": true
                },
                {
                    "option": "રાણી રૂપમતીની જાળી",
                    "correct": false
                },
                {
                    "option": "સીદી બશીરની જાળી",
                    "correct": false
                },
                {
                    "option": "રાણી સિપ્રીની જાળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સીદી સૈયદની જાળી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "કાંકરીયા તળાવ કયા નામે ઓળખાતું હતું ?",
            "a": [
                {
                    "option": "કુતુબ મિનાર",
                    "correct": false
                },
                {
                    "option": "કુતુબ તળાવ",
                    "correct": false
                },
                {
                    "option": "હોજે કુતુબ",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હોજે કુતુબ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "કુતુબમિનારના નિર્માણની શરૂઆત કોના સમયમાં થઈ હતી ?",
            "a": [
                {
                    "option": "શ્મ્યુદિન ઈલ્તુત્મિશના",
                    "correct": false
                },
                {
                    "option": "કુતબુદ્દીન ઐબકના",
                    "correct": true
                },
                {
                    "option": "સૈયદ અહમદના",
                    "correct": false
                },
                {
                    "option": "બહાદુર શાહઝફરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કુતબુદ્દીન ઐબકના</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "'ઢાઈ દિન કા ઝોંપડા' એ શું છે ? ",
            "a": [
                {
                    "option": "ઝૂંપડી",
                    "correct": false
                },
                {
                    "option": "મંદિર",
                    "correct": false
                },
                {
                    "option": "મસ્જિદ",
                    "correct": true
                },
                {
                    "option": "મકાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મસ્જિદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "કુતુબમિનાર ક્યાં આવેલો છે ?",
            "a": [
                {
                    "option": "નવી દિલ્લીમાં",
                    "correct": true
                },
                {
                    "option": "આગરામાં",
                    "correct": false
                },
                {
                    "option": "ફતેપુર સિક્રીમાં",
                    "correct": false
                },
                {
                    "option": "હૈદરાબાદમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નવી દિલ્લીમાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "કુતુબમિનાર કેટલા માળનો છે ?",
            "a": [
                {
                    "option": "ચાર",
                    "correct": false
                },
                {
                    "option": "પાંચ",
                    "correct": true
                },
                {
                    "option": "બે",
                    "correct": false
                },
                {
                    "option": "ત્રણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાંચ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ભારતમાં બનેલી સૌથી પહેલી મસ્જિદ કઈ હતી ?",
            "a": [
                {
                    "option": "નગીના મસ્જિદ",
                    "correct": false
                },
                {
                    "option": "જામા મસ્જિદ",
                    "correct": false
                },
                {
                    "option": "ઢાઈ દિન કા ઝોંપડા",
                    "correct": true
                },
                {
                    "option": "મોતી મસ્જિદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઢાઈ દિન કા ઝોંપડા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "બૃહદેશ્વરનું મંદિર ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "છતરપુરમાં",
                    "correct": false
                },
                {
                    "option": "પટ્ટદકલમાં",
                    "correct": false
                },
                {
                    "option": "તુંજાવરમાં",
                    "correct": true
                },
                {
                    "option": "કોણાર્કમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તુંજાવરમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "દિલ્લીનો લાલ કિલ્લો કયા મુઘલ બાદશાહે બંધાવ્યો હતો ?",
            "a": [
                {
                    "option": "હુમાયુએ",
                    "correct": false
                },
                {
                    "option": "જહાંગીરે",
                    "correct": false
                },
                {
                    "option": "શાહજહાંએ",
                    "correct": true
                },
                {
                    "option": "અકબરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શાહજહાંએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "છેલ્લે સોમનાથના નવા મંદિરનું નિર્માણ કઈ સાલમાં થયું ? ",
            "a": [
                {
                    "option": "ઇ.સ. 1951માં",
                    "correct": true
                },
                {
                    "option": "ઇ.સ. 1955માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1960માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1961માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1951માં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "દ્વારકાધીશનું મંદિર ક્યા જિલ્લામાં આવેલું છે ?",
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
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "ભાવનગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જામનગર</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "દ્વારકામાં દ્વારકાધીશ મંદિરનું સ્થાપત્ય કઈ સદીનું છે ?",
            "a": [
                {
                    "option": "બારમી",
                    "correct": false
                },
                {
                    "option": "અગિયારમી",
                    "correct": false
                },
                {
                    "option": "તેરમી",
                    "correct": true
                },
                {
                    "option": "ચૌદમી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તેરમી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "દ્વારકામાં દ્વારકાધીશ મંદિરનો ઘુમ્મટ કેટલા સ્તંભો પર ઊભો છે ?",
            "a": [
                {
                    "option": "54",
                    "correct": false
                },
                {
                    "option": "45",
                    "correct": false
                },
                {
                    "option": "50",
                    "correct": false
                },
                {
                    "option": "60",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 60</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "દ્વારકામાં દ્વારકાધીશના મંદિરની બાજુમાં જ કોનો મઠ છે ?",
            "a": [
                {
                    "option": "શ્રીમદ્ શંકરાચાર્યનો",
                    "correct": true
                },
                {
                    "option": "કાલિદાસનો",
                    "correct": false
                },
                {
                    "option": "સ્વામી વિવેકાનંદનો",
                    "correct": false
                },
                {
                    "option": "દયાનંદ સરસ્વતીનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્રીમદ્ શંકરાચાર્યનો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "દ્વારકામાં દ્વારકાધીશ મંદિરની બાજુમાં આવેલા મઠનું નામ શું છે ?",
            "a": [
                {
                    "option": "સરસ્વતી પીઠ",
                    "correct": false
                },
                {
                    "option": "શારદા પીઠ",
                    "correct": true
                },
                {
                    "option": "લક્ષ્મી પીઠ",
                    "correct": false
                },
                {
                    "option": "પાર્વતી પીઠ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શારદા પીઠ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ગુજરાતનું સૂર્યમંદિર લગભગ કયા વૃત્ત પર આવેલું છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": true
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્કવૃત્ત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "પૂર્વીય ભારતમાં કયું સૂર્યમંદિર આવેલું છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સાના પુરી",
                    "correct": false
                },
                {
                    "option": "ઓરિસ્સાનું કંકણ",
                    "correct": false
                },
                {
                    "option": "ઓરિસ્સાનું કર્ક",
                    "correct": false
                },
                {
                    "option": "ઓરિસ્સાનું કોણાર્ક ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓરિસ્સાનું કોણાર્ક</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "મોઢેરાનું સૂર્યમંદિર ક્યારે બનાવવામાં આવ્યું હતું ?",
            "a": [
                {
                    "option": "ઇ.સ. 1026-27ના અરસામાં",
                    "correct": true
                },
                {
                    "option": "ઇ.સ. 1050-57ના અરસામાં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1062-67ના અરસામાં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1076-77ના અરસામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1026-27ના અરસામાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "મોઢેરાના સૂર્યમંદિરમાં કઈ ઋતુમાં સૂર્યનાં કિરણો આખા સભામંડપને વીંધીને બરાબર ગર્ભગૃહમાં પડે છે ?",
            "a": [
                {
                    "option": "હેમંત અને શિશિરમાં",
                    "correct": false
                },
                {
                    "option": "શરદ અને વર્ષાઋતુમાં",
                    "correct": true
                },
                {
                    "option": "વસંત અને ગ્રીષ્મમાં",
                    "correct": false
                },
                {
                    "option": "વસંત અને શિશિરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શરદ અને વર્ષાઋતુમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "મોઢેરાના સૂર્યમંદિરનું નીચેનામાંથી કયું અંગ છે ?",
            "a": [
                {
                    "option": "અંતરાલ",
                    "correct": false
                },
                {
                    "option": "ગર્ભગૃહ",
                    "correct": false
                },
                {
                    "option": "આપેલા બધા",
                    "correct": true
                },
                {
                    "option": "સભામંડપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "મોઢેરાના સૂર્યમંદિરને કેટલા થાંભલાઓનો આધાર આપવામાં આવ્યો છે ?",
            "a": [
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "7",
                    "correct": false
                },
                {
                    "option": "8",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "મોઢેરા સૂર્યમંદિરના પરિસરમાં પ્રવેશતાં જ ચોકમાં શું છે ?",
            "a": [
                {
                    "option": "કુંડ",
                    "correct": true
                },
                {
                    "option": "સાગર",
                    "correct": false
                },
                {
                    "option": "તળાવ",
                    "correct": false
                },
                {
                    "option": "કડું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુંડ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "શેત્રુંજય પર્વતમાળા કેટલી ઊંચી છે ?",
            "a": [
                {
                    "option": "630 મીટર",
                    "correct": false
                },
                {
                    "option": "603 મીટર",
                    "correct": true
                },
                {
                    "option": "182 મીટર",
                    "correct": false
                },
                {
                    "option": "703 મીટર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 603 મીટર</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "સિદ્ધપુરના રુદ્રમહાલયનું બાંધકામ પૂર્ણ કોણે કરાવેલું ?",
            "a": [
                {
                    "option": "રાણી રૂપમતીએ",
                    "correct": false
                },
                {
                    "option": "ભીમદેવ સોલંકીએ",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહે",
                    "correct": true
                },
                {
                    "option": "મૂળરાજ સોલંકીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિદ્ધરાજ જયસિંહે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "શેત્રુંજય પર્વતમાળાનાં મંદિરોના નિર્માણકાર્યમાં કોણે ફાળો આપ્યો છે ?",
            "a": [
                {
                    "option": "હેમચંદ્રાચાર્યે",
                    "correct": false
                },
                {
                    "option": "સિદ્ધરાજ જયસિંહે",
                    "correct": false
                },
                {
                    "option": "કુમાળપાળે",
                    "correct": false
                },
                {
                    "option": "આપેલા બધાએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધાએ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "સિદીસૈયદની જાળી કોના દ્વારા બનાવામાં આવી હતી ?",
            "a": [
                {
                    "option": "મુઝફરશાહ ત્રીજાના સૈનિક સિદીસૈયદ",
                    "correct": true
                },
                {
                    "option": "મુઝફરશાહ પહેલાના સૈનિક સિદીસૈયદ",
                    "correct": false
                },
                {
                    "option": "મુઝફરશાહ બીજાના સૈનિક સિદીસૈયદ",
                    "correct": false
                },
                {
                    "option": "મુઝફરશાહ ચોથાના સૈનિક સિદીસૈયદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુઝફરશાહ ત્રીજાના સૈનિક સિદીસૈયદ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "કાંકરિયા તળાવ કોણે બંધાવ્યું હતું ?",
            "a": [
                {
                    "option": "અલાઉદ્દીને",
                    "correct": false
                },
                {
                    "option": "ઇલ્તુત્મિશે",
                    "correct": false
                },
                {
                    "option": "કુતુબુદ્દીને",
                    "correct": true
                },
                {
                    "option": "જલાલુદ્દીને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુતુબુદ્દીને</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "કઈ બે શૈલી મળીને દિલ્લી સલ્તનત સમયના સ્થાપત્યનું નિર્માણ થયેલું છે ?",
            "a": [
                {
                    "option": "ભારત અને ઈરાનની",
                    "correct": true
                },
                {
                    "option": "ભારત અને ઈરાકની",
                    "correct": false
                },
                {
                    "option": "ભારત અને ઈઝરાયલની",
                    "correct": false
                },
                {
                    "option": "ઈરાક અને ઈઝરાયલની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભારત અને ઈરાનની</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "કુતુબમિનારનો વિસ્તાર કોણે કર્યો હતો ? ",
            "a": [
                {
                    "option": "ઇત્સિંગે",
                    "correct": false
                },
                {
                    "option": "હ્યુ-એન-ત્સાંગે",
                    "correct": false
                },
                {
                    "option": "ઇલ્તુત્મિશે",
                    "correct": true
                },
                {
                    "option": "ઇઝાયતે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇલ્તુત્મિશે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "ઢાઈ દિન કા ઝોંપડાનું નિર્માણ કોણે કરાવ્યું હતું ?",
            "a": [
                {
                    "option": "અલાઉદ્દીન બલ્બને",
                    "correct": false
                },
                {
                    "option": "ઇલ્તુત્મિશે",
                    "correct": false
                },
                {
                    "option": "કુતુબુદ્દીન ઐબકે",
                    "correct": true
                },
                {
                    "option": "જલાલુદ્દીન ઐબકે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુતુબુદ્દીન ઐબકે</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "બૃહદેશ્વરનું મંદિર કોણે બનાવ્યું હતું ?",
            "a": [
                {
                    "option": "રાજારાજાએ",
                    "correct": false
                },
                {
                    "option": "રાજેન્દ્રએ",
                    "correct": false
                },
                {
                    "option": "રાજરાજે",
                    "correct": true
                },
                {
                    "option": "રાજ્યવર્ધને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજરાજે</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "ચૌલની દ્રવિડ શૈલીમાં ઊંચા પ્રવેશદ્વારને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "બૃહદ્ મુંબઈ",
                    "correct": false
                },
                {
                    "option": "બૃહદેશ્વર",
                    "correct": true
                },
                {
                    "option": "બહરાઈ",
                    "correct": false
                },
                {
                    "option": "બહલોલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૃહદેશ્વર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "બૃહદેશ્વરના મંદિરમાં કેટલા ગોપુરમ્ છે ?",
            "a": [
                {
                    "option": "4",
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
                    "option": "2",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "બૃહદેશ્વરના મંદિરમાં કોની મૂર્તિ છે ?",
            "a": [
                {
                    "option": "નટરાજની",
                    "correct": true
                },
                {
                    "option": "નારાયણની",
                    "correct": false
                },
                {
                    "option": "નટખટની",
                    "correct": false
                },
                {
                    "option": "નારદની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નટરાજની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "અકબરે ક્યાં ફતેપુરની રચના કરી હતી ?",
            "a": [
                {
                    "option": "આગ્રા નજીક સિક્રીના પહાડ પર",
                    "correct": false
                },
                {
                    "option": "કશ્મિરના સિરક્રીક પર",
                    "correct": true
                },
                {
                    "option": "રાજસ્થાનના રણમાં",
                    "correct": false
                },
                {
                    "option": "આગ્રાના સિરકીકમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આગ્રા નજીક સિક્રીના પહાડ પર</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "ફતેપુર સિક્રીનું સૌથી મહત્ત્વનું ભવન કયું છે ?",
            "a": [
                {
                    "option": "જામિયા-મિલિયા કોલેજ",
                    "correct": false
                },
                {
                    "option": "બાબરી મસ્જિદ",
                    "correct": false
                },
                {
                    "option": "જામામસ્જિદ",
                    "correct": true
                },
                {
                    "option": "જામમહેલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જામામસ્જિદ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "જામામસ્જિદનું દક્ષિણ પ્રવેશ દ્વાર કયું છે ?",
            "a": [
                {
                    "option": "બુલંદ દરવાજો",
                    "correct": true
                },
                {
                    "option": "બુલેટ દરવાજો",
                    "correct": false
                },
                {
                    "option": "બુંદેલ દરવાજો",
                    "correct": false
                },
                {
                    "option": "બલદ દરવાજો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બુલંદ દરવાજો</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "લાલ કિલ્લાની અંદરના મહત્ત્વના બાંધકામ કયા છે ?",
            "a": [
                {
                    "option": "આપેલા બધા",
                    "correct": true
                },
                {
                    "option": "મોતી મસ્જિદ",
                    "correct": false
                },
                {
                    "option": "દીવાને આમ",
                    "correct": false
                },
                {
                    "option": "દીવાને ખાસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "તાજમહેલ કોણે બંધાવ્યો હતો ?",
            "a": [
                {
                    "option": "જહાંગીરે",
                    "correct": false
                },
                {
                    "option": "શાહજહાંએ",
                    "correct": true
                },
                {
                    "option": "ઔરંગઝેબે",
                    "correct": false
                },
                {
                    "option": "અકબરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાહજહાંએ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "તાજમહાલ કોની યાદમાં બનાવવામાં આવ્યો હતો ?",
            "a": [
                {
                    "option": "શાહજહાંની પત્ની મુમતાજની યાદમાં",
                    "correct": true
                },
                {
                    "option": "જહાંગીરની પત્ની નૂરજહાંની યાદમાં",
                    "correct": false
                },
                {
                    "option": "શાહજહાંની પત્ની નરગીશની યાદમાં",
                    "correct": false
                },
                {
                    "option": "શાહજહાંની યાદમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાહજહાંની પત્ની મુમતાજની યાદમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "તાજમહેલ વિશ્વની કેટલી અજાયબીમાં સ્થાન પામેલ છે ?",
            "a": [
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "8",
                    "correct": false
                },
                {
                    "option": "7",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 7</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "ભારતમાં સૌથી ઊંચો ઘુમ્મટવાળો દરવાજો કયો છે ?",
            "a": [
                {
                    "option": "બુલંદ દરવાજો",
                    "correct": true
                },
                {
                    "option": "બુલેટ દરવાજો",
                    "correct": false
                },
                {
                    "option": "બુંદેલ દરવાજો",
                    "correct": false
                },
                {
                    "option": "બલદ દરવાજો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બુલંદ દરવાજો</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "કયા રાજ્યના પુરુષો ધોતી અને માથે ટોપી પહેરે છે ?",
            "a": [
                {
                    "option": "પશ્ચિમ બંગાળ",
                    "correct": false
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": true
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "કેરલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહારાષ્ટ્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ક્યા રાજ્યની સ્ત્રીઓ ઘેરવાળો રંગીન ઘાઘરો અને કેડ સુધી પહોંચે એવો કબજો પહેરે છે ?",
            "a": [
                {
                    "option": "રાજસ્થાન",
                    "correct": true
                },
                {
                    "option": "પંજાબ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજસ્થાન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "કયા રાજ્યના રાસ-ગરબા દુનિયાભરમાં જાણીતા છે ?",
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
                    "option": "પંજાબ",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુજરાત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "રાજસ્થાનનું કયું નૃત્ય ખૂબ જાણીતું છે ?",
            "a": [
                {
                    "option": "ઘુમ્મર",
                    "correct": true
                },
                {
                    "option": "લાવણી",
                    "correct": false
                },
                {
                    "option": "બિહુ",
                    "correct": false
                },
                {
                    "option": "ઓજપાલી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઘુમ્મર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "મહારાષ્ટ્રનું કયું નૃત્ય પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "ઘુમ્મર",
                    "correct": false
                },
                {
                    "option": "લાવણી",
                    "correct": true
                },
                {
                    "option": "ઓજપાલી",
                    "correct": false
                },
                {
                    "option": "બિહુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાવણી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "કયા લોકોનો મુખ્ય ખોરાક ઘઉંની વાનગીઓ છે ?",
            "a": [
                {
                    "option": "ઉત્તર ભારતના",
                    "correct": true
                },
                {
                    "option": "પૂર્વ ભારતના",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ભારતના",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ભારતના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઉત્તર ભારતના</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ભારતનું કયું રાજ્ય તેના પ્રાકૃતિક સૌંદર્ય માટે વિશ્વભરમાં જાણીતું છે ?",
            "a": [
                {
                    "option": "ઉડીસા",
                    "correct": false
                },
                {
                    "option": "જમ્મુ-કશ્મીર",
                    "correct": true
                },
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જમ્મુ-કશ્મીર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "કશ્મીરના કયા સરોવરમાં લોકો નૌકાઘરમાં રહે છે ?",
            "a": [
                {
                    "option": "સાંભર",
                    "correct": false
                },
                {
                    "option": "ઢેબર",
                    "correct": false
                },
                {
                    "option": "દલ",
                    "correct": true
                },
                {
                    "option": "વુલર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "પંજાબનો કયો ઉત્સવ ખૂબ જાણીતો છે ?",
            "a": [
                {
                    "option": "દુર્ગાપૂજા",
                    "correct": false
                },
                {
                    "option": "વૈશાખી",
                    "correct": true
                },
                {
                    "option": "નવરાત્રિ",
                    "correct": false
                },
                {
                    "option": "ઓજપાલી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈશાખી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ભાંગડા નૃત્ય માટે કયું રાજ્ય જાણીતું છે ?",
            "a": [
                {
                    "option": "પંજાબ",
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
                    "option": "કર્ણાટક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પંજાબ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ક્યા રાજ્યના પુરુષો લૂંગી પહેરે છે ?",
            "a": [
                {
                    "option": "પંજાબ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "બિહાર",
                    "correct": false
                },
                {
                    "option": "કેરલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કેરલ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "કયા રાજ્યની સ્ત્રીઓ ફૂલોની શોખીન છે ?",
            "a": [
                {
                    "option": "ગુજરાત",
                    "correct": false
                },
                {
                    "option": "મધ્ય પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "કેરલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કેરલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "કયું રાજ્ય પૃથ્વી પરનું સ્વર્ગ કહેવાય છે ?",
            "a": [
                {
                    "option": "જમ્મુ-કશ્મીર",
                    "correct": true
                },
                {
                    "option": "ઉડીસા",
                    "correct": false
                },
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જમ્મુ-કશ્મીર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "કથકલી કયા રાજ્યનું પ્રસિદ્ધ નૃત્ય છે ?",
            "a": [
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "આંધ્ર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "કેરલ",
                    "correct": true
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કેરલ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ઓજપાલી કયા રાજ્યનું પ્રસિદ્ધ નૃત્ય છે ?",
            "a": [
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "આંધ્ર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "કેરલ",
                    "correct": false
                },
                {
                    "option": "અસમ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અસમ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "બિહુ નૃત્ય માટે કયું રાજ્ય જાણીતું છે ? ",
            "a": [
                {
                    "option": "જમ્મુ-કશ્મીર",
                    "correct": false
                },
                {
                    "option": "અસમ",
                    "correct": true
                },
                {
                    "option": "આંધ્ર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "કર્ણાટક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અસમ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ભરતનાટ્યમ્ કયા રાજ્યનું પ્રસિદ્ધ નૃત્ય છે ?",
            "a": [
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "આંધ્ર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": true
                },
                {
                    "option": "કેરલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તમિલનાડુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "કયા રાજ્યના ઘરોના પાછલા ભાગમાં પુકુર બનાવીને માછલાં ઉછેરવામાં આવે છે ?",
            "a": [
                {
                    "option": "કેરલ",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ બંગાળ",
                    "correct": true
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પશ્ચિમ બંગાળ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ઉડિસામાં કોની રથયાત્રા પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "મહાવીર સ્વામીની",
                    "correct": false
                },
                {
                    "option": "ગૌતમ બુદ્ધની",
                    "correct": false
                },
                {
                    "option": "રામ ભગવાનની",
                    "correct": false
                },
                {
                    "option": "જગન્નાથપુરીની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જગન્નાથપુરીની</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "કયા રાજ્યની સ્ત્રીઓ સલવાર-કમીઝ પહેરે છે અને માથે સ્કાર્ફ બાંધે છે ?",
            "a": [
                {
                    "option": "જમ્મુ-કશ્મીર",
                    "correct": true
                },
                {
                    "option": "કર્ણાટક",
                    "correct": false
                },
                {
                    "option": "પંજાબ",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જમ્મુ-કશ્મીર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ભારતમાંથી શું પસાર થાય છે ?",
            "a": [
                {
                    "option": "કર્કવૃત્ત",
                    "correct": true
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ધ્રુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્કવૃત્ત</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "ગુજરાતી, મરાઠી, રાજસ્થાની વગેરે ભાષાઓ કયા ભારતની છે ?",
            "a": [
                {
                    "option": "દક્ષિણ ભારતની",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ  ભારતની",
                    "correct": true
                },
                {
                    "option": "પૂર્વ ભારતની",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ભારતની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પશ્ચિમ  ભારતની</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "કયા રાજ્યને પૃથ્વીનું સ્વર્ગ કહે છે ?",
            "a": [
                {
                    "option": "ગુજરાતને",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "જમ્મુ-કાશ્મીર",
                    "correct": true
                },
                {
                    "option": "કેરલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જમ્મુ-કાશ્મીર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "નૌકાઘર એટલે શું ?",
            "a": [
                {
                    "option": "શિકારી",
                    "correct": false
                },
                {
                    "option": "શકારી",
                    "correct": false
                },
                {
                    "option": "શરણાઈ",
                    "correct": false
                },
                {
                    "option": "શિકારા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શિકારા</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "પંજાબમાં કઈ ભાષા બોલાય છે ?",
            "a": [
                {
                    "option": "ગુજરાતી",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાની",
                    "correct": false
                },
                {
                    "option": "ભોજપુરી",
                    "correct": false
                },
                {
                    "option": "પંજાબી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંજાબી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ઉત્તર ભારતનો મુખ્ય ખોરાક કયો છે ? ",
            "a": [
                {
                    "option": "જુવારમાંથી બનતી વાનગીઓ",
                    "correct": false
                },
                {
                    "option": "ઘઉંમાંથી બનતી વાનગીઓ",
                    "correct": true
                },
                {
                    "option": "ચોખામાંથી બનતી વાનગીઓ",
                    "correct": false
                },
                {
                    "option": "બાજરીમાંથી બનતી વાનગીઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘઉંમાંથી બનતી વાનગીઓ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "પંજાબનું કયું પીણું પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "દૂધ",
                    "correct": false
                },
                {
                    "option": "દહીં",
                    "correct": false
                },
                {
                    "option": "રસગુલ્લાં",
                    "correct": false
                },
                {
                    "option": "લસ્સી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લસ્સી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "કયા રાજ્યમાં ફૂલોના બગીચા છે ?",
            "a": [
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                },
                {
                    "option": "બિહાર",
                    "correct": false
                },
                {
                    "option": "જમ્મુ-કાશ્મીર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જમ્મુ-કાશ્મીર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ઉત્તર ભારતમાં કયા રાજ્યની પાઘડી ખૂબ જાણીતી છે ?",
            "a": [
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                },
                {
                    "option": "પંજાબી",
                    "correct": true
                },
                {
                    "option": "જમ્મુ-કાશ્મીર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંજાબી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "કાશ્મીરનું શું જાણીતું છે ?",
            "a": [
                {
                    "option": "ગરબા",
                    "correct": false
                },
                {
                    "option": "કાશ્મીરી લોકગીતો",
                    "correct": true
                },
                {
                    "option": "ભાંગડા",
                    "correct": false
                },
                {
                    "option": "હૂડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાશ્મીરી લોકગીતો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ઉત્તર પ્રદેશમાં કયો મેળો જાણીતો છે ?",
            "a": [
                {
                    "option": "વૌઠાનો",
                    "correct": false
                },
                {
                    "option": "તરણેતેરનો",
                    "correct": false
                },
                {
                    "option": "કુનીનો",
                    "correct": true
                },
                {
                    "option": "ભવનાથનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુનીનો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "કયા રાજ્યમાં કેસરનાં ખેતરો છે ?",
            "a": [
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                },
                {
                    "option": "બિહાર",
                    "correct": false
                },
                {
                    "option": "જમ્મુ-કાશ્મીર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જમ્મુ-કાશ્મીર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "ક્યું રાજ્ય ખેતપેદાશમાં મોખરે છે ?",
            "a": [
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                },
                {
                    "option": "પંજાબ",
                    "correct": true
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંજાબ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "દક્ષિણ ભારતનાં રાજ્યોને શાનો લાભ મળ્યો છે ?",
            "a": [
                {
                    "option": "પર્વતોનો",
                    "correct": false
                },
                {
                    "option": "દરિયાકાંઠાનો",
                    "correct": true
                },
                {
                    "option": "નદીઓનો",
                    "correct": false
                },
                {
                    "option": "ઉચ્ચપ્રદેશનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દરિયાકાંઠાનો</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "નીચેનામાંથી કયા ભારતના લોકો ખોરાકમં માછલી, ભાત અને કઠોળ લે છે ?",
            "a": [
                {
                    "option": "ઉત્તર ભારતના",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ભારતના",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ભારતના",
                    "correct": true
                },
                {
                    "option": "આખા ભારતના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ ભારતના</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "દક્ષિણ ભારતના લોકો પ્રસંગોએ શામાં ખાય છે ?",
            "a": [
                {
                    "option": "ખજૂરીનાં પાનમાં",
                    "correct": false
                },
                {
                    "option": "ખાખરાનાં પાનમાં",
                    "correct": false
                },
                {
                    "option": "કેવડાનાં પાનમાં",
                    "correct": false
                },
                {
                    "option": "કેળનાં પાનમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેળનાં પાનમાં</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "દક્ષિણ ભારતનું શું ખૂબ જાણીતું છે ?",
            "a": [
                {
                    "option": "ઇડલી-ઢોંસા",
                    "correct": true
                },
                {
                    "option": "ઢોકળાં-ખમણ",
                    "correct": false
                },
                {
                    "option": "ઇડલી-ખમણ",
                    "correct": false
                },
                {
                    "option": "ઢોકળાં-ઢોંસા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇડલી-ઢોંસા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "કેરલમાં ઘરનાં છાપરા વધુ ઢાળવાળા કેમ હોય છે ?",
            "a": [
                {
                    "option": "વધુ ભૂકંપ આવવાથી",
                    "correct": false
                },
                {
                    "option": "વધુ વરસાદ હોવાથી",
                    "correct": true
                },
                {
                    "option": "વધુ કૂવા હોવાથી",
                    "correct": false
                },
                {
                    "option": "વધુ સરોવર હોવાથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વધુ વરસાદ હોવાથી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "જગવિખ્યાત કૂચીપૂડી નૃત્ય કયા રાજ્યનું છે ?",
            "a": [
                {
                    "option": "ઉત્તર પ્રદેશનું",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશનું",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશનું",
                    "correct": true
                },
                {
                    "option": "હિમાચલપ્રદેશનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંધ્રપ્રદેશનું</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "મોહિનીઅટ્ટમ નૃત્ય કયા રાજ્યનું છે ?",
            "a": [
                {
                    "option": "ઉત્તર પ્રદેશનું",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશનું",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશનું",
                    "correct": false
                },
                {
                    "option": "કેરલનું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેરલનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "ઓણમ તહેવાર ક્યાં ઉજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "ઉત્તર પ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "આંધ્રપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "કેરલમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેરલમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "વિશ્વવિખ્યાત જગન્નાથપુરીની રથયાત્રા ક્યાં નીકળે છે ?",
            "a": [
                {
                    "option": "ઓરિસ્સામાં",
                    "correct": true
                },
                {
                    "option": "આંધ્રપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "ઉત્તરપ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાનમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓરિસ્સામાં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "દક્ષિણ ભારતમાં શાની ખેતી વધુ થાય છે ?",
            "a": [
                {
                    "option": "ઘઉંની",
                    "correct": false
                },
                {
                    "option": "ડાંગરની",
                    "correct": true
                },
                {
                    "option": "બાજરીની",
                    "correct": false
                },
                {
                    "option": "જુવારની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડાંગરની</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "પૂર્વ ભારતના તમામ પ્રદેશો ક્યાં આવેલાં છે ?",
            "a": [
                {
                    "option": "દરિયાકિનારાના પ્રદેશમાં",
                    "correct": false
                },
                {
                    "option": "નદીકિનારાના પ્રદેશોમાં",
                    "correct": false
                },
                {
                    "option": "પહાડી પ્રદેશમાં",
                    "correct": true
                },
                {
                    "option": "ઉચ્ચ પ્રદેશમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પહાડી પ્રદેશમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "પૂર્વ ભારતમાં બંગાળાનાં શું પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "દૂધ",
                    "correct": false
                },
                {
                    "option": "દહીં",
                    "correct": false
                },
                {
                    "option": "રસગુલ્લાં",
                    "correct": true
                },
                {
                    "option": "લસ્સી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રસગુલ્લાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "આજે શાનાં કારણે આપણને લોકોનાં ખોરાક, પોષાક, રહેઠાણ અને રહેણીકરણીમાં આધુનિકતા જોવા મળે છે ?",
            "a": [
                {
                    "option": "લોકોની વાતચીતથી",
                    "correct": false
                },
                {
                    "option": "સંદેશા અને વાહનવ્યવહાર વધવાથી",
                    "correct": true
                },
                {
                    "option": "એકાંત રહેવાથી",
                    "correct": false
                },
                {
                    "option": "ગામમાં ફરવાથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંદેશા અને વાહનવ્યવહાર વધવાથી</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "પરિવર્તનના આ યુગમાં આપણે શું જાળવી રાખ્યું છે ?",
            "a": [
                {
                    "option": "આપણું ઘર",
                    "correct": false
                },
                {
                    "option": "આપણી હેશિયત",
                    "correct": false
                },
                {
                    "option": "આપણો સાંસ્કૃતિક વારસો",
                    "correct": true
                },
                {
                    "option": "આપણા મોભો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપણો સાંસ્કૃતિક વારસો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "ભારતના રીત-રિવાજો, ખ્યાલો, માન્યાતાઓ, ભાષા, સમાજરચના, ધર્મ અને તેના નીતિનિયમો, તેનું રાજકીય તથા આર્થિક માળખું જગતમાં બીજે ક્યાંય જોવા મળતાં નથી એટલે ભારતને કેવો દેશ કહેવાય છે ?",
            "a": [
                {
                    "option": "વિવિધતાઓનો દેશ",
                    "correct": true
                },
                {
                    "option": "વિસંગતતાઓનો દેશ",
                    "correct": false
                },
                {
                    "option": "વિવસતાઓનો દેશ",
                    "correct": false
                },
                {
                    "option": "વિભાગોનો દેશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિવિધતાઓનો દેશ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
	{ // Question 1
            "q": "જે સામગ્રીનો કે સ્થળનો યોગ્ય ઉપયોગ બધા કરી શકે તે કઈ મિલકત કહેવાય ?",
            "a": [
                {
                    "option": "વ્યક્તિગત",
                    "correct": false
                },
                {
                    "option": "પેઢીની",
                    "correct": false
                },
                {
                    "option": "જાહેર",
                    "correct": true
                },
                {
                    "option": "ભાગીદારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાહેર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "સૌની સંપત્તિનો યોગ્ય રીતે ઉપયોગ કરવો એ આપણા સૌની શું કહે છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": false
                },
                {
                    "option": "ગુનો",
                    "correct": false
                },
                {
                    "option": "ઝઘડો",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફરજ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ઘરમાં હોય તે સંપત્તિ કઈ મિલકત કહેવાય ?",
            "a": [
                {
                    "option": "જાહેર",
                    "correct": false
                },
                {
                    "option": "વ્યક્તિગત",
                    "correct": true
                },
                {
                    "option": "ભાગીદારી",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વ્યક્તિગત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ઘર આગળ ઉછરેલું વૃક્ષ કઈ મિલકત કહેવાય ?",
            "a": [
                {
                    "option": "વ્યક્તિગત",
                    "correct": false
                },
                {
                    "option": "જાહેર",
                    "correct": true
                },
                {
                    "option": "પેઢીની",
                    "correct": false
                },
                {
                    "option": "ભાગીદારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાહેર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "જાહેર સંપત્તિને નુકસાન કરવાથી શું બને છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "ગુનો",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુનો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "આપણા દેશનાં સ્મારકો આપણું શું છે ?",
            "a": [
                {
                    "option": "હાનિ",
                    "correct": false
                },
                {
                    "option": "અધોગતિ",
                    "correct": false
                },
                {
                    "option": "ગૌરવ",
                    "correct": true
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગૌરવ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "જાહેર સ્મારકોમાં આપણા શું વપરાય છે ?",
            "a": [
                {
                    "option": "સિમેન્ટ",
                    "correct": false
                },
                {
                    "option": "નાણાં",
                    "correct": true
                },
                {
                    "option": "સોના",
                    "correct": false
                },
                {
                    "option": "ચાંદી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાણાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "જાહેર સંપત્તિ અને પર્યાવરણનું રક્ષણ કરવું એ આપણી શું છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": false
                },
                {
                    "option": "ગુનો",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": true
                },
                {
                    "option": "ઝઘડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફરજ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કોની મિલકત આપણા સૌની મિલકત છે ?",
            "a": [
                {
                    "option": "મારી",
                    "correct": false
                },
                {
                    "option": "તમારી",
                    "correct": false
                },
                {
                    "option": "સરકારની",
                    "correct": true
                },
                {
                    "option": "મહેશની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સરકારની</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી કઈ જાહેર મિલકત નથી ?",
            "a": [
                {
                    "option": "શાળા",
                    "correct": false
                },
                {
                    "option": "પ્રાથમિક આરોગ્ય કેન્દ્ર",
                    "correct": false
                },
                {
                    "option": "બસ સ્ટૅન્ડ",
                    "correct": false
                },
                {
                    "option": "મહેશનું ઘર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહેશનું ઘર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 11
            "q": "સરકારની મિલકત એ કોની મિલકત છે ?",
            "a": [
                {
                    "option": "આપણા સૌની",
                    "correct": true
                },
                {
                    "option": "મુખ્યમંત્રીની",
                    "correct": false
                },
                {
                    "option": "વડાપ્રધાનની",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપણા સૌની</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પોતાની માંગણી મનાવવા બસ કે રેલવેને નુકસાન કરવું એ શું છે ?",
            "a": [
                {
                    "option": "સારૂં કામ",
                    "correct": false
                },
                {
                    "option": "ગુનો",
                    "correct": true
                },
                {
                    "option": "હકનું કામ",
                    "correct": false
                },
                {
                    "option": "સહકારનું કામ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "જાહેર રસ્તા પરનાં વૃક્ષો કોની સંપત્તિ છે ?",
            "a": [
                {
                    "option": "સૌની",
                    "correct": true
                },
                {
                    "option": "વ્યક્તિગત",
                    "correct": false
                },
                {
                    "option": "ભાગીદારી",
                    "correct": false
                },
                {
                    "option": "પેઠીની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૌની</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "આપણે સહિયારી મિલકત વાપરવાની સાથે આ મિલકતનું શું કરવું જોઇએ ?",
            "a": [
                {
                    "option": "સર્વનાશ",
                    "correct": false
                },
                {
                    "option": "જમણ",
                    "correct": false
                },
                {
                    "option": "વિનાશ",
                    "correct": false
                },
                {
                    "option": "જતન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જતન</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "નીચેનામાંથી કઈ જાહેર મિલકત છે ?",
            "a": [
                {
                    "option": "તમારા ઘરનું ટીવી",
                    "correct": false
                },
                {
                    "option": "મહેશનું મકાન",
                    "correct": false
                },
                {
                    "option": "પાણી",
                    "correct": true
                },
                {
                    "option": "તમારા ઘરનું ફ્રિજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
	{ // Question 1
            "q": "વલ્લભાચાર્યનો જન્મ કયા રાજ્યમાં થયો હતો ?",
            "a": [
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "બિહાર",
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
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બિહાર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "હિંદુઓ અને મુસલમાનો કોને ધાર્મિક જીવનનું એક અંગ ગણતા હતા ?",
            "a": [
                {
                    "option": "લોકસેવાને",
                    "correct": false
                },
                {
                    "option": "દાનને",
                    "correct": true
                },
                {
                    "option": "કીર્તનને",
                    "correct": false
                },
                {
                    "option": "ક્રિયાકાંડને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દાનને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "વલ્લભાચાર્યનો કુળધર્મ કયો હતો ?",
            "a": [
                {
                    "option": "વૈષ્ણવ",
                    "correct": true
                },
                {
                    "option": "શૈવ",
                    "correct": false
                },
                {
                    "option": "બ્રાહ્મણ",
                    "correct": false
                },
                {
                    "option": "ભાગવત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈષ્ણવ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "વલ્લભાચાર્યએ રામેશ્વરથી હરદ્વાર અને દ્વારકાથી જગન્નાથપુરી સુધીના તીર્થોમાં કેટલીવાર પર્યટન કર્યું હતું ?",
            "a": [
                {
                    "option": "બેવાર",
                    "correct": false
                },
                {
                    "option": "ચારવાર",
                    "correct": false
                },
                {
                    "option": "ત્રણવાર",
                    "correct": true
                },
                {
                    "option": "પાંચવાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્રણવાર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "વલ્લભાચાર્યએ રામેશ્વરથી હરદ્વાર અને દ્વારકાથી જગન્નાથપુરી સુધીના તીર્થોમાં પર્યટન કરી શાનો પ્રચાર કર્યો ?",
            "a": [
                {
                    "option": "અહિંસાનો",
                    "correct": false
                },
                {
                    "option": "હિંસાનો",
                    "correct": false
                },
                {
                    "option": "સતનામનો",
                    "correct": false
                },
                {
                    "option": "પુષ્ટીમાર્ગનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પુષ્ટીમાર્ગનો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ચૈતન્ય મહાપ્રભુનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ.1448માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1479માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1485માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1498માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1485માં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ચૈતન્ય મહાપ્રભુનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "નવદીપમાં",
                    "correct": true
                },
                {
                    "option": "નવતીર્થમાં",
                    "correct": false
                },
                {
                    "option": "નવખંડમાં",
                    "correct": false
                },
                {
                    "option": "નવધરામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નવદીપમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "વૈષ્ણવ ધર્મની આચાર્ય પરંપરામાં ચૈતન્ય મહાપ્રભુનો નંબર કયો છે ?  ",
            "a": [
                {
                    "option": "પહેલો",
                    "correct": false
                },
                {
                    "option": "બીજો",
                    "correct": false
                },
                {
                    "option": "ત્રીજો",
                    "correct": false
                },
                {
                    "option": "છેલ્લો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  છેલ્લો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ગુરુ નાનકનો જન્મ કયારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ.1448માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1479માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1485માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1469માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1469માં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ગુરુ નાનકનો જન્મ કયાં થયો હતો ?",
            "a": [
                {
                    "option": "કલવંડી ગામમાં",
                    "correct": false
                },
                {
                    "option": "તલવંડી ગામમાં",
                    "correct": true
                },
                {
                    "option": "તલાવડી ગામમાં",
                    "correct": false
                },
                {
                    "option": "તાવડી ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તલવંડી ગામમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ગુરુ નાનક શાનો ઉપદેશ આપવા નીકળી ગયા ?",
            "a": [
                {
                    "option": "પુષ્ટીમાર્ગનો",
                    "correct": false
                },
                {
                    "option": "કૃષ્ણભક્તિનો",
                    "correct": false
                },
                {
                    "option": "સતનામનો",
                    "correct": true
                },
                {
                    "option": "અહિંસાનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સતનામનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગુરુ નાનકના અનુયાયીઓ શું કહેવાયા ?",
            "a": [
                {
                    "option": "શીખ",
                    "correct": true
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                },
                {
                    "option": "ખ્રિસ્તી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શીખ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "સ્વામી રામાનંદે લોકભાષાના માધ્યમ દ્વારા કઈ ભક્તિના દ્વાર ખોલી નાખ્યાં ?",
            "a": [
                {
                    "option": "શૈવ",
                    "correct": false
                },
                {
                    "option": "પારસી",
                    "correct": false
                },
                {
                    "option": "બ્રાહ્મણ",
                    "correct": false
                },
                {
                    "option": "વૈષ્ણવ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈષ્ણવ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "આમાંથી કોણ રામાનંદના શિષ્ય હતા?",
            "a": [
                {
                    "option": "ગુરુ નાનક",
                    "correct": false
                },
                {
                    "option": "કબીર",
                    "correct": true
                },
                {
                    "option": "તુલસીદાસ",
                    "correct": false
                },
                {
                    "option": "ચૈતન્ય મહાપ્રભુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કબીર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ગુજરાતી ભાષાના આદિકવિ નરસિંહ મહેતાનો જન્મ ક્યા કુટુંબમાં થયો ?",
            "a": [
                {
                    "option": "નાગર",
                    "correct": true
                },
                {
                    "option": "બ્રાહ્મણ",
                    "correct": false
                },
                {
                    "option": "ક્ષત્રિય",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નાગર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "નરસિંહ મહેતા કોની ભક્તિમાં તલ્લીન રહેતા હતા ?",
            "a": [
                {
                    "option": "આત્મજ્ઞાનમાં",
                    "correct": false
                },
                {
                    "option": "કૃષ્ણભક્તિમાં",
                    "correct": true
                },
                {
                    "option": "રામભક્તિમાં",
                    "correct": false
                },
                {
                    "option": "જ્ઞાનભક્તિમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૃષ્ણભક્તિમાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "સંત કબીર કયો વ્યવસાય કરતા હતા ?",
            "a": [
                {
                    "option": "લુહારનો",
                    "correct": false
                },
                {
                    "option": "સુથારનો",
                    "correct": false
                },
                {
                    "option": "વણકરનો",
                    "correct": true
                },
                {
                    "option": "દરજીનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વણકરનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "રૈદાસનો જન્મ કયાં થયો હતો ?",
            "a": [
                {
                    "option": "મથુરા",
                    "correct": false
                },
                {
                    "option": "લખનૌ",
                    "correct": false
                },
                {
                    "option": "કાશી",
                    "correct": true
                },
                {
                    "option": "અલાહાબાદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાશી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "મહારાષ્ટ્રના સંતો દ્વારા કયા નવા વિચારનો ઉદય થયો ?",
            "a": [
                {
                    "option": "વ્યક્તિવાદી",
                    "correct": false
                },
                {
                    "option": "પુષ્ટિમાર્ગી",
                    "correct": false
                },
                {
                    "option": "સમાજવાદી",
                    "correct": false
                },
                {
                    "option": "માનવવાદી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  માનવવાદી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "મહારાષ્ટ્રના ભક્ત પુંડરિકે કોની ભક્તિનો મહિમા ગાયો હતો ?",
            "a": [
                {
                    "option": "કૃષ્ણની",
                    "correct": false
                },
                {
                    "option": "હનુમાનની",
                    "correct": false
                },
                {
                    "option": "વિઠ્ઠલનાથની",
                    "correct": true
                },
                {
                    "option": "રામની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વિઠ્ઠલનાથની</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ભગવાન પ્રત્યેની ઊંડી ભક્તિ એ કઈ સદીમાં ઉદ્ભવ પામેલાં ભક્તિ અને સૂફી આંદોલનોની આપણને મળેલી ભેટ છે ?",
            "a": [
                {
                    "option": "10મી સદીમાં",
                    "correct": false
                },
                {
                    "option": "8મી સદીમાં",
                    "correct": true
                },
                {
                    "option": "15મી સદીમાં",
                    "correct": false
                },
                {
                    "option": "20મી સદીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8મી સદીમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "પહેલાંના સમયમાં સાધારણ જનતા શાનાથી દૂર રહેતી હતી ?",
            "a": [
                {
                    "option": "અંધશ્રદ્ધાથી",
                    "correct": false
                },
                {
                    "option": "શિક્ષણથી",
                    "correct": true
                },
                {
                    "option": "વહેમોથી",
                    "correct": false
                },
                {
                    "option": "મૂર્તિપૂજાથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શિક્ષણથી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "પહેલાંના સમયમાં અંધશ્રદ્ધાના કારણે લોકો રાજાઓની આજ્ઞાઓથી જેટલું ડરતા નહીં, એટલું કોનાથી ડરતા હતા ?",
            "a": [
                {
                    "option": "શિક્ષકોથી અને શિક્ષણવિદોથી ડરતા",
                    "correct": false
                },
                {
                    "option": "સરકાર અને સરકારના અધિકારોથી ડરતા",
                    "correct": false
                },
                {
                    "option": "ધર્માચાર્યો અને સાધુસંતોથી ડરતા",
                    "correct": true
                },
                {
                    "option": "સામાન્ય જનતાથી ડરતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધર્માચાર્યો અને સાધુસંતોથી ડરતા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "વલ્લભાચાર્યનો જન્મ કયારે થયો હતો ?",
            "a": [
                {
                    "option": "ઇ.સ. 1475માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1466માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1497માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1479માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1479માં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "વલ્લભાચાર્યે ક્યાં રહીને વેદ, વેદાંત, દર્શન વગેરેનો ઊંડો અભ્યાસ કર્યો હતો ?",
            "a": [
                {
                    "option": "બનારસમાં",
                    "correct": true
                },
                {
                    "option": "હરદ્વારમાં",
                    "correct": false
                },
                {
                    "option": "કાશીમાં",
                    "correct": false
                },
                {
                    "option": "પ્રયાગમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બનારસમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ભક્તિ-આંદોલનમાં કયા સંતનું મહત્ત્વ સવિશેષ છે ?",
            "a": [
                {
                    "option": "રૈદાસનું",
                    "correct": false
                },
                {
                    "option": "વલ્લભાચાર્યનું",
                    "correct": true
                },
                {
                    "option": "ચૈતન્ય મહાપ્રભુનું",
                    "correct": false
                },
                {
                    "option": "સ્વામી રામાનંદનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વલ્લભાચાર્યનું</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ચૈતન્ય મહાપ્રભુ શાના કારણે ખૂબ પ્રસિદ્ધ થયા હતાં ?",
            "a": [
                {
                    "option": "રામસમાધિને લીધે",
                    "correct": false
                },
                {
                    "option": "ધ્યાનસમાધિને લીધે",
                    "correct": false
                },
                {
                    "option": "પ્રેમસમાધિને લીધે",
                    "correct": true
                },
                {
                    "option": "શયનસમાધિને લીધે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રેમસમાધિને લીધે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ચૈતન્ય મહાપ્રભુ કઈ ધૂન લગાવતાં નગરમાં ફરતાં ?",
            "a": [
                {
                    "option": "હરેકૃષ્ણ-હરેકૃષ્ણ",
                    "correct": true
                },
                {
                    "option": "હરેરામ-હરેકૃષ્ણ",
                    "correct": false
                },
                {
                    "option": "સીતારામ",
                    "correct": false
                },
                {
                    "option": "હરેરામ-હરેરામ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હરેકૃષ્ણ-હરેકૃષ્ણ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "દેશના ઘણા પ્રદેશોમાં ફરીને ચૈતન્ય મહાપ્રભુએ શાની પ્રેમમયી ભક્તિનું મોજું વહેડાવ્યું ?",
            "a": [
                {
                    "option": "કૃષ્ણની",
                    "correct": true
                },
                {
                    "option": "શીવની",
                    "correct": false
                },
                {
                    "option": "રામની",
                    "correct": false
                },
                {
                    "option": "બ્રહ્માની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૃષ્ણની</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ગુરુ નાનકનો જન્મ કયા કુટુંબમાં થયો હતો ?",
            "a": [
                {
                    "option": "બ્રાહ્મણ",
                    "correct": false
                },
                {
                    "option": "ક્ષત્રિય",
                    "correct": true
                },
                {
                    "option": "વૈશ્ય",
                    "correct": false
                },
                {
                    "option": "ક્ષુદ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્ષત્રિય</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "કયા રાજ્યમાં દરેક કોમના લોકો ગુરુ નાનકના શિષ્યો બન્યા ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "પંજાબ",
                    "correct": true
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંજાબ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "માનવ પ્રથમ માનવ છે, પછી તે કોઈ બીજી જાતિનો બને છે. ઈશ્વર એક છે, તેના દરબારમાં કોઈ ભેદ નથી. સ્વયંભૂ છે, તે જ ગુરુ છે અને તે જ સાચો સાહેબ છે. એવું કોણે કહ્યું હતું ?",
            "a": [
                {
                    "option": "ગુરુ નાનકે",
                    "correct": true
                },
                {
                    "option": "વલ્લભાચાર્યએ",
                    "correct": false
                },
                {
                    "option": "ચૈતન્ય મહાપ્રભુએ",
                    "correct": false
                },
                {
                    "option": "સ્વામી રામાનંદએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુરુ નાનકે</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "14મી સદીના ઉત્તરાર્ધમાં ભક્તિના સબળ અને સફળ માધ્યમ તરીકે કોણ પુરવાર થયા ?",
            "a": [
                {
                    "option": "સ્વામી રામાનંદ",
                    "correct": true
                },
                {
                    "option": "ગુરુ નાનક",
                    "correct": false
                },
                {
                    "option": "વલ્લભાચાર્ય",
                    "correct": false
                },
                {
                    "option": "ચૈતન્ય મહાપ્રભુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વામી રામાનંદ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "'પક્ષાપક્ષી ત્યાં નહીં પરમેશ્વર, સમદ્રષ્ટિને સર્વ સમાન' એવું કોણે કહ્યું છે ?",
            "a": [
                {
                    "option": "સ્વામી રામાનંદે",
                    "correct": false
                },
                {
                    "option": "ગુરુ નાનકે",
                    "correct": false
                },
                {
                    "option": "વલ્લભાચાર્યએ",
                    "correct": false
                },
                {
                    "option": "નરસિંહ મહેતાએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નરસિંહ મહેતાએ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "'વૈષ્ણ્વજન તો તેને રે કહીએ' આ પ્રભાતિયું કોનું છે ?",
            "a": [
                {
                    "option": "સ્વામી રામાનંદનું",
                    "correct": false
                },
                {
                    "option": "ગુરુ નાનકનું",
                    "correct": false
                },
                {
                    "option": "વલ્લભાચાર્યનું",
                    "correct": false
                },
                {
                    "option": "નરસિંહ મહેતાનું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નરસિંહ મહેતાનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "સર્વોચ્ચ ઈશ્વર એક જ છે. તેને સાહેબ, અલ્લાહ, ખુદા, રામ, રહીમ, ગોવિંદ, બ્રહ્મ વગેરે જુદાં-જુદાં નામ આપવામાં આવ્યાં છે. એવો મત કોનો હતો ?",
            "a": [
                {
                    "option": "કબીરનો",
                    "correct": true
                },
                {
                    "option": "ગુરુ નાનકનો",
                    "correct": false
                },
                {
                    "option": "વલ્લભાચાર્યનો",
                    "correct": false
                },
                {
                    "option": "નરસિંહ મહેતાનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કબીરનો</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "રૈદાસના માતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "રઘુ",
                    "correct": true
                },
                {
                    "option": "જગુ",
                    "correct": false
                },
                {
                    "option": "રામ",
                    "correct": false
                },
                {
                    "option": "ભગુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રઘુ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "રૈદાસના પિતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "ધ્રુવિયા",
                    "correct": false
                },
                {
                    "option": "ધુરવિનિયા",
                    "correct": true
                },
                {
                    "option": "મહાદેવી",
                    "correct": false
                },
                {
                    "option": "ત્રિશલાદેવી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધુરવિનિયા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ભક્ત કવયિત્રી મીરાંબાઈ કોના શિષ્ય બન્યાં હતાં ?",
            "a": [
                {
                    "option": "સ્વામી રામાનંદના",
                    "correct": false
                },
                {
                    "option": "રૈદાસના",
                    "correct": true
                },
                {
                    "option": "વલ્લભાચાર્યના",
                    "correct": false
                },
                {
                    "option": "ચૈતન્ય મહાપ્રભુના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રૈદાસના</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "'મન ચંગા તો કઠૌતીમાં ગંગા' આ દોહાની રચના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "સ્વામી રામાનંદે",
                    "correct": false
                },
                {
                    "option": "રૈદાસે",
                    "correct": true
                },
                {
                    "option": "વલ્લભાચાર્યે",
                    "correct": false
                },
                {
                    "option": "ચૈતન્ય મહાપ્રભુએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રૈદાસે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "'બધામાં હરિ છે અને બધા હરિમાં છે' આ દોહાની રચના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "સ્વામી રામાનંદે",
                    "correct": false
                },
                {
                    "option": "રૈદાસે",
                    "correct": true
                },
                {
                    "option": "વલ્લભાચાર્યે",
                    "correct": false
                },
                {
                    "option": "ચૈતન્ય મહાપ્રભુએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રૈદાસે</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "રૈદાસના નામ ઉપરથી કયો પંથ થયો ?",
            "a": [
                {
                    "option": "શીખ",
                    "correct": false
                },
                {
                    "option": "રવિદાસી",
                    "correct": true
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રવિદાસી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "વલ્લભાચાર્યએ ભાગવતકથા, પારાયણ કર્યાં તે સ્થળો આજે કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "બેંચ",
                    "correct": false
                },
                {
                    "option": "પાટલી",
                    "correct": false
                },
                {
                    "option": "બેઠક",
                    "correct": true
                },
                {
                    "option": "આશન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બેઠક</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },{ // Question 1
            "q": "અમેરિકાનું નામ કોના નામ ઉપરથી પડ્યું ?",
            "a": [
                {
                    "option": "ક્રિસ્ટોફર કોલંબસ",
                    "correct": false
                },
                {
                    "option": "અમેરિગો વેસ્પુચી",
                    "correct": true
                },
                {
                    "option": "વાસ્કો-દ-ગામા",
                    "correct": false
                },
                {
                    "option": "હેન્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમેરિગો વેસ્પુચી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "અમેરિકાનું નામ જેમના નામ ઉપરથી પડ્યું, તે ક્યા દેશના વતની હતા ?",
            "a": [
                {
                    "option": "ઇટલી",
                    "correct": true
                },
                {
                    "option": "નોર્વે",
                    "correct": false
                },
                {
                    "option": "સ્પેઈન",
                    "correct": false
                },
                {
                    "option": "પોર્ટુગલ ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇટલી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "પ્રેરીઝનાં મેદાનો કયા પાકની ખેતી માટે પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "મકાઈના",
                    "correct": false
                },
                {
                    "option": "શેરડીના",
                    "correct": false
                },
                {
                    "option": "ડાંગરના",
                    "correct": false
                },
                {
                    "option": "ઘઉંના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઘઉંના</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ઉત્તર અમેરિકાની સૌથી વિશાળ પર્વતમાળા કઈ છે ?",
            "a": [
                {
                    "option": "અલાસ્કા",
                    "correct": false
                },
                {
                    "option": "ઍપલેચિયન",
                    "correct": false
                },
                {
                    "option": "ઍન્ડીઝ",
                    "correct": false
                },
                {
                    "option": "રૉકિઝ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રૉકિઝ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "યુ.એસ.એ. અને કૅનેડામાં કેટલા પ્રમાણસમયો છે ?",
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
                    "option": "છ",
                    "correct": true
                },
                {
                    "option": "સાત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  છ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "કૅનેડાનું રાષ્ટ્રીય વૃક્ષ કયું છે ?",
            "a": [
                {
                    "option": "ઓક",
                    "correct": false
                },
                {
                    "option": "મેપલ",
                    "correct": true
                },
                {
                    "option": "બર્ચ",
                    "correct": false
                },
                {
                    "option": "ઍશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મેપલ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ઉત્તર અમેરિકાનો સૌથી મોટો દેશ કયો છે ?",
            "a": [
                {
                    "option": "બ્રાઝિલ",
                    "correct": false
                },
                {
                    "option": "યુ.એસ.એ.",
                    "correct": false
                },
                {
                    "option": "કૅનેડા",
                    "correct": true
                },
                {
                    "option": "આર્જેન્ટિના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૅનેડા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "કયો દેશ ઔદ્યોગિકક્ષેત્રે વિશ્વમાં પ્રથમ સ્થાન ધરાવે છે ?",
            "a": [
                {
                    "option": "યુ.એસ.એ.",
                    "correct": true
                },
                {
                    "option": "જર્મની",
                    "correct": false
                },
                {
                    "option": "જાપાન",
                    "correct": false
                },
                {
                    "option": "યૂ.કે.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  યુ.એસ.એ.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "'સ્ટૅચ્યૂ ઑફ લિબર્ટી' કયા શહેરમાં આવેલું છે ?",
            "a": [
                {
                    "option": "લૉસ ઍંજિલીઝ",
                    "correct": false
                },
                {
                    "option": "શિકાગો",
                    "correct": false
                },
                {
                    "option": "ન્યૂ યૉર્ક",
                    "correct": true
                },
                {
                    "option": "વૉશિંગ્ટન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ન્યૂ યૉર્ક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "કૅનેડાની રાષ્ટ્રીય રમત કઈ છે ?",
            "a": [
                {
                    "option": "ફૂટબૉલ",
                    "correct": false
                },
                {
                    "option": "આઇસ હૉકી",
                    "correct": true
                },
                {
                    "option": "ક્રિકેટ",
                    "correct": false
                },
                {
                    "option": "ટેનિસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આઇસ હૉકી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "કઈ પર્વતમાળા વિશ્વની લાંબી પર્વતમાળા છે ?",
            "a": [
                {
                    "option": "અલાસ્કા",
                    "correct": false
                },
                {
                    "option": "ઍપલેચિયન",
                    "correct": false
                },
                {
                    "option": "ઍન્ડીઝ",
                    "correct": true
                },
                {
                    "option": "રૉકિઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઍન્ડીઝ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "દક્ષિણ અમેરિકાનું સર્વોચ્ચ શિખર કયું છે ?",
            "a": [
                {
                    "option": "કૉટોપેક્સી",
                    "correct": false
                },
                {
                    "option": "ચિમ્બોરાઝો",
                    "correct": false
                },
                {
                    "option": "ઍકોહ્યૂમા",
                    "correct": false
                },
                {
                    "option": "ઍકોન્કાગુઆ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઍકોન્કાગુઆ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "કઈ નદી વિશ્વમાં સૌથી વધુ પાણી ધરાવે છે ?",
            "a": [
                {
                    "option": "નાઈલ",
                    "correct": false
                },
                {
                    "option": "મિસિસિપી",
                    "correct": false
                },
                {
                    "option": "ઍમેઝોન",
                    "correct": true
                },
                {
                    "option": "યાંગત્સે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઍમેઝોન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "વિશ્વમાં કયો દેશ સૌથી વધુ શેરડી પકવે છે ?",
            "a": [
                {
                    "option": "યુ.એસ.એ.",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલ",
                    "correct": true
                },
                {
                    "option": "ચીન",
                    "correct": false
                },
                {
                    "option": "ભારતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બ્રાઝિલ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કૉફીના ઉત્પાદનમાં કયો દેશ વિશ્વમાં મોખરે છે ?",
            "a": [
                {
                    "option": "ઇન્ડોનેશિયા",
                    "correct": false
                },
                {
                    "option": "થાઇલૅન્ડ",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલ",
                    "correct": true
                },
                {
                    "option": "કલોમ્બિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બ્રાઝિલ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "દક્ષિણ અમેરિકામાં કયો દેશ સૌથી વધુ ઘઉં પકવે છે ?",
            "a": [
                {
                    "option": "આર્જેન્ટિના",
                    "correct": true
                },
                {
                    "option": "પેરુ",
                    "correct": false
                },
                {
                    "option": "ચિલી",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આર્જેન્ટિના</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "દક્ષિણ અમેરિકામાં કયો દેશ ખનીજ તેલના ઉત્પાદનમાં અગ્રેસર છે ?",
            "a": [
                {
                    "option": "એક્વાડૉર",
                    "correct": false
                },
                {
                    "option": "આર્જેન્ટિના",
                    "correct": false
                },
                {
                    "option": "વેનેઝુએલા",
                    "correct": true
                },
                {
                    "option": "બ્રાઝિલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વેનેઝુએલા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "આર્જેન્ટિનાના પાટનગરનું નામ શું છે ?",
            "a": [
                {
                    "option": "રીઓ દ જનીરો",
                    "correct": false
                },
                {
                    "option": "મૉંટેવિદેઓ",
                    "correct": false
                },
                {
                    "option": "બ્વેનોસ એરિસ",
                    "correct": true
                },
                {
                    "option": "બોગોટા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બ્વેનોસ એરિસ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "બ્રાઝિલની રાજભાષા કઈ છે ?",
            "a": [
                {
                    "option": "સ્પૅનિશ",
                    "correct": false
                },
                {
                    "option": "પોર્ટુગીઝ",
                    "correct": true
                },
                {
                    "option": "ફ્રેન્ચ",
                    "correct": false
                },
                {
                    "option": "ઇંગ્લિશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પોર્ટુગીઝ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "યુ.એસ.એ.ના મૂળનિવાસી કઈ જાતિની પ્રજા ગણાય છે ?",
            "a": [
                {
                    "option": "અંગ્રેજો",
                    "correct": false
                },
                {
                    "option": "પારસી",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિયન",
                    "correct": false
                },
                {
                    "option": "રેડ ઇન્ડિયન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રેડ ઇન્ડિયન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ઉત્તર અમેરિકા ભૂમિખંડ પૃથ્વીના કેટલા ટકા ભૂમિભાગ રોકે છે ?",
            "a": [
                {
                    "option": "16%",
                    "correct": true
                },
                {
                    "option": "12%",
                    "correct": false
                },
                {
                    "option": "14%",
                    "correct": false
                },
                {
                    "option": "10%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 16%</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કોના આક્રમણો અને આંતરસંબંધોને લીધે હાલની અમેરિકન સંસ્કૃતિનો વિકાસ થયો છે ?",
            "a": [
                {
                    "option": "એશિયાઈ પ્રજાઓનાં",
                    "correct": false
                },
                {
                    "option": "બાહ્ય યુરોપીય પ્રજાઓનાં",
                    "correct": true
                },
                {
                    "option": "આફ્રિકી પ્રજાઓનાં",
                    "correct": false
                },
                {
                    "option": "ઑસ્ટ્રેલિયન પ્રજાઓનાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાહ્ય યુરોપીય પ્રજાઓનાં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "એસ્કિમો જાતિના લોકોએ બરફના ચોસલામાંથી બનાવેલા ઘરને શું કહે છે ?",
            "a": [
                {
                    "option": "ઇલુ",
                    "correct": false
                },
                {
                    "option": "ઇમુ",
                    "correct": false
                },
                {
                    "option": "ઇગ્લુ",
                    "correct": true
                },
                {
                    "option": "ઇંડુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇગ્લુ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ઉત્તર અમેરિકામાં કયું શિખર ઊંચું છે ?",
            "a": [
                {
                    "option": "ઓરિઝાબા",
                    "correct": false
                },
                {
                    "option": "લોગન",
                    "correct": false
                },
                {
                    "option": "પોપોકૅટેપેટલ",
                    "correct": false
                },
                {
                    "option": "મકિન્લી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકિન્લી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "કેટલા મહાન સરોવરો સંયુક્ત રાજ્ય અમેરિકા અને કૅનેડા વચ્ચે કુદરતી સરહદની રચના કરે છે ?",
            "a": [
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": true
                },
                {
                    "option": "4",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "કઈ નદીના કાંપથી પ્રેરીઝનાં મેદાનની રચના થઈ છે ?",
            "a": [
                {
                    "option": "મિસિસિપી",
                    "correct": false
                },
                {
                    "option": "મિસુરી",
                    "correct": false
                },
                {
                    "option": "મૅકેન્ઝી",
                    "correct": false
                },
                {
                    "option": "આપેલી બધી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલી બધી</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "રોકિઝ પર્વતમાળામાં સૌથી ઊંચું શીખર કયું છે ?",
            "a": [
                {
                    "option": "સુપીરિયન",
                    "correct": false
                },
                {
                    "option": "મૅકેન્ઝી",
                    "correct": false
                },
                {
                    "option": "ઍલાસ્કા",
                    "correct": true
                },
                {
                    "option": "હ્યુરોન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍલાસ્કા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ઉત્તર અમેરિકામાં રણો મુખ્યત્વે કઈ દિશામાં આવેલાં છે ?",
            "a": [
                {
                    "option": "નૈઋત્ય",
                    "correct": true
                },
                {
                    "option": "વાયવ્ય",
                    "correct": false
                },
                {
                    "option": "પૂર્વ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નૈઋત્ય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "એસ્કિમો જાતિના લોકો ઉત્તર અમેરિકાના કયા ભાગમાં વસે છે ?",
            "a": [
                {
                    "option": "નૈઋત્ય",
                    "correct": false
                },
                {
                    "option": "વાયવ્ય",
                    "correct": false
                },
                {
                    "option": "પૂર્વ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "મેક્સિકોમાંથી કયું વૃત્ત પસાર થાય છે ?",
            "a": [
                {
                    "option": "કર્કવૃત્ત",
                    "correct": true
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્કવૃત્ત</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "કયા ખનીજના ઉત્પાદનમાં કૅનેડા વિશ્વમાં પ્રથમ સ્થાને છે ?",
            "a": [
                {
                    "option": "પ્લૅટિનમ",
                    "correct": true
                },
                {
                    "option": "ખનીજ તેલ",
                    "correct": false
                },
                {
                    "option": "સોનું",
                    "correct": false
                },
                {
                    "option": "ચાંદી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્લૅટિનમ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "કૅનેડાનું સૌથી મોટું શહેર કયું છે ?",
            "a": [
                {
                    "option": "વિનિપેગ",
                    "correct": false
                },
                {
                    "option": "ઓટાવા",
                    "correct": false
                },
                {
                    "option": "હૅમિલ્ટન",
                    "correct": false
                },
                {
                    "option": "ટરૉંટો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટરૉંટો</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "કૅનેડાની રાજધાની કયું શહેર છે ?",
            "a": [
                {
                    "option": "મૉંટ્રિઑલ",
                    "correct": true
                },
                {
                    "option": "ટરૉંટો",
                    "correct": false
                },
                {
                    "option": "ઓટાવા",
                    "correct": true
                },
                {
                    "option": "કિનબેક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓટાવા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "કૅનેડાની ખૂબ મહત્ત્વની નદી કઈ છે ?",
            "a": [
                {
                    "option": "મેકેન્ઝી",
                    "correct": false
                },
                {
                    "option": "સેંટ લૉરેન્સ",
                    "correct": true
                },
                {
                    "option": "મિસિસિપી",
                    "correct": false
                },
                {
                    "option": "મિઝૂરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સેંટ લૉરેન્સ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "'ગ્રૅન્ડ કૅન્યન'ની રચના કઈ નદીએ કરી છે ?",
            "a": [
                {
                    "option": "કૉલોરાડો",
                    "correct": true
                },
                {
                    "option": "મેકેન્ઝી",
                    "correct": false
                },
                {
                    "option": "મિસિસિપી",
                    "correct": false
                },
                {
                    "option": "મિઝૂરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૉલોરાડો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "'સ્ટૅચ્યુ ઓફ લિબર્ટી' કયા શહેરમાં આવેલું છે ?",
            "a": [
                {
                    "option": "લૉસ ઍંજિલીઝ",
                    "correct": false
                },
                {
                    "option": "શિકાગો",
                    "correct": false
                },
                {
                    "option": "વૉશિંગ્ટન",
                    "correct": false
                },
                {
                    "option": "ન્યૂ યૉર્ક",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ન્યૂ યૉર્ક</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "ટેક્સાસ રાજ્યમાં અતિશય વેગવાળા ચક્રવાતો ફૂંકાય છે. તેને શાના તરીકે ઓળખવામાં આવે છે ?",
            "a": [
                {
                    "option": "ટોર્નેડો",
                    "correct": true
                },
                {
                    "option": "હરિકેન",
                    "correct": false
                },
                {
                    "option": "કેટરિના",
                    "correct": false
                },
                {
                    "option": "ટોબડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટોર્નેડો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "પરિવહનનાં માર્ગોના વિકાસમાં પ્રથમ સ્થાને વિશ્વનો ક્યો દેશ છે ?",
            "a": [
                {
                    "option": "યુ.એસ.એ.",
                    "correct": true
                },
                {
                    "option": "રશિયા",
                    "correct": false
                },
                {
                    "option": "ચીન",
                    "correct": false
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યુ.એસ.એ.</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "વ્હાઇટહાઉસ કયા શહેરમાં આવેલું છે ?",
            "a": [
                {
                    "option": "લૉસ ઍંજિલીઝ",
                    "correct": false
                },
                {
                    "option": "શિકાગો",
                    "correct": false
                },
                {
                    "option": "વૉશિંગ્ટન",
                    "correct": true
                },
                {
                    "option": "ન્યૂ યૉર્ક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૉશિંગ્ટન</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "વિસ્તારની દ્રષ્ટિએ વિશ્વના ખંડોમાં દક્ષિણ અમેરિકા ખંડનું સ્થાન કેટલામું છે ?",
            "a": [
                {
                    "option": "ત્રીજું",
                    "correct": false
                },
                {
                    "option": "ચોથું",
                    "correct": true
                },
                {
                    "option": "પાંચમું",
                    "correct": false
                },
                {
                    "option": "બીજું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચોથું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "બ્રાઝિલના ઉત્તર ભાગમાંથી કયું વૃત્ત પસાર થાય છે ?",
            "a": [
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિષુવવૃત્ત</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "બ્રાઝિલના દક્ષિણ ભાગમાંથી કયું વૃત્ત પસાર થાય છે ?",
            "a": [
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": true
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                } // no comma here
 ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકરવૃત્ત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 43
            "q": "દક્ષિણ અમેરિકામાં બહુ મોટો ભાગ કયા કટિબંધમાં છે ?",
            "a": [
                {
                    "option": "શીત કટિબંધમાં",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ કટિબંધમાં",
                    "correct": true
                },
                {
                    "option": "વૃષ્ટિય કટિબંધમાં",
                    "correct": false
                },
                {
                    "option": "સમશીતોષ્ણ કટિબંધમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉષ્ણ કટિબંધમાં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 44
            "q": "દક્ષિણ અમેરિકામાં વિશ્વનાં કેટલા ટકા જંગલો છે ?",
            "a": [
                {
                    "option": "9%",
                    "correct": false
                },
                {
                    "option": "13%",
                    "correct": false
                },
                {
                    "option": "18%",
                    "correct": false
                },
                {
                    "option": "21%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 21%</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 45
            "q": "દક્ષિણ અમેરિકાની કેટલા ટકા જમીનમાં ખેતી થાય છે ?",
            "a": [
                {
                    "option": "6.8%",
                    "correct": false
                },
                {
                    "option": "4.2%",
                    "correct": true
                },
                {
                    "option": "3.6%",
                    "correct": false
                },
                {
                    "option": "3%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4.2%</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "દક્ષિણ અમેરિકાની કેટલા ટકા વસ્તી ખેતીમાં રોકાયેલી છે ?",
            "a": [
                {
                    "option": "60%",
                    "correct": true
                },
                {
                    "option": "50%",
                    "correct": false
                },
                {
                    "option": "40%",
                    "correct": false
                },
                {
                    "option": "30%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 60%</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "વિસ્તારની દ્રષ્ટિએ વિશ્વમાં બ્રાઝિલ કેટલામો દેશ છે ?",
            "a": [
                {
                    "option": "ત્રીજો",
                    "correct": false
                },
                {
                    "option": "ચોથો",
                    "correct": false
                },
                {
                    "option": "પાંચમો",
                    "correct": true
                },
                {
                    "option": "છઠ્ઠો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાંચમો</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 48
            "q": "પૅટૅગોનિયાનો ઉચ્ચપ્રદેશ દક્ષિણ અમેરિકા ખંડના ક્યા ભાગમાં આવેલો છે ?",
            "a": [
                {
                    "option": "ઉત્તર",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ",
                    "correct": true
                },
                {
                    "option": "પૂર્વ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 49
            "q": "આર્જેન્ટિનાના પાટનગરનું નામ શું છે ?",
            "a": [
                {
                    "option": "રીયો દ જેનરો",
                    "correct": false
                },
                {
                    "option": "મૉંટેવિદેઓ",
                    "correct": false
                },
                {
                    "option": "બ્વેનોસ એરિસ",
                    "correct": true
                },
                {
                    "option": "બોગોટા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બ્વેનોસ એરિસ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 50
            "q": "બ્રાજિલની રાજધાની કઈ છે ?",
            "a": [
                {
                    "option": "રીયો દ જેનરો",
                    "correct": false
                },
                {
                    "option": "મૉંટેવિદેઓ",
                    "correct": false
                },
                {
                    "option": "બ્વેનોસ એરિસ",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલિયા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બ્રાઝિલિયા</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "બ્રાઝિલમાં ક્યો અજાયબ અજગર જોવા મળે છે ?",
            "a": [
                {
                    "option": "કોબ્રા",
                    "correct": false
                },
                {
                    "option": "સર્પણ",
                    "correct": false
                },
                {
                    "option": "ઍનાકોન્ડા",
                    "correct": true
                },
                {
                    "option": "ઍકોડા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍનાકોન્ડા</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "આર્જેન્ટિનામાં કઈ ભાષા બોલાય છે ?",
            "a": [
                {
                    "option": "સ્પૅનીશ",
                    "correct": true
                },
                {
                    "option": "અંગ્રેજી",
                    "correct": false
                },
                {
                    "option": "ફેંચ",
                    "correct": false
                },
                {
                    "option": "ચાઇનીઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્પૅનીશ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 53
            "q": "દક્ષિણ યુરોપમાં કઈ પર્વતમાળા સૌથી મોટી અને ઊંચી છે ?",
            "a": [
                {
                    "option": "કાર્પેથિયન",
                    "correct": false
                },
                {
                    "option": "આલ્પ્સ",
                    "correct": true
                },
                {
                    "option": "પિરેનીઝ",
                    "correct": false
                },
                {
                    "option": "એપિનાઇન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આલ્પ્સ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 54
            "q": "યુરોપમાં કઈ નદી સૌથી લાંબી છે ?",
            "a": [
                {
                    "option": "વૉલ્ગા",
                    "correct": true
                },
                {
                    "option": "રાઇન",
                    "correct": false
                },
                {
                    "option": "ડૉન",
                    "correct": false
                },
                {
                    "option": "ડૅન્યુબ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૉલ્ગા</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 55
            "q": "યુરોપની કઈ નદી પાણીનો સૌથી બહોળો પ્રવાહ ધરાવે છે ?",
            "a": [
                {
                    "option": "વૉલ્ગા",
                    "correct": false
                },
                {
                    "option": "રાઇન",
                    "correct": false
                },
                {
                    "option": "ડૉન",
                    "correct": false
                },
                {
                    "option": "ડૅન્યુબ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડૅન્યુબ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 56
            "q": "યુરોપની કઈ નદી 10 દેશોમાં થઈને કે તેમને સ્પર્શીએ વહે છે ?",
            "a": [
                {
                    "option": "વૉલ્ગા",
                    "correct": false
                },
                {
                    "option": "રાઇન",
                    "correct": false
                },
                {
                    "option": "ડૉન",
                    "correct": false
                },
                {
                    "option": "ડૅન્યુબ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડૅન્યુબ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "રાઇન નદી કયા સમુદ્રને મળે છે ?",
            "a": [
                {
                    "option": "ભૂમધ્ય",
                    "correct": false
                },
                {
                    "option": "બાલ્ટિક",
                    "correct": false
                },
                {
                    "option": "ઉત્તર",
                    "correct": true
                },
                {
                    "option": "કાળા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 58
            "q": "જિનીવા સરોવર યુરોપના કયા દેશમાં આવેલું છે ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": false
                },
                {
                    "option": "સ્વિટ્ઝરલૅન્ડ",
                    "correct": true
                },
                {
                    "option": "જર્મની",
                    "correct": false
                },
                {
                    "option": "ફ્રાન્સ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વિટ્ઝરલૅન્ડ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 59
            "q": "યુરોપનું સૌથી મોટું સરોવર કયું છે ?",
            "a": [
                {
                    "option": "જિનીવા",
                    "correct": false
                },
                {
                    "option": "વેનર્ન",
                    "correct": false
                },
                {
                    "option": "આન્યેગા",
                    "correct": false
                },
                {
                    "option": "લાડોગા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાડોગા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "યુરોપમાં કયો દેશ 'સરોવરોનો દેશ' કહેવાય છે ?",
            "a": [
                {
                    "option": "રશિયા",
                    "correct": false
                },
                {
                    "option": "ફિનલૅન્ડ",
                    "correct": true
                },
                {
                    "option": "નોર્વે",
                    "correct": false
                },
                {
                    "option": "સ્વિટ્ઝરલૅન્ડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફિનલૅન્ડ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 61
            "q": "ભૂમધ્ય સમુદ્રના કિનારાના પ્રદેશોમાં મુખ્યત્વે કઈ ઋતુમાં વરસાદ પડે છે ?",
            "a": [
                {
                    "option": "ઉનાળામાં",
                    "correct": false
                },
                {
                    "option": "શિયાળામાં",
                    "correct": true
                },
                {
                    "option": "બારેમાસ",
                    "correct": false
                },
                {
                    "option": "વસંતઋતુમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શિયાળામાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 62
            "q": "વિશ્વમાં કયો દેશ સૌથી મોટો છે ?",
            "a": [
                {
                    "option": "કૅનેડા",
                    "correct": false
                },
                {
                    "option": "ચીન",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલ",
                    "correct": false
                },
                {
                    "option": "રશિયા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રશિયા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 63
            "q": "નીચેનામાંથી કયા દેશની નદીઓ શિયાળામાં થીજી જાય છે ?",
            "a": [
                {
                    "option": "જર્મની",
                    "correct": false
                },
                {
                    "option": "ફ્રાંસ",
                    "correct": false
                },
                {
                    "option": "રશિયા",
                    "correct": true
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રશિયા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 64
            "q": "રશિયાની કેટલા ટકા જમીન ખેતીલાયક છે ?",
            "a": [
                {
                    "option": "15%",
                    "correct": false
                },
                {
                    "option": "10%",
                    "correct": true
                },
                {
                    "option": "12%",
                    "correct": false
                },
                {
                    "option": "7%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 10%</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 65
            "q": "રશિયામાં સૌથી વધુ કયા પાકનું ઉત્પાદન થાય છે ?",
            "a": [
                {
                    "option": "ડાંગર",
                    "correct": false
                },
                {
                    "option": "શેરડી",
                    "correct": false
                },
                {
                    "option": "ઘઉં",
                    "correct": true
                },
                {
                    "option": "મકાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘઉં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 66
            "q": "ઇંગ્લૅન્ડનું પાટનગર કયું છે ?",
            "a": [
                {
                    "option": "માન્ચેસ્ટર",
                    "correct": false
                },
                {
                    "option": "ગ્લાસગો",
                    "correct": false
                },
                {
                    "option": "એડિનબરો",
                    "correct": false
                },
                {
                    "option": "લંડન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લંડન</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 67
            "q": "ઇંગ્લૅન્ડમાં કેટલા ટકા ભૂમિભાગ પર જંગલો આવેલાં છે ?",
            "a": [
                {
                    "option": "4%",
                    "correct": true
                },
                {
                    "option": "6%",
                    "correct": false
                },
                {
                    "option": "8%",
                    "correct": false
                },
                {
                    "option": "10%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4%</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 68
            "q": "ઇંગ્લૅન્ડનું મુખ્ય ખનીજ કયું છે ?",
            "a": [
                {
                    "option": "કોલસો",
                    "correct": true
                },
                {
                    "option": "લોખંડ",
                    "correct": false
                },
                {
                    "option": "જસત",
                    "correct": false
                },
                {
                    "option": "ખનીજ તેલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોલસો</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 69
            "q": "ફ્રાંસનું પાટનગર કયું છે ?",
            "a": [
                {
                    "option": "પૅરિસ",
                    "correct": true
                },
                {
                    "option": "લંડન",
                    "correct": false
                },
                {
                    "option": "બર્લિન",
                    "correct": false
                },
                {
                    "option": "ઑસ્લો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૅરિસ</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 70
            "q": "ફ્રાંસમાં સૌથી વધુ કયા પાકનું ઉત્પાદન થાય છે ?",
            "a": [
                {
                    "option": "શેરડી",
                    "correct": false
                },
                {
                    "option": "કૉફી",
                    "correct": false
                },
                {
                    "option": "ડાંગર",
                    "correct": false
                },
                {
                    "option": "ઘઉં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘઉં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 71
            "q": "જર્મનીની સીમાઓ કેટલા દેશોને સ્પર્શે છે ?",
            "a": [
                {
                    "option": "7",
                    "correct": false
                },
                {
                    "option": "8",
                    "correct": false
                },
                {
                    "option": "9",
                    "correct": true
                },
                {
                    "option": "10",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 9</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 72
            "q": "જર્મનીનું પાટનગરનું કયું છે ?",
            "a": [
                {
                    "option": "મૉસ્કો",
                    "correct": false
                },
                {
                    "option": "લંડન",
                    "correct": false
                },
                {
                    "option": "પૅરિસ",
                    "correct": false
                },
                {
                    "option": "બર્લિન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બર્લિન</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 73
            "q": "કોલસાથી સમૃદ્ધ એવો રુહરનો પ્રદેશ કયા દેશમાં આવેલો છે ?",
            "a": [
                {
                    "option": "જર્મની",
                    "correct": true
                },
                {
                    "option": "રશિયા",
                    "correct": false
                },
                {
                    "option": "ફ્રાન્સ",
                    "correct": false
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જર્મની</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 74
            "q": "જર્મનીનું સૌથી મોટું બંદર કયું છે ?",
            "a": [
                {
                    "option": "સ્ટંટગાર્ટ",
                    "correct": false
                },
                {
                    "option": "મ્યુનિક",
                    "correct": false
                },
                {
                    "option": "હૅમ્બર્ગ",
                    "correct": true
                },
                {
                    "option": "ફ્રેન્કફર્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હૅમ્બર્ગ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 75
            "q": "રશિયાનું પાટનગર કયું છે ?",
            "a": [
                {
                    "option": "મૉસ્કો",
                    "correct": true
                },
                {
                    "option": "લંડન",
                    "correct": false
                },
                {
                    "option": "પૅરિસ",
                    "correct": false
                },
                {
                    "option": "બર્લિન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૉસ્કો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
	



    ]
};
