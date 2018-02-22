'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("button").click(projectClick);
}

function projectClick(e) {
	e.preventDefault();
	console.log("WORKING");
	ga("create", "UA-114595571-1", "auto");
	ga("send", "event", "like", "click");
}
