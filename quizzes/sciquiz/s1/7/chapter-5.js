// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 5 જમીનની ફળદ્રુપતા",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
		"standard": "7",
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
			"q": "જમીન ખેડવા કયું સાધન વપરાય છે ?",
			"a": [
				{
					"option": "કોદાળી",
					"correct": false
				},
				{
					"option": "હળ",
					"correct": true
				},
				{
					"option": "ખૂરપી",
					"correct": false
				},
				{
					"option": "દાતરડું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હળ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "એક જ ખેતરમાં એક જ પાક વારંવાર લેવાથી શું થાય ?",
			"a": [
				{
					"option": "પાક-ઉત્પાદન વધે છે.",
					"correct": false
				},
				{
					"option": "પાક-ઉત્પાદન ઘટે છે.",
					"correct": true
				},
				{
					"option": "પાક-ઉત્પાદન જળવાઈ રહે છે.",
					"correct": false
				},
				{
					"option": "જમીનની ફળદ્રુપતા જળવાય છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાક-ઉત્પાદન ઘટે છે.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "જમીનનું ધોવાણ કરતાં કુદરતી પરિબળમાં કોનો સમાવેશ થાય છે ? ",
			"a": [
				{
					"option": "પ્રાણી",
					"correct": false
				},
				{
					"option": "પક્ષી",
					"correct": false
				},
				{
					"option": "વરસાદ",
					"correct": true
				},
				{
					"option": "વાહન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વરસાદ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "ધાન્ય પાક લીધા પછી કઠોળનો પાક લેવાથી જમીનમાં પોષકતત્ત્વોનું પ્રમાણ કેવું રહે છે ?",
			"a": [
				{
					"option": "વધે છે.",
					"correct": true
				},
				{
					"option": "ઘટે છે.",
					"correct": false
				},
				{
					"option": "સંપૂર્ણ નાશ પામે છે.",
					"correct": false
				},
				{
					"option": "વધે કે ઘટે છે.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વધે છે.</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "જમીનમાં સેન્દ્રિય પદાર્થો ઉમેરવા...",
			"a": [
				{
					"option": "દવાઓ છંટકાવ કરવો.",
					"correct": false
				},
				{
					"option": "રાસાયણિક ખાતર આપવું.",
					"correct": false
				},
				{
					"option": "છાણિયું ખાતર નાખવું.",
					"correct": true
				},
				{
					"option": "પાણી આપવું.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: છાણિયું ખાતર નાખવું.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નીચેના પૈકી કયું કૃત્રિમ ખાતર છે ?",
			"a": [
				{
					"option": "છાણિયું ખાતર",
					"correct": false
				},
				{
					"option": "ખોળનું ખાતર",
					"correct": false
				},
				{
					"option": "યૂરિયા",
					"correct": true
				},
				{
					"option": "લીલો પડવાસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યૂરિયા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "યૂરિયા ખાતરમાંથી વનસ્પતિને કયું પોષકતત્ત્વ મળે છે ?",
			"a": [
				{
					"option": "ફૉસ્ફરસ",
					"correct": false
				},
				{
					"option": "કૅલ્શિયમ",
					"correct": false
				},
				{
					"option": "પોટૅશિયમ",
					"correct": false
				},
				{
					"option": "નાઈટ્રોજન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાઈટ્રોજન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "કઈ પિયત પદ્ધતિથી પાણીનો 40 થી 60 ટકા બચાવ થાય છે ?",
			"a": [
				{
					"option": "ટપક-સિંચાઈ પદ્ધતિ",
					"correct": true
				},
				{
					"option": "ફુવારા-સિંચાઈ પદ્ધતિ",
					"correct": false
				},
				{
					"option": "ધોરિયા-પિયત પદ્ધતિ",
					"correct": false
				},
				{
					"option": "નીકપાળા-પિયત પદ્ધતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટપક-સિંચાઈ પદ્ધતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "પાણીની અછત હોય તેવા શુષ્ક પ્રદેશોમાં કઈ પિયત પદ્ધતિનો ઉપયોગ થવો જોઈએ ?",
			"a": [
				{
					"option": "ટપક-સિંચાઈ પદ્ધતિ",
					"correct": true
				},
				{
					"option": "ફુવારા-સિંચાઈ પદ્ધતિ",
					"correct": false
				},
				{
					"option": "ધોરિયા-પિયત પદ્ધતિ",
					"correct": false
				},
				{
					"option": "નીકપાળા-પિયત પદ્ધતિ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટપક-સિંચાઈ પદ્ધતિ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કઈ જમીનનું ધોવાણ સૌથી વધુ થાય છે ?",
			"a": [
				{
					"option": "પગથિયાંવાળી",
					"correct": false
				},
				{
					"option": "આડા ચાસવાળી",
					"correct": false
				},
				{
					"option": "એક તરફ ઢાળવાળી",
					"correct": true
				},
				{
					"option": "ઘાસ આચ્છાદિત",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એક તરફ ઢાળવાળી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "DAPનું પૂરૂં નામ શું છે ?",
			"a": [
				{
					"option": "ડાયઆયોડાઈડ ફૉસ્ફેટ",
					"correct": false
				},
				{
					"option": "ડાયએમોનિયા ફૉસ્ફેટ",
					"correct": true
				},
				{
					"option": "ડાયએનિમિયા ફૉસ્ફેટ",
					"correct": false
				},
				{
					"option": "ડાયએમોનિયા પોટાશ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડાયએમોનિયા ફૉસ્ફેટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "જમીનની ચકાસણી દ્વારા ક્યો આંક જાણી શકાય છે ?",
			"a": [
				{
					"option": "pH",
					"correct": true
				},
				{
					"option": "dH",
					"correct": false
				},
				{
					"option": "qH",
					"correct": false
				},
				{
					"option": "pQ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: pH</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "જમીનનો પી.એચ. આંક કેટલાની આજુબાજુ હોય તે જમીન દરેક પાક માટે અનુકૂળ ગણાય ? ",
			"a": [
				{
					"option": "07",
					"correct": true
				},
				{
					"option": "5.5",
					"correct": false
				},
				{
					"option": "8.5",
					"correct": false
				},
				{
					"option": "4.5",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 07</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "એક જ જાતનો પાક દર વર્ષે ઉગાડવાને બદલે કઠોળ અને અન્ય પાક વારાફરતી ઉગાડવામાં આવે તેને શું કહેવામાં આવે છે ?",
			"a": [
				{
					"option": "પાક કાપણી",
					"correct": false
				},
				{
					"option": "પાક એકાંતર",
					"correct": false
				},
				{
					"option": "મિશ્ર (આંતર) પાક પદ્ધતિ",
					"correct": false
				},
				{
					"option": "પાકની ફેરબદલી",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાકની ફેરબદલી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "જે પદાર્થો જમીનમાં ઉમેરવાથી છોડને જરૂરી એવા એક અથવા વધુ પોષકતત્ત્વો મળે છે, તેને શું કહે છે ?",
			"a": [
				{
					"option": "ખોરાક",
					"correct": false
				},
				{
					"option": "હવા",
					"correct": false
				},
				{
					"option": "નીંદણ",
					"correct": false
				},
				{
					"option": "ખાતર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખાતર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "જમીનનું ધોવાણ કરતાં કુદરતી પરિબળમાં કોનો સમાવેશ થતો નથી ?",
			"a": [
				{
					"option": "પ્રાણી",
					"correct": true
				},
				{
					"option": "પવન",
					"correct": false
				},
				{
					"option": "વરસાદ",
					"correct": false
				},
				{
					"option": "વહેતું પાણી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રાણી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "જમીનમાં વાવેલા મુખ્ય પાક સાથે ઊગી નીકળતી બિનજરૂરી વનસ્પતિને શું કહે છે ?",
			"a": [
				{
					"option": "વાવણી",
					"correct": false
				},
				{
					"option": "પાક",
					"correct": false
				},
				{
					"option": "નીંદણ",
					"correct": true
				},
				{
					"option": "ખાતર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નીંદણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "બીજ વાવતાં પહેલાં જમીનને હળ વડે ઉપર-નીચે કરી પોચી અને છિદ્રાળુ બનાવવાની ક્રિયાને શું કહે છે ?",
			"a": [
				{
					"option": "વાવણી",
					"correct": false
				},
				{
					"option": "પાક",
					"correct": false
				},
				{
					"option": "હળવું",
					"correct": true
				},
				{
					"option": "ખાતર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હળવું</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "પાક ઉત્પાદન માટે જરૂરી પોષકતત્ત્વો ધરાવતી જમીનને કેવી જમીન કહે છે ?",
			"a": [
				{
					"option": "ફળદ્રુપ જમીન",
					"correct": true
				},
				{
					"option": "રેતાળ જમીન",
					"correct": false
				},
				{
					"option": "લાલ જમીન",
					"correct": false
				},
				{
					"option": "પીળી જમીન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફળદ્રુપ જમીન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "વર્મી કૉમ્પોસ્ટ ખાતર કોના દ્વારા બનાવવામાં આવે છે ?",
			"a": [
				{
					"option": "વનસ્પતિના કચરા દ્વારા",
					"correct": false
				},
				{
					"option": "પ્રાણીના મળમૂત્ર દ્વારા",
					"correct": false
				},
				{
					"option": "અળસિયા દ્વારા",
					"correct": true
				},
				{
					"option": "ત્રણેય દ્વારા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અળસિયા દ્વારા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       } // no comma here 
    ]
};