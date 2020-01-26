var $ = function(id)
{
	return document.getElementById(id);
}

window.onload = function()
{
	$("currentImage").style.maxWidth = (window.innerWidth - 95) + "px";
	$("currentImage").style.maxHeight = (window.innerHeight - 180) + "px";

	$("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	
	//keep gallery centered
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";

//	$("imageHolder").style.maxWidth = (window.innerWidth - 200) + "px";
//	$("imageHolder").style.maxHeight = (window.innerHeight - 60) + "px";
	$("thumbs").innerHTML = "	<a href='#' onclick='return showDesign()' alt='View the Design gallery.' title='View the Design gallery.'>" +
					"<div class='thumbNail designMain'>" +
						"Design"	+
					"</div>"	+
				"</a>"	+
				
				"<a href='#' onclick='return showPhotography()' alt='View the Photography gallery' title='View the Photography gallery'>"	+
					"<div class='thumbNail photogMain'>"	+
						"Photography" +
					"</div>" +
				"</a>" +
				
				"<a href='#' onclick='return showAudio()' alt='Listen to the Audio gallery' title='Listen to the Audio gallery'>" + 
					"<div class='thumbNail audioMain'>"	+
						"Audio"	+
					"</div>"	+
				"</a>"	+
				
				"<a href='#' onclick='return showVideo()' alt='Watch the Video gallery' title='Watch the Video gallery'>"	+
					"<div class='thumbNail videoMain'>"	+
						"Video"	+
					"</div>"	+
				"</a>"	+
				
				"<a href='#' onclick='return showInteractive()' alt='Play with the Interactive gallery' title='Play with the Interactive gallery'>"	+
					"<div class='thumbNail interactiveMain'>"	+
						"Interactive"	+
					"</div>"	+
				"</a>";
	//$("thumbs").innerHTML += "";

	window.onresize();
}

window.onresize = function()
{
	

	//$("currentInteractive").style.width = "500px";
	//$("currentInteractive").style.height = "500px";
	
	
	if (cat == 1 || cat == 2)
	{
		$("currentImage").style.maxWidth = (window.innerWidth - 95) + "px";
		$("currentImage").style.maxHeight = (window.innerHeight - 180) + "px";

		$("imageHolder").style.width = $("currentImage").width + 30 + "px";
		$("imageHolder").style.height = $("currentImage").height + 60 + "px";
		
		$("imageHolder").style.top = "50%";
		$("imageHolder").style.left = "50%";
		$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";

	}
	else if (cat == 4)
	{
		$("currentVideo").style.maxWidth = (window.innerWidth - 95) + "px";
		$("currentVideo").style.maxHeight = (window.innerHeight - 180) + "px";
	
		$("imageHolder").style.width = $("currentImage").width + 30 + "px";
		$("imageHolder").style.height = $("currentImage").height + 60 + "px";
		
		$("imageHolder").style.top = "50%";
		$("imageHolder").style.left = "50%";
		$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
		
	}
	else if (cat == 5)
	{
		$("currentInteractiveHolder").style.maxWidth = (window.innerWidth - 95) + "px";
		$("currentInteractiveHolder").style.maxHeight = (window.innerHeight - 180) + "px";
		
		$("currentInteractiveHolder").style.width = (window.innerWidth - 95) + "px";
		$("currentInteractiveHolder").style.height = (window.innerHeight - 180) + "px";
		$("imageHolder").style.width = parseInt($("currentInteractiveHolder").style.width) + 30 + "px";
		$("imageHolder").style.height = parseInt($("currentInteractiveHolder").style.height) + 60 + "px";
		$("imageHolder").style.top = "50%";
		$("imageHolder").style.left = "50%";
		$("imageHolder").style.marginTop = ((parseInt($("currentInteractiveHolder").style.height) + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = ((parseInt($("currentInteractiveHolder").style.width) + 30) / 2) * (-1) + "px";
	}

	jQuery('.thumbNail').css({'height': jQuery('.thumbNail').width() + 'px'});
	jQuery('.songHolder').css({'height': jQuery('.songHolder').width() + 'px'});
	jQuery('.vidHolder').css({'height': jQuery('.vidHolder').width() + 'px'});
	
//	$("imageHolder").style.maxWidth = (window.innerWidth - 200) + "px";
//	$("imageHolder").style.maxHeight = (window.innerHeight - 60) + "px";
}

var picturePath = "stock/images/";

//design picture array
var i;
var cat;
var designFile = Array("design1.jpg",
						"design2.jpg", 
						"design3.jpg", 
						"design4.jpg", 
						"design5.jpg", 
						"design6.jpg",
						"design7.png",
						"expdesign1.jpg", 
						"expdesign2.jpg",
						"expdesign3.png",
						"expdesign4.jpg",
						"expdesign5.jpg",
						"expdesign6.jpg",
						"expdesign7.png",
						"expdesign8.jpg",
						"expdesign9.jpg");
						
var designCaption = Array("Explosion", 
							"Drink&nbsp;Responsibly", 
							"Ditch", 
							"Invasion", 
							"Bloop", 
							"Howl",
							"Ship",
							"Birdo",
							"DE&nbsp;logo",
							"Potato",
							"Beach",
							"Fresh",
							"Birds",
							"Atom",
							"Heart&nbsp;Beats",
							"Spider");
							
var designDesc = Array("Copied from a cut paper design", 
						"Bar code redesign", 
						"Photo-collage", 
						"Gradient Mesh Tool", 
						"Copied from a cut paper design", 
						"Typographic Self-Portrait", 
						"Pen Tool, Gradient Exercise",
						"Photoshop adjustments exercise", 
						"Local DJ logo", 
						"Pen tool exercise", 
						"Image manipulation", 
						"Road20 Farms ad",
						"Image manipulation ",
						"Photoshop layer style exercise",
						"Image manipulation",
						"Image manipulation");
							
var designExp = "Design";
var exp_designExp = "This is a description of the experimental design section.";

var showDesign = function()
{
	i = 0;
	cat = 1;
	
	$("explanation").innerHTML = designExp;
	$("thumbs").innerHTML = "";
	$("designLink").style.backgroundPosition = "0px -2px";
	$("designLink").style.color = "#54E1EB";
	$("photographyLink").style.backgroundPosition = "";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < designFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='showImage(" + i + ")'><img src='" + picturePath + "t_" + designFile[i] + "' /><div class='thumbTitle thumbTitleDesign'>" + designCaption[i] + "</div></a></div>";
		i++;
	}
	
	window.onresize();
	return false;
	
}

var photogFile = Array("photog1.jpg", 
						"photog2.jpg", 
						"photog3.jpg", 
						"photog4.jpg", 
						"photog5.jpg",
						"photog6.jpg",
						"photog7.jpg",
						"photog8.jpg",
						"photog9.jpg",
						"expphotog1.jpg",
						"expphotog2.jpg",
						"expphotog3.jpg",
						"expphotog4.jpg");
var photogCaption = Array("Air&nbsp;Mine", 
							"Voyeur", 
							"Trampled", 
							"Stop&nbsp;Sign", 
							"Fountain",
							"Leaf",
							"Nightcap",
							"Tension",
							"Filter",
							"Squirrel",
							"Yawn",
							"Stop Soon",
							"Burst",
							"exp photo 5");
var photogExp = "Photography";
var photogDesc = Array("Depth of Field", 
						"Depth of Field", 
						"Point of View", 
						"Abstract", 
						"Stopped Motion", 
						"Lens Flare", 
						"Light Writing", 
						"Graphic Elements - Triangle", 
						"Abstract",
						"Point of View", 
						"Scanogram", 
						"Contrast - Two Primaries", 
						"Stopped Motion", 
						"");

var exp_photogExp = "Here are a few things done outside the classroom environment.";

var showPhotography = function()
{
	i = 0;
	cat = 2;
	
	$("explanation").innerHTML = photogExp;
	$("thumbs").innerHTML = "";
	
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "0px -2px";
	$("photographyLink").style.color = "#54E1EB";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < photogFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='showImage(" + i + ")'  id='" + i + "'><img src='" + picturePath + "t_" + photogFile[i] + "'/><div class='thumbTitle thumbTitleDesign'>" + photogCaption[i] + "</div></a></div>";
		i++;
	}
	
	window.onresize();
	return false;
}

var audiomp3 = Array("stock/audio/audio1.mp3", 
					"stock/audio/audio2.mp3", 
					"stock/audio/audio3.mp3", 
					"stock/audio/audio4.mp3"); 
					//"stock/audio/audio5.mp3");
var audioogg = Array("stock/audio/audio1.ogg", "stock/audio/audio2.ogg", "stock/audio/audio3.ogg", "stock/audio/audio4.ogg", "stock/audio/audio5.ogg");
var audioTitle = Array("Untitled 1", "Pick Loop", "Guitars", "Short Loop", "Audio 5");
var audioDesc = Array("Multiple track layering in Adobe Audition",
						 "Drums created in Fruity Loops, mixed in Adobe Audition", 
						 "Multiple track layering, effects in Adobe Audition", 
						 "Short loop made in Fruity Loops", "Description 5");
var audioExp = "Audio";

var showAudio = function()
{
	i = 0;
	cat = 3;
	
	$("explanation").innerHTML = audioExp;
	$("thumbs").innerHTML = "";
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "0px -2px";
	$("audioLink").style.color = "#54E1EB";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < audiomp3.length)
	{
		$("thumbs").innerHTML += "<div class='songHolder'>" +
		"<h4>" + audioTitle[i] + "</h4>" +
		//"<span>" + audioDesc[i] + "</span>" +
		"<audio id='song" + i + "' class='player'>" +
	    "<source src='" + audiomp3[i] + "' type='audio/mp3'>" +
	    "<source src='" + audioogg[i] + "' type='audio/ogg'>" +
	    "Your browser does not support the Audio tag." +
	    "</audio>" +
		"<a href='#' id='audioControl" + i + "' onclick='return playAudio(" + i + ")'><img src='stock/images/play.png' class='aButton' id='audioButton" + i + "'/></a>" +
		"<div id='songHolderbg" + i + "'></div></div>";
		
		i++;
	}
	
	window.onresize();
	return false;
}

var scrubTimer;
var playAudio = function(i)
{
	if ($("song" + i).paused)
	{
		$("song" + i).play();
		
		$("audioButton" + i).src = "stock/images/pause.png";
		
		scrubTimer = setInterval(function(){scrub(i)}, 100);
		scrub(i);
	}
	else
	{
		$("song" + i).pause();
		$("audioButton" + i).src = "stock/images/play.png";
		clearInterval(scrubTimer);
	}
	
	return false;
}

function scrub(i)
{
	var pctDone = ($("song" + i).currentTime) / $("song" + i).duration * 100;
	console.log(pctDone);
	//jQuery(".songHolder div").css({'width': pctDone + "%"});
	jQuery("#songHolderbg" + i).css({'width': pctDone + "%"});
}

var videoFile = Array("stock/video/video1.mp4", "stock/video/video2.mp4", "stock/video/video3.mp4");
var screenShot = Array("video1.jpg", "video2.jpg", "video3.jpg");
var videoCaption = Array("Fade", "Haunt", "Paperclip");
var videoExp = "Video";

var showVideo = function()
{
	i = 0;
	cat = 4;
	
	$("explanation").innerHTML = videoExp;
	$("thumbs").innerHTML = "";
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "0px -2px";
	$("videoLink").style.color = "#54E1EB";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
/*
	while (i < videoFile.length)
	{
		$("thumbs").innerHTML += "<div class='vidHolder'>" + //<a href='#' onclick='showVideo(" + i + ")'  id='" + i + "'>;
								"<video id='mov" + i + "'>" +
								"<source src='" + videoFile[i] + "' type='video/mp4'>" +
								"<source src='#' type='video/ogg'>" +
								"Your browser does not support the video tag." +
								"</video>" +
								"<a href='#' id='movieControl' onclick='return playVid(" + i + ")'><img src='stock/images/play.png' id='playerButton" + i + "' /></a>" +
								"<span>" + videoCaption[i] + "</span>" +
								"</div>";
		i++;
	}
*/
	while (i < videoFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'>" + 
			"<a href='#' onclick='showImage(" + i + ")' id='" + i + "'>" +
			"<img src='" + picturePath + "t_" + screenShot[i] + "'/>" +
			"<div class='thumbTitle thumbTitleDesign'>" + videoCaption[i] + "</div>" +
			"</a></div>";
		i++;
	}
	
	window.onresize();
	return false;
}

var playVid = function(i)
{
	if ($("currentVideo").paused)
	{
		$("currentVideo").play();
		$("playerButton").src = "stock/images/pause.png";
	}
	else
	{
		$("currentVideo").pause();
		$("playerButton").src = "stock/images/play.png";
	}
	return false;
}

var interactivePath = Array("stock/images/");
var interactiveFile = Array("interactive1.jpg", 
							"interactive2.jpg", 
							"interactive3.jpg", 
							"interactive4.jpg", 
							"interactive5.jpg",
							"interactive6.jpg",
							"interactive7.png");
var interactiveDoc = Array("../interactive/motionDesign/index.html", 
							"../interactive/javascriptFinal/index.html", 
							"../interactive/ethanolExplorer/ethanolExplorer.html", 
							"../interactive/stylesheetScripting/index.html", 
							"../interactive/flash3/index.html",
							"../interactive/portfolios/index.html",
							"../interactive/divLoopTestAnimated.html");
var interactiveCaption = Array("Flash 1",
								"Javascript", 
								"Ethanol Explorer", 
								"CSS",
								"Flash 3",
								"Portfolios",
								"Flippy Divs");
var interactiveDesc = Array("Flash 1 Final Project. Click <a href='http://kiopah.aisites.com/motionDesign/index.html' target='_blank'>here</a> to view.",
							"Javascript Project. Click <a href='http://kiopah.aisites.com/javascriptFinal/index.html' target='_blank'>here</a> to view.",
							"E-Learning module made with Flash. Click <a href='http://kiopah.aisites.com/ethanolExplorer/ethanolExplorer.swf' target='_blank'>here</a> to view.",
							"CSS Project. Click <a href='http://kiopah.aisites.com/stylesheetScripting/index.html' target='_blank'>here</a> to view.",
							"Flash 3 Final Project. Click <a href='http://kiopah.aisites.com/flash3/index.html' target='_blank'>here</a> to view.",
							"The first draft of this site and two alternate versions. Click <a href='portfolios/' target='_blank'>here</a> to view.",
							"Divs that flip");
var interactiveExp = "Interactive";

var showInteractive = function()
{
	i = 0;
	cat = 5;
	
	$("explanation").innerHTML = interactiveExp;
	$("thumbs").innerHTML = "";
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "";
	$("photographyLink").style.color = "";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "0px -2px";
	$("interactiveLink").style.color = "#54E1EB";
	
	while (i < interactiveFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='showImage(" + i + ")'  id='" + i + "'><img src='" + interactivePath + "t_" + interactiveFile[i] + "'/><div class='thumbTitle thumbTitleDesign'>" + interactiveCaption[i] + "</div></a></div>";
		i++;
	}
	
	window.onresize();
	return false;
}

//DISPLAY FULL SIZED IMAGE
var thisPic;
var currNumPic;

var showImage = function(i)
{
	event.preventDefault();
	
	$("blackout").style.visibility = "visible";
	$("blackout").style.width = "100%";
	$("blackout").style.height = "100%";
	$("blackout").style.opacity = "1";
	$("imageHolder").style.visibility = "visible";
	$("imageHolder").style.opacity = "1";
	
	$("loading").style.display = "inline";
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	
	if (cat == 1) //design
	{
		$("currentInteractiveHolder").style.display = "";
		$("currentVideo").style.display = "";
		$("imageHolder").style.width = $("currentImage").width + 30 + "px";
		$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
		$("imageHolder").style.height = $("currentImage").height + 60 + "px";	
		$("currentImage").src = picturePath + designFile[i];
		thisPic = i;
		$("caption").innerHTML = designCaption[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + designFile.length;
		//alert(i);
	}
	else if (cat == 2) //photog
	{
		$("currentInteractiveHolder").style.display = "";
		$("currentVideo").style.display = "";
		$("imageHolder").style.width = $("currentImage").width + 30 + "px";
		$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
		$("imageHolder").style.height = $("currentImage").height + 60 + "px";	
		
		$("currentImage").src = picturePath + photogFile[i];
		$("caption").innerHTML = photogCaption[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + photogFile.length;
		thisPic = i;
	}
	else if (cat == 4) //video
	{
		$("currentInteractiveHolder").style.display = "";
		$("currentVideo").style.display = "inline-block";
		$("imageHolder").style.width = $("currentVideo").width + 30 + "px";
		$("imageHolder").style.marginLeft = (($("currentVideo").width + 30) / 2) * (-1) + "px";
		$("imageHolder").style.marginTop = (($("currentVideo").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.height = $("currentVideo").height + 60 + "px";
		
		$("currentImage").style.display = "none";
		$("mp4Src").src = videoFile[i];
		$("currentVideo").load();
		$("caption").innerHTML = videoCaption[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + videoFile.length;
		thisPic = i;
	}
	else if (cat == 5) //interactive
	{
		$("currentImage").style.display = "none";
		$("currentVideo").style.display = "";
		$("currentInteractiveHolder").style.display = "block";
		$("imageHolder").style.marginTop = (($("currentInteractiveHolder").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.width = $("currentInteractiveHolder").width + 30 + "px";
		$("imageHolder").style.height = $("currentInteractiveHolder").height + 60 + "px";
		$("imageHolder").style.marginLeft = (($("currentInteractiveHolder").width + 30) / 2) * (-1) + "px";
	
		$("currentInteractive").src = interactivePath +  interactiveDoc[i];
		$("caption").innerHTML = interactiveCaption[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + interactiveFile.length;
		thisPic = i;
	}
	
	return false;
}

$("currentVideo").onprogress = function()
{
	$("loading").style.display = "";
}

var respondImage = function()
{
	if (cat == 1 || cat == 2) // design, photog
	{
		$("imageHolder").style.width = $("currentImage").width + 30 + "px";
		$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
		$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	}
	else if (cat == 4) // video
	{
		$("imageHolder").style.width = $("currentVideo").width + 30 + "px";
		$("imageHolder").style.marginTop = (($("currentVideo").height + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = (($("currentVideo").width + 30) / 2) * (-1) + "px";
		$("imageHolder").style.height = $("currentVideo").height + 60 + "px";		
	}
	else if (cat == 5) // interactive
	{
		console.log("interactive respondImage fired");
		$("currentInteractiveHolder").style.width = (window.innerWidth - 95) + "px";
		$("currentInteractiveHolder").style.height = (window.innerHeight - 180) + "px";
		$("imageHolder").style.width = parseInt($("currentInteractiveHolder").style.width) + 30 + "px";
		$("imageHolder").style.marginTop = ((parseInt($("currentInteractiveHolder").style.height) + 120) / 2) * (-1) + "px";
		$("imageHolder").style.marginLeft = ((parseInt($("currentInteractiveHolder").style.width) + 30) / 2) * (-1) + "px";
		$("imageHolder").style.height = parseInt($("currentInteractiveHolder").style.height) + 60 + "px";
		
	}
	
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("loading").style.display = "";
	
}

var nextPic = function()
{
	event.preventDefault();
	
	thisPic++;
	
	$("loading").style.display = "inline";
	
	if (cat == 1) //design
	{
		if (thisPic >= designFile.length)
		{
			thisPic = 0;
		}

		$("currentImage").src = picturePath + designFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = designCaption[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + designFile.length;
	}
	else if (cat == 2) //photog
	{
		if (thisPic >= photogFile.length)
		{
			thisPic = 0;
		}
		
		$("currentImage").src = picturePath + photogFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = photogCaption[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + photogFile.length;
	}
	else if (cat == 4) //video
	{
		if (thisPic >= videoFile.length)
		{
			thisPic = 0;
		}
		
		$("mp4Src").src = videoFile[thisPic];
		$("currentVideo").load();
		curNumPic = thisPic + 1;
		$("caption").innerHTML = videoCaption[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + videoFile.length;
	}
	else if (cat == 5) //interactive
	{
		if (thisPic >= interactiveFile.length)
		{
			thisPic = 0;
		}
		
		$("currentInteractive").src = picturePath + interactiveDoc[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = interactiveCaption[curNumPic];
		$("imageCounter").innerHTML = curNumPic + " of " + interactiveFile.length;
	}
	
	return false;
}

var prevPic = function()
{
	event.preventDefault();
	
	thisPic--;
	
	$("loading").style.display = "inline";
	
	if (cat == 1) //design
	{
		if (thisPic < 0)
		{
			thisPic = designFile.length - 1;
		}
		
		$("currentImage").src = picturePath + designDoc[thisPic];
		$("caption").innerHTML = designCaption[thisPic];
		curNumPic = thisPic + 1;
		$("imageCounter").innerHTML = curNumPic + " of " + designFile.length;
	}
	else if (cat == 2) //photography
	{
		if (thisPic < 0)
		{
			thisPic = photogFile.length - 1;
		}
		
		$("currentImage").src = picturePath + photogFile[thisPic];
		$("caption").innerHTML = photogCaption[thisPic];
		curNumPic = thisPic + 1;
		$("imageCounter").innerHTML = curNumPic + " of " + photogFile.length;
	}
	else if (cat == 5) //interactive
	{
		if (thisPic < 0)
		{
			thisPic = interactiveFile.length - 1;
		}
		
		$("currentInteractive").src = picturePath + interactiveDoc[thisPic];
		$("caption").innerHTML = interactiveCaption[thisPic];
		curNumPic = thisPic + 1;
		$("imageCounter").innerHTML = curNumPic + " of " + interactiveFile.length;
	}
	
	return false;
}

var closeGallery = function()
{
	$("blackout").style.opacity = "";
	$("imageHolder").style.opacity = "";
	
	setTimeout(closeNice, 750);
}

var closeNice = function()
{
	$("blackout").style.visibility = "";
	$("blackout").style.width = "";
	$("blackout").style.height = "";
	
	$("imageHolder").style.width = "";
	$("imageHolder").style.marginTop = "";
	$("imageHolder").style.marginLeft = "";
	$("imageHolder").style.visibility = "";
	$("imageHolder").style.height = "";
	
	$("currentImage").style.display = "";
	$("currentVideo").style.display = "";
	$("playerButton").style.visibility = "";
	$("currentInteractive").style.display = "";
}