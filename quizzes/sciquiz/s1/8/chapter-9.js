// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 9 પ્રકાશનું વક્રીભવન",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
		"standard": "8",
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
			"q": "પાણી ભરેલા ગ્લાસમાં રૂપિયાનો સિક્કો મૂકીને તેનું ગ્લાસની અંદર અવલોકન કરતાં સિક્કો કઈ જગ્યાએ દેખાય છે ?",
			"a": [
				{
					"option": "સિક્કો ગ્લાસની બહાર દેખાય છે. ",
					"correct": false
				},
				{
					"option": "સિક્કો ગ્લાસના તળિયાની નીચે દેખાય છે.",
					"correct": false
				},
				{
					"option": "સિક્કો ગ્લાસમાં સહેજ ઉપર દેખાય છે.",
					"correct": true
				},
				{
					"option": "સિક્કો પાણી ઉપર તરતો દેખાય છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિક્કો ગ્લાસમાં સહેજ ઉપર દેખાય છે.</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "પ્રકાશના કિરણનું વક્રિભવન ક્યારે થતું જોવા મળે છે ?",
			"a": [
				{
					"option": "પ્રકાશના માર્ગમાં કોઈ અવરોધ આવે ત્યારે",
					"correct": false
				},
				{
					"option": "પ્રકાશના માર્ગનું માધ્યમ બદલાય ત્યારે",
					"correct": true
				},
				{
					"option": "પ્રકાશ વધતો-ઓછો થતો હોય ત્યારે",
					"correct": false
				},
				{
					"option": "પ્રકાશ અપારદર્શક સપાટીને અથડાઈને પાછો ફેંકાય ત્યારે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રકાશના માર્ગનું માધ્યમ બદલાય ત્યારે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "ટૉર્ચ વડે કાચના લંબઘન પર કિરણપુંજ આપાત કરતી વખતે પ્રકાશનું ત્રાંસું કિરણ હવામાંથી કાચમાં દાખલ થતી વખતે શું થાય છે ?",
			"a": [
				{
					"option": "તે લંબ તરફ વળે છે.",
					"correct": true
				},
				{
					"option": "તે લંબથી દૂર જાય છે.",
					"correct": false
				},
				{
					"option": "તે વક્રીભવન પામતું નથી.",
					"correct": false
				},
				{
					"option": "તે પરાવર્તન પામે છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તે લંબ તરફ વળે છે.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "પાતળા માધ્યમમાંથી ઘટ્ટ માધ્યમમાં દાખલ થતા પ્રકાશના ત્રાંસા કિરણ માટે આપાતકોણના માપ i અને વક્રીભૂતકોણના માપ r વચ્ચે શો સંબંધ છે ?",
			"a": [
				{
					"option": "i=r",
					"correct": false
				},
				{
					"option": "i<r",
					"correct": false
				},
				{
					"option": "i>r",
					"correct": true
				},
				{
					"option": "i<=r",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: i>r</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "પાણીમાંથી હવામાં દાખલ થતા પ્રકાશના ત્રાંસા કિરણ માટે આપાતકોણના માપ i અને વક્રીભૂતકોણના માપ r વચ્ચે શો સંબંધ છે ?",
			"a": [
				{
					"option": "i=r",
					"correct": false
				},
				{
					"option": "i<r",
					"correct": true
				},
				{
					"option": "i>r",
					"correct": false
				},
				{
					"option": "i<=r",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: i<r</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "પાણીનો નિરપેક્ષ વક્રીભવનાંક કેટલો છે ?",
			"a": [
				{
					"option": "1.0",
					"correct": false
				},
				{
					"option": "1.5",
					"correct": false
				},
				{
					"option": "4/3",
					"correct": true
				},
				{
					"option": "5/4",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4/3</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "(ફ્લિન્ટ) કાચનો નિરપેક્ષ વક્રીભવનાંક કેટલો છે ?",
			"a": [
				{
					"option": "1.66",
					"correct": true
				},
				{
					"option": "1.33",
					"correct": false
				},
				{
					"option": "1.25",
					"correct": false
				},
				{
					"option": "2.42",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1.66</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "સામાન્ય કાચનો નિરપેક્ષ વક્રીભવનાંક કેટલો છે ?",
			"a": [
				{
					"option": "1.25",
					"correct": false
				},
				{
					"option": "1.33",
					"correct": false
				},
				{
					"option": "1.5",
					"correct": true
				},
				{
					"option": "2.4",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1.5</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "સૌથી વધુ વક્રીભવનાંક કોનો છે ?",
			"a": [
				{
					"option": "પાણીનો",
					"correct": false
				},
				{
					"option": "કાચનો",
					"correct": false
				},
				{
					"option": "હવાનો",
					"correct": false
				},
				{
					"option": "હીરાનો",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હીરાનો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "પાણી કરતાં શૂન્યાવકાશમાં પ્રકાશનો વેગ કેટલા ગણો છે ?",
			"a": [
				{
					"option": "2",
					"correct": false
				},
				{
					"option": "1/2",
					"correct": false
				},
				{
					"option": "4/3",
					"correct": true
				},
				{
					"option": "3/4",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4/3</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "વક્રીભવનાંક માટે કઈ સંજ્ઞા વપરાય છે ?",
			"a": [
				{
					"option": "ડેલ્ટા",
					"correct": false
				},
				{
					"option": "મ્યુ",
					"correct": true
				},
				{
					"option": "પાઇ",
					"correct": false
				},
				{
					"option": "યુ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મ્યુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "વિચલનકોણ માટે કઈ સંજ્ઞા વપરાય છે ?",
			"a": [
				{
					"option": "ડેલ્ટા",
					"correct": true
				},
				{
					"option": "મ્યુ",
					"correct": false
				},
				{
					"option": "પાઇ",
					"correct": false
				},
				{
					"option": "યુ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડેલ્ટા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પ્રિઝનને કેટલી સપાટીઓ હોય છે ?",
			"a": [
				{
					"option": "3",
					"correct": false
				},
				{
					"option": "4",
					"correct": false
				},
				{
					"option": "5",
					"correct": true
				},
				{
					"option": "6",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "શૂન્યાવકાશમાં પ્રકાશનો વેગ કેટલો છે ?",
			"a": [
				{
					"option": "300000 km/s",
					"correct": true
				},
				{
					"option": "225000 km/s",
					"correct": false
				},
				{
					"option": "180000 થી 200000 km/s",
					"correct": false
				},
				{
					"option": "350000 km/s",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 300000 km/s</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "પાણીમાં પ્રકાશનો વેગ કેટલો છે ?",
			"a": [
				{
					"option": "300000 km/s",
					"correct": false
				},
				{
					"option": "225000 km/s",
					"correct": true
				},
				{
					"option": "180000 થી 200000 km/s",
					"correct": false
				},
				{
					"option": "350000 km/s",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 225000 km/s</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "કાચમાં પ્રકાશનો વેગ કેટલો છે ?",
			"a": [
				{
					"option": "300000 km/s",
					"correct": false
				},
				{
					"option": "225000 km/s",
					"correct": false
				},
				{
					"option": "180000 થી 200000 km/s",
					"correct": true
				},
				{
					"option": "350000 km/s",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 180000 થી 200000 km/s</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "પ્રકાશનું ત્રાંસું કિરણ પાતળા માધ્યમમાંથી ઘટ્ટ માધ્યમમાં દાખલ થાય છે ત્યારે તેનું શું થાય છે ?",
			"a": [
				{
					"option": "તે લંબ તરફ સહેજ વાંકું વળે છે.",
					"correct": true
				},
				{
					"option": "તે લંબથી સહેજ દૂર જાય છે.",
					"correct": false
				},
				{
					"option": "તે એમને એમ જ રહે છે.",
					"correct": false
				},
				{
					"option": "ત્રણેય સાચાં છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તે લંબ તરફ સહેજ વાંકું વળે છે.</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "પ્રકાશનું ત્રાંસું કિરણ ઘટ્ટ માધ્યમમાંથી પાતળા માધ્યમમાં દાખલ થાય છે ત્યારે તેનું શું થાય છે ?",
			"a": [
				{
					"option": "તે લંબ તરફ સહેજ વાંકું વળે છે.",
					"correct": false
				},
				{
					"option": "તે લંબથી સહેજ દૂર જાય છે.",
					"correct": true
				},
				{
					"option": "તે એમને એમ જ રહે છે.",
					"correct": false
				},
				{
					"option": "ત્રણેય સાચાં છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તે લંબથી સહેજ દૂર જાય છે.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "પ્રકાશના વક્રીભવનનું માપ શાના દ્વારા જાણી શકાય છે ?",
			"a": [
				{
					"option": "વક્રીભૂતકોણ",
					"correct": false
				},
				{
					"option": "વક્રીભવ",
					"correct": false
				},
				{
					"option": "વક્રીભવનાંક",
					"correct": true
				},
				{
					"option": "વક્રીભૂતકિરણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રીભવનાંક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "વક્રીભૂતકિરણ અને સપાટીને દોરેલા લંબ વચ્ચેના ખૂણાને શું કહે છે ?",
			"a": [
				{
					"option": "વક્રીભૂતકોણ",
					"correct": true
				},
				{
					"option": "વક્રીભવનાંક",
					"correct": false
				},
				{
					"option": "વક્રીભૂતકિરણ",
					"correct": false
				},
				{
					"option": "પરાવર્તનકોણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રીભૂતકોણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       } // no comma here 
    ]
};