// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 4 બીજ",
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
			"q": "શીલા એક વાડકામાં પલાળીને રાખેલાં બીજમાંથી એક બીજ લઈ તેને હાથ વડે દબાવે છે, તો તેની બે ફાડ થઈ જાય છે. તે નીચેનામાંથી કયું બીજ હશે ?",
			"a": [
				{
					"option": "ઘઉં",
					"correct": false
				},
				{
					"option": "મકાઈ",
					"correct": false
				},
				{
					"option": "મગફળી",
					"correct": true
				},
				{
					"option": "જુવાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મગફળી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "મહેશ એક વાડકામાં પલાળીને રાખેલાં બીજમાંથી એક બીજ લઈ તેને હાથ વડે દબાવે છે, છતાં તેની બે ફાડ થતી નથી. તે નીચેનામાંથી કયું બીજ હશે ?",
			"a": [
				{
					"option": "મકાઈ",
					"correct": true
				},
				{
					"option": "મગ",
					"correct": false
				},
				{
					"option": "મગફળી",
					"correct": false
				},
				{
					"option": "વટાણા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકાઈ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "બીજને ઊગવા માટે તેમજ સારી રીતે વિકસાવવા માટે શું જરૂરી છે ?",
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
					"option": "ગરમી",
					"correct": false
				},
				{
					"option": "હવા, પાણી, ગરમી - ત્રણેય",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હવા, પાણી, ગરમી - ત્રણેય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "શાનાં બીજમાં ખાંચ સ્પષ્ટ દેખાય છે ?",
			"a": [
				{
					"option": "જુવાર",
					"correct": false
				},
				{
					"option": "વટાણા",
					"correct": true
				},
				{
					"option": "ડાંગર",
					"correct": false
				},
				{
					"option": "બાજરી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વટાણા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "નીચેના પૈકી કયું એકદળી બીજ છે ?",
			"a": [
				{
					"option": "મગ",
					"correct": false
				},
				{
					"option": "ડાંગર",
					"correct": true
				},
				{
					"option": "વટાણા",
					"correct": false
				},
				{
					"option": "તુવેર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડાંગર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નીચેના પૈકી કયું એકદળી બીજ નથી ?",
			"a": [
				{
					"option": "ચણા",
					"correct": true
				},
				{
					"option": "મકાઈ",
					"correct": false
				},
				{
					"option": "ડાંગર",
					"correct": false
				},
				{
					"option": "ઘઉં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચણા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "નીચેના પૈકી કયું દ્વિદળી બીજ છે ?",
			"a": [
				{
					"option": "મગ",
					"correct": true
				},
				{
					"option": "ઘઉં",
					"correct": false
				},
				{
					"option": "જુવાર",
					"correct": false
				},
				{
					"option": "મકાઈ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મગ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "નીચેના પૈકી કયું દ્વિદળી બીજ નથી ?",
			"a": [
				{
					"option": "જુવાર",
					"correct": true
				},
				{
					"option": "વાલ",
					"correct": false
				},
				{
					"option": "અડદ",
					"correct": false
				},
				{
					"option": "ચણા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જુવાર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "નીચેના પૈકી કયું કઠોળ છે ?",
			"a": [
				{
					"option": "બાજરી",
					"correct": false
				},
				{
					"option": "વાલ",
					"correct": true
				},
				{
					"option": "મકાઈ",
					"correct": false
				},
				{
					"option": "જવ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "નીચેના પૈકી કયું અનાજનું બીજ છે ?",
			"a": [
				{
					"option": "મકાઈ",
					"correct": true
				},
				{
					"option": "મગ",
					"correct": false
				},
				{
					"option": "મઠ",
					"correct": false
				},
				{
					"option": "વાલ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકાઈ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "બાજરીનાં કેવાં બીજ સારી જાતનાં હોય છે ?",
			"a": [
				{
					"option": "પાણીમાં તરે તે",
					"correct": false
				},
				{
					"option": "પાણીમાં ડૂબે તે",
					"correct": true
				},
				{
					"option": "ખાંચ હોય તે",
					"correct": false
				},
				{
					"option": "ભેજ લાગ્યો હોય તે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણીમાં ડૂબે તે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "બીજનો ફેલાવો કરવા માટે નીચેના પૈકી કયું પરિબળ જરૂરી નથી ?",
			"a": [
				{
					"option": "પવન",
					"correct": false
				},
				{
					"option": "પાણી",
					"correct": false
				},
				{
					"option": "ગરમી",
					"correct": true
				},
				{
					"option": "પક્ષીઓ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગરમી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "શાનાં બીજનો ફેલાવો પવન દ્વારા થાય છે ?",
			"a": [
				{
					"option": "તકમરિયાં",
					"correct": false
				},
				{
					"option": "રજકો",
					"correct": false
				},
				{
					"option": "વટાણા",
					"correct": false
				},
				{
					"option": "આકડો",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આકડો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "શાનાં બીજનો ફેલાવો પવન દ્વારા થતો નથી ?",
			"a": [
				{
					"option": "આકડો",
					"correct": false
				},
				{
					"option": "ગોખરું",
					"correct": true
				},
				{
					"option": "શીમળો",
					"correct": false
				},
				{
					"option": "કણજી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોખરું</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "શાનાં બીજનો ફેલાવો પાણી દ્વારા થાય છે ?",
			"a": [
				{
					"option": "શીમળા",
					"correct": false
				},
				{
					"option": "કણજી",
					"correct": false
				},
				{
					"option": "રજકો",
					"correct": true
				},
				{
					"option": "આકડો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રજકો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "શાનાં બીજનો ફેલાવો પાણી દ્વારા થતો નથી ?",
			"a": [
				{
					"option": "કમળ",
					"correct": false
				},
				{
					"option": "કણજી",
					"correct": true
				},
				{
					"option": "રજકો",
					"correct": false
				},
				{
					"option": "તકમરિયાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કણજી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "શાનાં બીજનો ફેલાવો પ્રાણીઓ દ્વારા થાય છે ?",
			"a": [
				{
					"option": "આકડો",
					"correct": false
				},
				{
					"option": "કણજી",
					"correct": false
				},
				{
					"option": "નાળિયેળી",
					"correct": false
				},
				{
					"option": "ગાડરું",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાડરું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "શાનાં બીજનો ફેલાવો ગુરુત્વાકર્ષણ દ્વારા થાય છે ?",
			"a": [
				{
					"option": "ગોખરું",
					"correct": false
				},
				{
					"option": "ગાડરું",
					"correct": false
				},
				{
					"option": "આંકડો",
					"correct": false
				},
				{
					"option": "બારમાસી",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બારમાસી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "જે બીજની બે ફાડ થાય તેવા બીજને શું કહેવાય ?",
			"a": [
				{
					"option": "એકદળી",
					"correct": false
				},
				{
					"option": "દ્વિદળી",
					"correct": true
				},
				{
					"option": "ત્રિદળી",
					"correct": false
				},
				{
					"option": "એકેયે નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દ્વિદળી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "જે બીજની એક ફાડ થાય તેવા બીજને શું કહેવાય ?",
			"a": [
				{
					"option": "એકદળી",
					"correct": true
				},
				{
					"option": "દ્વિદળી",
					"correct": false
				},
				{
					"option": "ત્રિદળી",
					"correct": false
				},
				{
					"option": "એકેયે નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એકદળી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};