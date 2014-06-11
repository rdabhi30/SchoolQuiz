var page = 0;
var q = 0;
var i =0;
var j = 0;
var totalq = 0;
var totaloptions=0;
var maxquestion=80;
var abcd ='';
var anssheet = '';
var rnq = 0;
var rnql = '';	
var qpapername = '';
var randomize = true;
$(document).ready(function() {
	
	var r=prompt("પ્રશ્નપત્ર નંબર અથવા અંગ્રેજી મૂળાક્ષર દાખલ કરો:","A");
	if (r!=null && r!="")  {
	  qpapername = r;
	} else {
	   qpapername = '';
	}
	qpapername=qpapername.toUpperCase();
  
	
	$('.subject').html(quizJSON.info.subject );
	$('.standard').html(quizJSON.info.standard );
	$('.semester').html(quizJSON.info.semester );
	$('.name').html(quizJSON.info.name );
	$('.qpapername').html(qpapername );
	//console.log( s );
	totalq=quizJSON.questions.length;
	if ( maxquestion < totalq ) {
		totalq = maxquestion;
	}
	//console.log( totalq );
	$('.totalqs').html(totalq);
	$('.totalmark').html(totalq);
	s='';
	for (i=0; i<totalq; i++) {
		if (true === randomize ) {
			while ( (rnql.indexOf('(' + rnq +')')) != -1 ) {
				rnq = getrandnumber(totalq)-1;
			}
			rnql = rnql +'(' + rnq +')' ;
			//console.log( 'Random: ' + rnq );
			//console.log( 'Random List: ' + rnql );
		} else {
			rnq = i;			
		}
		//console.log( 'rnq:' + rnq );
		s=s + '<div class="row"><div class="question"><span class="num">' + (i+1) + '.</span><span class="txt">' + quizJSON.questions[rnq].q + '</span></div>';
		
		if ( i < 9 ) {
			anssheet = anssheet + '<li>(&nbsp;&nbsp;'+ (i+1) + ') ';
		} else {
			anssheet = anssheet + '<li>('+ (i+1) + ') ';
		}
		totaloptions = quizJSON.questions[rnq].a.length;
		//console.log( totaloptions );
		abcd = "A";
		s = s + '<ul class="options">'
		var rna = 0;			
		var rnal = '';
		for(j=0;j<totaloptions;j++) {
			if (true === randomize ) {
				while ( (rnal.indexOf('(' + rna +')')) != -1 ) {
					rna = getrandoption(totaloptions)-1;
				}
				rnal = rnal +'(' + rna +')' ;
			} else {
				rna = j;
			}
			//console.log( 'rna:' + rna );
			if (j == 0) { abcd = "A"; }
			if (j == 1) { abcd = "B"; }
			if (j == 2) { abcd = "C"; }
			if (j == 3) { abcd = "D"; }
			s = s + '<li>' + '('+ abcd + ') ' + quizJSON.questions[rnq].a[rna].option + '</li>';
			if ( quizJSON.questions[rnq].a[rna].correct == true ) {
				anssheet = anssheet + abcd + '</li>';
				//console.log( anssheet );
			}
		}
		s = s + '</ul><br class="clear" /></div>';
		//console.log( s );				
	}
	$('#qs').html(s);
	$('.answers').html(anssheet);
	
});
function getrandnumber(totalq) {
	return Math.floor((Math.random()*totalq)+1);
}
function getrandoption(totaloptions) {
	return Math.floor((Math.random()*totaloptions)+1);
}
