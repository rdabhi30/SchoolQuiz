// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 7 ગતિ, બળ અને ઝડપ",
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
			"q": "સાપની ગતિ કયા પ્રકારની છે ?",
			"a": [
				{
					"option": "સુરેખ ગતિ",
					"correct": false
				},
				{
					"option": "અસ્તવ્યસ્ત ગતિ",
					"correct": true
				},
				{
					"option": "ચક્રિય ગતિ",
					"correct": false
				},
				{
					"option": "આંદોલિત ગતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અસ્તવ્યસ્ત ગતિ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "ઘડિયાળના કાંટાની ગતિ કયા પ્રકારની છે ?",
			"a": [
				{
					"option": "સુરેખ ગતિ",
					"correct": false
				},
				{
					"option": "અસ્તવ્યસ્ત ગતિ",
					"correct": false
				},
				{
					"option": "ચક્રિય ગતિ",
					"correct": true
				},
				{
					"option": "આંદોલિત ગતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચક્રિય ગતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "ફરતા ભમરડાની ગતિ કયા પ્રકારની છે ?",
			"a": [
				{
					"option": "ચક્રિય ગતિ",
					"correct": true
				},
				{
					"option": "આંદોલિત ગતિ",
					"correct": false
				},
				{
					"option": "અસ્તવ્યસ્ત ગતિ",
					"correct": false
				},
				{
					"option": "સુરેખ ગતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચક્રિય ગતિ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "પૃથ્વીની સૂર્યની આસપાસની ગતિ કયા પ્રકારની છે ?",
			"a": [
				{
					"option": "આંદોલિત ગતિ",
					"correct": false
				},
				{
					"option": "સુરેખ ગતિ",
					"correct": false
				},
				{
					"option": "અસ્તવ્યસ્ત ગતિ",
					"correct": false
				},
				{
					"option": "નિયતકાલીન ગતિ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નિયતકાલીન ગતિ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "ઘડિયાળના લોલકની ગતિ કયા પ્રકારની છે ?",
			"a": [
				{
					"option": "આંદોલિત ગતિ",
					"correct": true
				},
				{
					"option": "સુરેખ ગતિ",
					"correct": false
				},
				{
					"option": "અસ્તવ્યસ્ત ગતિ",
					"correct": false
				},
				{
					"option": "નિયતકાલીન ગતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંદોલિત ગતિ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "ઝૂલતા પારણાની ગતિ કયા પ્રકારની છે ?",
			"a": [
				{
					"option": "આંદોલિત ગતિ",
					"correct": true
				},
				{
					"option": "સુરેખ ગતિ",
					"correct": false
				},
				{
					"option": "અસ્તવ્યસ્ત ગતિ",
					"correct": false
				},
				{
					"option": "નિયતકાલીન ગતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંદોલિત ગતિ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "નીચેના પૈકી આંદોલિત ગતિ કઈ છે ?",
			"a": [
				{
					"option": "સાઈકલના પેડલની ગતિ",
					"correct": false
				},
				{
					"option": "દોડતા દોડવીરના હાથની ગતિ",
					"correct": true
				},
				{
					"option": "સીધા રસ્તે જતી સાઇકલની ગતિ",
					"correct": false
				},
				{
					"option": "પૃથ્વીની ગતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દોડતા દોડવીરના હાથની ગતિ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "નીચેના પૈકી નિયતકાલીન ગતિ કઈ છે ?",
			"a": [
				{
					"option": "ઊડતા મચ્છરની ગતિ",
					"correct": false
				},
				{
					"option": "ઊંચેથી પડતા પથ્થરની ગતિ",
					"correct": false
				},
				{
					"option": "ભમરડાની ગતિ",
					"correct": false
				},
				{
					"option": "ઘડિયાળના લોલકની ગતિ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘડિયાળના લોલકની ગતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "પદાર્થની ગતિનું કારણ શું છે ?",
			"a": [
				{
					"option": "ઘર્ષણ",
					"correct": false
				},
				{
					"option": "બળ",
					"correct": true
				},
				{
					"option": "ઝડપ",
					"correct": false
				},
				{
					"option": "ગુરૂત્વાકર્ષણ બળ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બળ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "ગ્રહોની સૂર્યની આસપાસની ગતિ કયા બળને આભારી છે ?",
			"a": [
				{
					"option": "ચુંબકીય બળ",
					"correct": false
				},
				{
					"option": "સ્નાયુબળ",
					"correct": false
				},
				{
					"option": "ઘર્ષણબળ",
					"correct": false
				},
				{
					"option": "ગુરૂત્વાકર્ષણ બળ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુરૂત્વાકર્ષણ બળ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "સામાન ઊંચકવા માટે તમે કયું બળ વાપરો છો ?",
			"a": [
				{
					"option": "ચુંબકીય બળ",
					"correct": false
				},
				{
					"option": "સ્નાયુબળ",
					"correct": true
				},
				{
					"option": "ઘર્ષણબળ",
					"correct": false
				},
				{
					"option": "ગુરૂત્વાકર્ષણ બળ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્નાયુબળ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "ઉબડખાબડ રસ્તાની સરખામણીએ ડામરના રસ્તા પર સાઇકલ ચલાવવી સરળ પડે છે તેનું શું કારણ છે ?",
			"a": [
				{
					"option": "ઘર્ષણબળ વધુ લાગે છે.",
					"correct": false
				},
				{
					"option": "ઘર્ષણબળ ઓછું લાગે છે.",
					"correct": true
				},
				{
					"option": "ઘર્ષણબળ લાગતું નથી.",
					"correct": false
				},
				{
					"option": "ગુરૂત્વાકર્ષણ બળ ઓછું લાગે છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘર્ષણબળ ઓછું લાગે છે.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "નીચેના પૈકી ઝડપનો એકમ કયો છે ?",
			"a": [
				{
					"option": "મીટર",
					"correct": false
				},
				{
					"option": "મીટર/સેકન્ડ",
					"correct": true
				},
				{
					"option": "સેકન્ડ/મીટર",
					"correct": false
				},
				{
					"option": "આપેલા તમામ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીટર/સેકન્ડ </p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "પદાર્થની સ્થિતિમાં ફેરફાર કરનાર બાહ્ય અસરને શું કહે છે ?",
			"a": [
				{
					"option": "બળ",
					"correct": true
				},
				{
					"option": "ઝડપ",
					"correct": false
				},
				{
					"option": "ગતિ",
					"correct": false
				},
				{
					"option": "કાર્ય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બળ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "ઝડપ શોધવાનું સૂત્ર કયું છે ?",
			"a": [
				{
					"option": "ઝડપ=તે માટે લીધેલો સમય/કાપેલું અંતર",
					"correct": false
				},
				{
					"option": "ઝડપ=કાપેલું અંતર/તે માટે લીધેલો સમય",
					"correct": true
				},
				{
					"option": "કાપેલું અંતર=ઝડપ/તે માટે લીધેલો સમય",
					"correct": false
				},
				{
					"option": "કાપેલું અંતર=તે માટે લીધેલો સમય/ઝડપ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઝડપ=કાપેલું અંતર/તે માટે લીધેલો સમય</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here
    ]
};