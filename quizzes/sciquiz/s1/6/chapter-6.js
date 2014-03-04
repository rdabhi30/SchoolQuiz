// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 6 પાણી",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
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
			"q": "નીચેના પૈકી કયો પાણીનો સ્ત્રોત નથી ?",
			"a": [
				{
					"option": "નદી",
					"correct": false
				},
				{
					"option": "સરોવર",
					"correct": false
				},
				{
					"option": "આકાશ",
					"correct": true
				},
				{
					"option": "કૂવો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આકાશ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "પાણીમાંથી વરાળ બનવાની ક્રિયાને શું કહે છે ?",
			"a": [
				{
					"option": "બાષ્પીભવન",
					"correct": true
				},
				{
					"option": "ઘનીભવન",
					"correct": false
				},
				{
					"option": "ગાળણ",
					"correct": false
				},
				{
					"option": "ઉત્કલન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાષ્પીભવન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "પાણીના વાયુ સ્વરૂપને શું કહે છે ?",
			"a": [
				{
					"option": "ધુમાડો",
					"correct": false
				},
				{
					"option": "વરાળ",
					"correct": true
				},
				{
					"option": "વાદળ",
					"correct": false
				},
				{
					"option": "વરસાદ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વરાળ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "વરાળને બીજા કયા નામે ઓળખવામાંં આવે છે ?",
			"a": [
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "બાષ્પ",
					"correct": true
				},
				{
					"option": "જળ",
					"correct": false
				},
				{
					"option": "વાદળ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાષ્પ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "દરિયાના ખારા પાણીમાંથી બનતી વરાળમાં શું હોય છે ?",
			"a": [
				{
					"option": "મીઠું",
					"correct": false
				},
				{
					"option": "શુદ્ધ પાણીની બાષ્પ",
					"correct": true
				},
				{
					"option": "મીઠું અને બાષ્પ",
					"correct": false
				},
				{
					"option": "ક્ષાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુદ્ધ પાણીની બાષ્પ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "પાણીની વરાળમાંથી વાદળ બંધાવા શાની જરૂર છે ?",
			"a": [
				{
					"option": "ધૂળના રજકણોની",
					"correct": true
				},
				{
					"option": "મેઘગર્જનાની",
					"correct": false
				},
				{
					"option": "વીજળીની",
					"correct": false
				},
				{
					"option": "સૂર્યની ગરમીની",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધૂળના રજકણોની</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "પાણીની વરાળ ઠંડી પડી પાણીના ટીપાંમાં રૂપાંતર થવાની ક્રિયાને શું કહે છે ?",
			"a": [
				{
					"option": "ગલન",
					"correct": false
				},
				{
					"option": "ઉત્કલન",
					"correct": false
				},
				{
					"option": "બાષ્પીભવન",
					"correct": false
				},
				{
					"option": "ઠારણક્રિયા",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઠારણક્રિયા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "કઈ પદ્ધતિ દ્વારા પાણીના ખૂબ જ વધુ જથ્થાનો સંગ્રહ કરી શકાય છે ?",
			"a": [
				{
					"option": "ડેમ દ્વારા",
					"correct": true
				},
				{
					"option": "ચેકડેમ દ્વારા",
					"correct": false
				},
				{
					"option": "નહેર દ્વારા",
					"correct": false
				},
				{
					"option": "તળાવ દ્વારા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડેમ દ્વારા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "ગામમાંથી નદી પસાર થતી ન હોય તો જળ સંગ્રહ કઈ રીતે કરવો જોઈએ ?",
			"a": [
				{
					"option": "ડેમ દ્વારા",
					"correct": false
				},
				{
					"option": "ચેકડેમ દ્વારા",
					"correct": false
				},
				{
					"option": "તળાવ બનાવીને",
					"correct": true
				},
				{
					"option": "નહેર દ્વારા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તળાવ બનાવીને</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "રિચાર્જ પદ્ધતિથી નીચેનામાંથી શામાં પાણીનું સ્તર ઊંચુ લાવી શકાય છે ?",
			"a": [
				{
					"option": "નદી",
					"correct": false
				},
				{
					"option": "સરોવર",
					"correct": false
				},
				{
					"option": "કૂવો",
					"correct": true
				},
				{
					"option": "તળાવ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૂવો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "ઠારણક્રિયા બીજા કયા નામે ઓળખાય છે ?",
			"a": [
				{
					"option": "બાષ્પીભવન",
					"correct": false
				},
				{
					"option": "ઘનીભવન",
					"correct": true
				},
				{
					"option": "ઘનાવરણ",
					"correct": false
				},
				{
					"option": "મૃદાવરણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘનીભવન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "પાણીનો સૌથી મુખ્ય સ્ત્રોત કયો  છે ?",
			"a": [
				{
					"option": "વરસાદ",
					"correct": true
				},
				{
					"option": "સરોવર",
					"correct": false
				},
				{
					"option": "નદી",
					"correct": false
				},
				{
					"option": "તળાવ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વરસાદ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પાણી આપણને જ્યાંથી મળે તેને શું કહેવાય ?",
			"a": [
				{
					"option": "જળ સંચય",
					"correct": false
				},
				{
					"option": "પ્રકાશ સ્ત્રોત",
					"correct": false
				},
				{
					"option": "નળ સ્ત્રોત",
					"correct": false
				},
				{
					"option": "જળ સ્ત્રોત",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જળ સ્ત્રોત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "નીચેનામાંથી પાણી બચાવવા માટેની કહેવત કઈ  છે ?",
			"a": [
				{
					"option": "બોલે તેના બોર વેચાય",
					"correct": false
				},
				{
					"option": "બાર ગાઉએ બોલી બદલાય",
					"correct": false
				},
				{
					"option": "પાણી પહેલા પાળ બાંધો",
					"correct": false
				},
				{
					"option": "જળ એ જ જીવન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જળ એ જ જીવન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "વરસાદના પાણીને વહી જતું અટકાવી તેનો સંગ્રહ કરવો તેને શું કહે છે ?",
			"a": [
				{
					"option": "જળ સંચય",
					"correct": true
				},
				{
					"option": "પ્રકાશ સંચય",
					"correct": false
				},
				{
					"option": "નળ સંચય",
					"correct": false
				},
				{
					"option": "જળ સ્ત્રોત",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જળ સંચય</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "પાણી દૂષિત થવાની ક્રિયાને શું કહે છે ?",
			"a": [
				{
					"option": "જળ પ્રદૂષણ",
					"correct": true
				},
				{
					"option": "વાયુ પ્રદૂષણ",
					"correct": false
				},
				{
					"option": "ધ્વનિ પ્રદૂષણ",
					"correct": false
				},
				{
					"option": "અવકાશ પ્રદૂષણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જળ પ્રદૂષણ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "પૃથ્વી પરનાં પાણીમાંથી બાષ્પીભવન દ્વારા વાદળ બની તે જ પાણી પૃથ્વી પર વરસાદ સ્વરૂપે પાછું ફરે છે. તેને શું કહે છે?",
			"a": [
				{
					"option": "દલચક્ર",
					"correct": false
				},
				{
					"option": "મનચક્ર",
					"correct": false
				},
				{
					"option": "વાયુચક્ર",
					"correct": false
				},
				{
					"option": "જળચક્ર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જળચક્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "આમાંથી કઈ રીતથી જળસંચય ન કરી શકાય ?",
			"a": [
				{
					"option": "ડેમ બનાવીને",
					"correct": false
				},
				{
					"option": "ચેકડેમ બનાવીને",
					"correct": false
				},
				{
					"option": "ખેત તલાવડી બનાવીને",
					"correct": false
				},
				{
					"option": "કૂવામાંથી પાણી કાઢીને",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૂવામાંથી પાણી કાઢીને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "વાદળાંમાંથી વરસાદ ક્યારે પડે ?",
			"a": [
				{
					"option": "પાણીના ઠંડા પડતા ટીપાં મોટા બને ત્યારે",
					"correct": true
				},
				{
					"option": "પાણીના ઠંડા પડતા ટીપાં નાના બને ત્યારે",
					"correct": false
				},
				{
					"option": "પાણીના ગરમ થતા ટીપાં મોટા બને ત્યારે",
					"correct": false
				},
				{
					"option": "પાણીના ગરમ થતા ટીપાં નાના બને ત્યારે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણીના ઠંડા પડતા ટીપાં મોટા બને ત્યારે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "નીચેનામાંથી વાદળ બનવા માટે શું જરૂરી છે ?",
			"a": [
				{
					"option": "રેતી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "આકાશ",
					"correct": false
				},
				{
					"option": "ધૂળના રજકણો",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધૂળના રજકણો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};