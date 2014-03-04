// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 2 નરી આંખે દેખાતું આકાશ",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
		"standard": "6",
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
			"q": "તારાઓનો સમૂહ કોઇ ચોક્કસ આકૃત્તિ કે ભાત ઉપસાવે છે તેને શુ કહે છે ?",
			"a": [
				{
					"option": "નક્ષત્ર",
					"correct": false
				},
				{
					"option": "તારામંડળ",
					"correct": false
				},
				{
					"option": "તારાજૂથ",
					"correct": true
				},
				{
					"option": "સપ્તર્ષિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તારાજૂથ.</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "સપ્તર્ષિ અને શર્મિષ્ઠા તારાજૂથની મદદથી કયા તારાનું સ્થાન જાણી શકાય છે ?",
			"a": [
				{
					"option": "ચમકતા તારા",
					"correct": false
				},
				{
					"option": "ધ્રુવના તારા",
					"correct": true
				},
				{
					"option": "ખરતા તારા",
					"correct": false
				},
				{
					"option": "શિકારી તારા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધ્રુવના તારા.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "સપ્તર્ષિ તારાજૂથમાં કુલ કેટલા તારાઓ છે ?",
			"a": [
				{
					"option": "પાંચ",
					"correct": false
				},
				{
					"option": "સાત",
					"correct": true
				},
				{
					"option": "છ",
					"correct": false
				},
				{
					"option": "આઠ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાત.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "સપ્તર્ષિ તારાજૂથ આકાશમાં રાત્રે કયા સમયગાળા દરમિયાન દેખાય છે ?",
			"a": [
				{
					"option": "ડિસેમ્બર થી ફેબ્રુઆરી",
					"correct": false
				},
				{
					"option": "સપ્ટેમ્બર થી ફેબ્રુઆરી",
					"correct": false
				},
				{
					"option": "ફેબ્રુઆરી થી ઓગસ્ટ",
					"correct": true
				},
				{
					"option": "ફેબ્રુઆરી થી માર્ચ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફેબ્રુઆરી થી ઓગસ્ટ.</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "શર્મિષ્ઠા તારાજૂથ આકાશમાં રાત્રે કયા સમયગાળા દરમિયાન દેખાય છે?",
			"a": [
				{
					"option": "ડિસેમ્બર થી ફેબ્રુઆરી",
					"correct": false
				},
				{
					"option": "સપ્ટેમ્બર થી ફેબ્રુઆરી",
					"correct": true
				},
				{
					"option": "ફેબ્રુઆરી થી ઓગસ્ટ",
					"correct": false
				},
				{
					"option": "ફેબ્રુઆરી થી માર્ચ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સપ્ટેમ્બર થી ફેબ્રુઆરી.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "મૃગ તારાજૂથ આકાશમાં રાત્રે કયા સમયગાળા દરમિયાન દેખાય છે?",
			"a": [
				{
					"option": "ડિસેમ્બર થી ફેબ્રુઆરી",
					"correct": true
				},
				{
					"option": "સપ્ટેમ્બર થી ફેબ્રુઆરી",
					"correct": false
				},
				{
					"option": "ફેબ્રુઆરી થી ઓગસ્ટ",
					"correct": false
				},
				{
					"option": "ફેબ્રુઆરી થી માર્ચ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડિસેમ્બર થી ફેબ્રુઆરી.</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "સૂર્યની આસપાસ પરિક્રમણ કરતા કુલ કેટલા ગ્રહો છે ?",
			"a": [
				{
					"option": "આઠ",
					"correct": true
				},
				{
					"option": "નવ",
					"correct": false
				},
				{
					"option": "દસ",
					"correct": false
				},
				{
					"option": "બે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આઠ.</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "પ્લૂટોને બીજા કયા નામે ઓળખવામાં આવે છે ?",
			"a": [
				{
					"option": "વામન ગ્રહ",
					"correct": true
				},
				{
					"option": "વિરાટ ગ્રહ",
					"correct": false
				},
				{
					"option": "છેલ્લો ગ્રહ",
					"correct": false
				},
				{
					"option": "પૂછડિયો તારો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વામન ગ્રહ.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "મંગળ કેવા રંગનો ગ્રહ છે ?",
			"a": [
				{
					"option": "લાલ",
					"correct": true
				},
				{
					"option": "વાદળી",
					"correct": false
				},
				{
					"option": "ભુખરો",
					"correct": false
				},
				{
					"option": "લીલો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાલ.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "સપ્તર્ષિ તારાજૂથનો આકાર કોના જેવો છે ?",
			"a": [
				{
					"option": "મૃગ",
					"correct": false
				},
				{
					"option": "S",
					"correct": false
				},
				{
					"option": "W",
					"correct": true
				},
				{
					"option": "સાપ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: W.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "શર્મિષ્ઠા તારાજૂથમાં કુલ કેટલા તારાઓ છે ?",
			"a": [
				{
					"option": "પાંચ",
					"correct": true
				},
				{
					"option": "સાત",
					"correct": false
				},
				{
					"option": "છ",
					"correct": false
				},
				{
					"option": "આઠ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાંચ.</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "શિકારી તરીકે ઓળખાતા તારાનું નામ જણાવો ?",
			"a": [
				{
					"option": "વ્યાધ",
					"correct": true
				},
				{
					"option": "મૃગ",
					"correct": false
				},
				{
					"option": "ધ્રુવ",
					"correct": false
				},
				{
					"option": "વામન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વ્યાધ.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "વશિષ્ઠ નામથી ઓળખાતો તારો કયા તારાજૂથનો તારો છે ?",
			"a": [
				{
					"option": "કૃતિકા",
					"correct": false
				},
				{
					"option": "મૃગ",
					"correct": false
				},
				{
					"option": "શર્મિષ્ઠા",
					"correct": false
				},
				{
					"option": "સપ્તર્ષિ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સપ્તર્ષિ.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "મરીચિ નામથી ઓળખાતો તારો કયા તારાજૂથનો તારો છે ?",
			"a": [
				{
					"option": "કૃતિકા",
					"correct": false
				},
				{
					"option": "સપ્તર્ષિ",
					"correct": true
				},
				{
					"option": "શર્મિષ્ઠા",
					"correct": false
				},
				{
					"option": "મૃગ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સપ્તર્ષિ.</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "અંગિરસ નામથી ઓળખાતો તારો કયા તારાજૂથનો તારો છે ?",
			"a": [
				{
					"option": "કૃતિકા",
					"correct": false
				},
				{
					"option": "મૃગ",
					"correct": false
				},
				{
					"option": "શર્મિષ્ઠા",
					"correct": false
				},
				{
					"option": "સપ્તર્ષિ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સપ્તર્ષિ.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "અત્રિ નામથી ઓળખાતો તારો કયા તારાજૂથનો તારો છે ?",
			"a": [
				{
					"option": "કૃતિકા",
					"correct": false
				},
				{
					"option": "સપ્તર્ષિ",
					"correct": true
				},
				{
					"option": "શર્મિષ્ઠા",
					"correct": false
				},
				{
					"option": "મૃગ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સપ્તર્ષિ.</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "પુલસ્ત્ય નામથી ઓળખાતો તારો કયા તારાજૂથનો તારો છે ?",
			"a": [
				{
					"option": "સપ્તર્ષિ",
					"correct": true
				},
				{
					"option": "મૃગ",
					"correct": false
				},
				{
					"option": "શર્મિષ્ઠા",
					"correct": false
				},
				{
					"option": "કૃતિકા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સપ્તર્ષિ.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 18
			"q": "પુલહ્ નામથી ઓળખાતો તારો કયા તારાજૂથનો તારો છે ?",
			"a": [
				{
					"option": "મૃગ",
					"correct": false
				},
				{
					"option": "શર્મિષ્ઠા",
					"correct": false
				},
				{
					"option": "સપ્તર્ષિ",
					"correct": true
				},
				{
					"option": "કૃતિકા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સપ્તર્ષિ.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 19
			"q": "ક્રતુ નામથી ઓળખાતો તારો કયા તારાજૂથનો તારો છે ?",
			"a": [
				{
					"option": "સપ્તર્ષિ",
					"correct": true
				},
				{
					"option": "મૃગ",
					"correct": false
				},
				{
					"option": "શર્મિષ્ઠા",
					"correct": false
				},
				{
					"option": "કૃતિકા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સપ્તર્ષિ.</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 20
			"q": "રાત્રે કયા તારાની મદદથી દિશા જાણી શકાય છે ?",
			"a": [
				{
					"option": "વ્યાધ",
					"correct": false
				},
				{
					"option": "ધ્રુવ",
					"correct": true
				},
				{
					"option": "બાણરજ",
					"correct": false
				},
				{
					"option": "આર્દ્રા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધ્રુવ.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }
    ]
};