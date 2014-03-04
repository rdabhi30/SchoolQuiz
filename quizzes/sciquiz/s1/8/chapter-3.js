// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 3 આધુનિક ખેતી",
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
			"q": "ખેત-ઉત્પાદન વધારવા નીચેના પૈકી શું જરૂરી નથી ?",
			"a": [
				{
					"option": "આધુનિક ખેતે-ઓજારો",
					"correct": false
				},
				{
					"option": "આધુનિક પિયત પદ્ધતિ",
					"correct": false
				},
				{
					"option": "સુધારેલ બિયારણ",
					"correct": false
				},
				{
					"option": "પરંપરાગત ખેતપદ્ધતિ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરંપરાગત ખેતપદ્ધતિ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "હાર્વેસ્ટરનો ઉપયોગ શો છે ?",
			"a": [
				{
					"option": "જમીન ખેડવા",
					"correct": false
				},
				{
					"option": "પાકને દવા છાંટવા",
					"correct": false
				},
				{
					"option": "પાકની લણણી કરવા",
					"correct": false
				},
				{
					"option": "ડૂંડામાંથી અનાજ છૂટું પાડવા",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડૂંડામાંથી અનાજ છૂટું પાડવા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "ઘરની આસપાસની જગ્યામાં ઘરગથ્થુ જરૂરી શાકભાજીનું વાવેતર કરવું તેને શું કહે છે ?",
			"a": [
				{
					"option": "કિચન ગાર્ડન",
					"correct": true
				},
				{
					"option": "ટેરેસ ગાર્ડન",
					"correct": false
				},
				{
					"option": "બાગાયતી ખેતી",
					"correct": false
				},
				{
					"option": "હાઇડ્રોપોનિક્સ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિચન ગાર્ડન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "મકાનની છત પર શાકભાજી કે ફૂલ છોડ ઉગાડવાની ગોઠવણ કરવી તેને શું કહે છે ?",
			"a": [
				{
					"option": "કિચન ગાર્ડન",
					"correct": false
				},
				{
					"option": "ટેરેસ ગાર્ડન",
					"correct": true
				},
				{
					"option": "બાગાયતી ખેતી",
					"correct": false
				},
				{
					"option": "બોટનિકલ ગાર્ડન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટેરેસ ગાર્ડન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "નીચેના પૈકી કોની લીલાં પાંદડાંવાળી શાકભાજીમાં ગણના થતી નથી ?",
			"a": [
				{
					"option": "મેથી",
					"correct": false
				},
				{
					"option": "સરગવો",
					"correct": true
				},
				{
					"option": "તાંદળજો",
					"correct": false
				},
				{
					"option": "પાલક",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરગવો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "છોડને સૂર્યની તીવ્ર ગરમીથી બચાવવા ખેતરની જરૂરી જગ્યામાં ચારેય બાજુ અને ઉપર જાળી લગાડવામાં આવે છે તેવી રચનાને શું કહે છે ?",
			"a": [
				{
					"option": "નેટહાઉસ",
					"correct": true
				},
				{
					"option": "બોટહાઉસ",
					"correct": false
				},
				{
					"option": "નર્સરી",
					"correct": false
				},
				{
					"option": "રોપા ઉછેર કેન્દ્ર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નેટહાઉસ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "બાગાયતી ખેતીમાં સારી જાતના છોડ તૈયાર કરવા શું જરૂરી છે ?",
			"a": [
				{
					"option": "કલમ",
					"correct": true
				},
				{
					"option": "નેટહાઉસ",
					"correct": false
				},
				{
					"option": "સંકરણ",
					"correct": false
				},
				{
					"option": "સંકર(હાઈબ્રિડ) બિયારણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કલમ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "કઈ સિંચાઈ પદ્ધતિમાં પાણીનો વ્યય સૌથી ઓછો થાય છે ?",
			"a": [
				{
					"option": "ક્યારા-પિયત પદ્ધતિ",
					"correct": false
				},
				{
					"option": "ફુવારા-પિયત પદ્ધતિ",
					"correct": false
				},
				{
					"option": "ટપક-પિયત પદ્ધતિ",
					"correct": true
				},
				{
					"option": "ધોરિયા-પિયત પદ્ધતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટપક-પિયત પદ્ધતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "જમીન વિના ખેતી કરવાની પદ્ધતિ કઈ છે ?",
			"a": [
				{
					"option": "કિચન ગાર્ડન",
					"correct": false
				},
				{
					"option": "બાગાયતી ખેતી",
					"correct": false
				},
				{
					"option": "હાઇડ્રોપોનિક્સ",
					"correct": true
				},
				{
					"option": "પરંપરાગત ખેતી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇડ્રોપોનિક્સ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "નીચેના પૈકી કઈ હાઇડ્રોપોનિક્સ ખેતીની રીત નથી ?",
			"a": [
				{
					"option": "વૉટર કલ્ચર પદ્ધતિ",
					"correct": false
				},
				{
					"option": "સૅન્ડ કલ્ચર પદ્ધતિ",
					"correct": false
				},
				{
					"option": "ગ્રૅવલ કલ્ચર પદ્ધતિ",
					"correct": false
				},
				{
					"option": "હોર્ટિકલ્ચર પદ્ધતિ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હોર્ટિકલ્ચર પદ્ધતિ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "ખેતીની કઈ પદ્ધતિમાં પીવીસી પાઇપમાં યોગ્ય અંતરે પાડેલાં કાણાંમાં છોડના મૂળને ગોઠવવામાં આવે છે અને તેમાંથી વહેતા પોષકતત્ત્વોયુક્ત પાણી દ્વારા છોડને ઉછેરવામાં આવે છે ?",
			"a": [
				{
					"option": "વૉટર કલ્ચર પદ્ધતિ",
					"correct": true
				},
				{
					"option": "સૅન્ડ કલ્ચર પદ્ધતિ",
					"correct": false
				},
				{
					"option": "ગ્રૅવલ કલ્ચર પદ્ધતિ",
					"correct": false
				},
				{
					"option": "બરીડ ઇરિગેશન પદ્ધતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૉટર કલ્ચર પદ્ધતિ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "કઈ પદ્ધતિમાં મકાનની છત પર કાંકરાનો સ્તર તૈયાર કરી પોષકતત્ત્વોયુક્ત પાણી દ્વારા છોડને ઉછેરવામાં આવે છે ?",
			"a": [
				{
					"option": "વૉટર કલ્ચર પદ્ધતિ",
					"correct": false
				},
				{
					"option": "સૅન્ડ કલ્ચર પદ્ધતિ",
					"correct": false
				},
				{
					"option": "ગ્રૅવલ કલ્ચર પદ્ધતિ",
					"correct": true
				},
				{
					"option": "બરીડ ઇરિગેશન પદ્ધતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રૅવલ કલ્ચર પદ્ધતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "શાના માધ્યમ વડે તૈયાર કરવામાં આવતા ખાતરને વર્મિકૉમ્પોસ્ટ ખાતર કહે છે ?",
			"a": [
				{
					"option": "પક્ષી",
					"correct": false
				},
				{
					"option": "વનસ્પતિ",
					"correct": false
				},
				{
					"option": "છાણ",
					"correct": false
				},
				{
					"option": "અળસિયાં",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અળસિયાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "છોડ પર પરાગનયન દ્વારા સંકરણ કરવાથી તે છોડ પર મળતા બીજને શું કહે છે ?",
			"a": [
				{
					"option": "કલમ",
					"correct": false
				},
				{
					"option": "નેટહાઉસ",
					"correct": false
				},
				{
					"option": "સંકરણ",
					"correct": false
				},
				{
					"option": "સંકર(હાઈબ્રિડ) બિયારણ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંકર(હાઈબ્રિડ) બિયારણ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "ખેતરમાં તૈયાર થયેલા પાકની કાપણી કરવી તેને શું કહે છે ?",
			"a": [
				{
					"option": "વાવણી",
					"correct": false
				},
				{
					"option": "લણણી",
					"correct": true
				},
				{
					"option": "ખેડ",
					"correct": false
				},
				{
					"option": "નીંદણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લણણી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here 
    ]
};