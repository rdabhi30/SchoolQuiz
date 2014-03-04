// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 2  પૃથ્વી ફરે છે ",
        "subject": "સામાજિક વિજ્ઞાન",
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
            "q": "પૃથ્વીની ગતિ કેટલા પ્રકારની છે ?",
            "a": [
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": true
                },
                {
                    "option": "1",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "પૃથ્વી પોતાની ધરી પર ફરે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "પરિક્રમણ",
                    "correct": false
                },
                {
                    "option": "પ્રદક્ષિણા",
                    "correct": false
                },
                {
                    "option": "પરિક્રમા",
                    "correct": false
                },
                {
                    "option": "પરિભ્રમણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરિભ્રમણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "પૃથ્વી સૂર્યની આસપાસ ફરે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "પરિભ્રમણ",
                    "correct": false
                },
                {
                    "option": "ધરીભ્રમણ",
                    "correct": false
                },
                {
                    "option": "પરિક્રમણ",
                    "correct": true
                },
                {
                    "option": "દૈનિક ગતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરિક્રમણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "પૃથ્વીને પોતાની ધરી પર એક આંટો પૂરો કરતા કેટલો સમય લાગે છે ?",
            "a": [
                {
                    "option": "24 કલાક",
                    "correct": true
                },
                {
                    "option": "21 કલાક",
                    "correct": false
                },
                {
                    "option": "23 કલાક",
                    "correct": false
                },
                {
                    "option": "25 કલાક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 24 કલાક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "પૃથ્વીને સૂર્યની આસપાસ એક આંટો પૂરો કરતા કેટલો સમય લાગે ?",
            "a": [
                {
                    "option": "360 દિવસ",
                    "correct": false
                },
                {
                    "option": "367 દિવસ",
                    "correct": false
                },
                {
                    "option": "365 દિવસ",
                    "correct": true
                },
                {
                    "option": "368 દિવસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 365 દિવસ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "પૃથ્વીને નિરંતર ફરવા માટે એક કલ્પિત માર્ગ નક્કી થયેલ છે, આ માર્ગને શું કહે છે ?",
            "a": [
                {
                    "option": "દક્ષા",
                    "correct": false
                },
                {
                    "option": "કક્ષા",
                    "correct": true
                },
                {
                    "option": "રક્ષા",
                    "correct": false
                },
                {
                    "option": "બક્ષા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કક્ષા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ભારતમાં દિવસ હોય ત્યારે આમાંથી કયા દેશમાં રાત હશે ?",
            "a": [
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ આફ્રિકા",
                    "correct": false
                },
                {
                    "option": "જાપાન",
                    "correct": false
                },
                {
                    "option": "કૅનેડા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૅનેડા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "પૃથ્વી પોતાની ધરી પર કઈ દિશામાંથી કઈ દિશા તરફ ફરે છે ?",
            "a": [
                {
                    "option": "પશ્ચિમથી પૂર્વ",
                    "correct": true
                },
                {
                    "option": "પૂર્વથી પશ્ચિમ",
                    "correct": false
                },
                {
                    "option": "ઉત્તરથી દક્ષિણ",
                    "correct": false
                },
                {
                    "option": "દક્ષિણથી ઉત્તર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પશ્ચિમથી પૂર્વ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "પૃથ્વી પોતાની ધરી પર ફરે છે એટલે આમાંથી શું થાય છે ?",
            "a": [
                {
                    "option": "ઋતુ પરિવર્તન",
                    "correct": false
                },
                {
                    "option": "દિવસ-રાત લાંબા-ટૂંકા",
                    "correct": false
                },
                {
                    "option": "દિવસ-રાત ",
                    "correct": true
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિવસ-રાત </p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "પૃથ્વી પોતાની ધરી પર કલાકના કેટલા કિમીની ઝડપે ફરે છે ?",
            "a": [
                {
                    "option": "1760 કિમી",
                    "correct": false
                },
                {
                    "option": "1670 કિમી",
                    "correct": true
                },
                {
                    "option": "1570 કિમી",
                    "correct": false
                },
                {
                    "option": "1600 કિમી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1670 કિમી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "પૃથ્વી સૂર્યની આસપાસ પ્રતિમિનિટ કેટલા કિમીની ઝડપે ફરે છે ?",
            "a": [
                {
                    "option": "1670 કિમી",
                    "correct": true
                },
                {
                    "option": "1570 કિમી",
                    "correct": false
                },
                {
                    "option": "1600 કિમી",
                    "correct": false
                },
                {
                    "option": "1760 કિમી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1670 કિમી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પૃથ્વી પર ઋતુ બદલાય છે, કારણ કે . . . ",
            "a": [
                {
                    "option": "સૂર્ય પૃથ્વીની આસપાસ ફરે છે.",
                    "correct": false
                },
                {
                    "option": "સૂર્ય પોતાની ધરી પર ફરે છે.",
                    "correct": false
                },
                {
                    "option": "પૃથ્વી સૂર્યનું પરિક્રમણ કરે છે.",
                    "correct": true
                },
                {
                    "option": "પૃથ્વી પોતાની ધરી પર ફરે છે.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૃથ્વી સૂર્યનું પરિક્રમણ કરે છે.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "પૃથ્વી પોતાની ધરી પર કેટલા અંશનો ખૂણો બનાવે છે ?",
            "a": [
                {
                    "option": "45.5<sup>0</sup>નો",
                    "correct": false
                },
                {
                    "option": "66.5<sup>0</sup>નો",
                    "correct": false
                },
                {
                    "option": "90<sup>0</sup>નો",
                    "correct": false
                },
                {
                    "option": "23.5<sup>0</sup>નો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 23.5<sup>0</sup>નો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "પૃથ્વી તેની કક્ષાની સપાટી સાથે કેટલા અંશનો ખૂણો બનાવે છે ?",
            "a": [
                {
                    "option": "45.5<sup>0</sup>નો",
                    "correct": false
                },
                {
                    "option": "66.5<sup>0</sup>નો",
                    "correct": true
                },
                {
                    "option": "90<sup>0</sup>નો",
                    "correct": false
                },
                {
                    "option": "23.5<sup>0</sup>નો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 66.5<sup>0</sup>નો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "21 જૂને સૂર્યના કિરણો કયા વૃત્ત પર સીધાં પડે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત પર",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત પર",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત પર",
                    "correct": true
                },
                {
                    "option": "દક્ષિણ ધ્રુવવૃત્ત પર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્કવૃત્ત પર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "22 ડિસેમ્બરે સૂર્યના કિરણો કયા વૃત્ત પર સીધાં પડે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત પર",
                    "correct": true
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત પર",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત પર",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત પર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકરવૃત્ત પર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "યુરોપના કયા દેશમાં રાત્રિના 12વાગ્યે પણ સૂર્ય જોવા મળે છે ?",
            "a": [
                {
                    "option": "જર્મની",
                    "correct": false
                },
                {
                    "option": "નોર્વે",
                    "correct": true
                },
                {
                    "option": "ઈટાલી",
                    "correct": false
                },
                {
                    "option": "ગ્રીસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નોર્વે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ઉનાળામાં દિવસ-રાત અનુક્રમે કેવા હોય છે ?",
            "a": [
                {
                    "option": "લાંબો-ટૂંકી",
                    "correct": true
                },
                {
                    "option": "ટૂંકો-લાંબી",
                    "correct": false
                },
                {
                    "option": "સરખા",
                    "correct": false
                },
                {
                    "option": "ટૂંકો-ટૂંકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાંબો-ટૂંકી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "શિયાળામાં દિવસ-રાત અનુક્રમે કેવા હોય છે ?",
            "a": [
                {
                    "option": "ટૂંકો-લાંબી",
                    "correct": true
                },
                {
                    "option": "લાંબો-ટૂંકી",
                    "correct": false
                },
                {
                    "option": "લાંબો-લાંબી",
                    "correct": false
                },
                {
                    "option": "સરખા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ટૂંકો-લાંબી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "21મી માર્ચ થી 23મી સપ્ટેમ્બર સુધી ઉત્તર ગોળાર્ધમાં કઈ ઋતુ હોય છે ?",
            "a": [
                {
                    "option": "શિયાળો",
                    "correct": false
                },
                {
                    "option": "ચોમાસું",
                    "correct": false
                },
                {
                    "option": "ઉનાળો",
                    "correct": true
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉનાળો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "જે વૃત્ત પર 21 જૂને સૂર્યના કિરણો સીધા પડે છે, ત્યાં અજવાળું કેટલા કલાક રહેતું હશે ?",
            "a": [
                {
                    "option": "10 કલાક",
                    "correct": false
                },
                {
                    "option": "11 કલાક",
                    "correct": false
                },
                {
                    "option": "14 કલાક",
                    "correct": true
                },
                {
                    "option": "12 કલાક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 14 કલાક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "જ્યાં સૂર્યના કિરણો સીધા પડે છે ત્યાં મુખ્યત્વે કઈ ઋતુ અનુભવાતી હશે ?",
            "a": [
                {
                    "option": "શિયાળો",
                    "correct": false
                },
                {
                    "option": "ઉનાળો",
                    "correct": true
                },
                {
                    "option": "ચોમાસુ",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉનાળો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "વિષુવવૃત્તથી 66.5<sup>0</sup> ઉત્તરે આવેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": true
                },
                {
                    "option": "દક્ષિણ ધ્રુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર ધ્રુવવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 24
            "q": "વિષુવવૃત્તથી 66.5<sup>0</sup> દક્ષિણે આવેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ધ્રુવવૃત્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ ધ્રુવવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 25
            "q": "વિષુવવૃત્તથી 23.5<sup>0</sup> ઉત્તરે આવેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": true
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "અયનવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્કવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "વિષુવવૃત્તથી 23.5<sup>0</sup> દક્ષિણે આવેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "અયનવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકરવૃત્ત</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "0<sup>0</sup> અક્ષાંશવૃત્તને શું કહે છે ?",
            "a": [
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": true
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "અયનવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિષુવવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 28
            "q": "21મી માર્ચ થી 23મી સપ્ટેમ્બર સુધી દક્ષિણ ગોળાર્ધમાં કઈ ઋતુ હોય છે ?",
            "a": [
                {
                    "option": "શિયાળો",
                    "correct": true
                },
                {
                    "option": "ચોમાસું",
                    "correct": false
                },
                {
                    "option": "ઉનાળો",
                    "correct": false
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શિયાળો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 29
            "q": "ભારતમાં દિવસ-રાત સરખા ક્યારે હોય છે ?",
            "a": [
                {
                    "option": "21 માર્ચ",
                    "correct": true
                },
                {
                    "option": "21 જૂન",
                    "correct": false
                },
                {
                    "option": "22 ડિસેમ્બર",
                    "correct": false
                },
                {
                    "option": "2 જુલાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 21 માર્ચ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 30
            "q": "ભારતમાં દિવસ લાંબો અને રાત ટૂંકી ક્યારે હોય છે ?",
            "a": [
                {
                    "option": "21 માર્ચ",
                    "correct": false
                },
                {
                    "option": "21 જૂન",
                    "correct": true
                },
                {
                    "option": "22 ડિસેમ્બર",
                    "correct": false
                },
                {
                    "option": "23 સપ્ટેમ્બર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 21 જૂન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 31
            "q": "ભારતમાં દિવસ ટૂંકો અને રાત લાંબી ક્યારે હોય છે ?",
            "a": [
                {
                    "option": "21 માર્ચ",
                    "correct": false
                },
                {
                    "option": "21 જૂન",
                    "correct": false
                },
                {
                    "option": "22 ડિસેમ્બર",
                    "correct": true
                },
                {
                    "option": "23 સપ્ટેમ્બર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 22 ડિસેમ્બર</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
    ]
};
