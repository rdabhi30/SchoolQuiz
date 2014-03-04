// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-6 વક્રઅરીસા",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
		"standard": "7",
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
			"q": "વક્રારીસાને જે પોલા ગોળામાંથી કાપીને બનાવવામાં આવ્યો હોય તે ગોળાના કેન્દ્રને શું કહે છે ?",
			"a": [
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": false
                },
				{
					"option": "ધ્રુવ",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": true
                },
				{
					"option": "મધ્યબિંદુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રતાકેન્દ્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "કયા પ્રકારના અરીસામાં પ્રતિબિંબ વાસ્તવિક મળી શકે છે ?",
			"a": [
				{
					"option": "અંતર્ગોળ",
					"correct": true
                },
				{
					"option": "બહિર્ગોળ",
					"correct": false
                },
				{
					"option": "સમતલ",
					"correct": false
                },
				{
					"option": "બહિર્ગોળ અને અંતર્ગોળ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંતર્ગોળ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "વાહનોની હેડલાઇટમાં પરાવર્તક તરીકે કયો અરીસો વપરાય છે ?",
			"a": [
				{
					"option": "અંતર્ગોળ",
					"correct": true
                },
				{
					"option": "બહિર્ગોળ",
					"correct": false
                },
				{
					"option": "સમતલ",
					"correct": false
                },
				{
					"option": "આપેલ એકેય નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંતર્ગોળ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "અંતર્ગોળ અરીસાની સામે વસ્તુને ક્યાં મૂકવાથી તેનું પ્રતિબિંબ આભાસી અને ચત્તું મળે છે ?",
			"a": [
				{
					"option": "મુખ્ય કેન્દ્ર F ઉપર",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર C ઉપર",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર C અને મુખ્ય કેન્દ્ર F વચ્ચે",
					"correct": false
                },
				{
					"option": "મુખ્ય કેન્દ્ર F અને ધ્રુવ Pની વચ્ચે",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખ્ય કેન્દ્ર F અને ધ્રુવ Pની વચ્ચે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "'અંતર્ગોળ અરીસાના મુખ્ય કેન્દ્ર આગળ મૂકેલા પ્રકાશિત દીવાનાં કિરણો પરાવર્તન પામીને મુખ્ય અક્ષને સમાંતર અને દૂર જાય છે.' આ સિદ્ધાંતનો ઉપયોગ કયા સાધનમાં થાય છે ?",
			"a": [
				{
					"option": "સૂર્યકૂકરમાં",
					"correct": false
                },
				{
					"option": "સર્ચલાઇટમાં",
					"correct": true
                },
				{
					"option": "શેવિંગ મિરરમાં",
					"correct": false
                },
				{
					"option": "વાહનોના 'સાઇડ ગ્લાસ'માં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સર્ચલાઇટમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "શેવિંગ મિરર તરીકે વક્રારીસો વપરાય છે ?",
			"a": [
				{
					"option": "અંતર્ગોળ",
					"correct": true
                },
				{
					"option": "બહિર્ગોળ",
					"correct": false
                },
				{
					"option": "સમતલ",
					"correct": false
                },
				{
					"option": "આપેલ એકેય નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંતર્ગોળ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "પરવલયાકાર સૂર્યકૂકરમાં  કયા અરીસાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "અંતર્ગોળ",
					"correct": true
                },
				{
					"option": "બહિર્ગોળ",
					"correct": false
                },
				{
					"option": "સમતલ",
					"correct": false
                },
				{
					"option": "આપેલ એકેય નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંતર્ગોળ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "બહિર્ગોળ અરીસાનો ઉપયોગ ક્યાં થાય છે ?",
			"a": [
				{
					"option": "પ્રકાશનાં કિરણો દૂર સુધી ફેંકવા માટે",
					"correct": false
                },
				{
					"option": "ગરમી કેન્દ્રિત કરવા માટે",
					"correct": false
                },
				{
					"option": "વાહનોના 'સાઇડ ગ્લાસ' તરીકે",
					"correct": true
                },
				{
					"option": "સામે આવતાં વાહનો જોવા માટે",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાહનોના 'સાઇડ ગ્લાસ' તરીકે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "બહિર્ગોળ અરીસા વડે હંમેશાં કેવા પ્રકારનું પ્રતિબિંબ મળે છે ?",
			"a": [
				{
					"option": "આભાસી અને મોટું",
					"correct": false
                },
				{
					"option": "આભાસી અને નાનું",
					"correct": true
                },
				{
					"option": "વાસ્તવિક અને મોટું",
					"correct": false
                },
				{
					"option": "વાસ્તવિક અને નાનું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આભાસી અને નાનું</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "અંતર્ગોળ અરીસાની સામે કઈ જગ્યાએ મૂકેલી વસ્તુનું પ્રતિબિંબ વાસ્તવિક અને વસ્તુના કદ જેવડું મળે છે ?",
			"a": [
				{
					"option": "મુખ્ય કેન્દ્ર F ઉપર",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર C ઉપર",
					"correct": true
                },
				{
					"option": "વક્રતાકેન્દ્ર C અને મુખ્ય કેન્દ્ર F વચ્ચે",
					"correct": false
                },
				{
					"option": "મુખ્ય કેન્દ્ર F અને ધ્રુવ Pની વચ્ચે",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રતાકેન્દ્ર C ઉપર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "અંતર્ગોળ અરીસાની સામે વસ્તુને ક્યાં મૂકવાથી તેનું પ્રતિબિંબ વાસ્તવિક અને મોટું મળે છે ?",
			"a": [
				{
					"option": "મુખ્ય કેન્દ્ર F ઉપર",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર C ઉપર",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર C અને મુખ્ય કેન્દ્ર F વચ્ચે",
					"correct": true
                },
				{
					"option": "મુખ્ય કેન્દ્ર F અને ધ્રુવ Pની વચ્ચે",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રતાકેન્દ્ર C અને મુખ્ય કેન્દ્ર F વચ્ચે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "કયા પ્રકારનું પ્રતિબિંબ હંમેશાં ચત્તું હોય છે ?",
			"a": [
				{
					"option": "વાસ્તવિક",
					"correct": false
                },
				{
					"option": "આભાસી",
					"correct": true
                },
				{
					"option": "નાનું",
					"correct": false
                },
				{
					"option": "મોટું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આભાસી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "જે વક્રઅરીસાની અંદરની ઊંડી સપાટી ચળકતી હોય તે વક્રઅરીસાને કયો અરીસો કહે છે ?",
			"a": [
				{
					"option": "અંતર્મુખ અરીસો",
					"correct": false
                },
				{
					"option": "બહિર્મુખ અરીસો",
					"correct": false
                },
				{
					"option": "અંતર્ગોળ અરીસો",
					"correct": true
                },
				{
					"option": "બહિર્ગોળ અરીસો",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંતર્ગોળ અરીસો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "જે વક્રઅરીસાની અંદરની ઊંડી સપાટી ચળકતી હોય તે વક્રઅરીસાને કયો અરીસો કહે છે ?",
			"a": [
				{
					"option": "અંતર્મુખ અરીસો",
					"correct": false
                },
				{
					"option": "બહિર્ગોળ અરીસો",
					"correct": true
                },
				{
					"option": "અંતર્ગોળ અરીસો",
					"correct": false
                },
				{
					"option": "બહિર્મુખ અરીસો",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહિર્ગોળ અરીસો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "વક્રઅરીસાની પરાવર્તક સપાટીના મધ્યબિંદુને વક્રઅરીસાનું શું કહેવાય છે ?",
			"a": [
				{
					"option": "ધ્રુવ",
					"correct": true
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": false
                },
				{
					"option": "વક્રતાત્રિજ્યા",
					"correct": false
                },
				{
					"option": "મુખ્ય અક્ષ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધ્રુવ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "વક્રઅરીસાને જે પોલા ગોળામાંથી કાપીને બનાવેલ છે, તે પોલા ગોળાના કેન્દ્રને તે વક્રઅરીસાનું શું કહે છે ?",
			"a": [
				{
					"option": "ધ્રુવ",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": true
                },
				{
					"option": "વક્રતાત્રિજ્યા",
					"correct": false
                },
				{
					"option": "મુખ્ય અક્ષ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રતાકેન્દ્ર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "વક્રઅરીસાના ધ્રુવ અને વક્રતાકેન્દ્ર વચ્ચેના અંતરને શું કહે છે ?",
			"a": [
				{
					"option": "વક્રતાત્રિજ્યા",
					"correct": true
                },
				{
					"option": "મુખ્ય અક્ષ",
					"correct": false
                },
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": false
                },
				{
					"option": "કેન્દ્રલંબાઈ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વક્રતાત્રિજ્યા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "ધ્રુવ અને વક્રતાકેન્દ્રમાંથી પસાર થતી કાલ્પનિક રેખાને વક્રઅરીસાનું શું કહેવામાં આવે છે ?",
			"a": [
				{
					"option": "વક્રતાત્રિજ્યા",
					"correct": false
                },
				{
					"option": "મુખ્ય અક્ષ",
					"correct": true
                },
				{
					"option": "મુખ્ય કેન્દ્ર",
					"correct": false
                },
				{
					"option": "કેન્દ્રલંબાઈ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખ્ય અક્ષ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "વક્રઅરીસાના ધ્રુવ અને મુખ્ય કેન્દ્ર વચ્ચેના અંતરને વક્રઅરીસાનું શું કહેવામાં આવે છે ?",
			"a": [
				{
					"option": "વક્રતાત્રિજ્યા",
					"correct": false
                },
				{
					"option": "મુખ્ય અક્ષ",
					"correct": false
                },
				{
					"option": "વક્રતાકેન્દ્ર",
					"correct": false
                },
				{
					"option": "કેન્દ્રલંબાઈ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેન્દ્રલંબાઈ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "એક વક્રઅરીસાની કેન્દ્રલંબાઈ 15 સેમી છે, તો તેની વક્રતાત્રિજ્યા કેટલી હોય ?",
			"a": [
				{
					"option": "30 સેમી",
					"correct": true
                },
				{
					"option": "45 સેમી",
					"correct": false
                },
				{
					"option": "50 સેમી",
					"correct": false
                },
				{
					"option": "15 સેમી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30 સેમી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};