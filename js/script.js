var pokeNumbers = new Array("1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22",
							"23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42",
							"43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62",
							"63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82",
							"83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102",
							"103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120",
							"121","122","123","124","125","126","127","128","129","130","131","132","133","134","135","136","137","138",
							"139","140","141","142","143","144","145","146","147","148","149","150","151","152","153","154","155","156",
							"157","158","159","160","161","162","163","164","165","166","167","168","169","170","171","172","173","174",
							"175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192",
							"193","194","195","196","197","198","199","200","201","202","203","204","205","206","207","208","209","210",
							"211","212","213","214","215","216","217","218","219","220","221","222","223","224","225","226","227","228",
							"229","230","231","232","233","234","235","236","237","238","239","240","241","242","243","244","245","246",
							"247","248","249","250","251");

var pokeCommons = new Array("10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","27","28","29","30","32","33",
						"39","40","41","42","46","47","48","49","50","51","52","53","54","55","81","82","84","85","96","97","98","99",
						"100","101","104","105","109","110","118","119","120","121","161","162","163","164","165","166","167","168",
						"170","171","177","178","183","184","187","188","189","190","193","194","195","198","200","202","203","206",
						"207","220","221","223","224");
/*
var pokeCommons = new Array("10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","27","28","29","30","32","33","35",
						"36","37","39","40","41","42","46","47","48","49","50","51","52","54","69","70","79","81","84","85","96","98","99",
						"104","105","109","110","118","119","120","121","123","161","162","163","164","165","166","167","168","170","171",
						"177","178","183","184","187","188","189","190","193","194","195","198","200","202","203","206","211","213","215",
						"218","219","220","221","223","224","234");
*/
var pokeNames = new Array("Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise",
						"Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata",
						"Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran♀",
						"Nidorina","Nidoqueen","Nidoran♂","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales",
						"Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat",
						"Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe",
						"Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp",
						"Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta",
						"Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong",
						"Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby",
						"Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan",
						"Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra",
						"Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir",
						"Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon",
						"Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini",
						"Dragonair","Dragonite","Mewtwo","Mew","Chikorita","Bayleef","Meganium","Cyndaquil","Quilava","Typhlosion",
						"Totodile","Croconaw","Feraligatr","Sentret","Furret","Hoothoot","Noctowl","Ledyba","Ledian","Spinarak",
						"Ariados","Crobat","Chinchou","Lanturn","Pichu","Cleffa","Igglybuff","Togepi","Togetic","Natu","Xatu",
						"Mareep","Flaaffy","Ampharos","Bellossom","Marill","Azumarill","Sudowoodo","Politoed","Hoppip","Skiploom",
						"Jumpluff","Aipom","Sunkern","Sunflora","Yanma","Wooper","Quagsire","Espeon","Umbreon","Murkrow","Slowking",
						"Misdreavus","Unown","Wobbuffet","Girafarig","Pineco","Forretress","Dunsparce","Gligar","Steelix","Snubbull",
						"Granbull","Qwilfish","Scizor","Shuckle","Heracross","Sneasel","Teddiursa","Ursaring","Slugma","Magcargo",
						"Swinub","Piloswine","Corsola","Remoraid","Octillery","Delibird","Mantine","Skarmory","Houndour","Houndoom",
						"Kingdra","Phanpy","Donphan","Porygon2","Stantler","Smeargle","Tyrogue","Hitmontop","Smoochum","Elekid",
						"Magby","Miltank","Blissey","Raikou","Entei","Suicune","Larvitar","Pupitar","Tyranitar","Lugia","Ho-Oh","Celebi");
//
// Off function
//
function off(el) {
	var pokeNumb = document.getElementById(el);
	var pokeDis = "p"+el;
	pokeNumb.value = "OFF";
	document.getElementById(pokeDis).className="poke disabled";
}

//
// ReEnable OFF'ed Pokemon
//
function reEna(el) {
	var divID = "p"+el;
	document.getElementById(divID).className = "poke";
	document.getElementById(divID).style.display = "inline-block";
	if(document.getElementById(el).value=="OFF") { 
		document.getElementById(divID).className = "poke disabled";
	}
}

// ################################################
//		Hide OFF buttons
// ################################################
var btoggled="no";
function toggleBu() {
	var x = document.getElementsByClassName("on");
	var i;
	if(btoggled=="no") {
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";
		}
	btoggled="yes";
	return;
	}
	if(btoggled=="yes") {
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "block";
		}
	btoggled="no";
	return;
	}
}


// ################################################
//		Preset Commons
// ################################################
var showCo="yes";
function toggleCo() {
	var i;
	if(showCo=="yes") {
		for (i = 0; i < pokeCommons.length; i++) {
			off(pokeCommons[i]);
		}
		showCo="no";
		return
	}
	else {
		for (i = 0; i < pokeCommons.length; i++) {
			document.getElementById(pokeCommons[i]).value="98";
			reEna(pokeCommons[i]);
		}
		showCo="yes";
		return	
	}
}

// ################################################
//		Hide Commons AND/OR Off Pokemon
// ################################################
var bCo="no";
function toggleHiShoCo() {
	var i;
	if(bCo=="no") {
		for (i = 0; i < pokeNumbers.length; i++) {
			var minIV = document.getElementById(pokeNumbers[i]).value; 
			if(minIV=="OFF") { document.getElementById("p"+pokeNumbers[i]).style.display = "none" }
		}
	bCo="yes";
	return;
	}
	if(bCo=="yes") {
		for (i = 0; i < pokeNumbers.length; i++) {
			var minIV = document.getElementById(pokeNumbers[i]).value; 
			if(minIV=="OFF") { document.getElementById("p"+pokeNumbers[i]).style.display = "inline-block" }
		}
	bCo="no";
	return;
	}
}


// ################################################
//		Hide Legendaries and Regional Pokemon
// ################################################
var bUn="no";
var pUn = new Array("p83","p115","p122","p132","p144","p145","p146","p150","p151","p172","p173","p174",
					"p175","p182","p186","p192","p196","p197","p199","p208","p212","p214","p222","p225","p225","p230","p233","p235",
					"p236","p238","p239","p240","p243","p244","p245","p249","p250","p251");
function toggleUn() {
	var i;
	if(bUn=="no") {
		for (i = 0; i < pUn.length; i++) {
			document.getElementById(pUn[i]).style.display = "none";
		}
	bUn="yes";
	return;
	}
	if(bUn=="yes") {
		for (i = 0; i < pUn.length; i++) {
			document.getElementById(pUn[i]).style.display = "inline-block";
		}
	bUn="no";
	return;
	}
}






// ################################################
//		Load Pokemon
// ################################################
function loadList() {
	var i; 
	
	// Separate by comma into array
	var loadList = document.getElementById("loadlst").value; loadList=loadList.split(","); 
	// Clear spaces
	for (i = 0; i < loadList.length; i++) {
		loadList[i]=loadList[i].replace(" ","");
	}
	// Disable and hide all
	for (i = 0; i < pokeNumbers.length; i++) {
		off(pokeNumbers[i]);
	}
	toggleHiShoCo();
	// Enable and Show
	for (i = 0; i < loadList.length; i++) {
		document.getElementById(loadList[i]).value="0";
		reEna(loadList[i]);
	}
}






// #############################################
//		Webhook Filter Generator
// #############################################
function whook() {
	var wht = document.getElementById("wh"); wht.value="";
	for (i = 0; i < pokeNumbers.length; i++) {
		var minIV = document.getElementById(pokeNumbers[i]).value; if(minIV=="OFF") { minIV="101" }
		wht.value += pokeNumbers[i] + ": " + minIV + ",\n";
	}
	var newTxt = document.getElementById("wh");
	paTxt = newTxt.value; 
	paTxt = paTxt.slice(0, -2); 
	newTxt.value = paTxt;
}


// #############################################
//		PokeAlarm Filter Generator
// #############################################
function palarm() {
	var pat = document.getElementById("pa"); pat.value="";
	for (i = 0; i < pokeNames.length; i++) {
		var minIV = document.getElementById(pokeNumbers[i]).value;
		var PAminIV = "\": {\"min_iv\":\"" + minIV + "\"},\n";
		if(minIV=="OFF") { PAminIV="\": \"False\",\n" }
		if(minIV=="0") { PAminIV="\": \"True\",\n" }
		// if(minIV<=90){if(minIV!=0){minIV=((minIV)*1+5); console.info("less than 90")}}
		pat.value += "		\"" + pokeNames[i] + PAminIV;
	}
	var newTxt = document.getElementById("pa");
	paTxt = newTxt.value; 
	paTxt = paTxt.slice(0, -2); 
	newTxt.value = paTxt;
}


// #############################################
//		Black/White List Generator
// #############################################
function genBlk() {
	var outputT = document.getElementById("genlst"); outputT.value=""; 
	for (i = 0; i < pokeNumbers.length; i++) {
		var minIV = document.getElementById(pokeNumbers[i]).value; 
		if(minIV=="OFF") { cast=pokeNumbers[i]+"," }if(minIV!="OFF") { cast="" }
		outputT.value += cast;
	}
	var newTxt = document.getElementById("genlst");
	genTxt = newTxt.value; 
	genTxt = genTxt.slice(0, -1); 
	newTxt.value = genTxt;
}


// #############################################
//		White List Generator
// #############################################
function genWht() {
	var outputT = document.getElementById("genlst"); outputT.value=""; 
	for (i = 0; i < pokeNumbers.length; i++) {
		var minIV = document.getElementById(pokeNumbers[i]).value; 
		if(minIV!="OFF") { cast=pokeNumbers[i]+"," }if(minIV=="OFF") { cast="" }
		outputT.value += cast;
	}
	var newTxt = document.getElementById("genlst");
	genTxt = newTxt.value; 
	genTxt = genTxt.slice(0, -1); 
	newTxt.value = genTxt;
}
