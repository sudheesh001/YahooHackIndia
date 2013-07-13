
        <?php
        ini_set('max_execution_time',60);
        require_once('YahooFinance.php');

        $my_file1 = 'GOOG.txt';
        $my_file2 = 'AAPL.txt';
        $my_file3 = 'YHOO.txt';
        $my_file4 = 'MSFT.txt';
        $my_file5 = 'NVDA.txt';
        
        $handle1 = fopen($my_file1,'a') or die('cannot open file: '.$my_file1);
         $handle2 = fopen($my_file2,'a') or die('cannot open file: '.$my_file2);
         $handle3 = fopen($my_file3,'a') or die('cannot open file: '.$my_file3);
        $handle4 = fopen($my_file4,'a') or die('cannot open file: '.$my_file4);
         $handle5 = fopen($my_file5,'a') or die('cannot open file: '.$my_file5);
        
        //echo "The value is:".$data;
//sample usage of this script

//list of stocks we'll be working with

$arr = array("GOOG","AAPL","YHOO","MSFT","NVDA","AMZN","IBM","INTC","MCD","CSCO");
//grab price for all stocks in array
$arr = YahooFinance::retrieveCurrentPrice($arr);

foreach($arr as $k => $v) {
    if($k == 'filesize') {
        continue;
    } else
    {
       // echo $k.': $'.$v;
        if($k == "GOOG"){ $data1 = "\n".$k.': $'.$v; fwrite($handle1, $data1); }
        if($k == "AAPL"){ $data2 = "\n".$k.': $'.$v; fwrite($handle2, $data2);}
        if($k == "YHOO"){ $data3 = "\n".$k.': $'.$v; fwrite($handle3, $data3);}
        if($k == "MSFT"){ $data4 = "\n".$k.': $'.$v; fwrite($handle4, $data4);}
        if($k == "NVDA"){ $data5 = "\n".$k.': $'.$v; fwrite($handle5, $data5);}
    }
}
sleep(20);
$arr = array("GOOG","AAPL","YHOO","MSFT","NVDA","AMZN","IBM","INTC","MCD","CSCO");
$arr = YahooFinance::retrieveCurrentPrice($arr);

$handle1 = fopen($my_file1,'a') or die('cannot open files :'.$my_file1);
$handle2 = fopen($my_file2,'a') or die('cannot open files :'.$my_file2);
$handle3 = fopen($my_file3,'a') or die('cannot open files :'.$my_file3);
$handle4 = fopen($my_file4,'a') or die('cannot open files :'.$my_file4);
$handle5 = fopen($my_file5,'a') or die('cannot open files :'.$my_file5);
foreach($arr as $k => $v) {
    if($k == 'filesize') {
        continue;
    } else
    {
       // echo $k.': $'.$v;
        if($k == "GOOG"){ $data1 = "\n".$k.': $'.$v; fwrite($handle1, $data1); }
        if($k == "AAPL"){ $data2 = "\n".$k.': $'.$v; fwrite($handle2, $data2); }
        if($k == "YHOO"){ $data3 = "\n".$k.': $'.$v; fwrite($handle3, $data3); }
        if($k == "MSFT"){ $data4 = "\n".$k.': $'.$v; fwrite($handle4, $data4); }
        if($k == "NVDA"){ $data5 = "\n".$k.': $'.$v; fwrite($handle5, $data5); }
    }
}
//
//sleep(20);
//$arr = YahooFinance::retrieveCurrentPrice($arr);
//$handle1 = fopen($my_file1,'a') or die('cannot open files :'.$my_file1);
//$handle2 = fopen($my_file2,'a') or die('cannot open files :'.$my_file2);
//$handle3 = fopen($my_file3,'a') or die('cannot open files :'.$my_file3);
//$handle4 = fopen($my_file4,'a') or die('cannot open files :'.$my_file4);
//$handle5 = fopen($my_file5,'a') or die('cannot open files :'.$my_file5);
//foreach($arr as $k => $v) {
//    if($k == 'filesize') {
//        continue;
//    } else
//    {
//       // echo $k.': $'.$v;
//        if($k == "GOOG"){ $data1 = $k.': $'.$v; fwrite($handle1, $data1); }
//        if($k == "AAPL"){ $data2 = $k.': $'.$v; fwrite($handle2, $data2); }
//        if($k == "YHOO"){ $data3 = $k.': $'.$v; fwrite($handle3, $data3); }
//        if($k == "MSFT"){ $data4 = $k.': $'.$v; fwrite($handle4, $data4); }
//        if($k == "NVDA"){ $data5 = $k.': $'.$v; fwrite($handle5, $data5); }
//    }
//}
//
//sleep(20);
//$arr = YahooFinance::retrieveCurrentPrice($arr);
//$handle1 = fopen($my_file1,'a') or die('cannot open files :'.$my_file1);
//$handle2 = fopen($my_file2,'a') or die('cannot open files :'.$my_file2);
//$handle3 = fopen($my_file3,'a') or die('cannot open files :'.$my_file3);
//$handle4 = fopen($my_file4,'a') or die('cannot open files :'.$my_file4);
//$handle5 = fopen($my_file5,'a') or die('cannot open files :'.$my_file5);
//foreach($arr as $k => $v) {
//    if($k == 'filesize') {
//        continue;
//    } else
//    {
//       // echo $k.': $'.$v;
//        if($k == "GOOG"){ $data1 = $k.': $'.$v; fwrite($handle1, $data1); }
//        if($k == "AAPL"){ $data2 = $k.': $'.$v; fwrite($handle2, $data2); }
//        if($k == "YHOO"){ $data3 = $k.': $'.$v; fwrite($handle3, $data3); }
//        if($k == "MSFT"){ $data4 = $k.': $'.$v; fwrite($handle4, $data4); }
//        if($k == "NVDA"){ $data5 = $k.': $'.$v; fwrite($handle5, $data5); }
//    }
//}
//
//sleep(20);
//$arr = YahooFinance::retrieveCurrentPrice($arr);
//$handle1 = fopen($my_file1,'a') or die('cannot open files :'.$my_file1);
//$handle2 = fopen($my_file2,'a') or die('cannot open files :'.$my_file2);
//$handle3 = fopen($my_file3,'a') or die('cannot open files :'.$my_file3);
//$handle4 = fopen($my_file4,'a') or die('cannot open files :'.$my_file4);
//$handle5 = fopen($my_file5,'a') or die('cannot open files :'.$my_file5);
//foreach($arr as $k => $v) {
//    if($k == 'filesize') {
//        continue;
//    } else
//    {
//       // echo $k.': $'.$v;
//        if($k == "GOOG"){ $data1 = $k.': $'.$v; fwrite($handle1, $data1); }
//        if($k == "AAPL"){ $data2 = $k.': $'.$v; fwrite($handle2, $data2); }
//        if($k == "YHOO"){ $data3 = $k.': $'.$v; fwrite($handle3, $data3); }
//        if($k == "MSFT"){ $data4 = $k.': $'.$v; fwrite($handle4, $data4); }
//        if($k == "NVDA"){ $data5 = $k.': $'.$v; fwrite($handle5, $data5); }
//    }
//}


 fclose($handle1);
 fclose($handle2);
 fclose($handle3);
 fclose($handle4);
 fclose($handle5);
//$interval = DateInterval::createFromDateString('5 minute');
//$period = new DatePeriod($begin, $interval, $end);
//$a = 0;
//foreach($period as $dt){
//    $a+=1;
//    print"$a\n";


        ?>
