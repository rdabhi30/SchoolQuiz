// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 3 પદાર્થની અવસ્થાઓ",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
		"standard": "6",
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
			"q": "પદાર્થની કેટલી અવસ્થાઓ છે ?",
			"a": [
				{
					"option": "એક",
					"correct": false
				},
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
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્રણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "કઈ અવસ્થામાં પદાર્થેને નિશ્ચિત આકાર હોય છે ?",
			"a": [
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "ઘન",
					"correct": true
				},
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "કઈ અવસ્થામાં પદાર્થેને ચોક્કસ કદ હોતુ નથી ?",
			"a": [
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": true
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },

		{ // Question 4
			"q": "કઈ અવસ્થામાં અણુઓ ખૂબ જ નજીક-નજીક ગોઠવાયેલા હોય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": true
				},
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },

		{ // Question 5
			"q": "કઈ અવસ્થામાં અણુઓ છૂટાછવાયા ગોઠવાયેલા હોય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": true
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },

		{ // Question 6
			"q": "કઈ અવસ્થામાં પદાર્થ નિશ્ચિત આકાર ધરાવતો નથી, પરંતુ નિશ્ચિત કદ ધરાવે છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "પ્રવાહી",
					"correct": true
				},
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રવાહી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 7
			"q": "કઈ અવસ્થામાં પદાર્થ પોતાને મળતી બધી જગ્યામાં ફેલાઈ જાય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": true
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 8
			"q": "કોઇ પણ પદાર્થે રોકેલી જગ્યાને શું કહે છે ?",
			"a": [
				{
					"option": "કદ",
					"correct": true
				},
				{
					"option": "વજન",
					"correct": false
				},
				{
					"option": "દળ",
					"correct": false
				},
				{
					"option": "આકાર",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કદ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 9
			"q": "કઈ અવસ્થામાં પદાર્થ સૌથી વધુ દબનીય હોય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": true
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કઈ અવસ્થામાં પદાર્થના અણુઓ વચ્ચે આકર્ષણ બળ સૌથી વધુ હોય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": true
				},
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 11
			"q": "કઈ અવસ્થામાં પદાર્થના અણુઓ વચ્ચે આકર્ષણ બળ સૌથી ઓછુ હોય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": true
				},
				{
					"option": "ઘન, પ્રવાહી, અને વાયુ - ત્રણેય",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "ઘન પદાર્થેને ગરમી આપતા તેનું કઈ અવસ્થામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "પ્રવાહી",
					"correct": true
				},
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "એક પણ નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રવાહી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પ્રવાહી પદાર્થેને ગરમી આપતા તેનું કઈ અવસ્થામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": true
				},
				{
					"option": "એક પણ નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પ્રવાહી પદાર્થેમાંથી ગરમી શોષી લેતા તેનું કઈ અવસ્થામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": true
				},
				{
					"option": "પ્રવાહી",
					"correct": false
				},
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "એક પણ નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઘન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 13
			"q": "વાયુ પદાર્થેમાંથી ગરમી શોષી લેતા તેનું કઈ અવસ્થામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "ઘન",
					"correct": false
				},
				{
					"option": "પ્રવાહી",
					"correct": true
				},
				{
					"option": "વાયુ",
					"correct": false
				},
				{
					"option": "એક પણ નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાયુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "નીચેના પૈકી કયો પદાર્થ પ્રવાહી અવસ્થા ધરાવે છે ?",
			"a": [
				{
					"option": "વરાળ",
					"correct": false
				},
				{
					"option": "પાણી",
					"correct": true
				},
				{
					"option": "લોખંડ",
					"correct": false
				},
				{
					"option": "પારો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 14
			"q": "નીચેના પૈકી કયો પદાર્થ ઘન અવસ્થા ધરાવે છે ?",
			"a": [
				{
					"option": "વરાળ",
					"correct": false
				},
				{
					"option": "પાણી",
					"correct": false
				},
				{
					"option": "લોખંડ",
					"correct": true
				},
				{
					"option": "પારો",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોખંડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 14
			"q": "નીચેના પૈકી કયો પદાર્થ વાયુ અવસ્થા ધરાવે છે ?",
			"a": [
				{
					"option": "વરાળ",
					"correct": true
				},
				{
					"option": "પાણી",
					"correct": false
				},
				{
					"option": "કાગળ",
					"correct": false
				},
				{
					"option": "વિમાન",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વરાળ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 12
			"q": "બરફને ગરમી આપતા તેનું કઈ અવસ્થામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "બરફ",
					"correct": false
				},
				{
					"option": "પાણી",
					"correct": true
				},
				{
					"option": "વરાળ",
					"correct": false
				},
				{
					"option": "એક પણ નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પાણી પદાર્થેને ગરમી આપતા તેનું કઈ અવસ્થામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "બરફ",
					"correct": false
				},
				{
					"option": "પાણી",
					"correct": false
				},
				{
					"option": "વરાળ",
					"correct": true
				},
				{
					"option": "એક પણ નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વરાળ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 13
			"q": "પાણીમાંથી ગરમી શોષી લેતા તેનું કઈ અવસ્થામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "બરફ",
					"correct": true
				},
				{
					"option": "પાણી",
					"correct": false
				},
				{
					"option": "વરાળ",
					"correct": false
				},
				{
					"option": "એક પણ નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બરફ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 13
			"q": "વરાળમાંથી ગરમી શોષી લેતા તેનું કઈ અવસ્થામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "બરફ",
					"correct": false
				},
				{
					"option": "પાણી",
					"correct": true
				},
				{
					"option": "વરાળ",
					"correct": false
				},
				{
					"option": "એક પણ નહીં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
    ]
};