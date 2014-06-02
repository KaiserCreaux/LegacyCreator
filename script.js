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
	//The return button should bring the initial race-type select card up. I'll make this work later.
	$returnButtonRace(function(){	
		$(".raceDisplay").hide();}
	);
	//THIS IS MY CHARACTER SHEET BUILDING GUTS ZONE

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
};
});
