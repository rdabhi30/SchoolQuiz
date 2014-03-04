// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 7 માનવનિર્મિત પદાર્થો",
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
			"q": "કયો પદાર્થ કુદરતમાંથી મળતો નથી ?",
			"a": [
				{
					"option": "લાકડું",
					"correct": false
				},
				{
					"option": "ખડક",
					"correct": false
				},
				{
					"option": "ખનીજ તેલ",
					"correct": false
				},
				{
					"option": "પ્લાસ્ટિક",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્લાસ્ટિક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "નીચેનામાંથી કૃત્રિમ રેસા કયા છે ?",
			"a": [
				{
					"option": "રૂ",
					"correct": false
				},
				{
					"option": "રેશમ",
					"correct": false
				},
				{
					"option": "એક્રિલિક",
					"correct": true
				},
				{
					"option": "શણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એક્રિલિક</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "કયા પ્રકારના રેસા રેશમ જેવા છે ?",
			"a": [
				{
					"option": "રેશમ",
					"correct": false
				},
				{
					"option": "ટેરિલિન",
					"correct": false
				},
				{
					"option": "એક્રિલિક",
					"correct": false
				},
				{
					"option": "નાયલૉન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાયલૉન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "કાપડ ઉદ્યોગમાં કયા રેસાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "ટેરિલિન",
					"correct": true
				},
				{
					"option": "એક્રિલિક",
					"correct": false
				},
				{
					"option": "પ્લાસ્ટિક",
					"correct": false
				},
				{
					"option": "રબર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટેરિલિન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "કયા રેસા વનસ્પતિમાંથી બનતા નથી ?",
			"a": [
				{
					"option": "રૂ",
					"correct": false
				},
				{
					"option": "રેશમ",
					"correct": true
				},
				{
					"option": "સૂતર",
					"correct": false
				},
				{
					"option": "શણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રેશમ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "પગરખાં બનાવવામાં કયું પ્લાસ્ટિક વપરાય છે ?",
			"a": [
				{
					"option": "બૅકેલાઈટ",
					"correct": false
				},
				{
					"option": "પૉલિથીન",
					"correct": false
				},
				{
					"option": "મેલેમાઈન",
					"correct": false
				},
				{
					"option": "પૉલિવિનાઈલ ક્લોરાઈડ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૉલિવિનાઈલ ક્લોરાઈડ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "દૂધની થેલીઓ બનાવવામાં કયું પ્લાસ્ટિક વપરાય છે ?",
			"a": [
				{
					"option": "પૉલિથીન",
					"correct": true
				},
				{
					"option": "પૉલિવિનાઈલ ક્લોરાઈડ",
					"correct": false
				},
				{
					"option": "પૉલિસ્ટાયરીન",
					"correct": false
				},
				{
					"option": "બૅકેલાઈટ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૉલિથીન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "લાઈટની સ્વિચ બનાવવામાં કયું પ્લાસ્ટિક વપરાય છે ?",
			"a": [
				{
					"option": "બૅકેલાઈટ",
					"correct": true
				},
				{
					"option": "પૉલિથીન",
					"correct": false
				},
				{
					"option": "મેલેમાઈન",
					"correct": false
				},
				{
					"option": "પૉલિવિનાઈલ ક્લોરાઈડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૅકેલાઈટ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "નીચેનામાંથી થરમૉસેટિંગ પ્લાસ્ટિક કયું છે ?",
			"a": [
				{
					"option": "બૅકેલાઈટ",
					"correct": true
				},
				{
					"option": "પૉલિથીન",
					"correct": false
				},
				{
					"option": "પૉલિસ્ટાયરીન",
					"correct": false
				},
				{
					"option": "નિઓપ્રીન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૅકેલાઈટ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "મેલેમાઈન શું છે ?",
			"a": [
				{
					"option": "કૃત્રિમ રેસા",
					"correct": false
				},
				{
					"option": "કાચ",
					"correct": false
				},
				{
					"option": "થરમૉપ્લાસ્ટિક",
					"correct": false
				},
				{
					"option": "થરમૉસેટિંગ પ્લાસ્ટિક",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: થરમૉસેટિંગ પ્લાસ્ટિક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "ઇલેક્ટ્રિક કેબલ બનાવવા શાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "વલ્કેનાઇઝ્ડ રબર",
					"correct": false
				},
				{
					"option": "બૅકેલાઈટ",
					"correct": false
				},
				{
					"option": "નિઓપ્રીન",
					"correct": true
				},
				{
					"option": "નાયલૉન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નિઓપ્રીન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "વલ્કેનાઇઝ્ડ રબર બનાવવા કુદરતી રબરમાં શું ઉમેરી ગરમ કરવામાં આવે છે ? ",
			"a": [
				{
					"option": "કાર્બન",
					"correct": false
				},
				{
					"option": "સલ્ફર",
					"correct": true
				},
				{
					"option": "સિલિકા",
					"correct": false
				},
				{
					"option": "ધોવાના સોડા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સલ્ફર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "ટાયર-ટ્યૂબ શામાંથી બનાવવામાં આવે છે ?",
			"a": [
				{
					"option": "એક્રિલિક",
					"correct": false
				},
				{
					"option": "કૃત્રિમ રેસા",
					"correct": false
				},
				{
					"option": "પ્લાસ્ટિક",
					"correct": false
				},
				{
					"option": "રબર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રબર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "ક્રોકરીની ડિશો તથા વિવિધ પ્રકારની ટ્રે બનાવવામાં શાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "બૅકેલાઈટ",
					"correct": false
				},
				{
					"option": "મેલેમાઈન",
					"correct": true
				},
				{
					"option": "પૉલિસ્ટાયરીન",
					"correct": false
				},
				{
					"option": "પીવીસી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મેલેમાઈન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "કાચની બનાવટમાં કયો પદાર્થ વપરાય છે ?",
			"a": [
				{
					"option": "કાર્બન",
					"correct": false
				},
				{
					"option": "સલ્ફર",
					"correct": false
				},
				{
					"option": "સિલિકા",
					"correct": true
				},
				{
					"option": "મીઠું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિલિકા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "કયા પ્રકારનો કાચ ખૂબ જ મજબૂત હોય છે ?",
			"a": [
				{
					"option": "પ્રકાશીય કાચ",
					"correct": false
				},
				{
					"option": "બુલેટપ્રુફ કાચ",
					"correct": true
				},
				{
					"option": "ફોટોક્રોમિક કાચ",
					"correct": false
				},
				{
					"option": "ગ્લાસવુલ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બુલેટપ્રુફ કાચ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "સૂર્યપ્રકાશથી રક્ષણ મેળવવા કયા પ્રકારનો કાચ વપરાય છે ?",
			"a": [
				{
					"option": "પ્રકાશીય કાચ",
					"correct": false
				},
				{
					"option": "બુલેટપ્રુફ કાચ",
					"correct": false
				},
				{
					"option": "ફોટોક્રોમિક કાચ",
					"correct": true
				},
				{
					"option": "કાચનું ઊન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોટોક્રોમિક કાચ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "ટેલિસ્કોપ અને માઇક્રોસ્કોપમાં કયા પ્રકારનો કાચ વપરાય છે ?",
			"a": [
				{
					"option": "પ્રકાશીય કાચ",
					"correct": true
				},
				{
					"option": "બુલેટપ્રુફ કાચ",
					"correct": false
				},
				{
					"option": "ફોટોક્રોમિક કાચ",
					"correct": false
				},
				{
					"option": "ટફન ગ્લાસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રકાશીય કાચ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "રેસાયુક્ત કાચ શામાં વપરાય છે ?",
			"a": [
				{
					"option": "કૅમેરામાં",
					"correct": false
				},
				{
					"option": "રેફ્રિજરેટરમાં",
					"correct": true
				},
				{
					"option": "ગોગલ્સમાં",
					"correct": false
				},
				{
					"option": "બારીના કાચમાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રેફ્રિજરેટરમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "એન્ડોસ્કોપની બનાવટમાં શાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "ટફન ગ્લાસ",
					"correct": false
				},
				{
					"option": "ગ્લાસવુલ",
					"correct": false
				},
				{
					"option": "ઑપ્ટિકલ ફાઇબર",
					"correct": true
				},
				{
					"option": "પ્રકાશીય કાચ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑપ્ટિકલ ફાઇબર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
		{ // Question 21
			"q": "PVCનું પૂરૂં નામ શું છે ?",
			"a": [
				{
					"option": "પૉલિવિનાઈલ ક્લોરાઈડ",
					"correct": true
				},
				{
					"option": "પૉલિથીન વિનાઈલ ક્લોરાઈડ",
					"correct": false
				},
				{
					"option": "પૉલિવિનય ક્લોરાઈડ",
					"correct": false
				},
				{
					"option": "પૉલિવિનાઈલ કૅલ્શિયમ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૉલિવિનાઈલ ક્લોરાઈડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       } // no comma here 
    ]
};