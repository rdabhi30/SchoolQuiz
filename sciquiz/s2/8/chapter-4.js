// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-4 લેન્સ",
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
			"q": "લેન્સની વક્રસપાટી જે બે ગોળાના ભાગરૂપે હોય, તે ગોળાના કેન્દ્રને લેન્સ માટે શું કહેવાય ?",
			"a": [
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": true
                },
				{
					"option": "ઑપ્ટિકલ સેન્ટર",
					"correct": false
                },
				{
					"option": "મુખ્ય અક્ષ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રતાકેન્દ્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "બહિર્ગોળ લેન્સમાં મુખ્ય અક્ષને સમાંતર આપાત થતાં કિરણો વક્રિભવન પામી કયા બિંદુમાંથી પસાર થાય છે ?",
			"a": [
				{
					"option": "ઑપ્ટિકલ સેન્ટર",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": false
                },
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": true
                },
				{
					"option": "મુખ્ય અક્ષ પરના ગમે તે બિંદુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખ્ય કેન્દ્ર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "અંતર્ગોળ લેન્સના મુખ્ય કેન્દ્ર વિશે શું સાચું છે ?",
			"a": [
				{
					"option": "એક જ મુખ્ય કેન્દ્ર હોય છે.",
					"correct": false
                },
				{
					"option": "મુખ્ય કેન્દ્ર આભાસી હોય છે.",
					"correct": true
                },
				{
					"option": "મુખ્ય કેન્દ્ર વાસ્તવિક હોય છે.",
					"correct": false
                },
				{
					"option": "મુખ્ય કેન્દ્ર હોતું નથી.",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખ્ય કેન્દ્ર આભાસી હોય છે.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "બહિર્ગોળ લેન્સ સામે વસ્તુને 2Fથી દૂર મૂકતાં તેનું પ્રતિબિંબ ક્યાં મળે છે ?",
			"a": [
				{
					"option": "2F થી દૂર",
					"correct": false
                },
				{
					"option": "2F પર",
					"correct": false
                },
				{
					"option": "F અને 2F વચ્ચે",
					"correct": true
                },
				{
					"option": "F પર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: F અને 2F વચ્ચે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "બહિર્ગોળ લેન્સ સામે વસ્તુને 2Fથી દૂર મૂકતાં તેનું પ્રતિબિંબ કેવું મળે છે ?",
			"a": [
				{
					"option": "વાસ્તવિક અને મોટું",
					"correct": false
                },
				{
					"option": "આભાસી અને મોટું",
					"correct": false
                },
				{
					"option": "આભાસી અને નાનું",
					"correct": false
                },
				{
					"option": "વાસ્તવિક અને નાનું",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાસ્તવિક અને નાનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "બહિર્ગોળ લેન્સ સામે વસ્તુને ક્યાં મૂકવામાં આવે, તો તેનું પ્રતિબિંબ વાસ્તવિક અને મોટું મળે છે ?",
			"a": [
				{
					"option": "2F થી દૂર",
					"correct": false
                },
				{
					"option": "2F પર",
					"correct": false
                },
				{
					"option": "F અને 2F વચ્ચે",
					"correct": true
                },
				{
					"option": "F અને P વચ્ચે",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: F અને 2F વચ્ચે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "બહિર્ગોળ લેન્સ સામે વસ્તુને ક્યાં મૂકવામાં આવે, તો તેનું પ્રતિબિંબ આભાસી મળે છે ?",
			"a": [
				{
					"option": "2F થી દૂર",
					"correct": false
                },
				{
					"option": "2F પર",
					"correct": false
                },
				{
					"option": "F અને 2F વચ્ચે",
					"correct": false
                },
				{
					"option": "F અને P વચ્ચે",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: F અને P વચ્ચે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "બહિર્ગોળ લેન્સ વડે કેવું પ્રતિબિંબ મેળવી શકાતું નથી ?",
			"a": [
				{
					"option": "વાસ્તવિક અને મોટું",
					"correct": false
                },
				{
					"option": "આભાસી અને મોટું",
					"correct": false
                },
				{
					"option": "આભાસી અને નાનું",
					"correct": true
                },
				{
					"option": "વાસ્તવિક અને નાનું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આભાસી અને નાનું</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "અંતર્ગોળ લેન્સ વડે મળતું પ્રતિબિંબ કેવા પ્રકારનું હોય છે ?",
			"a": [
				{
					"option": "આભાસી, ચત્તું અને નાનું",
					"correct": true
                },
				{
					"option": "આભાસી, ચત્તું અને મોટું",
					"correct": false
                },
				{
					"option": "વાસ્તવિક, ઊલટું અને નાનું",
					"correct": false
                },
				{
					"option": "વાસ્તવિક, ઊલટું અને મોટું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આભાસી, ચત્તું અને નાનું</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કયા સાધન વડે દૂરની વસ્તુ નજીક અને સ્પષ્ટ જોઇ શકાય છે ?",
			"a": [
				{
					"option": "વિપુલદર્શક",
					"correct": false
                },
				{
					"option": "સૂક્ષ્મદર્શક",
					"correct": false
                },
				{
					"option": "ટેલિસ્કોપ",
					"correct": true
                },
				{
					"option": "એપિસ્કોપ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટેલિસ્કોપ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "જે લેન્સની બંને સપાટી અંદરની તરફ વક્રાકાર હોય, તેવા લેન્સને શું કહેવાય ?",
			"a": [
				{
					"option": "બહિર્ગોળ લેન્સ",
					"correct": false
                },
				{
					"option": "અંતર્ગોળ લેન્સ",
					"correct": true
                },
				{
					"option": "બહિર્મુખ લેન્સ",
					"correct": false
                },
				{
					"option": "અંતર્મુખ લેન્સ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંતર્ગોળ લેન્સ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "જે લેન્સની બંને સપાટી બહારની બાજુ ઊપસેલી હોય, તેવા લેન્સને શું કહેવાય ?",
			"a": [
				{
					"option": "બહિર્ગોળ લેન્સ",
					"correct": true
                },
				{
					"option": "અંતર્ગોળ લેન્સ",
					"correct": false
                },
				{
					"option": "બહિર્મુખ લેન્સ",
					"correct": false
                },
				{
					"option": "અંતર્મુખ લેન્સ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહિર્ગોળ લેન્સ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "લેન્સમાં મુખ્ય અક્ષને સમાંતર આપાત થતાં કિરણો વક્રીભવન પામી કોઈ બિંદુએ કેન્દ્રિત થતાં હોય અથવા તેવો આભાસ થાય, તે બિંદુને તે લેન્સનું શું કહે છે ?",
			"a": [
				{
					"option": "કેન્દ્રલંબાઈ",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": false
                },
				{
					"option": "ઑપ્ટિકલ સેન્ટર",
					"correct": false
                },
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખ્ય કેન્દ્ર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "લેન્સનાં બે વક્રતાકેન્દ્રોમાંથી પસાર થતી કાલ્પનિક રેખાને લેન્સનું શું કહે છે ?",
			"a": [
				{
					"option": "મુખ્ય અક્ષ",
					"correct": true
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": false
                },
				{
					"option": "ઑપ્ટિકલ સેન્ટર",
					"correct": false
                },
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખ્ય અક્ષ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "લેન્સના મુખ્ય અક્ષ પર આવેલા લેન્સના કેન્દ્રને લેન્સનું શું કહે છે ?",
			"a": [
				{
					"option": "મુખ્ય અક્ષ",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": false
                },
				{
					"option": "ઑપ્ટિકલ સેન્ટર",
					"correct": true
                },
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑપ્ટિકલ સેન્ટર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "લેન્સના ઑપ્ટિકલ સેન્ટરથી વક્રતાકેન્દ્ર સુધીના અંતરને લેન્સનું શું કહેવામાં આવે છે ? ",
			"a": [
				{
					"option": "મુખ્ય અક્ષ",
					"correct": false
                },
				{
					"option": "કેન્દ્રલંબાઈ",
					"correct": false
                },
				{
					"option": "વક્રતાત્રિજ્યા",
					"correct": true
                },
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રતાત્રિજ્યા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "લેન્સના ઑપ્ટિકલ સેન્ટર અને મુખ્ય કેન્દ્ર વચ્ચેના અંતરને લેન્સનું શું કહેવામાં આવે છે ? ",
			"a": [
				{
					"option": "મુખ્ય અક્ષ",
					"correct": false
                },
				{
					"option": "કેન્દ્રલંબાઈ",
					"correct": true
                },
				{
					"option": "વક્રતાત્રિજ્યા",
					"correct": false
                },
				{
					"option": "વક્રતા કેન્દ્ર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેન્દ્રલંબાઈ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "લઘુદ્રષ્ટિની ખામી દૂર કરવાના ચશ્માંમાં શાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "બહિર્ગોળ લેન્સ",
					"correct": false
                },
				{
					"option": "અંતર્ગોળ લેન્સ",
					"correct": true
                },
				{
					"option": "બહિર્મુખ લેન્સ",
					"correct": false
                },
				{
					"option": "અંતર્મુખ લેન્સ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંતર્ગોળ લેન્સ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "ગુરુ દ્રષ્ટિની ખામી દૂર કરવાના ચશ્માંમાં શાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "બહિર્ગોળ લેન્સ",
					"correct": true
                },
				{
					"option": "અંતર્ગોળ લેન્સ",
					"correct": false
                },
				{
					"option": "બહિર્મુખ લેન્સ",
					"correct": false
                },
				{
					"option": "અંતર્મુખ લેન્સ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહિર્ગોળ લેન્સ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "બહિર્ગોળ લેન્સ અને અન્ય સ્થાનિક સામગ્રીના ઉપયોગથી નીચેનામાંથી કઇ વસ્તુ બનાવી શકાય છે ?",
			"a": [
				{
					"option": "ટેલિસ્કોપ",
					"correct": false
                },
				{
					"option": "ટેલિસ્કોપ, એપિસ્કોપ, દૂરબીન - બધી",
					"correct": true
                },
				{
					"option": "એપિસ્કોપ",
					"correct": false
                },
				{
					"option": "દૂરબીન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટેલિસ્કોપ, એપિસ્કોપ, દૂરબીન - બધી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};