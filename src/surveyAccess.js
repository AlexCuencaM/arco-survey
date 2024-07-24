( () => {
    loggingUnsuccessfully();
    // Function Body...
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener("click", e => {
        dropdown.classList.toggle('is-active');
    });
    document.querySelector(".button.is-success").addEventListener("click", e => {
        window.location = "./surveyType.html"
    });

} )();