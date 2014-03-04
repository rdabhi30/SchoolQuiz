// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-12 પોષકશ્રેણી-આહારકડી",
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
			"q": "નીચેના પૈકી અજૈવિક ઘટક કયો છે ?",
			"a": [
				{
					"option": "સસલું ",
					"correct": false
                },
				{
					"option": "હવા",
					"correct": true
                },
				{
					"option": "સૂક્ષ્મ જીવો",
					"correct": false
                },
				{
					"option": "વનસ્પતિ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હવા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "નીચેના પૈકી કોને ઉત્પાદક કહે છે ?",
			"a": [
				{
					"option": "મનુષ્ય",
					"correct": false
                },
				{
					"option": "ગાય",
					"correct": false
                },
				{
					"option": "વનસ્પતિ",
					"correct": true
                },
				{
					"option": "સાપ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વનસ્પતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "નીચેના પૈકી શાકાહારી પ્રાણી કયું છે ?",
			"a": [
				{
					"option": "સસલું",
					"correct": true
                },
				{
					"option": "સાપ",
					"correct": false
                },
				{
					"option": "સિંહ",
					"correct": false
                },
				{
					"option": "રીંછ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સસલું</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "નીચેના પૈકી માંસાહારી પ્રાણી કયું છે ?",
			"a": [
				{
					"option": "ઉંદર",
					"correct": false
                },
				{
					"option": "હરણ",
					"correct": false
                },
				{
					"option": "ઊંટ",
					"correct": false
                },
				{
					"option": "દેડકો",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દેડકો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "ઉચ્ચ કક્ષાનાં માંસાહારી પ્રાણી કઈ પોષકશ્રેણીમાં આવે છે ?",
			"a": [
				{
					"option": "પ્રથમ",
					"correct": false
                },
				{
					"option": "દ્વિતીય",
					"correct": false
                },
				{
					"option": "તૃતીય",
					"correct": false
                },
				{
					"option": "ચતુર્થ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચતુર્થ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "શાકાહારી (તૃણાહારી) પ્રાણી કઈ પોષકશ્રેણી રચે છે ?",
			"a": [
				{
					"option": "પ્રથમ",
					"correct": false
                },
				{
					"option": "દ્વિતીય",
					"correct": true
                },
				{
					"option": "તૃતીય",
					"correct": false
                },
				{
					"option": "ચતુર્થ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દ્વિતીય</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "દ્વિતીય ભક્ષકો એટલે કઈ પોષકશ્રેણી ?",
			"a": [
				{
					"option": "પ્રથમ",
					"correct": false
                },
				{
					"option": "દ્વિતીય",
					"correct": false
                },
				{
					"option": "તૃતીય",
					"correct": true
                },
				{
					"option": "ચતુર્થ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તૃતીય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "લીલી વનસ્પતિ કઈ પોષકશ્રેણી રચે છે ?",
			"a": [
				{
					"option": "પ્રથમ",
					"correct": true
                },
				{
					"option": "દ્વિતીય",
					"correct": false
                },
				{
					"option": "તૃતીય",
					"correct": false
                },
				{
					"option": "ચતુર્થ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રથમ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "સાપ કયા પ્રકારનો સજીવ છે ?",
			"a": [
				{
					"option": "ઉત્પાદક",
					"correct": false
                },
				{
					"option": "શાકાહારી",
					"correct": false
                },
				{
					"option": "માંસાહારી",
					"correct": true
                },
				{
					"option": "વિઘટક",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માંસાહારી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "ઊર્જાનો મુખ્ય સ્ત્રોત કયો છે ?",
			"a": [
				{
					"option": "પાણી",
					"correct": false
                },
				{
					"option": "હવા",
					"correct": false
                },
				{
					"option": "સૂર્ય",
					"correct": true
                },
				{
					"option": "તાપમાન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂર્ય</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "જે પ્રાણીઓ ખોરાક તરીકે વનસ્પતિ કે વનસ્પતિજ પદાર્થોનો ઉપયોગ કરતા હોય તે પ્રાણીઓને કેવા પ્રાણીઓ કહેવાય ?",
			"a": [
				{
					"option": "શાકાહારી",
					"correct": true
                },
				{
					"option": "માંસાહારી",
					"correct": false
                },
				{
					"option": "મિશ્રાહારી",
					"correct": false
                },
				{
					"option": "આપેલ એકેય નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાકાહારી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "જે પ્રાણીઓ ખોરાક તરીકે પ્રાણીઓ કે પ્રાણીજ પદાર્થોનો ઉપયોગ કરતા હોય તે પ્રાણીઓને કેવા પ્રાણીઓ કહેવાય ?",
			"a": [
				{
					"option": "શાકાહારી",
					"correct": false
                },
				{
					"option": "માંસાહારી",
					"correct": true
                },
				{
					"option": "મિશ્રાહારી",
					"correct": false
                },
				{
					"option": "આપેલ એકેય નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માંસાહારી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "ઉચ્ચ માંસાહારી પ્રાણીમાં નીચેનામાંથી કોનો સમાવેશ થાય છે ?",
			"a": [
				{
					"option": "હરણ",
					"correct": false
                },
				{
					"option": "બાજ",
					"correct": true
                },
				{
					"option": "શિયાળ",
					"correct": false
                },
				{
					"option": "જિરાફ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાજ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "સજીવો આહારની બાબતમાં એક્બીજા સાથે જોડાઇને જે સાંકળ રચે છે તેને શું કહે છે ?",
			"a": [
				{
					"option": "કુપોષણકડી",
					"correct": false
                },
				{
					"option": "અલ્પાહારકડી",
					"correct": false
                },
				{
					"option": "જોડાણકડી",
					"correct": false
                },
				{
					"option": "આહારકડી",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આહારકડી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "જળચર આહારકડીમાં પ્રથમ પોષકશ્રેણીમાં નીચેનામાંથી કોનો સમાવેશ થાય છે ? ",
			"a": [
				{
					"option": "સેવાળ",
					"correct": true
                },
				{
					"option": "કીટકોની ઇયળ",
					"correct": false
                },
				{
					"option": "નાની માછલી",
					"correct": false
                },
				{
					"option": "મોટી માછલી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સેવાળ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },

		{ // Question 16
			"q": "ભૂચર આહારકડીમાં પ્રથમ પોષકશ્રેણીમાં નીચેનામાંથી કોનો સમાવેશ થાય છે ? ",
			"a": [
				{
					"option": "ઘાસ",
					"correct": true
                },
				{
					"option": "દેડકો",
					"correct": false
                },
				{
					"option": "સાપ",
					"correct": false
                },
				{
					"option": "તીડ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘાસ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "પ્રાથમિક ભક્ષકમાં નીચેનામાંથી કોનો સમાવેશ થાય છે ?",
			"a": [
				{
					"option": "સિંહ",
					"correct": false
                },
				{
					"option": "હરણ",
					"correct": true
                },
				{
					"option": "લીલી વનસ્પતિ",
					"correct": false
                },
				{
					"option": "વાઘ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હરણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "ઉત્પાદક પ્રકારનો સજીવ કયો છે ?",
			"a": [
				{
					"option": "હરણ",
					"correct": false
                },
				{
					"option": "વૃક્ષ",
					"correct": true
                },
				{
					"option": "વરુ",
					"correct": false
                },
				{
					"option": "વાઘ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૃક્ષ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "પર્યાવરણનો જૈવિક ઘટક કયો છે ?",
			"a": [
				{
					"option": "વનસ્પતિ",
					"correct": true
                },
				{
					"option": "હવા",
					"correct": false
                },
				{
					"option": "પાણી",
					"correct": false
                },
				{
					"option": "જમીન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વનસ્પતિ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "કીડી ખોરાકમાં શુ ખાય છે ?",
			"a": [
				{
					"option": "સેવાળ",
					"correct": false
                },
				{
					"option": "અનાજના દાણા",
					"correct": false
                },
				{
					"option": "સેન્દ્રિય પદાર્થો",
					"correct": true
                },
				{
					"option": "નાનાં જીવજંતુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સેન્દ્રિય પદાર્થો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};