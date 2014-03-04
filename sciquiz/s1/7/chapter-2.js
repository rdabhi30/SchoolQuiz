// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 2 આહારના ઘટકો",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
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
			"q": "ખાદ્ય પદાર્થમાં કાર્બોદિત(સ્ટાર્ચ)ની હાજરી જાણવા કયા પદાર્થના દ્રાવણનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "મોરથૂથું",
					"correct": false
				},
				{
					"option": "કૉસ્ટિક સોડા",
					"correct": false
				},
				{
					"option": "આયોડિન",
					"correct": true
				},
				{
					"option": "સોડિયમ ક્લોરાઈડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આયોડિન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "કયા આહારમાંથી કાર્બોદિત વધુ પ્રમાણમાં મળે છે ?",
			"a": [
				{
					"option": "દાળ",
					"correct": false
				},
				{
					"option": "ભાત",
					"correct": true
				},
				{
					"option": "શાકભાજી",
					"correct": false
				},
				{
					"option": "ફળ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભાત</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "કયો ખાદ્ય પદાર્થ કાર્બોદિતનો સ્ત્રોત છે ?",
			"a": [
				{
					"option": "ધાન્ય",
					"correct": true
				},
				{
					"option": "કઠોળ",
					"correct": false
				},
				{
					"option": "લીલાં શાકભાજી",
					"correct": false
				},
				{
					"option": "ઘી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધાન્ય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "આહારનો કયો ઘટક શરીરમાં શક્તિદાતા તરીકે વર્તે છે ?",
			"a": [
				{
					"option": "કાર્બોદિત",
					"correct": true
				},
				{
					"option": "પ્રોટીન",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				},
				{
					"option": "ખનિજ ક્ષાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બોદિત</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "કોને આહારનો મુખ્ય ઘટક ગણવામાં આવે છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": false
				},
				{
					"option": "કાર્બોદિત",
					"correct": true
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બોદિત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "આહારનો કયો ઘટક શરીરને શક્તિ અને ગરમી પૂરી પાડે છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": false
				},
				{
					"option": "ખનીજ ક્ષાર",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": true
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચરબી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "ક્યા આહારમાંથી ચરબી મળે છે ?",
			"a": [
				{
					"option": "ધાન્યો",
					"correct": false
				},
				{
					"option": "કઠોળ",
					"correct": false
				},
				{
					"option": "ખાટાં ફળો",
					"correct": false
				},
				{
					"option": "દૂધ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દૂધ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "આહારનો કયો ઘટક શરીરમાં શક્તિસંચય તરીકે ઉપયોગી છે ?",
			"a": [
				{
					"option": "ચરબી",
					"correct": true
				},
				{
					"option": "પ્રોટીન",
					"correct": false
				},
				{
					"option": "ખનીજ ક્ષાર",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચરબી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "કયા ખાદ્ય પદાર્થમાં ચરબી વિશેષ પ્રમાણમાં હોય છે ?",
			"a": [
				{
					"option": "ભાત",
					"correct": false
				},
				{
					"option": "મગ",
					"correct": false
				},
				{
					"option": "ઘી",
					"correct": true
				},
				{
					"option": "લીલાં શાકભાજી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "તૈલી પદાર્થોમાંથી આહારનો કયો ઘટક મળે છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": false
				},
				{
					"option": "કાર્બોદિત",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": true
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચરબી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "દરેક દાળમાંથી આહારનો કયો ઘટક મળે છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": true
				},
				{
					"option": "કાર્બોદિત",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટીન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "આપણા શરીરનો બંધારણીય ઘટક કયો છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": true
				},
				{
					"option": "ખનીજ ક્ષાર",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટીન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "શામાંથી પ્રોટીન વધુ માત્રામાં મળી રહે છે ?",
			"a": [
				{
					"option": "અનાજ",
					"correct": false
				},
				{
					"option": "શાકભાજી",
					"correct": false
				},
				{
					"option": "મગફળી",
					"correct": false
				},
				{
					"option": "સોયાબીન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોયાબીન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "આહારનો કયો ઘટક અંતસ્ત્રાવોના બંધારણ માટે જરૂરી છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": true
				},
				{
					"option": "ખનીજ ક્ષાર",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટીન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "આહારનો કયો ઘટક સ્નાયુઓના સંકોચન માટે જરૂરી છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": true
				},
				{
					"option": "ખનીજ ક્ષાર",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટીન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "આહારનો કયો ઘટક ચેપ સામે રોગપ્રતિકારક શક્તિ આપે છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": true
				},
				{
					"option": "ખનીજ ક્ષાર",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટીન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "વિટામિન Aની ઊણપથી કયો રોગ થાય છે ?",
			"a": [
				{
					"option": "બેરીબેરી",
					"correct": false
				},
				{
					"option": "સ્કર્વી",
					"correct": false
				},
				{
					"option": "સુકતાન",
					"correct": false
				},
				{
					"option": "રતાંધળાપણું",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રતાંધળાપણું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "વિટામિન Bની ઊણપથી કયો રોગ થાય છે ?",
			"a": [
				{
					"option": "બેરીબેરી",
					"correct": true
				},
				{
					"option": "સ્કર્વી",
					"correct": false
				},
				{
					"option": "સુકતાન",
					"correct": false
				},
				{
					"option": "રતાંધળાપણું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બેરીબેરી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "વિટામિન Cની ઊણપથી કયો રોગ થાય છે ?",
			"a": [
				{
					"option": "બેરીબેરી",
					"correct": false
				},
				{
					"option": "સ્કર્વી",
					"correct": true
				},
				{
					"option": "સુકતાન",
					"correct": false
				},
				{
					"option": "રતાંધળાપણું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્કર્વી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "વિટામિન Dની ઊણપથી કયો રોગ થાય છે ?",
			"a": [
				{
					"option": "બેરીબેરી",
					"correct": false
				},
				{
					"option": "પેલાગ્રા",
					"correct": false
				},
				{
					"option": "સુકતાન",
					"correct": true
				},
				{
					"option": "રતાંધળાપણું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુકતાન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
		},
		{ // Question 21
			"q": "આમળાંમાં કયું વિટામિન વધુ પ્રમાણમાં હોય છે ?",
			"a": [
				{
					"option": "વિટામિન A",
					"correct": false
				},
				{
					"option": "વિટામિન B",
					"correct": false
				},
				{
					"option": "વિટામિન C",
					"correct": true
				},
				{
					"option": "વિટામિન D",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન C</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 22
			"q": "સૂર્યનાં કિરણો શરીર પર પડવાથી શરીરમાં કયું વિટામિન સંશ્લેષિત થાય છે ?",
			"a": [
				{
					"option": "વિટામિન A",
					"correct": false
				},
				{
					"option": "વિટામિન B",
					"correct": false
				},
				{
					"option": "વિટામિન C",
					"correct": false
				},
				{
					"option": "વિટામિન D",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન D</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 23
			"q": "શરીરમાં થતી ચયાપચયની ક્રિયાઓના સંશ્લેષણ દ્વારા આપણને કયું વિટામિન પ્રાપ્ત થાય છે ?",
			"a": [
				{
					"option": "વિટામિન D",
					"correct": false
				},
				{
					"option": "વિટામિન B",
					"correct": false
				},
				{
					"option": "વિટામિન C",
					"correct": false
				},
				{
					"option": "વિટામિન K",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન K</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 24
			"q": "દૂધમાં કયું વિટામિન હોતું નથી ?",
			"a": [
				{
					"option": "વિટામિન A",
					"correct": false
				},
				{
					"option": "વિટામિન B",
					"correct": false
				},
				{
					"option": "વિટામિન C",
					"correct": true
				},
				{
					"option": "વિટામિન D",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન C</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 25
			"q": "નીચેના પૈકી કયો રોગ હાડકાંને લગતો છે ?",
			"a": [
				{
					"option": "બેરીબેરી",
					"correct": false
				},
				{
					"option": "સ્કર્વી",
					"correct": false
				},
				{
					"option": "સુકતાન",
					"correct": true
				},
				{
					"option": "પાંડુરોગ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુકતાન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 26
			"q": "કયું વિટામિન રક્તના સંવર્ધનમાં મદદ કરે છે ?",
			"a": [
				{
					"option": "વિટામિન D",
					"correct": false
				},
				{
					"option": "વિટામિન B",
					"correct": false
				},
				{
					"option": "વિટામિન C",
					"correct": false
				},
				{
					"option": "વિટામિન K",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન K</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 27
			"q": "કયું વિટામિન રુધિર જામી જવામાં મદદ કરે છે ?",
			"a": [
				{
					"option": "વિટામિન D",
					"correct": false
				},
				{
					"option": "વિટામિન B",
					"correct": false
				},
				{
					"option": "વિટામિન C",
					"correct": false
				},
				{
					"option": "વિટામિન K",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન K</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 28
			"q": "હાડકાંના બંધારણ માટે કયો ખનીજ ક્ષાર જરૂરી છે ?",
			"a": [
				{
					"option": "લોહતત્ત્વ",
					"correct": false
				},
				{
					"option": "કૅલ્શિયમ",
					"correct": true
				},
				{
					"option": "આયોડિન",
					"correct": false
				},
				{
					"option": "સોડિયમ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૅલ્શિયમ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 29
			"q": "હિમોગ્લોબિનના બંધારણમાં કયો ખનીજ ક્ષાર જરૂરી છે ?",
			"a": [
				{
					"option": "લોહતત્ત્વ",
					"correct": true
				},
				{
					"option": "કૅલ્શિયમ",
					"correct": false
				},
				{
					"option": "આયોડિન",
					"correct": false
				},
				{
					"option": "ફૉસ્ફરસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોહતત્ત્વ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 30
			"q": "કયા ખનીજ ક્ષારની ઊણપથી ગૉઈટર નામનો રોગ થાય છે ?",
			"a": [
				{
					"option": "લોહતત્ત્વ",
					"correct": false
				},
				{
					"option": "કૅલ્શિયમ",
					"correct": false
				},
				{
					"option": "આયોડિન",
					"correct": true
				},
				{
					"option": "ફૉસ્ફરસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આયોડિન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 31
			"q": "સલ્ફર (ખનીજ ક્ષાર) ક્યા ખાદ્ય પદાર્થમાંથી મળે છે ?",
			"a": [
				{
					"option": "દહીં",
					"correct": false
				},
				{
					"option": "ડુંગળી",
					"correct": true
				},
				{
					"option": "મીઠું",
					"correct": false
				},
				{
					"option": "છાશ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડુંગળી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 32
			"q": "કયા ખાદ્ય પદાર્થમાં આહારના મોટા ભાગના ઘટકો સમાવિષ્ટ છે ?",
			"a": [
				{
					"option": "દૂધ",
					"correct": true
				},
				{
					"option": "ઘી",
					"correct": false
				},
				{
					"option": "લીલાં શાકભાજી",
					"correct": false
				},
				{
					"option": "માંસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દૂધ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 33
			"q": "શરીરમાં પ્રોટીનની ઊણપથી થતો ત્રુટિજન્ય રોગ કયો છે ?",
			"a": [
				{
					"option": "ગૉઇટર",
					"correct": false
				},
				{
					"option": "સ્કર્વી",
					"correct": false
				},
				{
					"option": "બેરીબેરી",
					"correct": false
				},
				{
					"option": "ક્વોશિયોરકોર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્વોશિયોરકોર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 34
			"q": "શરીરમાં આયર્ન (લોહતત્વ)ની ઊણપથી થતો ત્રુટિજન્ય રોગ કયો છે ?",
			"a": [
				{
					"option": "ગૉઇટર",
					"correct": false
				},
				{
					"option": "બેરીબેરી",
					"correct": false
				},
				{
					"option": "એનિમિયા",
					"correct": true
				},
				{
					"option": "મરાસ્મસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એનિમિયા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 35
			"q": "કયો ત્રુટિજન્ય રોગ વિટામિનની ઊણપથી થતો નથી ?",
			"a": [
				{
					"option": "પેલાગ્રા",
					"correct": false
				},
				{
					"option": "રિકેટ્સ (સુકતાન)",
					"correct": false
				},
				{
					"option": "સ્કર્વી",
					"correct": false
				},
				{
					"option": "મરાસ્મસ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મરાસ્મસ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 36
			"q": "પેલાગ્રા આહારના કયા ઘટકની ઊણપથી થતો રોગ છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": false
				},
				{
					"option": "ખનીજ ક્ષાર",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
		},
		{ // Question 37
			"q": "દાંતમાંથી લોહી નીકળે તો કયા વિટામિનની ઊણપ હોય ?",
			"a": [
				{
					"option": "વિટામિન A",
					"correct": false
				},
				{
					"option": "વિટામિન B",
					"correct": false
				},
				{
					"option": "વિટામિન C",
					"correct": true
				},
				{
					"option": "વિટામિન D",
					"correct": false
				} // no comma here
				],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન C</p>   વધુ વાંચનનો મહાવરો રાખો.</p>"
		},
		{ // Question 39
			"q": "વંધ્યત્વ કયા વિટામિનની ઊણપથી થતો રોગ છે ?",
			"a": [
				{
					"option": "વિટામિન A",
					"correct": false
				},
				{
					"option": "વિટામિન B",
					"correct": false
				},
				{
					"option": "વિટામિન E",
					"correct": true
				},
				{
					"option": "વિટામિન D",
					"correct": false
				} // no comma here
				],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિટામિન E</p>   વધુ વાંચનનો મહાવરો રાખો.</p>"
		},
		{ // Question 40
			"q": "ખોરાક જરૂર કરતાં વધુ ખાવાથી કે ઓછો ખાવાથી સર્જાતી શારીરિક ખામીને શું કહે છે ?",
			"a": [
				{
					"option": "સુપોષણ",
					"correct": false
				},
				{
					"option": "દુપોષણ",
					"correct": false
				},
				{
					"option": "કુપોષણ",
					"correct": true
				},
				{
					"option": "એકેય નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુપોષણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>"
		} // no comma here    
    ]
};