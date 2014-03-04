// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 9 પ્રકાશ",
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
			"q": "જે વસ્તુ પ્રકાશનું ઉત્સર્જન કરે છે તે વસ્તુને શું કહે છે ?",
			"a": [
				{
					"option": "પ્રકાશવર્ષ",
					"correct": false
				},
				{
					"option": "પ્રકાશનું ઉદ્ગમસ્થાન",
					"correct": true
				},
				{
					"option": "પ્રકાશનું કિરણ",
					"correct": false
				},
				{
					"option": "પ્રકાશસ્થાન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રકાશનું ઉદ્ગમસ્થાન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "પ્રકાશના ઉદ્ગમસ્થાન કેટલાં છે ?",
			"a": [
				{
					"option": "2",
					"correct": true
				},
				{
					"option": "3",
					"correct": false
				},
				{
					"option": "4",
					"correct": false
				},
				{
					"option": "6",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "આગિયો કયા પ્રકારનું ઉદ્ગમસ્થાન છે ?",
			"a": [
				{
					"option": "સરકારી",
					"correct": false
				},
				{
					"option": "કુદરતી",
					"correct": true
				},
				{
					"option": "કૃત્રિમ",
					"correct": false
				},
				{
					"option": "જાહેર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુદરતી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "નીચેનામાંથી કયું પ્રકાશનું ઉદ્ગમસ્થાન નથી ?",
			"a": [
				{
					"option": "સૂર્ય",
					"correct": false
				},
				{
					"option": "ચંદ્ર",
					"correct": true
				},
				{
					"option": "તારા",
					"correct": false
				},
				{
					"option": "આગિયો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચંદ્ર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "નીચેનામાંથી કયું પ્રકાશનું કુદરતી ઉદ્ગમસ્થાન નથી ?",
			"a": [
				{
					"option": "સૂર્ય",
					"correct": false
				},
				{
					"option": "મીણબત્તી",
					"correct": true
				},
				{
					"option": "તારા",
					"correct": false
				},
				{
					"option": "આગિયો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીણબત્તી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નીચેનામાંથી કયું પ્રકાશનું કૃત્રિમ ઉદ્ગમસ્થાન નથી ?",
			"a": [
				{
					"option": "તારા",
					"correct": true
				},
				{
					"option": "ફાનસ",
					"correct": false
				},
				{
					"option": "બલ્બ",
					"correct": false
				},
				{
					"option": "ટૉર્ચ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તારા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "પ્રકાશનું સૌથી મહત્ત્વનું ઉદ્ગમસ્થાન કયું છે ?",
			"a": [
				{
					"option": "ટ્યુબલાઈટ",
					"correct": false
				},
				{
					"option": "મીણબત્તી",
					"correct": false
				},
				{
					"option": "ચંદ્ર",
					"correct": false
				},
				{
					"option": "સૂર્ય",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂર્ય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "પ્રકાશનું ઠંડુ કુદરતી ઉદ્ગમસ્થાન કયું છે ?",
			"a": [
				{
					"option": "આગિયો",
					"correct": true
				},
				{
					"option": "ચંદ્ર",
					"correct": false
				},
				{
					"option": "બલ્બ",
					"correct": false
				},
				{
					"option": "સૂર્ય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આગિયો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "ચંદ્ર પર જે પ્રકાશ પડે છે તેમાંથી કેટલા ટકા પ્રકાશનું શોષણ થાય છે ?",
			"a": [
				{
					"option": "97",
					"correct": false
				},
				{
					"option": "3",
					"correct": false
				},
				{
					"option": "93",
					"correct": true
				},
				{
					"option": "7",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 93</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "ચંદ્ર પર જે પ્રકાશ પડે છે તેમાંથી કેટલા ટકા પ્રકાશ પરાવર્તન પામી પૃથ્વી સુધી પહોંચે છે ?",
			"a": [
				{
					"option": "97",
					"correct": false
				},
				{
					"option": "3",
					"correct": false
				},
				{
					"option": "93",
					"correct": false
				},
				{
					"option": "7",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 7</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "આપણને વસ્તુ ક્યારે દેખાય છે ?",
			"a": [
				{
					"option": "વસ્તુ પર પ્રકાશ પડે ત્યારે",
					"correct": true
				},
				{
					"option": "વસ્તુ પર પ્રકાશ ન પડે ત્યારે",
					"correct": false
				},
				{
					"option": "વસ્તુ કાળી હોય ત્યારે",
					"correct": false
				},
				{
					"option": "વસ્તુ લાલ હોય ત્યારે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વસ્તુ પર પ્રકાશ પડે ત્યારે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "પ્રકાશ કેવી રેખામાં ગતિ કરે છે ?",
			"a": [
				{
					"option": "સીધી રેખામાં",
					"correct": true
				},
				{
					"option": "વાંકીચૂકી રેખામાં",
					"correct": false
				},
				{
					"option": "ગોળ રેખામાં",
					"correct": false
				},
				{
					"option": "વમળયુક્ત રેખામાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સીધી રેખામાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "જે પદાર્થમાંથી વધુ પ્રકાશ પસાર થઈ શકે છે તેને શું કહે છે ?",
			"a": [
				{
					"option": "અપારદર્શક પદાર્થ",
					"correct": false
				},
				{
					"option": "પારભાસક પદાર્થ",
					"correct": false
				},
				{
					"option": "આરસપહાણ પદાર્થ",
					"correct": false
				},
				{
					"option": "પારદર્શક પદાર્થ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પારદર્શક પદાર્થ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "જે પદાર્થમાંથી વધુ પ્રકાશ પસાર થઈ શકતો નથી તેને શું કહે છે ?",
			"a": [
				{
					"option": "અપારદર્શક પદાર્થ",
					"correct": true
				},
				{
					"option": "પારભાસક પદાર્થ",
					"correct": false
				},
				{
					"option": "આરસપહાણ પદાર્થ",
					"correct": false
				},
				{
					"option": "પારદર્શક પદાર્થ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અપારદર્શક પદાર્થ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "નીચેનામાંથી સંપૂર્ણ પારદર્શક પદાર્થ કયો છે ?",
			"a": [
				{
					"option": "પાણી",
					"correct": false
				},
				{
					"option": "કાચ",
					"correct": false
				},
				{
					"option": "દૂધિયો કાચ",
					"correct": false
				},
				{
					"option": "હવા",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હવા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "સૂર્યગ્રહણ થાય ત્યારે વચ્ચે શું હોય છે ?",
			"a": [
				{
					"option": "ચંદ્ર",
					"correct": true
				},
				{
					"option": "સૂર્ય",
					"correct": false
				},
				{
					"option": "પૃથ્વી",
					"correct": false
				},
				{
					"option": "ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચંદ્ર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "ચંદ્રગ્રહણ થાય ત્યારે વચ્ચે શું હોય છે ?",
			"a": [
				{
					"option": "ચંદ્ર",
					"correct": false
				},
				{
					"option": "સૂર્ય",
					"correct": false
				},
				{
					"option": "પૃથ્વી",
					"correct": true
				},
				{
					"option": "ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૃથ્વી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "સૂર્યગ્રહણની ઘટના ક્યારે બને છે ?",
			"a": [
				{
					"option": "અમાસની રાત્રે",
					"correct": false
				},
				{
					"option": "અમાસના દિવસે",
					"correct": true
				},
				{
					"option": "પૂનમની રાત્રે",
					"correct": false
				},
				{
					"option": "પૂનમની દિવસે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અમાસના દિવસે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "ચંદ્રગ્રહણની ઘટના ક્યારે બને છે ?",
			"a": [
				{
					"option": "અમાસની રાત્રે",
					"correct": false
				},
				{
					"option": "અમાસના દિવસે",
					"correct": false
				},
				{
					"option": "પૂનમની રાત્રે",
					"correct": true
				},
				{
					"option": "પૂનમની દિવસે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂનમની રાત્રે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "પ્રકાશના માર્ગમાં અપારદર્શક પદાર્થ આવવાથી પ્રકાશ અવરોધાય છે ત્યારે શું થાય છે ?",
			"a": [
				{
					"option": "પવન થાય છે.",
					"correct": false
				},
				{
					"option": "વરસાદ પડે છે.",
					"correct": false
				},
				{
					"option": "પડછાયો પડે છે.",
					"correct": true
				},
				{
					"option": "રાત થાય છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પડછાયો પડે છે.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};