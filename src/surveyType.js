( () => {
    loggingUnsuccessfully();
    // Function Body...
    document.getElementById("behavior").addEventListener("click", e => {
        window.location = "./surveyBehavior.html"
    });
    document.getElementById("interest").addEventListener("click", e => {
        window.location = "./surveyInterest.html"
    });
    document.getElementById("archetype").addEventListener("click", e => {
        window.location = "./surveyArchetype.html"
    });
} )();