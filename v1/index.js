const lines = [
    "Not a furry for sure",
    "Hopefully this doesn't violate 69 copyright laws",
    "Join my discord :)",
    "ayo il fait quoi le chien? Il mange du pain",
    "French, and proud!",
   "Friday Night Funkin' addict",
    "Yeah I'm just a normal gaming youtuber, I swear.",
    "h",
    "I have too many fnf mods to code, I seriously need to calm down!"
]

function switchTab(tabNum) {
    var element = document.getElementById("tab"+tabNum)
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    if (element.style.display === "none") {
        element.style.display = "block";
    }
}
var subtitleElement = document.getElementById("modifyableQuote");
subtitleElement.textContent = lines[Math.floor(Math.random()*(lines.length-1))]
