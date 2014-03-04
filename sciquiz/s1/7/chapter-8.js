// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 8 પાચનતંત્ર, શ્વસનતંત્ર અને રુધિરાભિસરણતંત્ર",
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
			"q": "નીચેનામાંથી કયું પાચનતંત્રનું અંગ છે ?",
			"a": [
				{
					"option": "હ્રદય",
					"correct": false
				},
				{
					"option": "જઠર",
					"correct": true
				},
				{
					"option": "ફેફસાં",
					"correct": false
				},
				{
					"option": "શ્વાસનળી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જઠર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "ખોરાકના પાચનની શરૂઆત કયા અંગથી થાય છે ?",
			"a": [
				{
					"option": "નાનું આંતરડું",
					"correct": false
				},
				{
					"option": "જઠર",
					"correct": false
				},
				{
					"option": "મુખગુહા",
					"correct": true
				},
				{
					"option": "અન્નનળી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુખગુહા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "મુખગુહામાં ખોરાકના કયા ઘટકની પાચનની શરૂઆત થાય છે ?",
			"a": [
				{
					"option": "સ્ટાર્ચ",
					"correct": true
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "વિટામિન",
					"correct": false
				},
				{
					"option": "પ્રોટીન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્ટાર્ચ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "લાળરસમાં કયો ઉત્સેચક હોય છે ?",
			"a": [
				{
					"option": "ટાઇલિન",
					"correct": true
				},
				{
					"option": "ટારઝન",
					"correct": false
				},
				{
					"option": "ટાઇટેનિક",
					"correct": false
				},
				{
					"option": "ટાનલિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટાઇલિન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "ખોરાકને વલોવવાનું કાર્ય કોણ કરે છે ?",
			"a": [
				{
					"option": "નાનું આંતરડું",
					"correct": false
				},
				{
					"option": "જઠર",
					"correct": true
				},
				{
					"option": "મુખગુહા",
					"correct": false
				},
				{
					"option": "અન્નનળી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જઠર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "જઠરમાં શાનું અંશતઃ પાચન થાય છે ?",
			"a": [
				{
					"option": "કાર્બોદિત",
					"correct": false
				},
				{
					"option": "ચરબી",
					"correct": false
				},
				{
					"option": "પ્રોટીન",
					"correct": true
				},
				{
					"option": "ખનીજ ક્ષાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રોટીન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "કયા અવયવમાં ખોરાકના પાચનની ક્રિયા પૂર્ણ થાય છે ?",
			"a": [
				{
					"option": "નાના આંતરડામાં",
					"correct": false
				},
				{
					"option": "જઠરમાં",
					"correct": true
				},
				{
					"option": "મોટાં આંતરડામાં",
					"correct": false
				},
				{
					"option": "અન્નનળીમાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જઠરમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "પાચનતંત્રનું કયું અંગ પાચકરસ ઉત્પન્ન કરતું નથી ?",
			"a": [
				{
					"option": "નાનું આંતરડું",
					"correct": false
				},
				{
					"option": "જઠર",
					"correct": false
				},
				{
					"option": "મુખગુહા",
					"correct": false
				},
				{
					"option": "મોટું આંતરડું",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મોટું આંતરડું</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "પાચનમાર્ગના અંતમાં આવેલ અવયવ કયો છે ?",
			"a": [
				{
					"option": "નાનું આંતરડું",
					"correct": false
				},
				{
					"option": "મળાશય",
					"correct": true
				},
				{
					"option": "પક્વાશય",
					"correct": false
				},
				{
					"option": "મોટું આંતરડું",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મળાશય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કયું સહાયક પાચન અંગ છે ?",
			"a": [
				{
					"option": "અન્નનળી",
					"correct": false
				},
				{
					"option": "જઠર",
					"correct": false
				},
				{
					"option": "મોટું આંતરડું",
					"correct": false
				},
				{
					"option": "સ્વાદુપિંડ",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વાદુપિંડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "પિત્તરસ શામાં ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "યકૃતમાં",
					"correct": true
				},
				{
					"option": "સ્વાદુપિંડમાં",
					"correct": false
				},
				{
					"option": "નાના આંતરડામાં",
					"correct": false
				},
				{
					"option": "મુખગુહામાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યકૃતમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "નીચેના પૈકી શ્વસનતંત્રનો અવયવ કયો છે ?",
			"a": [
				{
					"option": "હ્રદય",
					"correct": false
				},
				{
					"option": "ફેફ્સાં",
					"correct": true
				},
				{
					"option": "યકૃત",
					"correct": false
				},
				{
					"option": "મુખગુહા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફેફ્સાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "કોની રચનામાં 'C'આકારની કૂર્ચાની કડીઓ આવેલી છે ?",
			"a": [
				{
					"option": "શ્વાસનળી",
					"correct": true
				},
				{
					"option": "અન્નનળી",
					"correct": false
				},
				{
					"option": "નાક",
					"correct": false
				},
				{
					"option": "શ્વાસવાહિની",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્વાસનળી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "ઉચ્છવાસની ક્રિયા વખતે ઉરોદરપટલની સ્થિતિ શું હોય છે ?",
			"a": [
				{
					"option": "નીચેની તરફ ખેંચાય છે.",
					"correct": false
				},
				{
					"option": "ઉપરની તરફ ખેંચાય છે.",
					"correct": true
				},
				{
					"option": "સ્થિર રહે છે.",
					"correct": false
				},
				{
					"option": "ચોક્કસ કહી શકાય નહિ.",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉપરની તરફ ખેંચાય છે.</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "શરીરનો કયો અવયવ પંપ જેવું કાર્ય કરે છે ?",
			"a": [
				{
					"option": "ફેફસાં",
					"correct": false
				},
				{
					"option": "જઠર",
					"correct": false
				},
				{
					"option": "હ્રદય",
					"correct": true
				},
				{
					"option": "શ્વાસનળી",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હ્રદય</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "ક્ષેપક કોને કહે છે ?",
			"a": [
				{
					"option": "હ્રદયના નીચલા ખંડોને",
					"correct": true
				},
				{
					"option": "હ્રદયના ઉપલા ખંડોને",
					"correct": false
				},
				{
					"option": "હ્રદયના જમણા ભાગને",
					"correct": false
				},
				{
					"option": "હ્રદયના ડાબાભાગને",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હ્રદયના નીચલા ખંડોને</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "હ્રદયમાં દ્વિદલ વાલ્વ ક્યાં હોય છે ?",
			"a": [
				{
					"option": "જમના કર્ણક અને ડાબા કર્ણક વચ્ચે",
					"correct": false
				},
				{
					"option": "જમના ક્ષેપક અને ડાબા ક્ષેપક વચ્ચે",
					"correct": false
				},
				{
					"option": "જમના કર્ણક અને જમણા ક્ષેપક વચ્ચે",
					"correct": false
				},
				{
					"option": "ડાબા કર્ણક અને ડાબા ક્ષેપક વચ્ચે",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડાબા કર્ણક અને ડાબા ક્ષેપક વચ્ચે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "ફેફસામાંથી ઑક્સિજનયુક્ત રુધિર કયા ખંડમાં આવે છે ?",
			"a": [
				{
					"option": "જમણા કર્ણકમાં",
					"correct": false
				},
				{
					"option": "ડાબા કર્ણકમાં",
					"correct": true
				},
				{
					"option": "જમણા ક્ષેપકમાં",
					"correct": false
				},
				{
					"option": "ડાબા ક્ષેપકમાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડાબા કર્ણકમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "હ્રદયનાં કયાં ખંડોમાં ઑક્સિજનયુક્ત (શુદ્ધ) રુધિર હોય છે ?",
			"a": [
				{
					"option": "બંને કર્ણકોમાં",
					"correct": false
				},
				{
					"option": "બંને ક્ષેપકોમાં",
					"correct": false
				},
				{
					"option": "જમણા કર્ણક અને જમણા ક્ષેપકમાં",
					"correct": false
				},
				{
					"option": "ડાબા કર્ણક અને ડાબા ક્ષેપકમાં",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડાબા કર્ણક અને ડાબા ક્ષેપકમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "રુધિરનો ક્યો ઘટક જામી જવાની ક્રિયામાં મદદ કરે છે ?",
			"a": [
				{
					"option": "રક્તકણો",
					"correct": false
				},
				{
					"option": "શ્વેતકણો",
					"correct": false
				},
				{
					"option": "રુધિરકણિકાઓ",
					"correct": true
				},
				{
					"option": "હીમોગ્લોબિન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રુધિરકણિકાઓ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};