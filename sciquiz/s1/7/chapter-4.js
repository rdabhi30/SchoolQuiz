// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 4 પાણીના ગુણધર્મો",
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
			"q": "શુદ્ધ પાણી કયા તાપમાને ઊકળી વરાળમાં રૂપાંતર પામે છે ?",
			"a": [
				{
					"option": "0<sup>0</sup>સે",
					"correct": false
				},
				{
					"option": "90<sup>0</sup>સે",
					"correct": false
				},
				{
					"option": "100<sup>0</sup>સે",
					"correct": true
				},
				{
					"option": "108<sup>0</sup>સે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 100<sup>0</sup>સે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "શુદ્ધ પાણીને ઠંડુ પાડતાં તે કયા તાપમાને ઘન સ્વરૂપમાં ફેરવાય છે ?",
			"a": [
				{
					"option": "0<sup>0</sup>સે",
					"correct": true
				},
				{
					"option": "4<sup>0</sup>સે",
					"correct": false
				},
				{
					"option": "37<sup>0</sup>સે",
					"correct": false
				},
				{
					"option": "100<sup>0</sup>સે",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 0<sup>0</sup>સે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "પાણીમાં બરફનો ટુકડો મૂકતાં શું થાય ?",
			"a": [
				{
					"option": "તરે",
					"correct": true
				},
				{
					"option": "ડૂબે",
					"correct": false
				},
				{
					"option": "પાણીનો બરફ બને",
					"correct": false
				},
				{
					"option": "વરાળ ઉત્પન્ન થાય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તરે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "પાણી શું છે ?",
			"a": [
				{
					"option": "તત્ત્વ",
					"correct": false
				},
				{
					"option": "સંયોજન",
					"correct": true
				},
				{
					"option": "મિશ્રણ",
					"correct": false
				},
				{
					"option": "દ્રાવણ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંયોજન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "પાણીનાં ઘટક તત્ત્વો કયા છે ?",
			"a": [
				{
					"option": "હાઈડ્રોજન અને નાઈટ્રોજન",
					"correct": false
				},
				{
					"option": "ઑક્સિજન અને નાઈટ્રોજન",
					"correct": false
				},
				{
					"option": "હાઈડ્રોજન અને ક્લોરિન",
					"correct": false
				},
				{
					"option": "હાઈડ્રોજન અને ઑક્સિજન",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઈડ્રોજન અને ઑક્સિજન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "પાણીનું વિદ્યુતવિભાજન કરતાં ઋણ ધ્રુવ પર કયો વાયુ મળે છે ?",
			"a": [
				{
					"option": "હાઈડ્રોજન",
					"correct": true
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
					"option": "નાઈટ્રોજન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઈડ્રોજન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "પાણીનું વિદ્યુત વિભાજન કરતાં મળતા હાઈડ્રોજન અને ઑક્સિજન વાયુઓનું કદ-પ્રમાણ કેટલું હોય છે ?",
			"a": [
				{
					"option": "1:2",
					"correct": false
				},
				{
					"option": "2:1",
					"correct": true
				},
				{
					"option": "1:8",
					"correct": false
				},
				{
					"option": "8:1",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2:1</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "ઑક્સિજન વાયુ ભરેલી કસનળીમાં ધુમાયમાન અગરબત્તી ઉતારતાં શું થાય છે ?",
			"a": [
				{
					"option": "અગરબત્તી ઓલવાઈ જા",
					"correct": false
				},
				{
					"option": "અગરબત્તી જ્યોત સાથે સળગે",
					"correct": true
				},
				{
					"option": "વાયુધડાકા સાથે સળગે",
					"correct": false
				},
				{
					"option": "અગરબત્તી પર કંઈ અસર ન થાય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અગરબત્તી જ્યોત સાથે સળગે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "કયો વાયુ દહનશીલ છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
				},
				{
					"option": "નાઈટ્રોજન",
					"correct": false
				},
				{
					"option": "હાઈડ્રોજન",
					"correct": true
				},
				{
					"option": "કાર્બન ડાયોક્સાઈડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઈડ્રોજન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "નીચેનામાંથી ક્યો પદાર્થ પાણીમાં ઓગળતો નથી ?",
			"a": [
				{
					"option": "ફટકડી",
					"correct": false
				},
				{
					"option": "મીઠું",
					"correct": false
				},
				{
					"option": "ખાંડ",
					"correct": false
				},
				{
					"option": "મીણ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "સામાન્ય રીતે દ્રાવણમાં દ્રાવ્ય અને દ્રાવકનું પ્રમાણ કેવું હોય છે ?",
			"a": [
				{
					"option": "બંને સમાન પ્રમાણમાં હોય છે.",
					"correct": false
				},
				{
					"option": "દ્રાવ્યનો જથ્થો દ્રાવકના જથ્થા કરતાં ઓછો હોય છે.",
					"correct": true
				},
				{
					"option": "દ્રાવ્યનો જથ્થો દ્રાવકના જથ્થા કરતાં વધારે હોય છે.",
					"correct": false
				},
				{
					"option": "આપેલ પૈકી એક પણ નહિ.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દ્રાવ્યનો જથ્થો દ્રાવકના જથ્થા કરતાં ઓછો હોય છે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "ક્યું પાણી લગભગ શુદ્ધ પાણી છે ?",
			"a": [
				{
					"option": "કૂવાનું પાણી",
					"correct": false
				},
				{
					"option": "વરસાદનું પાણી",
					"correct": true
				},
				{
					"option": "નદીનું પાણી",
					"correct": false
				},
				{
					"option": "સમુદ્રનું પાણી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વરસાદનું પાણી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "કયું પાણી અતિશુદ્ધ પાણી છે ?",
			"a": [
				{
					"option": "કૂવાનું પાણી",
					"correct": false
				},
				{
					"option": "નિસ્યંદિત પાણી",
					"correct": true
				},
				{
					"option": "નદીનું પાણી",
					"correct": false
				},
				{
					"option": "ઝરણાનું પાણી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નિસ્યંદિત પાણી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "પાણીની કઠિનતા દૂર કરવા તેમાં કયો પદાર્થ ઉમેરવામાં આવે છે ?",
			"a": [
				{
					"option": "ફટકડી",
					"correct": false
				},
				{
					"option": "ધોવાનો સોડા",
					"correct": true
				},
				{
					"option": "બ્લીચિંગ પાઉડર",
					"correct": false
				},
				{
					"option": "ક્લોરિનની ટીકડી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધોવાનો સોડા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "મોટાં શહેરોમાં પીવાનું પાણી જંતુરહિત કરવા તેમાં કયો વાયુ પસાર કરવામાં આવે છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
				},
				{
					"option": "નાઈટ્રોજન",
					"correct": false
				},
				{
					"option": "ક્લોરિન",
					"correct": true
				},
				{
					"option": "કાર્બન ડાયોક્સાઈડ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્લોરિન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "પાણીને ઉકાળવાથી કયા પ્રકારની અશુદ્ધિ દૂર કરી શકાય ?",
			"a": [
				{
					"option": "અદ્રાવ્ય અશુદ્ધિ",
					"correct": false
				},
				{
					"option": "દ્રાવ્ય અશુદ્ધિ",
					"correct": false
				},
				{
					"option": "તરતી અશુદ્ધિ",
					"correct": false
				},
				{
					"option": "સૂક્ષ્મ જીવોની અશુદ્ધિ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂક્ષ્મ જીવોની અશુદ્ધિ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "ડહોળા પાણીમાંના માટીના કણો ઝડપથી નીચે બેસાડવા પાણીમાં શું ઉમેરવામાં આવે છે ?",
			"a": [
				{
					"option": "ફટકડી",
					"correct": true
				},
				{
					"option": "ધોવાનો સોડા",
					"correct": false
				},
				{
					"option": "બ્લીચિંગ પાઉડર",
					"correct": false
				},
				{
					"option": "ક્લોરિનની ટીકડી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફટકડી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "જે પ્રવાહીમાં પદાર્થ ઓગળે તે પ્રવાહીને શું કહે છે ?",
			"a": [
				{
					"option": "દ્રાવ્ય",
					"correct": false
				},
				{
					"option": "દ્રાવક",
					"correct": true
				},
				{
					"option": "દ્રાવણ",
					"correct": false
				},
				{
					"option": "ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દ્રાવક</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "પ્રવાહીમાં ઓગળનાર પદાર્થને શું કહે છે ?",
			"a": [
				{
					"option": "દ્રાવ્ય",
					"correct": true
				},
				{
					"option": "દ્રાવક",
					"correct": false
				},
				{
					"option": "દ્રાવણ",
					"correct": false
				},
				{
					"option": "ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દ્રાવ્ય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "જે પાણીમાં ક્ષારનું પ્રમાણ ઓછું હોય તે પાણીને કેવું પાણી કહેવાય ?",
			"a": [
				{
					"option": "નરમ પાણી",
					"correct": true
				},
				{
					"option": "કઠિન પાણી",
					"correct": false
				},
				{
					"option": "ગરમ પાણી",
					"correct": false
				},
				{
					"option": "ઠંડુ પાણી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નરમ પાણી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       } // no comma here 
    ]
};
