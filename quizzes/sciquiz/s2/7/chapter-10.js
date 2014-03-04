// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-10 હવાનું પ્રદૂષણ",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
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
			"q": "વાહનોના ધુમાડામાં રહેલો કયો વાયુ હવાને પ્રદૂષિત કરે છે ?",
			"a": [
				{
					"option": "કાર્બન મૉનોક્સાઇડ",
					"correct": true
                },
				{
					"option": "ઓઝોન",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન મૉનોક્સાઇડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "સજીવો ઉચ્છવાસમાં કયો વાયુ બહાર કાઢે છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": true
                },
				{
					"option": "ઓઝોન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "કયા સ્વરૂપના પ્રદૂષકોનું પ્રમાણ વાતાવરણમાં વિશેષ હોય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
                },
				{
					"option": "પ્રવાહી",
					"correct": false
                },
				{
					"option": "વાયુ",
					"correct": true
                },
				{
					"option": "ઘન અને પ્રવાહી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "પદાર્થોના કોહવાતથી કયો ઝેરી અને દુર્ગંધ મારતો વાયુ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "કાર્બન મૉનોક્સાઇડ",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન સલ્ફાઇડ",
					"correct": true
                },
				{
					"option": "સલ્ફર ડાયૉક્સાઇડ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇડ્રોજન સલ્ફાઇડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "શાને કારણે કિરણોત્સર્ગી પ્રદૂષણ ફેલાય છે ?",
			"a": [
				{
					"option": "પ્રાણીઓનાં મળમૂત્રથી",
					"correct": false
                },
				{
					"option": "વાહનોના ધુમાડાથી",
					"correct": false
                },
				{
					"option": "પદાર્થોના કોહવાટથી",
					"correct": false
                },
				{
					"option": "અણુ વીજમથકોના કચરાથી",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અણુ વીજમથકોના કચરાથી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "કયા વાયુમાં ગરમી શોષી લેવાનો ગુણ છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": true
                },
				{
					"option": "એમોનિયા",
					"correct": false
                },
				{
					"option": "આર્ગોન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "કયા વાયુનું વાતાવરણમાં પ્રમાણ વધવાથી ગ્રીનહાઉસ અસર પેદા થાય છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": true
                },
				{
					"option": "ઓઝોન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "ઍસિડવર્ષાની ઘટના માટે જવાબદાર વાયુ કયો છે ?",
			"a": [
				{
					"option": "એમોનિયા",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
                },
				{
					"option": "સલ્ફર ડાયૉક્સાઇડ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સલ્ફર ડાયૉક્સાઇડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "વનસ્પતિ પ્રકાશસંશ્લેષણની ક્રિયા દરમિયાન કયો વાયુ મુક્ત કરે છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": true
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
		} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "હવાનું પ્રદૂષણ અટકાવતું કુદરતી પરિબળ કયું છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "સૂર્યપ્રકાશ",
					"correct": true
                },
				{
					"option": "CNG",
					"correct": false
                },
				{
					"option": "PUC",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂર્યપ્રકાશ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "PUCનું પૂરું નામ શું છે ?",
			"a": [
				{
					"option": "પૅટ્રોલ અંડર કંટ્રોલ",
					"correct": false
                },
				{
					"option": "પોલ્યુશન અંડર કંટ્રોલ",
					"correct": true
                },
				{
					"option": "પૅટ્રોલ એવરેજ કંટ્રોલ",
					"correct": false
                },
				{
					"option": "પોલ્યુશન એવરેજ કંટ્રોલ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોલ્યુશન અંડર કંટ્રોલ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "પર્યાવરણ માટે હાનિકારક હોય તેવા ફેરફારોને શું કહે છે ?",
			"a": [
				{
					"option": "વિદૂષણ",
					"correct": false
                },
				{
					"option": "પ્રદૂષણ",
					"correct": true
                },
				{
					"option": "પ્રક્ષેપણ",
					"correct": false
                },
				{
					"option": "વિશ્લેષણ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રદૂષણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "નીચેનામાંથી કયા બળતણનો ઉપયોગ કરવો વધુ સારો ?",
			"a": [
				{
					"option": "ડીઝલ",
					"correct": false
                },
				{
					"option": "CNG",
					"correct": true
                },
				{
					"option": "પેટ્રોલ",
					"correct": false
                },
				{
					"option": "LPG",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: CNG</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "આમાંથી ક્યો રોગ હવાના પ્રદૂષણથી થાય છે ?",
			"a": [
				{
					"option": "ઝાડા-ઊલટી",
					"correct": false
                },
				{
					"option": "કમળો ",
					"correct": false
                },
				{
					"option": "દમ ",
					"correct": true
                },
				{
					"option": "કૅન્સર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દમ </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 15
			"q": "જાપાનમાં ત્સુનામીથી કયા અણુમથક પર અસર થઈ ?",
			"a": [
				{
					"option": "નાગાશાકી",
					"correct": false
                },
				{
					"option": "ફૂકુશીમા",
					"correct": true
                },
				{
					"option": "હીરોશીમા",
					"correct": false
                },
				{
					"option": "ટૉક્યો",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફૂકુશીમા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "સજીવો શ્વસનમાં કયો વાયુ લે છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": true
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
		} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "પ્રદૂષણ ફેલાવનાર ઘટકોને શું કહે છે ?",
			"a": [
				{
					"option": "પ્રદૂષકો",
					"correct": true
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "વિદૂષકો",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
				}
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રદૂષકો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "હવાનું પ્રદૂષણ અટકાવતા કુદરતી પરિબળો નીચેનામાંથી કયા છે ?",
			"a": [
				{
					"option": "વનસ્પતિ",
					"correct": false
                },
				{
					"option": "વરસાદ",
					"correct": false
                },
				{
					"option": "પવન",
					"correct": false
                },
				{
					"option": "વનસ્પતિ, વરસાદ, પવન - ત્રણેય",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વનસ્પતિ, વરસાદ, પવન - ત્રણેય</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "કયા સ્વરૂપના પ્રદૂષકોનું પ્રમાણ વાતવારણમાં સૌથી વિશેષ હોય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
                },
				{
					"option": "વાયુ",
					"correct": true
                },
				{
					"option": "પ્રવાહી",
					"correct": false
                },
				{
					"option": "એકેય નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "હવાનું પ્રદૂષણ થવાનું કારણ કયું છે ?",
			"a": [
				{
					"option": "ઉદ્યોગોના ધુમાડાથી",
					"correct": false
                },
				{
					"option": "વાહનોના ધુમાડાથી",
					"correct": false
                },
				{
					"option": "જંગલો કાપવાથી",
					"correct": false
                },
				{
					"option": "ઉદ્યોગોના ધુમાડાથી, વાહનોના ધુમાડાથી, જંગલો કાપવાથી - ત્રણેય",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉદ્યોગોના ધુમાડાથી, વાહનોના ધુમાડાથી, જંગલો કાપવાથી - ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
    ]
};