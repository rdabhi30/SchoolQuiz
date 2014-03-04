// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 8 અનુકૂલન",
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
			"q": "હાડકાંવાળાં જે પ્રાણીઓ હવામાં ઊડી શકે છે તેમને શું કહે છે ?",
			"a": [
				{
					"option": "ખેચર",
					"correct": true
				},
				{
					"option": "જળચર",
					"correct": false
				},
				{
					"option": "ભૂચર",
					"correct": false
				},
				{
					"option": "ઉભયજીવી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખેચર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "કયા પ્રાણીઓનાં શરીરમાં વાતાશયો હોય છે ?",
			"a": [
				{
					"option": "વૃક્ષારોહી",
					"correct": false
				},
				{
					"option": "જળચર",
					"correct": false
				},
				{
					"option": "ભૂચર",
					"correct": false
				},
				{
					"option": "ખેચર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખેચર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "નીચેનામાંથી ઉભયજીવી પ્રાણી કયું છે ?",
			"a": [
				{
					"option": "સાપ",
					"correct": false
				},
				{
					"option": "કેમેલિયોન",
					"correct": false
				},
				{
					"option": "દેડકો",
					"correct": true
				},
				{
					"option": "ઉંદર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દેડકો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "માછલી કયા અંગ દ્વારા પાણીમાં ઓગળેલો ઑક્સિજન મેળવે છે ?",
			"a": [
				{
					"option": "મીનપક્ષ",
					"correct": false
				},
				{
					"option": "ચૂઈ",
					"correct": true
				},
				{
					"option": "મુખ",
					"correct": false
				},
				{
					"option": "ફેફસાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચૂઈ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "માછલી પાણીમાં રહેતી હોવા છતાં ભીંજાઈ કે કોહવાઈ જતી નથી. આ માટે તેની કઈ રચના મદદરૂપ બને છે ?",
			"a": [
				{
					"option": "મીનપક્ષ",
					"correct": false
				},
				{
					"option": "ચૂઈ",
					"correct": false
				},
				{
					"option": "ભીંગડાં",
					"correct": true
				},
				{
					"option": "પૂંછડી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભીંગડાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "પક્ષીઓનાં શરીરમાં કેટલાં વાતાશયો હોય છે ?",
			"a": [
				{
					"option": "ત્રણ",
					"correct": false
				},
				{
					"option": "પાંચ",
					"correct": false
				},
				{
					"option": "સાત",
					"correct": false
				},
				{
					"option": "નવ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નવ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "પક્ષીઓનાં કયાં અંગોનું પાંખોમાં રૂપાંતર થયું હોય છે ?",
			"a": [
				{
					"option": "અગ્ર ઉપાંગોનું",
					"correct": true
				},
				{
					"option": "પશ્વ ઉપાંગોનું",
					"correct": false
				},
				{
					"option": "મીનપક્ષોનું",
					"correct": false
				},
				{
					"option": "વાતાશયોનું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અગ્ર ઉપાંગોનું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "કેમેલિયોન (અને કાચિંડો) કયા પ્રકારનું પ્રાણી છે ?",
			"a": [
				{
					"option": "રણવાસી",
					"correct": false
				},
				{
					"option": "દરવાસી",
					"correct": false
				},
				{
					"option": "વૃક્ષારોહી",
					"correct": true
				},
				{
					"option": "પાલતુ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૃક્ષારોહી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "કયું પ્રાણી રંગપરિવર્તનનો ગુણ ધરાવે છે ?",
			"a": [
				{
					"option": "કેમેલિયોન",
					"correct": true
				},
				{
					"option": "ખિસકોલી",
					"correct": false
				},
				{
					"option": "ઉંદર",
					"correct": false
				},
				{
					"option": "સાપ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેમેલિયોન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "ઊંટની ખૂંધમાં શાનો સંગ્રહ થયેલો હોય છે ?",
			"a": [
				{
					"option": "રુધિર",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": true
				},
				{
					"option": "પાણી",
					"correct": false
				},
				{
					"option": "કાર્બોદિત",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચરબી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "કયા પ્રકારનાં પ્રાણીઓની આંખો અલ્પવિકસિત હોય છે ?",
			"a": [
				{
					"option": "રણવાસી",
					"correct": false
				},
				{
					"option": "દરવાસી",
					"correct": true
				},
				{
					"option": "વૃક્ષારોહી",
					"correct": false
				},
				{
					"option": "જળચર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દરવાસી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "કયા પ્રકારની વનસ્પતિઓમાં પર્ણનું કાંટામાં રૂપાંતર થયેલું હોય છે ?",
			"a": [
				{
					"option": "જલોદભિદ",
					"correct": false
				},
				{
					"option": "મધ્યોદભિદ",
					"correct": false
				},
				{
					"option": "શુષ્કોદભિદ",
					"correct": true
				},
				{
					"option": "કીટાહારી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુષ્કોદભિદ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "નીચેનામાંથી જલોદભિદ વનસ્પતિ કઈ છે ?",
			"a": [
				{
					"option": "શરુ",
					"correct": false
				},
				{
					"option": "ખજૂરી",
					"correct": false
				},
				{
					"option": "બામ",
					"correct": true
				},
				{
					"option": "બોરડી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બામ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "નીચેનામાંથી શુષ્કોદભિદ વનસ્પતિ કઈ છે ?",
			"a": [
				{
					"option": "લીમડો",
					"correct": false
				},
				{
					"option": "બારમાસી",
					"correct": false
				},
				{
					"option": "શીંગોડા",
					"correct": false
				},
				{
					"option": "બાવળ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાવળ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "કયું પ્રાણી ગ્રીષ્મ સમાધિ અને શીત સમાધિ ગાળે છે ?",
			"a": [
				{
					"option": "દેડકો",
					"correct": true
				},
				{
					"option": "કાચિંડો",
					"correct": false
				},
				{
					"option": "ઊંટ",
					"correct": false
				},
				{
					"option": "માછલી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દેડકો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "જમીન અને પાણી બંને સ્થળે જીવન પસાર કરતાં પ્રાણીઓને શું કહે છે ?",
			"a": [
				{
					"option": "ખેચર",
					"correct": false
				},
				{
					"option": "જળચર",
					"correct": false
				},
				{
					"option": "ભૂચર",
					"correct": false
				},
				{
					"option": "ઉભયજીવી",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉભયજીવી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "કયા પ્રાણીને રણનું વહાણ કહેવામાં આવે છે ?",
			"a": [
				{
					"option": "વાઘને",
					"correct": false
				},
				{
					"option": "ઘોડોને",
					"correct": false
				},
				{
					"option": "હાથીને",
					"correct": false
				},
				{
					"option": "ઊંટને",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઊંટને</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "બદલાતા પર્યાવરણ સાથે પોતાનામાં જરૂરી ફેરફારો કરી સફળતાપૂર્વક જીવન જીવવાની સજીવોની ક્ષમતાને શું કહે છે ?",
			"a": [
				{
					"option": "અનુસરણ",
					"correct": false
				},
				{
					"option": "અનુભવ",
					"correct": false
				},
				{
					"option": "અનુમૂલન",
					"correct": false
				},
				{
					"option": "અનુકૂલન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અનુકૂલન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "પાણીમાં રહેતાં પ્રાણીઓને ક્યા પ્રાણીઓ કહેવામાં આવે છે ?",
			"a": [
				{
					"option": "ખેચર",
					"correct": false
				},
				{
					"option": "જળચર",
					"correct": true
				},
				{
					"option": "ભૂચર",
					"correct": false
				},
				{
					"option": "ઉભયજીવી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જળચર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "જમીન પર રહેતાં પ્રાણીઓને ક્યા પ્રાણીઓ કહેવામાં આવે છે ?",
			"a": [
				{
					"option": "ખેચર",
					"correct": false
				},
				{
					"option": "જળચર",
					"correct": false
				},
				{
					"option": "ભૂચર",
					"correct": true
				},
				{
					"option": "ઉભયજીવી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભૂચર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       } // no comma here 
    ]
};