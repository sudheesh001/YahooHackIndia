<?php
$request = trim(strtolower($_REQUEST['value']));
$users = array('asdf', 'Peter', 'Peter2', 'Sudheesh');
$valid = 'true';
foreach($users as $user) {
	if( strtolower($user) == $request )
		$valid = 'false';
}
echo $valid;
?>