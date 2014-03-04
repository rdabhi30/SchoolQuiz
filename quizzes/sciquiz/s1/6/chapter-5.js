// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 5 વનસ્પતિને ઓળખીએ",
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
			"q": "નબળું પ્રકાંડ ધરાવતી વનસ્પતિને શું ક્હે છે ?",
			"a": [
				{
					"option": "છોડ",
					"correct": false
				},
				{
					"option": "ક્ષુપ",
					"correct": false
				},
				{
					"option": "વેલા",
					"correct": true
				},
				{
					"option": "વૃક્ષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વેલા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "શાનો છોડ પ્રમાણમાં લાંબુ આયુષ્ય ધરાવે છે ?",
			"a": [
				{
					"option": "ઘઉંનો",
					"correct": false
				},
				{
					"option": "રીંગણનો",
					"correct": false
				},
				{
					"option": "બારમાસીનો",
					"correct": false
				},
				{
					"option": "તુલસીનો",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તુલસીનો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "નીચેના પૈકી કઈ વનસ્પતિ ક્ષુપ છે ?",
			"a": [
				{
					"option": "લીમડો",
					"correct": false
				},
				{
					"option": "જાસૂદ",
					"correct": true
				},
				{
					"option": "મકાઈ",
					"correct": false
				},
				{
					"option": "આસોપાલવ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાસૂદ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "નીચેના પૈકી કઈ વનસ્પતિ વૃક્ષ છે ?",
			"a": [
				{
					"option": "જામફળી",
					"correct": false
				},
				{
					"option": "મહેંદી",
					"correct": false
				},
				{
					"option": "આંબો",
					"correct": true
				},
				{
					"option": "જાસૂદ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંબો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "નારિયેળી કયા પ્રકારની વનસ્પતિ છે ?",
			"a": [
				{
					"option": "છોડ",
					"correct": false
				},
				{
					"option": "ક્ષુપ",
					"correct": false
				},
				{
					"option": "વેલા",
					"correct": false
				},
				{
					"option": "વૃક્ષ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૃક્ષ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "કરેણ કયા પ્રકારની વનસ્પતિ છે ?",
			"a": [
				{
					"option": "છોડ",
					"correct": false
				},
				{
					"option": "ક્ષુપ",
					"correct": true
				},
				{
					"option": "વેલા",
					"correct": false
				},
				{
					"option": "વૃક્ષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્ષુપ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "કઈ વનસ્પતિનું આયુષ્ય ઘણું લાંબુ હોય છે ?",
			"a": [
				{
					"option": "આંબો",
					"correct": false
				},
				{
					"option": "જાસૂદ",
					"correct": false
				},
				{
					"option": "વડ",
					"correct": true
				},
				{
					"option": "એરંડો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "કઈ વનસ્પતિ સોટીમય મૂળ ધરાવે છે ?",
			"a": [
				{
					"option": "મકાઈ",
					"correct": false
				},
				{
					"option": "વાંસ",
					"correct": false
				},
				{
					"option": "આંબો",
					"correct": true
				},
				{
					"option": "શેરડી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંબો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "કઈ વનસ્પતિ તંતુમય મૂળ ધરાવે છે ?",
			"a": [
				{
					"option": "જાસૂદ",
					"correct": false
				},
				{
					"option": "આસોપાલવ",
					"correct": false
				},
				{
					"option": "જુવાર",
					"correct": true
				},
				{
					"option": "લીમડો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જુવાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "નીચેના પૈકી કઈ વેલા પ્રકારની વનસ્પતિ છે ?",
			"a": [
				{
					"option": "મગફળી",
					"correct": false
				},
				{
					"option": "વાલ",
					"correct": true
				},
				{
					"option": "ટામેટી",
					"correct": false
				},
				{
					"option": "રીંગણી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાલ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "કઈ વનસ્પતિના મૂળને સહેલાઈથી ઉખેડી શકાય છે ?",
			"a": [
				{
					"option": "બાજરી",
					"correct": true
				},
				{
					"option": "જાસૂદ",
					"correct": false
				},
				{
					"option": "બારમાસી",
					"correct": false
				},
				{
					"option": "કરેણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાજરી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "કઈ વનસ્પતિ આરોહી પ્રકાંડ ધરાવે છે ?",
			"a": [
				{
					"option": "બ્રાહ્મી",
					"correct": false
				},
				{
					"option": "સૂરણ",
					"correct": false
				},
				{
					"option": "રીંગણી",
					"correct": false
				},
				{
					"option": "વાલ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "કઈ વનસ્પતિ વિસર્પી પ્રકાંડ ધરાવે છે ?",
			"a": [
				{
					"option": "બોગનવેલ",
					"correct": false
				},
				{
					"option": "ધરો",
					"correct": true
				},
				{
					"option": "દ્રાક્ષ",
					"correct": false
				},
				{
					"option": "આદું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધરો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "કઈ વનસ્પતિ સાદું પર્ણ ધરાવે છે ?",
			"a": [
				{
					"option": "પીપળો",
					"correct": true
				},
				{
					"option": "આમલી",
					"correct": false
				},
				{
					"option": "લીમડો",
					"correct": false
				},
				{
					"option": "ગુલમહોર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પીપળો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "કઈ વનસ્પતિ સંયુક્ત પર્ણ ધરાવે છે ?",
			"a": [
				{
					"option": "પીપળો",
					"correct": false
				},
				{
					"option": "વડ",
					"correct": false
				},
				{
					"option": "કેળ",
					"correct": false
				},
				{
					"option": "લીમડો",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લીમડો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "કઈ વનસ્પતિનાં પર્ણમાં સમાંતર શિરાવિન્યાસ હોય છે ?",
			"a": [
				{
					"option": "કેળ",
					"correct": true
				},
				{
					"option": "આંબો",
					"correct": false
				},
				{
					"option": "જાસૂદ",
					"correct": false
				},
				{
					"option": "પીપળો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેળ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "કઈ વનસ્પતિનાં પર્ણમાં જાલાકાર શિરાવિન્યાસ હોય છે ?",
			"a": [
				{
					"option": "કેળ",
					"correct": false
				},
				{
					"option": "વડ",
					"correct": true
				},
				{
					"option": "ઘાસ",
					"correct": false
				},
				{
					"option": "મકાઈ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "કઈ વનસ્પતિ ઔષધ તરીકે ઉપયોગી છે ?",
			"a": [
				{
					"option": "જાસૂદ",
					"correct": false
				},
				{
					"option": "આંબો",
					"correct": false
				},
				{
					"option": "બાજરી",
					"correct": false
				},
				{
					"option": "અરડૂસી",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અરડૂસી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "કેવાં પ્રકારનાં પર્ણોમાં સમાંતર શિરાવિન્યાસ જોવા મળે છે ?",
			"a": [
				{
					"option": "સીધાં ચીરાઈ શકતાં પર્ણોમાં",
					"correct": true
				},
				{
					"option": "આડાં અવળાં ચીરાઈ શકતાં પર્ણોમાં",
					"correct": false
				},
				{
					"option": "દ્વિદળી બીજ ધરાવતી વનસ્પતિનામ્ પર્ણોમાં",
					"correct": false
				},
				{
					"option": "સંયુક્ત પર્ણોમાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સીધાં ચીરાઈ શકતાં પર્ણોમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "સામાન્ય રીતે 4 થી 6 ફૂટ જેટલી ઊંચાઈ ધરાવતી વનસ્પતિને શું કહે છે ?",
			"a": [
				{
					"option": "છોડ",
					"correct": false
				},
				{
					"option": "વૃક્ષ",
					"correct": false
				},
				{
					"option": "વેલા",
					"correct": false
				},
				{
					"option": "ક્ષુપ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્ષુપ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};