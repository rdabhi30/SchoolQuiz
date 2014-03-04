// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-7 તત્ત્વ, સંયોજન અને મિશ્રણ",
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
			"q": "પદાર્થનો પાયાનો એકમ શો છે ?",
			"a": [
				{
					"option": "તત્ત્વ",
					"correct": true
                },
				{
					"option": "સંયોજન",
					"correct": false
                },
				{
					"option": "મિશ્રણ",
					"correct": false
                },
				{
					"option": "સંજ્ઞા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તત્ત્વ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "હાઇડ્રોજનની સંજ્ઞા કઈ છે ?",
			"a": [
				{
					"option": "He",
					"correct": false
                },
				{
					"option": "H",
					"correct": true
                },
				{
					"option": "N",
					"correct": false
                },
				{
					"option": "H<sub>2</sub>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: H</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "મૅગ્નેશિયમની સંજ્ઞા કઈ છે ?",
			"a": [
				{
					"option": "Mg",
					"correct": true
                },
				{
					"option": "Mn",
					"correct": false
                },
				{
					"option": "Mo",
					"correct": false
                },
				{
					"option": "Ma",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: Mg</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "કયા તત્ત્વની સંજ્ઞા Na છે ?",
			"a": [
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "નિયોન",
					"correct": false
                },
				{
					"option": "સોડિયમ",
					"correct": true
                },
				{
					"option": "કૅલ્શિયમ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોડિયમ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "તત્ત્વનો બંધારણીય એકમ કયો છે ?",
			"a": [
				{
					"option": "અણુ",
					"correct": false
                },
				{
					"option": "સંયોજન",
					"correct": false
                },
				{
					"option": "મિશ્રણ",
					"correct": false
                },
				{
					"option": "પરમાણુ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરમાણુ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નીચેનામાંથી કયું સંયોજન છે ?",
			"a": [
				{
					"option": "પાણી",
					"correct": true
                },
				{
					"option": "તાંબું",
					"correct": false
                },
				{
					"option": "પિત્તળ",
					"correct": false
                },
				{
					"option": "હવા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "નીચેનામાંથી મિશ્રણ કયું છે ?",
			"a": [
				{
					"option": "ખાંડ",
					"correct": false
                },
				{
					"option": "પાણી",
					"correct": false
                },
				{
					"option": "મીઠાનું દ્રાવણ",
					"correct": true
                },
				{
					"option": "ગ્લુકોઝ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીઠાનું દ્રાવણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "પાણીનું આણ્વીય સૂત્ર કયું છે ?",
			"a": [
				{
					"option": "MgO",
					"correct": false
                },
				{
					"option": "H<sub>2</sub>O",
					"correct": true
                },
				{
					"option": "NaCl",
					"correct": false
                },
				{
					"option": "HO<sub>2</sub>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: H<sub>2</sub>O</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "સંયોજનનો બંધારણીય એકમ કયો છે ?",
			"a": [
				{
					"option": "પરમાણુ",
					"correct": false
                },
				{
					"option": "તત્ત્વ",
					"correct": false
                },
				{
					"option": "અણુ",
					"correct": true
                },
				{
					"option": "મિશ્રણ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અણુ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "પાણી કયા બે તત્ત્વોનું બનેલું છે ?",
			"a": [
				{
					"option": "હાઇડ્રોજન અને નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "નાઇટ્રોજન અને ઑક્સિજન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન અને ઑક્સિજન",
					"correct": true
                },
				{
					"option": "કાર્બન અને ઑક્સિજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇડ્રોજન અને ઑક્સિજન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "પાણીનો એક અણુ કેટલા પરમાણુઓનો બનેલો છે ?",
			"a": [
				{
					"option": "બે",
					"correct": false
                },
				{
					"option": "ત્રણ",
					"correct": true
                },
				{
					"option": "ચાર",
					"correct": false
                },
				{
					"option": "પાંચ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્રણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "નીચેના પૈકી તત્ત્વનો અણુ કયો છે ?",
			"a": [
				{
					"option": "MgO",
					"correct": false
                },
				{
					"option": "H<sub>2</sub>O",
					"correct": false
                },
				{
					"option": "NaCl",
					"correct": false
                },
				{
					"option": "H<sub>2</sub>",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: H<sub>2</sub></p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "નીચેનામાંથી કયું તત્ત્વ છે ?",
			"a": [
				{
					"option": "ખાંડ",
					"correct": false
                },
				{
					"option": "મીઠું",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": true
                },
				{
					"option": "હવા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "જુદું પડતું હોય તેને અલગ તારવો.",
			"a": [
				{
					"option": "હવા",
					"correct": false
                },
				{
					"option": "પાણી",
					"correct": true
                },
				{
					"option": "જમીન",
					"correct": false
                },
				{
					"option": "દાળ-ચોખાનું મિશ્રણ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "નીચેના પૈકી કયું સંયોજન નથી ?",
			"a": [
				{
					"option": "ખાંડ",
					"correct": false
                },
				{
					"option": "મીઠું",
					"correct": false
                },
				{
					"option": "પાણી",
					"correct": false
                },
				{
					"option": "સોનું",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોનું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "બે કે તેથી વધુ તત્ત્વો કે પદાર્થો એકબીજા સાથે ગમે તે પ્રમાણમાં ભેગા થાય તેને શું કહે છે ?",
			"a": [
				{
					"option": "મિશ્રણ",
					"correct": true
                },
				{
					"option": "સંયોજન",
					"correct": false
                },
				{
					"option": "તત્ત્વ",
					"correct": false
                },
				{
					"option": "પરમાણુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મિશ્રણ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "જ્યારે એક કરતાં વધુ તત્ત્વો રાસાયણિક પ્રક્રિયા દ્વારા નિશ્ચિત પ્રમાણમાં સંયોજાઈ નવો પદાર્થ બનાવે છે ત્યારે તે પોતાના મૂળભૂત ગુણધર્મો ગુમાવી તદ્દન નવો જ ગુણધર્મ ધારણ કરે છે. આ નવા પદાર્થને શું કહે છે ?",
			"a": [
				{
					"option": "મિશ્રણ",
					"correct": false
                },
				{
					"option": "સંયોજન",
					"correct": true
                },
				{
					"option": "તત્ત્વ",
					"correct": false
                },
				{
					"option": "પરમાણુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંયોજન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "અત્યાર સુધીમાં શોધાયેલ તત્ત્વોની સંખ્યા કેટલી છે ?",
			"a": [
				{
					"option": "112",
					"correct": false
                },
				{
					"option": "114",
					"correct": false
                },
				{
					"option": "116",
					"correct": false
                },
				{
					"option": "118",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 118</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "હિલિયમની સંજ્ઞા કઈ છે ?",
			"a": [
				{
					"option": "H",
					"correct": false
                },
				{
					"option": "He",
					"correct": true
                },
				{
					"option": "Hi",
					"correct": false
                },
				{
					"option": "Hl",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: He</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "મીઠાનો એક અણુ કેટલા તત્ત્વોનો બનેલો છે ?",
			"a": [
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
                },
				{
					"option": "પાંચ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};