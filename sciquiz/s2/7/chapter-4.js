// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-4 માપન",
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
			"q": "પદાર્થના દળને કઈ સંજ્ઞા વડે દર્શાવાય છે ?",
			"a": [
				{
					"option": "m",
					"correct": true
                },
				{
					"option": "V",
					"correct": false
                },
				{
					"option": "W",
					"correct": false
                },
				{
					"option": "N",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: m</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "દળનો નાનો એકમ કયો છે ?",
			"a": [
				{
					"option": "ગ્રામ",
					"correct": true
                },
				{
					"option": "ટન",
					"correct": false
                },
				{
					"option": "કિલોગ્રામ",
					"correct": false
                },
				{
					"option": "ક્વિન્ટલ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રામ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "દળનો પ્રમાણભૂત એકમ કયો છે ?",
			"a": [
				{
					"option": "લિટર",
					"correct": false
                },
				{
					"option": "કિલોગ્રામ",
					"correct": true
                },
				{
					"option": "ન્યૂટન",
					"correct": false
                },
				{
					"option": "ઘન મીટર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિલોગ્રામ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "પદાર્થ પર લાગતા ગુરુત્વાકર્ષણ બળને શું કહે છે ?",
			"a": [
				{
					"option": "દળ",
					"correct": false
                },
				{
					"option": "વજન",
					"correct": true
                },
				{
					"option": "કદ",
					"correct": false
                },
				{
					"option": "ઘનતા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વજન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "ન્યૂટન કઈ ભૌતિક રાશિનો એકમ છે ?",
			"a": [
				{
					"option": "દળ",
					"correct": false
                },
				{
					"option": "કદ",
					"correct": false
                },
				{
					"option": "વજન",
					"correct": true
                },
				{
					"option": "ઘનતા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વજન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "વજનને કઈ સંજ્ઞા વડે દર્શાવાય છે ?",
			"a": [
				{
					"option": "m",
					"correct": false
                },
				{
					"option": "V",
					"correct": false
                },
				{
					"option": "W",
					"correct": true
                },
				{
					"option": "Kg",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: W</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "g શાને માટેની સંજ્ઞા છે ?",
			"a": [
				{
					"option": "દળ",
					"correct": false
                },
				{
					"option": "વજન",
					"correct": false
                },
				{
					"option": "કદ",
					"correct": false
                },
				{
					"option": "ગુરુત્વપ્રવેગ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુરુત્વપ્રવેગ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "વિજયનું દળ 30 કિલોગ્રામ છે, તો તેનું વજન પૃથ્વી પર કેટલું હોય ?",
			"a": [
				{
					"option": "30 N",
					"correct": false
                },
				{
					"option": "98 N",
					"correct": false
                },
				{
					"option": "294 N",
					"correct": true
                },
				{
					"option": "600 N",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 294 N</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "પૃથ્વી ઉપર 60 N વજન ધરાવતા પદાર્થનું ચંદ્ર પર વજન કેટલું થાય >",
			"a": [
				{
					"option": "60 N",
					"correct": false
                },
				{
					"option": "360 N",
					"correct": false
                },
				{
					"option": "588 N",
					"correct": false
                },
				{
					"option": "10 N",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 10 N</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કદનો પ્રમાણભૂત એકમ કયો છે ?",
			"a": [
				{
					"option": "કિલોગ્રામ",
					"correct": false
                },
				{
					"option": "ઘન મીટર",
					"correct": true
                },
				{
					"option": "મીટર",
					"correct": false
                },
				{
					"option": "ન્યૂટન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘન મીટર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "પ્રવાહીનું કદ માપવા માટે કયો એકમ વપરાય છે ?",
			"a": [
				{
					"option": "મીટર",
					"correct": false
                },
				{
					"option": "લિટર",
					"correct": true
                },
				{
					"option": "કિલોગ્રામ",
					"correct": false
                },
				{
					"option": "ન્યૂટન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લિટર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "પદાર્થના ભારેપણા કે હલકાપણાની સરખામણી કરવા માટે કઈ ભૌતિક રાશિ વપરાય છે ?",
			"a": [
				{
					"option": "ઘનતા",
					"correct": true
                },
				{
					"option": "કદ",
					"correct": false
                },
				{
					"option": "વજન",
					"correct": false
                },
				{
					"option": "દળ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘનતા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "કયા પદાર્થની ઘનતા પાણીની ઘનતા કરતાં ઓછી છે ?",
			"a": [
				{
					"option": "લોખંડ",
					"correct": false
                },
				{
					"option": "કાચ",
					"correct": false
                },
				{
					"option": "બરફ",
					"correct": true
                },
				{
					"option": "દરિયાનું પાણી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બરફ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "ઘનતાનો એકમ કયો છે ?",
			"a": [
				{
					"option": "ઘન મીટર",
					"correct": false
                },
				{
					"option": "કિલોગ્રામભાર",
					"correct": false
                },
				{
					"option": "ન્યૂટન",
					"correct": false
                },
				{
					"option": "કિલોગ્રામ/ઘનમીટર",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિલોગ્રામ/ઘનમીટર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "પદાર્થનું વજન માપવા માટે કયા સાધનનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "સ્પ્રિંગ કાંટો",
					"correct": true
                },
				{
					"option": "બ્યુરેટ",
					"correct": false
                },
				{
					"option": "ત્રાજવાં",
					"correct": false
                },
				{
					"option": "અંકિત નળાકાર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્પ્રિંગ કાંટો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "પ્રવાહીના કદનું માપન કરવા માટે કયું સાધન વપરાય છે ?",
			"a": [
				{
					"option": "સ્પ્રિંગ કાંટો",
					"correct": false
                },
				{
					"option": "બ્યુરેટ",
					"correct": false
                },
				{
					"option": "ત્રાજવાં",
					"correct": false
                },
				{
					"option": "અંકિત નળાકાર",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંકિત નળાકાર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "વજન માપવા માટે કયો એકમ વપરાય છે ?",
			"a": [
				{
					"option": "કિલોગ્રામ",
					"correct": false
                },
				{
					"option": "ગ્રામ",
					"correct": false
                },
				{
					"option": "ન્યૂટન",
					"correct": true
                },
				{
					"option": "મિલિલિટર",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ન્યૂટન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "1 કિલોગ્રામ બરાબર કેટલા ગ્રામ ?",
			"a": [
				{
					"option": "1000 ગ્રામ",
					"correct": true
                },
				{
					"option": "10000 ગ્રામ",
					"correct": false
                },
				{
					"option": "100 ગ્રામ",
					"correct": false
                },
				{
					"option": "10000 ગ્રામ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1000 ગ્રામ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "1 મિલિલિટર બરાબર કેટલા ઘન સેમી ?",
			"a": [
				{
					"option": "10 ઘન સેમી",
					"correct": false
                },
				{
					"option": "1 ઘન સેમી",
					"correct": true
                },
				{
					"option": "100 ઘન સેમી",
					"correct": false
                },
				{
					"option": "1000 ઘન સેમી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1 ઘન સેમી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "પદાર્થે રોકેલી જગ્યાને તે પદાર્થનું શું કહે છે ?",
			"a": [
				{
					"option": "કદ",
					"correct": true
                },
				{
					"option": "દળ",
					"correct": false
                },
				{
					"option": "વજન",
					"correct": false
                },
				{
					"option": "બળ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};