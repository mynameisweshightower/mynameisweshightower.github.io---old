var $ = function(id)
{
	return document.getElementById(id);
}

window.onload = function()
{
	
}

window.onscroll = function()
{
	//nav response
	if (window.scrollY >= 85)
	{
		if (window.innerWidth <= 320)
		{
			$("navHolder").style.height = "160px";
			$("navAbout").style.display = "inline";
			$("navPortfolio").style.display = "inline";
			$("navContact").style.display = "inline";
			$("navResume").style.display = "inline";
			$("mainNav").style.bottom = "1.2em";
		}
		else if (window.innerWidth > 320 && window.innerWidth < 481)
		{
			//prevent nav items from stacking if scrolled down
			$("navHolder").style.top = "-85px";
			$("navHolder").style.height = "130px";
			$("navAbout").style.display = "inline";
			$("navPortfolio").style.display = "inline";
			$("navContact").style.display = "inline";
			$("navResume").style.display = "inline";
			$("mainNav").style.bottom = "1.2em";
			$("mainNav").style.right = "0em";
			$("mainNav").style.left = "auto";
			$("headHolder").style.marginTop = "130px";
		}
		else
		{
			$("navAbout").style.display = "inline";
			$("navPortfolio").style.display = "inline";
			$("navContact").style.display = "inline";
			$("navResume").style.display = "inline";
			$("mainNav").style.left = "";
		}
	}
	else
	{
		$("navHolder").style.height = "";
		$("navAbout").style.display = "";
		$("navPortfolio").style.display = "";
		$("navContact").style.display = "";
		$("navResume").style.display = "";
		$("mainNav").style.bottom = "";
		$("mainNav").style.left = "";
		$("mainNav").style.right = "";
		$("headHolder").style.marginTop = "";
	}
	
	//sticky nav
	if (window.scrollY >= 85)
	{
		$("navHolder").style.position = "fixed";
		$("navHolder").style.top = "-85px";
		$("logo").style.width = "51px";
		$("logo").style.height = "32px";
		$("logo").style.marginTop = "92px";
		$("headHolder").style.marginTop = "130px";
		$("subNavHolder").style.position = "fixed";
		$("subNavHolder").style.top = "45px";
		
		if (window.innerWidth <= 320)
		{
			$("logo").style.marginTop = "88px";
			$("subNavHolder").style.top = "74px";
		}
	}
	else
	{
		$("navHolder").style.position = "";
		$("navHolder").style.top = "";
		$("logo").style.width = "";
		$("logo").style.height = "";
		$("logo").style.marginTop = "";
		$("headHolder").style.marginTop = "";
		$("subNavHolder").style.position = "";
		$("subNavHolder").style.top = "";
	}
}

window.onresize = function()
{
	//nav response
	if (window.scrollY >= 85)
	{
		if (window.innerWidth <= 320)
		{
			$("navHolder").style.height = "160px";
			$("navAbout").style.display = "inline";
			$("navPortfolio").style.display = "inline";
			$("navContact").style.display = "inline";
			$("navResume").style.display = "inline";
			$("mainNav").style.bottom = "1.2em";
			$("subNavHolder").style.top = "74px";
			$("logo").style.marginTop = "88px";
		}
		else if (window.innerWidth > 320 && window.innerWidth < 481)
		{
			//prevent nav items from stacking if scrolled down
			$("navHolder").style.top = "-85px";
			$("navHolder").style.height = "130px";
			$("navAbout").style.display = "inline";
			$("navPortfolio").style.display = "inline";
			$("navContact").style.display = "inline";
			$("navResume").style.display = "inline";
			$("mainNav").style.bottom = "1.2em";
			$("mainNav").style.right = "0em";
			$("mainNav").style.left = "auto";
			$("headHolder").style.marginTop = "130px";
			$("subNavHolder").style.top = "45px";
			$("logo").style.marginTop = "92px";
		}
		else
		{
			$("navAbout").style.display = "inline";
			$("navPortfolio").style.display = "inline";
			$("navContact").style.display = "inline";
			$("navResume").style.display = "inline";
			$("mainNav").style.left = "";
		}
	}
	else
	{
		$("navHolder").style.height = "";
		$("navAbout").style.display = "";
		$("navPortfolio").style.display = "";
		$("navContact").style.display = "";
		$("navResume").style.display = "";
		$("mainNav").style.bottom = "";
		$("mainNav").style.left = "";
		$("mainNav").style.right = "";
		$("headHolder").style.marginTop = "";
	}
	
	//keep gallery centered
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
}

//design picture array
var i;
var cat;
var designFile = Array("../stock/images/design1.jpg", "../stock/images/design2.jpg", "../stock/images/design3.jpg", "../stock/images/design4.jpg", "../stock/images/design5.jpg");
var designCaption = Array("Design 1", "Design 2", "Design 3", "Design 4", "Design 5");
var designExp = "This a brief description of the design section. This a brief description of the design section. This a brief description of the design section.";

var showDesign = function()
{
	i = 0;
	cat = 1;
	
	$("explanation").innerHTML = designExp;
	$("thumbs").innerHTML = "";
	$("designLink").style.backgroundPosition = "0px 0px";
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
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='showImage(" + i + ")'><img src='" + designFile[i] + "' /></a></div>";
		i++;
	}
	
	return false;
	
}

var photogFile = Array("../stock/images/photog1.jpg", "../stock/images/photog2.jpg", "../stock/images/photog3.jpg", "../stock/images/photog4.jpg", "../stock/images/photog5.jpg");
var photogCaption = Array("Pictogram 1", "Lithograph 2", "Picture 3", "Photo 4", "Photograph 5");
var photogExp = "This a brief description of the photog section. This a brief description of the photog section. This a brief description of the photog section.";

var showPhotography = function()
{
	i = 0;
	cat = 2;
	
	$("explanation").innerHTML = photogExp;
	$("thumbs").innerHTML = "";
	
	$("designLink").style.backgroundPosition = "";
	$("designLink").style.color = "";
	$("photographyLink").style.backgroundPosition = "0px 0px";
	$("photographyLink").style.color = "#54E1EB";
	$("audioLink").style.backgroundPosition = "";
	$("audioLink").style.color = "";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < photogFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='showImage(" + i + ")'  id='" + i + "'><img src='" + photogFile[i] + "'/></a></div>";
		i++;
	}
	
	return false;
}

var audiomp3 = Array("../stock/audio/audio1.mp3", "../stock/audio/audio2.mp3", "../stock/audio/audio3.mp3", "../stock/audio/audio4.mp3", "../stock/audio/audio5.mp3");
var audioogg = Array("../stock/audio/audio1.ogg", "../stock/audio/audio2.ogg", "../stock/audio/audio3.ogg", "../stock/audio/audio4.ogg", "../stock/audio/audio5.ogg");
var audioTitle = Array("Audio 1", "Audio 2", "Audio 3", "Audio 4", "Audio 5");
var audioDesc = Array("Description 1", "Description 2", "Description 3", "Description 4", "Description 5");
var audioExp = "This a brief description of the audio section. This a brief description of the audio section. This a brief description of the audio section.";

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
	$("audioLink").style.backgroundPosition = "0px 0px";
	$("audioLink").style.color = "#54E1EB";
	$("videoLink").style.backgroundPosition = "";
	$("videoLink").style.color = "";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < audiomp3.length)
	{
		$("thumbs").innerHTML += "<div class='songHolder'>" +
		"<h4>" + audioTitle[i] + "</h4>" +
		"<span>" + audioDesc[i] + "</span>" +
		"<audio id='song" + i + "'>" +
	    "<source src='" + audiomp3[i] + "' type='audio/mp3'>" +
	    "<source src='" + audioogg[i] + "' type='audio/ogg'>" +
	    "Your browser does not support the Audio tag." +
	    "</audio>" +
		"<a href='#' id='audioControl" + i + "' onclick='return playAudio(" + i + ")'><img src='../stock/images/play.png' class='aButton' id='audioButton" + i + "'/></a>" +
		"</div>";
		
		i++;
	}
	
	return false;
}

var playAudio = function(i)
{
	if ($("song" + i).paused)
	{
		$("song" + i).play();
		$("audioButton" + i).src = "../stock/images/pause.png";
	}
	else
	{
		$("song" + i).pause();
		$("audioButton" + i).src = "../stock/images/play.png";
	}
	
	return false;
}

var videoFile = Array("../stock/video/video1.mp4", "../stock/video/video2.mp4", "../stock/video/video3.mp4", "../stock/video/video4.mp4", "../stock/video/video5.mp4");
var videoCaption = Array("Video 1", "Video 2", "Video 3", "Video 4", "Video 5");
var videoExp = "This a brief description of the video section. This a brief description of the video section. This a brief description of the video section.";

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
	$("videoLink").style.backgroundPosition = "0px 0px";
	$("videoLink").style.color = "#54E1EB";
	$("interactiveLink").style.backgroundPosition = "";
	$("interactiveLink").style.color = "";
	
	while (i < videoFile.length)
	{
		$("thumbs").innerHTML += "<div class='vidHolder'>" + //<a href='#' onclick='showVideo(" + i + ")'  id='" + i + "'>;
								"<video id='mov" + i + "'>" +
								"<source src='" + videoFile[i] + "' type='video/mp4'>" +
								"<source src='#' type='video/ogg'>" +
								"Your browser does not support the video tag." +
								"</video>" +
								"<a href='#' id='movieControl' onclick='return playVid(" + i + ")'><img src='../stock/images/play.png' id='playerButton" + i + "' /></a>" +
								"<span>" + videoCaption[i] + "</span>" +
								"</div>";
		i++;
	}
	
	return false;
}

var playVid = function(i)
{
	if ($("mov" + i).paused)
	{
		$("mov" + i).play();
		$("playerButton" + i).src = "../stock/images/pause.png";
	}
	else
	{
		$("mov" + i).pause();
		$("playerButton" + i).src = "../stock/images/play.png";
	}
	return false;
}

var interactiveFile = Array("../stock/images/interactive1.jpg", "../stock/images/interactive2.jpg", "../stock/images/interactive3.jpg", "../stock/images/interactive4.jpg", "../stock/images/interactive5.jpg");
var interactiveCaption = Array("A Thingy 1", "Thing 2", "Flash 3", "Director? 4", "Thing 5");
var interactiveExp = "This a brief description of the interactive section. This a brief description of the interactive section. This a brief description of the interactive section.";

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
	$("interactiveLink").style.backgroundPosition = "0px 0px";
	$("interactiveLink").style.color = "#54E1EB";
	
	while (i < interactiveFile.length)
	{
		$("thumbs").innerHTML += "<div class='thumbNail'><a href='#' onclick='showImage(" + i + ")'  id='" + i + "'><img src='" + interactiveFile[i] + "'/></a></div>";
		i++;
	}
	
	return false;
}

//DISPLAY FULL SIZED IMAGE
var thisPic;
var currNumPic;

var showImage = function(i)
{
	$("blackout").style.visibility = "visible";
	$("blackout").style.width = "100%";
	$("blackout").style.height = "100%";
	$("blackout").style.opacity = "1";
	$("imageHolder").style.visibility = "visible";
	$("imageHolder").style.opacity = "1";
	
	if (cat == 1) //design
	{
		$("currentImage").src = designFile[i];
		thisPic = i;
		$("caption").innerHTML = designCaption[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + designFile.length;
		//alert(i);
	}
	else if (cat == 2) //photog
	{
		$("currentImage").src = photogFile[i];
		$("caption").innerHTML = photogCaption[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + photogFile.length;
		thisPic = i;
	}
	else if (cat == 5)
	{
		$("currentImage").src = interactiveFile[i];
		$("caption").innerHTML = interactiveCaption[i];
		$("imageCounter").innerHTML = (i + 1) + " of " + interactiveFile.length;
		thisPic = i;
	}
	
	$("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	
	return false;
}

var nextPic = function()
{
	thisPic++;
	
	if (cat == 1) //design
	{
		if (thisPic >= designFile.length)
		{
			thisPic = 0;
		}

		$("currentImage").src = designFile[thisPic];
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
		
		$("currentImage").src = photogFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = photogCaption[thisPic];
		$("imageCounter").innerHTML = curNumPic + " of " + photogFile.length;
	}
	else if (cat == 5) //interactive
	{
		if (thisPic >= interactiveFile.length)
		{
			thisPic = 0;
		}
		
		$("currentImage").src = interactiveFile[thisPic];
		curNumPic = thisPic + 1;
		$("caption").innerHTML = interactiveCaption[curNumPic];
		$("imageCounter").innerHTML = curNumPic + " of " + interactiveFile.length;
	}
	
	$("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
	
	return false;
}

var prevPic = function()
{
	thisPic--;
	
	if (cat == 1) //design
	{
		if (thisPic < 0)
		{
			thisPic = designFile.length - 1;
		}
		
		$("currentImage").src = designFile[thisPic];
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
		
		$("currentImage").src = photogFile[thisPic];
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
		
		$("currentImage").src = interactiveFile[thisPic];
		$("caption").innerHTML = interactiveCaption[thisPic];
		curNumPic = thisPic + 1;
		$("imageCounter").innerHTML = curNumPic + " of " + interactiveFile.length;
	}
	
	$("imageHolder").style.width = $("currentImage").width + 30 + "px";
	$("imageHolder").style.height = $("currentImage").height + 60 + "px";
	$("imageHolder").style.top = "50%";
	$("imageHolder").style.left = "50%";
	$("imageHolder").style.marginTop = (($("currentImage").height + 120) / 2) * (-1) + "px";
	$("imageHolder").style.marginLeft = (($("currentImage").width + 30) / 2) * (-1) + "px";
	
	return false;
}

var closeGallery = function()
{
	$("blackout").style.visibility = "";
	$("blackout").style.width = "";
	$("blackout").style.height = "";
	$("blackout").opacity = "";
	$("imageHolder").style.width = "";
	$("imageHolder").style.marginTop = "";
	$("imageHolder").style.marginLeft = "";
	$("imageHolder").style.opacity = "";
	$("imageHolder").style.visibility = "";
	$("imageHolder").style.height = "";
}