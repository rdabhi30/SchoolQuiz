// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 8 સાદાં યંત્રો",
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
			"q": "જે સાધનો વડે આપણાં કામ સરળતાથી અને ઝડપથી થાય તેવાં સાધનોને શું કહેવાય ?",
			"a": [
				{
					"option": "જટિલ યંત્રો",
					"correct": false
				},
				{
					"option": "સંયુક્ત યંત્રો",
					"correct": false
				},
				{
					"option": "સાદાં યંત્રો",
					"correct": true
				},
				{
					"option": "એકેયે નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાદાં યંત્રો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "સાદાં યંત્રનાં કેટલાં પ્રકાર છે ?",
			"a": [
				{
					"option": "6",
					"correct": true
				},
				{
					"option": "4",
					"correct": false
				},
				{
					"option": "5",
					"correct": false
				},
				{
					"option": "2",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 6</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "નીચેનામાંથી કયો સાદાં યંત્રનો પ્રકાર નથી ?",
			"a": [
				{
					"option": "ઉચ્ચાલન",
					"correct": false
				},
				{
					"option": "સાણસી",
					"correct": true
				},
				{
					"option": "સ્ક્રૂ",
					"correct": false
				},
				{
					"option": "ગરગડી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાણસી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "કાપડ કાપવા કયું સાદું યંત્ર વપરાય છે ?",
			"a": [
				{
					"option": "છરી",
					"correct": false
				},
				{
					"option": "કાતર",
					"correct": true
				},
				{
					"option": "પકડ",
					"correct": false
				},
				{
					"option": "મીટરપટ્ટી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાતર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "નીચેનામાંથી કયું  ઉચ્ચાલનનું ઉદાહરણ છે ?",
			"a": [
				{
					"option": "સ્ક્રૂ",
					"correct": false
				},
				{
					"option": "સૂડી",
					"correct": true
				},
				{
					"option": "ગરગડી",
					"correct": false
				},
				{
					"option": "દાતરડું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂડી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "સાણસી કયા પ્રકારનું સાદું યંત્ર છે ?",
			"a": [
				{
					"option": "ઉચ્ચાલન",
					"correct": true
				},
				{
					"option": "ઢાળ",
					"correct": false
				},
				{
					"option": "સ્ક્રૂ",
					"correct": false
				},
				{
					"option": "ફાચર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉચ્ચાલન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "જૅક કયા પ્રકારનું સાદું યંત્ર છે ?",
			"a": [
				{
					"option": "સ્ક્રૂ",
					"correct": true
				},
				{
					"option": "ફાચર",
					"correct": false
				},
				{
					"option": "ઉચ્ચાલન",
					"correct": false
				},
				{
					"option": "ઢાળ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્ક્રૂ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "ઠંડા પીણાંની બૉટલને સહેલાઈથી ખોલવા કયું સાદું યંત્ર વપરાય છે ?",
			"a": [
				{
					"option": "પકડ",
					"correct": false
				},
				{
					"option": "હથોડી",
					"correct": false
				},
				{
					"option": "ઓપનર (ચાવી)",
					"correct": true
				},
				{
					"option": "છરી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓપનર (ચાવી)</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "દાદર કયા પ્રકારનું સાદું યંત્ર છે ?",
			"a": [
				{
					"option": "ઉચ્ચાલન",
					"correct": false
				},
				{
					"option": "ઢાળ",
					"correct": true
				},
				{
					"option": "સ્ક્રૂ",
					"correct": false
				},
				{
					"option": "ફાચર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઢાળ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કોઈ પણ બે પાટીયાને મજબૂતાઈથી જોડવા શાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "ઉચ્ચાલન",
					"correct": false
				},
				{
					"option": "ઢાળ",
					"correct": false
				},
				{
					"option": "સ્ક્રૂ",
					"correct": true
				},
				{
					"option": "ફાચર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્ક્રૂ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "દાતરડું કયા પ્રકારનું સાદું યંત્ર છે ?",
			"a": [
				{
					"option": "ઉચ્ચાલન",
					"correct": false
				},
				{
					"option": "ઢાળ",
					"correct": false
				},
				{
					"option": "સ્ક્રૂ",
					"correct": false
				},
				{
					"option": "ફાચર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફાચર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "નીચેના પૈકી કયું ફાચર પ્રકારનું સાદું યંત્ર છે ?",
			"a": [
				{
					"option": "કાતર",
					"correct": false
				},
				{
					"option": "છરી",
					"correct": true
				},
				{
					"option": "જૅક",
					"correct": false
				},
				{
					"option": "રેમ્પ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: છરી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "ગરગડીનો ઉપયોગ કરવાથી શો ફાયદો થાય છે ?",
			"a": [
				{
					"option": "જરૂરી બળમાં ઘટાડો કરી શકાય.",
					"correct": false
				},
				{
					"option": "જરૂરી બળમાં વધારો કરી શકાય.",
					"correct": false
				},
				{
					"option": "બળની દિશા બદલી શકાય.",
					"correct": true
				},
				{
					"option": "વેગ વધારી શકાય.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બળની દિશા બદલી શકાય.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "પૈડું જેના પર બેસાડવામાં આવે છે તેને શું કહે છે ?",
			"a": [
				{
					"option": "ગરગડી",
					"correct": false
				},
				{
					"option": "ચક્ર",
					"correct": false
				},
				{
					"option": "ધરી",
					"correct": true
				},
				{
					"option": "જૅક",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધરી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "નીચેનામાંથી કયું જટિલ યંત્ર છે ?",
			"a": [
				{
					"option": "કાતર",
					"correct": false
				},
				{
					"option": "કેરી કાપવાનો સૂડો",
					"correct": false
				},
				{
					"option": "સીવવાનો સંચો",
					"correct": true
				},
				{
					"option": "સાણસી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સીવવાનો સંચો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "સીવવાના સંચામાં વપરાતી સોય કયા પ્રકારનું સાદું યંત્ર છે ?",
			"a": [
				{
					"option": "ઉચ્ચાલન",
					"correct": false
				},
				{
					"option": "ઢાળ",
					"correct": false
				},
				{
					"option": "સ્ક્રૂ",
					"correct": false
				},
				{
					"option": "ફાચર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફાચર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "બે કે તેથી વધુ સાદાં યંત્રોના ઉપયોગથી બનેલા સાધનને શું કહે છે ?",
			"a": [
				{
					"option": "જટિલ યંત્રો",
					"correct": true
				},
				{
					"option": "સંયુક્ત યંત્રો",
					"correct": false
				},
				{
					"option": "સાદાં યંત્રો",
					"correct": false
				},
				{
					"option": "એકેયે નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જટિલ યંત્રો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "ચીપિયો કયા પ્રકારનું સાદું યંત્ર છે ?",
			"a": [
				{
					"option": "ઉચ્ચાલન",
					"correct": true
				},
				{
					"option": "ઢાળ",
					"correct": false
				},
				{
					"option": "સ્ક્રૂ",
					"correct": false
				},
				{
					"option": "ફાચર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉચ્ચાલન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "નીચેનામાંથી કયું સાદાં યંત્રનું ઉદાહરણ નથી ?",
			"a": [
				{
					"option": "કાતર",
					"correct": false
				},
				{
					"option": "ઉચ્ચાલન",
					"correct": true
				},
				{
					"option": "દાતરડું",
					"correct": false
				},
				{
					"option": "જૅક",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉચ્ચાલન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "નીચેનામાંથી કયું ફાચરનું ઉદાહરણ નથી ?",
			"a": [
				{
					"option": "સોય",
					"correct": false
				},
				{
					"option": "કુહાડી",
					"correct": false
				},
				{
					"option": "પકડ",
					"correct": true
				},
				{
					"option": "પાવડો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પકડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};