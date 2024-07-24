( () => {
    loggingSuccessfully();
    // Function Body...
    document.querySelector("form").addEventListener("submit", e => {
        e.preventDefault();
        const currentForm = e.target;
        const sendData= {
            email: currentForm?.elements["email"]?.value ?? "",
            contrasena: currentForm?.elements["password"]?.value ?? "",
        }        
        sendPost("auth/login", sendData).then(loggedSuccessfully);
    });
} )();