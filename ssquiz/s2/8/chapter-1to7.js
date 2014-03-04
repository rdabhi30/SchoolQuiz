// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પાઠ-1 થી 7",
        "subject": "સામાજિક વિજ્ઞાન",
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
     		"q": "બ્રહ્મોસમાજના સ્થાપક કોણ હતા ?",
            "a": [
                {
                    "option": "રાજા રામમોહનરાય",
                    "correct": true
                },
                {
                    "option": "ન્યાયમૂર્તિ રાનડે",
                    "correct": false
                },
                {
                    "option": "દયાનંદ સરસ્વતી",
                    "correct": false
                },
                {
                    "option": "સ્વામી વિવેકાનંદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાજા રામમોહનરાય </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "રાજા રામમોહનરાયે બંગાળી ભાષામાં ક્યું સમાચારપત્ર શરૂ કર્યું હતું ?",
            "a": [
                {
                    "option": "આનંદ પત્રિકા",
                    "correct": false
                },
                {
                    "option": "સુબોધ પત્રિકા",
                    "correct": false
                },
                {
                    "option": "તત્ત્વબોધિની પત્રિકા",
                    "correct": false
                },
                {
                    "option": "સંવાદકૌમુદી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સંવાદકૌમુદી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ભારતમાં સતીપ્રથા પર પ્રતિબંધ મૂકતો કાયદો કોણે ઘડ્યો ?",
            "a": [
                {
                    "option": "લોર્ડ વેલેસ્લીએ",
                    "correct": false
                },
                {
                    "option": "લોર્ડ વિલિયમ બૅન્ટિંકે ",
                    "correct": true
                },
                {
                    "option": "લોર્ડ ડેલહાઉસીએ",
                    "correct": false
                },
                {
                    "option": "લોર્ડ કર્ઝને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોર્ડ વિલિયમ બૅન્ટિંકે </p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "રાજા રામમોહનરાયે ફારસી ભાષામાં ક્યું સમાચાર પત્ર શરૂ કર્યું હતું ?",
            "a": [
                {
                    "option": "સંવાદકૌમુદી",
                    "correct": false
                },
                {
                    "option": "આનંદ પત્રિકા",
                    "correct": false
                },
                {
                    "option": "મિરાત-ઉલ-અખબાર",
                    "correct": true
                },
                {
                    "option": "તત્ત્વબોધિની પત્રિકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મિરાત-ઉલ-અખબાર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "દયાનંદ સરસ્વતીએ મથુરામાં કોની પાસે હિંદુ શાસ્ત્રોનો અભ્યાસ કર્યો હતો ?",
            "a": [
                {
                    "option": "સ્વામી વિવેકાનંદ",
                    "correct": false
                },
                {
                    "option": "સ્વામી સહજાનંદ",
                    "correct": false
                },
                {
                    "option": "સ્વામી રામકૃષ્ણ પરમહંસ",
                    "correct": false
                },
                {
                    "option": "સ્વામી વિરજાનંદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સ્વામી વિરજાનંદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "દયાનંદ સરસ્વતીએ ક્યો ગ્રંથ લખ્યો ?",
            "a": [
                {
                    "option": "સુબોધ પત્રિકા",
                    "correct": false
                },
                {
                    "option": "સત્યાર્થ પ્રકાશ",
                    "correct": true
                },
                {
                    "option": "તત્ત્વબોધિની પત્રિકા",
                    "correct": false
                },
                {
                    "option": "સંવાદકૌમુદી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સત્યાર્થ પ્રકાશ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "આર્ય સમાજની સ્થાપના કોણે કરી ?",
            "a": [
                {
                    "option": "રાજા રામમોહનરાય",
                    "correct": false
                },
                {
                    "option": "સ્વામી વિવેકાનંદ ",
                    "correct": false
                },
                {
                    "option": "દયાનંદ સરસ્વતી ",
                    "correct": true
                },
                {
                    "option": "ઇશ્વરચંન્દ્ર વિદ્યાસાગરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દયાનંદ સરસ્વતી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "હરદ્વાર પાસે 'કાંગડી' ગુરુકુળ કોણે સ્થાપ્યું ?",
            "a": [
                {
                    "option": "લાલા લજપતરાયે",
                    "correct": false
                },
                {
                    "option": "સ્વામી શ્રદ્ધાનંદે",
                    "correct": true
                },
                {
                    "option": "પંડિત ગુરુદત્તે",
                    "correct": false
                },
                {
                    "option": "લાલા હંસરાજે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સ્વામી શ્રદ્ધાનંદે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કોલકાતા નજીક આવેલા દક્ષિણેશ્વર મંદિરમાં કાલીમાતાના પૂજારી કોણ હતા ?",
            "a": [
                {
                    "option": "સ્વામી પરમાનંદ",
                    "correct": false
                },
                {
                    "option": "સ્વામી વિવેકાનંદ ",
                    "correct": false
                },
                {
                    "option": "સ્વામી રામકૃષ્ણ પરમહંસ",
                    "correct": true
                },
                {
                    "option": "સ્વામી સરસ્વતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સ્વામી રામકૃષ્ણ પરમહંસ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "સ્વામી વિવેકાનંદનું મૂળ નામ શું હતું ?",
            "a": [
                {
                    "option": "સુરેન્દ્રનાથ",
                    "correct": false
                },
                {
                    "option": "રવીન્દ્રનાથ",
                    "correct": false
                },
                {
                    "option": "રામકૃષ્ણ",
                    "correct": false
                },
                {
                    "option": "નરેદ્રનાથ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નરેદ્રનાથ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "સ્વામી વિવેકાનંદના ગુરુનું નામ શું હતું ?",
            "a": [
                {
                    "option": "રાધાકૃષ્ણ",
                    "correct": false
                },
                {
                    "option": "સ્વામી રામકૃષ્ણ પરમહંસ",
                    "correct": true
                },
                {
                    "option": "સ્વામી વિરજાનંદ",
                    "correct": false
                },
                {
                    "option": "ગોપીકૃષ્ણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સ્વામી રામકૃષ્ણ પરમહંસ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "સ્વામી વિવેકાનંદે યુ.એસ.એ.ના ક્યા શહેરમાં યોજાયેલી વિશ્વ ધર્મપરિષદમાં હાજરી આપી હતી ?",
            "a": [
                {
                    "option": "શિકાગો",
                    "correct": true
                },
                {
                    "option": "ન્યૂયૉર્ક",
                    "correct": false
                },
                {
                    "option": "વૉશિંગ્ટન",
                    "correct": false
                },
                {
                    "option": "લૉસ ઍંજિલીઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શિકાગો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "રામકૃષ્ણ મિશનના સ્થાપક કોણ હતા ?",
            "a": [
                {
                    "option": "દયાનંદ સરસ્વતી",
                    "correct": false
                },
                {
                    "option": "સ્વામી વિવેકાનંદ",
                    "correct": true
                },
                {
                    "option": "સ્વામી વિરજાનંદ",
                    "correct": false
                },
                {
                    "option": "સ્વામી રામકૃષ્ણ પરમહંસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સ્વામી વિવેકાનંદ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "સૈયદ અહમદખાને અને શરીઅતુલ્લાએ કયું આંદોલન ચલાવ્યું હતું ?",
            "a": [
                {
                    "option": "જનાબી",
                    "correct": false
                },
                {
                    "option": "અકાલી",
                    "correct": false
                },
                {
                    "option": "ઇન્કલાબી",
                    "correct": false
                },
                {
                    "option": "વહાબી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વહાબી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "અલીગઢમાં મુસ્લિમ કૉલેજની સ્થાપના કોણે કરી ?",
            "a": [
                {
                    "option": "સર સૈયદ અહમદખાને",
                    "correct": true
                },
                {
                    "option": "શરીઅતુલ્લાએ",
                    "correct": false
                },
                {
                    "option": "નવાબ અબ્દુલ લતીફે",
                    "correct": false
                },
                {
                    "option": "ઔરંગઝેબે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સર સૈયદ અહમદખાને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "શીખોએ પાશ્ચાત્ય શિક્ષણ આપવા માટે કઈ કૉલેજની સ્થાપના કરી ?",
            "a": [
                {
                    "option": "સહાયકારી કૉલેજ",
                    "correct": false
                },
                {
                    "option": "ખાલસા કૉલેજ",
                    "correct": true
                },
                {
                    "option": "ગુજરાત કૉલેજ",
                    "correct": false
                },
                {
                    "option": "મુસ્લીમ કૉલેજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખાલસા કૉલેજ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "કોના પ્રયાસોને લીધે અંગ્રેજ સરકારે ઇ.સ. 1891 માં લગ્ન માટે પુખ્ત વયનો કાયદો ઘડ્યો ?",
            "a": [
                {
                    "option": "બહેરામજી મલબારીના",
                    "correct": true
                },
                {
                    "option": "મહર્ષિ કર્વેના",
                    "correct": false
                },
                {
                    "option": "કે. આર. કામાના",
                    "correct": false
                },
                {
                    "option": "દાદાભાઈ નવરોજજીના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બહેરામજી મલબારીના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ઇ.સ. 1857 માં પૂણેમાં કોણે કન્યાશાળા શરૂ કરી ?",
            "a": [
                {
                    "option": "ઇશ્વરચંન્દ્ર વિદ્યાસાગરે",
                    "correct": false
                },
                {
                    "option": "જ્યોતિબા ફૂલેએ",
                    "correct": true
                },
                {
                    "option": "ન્યાયમૂર્તિ રાનડે ",
                    "correct": false
                },
                {
                    "option": "વિનોબા ભાવેએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જ્યોતિબા ફૂલેએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "સત્યશોધક સમાજના સ્થાપક કોણ હતા ?",
            "a": [
                {
                    "option": "જ્યોતિબા ફૂલે",
                    "correct": true
                },
                {
                    "option": "મહર્ષિ કર્વે",
                    "correct": false
                },
                {
                    "option": "સ્વામી વિવેકાનંદ",
                    "correct": false
                },
                {
                    "option": "ઇશ્વરચન્દ્ર વિદ્યાસાગરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જ્યોતિબા ફૂલે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "'પંચમહાલ ભીલ સેવા મંડળ'ની  સ્થાપના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "ગાંધીજીએ",
                    "correct": false
                },
                {
                    "option": "ઠક્કર બાપાએ",
                    "correct": true
                },
                {
                    "option": "રવિશંકર મહારાજે",
                    "correct": false
                },
                {
                    "option": "નારાયણ ગુરુએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઠક્કર બાપાએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "'અખિલ હિંદ હરિજન સંઘ'ના મંત્રી તરીકે કોણે વર્ષો સુધી સેવાઓ આપી ?",
            "a": [
                {
                    "option": "ઠક્કર બાપાએ",
                    "correct": true
                },
                {
                    "option": "વિનોબા ભાવેએ",
                    "correct": false
                },
                {
                    "option": "ગાંધીજીએ",
                    "correct": false
                },
                {
                    "option": "ડૉ. આંબેડકરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઠક્કર બાપાએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 22
            "q": "સામાજિક અને ધાર્મિક સુધારણાનાં આંદોલનો શરૂ કરનાર સૌ પ્રથમ કોણ હતા ?",
            "a": [
                {
                    "option": "દયાનંદ સરસ્વતી",
                    "correct": false
                },
                {
                    "option": "રાજા રામમોહનરાય",
                    "correct": true
                },
                {
                    "option": "સ્વામી વિવેકાનંદ",
                    "correct": false
                },
                {
                    "option": "ગાંધીજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજા રામમોહનરાય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "રાજા રામમોહનરાયનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ. 1872માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1972માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1772માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1777માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1772માં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 24
            "q": "રાજા રામમોહનરાયનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "બંગાળના હૂગલી જિલ્લાના રાધાનગર ગામમાં",
                    "correct": true
                },
                {
                    "option": "બંગાળના હૂગલી જિલ્લાના કામારપુકૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "બિહારના હૂગલી જિલ્લાના રાધાનગર ગામમાં",
                    "correct": false
                },
                {
                    "option": "બિહારના હૂગલી જિલ્લાના કામારપુકૂર ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંગાળના હૂગલી જિલ્લાના રાધાનગર ગામમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "કઈ ઘટનાએ રાજા રામમોહનરાયને ખૂબ અસર કરી ? ",
            "a": [
                {
                    "option": "ભાભીની સતી થવાની",
                    "correct": true
                },
                {
                    "option": "બહેનની સતી થવાની",
                    "correct": false
                },
                {
                    "option": "ભાઈના મરણની",
                    "correct": false
                },
                {
                    "option": "પત્ની સતી થવની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભાભીની સતી થવાની</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 26
            "q": "રાજા રામમોહનરાયે કોલકાતામાં કઈ કૉલેજની સ્થાપના કરી ?",
            "a": [
                {
                    "option": "પારસી કૉલેજની",
                    "correct": false
                },
                {
                    "option": "મુસ્લિમ કૉલેજની",
                    "correct": false
                },
                {
                    "option": "ખાલસા કૉલેજની",
                    "correct": false
                },
                {
                    "option": "હિંદુ કૉલેજની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિંદુ કૉલેજની</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 27
            "q": "કઈ સાલમાં સતીપ્રથા ઉપર પ્રતિબંધ મૂકતો કાયદો ઘડાયો ?",
            "a": [
                {
                    "option": "ઈ.સ. 1828માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1829માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1821માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1822માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1829માં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "કોના જાગીરી હક અંગેના કેસ બાબતે રાજા રામમોહનરાય ઈંગ્લૅન્ડ ગયા ?",
            "a": [
                {
                    "option": "હૈદરાબાદના નવાબના",
                    "correct": false
                },
                {
                    "option": "બંગાળના નિઝામના",
                    "correct": false
                },
                {
                    "option": "અયોધ્યાના નિઝામના",
                    "correct": false
                },
                {
                    "option": "દિલ્લીના બાદશાહના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિલ્લીના બાદશાહના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "કઈ સાલમાં રાજા રામમોહનરાયનું મૃત્યું થયું ?",
            "a": [
                {
                    "option": "ઈ.સ. 1828માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1830માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1833માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1829માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1833માં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 30
            "q": "રાજા રામમોહનરાયનું મૃત્યું ક્યાં થયું ?",
            "a": [
                {
                    "option": "બ્રિસ્ટોલ મુકામે",
                    "correct": true
                },
                {
                    "option": "બ્રિસ્બન મુકામે",
                    "correct": false
                },
                {
                    "option": "બ્રિટલ મુકામે",
                    "correct": false
                },
                {
                    "option": "બ્રિચલ મુકામે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બ્રિસ્ટોલ મુકામે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 31
            "q": "દયાનંદ સરસ્વતીનો જન્મ કયાં થયો હતો ?",
            "a": [
                {
                    "option": "સૌરાષ્ટ્રના મોરબી નજીક ટંકારા ગામમાં",
                    "correct": true
                },
                {
                    "option": "સૌરાષ્ટ્રના લીંબડી નજીક ટંકારા ગામમાં",
                    "correct": false
                },
                {
                    "option": "સૌરાષ્ટ્રના બોટાદ નજીક ટંકારા ગામમાં",
                    "correct": false
                },
                {
                    "option": "સૌરાષ્ટ્રના ચોટીલા નજીક ટંકારા ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૌરાષ્ટ્રના મોરબી નજીક ટંકારા ગામમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 32
            "q": "સ્વામી દયાનંદ સરસ્વતીએ કેટલા વર્ષ સુધી દેશભરમાં પરિભ્રમણ કર્યું ?",
            "a": [
                {
                    "option": "12",
                    "correct": false
                },
                {
                    "option": "14",
                    "correct": false
                },
                {
                    "option": "15",
                    "correct": true
                },
                {
                    "option": "16",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 15</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 33
            "q": "આર્યસમાજે હિંદુઓને હિંદુ ધર્મમાં પાછા લાવવા માટે કઈ ચળવળ શરૂ કરી ?",
            "a": [
                {
                    "option": "અશુદ્ધિ ચળવળ",
                    "correct": false
                },
                {
                    "option": "શુદ્ધિ ચળવળ",
                    "correct": true
                },
                {
                    "option": "સત્યાગ્રહ ચળવળ",
                    "correct": false
                },
                {
                    "option": "ધાર્મિક ચળવળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શુદ્ધિ ચળવળ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 34
            "q": "સ્વામી દયાનંદ સરસ્વતીએ વેદોમાં ભારતીય ધર્મ અને સંસ્કૃતિનાં દર્શન કર્યા તેથી તેમણે લોકોને શાનો બોધ આપ્યો ?",
            "a": [
                {
                    "option": "વેદો તરફ પાછા વળો",
                    "correct": true
                },
                {
                    "option": "વેદો તરફ પાછા ન વળો",
                    "correct": false
                },
                {
                    "option": "જનસેવા એ જ પ્રભુસેવા",
                    "correct": false
                },
                {
                    "option": "ઊઠો, જાગો અને ધ્યેય પ્રાપ્તિ સુધી મંડ્યા રહો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વેદો તરફ પાછા વળો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 35
            "q": "રામકૃષ્ણ પરમહંસનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "બંગાળના હૂગલી જિલ્લાના રાધાનગર ગામમાં",
                    "correct": false
                },
                {
                    "option": "બંગાળના હૂગલી જિલ્લાના કામારપુકૂર ગામમાં",
                    "correct": true
                },
                {
                    "option": "બિહારના હૂગલી જિલ્લાના રાધાનગર ગામમાં",
                    "correct": false
                },
                {
                    "option": "બિહારના હૂગલી જિલ્લાના કામારપુકૂર ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંગાળના હૂગલી જિલ્લાના કામારપુકૂર ગામમાં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 36
            "q": "સ્વામી વિવેકાનંદે કયું સૂત્ર ભારતીયોને આપ્યું ?",
            "a": [
                {
                    "option": "વેદો તરફ પાછા વળો",
                    "correct": false
                },
                {
                    "option": "વેદો તરફ પાછા ન વળો",
                    "correct": false
                },
                {
                    "option": "જનસેવા એ જ પ્રભુસેવા",
                    "correct": false
                },
                {
                    "option": "ઊઠો, જાગો અને ધ્યેય પ્રાપ્તિ સુધી મંડ્યા રહો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઊઠો, જાગો અને ધ્યેય પ્રાપ્તિ સુધી મંડ્યા રહો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 37
            "q": "ગુજરાતમાં કઈ જગ્યાએ આર્યકન્યા વિદ્યાલય શરૂ કરવામાં આવી ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": true
                },
                {
                    "option": "નવસારી",
                    "correct": false
                },
                {
                    "option": "વલસાડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડોદરા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "સર સૈયદ અહમદખાને કયું સામયિક શરૂ કર્યું ?",
            "a": [
                {
                    "option": "રહનુમા-ઈ-મઝદયરબન",
                    "correct": false
                },
                {
                    "option": "રાશ્ત ગોફતાર",
                    "correct": false
                },
                {
                    "option": "તહઝિબ-ઉલ-અખલાક",
                    "correct": true
                },
                {
                    "option": "મિરાત-ઉલ-અખબાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તહઝિબ-ઉલ-અખલાક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 39
            "q": "ઠક્કરબાપાનો જન્મ ક્યાં થયો હતો ? ",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": false
                },
                {
                    "option": "ભાવનગર",
                    "correct": true
                },
                {
                    "option": "પોરબંદર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભાવનગર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 40
            "q": "અંગ્રેજી કેળવણી પામેલા પારસી યુવાનોએ ધર્મ અને સમાજસુધારણા માટે કઈ સભાની સ્થાપના કરી ?",
            "a": [
                {
                    "option": "રહનુમા-ઈ-મઝદયરબન",
                    "correct": true
                },
                {
                    "option": "રાશ્ત ગોફતાર",
                    "correct": false
                },
                {
                    "option": "તહઝિબ-ઉલ-અખલાક",
                    "correct": false
                },
                {
                    "option": "મિરાત-ઉલ-અખબાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રહનુમા-ઈ-મઝદયરબન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 41
            "q": "ગુરૂદ્વારાઓમાં પ્રવેશેલાં દૂષણો દૂર કરવા માટે અને સારી વ્યવસ્થા માટે કઈ સમિતિ બનાવવામાં આવી ?",
            "a": [
                {
                    "option": "રહનુમા-ઈ-મઝદયરબન",
                    "correct": false
                },
                {
                    "option": "શિરોમણિ ગુરુદ્વારા પ્રબંધક સમિતિ",
                    "correct": true
                },
                {
                    "option": "તહઝિબ-ઉલ-અખલાક",
                    "correct": false
                },
                {
                    "option": "મિરાત-ઉલ-અખબાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શિરોમણિ ગુરુદ્વારા પ્રબંધક સમિતિ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } ,
	{ // Question 1
            "q": "નીચેના પૈકી ક્યો રોગ જળ-પ્રદૂષણથી ફેલાય છે ?",
            "a": [
                {
                    "option": "કૉલેરા",
                    "correct": true
                },
                {
                    "option": "ન્યુમોનિયા",
                    "correct": false
                },
                {
                    "option": "શરદી",
                    "correct": false
                },
                {
                    "option": "ખાંસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૉલેરા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "વાતારણમાં ક્યો વાયુ વધવાથી ગ્લોબલ વોર્મિંગની સમસ્યા ઊભી થઈ છે ?",
            "a": [
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                },
                {
                    "option": "હાઈડ્રોજન",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયૉક્સાઇડ",
                    "correct": true
                },
                {
                    "option": "ઑક્સિજન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "વાતાવરણના ઓઝોન સ્તરને સૌથી વધુ નુકસાન કરતો વાયુ ક્યો છે ?",
            "a": [
                {
                    "option": "CO<sub>2</sub>",
                    "correct": false
                },
                {
                    "option": "CFC",
                    "correct": true
                },
                {
                    "option": "મિથેન",
                    "correct": false
                },
                {
                    "option": "N<sub>2</sub>",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  CFC</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "વૃક્ષો ઓછાં થવાથી ક્યા વાયુનું પ્રમાણ વધી ગયું છે ?",
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
                    "option": "નાઇટ્રસ ઑક્સાઇડ",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયૉક્સાઇડ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાર્બન ડાયૉક્સાઇડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "નીચેના પૈકી ક્યા વાયુથી ઍસિડનો વરસાદ થાય છે ?",
            "a": [
                {
                    "option": "નાઇટ્રસ ઑક્સાઇડ",
                    "correct": true
                },
                {
                    "option": "કાર્બન મોનૉક્સાઇડ",
                    "correct": false
                },
                {
                    "option": "ઓઝોન",
                    "correct": false
                },
                {
                    "option": "નાઈટ્રોજન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નાઇટ્રસ ઑક્સાઇડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "વાહન માટેનું કયું બળતણ પ્રદૂષણમુક્ત છે ?",
            "a": [
                {
                    "option": "કેરોસીન",
                    "correct": false
                },
                {
                    "option": "CNG",
                    "correct": true
                },
                {
                    "option": "ડીઝલ",
                    "correct": false
                },
                {
                    "option": "પેટ્રોલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  CNG</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "આમાંથી ક્યો રોગ હવાના પ્રદૂષણથી થાય છે ?",
            "a": [
                {
                    "option": "ઝાડા-ઊલટી",
                    "correct": false
                },
                {
                    "option": "કમળો ",
                    "correct": false
                },
                {
                    "option": "દમ ",
                    "correct": true
                },
                {
                    "option": "કૅન્સર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દમ </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "માનવનિર્મિત સમસ્યાઓમાં ક્યું પ્રદૂષણ અગ્રસ્થાને છે ?",
            "a": [
                {
                    "option": "હવાનું",
                    "correct": false
                },
                {
                    "option": "પાણીનું",
                    "correct": true
                },
                {
                    "option": "ઘોંઘાટનું",
                    "correct": false
                },
                {
                    "option": "જમીનનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો!</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાણીનું</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ક્યો રોગ જળ પ્રદૂષણથી થાય છે ?",
            "a": [
                {
                    "option": "તાવ",
                    "correct": false
                },
                {
                    "option": "દમ ",
                    "correct": false
                },
                {
                    "option": "કૅન્સર",
                    "correct": false
                },
                {
                    "option": "કમળો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કમળો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી શું જમીનમાં સડી અને ભળી જતું નથી ?",
            "a": [
                {
                    "option": "કાપડ",
                    "correct": false
                },
                {
                    "option": "પ્લાસ્ટિક",
                    "correct": true
                },
                {
                    "option": "લાકડું",
                    "correct": false
                },
                {
                    "option": "પાંદડાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પ્લાસ્ટિક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": " 'જળ, જમીન અને જંગલ એ સામૂદાયિક સ્ત્રોતો છે. એની ઉપર સૌનો સમાન હક છે. એને 'વેપારની વસ્તુ' બનાવવી નૈતિક ગુનો છે.' એવું કોણે કહ્યું હતું ?",
            "a": [
                {
                    "option": "ઠક્કર બાપાએ",
                    "correct": false
                },
                {
                    "option": "ગાંધીજીએ",
                    "correct": true
                },
                {
                    "option": "નારાયણ ગુરુએ",
                    "correct": false
                },
                {
                    "option": "રવિશંકર મહારાજે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગાંધીજીએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગટરનાં પાણીથી કયું પ્રદૂષણ થાય છે ?",
            "a": [
                {
                    "option": "જમીનનું પ્રદૂષણ ",
                    "correct": false
                },
                {
                    "option": "હવાનું પ્રદૂષણ",
                    "correct": false
                },
                {
                    "option": "ધ્વનિનું પ્રદૂષણ ",
                    "correct": false
                },
                {
                    "option": "પાણીનું પ્રદૂષણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાણીનું પ્રદૂષણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "રાસાયણિક ખાતરો અને જંતુનાશક દવાઓ શાનું પ્રદૂષણ ફેલાવે છે ?",
            "a": [
                {
                    "option": "જમીનનું પ્રદૂષણ ",
                    "correct": true
                },
                {
                    "option": "હવાનું પ્રદૂષણ",
                    "correct": false
                },
                {
                    "option": "ધ્વનિનું પ્રદૂષણ",
                    "correct": false
                },
                {
                    "option": "પાણીનું પ્રદૂષણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જમીનનું પ્રદૂષણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "80 ડેસિમલનો અવાજ શાનું  પ્રદૂષણ ફેલાવે છે ?",
            "a": [
                {
                    "option": "જમીનનું પ્રદૂષણ ",
                    "correct": false
                },
                {
                    "option": "હવાનું પ્રદૂષણ",
                    "correct": false
                },
                {
                    "option": "ધ્વનિનું પ્રદૂષણ ",
                    "correct": true
                },
                {
                    "option": "પાણીનું પ્રદૂષણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ધ્વનિનું પ્રદૂષણ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "દવાખાનાં, હૉસ્પિટલ, પ્રસૂતિગૃહ વગેરે સ્થળોએ દરદીની સારવારમાં વપરાયેલી સાધનસામગ્રીનો કચરો શું કહેવાય ?",
            "a": [
                {
                    "option": "વેસ્ટર્ન",
                    "correct": false
                },
                {
                    "option": "મેડિકલ વેસ્ટ",
                    "correct": true
                },
                {
                    "option": "પોલીસ સ્ટેશન વેસ્ટ",
                    "correct": false
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મેડિકલ વેસ્ટ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
             },
        { // Question 16
            "q": "આપણું જીવન ટકાવી રાખવા માટે કયું તત્ત્વ મહત્વનું નથી ?",
            "a": [
                {
                    "option": "હવા",
                    "correct": false
                },
                {
                    "option": "પાણી",
                    "correct": false
                },
                {
                    "option": "જમીન",
                    "correct": false
                },
                {
                    "option": "જસત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જસત</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "શું આવવાથી પર્યાવરણને અસર કરતાં અનેક પ્રકારનાં પ્રદૂષણો વધ્યાં છે ?",
            "a": [
                {
                    "option": "રેલ ગાડીઓ",
                    "correct": false
                },
                {
                    "option": "ઉદ્યોગો",
                    "correct": true
                },
                {
                    "option": "પક્ષીઓ",
                    "correct": false
                },
                {
                    "option": "પશુઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉદ્યોગો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 18
            "q": "શાના અમર્યાદિત ઉપયોગથી પાણી, હવા અને વનસ્પતિમાં અશુદ્ધિઓ પેદા થઈ છે ?",
            "a": [
                {
                    "option": "કૃત્રિમ સ્ત્રોતોના",
                    "correct": false
                },
                {
                    "option": "માનવનિર્મિત સ્ત્રોતોના",
                    "correct": false
                },
                {
                    "option": "કુદરતી સ્ત્રોતોના",
                    "correct": true
                },
                {
                    "option": "પશુનિર્મિત સ્ત્રોતોના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુદરતી સ્ત્રોતોના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 19
            "q": "પાણીનું પ્રદૂષણ થવાનું કારણ કયું નથી ?",
            "a": [
                {
                    "option": "વરસાદ સાથે ઉદ્યોગના ધુમાડા ભળતા",
                    "correct": false
                },
                {
                    "option": "ઉદ્યોગોનું ગંદુ પાણી જળાશયમાં ઠાલવતા",
                    "correct": false
                },
                {
                    "option": "જમીન પરનું ગંદુ પાણી ભૂગર્ભજળ સાથે ભળતા",
                    "correct": false
                },
                {
                    "option": "શહેરોનું ચોખ્ખુ પાણી જળાશયમાં ઠાલવતા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શહેરોનું ચોખ્ખુ પાણી જળાશયમાં ઠાલવતા</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 20
            "q": "જળપ્રદૂષણની અસર શું થાય છે ?",
            "a": [
                {
                    "option": "જળચર પ્રાણીઓ નાશ પામે",
                    "correct": false
                },
                {
                    "option": "ગંદા પાણીથી શાકભાજી પ્રદૂષકોથી ભરેલા પાકે",
                    "correct": false
                },
                {
                    "option": "જળપ્રદૂષણથી રોગ ફેલાય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 21
            "q": "જળપ્રદૂષણથી બચવાનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "ઉદ્યોગોનું પાણી શુદ્ધ કરી જળાશયમાં ઠાલવવું ",
                    "correct": false
                },
                {
                    "option": "સરકારે ઉદ્યોગો ઉપર કડક નિયંત્રણ રાખવું",
                    "correct": false
                },
                {
                    "option": "પાણીનો વિવેકપૂર્વક ઉપયોગ કરવો",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "હવાનું પ્રદૂષણ થવાનું કારણ કયું છે ?",
            "a": [
                {
                    "option": "ઉદ્યોગોના ધુમાડાથી",
                    "correct": false
                },
                {
                    "option": "વાહનોના ધુમાડાથી",
                    "correct": false
                },
                {
                    "option": "જંગલો કાપવાથી",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "હવાના પ્રદૂષણની અસર શું થાય છે ? ",
            "a": [
                {
                    "option": "ગુંગળાઈને પ્રાણીઓનું મૃત્યુ થાય",
                    "correct": false
                },
                {
                    "option": "ઉડતા ધૂળના રજકણોથી રોગ થાય",
                    "correct": false
                },
                {
                    "option": "ઝેરી વાયુથી ઍસિડ વરસાદ થાય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 24
            "q": "હવાનું પ્રદૂષણ અટકાવવાનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "ઝેરી ગૅસ ફિલ્ટર થાય તેવા સાધનો વિકસાવવા",
                    "correct": false
                },
                {
                    "option": "પર્યાવરણ જાગૃતિ અભિયાન ચલાવવું",
                    "correct": false
                },
                {
                    "option": "વાહનોમાં P.U.C.નો કડક અમલ કરવો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "જમીનનું પ્રદૂષણ થવાનું કારણ કયું છે ?",
            "a": [
                {
                    "option": "ઉદ્યોગોનું પાણી જમીન પર છોડી દેતા",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "પ્લાસ્ટિક જમીન પર ફેંકી દેતા",
                    "correct": false
                },
                {
                    "option": "રાસાયણિક ખાતરનો વધુ પડતો ઉપયોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "જમીન પ્રદૂષણથી શું અસર થાય છે ?",
            "a": [
                {
                    "option": "પ્લાસ્ટિક સૂક્ષ્મ જીવાણુઓનો નાશ કરે",
                    "correct": false
                },
                {
                    "option": "હાડકાંના રોગો થાય",
                    "correct": false
                },
                {
                    "option": "પ્રદૂષિત જમીનમાં ઉગતા પાક પ્રદૂષિત હોય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "નીચેનામાંથી જમીન પ્રદૂષણથી કયો રોગ થાય છે ?",
            "a": [
                {
                    "option": "ક્ષય",
                    "correct": true
                },
                {
                    "option": "ન્યુમોનિયા",
                    "correct": false
                },
                {
                    "option": "શરદી",
                    "correct": false
                },
                {
                    "option": "કૉલેરા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ક્ષય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 28
            "q": "જમીન પ્રદૂષણ અટકાવવાનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "પ્લાસ્ટિકને રિસાઈકલ કરી ફરી ઉપયોગ કરવો",
                    "correct": false
                },
                {
                    "option": "ઉપજાઉ જમીન પર ઉદ્યોગ ન સ્થાપવો",
                    "correct": false
                },
                {
                    "option": "જંતુનાશક દવાઓનો ઓછો ઉપયોગ કરવો",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "ધ્વનિનું પ્રદૂષણ થવાનું કારણ કયું છે ?",
            "a": [
                {
                    "option": "કારખાનામાં ચાલતા યંત્રોથી",
                    "correct": false
                },
                {
                    "option": "મોટા લાઉડસ્પીકરો વગાડવાથી",
                    "correct": false
                },
                {
                    "option": "ફટાકડા ફોડવાથી",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 30
            "q": "ધ્વનિ પ્રદૂષણથી થતી અસર કઈ છે ?",
            "a": [
                {
                    "option": "બહેરાશ આવે",
                    "correct": false
                },
                {
                    "option": "માનસિક સ્વાસ્થ્ય ઉપર અસર પડે",
                    "correct": false
                },
                {
                    "option": "ચીડિયાપણું વધી જાય",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ધ્વનિ પ્રદૂષણ અટકાવવા કયો ઉપાય કરવો જોઈએ ?",
            "a": [
                {
                    "option": "વાહનોમાં P.U.C.નો કડક અમલ કરવો",
                    "correct": false
                },
                {
                    "option": "રસ્તાની આજુબાજુ વૃક્ષો વાવવા",
                    "correct": false
                },
                {
                    "option": "ફટાકડા ન ફોડવા",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "વિશ્વમાં આધુનિક રાષ્ટ્રવાદનો સૌપ્રથમ ઉદ્ભવ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "યુ.એસ.એ. માં",
                    "correct": false
                },
                {
                    "option": "ભારતમાં ",
                    "correct": false
                },
                {
                    "option": "યુરોપમાં",
                    "correct": true
                },
                {
                    "option": "રશિયામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  યુરોપમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "અંગ્રેજોની કઈ નીતિએ ભારતને પાયમાલ કર્યું ?",
            "a": [
                {
                    "option": "મહેસૂલ નીતિ",
                    "correct": false
                },
                {
                    "option": "આર્થિક નીતિ",
                    "correct": true
                },
                {
                    "option": "રાજકીય નીતિ",
                    "correct": false
                },
                {
                    "option": "ધાર્મિક નીતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આર્થિક નીતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "અમેરિકન સ્વાતંત્ર્ય વિગ્રહમાંથી ભારતને શાની પ્રેરણા મળી ?",
            "a": [
                {
                    "option": "લોકશાહીની",
                    "correct": true
                },
                {
                    "option": "સમાજવાદની",
                    "correct": false
                },
                {
                    "option": "સમાનતાની",
                    "correct": false
                },
                {
                    "option": "સ્વતંત્રતાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકશાહીની</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "કઈ ક્રાંતિમાંથી ભારતને સ્વતંત્રતા, સમાનતા અને બંધુત્વની ભાવનાની પ્રેરણા મળી‌ ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડની",
                    "correct": false
                },
                {
                    "option": "ફ્રાન્સની",
                    "correct": true
                },
                {
                    "option": "યૂ.એસ.એ.ની",
                    "correct": false
                },
                {
                    "option": "રશિયાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફ્રાન્સની</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "હિંદી રાષ્ટ્રીય મહાસભાના પ્રથમ અધિવેશનના પ્રમુખ કોણ હતા ?",
            "a": [
                {
                    "option": "વ્યોમેશચન્દ્ર બેનરજી",
                    "correct": true
                },
                {
                    "option": "દાદાભાઈ નવરોજી",
                    "correct": false
                },
                {
                    "option": "સુરેન્દ્રનાથ બેનરજી",
                    "correct": false
                },
                {
                    "option": "બદરુદ્દીન તૈયબજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વ્યોમેશચન્દ્ર બેનરજી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "'ભાગલા પાડો અને રાજ કરો' એ નીતિ કોણે અમલમાં મૂકી ?",
            "a": [
                {
                    "option": "લૉર્ડ લિટને",
                    "correct": false
                },
                {
                    "option": "લૉર્ડ રિપને",
                    "correct": false
                },
                {
                    "option": "લૉર્ડ કૅનિંગે",
                    "correct": false
                },
                {
                    "option": "લૉર્ડ કર્ઝને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લૉર્ડ કર્ઝને</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "બંકિમચંદ્રનું ક્યું ગીત બંગભંગના અંદોલનનો નારો બન્યું ?",
            "a": [
                {
                    "option": "'જન ગણ મન...'",
                    "correct": false
                },
                {
                    "option": "'વંદે માતરમ્' ",
                    "correct": true
                },
                {
                    "option": "'ઝંડા ઊંચા રહે હમારા' ",
                    "correct": false
                },
                {
                    "option": "'સોનાર બંગલા' ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'વંદે માતરમ્' </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "'વંદે માતરમ્' નામનું રાષ્ટ્રીય ગીત બંકિમચંદ્રની કઈ નવલકથામાંથી લેવામાં આવ્યું છે ?",
            "a": [
                {
                    "option": "આનંદમઠ",
                    "correct": true
                },
                {
                    "option": "સુંદરમઠ",
                    "correct": false
                },
                {
                    "option": "ગીતાંજલિ",
                    "correct": false
                },
                {
                    "option": "જ્યોતિમઠ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આનંદમઠ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "બંગાળાના ભાગલાના અમલનો દિવસ ક્યા દિવસ તરીકે ઊજવવામાં આવ્યો ?",
            "a": [
                {
                    "option": "'શોકદિન'",
                    "correct": true
                },
                {
                    "option": "'સ્વાતંત્ર્યદિન'",
                    "correct": false
                },
                {
                    "option": "'રાષ્ટ્રીયદિન'",
                    "correct": false
                },
                {
                    "option": "વિરોધદિન'",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'શોકદિન'</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી કોણ મવાળવાદી નેતા ન હતા ?",
            "a": [
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલે",
                    "correct": false
                },
                {
                    "option": "લોકમાન્ય ટિળક",
                    "correct": true
                },
                {
                    "option": "સુરેન્દ્રનાથ બેનરજી",
                    "correct": false
                },
                {
                    "option": "દાદાભાઈ નવરોજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકમાન્ય ટિળક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "જહાલવાદના મુખ્ય નેતા કોણ હતા ?",
            "a": [
                {
                    "option": "વ્યોમેશચન્દ્ર બેનરજી",
                    "correct": false
                },
                {
                    "option": "લોકમાન્ય ટિળક",
                    "correct": true
                },
                {
                    "option": "લાલા લજપતરાય",
                    "correct": false
                },
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકમાન્ય ટિળક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "'સ્વરાજ મારો જન્મસિદ્ધ હક છે અને હું તે મેળવીને જ જંપીશ.' આ મંત્ર કોણે આપ્યો હતો ?",
            "a": [
                {
                    "option": "દાદાભાઈ નવરોજીએ",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલેએ",
                    "correct": false
                },
                {
                    "option": "લોકમાન્ય ટિળકે",
                    "correct": true
                },
                {
                    "option": "મહાત્મા ગાંધીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકમાન્ય ટિળકે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "'શેર-એ-પંજાબ' તરીકે કોણ જાણીતા બન્યા હતા ?",
            "a": [
                {
                    "option": "ફિરોજશાહ મહેતા",
                    "correct": false
                },
                {
                    "option": "લાલા લજપતરાય",
                    "correct": true
                },
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્મા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાલા લજપતરાય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "સાયમન કમિશનના વિરોધ પ્રદર્શન વખતે પોલીસના લાઠીચાર્જને કારણે કોનું અવસાન થયું ?",
            "a": [
                {
                    "option": "લાલા લજપતરાય",
                    "correct": true
                },
                {
                    "option": "પંડિત ગોવિંદ વલ્લભ પંતનુમ્",
                    "correct": false
                },
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "બાળ ગંગાધર ટિળક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાલા લજપતરાય</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "સુભાષચંદ્ર બોઝનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "કટકમાં",
                    "correct": true
                },
                {
                    "option": "અમૃતસરમાં",
                    "correct": false
                },
                {
                    "option": "ભુવનેશ્વરમાં",
                    "correct": false
                },
                {
                    "option": "રામગિરિમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કટકમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "સુભાષચંદ્ર બોઝે ક્યો પક્ષ સ્થાપ્યો ?",
            "a": [
                {
                    "option": "યંગ ઇન્ડિયા",
                    "correct": false
                },
                {
                    "option": "ફોરવર્ડ બ્લૉક",
                    "correct": true
                },
                {
                    "option": "સ્વરાજ્ય પક્ષ",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિપેન્ડન્સ ઇન્ડિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફોરવર્ડ બ્લૉક</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "'આઝાદ હિંદ ફોજ'ની રચના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "જાપાનની સરકારે",
                    "correct": false
                },
                {
                    "option": "રાસબિહારી બોઝે",
                    "correct": false
                },
                {
                    "option": "કૅપ્ટન મોહનસિંગે",
                    "correct": true
                },
                {
                    "option": "સુભાષચંદ્ર બોઝે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૅપ્ટન મોહનસિંગે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "'આઝાદ હિંદ ફોજ'ના વડા બન્યા પછી સુભાષબાબુ ક્યા નામે ઓળખાયા ?",
            "a": [
                {
                    "option": "સરદાર",
                    "correct": false
                },
                {
                    "option": "નેતાજી",
                    "correct": true
                },
                {
                    "option": "સેનાપતિ ",
                    "correct": false
                },
                {
                    "option": "કૅપ્ટન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નેતાજી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "સુભાષચંદ્ર બોઝે આઝાદ હિંદ ફોજને ક્યું સૂત્ર આપ્યું ? ",
            "a": [
                {
                    "option": "'ઇન્કલાબ ઝિંદાબાદ'",
                    "correct": false
                },
                {
                    "option": "'ચલો દિલ્લી'",
                    "correct": true
                },
                {
                    "option": "'વંદે ભારત'",
                    "correct": false
                },
                {
                    "option": "'જય હિંદ'",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'ચલો દિલ્લી'</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "પ્રથમ વિશ્વયુદ્ધ દરમિયાન કયા દેશ પર અણુબૉમ્બ ફેંકવામાં આવ્યા ?",
            "a": [
                {
                    "option": "યુ.એસ.એ. ",
                    "correct": false
                },
                {
                    "option": "જર્મની",
                    "correct": false
                },
                {
                    "option": "જાપાન",
                    "correct": true
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાપાન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "કયા પાશ્ચાત્ય પુરાતત્ત્વવિદે ભારતની સંસ્કૃતિની ગૌરવગાથાના અવશેષો શોધી કાઢ્યા ?",
            "a": [
                {
                    "option": "મૅક્સર મૂલરે",
                    "correct": false
                },
                {
                    "option": "ફર્ગ્યુસને",
                    "correct": false
                },
                {
                    "option": "વિલિયમ હામે",
                    "correct": false
                },
                {
                    "option": "કનિંગહામે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કનિંગહામે</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કયા નિવૃત્ત અંગ્રેજ અધિકારીના પ્રયત્નોથી હિંદી રાષ્ટ્રીય મહાસભાની સ્થાપના થઈ ?",
            "a": [
                {
                    "option": "સર ચાર્લ્સ વુડના",
                    "correct": false
                },
                {
                    "option": "લૉર્ડ મૅકોલેના",
                    "correct": false
                },
                {
                    "option": "એ. ઓ. હ્યુમના",
                    "correct": true
                },
                {
                    "option": "લૉર્ડ મેયોના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એ. ઓ. હ્યુમના</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "હિંદી રાષ્ટ્રીય મહાસભાએ શરૂઆતમાં અંગ્રેજ સરકાર સમક્ષ કરેલી માગણીઓમાં નીચેનામાંથી કઈ માગણી ન હતી ?",
            "a": [
                {
                    "option": "ગૃહઉદ્યોગોને સજીવન કરવા.",
                    "correct": false
                },
                {
                    "option": "ખેડૂતોને દેવામાં રાહત આપવી.",
                    "correct": false
                },
                {
                    "option": "અદાલતોમાં હિંદી ન્યાયાધીશો નીમવા.",
                    "correct": true
                },
                {
                    "option": "સરકારી નોકરીમાં હિંદિઓની સંખ્યા વધારવી.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અદાલતોમાં હિંદી ન્યાયાધીશો નીમવા.</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "વાઇસરૉય લૉર્ડ કર્ઝને બંગાળાના ભાગલા ક્યારે પાડ્યા ?",
            "a": [
                {
                    "option": "ઈ.સ. 1909માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1906માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1911માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1905માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1905માં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ઈ.સ. 1901માં શાંતિનિકેતનમાં વિશ્વભારતી વિદ્યાલય કોણે શરૂ કરી ?",
            "a": [
                {
                    "option": "રવીન્દ્રનાથા ટાગોરે",
                    "correct": true
                },
                {
                    "option": "અવનીન્દ્રનાથ ટાગોરે",
                    "correct": false
                },
                {
                    "option": "કેદારનાથ ટાગોરે",
                    "correct": false
                },
                {
                    "option": "સુભાષચંદ્ર બોઝે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રવીન્દ્રનાથા ટાગોરે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "જહાલવાદ એટલે શું ?",
            "a": [
                {
                    "option": "સ્વદેશી માલનો વિરોધ કરનારા.",
                    "correct": false
                },
                {
                    "option": "ઉગ્ર અને સક્રિય આંદોલનમાં માનનારા.",
                    "correct": true
                },
                {
                    "option": "નરમ કાર્યશૈલીમાં માનનારા.",
                    "correct": false
                },
                {
                    "option": "બ્રિટિશરોને સાચા માનનારા.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉગ્ર અને સક્રિય આંદોલનમાં માનનારા.</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "નીચેનામાંથી કોણ જહાલવાદી નેતા ન હતા ?",
            "a": [
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલે",
                    "correct": true
                },
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "લાલા લજપતરાય",
                    "correct": false
                },
                {
                    "option": "લોકમાન્ય ટિળક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોપાલકૃષ્ણ ગોખલે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "મવાળવાદ એટલે શું ?",
            "a": [
                {
                    "option": "સ્વદેશી માલનો વિરોધ કરનારા.",
                    "correct": false
                },
                {
                    "option": "ઉગ્ર અને સક્રિય આંદોલનમાં માનનારા.",
                    "correct": false
                },
                {
                    "option": "નરમ કાર્યશૈલીમાં માનનારા.",
                    "correct": true
                },
                {
                    "option": "બ્રિટિશરોને સાચા માનનારા.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નરમ કાર્યશૈલીમાં માનનારા.</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "અંગ્રેજ સરકારે કયા નેતા પર યુવાનોને હિંસક માર્ગે ઉશ્કેરવાનો આરોપ મૂક્યો હતો ?",
            "a": [
                {
                    "option": "બિપિનચંદ્ર પાલ",
                    "correct": true
                },
                {
                    "option": "લાલા લજપતરાય",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલે",
                    "correct": false
                },
                {
                    "option": "સુરેન્દ્રનાથ બેનરજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બિપિનચંદ્ર પાલ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "'મુસ્લિમ લીગ'ની સ્થાપના ક્યારે થઈ ?",
            "a": [
                {
                    "option": "ઈ.સ. 1909માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1906માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1911માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1905માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1906માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ઈ.સ. 1916માં કૉંગ્રેસે અને મુસ્લિમ લીગે તેમનાં વાર્ષિક અધિવેશનો એકસાથે કયા શહેરમાં ભર્યાં ?",
            "a": [
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમં",
                    "correct": false
                },
                {
                    "option": "લખનૌમાં",
                    "correct": true
                },
                {
                    "option": "સુરતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લખનૌમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "સુભાષચંદ્ર બોઝનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ. 1897માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1887માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1903માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1905માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1897માં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "ઈ.સ. 1938માં હરિપુરામાં અને ઈ.સ. 1939માં ત્રિપુરામાં ભરાયેલા કૉંગ્રેસ અધિવેશનના પ્રમુખ કોણ બન્યા હતા ?",
            "a": [
                {
                    "option": "સુભાષચંદ્ર બોઝ",
                    "correct": true
                },
                {
                    "option": "ગાંધીજી",
                    "correct": false
                },
                {
                    "option": "જવાહરલાલ નહેરુ",
                    "correct": false
                },
                {
                    "option": "મોતીલાલ નહેરુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુભાષચંદ્ર બોઝ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "સુભાષચંદ્ર બોઝે 'કામચલાઉ સરકાર'ની સ્થાપના કયાં કરી ? ",
            "a": [
                {
                    "option": "બર્લિનમાં",
                    "correct": false
                },
                {
                    "option": "રંગૂનમાં",
                    "correct": false
                },
                {
                    "option": "ટોકિયોમાં",
                    "correct": false
                },
                {
                    "option": "સિંગાપુરમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિંગાપુરમાં</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "સુભાષચંદ્ર બોઝે કઈ પ્રતિજ્ઞા લીધી હતી ?",
            "a": [
                {
                    "option": "'હું ગુલામ હિંદુસ્તાનમાં પગ મૂકીશ નહિ.'",
                    "correct": true
                },
                {
                    "option": "'હું આઝાદી મેળવવા તમામ પ્રયત્નો કરીશ.'",
                    "correct": false
                },
                {
                    "option": "'હું ભારતમાંથી બ્રિટિશ સરકારને ભગાડીને જ રહીશ.'",
                    "correct": false
                },
                {
                    "option": "'હું માતૃભૂમિની ગુલામીની ઝંઝીરો તોડીને જ રહીશ.'",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 'હું ગુલામ હિંદુસ્તાનમાં પગ મૂકીશ નહિ.'</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "ભારતમાં રાષ્ટ્રીય જાગૃતિનાં પરિબળો ખાસ કરીને ક્યારે વિકાસ પામ્યા ?",
            "a": [
                {
                    "option": "ઇ.સ. 1853ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1856ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1851ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1857ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1857ના પ્રથમ સ્વાતંત્ર્યસંગ્રામ બાદ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "આપણા દેશમાં આપણું રાજ્ય એટલે શું ?",
            "a": [
                {
                    "option": "સ્વરાજ્ય",
                    "correct": true
                },
                {
                    "option": "સુરાજ્ય",
                    "correct": false
                },
                {
                    "option": "સમરસરાજય",
                    "correct": false
                },
                {
                    "option": "સમરાજ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વરાજ્ય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "અંગેજો ભારતમાંથી કાચો માલ ક્યાં લઈ જતા હતા ?",
            "a": [
                {
                    "option": "ફ્રાંસ",
                    "correct": false
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": true
                },
                {
                    "option": "અમેરિકા",
                    "correct": false
                },
                {
                    "option": "જર્મની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇંગ્લૅન્ડ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ભારતમાં અંગ્રેજ શાસન દરમ્યાન ક્યા માલ ઉપર વધુ જકાત લેવામાં આવતી હતી ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડમાં ઉત્પન્ન થયેલા",
                    "correct": false
                },
                {
                    "option": "અમેરિમાં ઉત્પન્ન થયેલા",
                    "correct": false
                },
                {
                    "option": "હિંદમાં ઉત્પન્ન થયેલા",
                    "correct": true
                },
                {
                    "option": "પોર્ટુગલમાં ઉત્પન્ન થયેલા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિંદમાં ઉત્પન્ન થયેલા</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "'બંગાળ બ્રિટિશ ઇન્ડિયન સોસાયટી' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોલકાતામાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "'બૉમ્બે એસોસિયેશન' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": true
                },
                {
                    "option": "પૂણેમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુંબઈમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "'મદ્રાસ નેટિવ સભા' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": true
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચેન્નાઈમાં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "'ઇન્ડિયન એસોસિયેશન' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોલકાતામાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "'સાર્વજનિક સભા' નામનું પ્રાદેશિક સંગઠન ક્યાં હતું ?",
            "a": [
                {
                    "option": "ચેન્નાઈમાં",
                    "correct": false
                },
                {
                    "option": "મુંબઈમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": true
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂણેમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "હિંદી રાષ્ટ્રીય મહાસભાની સ્થાપના ક્યારે કરવામાં આવી ?",
            "a": [
                {
                    "option": "ઈ.સ. 1888માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1885માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1890માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1895માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1885માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "હિંદી રાષ્ટ્રીય મહાસભાના પ્રથમ અધિવેશનમાં કેટલાં પ્રતિનિધિઓએ હાજરી આપી હતી ? ",
            "a": [
                {
                    "option": "78",
                    "correct": false
                },
                {
                    "option": "72",
                    "correct": true
                },
                {
                    "option": "75",
                    "correct": false
                },
                {
                    "option": "80",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 72</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "હિંદી રાષ્ટ્રીય મહાસભાની રજૂઆતને લીધે સરકારે શાના પરના નિયંત્રણો દૂર કર્યા ?",
            "a": [
                {
                    "option": "અહેવાલો પરનાં",
                    "correct": false
                },
                {
                    "option": "અરજીઓ પરનાં",
                    "correct": false
                },
                {
                    "option": "અખબારો પરનાં",
                    "correct": true
                },
                {
                    "option": "એખલાસ પરનાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અખબારો પરનાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "લોર્ડ કર્ઝને ઓરિસ્સા અને બિહાર પ્રદેશને બદલે બંગાળાના કયા ધર્મનીબહુમતી ધરાવતા વિસ્તારને અલગ કર્યો ? ",
            "a": [
                {
                    "option": "હિંદુ",
                    "correct": false
                },
                {
                    "option": "પારસી",
                    "correct": false
                },
                {
                    "option": "શીખ",
                    "correct": false
                },
                {
                    "option": "મુસ્લિમ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુસ્લિમ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "બંગાળના ભાગલા રદ કરવા માટેના આંદોલનને કયા નામે ઓળખવામાં આવે છે ?",
            "a": [
                {
                    "option": "બંગભંગ આંદોલન",
                    "correct": true
                },
                {
                    "option": "રંગભંગ આંદોલન",
                    "correct": false
                },
                {
                    "option": "મીઠાભંગ આંદોલન",
                    "correct": false
                },
                {
                    "option": "અંગભંગ આંદોલન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંગભંગ આંદોલન</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "અંગ્રેજોને કઈ સાલમાં બંગાળના ભાગલા રદ કરવાની ફરજ પડી ?",
            "a": [
                {
                    "option": "ઈ.સ. 1906માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1911માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1905માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1895માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1911માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "બંગાળામાં ઈ.સ. 1907માં અનુક્રમે કેટલી રાષ્ટ્રીય માધ્યમિક શાળાઓ અને રાષ્ટ્રીય પ્રાથમિક શાળાઓ શરૂ કરવામાં આવી ?",
            "a": [
                {
                    "option": "205,350",
                    "correct": false
                },
                {
                    "option": "25,350",
                    "correct": false
                },
                {
                    "option": "25,300",
                    "correct": true
                },
                {
                    "option": "35,300",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 25,300</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "બંગાળના ભાગલાની ચળવળનું લક્ષણ કયું હતું ?",
            "a": [
                {
                    "option": "સ્વદેશી માલનો વેપાર કરવો.",
                    "correct": false
                },
                {
                    "option": "વિદેશી માલનો બહિષ્કાર",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય શિક્ષણ લેવું",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "'લાલ, બાલ, પાલ'ની ત્રિપુટીથી કોણ ઓળખાતુ હતું ?",
            "a": [
                {
                    "option": "લાલા લજપતરાય, બાળ ગંગાધર, બિપિનચંદ્ર પાલ",
                    "correct": true
                },
                {
                    "option": "લાલા લજપતરાય, બાળ ગંગાધર, જતિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "લાલા હરદયાળ,  બાળ ગંગાધર, બિપિનચંદ્ર પાલ",
                    "correct": false
                },
                {
                    "option": "લાલા હરદયાળ, બાળ ગંગાધર, જતિનચંદ્ર પાલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાલા લજપતરાય, બાળ ગંગાધર, બિપિનચંદ્ર પાલ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "લોકમાન્ય ટિળકે કયા બે ઉત્સવો ઊજવવાનું શરૂ કર્યું ?",
            "a": [
                {
                    "option": "ગણેશ ચતુર્થી અને શિવાજી જયંતિ",
                    "correct": true
                },
                {
                    "option": "દિવાળી અને નવરાત્રી",
                    "correct": false
                },
                {
                    "option": "ગણેશ ચતુર્થી અને નવરાત્રી",
                    "correct": false
                },
                {
                    "option": "જન્માષ્ટમી અને હનુમાન જયંતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગણેશ ચતુર્થી અને શિવાજી જયંતિ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "લોકમાન્ય ટિળકે મરાઠી ભાષામાં કયું વર્તમાનપત્ર શરૂ કર્યું ?",
            "a": [
                {
                    "option": "કેસરી",
                    "correct": true
                },
                {
                    "option": "મરાઠા",
                    "correct": false
                },
                {
                    "option": "વંદેમાતરમ્",
                    "correct": false
                },
                {
                    "option": "પંજાબી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેસરી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "લોકમાન્ય ટિળકે અંગ્રેજી ભાષામાં કયું વર્તમાનપત્ર શરૂ કર્યું ?",
            "a": [
                {
                    "option": "કેસરી",
                    "correct": false
                },
                {
                    "option": "મરાઠા",
                    "correct": true
                },
                {
                    "option": "વંદેમાતરમ્",
                    "correct": false
                },
                {
                    "option": "પંજાબી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મરાઠા</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "લાલા લજપરાયે કયા વર્તમાનપત્ર શરૂ કર્યા ?",
            "a": [
                {
                    "option": "કેસરી અને મરાઠા",
                    "correct": false
                },
                {
                    "option": "મરાઠા અને વંદેમાતરમ્",
                    "correct": false
                },
                {
                    "option": "ધી પંજાબી અને ધી પ્યુપિલ",
                    "correct": true
                },
                {
                    "option": "પંજાબી અને મરાઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધી પંજાબી અને ધી પ્યુપિલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 58
            "q": "બિપિનચંદ્ર પાલે અનુક્રમે કયું સામયિક અને વર્તમાનપત્ર શરૂ કર્યું ?",
            "a": [
                {
                    "option": "કેસરી અને મરાઠા",
                    "correct": false
                },
                {
                    "option": "ન્યૂ ઇન્ડિયા અને વંદેમાતરમ્",
                    "correct": true
                },
                {
                    "option": "ધી પંજાબી અને ધી પ્યુપિલ",
                    "correct": false
                },
                {
                    "option": "પંજાબી અને મરાઠા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ન્યૂ ઇન્ડિયા અને વંદેમાતરમ્</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 59
            "q": "ઇ.સ. 1916માં પૂનામાં કોણે 'ઇન્ડિયન હોમરૂલ લીગ'ની સ્થાપના કરી ?",
            "a": [
                {
                    "option": "બાળ ગંગાધર ટીળકે",
                    "correct": true
                },
                {
                    "option": "લજપતરાયે",
                    "correct": false
                },
                {
                    "option": "ઍની બેસન્ટે",
                    "correct": false
                },
                {
                    "option": "બિપિનચંદ્ર પાલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાળ ગંગાધર ટીળકે</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "ઇ.સ. 1916માં મદ્રાસમાં કોણે 'હોમરૂલ લીગ'ની સ્થાપના કરી ?",
            "a": [
                {
                    "option": "બાળ ગંગાધર ટીળકે",
                    "correct": false
                },
                {
                    "option": "લજપતરાયે",
                    "correct": false
                },
                {
                    "option": "ઍની બેસન્ટે",
                    "correct": true
                },
                {
                    "option": "બિપિનચંદ્ર પાલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍની બેસન્ટે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 61
            "q": "હોમરૂલ લીગની નામની સંસ્થાનો હેતું શું હતો ?",
            "a": [
                {
                    "option": "બંધારણીય માર્ગે ગૃહસ્વરાજ્ય મેળવવાનો",
                    "correct": true
                },
                {
                    "option": "ગેરબંધારણીય માર્ગે ગૃહસ્વરાજ્ય મેળવવાનો",
                    "correct": false
                },
                {
                    "option": "ઝઘડા દ્વારા ગૃહસ્વરાજ્ય મેળવવાનો",
                    "correct": false
                },
                {
                    "option": "ભાઈચારા દ્વારા ગૃહસ્વરાજ્ય મેળવવાનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંધારણીય માર્ગે ગૃહસ્વરાજ્ય મેળવવાનો </p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 62
            "q": "ઍની બેસન્ટે બ્રિટિશ સરકારને હિન્દને શું આપવા અનુરોધ કર્યો ?",
            "a": [
                {
                    "option": "જવાબદાર લોકો અને ગૃહસ્વરાજ્ય",
                    "correct": false
                },
                {
                    "option": "જવાબદાર રાજ્યતંત્ર અને ગૃહસ્વરાજ્ય",
                    "correct": true
                },
                {
                    "option": "જવાબદાર ભાષા અને ગૃહસ્વરાજ્ય",
                    "correct": false
                },
                {
                    "option": "જવાબદાર રાજા અને વિદેશીરાજ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જવાબદાર રાજ્યતંત્ર અને ગૃહસ્વરાજ્ય</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 63
            "q": "સુભાષચંદ્ર બોઝની માતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "પદ્માવતી",
                    "correct": false
                },
                {
                    "option": "માયાવતી",
                    "correct": false
                },
                {
                    "option": "પ્રભાવતી",
                    "correct": true
                },
                {
                    "option": "મહાપ્રજાપતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રભાવતી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 64
            "q": "સુભાષચંદ્ર બોઝના પિતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "જનકનાથ",
                    "correct": false
                },
                {
                    "option": "જયદત્તનાથ",
                    "correct": false
                },
                {
                    "option": "જશવંતનાથ",
                    "correct": false
                },
                {
                    "option": "જાનકીનાથ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાનકીનાથ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 65
            "q": "સુભાષચંદ્ર બોઝ કેટલી વખત રાજકીય કેદી તરીકે પકડાયા ?",
            "a": [
                {
                    "option": "11",
                    "correct": true
                },
                {
                    "option": "8",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "12",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 11</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 66
            "q": "આઝાદ હિંદ ફોજે શા કારણે પીછેહઠ કરી ?",
            "a": [
                {
                    "option": "સૈનિકો મરવાના અને ભારે વરસાદને કારણે",
                    "correct": false
                },
                {
                    "option": "પુરવઠાની તંગી અને ભારે વરસાદને કારણે",
                    "correct": true
                },
                {
                    "option": "પુરવઠાની તંગી અને લોકોની નાકામી કારણે",
                    "correct": false
                },
                {
                    "option": "સૈનિકો મરવાના અને લોકોની નાકામી કારણે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુરવઠાની તંગી અને ભારે વરસાદને કારણે</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 67
            "q": "સુભાષચંદ્ર બોઝનું મૃત્યું કઈ રીતે થયું ?",
            "a": [
                {
                    "option": "અંગ્રેજોની ગોળીથી",
                    "correct": false
                },
                {
                    "option": "પોતાની ગોળીથી",
                    "correct": false
                },
                {
                    "option": "વિમાન દુર્ઘટનાથી",
                    "correct": true
                },
                {
                    "option": "ટ્રક અકસ્માતથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિમાન દુર્ઘટનાથી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 68
            "q": "જાપાન સરકાર સાથે કોને મતભેદ થતા આઝાદ હિંદ ફોઝમાંથી મોહનસિંગે રાજીનામું મૂક્યું ?",
            "a": [
                {
                    "option": "રાસબિહારી બોઝને",
                    "correct": true
                },
                {
                    "option": "સુભાષચંદ્ર બોઝને",
                    "correct": false
                },
                {
                    "option": "લાલા લજપતરાયને",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાસબિહારી બોઝને</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 69
            "q": "સુભાષચંદ્ર બોઝે ભારતને કયો મંત્ર આપ્યો ?",
            "a": [
                {
                    "option": "'ઇન્કલાબ ઝિંદાબાદ'",
                    "correct": false
                },
                {
                    "option": "'ચલો દિલ્લી'",
                    "correct": false
                },
                {
                    "option": "'વંદે ભારત'",
                    "correct": false
                },
                {
                    "option": "'જય હિંદ'",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 'જય હિંદ'</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 70
            "q": "'તુમ મુઝે ખૂન દો, મૈં તુમ્હે આઝાદી દૂંગા.' આ સૂત્ર કોણે આપ્યું હતું ?",
            "a": [
                {
                    "option": "જાપાનની સરકારે",
                    "correct": false
                },
                {
                    "option": "રાસબિહારી બોઝે",
                    "correct": false
                },
                {
                    "option": "કૅપ્ટન મોહનસિંગે",
                    "correct": false
                },
                {
                    "option": "સુભાષચંદ્ર બોઝે",
                    "correct": true
                } // no
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુભાષચંદ્ર બોઝે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 71
            "q": "સુભાષચંદ્ર બોઝે આઝાદ હિંદ ફોજમાં કેટલી લશ્કરી ટુકડીઓ ઊભી કરેલી ?",
            "a": [
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 72
            "q": "સુભાષચંદ્ર બોઝે આઝાદ હિંદ ફોજમાં એક સ્ત્રી લશ્કરી ટુકડી ઊભી કરી તેનું નામ શું આપ્યું હતું ?",
            "a": [
                {
                    "option": "ઝાંસીની રાણી",
                    "correct": true
                },
                {
                    "option": "લક્ષ્મીબાઈ",
                    "correct": false
                },
                {
                    "option": "ઝામ રાણી",
                    "correct": false
                },
                {
                    "option": "જોધા બાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઝાંસીની રાણી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 1
            "q": "આપણા દેશની બધી અદાલતમાં સૌથી ઊંચું સ્થાન કઈ અદાલતનું છે ?",
            "a": [
                {
                    "option": "વડી અદાલતનું",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતનું ",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલતનું",
                    "correct": false
                },
                {
                    "option": "તાલુકાની અદાલતનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સર્વોચ્ચ અદાલતનું </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "આપણા દેશની સર્વોચ્ચ અદાલત કયા શહેરમાં આવેલી છે ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "મુંબઇ",
                    "correct": false
                },
                {
                    "option": "દિલ્લી",
                    "correct": true
                },
                {
                    "option": "કોલકાતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દિલ્લી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આપણા દેશમાં સર્વોચ્ચ અદાલતનો આરંભ ક્યારે થયો ?",
            "a": [
                {
                    "option": "26 જાન્યુઆરી 1950",
                    "correct": false
                },
                {
                    "option": "28 જાન્યુઆરી 1950",
                    "correct": true
                },
                {
                    "option": "15 ઑગષ્ટ 1947",
                    "correct": false
                },
                {
                    "option": "28 ઑગષ્ટ 1947",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  28 જાન્યુઆરી 1950</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "સરકારનાં અંગો કેટલા છે ?",
            "a": [
                {
                    "option": "ચાર",
                    "correct": false
                },
                {
                    "option": "ત્રણ",
                    "correct": true
                },
                {
                    "option": "બે",
                    "correct": false
                },
                {
                    "option": "પાંચ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્રણ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "આપણી સરકારનું ક્યું અંગ સ્વતંત્ર છે ? ",
            "a": [
                {
                    "option": "કારોબારી",
                    "correct": false
                },
                {
                    "option": "ન્યાયતંત્ર",
                    "correct": true
                },
                {
                    "option": "ધારાસભા",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ન્યાયતંત્ર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "આપણા મૂળભૂત અધિકારોના પાલન માટેનો અધિકાર કઈ અદાલત પાસે છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": true
                },
                {
                    "option": "વડી અદાલત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકાની અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સર્વોચ્ચ અદાલત</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કઈ અદાલત કેન્દ્ર અને રાજ્ય વચ્ચેના તેમજ રાજ્ય અને રાજ્ય વચ્ચેના વિવાદો ઉકેલે છે ?",
            "a": [
                {
                    "option": "લોક અદાલત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકાની અદાલત ",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સર્વોચ્ચ અદાલત</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગુજરાતમાં નર્મદા નદી પર કયા સ્થળે બંધ બાંધવામાં આવ્યો છે ?",
            "a": [
                {
                    "option": "નવાગામ",
                    "correct": true
                },
                {
                    "option": "નવાપરા",
                    "correct": false
                },
                {
                    "option": "નવાબ ગઢ",
                    "correct": false
                },
                {
                    "option": "જૂનાગામ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નવાગામ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "સર્વોચ્ચ અદાલતે 'જાહેરહિતની અરજી'ની વ્યવસ્થા ક્યારે અમલમાં મૂકી છે ?",
            "a": [
                {
                    "option": "1988ના દાયકા પછી",
                    "correct": false
                },
                {
                    "option": "1908ના દાયકા પછી",
                    "correct": false
                },
                {
                    "option": "1980ના દાયકા પછી",
                    "correct": true
                },
                {
                    "option": "1880ના દાયકા પછી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  1980ના દાયકા પછી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "નર્મદા બંધની ઊંચાઈ અંગે સર્વોચ્ચ અદાલતે કોની તરફેણમાં ચુકાદો આપ્યો ?",
            "a": [
                {
                    "option": "રાજસ્થાનની",
                    "correct": false
                },
                {
                    "option": "ગુજરાતની",
                    "correct": true
                },
                {
                    "option": "મધ્યપ્રદેશની",
                    "correct": false
                },
                {
                    "option": "મહારાષ્ટ્રની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુજરાતની</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "લોકોનાં હિત, રક્ષણ અને કલ્યાણ માટે શાની જરૂર છે ?",
            "a": [
                {
                    "option": "ગુનેગારોની",
                    "correct": false
                },
                {
                    "option": "કનડગતોની",
                    "correct": false
                },
                {
                    "option": "કાયદાની",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાયદાની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
         },
        { // Question 12
            "q": "વડી અદાલતના નિર્ણય સામે ક્યાં અપીલ કરી શકાય છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": true
                },
                {
                    "option": "લોક અદાલત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma heree
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સર્વોચ્ચ અદાલત</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 13
            "q": "સર્વોચ્ચ અદાલતે આપેલી મૃત્યુ દંડની સજામાં દયાની અરજીના આધારે કોણ ફેરફાર કરી શકે ?",
            "a": [
                {
                    "option": "રાજ્યપાલ",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": true
                },
                {
                    "option": "વડાપ્રધાન",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાષ્ટ્રપતિ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 14
            "q": "આપણા દેશમાં ક્યા પ્રકારની શાસન પદ્ધતિ છે ?",
            "a": [
                {
                    "option": "સમાજવાદી",
                    "correct": false
                },
                {
                    "option": "સરમુખત્યારશાહી",
                    "correct": false
                },
                {
                    "option": "લોકશાહી",
                    "correct": true
                },
                {
                    "option": "પ્રમુખશાહી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકશાહી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 15
            "q": "ન્યાયતંત્રને ઝડપી અને બિનખર્ચાળ બનાવવા માટે કોણ કામ કરે છે ?",
            "a": [
                {
                    "option": "લોકઅદાલતો",
                    "correct": true
                },
                {
                    "option": "ન્યાયસમિતિઓ",
                    "correct": false
                },
                {
                    "option": "ન્યાયાધીશો",
                    "correct": false
                },
                {
                    "option": "ન્યાયપંચાયતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકઅદાલતો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 16
            "q": "બધી અદાલતોમાં સૌથી નાની અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "ગ્રામ્ય અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": true
                },
                {
                    "option": "લોકઅદાલત",
                    "correct": false
                },
                {
                    "option": "મંડળ અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા અદાલત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ગુજરાત રાજ્યની વડી અદાલતની સ્થાપના ક્યારે થઈ ?",
            "a": [
                {
                    "option": "ઈ.સ.1960માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1951માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1965માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1955માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1960માં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 18
            "q": "ગુજરાત રાજ્યની વડી અદાલત ક્યા શહેરમાં આવેલી છે ?",
            "a": [
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 19
            "q": "મકાન, જમીન કે અન્ય સંપત્તિ અંગેનો વિવાદ કેવો વિવાદ કહેવાય ?",
            "a": [
                {
                    "option": "સ્થાનિક",
                    "correct": false
                },
                {
                    "option": "મહેસૂલી",
                    "correct": false
                },
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દીવાની</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "ચોરી, લૂંટફાટ, મારામારી, ખૂન, શારીરિક ઈજા કે ઝઘડાનો વિવાદ કેવો વિવાદ કહેવાય ?",
            "a": [
                {
                    "option": "અદાલતી",
                    "correct": false
                },
                {
                    "option": "મૂળભૂત",
                    "correct": false
                },
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફોજદારી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 21
            "q": "ન્યાયની દેવીનું નામ શું છે ?",
            "a": [
                {
                    "option": "આમટિન",
                    "correct": false
                },
                {
                    "option": "આસ્ટીન",
                    "correct": true
                },
                {
                    "option": "આર્મી",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આસ્ટીન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 22
            "q": "ન્યાયની દેવીને ક્યાં પાટો બાંધેલો છે ?",
            "a": [
                {
                    "option": "પગે",
                    "correct": false
                },
                {
                    "option": "આંખે",
                    "correct": true
                },
                {
                    "option": "મોઢે",
                    "correct": false
                },
                {
                    "option": "હાથે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આંખે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "ન્યાયની દેવીના બંન્ને હાથમાં શું છે ?",
            "a": [
                {
                    "option": "તીર-ફૂલ",
                    "correct": false
                },
                {
                    "option": "ભાલુ-તલવાર",
                    "correct": false
                },
                {
                    "option": "તલવાર-ત્રાજવું",
                    "correct": true
                },
                {
                    "option": "ઢાલ-તલવાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તલવાર-ત્રાજવું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 24
            "q": "તાલુકા અદાલતને બીજી કઈ અદાલત પણ કહે છે ?",
            "a": [
                {
                    "option": "જીલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "ટ્રાયલ કોર્ટ",
                    "correct": true
                },
                {
                    "option": "ટ્રાય",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ટ્રાયલ કોર્ટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "પોલીસને ગુનાની પ્રથમ જાણ થાય ત્યારે તે પોલીસ-સ્ટેશનમાં શું નોંધે છે ?",
            "a": [
                {
                    "option": "FIR",
                    "correct": true
                },
                {
                    "option": "RIF",
                    "correct": false
                },
                {
                    "option": "DIG",
                    "correct": false
                },
                {
                    "option": "GEN",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  FIR</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 26
            "q": "અંજનાબાના ઘરમાં ચોરી થઈ હોય તો સૌપ્રથમ કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "તાલુકા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા ફોજદારી અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા ફોજદારી અદાલતમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "શીતલબાનું કોઈએ ઘર પચાવી પાડ્યું હોય તો સૌપ્રથમ કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "જિલ્લા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "તાલુકા દીવાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "જિલ્લા ફોજદારી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા દીવાની અદાલતમાં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 28
            "q": "તાલુકા અદાલતમાં ન્યાય ના મળ્યો હોય તો કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                },
                {
                    "option": "ન્યાયપંચાયતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "એકેયેમાં નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા અદાલતમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 29
            "q": "તાલુકા અદાલતની ઉપર કઈ અદાલત કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": true
                },
                {
                    "option": "ગ્રામ અદાલત",
                    "correct": false
                },
                {
                    "option": "લોકઅદાલત",
                    "correct": false
                },
                {
                    "option": "મુખી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા અદાલત</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "આપણા દેશમાં ન્યાયતંત્રની વ્યવસ્થા કેવી છે ?",
            "a": [
                {
                    "option": "તૂટક",
                    "correct": false
                },
                {
                    "option": "સળંગ",
                    "correct": true
                },
                {
                    "option": "વાંકી",
                    "correct": false
                },
                {
                    "option": "આડી અવળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સળંગ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 31
            "q": "આપણા દેશનું ન્યાયતંત્ર કેવું છે ?",
            "a": [
                {
                    "option": "સ્વતંત્ર અને નિષ્પક્ષ",
                    "correct": true
                },
                {
                    "option": "બંધક અને એકપક્ષીય",
                    "correct": false
                },
                {
                    "option": "સ્વતંત્ર અને એકપક્ષીય",
                    "correct": false
                },
                {
                    "option": "બંધક અને નિષ્પક્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વતંત્ર અને નિષ્પક્ષ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "દેશના કાયદાનું પાલન ન કરનાર શું છે ?",
            "a": [
                {
                    "option": "સારો માણસ",
                    "correct": false
                },
                {
                    "option": "સુપુત્ર",
                    "correct": false
                },
                {
                    "option": "આદર્શ માણસ",
                    "correct": false
                },
                {
                    "option": "ગુનેગાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનેગાર</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 33
            "q": "ગુનો કરનાર વ્યક્તિ બીજાનું શું છીનવે છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": true
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "કામ",
                    "correct": false
                },
                {
                    "option": "કર્તવ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હક</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 34
            "q": "કઈ અદાલતના વડા જિલ્લાની બધી અદાલતોના વડા છે ?",
            "a": [
                {
                    "option": "તાલુકા",
                    "correct": false
                },
                {
                    "option": "જિલ્લા",
                    "correct": true
                },
                {
                    "option": "ગ્રામ",
                    "correct": false
                },
                {
                    "option": "મંડળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 35
            "q": "રાજ્યની સૌથી મોટી અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 36
            "q": "કઈ અદાલતને નજીરી અદાલત કહે છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "રાજ્યની વડી અદાલતના ન્યાયાધીશને પ્રતિજ્ઞા કોણ લેવડાવે છે ?",
            "a": [
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": true
                },
                {
                    "option": "લોકપાલ",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 38
            "q": "રાજયની વડી અદાલતને અંગ્રેજીમાં શું કહે છે ?",
            "a": [
                {
                    "option": "સુપ્રિમ કોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાઇકોર્ટ",
                    "correct": true
                },
                {
                    "option": "હાઇટકોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાયરકોર્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇકોર્ટ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 39
            "q": "અદાલતમાં દાવો કરનારને શું કહેવાય ?",
            "a": [
                {
                    "option": "ફરિયાદી",
                    "correct": true
                },
                {
                    "option": "વકીલ",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફરિયાદી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 40
            "q": "ગુનો કરનારને પોલીસ પકડીને લઈ જાય તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "ધરપકડ",
                    "correct": true
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધરપકડ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 41
            "q": "તહોમતદારને-ગુનેગારને પકડી લાવવા માટે ન્યાયાધીશ હુકમ કરે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "ધરપકડ",
                    "correct": false
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": true
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અટકાયત",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૉરન્ટ/p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 42
            "q": "બાર કાઉન્સિલ તરફથી વકીલાત કરવા માટેની સનદ ધરાવતો કાયદાનો નિષ્ણાત કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "જજ",
                    "correct": false
                },
                {
                    "option": "ફરિયાદી",
                    "correct": false
                },
                {
                    "option": "વકીલ",
                    "correct": true
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વકીલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 43
            "q": "નીચલી અદાલતના ચુકાદાનો ન્યાય મેળવવા માટે ઉપલી અદાલતમાં દાખલ કરવાની અરજીને શું કહે છે ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": false
                },
                {
                    "option": "ફરિયાદ",
                    "correct": false
                },
                {
                    "option": "દાવો",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અપીલ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "પોતાના કેસ માટે વકીલ રોકનાર વ્યક્તિને શું કહે છે ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": true
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "એફ.આર.આઈ",
                    "correct": false
                },
                {
                    "option": "જુબાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અસીલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 45
            "q": "ન્યાયાધીશની રૂબરૂ કોઈનો જવાબ લેવામાં કે નોંધવામાં આવે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "જવાની",
                    "correct": false
                },
                {
                    "option": "જુબાની",
                    "correct": true
                },
                {
                    "option": "અટકાયત",
                    "correct": false
                },
                {
                    "option": "ભવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જુબાની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 46
            "q": "ગુનાહિત કૃત્ય કરનારને પોલીસ દ્વારા પકડવામાં આવે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": false
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અટકાયત",
                    "correct": true
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અટકાયત</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "'ફળિયામાં ઝઘડો થયો. માજીને વાગ્યું.' આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 48
            "q": "'ફળિયામાં ઝઘડો થયો. માજીને વાગ્યું.' આ કેસની કાર્યવાહી કઈ અદાલતમાં ચાલશે ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની અદાલતમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 49
            "q": "'રમેશભાઈ ઉપર હુમલો થયો.' આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 50
            "q": "'વાહનને અકસ્માત થયો.' આ કેસની કાર્યવાહી કઈ અદાલતમાં ચાલશે ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની અદાલતમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 51
            "q": "જિલ્લા અદાલતના ચુકાદાથી સંતોષ ન થાય તો કઈ અદાલતમાં કાર્યવાહી કરી શકીએ ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલતમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 52
            "q": "'જમીનદારે કૃષ્નાબેનની જમીન પચાવી પાડી. તેના બદલામાં કોઈ નાણાં આપ્યા ન હતા.'  આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 53
            "q": "તાલુકા અદાલતમાં કયા દાવાઓ સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાની</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "જિલ્લા અદાલતમાં કયા દાવાઓ સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી-દીવાની બન્ને</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 55
            "q": "વડી અદાલતમાં કયા દાવા સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી-દીવાની બન્ને</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 56
            "q": "અદાલતમાં ન્યાયની દેવીના હાથમાં ત્રાજવું શાનું પ્રતિક છે ?",
            "a": [
                {
                    "option": "સમતોલ ન્યાય આપવાનું",
                    "correct": true
                },
                {
                    "option": "અસમતોલ ન્યાય આપવાનું",
                    "correct": false
                },
                {
                    "option": "અસંતોષ ન્યાય આપવાનું",
                    "correct": false
                },
                {
                    "option": "સંતોષ ન્યાય આપવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમતોલ ન્યાય આપવાનું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "અદાલતમાં ન્યાયની દેવીના હાથમાં તલવાર શાનું પ્રતિક છે ?",
            "a": [
                {
                    "option": "ગુનો સાબિત થાય તો સજા કરવાનું",
                    "correct": true
                },
                {
                    "option": "ગુનો સાબિત થાય તો છોડી મુકવાનું",
                    "correct": false
                },
                {
                    "option": "ગુનો સાબિત ન થાય તો સજા કરવાનું",
                    "correct": false
                },
                {
                    "option": "સમતોલ સજા આપવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનો સાબિત થાય તો સજા કરવાનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 58
            "q": "ન્યાયની દેવીની આંખે પાટા શું સૂચવે છે ?",
            "a": [
                {
                    "option": "પક્ષપાત રાખ્યા વિના સૌ માટે સમાન ન્યાય તોલવાનું",
                    "correct": true
                },
                {
                    "option": "પક્ષપાત રાખી સૌ માટે સમાન ન્યાય તોલવાનું",
                    "correct": false
                },
                {
                    "option": "પક્ષપાત રાખ્યા વિના સૌ માટે અસમાન ન્યાય તોલવાનું",
                    "correct": false
                },
                {
                    "option": "ભેદભાવ રાખી સૌ માટે અસમાન ન્યાય તોલવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પક્ષપાત રાખ્યા વિના સૌ માટે સમાન ન્યાય તોલવાનું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 59
            "q": "દેશની સર્વોચ્ચ અદાલતના ન્યાયાધીશને પ્રતિજ્ઞા કોણ લેવડાવે છે ?",
            "a": [
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": true
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": false
                },
                {
                    "option": "લોકપાલ",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                } // no comma here
 ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાષ્ટ્રપતિ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "સર્વોચ્ચ અદાલતને અંગ્રેજીમાં શું કહે છે ?",
            "a": [
                {
                    "option": "સુપ્રિમ કોર્ટ",
                    "correct": true
                },
                {
                    "option": "હાઇકોર્ટ",
                    "correct": false
                },
                {
                    "option": "સુપ્રિમો કોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાયરકોર્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સુપ્રિમ કોર્ટ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 61
            "q": "અદાલતોનું ભારણ ઘટાડવા માટે કઈ અદાલતો કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "લોક અદાલતો",
                    "correct": true
                },
                {
                    "option": "ન્યાય સમિતિની અદાલતો",
                    "correct": false
                },
                {
                    "option": "ગ્રામ અદાલતો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય અદાલતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોક અદાલતો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 62
            "q": "લોક-અદાલતો બન્ને પક્ષો વચ્ચે શું કરાવે છે ?",
            "a": [
                {
                    "option": "સમાધાન",
                    "correct": true
                },
                {
                    "option": "ઝઘડા",
                    "correct": false
                },
                {
                    "option": "વેરઝેર",
                    "correct": false
                },
                {
                    "option": "લૂંટફાટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમાધાન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "ભારતમાં ક્રાંતિકારી પ્રવૃત્તિની શરૂઆત કોણે કરી હતી ?",
            "a": [
                {
                    "option": "વીર સાવરકરે",
                    "correct": false
                },
                {
                    "option": "ચંન્દ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": true
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વાસુદેવ બળવંત ફડકેએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ક્યા ક્રાંતિવીરના માથા માટે અંગ્રેજ સરકારે રૂપિયા ચાર હજારનું ઇનામ જાહેર કર્યું હતું ?",
            "a": [
                {
                    "option": "વાસુદેવ બળવંત ફડકેના",
                    "correct": true
                },
                {
                    "option": "મદનલાલ ઢીંગરાના",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદના",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વાસુદેવ બળવંત ફડકેના</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ભારતમાં વિદેશી કાપડની હોળી સૌપ્રથમ કોણે કરી હતી ?",
            "a": [
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "ખુદીરામ બોઝે",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીર સાવરકરે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "'1857: ભારતનો પ્રથમ સ્વાતંત્ર્યસંગ્રામ' નામનું પુસ્તક કોણે લખ્યું હતું ?",
            "a": [
                {
                    "option": "ખુદીરામ બોઝે",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરે",
                    "correct": true
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીર સાવરકરે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગંગા નદીમાં મીઠું લઈને પસાર થતી હોડીઓને કોણ ઉથલાવી દેતું હતું ?",
            "a": [
                {
                    "option": "રામપ્રસાદ બિસ્મિલ",
                    "correct": false
                },
                {
                    "option": "ખુદીરામ બોઝ",
                    "correct": true
                },
                {
                    "option": "અશફાક ઉલ્લાખાં",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખુદીરામ બોઝ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "કાકોરી ટ્રેન ધાડ સફળતાપૂર્વક પાર પાડવામાં કોણે મહત્ત્વનો ભાગ ભજવ્યો હતો ?",
            "a": [
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": true
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રામપ્રસાદ બિસ્મિલે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "કયા ક્રાંતિવીરની કવિતાઓએ રાષ્ટ્રીય ચેતનાનું પ્રેરકબળ પૂરું પાડ્યું ?",
            "a": [
                {
                    "option": "અશફાક ઉલ્લાખાંની",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરની",
                    "correct": false
                },
                {
                    "option": "રામપ્રસાદ બિસ્મિલની",
                    "correct": true
                },
                {
                    "option": "ખુદીરામ બોઝની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રામપ્રસાદ બિસ્મિલની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ક્યા ક્રાંતિવીરે હિંદુ-મુસ્લિમ એકતાનું ઉદાહરણ પૂરું પાડ્યું હતું ?",
            "a": [
                {
                    "option": "નવાબ સલીમુલ્લાએ",
                    "correct": false
                },
                {
                    "option": "અશફાક ઉલ્લાખાંએ",
                    "correct": true
                },
                {
                    "option": "બહાદુરશાહ ઝફરે",
                    "correct": false
                },
                {
                    "option": "અશફાક આગાખાએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અશફાક ઉલ્લાખાંએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ક્યા ક્રાતિવીરે પ્રતિજ્ઞા લીધી હતી કે, 'હું જીવતો અંગ્રેજ સરકારના હાથમાં પકડાઈશ નહિ.'?",
            "a": [
                {
                    "option": "વીર સાવરકરે",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": true
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": false
                },
                {
                    "option": "ભગતસિંહે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચંદ્રશેખર આઝાદે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "'મિત્રમેલા' નામની સંસ્થા કોણે સ્થાપી હતી ?",
            "a": [
                {
                    "option": "વીર સાવરકરે",
                    "correct": true
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": false
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીર સાવરકરે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "આર્યસમાજના મંદિર પર થયેલો હુમલો કોણે અટકાવ્યો હતો ?",
            "a": [
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "અશફાક ઉલ્લાખાંએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અશફાક ઉલ્લાખાંએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ક્યા ક્રાંતિવીરે દિલ્લીની ધારાસભામાં બૉમ્બ ફેંક્યો હતો ?",
            "a": [
                {
                    "option": "સુખદેવે",
                    "correct": false
                },
                {
                    "option": "ભગતસિંહે",
                    "correct": true
                },
                {
                    "option": "રાજગુરુએ",
                    "correct": false
                },
                {
                    "option": "સરદારસિંહ રાણાએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભગતસિંહે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ક્યા દેશનેતાના અવસાનનો બદલો લેવા માટે સોન્ડર્સનું ખૂન સુખદેવ, ભગતસિંહ, રાજગુરુએ કર્યું ?",
            "a": [
                {
                    "option": "બાળા ગંગાધર ટિળકના",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલેના",
                    "correct": false
                },
                {
                    "option": "લાલા લજપતરાયના",
                    "correct": true
                },
                {
                    "option": "સુરેન્દ્રનાથ બેનરજીના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાલા લજપતરાયના</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ઇંગ્લૅન્ડમાં ક્રાંતિકારી પ્રવૃતિની સૌપ્રથમ શરૂઆત કોણે કરી હતી ?",
            "a": [
                {
                    "option": "લાલા હરદયાળે",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્યામજી કૃષ્ણ વર્માએ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "લંડનમાં 'ઇન્ડિયન હોમરૂલ સોસાયટી' ની સ્થાપના કોણે કરી હતી ?",
            "a": [
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "મૅડમ કામાએ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્યામજી કૃષ્ણ વર્માએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ક્યા ક્રાંતિવીરે ભરબજારે કર્નલ વિલિયમ વાયલીને ગોળીથી ઠાર કર્યો હતો ?",
            "a": [
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": true
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "ભગતસિંહે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મદનલાલ ઢીંગરાએ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ક્યા ક્રાંતિવીરનું સ્વિટ્ઝરલૅન્ડમાં અવસાન થયું હતું ?",
            "a": [
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માનું",
                    "correct": true
                },
                {
                    "option": "ભગતસિંહનું",
                    "correct": false
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેનું",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્યામજી કૃષ્ણ વર્માનું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ક્યા ક્રાતિવીરે વિદેશમાં ભારતીયો માટે શિષ્યવૃત્તિની વ્યવસ્થા કરી હતી ?",
            "a": [
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": true
                },
                {
                    "option": "લાલા હરદયાળે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્યામજી કૃષ્ણ વર્માએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "વિદેશમાં ભારતનો ત્રિરંગો રાષ્ટ્રધ્વજ કોણે ફરકાવ્યો ?",
            "a": [
                {
                    "option": "સરદારસિંહ રાણાએ",
                    "correct": false
                },
                {
                    "option": "મૅડમ કામાએ",
                    "correct": true
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": false
                },
                {
                    "option": "લાલા હરદયાળે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મૅડમ કામાએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "કોણે પોતાના પિતાનું નામ 'સ્વાધીનતા' અને પોતાનું ઘર 'જેલખાનું' બતાવ્યું હતું ?",
            "a": [
                {
                    "option": "ભગતસિંહે ",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માએ",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": true
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચંદ્રશેખર આઝાદે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "કયા ક્રાંતિવીર ખેલકૂદના શોખીન તેમજ ઘોડેસવારી અને બંદૂક ચલાવવામાં પ્રવીણ હતા ?",
            "a": [
                {
                    "option": "અશફાક ઉલ્લાખાં",
                    "correct": true
                },
                {
                    "option": "વીર સાવરકર",
                    "correct": false
                },
                {
                    "option": "રામપ્રસાદ બિસ્મિલ",
                    "correct": false
                },
                {
                    "option": "ખુદીરામ બોઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અશફાક ઉલ્લાખાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કોના ત્રાસથી વાસુદેવ બળવંત ફડકેએ નોકરી છોડી દીધી ?",
            "a": [
                {
                    "option": "ફેંચોના",
                    "correct": false
                },
                {
                    "option": "અંગ્રેજોના",
                    "correct": true
                },
                {
                    "option": "પોર્ટુગીઝોના",
                    "correct": false
                },
                {
                    "option": "ડચ લોકોના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અંગ્રેજોના</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "વાસુદેવ બળવંત ફડકે ક્યાં નોકરી કરતા હતા ?",
            "a": [
                {
                    "option": "બૉમ્બેમાં",
                    "correct": false
                },
                {
                    "option": "દિલ્લીમાં",
                    "correct": false
                },
                {
                    "option": "પૂણેમાં",
                    "correct": true
                },
                {
                    "option": "સિક્કીમમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂણેમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "દેશને ગુલામીમાંથી મુક્ત ન કરું, ત્યાં સુધી કપાળ પર ચંદન ન લગાડવાની તથા કેશકર્તન ન કરવાની કોણે પ્રતિજ્ઞા લીધી ?",
            "a": [
                {
                    "option": "ચંદ્રશેખર આઝાદે",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાએ",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરે",
                    "correct": false
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાસુદેવ બળવંત ફડકેએ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "નીચેનામાંથી વાસુદેવ બળવંત ફડકે કઈ ક્રાંતિકારી પ્રવૃત્તિ કરતા હતા ?",
            "a": [
                {
                    "option": "આપેલી બધી",
                    "correct": true
                },
                {
                    "option": "અંગેજ થાણાં પર હુમલા કરવા",
                    "correct": false
                },
                {
                    "option": "સરકારી તિજોરી લૂંટવી",
                    "correct": false
                },
                {
                    "option": "હિન્દીઓને બંદૂક ચલાવવાની તાલીમ આપવી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલી બધી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "વીર સાવરકરનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "28 એપ્રિલ, 1888માં",
                    "correct": false
                },
                {
                    "option": "28 મે, 1883માં",
                    "correct": true
                },
                {
                    "option": "31 મે, 1883માં",
                    "correct": false
                },
                {
                    "option": "28 મે, 1885માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 28 મે, 1883માં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "વીર સાવરકરનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં",
                    "correct": true
                },
                {
                    "option": "રાજસ્થાનના જયપુરના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશના ધાર જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "ગુજરાતના કચ્છ જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "'મિત્રમેલા' નામની સંસ્થા પાછળથી ક્યા નામે જાણીતી બની ?",
            "a": [
                {
                    "option": "અત્યારનું ભારત",
                    "correct": false
                },
                {
                    "option": "અભિનય ભારત",
                    "correct": false
                },
                {
                    "option": "અભિનેતા ભારત",
                    "correct": false
                },
                {
                    "option": "અભિનવ ભારત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અભિનવ ભારત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "મિત્રમેલા સંસ્થાનો હેતુ શું હતો ?",
            "a": [
                {
                    "option": "સશસ્ત્ર વિપ્લવ દ્વારા અંગ્રેજ શાસનનો અંત",
                    "correct": true
                },
                {
                    "option": "સમજાવટ દ્વારા અંગ્રેજ શાસનનો અંત",
                    "correct": false
                },
                {
                    "option": "સવિનય કાનૂનભંગ દ્વારા અંગ્રેજ શાસનનો અંત",
                    "correct": false
                },
                {
                    "option": "આંદોલન દ્વારા અંગ્રેજ શાસનનો અંત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સશસ્ત્ર વિપ્લવ દ્વારા અંગ્રેજ શાસનનો અંત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "વીર સાવરકર કોની સંસ્થામાંથી શિષ્યવૃત્તિ મેળવી વધુ અભ્યાસ માટે લંડન ગયા ?",
            "a": [
                {
                    "option": "મદનલાલ ઢીંગરાની",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદની",
                    "correct": false
                },
                {
                    "option": "શ્યામજી કૃષ્ણ વર્માની",
                    "correct": true
                },
                {
                    "option": "લાલા હરદયાળની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્યામજી કૃષ્ણ વર્માની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ક્યા ક્રાંતિવીરનું પુસ્તક પ્રકાશન પહેલાં જ પ્રતિબંધિત થયેલું વિશ્વનું પ્રથમ પુસ્તક હતું ?",
            "a": [
                {
                    "option": "ચંદ્રશેખર આઝાદનું",
                    "correct": false
                },
                {
                    "option": "મદનલાલ ઢીંગરાનું",
                    "correct": false
                },
                {
                    "option": "વિનાયક સાવરકરનું",
                    "correct": true
                },
                {
                    "option": "વાસુદેવ બળવંત ફડકેનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિનાયક સાવરકરનું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "વીર સાવરકરને કાળાપાણીની સજા થતા કઈ જેલમાં મોકલાયા ?",
            "a": [
                {
                    "option": "દિલ્લીની",
                    "correct": false
                },
                {
                    "option": "મુંબઈની",
                    "correct": false
                },
                {
                    "option": "નિકોબારની",
                    "correct": false
                },
                {
                    "option": "આંદામાનની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આંદામાનની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "કઈ તારીખે વીર સાવરકર અવસાન પામ્યા ?",
            "a": [
                {
                    "option": "28 એપ્રિલ, 1988માં",
                    "correct": false
                },
                {
                    "option": "28 મે, 1883માં",
                    "correct": false
                },
                {
                    "option": "26 ફેબ્રુઆરી, 1966માં",
                    "correct": true
                },
                {
                    "option": "28 મે, 1985માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 26 ફેબ્રુઆરી, 1966માં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "ખુદીરામ બોઝનો જ્ન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાનના જયપુરના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશના ધાર જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "બંગાળાના મેદિનીપુર જિલ્લાના મોહબની ગામમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંગાળાના મેદિનીપુર જિલ્લાના મોહબની ગામમાં</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "ખુદીરામ બોઝને કયા શિક્ષકે ક્રાન્તિકારીપથની દીક્ષા આપી ?",
            "a": [
                {
                    "option": "સજ્જનબાબુએ",
                    "correct": false
                },
                {
                    "option": "અરવિંદ ઘોષે",
                    "correct": false
                },
                {
                    "option": "સત્યેનબાબુએ",
                    "correct": true
                },
                {
                    "option": "રવિન્દ્રનાથ ટાગોરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સત્યેનબાબુએ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "કોને ખતમ કરવા માટે ખુદીરામ અને પ્રફુલ્લ ચાકીએ ન્યાયાધીશની ઘોડાગાડી ઉપર બૉમ્બ ફેંક્યો ?",
            "a": [
                {
                    "option": "કૅનેડીને",
                    "correct": false
                },
                {
                    "option": "જનરલ ડાયરને",
                    "correct": false
                },
                {
                    "option": "સાયમનને",
                    "correct": false
                },
                {
                    "option": "કિંગ્સફૉર્ડને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિંગ્સફૉર્ડને</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "રામપ્રસાદ બિસ્મિલનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્ર રાજ્યના ભગૂરમાં",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન રાજ્યના શાહજહાંપુરમાં ",
                    "correct": false
                },
                {
                    "option": "ઉત્તરપ્રદેશ રાજ્યના શાહજહાંપુરમાં",
                    "correct": true
                },
                {
                    "option": "બંગાળાના મોહબનીમાં ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તરપ્રદેશ રાજ્યના શાહજહાંપુરમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "શાહજહાંપુરમાં આર્યસમાજના મંદિર પર થયેલ હુમલો કોણે રોક્યો હતો ?",
            "a": [
                {
                    "option": "અશફાક ઉલ્લાખાંએ",
                    "correct": false
                },
                {
                    "option": "વીર સાવરકરે",
                    "correct": false
                },
                {
                    "option": "રામપ્રસાદ બિસ્મિલે",
                    "correct": true
                },
                {
                    "option": "ખુદીરામ બોઝે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રામપ્રસાદ બિસ્મિલે</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ચંદ્રશેખર આઝાદનું મૂળ નામ શું હતું ?",
            "a": [
                {
                    "option": "ચંદ્રશેખર રામકુમાર તિવારી",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર સાખકુમાર તિવારી",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર સીતારામ તિવારી",
                    "correct": true
                },
                {
                    "option": "ચંદ્રશેખર સીતસાગર તિવારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચંદ્રશેખર સીતારામ તિવારી</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "ચંદ્રશેખર આઝાદનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાનના જયપુરના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "મધ્યપ્રદેશના ઝાબુઆ જિલ્લાના ભાવરા ગામમાં",
                    "correct": true
                },
                {
                    "option": "બંગાળાના મેદિનીપુર જિલ્લાના મોહબની ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મધ્યપ્રદેશના ઝાબુઆ જિલ્લાના ભાવરા ગામમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "ચંદ્રશેખર આઝાદે પ્રારંભિક અભ્યાસ ક્યાં કર્યો હતો ?",
            "a": [
                {
                    "option": "કાશીમાં",
                    "correct": true
                },
                {
                    "option": "કાશ્મીરમાં",
                    "correct": false
                },
                {
                    "option": "કચ્છમાં",
                    "correct": false
                },
                {
                    "option": "કાંચીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાશીમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "અદાલતમાં ચંદ્રશેખર આઝાદે પોતાનું ઘર કયું બતાવ્યું હતું ?",
            "a": [
                {
                    "option": "જંજીર",
                    "correct": false
                },
                {
                    "option": "જેલખાનું",
                    "correct": true
                },
                {
                    "option": "બંગલો",
                    "correct": false
                },
                {
                    "option": "જીમખાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જેલખાનું</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "ચંદ્રશેખર આઝાદ ક્યાં બેઠા હતા ત્યારે અંગેજોએ એમને ઘેરી લીધા ?",
            "a": [
                {
                    "option": "અલાહાબાદના આલ્ફ્રેડ બાગમાં",
                    "correct": true
                },
                {
                    "option": "અમદાવાદના કાકરિયા બાગમાં",
                    "correct": false
                },
                {
                    "option": "અમૃતસરના જલિયાંવાલા બાગમાં",
                    "correct": false
                },
                {
                    "option": "વડોદરાના કમાટીબાગમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અલાહાબાદના આલ્ફ્રેડ બાગમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "ચંદ્રશેખર આઝાનું મૃત્યુ કેવી રીતે થયું ?",
            "a": [
                {
                    "option": "અંગેજોની ગોળીથી",
                    "correct": false
                },
                {
                    "option": "પોલીસની ગોળીથી",
                    "correct": false
                },
                {
                    "option": "વિમાન દુર્ઘનાથી",
                    "correct": false
                },
                {
                    "option": "પોતાની ગોળીથી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોતાની ગોળીથી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "9 ઑગષ્ટ,1925ના રોજ સરકારી ખજાનો રેલવે દ્વારા સહરાનપુરથી લખનૌ જતો હતો ત્યારે ક્રાંતિકારીઓએ ક્યા રેલવે-સ્ટેશને આ ગાડીને લૂંટી હતી ?",
            "a": [
                {
                    "option": "કાકોરી",
                    "correct": true
                },
                {
                    "option": "કાવેરી",
                    "correct": false
                },
                {
                    "option": "કાંકડી",
                    "correct": false
                },
                {
                    "option": "કાંગડી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાકોરી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "ભગતસિંહનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્રના નાસિક જિલ્લાના ભગૂર ગામમાં",
                    "correct": false
                },
                {
                    "option": "પંજાબના લાયલપુર જિલ્લાના બંગા ગામમાં",
                    "correct": true
                },
                {
                    "option": "મધ્યપ્રદેશના ઝાબુઆ જિલ્લાના ભાવરા ગામમાં",
                    "correct": false
                },
                {
                    "option": "બંગાળાના મેદિનીપુર જિલ્લાના મોહબની ગામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પંજાબના લાયલપુર જિલ્લાના બંગા ગામમાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "ક્યાં ભણવા ગયા ત્યારે ભગતસિંહને સુખદેવ, ભગવતીચરણ અને યશપાલનો પરિચય થયો ?",
            "a": [
                {
                    "option": "લાહોર નેશનલ કૉલેજમાં",
                    "correct": true
                },
                {
                    "option": "લાહોર  મુસ્લિમ કૉલેજમાં",
                    "correct": false
                },
                {
                    "option": "અલીગઢ નેશનલ કૉલેજમાં",
                    "correct": false
                },
                {
                    "option": "અલીગઢ  મુસ્લિમ કૉલેજમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાહોર નેશનલ કૉલેજમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "ભગતસિંહ અને બટુકેશ્વર દત્તનો ધારાસભામાં બૉમ્બ ફેંકવાનો ઇરાદો શું હતો ?",
            "a": [
                {
                    "option": "બાડી થઈ ગયેલી અંગ્રેજ સરકારને જોતી કરવાનો હતો.",
                    "correct": false
                },
                {
                    "option": "લંગડી થઈ ગયેલી અંગ્રેજ સરકારને સહારો આપવાનો હતો.",
                    "correct": false
                },
                {
                    "option": "મૂંગી થઈ ગયેલી અંગ્રેજ સરકારને બોલતી કરવાનો હતો.",
                    "correct": false
                },
                {
                    "option": "બહેરી થઈ ગયેલી અંગ્રેજ સરકારને જગાડવાનો હતો.",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહેરી થઈ ગયેલી અંગ્રેજ સરકારને જગાડવાનો હતો.</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "23 માર્ચ, 1931ના રોજ કોને ફાંસી આપવામાં આવી ?",
            "a": [
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "ભગતસિંહ",
                    "correct": false
                },
                {
                    "option": "સુખદેવ",
                    "correct": false
                },
                {
                    "option": "રાજગુરુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "શ્યામજી કૃષ્ણ વર્માનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "રાજકોટના માંડલમાં",
                    "correct": false
                },
                {
                    "option": "કચ્છના માંડવીમાં",
                    "correct": true
                },
                {
                    "option": "અમદાવાદના માંડલમાં",
                    "correct": false
                },
                {
                    "option": "કચ્છના રાપરમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કચ્છના માંડવીમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "લંડનમાં 'ઇન્ડિયન હોમરૂલ સોસાયટી'નામની સંસ્થાનું કાર્યાલય કયા નામે મકાનમાં રાખવામાં આવ્યું હતું ?",
            "a": [
                {
                    "option": "ઇન્ડિયા-મકાન",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિયન સોશિયોલૉજિસ્ટ",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિયા-હાઉસ",
                    "correct": true
                },
                {
                    "option": "વેસ્ટ ઇન્ડિઝ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇન્ડિયા-હાઉસ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "'ઇન્ડિયન હોમરૂલ સોસાયટી'નામની સંસ્થાના પ્રચાર માટે કયું સામયિક શ્યામજી કૃષ્ણ વર્માએ શરૂ કર્યું ?",
            "a": [
                {
                    "option": "ન્યૂ ઇન્ડિયા",
                    "correct": false
                },
                {
                    "option": "ઇન્ડિયન સોશિયોલૉજિસ્ટ",
                    "correct": true
                },
                {
                    "option": "ઇન્ડિયા-હાઉસ",
                    "correct": false
                },
                {
                    "option": "યંગ ઇન્ડિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇન્ડિયન સોશિયોલૉજિસ્ટ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "મૅડમ કામાનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "મુંબઈમાં",
                    "correct": true
                },
                {
                    "option": "દિલ્લીમાં",
                    "correct": false
                },
                {
                    "option": "ચેન્નઈમાં",
                    "correct": false
                },
                {
                    "option": "કોલકાતામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુંબઈમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "ઇ.સ. 1907માં કયાં યોજાયેલી બીજી આંતરાષ્ટ્રીય સમાજવાદી પરિષદમાં મૅડમ કામાએ હાજરી આપી હતી ?",
            "a": [
                {
                    "option": "જર્મનીના સ્ટુઅર્ટ ગાર્ડમાં",
                    "correct": true
                },
                {
                    "option": "સ્વીડનના સ્ટોકહોમમાં",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલના રિયો-ડી-જેનરોમાં",
                    "correct": false
                },
                {
                    "option": "ભારતના દિલ્લીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જર્મનીના સ્ટુઅર્ટ ગાર્ડમાં</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "શ્યામજી કૃષ્ણ વર્માનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "4 ઑક્ટોબર,1857માં",
                    "correct": true
                },
                {
                    "option": "24 સપ્ટેમ્બર,1857માં",
                    "correct": false
                },
                {
                    "option": "4 નવેમ્બર,1857માં",
                    "correct": false
                },
                {
                    "option": "4 સપ્ટેમ્બર,1861માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4 ઑક્ટોબર,1857માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "મૅડમ કામાનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "4 ઑક્ટોબર,1857માં",
                    "correct": false
                },
                {
                    "option": "24 સપ્ટેમ્બર,1857માં",
                    "correct": false
                },
                {
                    "option": "4 નવેમ્બર,1857માં",
                    "correct": false
                },
                {
                    "option": "4 સપ્ટેમ્બર,1861માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4 સપ્ટેમ્બર,1861માં</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "ભારતમાં દર કેટલાં વર્ષે  વસ્તીગણતરી કરવામાં આવે છે ?",
            "a": [
                {
                    "option": "ચાર",
                    "correct": false
                },
                {
                    "option": "પાંચ",
                    "correct": false
                },
                {
                    "option": "દસ",
                    "correct": true
                },
                {
                    "option": "બાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દસ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "વિશ્વમાં વિસ્તારની દ્રષ્ટિએ ભારત કેટલામા ક્રમે છે ?",
            "a": [
                {
                    "option": "ત્રીજા",
                    "correct": false
                },
                {
                    "option": "ચોથા",
                    "correct": false
                },
                {
                    "option": "પાંચમા",
                    "correct": false
                },
                {
                    "option": "સાતમા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સાતમા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "વસ્તીની દ્રષ્ટિએ ક્યો દેશ વિશ્વમાં પ્રથમ સ્થાને છે ?",
            "a": [
                {
                    "option": "ચીન",
                    "correct": true
                },
                {
                    "option": "રશિયા",
                    "correct": false
                },
                {
                    "option": "યુ.એસ.એ. ",
                    "correct": false
                },
                {
                    "option": "ભારત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચીન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "છેલ્લા દાયકામાં ભારતની વસ્તીનો વૃદ્ધિનો દર વાર્ષિક કેટલા ટકા હતો ?",
            "a": [
                {
                    "option": "1.2",
                    "correct": false
                },
                {
                    "option": "0.3",
                    "correct": false
                },
                {
                    "option": "1.4",
                    "correct": false
                },
                {
                    "option": "1.6",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  1.6</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગુજરાતમાં કયો જિલ્લો સૌથી વધારે વસ્તી ધરાવે છે ?",
            "a": [
                {
                    "option": "સુરત",
                    "correct": false
                },
                {
                    "option": "વડોદરા",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ગુજરાતમાં કયા જિલ્લાની વસ્તીગીચતા સૌથી વધુ છે ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "આણંદ",
                    "correct": false
                },
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુરત</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ભારતમાં કયા રાજ્યની વસ્તી સૌથી વધુ છે ?",
            "a": [
                {
                    "option": "ઉત્તર પ્રદેશ",
                    "correct": true
                },
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ બંગાળ",
                    "correct": false
                },
                {
                    "option": "બિહાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઉત્તર પ્રદેશ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ભારતમાં સૌથી ઓછી વસ્તી ક્યાં છે ?",
            "a": [
                {
                    "option": "લક્ષદ્વિપમાં",
                    "correct": true
                },
                {
                    "option": "દીવ અને દમણમાં",
                    "correct": false
                },
                {
                    "option": "સિક્કીમમાં",
                    "correct": false
                },
                {
                    "option": "ગોવામાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લક્ષદ્વિપમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ગુજરાતમાં કેટલા ટકા વસ્તી ગ્રામ્ય વિસ્તારમાં વસે છે ?",
            "a": [
                {
                    "option": "28%",
                    "correct": false
                },
                {
                    "option": "38%",
                    "correct": false
                },
                {
                    "option": "62%",
                    "correct": true
                },
                {
                    "option": "72%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  62%</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ભારતમાં વરિષ્ઠ નાગરિકોનું પ્રમાણ કુલ વસ્તીના કેટલા ટકા છે ?",
            "a": [
                {
                    "option": "4%",
                    "correct": false
                },
                {
                    "option": "7%",
                    "correct": true
                },
                {
                    "option": "10%",
                    "correct": false
                },
                {
                    "option": "15%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  7%</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ભારતમાં ક્યું રાજ્ય સૌથી વધુ જાતિ-પ્રમાણ ધરાવે છે ?",
            "a": [
                {
                    "option": "કેરલ",
                    "correct": true
                },
                {
                    "option": "પશ્ચિમ બંગાળ",
                    "correct": false
                },
                {
                    "option": "ઉત્તર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "હરિયાણા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કેરલ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "2011માં ભારતમાં સાક્ષરતાનો દર આશરે કેટલા ટકા હતો ?",
            "a": [
                {
                    "option": "64%",
                    "correct": false
                },
                {
                    "option": "84%",
                    "correct": false
                },
                {
                    "option": "74%",
                    "correct": true
                },
                {
                    "option": "43%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  74%</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ભારતમાં સાક્ષરતાની બાબતમાં કયું રાજ્ય અગ્રસ્થાને છે ?",
            "a": [
                {
                    "option": "મહારાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                },
                {
                    "option": "બિહાર",
                    "correct": false
                },
                {
                    "option": "કેરલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કેરલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ભારતમાં ક્યા રાજ્યમાં સાક્ષરતાનો દર સૌથી ઓછો છે ?",
            "a": [
                {
                    "option": "અરુણાચલ પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "બિહાર",
                    "correct": true
                },
                {
                    "option": "તમિલનાડુ",
                    "correct": false
                },
                {
                    "option": "રાજસ્થાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બિહાર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ભારતમાં રાજ્યોની રચના શાના આધારે થયેલી છે ?",
            "a": [
                {
                    "option": "ધર્મ",
                    "correct": false
                },
                {
                    "option": "જાતિ",
                    "correct": false
                },
                {
                    "option": "ભાષા",
                    "correct": true
                },
                {
                    "option": "કુદરતી સરહદો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભાષા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "દુનિયાની કુલ વસ્તીના આશરે કેટલા ટકા વસ્તી ભારતમાં વસે છે ?",
            "a": [
                {
                    "option": "12%",
                    "correct": false
                },
                {
                    "option": "16%",
                    "correct": true
                },
                {
                    "option": "14%",
                    "correct": false
                },
                {
                    "option": "15%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  16%</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "વિશ્વમાં વસ્તીની દ્રષ્ટીએ ભારત ક્યા ક્રમે છે ?",
            "a": [
                {
                    "option": "પહેલાં",
                    "correct": false
                },
                {
                    "option": "બીજા",
                    "correct": true
                },
                {
                    "option": "ત્રીજા",
                    "correct": false
                },
                {
                    "option": "ચોથા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બીજા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ભારતમાં છેલ્લી જનગણના કઈ સાલમાં થઈ હતી ?",
            "a": [
                {
                    "option": "ઈ.સ. 2001",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1981",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 2011",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1991",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ. 2011</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ભારતમાં પુરૂષ કેટલા વર્ષની ઉંમરે લગ્ન કરી શકે ?",
            "a": [
                {
                    "option": "16 વર્ષની ઉંમરે",
                    "correct": false
                },
                {
                    "option": "21 વર્ષની ઉંમરે",
                    "correct": true
                },
                {
                    "option": "18 વર્ષની ઉંમરે",
                    "correct": false
                },
                {
                    "option": "14  વર્ષની ઉંમરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  21 વર્ષની ઉંમરે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "ભારતમાં ક્યો ધર્મ પાળનારની જનસંખ્યા વધુ છે ?",
            "a": [
                {
                    "option": "શીખ ",
                    "correct": false
                },
                {
                    "option": "ખ્રિસ્તી",
                    "correct": false
                },
                {
                    "option": "હિન્દુ",
                    "correct": true
                },
                {
                    "option": "મુસ્લિમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હિન્દુ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ભારતમાં જે વસ્તીગણતરી કરવામાં આવે છે તેનો આદેશ કોણ આપે છે ?",
            "a": [
                {
                    "option": "કેન્દ્ર સરકાર",
                    "correct": true
                },
                {
                    "option": "રાજ્ય સરકાર",
                    "correct": false
                },
                {
                    "option": "જિલ્લા પંચાયત",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેન્દ્ર સરકાર</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કોઈ પણ દેશમાં અથવા કોઈ પણ વિસ્તારમાં વસતા લોકો વિશેની વિધિવત રૂપે માહિતી મેળવવી અને તેની નોંધણી કરવાની બાબતને શું કહે છે ?",
            "a": [
                {
                    "option": "ગરીબગણતરી",
                    "correct": false
                },
                {
                    "option": "વસતિગણતરી",
                    "correct": true
                },
                {
                    "option": "જાતગણતરી",
                    "correct": false
                },
                {
                    "option": "માસગણતરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વસતિગણતરી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "વસતિગણતરીને અંગેજીમાં શું કહે છે ?",
            "a": [
                {
                    "option": "સેસન",
                    "correct": false
                },
                {
                    "option": "સેમેસ્ટર",
                    "correct": false
                },
                {
                    "option": "સેન્સસ",
                    "correct": true
                },
                {
                    "option": "સેક્ટર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સેન્સસ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "2011ની વસતિગણતરી આઝાદી મળ્યા પછીની કેટલામી હતી ?",
            "a": [
                {
                    "option": "છઠ્ઠી",
                    "correct": false
                },
                {
                    "option": "આઠમી",
                    "correct": false
                },
                {
                    "option": "નવમી",
                    "correct": false
                },
                {
                    "option": "સાતમી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાતમી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "માનવવસતિ એ દેશનું શું છે ?",
            "a": [
                {
                    "option": "માનવધન",
                    "correct": true
                },
                {
                    "option": "માનવમન",
                    "correct": false
                },
                {
                    "option": "માનવગમ",
                    "correct": false
                },
                {
                    "option": "માનવગન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માનવધન</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "કોઈ પણ દેશના વિકાસનો મોટો આધાર શાના પર છે ?",
            "a": [
                {
                    "option": "ખનીજ સંસાધન",
                    "correct": false
                },
                {
                    "option": "જમીન સંસાધન",
                    "correct": false
                },
                {
                    "option": "જળ સંસાધન",
                    "correct": false
                },
                {
                    "option": "માનવ સંસાધન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માનવ સંસાધન</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "2011ની વસતિ ગણતરીની વિશેષતા શું છે ?",
            "a": [
                {
                    "option": "ચૂંટણી ઓળખપત્ર આપવું.",
                    "correct": false
                },
                {
                    "option": "આધારકાર્ડ આપવું.",
                    "correct": true
                },
                {
                    "option": "આરોગ્યકાર્ડ આપવું.",
                    "correct": false
                },
                {
                    "option": "રેશનકાર્ડ આપવું.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આધારકાર્ડ આપવું.</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "દુનિયાની કુલ વસતિના કેટલા ટકાથી વધુ લોકોની વસતિ ભારતમાં રહે છે ?",
            "a": [
                {
                    "option": "12%",
                    "correct": false
                },
                {
                    "option": "14%",
                    "correct": false
                },
                {
                    "option": "13%",
                    "correct": false
                },
                {
                    "option": "16%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 16%</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "દુનિયાના કુલ વિસ્તાર પૈકી કેટલા ટકા ભૂમિ વિસ્તાર ભારતમાં છે ?",
            "a": [
                {
                    "option": "4.42%",
                    "correct": false
                },
                {
                    "option": "4.24%",
                    "correct": false
                },
                {
                    "option": "3.42%",
                    "correct": false
                },
                {
                    "option": "2.42%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2.42%</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ગુણવત્તાવાળી માનવવસતિને શું કહેવાય ?",
            "a": [
                {
                    "option": "માનવબગાડ",
                    "correct": false
                },
                {
                    "option": "માનવ સંસાધન",
                    "correct": true
                },
                {
                    "option": "માખણ સંસાધન",
                    "correct": false
                },
                {
                    "option": "દાનવ સંસાધન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માનવ સંસાધન</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "માનવશક્તિનું મૂલ્ય શાના પર રહેલું છે ?",
            "a": [
                {
                    "option": "ગરીબી અને બેકારી",
                    "correct": false
                },
                {
                    "option": "રોજગારી અને ગરીબી",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધિકતા અને સાક્ષરતા",
                    "correct": true
                },
                {
                    "option": "નિરક્ષરતા અને બેકારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૌદ્ધિકતા અને સાક્ષરતા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "2011ની વસતિગણતરી દરમિયાન ભારતમાં કેટલી વસતિગીચતા નોંધાયેલી છે ?",
            "a": [
                {
                    "option": "375",
                    "correct": false
                },
                {
                    "option": "360",
                    "correct": false
                },
                {
                    "option": "370",
                    "correct": false
                },
                {
                    "option": "382",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 382</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "2011ની વસતિગણતરી મુજબ ગુજરાતનું જાતિ-પ્રમાણ કેટલું છે ?",
            "a": [
                {
                    "option": "918",
                    "correct": true
                },
                {
                    "option": "900",
                    "correct": false
                },
                {
                    "option": "818",
                    "correct": false
                },
                {
                    "option": "940",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 918</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "2011ની વસ્તી ગણતરી વખતે ભારતની વસ્તી આશરે કેટલાં કરોડ જેટલી છે ?",
            "a": [
                {
                    "option": "102",
                    "correct": false
                },
                {
                    "option": "121",
                    "correct": true
                },
                {
                    "option": "100",
                    "correct": false
                },
                {
                    "option": "81",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 121</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "2011માં માનવીનું સરેરાશ આયુષ્ય કેટલા વર્ષનું છે ?",
            "a": [
                {
                    "option": "60/61",
                    "correct": false
                },
                {
                    "option": "55/56",
                    "correct": false
                },
                {
                    "option": "63/64",
                    "correct": true
                },
                {
                    "option": "75/76",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 63/64</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "બાળલગ્ન પ્રતિબંધકધારા મુજબ સ્ત્રીની ઉંમર લગ્ન સમયે કેટલા વર્ષ નક્કી કરેલ છે ?",
            "a": [
                {
                    "option": "25 વર્ષ",
                    "correct": false
                },
                {
                    "option": "18 વર્ષ",
                    "correct": true
                },
                {
                    "option": "14 વર્ષ",
                    "correct": false
                },
                {
                    "option": "21 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 18 વર્ષ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "ગુજરતની કેટલા ટકા વસતિ શહેરી વિસ્તારમાં વસે છે ?",
            "a": [
                {
                    "option": "28%",
                    "correct": false
                },
                {
                    "option": "38%",
                    "correct": true
                },
                {
                    "option": "48%",
                    "correct": false
                },
                {
                    "option": "50%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 38%</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 38
            "q": "દર ચો.કિમીએ સરેરાશ જેટલા લોકોનો વસવાટ થાય તેને શું કહે છે ?",
            "a": [
                {
                    "option": "વસતિગીચતા",
                    "correct": true
                },
                {
                    "option": "જાતિપ્રમાણ",
                    "correct": false
                },
                {
                    "option": "વસતિમાળખું",
                    "correct": false
                },
                {
                    "option": "મૃત્યુદર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વસતિગીચતા</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 39
            "q": "દર હજાર પુરુષોએ સ્ત્રીઓની સંખ્યાના પ્રમાણને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "વસતિગીચતા",
                    "correct": false
                },
                {
                    "option": "જાતિપ્રમાણ",
                    "correct": true
                },
                {
                    "option": "જન્મદર",
                    "correct": false
                },
                {
                    "option": "વસતિમાળખું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાતિપ્રમાણ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 40
            "q": "કોઈ પણ નિશ્ચિત વિસ્તારમાં દર હજારની વસતિએ, એક વરસ દરમિયાન જન્મતાં બાળકોની સંખ્યાને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "વસતિગીચતા",
                    "correct": false
                },
                {
                    "option": "વસતિમાળખું",
                    "correct": false
                },
                {
                    "option": "જન્મદર",
                    "correct": true
                },
                {
                    "option": "મૃત્યુદર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જન્મદર</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 41
            "q": "કોઈ પણ નિશ્ચિત વિસ્તારમાં દર હજારની વસતિએ, એક વરસ દરમિયાન મૃત્યુ પામનાર સંખ્યાને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "વસતિગીચતા",
                    "correct": false
                },
                {
                    "option": "વસતિમાળખું",
                    "correct": false
                },
                {
                    "option": "જન્મદર",
                    "correct": false
                },
                {
                    "option": "મૃત્યુદર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૃત્યુદર</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 42
            "q": "કુલ વસતિના વિવિધ જૂથોમાં કરવામાં આવેલ વર્ગીકરણને શું કહેવાય છે ?",
            "a": [
                {
                    "option": "વસતિગીચતા",
                    "correct": false
                },
                {
                    "option": "વસતિમાળખું",
                    "correct": true
                },
                {
                    "option": "જન્મદર",
                    "correct": false
                },
                {
                    "option": "જાતિ-પ્રમાણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વસતિમાળખું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 43
            "q": "2011ની વસતિગણતરી મુજબ ભારતનું જાતિ-પ્રમાણ કેટલું છે ?",
            "a": [
                {
                    "option": "918",
                    "correct": false
                },
                {
                    "option": "900",
                    "correct": false
                },
                {
                    "option": "818",
                    "correct": false
                },
                {
                    "option": "940",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 940</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 44
            "q": "માનવવસતિ એક સ્થળેથી બીજા સ્થળે રહેઠાણ-બદલી કરે તેને શું કહેવાય છે ?",
            "a": [
                {
                    "option": "વસતિગીચતા",
                    "correct": false
                },
                {
                    "option": "વસતિમાળખું",
                    "correct": false
                },
                {
                    "option": "સ્થળાંતર",
                    "correct": true
                },
                {
                    "option": "જાતિ-પ્રમાણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્થળાંતર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 45
            "q": "6 વરસથી વધુ વયજૂથની કોઈ પણ વ્યક્તિ કોઈ પણ એક ભાષા વાંચી-લખી ને સમજી શકતી હોય તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "નિરક્ષરતા",
                    "correct": false
                },
                {
                    "option": "વસતિમાળખું",
                    "correct": false
                },
                {
                    "option": "સ્થળાંતર",
                    "correct": false
                },
                {
                    "option": "સાક્ષરતા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાક્ષરતા</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 46
            "q": "દેશની વસતિમાં કેટલા પ્રકારનાં પરિવર્તન જોવા મળે છે ?",
            "a": [
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": true
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "દેશની વસતિમાં સંખ્યાત્મક પરિવર્તન જોવા મળે તો શું થાય ?",
            "a": [
                {
                    "option": "વસતિમાં વધઘટ થાય.",
                    "correct": true
                },
                {
                    "option": "વ્યક્તિના વિચાર પરિવર્તન પામે.",
                    "correct": false
                },
                {
                    "option": "વ્યક્તિની રહેણીકરણીમાં ફેરફાર થાય.",
                    "correct": false
                },
                {
                    "option": "વ્યક્તિની જીવનશૈલીમાં ફેરફાર થાય.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વસતિમાં વધઘટ થાય.</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 48
            "q": "ગુજરાતનો કુલ સાક્ષરતા દર 2011ની વસતિગણતરી પ્રમાણે કેટલો છે ?",
            "a": [
                {
                    "option": "79.31 ટકા",
                    "correct": true
                },
                {
                    "option": "87.23 ટકા",
                    "correct": false
                },
                {
                    "option": "70.73 ટકા",
                    "correct": false
                },
                {
                    "option": "74.04 ટકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 79.31 ટકા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 49
            "q": "ગુજરાતનો સ્ત્રી સાક્ષરતા દર 2011ની વસતિગણતરી પ્રમાણે કેટલો છે ?",
            "a": [
                {
                    "option": "79.31 ટકા",
                    "correct": false
                },
                {
                    "option": "80.23 ટકા",
                    "correct": false
                },
                {
                    "option": "70.73 ટકા",
                    "correct": true
                },
                {
                    "option": "72.04 ટકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 70.73 ટકા</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 50
            "q": "ગુજરાતનો પુરૂષ સાક્ષરતા દર 2011ની વસતિગણતરી પ્રમાણે કેટલો છે ?",
            "a": [
                {
                    "option": "79.31 ટકા",
                    "correct": false
                },
                {
                    "option": "87.23 ટકા",
                    "correct": true
                },
                {
                    "option": "77.73 ટકા",
                    "correct": false
                },
                {
                    "option": "78.04 ટકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 87.23 ટકા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 51
            "q": "ભારતનો પુરૂષ સાક્ષરતા દર 2011ની વસતિગણતરી પ્રમાણે કેટલો છે ?",
            "a": [
                {
                    "option": "79.31 ટકા",
                    "correct": false
                },
                {
                    "option": "82.14 ટકા",
                    "correct": true
                },
                {
                    "option": "70.73 ટકા",
                    "correct": false
                },
                {
                    "option": "74.04 ટકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 82.14 ટકા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 52
            "q": "ભારતનો સ્ત્રી સાક્ષરતા દર 2011ની વસતિગણતરી પ્રમાણે કેટલો છે ?",
            "a": [
                {
                    "option": "65.46 ટકા",
                    "correct": true
                },
                {
                    "option": "82.14 ટકા",
                    "correct": false
                },
                {
                    "option": "70.46 ટકા",
                    "correct": false
                },
                {
                    "option": "74.46 ટકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 65.46 ટકા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 53
            "q": "ભારતમાં હાલ કેટલા ટકા બાળકોનું પ્રમાણ છે ?",
            "a": [
                {
                    "option": "3 થી 4%",
                    "correct": true
                },
                {
                    "option": "83 થી 84%",
                    "correct": false
                },
                {
                    "option": "13 થી 14%",
                    "correct": false
                },
                {
                    "option": "23 થી 24%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3 થી 4%</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 54
            "q": "ભારતમાં હાલ કેટલા ટકા વરિષ્ઠ નાગરિકોનું પ્રમાણ છે ?",
            "a": [
                {
                    "option": "4%",
                    "correct": false
                },
                {
                    "option": "7%",
                    "correct": true
                },
                {
                    "option": "14%",
                    "correct": false
                },
                {
                    "option": "24%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 7%</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 55
            "q": "ભારતમાં હાલ કેટલા ટકા પ્રૌઢ નાગરિકોનું પ્રમાણ છે ?",
            "a": [
                {
                    "option": "60 થી 65%",
                    "correct": false
                },
                {
                    "option": "70 થી 78%",
                    "correct": false
                },
                {
                    "option": "80 થી 85%",
                    "correct": false
                },
                {
                    "option": "89 થી 90%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 89 થી 90%</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 56
            "q": "દેશની વસતિને કેટલા વયજૂથમાં વહેંચવામાં આવે છે ?",
            "a": [
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": true
                },
                {
                    "option": "2",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "બાળકોનું વયજૂથ કેટલા વર્ષ સુધીનું હોય છે ?",
            "a": [
                {
                    "option": "0 થી 14",
                    "correct": true
                },
                {
                    "option": "0 થી 18",
                    "correct": false
                },
                {
                    "option": "15 થી 59",
                    "correct": false
                },
                {
                    "option": "10 થી 17",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 0 થી 14</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 58
            "q": "પ્રૌઢોનું વયજૂથ કેટલા વર્ષ સુધીનું હોય છે ?",
            "a": [
                {
                    "option": "12 થી 29",
                    "correct": false
                },
                {
                    "option": "16 થી 69",
                    "correct": false
                },
                {
                    "option": "15 થી 59",
                    "correct": true
                },
                {
                    "option": "17 થી 79",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 15 થી 59</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 59
            "q": "વરિષ્ઠ નાગરિકોનું વયજૂથ કેટલા વર્ષ સુધીનું હોય છે ?",
            "a": [
                {
                    "option": "59 થી વધુ",
                    "correct": false
                },
                {
                    "option": "61 થી  વધુ",
                    "correct": false
                },
                {
                    "option": "75 થી  વધુ",
                    "correct": true
                },
                {
                    "option": "80 થી  વધુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 75 થી  વધુ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 60
            "q": "કઈ સાલ પછી જાતિ પ્રમાણ ક્રમશ: ઘટતું ગયું છે ?",
            "a": [
                {
                    "option": "1951 પછી",
                    "correct": true
                },
                {
                    "option": "1941 પછી",
                    "correct": false
                },
                {
                    "option": "1931 પછી",
                    "correct": false
                },
                {
                    "option": "1921 પછી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1951 પછી</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 61
            "q": "ભારતનાં બંધારણમાં હાલ કેટલી માન્ય ભાષાઓ છે ?",
            "a": [
                {
                    "option": "20",
                    "correct": false
                },
                {
                    "option": "22",
                    "correct": true
                },
                {
                    "option": "18",
                    "correct": false
                },
                {
                    "option": "16",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 22</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 62
            "q": "ભારતમાં વસતિવિસ્ફોટને નિયંત્રિત કરવા કઈ સાલમાં વસતિનીતિ અમલમાં આવી ?",
            "a": [
                {
                    "option": "1950",
                    "correct": false
                },
                {
                    "option": "1948",
                    "correct": false
                },
                {
                    "option": "1951",
                    "correct": true
                },
                {
                    "option": "1991",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1951</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 63
            "q": "શારીરિક, માનસિક, આર્થિક, સામાજિક અને આધ્યાત્મિક તત્ત્વો સાથેની સમૃદ્ધિને શું કહેવાય ?",
            "a": [
                {
                    "option": "વસતિમાળખું",
                    "correct": false
                },
                {
                    "option": "જાતિપ્રમાણ",
                    "correct": false
                },
                {
                    "option": "સાક્ષરતા",
                    "correct": false
                },
                {
                    "option": "આરોગ્ય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આરોગ્ય</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 64
            "q": "કઈ સાલની વસતિગણતરી વખતે સાક્ષરતાનો માપદંડ નક્કી થયેલ છે ?",
            "a": [
                {
                    "option": "1971",
                    "correct": false
                },
                {
                    "option": "1981",
                    "correct": false
                },
                {
                    "option": "1951",
                    "correct": false
                },
                {
                    "option": "1991",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1991</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
	{ // Question 1
            "q": "ગાંધીજી દક્ષિણ આફ્રિકા શા માટે ગયા હતા ?",
            "a": [
                {
                    "option": "વધુ અભ્યાસ માટે",
                    "correct": false
                },
                {
                    "option": "વકીલાત કરવા માટે",
                    "correct": true
                },
                {
                    "option": "વેપાર કરવા માટે",
                    "correct": false
                },
                {
                    "option": "પ્રવાસ કરવા માટે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વકીલાત કરવા માટે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ગાંધીજી દક્ષિણ આફ્રિકાથી ભારત પરત કયારે આવ્યા ?",
            "a": [
                {
                    "option": "ઈ.સ.1905",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1910",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1925",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1915",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1915</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ગાંધીજીએ અમદાવાદમાં સૌપ્રથમ કયા આશ્રમની સ્થાપના કરી?",
            "a": [
                {
                    "option": "સત્યાગ્રહ આશ્રમ",
                    "correct": true
                },
                {
                    "option": "પાલડી આશ્રમ",
                    "correct": false
                },
                {
                    "option": "પવનાર આશ્રમ ",
                    "correct": false
                },
                {
                    "option": "સાબરમતી આશ્રમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સત્યાગ્રહ આશ્રમ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ખેડા સત્યાગ્રહમાં ગાંધીજીના સહયોગી કોણ હતા ?",
            "a": [
                {
                    "option": "વલ્લભભાઈ પટેલ",
                    "correct": true
                },
                {
                    "option": "જવાહરલાલ નહેરુ",
                    "correct": false
                },
                {
                    "option": "કસ્તુરબા ગાંધી",
                    "correct": false
                },
                {
                    "option": "મોહનલાલ પંડ્યા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વલ્લભભાઈ પટેલ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ખેડા સત્યાગ્રહનું સુકાન કોણે સંભાળ્યું હતું ?",
            "a": [
                {
                    "option": "ગાંધીજીએ",
                    "correct": true
                },
                {
                    "option": "મોહનલાલ પંડ્યાએ",
                    "correct": false
                },
                {
                    "option": "ઝીણાભાઈ દેસાઈએ",
                    "correct": false
                },
                {
                    "option": "વલ્લભભાઈ પટેલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગાંધીજીએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ચંપારણ સત્યાગ્રહ ગાંધીજીએ બિહારના કયા ગામમાં રહીને કર્યો?",
            "a": [
                {
                    "option": "મધુબની",
                    "correct": false
                },
                {
                    "option": "પૂર્ણિયા",
                    "correct": false
                },
                {
                    "option": "હાજીપુર",
                    "correct": false
                },
                {
                    "option": "મોતીહારી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મોતીહારી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "પ્રથમ વિશ્વયુદ્ધ દરમિયાન ક્યા દેશનો સુલતાન ઇસ્લામ ધર્મનો ખલીફા હતો ?",
            "a": [
                {
                    "option": "ઇરાકનો",
                    "correct": false
                },
                {
                    "option": "અફઘાનિસ્તાનનો",
                    "correct": false
                },
                {
                    "option": "તુર્કીનો",
                    "correct": true
                },
                {
                    "option": "ઈરાનનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તુર્કીનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગાંધીજીએ અસહકારના આંદોલનની શરૂઆત કઈ રીતે કરી ?",
            "a": [
                {
                    "option": "ઉપવાસ કરીને",
                    "correct": false
                },
                {
                    "option": "વિદેશી કાપડની હોળી કરી",
                    "correct": false
                },
                {
                    "option": "'કૈસરે હિંદ'ની ઉપાધિ ત્યાગીને",
                    "correct": true
                },
                {
                    "option": "બૅરિસ્ટરની પદવી ત્યાગીને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'કૈસરે હિંદ'ની ઉપાધિ ત્યાગીને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "જલિયાંવાલા બાગનો હત્યાકાંડ કયા દિવસે થયો ?",
            "a": [
                {
                    "option": "વૈશાખી પૂર્ણિમાએ",
                    "correct": true
                },
                {
                    "option": "ફાગણી પૂર્ણિમાએ",
                    "correct": false
                },
                {
                    "option": "ગુરુ પૂર્ણિમાએ",
                    "correct": false
                },
                {
                    "option": "કાર્તિકી પૂર્ણિમાએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈશાખી પૂર્ણિમાએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "જલિયાંવાલા બાગ ક્યા શહેરમાં આવેલો છે ?",
            "a": [
                {
                    "option": "અમૃતસર",
                    "correct": true
                },
                {
                    "option": "હૈદરાબાદ",
                    "correct": false
                },
                {
                    "option": "દિલ્લી",
                    "correct": false
                },
                {
                    "option": "કોલકાતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમૃતસર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "જલિયાંવાલા બાગનો હત્યાકાંડ કોણે સર્જ્યો હતો ?",
            "a": [
                {
                    "option": "જનરલ વાયલીએ",
                    "correct": false
                },
                {
                    "option": "જનરલ નીલે",
                    "correct": false
                },
                {
                    "option": "જનરલ સોન્ડર્સે",
                    "correct": false
                },
                {
                    "option": "જનરલ ડાયરે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જનરલ ડાયરે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ભારતનાં બધાં જ રાજકીય સંગઠનોએ સાયમન કમિશનનો બહિષ્કાર કર્યો, કારણ કે . . . ",
            "a": [
                {
                    "option": "તેમાં એક પણ મુસ્લિમ પ્રતિનિધિ ન હતો.",
                    "correct": false
                },
                {
                    "option": "તેમાં એક પણ અંગ્રેજ પ્રતિનિધિ ન હતો.",
                    "correct": false
                },
                {
                    "option": "તેમાં એક પણ મહિલા પ્રતિનિધિ ન હતી.",
                    "correct": false
                },
                {
                    "option": "તેમાં એક પણ ભારતીય પ્રતિનિધિ ન હતો.",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તેમાં એક પણ ભારતીય પ્રતિનિધિ ન હતો.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "વલ્લભભાઈ પટેલે કયા સત્યાગ્રહની આગેવાની સ્વીકારી ?",
            "a": [
                {
                    "option": "નાગપુર ઝંડા",
                    "correct": false
                },
                {
                    "option": "બારડોલી",
                    "correct": true
                },
                {
                    "option": "ચંપારણ",
                    "correct": false
                },
                {
                    "option": "ખેડા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બારડોલી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ક્યા સત્યાગ્રહે વલ્લભભાઈ પટેલને 'સરદાર'નું બિરુદ અપાવ્યું ?",
            "a": [
                {
                    "option": "બારડોલી",
                    "correct": true
                },
                {
                    "option": "બોરસદ",
                    "correct": false
                },
                {
                    "option": "દાંડી",
                    "correct": false
                },
                {
                    "option": "ખેડા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બારડોલી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "બારડોલી તાલુકાના મહેસૂલમાં સરકારે કેટલા ટકા વધારો કર્યો ?",
            "a": [
                {
                    "option": "28%",
                    "correct": false
                },
                {
                    "option": "48%",
                    "correct": false
                },
                {
                    "option": "6%",
                    "correct": false
                },
                {
                    "option": "22%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  22%</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "'નેહરુ અહેવાલ' કોણે તૈયાર કર્યો હતો ?",
            "a": [
                {
                    "option": "પંડિત વિજ્યાલક્ષ્મી નેહરુએ",
                    "correct": false
                },
                {
                    "option": " ગોવિંદ વલ્લભ પંતે",
                    "correct": false
                },
                {
                    "option": "પંડિત જવાહરલાલ નેહરુએ",
                    "correct": false
                },
                {
                    "option": "પંડિત મોતીલાલ નેહરુએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પંડિત મોતીલાલ નેહરુએ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "સ્વતંત્ર ભારતના બંધારણને કઈ તારીખે અમલમાં મૂકવામાં આવ્યું ?",
            "a": [
                {
                    "option": "2 જાન્યુઆરી 1950",
                    "correct": false
                },
                {
                    "option": "15 ઑગસ્ટ 1947",
                    "correct": false
                },
                {
                    "option": "26 જાન્યુઆરી 1950",
                    "correct": true
                },
                {
                    "option": "15 ઑગસ્ટ1950",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  26 જાન્યુઆરી 1950</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ગાંધીજીએ શાની પદવી મેળવી હતી ?",
            "a": [
                {
                    "option": "જજની",
                    "correct": false
                },
                {
                    "option": "બૅરિસ્ટરની",
                    "correct": true
                },
                {
                    "option": "શિક્ષકની",
                    "correct": false
                },
                {
                    "option": "વેપારીની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બૅરિસ્ટરની</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગાંધીજીએ રૉલેટ ઍક્ટને કેવો કાયદો કહ્યો હતો ?",
            "a": [
                {
                    "option": "કાળો કાયદો",
                    "correct": true
                },
                {
                    "option": "ધોળો કાયદો",
                    "correct": false
                },
                {
                    "option": "લીલો કાયદો",
                    "correct": false
                },
                {
                    "option": "પીળો કાયદો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાળો કાયદો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "જલિયાંવાલા હત્યાકાંડ કઈ સાલમાં થયો હતો ? ",
            "a": [
                {
                    "option": "ઈ.સ.1920માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1921માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1919માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1930માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1919માં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ગાંધીજીએ અન્યાય સામે સત્ય અને અહિંસાથી લડવાની અનોખી પદ્ધતિ શોધી, તેનું નામ શું આપ્યું ?",
            "a": [
                {
                    "option": "સત્યાગ્રહ",
                    "correct": true
                },
                {
                    "option": "અહિંસાગ્રહ",
                    "correct": false
                },
                {
                    "option": "અસત્યાગ્રહ",
                    "correct": false
                },
                {
                    "option": "હિંસાગ્રહ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સત્યાગ્રહ</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "કયા લોકો દક્ષિણ આફ્રિકાના મૂળ લોકોને પરાધીન બનાવીને દક્ષિણ આફ્રિકાના માલિક બની ગયા હતા ?",
            "a": [
                {
                    "option": "કાળા લોકો",
                    "correct": false
                },
                {
                    "option": "ગોરા લોકો",
                    "correct": true
                },
                {
                    "option": "લાલ લોકો",
                    "correct": false
                },
                {
                    "option": "વાદળી લોકો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોરા લોકો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ગાંધીજીનું પૂરૂં નામ શું હતું ?",
            "a": [
                {
                    "option": "મોહનદાસ રમણચંદ ગાંધી",
                    "correct": false
                },
                {
                    "option": "સોહનદાસ રમણચંદ ગાંધી",
                    "correct": false
                },
                {
                    "option": "મોહનદાસ કરમચંદ ગાંધી",
                    "correct": true
                },
                {
                    "option": "સોહનદાસ કરમચંદ ગાંધી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મોહનદાસ કરમચંદ ગાંધી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ગાંધીજીનો જન્મ ક્યાં થયો હતો ?",
            "a": [
                {
                    "option": "ગુજરાતના જામનગરમાં",
                    "correct": false
                },
                {
                    "option": "ગુજરાતના અમદાવાદમાં",
                    "correct": false
                },
                {
                    "option": "ગુજરાતના પાલનપુરમાં",
                    "correct": false
                },
                {
                    "option": "ગુજરાતના પોરબંદરમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુજરાતના પોરબંદરમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ગાંધીજીના પત્નીનું નામ શું હતું ?",
            "a": [
                {
                    "option": "કસ્તુરબા",
                    "correct": true
                },
                {
                    "option": "પૂતળીબાઈ",
                    "correct": false
                },
                {
                    "option": "કંચનબા",
                    "correct": false
                },
                {
                    "option": "પુષ્કરબાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કસ્તુરબા</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ગાંધીજીના માતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "કસ્તુરબા",
                    "correct": false
                },
                {
                    "option": "પૂતળીબાઈ",
                    "correct": true
                },
                {
                    "option": "કંચનબા",
                    "correct": false
                },
                {
                    "option": "પુષ્કરબાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂતળીબાઈ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ગાંધીજીના રાજકીય ગુરુ કોણ હતા ?",
            "a": [
                {
                    "option": "બાળ ગંગાધર ટિળક",
                    "correct": false
                },
                {
                    "option": "શ્રીમદ્ રાજચંદ્ર",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલે",
                    "correct": true
                },
                {
                    "option": "શ્રીમદ્ હરિશ્ચંદ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોપાલકૃષ્ણ ગોખલે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગાંધીજીના આધ્યાત્મિક ગુરુ કોણ હતા ?",
            "a": [
                {
                    "option": "બાળ ગંગાધર ટિળક",
                    "correct": false
                },
                {
                    "option": "શ્રીમદ્ રાજચંદ્ર",
                    "correct": true
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલે",
                    "correct": false
                },
                {
                    "option": "શ્રીમદ્ હરિશ્ચંદ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્રીમદ્ રાજચંદ્ર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ગાંધીજીનો જન્મ ક્યારે થયો હતો ?",
            "a": [
                {
                    "option": "2 ઓક્ટોબર,1869",
                    "correct": true
                },
                {
                    "option": "2 ઓક્ટોબર,1969",
                    "correct": false
                },
                {
                    "option": "30 જાન્યુઆરી,1948",
                    "correct": false
                },
                {
                    "option": "30 જાન્યુઆરી,1848",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2 ઓક્ટોબર,1869</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ગાંધીજીનું મૃત્યું ક્યારે થયું ?",
            "a": [
                {
                    "option": "2 ઓક્ટોબર,1869",
                    "correct": false
                },
                {
                    "option": "2 ઓક્ટોબર,1969",
                    "correct": false
                },
                {
                    "option": "30 જાન્યુઆરી,1948",
                    "correct": true
                },
                {
                    "option": "30 જાન્યુઆરી,1848",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30 જાન્યુઆરી,1948</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ગાંધીજીની સમાધિ કયાં આવેલી છે અને ક્યા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "મુંબઈ , શાંતિઘાટ",
                    "correct": false
                },
                {
                    "option": "ચેન્નાઈ, વીરઘાટ",
                    "correct": false
                },
                {
                    "option": "દિલ્લી, રાજઘાટ",
                    "correct": true
                },
                {
                    "option": "દિલ્લી, વીરઘાટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિલ્લી, રાજઘાટ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "દક્ષિણ આફ્રિકાથી ભારત પરત આવ્યા ત્યારે કયા બંદરે ગાંધીજીનું ભવ્ય સ્વાગત કરવામાં આવ્યું ?",
            "a": [
                {
                    "option": "મુંબઈના ગોવા બંદરે",
                    "correct": false
                },
                {
                    "option": "ગુજરાતના કંડલા બંદરે",
                    "correct": false
                },
                {
                    "option": "ગુજરાતના સંજાણ બંદરે",
                    "correct": false
                },
                {
                    "option": "મુંબઈના એપોલો બંદરે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુંબઈના એપોલો બંદરે</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "દક્ષિણ આફ્રિકામાંથી ભારત પરત આવ્યા બાદ કોના કહેવાથી ગાંધીજીએ આખા દેશમાં ભ્રમણ કર્યું ?",
            "a": [
                {
                    "option": "બાળ ગંગાધર ટિળકના",
                    "correct": false
                },
                {
                    "option": "શ્રીમદ્ રાજચંદ્રના",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણ ગોખલેના",
                    "correct": true
                },
                {
                    "option": "શ્રીમદ્ હરિશ્ચંદ્રના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોપાલકૃષ્ણ ગોખલેના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "ગાંધીજીએ અમદાવાદના કોચરબમાં કયારે આશ્રમ સ્થાપ્યો ?",
            "a": [
                {
                    "option": "25 જૂન,1925",
                    "correct": false
                },
                {
                    "option": "25 ઓક્ટોબર,1935",
                    "correct": false
                },
                {
                    "option": "25 મે,1915",
                    "correct": true
                },
                {
                    "option": "25 જાન્યુઆરી,1905",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 25 મે,1915</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "નીચેના સત્યાગ્રહોમાં સમયની દ્રષ્ટિએ ચડતા (પહેલાથી પછીના) ક્રમમાં કયું જોડકું સાચું છે ?",
            "a": [
                {
                    "option": "ચંપારણ, બારડોલી, ખેડા",
                    "correct": false
                },
                {
                    "option": "ખેડા, ચંપારણ, બારડોલી",
                    "correct": false
                },
                {
                    "option": "ચંપારણ, ખેડા, બારડોલી",
                    "correct": true
                },
                {
                    "option": "બારડોલી, ચંપારણ, ખેડા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચંપારણ, ખેડા, બારડોલી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "ચંપારણમાં યુરોપિયન જમીનદારો જમીનના કેટલા ભાગમાં ગળીનું ફરજિયાત વાવેતર કરી, ઉત્પાદન સસ્તી કિંમતે વેચવાની ખેડુતોને ફરજ પાડતા હતા ?",
            "a": [
                {
                    "option": "4/20 ભાગમાં",
                    "correct": false
                },
                {
                    "option": "5/20 ભાગમાં",
                    "correct": false
                },
                {
                    "option": "6/20 ભાગમાં",
                    "correct": false
                },
                {
                    "option": "3/20 ભાગમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3/20 ભાગમાં</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "કોના આગ્રહથી ચંપારણમાં ગળી વાવેતરના પ્રશ્નની તપાસ કરવાનું ગાંધીજીએ નક્કી કર્યું ?",
            "a": [
                {
                    "option": "રાજકુમાર શુક્લના",
                    "correct": true
                },
                {
                    "option": "શ્રીમદ્ રાજચંદ્રના",
                    "correct": false
                },
                {
                    "option": "ગોપાલકૃષ્ણના",
                    "correct": false
                },
                {
                    "option": "સરદાર વલ્લભભાઈના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજકુમાર શુક્લના</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "ચંપારણ સત્યાગ્રહ કઈ સાલમાં થયો હતો ?",
            "a": [
                {
                    "option": "ઇ.સ. 1915માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1917માં",
                    "correct": true
                },
                {
                    "option": "ઇ.સ. 1928માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1930માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1917માં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ઇ.સ. 1917માં ખેડા જિલ્લામાં પાક શા માટે નાશ પામ્યો ?",
            "a": [
                {
                    "option": "ત્સુનામીના કારણે",
                    "correct": false
                },
                {
                    "option": "વાવાઝોડાના કારણે",
                    "correct": false
                },
                {
                    "option": "અતિવૃષ્ટિના કારણે",
                    "correct": true
                },
                {
                    "option": "ભૂકંપના કારણે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અતિવૃષ્ટિના કારણે</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "ઇ.સ. 1917માં ખેડા જિલ્લામાં પાક નાશ પામ્યો છતાં અંંગ્રેજ સરકારે શું ઉઘરાવવાનું નક્કી કર્યું ?",
            "a": [
                {
                    "option": "મહેસૂલ ઉઘરાવવાનું",
                    "correct": true
                },
                {
                    "option": "દાણ ઉઘરાવવાનું",
                    "correct": false
                },
                {
                    "option": "ગ્રાન્ટ ઉઘરાવવાનું",
                    "correct": false
                },
                {
                    "option": "જમીન ઉઘરાવવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહેસૂલ ઉઘરાવવાનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "'સરકાર આપણી માંગણી ન સ્વીકારે, તો આપણે મહેસૂલ ભરવાનું નથી' ખેડા સત્યાગ્રહ દરમિયાન આ વાકય કોણ બોલ્યું હતું ?",
            "a": [
                {
                    "option": "ગાંધીજી",
                    "correct": true
                },
                {
                    "option": "સરદાર પટેલ",
                    "correct": false
                },
                {
                    "option": "જવાહરલાલ નહેરુ",
                    "correct": false
                },
                {
                    "option": "રવિશંકર મહારાજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાંધીજી</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "કોઈ પણ વ્યક્તિની ધરપકડ કારણ આપ્યા વિના કરી શકાય તથા ખાસ અદાલતમાં કામ ચલાવી તેને સજા કરી શકાય એવી જોગવાઈ શામાં હતી ?",
            "a": [
                {
                    "option": "સાયમન કમિશનમાંં",
                    "correct": false
                },
                {
                    "option": "1935નો હિંદસરકારના કાયદામાં",
                    "correct": false
                },
                {
                    "option": "રૉલેટ ઍક્ટમાં",
                    "correct": true
                },
                {
                    "option": "ક્રિપ્સ મિશનમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રૉલેટ ઍક્ટમાં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "ગાંધીજીની હાકલને માન આપી કયા નેતાએ પોતાની વકીલાત છોડીને ખેડા સત્યાગ્રહમાં  ઝંપલાવ્યું ?",
            "a": [
                {
                    "option": "રવિશંકર મહારાજે",
                    "correct": false
                },
                {
                    "option": "વલ્લભભાઈ પટેલે",
                    "correct": true
                },
                {
                    "option": "મોતીલાલ નહેરુએ",
                    "correct": false
                },
                {
                    "option": "જુગતરામ દવેએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વલ્લભભાઈ પટેલે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "ખેડા સત્યાગ્રહ કઈ સાલમાં થયો હતો ?",
            "a": [
                {
                    "option": "ઇ.સ. 1915-1916માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1917-1918માં",
                    "correct": true
                },
                {
                    "option": "ઇ.સ. 1928-1929માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1930-1931માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1917-1918માં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "કયા સત્યાગ્રહે ગાંધીજીને વલ્લભભાઇ જેવા નિષ્ઠાવાન અને સમર્પિત સાથી આપ્યા ?",
            "a": [
                {
                    "option": "ખેડા સત્યાગ્રહે",
                    "correct": true
                },
                {
                    "option": "ચંપારણ સત્યાગ્રહે",
                    "correct": false
                },
                {
                    "option": "બારડોલી સત્યાગ્રહે",
                    "correct": false
                },
                {
                    "option": "બોરસદ સત્યાગ્રહે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખેડા સત્યાગ્રહે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "જલિયાંવાલા બાગની સભા કોની ધરપકડનો વિરોધ કરવા માટે આયોજીત કરવામાં આવી હતી ?",
            "a": [
                {
                    "option": "ડૉ. સત્યપાલ અને ડૉ. કિચલુની",
                    "correct": true
                },
                {
                    "option": "ભગતસિંહ અને રાજગુરુની",
                    "correct": false
                },
                {
                    "option": "ચંદ્રશેખર આઝાદ અને સુખદેવની",
                    "correct": false
                },
                {
                    "option": "ગાંધીજી અને સરદાર પટેલની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડૉ. સત્યપાલ અને ડૉ. કિચલુની</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "જલિયાંવાલા બાગની સભામાં અંદાજે કેટલા લોકો એકઠા થયા હતા ?",
            "a": [
                {
                    "option": "દસ લાખ",
                    "correct": false
                },
                {
                    "option": "દસ કરોડ",
                    "correct": false
                },
                {
                    "option": "દસ હજાર",
                    "correct": true
                },
                {
                    "option": "બે હજાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દસ હજાર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "જલિયાંવાલા હત્યાકાંડમાં સરકારી આંકડા મુજબ કેટલા લોકો મૃત્યુ પામ્યા ?",
            "a": [
                {
                    "option": "579",
                    "correct": false
                },
                {
                    "option": "679",
                    "correct": false
                },
                {
                    "option": "479",
                    "correct": false
                },
                {
                    "option": "379",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 379</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "જલિયાંવાલા હત્યાકાંડમાં સરકારી આંકડા મુજબ કેટલા લોકો ઘાયલ થયા ?",
            "a": [
                {
                    "option": "1100",
                    "correct": false
                },
                {
                    "option": "1000",
                    "correct": false
                },
                {
                    "option": "1300",
                    "correct": false
                },
                {
                    "option": "1200",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1200</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "જલિયાંવાલા બાગના હત્યાકાંડની ઘટનાથી કોને હવે બ્રિટિશ ન્યાય અને નિષ્ઠામાં લેશમાત્ર વિશ્વાસ રહ્યો નહિ ?",
            "a": [
                {
                    "option": "સરદાર પટેલને",
                    "correct": false
                },
                {
                    "option": "ગાંધીજીને",
                    "correct": true
                },
                {
                    "option": "રવીન્દ્રનાથ ટાગોરને",
                    "correct": false
                },
                {
                    "option": "રવિશંકર મહારાજને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાંધીજીને</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "બ્રિટિશ રાજા કે રાણી દ્વારા કોઈ વ્યક્તિને અસાધારણ વ્યક્તિગત સફળતા કે લોકસેવા માટે આપવામાં આવતો ઍવોર્ડ કયો છે ?",
            "a": [
                {
                    "option": "કૈસરે હિન્દનો",
                    "correct": false
                },
                {
                    "option": "ભારત રત્નનો",
                    "correct": false
                },
                {
                    "option": "નાઇટહૂડનો",
                    "correct": true
                },
                {
                    "option": "નોબેલ પારિતોષિતનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાઇટહૂડનો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "જલિયાંવાલા બાગના હત્યાકાંડના વિરોધમાં કવિવર રવીન્દ્રનાથ ટાગોરે કયો ખિતાબ પરત કર્યો ?",
            "a": [
                {
                    "option": "કૈસરે હિન્દનો",
                    "correct": false
                },
                {
                    "option": "ભારત રત્નનો",
                    "correct": false
                },
                {
                    "option": "નાઇટહૂડનો",
                    "correct": true
                },
                {
                    "option": "નોબેલ પારિતોષિતનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાઇટહૂડનો</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "પ્રથમ વિશ્વયુદ્ધ પછી વિજેતા રાષ્ટ્રોએ કોની સાથે સંધિ કરી ?",
            "a": [
                {
                    "option": "પરાજિત તુર્કી સાથે",
                    "correct": true
                },
                {
                    "option": "પરાજિત રશિયા સાથે",
                    "correct": false
                },
                {
                    "option": "પરાજિત અમેરિકા સાથે",
                    "correct": false
                },
                {
                    "option": "પરાજિત ભારત સાથે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પરાજિત તુર્કી સાથે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "'ખલિફાપદ' રદ કરવાના સંધિના વિરોધમાં ભારતમાં જે આંદોલન થયું, તેને કયું આંદોલન કહેવાય છે ?",
            "a": [
                {
                    "option": "વહાબી",
                    "correct": false
                },
                {
                    "option": "ખિલાફત",
                    "correct": true
                },
                {
                    "option": "ખિલાફ",
                    "correct": false
                },
                {
                    "option": "ખાલસા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખિલાફત</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "મૌલાના શૌકતઅલી અને મૌલાના મોહમ્મદઅલી કયા આંદોલનનાં મુખ્ય નેતાઓ હતા ?",
            "a": [
                {
                    "option": "વહાબી",
                    "correct": false
                },
                {
                    "option": "ખિલાફત",
                    "correct": true
                },
                {
                    "option": "ખિલાફ",
                    "correct": false
                },
                {
                    "option": "ખાલસા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખિલાફત</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "ગાંધીજીના અસહકારના આંદોલનના રચનાત્મક પાસાં કઈ બાબતનો સમાવેશ થતો નથી ?",
            "a": [
                {
                    "option": "રાષ્ટ્રીય શિક્ષણનો પ્રચાર",
                    "correct": false
                },
                {
                    "option": "અસ્પૃશ્યતા-નિવારણ",
                    "correct": false
                },
                {
                    "option": "દારૂબંધી",
                    "correct": false
                },
                {
                    "option": "વિદેશી કાપડના બહિષ્કારનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિદેશી કાપડના બહિષ્કારનો</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "ગાંધીજીના અસહકારના આંદોલન અંતર્ગત કયા નેતાએ વકીલાત છોડી ન હતી ?",
            "a": [
                {
                    "option": "જવાહરલાલ નહેરુએ",
                    "correct": true
                },
                {
                    "option": "મોતીલાલ નહેરુએ",
                    "correct": false
                },
                {
                    "option": "સી. રાજગોપાલાચારીએ",
                    "correct": false
                },
                {
                    "option": "અસફઅલીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જવાહરલાલ નહેરુએ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 58
            "q": "કયા બનાવના કારણે ગાંધીજીએ અસહકારનું આંદોલન એકાએક પાછું ખેંચી લીધું ?",
            "a": [
                {
                    "option": "ચૌરીચોરાના",
                    "correct": true
                },
                {
                    "option": "બારડોલી સત્યાગ્રહના",
                    "correct": false
                },
                {
                    "option": "જલિયાંવાલા હત્યાકાંડના",
                    "correct": false
                },
                {
                    "option": "રૉલેટ ઍક્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચૌરીચોરાના</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 59
            "q": "ચૌરીચોરાના બનાવમાં કઈ ઘટના ઘટી હતી ?",
            "a": [
                {
                    "option": "અંગ્રેજ અધિકારીને ગોળી મારી.",
                    "correct": false
                },
                {
                    "option": "અંગ્રેજોએ હિન્દના 22 લોકોને માર્યા.",
                    "correct": false
                },
                {
                    "option": "પોલીસસ્ટેશનને આગ લગાડી 22 પોલીસને જીવતા સળગાવ્યા.",
                    "correct": true
                },
                {
                    "option": "હિન્દના લોકોને માર્યા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પોલીસસ્ટેશનને આગ લગાડી 22 પોલીસને જીવતા સળગાવ્યા.</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "રાષ્ટ્રીય સ્વયંસેવક સંઘનું ટૂંકુ નામ શું છે ?",
            "a": [
                {
                    "option": "R.S.R.",
                    "correct": false
                },
                {
                    "option": "R.T.O",
                    "correct": false
                },
                {
                    "option": "R.M.S.",
                    "correct": false
                },
                {
                    "option": "R.S.S.",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: R.S.S.</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 61
            "q": "બારડોલી સત્યાગ્રહ કઈ સાલમાં થયો હતો ?",
            "a": [
                {
                    "option": "ઇ.સ. 1928માં",
                    "correct": true
                },
                {
                    "option": "ઇ.સ. 1917માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1918માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1938માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1928માં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 62
            "q": "બારડોલી સત્યાગ્રહમાં અંતે અંગ્રેજ સરકારે વલ્લભભાઈને ક્યાં બોલાવ્યા ?",
            "a": [
                {
                    "option": "બૉમ્બે",
                    "correct": false
                },
                {
                    "option": "પૂના",
                    "correct": true
                },
                {
                    "option": "ઊના",
                    "correct": false
                },
                {
                    "option": "ડિસા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂના</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 63
            "q": "'નેહરુ અહેવાલ' શાના માટે હતો ?",
            "a": [
                {
                    "option": "અફઘાનિસ્તાનનો બંધાણીય મુસદ્દો ઘડવા",
                    "correct": false
                },
                {
                    "option": "પોલીસનો બંધાણીય મુસદ્દો ઘડવા",
                    "correct": false
                },
                {
                    "option": "સૈનિકોનો બંધારણીય મુસદ્દો ઘડવા",
                    "correct": false
                },
                {
                    "option": "ભારતનો બંધારણીય મુસદ્દો ઘડવા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભારતનો બંધારણીય મુસદ્દો ઘડવા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 64
            "q": "'નેહરુ અહેવાલ'નો શા માટે સરકારે અસ્વીકાર કર્યો ?",
            "a": [
                {
                    "option": "કૉંગ્રેસની અસંમતિના કારણે",
                    "correct": false
                },
                {
                    "option": "R.S.S.ની અસંમતિના કારણે",
                    "correct": false
                },
                {
                    "option": "ભારતીય કમ્યુનિસ્ટ પાર્ટીની અસંમતિના કારણે",
                    "correct": false
                },
                {
                    "option": "મુસ્લિમ લીગની અસંમતિના કારણે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મુસ્લિમ લીગની અસંમતિના કારણે</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 65
            "q": "'પૂર્ણસ્વરાજ્યનો  ઠરાવ' પસાર કર્યો તે કૉંગ્રેસનું અધિવેશ કઈ નદીના કિનારે મળ્યું હતું ? ",
            "a": [
                {
                    "option": "રાવી",
                    "correct": true
                },
                {
                    "option": "ઝેલમ",
                    "correct": false
                },
                {
                    "option": "ચિનાબ",
                    "correct": false
                },
                {
                    "option": "સતલુજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાવી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }// no comma here
	

    ]
};
