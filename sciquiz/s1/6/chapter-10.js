// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 10 ધ્વનિ",
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
			"q": "અવાજને બીજુ શું કહે છે ?",
			"a": [
				{
					"option": "સાદ",
					"correct": false
				},
				{
					"option": "રાડ",
					"correct": false
				},
				{
					"option": "ધ્વનિ",
					"correct": true
				},
				{
					"option": "ત્રાડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધ્વનિ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "અવાજ કેટલી રીતે ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "3",
					"correct": true
				},
				{
					"option": "2",
					"correct": false
				},
				{
					"option": "4",
					"correct": false
				},
				{
					"option": "6",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "નીચેનામાંથી અવાજ કઈ રીતે ઉત્પન્ન થતો નથી ?",
			"a": [
				{
					"option": "વસ્તુમાં ધ્રુજારી થવાથી",
					"correct": false
				},
				{
					"option": "વસ્તુને ધીમેથી સ્પર્શવાથી",
					"correct": true
				},
				{
					"option": "બે વસ્તુ અથડાવાથી",
					"correct": false
				},
				{
					"option": "વસ્તુ ઘસવાથી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વસ્તુને ધીમેથી સ્પર્શવાથી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "હવામાં અવાજની ઝડપ કેટલી છે ?",
			"a": [
				{
					"option": "330 મીટર/મિનિટ",
					"correct": false
				},
				{
					"option": "330 મીટર/સેકન્ડ",
					"correct": true
				},
				{
					"option": "440 મીટર/સેકન્ડ",
					"correct": false
				},
				{
					"option": "33 મીટર/સેકન્ડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 330 મીટર/સેકન્ડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "અવાજનું પ્રસરણ શામાં થઈ શકતું નથી ?",
			"a": [
				{
					"option": "હવામાં",
					"correct": false
				},
				{
					"option": "શૂન્યાવકાશમાં",
					"correct": true
				},
				{
					"option": "ઘન સ્વરૂપમાં",
					"correct": false
				},
				{
					"option": "પાણીમાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શૂન્યાવકાશમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "સૂર્ય પર થતા ધડાકા શાના કારણે પૃથ્વી સુધી સંભળાતા નથી ?",
			"a": [
				{
					"option": "હવાના કારણે",
					"correct": false
				},
				{
					"option": "શૂન્યાવકાશના કારણે",
					"correct": true
				},
				{
					"option": "ઘન સ્વરૂપના કારણે",
					"correct": false
				},
				{
					"option": "પાણીના કારણે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શૂન્યાવકાશના કારણે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "શાળાના ઘંટનો અવાજ શા કારણે પેદા થાય છે ?",
			"a": [
				{
					"option": "ઘસવાથી",
					"correct": false
				},
				{
					"option": "ધ્રુજારીથી",
					"correct": true
				},
				{
					"option": "હવાથી",
					"correct": false
				},
				{
					"option": "લટકાવવાથી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધ્રુજારીથી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "સિસોટીમાં શાની ધ્રુજારીથી અવાજ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "હવા",
					"correct": true
				},
				{
					"option": "ચામડાનું પડ",
					"correct": false
				},
				{
					"option": "લાકડું",
					"correct": false
				},
				{
					"option": "તાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હવા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "તંબુરામાં શાની ધ્રુજારીથી અવાજ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "હવા",
					"correct": false
				},
				{
					"option": "ચામડાનું પડ",
					"correct": false
				},
				{
					"option": "લાકડું",
					"correct": false
				},
				{
					"option": "તાર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "નગારામાં શાની ધ્રુજારીથી અવાજ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "ચામડાનું પડ",
					"correct": true
				},
				{
					"option": "લાકડું",
					"correct": false
				},
				{
					"option": "હવા",
					"correct": false
				},
				{
					"option": "તાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચામડાનું પડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "શામાં જોરથી ફૂંક મારવાથી અવાજ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "તંબુરામાં",
					"correct": false
				},
				{
					"option": "પિપૂડીમાં",
					"correct": true
				},
				{
					"option": "હાર્મોનિયમમાં",
					"correct": false
				},
				{
					"option": "ફૂગ્ગામાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પિપૂડીમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "કયા સાધનમાં તાર ધ્રુજવાથી અવાજ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "શરણાઈ",
					"correct": false
				},
				{
					"option": "તબલાં",
					"correct": false
				},
				{
					"option": "સિતાર",
					"correct": true
				},
				{
					"option": "ઘંટ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિતાર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "શામાં અવાજનું પ્રસરણ સૌથી ઝડપી થાય છે ?",
			"a": [
				{
					"option": "હવા",
					"correct": false
				},
				{
					"option": "પાણી",
					"correct": false
				},
				{
					"option": "કાચ",
					"correct": true
				},
				{
					"option": "શૂન્યાવકાશ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાચ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "પડઘો શાને કારણે ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "અવાજના પરાવર્તનને કારણે ",
					"correct": true
				},
				{
					"option": "તરંગો ઉત્પન્ન થવાને કારણે",
					"correct": false
				},
				{
					"option": "અવાજના પ્રસરણને લીધે",
					"correct": false
				},
				{
					"option": "ઘોંઘાટને કારણે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અવાજના પરાવર્તનને કારણે </p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "નીચેનામાંથી કઈ જગ્યાએ મોટેથી બોલવાથી પડઘો સંભળાય છે ?",
			"a": [
				{
					"option": "ડુંગરની સામે",
					"correct": true
				},
				{
					"option": "ખુલ્લા મેદાનમાં",
					"correct": false
				},
				{
					"option": "નાની ઓરડીમાં",
					"correct": false
				},
				{
					"option": "બાથરૂમમાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડુંગરની સામે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "નીચેનામાંથી કઈ જગ્યાએ બોલવાથી પડઘો નહિ સંભળાય ?",
			"a": [
				{
					"option": "ઘુમ્મટવાળા મોટા મંદિરમાં",
					"correct": false
				},
				{
					"option": "ઊંડા કૂવામાં",
					"correct": false
				},
				{
					"option": "ઘરની રૂમમાં",
					"correct": true
				},
				{
					"option": "ડુંગર સામે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘરની રૂમમાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "બોલનાર અને ધ્વનિનું પરાવર્તન કરનારી સપાટી વચ્ચે 17 મીટર કરતાં ઓછું અંતર હોય, તો પ્રતિધ્વનિનું શું થાય ?",
			"a": [
				{
					"option": "મૂળ અવાજમાં ભળી જાય.",
					"correct": true
				},
				{
					"option": "બંને અવાજ જુદા જુદા સંભળાય.",
					"correct": false
				},
				{
					"option": "ઘોંઘાટમાં રૂપાંતર થાય.",
					"correct": false
				},
				{
					"option": "પ્રતિધ્વનિનું શોષણ થાય.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૂળ અવાજમાં ભળી જાય.</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "એકસાથે વિવિધ અસ્તવ્યસ્ત અવાજો ભેગા થાય તેને શું કહે છે ?",
			"a": [
				{
					"option": "પડઘો",
					"correct": false
				},
				{
					"option": "ઘોંઘાટ",
					"correct": true
				},
				{
					"option": "કર્ણપ્રિય અવાજ",
					"correct": false
				},
				{
					"option": "સંગીત",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘોંઘાટ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "નીચેનામાંથી કોને ઘોંઘાટ કહી શકાય ?",
			"a": [
				{
					"option": "લયબદ્ધ ગવાતી પ્રાર્થના",
					"correct": false
				},
				{
					"option": "રેડિયોમાં વાગતું સંગીત",
					"correct": false
				},
				{
					"option": "શાકમાર્કેટના અવાજો",
					"correct": true
				},
				{
					"option": "પક્ષીઓનો કલરવ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાકમાર્કેટના અવાજો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "તબલામાં શાની ધ્રુજારીથી અવાજ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "ચામડાનું પડ",
					"correct": true
				},
				{
					"option": "લાકડું",
					"correct": false
				},
				{
					"option": "હવા",
					"correct": false
				},
				{
					"option": "તાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચામડાનું પડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};