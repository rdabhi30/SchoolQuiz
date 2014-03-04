// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-11 આપણું સૂર્યમંડળ",
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
			"q": "નીચેના પૈકી કોનો સૂર્યમંડળમાં સમાવેશ થતો નથી ?",
			"a": [
				{
					"option": "ગ્રહો",
					"correct": false
                },
				{
					"option": "ઉપગ્રહો",
					"correct": false
                },
				{
					"option": "ધૂમકેતુઓ",
					"correct": false
                },
				{
					"option": "તારાઓ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તારાઓ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "સૂર્યમંડળનો સૌથી તેજસ્વી દેખાતો ગ્રહ કયો છે ?",
			"a": [
				{
					"option": "મંગળ",
					"correct": false
                },
				{
					"option": "ગુરુ",
					"correct": false
                },
				{
					"option": "શુક્ર",
					"correct": true
                },
				{
					"option": "શનિ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુક્ર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "સૂર્યમંડળનો લાલ રંગનો ગ્રહ કયો છે ?",
			"a": [
				{
					"option": "મંગળ",
					"correct": true
                },
				{
					"option": "ગુરુ",
					"correct": false
                },
				{
					"option": "શુક્ર",
					"correct": false
                },
				{
					"option": "બુધ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મંગળ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "કયા ગ્રહને 'સવારનો તારો' કહે છે ?",
			"a": [
				{
					"option": "મંગળ",
					"correct": false
                },
				{
					"option": "ગુરુ",
					"correct": false
                },
				{
					"option": "શુક્ર",
					"correct": true
                },
				{
					"option": "બુધ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુક્ર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "ગુરુ ગ્રહ પૃથ્વી કરતાં કેટલા ગણો મોટો છે ?",
			"a": [
				{
					"option": "500",
					"correct": false
                },
				{
					"option": "850",
					"correct": false
                },
				{
					"option": "1317",
					"correct": true
                },
				{
					"option": "1713",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1317</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નીચેના પૈકી આંતરિક ગ્રહ કયો છે ?",
			"a": [
				{
					"option": "મંગળ",
					"correct": false
                },
				{
					"option": "ગુરુ",
					"correct": false
                },
				{
					"option": "શુક્ર",
					"correct": true
                },
				{
					"option": "શનિ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુક્ર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "નીચેના પૈકી બાહ્ય ગ્રહ કયો છે ?",
			"a": [
				{
					"option": "શનિ",
					"correct": true
                },
				{
					"option": "પૃથ્વી",
					"correct": false
                },
				{
					"option": "શુક્ર",
					"correct": false
                },
				{
					"option": "બુધ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શનિ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "નીચેના પૈકી કયો ગ્રહ નરી આંખે જોઈ શકાતો નથી ?",
			"a": [
				{
					"option": "શુક્ર",
					"correct": false
                },
				{
					"option": "મંગળ",
					"correct": false
                },
				{
					"option": "બુધ",
					"correct": false
                },
				{
					"option": "નેપ્ચુન",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નેપ્ચુન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "નીચેના પૈકી કયા ગ્રહને ઉપગ્રહ નથી ?",
			"a": [
				{
					"option": "બુધ",
					"correct": true
                },
				{
					"option": "ગુરુ",
					"correct": false
                },
				{
					"option": "શનિ",
					"correct": false
                },
				{
					"option": "યુરેનસ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બુધ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કયો અવકાશી પદાર્થ 'ખરતા તારા'થી ઓળખાય છે ?",
			"a": [
				{
					"option": "ઉપગ્રહ",
					"correct": false
                },
				{
					"option": "ઉલ્કા",
					"correct": true
                },
				{
					"option": "લઘુગ્રહો",
					"correct": false
                },
				{
					"option": "ધૂમકેતુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉલ્કા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "ધૂમકેતુને કયા નામથી ઓળખવામાં આવે છે ?",
			"a": [
				{
					"option": "ખરતા તારા",
					"correct": false
                },
				{
					"option": "પૂંછડિયો તારો",
					"correct": true
                },
				{
					"option": "સવારનો તારો",
					"correct": false
                },
				{
					"option": "અંધારિયો ગ્રહ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂંછડિયો તારો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "હેલીના ધૂમકેતુનો આવર્તકાળ કેટલો છે ?",
			"a": [
				{
					"option": "30 દિવસ",
					"correct": false
                },
				{
					"option": "365 દિવસ",
					"correct": false
                },
				{
					"option": "76 વર્ષ",
					"correct": true
                },
				{
					"option": "850 વર્ષ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 76 વર્ષ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "સૂર્યમંડળમાં સૂર્યથી સૌથી નજીકનો ગ્રહ કયો છે ?",
			"a": [
				{
					"option": "ગુરૂ",
					"correct": false
                },
				{
					"option": "બુધ",
					"correct": true
                },
				{
					"option": "શુક્ર",
					"correct": false
                },
				{
					"option": "શનિ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બુધ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "1 પ્રકાશવર્ષ એટલે કેટલા કિલોમિટર ?",
			"a": [
				{
					"option": "9.64x10<sup>12</sup>",
					"correct": false
                },
				{
					"option": "9.46x10<sup>12</sup>",
					"correct": true
                },
				{
					"option": "9.46x10<sup>21</sup>",
					"correct": false
                },
				{
					"option": "9.46x12<sup>10</sup>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 9.46x10<sup>12</sup></p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "ધૂમકેતુઓ કોનામાંથી છૂટા પડેલા સભ્યો છે ? ",
			"a": [
				{
					"option": "અવકાશીય વાદળ",
					"correct": false
                },
				{
					"option": "ઊર્ટના વાદળ",
					"correct": true
                },
				{
					"option": "ઊંટના વાદળ",
					"correct": false
                },
				{
					"option": "ઉલ્કાના વાદળ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઊર્ટના વાદળ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "ઉલકાને બીજા ક્યા નામથી ઓળખવામાં આવે છે ?",
			"a": [
				{
					"option": "ખરતા તારા",
					"correct": true
                },
				{
					"option": "પૂંછડિયો તારો",
					"correct": false
                },
				{
					"option": "સવારનો તારો",
					"correct": false
                },
				{
					"option": "અંધારિયો ગ્રહ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખરતા તારા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "સૂર્યમંડળના ગ્રહોના નિર્માણ સમયે ગ્રહ બનવામાં નિષ્ફળ નિવડેલા નાના નાના ખડકોને શું કહે છે ?",
			"a": [
				{
					"option": "ઉપગ્રહ",
					"correct": false
                },
				{
					"option": "ઉલ્કા",
					"correct": false
                },
				{
					"option": "લઘુગ્રહો",
					"correct": true
                },
				{
					"option": "ધૂમકેતુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લઘુગ્રહો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "સૌથી વધુ ગુરુત્વાકર્ષણબળ કયા ગ્રહનું છે ?",
			"a": [
				{
					"option": "ગુરૂ",
					"correct": true
                },
				{
					"option": "બુધ",
					"correct": false
                },
				{
					"option": "શુક્ર",
					"correct": false
                },
				{
					"option": "શનિ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુરૂ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "કયા ગ્રહની ફરતે સુંદર વલયો આવેલા છે ?",
			"a": [
				{
					"option": "શનિ",
					"correct": true
                },
				{
					"option": "શુક્ર",
					"correct": false
                },
				{
					"option": "મંગળ",
					"correct": false
                },
				{
					"option": "ગુરુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શનિ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "કયો ગ્રહ સવારના તારા તરીકે ઓળખાય છે ?",
			"a": [
				{
					"option": "શનિ",
					"correct": false
                },
				{
					"option": "શુક્ર",
					"correct": true
                },
				{
					"option": "મંગળ",
					"correct": false
                },
				{
					"option": "ધ્રુવ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુક્ર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};