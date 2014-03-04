// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 1  ધાર્મિક-સામાજિક જાગૃતિ",
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
       } // no comma here
    ]
};
