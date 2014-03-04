// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પાઠ-1 થી 14",
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
        }, 

	{ // Question 1
            "q": "ભારતની મોટાભાગની સમસ્યાઓનું મૂળ ક્યું છે ?",
            "a": [
                {
                    "option": "બેકારી",
                    "correct": false
                },
                {
                    "option": "નિરક્ષરતા",
                    "correct": false
                },
                {
                    "option": "ગરીબી",
                    "correct": false
                },
                {
                    "option": "વસ્તીવિસ્ફોટ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વસ્તીવિસ્ફોટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ઈ.સ. 2011ની વસ્તીગણતરી મુજબ ભારતમાં કેટલા કરોડ વસ્તી છે ?",
            "a": [
                {
                    "option": "114",
                    "correct": false
                },
                {
                    "option": "116",
                    "correct": false
                },
                {
                    "option": "112",
                    "correct": false
                },
                {
                    "option": "121",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  121</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "દેશના વિકાસને અવરોધતું મોટું પરિબળ કયું છે ?",
            "a": [
                {
                    "option": "રોગોમાં વૃદ્ધિ",
                    "correct": false
                },
                {
                    "option": "નિરક્ષરતા",
                    "correct": true
                },
                {
                    "option": "બાળમૃત્યુ",
                    "correct": false
                },
                {
                    "option": "સ્ત્રીઓની ઘટતી સંખ્યા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નિરક્ષરતા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "નવા વિચારો, શોધો કે જ્ઞાનને સમજવા માટે શું અનિવાર્ય છે ?",
            "a": [
                {
                    "option": "ધન-દોલત",
                    "correct": false
                },
                {
                    "option": "શિષ્યવૃત્તિ",
                    "correct": false
                },
                {
                    "option": "શારીરિક વિકાસ",
                    "correct": false
                },
                {
                    "option": "સાક્ષરતા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સાક્ષરતા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ઈ.સ. 2009થી શિક્ષણ અંગે કયો કાયદો અમલમાં આવ્યો છે ?",
            "a": [
                {
                    "option": "R.T.E.",
                    "correct": true
                },
                {
                    "option": "M.T.E.",
                    "correct": false
                },
                {
                    "option": "D.T.E.",
                    "correct": false
                },
                {
                    "option": "S.T.E.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  R.T.E.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "આમાંથી કઈ સમસ્યા લોકો માટે શિરદર્દ સમાન બની છે ?",
            "a": [
                {
                    "option": "મોંઘવારી",
                    "correct": true
                },
                {
                    "option": "તબીબી સારવાર",
                    "correct": false
                },
                {
                    "option": "વસ્તીવિસ્ફોટ",
                    "correct": false
                },
                {
                    "option": "ગંદા રહેઠાણો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મોંઘવારી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ભારતીય સમાજનું સૌથી મોટું દૂષણ કયું છે ?",
            "a": [
                {
                    "option": "બાળમજૂરી",
                    "correct": false
                },
                {
                    "option": "ગંદા રહેઠાણો",
                    "correct": false
                },
                {
                    "option": "ભ્રષ્ટાચાર",
                    "correct": true
                },
                {
                    "option": "બેકારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભ્રષ્ટાચાર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "આજના વૈજ્ઞાનિક યુગમાં ક્યા કારણથી બેકારીમાં વધારો થયો છે ?",
            "a": [
                {
                    "option": "વૈશ્વિકીકરણથી",
                    "correct": false
                },
                {
                    "option": "ખાનગીકરણથી",
                    "correct": false
                },
                {
                    "option": "અદ્યતન ટેક્નોલોજીથી",
                    "correct": true
                },
                {
                    "option": "ઉદારીકરણથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અદ્યતન ટેક્નોલોજીથી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કેટલા વર્ષથી વધુ ઉંમરના રોજગાર વિનાના લોકોને બેકાર ગણવામાં આવે છે ?",
            "a": [
                {
                    "option": "18",
                    "correct": true
                },
                {
                    "option": "16",
                    "correct": false
                },
                {
                    "option": "15",
                    "correct": false
                },
                {
                    "option": "17",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  18</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આતંકવાદ કઈ સમસ્યા છે ?",
            "a": [
                {
                    "option": "પ્રાદેશિક",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય",
                    "correct": false
                },
                {
                    "option": "પ્રાંતિય",
                    "correct": false
                },
                {
                    "option": "વૈશ્વિક",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈશ્વિક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "કઈ પ્રવૃત્તિ રાષ્ટ્રના વિકાસમાં અવરોધક છે ?",
            "a": [
                {
                    "option": "લૂંટફાટની",
                    "correct": false
                },
                {
                    "option": "આતંકવાદની",
                    "correct": true
                },
                {
                    "option": "સંગ્રહખોરીની",
                    "correct": false
                },
                {
                    "option": "કાળાબજારની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આતંકવાદની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "આપણા દેશની ગંભીર સમસ્યા કઈ છે ?",
            "a": [
                {
                    "option": "બેકારી",
                    "correct": false
                },
                {
                    "option": "ગરીબી",
                    "correct": true
                },
                {
                    "option": "નિરક્ષરતા",
                    "correct": false
                },
                {
                    "option": "ભ્રષ્ટાચાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગરીબી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ચીજવસ્તુના ભાવવધારાને શું કહેવાય ?",
            "a": [
                {
                    "option": "સંગ્રહખોરી",
                    "correct": false
                },
                {
                    "option": "કાળાબજાર",
                    "correct": false
                },
                {
                    "option": "મોંઘવારી",
                    "correct": true
                },
                {
                    "option": "બેકારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મોંઘવારી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "મોંઘવારી માટે જવાબદાર સમસ્યા કઈ છે ?",
            "a": [
                {
                    "option": "નિરક્ષરતા",
                    "correct": false
                },
                {
                    "option": "વસ્તીવધારો",
                    "correct": true
                },
                {
                    "option": "ગરીબી",
                    "correct": false
                },
                {
                    "option": "ભ્રષ્ટાચાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વસ્તીવધારો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "આમાંથી નિરક્ષરતાનિવારવા માટેનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "રોજગારીની તકોનું સર્જન",
                    "correct": false
                },
                {
                    "option": "R.T.E.",
                    "correct": true
                },
                {
                    "option": "સમજદારીપૂર્વકનું જીવનધોરણ ",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  R.T.E.</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "આમાંથી ગરીબીનિવારવા માટેનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "રોજગારીની તકોનું સર્જન",
                    "correct": true
                },
                {
                    "option": "R.T.E.",
                    "correct": false
                },
                {
                    "option": "સમજદારીપૂર્વકનું જીવનધોરણ ",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રોજગારીની તકોનું સર્જન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "આમાંથી મોંઘવારીથી બચવા માટેનો ઉપાય કયો છે ?",
            "a": [
                {
                    "option": "R.T.E.",
                    "correct": false
                },
                {
                    "option": "રોજગારીની તકોનું સર્જન",
                    "correct": false
                },
                {
                    "option": "સમજદારીપૂર્વકનું જીવનધોરણ ",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સમજદારીપૂર્વકનું જીવનધોરણ </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "કેટલા વર્ષ સુધીના બાળકોને મફત, ફરજિયાત અને સાર્વત્રિક શિક્ષણ આપવાની યોજના છે ?",
            "a": [
                {
                    "option": "5 થી 12",
                    "correct": false
                },
                {
                    "option": "6 થી 14",
                    "correct": true
                },
                {
                    "option": "5 થી 14",
                    "correct": false
                },
                {
                    "option": "6 થી 12",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  6 થી 14 </p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "આમાંથી કુદરતી સમસ્યામાં કોનો સમાવેશ થતો નથી ?",
            "a": [
                {
                    "option": "દુષ્કાળ",
                    "correct": false
                },
                {
                    "option": "જ્વાળામુખી પ્રસ્ફોટન",
                    "correct": false
                },
                {
                    "option": "આતંકવાદ",
                    "correct": true
                },
                {
                    "option": "ભૂકંપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આતંકવાદ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "આમાંથી કુદરતી સમસ્યામાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "ગરીબી",
                    "correct": false
                },
                {
                    "option": "બેકારી",
                    "correct": false
                },
                {
                    "option": "વસતી વધારો",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્સુનામી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "નીચેનામાંથી ભ્રષ્ટાચારની અસર કઈ નથી ?",
            "a": [
                {
                    "option": "મોંઘવારીને પોષણ મળતું નથી.",
                    "correct": true
                },
                {
                    "option": "રાષ્ટ્રનો વિકાસ અવરોધાય છે.",
                    "correct": false
                },
                {
                    "option": "માનવ-અધિકારોનો ભંગ થાય છે.",
                    "correct": false
                },
                {
                    "option": "કાયદાકાનૂન પ્રત્યે વિશ્વાસ ઘટે છે.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મોંઘવારીને પોષણ મળતું નથી.</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "જે વસ્તુ આપણા હકની કે અધિકારની હોય છતાં તે મેળવવા કે વાપરવા માટે આપણે કશુંક ચૂકવવું પડે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "બેકારી",
                    "correct": false
                },
                {
                    "option": "મોંઘવારી",
                    "correct": false
                },
                {
                    "option": "નિરક્ષરતા",
                    "correct": false
                },
                {
                    "option": "ભ્રષ્ટાચાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભ્રષ્ટાચાર</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ભ્રષ્ટાચારના દૂષણને દૂર કરવા માટે ભારત સરકારે કઈ સાલથી કાયદાની જોગવાઈ કરેલી છે ?",
            "a": [
                {
                    "option": "ઈ.સ. 1988થી",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 1978થી",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1968થી",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 1998થી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 1988થી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "18 વર્ષથી ઉપરના જે લોકોને રોજગાર મળતો નથી તેને શું કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "બેકાર",
                    "correct": true
                },
                {
                    "option": "મોંઘવારી",
                    "correct": false
                },
                {
                    "option": "નિરક્ષરતા",
                    "correct": false
                },
                {
                    "option": "ભ્રષ્ટાચાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બેકાર</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "હરિયાળી ક્રાંતિથી શાનું ઉત્પાદન વધેલું છે ?",
            "a": [
                {
                    "option": "ખેતીનું",
                    "correct": true
                },
                {
                    "option": "દૂધનું",
                    "correct": false
                },
                {
                    "option": "માછલીનું",
                    "correct": false
                },
                {
                    "option": "પાણીનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખેતીનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "શ્વેતક્રાંતિથી શાનું ઉત્પાદન વધેલું છે ?",
            "a": [
                {
                    "option": "ખેતીનું",
                    "correct": false
                },
                {
                    "option": "દૂધનું",
                    "correct": true
                },
                {
                    "option": "માછલીનું",
                    "correct": false
                },
                {
                    "option": "પાણીનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દૂધનું</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ગુજરાતમાં હાલ કેટલા ટકા લોકો ગરીબીરેખાથી નીચે જીવે છે ?",
            "a": [
                {
                    "option": "15.5%",
                    "correct": false
                },
                {
                    "option": "16.7%",
                    "correct": false
                },
                {
                    "option": "17.7%",
                    "correct": false
                },
                {
                    "option": "14.7%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 14.7%</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 28
            "q": "B.P.L.નું પૂરું નામ શું છે ?",
            "a": [
                {
                    "option": "ગરીબી રેખા નીચે જીવતા લોકો",
                    "correct": true
                },
                {
                    "option": "ગરીબી રેખા ઉપર જીવતા લોકો",
                    "correct": false
                },
                {
                    "option": "બેકારી રેખા નીચે જીવતા લોકો",
                    "correct": false
                },
                {
                    "option": "બેકારી રેખા ઉપર જીવતા લોકો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગરીબી રેખા નીચે જીવતા લોકો</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "દેશના મોટાભાગના લોકો જીવનધોરણની પાયાની જરૂરિયાતોથી વંચિત રહેતા હોય તેવી સ્થિતિને શું કહે છે ?",
            "a": [
                {
                    "option": "બેકાર",
                    "correct": false
                },
                {
                    "option": "મોંઘવારી",
                    "correct": false
                },
                {
                    "option": "ગરીબી",
                    "correct": true
                },
                {
                    "option": "ભ્રષ્ટાચાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગરીબી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 30
            "q": "ઇ.સ. 1964માં ભ્રષ્ટાચાર માટે શાની રચના કરવામાં આવી ?",
            "a": [
                {
                    "option": "લાંચરુશવત વિરોધી બ્યુરો",
                    "correct": true
                },
                {
                    "option": "સેન્ટ્રલ બ્યુરો ઑફ ઇન્વેસ્ટીગેશન",
                    "correct": false
                },
                {
                    "option": "લાખરુશવત વિરોધી બ્યુરો",
                    "correct": false
                },
                {
                    "option": "સેન્ટ્રલ બ્યુરો ઑફ કરપ્શન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લાંચરુશવત વિરોધી બ્યુરો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "આર્થિક પ્રવૃત્તિ મુખ્યત્વે કેટલા ક્ષેત્રો પર નિર્ભય હોય છે ?",
            "a": [
                {
                    "option": "ચાર",
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
                    "option": "પાંચ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્રણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "આમાંથી પ્રાથમિક ક્ષેત્રમાં કોનો સમાવેશ થતો નથી ?",
            "a": [
                {
                    "option": "કૃષિક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "પશુપાલનનો",
                    "correct": false
                },
                {
                    "option": "ખાંડ બનાવવાના ઉદ્યોગનો",
                    "correct": true
                },
                {
                    "option": "ખાણક્ષેત્રનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખાંડ બનાવવાના ઉદ્યોગનો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આમાંથી સેવાક્ષેત્રમાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "પશુપાલનક્ષેત્ર",
                    "correct": false
                },
                {
                    "option": "ખાંડ બનાવવાનો ઉદ્યોગ",
                    "correct": false
                },
                {
                    "option": "કૃષિક્ષેત્ર",
                    "correct": false
                },
                {
                    "option": "શિક્ષણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શિક્ષણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "આર્થિક પ્રવૃત્તિના ક્ષેત્રોમાં કોનો સમાવેશ થતો નથી ?",
            "a": [
                {
                    "option": "દ્વિતિયક્ષેત્ર",
                    "correct": false
                },
                {
                    "option": "સેવાક્ષેત્ર",
                    "correct": false
                },
                {
                    "option": "પ્રાથમિક ક્ષેત્ર",
                    "correct": false
                },
                {
                    "option": "ચતુર્થક્ષેત્ર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચતુર્થક્ષેત્ર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ભારતની વિવિધ આર્થિક પ્રવૃત્તિઓનું વર્ગીકરણ કઈ દ્રષ્ટિએ પણ કરવામાં આવે છે ?",
            "a": [
                {
                    "option": "માલિકીની",
                    "correct": true
                },
                {
                    "option": "સામૂહિકની",
                    "correct": false
                },
                {
                    "option": "વ્યક્તિગતની",
                    "correct": false
                },
                {
                    "option": "અન્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  માલિકીની</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "કઈ સાલમાં ઉદારનીતિ (નવી ઔદ્યોગિક નીતિ) અપનાવવામાં આવી ?",
            "a": [
                {
                    "option": "ઈ.સ.1921",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1950",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1991",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1981",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1991</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "જાહેર સાહસોને ખાનગી પેઢી કે વ્યક્તિને વેચવાની પ્રક્રિયાને શું કહેવાય ?",
            "a": [
                {
                    "option": "વૈશ્વિકીકરણ",
                    "correct": false
                },
                {
                    "option": "ખાનગીકરણ",
                    "correct": true
                },
                {
                    "option": "અદ્યતન ટેક્નોલોજી",
                    "correct": false
                },
                {
                    "option": "ઉદારીકરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખાનગીકરણ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "વિશ્વનું એક બનવું અથવા એકબીજાની નજીક આવવું એને શું કહેવાય ?",
            "a": [
                {
                    "option": "વૈશ્વિકીકરણ",
                    "correct": true
                },
                {
                    "option": "ખાનગીકરણ",
                    "correct": false
                },
                {
                    "option": "અદ્યતન ટેક્નોલોજી",
                    "correct": false
                },
                {
                    "option": "ઉદારીકરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૈશ્વિકીકરણ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "આમાંથી દ્વિતિય ક્ષેત્રમાં કોનો સમાવેશ થાય છે ?",
            "a": [
                {
                    "option": "સંરક્ષણ સામગ્રી",
                    "correct": true
                },
                {
                    "option": "ખાણક્ષેત્ર",
                    "correct": false
                },
                {
                    "option": "પ્રવાસ અને મનોરંજન",
                    "correct": false
                },
                {
                    "option": "વનક્ષેત્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સંરક્ષણ સામગ્રી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી ક્યા ક્ષેત્રને 'ઔદ્યોગિક ક્ષેત્ર' પણ કહે છે ?",
            "a": [
                {
                    "option": "પ્રાથમિક ક્ષેત્રને",
                    "correct": false
                },
                {
                    "option": "સેવાક્ષેત્રને",
                    "correct": false
                },
                {
                    "option": "ઉચ્ચ ક્ષેત્રને",
                    "correct": false
                },
                {
                    "option": "દ્વિતિયક્ષેત્રને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દ્વિતિયક્ષેત્રને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "આમાંથી જાહેર ક્ષેત્રનો ઉદ્યોગ ક્યો છે ?",
            "a": [
                {
                    "option": "ભિલાઈ સ્ટીલ પ્લાન્ટ",
                    "correct": true
                },
                {
                    "option": "રિલાયન્સ",
                    "correct": false
                },
                {
                    "option": "ઍલેમ્બિક",
                    "correct": false
                },
                {
                    "option": "કેડિલા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભિલાઈ સ્ટીલ પ્લાન્ટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ઑઈલ ઍન્ડ નૅચરલ ગૅસ કમિશન (ONGC) કયા પ્રકારના ક્ષેત્રનો ઉદ્યોગ છે ?",
            "a": [
                {
                    "option": "ખાનગી ક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "જાહેર ક્ષેત્રનો",
                    "correct": true
                },
                {
                    "option": "સંયુક્ત ક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "સહકારી ક્ષેત્રનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાહેર ક્ષેત્રનો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ટાટા આયર્ન ઍન્ડ સ્ટીલ કંપની લિમિટેડ (TISCO) કયા પ્રકારના ક્ષેત્રનો ઉદ્યોગ છે ?",
            "a": [
                {
                    "option": "જાહેર ક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "સંયુક્ત ક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "ખાનગી ક્ષેત્રનો",
                    "correct": true
                },
                {
                    "option": "સહકારી ક્ષેત્રનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખાનગી ક્ષેત્રનો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "મહેસાણાની દૂધસાગર ડેરી કયા પ્રકારના ક્ષેત્રનો ઉદ્યોગ છે ?",
            "a": [
                {
                    "option": "ખાનગી ક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "સંયુક્ત ક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "જાહેર ક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "સહકારી ક્ષેત્રનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સહકારી ક્ષેત્રનો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ભારત હેવી ઇલેક્ટ્રિક લિમિટેડ (BHEL-ભેલ) કયા પ્રકારના ક્ષેત્રનો ઉદ્યોગ છે ?",
            "a": [
                {
                    "option": "સહકારી ક્ષેત્રનો",
                    "correct": false
                },
                {
                    "option": "જાહેર ક્ષેત્રનો",
                    "correct": true
                },
                {
                    "option": "સંયુક્ત ક્ષેત્રનો ",
                    "correct": false
                },
                {
                    "option": "ખાનગી ક્ષેત્રનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જાહેર ક્ષેત્રનો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "નવી ઔદ્યોગિક નીતિમાં કઈ એક બાબત નહોતી ?",
            "a": [
                {
                    "option": "ખાનગીકરણ",
                    "correct": false
                },
                {
                    "option": "વૈશ્વિકીકરણ",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીયકરણ",
                    "correct": true
                },
                {
                    "option": "ઉદારીકરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાષ્ટ્રીયકરણ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "સંયુક્ત સાહસ એ કઈ પ્રક્રિયાનો એક ભાગ છે ?",
            "a": [
                {
                    "option": "વૈશ્વિકીકરણની",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીયકરણની",
                    "correct": false
                },
                {
                    "option": "ખાનગીકરણની",
                    "correct": true
                },
                {
                    "option": "ઉદારીકરણની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ખાનગીકરણની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "વિશ્વવ્યાપાર સંગઠન (WTO)ની સ્થાપના કઈ સાલમાં થઈ હતી ?",
            "a": [
                {
                    "option": "ઈ.સ.1992",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1995",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1991",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1998",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1995</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "માહિતી તકનિકીમાં આવેલી અભૂતપૂર્વ ક્રાંતિને કારણે ક્યા ક્ષેત્રમાં રોજગારીની નવી તકો ઊભી થઈ છે ?",
            "a": [
                {
                    "option": "પ્રાથમિક ક્ષેત્ર",
                    "correct": false
                },
                {
                    "option": "સેવાક્ષેત્ર",
                    "correct": true
                },
                {
                    "option": "દ્વિતિયક્ષેત્ર",
                    "correct": false
                },
                {
                    "option": "એકેય નહી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સેવાક્ષેત્ર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "આમાંથી કઈ કંપનીએ વિશ્વસ્તરના બજારોમાં પોતાનું સ્થાન જમાવ્યું છે ?",
            "a": [
                {
                    "option": "ટાટા કૅમિકલે",
                    "correct": false
                },
                {
                    "option": "ટૉરન્ટ પાવરે",
                    "correct": false
                },
                {
                    "option": "વિમલ ઑઈલે",
                    "correct": false
                },
                {
                    "option": "એશિયન પેઈન્ટ્સે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  એશિયન પેઈન્ટ્સે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ખેડૂતો ખાંડની મિલને શેરડી વેચવાની ના પાડે તો શું અસર થશે ?",
            "a": [
                {
                    "option": "ખાંડની મિલો બંધ થવાથી ખાંડ મળશે નહીં",
                    "correct": true
                },
                {
                    "option": "ખાંડની મિલોનું ઉત્પાદન વધતા ખાંડ વધુ મળશે",
                    "correct": false
                },
                {
                    "option": "શેરડીનું ઉત્પાદન ઘટશે",
                    "correct": false
                },
                {
                    "option": "શેરડી વધુ પાકશે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખાંડની મિલો બંધ થવાથી ખાંડ મળશે નહીં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "જે ઉદ્યોગો સરકારની માલિકી અને સરકારના સંચાલન હેઠળ હોય તેને કયા ક્ષેત્રના ઉદ્યોગો કહેવાય ?",
            "a": [
                {
                    "option": "ખાનગીક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "જાહેરક્ષેત્રના ઉદ્યોગો",
                    "correct": true
                },
                {
                    "option": "સંયુક્તક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "સહકારીક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાહેરક્ષેત્રના ઉદ્યોગો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "જે ઓદ્યોગિક એકમોની માલિકી અને સંચાલન ખાનગી લોકો પાસે હોય તેને કયા ક્ષેત્રના ઉદ્યોગો કહેવાય ?",
            "a": [
                {
                    "option": "ખાનગીક્ષેત્રના ઉદ્યોગો",
                    "correct": true
                },
                {
                    "option": "જાહેરક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "સંયુક્તક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "સહકારીક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખાનગીક્ષેત્રના ઉદ્યોગો</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "જે ઉદ્યોગોનાં માલિકી અને સંચાલન સરકાર તથા ખાનગી ક્ષેત્ર એમ બંનેનું હોય તેને કયા ક્ષેત્રના ઉદ્યોગો કહેવાય ?",
            "a": [
                {
                    "option": "ખાનગીક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "જાહેરક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "સંયુક્તક્ષેત્રના ઉદ્યોગો",
                    "correct": true
                },
                {
                    "option": "સહકારીક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંયુક્તક્ષેત્રના ઉદ્યોગો</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "દેશમાં ઘણી વ્યક્તિઓ આર્થિક દ્રષ્ટિએ સક્ષમ હોતી નથી, તેઓ વ્યક્તિગત રીતે ઉદ્યોગો શરૂ કરવાને બદલે આવા લોકો ભેગા મળી મંડળી કે સંઘ બનાવી ઉત્પાદન કે વેચાણની પ્રક્રિયા એકબીજાના સહકારથી શરૂ કરે તેને કયા ક્ષેત્રના ઉદ્યોગો કહેવાય ?",
            "a": [
                {
                    "option": "ખાનગીક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "જાહેરક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "સંયુક્તક્ષેત્રના ઉદ્યોગો",
                    "correct": false
                },
                {
                    "option": "સહકારીક્ષેત્રના ઉદ્યોગો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સહકારીક્ષેત્રના ઉદ્યોગો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "નોકરી કરતા પગારદાર કર્મચરીનો સમાવેશ કયા ક્ષેત્રમાં થાય છે ?",
            "a": [
                {
                    "option": "સંગઠિત ક્ષેત્રમાં",
                    "correct": true
                },
                {
                    "option": "અસંગઠિત ક્ષેત્રમાં",
                    "correct": false
                },
                {
                    "option": "બન્નેમાં",
                    "correct": false
                },
                {
                    "option": "એકેયમાં નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંગઠિત ક્ષેત્રમાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "દાડિયા અથવા મજૂરીએ જતાં મજૂરનો સમાવેશ કયા ક્ષેત્રમાં થાય છે ?",
            "a": [
                {
                    "option": "સંગઠિત ક્ષેત્રમાં",
                    "correct": false
                },
                {
                    "option": "અસંગઠિત ક્ષેત્રમાં",
                    "correct": true
                },
                {
                    "option": "બન્નેમાં",
                    "correct": false
                },
                {
                    "option": "એકેયમાં નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અસંગઠિત ક્ષેત્રમાં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ભારતમાં વૈશ્વિકીકરણથી નીચેનામાંથી કઈ અસર થઈ નથી ?",
            "a": [
                {
                    "option": "સેવાક્ષેત્રમાં રોજગારીની તકો વધી છે.",
                    "correct": false
                },
                {
                    "option": "લઘુ ઉદ્યોગને ફાયદો થયો છે",
                    "correct": true
                },
                {
                    "option": "ઓછી કિંમતે વધુ સારો માલ મળવા લાગ્યો",
                    "correct": false
                },
                {
                    "option": "બહુરાષ્ટ્રીય કંપનીથી યજમાન દેશને લાભ થયો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લઘુ ઉદ્યોગને ફાયદો થયો છે</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "સિંચાઈ વગરની જમીનની સમસ્યા નીચેનામાંથી કઈ રીતે હલ થાય ?",
            "a": [
                {
                    "option": "ખેતી આધારિત મિલોની સ્થાપનાથી",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા નહેરોના નિર્માણથી",
                    "correct": true
                },
                {
                    "option": "સરકાર દ્વારા ખાદ્યાન્નોની ખરીદીથી",
                    "correct": false
                },
                {
                    "option": "સહકારી ખરીદ-વેચાણ સમિતિથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરકાર દ્વારા નહેરોના નિર્માણથી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "પાકોના ઓછાં વળતરની સમસ્યા નીચેનામાંથી કઈ રીતે હલ થાય ?",
            "a": [
                {
                    "option": "ખેતી આધારિત મિલોની સ્થાપનાથી",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા નહેરોના નિર્માણથી",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા ખાદ્યાન્નોની ખરીદીથી",
                    "correct": true
                },
                {
                    "option": "સહકારી ખરીદ-વેચાણ સમિતિથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરકાર દ્વારા ખાદ્યાન્નોની ખરીદીથી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ખેડૂતોના દેવાના ભારની સમસ્યા નીચેનામાંથી કઈ રીતે હલ થાય ?",
            "a": [
                {
                    "option": "ખેતી આધારિત મિલોની સ્થાપનાથી",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા નહેરોના નિર્માણથી",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા ખાદ્યાન્નોની ખરીદીથી",
                    "correct": false
                },
                {
                    "option": "બૅન્કો દ્વારા ઓછા વ્યાજે લોનની સગવડ આપવાથી",
                    "correct": true
                }
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૅન્કો દ્વારા ઓછા વ્યાજે લોનની સગવડ આપવાથી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "કૃષિમાં મંદીના સમયમાં રોજગારના અભાવની સમસ્યા નીચેનામાંથી કઈ રીતે હલ થાય ?",
            "a": [
                {
                    "option": "ખેતી આધારિત મિલોની સ્થાપનાથી",
                    "correct": true
                },
                {
                    "option": "સરકાર દ્વારા નહેરોના નિર્માણથી",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા ખાદ્યાન્નોની ખરીદીથી",
                    "correct": false
                },
                {
                    "option": "સહકારી ખરીદ-વેચાણ સમિતિથી",
                    "correct": false
                }
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખેતી આધારિત મિલોની સ્થાપનાથી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "કૃષિક્ષેત્રે કાપણી પછી સ્થાનિક ખેડૂતોને પોતાના અનાજ વેચવાની સમસ્યા નીચેનામાંથી કઈ રીતે હલ થાય ?",
            "a": [
                {
                    "option": "ખેતી આધારિત મિલોની સ્થાપનાથી",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા નહેરોના નિર્માણથી",
                    "correct": false
                },
                {
                    "option": "સરકાર દ્વારા ખાદ્યાન્નોની ખરીદીથી",
                    "correct": false
                },
                {
                    "option": "સહકારી ખરીદ-વેચાણ સમિતિથી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સહકારી ખરીદ-વેચાણ સમિતિથી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "નીચેનામાંથી કોનો સમાવેશ સંગઠિત ક્ષેત્રમાં થાય છે ?",
            "a": [
                {
                    "option": "ગામના તલાટી કમ મંત્રી",
                    "correct": true
                },
                {
                    "option": "કૉન્ટ્રાક્ટરના દૈનિક કામદારનો",
                    "correct": false
                },
                {
                    "option": "દર્દીનો ઇલાજ કરતો ડૉકટરનો",
                    "correct": false
                },
                {
                    "option": "ખેડૂતનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગામના તલાટી કમ મંત્રી</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "નીચેનામાંથી કોનો સમાવેશ અસંગઠિત ક્ષેત્રમાં થાય છે ?",
            "a": [
                {
                    "option": "કડિયાનો",
                    "correct": true
                },
                {
                    "option": "શિક્ષકનો",
                    "correct": false
                },
                {
                    "option": "સરકારી બસ ડ્રાઈવરનો",
                    "correct": false
                },
                {
                    "option": "બૅન્ક કર્મચારીનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કડિયાનો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
	{ // Question 1
            "q": "કઈ ચળવળમાં સરકારના અયોગ્ય કાયદાનો વિવેકપૂર્વક ભંગ કરવાનો હતો ?",
            "a": [
                {
                    "option": "અસહકારની ચળવળમાં",
                    "correct": false
                },
                {
                    "option": "ખિલાફ્તની ચળવળમાં",
                    "correct": false
                },
                {
                    "option": "સવિનય કાનૂનભંગની ચળવળમાં",
                    "correct": true
                },
                {
                    "option": "ચંપારણ ચળવળમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સવિનય કાનૂનભંગની ચળવળમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "સવિનય કાનૂનભંગની લડત અન્વયે કઈ ઘટના બની ?",
            "a": [
                {
                    "option": "વિદ્યાપીઠોની સ્થાપના",
                    "correct": false
                },
                {
                    "option": "દાંડીકૂચ",
                    "correct": true
                },
                {
                    "option": "જલિયાંવાલા બાગ હત્યાકાંડ",
                    "correct": false
                },
                {
                    "option": "બારડોલી સત્યાગ્રહ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દાંડીકૂચ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "દાંડીકૂચની શરૂઆત કોણે કરી ?",
            "a": [
                {
                    "option": "પંડિત જવાહરલાલ નેહરુએ",
                    "correct": false
                },
                {
                    "option": "ગાંધીજીએ",
                    "correct": true
                },
                {
                    "option": "સરોજિની નાયડુએ",
                    "correct": false
                },
                {
                    "option": "વલ્લભભાઈ પટેલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગાંધીજીએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ગાંધીજીએ દાંડીકૂચ ક્યાંથી શરૂ કરી હતી ?",
            "a": [
                {
                    "option": "સાબરમતી આશ્રમથી",
                    "correct": true
                },
                {
                    "option": "સંન્યાસ આશ્રમથી",
                    "correct": false
                },
                {
                    "option": "કોચરબ આશ્રમથી",
                    "correct": false
                },
                {
                    "option": "પવનાર આશ્રમથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સાબરમતી આશ્રમથી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "દાંડીકૂચમાં કુલ કેટલા સત્યાગ્રહીઓ હતા ?",
            "a": [
                {
                    "option": "78",
                    "correct": true
                },
                {
                    "option": "93",
                    "correct": false
                },
                {
                    "option": "82",
                    "correct": false
                },
                {
                    "option": "65",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  78</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "દાંડીકૂચ ક્યારે આરંભાઈ ?",
            "a": [
                {
                    "option": "12 માર્ચ,1932ના રોજ",
                    "correct": false
                },
                {
                    "option": "6 એપ્રિલ, 1930ના રોજ",
                    "correct": false
                },
                {
                    "option": "6 એપ્રિલ,1942ના રોજ",
                    "correct": false
                },
                {
                    "option": "12 માર્ચ,1930ના રોજ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  12 માર્ચ,1930ના રોજ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ગાંધીજીએ મીઠાના કાયદાનો ક્યારે ભંગ કર્યો ?",
            "a": [
                {
                    "option": "6 એપ્રિલ,1942ના રોજ",
                    "correct": false
                },
                {
                    "option": "12 માર્ચ,1932ના રોજ",
                    "correct": false
                },
                {
                    "option": "6 એપ્રિલ, 1930ના રોજ",
                    "correct": true
                },
                {
                    "option": "12 માર્ચ,1930ના રોજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  6 એપ્રિલ, 1930ના રોજ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગોળમેજી પરિષદો ક્યા સ્થળે યોજાઈ હતી ?",
            "a": [
                {
                    "option": "દિલ્લી",
                    "correct": false
                },
                {
                    "option": "મુંબઈ",
                    "correct": false
                },
                {
                    "option": "લંડન",
                    "correct": true
                },
                {
                    "option": "લાહોર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લંડન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ગાંધીજીએ કઈ ગોળમેજી પરિષદમાં હાજરી આપી હતી ?",
            "a": [
                {
                    "option": "પહેલી",
                    "correct": false
                },
                {
                    "option": "બીજી",
                    "correct": true
                },
                {
                    "option": "ત્રીજી",
                    "correct": false
                },
                {
                    "option": "ચોથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બીજી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "હિંદ સરકારનો કાયદો ક્યારે અમલમાં આવ્યો ?",
            "a": [
                {
                    "option": "ઈ.સ.1933માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1939માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1937માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1935માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1935માં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "મુસ્લિમ લીગે ક્યા અધિવેશનમાં સ્વતંત્ર રાષ્ટ્ર તરીકે પાકિસ્તાનની માગણીનો ઠરાવ પસાર કર્યો ?",
            "a": [
                {
                    "option": "પટના અધિવેશનમાં",
                    "correct": false
                },
                {
                    "option": "લાહોર અધિવેશનમાં",
                    "correct": true
                },
                {
                    "option": "કટક અધિવેશનમાં",
                    "correct": false
                },
                {
                    "option": "એકેય નહી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાહોર અધિવેશનમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગાંધીજીએ વ્યક્તિગત સત્યાગ્રહી તરીકે કોની પસંદગી કરી ?",
            "a": [
                {
                    "option": "વિનોબા ભાવેની",
                    "correct": true
                },
                {
                    "option": "સરદાર પટેલની",
                    "correct": false
                },
                {
                    "option": "પંડિત જવાહરલાલ નેહરુની",
                    "correct": false
                },
                {
                    "option": "મૌલાના આઝાદની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વિનોબા ભાવેની</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "વિનોબા ભાવેએ વ્યક્તિગત સત્યાગ્રહની શરૂઆત ક્યાંથી કરી ?",
            "a": [
                {
                    "option": "વર્ધા નજીક પવનાર ગામથી",
                    "correct": true
                },
                {
                    "option": "વલસાડ નજીક ખેતડી ગામથી",
                    "correct": false
                },
                {
                    "option": "મહુવા નજીક કતપર ગામથી",
                    "correct": false
                },
                {
                    "option": "સુરત નજીક રાંદેર ગામથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વર્ધા નજીક પવનાર ગામથી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "'કરેંગે યા મરેંગે' સૂત્ર ગાંધીજીએ કઈ લડતમાં આપ્યું?",
            "a": [
                {
                    "option": "અસહકાર",
                    "correct": false
                },
                {
                    "option": "દાંડીકૂચ",
                    "correct": false
                },
                {
                    "option": "ચંપારણ",
                    "correct": false
                },
                {
                    "option": "હિંદ છોડો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હિંદ છોડો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "બ્રિટનના કયા વડાપ્રધાને હિંદને સંપૂર્ણ સ્વશાસન આપવાની જાહેરાત કરી ?",
            "a": [
                {
                    "option": "રામસે મેકડોનાલ્ડે",
                    "correct": false
                },
                {
                    "option": "એટલીએ",
                    "correct": true
                },
                {
                    "option": "લોર્ડ લિનલિથગોએ ",
                    "correct": false
                },
                {
                    "option": "ચર્ચિલે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  એટલીએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "કૅબિનેટ મિશન ભારતમાં કઈ સાલમાં આવ્યું ?",
            "a": [
                {
                    "option": "ઈ.સ.1943માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1946માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1944માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1945માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1946માં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "વચગાળાની સરકારના વડા પ્રધાન કોણ બન્યા ?",
            "a": [
                {
                    "option": "ગાંધીજી",
                    "correct": false
                },
                {
                    "option": "મહંમદઅલી ઝીણા",
                    "correct": false
                },
                {
                    "option": "વલ્લભભાઈ પટેલ",
                    "correct": false
                },
                {
                    "option": "જવાહરલાલ નેહરુ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જવાહરલાલ નેહરુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "બીજું વિશ્વયુદ્ધ ક્યારે શરૂ થયું હતું ?",
            "a": [
                {
                    "option": "ઈ.સ.1914માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1935માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1937માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1939માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1939માં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "દાંડી ગામ ગુજરાતના ક્યા જિલ્લામાં આવેલું છે ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "નવસારી",
                    "correct": true
                },
                {
                    "option": "સુરત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નવસારી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "ક્યા મુસ્લીમ નેતા હિંદને અલગ રાજ્યમાં વહેંચવાનો પ્રચાર કરતા હતા ?",
            "a": [
                {
                    "option": "મોહમ્મદ અલી ઝીણા ",
                    "correct": true
                },
                {
                    "option": "સૈયદ અહમદ",
                    "correct": false
                },
                {
                    "option": "શરીઅતુલ્લાખાં",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મોહમ્મદ અલી ઝીણા </p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 21
            "q": "ગોળમેજી પરિષદનો ઉદ્દેશ શું હતો ?",
            "a": [
                {
                    "option": "ભારતને કેવું બંધારણ આપવું તથા સુધારાઓ કરવા ",
                    "correct": true
                },
                {
                    "option": "ભારતને કેવી રીતે વધુ ગુલામ બનાવવું",
                    "correct": false
                },
                {
                    "option": "ભારતમાં કેવી રીતે શાસન કરવું",
                    "correct": false
                },
                {
                    "option": "ભારતના લોકો પર કેટલો અત્યાચાર કરવો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભારતને કેવું બંધારણ આપવું તથા સુધારાઓ કરવા </p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "બીજી ગોળમેજી પરિષદ ક્યારે યોજાઈ હતી ?",
            "a": [
                {
                    "option": "ઇ.સ. 1935માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1931માં",
                    "correct": true
                },
                {
                    "option": "ઇ.સ. 1932માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1934માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1931માં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "બીજી ગોળમેજી પરિષદમાં ગાંધીજી નિરાશ થયા કારણ કે દરેક કોમના પ્રતિનિધિઓએ પોતાની કોમ માટે ..............................",
            "a": [
                {
                    "option": "અલગ વસવાટ માટે પ્રદેશની માગણી કરી.",
                    "correct": false
                },
                {
                    "option": "અલગ મતદાર મંડળની માગણી કરી.",
                    "correct": true
                },
                {
                    "option": "સ્વતંત્ર કાયદાઓની માગણી કરી.",
                    "correct": false
                },
                {
                    "option": "બહુમતી નોકરીઓની માગણી કરી.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અલગ મતદાર મંડળની માગણી કરી.</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ઇ.સ. 1939માં કૉંગ્રેસી પ્રધાનમંડળોએ રાજીનામાં આપી દીધાં, કારણ કે...",
            "a": [
                {
                    "option": "અંગેજ સરકારે પ્રાંતોના ગવર્નરોને ખાસ સત્તાઓ આપી હતી.",
                    "correct": false
                },
                {
                    "option": "અંગેજ સરકારે વર્ગીય અને કોમી તત્ત્વોને ઉત્તેજન આપ્યું.",
                    "correct": false
                },
                {
                    "option": "દેશના કૉંગ્રેસી કાર્યકરોને જેલમાં પૂરવામાં આવ્યા.",
                    "correct": false
                },
                {
                    "option": "હિંદને પૂછ્યા વિના બ્રિટિશ સરકારે હિન્દને ઇંગ્લૅન્ડના પક્ષે વિશ્વયુદ્ધમાં જોડી દીધું.",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિંદને પૂછ્યા વિના બ્રિટિશ સરકારે હિન્દને ઇંગ્લૅન્ડના પક્ષે વિશ્વયુદ્ધમાં જોડી દીધું.</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ગાંધીજીએ વ્યક્તિગત સત્યાગ્રહ શરૂ કરવાનું નક્કી કર્યું , કારણ કે...",
            "a": [
                {
                    "option": "સામૂહિક સત્યાગ્રહમાં તેમને શ્રદ્ધા રહી ન હતી.",
                    "correct": false
                },
                {
                    "option": "વિશ્વયુદ્ધ સમયે તેઓ ઇંગ્લૅન્ડની મુશ્કેલીઓ વધારવા ઇચ્છતા હતા.",
                    "correct": false
                },
                {
                    "option": "તેમને વિનોબા ભાવે જેવા રચનાત્મક કાર્યકર મળી ગયા હતા.",
                    "correct": false
                },
                {
                    "option": "વિશ્વયુદ્ધ સમયે તેઓ અંગ્રેજ સરકારને વધુ મૂંઝવણમાં મૂકવા ઇચ્છતા નહોતા.",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિશ્વયુદ્ધ સમયે તેઓ અંગ્રેજ સરકારને વધુ મૂંઝવણમાં મૂકવા ઇચ્છતા નહોતા.</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "વિનોબા ભાવેએ વ્યક્તિગત સત્યાગ્રહની શરૂઆત ક્યારે કરી ? ",
            "a": [
                {
                    "option": "ઇ.સ. 1935માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1931માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1940માં",
                    "correct": true
                },
                {
                    "option": "ઇ.સ. 1944માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1940માં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "'હિંદ છોડો'નો ઐતિહાસિક ઠરાવ ક્યારે પસાર કરવામાં આવ્યો ?",
            "a": [
                {
                    "option": "8 ઑગસ્ટ, 1941ની રાત્રે",
                    "correct": false
                },
                {
                    "option": "8 એપ્રિલ, 1942ના દિવસે",
                    "correct": false
                },
                {
                    "option": "8 ઑગસ્ટ, 1942ની રાત્રે",
                    "correct": true
                },
                {
                    "option": "30 નવેમ્બર, 1942ના દિવસે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 8 ઑગસ્ટ, 1942ની રાત્રે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગુજરાતનું ધરાસણા શાનું મોટું કેન્દ્ર હતું ?",
            "a": [
                {
                    "option": "મત્સ્ય ઉત્પાદનનું",
                    "correct": false
                },
                {
                    "option": "ખાંડ ઉત્પાદનનું",
                    "correct": false
                },
                {
                    "option": "મસાલા ઉત્પાદનનું",
                    "correct": false
                },
                {
                    "option": "મીઠા ઉત્પાદનનું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીઠા ઉત્પાદનનું</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ગાંધીજી અને અબ્બાસ તૈયબજીની ધરપકડ થવાથી ધરાસણા સત્યાગ્રહની આગેવાની કોણે લીધી ?",
            "a": [
                {
                    "option": "સરોજિની નાયડુએ",
                    "correct": true
                },
                {
                    "option": "સરદાર પટેલે",
                    "correct": false
                },
                {
                    "option": "વિનોબા ભાવેએ",
                    "correct": false
                },
                {
                    "option": "ડૉ. રાજેન્દ્ર પ્રસાદે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરોજિની નાયડુએ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "'1935ના કહેવાતા સમવાયતંત્રના ધારામાં સાચું પ્રાંતિક સ્વરાજ્ય પ્રજાને કે પ્રધાનોને નહિ, પરંતુ ગવર્નરોને આપ્યું હતું' આવો મત કોનો હતો ? ",
            "a": [
                {
                    "option": "સરોજિની નાયડુનો",
                    "correct": false
                },
                {
                    "option": "સરદાર પટેલનો",
                    "correct": false
                },
                {
                    "option": "વિનોબા ભાવેનો",
                    "correct": false
                },
                {
                    "option": "ડૉ. રાજેન્દ્ર પ્રસાદનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડૉ. રાજેન્દ્ર પ્રસાદનો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "હિન્દુઓ અને મુસ્લિમો બે અલગ રાષ્ટ્રીયતા ધરાવતા હોવાથી તેઓને બે અલગ રાજ્યોમાં વહેંચવામાં આવે. આવો પ્રચાર કયા મુસ્લિમ નેતાઓ કરતા હતા ?",
            "a": [
                {
                    "option": "મૌલાના શૌકતઅલી અને મૌલાના મોહમ્મદઅલી",
                    "correct": false
                },
                {
                    "option": "સૈયદ અહમદખાન અને શરીઅતુલ્લા",
                    "correct": false
                },
                {
                    "option": "મોહમ્મદ ઇકબાલ અને ચૌધરી રહેમતઅલી",
                    "correct": true
                },
                {
                    "option": "મૌલાના શૌકતઅલી અને મૌલાના આઝાદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મોહમ્મદ ઇકબાલ અને ચૌધરી રહેમતઅલી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "હિંદને મનાવી લેવા બ્રિટનના વડાપ્રધાન ચર્ચિલે નવી દરખાસ્તો સાથે હિંદ કોને મોકલ્યો ? ",
            "a": [
                {
                    "option": "સર સ્ટ્રેફર્ડ ક્રિપ્સને",
                    "correct": true
                },
                {
                    "option": "સર ફર્ગ્યુસન ક્રિપ્સને",
                    "correct": false
                },
                {
                    "option": "સર એલન બોર્ડરને",
                    "correct": false
                },
                {
                    "option": "સાયમન કમિશનને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સર સ્ટ્રેફર્ડ ક્રિપ્સને</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "વ્યક્તિગત સત્યાગ્રહ કરવાના કારણે વિનોબા ભાવેની ધરપકડ કરી કેટલા માસની સજા કરવામાં આવી ?",
            "a": [
                {
                    "option": "3",
                    "correct": true
                },
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "ક્રિપ્સ મિશનમાં કઈ વાતનો ઉલ્લેખ ન હતો ?",
            "a": [
                {
                    "option": "હિંદને વહેલું સ્વશાસન આપવાની",
                    "correct": false
                },
                {
                    "option": "નવા હિંદ સંઘની રચના કરવાની",
                    "correct": false
                },
                {
                    "option": "હિંદને સ્વાયત્તતા આપવાના સમયની",
                    "correct": true
                },
                {
                    "option": "અલગ પાકિસ્તાનની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિંદને સ્વાયત્તતા આપવાના સમયની</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "કયા આંદોલનથી અંગ્રેજ સરકારને ખાતરી થઈ ગઈ કે હવે વધારે સમય તેઓ ભારતની પ્રજા પર શાસન કરી શકવાના નથી.",
            "a": [
                {
                    "option": "અસકારના",
                    "correct": false
                },
                {
                    "option": "દાંડીકૂચના",
                    "correct": false
                },
                {
                    "option": "હિંદછોડો",
                    "correct": true
                },
                {
                    "option": "બારડોલી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિંદછોડો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "કૅબિનેટ મિશન અંતર્ગત બ્રિટિશ પ્રધાનમંડળના કેટલા આગેવાનોનું પ્રતિનિધિમંડળ ભારત આવ્યું ?",
            "a": [
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "કૅબિનેટ મિશન યોજનામાં નીચેનામાંથી કઈ દરખાસ્ત હતી ?",
            "a": [
                {
                    "option": "અખિલ હિંદ સમાવયતંત્રની સ્થાપના કરવી",
                    "correct": true
                },
                {
                    "option": "હિંદના પ્રાંતોને કુલ ત્રણ જૂથોમાં વહેંચવા",
                    "correct": false
                },
                {
                    "option": "હિંદને નવું અને મૌલિક બંધારણ ઘડવાની છૂટ આપવી, બંધારણ ઘડાય ત્યાં સુધી વચગાળાની સરકાર રચવી",
                    "correct": false
                },
                {
                    "option": "આપેલા બધા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "કૅબિનેટ મિશન પછી યોજાયેલ ચૂંટણીઓમાં કયા પક્ષે સારો દેખાવ કર્યો ?",
            "a": [
                {
                    "option": "કૉંગ્રેસે",
                    "correct": true
                },
                {
                    "option": "મુસ્લિમ લીગે",
                    "correct": false
                },
                {
                    "option": "R.S.S.એ",
                    "correct": false
                },
                {
                    "option": "કમ્યુનિસ્ટ પાર્ટી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૉંગ્રેસે</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "કૅબિનેટ મિશન પછી યોજાયેલ ચૂંટણીઓમાં પોતાના પક્ષને મળેલા નબળા પ્રતિસાદથી અકળાઈને મુસ્લિમ લીગે તે દિવસને કયા દિવસ તરીકે ઊજવ્યો ?",
            "a": [
                {
                    "option": "આડાં પગલાં દિન",
                    "correct": false
                },
                {
                    "option": "ઊભા પગલાં દિન",
                    "correct": false
                },
                {
                    "option": "સીધાં પગલાં દિન",
                    "correct": true
                },
                {
                    "option": "ત્રાંસા પગલાં દિન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સીધાં પગલાં દિન</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "બ્રિટનના વડાપ્રધાને ક્યારે બ્રિટિશ પાર્લામેન્ટમાં ભારત છોડી ચાલ્યા જવાની જાહેરાત કરી ? ",
            "a": [
                {
                    "option": "20 ફેબ્રુઆરી, 1947",
                    "correct": true
                },
                {
                    "option": "8 ઑગસ્ટ, 1947",
                    "correct": false
                },
                {
                    "option": "20 જૂન, 1948",
                    "correct": false
                },
                {
                    "option": "15 ઑગસ્ટ, 1947",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 20 ફેબ્રુઆરી, 1947</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 41
            "q": "બ્રિટિશ સરકારનો મોડામાં મોડું ક્યાં સુધીમાં જવાબદાર હિંદીઓના હાથમાં સમગ્ર રાજ્ય વહીવટ સોંપી ભારત છોડી ચાલ્યા જવાનો ઇરાદો હતો ?",
            "a": [
                {
                    "option": "ફેબ્રુઆરી, 1947",
                    "correct": false
                },
                {
                    "option": "ઑગસ્ટ, 1947",
                    "correct": false
                },
                {
                    "option": "જૂન, 1948",
                    "correct": true
                },
                {
                    "option": "ઑગસ્ટ, 1948",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જૂન, 1948</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "કોણે ભારત છોડવાની જાહેરાતને બ્રિટિશરોનું સૌથી ઉમદા કૃત્ય કહીને આવકારી હતી ?",
            "a": [
                {
                    "option": "જવાહરલાલ નહેરુએ",
                    "correct": false
                },
                {
                    "option": "ગાંધીજીએ",
                    "correct": true
                },
                {
                    "option": "સરદાર પટેલે",
                    "correct": false
                },
                {
                    "option": "રવિન્દ્રનાથ ટાગોરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાંધીજીએ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
	{ // Question 1
            "q": "સંયુક્ત રાષ્ટ્રસંઘ પહેલા વિશ્વ શાંતિ માટે કઈ સંસ્થા બની હતી ? ",
            "a": [
                {
                    "option": "સમૂહ રાષ્ટ્રો",
                    "correct": false
                },
                {
                    "option": "સંઘ રાષ્ટ્રો",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રસંઘ",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાષ્ટ્રસંઘ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "અમેરિકાના ક્યા પ્રમુખે સંયુક્ત રાષ્ટ્રસંઘ બનાવવાની યોજના ઘડી ?",
            "a": [
                {
                    "option": "ચર્ચિલે",
                    "correct": false
                },
                {
                    "option": "એટલીએ",
                    "correct": false
                },
                {
                    "option": "રામસે મેકડોનાલ્ડે",
                    "correct": false
                },
                {
                    "option": "રૂઝવેલ્ટે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રૂઝવેલ્ટે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "સંયુક્ત રાષ્ટ્રોની સભ્યસંખ્યા હાલમાં કેટલી છે ?",
            "a": [
                {
                    "option": "122",
                    "correct": false
                },
                {
                    "option": "51",
                    "correct": false
                },
                {
                    "option": "193",
                    "correct": true
                },
                {
                    "option": "195",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  193</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સ્થાપના ક્યારે થઈ ?",
            "a": [
                {
                    "option": "24/11/1945",
                    "correct": false
                },
                {
                    "option": "24/12/1945",
                    "correct": false
                },
                {
                    "option": "24/09/1945",
                    "correct": false
                },
                {
                    "option": "24/10/1945",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  24/10/1945</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "સંયુક્ત રાષ્ટ્રસંઘનું વડુંમથક કયાં છે ?",
            "a": [
                {
                    "option": "ન્યૂયોર્ક",
                    "correct": true
                },
                {
                    "option": "જિનિવા",
                    "correct": false
                },
                {
                    "option": "વૉશિંગ્ટન-ડી.સી.",
                    "correct": false
                },
                {
                    "option": "પેરિસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ન્યૂયોર્ક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "સંયુક્ત રાષ્ટ્રસંઘનું સૌથી મહત્ત્વનું અંગ કયુ છે ?",
            "a": [
                {
                    "option": "ન્યાયની આંતરરાષ્ટ્રીય અદાલત",
                    "correct": false
                },
                {
                    "option": "આર્થિક અને સામાજિક સમિતિ",
                    "correct": false
                },
                {
                    "option": "સલામતી સમિતિ",
                    "correct": true
                },
                {
                    "option": "સામાન્ય સભા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સલામતી સમિતિ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "સંયુક્ત રાષ્ટ્રસંઘનું સૌથી મોટું અંગ કયુ છે ?",
            "a": [
                {
                    "option": "ન્યાયની આંતરરાષ્ટ્રીય અદાલત",
                    "correct": false
                },
                {
                    "option": "આર્થિક અને સામાજિક સમિતિ",
                    "correct": false
                },
                {
                    "option": "સલામતી સમિતિ",
                    "correct": false
                },
                {
                    "option": "સામાન્ય સભા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સામાન્ય સભા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સલામતી સમિતિના બિનકાયમી સભ્યરાષ્ટ્રો કેટલા છે ?",
            "a": [
                {
                    "option": "7",
                    "correct": false
                },
                {
                    "option": "12",
                    "correct": false
                },
                {
                    "option": "10",
                    "correct": true
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  10</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સલામતી સમિતિના કાયમી સભ્યરાષ્ટ્રો કેટલા છે ?",
            "a": [
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": true
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "7",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  5</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આમાંથી કયું રાષ્ટ્ર સંયુક્ત રાષ્ટ્રસંઘની સલામતી સમિતિનું કાયમી સભ્ય નથી ?",
            "a": [
                {
                    "option": "અમેરિકા",
                    "correct": false
                },
                {
                    "option": "ચીન",
                    "correct": false
                },
                {
                    "option": "ફ્રાંસ",
                    "correct": false
                },
                {
                    "option": "ભારત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભારત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "કાયમી પાંચ સભ્યોમાંથી એક પણ સભ્ય રાષ્ટ્ર 'નકારાત્મક મત' આપે તો નિર્ણય લઈ શકાતો નથી, આ સત્તાને શું કહે છે ?",
            "a": [
                {
                    "option": "વીજ પાવર",
                    "correct": false
                },
                {
                    "option": "વીટો પાવર",
                    "correct": true
                },
                {
                    "option": "શક્તિ પાવર",
                    "correct": false
                },
                {
                    "option": "ઈલેક્ટ્રીક પાવર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વીટો પાવર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "વિશ્વ આરોગ્ય સંસ્થાનું ટૂંકું નામ શું છે?",
            "a": [
                {
                    "option": "UNESCO",
                    "correct": false
                },
                {
                    "option": "FAO",
                    "correct": false
                },
                {
                    "option": "WHO",
                    "correct": true
                },
                {
                    "option": "ILO",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  WHO</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "આંતરરાષ્ટ્રીય મજૂર સંગઠનનું ટૂંકું નામ શું છે?",
            "a": [
                {
                    "option": "WHO",
                    "correct": false
                },
                {
                    "option": "FAO",
                    "correct": false
                },
                {
                    "option": "UNESCO",
                    "correct": false
                },
                {
                    "option": "ILO",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ILO</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "વિશ્વ બૅન્કનું વડું મથક ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "જિનિવા",
                    "correct": false
                },
                {
                    "option": "વૉશિંગ્ટન-ડી.સી.",
                    "correct": true
                },
                {
                    "option": "પેરિસ",
                    "correct": false
                },
                {
                    "option": "ન્યૂયોર્ક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વૉશિંગ્ટન-ડી.સી.</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ખોરાક અને કૃષિ સંગઠનનું વડું મથક ક્યાં આવેલું છે ? ",
            "a": [
                {
                    "option": "રોમ",
                    "correct": true
                },
                {
                    "option": "વૉશિંગ્ટન-ડી.સી.",
                    "correct": false
                },
                {
                    "option": "પેરિસ",
                    "correct": false
                },
                {
                    "option": "જિનિવા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રોમ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ભારતે વિશ્વને શાંતિ માટે ક્યા સિદ્ધાંતો આપ્યા ?",
            "a": [
                {
                    "option": "ચારશીલના સિદ્ધાંતો",
                    "correct": false
                },
                {
                    "option": "બારશીલના સિદ્ધાંતો",
                    "correct": false
                },
                {
                    "option": "પંચશીલના સિદ્ધાંતો",
                    "correct": true
                },
                {
                    "option": "શાંતશીલના સિદ્ધાંતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પંચશીલના સિદ્ધાંતો</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સલામતી સમિતિના બિનકાયમી સભ્યરાષ્ટ્રોની કેટલા વર્ષે ચૂંટણી થાય છે ?",
            "a": [
                {
                    "option": "પાંચ",
                    "correct": false
                },
                {
                    "option": "ચાર",
                    "correct": false
                },
                {
                    "option": "ત્રણ",
                    "correct": false
                },
                {
                    "option": "બે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સ્થાપના થઈ એ સમયે કેટલાં રાષ્ટ્રો તેનાં સભ્યો હતાં ?",
            "a": [
                {
                    "option": "41",
                    "correct": false
                },
                {
                    "option": "61",
                    "correct": false
                },
                {
                    "option": "49",
                    "correct": false
                },
                {
                    "option": "51",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  51</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સલામતી સમિતિમાં કુલ સભ્યસંખ્યા કેટલી છે ?",
            "a": [
                {
                    "option": "14",
                    "correct": false
                },
                {
                    "option": "21",
                    "correct": false
                },
                {
                    "option": "15",
                    "correct": true
                },
                {
                    "option": "10",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  15</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "આમાંથી કયું રાષ્ટ્ર સંયુક્ત રાષ્ટ્રસંઘની સલામતી સમિતિનું કાયમી સભ્ય છે ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડ ",
                    "correct": true
                },
                {
                    "option": "ઇટાલી",
                    "correct": false
                },
                {
                    "option": "જર્મની",
                    "correct": false
                },
                {
                    "option": "ઑસ્ટ્રૅલિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇંગ્લૅન્ડ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "રાષ્ટ્રસંઘ નામની સંસ્થા શું થવાથી નિષ્ફળ નીવડી ?",
            "a": [
                {
                    "option": "બીજું વિશ્વયુદ્ધ શરૂ થવાથી",
                    "correct": true
                },
                {
                    "option": "પ્રથમ વિશ્વયુદ્ધ શરૂ થવાથી",
                    "correct": false
                },
                {
                    "option": "ત્રીજું  વિશ્વયુદ્ધ શરૂ થવાથી",
                    "correct": false
                },
                {
                    "option": "ચોથું વિશ્વયુદ્ધ શરૂ થવાથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બીજું વિશ્વયુદ્ધ શરૂ થવાથી</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "સંયુક્ત રાષ્ટ્રસંઘનું ટૂંકુ નામ શું છે ?",
            "a": [
                {
                    "option": "યુનાની",
                    "correct": false
                },
                {
                    "option": "યુનો",
                    "correct": true
                },
                {
                    "option": "યુથ",
                    "correct": false
                },
                {
                    "option": "યુદ્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યુનો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "સૌ પ્રથમ વિશ્વસંસ્થાનો વિચાર કોણે રજૂ કર્યો ?",
            "a": [
                {
                    "option": "ચર્ચિલે",
                    "correct": false
                },
                {
                    "option": "એટલીએ",
                    "correct": false
                },
                {
                    "option": "રામસે મેકડોનાલ્ડે",
                    "correct": false
                },
                {
                    "option": "વિલ્સને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિલ્સને</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "યુનોનું હવે નામ શું છે ?",
            "a": [
                {
                    "option": "યુ.એન.",
                    "correct": true
                },
                {
                    "option": "યુ.એલ.",
                    "correct": false
                },
                {
                    "option": "યુ.એસ.",
                    "correct": false
                },
                {
                    "option": "યુ.એમ.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યુ.એન.</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "સંયુક્ત રાષ્ટ્રસંઘના મહામંત્રીની મુદત કેટલા વર્ષની હોય છે ?",
            "a": [
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": true
                },
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 26
            "q": "નીચેનામાંથી સંયુક્ત રાષ્ટ્રસંઘનો હેતુ કયો છે ?",
            "a": [
                {
                    "option": "આંતરરાષ્ટ્રીય શાંતિ અને સલામતી જાળવવી",
                    "correct": false
                },
                {
                    "option": "સભ્ય દેશો વચ્ચે મૈત્રીભાવના કેળવવી",
                    "correct": false
                },
                {
                    "option": "આંતરાષ્ટ્રીય પ્રશ્નોનો નિકાલ કરવો",
                    "correct": false
                },
                {
                    "option": "આપેલા બધા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "સંયુક્ત રાષ્ટ્રસંઘના અંગ કેટલાં છે ?",
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
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 6</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 28
            "q": "સંયુક્ત રાષ્ટ્રસંઘના કયા અંગને વિશ્વની પાર્લામેન્ટ કહી શકાય ?",
            "a": [
                {
                    "option": "સામાન્ય સભાને",
                    "correct": true
                },
                {
                    "option": "સલામતિ સમિતિને",
                    "correct": false
                },
                {
                    "option": "વાલીપણા સમિતિને",
                    "correct": false
                },
                {
                    "option": "આર્થિક અને સામાજિક સમિતિને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સામાન્ય સભા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સામાન્ય સભામાં દરેક સભ્યરાષ્ટ્ર વધુમાં વધુ કેટલા પ્રતિનિધિઓ મોકલી શકે છે ? ",
            "a": [
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": true
                },
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 5</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 30
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સામાન્ય સભામાં એક સભ્યરાષ્ટ્ર મત પ્રદાન સમયે કેટલા મત આપી શકે ?",
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
                    "option": "1",
                    "correct": true
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 31
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સામાન્ય સભા વર્ષમાં કેટલી વાર મળે છે ?",
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
                    "option": "1",
                    "correct": true
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 32
            "q": "સંયુક્ત રાષ્ટ્રસંઘની સામાન્ય સભાએ માનવ-અધિકારો અંગેનું વૈશ્વિક જાહેરનામું ક્યારે મંજૂર કર્યું ?",
            "a": [
                {
                    "option": "10 ડિસેમ્બર, 1948",
                    "correct": true
                },
                {
                    "option": "15 ડિસેમ્બર, 1949",
                    "correct": false
                },
                {
                    "option": "20 ડિસેમ્બર, 1950",
                    "correct": false
                },
                {
                    "option": "10 નવેમ્બર, 1948",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 10 ડિસેમ્બર, 1948</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 33
            "q": "યુનોમાં નવા સભ્યોને પ્રવેશ આપવાની કોને સત્તા છે ?",
            "a": [
                {
                    "option": "સામાન્ય સભાને",
                    "correct": true
                },
                {
                    "option": "સલામતિ સમિતિને",
                    "correct": false
                },
                {
                    "option": "વાલીપણા સમિતિને",
                    "correct": false
                },
                {
                    "option": "આર્થિક અને સામાજિક સમિતિને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સામાન્ય સભાને</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 34
            "q": "ખોરાક અને કૃષિ સંગઠનનું ટૂંકુ નામ શું છે ?",
            "a": [
                {
                    "option": "WHO",
                    "correct": false
                },
                {
                    "option": "FAO",
                    "correct": true
                },
                {
                    "option": "UNESCO",
                    "correct": false
                },
                {
                    "option": "ILO",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: FAO</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 35
            "q": "યુનેસ્કોનું વડું મથક કયું છે ?",
            "a": [
                {
                    "option": "પૅરિસ",
                    "correct": true
                },
                {
                    "option": "જિનિવા",
                    "correct": false
                },
                {
                    "option": "ન્યૂયૉર્ક",
                    "correct": false
                },
                {
                    "option": "રોમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૅરિસ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 36
            "q": "સંયુકત રાષ્ટ્રોના સચિવાલયના વડા કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "મહામંત્રી",
                    "correct": true
                },
                {
                    "option": "મહાશય",
                    "correct": false
                },
                {
                    "option": "મહામહિમ",
                    "correct": false
                },
                {
                    "option": "મહાલય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહામંત્રી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "આંતરરાષ્ટ્રીય મજૂર સંગઠનનું વડું મથક ક્યાં આવેલું છે ?",
            "a": [
                {
                    "option": "પૅરિસ",
                    "correct": false
                },
                {
                    "option": "જિનિવા",
                    "correct": true
                },
                {
                    "option": "ન્યૂયૉર્ક",
                    "correct": false
                },
                {
                    "option": "રોમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિનિવા</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 38
            "q": "યુનિસેફનું વડું મથક ક્યાં આવેલું છે ? ",
            "a": [
                {
                    "option": "પૅરિસ",
                    "correct": false
                },
                {
                    "option": "જિનિવા",
                    "correct": false
                },
                {
                    "option": "ન્યૂયૉર્ક",
                    "correct": true
                },
                {
                    "option": "રોમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ન્યૂયૉર્ક</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 39
            "q": "વિશ્વ આરોગ્ય સંસ્થાનું વડું મથક ક્યાં આવેલું છે ? ",
            "a": [
                {
                    "option": "પૅરિસ",
                    "correct": false
                },
                {
                    "option": "જિનિવા",
                    "correct": true
                },
                {
                    "option": "ન્યૂયૉર્ક",
                    "correct": false
                },
                {
                    "option": "રોમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિનિવા</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 40
            "q": "દુનિયાના લોકોનાં શારીરિક અને માનસિક આરોગ્યમાં સુધારો થાય એ માટે યુ. એન.ની કઈ સંસ્થા કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "WHO",
                    "correct": true
                },
                {
                    "option": "UNESCO",
                    "correct": false
                },
                {
                    "option": "ILO",
                    "correct": false
                },
                {
                    "option": "IBRD",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: WHO</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 41
            "q": "દુનિયાના વિવિધ દેશો વચ્ચે શૈક્ષણિક, વૈજ્ઞાનિક અને સાંસ્કૃતિક ક્ષેત્રોમાં પરસ્પર સહકાર સાધવાનું કાર્ય યુ. એન.ની કઈ સંસ્થા કરે છે ?",
            "a": [
                {
                    "option": "WHO",
                    "correct": false
                },
                {
                    "option": "UNESCO",
                    "correct": true
                },
                {
                    "option": "ILO",
                    "correct": false
                },
                {
                    "option": "UNICEF",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: UNESCO</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 42
            "q": "માલિકો દ્વારા કામદારોનું શોષણ ન થાય, યોગ્ય વેતન પ્રાપ્ત થાય એ માટે પ્રયત્નો કરવાનું કાર્ય યુ. એન.ની કઈ સંસ્થા કરે છે ?",
            "a": [
                {
                    "option": "WHO",
                    "correct": false
                },
                {
                    "option": "UNESCO",
                    "correct": false
                },
                {
                    "option": "ILO",
                    "correct": true
                },
                {
                    "option": "UNICEF",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ILO</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 43
            "q": "બાળકોના જીવનની ગુણવત્તા સુધરે, યોગ્ય અને પોષણક્ષમ આહાર પ્રાપ્ત થાય એવા બાળક્લ્યાણના કાર્યક્રમો યોજવાનું કાર્ય યુ. એન.ની કઈ સંસ્થા કરે છે ?",
            "a": [
                {
                    "option": "WHO",
                    "correct": false
                },
                {
                    "option": "UNESCO",
                    "correct": false
                },
                {
                    "option": "ILO",
                    "correct": false
                },
                {
                    "option": "UNICEF",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: UNICEF</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "વિશ્વમાં અન્નનું ઉત્પાદન વધે અને કૃષિનો વિકાસ થાય એવા પ્રયાસો કરવાનું કાર્ય યુ. એન.ની કઈ સંસ્થા કરે છે ?",
            "a": [
                {
                    "option": "WHO",
                    "correct": false
                },
                {
                    "option": "FAO",
                    "correct": true
                },
                {
                    "option": "ILO",
                    "correct": false
                },
                {
                    "option": "UNICEF",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: FAO</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 45
            "q": "વિશ્વયુદ્ધ દરમિયાન ખુવારી થયેલા દેશોના પુન:નિર્માણ માટે ધિરાણ, વિકાસશીલ દેશોના વિકાસ તેમજ મહાનગરોના પ્રોજેક્ટ માટે ધિરાણ આપવાનું કાર્ય યુ. એન.ની કઈ સંસ્થા કરે છે ?",
            "a": [
                {
                    "option": "WHO",
                    "correct": false
                },
                {
                    "option": "IBRD",
                    "correct": true
                },
                {
                    "option": "ILO",
                    "correct": false
                },
                {
                    "option": "UNICEF",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: IBRD</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 46
            "q": "કયા યુદ્ધમાં ઘવાયેલા સૈનિકોની સારવાર કરવા ભારતે ડૉક્ટરોની ટીમ મોકલી હતી ?",
            "a": [
                {
                    "option": "કોરિયાના",
                    "correct": true
                },
                {
                    "option": "સુદાનના",
                    "correct": false
                },
                {
                    "option": "ઇરાનના",
                    "correct": false
                },
                {
                    "option": "ઇરાકના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોરિયાના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "આપણો દેશ ક્યારે આઝાદ થયો ?",
            "a": [
                {"option": "15/7/1947",      "correct": false},
                {"option": "26/1/1950",     "correct": false},
                {"option": "15/8/1947",      "correct": true},
                {"option": "15/8/1950",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  15/8/1947</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ભારત આઝાદ થયો ત્યારે દેશમાં કેટલાં દેશી રાજ્યો હતાં ?",
            "a": [
                {"option": "562",    "correct": true},
                {"option": "462",     "correct": false},
                {"option": "528",      "correct": false},
                {"option": "561",   "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  562</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ભારતના ભાગલા પાડવાનો નિર્ણય કોણે કર્યો ?",
            "a": [
                {"option": "એટલીએ",        "correct": false},
                {"option": "લોર્ડ માઉન્ટ બેટને",        "correct": true},
                {"option": "લોર્ડ લિનલિથગોએ",  "correct": false},
                {"option": "ઇંગ્લૅન્ડની પાર્લામેન્ટે",   "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોર્ડ માઉન્ટ બેટને</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "માઉન્ટબેટન યોજનાના અમલ માટે કયો ધારો પસાર કરવામાં આવ્યો ?",
            "a": [
                {"option": "હિંદ ધારો",    "correct": false},
                {"option": "હિંદ પરાધિન ધારો",     "correct": false},
                {"option": "હિંદ સ્વાતંત્ર્ય ધારો",    "correct": true},
                {"option": "એકેય નહી",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હિંદ સ્વાતંત્ર્ય ધારો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": " પાકિસ્તાનના સૌપ્રથમ રાષ્ટ્રપ્રમુખ તરીકે કોની પસંદગી થઈ ?",
            "a": [
                {"option": "સૈયદ અહમદની",   "correct": false},
                {"option": "મહંમદઅલી ઝીણાની",        "correct": true},
                {"option": "શરીઅતુલ્લાની",  "correct": false},
                {"option": "આસિફ અલી ઝરદારી",  "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહંમદઅલી ઝીણાની</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 6
            "q": "સ્વતંત્ર ભારતના છેલ્લા ગવર્નર જનરલ તરીકે કોની પસંદગી થઈ ?",
            "a": [
                {"option": "ચક્રવર્તી રાજગોપાલાચારી",      "correct": true},
                {"option": "લૉર્ડ માઉન્ટ બેટન",     "correct": false},
                {"option": "ડૉ. રાજેન્દ્ર પ્રસાદ",      "correct": false},
                {"option": "સરદાર પટેલ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચક્રવર્તી રાજગોપાલાચારી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "સ્વતંત્ર ભારતના પ્રથમ ગવર્નર જનરલ તરીકે કોને નિમવામાં આવ્યા ?",
            "a": [
                {"option": "લૉર્ડ માઉન્ટ બેટનને",    "correct": true},
                {"option": "લોર્ડ લિનલિથિગોને",     "correct": false},
                {"option": "ચક્રવર્તી રાજગોપાલાચારીને",      "correct": false},
                {"option": "જવાહરલાલ નેહરુને",   "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લૉર્ડ માઉન્ટ બેટનને</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ભાતરના પ્રથમ વડા પ્રધાનનો હોદ્દો કોણે સંભાળ્યો ?",
            "a": [
                {"option": "સરદાર પટેલે",        "correct": false},
                {"option": "ચક્રવર્તી રાજગોપાલાચારીએ",           "correct": false},
                {"option": "જવાહરલાલ નેહરુએ",  "correct": true},
                {"option": "ડૉ. રાજેન્દ્ર પ્રસાદે ",   "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જવાહરલાલ નેહરુએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "સર સી.પી. રામસ્વામી ઐયરે કયા રાજ્યને સ્વતંત્ર સાર્વભૌમ રાજ્ય તરીકે જાહેર કર્યું ?",
            "a": [
                {"option": "ભોપાલ રાજ્યને",    "correct": false},
                {"option": "હૈદરાબાદ રાજ્યનો",     "correct": false},
                {"option": "ત્રાવણકોર રાજ્યને",    "correct": true},
                {"option": "મૈસૂર રાજ્યને",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્રાવણકોર રાજ્યને</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "કયા રાજ્યના નવાબે પોતાના રાજ્યને પાકિસ્તાન સાથે જોડાયેલું જાહેર કર્યું ?",
            "a": [
                {"option": "જૂનાગઢ રાજ્યના",   "correct": true},
                {"option": "હૈદરાબાદ રાજ્યના",          "correct": false},
                {"option": "ભોપાલ રાજ્યના",  "correct": false},
                {"option": "મૈસૂર રાજ્યના",  "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જૂનાગઢ રાજ્યના</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "દેશી રાજ્યોનું ભારતસંઘમાં વિલીનીકરણ કોણે કર્યું ?",
            "a": [
                {"option": "જવાહરલાલ નેહરુએ",      "correct": false},
                {"option": "લૉર્ડ માઉન્ટ બેટને",     "correct": false},
                {"option": "સરદાર પટેલે",      "correct": true},
                {"option": "ઇંગ્લૅન્ડની પાર્લામેન્ટે",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સરદાર પટેલે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ભારતસંઘમાં જોડાવવાની સૌપ્રથમ પહેલ કયા રાજાએ કરી હતી ?",
            "a": [
                {"option": "ભગવતસિંહજીએ",    "correct": false},
                {"option": "જ્યકુમારસિંહજીએ",     "correct": false},
                {"option": "ભાવસિંહજીએ",      "correct": false},
                {"option": "કૃષ્ણકુમારસિંહજીએ",   "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૃષ્ણકુમારસિંહજીએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "દિલ્લીના લાલ કિલ્લા પરથી પહેલીવાર ત્રિરંગો ધ્વજ કોણે ફરકાવ્યો હતો ?",
            "a": [
                {"option": "મૌલાના આઝાદે",        "correct": false},
                {"option": "જવાહરલાલ નેહરુએ",           "correct": true},
                {"option": "મહાત્મા ગાંધીએ",  "correct": false},
                {"option": "ડૉ. રાજેન્દ્ર પ્રસાદએ ",   "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જવાહરલાલ નેહરુએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ગાંધીજીની હત્યા કોણે કરી ?",
            "a": [
                {"option": "બલરામ ગોડસેએ",    "correct": false},
                {"option": "નથ્થુરામ ગોડસેએ",     "correct": true},
                {"option": "ધન્નુરામ ગોડસેએ",    "correct": false},
                {"option": "રામગોપાલ ગોડસેએ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નથ્થુરામ ગોડસેએ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "આધુનિક ભારતના રાષ્ટ્રપિતા કોને કહેવામાં આવે છે ? ",
            "a": [
                {"option": "દાદાભાઈ નવરોજીને",   "correct": false},
                {"option": "ગોપાલકૃષ્ણ ગોખલેને",          "correct": false},
                {"option": "ગોવિંદ વલ્લભ પંતને",  "correct": false},
                {"option": "ગાંધીજીને",  "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગાંધીજીને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 16
            "q": "બંધારણ સભાની રચના ક્યારે કરવામાં આવી ?",
            "a": [
                {"option": "ઈ.સ.1940માં",      "correct": false},
                {"option": "ઈ.સ.1948માં",     "correct": false},
                {"option": "ઈ.સ.1946માં",      "correct": true},
                {"option": "ઈ.સ.1947માં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1946માં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "બંધારણ સભાના પ્રમુખ તરીકે કોને ચૂંટવામાં આવ્યા ?",
            "a": [
                {"option": "ડૉ. રાજેન્દ્ર પ્રસાદને ",    "correct": true},
                {"option": "ડૉ.બાબાસાહેબ આંબેડકરને",     "correct": false},
                {"option": "ડૉ.રાધાકૃષ્ણનને",      "correct": false},
                {"option": "ડૉ.કનૈયાલાલ મુન્શીને",   "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ડૉ. રાજેન્દ્ર પ્રસાદને </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "બંધારણની મુસદ્દાસમિતિના અધ્યક્ષ તરીકે કોને નીમવામાં આવ્યા ?",
            "a": [
                {"option": "ડૉ. રાજેન્દ્ર પ્રસાદને ",        "correct": false},
                {"option": "ડૉ.બાબાસાહેબ આંબેડકરને",           "correct": true},
                {"option": "ડૉ.રાધાકૃષ્ણનને ",  "correct": false},
                {"option": "ડૉ.કનૈયાલાલ મુન્શીને",   "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ડૉ.બાબાસાહેબ આંબેડકરને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "આપણું બંધારણ ક્યારથી અમલમાં આવ્યું ?",
            "a": [
                {"option": "26/1/1949",    "correct": false},
                {"option": "26/12/1947",     "correct": false},
                {"option": "26/1/1950",    "correct": true},
                {"option": "15/8/1947",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  26/1/1950</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "ભારતના પ્રથમ રાષ્ટ્રપતિ કોણ હતા ?",
            "a": [
                {"option": "ડૉ. રાજેન્દ્ર પ્રસાદ",   "correct": true},
                {"option": "જવાહરલાલ નહેરુ ",          "correct": false},
                {"option": "ડૉ.રાધાકૃષ્ણન",  "correct": false},
                {"option": "પ્રણવ મુખર્જી",  "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ડૉ. રાજેન્દ્ર પ્રસાદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
	{ // Question 21
            "q": "હિન્દુસ્તાનના બે ભાગ થતાં લગભગ કેટલા શરણાર્થીઓ પાકિસ્તાનથી ભારત આવ્યા હતા ?",
            "a": [
                {"option": "80 લાખ",      "correct": true},
                {"option": "70 લાખ",     "correct": false},
                {"option": "60 લાખ",      "correct": false},
                {"option": "50 લાખ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 80 લાખ</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "હિન્દુસ્તાનના બે ભાગ થતાં ભારત માટે કઇ સમસ્યા વિકટ બની હતી ?",
            "a": [
                {"option": "પાકિસ્તાનથી આવેલા શરણાર્થીઓના પુન:વસવાટની",      "correct": false},
                {"option": "દેશી રજવાડાંઓને ભારતસંઘ સાથે જોડી રાષ્ટ્ર નિર્માણની ",     "correct": false},
                {"option": "લોકોની આશા અપેક્ષા સંતોષે એવી ભારતની રાજનૈતિક વ્યવસ્થા આપવાની",      "correct": false},
                {"option": "આપેલા બધા",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "'ભારતને સ્વતંત્ર થવું હોય તો ભાગલા કરવા અનિવાર્ય છે. જો એમ નહિ કરવામાં આવે, તો સમગ્ર દેશમાં કોમી હુલ્લડો ફાટી નીકળશે, લોકો પરેશાન થશે.' એવો મત કોનો હતો ?",
            "a": [
                {"option": "જવાહરલાલ નેહરુનો",      "correct": false},
                {"option": "લૉર્ડ માઉન્ટ બેટનનો",     "correct": true},
                {"option": "સરદાર પટેલનો",      "correct": false},
                {"option": "ઇંગ્લૅન્ડની પાર્લામેન્ટનો",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લૉર્ડ માઉન્ટ બેટનનો</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "હિંદ સ્વાતંત્ર્યધારામાં કઈ જોગવાઇ હતી ?",
            "a": [
                {"option": "હિદુસ્તાનનું બે ભાગમાં વિભાજન કરી સ્વતંત્ર કરવામાં આવે છે",      "correct": false},
                {"option": "દરેક એકમો પોતાનું બંધારણ ઘડીને અમલમાં મૂકશે",     "correct": false},
                {"option": "હિંદના રજવાડાંને ભારત કે પાકિસ્તાનમાં જોડાવાની કે સ્વતંત્ર રહેવાની છૂટ",      "correct": false},
                {"option": "આપેલા બધા",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા બધા</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "દેશી રાજ્યોના વિલીનીકરણમાં સરદારને સાથ આપનાર તેમના સચિવ કોણ હતા ?",
            "a": [
                {"option": "વી.પી. મેનન",      "correct": true},
                {"option": "લૉર્ડ માઉન્ટ બેટન",     "correct": false},
                {"option": "જવાહરલાલ નેહરુ",      "correct": false},
                {"option": "મૌલાના આઝાદ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વી.પી. મેનન</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 26
            "q": "ભારત સંઘમાં જોડવા માટે છેલ્લે કયા ત્રણ દેશી રાજ્યોનો પ્રશ્ન બાકી રહ્યો ?",
            "a": [
                {"option": "જૂનાગઢ, હૈદરાબાદ, કાશ્મીર",      "correct": true},
                {"option": "રાજ્કોટ, ચેન્નઇ, બંગાળ",     "correct": false},
                {"option": "જૂનાગઢ, ચેન્નઇ, બંગાળ",      "correct": false},
                {"option": "બંગાળ, હૈદરાબાદ, કાશ્મીર",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જૂનાગઢ, હૈદરાબાદ, કાશ્મીર</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "જૂનાગઢના નવાબ વિરૂદ્ધ લડવા માટે શાની સ્થાપના કરવામાં આવી ?",
            "a": [
                {"option": "બારઝી હકૂમત",      "correct": false},
                {"option": "આરઝી ક્રાંતિ",     "correct": false},
                {"option": "આરઝી હકૂમત",      "correct": true},
                {"option": "જૂનાગઢ ક્રાંતિ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આરઝી હકૂમત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "આરઝી હકૂમતની સ્થાપના કોણે કરી હતી ?",
            "a": [
                {"option": "રવિશંકર મહારાજે",      "correct": false},
                {"option": "સરદાર પટેલે",     "correct": false},
                {"option": "ધીરૂભાઈ અંબાણી",      "correct": false},
                {"option": "રતુભાઈ અદાણી",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રતુભાઈ અદાણી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
           "q": "જ્યારે પાકિસ્તાને કાશ્મીર પર હુમલો કર્યો ત્યારે ત્યાંના રાજા કોણ હતા ?",
            "a": [
                {"option": "હરિસિંહ",      "correct": true},
                {"option": "હરિવંશ",     "correct": false},
                {"option": "હેમેન્દ્રસિંહ",      "correct": false},
                {"option": "હરેન્દ્રસિંહ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હરિસિંહ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "મુસ્લિમ લીગે ક્યા અધિવેશનમાં સ્વતંત્ર રાષ્ટ્ર તરીકે પાકિસ્તાનની માગણીનો ઠરાવ પસાર કર્યો ?",
            "a": [
                {"option": "પટના અધિવેશનમાં",      "correct": false},
                {"option": "લાહોર અધિવેશનમાં",     "correct": true},
                {"option": "કટક અધિવેશનમાં",      "correct": false},
                {"option": "એકેય નહી",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લાહોર અધિવેશનમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 31
            "q": "ભારતના વાઇસરૉય તરીકે માઉન્ટ બેટને ક્યારે હોદ્દો સંભાળ્યો ?",
            "a": [
                {"option": "નવેમ્બર, 1946માં",      "correct": false},
                {"option": "ફેબ્રુઆરી, 1946માં",     "correct": false},
                {"option": "માર્ચ, 1947માં",      "correct": true},
                {"option": "ઑગસ્ટ, 1947માં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માર્ચ, 1947માં</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "ઇંગ્લૅન્ડની બ્રિટિશ પાર્લામેન્ટે 'હિંદ સ્વાતંત્ર્ય ધારો' ક્યારે પસાર કર્યો ?",
            "a": [
                {"option": "ઇ.સ. 1946માં",      "correct": false},
                {"option": "ઇ.સ. 1949માં",     "correct": false},
                {"option": "ઇ.સ. 1948માં",      "correct": false},
                {"option": "ઇ.સ. 1947માં",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1947માં</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "પાકિસ્તાને કાશ્મીર પર ક્યારે હુમલો કર્યો ?",
            "a": [
                {"option": "ઇ.સ. 1946માં",      "correct": false},
                {"option": "ઇ.સ. 1949માં",     "correct": false},
                {"option": "ઇ.સ. 1948માં",      "correct": true},
                {"option": "ઇ.સ. 1947માં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1948માં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
           "q": "ગાંધીજીની હત્યા ક્યારે થઈ ?",
            "a": [
                {"option": "30 જાન્યુઆરી, 1947ના રોજ",      "correct": false},
                {"option": "30 જાન્યુઆરી, 1948ના રોજ",     "correct": true},
                {"option": "2 ઑક્ટોબર, 1950ના રોજ",      "correct": false},
                {"option": "26 જાન્યુઆરી, 1949ના રોજ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30 જાન્યુઆરી, 1948ના રોજ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "બંધારણ ઘડવાની પ્રક્રિયા ક્યાં સુધી ચાલી ?",
            "a": [
                {"option": "ડિસેમ્બર, 1949 સુધી",      "correct": true},
                {"option": "જાન્યુઆરી, 1950 સુધી",     "correct": false},
                {"option": "માર્ચ, 195 સુધી",      "correct": false},
                {"option": "નવેમ્બર, 1948 સુધી",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ડિસેમ્બર, 1949 સુધી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 36
            "q": "બંધારણ ઘડવા માટે બંધારણ સભાના કેટલા સત્ર યોજાયા ?",
            "a": [
                {"option": "15",      "correct": false},
                {"option": "14",     "correct": false},
                {"option": "13",      "correct": false},
                {"option": "11",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 11</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
           "q": "બંધારણ ઘડવા માટે બંધારણ સભાની કેટલા દિવસ બેઠકો થઈ ? ",
            "a": [
                {"option": "166",      "correct": true},
                {"option": "150",     "correct": false},
                {"option": "175",      "correct": false},
                {"option": "145",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 166</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "બંધારણ ઘડવાની પ્રક્રિયામાં લગભગ કેટલા ભારતીયોએ ભાગ લીધો ?",
            "a": [
                {"option": "450",      "correct": false},
                {"option": "300",     "correct": true},
                {"option": "250",      "correct": false},
                {"option": "350",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 300</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
           "q": "આપણે ક્યા દિવસને 'પ્રજાસત્તાકદિન' તરીકે ઊજવીએ છીએ ?",
            "a": [
                {"option": "2 ઑક્ટોબરના દિવસને",      "correct": false},
                {"option": "26 જાન્યુઆરીના દિવસને ",     "correct": true},
                {"option": "15 ઑગસ્ટના દિવસને",      "correct": false},
                {"option": "14 જાન્યુઆરીના દિવસને",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 26 જાન્યુઆરીના દિવસને</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "આપણે ક્યા દિવસને 'સ્વાતંત્ર્યદિન' તરીકે ઊજવવીએ છીએ ?",
            "a": [
                {"option": "2 ઑક્ટોબરના દિવસને",      "correct": false},
                {"option": "26 જાન્યુઆરીના દિવસને ",     "correct": false},
                {"option": "15 ઑગસ્ટના દિવસને",      "correct": true},
                {"option": "14 જાન્યુઆરીના દિવસને",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 15 ઑગસ્ટના દિવસને</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
	{ // Question 41
            "q": "ભારતના ભાગલાના સંદર્ભમાં કેટલાક વિસ્તારોમાં ભીષણ કોમી રમખાણો ફાટી નીકળ્યાં તેને રોકવા ગાંધીજીએ શું કર્યું ? ",
            "a": [
                {"option": "ઉપવાસ કર્યા.",      "correct": true},
                {"option": "ફાયરીંગ કર્યું.",     "correct": false},
                {"option": "નમન કર્યા.",      "correct": false},
                {"option": "મૌન રહ્યા.",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉપવાસ કર્યા.</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "ગાંધીજીનું જે દિવસે મોત થયું તે દિવસે ગાંધીજી સાંજે પ્રાર્થના કરવા માટે ક્યાં જઈ રહ્યા હતા ?",
            "a": [
                {"option": "મુંડકાહાઉસ",      "correct": false},
                {"option": "બિરલાહાઉસ",     "correct": true},
                {"option": "બિલ્લાહાઉસ",      "correct": false},
                {"option": "બિસ્લાહાઉસ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બિરલાહાઉસ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "'દોસ્તો, સાથીઓ, આપણા જીવનની રોશની બુઝાઈ ગઈ અને હવે ચારે તરફ અંધકાર છે. આપણા પ્રિય નેતા રાષ્ટ્રપિતા હવે આપણી વચ્ચે નથી' આ શોકસંદેશો આકાશવાણી પર કોણે આપ્યો ?",
            "a": [
                {"option": "જવાહરલાલ નેહરુએ",      "correct": true},
                {"option": "લૉર્ડ માઉન્ટ બેટને",     "correct": false},
                {"option": "સરદાર પટેલે",      "correct": false},
                {"option": "ડૉ બાબા સાહેબ આંબેડકરે",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જવાહરલાલ નેહરુએ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "બાપુની સ્મશાન યાત્રા ક્યાં નીકળી ?",
            "a": [
                {"option": "પોરબંદરમાં",      "correct": false},
                {"option": "અમદાવાદમાં",     "correct": false},
                {"option": "મુંબઈમાં",      "correct": false},
                {"option": "દિલ્લીમાં",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિલ્લીમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
	{ // Question 1
            "q": "મદ્રાસ રાજ્યમાંથી ક્યા અલગ રાજ્યની રચના કરવામાં આવી ?",
            "a": [
                {
                    "option": "હૈદરાબાદની",
                    "correct": false
                },
                {
                    "option": "આંધ્ર પ્રદેશની",
                    "correct": true
                },
                {
                    "option": "કર્ણાટકની",
                    "correct": false
                },
                {
                    "option": "મૈસૂરની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આંધ્ર પ્રદેશની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "'રાજ્ય પુનર્રચનાપંચ'ના અધ્યક્ષ કોણ હતા ?",
            "a": [
                {
                    "option": "અબુલ ફઝલ",
                    "correct": false
                },
                {
                    "option": "ફઝલઅલી",
                    "correct": true
                },
                {
                    "option": "હ્રદયનાથ કુંઝરુ",
                    "correct": false
                },
                {
                    "option": "કે.એન.પાનિકર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફઝલઅલી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "સૌ પ્રથમ રાજ્યોની પુનર્રચના કરી કેટલાં રાજ્યો અને કેન્દ્રશાસિત પ્રદેશો કરવામાં આવ્યા ?",
            "a": [
                {
                    "option": "14 અને 6",
                    "correct": true
                },
                {
                    "option": "16 અને 5",
                    "correct": false
                },
                {
                    "option": "20 અને 6",
                    "correct": false
                },
                {
                    "option": "15 અને 4",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  14 અને 6</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "રાજ્ય પુનર્રચનાપંચે ભારતના મોટાંભાગનાં રાજ્યોની રચના ક્યા ધોરણે કરી હતી ?",
            "a": [
                {
                    "option": "ધર્મના",
                    "correct": false
                },
                {
                    "option": "જાતિના",
                    "correct": false
                },
                {
                    "option": "સરહદોના",
                    "correct": false
                },
                {
                    "option": "ભાષાના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભાષાના</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "મહાગુજરાત ચળવળના નેતા કોણ હતા ?",
            "a": [
                {
                    "option": "રતુભાઇ અદાણી",
                    "correct": false
                },
                {
                    "option": "ઇન્દુલાલ યાજ્ઞિક",
                    "correct": true
                },
                {
                    "option": "રવિશંકર મહારાજ",
                    "correct": false
                },
                {
                    "option": "મોરારજી દેસાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇન્દુલાલ યાજ્ઞિક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "'મહાગુજરાત જનતા પરિષદ'ની સ્થાપના ક્યારે કરવામાં આવી ?",
            "a": [
                {
                    "option": "જાન્યુઆરી,1955માં",
                    "correct": false
                },
                {
                    "option": "માર્ચ,1957માં",
                    "correct": false
                },
                {
                    "option": "ડિસેમ્બર,1954માં",
                    "correct": false
                },
                {
                    "option": "સપ્ટેમ્બર,1956માં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સપ્ટેમ્બર,1956માં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "મહાગુજરાતની ચળવળ વખતે 'જનતાના ચાચા' કોણ બન્યા ?",
            "a": [
                {
                    "option": "ઇન્દુલાલ યાજ્ઞિક",
                    "correct": true
                },
                {
                    "option": "રવિશંકર મહારાજ",
                    "correct": false
                },
                {
                    "option": "મોરારજી દેસાઈ",
                    "correct": false
                },
                {
                    "option": "રતુભાઇ અદાણી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇન્દુલાલ યાજ્ઞિક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગુજરાત રાજ્યની રચના ક્યારે કરવામાં આવી ?",
            "a": [
                {
                    "option": "01/05/1961",
                    "correct": false
                },
                {
                    "option": "01/05/1958",
                    "correct": false
                },
                {
                    "option": "01/05/1960",
                    "correct": true
                },
                {
                    "option": "01/05/1959 ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  01/05/1960</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ગુજરાત રાજ્યનું ઉદ્ઘાટન કોના હસ્તે કરવામાં આવ્યું ?",
            "a": [
                {
                    "option": "રવિશંકર મહારાજના",
                    "correct": true
                },
                {
                    "option": "બ્રહ્મકુમાર ભટ્ટના",
                    "correct": false
                },
                {
                    "option": "રતુભાઇ અદાણીના",
                    "correct": false
                },
                {
                    "option": "ઇન્દુલાલ યાજ્ઞિકના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રવિશંકર મહારાજના</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ગુજરાત રાજ્યના પ્રથમ રાજ્યપાલ કોણ હતા ?",
            "a": [
                {
                    "option": "મહેંદી નવાઝજંગ",
                    "correct": true
                },
                {
                    "option": "નિત્યાનંદ કાનૂનગો",
                    "correct": false
                },
                {
                    "option": "ડૉ. શ્રીમન્નારાયણ",
                    "correct": false
                },
                {
                    "option": "કે. કે. વિશ્વનાથન ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહેંદી નવાઝજંગ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ગુજરાત રાજ્યના પ્રથમ મુખ્યમંત્રી કોણ હતા ?",
            "a": [
                {
                    "option": "હિતેન્દ્રભાઇ દેસાઈ",
                    "correct": false
                },
                {
                    "option": "બળવંતરાય મહેતા",
                    "correct": false
                },
                {
                    "option": "ડૉ. જીવરાજ મહેતા",
                    "correct": true
                },
                {
                    "option": "ઘનશ્યામભાઈ ઓઝા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ડૉ. જીવરાજ મહેતા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ફ્રેંચ સરકારે પોતાની વસાહતો ભારત સરકારને ક્યારે સોંપી ?",
            "a": [
                {
                    "option": "26/1/1950",
                    "correct": false
                },
                {
                    "option": "05/01/1950",
                    "correct": false
                },
                {
                    "option": "31/10/1950",
                    "correct": false
                },
                {
                    "option": "31/10/1954",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 31/10/1954</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "પોર્ટુગીઝો ભારતના ક્યા શહેરને પોર્ટુગીઝ સામ્રાજ્યનું પ્રતિક માનતા હતા ?",
            "a": [
                {
                    "option": "દીવને",
                    "correct": false
                },
                {
                    "option": "ગોવાને",
                    "correct": true
                },
                {
                    "option": "દમણને",
                    "correct": false
                },
                {
                    "option": "પૉંડિચેરીને ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગોવાને</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ભારત સરકારે ગોવાને પોર્ટુગીઝોની સત્તાથી મુક્ત કરવા શું શરૂ કરવાનો નિર્ણય કર્યો ?",
            "a": [
                {
                    "option": "'પોલીસ પગલું' ભરવાનો",
                    "correct": false
                },
                {
                    "option": "'હિંદ છોડો આંદોલન' કરવાનો",
                    "correct": false
                },
                {
                    "option": "'ઑપરેશન વિજય' કરવાનો",
                    "correct": true
                },
                {
                    "option": "'સર્ચ ઑપરેશન' કરવાનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  'ઑપરેશન વિજય' કરવાનો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ભારત અને પાકિસ્તાન વચ્ચે કયા પ્રશ્ને તંગદિલી પ્રવર્તે છે ?",
            "a": [
                {
                    "option": "સિયાચીનના પ્રશ્ને",
                    "correct": false
                },
                {
                    "option": "લડાખના પ્રશ્ને",
                    "correct": false
                },
                {
                    "option": "સિંધુનદીના પાણી પ્રશ્ને",
                    "correct": false
                },
                {
                    "option": "કશ્મીરના પ્રશ્ને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કશ્મીરના પ્રશ્ને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "કયા વર્ષ દરમિયાન ભારતના કારગિલ વિસ્તારમાં પાકિસ્તાની સૈનિકો ઘૂસી આવ્યા ?",
            "a": [
                {
                    "option": "ઈ.સ.1998માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.2000માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1999માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.2002માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1999</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ભારતે કઈ સાલમાં પરમાણુ પરીક્ષણ કર્યાં ?",
            "a": [
                {
                    "option": "ઈ.સ.1998માં ",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.2001માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1999માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1996માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1998માં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ભારતના બંધારણે ધર્મની બાબતમાં કયો આદર્શ સ્વીકાર્યો છે ? ",
            "a": [
                {
                    "option": "ધર્મના ભેદભાવનો ",
                    "correct": false
                },
                {
                    "option": "ધર્મનિરપેક્ષતાનો",
                    "correct": true
                },
                {
                    "option": "સાંપ્રદાયિકતાનો ",
                    "correct": false
                },
                {
                    "option": "ધાર્મિક સમૂહોનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ધર્મનિરપેક્ષતાનો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "મીરાંબહેન કોનાં અનુયાયી હતાં ?",
            "a": [
                {
                    "option": "અબ્દુલ ગફારખાનના",
                    "correct": false
                },
                {
                    "option": "માઉન્ટ બેટનના",
                    "correct": false
                },
                {
                    "option": "ગાંધીજીના",
                    "correct": true
                },
                {
                    "option": "ડૉ.આંબેડકરના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગાંધીજીના</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "આમાંથી કઈ સાલમાં પાકિસ્તાન સાથે યુદ્ધ થયું નથી ?",
            "a": [
                {
                    "option": "ઈ.સ.1948",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1965",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1975",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1971",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1975</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ભારતે આઝાદી પછી કેવી વ્યવસ્થા સ્વીકારી છે ?",
            "a": [
                {
                    "option": "સંઘીય",
                    "correct": true
                },
                {
                    "option": "એકતંત્રી",
                    "correct": false
                },
                {
                    "option": "પ્રમુખશાહી",
                    "correct": false
                },
                {
                    "option": "સમતંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંઘીય</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "અગાઉનાં બ્રિટિશ પ્રાંતો અને દેશી રાજ્યોના એકીકરણ થકી ઉભા થયેલા એકમોનું શરૂઆતમાં કેટલા વર્ગોમાં વિભાજન કરવામાં આવ્યું ?",
            "a": [
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": true
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "8",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "1950માં જ્યારે બંધારણનો અમલ શરૂ થયો ત્યારે ભારત કેટલાં પ્રકારનાં રાજ્યોનો બનેલો સંઘ હતો ?",
            "a": [
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": true
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "8",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "મદ્રાસ રાજ્યમાંથી કઈ ભાષાના લોકોએ અલગ થવા માટે ઉગ્ર આંદોલન કર્યું ?",
            "a": [
                {
                    "option": "તેલુગુ ભાષાના",
                    "correct": true
                },
                {
                    "option": "મલયાલમ ભાષાના",
                    "correct": false
                },
                {
                    "option": "તમિલ ભાષાના",
                    "correct": false
                },
                {
                    "option": "ભોજપુરી ભાષાના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તેલુગુ ભાષાના</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "સૌ પ્રથમ અલગ રાજ્યની રચના ક્યારે કરવામાં આવી ?",
            "a": [
                {
                    "option": "ઇ.સ. 1953માં",
                    "correct": true
                },
                {
                    "option": "ઇ.સ. 1950માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1948માં",
                    "correct": false
                },
                {
                    "option": "ઇ.સ. 1955માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇ.સ. 1953માં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "સંસદમાં દ્વિભાષી રાજ્યનો ઠરાવ સ્વીકારાયો, તે જ દિવસે અમદાવાદના લૉ કોલેજના વિદ્યાર્થીઓની સભામાં કઈ સમિતિની રચના કરવા આવી ?",
            "a": [
                {
                    "option": "આરઝી",
                    "correct": false
                },
                {
                    "option": "પગલાં",
                    "correct": true
                },
                {
                    "option": "કારોબારી",
                    "correct": false
                },
                {
                    "option": "પાણી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પગલાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "મરાઠી અને ગુજરાતી એમ બેભાષી વિસ્તારોનો સમાવેશ ક્યા પ્રાંતમાં કરવામાં આવ્યો હતો ?",
            "a": [
                {
                    "option": "બૉમ્બે",
                    "correct": true
                },
                {
                    "option": "પંજાબ",
                    "correct": false
                },
                {
                    "option": "બંગાળ",
                    "correct": false
                },
                {
                    "option": "મદ્રાસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૉમ્બે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "સૌ પ્રથમ રાજ્યોની પુનર્રચના કરવામાં આવી ત્યારે કયા બે રાજ્યોની રચના ભાષાના આધારે ન હતી થઈ ?",
            "a": [
                {
                    "option": "મદ્રાસ અને બંગાળ",
                    "correct": false
                },
                {
                    "option": "હરિયાણા અને પંજાબ",
                    "correct": false
                },
                {
                    "option": "હરિયાણા અને મદ્રાસ",
                    "correct": false
                },
                {
                    "option": "બૉમ્બે અને પંજાબ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૉમ્બે અને પંજાબ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ઇ.સ. 2010માં ગુજરાતને પચાસ વર્ષ પૂર્ણ થતાં આ વર્ષને શાના તરીકે ઊજવવામાં આવ્યું ?",
            "a": [
                {
                    "option": "સ્વર્ણિમ ગુજરાત",
                    "correct": true
                },
                {
                    "option": "શતાબ્દી ગુજરાત",
                    "correct": false
                },
                {
                    "option": "રજત ગુજરાત",
                    "correct": false
                },
                {
                    "option": "હિરક ગુજરાત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વર્ણિમ ગુજરાત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ભારતના કયા વિસ્તારો આઝાદી પછી પણ ફેંચોના અંકુશ હેઠળ હતા ?",
            "a": [
                {
                    "option": "દીવ, દમણ, માહે, યનામ, ચંદ્રનગર",
                    "correct": true
                },
                {
                    "option": "પૉંડિચેરી, કરૈકલ, ગોવા, દીવ, ચંદ્રનગર",
                    "correct": false
                },
                {
                    "option": "પૉંડિચેરી, કરૈકલ, દીવ, દમણ, ગોવા",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢ, હૈદરાબાદ, કાશ્મીર, ભોપાલ, બંગાળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવ, દમણ, માહે, યનામ, ચંદ્રનગર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ઇ.સ. 1948માં પૉંડિચેરીમાં એક વિરાટ સભામાં લોકોએ ફેંચોને શાનું એલાન આપ્યું ?",
            "a": [
                {
                    "option": "પૉંડિચેરી છોડોનું",
                    "correct": false
                },
                {
                    "option": "રાજ્યછોડોનું",
                    "correct": false
                },
                {
                    "option": "હિંદછોડોનું",
                    "correct": true
                },
                {
                    "option": "ગોવા છોડોનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિંદછોડોનું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "17 અને 18 ડિસેમ્બર 1961ની મધ્યરાત્રિએ કોના નેતૃત્વ હેઠળ લશ્કરી અભિયાન શરૂ થયું ?",
            "a": [
                {
                    "option": "રતુભાઈ અદાણીના",
                    "correct": false
                },
                {
                    "option": "જનરલ માણેકશાંના",
                    "correct": false
                },
                {
                    "option": "જનરલ વી.કે.સિંહના",
                    "correct": false
                },
                {
                    "option": "જનરલ ચૌધરીના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જનરલ ચૌધરીના</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "ભારત આજ દિન સુધી કઈ રાહ પર રહ્યો છે ?",
            "a": [
                {
                    "option": "પ્રજાસત્તાક",
                    "correct": true
                },
                {
                    "option": "રાજાશાહી",
                    "correct": false
                },
                {
                    "option": "પ્રમુખશાહી",
                    "correct": false
                },
                {
                    "option": "સરમુખત્યારશાહી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રજાસત્તાક</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "ભારતે બંધારણમાં કયો આદર્શ સ્વિકાર્યો હોવા છતાં જુદા-જુદા ધાર્મિક સમૂહો વચ્ચે અથડામણો થાય છે ? ",
            "a": [
                {
                    "option": "સાંપ્રદાયિકતા",
                    "correct": false
                },
                {
                    "option": "ધર્મનિરપેક્ષતા",
                    "correct": true
                },
                {
                    "option": "એક ધર્મ બાધતા",
                    "correct": false
                },
                {
                    "option": "કોમી તંગદિલી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધર્મનિરપેક્ષતા</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "ભારતને સૌથી પરેશાન કરતી બાબત કઈ છે ?",
            "a": [
                {
                    "option": "ધનિક અને ગરીબ વચ્ચે ઘટતું અંતર",
                    "correct": false
                },
                {
                    "option": "ધનિક અને ગરીબ વચ્ચે સમાન અંતર",
                    "correct": false
                },
                {
                    "option": "ધનિક અને ગરીબ વચ્ચે વધતું અંતર",
                    "correct": true
                },
                {
                    "option": "ધનિક અને ગરીબ સરખા થયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધનિક અને ગરીબ વચ્ચે વધતું અંતર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "આપણું બંધારણ કાયદાની દ્રષ્ટિએ બધાને કેવાં ગણે છે ?",
            "a": [
                {
                    "option": "અલગ અલગ",
                    "correct": false
                },
                {
                    "option": "નાના-મોટા",
                    "correct": false
                },
                {
                    "option": "ઊંચ-નીચ",
                    "correct": false
                },
                {
                    "option": "સરખાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરખાં</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "વિજ્ઞાન અને યંત્રો દ્વારા માનવતાને અમુક સમય સુધી ઘણો ફાયદો થઈ શકે છે, અંતે તબાહી જ મળશે. આ બાબત કોણે લખી છે ?",
            "a": [
                {
                    "option": "ગાંધીજીએ",
                    "correct": false
                },
                {
                    "option": "રવિશંકર મહારાજે",
                    "correct": false
                },
                {
                    "option": "મીરાં બહેને",
                    "correct": true
                },
                {
                    "option": "મીરાં કુમારે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીરાં બહેને</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "આફ્રિકાની લગભગ મધ્યમાંથી કયું અક્ષાંશવૃત્ત પસાર થાય છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વિષુવવૃત્ત</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "વાસ્કો-દ-ગામાએ કઈ સાલમાં યુરોપથી ભારત આવવાનો જળમાર્ગ શોધ્યો હતો ?",
            "a": [
                {
                    "option": "ઈ.સ.1503માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1492માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1498માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1490માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1498માં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આફ્રિકાનું ભૂપૃષ્ઠ મોટા ભાગે શાનું બનેલું છે ?",
            "a": [
                {
                    "option": "મેદાનોનું",
                    "correct": false
                },
                {
                    "option": "રણપ્રદેશોનું",
                    "correct": false
                },
                {
                    "option": "પર્વતોનું",
                    "correct": false
                },
                {
                    "option": "ઉચ્ચપ્રદેશોનું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઉચ્ચપ્રદેશોનું</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "આફ્રિકામાં કયો પર્વત સૌથી ઊંચો છે ?",
            "a": [
                {
                    "option": "કિલિમાન્જારો",
                    "correct": true
                },
                {
                    "option": "ઍટલાસ",
                    "correct": false
                },
                {
                    "option": "ડ્રાકન્જ્ગબર્ગ",
                    "correct": false
                },
                {
                    "option": "કેન્યા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કિલિમાન્જારો</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "આફ્રિકાની કઈ નદી વિશ્વમાં સૌથી લાંબી છે ?",
            "a": [
                {
                    "option": "કૉંગો",
                    "correct": false
                },
                {
                    "option": "નાઈજર",
                    "correct": false
                },
                {
                    "option": "નાઈલ",
                    "correct": true
                },
                {
                    "option": "ઝાંબેઝી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નાઈલ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "આફ્રિકામાં કયું સરોવર સૌથી મોટું છે ?",
            "a": [
                {
                    "option": "ચાડ",
                    "correct": false
                },
                {
                    "option": "વિક્ટોરિયા",
                    "correct": true
                },
                {
                    "option": "ટાંગાન્યિકા",
                    "correct": false
                },
                {
                    "option": "મલાવી(ન્યાસા)",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વિક્ટોરિયા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "વિશ્વમાં કયું સરોવર મીઠાં પાણીનું સૌથી લાંબું સરોવર છે ?",
            "a": [
                {
                    "option": "સુપીરિયર",
                    "correct": false
                },
                {
                    "option": "મિશિગન",
                    "correct": false
                },
                {
                    "option": "બાઇકાલ",
                    "correct": false
                },
                {
                    "option": "ટાંગાન્યિકા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ટાંગાન્યિકા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "આફ્રિકાના કયા ટાપુને 'લવિંગના ટાપુ' કહે છે ?",
            "a": [
                {
                    "option": "ઝાંઝીબાર",
                    "correct": true
                },
                {
                    "option": "માડાગાસ્કર",
                    "correct": false
                },
                {
                    "option": "મોરેશિયસ",
                    "correct": false
                },
                {
                    "option": "કૉમૉરો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઝાંઝીબાર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કયું શહેર દક્ષિણ આફ્રિકાની રાજધાની છે ?",
            "a": [
                {
                    "option": "કેપ ટાઉન",
                    "correct": false
                },
                {
                    "option": "પ્રિટોરિયા",
                    "correct": true
                },
                {
                    "option": "જોહાનિસબર્ગ",
                    "correct": false
                },
                {
                    "option": "ડર્બન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પ્રિટોરિયા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "આફ્રિકામાં કુલ કેટલા દેશો આવેલા છે ?",
            "a": [
                {
                    "option": "53",
                    "correct": true
                },
                {
                    "option": "52",
                    "correct": false
                },
                {
                    "option": "51",
                    "correct": false
                },
                {
                    "option": "54",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  53</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "વસ્તી અને કદની દ્રષ્ટિએ દુનિયાનો સૌથી મોટો ખંડ કયો છે ?",
            "a": [
                {
                    "option": "આફ્રિકા",
                    "correct": false
                },
                {
                    "option": "ઉત્તર અમેરિકા",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": true
                },
                {
                    "option": "યુરોપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  એશિયા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "દુનિયાની આશરે કેટલા ટકા વસ્તી એશિયામાં વસે છે ?",
            "a": [
                {
                    "option": "30%",
                    "correct": false
                },
                {
                    "option": "40%",
                    "correct": false
                },
                {
                    "option": "45%",
                    "correct": false
                },
                {
                    "option": "60%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  60%</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "એશિયાનો ક્યો પર્વત દુનિયાનો સૌથી ઊંચો પર્વત છે ?",
            "a": [
                {
                    "option": "હિમાલય",
                    "correct": true
                },
                {
                    "option": "કુનલુન",
                    "correct": false
                },
                {
                    "option": "અલ્તાઈ",
                    "correct": false
                },
                {
                    "option": "હિંદુકુશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હિમાલય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "એશિયાનું કયું સરોવર દુનિયાનું સૌથી ઊંડું છે ?",
            "a": [
                {
                    "option": "કાસ્પિયન ",
                    "correct": false
                },
                {
                    "option": "એરલ ",
                    "correct": false
                },
                {
                    "option": "બાઇકાલ",
                    "correct": true
                },
                {
                    "option": "તોન્લે સૅપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બાઇકાલ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "યાક કયા દેશનું વિશિષ્ટ પ્રાણી છે ?",
            "a": [
                {
                    "option": "પાકિસ્તાન",
                    "correct": false
                },
                {
                    "option": "ભૂતાન",
                    "correct": true
                },
                {
                    "option": "બાંગ્લાદેશ",
                    "correct": false
                },
                {
                    "option": "શ્રીલંકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભૂતાન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "એશિયાનો સૌથી વધુ વરસાદ ભારતમાં ક્યાં પડે છે ?",
            "a": [
                {
                    "option": "ચેરાપુંજી",
                    "correct": true
                },
                {
                    "option": "જ્યપુર",
                    "correct": false
                },
                {
                    "option": "ભોપાલ",
                    "correct": false
                },
                {
                    "option": "લખનૌ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચેરાપુંજી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "દુનિયાની સૌથી વધારે ઠંડી કયા શહેરમાં પડે છે ?",
            "a": [
                {
                    "option": "મૉસ્કો",
                    "correct": false
                },
                {
                    "option": "શિકાગો",
                    "correct": false
                },
                {
                    "option": "વર્ખોયાન્સ્ક",
                    "correct": true
                },
                {
                    "option": "સ્ટૉકહોમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વર્ખોયાન્સ્ક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "આમાંથી કયું સરોવર સૌથી વધુ ક્ષારતા ધરાવે છે ?",
            "a": [
                {
                    "option": "કાસ્પિયન સમુદ્ર",
                    "correct": false
                },
                {
                    "option": "મૃત સમુદ્ર",
                    "correct": true
                },
                {
                    "option": "સાંભર ",
                    "correct": false
                },
                {
                    "option": "એરલ સમુદ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મૃત સમુદ્ર</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "કયા ભૂમિખંડમાંથી કર્કવૃત્ત, વિષુવવૃત્ત અને મકરવૃત્ત ત્રણેય પસાર થાય છે ? ",
            "a": [
                {
                    "option": "યુરોપ",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": false
                },
                {
                    "option": "આફ્રિકા",
                    "correct": true
                },
                {
                    "option": "ઉત્તર અમેરિકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આફ્રિકા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "આફ્રિકાનો મોટા ભાગનો વિસ્તાર કયા કટિબંધમાં છે ?",
            "a": [
                {
                    "option": "શીત ",
                    "correct": false
                },
                {
                    "option": "મોસમી",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ",
                    "correct": true
                },
                {
                    "option": "સમશીતોષ્ણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઉષ્ણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "આફ્રિકાનો જમીનવિસ્તાર વિશ્વના જમીનવિસ્તારના કેટલા ટકા જેટલો છે ?",
            "a": [
                {
                    "option": "20%",
                    "correct": true
                },
                {
                    "option": "30%",
                    "correct": false
                },
                {
                    "option": "40%",
                    "correct": false
                },
                {
                    "option": "25%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 20%</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "આફ્રિકાખંડને કેટલા કિમી લાંબો દરિયાકિનારો મળ્યો છે ?",
            "a": [
                {
                    "option": "20000 કિમી",
                    "correct": false
                },
                {
                    "option": "30000 કિમી",
                    "correct": true
                },
                {
                    "option": "40000 કિમી",
                    "correct": false
                },
                {
                    "option": "25000 કિમી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30000 કિમી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "18મી સદીના અંત સુધી કયો ખંડ દુનિયાના લોકો માટે અજાણ હોવાથી 'અંધારિયા ખંડ' તરીકે ઓળખાતો હતો ?",
            "a": [
                {
                    "option": "યુરોપ",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": false
                },
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                },
                {
                    "option": "આફ્રિકા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આફ્રિકા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "વિસ્તારની દ્રષ્ટિએ બધા ખંડોમાં આફ્રિકા કયા સ્થાને છે ?",
            "a": [
                {
                    "option": "પહેલા",
                    "correct": false
                },
                {
                    "option": "ત્રીજા",
                    "correct": false
                },
                {
                    "option": "ચોથા",
                    "correct": false
                },
                {
                    "option": "બીજા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બીજા</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "કિલિમાન્જારો પર્વત ક્યા અક્ષાંશવૃત્તની નજીક છે ?",
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
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિષુવવૃત્ત</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ભૂમધ્ય સમુદ્રની આબોહવાવાળા વિસ્તારોમાં મુખ્યત્વે કઈ ઋતુમાં વરસાદ પડે છે ?",
            "a": [
                {
                    "option": "બારે માસ",
                    "correct": false
                },
                {
                    "option": "ઉનાળામાં",
                    "correct": false
                },
                {
                    "option": "શિયાળામાં",
                    "correct": true
                },
                {
                    "option": "વસંતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શિયાળામાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "આફ્રિકાનો વિશ્વવિખ્યાત વિક્ટોરિયા ધોધ કઈ નદી પર છે ?",
            "a": [
                {
                    "option": "ઝાંઝીબાર",
                    "correct": true
                },
                {
                    "option": "માડાગાસ્કર",
                    "correct": false
                },
                {
                    "option": "મોરિશિયસ",
                    "correct": false
                },
                {
                    "option": "કૉમૉરો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઝાંઝીબાર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ઇજિપ્તનો મુખ્ય પાક કયો છે ?",
            "a": [
                {
                    "option": "શણ",
                    "correct": false
                },
                {
                    "option": "શેરડી",
                    "correct": false
                },
                {
                    "option": "કપાસ",
                    "correct": true
                },
                {
                    "option": "તમાકુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કપાસ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "આફ્રિકા અને યુરોપની વચ્ચે કયો સમુદ્ર આવેલો છે ?",
            "a": [
                {
                    "option": "ભૂમધ્ય",
                    "correct": true
                },
                {
                    "option": "રાતો",
                    "correct": false
                },
                {
                    "option": "અરબ",
                    "correct": false
                },
                {
                    "option": "કાળો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભૂમધ્ય</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "આફ્રિકાની ઈશાન દિશામાં આફ્રિકા અને એશિયાની વચ્ચે કયો સમુદ્ર આવેલો છે ?",
            "a": [
                {
                    "option": "ભૂમધ્ય",
                    "correct": false
                },
                {
                    "option": "રાતો",
                    "correct": true
                },
                {
                    "option": "અરબ",
                    "correct": false
                },
                {
                    "option": "કાળો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાતો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "આફ્રિકાની પૂર્વમાં ક્યો મહાસાગર આવેલો છે ?",
            "a": [
                {
                    "option": "હિન્દ મહાસાગર",
                    "correct": true
                },
                {
                    "option": "ઍટલૅન્ટિક મહાસાગર",
                    "correct": false
                },
                {
                    "option": "પૅસેફિક મહાસાગર",
                    "correct": false
                },
                {
                    "option": "આર્કટિક મહાસાગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિન્દ મહાસાગર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "આફ્રિકાની પશ્ચિમે ક્યો મહાસાગર આવેલો છે ?",
            "a": [
                {
                    "option": "હિન્દ મહાસાગર",
                    "correct": false
                },
                {
                    "option": "ઍટલૅન્ટિક મહાસાગર",
                    "correct": true
                },
                {
                    "option": "પૅસેફિક મહાસાગર",
                    "correct": false
                },
                {
                    "option": "આર્કટિક મહાસાગર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍટલૅન્ટિક મહાસાગર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "નાઈલ નદીની લંબાઈ કેટલા કિમી છે ?",
            "a": [
                {
                    "option": "6436 કિમી",
                    "correct": true
                },
                {
                    "option": "7236 કિમી",
                    "correct": false
                },
                {
                    "option": "4366 કિમી",
                    "correct": false
                },
                {
                    "option": "3466 કિમી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 6436 કિમી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "આફ્રિકાના મધ્ય અને દક્ષિણના વિસ્તારોમાં કઈ માખીનો ઉપદ્રવ છે ?",
            "a": [
                {
                    "option": "મધમાખી",
                    "correct": false
                },
                {
                    "option": "ત્સે-ત્સે",
                    "correct": true
                },
                {
                    "option": "તે-તે",
                    "correct": false
                },
                {
                    "option": "સે-સે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્સે-ત્સે</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "કયો દેશ તેના પ્રાચીન પિરામિડ અને સ્ફિંક્સ માટે જાણીતો છે ?",
            "a": [
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": false
                },
                {
                    "option": "ઇરાન",
                    "correct": false
                },
                {
                    "option": "ઇરાક",
                    "correct": false
                },
                {
                    "option": "ઇજિપ્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇજિપ્ત</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "સુએઝની નહેર કયા સમુદ્રને જોડે છે ?",
            "a": [
                {
                    "option": "રાતા અને ભૂમધ્ય સમુદ્રને",
                    "correct": true
                },
                {
                    "option": "કાળા અને એરલ સમુદ્રને",
                    "correct": false
                },
                {
                    "option": "રાતા અને એરલ સમુદ્રને",
                    "correct": false
                },
                {
                    "option": "કાસ્પિયન અને કાળા સમુદ્રને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાતા અને ભૂમધ્ય સમુદ્રને</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "આફ્રિકા ખંડનો સૌથી વધુ વિકસિત દેશ કયો છે ?",
            "a": [
                {
                    "option": "દક્ષિણ આફ્રિકા",
                    "correct": true
                },
                {
                    "option": "ઇજિપ્ત",
                    "correct": false
                },
                {
                    "option": "કેન્યા",
                    "correct": false
                },
                {
                    "option": "ઝિમ્બાબ્વે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ આફ્રિકા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "નાઈલ નદીના કિનારે કઈ મહાન સંસ્કૃતિ વિકાસ પામી છે ?",
            "a": [
                {
                    "option": "મોહેં જો દડોની",
                    "correct": false
                },
                {
                    "option": "હડપ્પાની",
                    "correct": false
                },
                {
                    "option": "મિસરની",
                    "correct": true
                },
                {
                    "option": "ચાઇનીઝની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મિસરની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ઇજિપ્તનું પાટનગર કયું છે ?",
            "a": [
                {
                    "option": "પ્રિટોરિયા",
                    "correct": false
                },
                {
                    "option": "થિમ્પુ",
                    "correct": false
                },
                {
                    "option": "કેરો",
                    "correct": true
                },
                {
                    "option": "કેપટાઉન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેરો</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "દક્ષિણ આફ્રિકામાં ધારાગૃહો ક્યાં બેસે છે ?",
            "a": [
                {
                    "option": "પ્રિટોરિયામાં",
                    "correct": false
                },
                {
                    "option": "ડર્બનમાં",
                    "correct": false
                },
                {
                    "option": "જોનિસબર્ગમાં",
                    "correct": false
                },
                {
                    "option": "કેપટાઉનમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કેપટાઉનમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "એશિયાનો ભૂમિવિસ્તાર દુનિયાના ભૂવિસ્તારના આશરે કેટલા ટકા છે ?",
            "a": [
                {
                    "option": "30%",
                    "correct": true
                },
                {
                    "option": "25%",
                    "correct": false
                },
                {
                    "option": "20%",
                    "correct": false
                },
                {
                    "option": "35%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30%</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "એશિયાનો કયો ઉચ્ચપ્રદેશ વિશ્વના ઉચ્ચપ્રદેશોમાં સૌથી ઊંચો અને વિશાળ છે ?",
            "a": [
                {
                    "option": "મૉંગોલિયાનો",
                    "correct": false
                },
                {
                    "option": "સાઇબીરિયાનો",
                    "correct": false
                },
                {
                    "option": "ઈરાનનો",
                    "correct": false
                },
                {
                    "option": "તિબ્બતનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તિબ્બતનો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "એશિયાની સૌથી લાંબી નદી કઈ છે ?",
            "a": [
                {
                    "option": "યાંગત્સેક્યાંગ",
                    "correct": true
                },
                {
                    "option": "હવાંગહો",
                    "correct": false
                },
                {
                    "option": "લીના",
                    "correct": false
                },
                {
                    "option": "સિંધુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યાંગત્સેક્યાંગ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "નીચેનામાંથી કયું સરોવર દુનિયામાં સૌથી મોટું છે ?",
            "a": [
                {
                    "option": "એરલ સમુદ્ર",
                    "correct": false
                },
                {
                    "option": "વિક્ટોરિયા સરોવર",
                    "correct": false
                },
                {
                    "option": "બાઇકાલ સરોવર",
                    "correct": false
                },
                {
                    "option": "કાસ્પિયન સમુદ્ર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાસ્પિયન સમુદ્ર</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "ખૈબરઘાટ કયા દેશમાં આવેલો છે ?",
            "a": [
                {
                    "option": "પાકિસ્તાનમાં",
                    "correct": true
                },
                {
                    "option": "ભારતમાં",
                    "correct": false
                },
                {
                    "option": "ઈરાનમાં",
                    "correct": false
                },
                {
                    "option": "અફઘાનિસ્તાનમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાકિસ્તાનમાં</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "કયા દેશમાં આંતરિક જળમાર્ગો મોટા પ્રમાણમાં છે ?",
            "a": [
                {
                    "option": "શ્રીલંકામાં",
                    "correct": false
                },
                {
                    "option": "નેપાળમાં",
                    "correct": false
                },
                {
                    "option": "ભૂતાનમાં",
                    "correct": false
                },
                {
                    "option": "બાંગ્લાદેશમાં",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાંગ્લાદેશમાં</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "ભારત નીચેના કયા પડોશી દેશમાંથી ખનીજ તેલની આયાત કરે છે ?",
            "a": [
                {
                    "option": "પાકિસ્તાનમાંથી",
                    "correct": false
                },
                {
                    "option": "બાંગ્લાદેશમાંથી",
                    "correct": false
                },
                {
                    "option": "મ્યાનમારમાંથી",
                    "correct": true
                },
                {
                    "option": "શ્રીલંકામાંથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મ્યાનમારમાંથી</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "ક્યાંનો ઉચ્ચપ્રદેશ 'દુનિયાનું છાપરું' કહેવાય છે ?",
            "a": [
                {
                    "option": "મૉંગોલિયાનો",
                    "correct": false
                },
                {
                    "option": "સાઇબીરિયાનો",
                    "correct": false
                },
                {
                    "option": "ઈરાનનો",
                    "correct": false
                },
                {
                    "option": "તિબ્બતનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તિબ્બતનો</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "કયા દેશને અંગ્રેજો વ્રજદાનવોની વિહારભૂમિ તરીકે ઓળખાવતા ?",
            "a": [
                {
                    "option": "શ્રીલંકાને",
                    "correct": false
                },
                {
                    "option": "નેપાળને",
                    "correct": false
                },
                {
                    "option": "ભૂતાનને",
                    "correct": true
                },
                {
                    "option": "બાંગ્લાદેશને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભૂતાનને</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "પાકિસ્તાનનો સૌથી મહત્ત્વનો પાક કયો છે ?",
            "a": [
                {
                    "option": "ઘઉં",
                    "correct": false
                },
                {
                    "option": "કપાસ",
                    "correct": true
                },
                {
                    "option": "જીરૂં",
                    "correct": false
                },
                {
                    "option": "વરિયાળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કપાસ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "કઈ નદીનાં પાણીથી પાકિસ્તાનમાં કૃષિક્રાંતિ થઈ છે ?",
            "a": [
                {
                    "option": "સતલુજ",
                    "correct": false
                },
                {
                    "option": "ચિનાબ",
                    "correct": false
                },
                {
                    "option": "સિંધુ",
                    "correct": true
                },
                {
                    "option": "ઝેલમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિંધુ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "નેપાળનો કેટલા ટકા વિસ્તાર જંગલોથી છવાયેલો છે ?",
            "a": [
                {
                    "option": "25%",
                    "correct": false
                },
                {
                    "option": "16%",
                    "correct": false
                },
                {
                    "option": "30%",
                    "correct": false
                },
                {
                    "option": "40%",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 40%</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 53
            "q": "નેપાળની માત્ર કેટલા ટકા જમીન ખેતીલાયક છે ?",
            "a": [
                {
                    "option": "26%",
                    "correct": false
                },
                {
                    "option": "16%",
                    "correct": true
                },
                {
                    "option": "30%",
                    "correct": false
                },
                {
                    "option": "40%",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 16%</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 54
            "q": "ભૂતાનના લોકો મુખ્યત્વે કયો ધર્મ પાળે છે ?",
            "a": [
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": true
                },
                {
                    "option": "શીખ",
                    "correct": false
                },
                {
                    "option": "પારસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૌદ્ધ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 55
            "q": "ભારત અને શ્રીલંકા વચ્ચે કઈ સામુદ્રધુની આવેલી છે ?",
            "a": [
                {
                    "option": "બાલ્કની",
                    "correct": false
                },
                {
                    "option": "પાલકની",
                    "correct": false
                },
                {
                    "option": "પાલ્કની",
                    "correct": true
                },
                {
                    "option": "બાલકની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાલ્કની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 56
            "q": "ભારત અને શ્રીલંકા વચ્ચે કયો અખાત આવેલો છે ?",
            "a": [
                {
                    "option": "બંગાળનો",
                    "correct": false
                },
                {
                    "option": "ખંભાતનો",
                    "correct": false
                },
                {
                    "option": "કચ્છનો",
                    "correct": false
                },
                {
                    "option": "મનારનો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મનારનો</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 57
            "q": "શ્રીલંકાની સૌથી મોટી નદીનું નામ શું છે ?",
            "a": [
                {
                    "option": "મહાવેલી ગંગા",
                    "correct": true
                },
                {
                    "option": "બ્રહ્મપુત્રા",
                    "correct": false
                },
                {
                    "option": "મહાવેલી કાવેરી",
                    "correct": false
                },
                {
                    "option": "મહાનદી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહાવેલી ગંગા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 58
            "q": "'હું આફ્રિકા અને ગીરના જંગલમાં રહું છું.' મને ઓળખો હું કોણ ?",
            "a": [
                {
                    "option": "વાઘ",
                    "correct": false
                },
                {
                    "option": "સિંહ",
                    "correct": true
                },
                {
                    "option": "હાથી",
                    "correct": false
                },
                {
                    "option": "ગેંડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિંહ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 59
            "q": "'હું દરિયાકિનારાનું વૃક્ષ છું.' મને ઓળખો હું કોણ ?",
            "a": [
                {
                    "option": "ખજૂરી",
                    "correct": false
                },
                {
                    "option": "આંબો",
                    "correct": false
                },
                {
                    "option": "નાળિયેરી",
                    "correct": true
                },
                {
                    "option": "લીંબડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાળિયેરી</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 60
            "q": "'હું ખેતી માટે ઉપયોગી પશુ છું.' મને ઓળખો હું કોણ ?",
            "a": [
                {
                    "option": "ગાય",
                    "correct": false
                },
                {
                    "option": "ભેંસ",
                    "correct": false
                },
                {
                    "option": "ગધેડો",
                    "correct": false
                },
                {
                    "option": "બળદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બળદ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 61
            "q": "'હું વિષુવવૃત્તીય પ્રદેશમાં થતું મુખ્ય વૃક્ષ છું.' મને ઓળખો હું કોણ ?",
            "a": [
                {
                    "option": "મહોગની",
                    "correct": true
                },
                {
                    "option": "નાળિયેરી",
                    "correct": false
                },
                {
                    "option": "આંબો",
                    "correct": false
                },
                {
                    "option": "મહૂડો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહોગની</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 62
            "q": "'હું મધ્ય હિમાલયમાં આવેલો દેશ છું.' મને ઓળખો હું કોણ ?",
            "a": [
                {
                    "option": "ભારત",
                    "correct": false
                },
                {
                    "option": "નેપાળ",
                    "correct": true
                },
                {
                    "option": "બાંગ્લાદેશ",
                    "correct": false
                },
                {
                    "option": "ભૂતાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નેપાળ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 63
            "q": "'હું રત્નદ્વિપ તરીકે ઓળખાઉં છું.' મને ઓળખો હું કોણ ?",
            "a": [
                {
                    "option": "શ્રીલંકા",
                    "correct": true
                },
                {
                    "option": "નેપાળ",
                    "correct": false
                },
                {
                    "option": "બાંગ્લાદેશ",
                    "correct": false
                },
                {
                    "option": "ભૂતાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શ્રીલંકા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 64
            "q": "'હું એશિયાનું વિશાળ ઠંડું રણ છું.'મને ઓળખો હું કોણ ?",
            "a": [
                {
                    "option": "સહારા",
                    "correct": false
                },
                {
                    "option": "થર",
                    "correct": false
                },
                {
                    "option": "ગોરખ",
                    "correct": false
                },
                {
                    "option": "ગોબી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગોબી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 65
            "q": "ભારતની સાથે જ સ્વતંત્ર થયેલો પડોશી દેશ પાકિસ્તાન કયા રાષ્ટ્ર તરીકે જાહેર થયેલો છે ?",
            "a": [
                {
                    "option": "ઇસ્લામિક રાષ્ટ્ર",
                    "correct": true
                },
                {
                    "option": "હિન્દુ રાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ રાષ્ટ્ર",
                    "correct": false
                },
                {
                    "option": "ખ્રિસ્તી રાષ્ટ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇસ્લામિક રાષ્ટ્</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 66
            "q": "પાકિસ્તાનની રાજધાની કઈ છે ?",
            "a": [
                {
                    "option": "ઢાકા",
                    "correct": false
                },
                {
                    "option": "ઇસ્લામાબાદ",
                    "correct": true
                },
                {
                    "option": "થીમ્પુ",
                    "correct": false
                },
                {
                    "option": "રંગૂન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇસ્લામાબાદ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 67
            "q": "બાંગ્લાદેશની રાજધાની કઈ છે ?",
            "a": [
                {
                    "option": "ઢાકા",
                    "correct": true
                },
                {
                    "option": "કોલંબો",
                    "correct": false
                },
                {
                    "option": "થીમ્પુ",
                    "correct": false
                },
                {
                    "option": "રંગૂન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઢાકા</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 68
            "q": "નેપાળની રાજધાની કઈ છે ?",
            "a": [
                {
                    "option": "ઢાકા",
                    "correct": false
                },
                {
                    "option": "કોલંબો",
                    "correct": false
                },
                {
                    "option": "થીમ્પુ",
                    "correct": false
                },
                {
                    "option": "કાઠમંડુ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાઠમંડુ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 69
            "q": "ભૂતાનની રાજધાની કઈ છે ?",
            "a": [
                {
                    "option": "કાઠમંડુ",
                    "correct": false
                },
                {
                    "option": "કોલંબો",
                    "correct": false
                },
                {
                    "option": "થીમ્પુ",
                    "correct": true
                },
                {
                    "option": "રંગૂન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: થીમ્પુ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 70
            "q": "શ્રીલંકાની રાજધાની કઈ છે ?",
            "a": [
                {
                    "option": "ઢાકા",
                    "correct": false
                },
                {
                    "option": "કોલંબો",
                    "correct": true
                },
                {
                    "option": "કાઠમંડુ",
                    "correct": false
                },
                {
                    "option": "રંગૂન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કોલંબો</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 71
            "q": "મ્યાનમારની રાજધાની કઈ છે ?",
            "a": [
                {
                    "option": "ઢાકા",
                    "correct": false
                },
                {
                    "option": "કોલંબો",
                    "correct": false
                },
                {
                    "option": "થીમ્પુ",
                    "correct": false
                },
                {
                    "option": "રંગૂન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રંગૂન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
	

    ]
};
