// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 3 વનસ્પતિના અંગો",
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
			"q": "વનસ્પતિનું કયું અંગ વનસ્પતિને જમીન સાથે જકડી રાખે છે ?",
			"a": [
				{
					"option": "પ્રકાંડ",
					"correct": false
				},
				{
					"option": "પર્ણ",
					"correct": false
				},
				{
					"option": "મૂળ",
					"correct": true
				},
				{
					"option": "પ્રકાંડસૂત્ર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૂળ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "નીચેનામાંથી ખોરાકનો સંગ્રહ કરતું મૂળ કયું છે ?",
			"a": [
				{
					"option": "બટાટા",
					"correct": false
				},
				{
					"option": "શક્કરિયું",
					"correct": true
				},
				{
					"option": "કોબીજ",
					"correct": false
				},
				{
					"option": "ડુંગળી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શક્કરિયું</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "કઈ વનસ્પતિમાં અવલંબન મૂળ જોવા મળે છે ?",
			"a": [
				{
					"option": "શેરડી",
					"correct": true
				},
				{
					"option": "મૂળો",
					"correct": false
				},
				{
					"option": "બીટ",
					"correct": false
				},
				{
					"option": "બટાટા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શેરડી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "નીચેનામાંથી ખોરાકનો સંગ્રહ કરતું પ્રકાંડ કયું છે ?",
			"a": [
				{
					"option": "આદું",
					"correct": true
				},
				{
					"option": "ગાજર",
					"correct": false
				},
				{
					"option": "મૂળો",
					"correct": false
				},
				{
					"option": "ડુંગળી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આદું</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "કોનું પ્રકાંડ ખોરાક બનાવવાનું કાર્ય કરે છે ?",
			"a": [
				{
					"option": "બટાટા",
					"correct": false
				},
				{
					"option": "સૂરણ",
					"correct": false
				},
				{
					"option": "બીટ",
					"correct": false
				},
				{
					"option": "ફાફડાથોર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફાફડાથોર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "કોનું પ્રકાંડ પ્રકાંડસૂત્ર આરોહણનું કાર્ય કરે છે ?",
			"a": [
				{
					"option": "કારેલાં",
					"correct": true
				},
				{
					"option": "ફાફડાથોર",
					"correct": false
				},
				{
					"option": "મકાઈ",
					"correct": false
				},
				{
					"option": "રીંગણી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કારેલાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "ફાફડાથોરમાં કયા અંગનું કંટકમાં રૂપાંતર થાય છે ?",
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
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્ણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "કોના પર્ણમાં ખોરાકનો સંગ્રહ થાય છે ?",
			"a": [
				{
					"option": "ડુંગળી",
					"correct": true
				},
				{
					"option": "બટાટા",
					"correct": false
				},
				{
					"option": "મૂળો",
					"correct": false
				},
				{
					"option": "હળદર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડુંગળી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "કઈ વનસ્પતિના પર્ણનું કાંટામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "જામફળી",
					"correct": false
				},
				{
					"option": "ગુલાબ",
					"correct": false
				},
				{
					"option": "ફાફડાથોર",
					"correct": true
				},
				{
					"option": "ખરસાણી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફાફડાથોર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કોને વનસ્પતિનું રસોડું કહે છે ?",
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
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્ણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "વનસ્પતિનું કયું અંગ બાષ્પોત્સર્જનનું કાર્ય કરે છે ?",
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
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્ણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
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
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્ણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "વનસ્પતિના કયા અંગમાં પ્રકાશસંશ્લેષણની ક્રિયા થાય છે ?",
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
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્ણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "વનસ્પતિ પ્રકાશસંશ્લેષણની ક્રિયા દરમિયાન કયો વાયુ મુક્ત કરે છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": false
				},
				{
					"option": "ઑક્સિજન",
					"correct": true
				},
				{
					"option": "નાઈટ્રોજન",
					"correct": false
				},
				{
					"option": "હાઈડ્રોજન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "પ્રકાશસંશ્લેષણની ક્રિયા કોણ કરી શકે છે ?",
			"a": [
				{
					"option": "પ્રાણીઓ",
					"correct": false
				},
				{
					"option": "સજીવો",
					"correct": false
				},
				{
					"option": "લીલી વનસ્પતિ",
					"correct": true
				},
				{
					"option": "સૂક્ષ્મ જીવો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લીલી વનસ્પતિ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "પ્રકાશસંશ્લેષણની ક્રિયામાં કોની જરૂર નથી ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": false
				},
				{
					"option": "ઑક્સિજન",
					"correct": true
				},
				{
					"option": "હરિતકણો",
					"correct": false
				},
				{
					"option": "સૂર્યપ્રકાશ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "વૃક્ષોની આસપાસ ઠંડકનો અનુભવ થાય છે, તે વનસ્પતિની કઈ ક્રિયાને આભારી છે ?",
			"a": [
				{
					"option": "આરોહણ",
					"correct": false
				},
				{
					"option": "શ્વસન",
					"correct": false
				},
				{
					"option": "પ્રકાશસંશ્લેષણ",
					"correct": false
				},
				{
					"option": "બાષ્પોત્સર્જન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાષ્પોત્સર્જન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "વનસ્પતિના લીલા પર્ણોમાં કયું તત્ત્વ હોવાના કારણે પર્ણો લીલા રંગના દેખાય છે ?",
			"a": [
				{
					"option": "ક્લોરોફિલ",
					"correct": true
				},
				{
					"option": "ટાઇલિન",
					"correct": false
				},
				{
					"option": "શ્લેષ્મ",
					"correct": false
				},
				{
					"option": "ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્લોરોફિલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "કયો વાયુ ચૂનાના નીતર્યા પાણીને દૂધિયું બનાવે છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": true
				},
				{
					"option": "ઑક્સિજન",
					"correct": false
				},
				{
					"option": "નાઈટ્રોજન",
					"correct": false
				},
				{
					"option": "હાઈડ્રોજન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઈડ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "વનસ્પતિનાં પર્ણમાં આવેલાં સૂક્ષ્મ છિદ્રોને શું કહે છે ?",
			"a": [
				{
					"option": "અવલંબન મૂળ",
					"correct": false
				},
				{
					"option": "પ્રકાંડ સૂત્રો",
					"correct": false
				},
				{
					"option": "પર્ણરંધ્રો",
					"correct": true
				},
				{
					"option": "ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્ણરંધ્રો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       } // no comma here 
    ]
};