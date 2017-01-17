<?php
	session_start();
	ob_start();

	if(isset($_SESSION['loggedin'])&&!empty($_SESSION['loggedin'])){
		//User has logged in
	}else{
		echo "Enter password to view list:";

		echo "<form method = 'post' action ='culturallist.php'>
		<input type = 'password' name='password'><input type ='submit' value='Login'>
		</form>";

		if($_POST['password']=='itsprivate171'){
			$_SESSION['loggedin'] = 'yes';
			header('Location: culturallist.php');
		}

		die();

	}

?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title>Cuultural Revamp Registration List</title>

		<!-- Bootstrap -->
		<link href="css/bootstrap.min.css" rel="stylesheet">

	</head>
	<body>
		
			<?php
			require 'connection.php';
				
				$query = "select id,name,roll,phone,branch,year,email,solo,cgroup from registration";
                                $result = mysqli_query($cxn, $query);
                                $num_rows = mysqli_num_rows($result);
                                   echo ' <h1>List of registered students for Cultural Events Solo/Group</h1>
                                                          <h2> There are total '.$num_rows.' Registrations </h2>
		                                      <div class="table-responsive">';
		
                                    echo '<table class="table table-responsive table-bordered table-striped">
			                             <tr> <th>Sno</th><th>Name</th><th>RollNo</th> <th>Phone No.</th> <th>Branch</th> <th>Year</th><th>Email</th><th>Solo</th><th>Group</th> </tr>';
  
				if($result){
					while($row = mysqli_fetch_assoc($result)){
						$id=$row['id'];
						$name = $row['name'];
						$roll = $row['roll'];
						$phone = $row['phone'];
						$branch = $row['branch'];
						$year = $row['year'];                                      
                        $solo = $row['solo'];
                        $group = $row['cgroup'];
                        echo "<tr> <td>$id</td><td>$name</td> <td>$roll</td> <td>$phone</td> <td>$branch</td> <td>$year</td><td>$solo</td><td>$group</td>
                                                </tr>";
					}
                                echo '  <form action="download.php">
                                        <input type="Submit" value="Download">
                                              </form> ';
				}

				mysqli_close($cxn);
			?>
		</table></div>

	</body>
</html>	