// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 2 સજીવ અને નિર્જીવ",
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
			"q": "નીચેનામાંથી કયો સજીવ પ્રચલન કરતો નથી ?",
			"a": [
				{
					"option": "સાપ",
					"correct": false
				},
				{
					"option": "ગાય",
					"correct": false
				},
				{
					"option": "બારમાસીનો છોડ",
					"correct": true
				},
				{
					"option": "મચ્છર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બારમાસીનો છોડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "દેડકો નીચેનામાંથી કઈ લાક્ષણિકતા ધરાવે છે ?",
			"a": [
				{
					"option": "શ્વસન",
					"correct": false
				},
				{
					"option": "સંવેદના",
					"correct": false
				},
				{
					"option": "પ્રચલન",
					"correct": false
				},
				{
					"option": "શ્વસન, સંવેદના, પ્રચલન - ત્રણેય",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્વસન, સંવેદના, પ્રચલન - ત્રણેય</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "આસોપાલવનું વૃક્ષ નીચેનામાંથી કઈ લાક્ષણિકતા ધરાવતું નથી ?",
			"a": [
				{
					"option": "શ્વસન",
					"correct": false
				},
				{
					"option": "પ્રચલન",
					"correct": true
				},
				{
					"option": "સંવેદના",
					"correct": false
				},
				{
					"option": "પ્રજનન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રચલન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "પુસ્તક નીચેનામાંથી કઈ લાક્ષણિકતા ધરાવે છે ?",
			"a": [
				{
					"option": "પ્રચલન",
					"correct": false
				},
				{
					"option": "હલનચલન",
					"correct": false
				},
				{
					"option": "શ્વસન",
					"correct": false
				},
				{
					"option": "પ્રચલન, હલનચલન, શ્વસન - પૈકી એક પણ નહિ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રચલન, હલનચલન, શ્વસન - પૈકી એક પણ નહિ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "નીચેના પૈકી કયું સજીવ નથી ?",
			"a": [
				{
					"option": "અળસિયું",
					"correct": false
				},
				{
					"option": "માખી",
					"correct": false
				},
				{
					"option": "પતંગ",
					"correct": true
				},
				{
					"option": "પતંગિયું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પતંગ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નીચેના પૈકી કયું સજીવ છે ?",
			"a": [
				{
					"option": "વાદળ",
					"correct": false
				},
				{
					"option": "લજામણીનો છોડ",
					"correct": true
				},
				{
					"option": "વિમાન",
					"correct": false
				},
				{
					"option": "આગગાડી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લજામણીનો છોડ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "નીચેના પૈકી કયું નિર્જીવ છે ?",
			"a": [
				{
					"option": "ફાફડાથોર",
					"correct": false
				},
				{
					"option": "આગબોટ",
					"correct": true
				},
				{
					"option": "પતંગિયું",
					"correct": false
				},
				{
					"option": "માછલી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આગબોટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "વનસ્પતિનું શ્વસન અંગ કયું છે ?",
			"a": [
				{
					"option": "મૂળ",
					"correct": false
				},
				{
					"option": "પ્રકાંડ",
					"correct": false
				},
				{
					"option": "પર્ણ",
					"correct": true
				},
				{
					"option": "પુષ્પ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્ણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "કઈ વનસ્પતિનાં પર્ણો સ્પર્શ પ્રત્યે સંવેદના અનુભવે છે ?",
			"a": [
				{
					"option": "સૂર્યમુખીનાં",
					"correct": false
				},
				{
					"option": "જાસૂદનાં",
					"correct": false
				},
				{
					"option": "લજામણીનાં",
					"correct": true
				},
				{
					"option": "ગુલાબનાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લજામણીનાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કઈ વનસ્પતિનું ફૂલ સાંજ પડતાં ઝૂકી જાય છે ?",
			"a": [
				{
					"option": "સૂર્યમુખીનું",
					"correct": true
				},
				{
					"option": "લજામણીનું",
					"correct": false
				},
				{
					"option": "રાતરાણીનું",
					"correct": false
				},
				{
					"option": "ગુલાબનું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂર્યમુખીનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "સૂર્યમુખીનું ફૂલ કઈ રીતે સંવેદના દર્શાવે છે ?",
			"a": [
				{
					"option": "તે રાત્રે ખીલે છે.",
					"correct": false
				},
				{
					"option": "તેને અડકવાથી નમી પડે છે.",
					"correct": false
				},
				{
					"option": "તેને અડકવાથી બિડાઈ જાય છે.",
					"correct": false
				},
				{
					"option": "તે સૂર્યની તરફ રહે છે.",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તે સૂર્યની તરફ રહે છે.</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "કઈ વનસ્પતિના ફૂલો માત્ર રાત્રે જ ખીલે છે ?",
			"a": [
				{
					"option": "પોયણાનાં",
					"correct": true
				},
				{
					"option": "લજામણીનાં",
					"correct": false
				},
				{
					"option": "ગુલાબનાં",
					"correct": false
				},
				{
					"option": "સૂર્યમુખીનાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોયણાનાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પ્રાણી અને વનસ્પતિ વચ્ચેનો મુખ્ય તફાવત નીચેનામાંથી કયા લક્ષણમાં જોવા મળે છે ?",
			"a": [
				{
					"option": "શ્વસન",
					"correct": false
				},
				{
					"option": "પ્રજનન",
					"correct": false
				},
				{
					"option": "પ્રચલન",
					"correct": true
				},
				{
					"option": "સંવેદના",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રચલન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "'વનસ્પતિ ઉપર સંગીતની અસર થાય છે' એવું કયા વૈજ્ઞાનિકે કહ્યું હતું ?",
			"a": [
				{
					"option": "જેમ્સ વોટે",
					"correct": false
				},
				{
					"option": "ન્યુટને",
					"correct": false
				},
				{
					"option": "વરાહમિહિરે",
					"correct": false
				},
				{
					"option": "જગદીશચંદ્ર બોઝે",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જગદીશચંદ્ર બોઝે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "ચુનાનું નિતર્યું પાણી દૂધિયા રંગનું શા કારણે થઈ જાય છે ?",
			"a": [
				{
					"option": "ઑક્સિજન વાયુના કારણે",
					"correct": false
				},
				{
					"option": "નાઈટ્રોજન વાયુના કારણે",
					"correct": false
				},
				{
					"option": "ઓઝોન વાયુના કારણે",
					"correct": false
				},
				{
					"option": "કાર્બન ડાયોક્સાઈડ વાયુના કારણે",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયોક્સાઈડ વાયુના કારણે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here
    ]
};