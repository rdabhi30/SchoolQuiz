// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-2 અણુરચના",
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
			"q": "પદાર્થનો પાયાનો મૂળભૂત ઘટક કયો છે ?",
			"a": [
				{
					"option": "અણુ",
					"correct": false
                },
				{
					"option": "પરમાણુ",
					"correct": false
                },
				{
					"option": "તત્ત્વ",
					"correct": true
                },
				{
					"option": "સંયોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તત્ત્વ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "એકસરખા પરમાણુઓના સમૂહને શું છે ?",
			"a": [
				{
					"option": "અણુ",
					"correct": false
                },
				{
					"option": "તત્ત્વ",
					"correct": true
                },
				{
					"option": "પરમાણુ",
					"correct": false
                },				
				{
					"option": "સંયોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તત્ત્વ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 3
			"q": "તત્ત્વનો પાયાનો મૂળભૂત ઘટક કયો છે ?",
			"a": [
				{
					"option": "અણુ",
					"correct": false
                },
				{
					"option": "પરમાણુ",
					"correct": true
                },
				{
					"option": "આયન",
					"correct": false
                },
				{
					"option": "સંયોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરમાણુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "તત્ત્વના પરમાણુના પરમાણુકેન્દ્રમાં કયા કણો હોય છે ?",
			"a": [
				{
					"option": "ન્યૂટ્રૉન અને ઇલેક્ટ્રૉન",
					"correct": false
                },
				{
					"option": "ઇલેક્ટ્રૉન અને પ્રોટોન",
					"correct": false
                },
				{
					"option": "પ્રોટોન અને ન્યૂટ્રૉન",
					"correct": true
                },
				{
					"option": "ફક્ત ન્યૂટ્રૉન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટોન અને ન્યૂટ્રૉન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 5
			"q": "તત્ત્વના પરમાણુનો કયો ઘટક ધન વીજભાર ધરાવે છે ?",
			"a": [
				{
					"option": "પ્રોટોન",
					"correct": true
                },
				{
					"option": "ન્યૂટ્રૉન",
					"correct": false
                },
				{
					"option": "ઇલેક્ટ્રૉન",
					"correct": false
                },
				{
					"option": "પ્રોટોન અને ન્યૂટ્રૉન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટોન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 6
			"q": "ઇલેક્ટ્રૉન કયો વીજભાર ધરાવે છે ?",
			"a": [
				{
					"option": "ધન",
					"correct": false
                },
				{
					"option": "ઋણ",
					"correct": true
                },
				{
					"option": "વીજભારરહિત",
					"correct": false
                },
				{
					"option": "શૂન્ય",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઋણ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 7
			"q": "પરમાણુમાં કયા કણ વીજભાર ધરાવતા નથી ?",
			"a": [
				{
					"option": "ઈલેક્ટ્રોન",
					"correct": false
                },
				{
					"option": "ન્યૂટ્રોન",
					"correct": true
                },
				{
					"option": "પ્રોટોન",
					"correct": false
                },
				{
					"option": "ઈલેક્ટ્રોન, પ્રોટોન, ઈલેક્ટ્રોન - ત્રણેય",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ન્યૂટ્રોન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 8
			"q": "કયા કણો પરમાણુકેન્દ્રની ફરતે પરિભ્રમણ કરતા હોય છે ?",
			"a": [
				{
					"option": "પ્રોટોન",
					"correct": false
                },
				{
					"option": "ન્યૂટ્રૉન",
					"correct": false
                },
				{
					"option": "ઇલેક્ટ્રૉન",
					"correct": true
                },
				{
					"option": "આપેલામાંથી એક પણ નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇલેક્ટ્રૉન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		
		{ // Question 9
			"q": "પરમાણુકેન્દ્રની ફરતે ઇલેક્ટ્રૉન વર્તુળાકાર ચોક્કસ માર્ગમાં પરિભ્રમણ કરતા હોય છે તે માર્ગને શું કહે છે ?",
			"a": [
				{
					"option": "કક્ષા",
					"correct": true
                },
				{
					"option": "ઇલેક્ટ્રૉનરચના",
					"correct": false
                },
				{
					"option": "નાભિ",
					"correct": false
                },
				{
					"option": "સંયોજકતા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કક્ષા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 10
			"q": "પરમાણુમાં રહેલા કયા કણોની સંખ્યા હંમેશાં સરખી હોય છે ?",
			"a": [
				{
					"option": "ન્યૂટ્રૉન અને ઇલેક્ટ્રૉન",
					"correct": false
                },
				{
					"option": "ઇલેક્ટ્રૉન અને પ્રોટોન",
					"correct": true
                },
				{
					"option": "પ્રોટોન અને ન્યૂટ્રૉન",
					"correct": false
                },
				{
					"option": "ન્યૂટ્રૉન, ઇલેક્ટ્રૉન અને પ્રોટોન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇલેક્ટ્રૉન અને પ્રોટોન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 11
			"q": "સૂર્યમંડળના કયા ગ્રહને  વામન ગ્રહ તરીકે ઓળખવામાં આવે છે ?",
			"a": [
				{
					"option": "પ્લુટો",
					"correct": true
                },
				{
					"option": "નેપ્ચ્યૂન",
					"correct": false
                },
				{
					"option": "મંગળ",
					"correct": false
                },
				{
					"option": "ચંદ્ર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્લુટો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "ઈલેક્ટ્રૉન પરામાણુકેન્દ્રની આસપાસ શા કારણે ગોળગોળ ફરે છે ?",
			"a": [				
				{
					"option": "ન્યુટ્રોનના આકર્ષણ",
					"correct": false
                },
				{
					"option": "પ્રોટોનના આકર્ષણ",
					"correct": true
                },
				{
					"option": "તત્ત્વના આકર્ષણ ",
					"correct": false
                },
				{
					"option": "ચૂંબકના આકર્ષણ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટોનના આકર્ષણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પરમાણુકેન્દ્રમાં કયા કણો આવેલા હોતા નથી ?",
			"a": [
				{
					"option": "પ્રોટોન",
					"correct": false
                },
				{
					"option": "ન્યૂટ્રૉન",
					"correct": false
                },
				{
					"option": "ઇલેક્ટ્રૉન",
					"correct": true
                },
				{
					"option": "આપેલામાંથી એક પણ નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇલેક્ટ્રૉન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 14
			"q": "ઇલેકટ્રૉનની સંખ્યા કે પ્રોટોનની સંખ્યાને તે તત્ત્વનો પરમાણુક્રમાંક કહે છે. હા કે ના ?",
			"a": [
				{
					"option": "ના",
					"correct": false
                },
				{
					"option": "હા",
					"correct": true
                },
				{
					"option": "હા કે  ના - એક પણ નહીં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "પરમાણુની પ્રથમ કક્ષામાં વધુમાં વધુ કેટલા ઇલેક્ટ્રૉન સમાઈ શકે છે  છે ?",
			"a": [
				{
					"option": "2",
					"correct": true
                },
				{
					"option": "4",
					"correct": false
                },
				{
					"option": "6",
					"correct": false
                },
				{
					"option": "8",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 16
			"q": "પરમાણુની બીજી કક્ષામાં વધુમાં વધુ કેટલા ઇલેક્ટ્રૉન સમાઈ શકે છે ?",
			"a": [
				{
					"option": "2",
					"correct": false
                },
				{
					"option": "18",
					"correct": false
                },
				{
					"option": "6",
					"correct": false
                },
				{
					"option": "8",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 17
			"q": "કોઈ પણ કક્ષામાં વધુમાં વધુ કેટલા ઇલેક્ટ્રૉન સમાઈ શકે તે શોધવાનું સૂત્ર કયું છે ?",
			"a": [
				{
					"option": "2n",
					"correct": false
                },
				{
					"option": "4n",
					"correct": false
                },
				{
					"option": "n<sup>2</sup>",
					"correct": false
                },
				{
					"option": "2n<sup>2</sup>",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2n<sup>2</sup></p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "સોડિયમનો પરમાણુક્રમાંક કેટલો છે ?",
			"a": [
				{
					"option": "2",
					"correct": false
                },
				{
					"option": "5",
					"correct": false
                },
				{
					"option": "7",
					"correct": false
                },
				{
					"option": "11",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 11</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 19
			"q": "સોડિયમની પરમાણુની ઇલેક્ટ્રૉનરચના શી છે ?",
			"a": [
				{
					"option": "(2, 8)",
					"correct": false
                },
				{
					"option": "(2, 8, 1)",
					"correct": true
                },
				{
					"option": "(2, 8, 2)",
					"correct": false
                },
				{
					"option": "(2, 8, 7)",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: (2, 8, 1)</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "ક્લોરિનના પરમાણુની ઇલેક્ટ્રૉનરચના શી છે ?",
			"a": [
				{
					"option": "(2, 8, 1)",
					"correct": false
                },
				{
					"option": "(2, 8, 5)",
					"correct": false
                },
				{
					"option": "(2, 8, 7)",
					"correct": true
                },
				{
					"option": "(2, 8, 8)",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: (2, 8, 7)</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 21
			"q": "ક્લોરિનના પરમાણુની બાહ્યતમ કક્ષામાં કેટલા ઇલેક્ટ્રૉન છે ?",
			"a": [
				{
					"option": "1",
					"correct": false
                },
				{
					"option": "3",
					"correct": false
                },
				{
					"option": "5",
					"correct": false
                },
				{
					"option": "7",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 7</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 22
			"q": "મૅગ્નેશિયમની સંયોજકતા કેટલી છે ?",
			"a": [
				{
					"option": "+1",
					"correct": false
                },
				{
					"option": "+2",
					"correct": true
                },
				{
					"option": "+3",
					"correct": false
                },
				{
					"option": "+4",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: +2</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 23
			"q": "ઑક્સિજનની સંયોજકતા કેટલી છે ?",
			"a": [
				{
					"option": "-1",
					"correct": false
                },
				{
					"option": "-2",
					"correct": true
                },
				{
					"option": "+3",
					"correct": false
                },
				{
					"option": "+2",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: -2</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 24
			"q": "ઑક્સિજન પરમાણુની ઇલેક્ટ્રૉનરચના શી છે ?",
			"a": [
				{
					"option": "(2, 6)",
					"correct": true
                },
				{
					"option": "(2, 8, 6)",
					"correct": false
                },
				{
					"option": "(2, 8, 7)",
					"correct": false
                },
				{
					"option": "(2, 8)",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: (2, 6)</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 25
			"q": "કયા તત્ત્વનો પરમાણુ ધન આયન બનાવે છે ?",
			"a": [
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "ક્લોરિન",
					"correct": false
                },
				{
					"option": "સોડિયમ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોડિયમ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 26
			"q": "કયા તત્ત્વનો પરમાણુ ઋણ આયન બનાવે છે ?",
			"a": [
				{
					"option": "ઍલ્યુમિનિયમ",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": true
                },
				{
					"option": "મૅગ્નેશિયમ",
					"correct": false
                },
				{
					"option": "સોડિયમ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 27
			"q": "કયા તત્ત્વનો પરમાણુ ઇલેક્ટ્રૉન ગુમાવવાની વૃત્તિ ધરાવે છે ?",
			"a": [
				{
					"option": "મૅગ્નેશિયમ",
					"correct": true
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "ક્લોરિન",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૅગ્નેશિયમ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 28
			"q": "ઍલ્યુમિનિયમનો પરમાણુ કયું વલણ ધરાવે છે ?",
			"a": [
				{
					"option": "બે ઇલેક્ટ્રૉન મેળવવાનું",
					"correct": false
                },
				{
					"option": "બે ઇલેક્ટ્રૉન ગુમાવવાનું",
					"correct": false
                },
				{
					"option": "ત્રણ ઇલેક્ટ્રૉન મેળવવાનું",
					"correct": false
                },
				{
					"option": "ત્રણ ઇલેક્ટ્રૉન ગુમાવવાનું",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્રણ ઇલેક્ટ્રૉન ગુમાવવાનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
		{ // Question 29
			"q": "ઍલ્યુમિનિયમનો પરમાણુક્રમાંક 13 છે, તો તેના પરમાણુની ઇલેક્ટ્રોન રચના શી છે ?",
			"a": [
				{
					"option": "(2, 6, 5)",
					"correct": false
                },
				{
					"option": "(2, 8, 3)",
					"correct": true
                },
				{
					"option": "(8, 5)",
					"correct": false
                },
				{
					"option": "(2, 3, 8)",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: (2, 8, 3)</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 30
			"q": "નાઇટ્રોજનના પરમાણુની બાહ્યતમ કક્ષામાં કેટલા ઇલેક્ટ્રૉન છે ?",
			"a": [
				{
					"option": "3",
					"correct": false
                },
				{
					"option": "5",
					"correct": true
                },
				{
					"option": "7",
					"correct": false
                },
				{
					"option": "8",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 31
			"q": "નાઇટ્રોજનના બે પરમાણુ કેટલા ઇલેક્ટ્રૉનની ભાગીદારી કરી નાઇટ્રોજનના અણુ N<sub>2</sub> બનાવે છે ?",
			"a": [
				{
					"option": "એક-એક",
					"correct": false
                },
				{
					"option": "બે-બે",
					"correct": false
                },
				{
					"option": "ત્રણ-ત્રણ",
					"correct": true
                },
				{
					"option": "ચાર-ચાર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્રણ-ત્રણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
				
		{ // Question 32
			"q": "પરમાણુની ત્રીજી કક્ષામાં વધુમાં વધુ કેટલા ઇલેક્ટ્રૉન સમાઈ શકે ? ( ત્રીજી કક્ષા બાહ્યતમ કક્ષા ન હોય ત્યારે)",
			"a": [
				{
					"option": "2",
					"correct": false
                },
				{
					"option": "8",
					"correct": false
                },
				{
					"option": "18",
					"correct": true
                },
				{
					"option": "32",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 18</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 33
			"q": "ઑક્સિજનનો પરમાણુક્રમાંક 8 છે, તો તેના પરમાણુમાં ઇલેક્ટ્રૉનની કેટલી કક્ષાઓ છે ?",
			"a": [
				{
					"option": "એક",
					"correct": false
                },
				{
					"option": "બે",
					"correct": true
                },
				{
					"option": "ત્રણ",
					"correct": false
                },
				{
					"option": "ચાર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 34
			"q": "નાઇટ્રોજનના પરમાણુમાં કુલ કેટલા ઇલેક્ટ્રૉન છે ?",
			"a": [
				{
					"option": "3",
					"correct": false
                },
				{
					"option": "5",
					"correct": false
                },
				{
					"option": "7",
					"correct": true
                },
				{
					"option": "8",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 7</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here
    ]
};