// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 6 સજીવનો એકમ કોષ",
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
			"q": "સજીવ રચનામાં ચડતા ક્રમમાં કયો ક્રમ સાચો છે ?",
			"a": [
				{
					"option": "કોષ-તંત્ર-અવયવ-પેશી-સજીવનું શરીર",
					"correct": false
				},
				{
					"option": "કોષ-પેશી-અવયવ-તંત્ર-સજીવનું શરીર",
					"correct": true
				},
				{
					"option": "સજીવનું શરીર-તંત્ર-અવયવ-પેશી-કોષ",
					"correct": false
				},
				{
					"option": "સજીવનું શરીર-અવયવ-પેશી-તંત્ર-કોષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોષ-પેશી-અવયવ-તંત્ર-સજીવનું શરીર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "સજીવનો રચનાત્મક અને ક્રિયાત્મક એકમ કયો છે ?",
			"a": [
				{
					"option": "કોષ",
					"correct": true
				},
				{
					"option": "તંત્ર",
					"correct": false
				},
				{
					"option": "પેશી",
					"correct": false
				},
				{
					"option": "અવયવ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોષ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "કોષોને જોવા માટે કયું સાધન વપરાય છે ?",
			"a": [
				{
					"option": "હોકાયંત્ર",
					"correct": false
				},
				{
					"option": "સૂક્ષ્મદર્શક યંત્ર",
					"correct": true
				},
				{
					"option": "બાઇનોક્યુલર",
					"correct": false
				},
				{
					"option": "ટેલિસ્કોપ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂક્ષ્મદર્શક યંત્ર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "નીચેનામાંથી વનસ્પતિકોષ કયો છે ?",
			"a": [
				{
					"option": "અમીબા",
					"correct": false
				},
				{
					"option": "ગાલનો કોષ",
					"correct": false
				},
				{
					"option": "ડુંગળીનો કોષ",
					"correct": true
				},
				{
					"option": "ચેતાકોષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડુંગળીનો કોષ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "નીચેનામાંથી પ્રાણીકોષ કયો છે ?",
			"a": [
				{
					"option": "અમીબા",
					"correct": false
				},
				{
					"option": "ગાલનો કોષ",
					"correct": true
				},
				{
					"option": "ડુંગળીનો કોષ",
					"correct": false
				},
				{
					"option": "ચેતાકોષ",
					"correct": false
				} // no comma here",
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાલનો કોષ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નીચેના પૈકી કઈ અંગિકા વનસ્પતિકોષમાં હોતી નથી ?",
			"a": [
				{
					"option": "કોષદીવાલ",
					"correct": false
				},
				{
					"option": "કોષકેન્દ્ર",
					"correct": false
				},
				{
					"option": "કોષરસપટલ",
					"correct": false
				},
				{
					"option": "તારાકેન્દ્ર",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તારાકેન્દ્ર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "નીચેના પૈકી કઈ અંગિકા પ્રાણીકોષમાં હોતી નથી ?",
			"a": [
				{
					"option": "કોષદીવાલ",
					"correct": true
				},
				{
					"option": "કોષકેન્દ્ર",
					"correct": false
				},
				{
					"option": "કોષરસપટલ",
					"correct": false
				},
				{
					"option": "તારાકેન્દ્ર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોષદીવાલ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "નીચેના પૈકી એકકોષી સજીવ કયો છે ?",
			"a": [
				{
					"option": "પતંગિયું",
					"correct": false
				},
				{
					"option": "હંસરાજ",
					"correct": false
				},
				{
					"option": "ક્લેમિડોમોનાસ",
					"correct": true
				},
				{
					"option": "કીડી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્લેમિડોમોનાસ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "નીચેના પૈકી બહુકોષી સજીવ જોડ કઈ છે ?",
			"a": [
				{
					"option": "યીસ્ટ-વોર્ટીસેલા",
					"correct": false
				},
				{
					"option": "અમીબા-પ્લાઝમોડિયમ",
					"correct": false
				},
				{
					"option": "યુગ્લિના-પૅરામિશિયમ",
					"correct": false
				},
				{
					"option": "ઉધઈ-માછલી",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉધઈ-માછલી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કોષની કઈ અંગિકા પ્રોટીનસંશ્લેષણની ક્રિયામાં અગત્યનો ભાગ ભજવે છે ?",
			"a": [
				{
					"option": "લાઈસોઝોમ",
					"correct": false
				},
				{
					"option": "રિબોઝોમ",
					"correct": true
				},
				{
					"option": "કણાભસૂત્ર",
					"correct": false
				},
				{
					"option": "હરિતકણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રિબોઝોમ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "કોષની કઈ અંગિકાને કોષનું પાવરહાઉસ કહે છે ?",
			"a": [
				{
					"option": "લાઈસોઝોમ",
					"correct": false
				},
				{
					"option": "રિબોઝોમ",
					"correct": false
				},
				{
					"option": "કણાભસૂત્ર",
					"correct": true
				},
				{
					"option": "હરિતકણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કણાભસૂત્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "કોષની કઈ અંગિકા પાચક ઉત્સેચકો ધરાવે છે ?",
			"a": [
				{
					"option": "લાઈસોઝોમ",
					"correct": true
				},
				{
					"option": "રિબોઝોમ",
					"correct": false
				},
				{
					"option": "કણાભસૂત્ર",
					"correct": false
				},
				{
					"option": "હરિતકણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાઈસોઝોમ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "રંગસૂત્રો ક્યાં આવેલાં છે ?",
			"a": [
				{
					"option": "કોષદીવાલમાં",
					"correct": false
				},
				{
					"option": "કોષકેન્દ્રમાં",
					"correct": true
				},
				{
					"option": "કોષરસમાં",
					"correct": false
				},
				{
					"option": "તારાકેન્દ્રમાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોષકેન્દ્રમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "કોષમાં ઉત્પન્ન થયેલી ઊર્જા કયા અણુરૂપે સંગ્રહ પામે છે ?",
			"a": [
				{
					"option": "પ્રોટીન",
					"correct": false
				},
				{
					"option": "કાર્બોહાઇડ્રેટ",
					"correct": false
				},
				{
					"option": "ATP",
					"correct": true
				},
				{
					"option": "ADP",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ATP</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "વિવિધ પેશીઓ જોડાઈને શાની રચના કરે છે ?",
			"a": [
				{
					"option": "કોષની",
					"correct": false
				},
				{
					"option": "અંગની",
					"correct": true
				},
				{
					"option": "અંગતંત્રની",
					"correct": false
				},
				{
					"option": "એકકોષી સજીવની",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંગની</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "નીચેના પૈકી એકકોષી પ્રાણી કયું છે ?",
			"a": [
				{
					"option": "યીસ્ટ",
					"correct": false
				},
				{
					"option": "યુગ્લિના",
					"correct": true
				},
				{
					"option": "ક્લેમિડોમોનાસ",
					"correct": false
				},
				{
					"option": "વોર્ટીસેલા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યુગ્લિના</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "જે સજીવનું શરીર માત્ર એક જ કોષનું બનેલું હોય તેને શું કહે છે ?",
			"a": [
				{
					"option": "એકકોષી સજીવ",
					"correct": true
				},
				{
					"option": "બહુકોષી સજીવ",
					"correct": false
				},
				{
					"option": "દ્વિકોષી સજીવ",
					"correct": false
				},
				{
					"option": "પ્રથમકોષી સજીવ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એકકોષી સજીવ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "ડુંગળીના કોષનું કોષકેન્દ્ર સ્પષ્ટ જોવા માટે ક્યું અભિરંજક વપરાય છે ?",
			"a": [
				{
					"option": "મિથિલિન બ્લ્યુ",
					"correct": true
				},
				{
					"option": "આયોડિન",
					"correct": false
				},
				{
					"option": "હરિતકણ",
					"correct": false
				},
				{
					"option": "એકેયે નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મિથિલિન બ્લ્યુ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "વનસ્પતિની કઈ અંગિકા પ્રકાશસંશ્લેષણનું કાર્ય કરે છે ?",
			"a": [
				{
					"option": "લાઈસોઝોમ",
					"correct": false
				},
				{
					"option": "રિબોઝોમ",
					"correct": false
				},
				{
					"option": "કણાભસૂત્ર",
					"correct": false
				},
				{
					"option": "હરિતકણ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હરિતકણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "કોષની કઈ અંગિકા કોષમાંની સ્ત્રાવી ક્રિયાઓનું નિયમન કરે છે ?",
			"a": [
				{
					"option": "લાઈસોઝોમ",
					"correct": false
				},
				{
					"option": "રિબોઝોમ",
					"correct": false
				},
				{
					"option": "કણાભસૂત્ર",
					"correct": false
				},
				{
					"option": "ગોલ્ગીકાય",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોલ્ગીકાય</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};