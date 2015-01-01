// Put all your page JS here
var schoolname = 'શ્રી વસ્તડી પ્રાથમિક શાળા, તા.વઢવાણ, જિ. સુરેન્દ્રનગર';
var authorname = 'મહેન્દ્રસિંહ મનુભાઈ સોલંકી';
var quizname = 'સામાજિક વિજ્ઞાન, ધોરણ-8, સત્ર-1';
var dynamicquizname = '';
var studentname = '';
var standard = '8';
var subject = 'સામાજિક વિજ્ઞાન';
var showResultsheet = true;  // true or false

var defaults = {
    checkAnswerText: 'જવાબ ચકાસો',
    nextQuestionText: 'આગળ &raquo;',
    backButtonText: '',
    tryAgainText: '',
    skipStartButton: false,
    numberOfQuestions: 20,
    randomSort: true,
    randomSortQuestions: true,
    randomSortAnswers: true,
    preventUnanswered: true,
    completionResponseMessaging: false,
    disableResponseMessaging: false
};

$(function () {
    "use strict";
    $.getScript("students.js", function (data, textStatus, jqxhr) {
        $("#studentName").html(getStudentList());
    });
    document.title = quizname;
    //console.log(defaults);
    $('.schoolname h1').html(schoolname);
    $('.author').html(authorname);
    $('.standard').html(standard);
    $('.subject').html(subject);
    var loc = window.location.href;
    var output = loc.split('/').pop().split('.').shift();
    var t_file = output + ".js";
    $.getScript(t_file, function (data, textStatus, jqxhr) {
        $(".saveresultstatus").hide();
        $('#Quiz').slickQuiz(defaults);
        $('.quizdate').html(getcurrentdate());
    });

    function getStudentList() {
        var s = '';
        var i = 0;
        //console.log(studentsJSON.students.length);
        s = s + '<option value="0">--- તમારૂં નામ પસંદ કરો ---</option>';
        for (i = 0; i < studentsJSON.students.length; i++) {
            if (standard == studentsJSON.students[i].std) {
                s = s + '<option value="' + studentsJSON.students[i].name + '">' + studentsJSON.students[i].name + '</option>';
            }
        }
        return s;
    }
});

$('#saveresultlink').click(function (evt) {
    var t_name = $('#studentName').val();
    if (0 === t_name || '0' == t_name) {
        //console.log(t_name);
        //console.log('--- તમારૂં નામ પસંદ કરો ---');
        alert('--- તમારૂં નામ પસંદ કરો ---');
        return;
    }
    //console.log('go ahead for save');
    /*var t_file = "chapter-1-test.csv";*/
    var loc = window.location.href;
    var output = loc.split('/').pop().split('.').shift();
    var t_file = output + ".csv";
    var t_score = $('#finalscore').val();
    var t_qs = $('#totalquestions').val();
    var s = 'writeresult.php?file=' + t_file + '&name=' + t_name + '&score=' + t_score + '&totalqs=' + t_qs;
    $.ajax({
        url: s,
        type: 'get',
        success: function (output) {
            //alert(output);
            $("#saveresultlink").hide();
            $(".saveresultstatus").html(output);
            $(".saveresultstatus").show();
        }
    });
    evt.preventDefault();
});

$(".studentName").change(function () {
    "use strict";
    studentname = $(this).val();
    //console.log(studentname);
}).trigger('change');
