// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ - 6 ઊર્જાનાં સ્વરૂપો",
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
			"q": "પવન અને વહેતા પાણી સાથે કઈ ઊર્જા સંકળાયેલી છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જા",
					"correct": true
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": false
				},
				{
					"option": "ઉષ્મા-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગતિ-ઊર્જા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "બંદુકમાંથી છૂટેલી ગોળી કઈ ઊર્જા ધરાવે છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જા",
					"correct": true
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": false
				},
				{
					"option": "ઉષ્મા-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગતિ-ઊર્જા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "ચાવી આપેલ ઘડિયાળમાં ઊર્જા કયા સ્વરૂપે સંગ્રહાયેલી છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": true
				},
				{
					"option": "ગતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": false
				},
				{
					"option": "ઉષ્મા-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્થિતિ-ઊર્જા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "કોલસામાં ઊર્જા ક્યા સ્વરૂપે રહેલી છે ?",
			"a": [
				{
					"option": "યાંત્રિક-ઊર્જા",
					"correct": false
				},
				{
					"option": "પ્રકાશ-ઊર્જા",
					"correct": false
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": true
				},
				{
					"option": "ઉષ્મા-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાસાયણિક ઊર્જા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "ઇલેક્ટ્રીક બલ્બમાં વપરાતી ઊર્જા અને મળતી ઊર્જા અનુક્રમે કયા સ્વરૂપની છે ? ",
			"a": [
				{
					"option": "રાસાયણિક-ઊર્જા, ઉષ્મા-ઊર્જા",
					"correct": false
				},
				{
					"option": "વિદ્યુત-ઊર્જા, પ્રકાશ-ઊર્જા",
					"correct": true
				},
				{
					"option": "રાસાયણિક ઊર્જા, પ્રકાશ-ઊર્જા",
					"correct": false
				},
				{
					"option": "ઉષ્મા-ઊર્જા, પ્રકાશ-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિદ્યુત-ઊર્જા, પ્રકાશ-ઊર્જા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નદી પરના બંધમાં રહેલા પાણીમાં કઈ ઊર્જા રહેલી છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": true
				},
				{
					"option": "ગતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": false
				},
				{
					"option": "વિદ્યુત-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્થિતિ-ઊર્જા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "ખોરાકમાં સંગ્રહાયેલ ઊર્જા કયા સ્વરૂપે હોય છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "યાંત્રિક-ઊર્જા",
					"correct": false
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": true
				},
				{
					"option": "ઉષ્મા-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાસાયણિક ઊર્જા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "કળીચૂનામાં ઊર્જા ક્યા સ્વરૂપે રહેલી હોય છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": true
				},
				{
					"option": "યાંત્રિક-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાસાયણિક ઊર્જા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "વિદ્યુતકોષ(સેલ)માં ઊર્જા કયા સ્વરૂપે રહેલી હોય છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": true
				},
				{
					"option": "યાંત્રિક-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાસાયણિક ઊર્જા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "વિદ્યુત પંખો કઈ ઊર્જાનો ઉપયોગ કરે છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "વિદ્યુત-ઊર્જા",
					"correct": true
				},
				{
					"option": "યાંત્રિક-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિદ્યુત-ઊર્જા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "ફટાકડા ફૂટે ત્યારે રાસાયણિક ઊર્જાનું શામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "વિદ્યુત-ઊર્જા",
					"correct": false
				},
				{
					"option": "યાંત્રિક-ઊર્જા",
					"correct": false
				},
				{
					"option": "ધ્વનિ-ઊર્જા",
					"correct": true
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધ્વનિ-ઊર્જા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "બંધમાંથી પાણીનો પ્રવાહ ટર્બાઇનના પાંખિયાં પર પડતાં તે ફરવા લાગે છે. આમાં ઊર્જાનું રૂપાંતર કયું છે ? ",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જાનું ગતિ-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જાનું યાંત્રિક-ઊર્જામાં",
					"correct": true
				},
				{
					"option": "યાંત્રિક-ઊર્જાનું વિદ્યુત-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જાનું વિદ્યુત-ઊર્જામાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગતિ-ઊર્જાનું યાંત્રિક-ઊર્જામાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "ધનુષ્યમાંથી છૂતેલું તીર કઈ ઊર્જા ધરાવે છે ?",
			"a": [
				{
					"option": "સ્થિતિ-ઊર્જા",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જા",
					"correct": true
				},
				{
					"option": "રાસાયણિક ઊર્જા",
					"correct": false
				},
				{
					"option": "યાંત્રિક-ઊર્જા",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગતિ-ઊર્જા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "યાંત્રિક-ઊર્જાનું વિદ્યુત-ઊર્જામાં રૂપાંતર કરતું સાધન કયું છે ?",
			"a": [
				{
					"option": "વિદ્યુત પંખો",
					"correct": false
				},
				{
					"option": "ટર્બાઇન",
					"correct": false
				},
				{
					"option": "જનરેટર",
					"correct": true
				},
				{
					"option": "વિદ્યુતકોષ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જનરેટર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "બલ્બ ચાલુ હોય ત્યારે કઈ ઊર્જાનું કઈ ઊર્જામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "વિદ્યુત-ઊર્જાનું પ્રકાશ-ઊર્જામાં",
					"correct": true
				},
				{
					"option": "ગતિ-ઊર્જાનું વિદ્યુત-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "યાંત્રિક-ઊર્જાનું વિદ્યુત-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જાનું યાંત્રિક-ઊર્જામાં",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિદ્યુત-ઊર્જાનું પ્રકાશ-ઊર્જામાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "સૂતળી બૉમ્બ ફૂટે ત્યારે કઈ ઊર્જાનું કઈ ઊર્જામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "રાસાયણિક-ઊર્જાનું પ્રકાશ-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "રાસાયણિક-ઊર્જાનું ધ્વનિ-ઊર્જામાં",
					"correct": true
				},
				{
					"option": "યાંત્રિક-ઊર્જાનું વિદ્યુત-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જાનું યાંત્રિક-ઊર્જામાં",
					"correct": false
				}
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાસાયણિક-ઊર્જાનું ધ્વનિ-ઊર્જામાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "પવનચક્કી ફરે છે ત્યારે કઈ ઊર્જાનું કઈ ઊર્જામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "ગતિ-ઊર્જાનું પ્રકાશ-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "રાસાયણિક-ઊર્જાનું ધ્વનિ-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "યાંત્રિક-ઊર્જાનું વિદ્યુત-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "ગતિ-ઊર્જાનું યાંત્રિક-ઊર્જામાં",
					"correct": true
				}
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગતિ-ઊર્જાનું યાંત્રિક-ઊર્જામાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "કોલસો સળગે ત્યારે કઈ ઊર્જાનું કઈ ઊર્જામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "રાસાયણિક-ઊર્જાનું પ્રકાશ-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "રાસાયણિક-ઊર્જાનું ધ્વનિ-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "યાંત્રિક-ઊર્જાનું વિદ્યુત-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "રાસાયણિક-ઊર્જાનું ઉષ્મા-ઊર્જામાં",
					"correct": true
				}
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાસાયણિક-ઊર્જાનું ઉષ્મા-ઊર્જામાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "વનસ્પતિ પોતાનો ખોરાક બનાવે ત્યારે કઈ ઊર્જાનું કઈ ઊર્જામાં રૂપાંતર થાય છે ?",
			"a": [
				{
					"option": "પ્રકાશ-ઊર્જાનું રાસાયણિક-ઊર્જામાં",
					"correct": true
				},
				{
					"option": "રાસાયણિક-ઊર્જાનું ધ્વનિ-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "પ્રકાશ-ઊર્જાનું વિદ્યુત-ઊર્જામાં",
					"correct": false
				},
				{
					"option": "ઉષ્મા-ઊર્જાનું રાસાયણિક-ઊર્જામાં",
					"correct": false
				}
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રકાશ-ઊર્જાનું રાસાયણિક-ઊર્જામાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "ઊર્જા---કરી શકાતી નથી કે તેનો --- થતો નથી. ઊર્જાનું એક સ્વરૂપમાંથી બીજા સ્વરૂપમાં રૂપાંતર કરી શકાય છે. વિશ્વમાં ઊર્જાનો કુલ જથ્થો --- રહે છે. યોગ્ય વિકલ્પથી ખાલી જગ્યા પૂરો.",
			"a": [
				{
					"option": "ઉપયોગ, નાશ, અચળ",
					"correct": false
				},
				{
					"option": "ઉત્પન્ન, બચાવ, ચલ",
					"correct": false
				},
				{
					"option": "ઉત્પન્ન, નાશ, અચળ",
					"correct": true
				},
				{
					"option": "ઉપયોગ, બચાવ, ચલ",
					"correct": false
				} // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્પન્ન, નાશ, અચળ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       } // no comma here 
    ]
};