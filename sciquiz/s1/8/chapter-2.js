// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 2 પુષ્પ અને ફળ",
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
			"q": "વનસ્પતિનું પ્રજનન અંગ કયું છે ?",
			"a": [
				{
					"option": "પર્ણ",
					"correct": false
				},
				{
					"option": "પ્રકાંડ",
					"correct": false
				},
				{
					"option": "મૂળ",
					"correct": false
				},
				{
					"option": "પુષ્પ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુષ્પ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "પુષ્પ જેના ઉપર ગોઠવાયેલું હોય છે, તે રચનાને શું કહે છે ?",
			"a": [
				{
					"option": "પરાગાસન",
					"correct": false
				},
				{
					"option": "પુષ્પાસન",
					"correct": true
				},
				{
					"option": "પુંકેસરચક્ર",
					"correct": false
				},
				{
					"option": "સ્ત્રીકેસરચક્ર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુષ્પાસન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "પુષ્પના બહારના ભાગમાં આવેલી પર્ણ જેવી રચનાને શું કહે છે ?",
			"a": [
				{
					"option": "વજ્રપત્ર",
					"correct": true
				},
				{
					"option": "દલપત્ર",
					"correct": false
				},
				{
					"option": "પુષ્પદંડ",
					"correct": false
				},
				{
					"option": "પરાગાસન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વજ્રપત્ર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "પુષ્પના બધા ભાગો કોની સાથે જોડાયેલા છે ?",
			"a": [
				{
					"option": "પુષ્પાસન",
					"correct": true
				},
				{
					"option": "દલચક્ર",
					"correct": false
				},
				{
					"option": "પુષ્પદંડ",
					"correct": false
				},
				{
					"option": "પરાગાસન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુષ્પાસન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "પુષ્પનું કળી અવસ્થામાં રક્ષણ કોણ કરે છે ?",
			"a": [
				{
					"option": "વજ્રચક્ર",
					"correct": true
				},
				{
					"option": "દલચક્ર",
					"correct": false
				},
				{
					"option": "પુંકેસરચક્ર",
					"correct": false
				},
				{
					"option": "સ્ત્રીકેસરચક્ર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વજ્રચક્ર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "પુષ્પના નીચેના ભાગે આવેલા પહોળા ભાગને શું કહે છે ?",
			"a": [
				{
					"option": "પુષ્પાસન",
					"correct": true
				},
				{
					"option": "દલચક્ર",
					"correct": false
				},
				{
					"option": "પરાગાશય",
					"correct": false
				},
				{
					"option": "પરાગાસન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુષ્પાસન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "કોને ફૂલમણિ પણ કહે છે ?",
			"a": [
				{
					"option": "પુષ્પાસન",
					"correct": false
				},
				{
					"option": "દલચક્ર",
					"correct": true
				},
				{
					"option": "પુષ્પદંડ",
					"correct": false
				},
				{
					"option": "વજ્રચક્ર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દલચક્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "પુષ્પનો કયો ભાગ કીટકોને આકર્ષવાનું કાર્ય કરે છે ?",
			"a": [
				{
					"option": "દલચક્ર",
					"correct": true
				},
				{
					"option": "પુષ્પાસન",
					"correct": false
				},
				{
					"option": "પરાગાશય",
					"correct": false
				},
				{
					"option": "પુંકેસરચક્ર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દલચક્ર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "પરાગરજ શામાં ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "પરાગનલિકા",
					"correct": false
				},
				{
					"option": "પરાગાશય",
					"correct": true
				},
				{
					"option": "પરાગવાહિની",
					"correct": false
				},
				{
					"option": "પરાગાસન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરાગાશય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "સ્ત્રીકેસરના સૌથી ઉપરના ભાગે આવેલા ગાદી જેવા ભાગને શું કહે છે ?",
			"a": [
				{
					"option": "પુષ્પાસન",
					"correct": false
				},
				{
					"option": "પરાગાસન",
					"correct": true
				},
				{
					"option": "પરાગવાહિની",
					"correct": false
				},
				{
					"option": "બીજાશય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરાગાસન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "સ્ત્રીકેસરના સૌથી નીચેના ફૂલેલા ભાગને શું કહે છે ?",
			"a": [
				{
					"option": "પરાગાસન",
					"correct": false
				},
				{
					"option": "પરાગવાહિની",
					"correct": false
				},
				{
					"option": "બીજાશય",
					"correct": true
				},
				{
					"option": "બીજાંડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બીજાશય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "નીચેના પૈકી કોનો સમાવેશ પરાગરજના વાહકોમાં થતો નથી ?",
			"a": [
				{
					"option": "ભમરો",
					"correct": false
				},
				{
					"option": "પતંગિયું",
					"correct": false
				},
				{
					"option": "મધમાખી",
					"correct": false
				},
				{
					"option": "માખી",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માખી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "બીજાશયમાં નાના દાણા જેવા ભાગને શું કહે છે ?",
			"a": [
				{
					"option": "પરાગરજ",
					"correct": false
				},
				{
					"option": "બીજાંડ",
					"correct": true
				},
				{
					"option": "પરાગતંતુ",
					"correct": false
				},
				{
					"option": "પરાગાશય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બીજાંડ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "પરાગાસન પર સ્થાપિત થયેલી પરાગરજ પરાગનલિકા દ્વારા કોની સાથે જોડાય છે ?",
			"a": [
				{
					"option": "બીજાંડમાં અંડકોષ સાથે",
					"correct": true
				},
				{
					"option": "પરાગવાહિની સાથે",
					"correct": false
				},
				{
					"option": "પરાગતંતુ સાથે",
					"correct": false
				},
				{
					"option": "પરાગાશય સાથે ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બીજાંડમાં અંડકોષ સાથે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "પરાગાસન કોનો ભાગ છે ?",
			"a": [
				{
					"option": "પુંકેસરનો",
					"correct": false
				},
				{
					"option": "સ્ત્રીકેસરનો",
					"correct": true
				},
				{
					"option": "પરાગાશયનો",
					"correct": false
				},
				{
					"option": "પરાગનલિકાનો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્ત્રીકેસરનો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "નીચેના પૈકી માંસલ ફળ કયું છે ?",
			"a": [
				{
					"option": "વાલ",
					"correct": false
				},
				{
					"option": "ભીંડા",
					"correct": false
				},
				{
					"option": "ટામેટાં",
					"correct": true
				},
				{
					"option": "વટાણા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટામેટાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "નીચેના પૈકી શુષ્ક ફળ કયું છે ?",
			"a": [
				{
					"option": "કેરી",
					"correct": false
				},
				{
					"option": "નાળિયેર",
					"correct": false
				},
				{
					"option": "કપાસ",
					"correct": true
				},
				{
					"option": "જાંબુ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કપાસ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "નીચેના પૈકી શિમ્બ(શિંગ) પ્રકારનું ફળ કયું છે ? ",
			"a": [
				{
					"option": "ભીંડા",
					"correct": false
				},
				{
					"option": "કપાસ",
					"correct": false
				},
				{
					"option": "ઘઉં",
					"correct": false
				},
				{
					"option": "ચોળા",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચોળા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "નીચેના પૈકી પ્રાવર પ્રકારનું ફળ કયું છે ?",
			"a": [
				{
					"option": "ચોળા",
					"correct": false
				},
				{
					"option": "ભીંડા",
					"correct": true
				},
				{
					"option": "મકાઈ",
					"correct": false
				},
				{
					"option": "વટાણા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભીંડા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "નીચેના પૈકી ધાન્ય ફળ કયું છે ?",
			"a": [
				{
					"option": "કપાસ",
					"correct": false
				},
				{
					"option": "ભીંડા",
					"correct": false
				},
				{
					"option": "ચોળા",
					"correct": false
				},
				{
					"option": "મકાઈ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકાઈ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       } // no comma here 
    ]
};