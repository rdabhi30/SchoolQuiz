// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 1  ચુંબક",
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
			"q": "ચુંબકની શોધ કયા દેશમાં થઈ હતી ?",
			"a": [
				{
					"option": "ભારત",
					"correct": false
				},
				{
					"option": "ઇંગ્લૅન્ડ",
					"correct": false
				},
				{
					"option": "ગ્રીસ",
					"correct": true
				},
				{
					"option": "ઇટલી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રીસ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "નીચેનામાંથી કોને ચુંબક આકર્ષે છે ?",
			"a": [
				{
					"option": "ખીલી",
					"correct": true
				},
				{
					"option": "પથ્થર",
					"correct": false
				},
				{
					"option": "પ્લાસ્ટિક",
					"correct": false
				},
				{
					"option": "પેન્સિલ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખીલી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "નીચેનામાંથી કોને ચુંબક આકર્ષતું નથી ?",
			"a": [
				{
					"option": "સોય",
					"correct": false
				},
				{
					"option": "કાચ",
					"correct": true
				},
				{
					"option": "ટાંકણી",
					"correct": false
				},
				{
					"option": "ખીલી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાચ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "નીચેનામાંથી કઈ ધાતુ ચુંબક વડે આકર્ષાતી નથી ?",
			"a": [
				{
					"option": "નિકલ",
					"correct": false
				},
				{
					"option": "ઍલ્યુમિનિયમ",
					"correct": true
				},
				{
					"option": "કોબાલ્ટ",
					"correct": false
				},
				{
					"option": "લોખંડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍલ્યુમિનિયમ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "ગજિયા ચુંબકનો આકાર કેવો હોય છે ?",
			"a": [
				{
					"option": "ઘોડાની નાળ જેવો",
					"correct": false
				},
				{
					"option": "લંબઘન પટ્ટી જેવો",
					"correct": true
				},
				{
					"option": "નળાકાર",
					"correct": false
				},
				{
					"option": "કંકણાકાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લંબઘન પટ્ટી જેવો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "ગજિયા ચુંબકને કેટલા ચુંબકીય ધ્રુવો હોય છે ?",
			"a": [
				{
					"option": "બે",
					"correct": true
				},
				{
					"option": "એક",
					"correct": false
				},
				{
					"option": "ત્રણ",
					"correct": false
				},
				{
					"option": "ચાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "ચુંબકનો દક્ષિણ ધ્રુવ દર્શાવવા કયો અંગ્રેજી મૂળાક્ષર લખેલ હોય છે ?",
			"a": [
				{
					"option": "S",
					"correct": true
				},
				{
					"option": "U",
					"correct": false
				},
				{
					"option": "N",
					"correct": false
				},
				{
					"option": "W",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: S</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "ગજિયા ચુંબકને છૂટથી ફરી શકે તેમ લટકાવતાં તેનો ઉત્તર ધ્રુવ કઈ દિશામાં સ્થિર થાય છે ?",
			"a": [
				{
					"option": "ઉત્તર",
					"correct": true
				},
				{
					"option": "પૂર્વ",
					"correct": false
				},
				{
					"option": "પશ્ચિમ",
					"correct": false
				},
				{
					"option": "દક્ષિણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "બે ચુંબકના અસમાન ધ્રુવો નજીક લાવતાં...",
			"a": [
				{
					"option": "આકર્ષણ થાય.",
					"correct": true
				},
				{
					"option": "અપાકર્ષણ થાય.",
					"correct": false
				},
				{
					"option": "બન્ને એકબીજાથી દૂર જાય.",
					"correct": false
				},
				{
					"option": "કંઈ અસર જોવા મળે નહીં.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આકર્ષણ થાય.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "બે ચુંબકના સમાન ધ્રુવો નજીક લાવતાં...",
			"a": [
				{
					"option": "આકર્ષણ થાય.",
					"correct": false
				},
				{
					"option": "અપાકર્ષણ થાય.",
					"correct": false
				},
				{
					"option": "બન્ને એકબીજાથી દૂર જાય.",
					"correct": true
				},
				{
					"option": "કંઈ અસર જોવા મળે નહીં.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બન્ને એકબીજાથી દૂર જાય.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "ગજિયા ચુંબકનું અસરકારક ચુંબકત્વ કયા ભાગમાં વધુ જોવા મળે છે ?",
			"a": [
				{
					"option": "વચ્ચેના ભાગમાં",
					"correct": false
				},
				{
					"option": "ધ્રુવો આગળ",
					"correct": true
				},
				{
					"option": "ફક્ત ઉત્તર ધ્રુવ આગળ",
					"correct": false
				},
				{
					"option": "ફક્ત દક્ષિણ ધ્રુવ આગળ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધ્રુવો આગળ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "દિશા જાણવા માટે કયું સાધન વપરાય‌ છે ?",
			"a": [
				{
					"option": "હોકાયંત્ર",
					"correct": true
				},
				{
					"option": "થર્મોમીટર",
					"correct": false
				},
				{
					"option": "બેરોમીટર",
					"correct": false
				},
				{
					"option": "સિસ્મોગ્રાફ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હોકાયંત્ર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "હોકાયંત્રમાં કયા આકારનું ચુંબક વપરાય છે ?",
			"a": [
				{
					"option": "ગજિયો ચુંબક",
					"correct": false
				},
				{
					"option": "ઘોડાની નાળ જેવો",
					"correct": false
				},
				{
					"option": "નળાકાર",
					"correct": false
				},
				{
					"option": "સોયાકાર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોયાકાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "ચુંબકનો ઉત્તર ધ્રુવ દર્શાવવા કયો અંગ્રેજી મૂળાક્ષર લખેલ હોય છે ?",
			"a": [
				{
					"option": "S",
					"correct": false
				},
				{
					"option": "U",
					"correct": false
				},
				{
					"option": "N",
					"correct": true
				},
				{
					"option": "W",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: N</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "નીચેની કઈ પટ્ટીમાંથી કૃત્રિમ ચુંબક બનાવી શકાય ? ",
			"a": [
				{
					"option": "પૂંઠાની પટ્ટી",
					"correct": false
				},
				{
					"option": "લાકડાની પટ્ટી",
					"correct": false
				},
				{
					"option": "પ્લાસ્ટિકની પટ્ટી",
					"correct": false
				},
				{
					"option": "લોખંડનની પટ્ટી",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોખંડનની પટ્ટી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }
    ]
};
