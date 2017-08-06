var hotNetworkQuestions = document.getElementById("hot-network-questions");
var hireMe = document.getElementById("hire-me");
var communityBulletin = document.getElementsByClassName("community-bulletin");
var newsletterAd = document.getElementById("newletter-ad");
var chatFeature = document.getElementById("chat-feature");

if(hotNetworkQuestions)
{
  hotNetworkQuestions.style.display = "block";
}

if(hireMe)
{
  hireMe.style.display = "block";
}

if(communityBulletin.length > 0)
{
  communityBulletin[0].style.display = "block";
}

if(newsletterAd)
{
  newsletterAd.style.display = "block";
}

if(chatFeature)
{
  chatFeature.style.display = "block";
}
