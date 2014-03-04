// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 7 માપન",
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
			"q": "નીચેનામાંથી લંબાઈનો કયો એકમ સૌથી મોટો છે ?",
			"a": [
				{
					"option": "મીટર",
					"correct": false
				},
				{
					"option": "કિલોમીટર",
					"correct": true
				},
				{
					"option": "મિલીમીટર",
					"correct": false
				},
				{
					"option": "સેન્ટિમીટર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિલોમીટર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "લંબાઈ માપવા માટેનું પ્રમાણભૂત સાધન કયું છે ?",
			"a": [
				{
					"option": "માપપટ્ટી",
					"correct": true
				},
				{
					"option": "વેંત",
					"correct": false
				},
				{
					"option": "ડગલું",
					"correct": false
				},
				{
					"option": "હાથ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માપપટ્ટી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "સેન્ટિમીટર કરતાં નાનો એકમ કયો છે ?",
			"a": [
				{
					"option": "મીટર",
					"correct": false
				},
				{
					"option": "કિલોમીટર",
					"correct": false
				},
				{
					"option": "મિલીમીટર",
					"correct": true
				},
				{
					"option": "પ્રકાશવર્ષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મિલીમીટર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "પૃથ્વી પર કોઈ પણ બે શહેરો વચ્ચેનું અંતર માપવા માટે વ્યાવહારિક રીતે કયો એકમ વપરાય છે ?",
			"a": [
				{
					"option": "મીટર",
					"correct": false
				},
				{
					"option": "કિલોમીટર",
					"correct": true
				},
				{
					"option": "મિલીમીટર",
					"correct": false
				},
				{
					"option": "પ્રકાશવર્ષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિલોમીટર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "અવકાશીય પદાર્થો વચ્ચેનું અંતર કયા એકમમાં મપાય છે ?",
			"a": [
				{
					"option": "કિલોમીટર",
					"correct": false
				},
				{
					"option": "પ્રકાશવર્ષ",
					"correct": true
				},
				{
					"option": "મીટર",
					"correct": false
				},
				{
					"option": "સેન્ટિમીટર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રકાશવર્ષ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "તમારા વિજ્ઞાનના પુસ્તકની લંબાઈ કયા એકમમાં મપાય છે ?",
			"a": [
				{
					"option": "કિલોમીટર",
					"correct": false
				},
				{
					"option": "પ્રકાશવર્ષ",
					"correct": false
				},
				{
					"option": "મીટર",
					"correct": false
				},
				{
					"option": "સેન્ટિમીટર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સેન્ટિમીટર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "પ્રકાશવર્ષ શાનો એકમ છે ?",
			"a": [
				{
					"option": "અંતર",
					"correct": true
				},
				{
					"option": "સમય",
					"correct": false
				},
				{
					"option": "પ્રકાશની તીવ્રતા",
					"correct": false
				},
				{
					"option": "પ્રકાશનો વેગ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંતર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "1 સેન્ટિમીટર બરાબર કેટલા મિલીમીટર થાય ?",
			"a": [
				{
					"option": "10",
					"correct": true
				},
				{
					"option": "100",
					"correct": false
				},
				{
					"option": "1000",
					"correct": false
				},
				{
					"option": "10000",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 10</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "ક્ષેત્રફળનો એકમ નીચેના પૈકી કયો છે ?",
			"a": [
				{
					"option": "મીટર",
					"correct": false
				},
				{
					"option": "ઘન મીટર",
					"correct": false
				},
				{
					"option": "ચોરસ મીટર",
					"correct": true
				},
				{
					"option": "સેન્ટિમીટર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચોરસ મીટર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "અનિયમિત આકારના પાંદડાની સપાટીનું ક્ષેત્રફળ શોધવા શેનો ઉપયોગ કરશો ?",
			"a": [
				{
					"option": "પૂઠું",
					"correct": false
				},
				{
					"option": "મેઝરટેપ",
					"correct": false
				},
				{
					"option": "ગ્રાફ પેપર",
					"correct": true
				},
				{
					"option": "માપપટ્ટી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રાફ પેપર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "સમયનો પ્રમાણભૂત એકમ કયો છે ?",
			"a": [
				{
					"option": "પ્રકાશવર્ષ",
					"correct": false
				},
				{
					"option": "સેકન્ડ",
					"correct": true
				},
				{
					"option": "કલાક",
					"correct": false
				},
				{
					"option": "વર્ષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સેકન્ડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "દોડની સ્પર્ધામાં વપરાતી ખાસ પ્રકારની ઘડિયાળને શું કહે છે ?",
			"a": [
				{
					"option": "સ્ટૉપ વૉચ",
					"correct": true
				},
				{
					"option": "રિસ્ટ વૉચ",
					"correct": false
				},
				{
					"option": "ક્લૉક",
					"correct": false
				},
				{
					"option": "ડિજિટલ ઘડિયાળ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્ટૉપ વૉચ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "એક દિવસ બરાબર કેટલા કલાક ?",
			"a": [
				{
					"option": "10",
					"correct": false
				},
				{
					"option": "20",
					"correct": false
				},
				{
					"option": "12",
					"correct": false
				},
				{
					"option": "24",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 24</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "15 દિવસના સમયગાળાને શું કહે છે ?",
			"a": [
				{
					"option": "અઠવાડિયું",
					"correct": false
				},
				{
					"option": "પખવાડિયું",
					"correct": true
				},
				{
					"option": "મહિનો",
					"correct": false
				},
				{
					"option": "વર્ષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પખવાડિયું</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "કેટલાં પખવાડિયાનો એક મહિનો થાય ?",
			"a": [
				{
					"option": "15",
					"correct": false
				},
				{
					"option": "7",
					"correct": false
				},
				{
					"option": "4",
					"correct": false
				},
				{
					"option": "2",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "1 પ્રકાશવર્ષ બરાબર કેટલા કિલોમીટર ?",
			"a": [
				{
					"option": "9.50*10<sup12/sup>",
					"correct": false
				},
				{
					"option": "9.51*10<sup11/sup>",
					"correct": false
				},
				{
					"option": "9.46*10<sup12/sup>",
					"correct": true
				},
				{
					"option": "9.46*10<sup13/sup>",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 9.46*10<sup12/sup></p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "શૂન્યાવકાશમાં પ્રકાશના કિરણે એક વર્ષમાં કાપેલ અંતરને શું કહે છે ?",
			"a": [
				{
					"option": "કિલોમીટર",
					"correct": false
				},
				{
					"option": "પ્રકાશકિરણ",
					"correct": false
				},
				{
					"option": "વાયુવર્ષ",
					"correct": false
				},
				{
					"option": "પ્રકાશવર્ષ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રકાશવર્ષ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "સૂર્ય ઊગે તે સમયથી ફરી સૂર્ય ઊગે તે સમયને શું કહે છે ?",
			"a": [
				{
					"option": "એક રાત",
					"correct": false
				},
				{
					"option": "એક અઠવાડિયું",
					"correct": false
				},
				{
					"option": "એક પખવાડિયું",
					"correct": false
				},
				{
					"option": "એક દિવસ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એક દિવસ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "1 કિ.મી. બરાબર કેટલા મીટર થાય ?",
			"a": [
				{
					"option": "100",
					"correct": false
				},
				{
					"option": "1000",
					"correct": true
				},
				{
					"option": "10",
					"correct": false
				},
				{
					"option": "10000",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1000</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "1 ચોરસ મીટર બરાબર કેટલા ચોરસ સેમી થાય ?",
			"a": [
				{
					"option": "100",
					"correct": false
				},
				{
					"option": "1000",
					"correct": false
				},
				{
					"option": "10000",
					"correct": true
				},
				{
					"option": "100000",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 10000</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};