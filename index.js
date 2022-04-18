const lines = [
    "Being funny since 2006",
    "Hopefully this doesn't violate 39 copyright laws",
    "This text should not appear. (jk it totally should)",
    "ayo il fait quoi le chien?",
    "French, and proud!",
    "The typical nerd in your high school class.",
    "You thought it was just a funny message, but IT WAS I, DI-",
    "When 0.1.6?",
    "And knuckles",
    "Local rhythm game addict",
    "Born to oneshot forced to cue",
    "Yeah I'm just a normal gaming youtuber, I swear.",
    "h",
    "Unable to locate the funny.",
    "I have too many projects, I seriously need to calm down!",
    "I am 1 kilometer from your location, and flying towards it rapidly."
]

function switchTab(tabNum) {
    var element = document.getElementById("tab"+tabNum)
    document.getElementById("tab1").style.display = "none";
    document.getElementById("tab2").style.display = "none";
    document.getElementById("tab3").style.display = "none";
    document.getElementById("tab4").style.display = "none";
    if (element.style.display === "none") {
        element.style.display = "block";
    }
}
var subtitleElement = document.getElementById("modifyableQuote");
subtitleElement.textContent = lines[Math.floor(Math.random()*(lines.length-1))]