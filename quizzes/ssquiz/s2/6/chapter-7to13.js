// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પાઠ-7 થી 13",
        "subject": "સામાજિક વિજ્ઞાન",
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
            "q": "ગૌતમ બુદ્ધે  સૌપ્રથમ ક્યાં ઉપદેશ આપ્યો ?",
            "a": [
                {
                    "option": "દિલ્લી",
                    "correct": false
                },
                {
                    "option": "વારાણસી",
                    "correct": false
                },
                {
                    "option": "ઉજ્જૈન",
                    "correct": false
                },
                {
                    "option": "સારનાથ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સારનાથ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "મહાવીર સ્વામી જૈન ધર્મના કેટલામાં તીર્થંકર ગણાય છે ?",
            "a": [
                {
                    "option": "22માં",
                    "correct": false
                },
                {
                    "option": "21માં",
                    "correct": false
                },
                {
                    "option": "24માં",
                    "correct": true
                },
                {
                    "option": "23માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  24માં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ઉપનિષદના વિચારોનો વિકાસ કોણે કર્યો ?",
            "a": [
                {
                    "option": "મહાવીર સ્વામીએ",
                    "correct": false
                },
                {
                    "option": "ગૌતમ બુદ્ધે ",
                    "correct": false
                },
                {
                    "option": "શંકરાચાર્યે",
                    "correct": true
                },
                {
                    "option": "વશિષ્ઠે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શંકરાચાર્યે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ગૌતમ બુદ્ધનું બાળપણનું નામ શું હતું ?",
            "a": [
                {
                    "option": "તથાગત",
                    "correct": false
                },
                {
                    "option": "સિદ્ધાર્થ",
                    "correct": true
                },
                {
                    "option": "વર્ધમાન",
                    "correct": false
                },
                {
                    "option": "જનાર્દન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિદ્ધાર્થ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "સિદ્ધાર્થના પિતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "વર્ધમાન",
                    "correct": false
                },
                {
                    "option": "નંદિવર્ધન",
                    "correct": false
                },
                {
                    "option": "યશોધન",
                    "correct": false
                },
                {
                    "option": "શુદ્ધોધન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શુદ્ધોધન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "સિદ્ધાર્થની પત્નીનું નામ શું હતું ?",
            "a": [
                {
                    "option": "યશોધરા",
                    "correct": true
                },
                {
                    "option": "પ્રિયંકા",
                    "correct": false
                },
                {
                    "option": "યશોદા",
                    "correct": false
                },
                {
                    "option": "લીલાવતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  યશોધરા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "સિદ્ધાર્થ કયા કૂળનાં હતા ? ",
            "a": [
                {
                    "option": "બ્રાહ્મણ",
                    "correct": false
                },
                {
                    "option": "ક્ષત્રિય",
                    "correct": true
                },
                {
                    "option": "વૈશ્ય",
                    "correct": false
                },
                {
                    "option": "શુદ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ક્ષત્રિય</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "સિદ્ધાર્થના પુત્રનું નામ શું હતું ?",
            "a": [
                {
                    "option": "રણછોડ",
                    "correct": false
                },
                {
                    "option": "રાહુલ",
                    "correct": true
                },
                {
                    "option": "મેહુલ",
                    "correct": false
                },
                {
                    "option": "કિશન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  રાહુલ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "સિદ્ધાર્થના ગૃહત્યાગને શું કહેવાય છે ?",
            "a": [
                {
                    "option": "મહાયોગ",
                    "correct": false
                },
                {
                    "option": "મહાભારત",
                    "correct": false
                },
                {
                    "option": "મહાભિનિષ્ક્રમણ",
                    "correct": true
                },
                {
                    "option": "મહાભિયોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહાભિનિષ્ક્રમણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "સિદ્ધાર્થને જ્ઞાન પ્રાપ્ત થયુ તે સ્થળ હાલમાં કયા નામે ઓળખાય છે ? ",
            "a": [
                {
                    "option": "બોધિગયા",
                    "correct": true
                },
                {
                    "option": "બિહુ",
                    "correct": false
                },
                {
                    "option": "કુશીનારા",
                    "correct": false
                },
                {
                    "option": "વારાણસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બોધિગયા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ગૌતમ બુદ્ધ કયા સ્થળે નિર્વાણ પામ્યા હતા ?",
            "a": [
                {
                    "option": "બોધિગયા",
                    "correct": false
                },
                {
                    "option": "બિહુ",
                    "correct": false
                },
                {
                    "option": "કુશીનારા",
                    "correct": true
                },
                {
                    "option": "વારાણસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કુશીનારા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "મહાવીર સ્વામીનું મૂળ નામ શું હતું ?",
            "a": [
                {
                    "option": "જિનમાન",
                    "correct": false
                },
                {
                    "option": "બુદ્ધિમાન",
                    "correct": false
                },
                {
                    "option": "વર્ધમાન",
                    "correct": true
                },
                {
                    "option": "સિદ્ધાર્થ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વર્ધમાન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "મહાવીરનો જન્મ ક્યા ઉપનગરમાં થયો હતો ?",
            "a": [
                {
                    "option": "કુશીગ્રામમાં",
                    "correct": false
                },
                {
                    "option": "કુંડગ્રામમાં",
                    "correct": true
                },
                {
                    "option": "વડગામમાં",
                    "correct": false
                },
                {
                    "option": "પાવાપુરીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કુંડગ્રામમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ગૌતમ બુદ્ધ કઈ ભાષામાં ઉપદેશ આપતા હતા ?",
            "a": [
                {
                    "option": "ગુજરાતી",
                    "correct": false
                },
                {
                    "option": "વૈદિક સંસ્કૃત",
                    "correct": false
                },
                {
                    "option": "પાલિ",
                    "correct": true
                },
                {
                    "option": "હિન્દી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાલિ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "મહાવીરના માતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "મહાપ્રજાપતી",
                    "correct": false
                },
                {
                    "option": "માયાવતી",
                    "correct": false
                },
                {
                    "option": "ત્રિશલાદેવી",
                    "correct": true
                },
                {
                    "option": "ત્રિવેણી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્રિશલાદેવી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "મહાવીરના પત્નીનું નામ શું હતું ?",
            "a": [
                {
                    "option": "યશોમતી",
                    "correct": false
                },
                {
                    "option": "યશસ્વી",
                    "correct": false
                },
                {
                    "option": "યશોદા",
                    "correct": true
                },
                {
                    "option": "યશોધરા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  યશોદા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "મહાવીરના પુત્રીનું નામ શું હતું ?",
            "a": [
                {
                    "option": "પ્રિયંકા",
                    "correct": false
                },
                {
                    "option": "પ્રિયદર્શના",
                    "correct": true
                },
                {
                    "option": "પ્રિયા",
                    "correct": false
                },
                {
                    "option": "સુપ્રિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પ્રિયદર્શના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "મહાવીર સ્વામીએ કેટલાં વ્રત આપ્યાં છે ?",
            "a": [
                {
                    "option": "ચાર  ",
                    "correct": false
                },
                {
                    "option": "બે ",
                    "correct": false
                },
                {
                    "option": "પાંચ",
                    "correct": true
                },
                {
                    "option": "છ ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાંચ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગૌતમ બુદ્ધે જે ઉપદેશ આપ્યો તેના આધારે કયા ધર્મની સ્થાપના થઈ ?",
            "a": [
                {
                    "option": "હિન્દુ",
                    "correct": false
                },
                {
                    "option": "ખ્રિસ્તી",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": true
                },
                {
                    "option": "જૈન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બૌદ્ધ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "મહાવીર સ્વામીના ઉપદેશને લીધે સમાજમાં શું બંધ થઈ ગયું ?",
            "a": [
                {
                    "option": "પશુહિંસા",
                    "correct": true
                },
                {
                    "option": "માનવહિંસા",
                    "correct": false
                },
                {
                    "option": "હવન",
                    "correct": false
                },
                {
                    "option": "પ્રાર્થના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પશુહિંસા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "લગભગ કેટલાં વર્ષ પહેલાં બૌદ્ધ ધર્મની સ્થાપના થઈ ?",
            "a": [
                {
                    "option": "2500 વર્ષ",
                    "correct": true
                },
                {
                    "option": "3500 વર્ષ",
                    "correct": false
                },
                {
                    "option": "1000 વર્ષ",
                    "correct": false
                },
                {
                    "option": "1500 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2500 વર્ષ</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },

        { // Question 22
            "q": "ગૌતમ બુદ્ધનો જન્મ કયાં થયો હતો ?",
            "a": [
                {
                    "option": "કપિલવસ્તુ પાસે લુમ્બિની વનમાં",
                    "correct": true
                },
                {
                    "option": "કપિલવસ્તુ પાસે લાંબી વનમાં",
                    "correct": false
                },
                {
                    "option": "કપાલભ્રાતિ પાસે લુમ્બિની વનમાં",
                    "correct": false
                },
                {
                    "option": "પટણા નગરની ઉત્તરે કુંડગ્રામમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કપિલવસ્તુ પાસે લુમ્બિની વનમાં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ગૌતમ બુદ્ધની માતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "મહાપ્રજાપતી",
                    "correct": false
                },
                {
                    "option": "માયાવતી",
                    "correct": true
                },
                {
                    "option": "ત્રિશલાદેવી",
                    "correct": false
                },
                {
                    "option": "ત્રિવેણી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માયાવતી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "સિદ્ધાર્થ કઈ પ્રજાના ગણરાજ્ય સાથે જોડાયેલા હતા ?",
            "a": [
                {
                    "option": "લિચ્છવી",
                    "correct": false
                },
                {
                    "option": "વિદેહ",
                    "correct": false
                },
                {
                    "option": "મલ્લ",
                    "correct": false
                },
                {
                    "option": "શાક્ય",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાક્ય</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "સિદ્ધાર્થ શા માટે વનમાં જઈ તપ કરવાનું ઇચ્છતા હતા ?",
            "a": [
                {
                    "option": "જ્ઞાનપ્રાપ્તી માટે",
                    "correct": true
                },
                {
                    "option": "ધનપ્રાપ્તી માટે",
                    "correct": false
                },
                {
                    "option": "પુત્રપ્રાપ્તી માટે",
                    "correct": false
                },
                {
                    "option": "બળપ્રાપ્તી માટે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જ્ઞાનપ્રાપ્તી માટે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ગૌતમ બુદ્ધને આ સંસાર કેવો લાગે છે ?",
            "a": [
                {
                    "option": "દુ:ખનો દરિયો",
                    "correct": true
                },
                {
                    "option": "સુખનો સાગર",
                    "correct": false
                },
                {
                    "option": "દુ:ખનો ડુંગર",
                    "correct": false
                },
                {
                    "option": "સુખનો દરિયો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દુ:ખનો દરિયો</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ગૌતમ બુદ્ધ શાની શોધમાં અનેક સ્થળોએ ફર્યા ?",
            "a": [
                {
                    "option": "અસત્યની",
                    "correct": false
                },
                {
                    "option": "ધનની",
                    "correct": false
                },
                {
                    "option": "સત્યની",
                    "correct": true
                },
                {
                    "option": "શહેરની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સત્યની</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગૌતમ બુદ્ધને ક્યારે જ્ઞાન પ્રાપ્ત થયું ?",
            "a": [
                {
                    "option": "વૈશાખી પાંચમે",
                    "correct": false
                },
                {
                    "option": "શ્રાવણી પૂર્ણિમાએ",
                    "correct": false
                },
                {
                    "option": "જેઠુડી પૂર્ણિમાએ",
                    "correct": false
                },
                {
                    "option": "વૈશાખી પૂર્ણિમાએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૈશાખી પૂર્ણિમાએ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ગૌતમ બુદ્ધને કયા વૃક્ષની નીચે જ્ઞાન પ્રાપ્ત થયું ?",
            "a": [
                {
                    "option": "પીપળાના",
                    "correct": true
                },
                {
                    "option": "વડના",
                    "correct": false
                },
                {
                    "option": "આંબાના",
                    "correct": false
                },
                {
                    "option": "લીમડાના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પીપળાના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ગૌતમ બુદ્ધે કેટલા વર્ષ સુધી અલગ અલગ સ્થળોએ પગપાળા ચાલીને ધર્મનો ઉપદેશ આપ્યો ?",
            "a": [
                {
                    "option": "47 વર્ષ",
                    "correct": false
                },
                {
                    "option": "45 વર્ષ",
                    "correct": true
                },
                {
                    "option": "54 વર્ષ",
                    "correct": false
                },
                {
                    "option": "48 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 45 વર્ષ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "ગૌતમ બુદ્ધ કેટલા વર્ષની ઉંમરે નિર્વાણ પામ્યા ?",
            "a": [
                {
                    "option": "70 વર્ષની",
                    "correct": false
                },
                {
                    "option": "75 વર્ષની",
                    "correct": false
                },
                {
                    "option": "80 વર્ષની",
                    "correct": true
                },
                {
                    "option": "85 વર્ષની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 80 વર્ષની</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "જયારે ગૌતમ બુદ્ધને જ્ઞાન પ્રાપ્ત થયું ત્યારે તેમની ઉંમર કેટલાં વર્ષની હતી ?",
            "a": [
                {
                    "option": "25 વર્ષની",
                    "correct": false
                },
                {
                    "option": "45 વર્ષની",
                    "correct": false
                },
                {
                    "option": "30 વર્ષની",
                    "correct": false
                },
                {
                    "option": "36 વર્ષની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 36 વર્ષની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "ગૌતમ બુદ્ધના મતે દુ:ખનું મુખ્ય કારણ કયું છે ?",
            "a": [
                {
                    "option": "તૃષ્ણા",
                    "correct": true
                },
                {
                    "option": "તારણ",
                    "correct": false
                },
                {
                    "option": "તૃણા",
                    "correct": false
                },
                {
                    "option": "ધૃણા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તૃષ્ણા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "ધાર્મિક ઉપદેશ આપવાનું કામ કરવામાં કયા સ્ત્રી વિચારકનો ઉલ્લેખ છે ?",
            "a": [
                {
                    "option": "કિસા ગૌતમી",
                    "correct": false
                },
                {
                    "option": "ગાર્ગી",
                    "correct": true
                },
                {
                    "option": "માતાવતી",
                    "correct": false
                },
                {
                    "option": "ત્રિશલાદેવી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાર્ગી</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "કોણ પોતાનો દિકરો મરી જવાથી ગૌતમ બુદ્ધ પાસે ગયા હતા ?",
            "a": [
                {
                    "option": "કિસા ગૌતમી",
                    "correct": true
                },
                {
                    "option": "ગાર્ગી",
                    "correct": false
                },
                {
                    "option": "કિસાન ગૌતમી",
                    "correct": false
                },
                {
                    "option": "ત્રિશલાદેવી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કિસા ગૌતમી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "મહાવીર સ્વામીએ કેટલા વર્ષની ઉંમરે ઘર છોડી દીધું ?",
            "a": [
                {
                    "option": "20 વર્ષની",
                    "correct": false
                },
                {
                    "option": "25 વર્ષની",
                    "correct": false
                },
                {
                    "option": "35 વર્ષની",
                    "correct": false
                },
                {
                    "option": "30 વર્ષની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 30 વર્ષની</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "મહાવીર સ્વામીએ કેટલા વર્ષ સુધી કઠોર તપ કરીને જ્ઞાન પ્રાપ્ત કર્યું ?",
            "a": [
                {
                    "option": "12 વર્ષ",
                    "correct": true
                },
                {
                    "option": "14 વર્ષ",
                    "correct": false
                },
                {
                    "option": "15 વર્ષ",
                    "correct": false
                },
                {
                    "option": "13 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 12 વર્ષ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "મહાવીર સ્વામીના પિતાનું નામ શું હતું ?",
            "a": [
                {
                    "option": "શુદ્ધોધન",
                    "correct": false
                },
                {
                    "option": "સિદ્ધાર્થ",
                    "correct": true
                },
                {
                    "option": "સિધ્ધરાજ",
                    "correct": false
                },
                {
                    "option": "સિરાજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સિદ્ધાર્થ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "મહાવીર સ્વામીના ઉપદેશથી શાનો મહિમા વધ્યો ?",
            "a": [
                {
                    "option": "હિંસા",
                    "correct": false
                },
                {
                    "option": "અસત્ય",
                    "correct": false
                },
                {
                    "option": "અહિંસા",
                    "correct": true
                },
                {
                    "option": "મારામારી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અહિંસા</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "મહાવીર સ્વામીએ નીચેનામાંથી કયું વ્રત આપ્યું નથી ?",
            "a": [
                {
                    "option": "અસ્તેય",
                    "correct": false
                },
                {
                    "option": "અસત્ય",
                    "correct": true
                },
                {
                    "option": "અહિંસા",
                    "correct": false
                },
                {
                    "option": "અપરિગ્રહ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અસત્ય</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "બુદ્ધે કિસા ગૌતમીને અત્યાર સુધી કોઈના ઘરે એક પણ મરણ ન થયું હોય ત્યાંથી એક મુઠ્ઠી શું લાવવાનું કહ્યું ?",
            "a": [
                {
                    "option": "રાઈના દાણા",
                    "correct": true
                },
                {
                    "option": "ઘઉંના દાણા",
                    "correct": false
                },
                {
                    "option": "જીરાના દાણા",
                    "correct": false
                },
                {
                    "option": "બાજરીના દાણા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાઈના દાણા</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "જૈન તથા બૌદ્ધ ભિક્ષુઓ ક્યાં રહેતા ?",
            "a": [
                {
                    "option": "સંઘો અને મંદિરોમાં",
                    "correct": false
                },
                {
                    "option": "વિહારો અને મસ્જિદોમાં",
                    "correct": false
                },
                {
                    "option": "સંઘો અને વિહારોમાં",
                    "correct": true
                },
                {
                    "option": "મંદિરો અને મસ્જિદોમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંઘો અને વિહારોમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	 { // Question 1
            "q": "ગુજરાતમાં કેટલી  બોલીઓ છે ?",
            "a": [
                {
                    "option": "7",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "8",
                    "correct": true
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  8</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "આજે ગુજરાતમાં કયું ખાણું ખૂબ જ જાણીતું છે ?",
            "a": [
                {
                    "option": "કચ્છી",
                    "correct": false
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": true
                },
                {
                    "option": "પંજાબી",
                    "correct": false
                },
                {
                    "option": "મદ્રાસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાઠિયાવાડી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ઉત્તર ગુજરાતમાં કઈ બોલી બોલાય છે ?",
            "a": [
                {
                    "option": "વસાવી",
                    "correct": false
                },
                {
                    "option": "ચરોતરી",
                    "correct": false
                },
                {
                    "option": "ગૂર્જરી",
                    "correct": false
                },
                {
                    "option": "તળપદી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તળપદી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "મધ્યગુજરાતમાં કઈ બોલી બોલાય છે ?",
            "a": [
                {
                    "option": "ચરોતરી",
                    "correct": true
                },
                {
                    "option": "ગૂર્જરી",
                    "correct": false
                },
                {
                    "option": "તળપદી",
                    "correct": false
                },
                {
                    "option": "રાઠવી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચરોતરી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગુજરાતમાં તહેવારોની શરૂઆત ક્યારથી થાય છે ?",
            "a": [
                {
                    "option": "અખાત્રીજથી",
                    "correct": true
                },
                {
                    "option": "દિવાળીથી",
                    "correct": false
                },
                {
                    "option": "નવરાત્રિથી",
                    "correct": false
                },
                {
                    "option": "હોળીથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અખાત્રીજથી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ક્યા ઉત્સવની ઉજવણી માટે ગુજરાત વિશ્વભરમાં પ્રસિદ્ધ છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": false
                },
                {
                    "option": "નવરાત્રિ",
                    "correct": true
                },
                {
                    "option": "હોળી",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાયણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નવરાત્રિ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ગુજરાતમાં શામળાજી ખાતે ક્યો મેળો ભરાય છે ?",
            "a": [
                {
                    "option": "ભાદરવી પૂનમનો",
                    "correct": false
                },
                {
                    "option": "શિવરાત્રીનો",
                    "correct": false
                },
                {
                    "option": "કાર્તિકી પૂનમનો",
                    "correct": true
                },
                {
                    "option": "આષાઢી પૂનમનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાર્તિકી પૂનમનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગુજરાતમાં શિવરાત્રીનો મેળો ક્યા સ્થળે ભરાય છે ?",
            "a": [
                {
                    "option": "અંબાજી",
                    "correct": false
                },
                {
                    "option": "શામળાજી",
                    "correct": false
                },
                {
                    "option": "મોઢેરા",
                    "correct": false
                },
                {
                    "option": "ભવનાથ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભવનાથ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ભરવાડોનું કયું નૃત્ય તેમની આગવી ઓળખ ધરાવે છે ?",
            "a": [
                {
                    "option": "ઘેર",
                    "correct": false
                },
                {
                    "option": "હૂડો",
                    "correct": true
                },
                {
                    "option": "ટીમલી",
                    "correct": false
                },
                {
                    "option": "હોળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હૂડો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "કચ્છ વિસ્તારના કેટલાક લોકો શામાં રહે છે ?",
            "a": [
                {
                    "option": "ગુફામાં",
                    "correct": false
                },
                {
                    "option": "ઝાડ પર",
                    "correct": false
                },
                {
                    "option": "ભૂંગામાં",
                    "correct": true
                },
                {
                    "option": "એકેયમાં નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભૂંગામાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "દક્ષિણ ગુજરાતમાં લોકો કઈ બોલી બોલે છે ?",
            "a": [
                {
                    "option": "મરાઠી",
                    "correct": false
                },
                {
                    "option": "સુરતી",
                    "correct": true
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": false
                },
                {
                    "option": "ચરોતરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુરતી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગુજરાતના પૂર્વ વિસ્તારની વનવાસી સ્ત્રીઓ શું ભીડે છે ?",
            "a": [
                {
                    "option": "હાથ",
                    "correct": false
                },
                {
                    "option": "લાત",
                    "correct": false
                },
                {
                    "option": "કાછડો",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાછડો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ગુજરાતમાં આદિવાસી વિસ્તારમાં ચોક્કસ દિવસોએ દર અઠવાડિયે મેળા ભરાય છે, તેને શું કહેવામાં આવે છે ? ",
            "a": [
                {
                    "option": "ભાટ",
                    "correct": false
                },
                {
                    "option": "વાટ",
                    "correct": false
                },
                {
                    "option": "લાટ",
                    "correct": false
                },
                {
                    "option": "હાટ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હાટ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "સૌરાષ્ટ્રમાં કઈ બોલી બોલાય છે ?",
            "a": [
                {
                    "option": "ચરોતરી",
                    "correct": false
                },
                {
                    "option": "ગુર્જરી",
                    "correct": false
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": true
                },
                {
                    "option": "કચ્છી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાઠિયાવાડી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કચ્છમાં કઈ બોલી બોલાય છે ?",
            "a": [
                {
                    "option": "ચરોતરી",
                    "correct": false
                },
                {
                    "option": "ગુર્જરી",
                    "correct": false
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": false
                },
                {
                    "option": "કચ્છી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કચ્છી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ગુજરાતીઓ વર્ષોથી વિશ્વમાં કઈ પ્રજા તરીકે જાણીતા છે ?",
            "a": [
                {
                    "option": "ખેડુત",
                    "correct": false
                },
                {
                    "option": "ભાડૂઆતી",
                    "correct": false
                },
                {
                    "option": "વેપારી",
                    "correct": true
                },
                {
                    "option": "ઉદ્યોગપતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વેપારી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ભારતમાં ગુજરાતનું ભોજન શાના તરીકે પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "મરાઠી થાળી",
                    "correct": false
                },
                {
                    "option": "ગુજરાતી થાળી",
                    "correct": true
                },
                {
                    "option": "પંજાબી થાળી",
                    "correct": false
                },
                {
                    "option": "બંગાળી થાળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુજરાતી થાળી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "દરિયાકિનારે વસતા લોકો ખોરાકમાં શાનો ઉપયોગ કરે છે ?",
            "a": [
                {
                    "option": "દાળ-ભાત",
                    "correct": false
                },
                {
                    "option": "દાળ-શાક",
                    "correct": false
                },
                {
                    "option": "કઢી-માછલી",
                    "correct": false
                },
                {
                    "option": "ભાત-માછલી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભાત-માછલી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગરબા ક્યા તહેવારમાં ગવાય છે ?",
            "a": [
                {
                    "option": "ઉત્તરાયણ",
                    "correct": false
                },
                {
                    "option": "દિવાળી",
                    "correct": false
                },
                {
                    "option": "નવરાત્રિ",
                    "correct": true
                },
                {
                    "option": "હોળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નવરાત્રિ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "ગુજરાતની પ્રજાને શું પ્રિય છે ?",
            "a": [
                {
                    "option": "ઝઘડો",
                    "correct": false
                },
                {
                    "option": "મિત્રતા",
                    "correct": false
                },
                {
                    "option": "ઉત્સવ",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્સવ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ગુજરાતના સૌરાષ્ટ્રમાં મોટા પ્રમાણમાં શું ખવાય છે ? ",
            "a": [
                {
                    "option": "બાજરાનો રોટલો-શાકભાજી ",
                    "correct": true
                },
                {
                    "option": "ઘઉંની રોટલી-શાકભાજી",
                    "correct": false
                },
                {
                    "option": "ભાત-શાકભાજી",
                    "correct": false
                },
                {
                    "option": "ફાફડા-જલેબી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાજરાનો રોટલો-શાકભાજી</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "આજે કયું ખાણું ખૂબ જ જાણીતું બન્યું છે ?",
            "a": [
                {
                    "option": "સુરતી",
                    "correct": false
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": true
                },
                {
                    "option": "સોરઠી",
                    "correct": false
                },
                {
                    "option": "કચ્છી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાઠિયાવાડી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "સુરતનું શું પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "ફાફડા-જલેબી",
                    "correct": false
                },
                {
                    "option": "ઊંધિયું-જલેબી",
                    "correct": false
                },
                {
                    "option": "ઊંધિયું-ઘારી",
                    "correct": true
                },
                {
                    "option": "ઘારી-ફાફડા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઊંધિયું-ઘારી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "રંગોની પીચકારી એકબીજા ઉપર કયા તહેવારમાં છાંટવામાં આવે છે ?",
            "a": [
                {
                    "option": "નવરાત્રિ",
                    "correct": false
                },
                {
                    "option": "દિવાળી",
                    "correct": false
                },
                {
                    "option": "હોળી-ધૂળેટી",
                    "correct": true
                },
                {
                    "option": "જન્માષ્ટમી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હોળી-ધૂળેટી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "કૃષ્ણ ભગવાનના જન્મની યાદમાં કયો તહેવાર ઉજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "નવરાત્રિ",
                    "correct": false
                },
                {
                    "option": "દિવાળી",
                    "correct": false
                },
                {
                    "option": "હોળી-ધૂળેટી",
                    "correct": false
                },
                {
                    "option": "જન્માષ્ટમી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જન્માષ્ટમી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ભાઈને બહેન કયા તહેવારમાં રાખડી બાંધે છે ?",
            "a": [
                {
                    "option": "જન્માષ્ટમી",
                    "correct": false
                },
                {
                    "option": "રક્ષાબંધન",
                    "correct": true
                },
                {
                    "option": "પર્યુષણ",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાયણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રક્ષાબંધન</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "કયા તહેવારમાં આકાશમાં રંગબેરંગી પતંગો ઉડાડવામાં આવે છે ?",
            "a": [
                {
                    "option": "જન્માષ્ટમી",
                    "correct": false
                },
                {
                    "option": "રક્ષાબંધન",
                    "correct": false
                },
                {
                    "option": "પર્યુષણ",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાયણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તરાયણ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "પારસીઓનું નવું વર્ષ કયા તહેવાર તરીકે ઉજવાય છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": false
                },
                {
                    "option": "પતેતી",
                    "correct": true
                },
                {
                    "option": "ગુરુનાનક જયંતિ",
                    "correct": false
                },
                {
                    "option": "બકરી ઈદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પતેતી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ખ્રિસ્તીઓનું નવું વર્ષ કયા તહેવાર તરીકે ઉજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": true
                },
                {
                    "option": "પતેતી",
                    "correct": false
                },
                {
                    "option": "ગુરુનાનક જયંતિ",
                    "correct": false
                },
                {
                    "option": "બકરી ઈદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાતાલ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ગુજરાતના સમજોમાં કયા દેશોના સમાજની ઘણી નવીન ટેક્નોલોજી અને આધુનિકતા લોકોએ અપનાવી છે ?",
            "a": [
                {
                    "option": "પૂર્વના દેશોના",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમી દેશોના",
                    "correct": true
                },
                {
                    "option": "દક્ષિણી દેશોના",
                    "correct": false
                },
                {
                    "option": "ઉત્તરી દેશોના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પશ્ચિમી દેશોના</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "આદિવાસીઓનું નૃત્ય કયું છે ?",
            "a": [
                {
                    "option": "ઘેર",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "ટીમલી",
                    "correct": false
                },
                {
                    "option": "હોળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "નીચેનામાંથી મુસ્લિમ ધર્મના લોકોનો કયો તહેવાર છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": false
                },
                {
                    "option": "પર્યુષણ",
                    "correct": false
                },
                {
                    "option": "ગુરુનાનક જયંતિ",
                    "correct": false
                },
                {
                    "option": "મહોર્રમ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહોર્રમ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "નીચેનામાંથી શીખ ધર્મના લોકોનો કયો તહેવાર છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": false
                },
                {
                    "option": "પર્યુષણ",
                    "correct": false
                },
                {
                    "option": "ગુરુનાનક જયંતિ",
                    "correct": true
                },
                {
                    "option": "મહોર્રમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુરુનાનક જયંતિ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "ગુજરાતમાં અશોકનો શિલાલેખ ક્યા જિલ્લામાં આવેલો છે ?",
            "a": [
                {
                    "option": "અમરેલીમાં",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢમાં",
                    "correct": true
                },
                {
                    "option": "સુરેન્દ્રનગરમાં",
                    "correct": false
                },
                {
                    "option": "રાજકોટમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જૂનાગઢમાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ચાણક્ય કયા વિષયમાં નિપુણ હતા ?",
            "a": [
                {
                    "option": "અર્થશાસ્ત્રમાં",
                    "correct": true
                },
                {
                    "option": "તર્કશાસ્ત્રમાં",
                    "correct": false
                },
                {
                    "option": "સમાજશાસ્ત્રમાં",
                    "correct": false
                },
                {
                    "option": "માનસશાસ્ત્રમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અર્થશાસ્ત્રમાં</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "મગધ સામ્રાજ્યની રાજધાની ક્યા સ્થળે હતી ?",
            "a": [
                {
                    "option": "તક્ષશિલા",
                    "correct": false
                },
                {
                    "option": "ઉજ્જૈન ",
                    "correct": false
                },
                {
                    "option": "સારનાથ",
                    "correct": false
                },
                {
                    "option": "પાટલિપુત્ર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પાટલિપુત્ર</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "આમાંથી ક્યા સ્થળે મગધ સામ્રાજ્યની પ્રાદેશિક રાજધાની હતી ?",
            "a": [
                {
                    "option": "પાટલિપુત્ર",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢ",
                    "correct": false
                },
                {
                    "option": "તક્ષશિલા",
                    "correct": true
                },
                {
                    "option": "સાંચી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તક્ષશિલા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ક્યા યુદ્ધમાં વિજય મેળવ્યા પછી સમ્રાટ અશોકનું હ્રદયપરિવર્તન થયું ?",
            "a": [
                {
                    "option": "કૌશામ્બીના",
                    "correct": false
                },
                {
                    "option": "ઉજ્જૈનના",
                    "correct": false
                },
                {
                    "option": "તક્ષશિલાના",
                    "correct": false
                },
                {
                    "option": "કલિંગના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કલિંગના</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "સમ્રાટ અશોકે પોતાનાં પુત્ર-પુત્રીને ધર્મના પ્રચાર માટે ક્યા દેશમાં મોકલ્યાં હતાં ?",
            "a": [
                {
                    "option": "બ્રહ્મદેશ (મ્યાનમાર, બર્મા)",
                    "correct": false
                },
                {
                    "option": "ઇન્ડોનેશિયા",
                    "correct": false
                },
                {
                    "option": "સિલોન (શ્રીલંકા)",
                    "correct": true
                },
                {
                    "option": "સુમાત્રા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સિલોન (શ્રીલંકા)</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "સમ્રાટ અશોકના પુત્રનું નામ શું હતું ? ",
            "a": [
                {
                    "option": "ભરત",
                    "correct": false
                },
                {
                    "option": "મહેન્દ્ર",
                    "correct": true
                },
                {
                    "option": "માનેન્દ્ર",
                    "correct": false
                },
                {
                    "option": "જયસિંહ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મહેન્દ્ર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "કલિંગ એટલે હાલનું કયું રાજ્ય ?",
            "a": [
                {
                    "option": "ઓરિસ્સા",
                    "correct": true
                },
                {
                    "option": "આંધ્રપ્રદેશ",
                    "correct": false
                },
                {
                    "option": "અરુણાચલ પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "ગુજરાત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઓરિસ્સા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "સમ્રાટ અશોકે કોના ઉપદેશથી બૌદ્ધ ધર્મ અંગીકાર કર્યો ?",
            "a": [
                {
                    "option": "ઉપદીપ",
                    "correct": false
                },
                {
                    "option": "ઉત્તમ",
                    "correct": false
                },
                {
                    "option": "ઉત્તાનપાદ",
                    "correct": false
                },
                {
                    "option": "ઉપગુપ્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઉપગુપ્ત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "સમ્રાટ અશોક કોનો પુત્ર હતો ?",
            "a": [
                {
                    "option": "ચંદ્રગુપ્ત મૌર્ય",
                    "correct": false
                },
                {
                    "option": "બિંદુસાર",
                    "correct": true
                },
                {
                    "option": "ચાણક્ય",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બિંદુસાર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "સમ્રાટ અશોકની પુત્રીનું નામ શું હતું ? ",
            "a": [
                {
                    "option": "પ્રિયદર્શિની",
                    "correct": false
                },
                {
                    "option": "સંઘીણી",
                    "correct": false
                },
                {
                    "option": "સંઘમિત્રા",
                    "correct": true
                },
                {
                    "option": "મિત્રાય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સંઘમિત્રા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "સમ્રાટ અશોક ક્યા વંશનો રાજા હતો ?",
            "a": [
                {
                    "option": "ચાલુક્ય વંશ",
                    "correct": false
                },
                {
                    "option": "ગુપ્ત વંશ",
                    "correct": false
                },
                {
                    "option": "સોલંકી વંશ",
                    "correct": false
                },
                {
                    "option": "મૌર્ય વંશ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મૌર્ય વંશ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "બિન્દુસાર કોનો પુત્ર હતો ?",
            "a": [
                {
                    "option": "ચંદ્રગુપ્ત મૌર્યનો",
                    "correct": true
                },
                {
                    "option": "ભોજ રાજાનો",
                    "correct": false
                },
                {
                    "option": "ચાણક્યનો",
                    "correct": false
                },
                {
                    "option": "દેવગુપ્તનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચંદ્રગુપ્ત મૌર્ય</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "હકીકતમાં આપણી રાષ્ટ્રીય મુદ્રામાં કેટલા સિંહની આકૃતિ છે ?",
            "a": [
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": true
                },
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "1",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  4</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "હ્રદયપરિવર્તન થતાં સમ્રાટ અશોક શું બન્યો ?",
            "a": [
                {
                    "option": "રાજા",
                    "correct": false
                },
                {
                    "option": "સાધુ",
                    "correct": false
                },
                {
                    "option": "ધર્મોપદેશક",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ધર્મોપદેશક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ભારતની રાજમુદ્રા કઈ છે ?",
            "a": [
                {
                    "option": "સારનાથનો હાથીસ્તંભ",
                    "correct": false
                },
                {
                    "option": "સારનાથનો વાઘસ્તંભ",
                    "correct": false
                },
                {
                    "option": "સારનાથનો સિંહસ્તંભ",
                    "correct": true
                },
                {
                    "option": "સારનાથનો હરણસ્તંભ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સારનાથનો સિંહસ્તંભ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
       },
        { // Question 17
            "q": "મગધના સામ્રાજ્યની સ્થાપના આજથી લગભગ કેટલા વર્ષ પહેલાં થઈ હતી ?",
            "a": [
                {
                    "option": "2300 વર્ષ",
                    "correct": true
                },
                {
                    "option": "2500 વર્ષ",
                    "correct": false
                },
                {
                    "option": "2400 વર્ષ",
                    "correct": false
                },
                {
                    "option": "2700 વર્ષ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2300 વર્ષ</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "શક્તિશાળી મગધના સામ્રાજ્યનું નિર્માણ કોણે કર્યું હતું ? ",
            "a": [
                {
                    "option": "સમ્રાટ અશોકે",
                    "correct": false
                },
                {
                    "option": "ચંદ્રગુપ્ત મૌર્યે",
                    "correct": true
                },
                {
                    "option": "બિન્દુસાર",
                    "correct": false
                },
                {
                    "option": "હર્ષવર્ધને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચંદ્રગુપ્ત મૌર્યે</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "શક્તિશાળી મગધના સામ્રાજ્યનો વિસ્તાર કોણે કર્યો હતો ? ",
            "a": [
                {
                    "option": "સમ્રાટ અશોકે",
                    "correct": true
                },
                {
                    "option": "ચંદ્રગુપ્ત મૌર્યે",
                    "correct": false
                },
                {
                    "option": "બિન્દુસાર",
                    "correct": false
                },
                {
                    "option": "હર્ષવર્ધને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમ્રાટ અશોકે</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "પ્રાદેશિક રાજધાનીઓમાં રાજકુમારોને શું બનાવીને મોકલવામાં આવતા ?",
            "a": [
                {
                    "option": "લોકપાલ",
                    "correct": false
                },
                {
                    "option": "રાજય સરકાર",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "રાજયપાલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજયપાલ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 21
            "q": "સમ્રાટ અશોક શું જીતીને પોતાની મહત્ત્વાકાંક્ષા પૂરી કરવા ઇચ્છતો હતો ?",
            "a": [
                {
                    "option": "કલિંગ",
                    "correct": true
                },
                {
                    "option": "મગધ",
                    "correct": false
                },
                {
                    "option": "લવિંગ",
                    "correct": false
                },
                {
                    "option": "કિંગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કલિંગ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 22
            "q": "કલિંગના યુદ્ધમાં કેટલા લોકોને બંદી બનાવવામાં આવ્યા ?",
            "a": [
                {
                    "option": "લગભગ દોઢ લાખ",
                    "correct": true
                },
                {
                    "option": "લગભગ બે લાખ",
                    "correct": false
                },
                {
                    "option": "લગભગ ત્રણ લાખ",
                    "correct": false
                },
                {
                    "option": "લગભગ અઢી લાખ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લગભગ દોઢ લાખ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "કલિંગના યુદ્ધમાં કેટલા લોકો માર્યા ગયા ?",
            "a": [
                {
                    "option": "એક લાખથી પણ વધારે",
                    "correct": true
                },
                {
                    "option": "બે લાખથી પણ વધારે",
                    "correct": false
                },
                {
                    "option": "ત્રણ લાખથી પણ વધારે",
                    "correct": false
                },
                {
                    "option": "એક લાખથી ઓછા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એક લાખથી પણ વધારે</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "અશોકે શાના પ્રચાર માટે શિલાલેખોમાં કોતરાવ્યું ?",
            "a": [
                {
                    "option": "ધડના",
                    "correct": false
                },
                {
                    "option": "ધતિંગના",
                    "correct": false
                },
                {
                    "option": "ધનના",
                    "correct": false
                },
                {
                    "option": "ધમ્મના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધમ્મના</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 25
            "q": "કોણે મૌર્ય સામ્રાજ્યની સ્થાપના માટે ચંદ્રગુપ્ત મૌર્યને મદદ કરી હતી ?",
            "a": [
                {
                    "option": "ચાણક્યએ",
                    "correct": true
                },
                {
                    "option": "અશોકે",
                    "correct": false
                },
                {
                    "option": "ચારણે",
                    "correct": false
                },
                {
                    "option": "બિંદુસારે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચાણક્યએ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 26
            "q": "કલિંગનું રાજ્ય પહેલાં ક્યા સામ્રાજ્યનો એક ભાગ હતું ?",
            "a": [
                {
                    "option": "કુશીનારા",
                    "correct": false
                },
                {
                    "option": "મગધ",
                    "correct": true
                },
                {
                    "option": "કપિલવસ્તુ",
                    "correct": false
                },
                {
                    "option": "તક્ષશીલા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મગધ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 27
            "q": "અશોકે 'ધમ્મ'ના પ્રચાર માટે શિલાલેખોમાં શું કોતરાવ્યું ન હતું ?",
            "a": [
                {
                    "option": "માતાપિતાની આજ્ઞા પાળવી",
                    "correct": false
                },
                {
                    "option": "વડીલોનો આદર કરવો",
                    "correct": false
                },
                {
                    "option": "ગુરુની સેવા કરવી",
                    "correct": false
                },
                {
                    "option": "બને તેટલો વધુ ખર્ચ કરવો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બને તેટલો વધુ ખર્ચ કરવો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "મૌર્ય સામ્રાજ્યના પતન પછી ઉત્તર-પશ્ચિમ ભારતમાં કયા રાજાઓનું શાસન સ્થપાયું ?",
            "a": [
                {
                    "option": "શક રાજાઓનું",
                    "correct": false
                },
                {
                    "option": "પાંડ્ય રાજાઓનું",
                    "correct": false
                },
                {
                    "option": "સાતવાહન રાજાઓનું",
                    "correct": false
                },
                {
                    "option": "યવન રાજાઓનું",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યવન રાજાઓનું</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "મૌર્ય સામ્રાજ્યના પતન પછી પશ્ચિમ ભારતમાં કયા રાજાઓનું શાસન સ્થપાયું ?",
            "a": [
                {
                    "option": "શક રાજાઓનું",
                    "correct": true
                },
                {
                    "option": "પાંડ્ય રાજાઓનું",
                    "correct": false
                },
                {
                    "option": "સાતવાહન રાજાઓનું",
                    "correct": false
                },
                {
                    "option": "યવન રાજાઓનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શક રાજાઓનું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "શકો પછી કોનું શાસન સ્થપાયું ?",
            "a": [
                {
                    "option": "ચોલનું",
                    "correct": false
                },
                {
                    "option": "કુષાણોનું",
                    "correct": true
                },
                {
                    "option": "ચેરનું",
                    "correct": false
                },
                {
                    "option": "પલ્લવોનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુષાણોનું</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 31
            "q": "ઉત્તર તથા મધ્ય ભારતના કેટલાક પ્રદેશોમાં કોનું શાસન હતું ?",
            "a": [
                {
                    "option": "પુશ્કરમિત્ર શુંગ",
                    "correct": false
                },
                {
                    "option": "પુલકેતુ શુંગ",
                    "correct": false
                },
                {
                    "option": "પુષ્પમિત્ર શુંગ",
                    "correct": true
                },
                {
                    "option": "પુખર શુંગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પુષ્પમિત્ર શુંગ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 32
            "q": "પુષ્પમિત્ર શુંગ પછી કોનું શાસન આવ્યું ?",
            "a": [
                {
                    "option": "કર્ણ",
                    "correct": false
                },
                {
                    "option": "કરણ",
                    "correct": false
                },
                {
                    "option": "કણ",
                    "correct": false
                },
                {
                    "option": "કણ્વ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કણ્વ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 33
            "q": "દક્ષિણ ભારતમાં 2200  થી 1800 વર્ષ પહેલાં આંધ્ર પ્રદેશમાં કયા વંશના રાજાઓનું શાસન હતું ? ",
            "a": [
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "સાતવહન",
                    "correct": false
                },
                {
                    "option": "ચૌલ, ચેર",
                    "correct": false
                },
                {
                    "option": "પાંડ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "દક્ષિણ ભારતમાં 1500 વર્ષ પહેલાં આંધ્રપ્રદેશમાં કયા વંશના રાજાઓનું શાસન હતું ? ",
            "a": [
                {
                    "option": "પલ્લવ, ચાલુક્ય",
                    "correct": true
                },
                {
                    "option": "સાતવહન",
                    "correct": false
                },
                {
                    "option": "ચૌલ, ચેર",
                    "correct": false
                },
                {
                    "option": "પાંડ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પલ્લવ, ચાલુક્ય</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
	{ // Question 1
            "q": "વાવાઝોડા વખતે હવાની દિશાનો અણસાર મેળવી કઈ દિશામાં જવું ? ",
            "a": [
                {
                    "option": "સામી દિશામાં",
                    "correct": false
                },
                {
                    "option": "વિરૂદ્ધ દિશામાં",
                    "correct": false
                },
                {
                    "option": "લંબ દિશામાં",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લંબ દિશામાં</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "કઈ કુદરતી આપત્તિ આવે ત્યારે ગભરાયા વિના ખુલ્લા મેદાનમાં ચાલ્યા જવું ?",
            "a": [
                {
                    "option": "પૂર",
                    "correct": false
                },
                {
                    "option": "વાવાઝોડું",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                },
                {
                    "option": "ભૂકંપ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભૂકંપ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "પૂર વખતે ઘરના વીજપ્રવાહનું શું કરવું ?",
            "a": [
                {
                    "option": "વધારવો",
                    "correct": false
                },
                {
                    "option": "ઘટાડવો",
                    "correct": false
                },
                {
                    "option": "બંધ  કરવો",
                    "correct": true
                },
                {
                    "option": "ચાલુ કરવો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બંધ  કરવો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "નદીમાં આવતા પાણીના ધસમસતા પ્રવાહને શું કહે છે ?",
            "a": [
                {
                    "option": "પૂર",
                    "correct": true
                },
                {
                    "option": "વાવાઝોડું",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                },
                {
                    "option": "ભૂકંપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પૂર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "વરસાદ પડ્યો ન હોય કે નહિવત્ વરસાદ પડ્યો હોય તેવી પરિસ્થિતિને શું કહેવાય ?",
            "a": [
                {
                    "option": "વાવાઝોડું",
                    "correct": false
                },
                {
                    "option": "દુષ્કાળ",
                    "correct": true
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                },
                {
                    "option": "ભૂકંપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દુષ્કાળ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "જંગલોમાં કોઈ કારણસર આગ લાગે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "પૂર",
                    "correct": false
                },
                {
                    "option": "વાવાઝોડું",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                },
                {
                    "option": "દાવાનળ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દાવાનળ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "નીચેનામાંથી કુદરતી આપત્તિ કઈ છે ?",
            "a": [
                {
                    "option": "જ્વાળામુખી વિસ્ફોટ",
                    "correct": true
                },
                {
                    "option": "બૉમ્બ વિસ્ફોટ",
                    "correct": false
                },
                {
                    "option": "હુલ્લડ",
                    "correct": false
                },
                {
                    "option": "યુદ્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જ્વાળામુખી વિસ્ફોટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "નીચેનામાંથી માનવસર્જિત આપત્તિ કઈ છે ?",
            "a": [
                {
                    "option": "ભુકંપ",
                    "correct": false
                },
                {
                    "option": "દુકાળ",
                    "correct": false
                },
                {
                    "option": "આગ",
                    "correct": true
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આગ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "નીચેનામાંથી કઈ કુદરતી આપત્તિ નથી?",
            "a": [
                {
                    "option": "પૂર",
                    "correct": false
                },
                {
                    "option": "દુકાળ",
                    "correct": false
                },
                {
                    "option": "વાવાઝોડું",
                    "correct": false
                },
                {
                    "option": "ઔદ્યોગિક અકસ્માત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઔદ્યોગિક અકસ્માત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "નીચેનામાંથી કઈ માનવસર્જિત આપત્તિ નથી?",
            "a": [
                {
                    "option": "યુદ્ધ",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": true
                },
                {
                    "option": "આગ",
                    "correct": false
                },
                {
                    "option": "હુલ્લડ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ત્સુનામી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "સમુદ્રના તળિયે ભૂકંપ આવવાથી કે જ્વાળામુખી ફાટવાથી મોટા અને ઊંચા સમુદ્રમોજાં ઉત્પન્ન થાય તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "વાવાઝોડું",
                    "correct": false
                },
                {
                    "option": "દાવાનળ",
                    "correct": false
                },
                {
                    "option": "પૂર",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ત્સુનામી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "વેરભાવ કે અન્ય કારણોસર માનવ વસવાટના સ્થળોએ લોકો વચ્ચે થતી મારામારીની અને મિલકતોને નુકસાનની ઘટનાને શું કહેવાય ?",
            "a": [
                {
                    "option": "બૉમ્બ વિસ્ફોટ",
                    "correct": false
                },
                {
                    "option": "ઔદ્યોગિક અકસ્માત",
                    "correct": false
                },
                {
                    "option": "હુલ્લડ",
                    "correct": true
                },
                {
                    "option": "આગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હુલ્લડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "આમાંથી આગાહી કરી શકાય તેવી કુદરતી આપત્તિ કઈ છે ?",
            "a": [
                {
                    "option": "ભૂકંપ",
                    "correct": false
                },
                {
                    "option": "દુકાળ",
                    "correct": true
                },
                {
                    "option": "દાવાનળ",
                    "correct": false
                },
                {
                    "option": "જ્વાળામુખી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દુકાળ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "આમાંથી આગાહી ન કરી શકાય તેવી કુદરતી આપત્તિ કઈ છે ?",
            "a": [
                {
                    "option": "જંગલની આગ",
                    "correct": true
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                },
                {
                    "option": "વાવાઝોડું",
                    "correct": false
                },
                {
                    "option": "પૂર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જંગલની આગ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
       },
        { // Question 15
            "q": "હવાનું હલકું દબાણ સર્જાવાથી ભારે દબાણવાળા વિસ્તારમાંથી વેગથી પવન ફૂંકાય છે. આ તોફાની પવનો ભારે વરસાદ સાથે વાય ત્યારે સર્જાતી પરિસ્થિતિને શું કહે છે ? ",
            "a": [
                {
                    "option": "વાવાઝોડું",
                    "correct": true
                },
                {
                    "option": "પૂર",
                    "correct": false
                },
                {
                    "option": "દુકાળ",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાવાઝોડું</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 16
            "q": "વરસાદ ન પડે કે ખૂબ ઓછો પડે તેવી સ્થિતિને શું કહે છે ?",
            "a": [
                {
                    "option": "લીલો દુકાળ",
                    "correct": false
                },
                {
                    "option": "સૂકો દુકાળ",
                    "correct": true
                },
                {
                    "option": "કાળો દુકાળ",
                    "correct": false
                },
                {
                    "option": "ધોળો દુકાળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂકો દુકાળ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 17
            "q": "ખૂબ વધુ વરસાદ પડે તેવી સ્થિતિને શું કહે છે ?",
            "a": [
                {
                    "option": "લીલો દુકાળ",
                    "correct": true
                },
                {
                    "option": "સૂકો દુકાળ",
                    "correct": false
                },
                {
                    "option": "કાળો દુકાળ",
                    "correct": false
                },
                {
                    "option": "ધોળો દુકાળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લીલો દુકાળ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "જમીનના અંદરના ખડકો ખૂબ શક્તિશાળી કંપન અનુભવે ત્યારે પૃથ્વીની ઉપરની સપાટી પર કંપન અનુભવાય આ ઘટનાને શું કહે છે ? ",
            "a": [
                {
                    "option": "જ્વાળામુખી",
                    "correct": false
                },
                {
                    "option": "ભૂકંપ",
                    "correct": true
                },
                {
                    "option": "દાવાનળ",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભૂકંપ</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 19
            "q": "પૃથ્વીની સપાટી પર આવેલા કોઈ છિદ્ર કે ફાટ દ્વારા પેટાળમાં રહેલા લાવા, ગરમ વાયુઓ, રાખ, માટી વગેરે ધડાકા સાથે કે ધીમે ધીમે જમીનની બહાર આવે તેને શું કહે છે ?",
            "a": [
                {
                    "option": "જ્વાળામુખી",
                    "correct": true
                },
                {
                    "option": "ભૂકંપ",
                    "correct": false
                },
                {
                    "option": "દાવાનળ",
                    "correct": false
                },
                {
                    "option": "ત્સુનામી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જ્વાળામુખી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 20
            "q": "કયા કારણથી ઓદ્યૌગિક અકસ્માત સર્જાતો નથી ?",
            "a": [
                {
                    "option": "ઝેરી રસાયણ લીક થવાથી",
                    "correct": false
                },
                {
                    "option": "પૂરતી સુરક્ષા વ્યવસ્થાથી",
                    "correct": true
                },
                {
                    "option": "માનવીય ભૂલોથી",
                    "correct": false
                },
                {
                    "option": "રાસાયણિક પ્રવાહી ઢોળાઈ જવાથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૂરતી સુરક્ષા વ્યવસ્થાથી</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 21
            "q": "નીચેનામાંથી કયા કારણથી બોમ્બ વિસ્ફોટ કરવામાં આવે છે ?",
            "a": [
                {
                    "option": "તારાજી કરવા",
                    "correct": false
                },
                {
                    "option": "વિનાશ કરવા",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "ભય અને આતંક ફેલાવવા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "'આપત્તિમાં મૃત્યું થાય.'  તેને કેવી અસર કહેવાય ?",
            "a": [
                {
                    "option": "માનસિક અસર",
                    "correct": false
                },
                {
                    "option": "આર્થિક અસર",
                    "correct": false
                },
                {
                    "option": "સામાજિક અસર",
                    "correct": false
                },
                {
                    "option": "શારીરિક અસર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શારીરિક અસર</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "'આપત્તિમાં માણસ ડઘાઈ જાય, સૂનમૂન થઈ જાય.' તેને કેવી અસર કહેવાય ?",
            "a": [
                {
                    "option": "માનસિક અસર",
                    "correct": true
                },
                {
                    "option": "આર્થિક અસર",
                    "correct": false
                },
                {
                    "option": "સામાજિક અસર",
                    "correct": false
                },
                {
                    "option": "શારીરિક અસર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માનસિક અસર</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "'આપત્તિમાં વ્યક્તિના ધંધા રોજગારને નુકશાન થાય.' તેને કેવી અસર કહેવાય ?",
            "a": [
                {
                    "option": "માનસિક અસર",
                    "correct": false
                },
                {
                    "option": "આર્થિક અસર",
                    "correct": true
                },
                {
                    "option": "સામાજિક અસર",
                    "correct": false
                },
                {
                    "option": "શારીરિક અસર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આર્થિક અસર</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 25
            "q": "'આપત્તિમાં સ્વજનોથી અલગ થવું પડે.' તેને કેવી અસર કહેવાય ?",
            "a": [
                {
                    "option": "માનસિક અસર",
                    "correct": false
                },
                {
                    "option": "આર્થિક અસર",
                    "correct": false
                },
                {
                    "option": "સામાજિક અસર",
                    "correct": true
                },
                {
                    "option": "શારીરિક અસર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સામાજિક અસર</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
           "q": "બંધારણે નાગરિકના સંપૂર્ણ સર્વાંગી વિકાસ માટે શું આપેલું છે ?",
            "a": [
                {"option": "પ્રલોભનો",      "correct": false},
                {"option": "નાણા",     "correct": false},
                {"option": "ઉદ્યોગો",      "correct": false},
                {"option": "મૂળભૂત હકો",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૂળભૂત હકો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "શિક્ષણનો અધિકાર કેટલા વર્ષના વયજૂથ માટે અમલમાં આવ્યો છે ?",
            "a": [
                {"option": "18 થી 23 વર્ષના",      "correct": false},
                {"option": "6 થી 14 વર્ષના",     "correct": true},
                {"option": "1 થી 5 વર્ષના",      "correct": false},
                {"option": "35 થી 40 વર્ષના",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 6 થી 14 વર્ષના</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "કેટલા વર્ષ પૂર્ણ થાય પછી મતદાનનો અધિકાર મળે છે ?",
            "a": [
                {"option": "21 વર્ષ",      "correct": false},
                {"option": "14 વર્ષ",     "correct": false},
                {"option": "18 વર્ષ",      "correct": true},
                {"option": "20 વર્ષ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 18 વર્ષ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ભારતનો નાગરિક વિવિધ મંડળોની રચના કયા હકથી કરી શકે છે ?",
            "a": [
                {"option": "સાંસ્કૃતિક હક",      "correct": false},
                {"option": "શોષણ સામેનો હક",     "correct": false},
                {"option": "સ્વાતંત્ર્યનો હક",      "correct": true},
                {"option": "શૈક્ષણિક હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વાતંત્ર્યનો હક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ભારતના નાગરિકને કોઈ પણ ધર્મ પાળવાનો અધિકાર ક્યા હકથી મળ્યો છે ?",
            "a": [
                {"option": "ધર્મ-સ્વાતંત્ર્યનો હક",      "correct": true},
                {"option": "શોષણ સામેનો હક",     "correct": false},
                {"option": "વાણી-સ્વાતંત્ર્યનો હક",      "correct": false},
                {"option": "સમાનતાનો હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધર્મ-સ્વાતંત્ર્યનો હક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 6
            "q": "મૂળભૂત હકોના રક્ષણ માટે દેશના નાગરિકોને કયો હક આપવામાં આવ્યો છે ?",
            "a": [
                {"option": "સમાનતાનો હક",      "correct": false},
                {"option": "સ્વાતંત્ર્યનો હક",     "correct": false},
                {"option": "શોષણ સામેનો હક",      "correct": false},
                {"option": "બંધારણીય ઇલાજનો હક",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંધારણીય ઇલાજનો હક</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ભારતના તમામ નાગરિકો કેવા છે ?",
            "a": [
                {"option": "સમાન",      "correct": true},
                {"option": "અસમાન",     "correct": false},
                {"option": "ગરીબ",      "correct": false},
                {"option": "તવંગર",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમાન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "આપણે આપણી ફરજોનું બરાબર પાલન કરીએ તો દરેક જણ શું ભોગવી શકે ?",
            "a": [
                {"option": "આરામ",      "correct": false},
                {"option": "હક",     "correct": true},
                {"option": "આનંદ",      "correct": false},
                {"option": "ગરીબી",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હક</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
           "q": "ભારતના નાગરિકને કોઈ પણ સંસ્થાની સ્થાપના કરવાનો અધિકાર કયા હકથી મળ્યો છે ?",
            "a": [
                {"option": "સમાનતાના હક",      "correct": false},
                {"option": "સાંસ્કૃતિક અને શૈક્ષણિક હક",     "correct": true},
                {"option": "શોષણ સામેના હક",      "correct": false},
                {"option": "બંધારણીય ઇલાજના હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાંસ્કૃતિક અને શૈક્ષણિક હક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "'જમીનદાર ખેડૂત પાસે પૂરૂં કામ કરાવી ખેડૂતને ઓછી મજૂરી આપતા હતા.'આ બાબત ખેડૂતનો કયો હક છીનવી લે છે ? ",
            "a": [
                {"option": "સમાનતાનો હક",      "correct": false},
                {"option": "સ્વાતંત્ર્યનો હક",     "correct": false},
                {"option": "શોષણ સામેનો હક",      "correct": true},
                {"option": "બંધારણીય ઇલાજનો હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શોષણ સામેનો હક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "રમેશભાઈને હિન્દુ ધર્મનો પ્રચાર કરવાનો અધિકાર કયા હકથી મળ્યો છે ?",
            "a": [
                {"option": "ધર્મ-સ્વાતંત્ર્યના હક",      "correct": true},
                {"option": "શોષણ સામેના હક",     "correct": false},
                {"option": "વાણી-સ્વાતંત્ર્યના હક",      "correct": false},
                {"option": "સમાનતાના હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધર્મ-સ્વાતંત્ર્યના હક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "'ભરતભાઇ મજૂર પાસે બળજબરીથી કામ કરાવતા હતા.' આ બનાવ મજૂરનો કયા હકને છીનવી લે છે ?",
            "a": [
                {"option": "ધર્મ-સ્વાતંત્ર્યનો હક",      "correct": false},
                {"option": "શોષણ સામેનો હક",     "correct": true},
                {"option": "વાણી-સ્વાતંત્ર્યનો હક",      "correct": false},
                {"option": "સમાનતાનો હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શોષણ સામેનો હક</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "હાલમાં કોઈ પણ જાતિના સ્ત્રી કે પુરુષને દરેક ક્ષેત્રે સરખી તક કયા હકના કારણે મળે છે ?",
            "a": [
                {"option": "ધર્મ-સ્વાતંત્ર્યના હક",      "correct": false},
                {"option": "શોષણ સામેના હક",     "correct": false},
                {"option": "વાણી-સ્વાતંત્ર્યના હક",      "correct": false},
                {"option": "સમાનતાના હક",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમાનતાના હક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
           "q": "હાલમાં ભારતનો કોઈ પણ નાગરિક કોઈ પણ સરકારી કચેરી કે સરકાર દ્વારા અનુદાનિત કચેરીમાંથી સરળતાથી માહિતી કયા હકથી મેળવી શકે છે ?",
            "a": [
                {"option": "સમાનતાના હક",      "correct": false},
                {"option": "માહિતી મેળવવાના હક",     "correct": true},
                {"option": "શોષણ સામેના હક",      "correct": false},
                {"option": "બંધારણીય ઇલાજના હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માહિતી મેળવવાના હક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "નીચેનામાંથી કયો હક નથી ?",
            "a": [
                {"option": "પર્યાવરણનું જતનનો",      "correct": true},
                {"option": "સમાનતાનો",     "correct": false},
                {"option": "ધાર્મિક સ્વાતંત્ર્યનો",      "correct": false},
                {"option": "બંધારણીય ઇલાજનો",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્યાવરણનું જતનનો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 16
            "q": "નીચેનામાંથી કઈ ફરજ નથી ?",
            "a": [
                {"option": "રાષ્ટ્ર્ગીતનો આદર કરવાની",      "correct": false},
                {"option": "એકતા અખંડિતતાનું રક્ષણ કરવાની",     "correct": false},
                {"option": "માહિતી મેળવવાની",      "correct": true},
                {"option": "જાહેર મિલકતોનું રક્ષણ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માહિતી મેળવવાની</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
           "q": "અખબાર સરકારની ટીકા ટીપ્પણી કયા હકના કારણે કરી શકે છે ?",
            "a": [
                {"option": "સમાનતાના હક",      "correct": false},
                {"option": "લેખન-વાણી સ્વાતંત્ર્યના હક",     "correct": true},
                {"option": "શોષણ સામેના હક",      "correct": false},
                {"option": "બંધારણીય ઇલાજના હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લેખન-વાણી સ્વાતંત્ર્યનો હક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "'રામજીભાઈ પોતાના સગીર વયના છોકરાને ઘરે મજૂરી કરાવે છે.' આમાં હક કોણ ગુમાવે છે ?",
            "a": [
                {"option": "છોકરો",      "correct": true},
                {"option": "રામજીભાઈ",     "correct": false},
                {"option": "છોકરો અને રામજીભાઈ બન્ને",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: છોકરો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
	{ // Question 19
            "q": "'રામજીભાઈ પોતાના સગીર વયના છોકરાને ઘરે મજૂરી કરાવે છે.' આમાં ફરજ કોણે ગુમાવી છે ?",
            "a": [
                {"option": "છોકરાએ",      "correct": false},
                {"option": "રામજીભાઈએ",     "correct": true},
                {"option": "છોકરા અને રામજીભાઈ બન્નેએ",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રામજીભાઈએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "'સવિતાબાને મંદિરમાં કેટલાક લોકો દર્શન કરવા દેતા નથી.' આમાં હક કોણે ગુમાવ્યો ?",
            "a": [
                {"option": "દર્શન ન કરવા દેનાર લોકોએ",      "correct": false},
                {"option": "સવિતાબાએ",     "correct": true},
                {"option": "સવિતાબા અને દર્શન ન કરવા દેનાર લોકો બન્નેએ",      "correct": false},
                {"option": "એકેય નહીં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સવિતાબાએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 21
            "q": "'સવિતાબાને મંદિરમાં કેટલાક લોકો દર્શન કરવા દેતા નથી.' આમાં ફરજ કોણે ગુમાવી ?",
            "a": [
                {"option": "દર્શન ન કરવા દેનાર લોકોએ",      "correct": true},
                {"option": "સવિતાબાએ",     "correct": false},
                {"option": "સવિતાબા અને દર્શન ન કરવા દેનાર લોકો બન્નેએ",      "correct": false},
                {"option": "એકેય નહીં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દર્શન ન કરવા દેનાર લોકોએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "'મનિન્દરસિંહને ખાનગી શાળામાં પ્રવેશ મળતો નથી' આમાં હક કોણે ગુમાવ્યો ? ",
            "a": [
                {"option": "મનિન્દરસિંહે",      "correct": true},
                {"option": "શાળાના આચાર્યશ્રીએ",     "correct": false},
                {"option": "મનિન્દરસિંહ અને શાળાના આચાર્યશ્રી બન્નેએ",      "correct": false},
                {"option": "એકેય નહીં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મનિન્દરસિંહે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 23
            "q": "'મનિન્દરસિંહને ખાનગી શાળામાં પ્રવેશ મળતો નથી' આમાં ફરજ કોણે ગુમાવી ? ",
            "a": [
                {"option": "મનિન્દરસિંહે",      "correct": false},
                {"option": "શાળાના આચાર્યશ્રીએ",     "correct": true},
                {"option": "મનિન્દરસિંહ અને શાળાના આચાર્યશ્રી બન્નેએ",      "correct": false},
                {"option": "એકેય નહીં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાળાના આચાર્યશ્રીએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 24
            "q": "'જોસેફની અરજીનો મામલતદાર નિકાલ કરતા નથી' આમાં હક કોણે ગુમાવ્યો ?",
            "a": [
                {"option": "મામલતદારે",      "correct": false},
                {"option": "જોસેફ મામલતદાર બન્નેએ",     "correct": false},
                {"option": "જોસેફે",      "correct": true},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જોસેફે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "'જોસેફની અરજીનો મામલતદાર નિકાલ કરતા નથી' આમાં ફરજ કોણે ગુમાવી ?",
            "a": [
                {"option": "મામલતદારે",      "correct": true},
                {"option": "જોસેફ મામલતદાર બન્નેએ",     "correct": false},
                {"option": "જોસેફે",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મામલતદારે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 26
            "q": "'પેસ્તનજીના પાડોશી રમેશભાઈ જોરથી ટેપ વગાડે છે.' આમાં હક કોણે ગુમાવ્યો ?",
            "a": [
                {"option": "પેસ્તનજીએ",      "correct": true},
                {"option": "રમેશભાઈએ",     "correct": false},
                {"option": "પેસ્તનજી અને રમેશભાઈ બન્નેએ",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પેસ્તનજીએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 27
           "q": "'પેસ્તનજીના પાડોશી રમેશભાઈ જોરથી ટેપ વગાડે છે.' આમાં ફરજ કોણે ગુમાવી ?",
            "a": [
                {"option": "પેસ્તનજીએ",      "correct": false},
                {"option": "રમેશભાઈએ",     "correct": true},
                {"option": "પેસ્તનજી અને રમેશભાઈ બન્નેએ",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રમેશભાઈએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 28
            "q": "'ભરત રમેશને શાંતિથી ભણવા દેતો નથી.' આમાં હક કોણે ગુમાવ્યો ?",
            "a": [
                {"option": "ભરતે",      "correct": false},
                {"option": "રમેશે",     "correct": true},
                {"option": "રવિએ",      "correct": false},
                {"option": "ભરત અને રમેશ બન્નેએ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રમેશે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "'ભરત રમેશને શાંતિથી ભણવા દેતો નથી.' આમાં ફરજ કોણે ગુમાવી ?",
            "a": [
                {"option": "ભરતે",      "correct": true},
                {"option": "રમેશે",     "correct": false},
                {"option": "રવિએ",      "correct": false},
                {"option": "ભરત અને રમેશ બન્નેએ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભરતે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 30
            "q": "વેરો ભરવાથી જ શાનો હક મળી શકે ?",
            "a": [
                {"option": "રમવાનો",      "correct": false},
                {"option": "જમવાનો",     "correct": false},
                {"option": "જાહેર સુવિધાનો",      "correct": true},
                {"option": "ફરવાનો",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાહેર સુવિધાનો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 1
            "q": "ચંદ્રગુપ્ત બીજાએ શાની શરૂઆત કરી ?",
            "a": [
                {
                    "option": "શક સંવત",
                    "correct": false
                },
                {
                    "option": "વિક્રમ સંવત",
                    "correct": true
                },
                {
                    "option": "ઈસ્વીસન",
                    "correct": false
                },
                {
                    "option": "ગુપ્ત સંવત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિક્રમ સંવત</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ચંદ્રગુપ્ત પહેલાની પત્નીનું નામ શું હતું ?",
            "a": [
                {
                    "option": "કુમારી",
                    "correct": false
                },
                {
                    "option": "કર્વી",
                    "correct": false
                },
                {
                    "option": "કુમારદેવી",
                    "correct": true
                },
                {
                    "option": "કુમારિકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કુમારદેવી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ચંદ્રગુપ્ત પહેલા પછી કોણ ગાદીએ આવ્યું ?",
            "a": [
                {
                    "option": "સમુદ્રગુપ્ત",
                    "correct": true
                },
                {
                    "option": "ચંદ્રગુપ્ત બીજો",
                    "correct": false
                },
                {
                    "option": "શ્રીગુપ્ત",
                    "correct": false
                },
                {
                    "option": "સ્કંદગુપ્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સમુદ્રગુપ્ત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "મગધમાં ગુપ્તવંશના સ્થાપક ક્યા રાજા હતા ?",
            "a": [
                {
                    "option": "સમુદ્રગુપ્ત",
                    "correct": false
                },
                {
                    "option": "ચંદ્રગુપ્ત બીજો",
                    "correct": false
                },
                {
                    "option": "શ્રીગુપ્ત",
                    "correct": true
                },
                {
                    "option": "ચંદ્રગુપ્ત પહેલો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શ્રીગુપ્ત</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "સમુદ્રગુપ્ત પછી કોણ ગાદીએ આવ્યું ?",
            "a": [
                {
                    "option": "શ્રીગુપ્ત",
                    "correct": false
                },
                {
                    "option": "ચંદ્રગુપ્ત પહેલો",
                    "correct": false
                },
                {
                    "option": "સમુદ્રગુપ્ત",
                    "correct": false
                },
                {
                    "option": "ચંદ્રગુપ્ત બીજો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચંદ્રગુપ્ત બીજો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ચંદ્રગુપ્ત બીજાનું બીજું નામ શું હતું ?",
            "a": [
                {
                    "option": "દેવગુપ્ત",
                    "correct": true
                },
                {
                    "option": "રાજગુપ્ત",
                    "correct": false
                },
                {
                    "option": "વીરગુપ્ત",
                    "correct": false
                },
                {
                    "option": "ભારગુપ્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દેવગુપ્ત</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ચંદ્રગુપ્ત બીજાએ શક ક્ષત્રપ વંશનો અંત આણ્યા પછી ક્યું બિરૂદ ધારણ કર્યું ? ",
            "a": [
                {
                    "option": "શિકારી",
                    "correct": false
                },
                {
                    "option": "મક્કારી",
                    "correct": false
                },
                {
                    "option": "શકારી",
                    "correct": true
                },
                {
                    "option": "કવાલી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  શકારી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "સમ્રાટ સમુદ્રગુપ્તની માહિતી કયા શહેરના પ્રસિદ્ધ સ્તંભ પરથી મળે છે ?",
            "a": [
                {
                    "option": "અલાહાબાદના",
                    "correct": true
                },
                {
                    "option": "દિલ્લીના",
                    "correct": false
                },
                {
                    "option": "ઉજ્જૈનના",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અલાહાબાદના</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ગુપ્તવંશના કયા રાજાએ કવિરાજનું બિરુદ મેળવ્યું હતું ?",
            "a": [
                {
                    "option": "ચંદ્રગુપ્ત બીજાએ",
                    "correct": false
                },
                {
                    "option": "સમુદ્રગુપ્તે",
                    "correct": true
                },
                {
                    "option": "ભાનુગુપ્તે ",
                    "correct": false
                },
                {
                    "option": "ચંદ્રગુપ્ત પહેલાએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સમુદ્રગુપ્તે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ગુપ્ત સામ્રાજ્યની સાચી મહત્તાનો સર્જક ક્યો રાજા હતો ?",
            "a": [
                {
                    "option": "બુદ્ધગુપ્ત",
                    "correct": false
                },
                {
                    "option": "સમુદ્રગુપ્ત",
                    "correct": true
                },
                {
                    "option": "કુમારગુપ્ત",
                    "correct": false
                },
                {
                    "option": "સ્કંદગુપ્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સમુદ્રગુપ્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "ક્યા ચીની પ્રવાસીની નોંધપોથીમાં ચંદ્રગુપ્ત બીજાનો ઉલ્લેખ થયેલો છે?",
            "a": [
                {
                    "option": "હ્યુ-એન-ત્સાંગની",
                    "correct": false
                },
                {
                    "option": "ઇત્સિંગની",
                    "correct": false
                },
                {
                    "option": "ફાહિયાનની",
                    "correct": true
                },
                {
                    "option": "સેલ્યુક્સની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફાહિયાનની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ક્યા યુગને ભારતીય સંસ્કૃતિનો 'સુવર્ણયુગ' કહેવામાં આવે છે ?",
            "a": [
                {
                    "option": "કુષાણયુગને",
                    "correct": false
                },
                {
                    "option": "મૌર્યયુગને",
                    "correct": false
                },
                {
                    "option": "ચોલયુગને",
                    "correct": false
                },
                {
                    "option": "ગુપ્તયુગને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુપ્તયુગને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ગુપ્તયુગ દરમિયાન કયા ધર્મનું પુનરુત્થાન થયું હતું ?",
            "a": [
                {
                    "option": "હિંદુ",
                    "correct": true
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "શીખ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હિંદુ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ક્યા મહાકવિનાં નાટકો અને કાવ્યો વિશ્વસાહિત્યમાં અગ્રસ્થાન ધરાવે છે ?",
            "a": [
                {
                    "option": "ભવભૂતિનાં",
                    "correct": false
                },
                {
                    "option": "બાણનાં",
                    "correct": false
                },
                {
                    "option": "કાલિદાસનાં",
                    "correct": true
                },
                {
                    "option": "ભરતમુનિનાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાલિદાસનાં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ગુપ્તયુગમાં કયા મહાન ગણિતશાસ્ત્રીએ દશાંશ પદ્ધતિ અને શૂન્યની શોધ કરી હતી ?",
            "a": [
                {
                    "option": "ભાસ્કરાચાર્યે",
                    "correct": false
                },
                {
                    "option": "વરાહમિહિરે",
                    "correct": false
                },
                {
                    "option": "બ્રહ્મગુપ્તે",
                    "correct": false
                },
                {
                    "option": "આર્યભટ્ટે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આર્યભટ્ટે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ગુપ્તયુગમાં કયા મહાન ગણિતશાસ્ત્રી થઈ ગયા ?",
            "a": [
                {
                    "option": "ભાસ્કરાચાર્ય",
                    "correct": false
                },
                {
                    "option": "વરાહમિહિર",
                    "correct": false
                },
                {
                    "option": "બ્રહ્મગુપ્ત",
                    "correct": false
                },
                {
                    "option": "આર્યભટ્ટ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આર્યભટ્ટ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "નીચેનામાંથી પ્રાચીન ભારતના મહાન વૈજ્ઞાનિક કોણ હતા ?",
            "a": [
                {
                    "option": "વરાહમિહિર",
                    "correct": true
                },
                {
                    "option": "આર્યભટ્ટ",
                    "correct": false
                },
                {
                    "option": "ભાસ્કરાચાર્ય",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધાયન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વરાહમિહિર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "વરાહમિહિરે ક્યો ગ્રંથ લખ્યો હતો ?",
            "a": [
                {
                    "option": "બ્રહ્માંડસંહિતા",
                    "correct": false
                },
                {
                    "option": "ખગોળસંહિતા",
                    "correct": false
                },
                {
                    "option": "બૃહદ્સંહિતા",
                    "correct": true
                },
                {
                    "option": "જ્યોતિષસંહિતા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બૃહદ્સંહિતા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગુપ્ત સામ્રાજ્યના વહીવટનું સૌથી નાનું એકમ કયું હતું ?",
            "a": [
                {
                    "option": "પત્રક",
                    "correct": false
                },
                {
                    "option": "ગ્રામ",
                    "correct": true
                },
                {
                    "option": "વિષય",
                    "correct": false
                },
                {
                    "option": "પ્રાંત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગ્રામ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "શ્રીગુપ્તના ઉત્તરાધિકારી તરીકે કયો રાજા ગુપ્ત વંશની ગાદીએ આવ્યો ?",
            "a": [
                {
                    "option": "સમુદ્રગુપ્ત",
                    "correct": false
                },
                {
                    "option": "ચંદ્રગુપ્ત બીજો",
                    "correct": false
                },
                {
                    "option": "ઘટોત્કચ",
                    "correct": true
                },
                {
                    "option": "સ્કંદગુપ્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઘટોત્કચ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ઘટોત્કચ ગુપ્ત પછી કોણ ગાદીએ આવ્યું ?",
            "a": [
                {
                    "option": "સમુદ્રગુપ્ત",
                    "correct": false
                },
                {
                    "option": "ચંદ્રગુપ્ત બીજો",
                    "correct": false
                },
                {
                    "option": "ચંદ્રગુપ્ત પહેલો",
                    "correct": true
                },
                {
                    "option": "સ્કંદગુપ્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચંદ્રગુપ્ત પહેલો</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "ચંદ્રગુપ્ત પહેલો પાટલીપુત્રની ગાદીએ ક્યારે આવ્યો ?",
            "a": [
                {
                    "option": "ઈ.સ. 330માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 430માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 350માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 530માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 330માં</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ચંદ્રગુપ્ત પહેલાએ કઈ જાતિની રાજકન્યા સાથે લગ્ન કર્યા ?",
            "a": [
                {
                    "option": "શાક્ય",
                    "correct": false
                },
                {
                    "option": "વિદેહ",
                    "correct": false
                },
                {
                    "option": "લિચ્છવી",
                    "correct": true
                },
                {
                    "option": "મલ્લ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લિચ્છવી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ચંદ્રગુપ્ત પહેલાએ મગધની પાસે શું જીતી લઈ મગધનો વિસ્તાર વધાર્યો ?",
            "a": [
                {
                    "option": "પ્રયાસ-સંકેત",
                    "correct": false
                },
                {
                    "option": "પ્રયાસ-સાકેત",
                    "correct": false
                },
                {
                    "option": "પ્રયાગ-સંકેત",
                    "correct": false
                },
                {
                    "option": "પ્રયાગ-સાકેત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રયાગ-સાકેત</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ચંદ્રગુપ્ત પહેલાએ પોતાની વહીવટી કુશળતાઓના પરિંણામે કયુ બિરુદ ધારણ કર્યું ?",
            "a": [
                {
                    "option": "મહારાજાધિરાજ",
                    "correct": true
                },
                {
                    "option": "મહાધિપતિ",
                    "correct": false
                },
                {
                    "option": "મહાદેવ",
                    "correct": false
                },
                {
                    "option": "મહાધિરાજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહારાજાધિરાજ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ચંદ્રગુપ્ત પહેલાએ કઈ સંવતની શરૂઆત કરી ?",
            "a": [
                {
                    "option": "શક સંવત",
                    "correct": false
                },
                {
                    "option": "વિક્રમ સંવત",
                    "correct": false
                },
                {
                    "option": "ઈસ્વીસન",
                    "correct": false
                },
                {
                    "option": "ગુપ્ત સંવત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુપ્ત સંવત</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ચંદ્રગુપ્તના રાજ્યારોહણની અને સત્તાપ્રાપ્તિના શુભ પ્રસંગની યાદમાં શાની શરૂઆત થઈ હતી ?",
            "a": [
                {
                    "option": "શક સંવત",
                    "correct": false
                },
                {
                    "option": "વિક્રમ સંવત",
                    "correct": false
                },
                {
                    "option": "ઈસ્વીસન",
                    "correct": false
                },
                {
                    "option": "ગુપ્ત સંવત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુપ્ત સંવત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "કયા સંવતના આરંભને કારણે હિંદના ઇતિહાસમાં કાળગણના અને કાળક્રમ અનુસાર ઐતિહાસિક બનાવોની ગોઠવણી શક્ય બની ?",
            "a": [
                {
                    "option": "શક સંવત",
                    "correct": false
                },
                {
                    "option": "વિક્રમ સંવત",
                    "correct": false
                },
                {
                    "option": "ઈસ્વીસન",
                    "correct": false
                },
                {
                    "option": "ગુપ્ત સંવત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુપ્ત સંવત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "સૌરાષ્ટ્રના કયા રાજ્યના શાસકોએ ગુપ્ત સંવતનો સ્વીકાર કર્યો હતો ?",
            "a": [
                {
                    "option": "વલભી રાજ્યના",
                    "correct": true
                },
                {
                    "option": "અમદાવાદ રાજ્યના",
                    "correct": false
                },
                {
                    "option": "જૂનાગઢ રાજ્યના",
                    "correct": false
                },
                {
                    "option": "રાજકોટ રાજ્યના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વલભી રાજ્યના</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ચંદ્રગુપ્ત પહેલાએ પોતાના લગ્નની યાદમાં શું કરાવ્યું હતું ?",
            "a": [
                {
                    "option": "ચાંદીના સિક્કા પડાવ્યા",
                    "correct": false
                },
                {
                    "option": "સોનાના સિક્કા પડાવ્યા",
                    "correct": true
                },
                {
                    "option": "તાંબાના સિક્કા પડાવ્યા",
                    "correct": false
                },
                {
                    "option": "જસતના સિક્કા પડાવ્યા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સોનાના સિક્કા પડાવ્યા</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "સમુદ્રગુપ્તે દક્ષિણના લગભગ કેટલા રાજાઓને હરાવ્યા હતા ?",
            "a": [
                {
                    "option": "12",
                    "correct": false
                },
                {
                    "option": "11",
                    "correct": false
                },
                {
                    "option": "13",
                    "correct": true
                },
                {
                    "option": "14",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 13</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "ગુપ્તવંશના ક્યા રાજાએ અશ્વમેઘ યજ્ઞ કર્યો હતો ?",
            "a": [
                {
                    "option": "સમુદ્રગુપ્ત",
                    "correct": true
                },
                {
                    "option": "ચંદ્રગુપ્ત બીજો",
                    "correct": false
                },
                {
                    "option": "શ્રીગુપ્ત",
                    "correct": false
                },
                {
                    "option": "સ્કંદગુપ્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમુદ્રગુપ્ત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "સમુદ્રગુપ્ત સિક્કાઓમાં શું વગાડતો દર્શાવવામાં આવ્યો છે ? ",
            "a": [
                {
                    "option": "વીણા",
                    "correct": true
                },
                {
                    "option": "શરણાઇ",
                    "correct": false
                },
                {
                    "option": "ઢોલ",
                    "correct": false
                },
                {
                    "option": "તબલાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વીણા</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 34
            "q": "સમુદ્રગુપ્તે કેદ કરેલા રાજાઓને ડહાપણપૂર્વક કયા રાજા તરીકે પુન:સ્થાપિત કર્યા ?",
            "a": [
                {
                    "option": "ખંડેર રાજાઓ",
                    "correct": false
                },
                {
                    "option": "ખંડિયા રાજાઓ",
                    "correct": true
                },
                {
                    "option": "ખંડન રાજાઓ",
                    "correct": false
                },
                {
                    "option": "ખંજર રાજઓ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખંડિયા રાજાઓ</p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 35
            "q": "ચંદ્રગુપ્ત બીજો કયો ધર્મ પાળતો હતો ?",
            "a": [
                {
                    "option": "શૈવ",
                    "correct": false
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "વૈષ્ણવ",
                    "correct": true
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૈષ્ણવ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 36
            "q": "ચંદ્રગુપ્ત બીજાનો સેનાપતિ કોણ હતો ?",
            "a": [
                {
                    "option": "વરસેન",
                    "correct": false
                },
                {
                    "option": "આમ્રમ દેવ",
                    "correct": false
                },
                {
                    "option": "વટસેન",
                    "correct": false
                },
                {
                    "option": "આમ્રકાર દેવ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આમ્રકાર દેવ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "ચંદ્રગુપ્ત બીજાનો પરરાજ્યમંત્રી કોણ હતો ?",
            "a": [
                {
                    "option": "વરસેન",
                    "correct": true
                },
                {
                    "option": "આમ્રમ દેવ",
                    "correct": false
                },
                {
                    "option": "વટસેન",
                    "correct": false
                },
                {
                    "option": "આમ્રકાર દેવ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વરસેન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 38
            "q": "ચંદ્રગુપ્ત બીજાનો સેનાપતિ કયો ધર્મ પાળતો હતો ?",
            "a": [
                {
                    "option": "શૈવ",
                    "correct": false
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "વૈષ્ણવ",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બૌદ્ધ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 39
            "q": "ચંદ્રગુપ્ત બીજાનો પરરાજ્યમંત્રી કયો ધર્મ પાળતો હતો ?",
            "a": [
                {
                    "option": "શૈવ",
                    "correct": true
                },
                {
                    "option": "જૈન",
                    "correct": false
                },
                {
                    "option": "વૈષ્ણવ",
                    "correct": false
                },
                {
                    "option": "બૌદ્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શૈવ</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 40
            "q": "ચંદ્રગુપ્ત બીજાના દરબારમાં કેટલાં રત્નો હતા ?",
            "a": [
                {
                    "option": "સાત",
                    "correct": false
                },
                {
                    "option": "આઠ",
                    "correct": false
                },
                {
                    "option": "દસ",
                    "correct": false
                },
                {
                    "option": "નવ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નવ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 41
            "q": "અમરકોષ કોણે બનાવ્યો હતો ?",
            "a": [
                {
                    "option": "અમરસિંહે",
                    "correct": true
                },
                {
                    "option": "કાલિદાસે",
                    "correct": false
                },
                {
                    "option": "વરાહમિહિરે",
                    "correct": false
                },
                {
                    "option": "વૈતાલ ભટ્ટે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અમરસિંહે</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "ચંદ્રગુપ્ત બીજાના દરબારમાં કોણ રત્ન તરીકે નહોતું ?",
            "a": [
                {
                    "option": "બીરબલ",
                    "correct": true
                },
                {
                    "option": "કાલિદાસ",
                    "correct": false
                },
                {
                    "option": "વરાહમિહિર",
                    "correct": false
                },
                {
                    "option": "વૈતાલ ભટ્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બીરબલ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "ચંદ્રગુપ્ત બીજાનું અવસાન કયા અરસામાં થયું ?",
            "a": [
                {
                    "option": "ઈ.સ. 330માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 430માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ. 414માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ. 530માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈ.સ. 414માં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "ગુપ્તયુગમાં પ્રશસ્તિઓ, શિલાલેખો અને તામ્રપત્રો આ બધું કઈ ભાષામાં લખાતું ?",
            "a": [
                {
                    "option": "હિન્દી",
                    "correct": false
                },
                {
                    "option": "અંગ્રેજી",
                    "correct": false
                },
                {
                    "option": "પાલિ",
                    "correct": false
                },
                {
                    "option": "સંસ્કૃત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંસ્કૃત</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 45
            "q": "ગુપ્તયુગમાં કઈ ભાષાને રાજ્યાશ્રય મળ્યો હતો ?",
            "a": [
                {
                    "option": "હિન્દી",
                    "correct": false
                },
                {
                    "option": "અંગ્રેજી",
                    "correct": false
                },
                {
                    "option": "પાલિ",
                    "correct": false
                },
                {
                    "option": "સંસ્કૃત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંસ્કૃત</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 46
            "q": "ગુપ્તયુગમાં વહીવટીતંત્રમાં કોણ કેન્દ્રસ્થાને હતું ?",
            "a": [
                {
                    "option": "પુત્ર",
                    "correct": false
                },
                {
                    "option": "સમ્રાટ",
                    "correct": true
                },
                {
                    "option": "સેનાપતિ",
                    "correct": false
                },
                {
                    "option": "પ્રધાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમ્રાટ</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 47
            "q": "ગુપ્તયુગમાં પ્રાંત પછીના એકમને શાના તરીકે ઓળખવામાં આવતું ?",
            "a": [
                {
                    "option": "ગ્રામ",
                    "correct": false
                },
                {
                    "option": "વિષય",
                    "correct": true
                },
                {
                    "option": "શહેર",
                    "correct": false
                },
                {
                    "option": "તાલુકો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિષય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 48
            "q": "ગુપ્તયુગમાં સૌથી નાનું વહીવટી એકમ કયું છે ?",
            "a": [
                {
                    "option": "ગ્રામ",
                    "correct": true
                },
                {
                    "option": "વિષય",
                    "correct": false
                },
                {
                    "option": "શહેર",
                    "correct": false
                },
                {
                    "option": "તાલુકો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રામ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 49
            "q": "ગુપ્તયુગમાં ગ્રામનો વહીવટ કોણ કરતું હતું ?",
            "a": [
                {
                    "option": "વિવિધ વર્ગોના પ્રતિનિધિની ગ્રામ સમિતિ",
                    "correct": true
                },
                {
                    "option": "ગ્રામ પંચાયત",
                    "correct": false
                },
                {
                    "option": "તાલુકા પંચાયત",
                    "correct": false
                },
                {
                    "option": "નગર પંચાયત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિવિધ વર્ગોના પ્રતિનિધિની ગ્રામ સમિતિ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 50
            "q": "કોણે આયુર્વેદમાં ઘણાં સંશોધનો કર્યા ?",
            "a": [
                {
                    "option": "ભાસ્કરાચાર્યે",
                    "correct": false
                },
                {
                    "option": "વરાહમિહિરે",
                    "correct": false
                },
                {
                    "option": "વાગ્ભટ્ટે",
                    "correct": true
                },
                {
                    "option": "આર્યભટ્ટે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાગ્ભટ્ટે</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 51
            "q": "દિલ્હી પાસે કયો સ્તંભ ધાતુવિદ્યામાં અજબ સિદ્ધિ પુરવાર કરે છે ?",
            "a": [
                {
                    "option": "મોહાલીનો લોહસ્તંભ",
                    "correct": false
                },
                {
                    "option": "મોહનનો લોહસ્તંભ",
                    "correct": false
                },
                {
                    "option": "મેહરાલીનો લોહસ્તંભ",
                    "correct": true
                },
                {
                    "option": "જૂનાગઢનો લોહસ્તંભ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મેહરાલીનો લોહસ્તંભ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 52
            "q": "દિલ્હી પાસેના સ્તંભને કેટલા વર્ષ થવા આવ્યા છતાં હજુ સુધી કાટ લાગ્યો નથી ? ",
            "a": [
                {
                    "option": "1500 વર્ષ",
                    "correct": false
                },
                {
                    "option": "1400 વર્ષ",
                    "correct": false
                },
                {
                    "option": "1300 વર્ષ",
                    "correct": false
                },
                {
                    "option": "1600 વર્ષ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1600 વર્ષ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
	{ // Question 1
            "q": "પૃથ્વીના દક્ષિણ ધ્રુવનો વિસ્તાર કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "હવાઈ ટાપુઓ",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": true
                },
                {
                    "option": "લૉંગ આઇલૅન્ડ",
                    "correct": false
                },
                {
                    "option": "આર્કટિક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઍન્ટાર્કટિકા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ઍન્ટાર્કટિકા ખંડ પૃથ્વીની સપાટીનો કેટલા ટકા બરફ ધરાવે છે ?",
            "a": [
                {
                    "option": "100 ટકા",
                    "correct": false
                },
                {
                    "option": "75 ટકા",
                    "correct": false
                },
                {
                    "option": "80 ટકા",
                    "correct": false
                },
                {
                    "option": "90 ટકા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  90 ટકા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "દક્ષિણ ધ્રુવના અંતિમ બિંદુએ ક્ષિતિજની સપાટીથી નીકળતાં સૂર્યકિરણોના પરાવર્તનથી આકાશમાં દેખાતા રંગબેરંગી પટ્ટાઓને શું કહે છે ?",
            "a": [
                {
                    "option": "સુજલ જ્યોતિ",
                    "correct": false
                },
                {
                    "option": "સુપ્રભ જ્યોતિ",
                    "correct": false
                },
                {
                    "option": "સુમેરુ જ્યોતિ",
                    "correct": true
                },
                {
                    "option": "સુધાંશુ જ્યોતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુમેરુ જ્યોતિ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ઍન્ટાર્કટિકા ખંડને બીજા ક્યા નામે ઓળખવામાં આવે છે ?",
            "a": [
                {
                    "option": "પૅગ્વિન ભૂમિ",
                    "correct": true
                },
                {
                    "option": "કાંગારુ ભૂમિ",
                    "correct": false
                },
                {
                    "option": "યુકેલિપ્ટસ ભૂમિ",
                    "correct": false
                },
                {
                    "option": "ગ્રાનચાકો ભૂમિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પૅગ્વિન ભૂમિ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ઍન્ટાર્કટિકા ખંડમાં ભારતે આમાંથી કયું સંશોધન કેન્દ્ર સ્થાપ્યું છે ?",
            "a": [
                {
                    "option": "કાવેરી સંશોધન કેન્દ્ર ",
                    "correct": false
                },
                {
                    "option": "જમનોત્રી સંશોધન કેન્દ્ર",
                    "correct": false
                },
                {
                    "option": "ગંગોત્રી સંશોધન કેન્દ્ર",
                    "correct": true
                },
                {
                    "option": "એવરેસ્ટ સંશોધન કેન્દ્ર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગંગોત્રી સંશોધન કેન્દ્ર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ઑસ્ટ્રેલિયા ખંડની વસ્તી ભારતના કયા રાજ્યની વસ્તી જેટલી છે ?",
            "a": [
                {
                    "option": "આંધ્ર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "મધ્ય પ્રદેશ",
                    "correct": true
                },
                {
                    "option": "ઉત્તર પ્રદેશ",
                    "correct": false
                },
                {
                    "option": "અરુણાચલ પ્રદેશ ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મધ્ય પ્રદેશ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ઑસ્ટ્રેલિયાની કુલ વસ્તીના કેટલા ટકા લોકો મહાનગરોમાં વસે છે ?",
            "a": [
                {
                    "option": "60 ટકા",
                    "correct": false
                },
                {
                    "option": "75 ટકા",
                    "correct": false
                },
                {
                    "option": "90 ટકા",
                    "correct": true
                },
                {
                    "option": "85 ટકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  90 ટકા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ઑસ્ટ્રેલિયાના મધ્ય ભાગમાંથી ક્યું વૃત્ત પસાર થાય છે ?",
            "a": [
                {
                    "option": "દક્ષિણ ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  મકરવૃત્ત</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ઑસ્ટ્રેલિયા ખંડ દુનિયાની કુલ ભૂમિના કેટલા ટકા ભૂમિ ધરાવે છે ?",
            "a": [
                {
                    "option": "12 ટકા",
                    "correct": false
                },
                {
                    "option": "10 ટકા",
                    "correct": false
                },
                {
                    "option": "17 ટકા",
                    "correct": false
                },
                {
                    "option": "7 ટકા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  7 ટકા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ઑસ્ટ્રેલિયાના કેટલા ટકા લોકો સમુદ્રી ખોરાકની નિકાસ સાથે સંકળાયેલા છે ?",
            "a": [
                {
                    "option": "35 ટકા",
                    "correct": false
                },
                {
                    "option": "31 ટકા",
                    "correct": true
                },
                {
                    "option": "50 ટકા",
                    "correct": false
                },
                {
                    "option": "60 ટકા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  31 ટકા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "આમાંથી ક્યું શહેર ઑસ્ટ્રેલિયાની રાજધાની છે ?",
            "a": [
                {
                    "option": "કૅનબરા",
                    "correct": true
                },
                {
                    "option": "પર્થ",
                    "correct": false
                },
                {
                    "option": "સિડની",
                    "correct": false
                },
                {
                    "option": "મેલબર્ન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૅનબરા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ન્યૂઝીલૅન્ડની આબોહવા કયા દેશને મળતી આવે છે ?",
            "a": [
                {
                    "option": "કૅનેડા",
                    "correct": false
                },
                {
                    "option": "રશિયા",
                    "correct": false
                },
                {
                    "option": "નોર્વે",
                    "correct": false
                },
                {
                    "option": "ઇંગ્લૅન્ડ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઇંગ્લૅન્ડ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "પૃથ્વી પર કેટલા ખંડ આવેલા છે ?",
            "a": [
                {
                    "option": "પાંચ",
                    "correct": false
                },
                {
                    "option": "સાત",
                    "correct": true
                },
                {
                    "option": "છ",
                    "correct": false
                },
                {
                    "option": "આઠ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સાત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "ઑસ્ટ્રેલિયા અને ઍન્ટાર્કટિકા ખંડના શોધક કોણ હતા ?",
            "a": [
                {
                    "option": "કોલંબસે",
                    "correct": false
                },
                {
                    "option": "વાસ્કો-દ-ગામા",
                    "correct": false
                },
                {
                    "option": "કૅપ્ટન જેમ્સ કૂક",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કૅપ્ટન જેમ્સ કૂક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કયા ખંડમાં છ માસની રાત અને છ માસનો દિવસ હોય છે ?",
            "a": [
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                },
                {
                    "option": "યુરોપ",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઍન્ટાર્કટિકા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ક્યો ખંડ 'દરિયાઇ જીવોની સ્વર્ગભૂમિ' તરીકે ઓળખાય છે ?",
            "a": [
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                },
                {
                    "option": "યુરોપ",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઍન્ટાર્કટિકા</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ઑસ્ટ્રેલિયાનું વિશિષ્ટ પ્રાણી કયું છે ?",
            "a": [
                {
                    "option": "જિરાફ",
                    "correct": false
                },
                {
                    "option": "કાંગારુ",
                    "correct": true
                },
                {
                    "option": "હાથી",
                    "correct": false
                },
                {
                    "option": "વરુ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાંગારુ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ઍન્ટાર્કટિકાનું વિશિષ્ટ પક્ષી કયું છે ?",
            "a": [
                {
                    "option": "પૅગ્વિન",
                    "correct": true
                },
                {
                    "option": "શાહમૃગ",
                    "correct": false
                },
                {
                    "option": "ગીધ",
                    "correct": false
                },
                {
                    "option": "બતક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  પૅગ્વિન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "વિશ્વની સૌથી મોટી સીસાની ખાણ કઈ છે ?",
            "a": [
                {
                    "option": "કૂલગાર્ડી",
                    "correct": false
                },
                {
                    "option": "કૅલગુર્લી",
                    "correct": false
                },
                {
                    "option": "બ્રોકન હિલ",
                    "correct": true
                },
                {
                    "option": "કાલિગુકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  બ્રોકન હિલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "આપણે કયા ખંડમાં રહીએ છીએ ?",
            "a": [
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": true
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": false
                },
                {
                    "option": "યુરોપ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  એશિયા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "પૃથ્વીનો ઉત્તર ધ્રુવનો વિસ્તાર કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "હવાઈ ટાપુઓ",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": false
                },
                {
                    "option": "લૉંગ આઇલૅન્ડ",
                    "correct": false
                },
                {
                    "option": "આર્કટિક",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આર્કટિક</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "ઍન્ટાર્કટિકા ખંડનો વિસ્તાર કેટલો છે ?",
            "a": [
                {
                    "option": "યુરોપ અને એશિયા જેટલો",
                    "correct": false
                },
                {
                    "option": "યુરોપ અને અમેરિકા જેટલો",
                    "correct": true
                },
                {
                    "option": "રશિયા અને અમેરિકા જેટલો",
                    "correct": false
                },
                {
                    "option": "યુરોપ અને રશિયા જેટલો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યુરોપ અને અમેરિકા જેટલો</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "ઍન્ટાર્કટિકા ખંડ કયા નામે પણ ઓળખાય છે ?",
            "a": [
                {
                    "option": "મહાકાય ભૂમિય જીવોની સ્વર્ગભૂમિ",
                    "correct": false
                },
                {
                    "option": "મહાકાય દરિયાઈ જીવોની નરકભૂમિ",
                    "correct": false
                },
                {
                    "option": "મહાકાય દરિયાઈ જીવોની સ્વર્ગભૂમિ",
                    "correct": true
                },
                {
                    "option": "મહાકાય ભૂમિય જીવોની નરકભૂમિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહાકાય દરિયાઈ જીવોની સ્વર્ગભૂમિ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "ઍન્ટાર્કટિકા ખંડ પર હિમવર્ષા, ઝાકળ, કરા, ધુમ્મસ અને બરફવર્ષા તેમજ તેજ બર્ફીલા તોફાની પવનોના લીધે શું અસર થાય છે ?",
            "a": [
                {
                    "option": "વનસ્પતિનો વિકાસ થાય છે",
                    "correct": false
                },
                {
                    "option": "વનસ્પતિ વધે છે",
                    "correct": false
                },
                {
                    "option": "વનસ્પતિને પૂરતી ગરમી મળે છે ",
                    "correct": false
                },
                {
                    "option": "વનસ્પતિનો વિકાસ થતો નથી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વનસ્પતિનો વિકાસ થતો નથી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "ઇ.સ. 1903 થી 1926 દરમિયાન કોણ સૌપ્રથમ દક્ષિણ ધ્રુવ સુધી પહોંચનાર વ્યક્તિ હતા ?",
            "a": [
                {
                    "option": "કૅપ્ટન જેમ્સ કૂક",
                    "correct": false
                },
                {
                    "option": "રોનાલ્ડ એમૂન્ડસન",
                    "correct": true
                },
                {
                    "option": "વાસ્કો-દ-ગામા",
                    "correct": false
                },
                {
                    "option": "ફિલન્ડર્સે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રોનાલ્ડ એમૂન્ડસન</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ઑસ્ટ્રેલિયા ખંડનું નામ કોણે આપ્યું ?",
            "a": [
                {
                    "option": "કૅપ્ટન જેમ્સ કૂક",
                    "correct": false
                },
                {
                    "option": "રોનાલ્ડ એમૂન્ડસન",
                    "correct": false
                },
                {
                    "option": "વાસ્કો-દ-ગામા",
                    "correct": false
                },
                {
                    "option": "ફિલન્ડર્સે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફિલન્ડર્સે</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "વિશ્વની પ્રાકૃતિક અજાયબી એવા ઑસ્ટ્રેલિયા ખંડના પરવાળાના ટાપુઓના સમૂહ કયા નામે ઓળખાય છે ? ",
            "a": [
                {
                    "option": "ગ્રેટ બેરિયર રીફ",
                    "correct": true
                },
                {
                    "option": "ગ્રેટ બેરિયર રીંછ",
                    "correct": false
                },
                {
                    "option": "ગ્રેટ બેટિયર રીફ",
                    "correct": false
                },
                {
                    "option": "ગ્રેટ બેટિયર રીંછ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રેટ બેરિયર રીફ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "નીચેનામાંથી ઑસ્ટ્રેલિયા ખંડમાં આવેલી સોનાની ખાણ કઈ છે ?",
            "a": [
                {
                    "option": "કુલગાર્ડ",
                    "correct": false
                },
                {
                    "option": "કાલગુર્લી",
                    "correct": true
                },
                {
                    "option": "બ્રોકન હિલ",
                    "correct": false
                },
                {
                    "option": "કાલિગુકી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાલગુર્લી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        } // no comma here



    ]
};
