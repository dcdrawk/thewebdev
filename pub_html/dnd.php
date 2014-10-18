<!doctype html>
<html>
	<head>
		<!--Meta-->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!--CSS-->
		<link href="css/font-awesome.min.css" rel="stylesheet">
		<link href="css/grid.css" rel="stylesheet">
		<link href="css/dnd.css" rel="stylesheet">
		<link href='http://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400%7CLato:300,400,700' rel='stylesheet' type='text/css'>
		
		<!--Favicon/Title-->
		<link rel="icon" type="image/png" href="img/favicon.png" />
		<script src="js/jquery-1.11.0.min.js"></script>
		<script src="js/dnd.js"></script>
		<title>DnD Character Builder</title>
	</head>

	<body>
		<header class="wrapper">
			<h1>DnD Character Builder v0.01</h1>
		</header>
		
		
		<!-- basic info -->
		<section id="basic-info" class="wrapper grid">
			<!-- this is for all the basic info about name, class, race, etc. -->
			<h2>Character Info</h2>
			<!-- name -->
			<div id="name" class="pad">
				<h3>Name</h3>
				<input id="name" type="text" name="name" placeholder="Character Name">
			</div>
			<!-- /name -->
			
			<!-- class -->
			<div id="class" class="pad">
				<h3>Class</h3>
				<select id="selectClass">
					<option value="rogue">Rogue</option>
					<option value="wizard">Wizard</option>
					<option value="fighter">Fighter</option>
					<option value="ranger">Ranger</option>
				</select>
			</div>
			<!-- /class -->
			
			<!-- level -->
			<div id="level" class="pad">
				<h3>Level</h3>
				<input type="number" name="quantity" min="1" max="5" placeholder="1">
			</div>
			<!-- /level -->
			
			<!-- background -->
			<div id="background" class="pad">
				<h3>Background</h3>
				<select id="selectBackground">
					<option value="criminal">Criminal</option>
				</select>
			</div>
			<!-- /background -->
			
			<!-- race -->
			<div id="race" class="pad">
				<h3>Race</h3>
				<select id="selectRace">
					<option value="halfling">Halfling</option>
					<option value="human">Human</option>
					<option value="elf">Elf</option>
					<option value="halfelf">Half-Elf</option>
				</select>
			</div>	
			
			<!-- alignment -->
			<div id="alignment" class="pad">
				<h3>Align.</h3>
				<select id="selectAlignment">
					<option value="lg">LG</option>
					<option value="ng">NG</option>
					<option value="cg">CG</option>
					<option value="ln">LN</option>
					<option value="n">N</option>
					<option value="cn">CN</option>
					<option value="le">LE</option>
					<option value="ne">NE</option>
					<option value="ce">CE</option>
				</select>
			</div>
			<!-- /alignment -->
			
			<!-- experience -->
			<div id="experience" class="pad">
				<h3>Experience</h3>
				<input id="xp" type="number" name="xp points">
			</div>
			<!-- /name -->
			
		</section>
		<!-- /basic-info -->
		
		<!-- stats -->	
		<section id="stats" class="wrapper grid">
			<h2>Stats</h2>
			<div class="stats">
				<h3>Str</h3>
				<input id="strength" class="stat" type="number" name="quantity" min="1" max="30" placeholder="1" value"asdad">
				<h3 id="strMod" class="abilityMod">0</h3>
			</div>
			
			<div class="stats">
				<h3>Dex</h3>
				<input id="dexterity" class="stat" type="number" name="quantity" min="1" max="30" placeholder="1">
				<h3 id="dexMod" class="abilityMod">0</h3>
			</div>
			
			<div class="stats">
				<h3>Con</h3>
				<input id="constitution" class="stat" type="number" name="quantity" min="1" max="30" placeholder="1">
				<h3 id="conMod" class="abilityMod">0</h3>
			</div>
						
			<div class="stats">
				<h3>Int</h3>
				<input id="intelligence" class="stat" type="number" name="quantity" min="1" max="30" placeholder="1">
				<h3 id="intelMod" class="abilityMod">0</h3>
			</div>
			<div class="stats">
				<h3>Wis</h3>
				<input id="wisdom" class="stat" type="number" name="quantity" min="1" max="30" placeholder="1">
				<h3 id="wisMod" class="abilityMod">0</h3>
			</div>
			
			<div class="stats">
				<h3>Cha</h3>
				<input id="charisma" class="stat" type="number" name="quantity" min="1" max="30" placeholder="1">
				<h3 id="chaMod" class="abilityMod">0</h3>
			</div>
			
			<div class="stats">
				<h3>Prof</h3>
				<input id="proficiency" class="stat" type="number" name="quantity" min="1" max="10" placeholder="1">
			</div>
		</section>
		<!-- /stats -->
		
	</body>
</html>