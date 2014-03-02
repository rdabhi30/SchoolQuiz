<?php
$g_file = $_GET['file'];
$g_name = $_GET['name'];
$g_true_ans  = $_GET['score'];
$g_tqs  = $_GET['totalqs'];
add_reccord_to_result_file($g_file,$g_name,$g_true_ans,$g_tqs);

function add_reccord_to_result_file($file,$name,$true_ans,$tqs) {

	//the result file
	$the_file = $file;
	create_result_file($the_file);	//only create if not exist

	/*
	required from quiz result
	name and true_ans
	*/
	$t_name = $name;				//From the quiz result
	$t_true_answers = $true_ans;	//From the quiz result
	$t_total_questions = $tqs;		//From the quiz result
	
	date_default_timezone_set("Asia/Calcutta");
	$def = date_default_timezone_get();
	$t_date = date("d-M-Y");
	$t_weightage = 1;				// number of marks for a true answer
	$t_false_answers = $t_total_questions - $t_true_answers;
	$t_marks = $t_true_answers * $t_weightage;
	$t_percent = ($t_true_answers / $t_total_questions) * 100;
	if ( $t_percent >= 75 ) { $t_result = "done"; }
	if ( ($t_percent >= 50) && ($t_percent < 75) ) { $t_result = "need"; }
	if ( $t_percent < 50 ) { $t_result = "fail"; }

	/* anuja 2m√ 2=fail, m=? √=√ */
	if ( $t_percent >= 75 ) { $t_result2 = "√"; }
	if ( ($t_percent >= 50) && ($t_percent2 < 75) ) { $t_result2 = "m"; }
	if ( $t_percent < 50 ) { $t_result2 = "2"; }

	/*
	record fields
	name,date,total_qs,weightage,true,false,marks,percent,result,result2
	*/
	// make a record from the fields
	$the_record = $t_name.",".$t_date.",".$t_total_questions.",".$t_weightage.",".$t_true_answers.",".$t_false_answers.",".$t_marks.",".$t_percent.",".$t_result.",".$t_result2 ;
	//write final record
	write_reccord_to_result_file($the_file,$the_record);
	
	echo "Result Saved";
}

function write_reccord_to_result_file($file,$record) {
	$result_file = fopen("$file","a");
	$t_record = $record."\n";
	fwrite($result_file,$t_record);
	fclose($result_file);
}

function create_result_file($file) {
	if(file_exists($file)) {		
		return;
	} else {
		$result_file = fopen("$file","a");
		$record = "name,date,total_qs,weightage,true,false,marks,percent,result,result_anuja_font"."\n";
		fwrite($result_file,$record);		
		fclose($result_file);	
	}
}

?>
