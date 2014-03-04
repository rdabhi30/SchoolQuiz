// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-9 પર્યાવરણની જાળવણી",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
		"standard": "8",
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
			"q": "નકામા પ્લાસ્ટિકનું શું કરવાથી પર્યાવરણમાં પ્રદૂષણ ન ફેલાય ?",
			"a": [
				{
					"option": "ગમે ત્યાં ફેંકવાથી",
					"correct": false
                },
				{
					"option": "જમીનમાં દાટવાથી",
					"correct": false
                },
				{
					"option": "સળગાવવાથી",
					"correct": false
                },
				{
					"option": "પુન:નિર્માણ કરવાથી",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુન:નિર્માણ કરવાથી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "શાળા કક્ષાએ 'ઇકો ફ્રેન્ડલી વીક'ની ઉજવણી શાને માટે કરવામાં આવે છે ?",
			"a": [
				{
					"option": "પર્યાવરણની જાળવણી અંગે જાગૃતિ કેળવવા",
					"correct": true
                },
				{
					"option": "મિત્રભાવ કેળવવા માટે",
					"correct": false
                },
				{
					"option": "પ્લાસ્ટિકનો ઉપયોગ બંધ કરવા માટે",
					"correct": false
                },
				{
					"option": "વર્ગની સફાઈ અને સુશોભન કરવા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્યાવરણની જાળવણી અંગે જાગૃતિ કેળવવા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "જમીનને સૌથી વધુ પ્રદૂષિત કરનાર પરિબળ કયું છે ?",
			"a": [
				{
					"option": "કાગળ",
					"correct": false
                },
				{
					"option": "પ્રાણીના મળમૂત્ર",
					"correct": false
                },
				{
					"option": "પ્લાસ્ટિક",
					"correct": true
                },
				{
					"option": "વનસ્પતિના અવશેષો",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્લાસ્ટિક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "કયા કચરાનું વિઘટન ઝડપથી થાય છે ?",
			"a": [
				{
					"option": "વધેલો ખોરાક",
					"correct": true
                },
				{
					"option": "રદ્દી કાગળ",
					"correct": false
                },
				{
					"option": "ધાતુઓનો ભંગાર",
					"correct": false
                },
				{
					"option": "લાકડાના ટુકડા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વધેલો ખોરાક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "જૈવ-અવિઘટનીય પદાર્થ કયો ગણી શકાય ?",
			"a": [
				{
					"option": "ખાદ્ય પદાર્થ",
					"correct": false
                },
				{
					"option": "મળમૂત્ર",
					"correct": false
                },
				{
					"option": "લાકડું",
					"correct": false
                },
				{
					"option": "પ્લાસ્ટિક",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્લાસ્ટિક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "પ્લાસ્ટિકનું વિઘટન થતા આશરે કેટલો સમય લાગે છે ?",
			"a": [
				{
					"option": "3-4 અઠવાડિયાં",
					"correct": false
                },
				{
					"option": "8-10 અઠવાડિયાં",
					"correct": false
                },
				{
					"option": "8-10 વર્ષ",
					"correct": false
                },
				{
					"option": "8-10 લાખ વર્ષ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8-10 લાખ વર્ષ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "નીચેના પૈકી કોને ઇ-વેસ્ટ ગણી શકાય ?",
			"a": [
				{
					"option": "નકામી કૅસેટ",
					"correct": true
                },
				{
					"option": "વપરાયેલી સિરિન્જ",
					"correct": false
                },
				{
					"option": "બ્લડ સૅમ્પલ",
					"correct": false
                },
				{
					"option": "નકામી પૉલિથીનની કોથળી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નકામી કૅસેટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "નીચેના પૈકી કોને બાયોમેડિકલ વેસ્ટ કહેવાય ?",
			"a": [
				{
					"option": "બંધ પડેલું કૅલ્ક્યુલેટર",
					"correct": false
                },
				{
					"option": "વપરાયેલી સિરિન્જ",
					"correct": true
                },
				{
					"option": "તૂટેલી પ્લાસ્ટિકની ડોલ",
					"correct": false
                },
				{
					"option": "બિનઉપયોગી કમ્પ્યુટર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વપરાયેલી સિરિન્જ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "બાયોમેડિકલ વેસ્ટ એકત્ર કરવા માટેની કયા રંગની કચરા પેટીમાં પ્લાસ્ટિકનો કચરો નાખવામાં આવે છે ?",
			"a": [
				{
					"option": "લીલા",
					"correct": false
                },
				{
					"option": "લાલ",
					"correct": true
                },
				{
					"option": "પીળા",
					"correct": false
                },
				{
					"option": "સફેદ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કયો બાયોમેડિકલ વેસ્ટ લીલા રંગની કચરાપેટીમાં એકત્ર કરવામાં આવે છે ?",
			"a": [
				{
					"option": "નકામા કાગળ",
					"correct": true
                },
				{
					"option": "પ્લાસ્ટિકના ગ્લોવ્ઝ",
					"correct": false
                },
				{
					"option": "વપરાયેલું ડ્રેસિંગ મટિરિયલ્સ",
					"correct": false
                },
				{
					"option": "વપરાયેલી નીડલ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નકામા કાગળ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "સીએચસીનું પૂરું નામ શું છે ?",
			"a": [
				{
					"option": "કૉમન હેલ્થ સેન્ટર",
					"correct": false
                },
				{
					"option": "કૉમ્યુનિસ્ટ હેલ્થ સેન્ટર",
					"correct": false
                },
				{
					"option": "કૉમ્યુનિટી હેલ્થ સેન્ટર",
					"correct": true
                },
				{
					"option": "કૉમ્યુનિટી હેર સેન્ટર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૉમ્યુનિટી હેલ્થ સેન્ટર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "પીએચસીનું પૂરું નામ શું છે ?",
			"a": [
				{
					"option": "પ્રમાણ હેલ્થ સેન્ટર",
					"correct": false
                },
				{
					"option": "પ્રાયમરી હેલ્થ સેન્ટર",
					"correct": true
                },
				{
					"option": "પ્રથમા હેલ્થ સેન્ટર",
					"correct": false
                },
				{
					"option": "પ્રાયમરી હેર સેન્ટર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રાયમરી હેલ્થ સેન્ટર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પ્રદૂષણ ફેલાવનાર પદાર્થોને શું કહેવાય ?",
			"a": [
				{
					"option": "પ્રદૂષિત",
					"correct": false
                },
				{
					"option": "પ્રમાણ",
					"correct": false
                },
				{
					"option": "પ્રદૂષકો",
					"correct": true
                },
				{
					"option": "વિદૂષકો",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રદૂષકો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "પ્રદુષનના મુખ્ય કેટલા પ્રકાર છે ?",
			"a": [
				{
					"option": "2",
					"correct": false
                },
				{
					"option": "3",
					"correct": true
                },
				{
					"option": "5",
					"correct": false
                },
				{
					"option": "7",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "યુએચસીનું પૂરું નામ શું છે ?",
			"a": [
				{
					"option": "બર્મન હેલ્થ સેન્ટર",
					"correct": false
                },
				{
					"option": "યુનિવર્સલ હેલ્થ સેન્ટર",
					"correct": false
                },
				{
					"option": "અર્બન હેલ્થ સેન્ટર",
					"correct": true
                },
				{
					"option": "અમન હેલ્થ સેન્ટર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અર્બન હેલ્થ સેન્ટર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "ઇલેક્ટ્રોનિક્સ વસ્તુઓના નકામા કચરાને શું કહે છે ?",
			"a": [
				{
					"option": "ઇ-મેઇલ",
					"correct": false
                },
				{
					"option": "ઇ-વેસ્ટ",
					"correct": true
                },
				{
					"option": "ઇન્વેસ્ટ",
					"correct": false
                },
				{
					"option": "ઇ-ધરા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ-વેસ્ટ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "કયો બાયોમેડિકલ વેસ્ટ પીળા રંગની કચરાપેટીમાં એકત્ર કરવામાં આવે છે ?",
			"a": [
				{
					"option": "ગ્લોવ્ઝ",
					"correct": false
                },
				{
					"option": "વધેલો ખોરાક",
					"correct": false
                },
				{
					"option": "ડ્રેસિંગ મટિરિયલ્સ",
					"correct": true
                },
				{
					"option": "નીડલ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડ્રેસિંગ મટિરિયલ્સ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 18
			"q": "કયો બાયોમેડિકલ વેસ્ટ વાદળી કે સફેદ રંગની કચરાપેટીમાં એકત્ર કરવામાં આવે છે ?",
			"a": [
				{
					"option": "સિરિન્જ",
					"correct": false
                },
				{
					"option": "બ્લેડ",
					"correct": true
                },
				{
					"option": "કાગલનો કચરો",
					"correct": false
                },
				{
					"option": "રુધિર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બ્લેડ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 19
			"q": "આમાંથી કયું વેસ્ટ સડતું નથી ?",
			"a": [
				{
					"option": "કાગળનું",
					"correct": false
                },
				{
					"option": "લાકડાનું",
					"correct": false
                },
				{
					"option": "પ્રાણીના મળમૂત્રનું",
					"correct": false
                },
				{
					"option": "પ્લાસ્ટિકનું",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્લાસ્ટિકનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};