$(document).ready(function() {
    $raceTabs = $(".raceTab li");//this manages the three main pages of the site
    
    $raceTabs.click(function() {
        if($(this)){
            $raceTabs.removeClass("raceSelected");//makes sure nothing can retain 'selected' status after a new click input
        $(this).addClass("raceSelected");}//re-establishes 'selected' on active li
        
        selectionId = $(this).attr('id');
        
        $seg = $(".seg#"+selectionId);//creates object from whichever element of class seg was clicked by %tabs
    $(".raceContentTab").fadeOut("fast", function(){//removes active main content page from view, clearing the way for the called main content page
        $(".seg").css("display", "none");//gives all .seg class elements invisibility powers
        $(".seg#"+selectionId).css("display", "block");//brings the .seg class that is linked to selectionId back into view
        $(".raceContentTab").fadeIn("slow");//gives instruction on to how to bring it back in
    });
    
    });
    $raceContentTab = $(".raceContentTab li");//this manages the pages for individual races, and is highly similar to the above code.

    $raceContentTab.click(function() {
        if($(this)){
            $raceContentTab.removeClass("selectedRace");
        $(this).addClass("selectedRace");}
        
        selectedRace = $(this).attr('id');
        
        $raceDisplay = $(".raceDisplay#"+selectedRace);
    $(".content").fadeOut("fast", function(){
        $(".raceDisplay").css("display", "none");
        $(".raceDisplay#"+selectedRace).css("display", "block");
        $(".content").fadeIn("slow");
    });
    });
	//What follows is the array of data for the various races, stored in the format race, hp, mp, professions, abilities.
	//Midlanders 0, Northlanders 1, Wastelanders 2
	var $raceData = [['Midlander',6,6,["Any Additional"],["Favored Group"]],['Northlander',10,4,["Shaman", "Huntsman"],["Path of the Warrior","Path of the Fate Wielder","Path of the Jarl"]],['Wastelander',4,8,["Rogue","Merchant"],["Slow","Mend Limb",	"Heart Scarab"]]];
	
	//The return button should bring the initial race-type select card up. I'll make this work later.
	//$("returnButtonRace").click(function(){	
		//$(".raceDisplay").css("display", "none");}
	$("#selectHumanNorthlander").click(function(){
		window.alert("This Function Has Been Called!");
		var raceTotal=document.getElementById("#raceTotal");
		var hitPointsTotal=document.getElementById("#hitPointsTotal");
		var magicPointsTotal=document.getElementById("#magicPointsTotal");
		var professionsTotal=document.getElementById("#professionsTotal");
		var abilitiesTotal=document.getElementById("#abilitiesTotal");
		raceTotal=$raceData[1][0];			
		hitPointsTotal.textContent=$raceData[1][1];			
		magicPointsTotal.textContent=$raceData[1][2];
		professionsTotal.textContent=$raceData[1][3];
		abilitiesTotal.textContent=$raceData[1][4];
		});
	
	/*THIS IS MY CHARACTER SHEET BUILDING GUTS ZONE. Lots of ideas I may implement here.
	
	
	//function AddRace(
	
	var hitPoints = function(raceSelected){
     if (raceSelected === "midlander"){
        return 6;}
     else if (raceSelected === "northlander"){
        return 10;}
     else if (raceSelected === "wastelander"){
        return 4;}
     else {
        return 1;}
};
	var manaPoints = function(raceSelected){
     if (raceSelected === "midlander"){
        return 6;}
     else if (raceSelected === "northlander"){
        return 4;}
     else if (raceSelected === "wastelander"){
        return 8;}
     else {
        return 1;}
};*/
});
