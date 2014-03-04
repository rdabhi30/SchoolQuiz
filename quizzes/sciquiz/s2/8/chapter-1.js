// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-1 વાયુઓની બનાવટ",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
		"standard": "8",
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
			"q": "પોટૅશિયમ પરમૅંગેનેટનું અણુસૂત્ર કયું છે ?",
			"a": [
				{
					"option": "K<sub>2</sub>MnO<sub>4</sub>",
					"correct": false
                },
				{
					"option": "KMnO<sub>2</sub>",
					"correct": false
                },
				{
					"option": "KMnO<sub>4</sub>",
					"correct": true
                },
				{
					"option": "K<sub>2</sub>MnO<sub>2</sub>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: KMnO<sub>4</sub></p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "પોટૅશિયમ પરમૅંગેનેટ(KMnO<sub>4</sub>)ને ગરમ કરતાં કયો વાયુ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": true
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 3
			"q": "ઑક્સિજન વાયુનું અણુસૂત્ર કયું છે ?",
			"a": [
				{
					"option": "H<sub>2</sub>O",
					"correct": false
                },
				{
					"option": "O<sub>2</sub>",
					"correct": true
                },
				{
					"option": "CO<sub>2</sub>",
					"correct": false
                },
				{
					"option": "O<sub>3</sub>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: O<sub>2</sub></p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 4
			"q": "ઑક્સિજન વાયુને બીજા કયા નામે ઓળખવામાં આવે છે ?",
			"a": [
				{
					"option": "પ્રાણવાયુ",
					"correct": true
                },
				{
					"option": "અંગાર વાયુ",
					"correct": false
                },
				{
					"option": "નિષ્ક્રિય વાયુ",
					"correct": false
                },
				{
					"option": "દહનશીલ વાયુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રાણવાયુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 5
			"q": "દહનપોષક વાયુ કયો છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": true
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		
		{ // Question 6
			"q": "કયો ભૌતિક ગુણધર્મ ઑક્સિજન માટે સાચો છે ?",
			"a": [
				{
					"option": "દહનશામક",
					"correct": false
                },
				{
					"option": "દહનશીલ",
					"correct": false
                },
				{
					"option": "દહનપોષક",
					"correct": true
                },
				{
					"option": "દહનપોષક, દહનશામક અને દહનશીલ - ત્રણેય",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દહનપોષક</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "ધાતુઓની ઑક્સિજન સાથે પ્રક્રિયા થવાથી ધાતુના કયા પ્રકારનાં સંયોજનો બને છે ?",
			"a": [
				{
					"option": "ઑક્સાઇડ",
					"correct": true
                },
				{
					"option": "હાઇડ્રાઇડ",
					"correct": false
                },
				{
					"option": "હાઇડ્રૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "કાર્બોનેટ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સાઇડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 8
			"q": "અધાતુના ઑકસાઈડની પાણી સાથે પ્રક્રિયા કરતા શુ મળે છે ?",
			"a": [
				{
					"option": "ઍસિડ",
					"correct": true
                },
				{
					"option": "બેઇઝ",
					"correct": false
                },
				{
					"option": "ક્ષાર",
					"correct": false
                },
				{
					"option": "ઍસિડ, બેઇઝ અને ક્ષાર - ત્રણેય",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍસિડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 9
			"q": "ન્યુમોનિયા અને ફેફ્સાંનાં રોગોથી પીડાતા દરદીઓ માટે ક્યો વાય ઉપયોગી છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": true
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 10
			"q": "સલ્ફ્યુરિક ઍસિડના ઉત્પાદનમાં ક્યો વાય જરૂરી છે ?",
			"a": [				
				{
					"option": "ઑક્સિજન",
					"correct": true
                },
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": false
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઑક્સિજન</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		
		
		{ // Question 11
			"q": "કૅલ્શિયમ કાર્બોનેટનું અણુસૂત્ર કયું છે ?",
			"a": [
				{
					"option": "Ca<sub>2</sub>CO<sub>3</sub>",
					"correct": false
                },
				{
					"option": "CaCO<sub>2</sub>",
					"correct": false
                },
				{
					"option": "CaCO<sub>3</sub>",
					"correct": true
                },
				{
					"option": "Ca<sub>3</sub>CO<sub>3</sub>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: CaCO<sub>3</sub></p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "હાઇડ્રોક્લોરિક ઍસિડનું અણુસૂત્ર કયું છે ?",
			"a": [
				{
					"option": "HCl",
					"correct": true
                },
				{
					"option": "KNO<sub>3</sub>",
					"correct": false
                },
				{
					"option": "H<sub>2</sub>SO<sub>4</sub>",
					"correct": false
                },				
				{
					"option": "H<sub>2</sub>CO<sub>3</sub>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: HCl</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 13
			"q": "આરસપહાણ અને હાઇડ્રોક્લોરિક ઍસિડની પ્રક્રિયા કયો વાયુ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": true
                },
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઈડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "કાર્બન ડાયૉક્સાઈડ વાયુનું અણુસૂત્ર કયું છે ?",
			"a": [
				{
					"option": "H<sub>2</sub>O",
					"correct": false
                },
				{
					"option": "O<sub>2</sub>",
					"correct": false
                },
				{
					"option": "CO<sub>2</sub>",
					"correct": true
                },
				{
					"option": "O<sub>3</sub>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: CO<sub>2</sub></p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 15
			"q": "કાર્બન ડાયૉક્સાઈડ વાયુને બીજા કયા નામે ઓળખવામાં આવે છે ?",
			"a": [
				{
					"option": "પ્રાણવાયુ",
					"correct": false
                },
				{
					"option": "અંગારવાયુ",
					"correct": true
                },
				{
					"option": "નિષ્ક્રિય વાયુ",
					"correct": false
                },
				{
					"option": "દહનશીલ વાયુ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંગારવાયુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 16
			"q": "દહનશામક વાયુ કયો છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": true
                },
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઈડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		
		{ // Question 17
			"q": "કયો ભૌતિક ગુણધર્મ કાર્બન ડાયૉક્સાઈડ માટે સાચો છે ?",
			"a": [
				{
					"option": "દહનશામક",
					"correct": true
                },
				{
					"option": "દહનશીલ",
					"correct": false
                },
				{
					"option": "દહનપોષક",
					"correct": false
                },
				{
					"option": "દહનપોષક, દહનશામક અને દહનશીલ - ત્રણેય",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દહનશામક</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "ચૂનાના નીતર્યા પાણીમાં સ્ટ્રૉની મદદથી ફૂંક મારતા દ્રાવણનો રંગ કેવો થાય છે ?",
			"a": [
				{
					"option": "દૂધિયો",
					"correct": true
                },
				{
					"option": "કાળો",
					"correct": false
                },
				{
					"option": "ભુરો",
					"correct": false
                },
				{
					"option": "લાલ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દૂધિયો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 19
			"q": "વધુ દબાણે કાર્બન ડાયૉક્સાઇડની પાણી સાથે પ્રક્રિયા થવાથી શું બને છે ?",
			"a": [
				{
					"option": "કાર્બોનિક ઍસિડ",
					"correct": true
                },
				{
					"option": "સલ્ફ્યુરસ ઍસિડ",
					"correct": false
                },
				{
					"option": "હાઇડ્રોક્લોરિક ઍસિડ",
					"correct": false
                },
				{
					"option": "સોડિયમ કાર્બોનેટ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બોનિક ઍસિડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 20
			"q": "વનસ્પતિમાં પ્રકાશસંશ્લેષણની ક્રિયા માટે ક્યો વાય ઉપયોગી છે ?",
			"a": [				
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": true
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઈડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 21
			"q": "કાર્બોનિક ઍસિડના ઉત્પાદનમાં ક્યો વાય જરૂરી છે ?",
			"a": [				
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": true
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઈડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 22
			"q": "કાર્બોનિક ઍસિડનું અણુસૂત્ર કયું છે ?",
			"a": [
				{
					"option": "HCl",
					"correct": false
                },
				{
					"option": "KNO<sub>3</sub>",
					"correct": false
                },
				{
					"option": "H<sub>2</sub>SO<sub>4</sub>",
					"correct": false
                },				
				{
					"option": "H<sub>2</sub>CO<sub>3</sub>",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: H<sub>2</sub>CO<sub>3</sub></p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },		
		{ // Question 23
			"q": "ધોવાના સોડાનું રાસાયણિક નામ શું છે ?",
			"a": [
				{
					"option": "સોડિયમ કાર્બોનેટ",
					"correct": true
                },
				{
					"option": "સોડિયમ બાયકાર્બોનેટ",
					"correct": false
                },
				{
					"option": "કૅલ્શિયમ કાર્બોનેટ",
					"correct": false
                },
				{
					"option": "કૅલ્શિયમ ક્લોરાઇડ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોડિયમ કાર્બોનેટ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 24
			"q": "ખાવાના સોડાનું રાસાયણિક નામ શું છે ?",
			"a": [
				{
					"option": "સોડિયમ કાર્બોનેટ",
					"correct": false
                },
				{
					"option": "સોડિયમ બાયકાર્બોનેટ",
					"correct": true
                },
				{
					"option": "કૅલ્શિયમ કાર્બોનેટ",
					"correct": false
                },
				{
					"option": "કૅલ્શિયમ ક્લોરાઇડ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોડિયમ બાયકાર્બોનેટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 25
			"q": "ખાવાના સોડાનું રાસાયણિક સૂત્ર શું છે ?",
			"a": [
				{
					"option": "NaCl",
					"correct": false
                },
				{
					"option": "NaOH",
					"correct": false
                },
				{
					"option": "Na<sub>2</sub>CO<sub>3</sub>",
					"correct": false
                },
				{
					"option": "NaHCO<sub>3</sub>",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: NaHCO<sub>3</sub></p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 26
			"q": "ધોવાના સોડાનું રાસાયણિક સૂત્ર શું છે ?",
			"a": [
				{
					"option": "NaCl",
					"correct": false
                },
				{
					"option": "NaOH",
					"correct": false
                },
				{
					"option": "Na<sub>2</sub>CO<sub>3</sub>",
					"correct": true
                },
				{
					"option": "NaHCO<sub>3</sub>",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: Na<sub>2</sub>CO<sub>3</sub></p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 27
			"q": "કયો વાયુ ચૂનાના નીતર્યા પાણીને દૂધિયું બનાવે છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": true
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 28
			"q": "સોડાવૉટર જેવાં ઠંડા પીણાંમાં કયો વાયુ ઓગળેલો છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": true
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 29
			"q": "કાર્બન ડાયૉક્સાઇડના ઘન સ્વરૂપને શું કહે છે ?",
			"a": [
				{
					"option": "સોડા",
					"correct": false
                },
				{
					"option": "ખાવાનો સોડા",
					"correct": false
                },
				{
					"option": "સૂકો બરફ",
					"correct": true
                },
				{
					"option": "કાર્બોનિક ઍસિડ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂકો બરફ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 30
			"q": "આરસપહાણનું રાસાયણિક નામ શું છે ?",
			"a": [
				{
					"option": "સોડિયમ કાર્બોનેટ",
					"correct": false
                },
				{
					"option": "સોડિયમ ક્લોરાઇડ",
					"correct": false
                },
				{
					"option": "કૅલ્શિયમ કાર્બોનેટ",
					"correct": true
                },
				{
					"option": "કૅલ્શિયમ ક્લોરાઇડ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૅલ્શિયમ કાર્બોનેટ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 31
			"q": "કાર્બન ડાયૉક્સાઇડ વાયુ બનાવવા કૅલ્શિયમ કાર્બોનેટને બદલે શાનો ઉપયોગ કરી શકાય છે ?",
			"a": [
				{
					"option": "સોડિયમ કાર્બોનેટ",
					"correct": true
                },
				{
					"option": "સોડિયમ હાઇડ્રોક્સાઇડ",
					"correct": false
                },
				{
					"option": "કૅલ્શિયમ ઑક્સાઇડ",
					"correct": false
                },
				{
					"option": "કૅલ્શિયમ ક્લોરાઇડ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોડિયમ કાર્બોનેટ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		
		
		
		
		
		
		{ // Question 32
			"q": "કયો વાયુ સૌથી હલકો વાયુ છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇડ્રોજન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 33
			"q": "કયો વાયુ દહનશીલ છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇડ્રોજન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 34
			"q": "કયો ભૌતિક ગુણધર્મ હાઇડ્રોજન માટે સાચો છે ?",
			"a": [
				{
					"option": "દહનશામક",
					"correct": false
                },
				{
					"option": "દહનશીલ",
					"correct": true
                },
				{
					"option": "દહનપોષક",
					"correct": false
                },
				{
					"option": "દહનપોષક, દહનશામક અને દહનશીલ - ત્રણેય",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દહનશીલ</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 35
			"q": "કયો વાયુનો ઉપયોગ બળતણ તરીકે  અને વિદ્યુત મેળવવા થાય છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": true
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇડ્રોજન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 36
			"q": "હવાની ઉપરના વાતાવરનના અભ્યાસ માટે વપરાતા બલૂનમાં કયો વાયુનો ઉપયોગી છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": true
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },				
				{
					"option": "નાઇટ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇડ્રોજન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		
		
		
		
		{ // Question 37
			"q": "એમોનિયમ ક્લોરાઇડ અને સોડિયમ નાઇટ્રાઇટના દ્રાવણને ગરમ કરતાં કયો વાયુ ઉત્પન્ન થાય છે ?",
			"a": [
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "કાર્બન ડાયૉક્સાઇડ",
					"correct": false
                },
				{
					"option": "નાઇટ્રોજન",
					"correct": true
                },
				{
					"option": "હાઇડ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાઇટ્રોજન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		
		{ // Question 38
			"q": "નાઇટ્રોજન ડાયૉક્સાઇડ વાયુની પાણી સાથે પ્રક્રિયા થવાથી શું બને છે ?",
			"a": [
				{
					"option": "કાર્બોનિક ઍસિડ",
					"correct": false
                },
				{
					"option": "સલ્ફ્યુરસ ઍસિડ",
					"correct": false
                },
				{
					"option": "હાઇડ્રોક્લોરિક ઍસિડ",
					"correct": false
                },
				{
					"option": "નાઇટ્રિક ઍસિડ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાઇટ્રિક ઍસિડ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 39
			"q": "કયો વાયુ હવામાં ઑક્સિજનની ક્રિયાશીલતા ઓછી કરે છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": true
                },
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાઈટ્રોજન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       }, 
		{ // Question 40
			"q": "કયો વાયુ નિષ્ક્રિય વાતાવરણ તૈયાર કરવા માટે વપરાય છે ?",
			"a": [
				{
					"option": "કાર્બન ડાયૉક્સાઈડ",
					"correct": false
                },
				{
					"option": "ઑક્સિજન",
					"correct": false
                },
				{
					"option": "હાઈડ્રોજન",
					"correct": false
                },
				{
					"option": "નાઈટ્રોજન",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાઈટ્રોજન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};