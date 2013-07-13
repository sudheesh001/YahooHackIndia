<?php
$request = trim(strtolower($_REQUEST['username']));
//sleep(2);
usleep(150000);
$users = array('asdf', 'Peter', 'Peter2', 'Sudheesh');
$valid = 'true';
foreach($users as $user) {
	if( strtolower($user) == $request )
		$valid = 'false';
}
echo $valid;
?>