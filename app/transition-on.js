var hotNetworkQuestions = document.getElementById("hot-network-questions");
var hireMe = document.getElementById("hire-me");
var communityBulletin = document.getElementsByClassName("community-bulletin");
var newsletterAd = document.getElementById("newletter-ad");
var chatFeature = document.getElementById("chat-feature");

if(hotNetworkQuestions)
{
  hotNetworkQuestions.style.display = "none";
}

if(hireMe)
{
  hireMe.style.display = "none";
}

if(communityBulletin.length > 0)
{
  communityBulletin[0].style.display = "none";
}

if(newsletterAd)
{
  newsletterAd.style.display = "none";
}

if(chatFeature)
{
  chatFeature.style.display = "none";
}
