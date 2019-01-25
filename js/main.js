

//(() => {
	// this is a self invoking anonymous function
	//console.log('fired!');

// these are the elements that you want to reference on the page (icons)
	//var badge = document.querySelector("img");

	//var otherBadges = document.querySelector("jpgBadge");

	//function logBadgeId() {
		//console.log(this.id);
		//debugger;
	//}

// what evemts are we listening for? clicks? mouseover? and what should happen when we hear it 
	//badge.addEventListener("click", logBadgeId);

	//debugger;

	//otherBadges.forEach(badge => badge.addEventListener("click", logoBadgeId));

	// this is the same as print in python
//})(); 


console.log('fired!');

$("#drop").hover(function(){
$(this).animate({
opacity: 0.25
});
},function()
{
$(this).animate({
opacity: 1
});
});



//CONSOLE LOG PRINTING

	// this selects the button under the first SVG
    let iconButton = document.querySelector("button");

    // this selects the inline SVG - I added an ID to it (see above)
    let sun = document.querySelector('#sun');

    // this selects the inline SVG - I added an ID to it (see above)
    let star = document.querySelector('#star');

    // this function runs when you click on the button
    function logIcon() {
      console.log("log Icon function fired");
    }

    // this function runs when you click on the inline SVG #1
    function logSun() {
      console.log("log Sun function fired");
    }

    // this function runs when you click on the inline SVG #2
    function logStar() {
      console.log("log Star function fired");
    }

    // event handling for the button
    iconButton.addEventListener("click", logIcon);

    // event handling for the inline SVG
    sun.addEventListener("click", logSun)


    star.addEventListener("click", logStar)

