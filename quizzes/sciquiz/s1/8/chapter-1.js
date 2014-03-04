// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 1 હવાનું દબાણ",
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
			"q": "પૃથ્વીની આસપાસ રહેલા હવાના આવરણને શું કહે છે ?",
			"a": [
				{
					"option": "હવામાન",
					"correct": false
				},
				{
					"option": "આબોહવા",
					"correct": false
				},
				{
					"option": "પર્યાવરણ",
					"correct": false
				},
				{
					"option": "વાતાવરણ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાતાવરણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "પૃથ્વીની સપાટીથી આશરે કેટલા કિલોમીટર ઊંચાઈ સુધી વાતવરણ છે ?",
			"a": [
				{
					"option": "80",
					"correct": false
				},
				{
					"option": "100",
					"correct": false
				},
				{
					"option": "180",
					"correct": false
				},
				{
					"option": "800",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 800</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "આપણા શરીરમાં એક ચો સેમી ભાગ પર કેટલા ન્યૂટન જેટલું હવાનું વજન લાગે છે ?",
			"a": [
				{
					"option": "80",
					"correct": false
				},
				{
					"option": "40",
					"correct": false
				},
				{
					"option": "8.9",
					"correct": false
				},
				{
					"option": "9.8",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 9.8</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "હવાનું દબાણ માપવા કયું સાધન વપરાય છે ?",
			"a": [
				{
					"option": "થરમૉમિટર",
					"correct": false
				},
				{
					"option": "થરમૉગ્રાફ",
					"correct": false
				},
				{
					"option": "બેરોમિટર",
					"correct": true
				},
				{
					"option": "વૉલ્ટામિટર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બેરોમિટર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "પૃથ્વીની સપાટીથી જેમ ઊંચે જઈએ તેમ હવાના દબાણમાં શો ફેરફાર થાય છે ?",
			"a": [
				{
					"option": "દબાણ વધે છે.",
					"correct": false
				},
				{
					"option": "દબાણ ઘટે છે.",
					"correct": true
				},
				{
					"option": "દબાણ અચળ રહે છે.",
					"correct": false
				},
				{
					"option": "ચોક્કસ કહી ન શકાય.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દબાણ ઘટે છે. </p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "હવાનું દબાણ માપવાનો એકમ નીચેનામાંથી કયો છે ?",
			"a": [
				{
					"option": "બાર",
					"correct": true
				},
				{
					"option": "લિટર",
					"correct": false
				},
				{
					"option": "સેમી",
					"correct": false
				},
				{
					"option": "મિલિલિટર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "પૃથ્વીની સપાટી પર થતા હવાના દબાણને શું કહે છે ?",
			"a": [
				{
					"option": "વાતાવરણનું દબાણ",
					"correct": true
				},
				{
					"option": "પવનનું દબાણ",
					"correct": false
				},
				{
					"option": "પાણીનું દબાણ",
					"correct": false
				},
				{
					"option": "વાયુનું દબાણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાતાવરણનું દબાણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "સ્ટ્રૉ વડે નારિયેળનું પાણી પીવા માટે પહેલાં સ્ટ્રૉમાં રહેલી હવા ખેંચી લેવાથી શું થાય છે ?",
			"a": [
				{
					"option": "સ્ટ્રૉમાં હવાનું દબાણ ઘટે છે.",
					"correct": true
				},
				{
					"option": "સ્ટ્રૉમાં હવાનું દબાણ વધે છે.",
					"correct": false
				},
				{
					"option": "સ્ટ્રૉમાં હવાનું દબાણ અચળ રહે છે.",
					"correct": false
				},
				{
					"option": "ચોક્કસ કહી શકાય નહીં.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્ટ્રૉમાં હવાનું દબાણ ઘટે છે.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        } // no comma here
    ]
};