// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-8 સ્નાયુ-કંકાલતંત્ર",
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
			"q": "અસ્થિતંત્ર શાનું બનેલું છે ?",
			"a": [
				{
					"option": "હાડપિંજર",
					"correct": false
                },
				{
					"option": "હાડપિંજર અને સ્નાયુ",
					"correct": false
                },
				{
					"option": "સ્નાયુ",
					"correct": false
                },
				{
					"option": "હાડકાં",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાડકાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "નીચેનામાંથી કયા અંગમાં માત્ર કૂર્ચા છે ?",
			"a": [
				{
					"option": "નાક",
					"correct": true
                },
				{
					"option": "છાતીનું પિંજરું",
					"correct": false
                },
				{
					"option": "માથું",
					"correct": false
                },
				{
					"option": "હ્રદય",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાક</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "ખોપરીમાં કેટલાં હાડકાં છે ?",
			"a": [
				{
					"option": "8",
					"correct": true
                },
				{
					"option": "14",
					"correct": false
                },
				{
					"option": "25",
					"correct": false
                },
				{
					"option": "33",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "માથામાં કુલ કેટલાં હાડકાં છે ?",
			"a": [
				{
					"option": "8",
					"correct": false
                },
				{
					"option": "14",
					"correct": false
                },
				{
					"option": "25",
					"correct": false
                },
				{
					"option": "22",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 22</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "છાતીનું પિંજરું કુલ કેટલાં હાડકાંનું બનેલું છે ?",
			"a": [
				{
					"option": "22",
					"correct": false
                },
				{
					"option": "14",
					"correct": false
                },
				{
					"option": "25",
					"correct": true
                },
				{
					"option": "33",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 25</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "કરોડસ્તંભ કુલ કેટલાં હાડકાંની બનેલી છે ?",
			"a": [
				{
					"option": "31",
					"correct": false
                },
				{
					"option": "24",
					"correct": false
                },
				{
					"option": "25",
					"correct": false
                },
				{
					"option": "33",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 33</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "દરેક હાથમાં કુલ કેટલાં હાડકાં છે ?",
			"a": [
				{
					"option": "10",
					"correct": false
                },
				{
					"option": "14",
					"correct": false
                },
				{
					"option": "30",
					"correct": true
                },
				{
					"option": "33",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "સ્કંધમેખલા આગલના ભાગે કોની સાથે જોડાયેલી છે ?",
			"a": [
				{
					"option": "કરોડસ્તંભ",
					"correct": false
                },
				{
					"option": "છાતીનાં હાડકાં",
					"correct": true
                },
				{
					"option": "થાપાનાં હાડકાં",
					"correct": false
                },
				{
					"option": "ડોકનાં હાડકાં",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: છાતીનાં હાડકાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "કયા અંગમાં સ્વયંવર્તી સ્નાયુઓ આવેલા છે ?",
			"a": [
				{
					"option": "હાથ",
					"correct": false
                },
				{
					"option": "પગ",
					"correct": false
                },
				{
					"option": "ડોક",
					"correct": false
                },
				{
					"option": "હ્રદય",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હ્રદય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કરોડસ્તંભમાં આવેલા મણકા જેવાં હાડકાંઓને શું કહે છે ?",
			"a": [
				{
					"option": "સ્કંધમેખલા",
					"correct": false
                },
				{
					"option": "કશેરુકા",
					"correct": true
                },
				{
					"option": "મેખલા",
					"correct": false
                },
				{
					"option": "કૂર્ચા",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કશેરુકા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "મનુષ્યનું હાડપિંજર કેટલાં હાડકાંનું બનેલું છે ?",
			"a": [
				{
					"option": "123",
					"correct": false
                },
				{
					"option": "231",
					"correct": false
                },
				{
					"option": "132",
					"correct": false
                },
				{
					"option": "213",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 213</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "જે સ્નાયુના હલચલન પર આપણું નિયંત્રણ નથી તેવા સ્નાયુને કેવા સ્નાયુ કહે છે ?",
			"a": [
				{
					"option": "સ્વયંવર્તી",
					"correct": true
                },
				{
					"option": "ઇચ્છાવર્તી",
					"correct": false
                },
				{
					"option": "પરવર્તી",
					"correct": false
                },
				{
					"option": "યંત્રવર્તી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વયંવર્તી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "માત્ર કૂર્ચાનું બનેલું હોય તેવું શરીરના અંગનું નામ કયું નથી ?",
			"a": [
				{
					"option": "નાક",
					"correct": false
                },
				{
					"option": "કાન",
					"correct": false
                },
				{
					"option": "શ્વાસવાહિની",
					"correct": false
                },
				{
					"option": "પગ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પગ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "કંકાલતંત્ર શાનું બનેલું છે ?",
			"a": [
				{
					"option": "હાડપિંજરનું",
					"correct": false
                },
				{
					"option": "સ્નાયુનું",
					"correct": false
                },
				{
					"option": "હાડકાં અને કૂર્ચાનું",
					"correct": true
                },
				{
					"option": "પાંસળીનું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાડકાં અને કૂર્ચાનું</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "ખોપરીનાં હાડકાં કયા પ્રકારના સાંધાથી જોડાયેલા છે ?",
			"a": [
				{
					"option": "ચલ",
					"correct": false
                },
				{
					"option": "અચલ",
					"correct": true
                },
				{
					"option": "અખંડ",
					"correct": false
                },
				{
					"option": "ખંS",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અચલ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "કોણી આગળનો સાંધો કયા પ્રકારનો સાંધો છે ?",
			"a": [
				{
					"option": "ચલ",
					"correct": true
                },
				{
					"option": "અચલ",
					"correct": false
                },
				{
					"option": "અખંડ",
					"correct": false
                },
				{
					"option": "ખંS",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચલ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "કેટલાંક હાડકાં વળી શકે તેવા સાંધાથી જોડાયેલાં હોય છે, જેને કેવા સાંધા કહે છે ?",
			"a": [
				{
					"option": "ચલ",
					"correct": true
                },
				{
					"option": "અચલ",
					"correct": false
                },
				{
					"option": "અખંડ",
					"correct": false
                },
				{
					"option": "ખંS",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચલ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "મગજનું રક્ષણ કોણ કરે છે ?",
			"a": [
				{
					"option": "હ્રદય",
					"correct": false
                },
				{
					"option": "છાતીનું પિંજરું",
					"correct": false
                },
				{
					"option": "કરોડસ્તંભ",
					"correct": false
                },
				{
					"option": "ખોપરી",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખોપરી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "દરેક પગમાં કુલ કેટલાં હાડકાં હોય છે ?",
			"a": [
				{
					"option": "10",
					"correct": false
                },
				{
					"option": "14",
					"correct": false
                },
				{
					"option": "30",
					"correct": true
                },
				{
					"option": "33",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "શરીરનું સૌથી લાંબુ અને મજબૂત હાડકું કયું છે ?",
			"a": [
				{
					"option": "કોણીનું હાડકું",
					"correct": false
                },
				{
					"option": "કરોડસ્તંભનું હાડકું",
					"correct": false
                },
				{
					"option": "સાથળનું હાડકું",
					"correct": true
                },
				{
					"option": "ખોપરીનું હાડકું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાથળનું હાડકું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};