if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){

	setInterval(loop, 350);

}

var x = 0;

var titleText = [ "cherri.cf", "cherri.c", "cherri.", "cherr", "cher", "che", "ch", "c", "ch", "che", "cher", "cherr", "cherri", "cherri.c", "cherri.cf", "cherri.cf wel", "cherri.cf welcome"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}
