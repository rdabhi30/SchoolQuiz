// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 7  વાતાવરણીય ફેરફાર",
        "subject": "સામાજિક વિજ્ઞાન",
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
            "q": "આમાંથી કયા દેશમાં સૌથી વધારે ગરમી પડે છે ?",
            "a": [
                {
                    "option": "ઈરાન",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલ",
                    "correct": false
                },
                {
                    "option": "ફિલિપીન્ઝ",
                    "correct": false
                },
                {
                    "option": "સાઉદી અરેબિયા",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાઉદી અરેબિયા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "આમાંથી કયા દેશમાં સૌથી વધારે ઠંડી પડે છે ?",
            "a": [
                {
                    "option": "નોર્વે",
                    "correct": true
                },
                {
                    "option": "રશિયા",
                    "correct": false
                },
                {
                    "option": "ઈરાન",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નોર્વે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "આમાંથી કયા દેશમાં સૌથી વધારે વરસાદ પડે છે ?",
            "a": [
                {
                    "option": "રશિયા",
                    "correct": false
                },
                {
                    "option": "બ્રાઝિલ",
                    "correct": false
                },
                {
                    "option": "ફિલિપાઇન્સ",
                    "correct": true
                },
                {
                    "option": "ઈરાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફિલિપાઇન્સ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ગ્રીનહાઉસ ઇફેક્ટમાં કયો વાયુ સક્રિય ભાગ ભજવે છે ?",
            "a": [
                {
                    "option": "હાઇડ્રોજન",
                    "correct": false
                },
                {
                    "option": "ઑક્સિજન",
                    "correct": false
                },
                {
                    "option": "નાઇટ્રોજન",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયૉક્સાઇડ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "આમાંથી કયા વાયુને ગ્રીનહાઉસ વાયુ તરીકે ઓળખવામાં આવે છે ?",
            "a": [
                {
                    "option": "ઑક્સિજનને",
                    "correct": false
                },
                {
                    "option": "હાઇડ્રોજનને",
                    "correct": false
                },
                {
                    "option": "મિથેનને",
                    "correct": true
                },
                {
                    "option": "નાઇટ્રોજનને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મિથેનને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ડાંગરની ખેતી દ્વારા કેટલા ટન મિથેન વાયુનું ઉત્સર્જન થાય છે ?",
            "a": [
                {
                    "option": "15 કરોડ ટન",
                    "correct": true
                },
                {
                    "option": "12 કરોડ ટન",
                    "correct": false
                },
                {
                    "option": "7 કરોડ ટન",
                    "correct": false
                },
                {
                    "option": "9 કરોડ ટન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 15 કરોડ ટન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "સેન્દ્રિય કચરો સડવાથી  કેટલા ટન મિથેન વાયુનું ઉત્સર્જન થાય છે ?",
            "a": [
                {
                    "option": "9 કરોડ ટન",
                    "correct": false
                },
                {
                    "option": "7 કરોડ ટન",
                    "correct": true
                },
                {
                    "option": "15 કરોડ ટન",
                    "correct": false
                },
                {
                    "option": "12 કરોડ ટન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 7 કરોડ ટન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "પશુઓના ઉચ્છવાસ અને ચયાપચયની ક્રિયા દ્વારા  કેટલા ટન મિથેન વાયુનું ઉત્સર્જન થાય છે ?",
            "a": [
                {
                    "option": "15 કરોડ ટન",
                    "correct": false
                },
                {
                    "option": "12 કરોડ ટન",
                    "correct": false
                },
                {
                    "option": "14 કરોડ ટન",
                    "correct": true
                },
                {
                    "option": "7 કરોડ ટન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 14 કરોડ ટન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "વિશ્વમાં 'ઓઝોન દિવસ' ક્યારે ઊજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "28 ઑક્ટોબરે",
                    "correct": false
                },
                {
                    "option": "16 સપ્ટેમ્બરે",
                    "correct": true
                },
                {
                    "option": "1 જાન્યુઆરીએ",
                    "correct": false
                },
                {
                    "option": "5 જૂને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 16 સપ્ટેમ્બરે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ઇ.સ. 1972માં પર્યાવરણને બચાવવા વિશ્વના દેશોની બેઠક કયા શહેરમાં મળી હતી ?",
            "a": [
                {
                    "option": "બ્રાઝિલના રિઓ દ જનીરો શહેરમાં ",
                    "correct": false
                },
                {
                    "option": "સ્વિડનના પાટનગર સ્ટૉકહોમમાં",
                    "correct": true
                },
                {
                    "option": "ડેન્માર્કના પાટનગર કોપનહૅગમાં",
                    "correct": false
                },
                {
                    "option": "ભારતના પાટનગર દિલ્લીમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વિડનના પાટનગર સ્ટૉકહોમમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "કોઈ પણ પ્રદેશના 35થી વધારે વર્ષોના સરેરાશ તાપમાન, ભેજ અને વરસાદની સ્થિતિને શું કહે છે ?",
            "a": [
                {
                    "option": "આબેહૂબ",
                    "correct": false
                },
                {
                    "option": "આબોહવા",
                    "correct": true
                },
                {
                    "option": "ગ્રીન હાઉસ ઇફેક્ટ",
                    "correct": false
                },
                {
                    "option": "હવામાન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આબોહવા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "સૂર્યનાં કિરણો સાથે આવતી ગરમીને વાતાવરણમાં આવ્યા પછી પૃથ્વી પર અથડાઈને પરાવર્તન પામી પાછી અવકાશમાં જવા ન દેવાય તેવી સ્થિતિને શું કહેવાય ?",
            "a": [
                {
                    "option": "આબેહૂબ",
                    "correct": false
                },
                {
                    "option": "આબોહવા",
                    "correct": false
                },
                {
                    "option": "ગ્રીન હાઉસ ઇફેક્ટ",
                    "correct": true
                },
                {
                    "option": "વાતાવરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્રીન હાઉસ ઇફેક્ટ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "આમાંથી કયા વાયુઓનો સમાવેશ ગ્રીન હાઉસ વાયુઓ તરીકે થતો નથી ?",
            "a": [
                {
                    "option": "નાઈટ્રસ ઑકસાઇડ",
                    "correct": false
                },
                {
                    "option": "ક્લોરોફ્લોરા કાર્બન",
                    "correct": false
                },
                {
                    "option": "હેલોકાર્બન",
                    "correct": false
                },
                {
                    "option": "ઓઝોન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઓઝોન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "વિશ્વના તાપમાનમાં છેલ્લા 100 વર્ષમાં તાપમાનમાં કેટલો વધારો થયો છે ?",
            "a": [
                {
                    "option": "0.6<sup>0</sup>સે. ",
                    "correct": true
                },
                {
                    "option": "0.7<sup>0</sup>સે.",
                    "correct": false
                },
                {
                    "option": "0.8<sup>0</sup>સે.",
                    "correct": false
                },
                {
                    "option": "0.5<sup>0</sup>સે.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 0.6<sup>0</sup>સે.</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "વિશ્વ હવામાન સંસ્થાનું અંગ્રેજી ટૂંકુ નામ શું છે ?",
            "a": [
                {
                    "option": "WTO",
                    "correct": false
                },
                {
                    "option": "WMO",
                    "correct": true
                },
                {
                    "option": "WHO",
                    "correct": false
                },
                {
                    "option": "WWW",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: WMO</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ક્યો વાયુ વધવાથી પૃથ્વીનું વાતાવરણ ઝડપથી ગરમ થઈ રહ્યું છે ?",
            "a": [
                {
                    "option": "નાઈટ્રસ ઑકસાઇડ",
                    "correct": false
                },
                {
                    "option": "હેલોકાર્બન",
                    "correct": false
                },
                {
                    "option": "કાર્બન ડાયૉક્સાઇડ",
                    "correct": true
                },
                {
                    "option": "ક્લોરોફ્લોરા કાર્બન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાર્બન ડાયૉક્સાઇડ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "CFCનું ઉત્સર્જન કયા ઉપકરણથી વધુ થાય છે ?",
            "a": [
                {
                    "option": "ધાતુના",
                    "correct": false
                },
                {
                    "option": "લાકડાના",
                    "correct": false
                },
                {
                    "option": "માટીના",
                    "correct": false
                },
                {
                    "option": "ઈલેક્ટ્રોનિકના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈલેક્ટ્રોનિકના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "વિશ્વમાં નાગરિક કેટલા ટન સરેરાશ કાર્બનવાયુ છોડે છે ?",
            "a": [
                {
                    "option": "2.5 મેટ્રીકટન",
                    "correct": false
                },
                {
                    "option": "3.5 મેટ્રીકટન",
                    "correct": false
                },
                {
                    "option": "4.5 મેટ્રીકટન",
                    "correct": true
                },
                {
                    "option": "1.2 મેટ્રીકટન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4.5 મેટ્રીકટન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ભારતનો નાગરિક કેટલા ટન સરેરાશ કાર્બનવાયુ છોડે છે ?",
            "a": [
                {
                    "option": "2.5 મેટ્રીકટન",
                    "correct": false
                },
                {
                    "option": "3.5 મેટ્રીકટન",
                    "correct": false
                },
                {
                    "option": "4.5 મેટ્રીકટન",
                    "correct": false
                },
                {
                    "option": "1.2 મેટ્રીકટન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 1.2 મેટ્રીકટન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "અમેરિકાનો નાગરિક કેટલા ટન સરેરાશ કાર્બનવાયુ છોડે છે ?",
            "a": [
                {
                    "option": "33.5 મેટ્રીકટન",
                    "correct": false
                },
                {
                    "option": "20.6 મેટ્રીકટન",
                    "correct": true
                },
                {
                    "option": "25.5 મેટ્રીકટન",
                    "correct": false
                },
                {
                    "option": "20.4 મેટ્રીકટન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 20.6 મેટ્રીકટન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 21
            "q": "એક માઇક્રોનથી દસ માઈક્રોન આકાર ધરાવતા સૂક્ષ્મકણોને શું કહે છે ?",
            "a": [
                {
                    "option": "પેન્સિલ",
                    "correct": false
                },
                {
                    "option": "પૅરોસેલ",
                    "correct": false
                },
                {
                    "option": "ઍરોસેલ",
                    "correct": true
                },
                {
                    "option": "ઍરોસિલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍરોસેલ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "નીચેનામાંથી કઈ ગ્લૉબલ વૉર્મિંગની અસર નથી ?",
            "a": [
                {
                    "option": "હિમનદીનું પીગળવું.",
                    "correct": false
                },
                {
                    "option": "વૃક્ષને કાપવું.",
                    "correct": true
                },
                {
                    "option": "મધપૂડાનું નામ શેષ થઈ જવું.",
                    "correct": false
                },
                {
                    "option": "પક્ષીઓની અમુક જાતિનું લુપ્ત થવું.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૃક્ષને કાપવું.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "નીચેનામાંથી કયો ગ્લૉબલ વૉર્મિંગથી બચવાનો ઉપાય નથી ?",
            "a": [
                {
                    "option": "CNGનો વપરાશ ઘટાડવો.",
                    "correct": true
                },
                {
                    "option": "વસતિવૃદ્ધિ અટકાવવી.",
                    "correct": false
                },
                {
                    "option": "પોલીથીન બૅગનો ઉપયોગ ટાળવો.",
                    "correct": false
                },
                {
                    "option": "સજીવ ખેતી અપનાવવી.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: CNGનો વપરાશ ઘટાડવો.</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "તાપમાન વધતું અટકાવવા શું જરૂરી બન્યું છે ?",
            "a": [
                {
                    "option": "સંપત્તિનો વિવેકપૂર્વક ઉપયોગ",
                    "correct": true
                },
                {
                    "option": "સંપત્તિનો આડેધડ ઉપયોગ",
                    "correct": false
                },
                {
                    "option": "સંપત્તિનો અપૂર્ણ ઉપયોગ",
                    "correct": false
                },
                {
                    "option": "સંપત્તિનો અયોગ્ય ઉપયોગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સંપત્તિનો વિવેકપૂર્વક ઉપયોગ</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "પૃથ્વીની ચારે બાજુ વીંટળાઈને આવેલા હવાના આવરણને શું કહે છે ?",
            "a": [
                {
                    "option": "જીવાવરણ",
                    "correct": false
                },
                {
                    "option": "વાતાવરણ",
                    "correct": true
                },
                {
                    "option": "મૃદાવરણ",
                    "correct": false
                },
                {
                    "option": "જલાવરણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાતાવરણ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "કોઈ પણ પ્રદેશના તાપમાન, ભેજ અને વરસાદની ટૂંકાગાળાની સરેરાશ સ્થિતિને શું કહે છે ?",
            "a": [
                {
                    "option": "આબેહૂબ",
                    "correct": false
                },
                {
                    "option": "આબોહવા",
                    "correct": false
                },
                {
                    "option": "ગ્રીન હાઉસ ઇફેક્ટ",
                    "correct": false
                },
                {
                    "option": "હવામાન",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હવામાન</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here 
    ]
};
