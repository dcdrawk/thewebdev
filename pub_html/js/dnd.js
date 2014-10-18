/* 
	This file builds on what we learned during the lecture/labs
	It is meant to add a drop-down menu functionality for smart phones or small screens
*/
	
//the function to hide the div, code is from: http://stackoverflow.com/questions/5277872/hide-a-div-if-screen-is-narrower-than-1024px */

// At first I was having problems on mobile, the menu would collapse automatically on tapping after opening the menu, solved this by adding a boolean and changing how the menu opens and closes, this fixed the issue. Source: intuition
var str = 0 ;
var dex = 0 ;
var con = 0 ;
var intel = 0 ;
var wis = 0 ;
var cha = 0 ;

var strMod = 0 ;
var dexMod = 0 ;
var conMod = 0 ;
var intelMod = 0 ;
var wisMod = 0 ;
var chaMod = 0 ;

$(document).ready( function() {
		
	
	//hides the initial menu button, even though it's display is already set to none, allows us to show it again
	//so if javascript is enabled, this button will show
    //on load
	$('#strength').html('2');
    $(window).resize(function(){
	});
	
	$('#strength').on('blur', function() {
		str = $(this).val();
		strMod = abilityMod(str);
		$("#strMod").html(strMod);
		setCookie('Strength', str, 30);
	});
	
	$('#dexterity').on('blur', function() {
		dex = $(this).val();
		dexMod = abilityMod(dex);
		$("#dexMod").html(dexMod);
	});
	
	$('#constitution').on('blur', function() {
		con = $(this).val();
		conMod = abilityMod(con);
		$("#conMod").html(conMod);
	});
	
	$('#intelligence').on('blur', function() {
		intel = $(this).val();
		intelMod = abilityMod(intel);
		$("#intelMod").html(intelMod);
	});
	
	$('#wisdom').on('blur', function() {
		wis = $(this).val();
		wisMod = abilityMod(wis);
		$("#wisMod").html(wisMod);
	});
	
	$('#charisma').on('blur', function() {
		cha = $(this).val();
		chaMod = abilityMod(cha);
		$("#chaMod").html(chaMod);
	});
	
	function abilityMod(stat) { //calculates the ability score modifier for stats
		console.log ( stat );
		
		if(stat == 1){
			return -5;
		}
		
		if(stat >= 2 && stat <= 3){
			return -4;
		}
		
		if(stat >= 4 && stat <= 5){
			return -3;
		}
		
		if(stat >= 6 && stat <= 7){
			return -2;
		}
		
		if(stat >= 8 && stat <= 9){
			return -1;
		}
		
		if(stat >= 10 && stat <= 11){
			return 0;
		}
		
		if(stat >= 12 && stat <= 13){
			return 1;
		}
		
		if(stat >= 14 && stat <= 15){
			return 2;
		}
		
		if(stat >= 16 && stat <= 17){
			return 3;
		}
		
		if(stat >= 18 && stat <= 19){
			return 4;
		}
		
		if(stat >= 20 && stat <= 21){
			return 5;
		}
		
		if(stat >= 22 && stat <= 23){
			return 6;
		}
		
		if(stat >= 24 && stat <= 25){
			return 7;
		}
		
		if(stat >= 26 && stat <= 27){
			return 8;
		}
		
		if(stat >= 28 && stat <= 29){
			return 9;
		}
		
		if(stat == 30){
			return 10;
		}
	}
	
	
	
	
	function setCookie(cname, cvalue, exdays) {
		console.log ( 'Cookie' );
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}
	
	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
		}
		return "";
	}

});
