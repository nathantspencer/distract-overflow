var hotNetworkQuestions = document.getElementById("hot-network-questions");
var hireme = document.getElementById("hireme");
var communityBulletin = document.getElementsByClassName("community-bulletin");
var newsletterAd = document.getElementById("newsletter-ad");
var chatFeature = document.getElementById("chat-feature");

if(hotNetworkQuestions) {
	hotNetworkQuestions.style.display = "none";
}

if(hireme) {
	hireme.style.display = "none";
}

if(communityBulletin.length > 0) {
	communityBulletin[0].style.display = "none";
}

if(newsletterAd) {
	newsletterAd.style.display = "none";
}

if(chatFeature) {
	chatFeature.style.display = "none";
}
