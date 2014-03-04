// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 4 સૂક્ષ્મજીવો",
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
			"q": "ખરજવું થવા માટે જવાબદાર સૂક્ષ્મ જીવ કયો છે ?",
			"a": [
				{
					"option": "પ્રજીવ",
					"correct": false
				},
				{
					"option": "ફૂગ",
					"correct": true
				},
				{
					"option": "બૅક્ટેરિયા",
					"correct": false
				},
				{
					"option": "વાઇરસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફૂગ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "પ્રજીવથી થતો રોગ કયો છે ?",
			"a": [
				{
					"option": "મરડો",
					"correct": true
				},
				{
					"option": "ઓરી",
					"correct": false
				},
				{
					"option": "ક્ષય",
					"correct": false
				},
				{
					"option": "દાદર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મરડો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "મેલેરિયા રોગ થવા માટે જવાબદાર સૂક્ષ્મ જીવ કયો છે ?",
			"a": [
				{
					"option": "પ્રજીવ",
					"correct": true
				},
				{
					"option": "ફૂગ",
					"correct": false
				},
				{
					"option": "બૅક્ટેરિયા",
					"correct": false
				},
				{
					"option": "વાઇરસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રજીવ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "કૉલેરા રોગ થવા માટે જવાબદાર સૂક્ષ્મ જીવ કયો છે ?",
			"a": [
				{
					"option": "પ્રજીવ",
					"correct": false
				},
				{
					"option": "ફૂગ",
					"correct": false
				},
				{
					"option": "બૅક્ટેરિયા",
					"correct": true
				},
				{
					"option": "વાઇરસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૅક્ટેરિયા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "બૅક્ટેરિયાથી થતો રોગ કયો છે ?",
			"a": [
				{
					"option": "અછબડા",
					"correct": false
				},
				{
					"option": "કમળો",
					"correct": false
				},
				{
					"option": "મેલેરિયા",
					"correct": false
				},
				{
					"option": "ક્ષય",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્ષય</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "વાઇરસથી થતો રોગ કયો છે ?",
			"a": [
				{
					"option": "મરડો",
					"correct": false
				},
				{
					"option": "કમળો",
					"correct": true
				},
				{
					"option": "ટાઇફૉઈડ",
					"correct": false
				},
				{
					"option": "ન્યુમોનિયા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કમળો</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "પોલિયો શાનાથી થતો રોગ છે ?",
			"a": [
				{
					"option": "પ્રજીવ",
					"correct": false
				},
				{
					"option": "ફૂગ",
					"correct": false
				},
				{
					"option": "બૅક્ટેરિયા",
					"correct": false
				},
				{
					"option": "વાઇરસ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાઇરસ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "દુનિયામાંથી લગભગ નાબૂદ થયેલ રોગ કયો છે ?",
			"a": [
				{
					"option": "મેલેરિયા",
					"correct": false
				},
				{
					"option": "ક્ષય",
					"correct": false
				},
				{
					"option": "શીતળા",
					"correct": true
				},
				{
					"option": "કૉલેરા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શીતળા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "બીસીજીની રસી કયા રોગ સામે રક્ષણ આપે છે ?",
			"a": [
				{
					"option": "કૉલેરા",
					"correct": false
				},
				{
					"option": "ક્ષય",
					"correct": true
				},
				{
					"option": "શીતળા",
					"correct": false
				},
				{
					"option": "ટાઇફૉઈડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્ષય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "શીતળાની રસીના શોધક કોણ હતા ?",
			"a": [
				{
					"option": "એડવર્ડ જેનર",
					"correct": true
				},
				{
					"option": "લૂઈ પાશ્વર",
					"correct": false
				},
				{
					"option": "રૉબર્ટ હૂક",
					"correct": false
				},
				{
					"option": "જગદીશચંદ્ર બોઝ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એડવર્ડ જેનર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "મેલેરિયા રોગ કયા પ્રજીવથી થાય છે ?",
			"a": [
				{
					"option": "અમીબા",
					"correct": false
				},
				{
					"option": "પ્લાઝમોડિયમ",
					"correct": true
				},
				{
					"option": "પૅરામિશિયમ",
					"correct": false
				},
				{
					"option": "ટ્રિપેનોસોમા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્લાઝમોડિયમ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "કયો રોગ મચ્છર દ્વારા ફેલાય છે ?",
			"a": [
				{
					"option": "કૉલેરા",
					"correct": false
				},
				{
					"option": "ક્ષય",
					"correct": false
				},
				{
					"option": "મેલેરિયા",
					"correct": true
				},
				{
					"option": "મરડો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મેલેરિયા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "કયા પ્રકારના સૂક્ષ્મ જીવ સ્વયંપોષી છે ?",
			"a": [
				{
					"option": "લીલ",
					"correct": true
				},
				{
					"option": "ફૂગ",
					"correct": false
				},
				{
					"option": "પ્રજીવ",
					"correct": false
				},
				{
					"option": "વાઇરસ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લીલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "કઈ લીલમાંથી થીજવવાના દ્રવ્ય તરીકે ઉપયોગી એવો અગર-અગર પદાર્થ બનાવવામાં આવે છે ?",
			"a": [
				{
					"option": "જેલિડિયમ",
					"correct": true
				},
				{
					"option": "ઍનાબીના",
					"correct": false
				},
				{
					"option": "નોસ્ટોક",
					"correct": false
				},
				{
					"option": "સ્પાયરોગાયરા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જેલિડિયમ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "બિલાડીનો ટોપ શું છે ?",
			"a": [
				{
					"option": "લીલ",
					"correct": false
				},
				{
					"option": "ફૂગ",
					"correct": true
				},
				{
					"option": "પ્રજીવ",
					"correct": false
				},
				{
					"option": "બૅક્ટેરિયા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફૂગ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "કયો સૂક્ષ્મ જીવ પેનિસિલિન નામની દવા બનાવવામાં ઉપયોગી છે ?",
			"a": [
				{
					"option": "લીલ",
					"correct": false
				},
				{
					"option": "ફૂગ",
					"correct": true
				},
				{
					"option": "પ્રજીવ",
					"correct": false
				},
				{
					"option": "બૅક્ટેરિયા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફૂગ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "ઇડલી અને ઢોંસા બનાવવા માટે આથો લાવવા શાનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "જેલિડિયમ",
					"correct": false
				},
				{
					"option": "યીસ્ટ",
					"correct": true
				},
				{
					"option": "મશરૂમ",
					"correct": false
				},
				{
					"option": "નીલહરિત લીલ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યીસ્ટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "કયા સૂક્ષ્મ જીવને સજીવ અને નિર્જીવને જોડતી કડી કહે છે ?",
			"a": [
				{
					"option": "વાઇરસ",
					"correct": true
				},
				{
					"option": "ફૂગ",
					"correct": false
				},
				{
					"option": "પ્રજીવ",
					"correct": false
				},
				{
					"option": "બૅક્ટેરિયા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાઇરસ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "ક્ષય રોગ બીજા કયા નામથી ઓળખાય છે ?",
			"a": [
				{
					"option": "લેપ્રસી",
					"correct": false
				},
				{
					"option": "ટીબી",
					"correct": true
				},
				{
					"option": "ડિફ્થેરિયા",
					"correct": false
				},
				{
					"option": "ન્યુમોનિયા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટીબી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "એઇડ્સ શાનાથી થતો રોગ છે ?",
			"a": [
				{
					"option": "વાઇરસ",
					"correct": true
				},
				{
					"option": "ફૂગ",
					"correct": false
				},
				{
					"option": "પ્રજીવ",
					"correct": false
				},
				{
					"option": "બૅક્ટેરિયા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાઇરસ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       }, { // Question 21
			"q": "હડકવાની રસીના શોધક કોણ હતા ?",
			"a": [
				{
					"option": "એડવર્ડ જેનર",
					"correct": false
				},
				{
					"option": "લૂઈ પાશ્વર",
					"correct": true
				},
				{
					"option": "રૉબર્ટ હૂક",
					"correct": false
				},
				{
					"option": "જગદીશચંદ્ર બોઝ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લૂઈ પાશ્વર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 22
			"q": "નીચેનામાંથી કયો રોગ વાઇરસથી થતો નથી ?",
			"a": [
				{
					"option": "ગાલ પચોળિયા",
					"correct": false
				},
				{
					"option": "કમળો",
					"correct": false
				},
				{
					"option": "શરદી",
					"correct": false
				},
				{
					"option": "પ્લેગ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્લેગ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 23
			"q": "નીચેનામાંથી કયો રોગ વાઇરસથી થતો નથી ?",
			"a": [
				{
					"option": "હડકવા",
					"correct": false
				},
				{
					"option": "પોલિયો",
					"correct": false
				},
				{
					"option": "ઓરી",
					"correct": false
				},
				{
					"option": "બેસિલરી",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બેસિલરી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 24
			"q": "નીચેનામાંથી કયો રોગ વાઇરસથી થતો નથી ?",
			"a": [
				{
					"option": "ચિકનગુનિયા",
					"correct": false
				},
				{
					"option": "અછબડા",
					"correct": false
				},
				{
					"option": "ઇન્ફ્લુએન્ઝા",
					"correct": false
				},
				{
					"option": "ખસ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખસ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 25
			"q": "નીચેનામાંથી ફૂગનું ઉદાહરણ નથી ?",
			"a": [
				{
					"option": "બિલાડીનો ટોપ",
					"correct": false
				},
				{
					"option": "મ્યૂકર",
					"correct": false
				},
				{
					"option": "ઍસ્પરજીલસ",
					"correct": false
				},
				{
					"option": "પૅરામિશિયમ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૅરામિશિયમ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here 
    ]
};