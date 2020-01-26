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
}