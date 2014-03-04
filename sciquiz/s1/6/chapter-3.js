// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys


var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 3 એસિડ, બેઈઝ અને ક્ષાર",
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
			"q": "ભૂરા લિટમસપત્રને લાલ બનાવે છે તે દ્રાવણને શું કહે છે ?",
			"a": [
				{
					"option": "ક્ષાર",
					"correct": false
				},
				{
					"option": "બેઈઝ",
					"correct": false
				},
				{
					"option": "ઍસિડ",
					"correct": true
				},
				{
					"option": "તટસ્થ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍસિડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "લાલ લિટમસપત્રને ભૂરા બનાવે છે તે દ્રાવણને શું કહે છે ?",
			"a": [
				{
					"option": "બેઈઝ",
					"correct": true
				},
				{
					"option": "ઍસિડ",
					"correct": false
				},
				{
					"option": "ક્ષાર",
					"correct": false
				},
				{
					"option": "તટસ્થ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બેઈઝ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "નીચેના પૈકી કયું ઍસિડનું દ્રાવણ નથી ?",
			"a": [
				{
					"option": "લીંબુનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "ટામેટાનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "આમલીનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "સાબુનું દ્રાવણ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાબુનું દ્રાવણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "નીચેના પૈકી કયું ઍસિડનું દ્રાવણ છે ?",
			"a": [
				{
					"option": "ધોવાના સોડાનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "દ્રાક્ષનું દ્રાવણ",
					"correct": true
				},
				{
					"option": "ખાવાના સોડાનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "ખાંડનું દ્રાવણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દ્રાક્ષનું દ્રાવણ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "લીંબુનો રસ કયા પ્રકારનો પદાર્થ છે ?",
			"a": [
				{
					"option": "ક્ષાર",
					"correct": false
				},
				{
					"option": "બેઈઝ",
					"correct": false
				},
				{
					"option": "ઍસિડ",
					"correct": true
				},
				{
					"option": "તટસ્થ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍસિડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નીચેના પૈકી કયું બેઈઝનું દ્રાવણ છે ?",
			"a": [
				{
					"option": "ધોવાના સોડાનું દ્રાવણ",
					"correct": true
				},
				{
					"option": "મીઠાનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "ગ્લુકોઝનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "લીંબુના ફૂલનું દ્રાવણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધોવાના સોડાનું દ્રાવણ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "નીચેના પૈકી કયું તટસ્થ દ્રાવણ છે ?",
			"a": [
				{
					"option": "ચૂનાનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "ખાવાના સોડાનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "લીંબુનું દ્રાવણ",
					"correct": false
				},
				{
					"option": "ખાંડનું દ્રાવણ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખાંડનું દ્રાવણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "નીચેના પૈકી કયો પદાર્થ ક્ષાર છે, પરંતુ તટસ્થ પદાર્થ નથી ?",
			"a": [
				{
					"option": "ધોવાનો સોડા",
					"correct": true
				},
				{
					"option": "મીઠું",
					"correct": false
				},
				{
					"option": "ખાંડ",
					"correct": false
				},
				{
					"option": "સુરોખાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધોવાનો સોડા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "નીચેના પૈકી કયો ક્ષાર છે ?",
			"a": [
				{
					"option": "ખાંડ",
					"correct": false
				},
				{
					"option": "મીઠું",
					"correct": true
				},
				{
					"option": "આમલી",
					"correct": false
				},
				{
					"option": "ચૂનો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીઠું</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કોસ્ટિક સોડા શું છે ?",
			"a": [
				{
					"option": "ક્ષાર",
					"correct": false
				},
				{
					"option": "બેઈઝ",
					"correct": true
				},
				{
					"option": "ઍસિડ",
					"correct": false
				},
				{
					"option": "તટસ્થ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બેઈઝ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "તટસ્થીકરણની પ્રક્રિયામાં વપરાતા ફિનોલ્ફ્થેલીનનાં દ્રાવણનું શું કાર્ય છે ?",
			"a": [
				{
					"option": "ઍસીડ તરીકેનું",
					"correct": false
				},
				{
					"option": "સૂચક તરીકેનું",
					"correct": true
				},
				{
					"option": "બેઈઝ તરીકેનું",
					"correct": false
				},
				{
					"option": "ક્ષાર તરીકેનું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂચક તરીકેનું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "તટસ્થીકરણની પ્રક્રિયામાં શું બને છે ?",
			"a": [
				{
					"option": "ક્ષાર અને પાણી",
					"correct": true
				},
				{
					"option": "ઍસિડ અને બેઈઝ",
					"correct": false
				},
				{
					"option": "ક્ષાર અને ઍસિડ",
					"correct": false
				},
				{
					"option": "ક્ષાર અને બેઈઝ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્ષાર અને પાણી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "ફિનોલ્ફ્થેલીન બેઈઝના દ્રાવણ સાથે કયો રંગ આપે છે ?",
			"a": [
				{
					"option": "લાલ",
					"correct": false
				},
				{
					"option": "ભૂરો",
					"correct": false
				},
				{
					"option": "ગુલાબી",
					"correct": true
				},
				{
					"option": "પીળો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુલાબી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "નીચેના પૈકી કયો પદાર્થ તટસ્થ છે, પરંતુ ક્ષાર પદાર્થ નથી ?",
			"a": [
				{
					"option": "ધોવાનો સોડા",
					"correct": false
				},
				{
					"option": "મીઠું",
					"correct": false
				},
				{
					"option": "ખાંડ",
					"correct": true
				},
				{
					"option": "સુરોખાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખાંડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "ઍસિડના દ્રાવણમાં ફિનોલ્ફ્થેલીનના બે-ત્રણ ટીપાં નાખતાં દ્રાવણ કેવા રંગનું બને છે ?",
			"a": [
				{
					"option": "સફેદ",
					"correct": false
				},
				{
					"option": "ભૂરું",
					"correct": false
				},
				{
					"option": "ગુલાબી",
					"correct": false
				},
				{
					"option": "રંગવિહીન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રંગવિહીન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "સોડિયમ હાઈડ્રોક્સાઈડના દ્રાવણમાં ફિનોલ્ફ્થેલીનના બે-ત્રણ ટીપાં નાખતાં દ્રાવણ કેવા રંગનું બને છે ?",
			"a": [
				{
					"option": "ગુલાબી",
					"correct": true
				},
				{
					"option": "દૂધિયા",
					"correct": false
				},
				{
					"option": "લાલ",
					"correct": false
				},
				{
					"option": "ભૂરા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુલાબી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "હળદરપત્ર સાબુના દ્રાવણ સાથે કેવો રંગ આપે છે ?",
			"a": [
				{
					"option": "ભૂરો",
					"correct": false
				},
				{
					"option": "લીલો",
					"correct": false
				},
				{
					"option": "પીળો",
					"correct": false
				},
				{
					"option": "લાલ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાલ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "સખત પાણીને નરમ બનાવવા કયો પદાર્થ વપરાય છે ?",
			"a": [
				{
					"option": "સાબુ",
					"correct": false
				},
				{
					"option": "મીઠું",
					"correct": false
				},
				{
					"option": "કૉસ્ટિક સોડા",
					"correct": false
				},
				{
					"option": "ધોવાનો સોડા",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધોવાનો સોડા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "ઍસિડિટીની દવામાં શાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "ખાવાનો સોડા",
					"correct": true
				},
				{
					"option": "મીઠું",
					"correct": false
				},
				{
					"option": "કૉસ્ટિક સોડા",
					"correct": false
				},
				{
					"option": "ધોવાનો સોડા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખાવાનો સોડા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "નીચેનામાંથી બેઈઝનો ગુણધર્મ કયો નથી ?",
			"a": [
				{
					"option": "લાલ લિટમસપત્રને ભૂરું બનાવે છે.",
					"correct": false
				},
				{
					"option": "સ્વાદે તૂરા હોય છે.",
					"correct": false
				},
				{
					"option": "સ્વાદે ખાટા હોય છે.",
					"correct": true
				},
				{
					"option": "સ્પર્શે ચીકણા હોય છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વાદે ખાટા હોય છે.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};