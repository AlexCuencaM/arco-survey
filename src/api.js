var BASE_URL = "http://localhost:5000/api/v1";
const getIsLogged = () => JSON.parse(localStorage.getItem("isLogged")) ?? {isLogged: false};
const setIsLogged = (isLogged) => {
    localStorage.setItem("isLogged", JSON.stringify({isLogged}) );
}
const getLoginResponse = () => localStorage.getItem("isLogged") || {
    id_estudio: 0,
    codigo_acceso: ""
};
const setLoginResponse = (response) => {
    localStorage.setItem("loginResponse", JSON.stringify(response));
}
setIsLogged(false)

const loggedSuccessfully = (res) => {
    setLoginResponse({
        id_estudio: res.id_estudio,
        codigo_acceso: res.codigo_acceso
    })
    setIsLogged(false);
    window.location = "./surveyAccess.html"
}

const loggingUnsuccessfully = () => {
    if(!getIsLogged().isLogged){
        window.location = "./login.html"
    }
}
const loggingSuccessfully = () => {
    if(getIsLogged().isLogged){
        window.location = "./surveyAccess.html"
    }
}

const sendPost = async (endpoint, body) => {
    try{
        const request1 = new Request(`${BASE_URL}/${endpoint}`, {
            method: "POST",
            body: JSON.stringify(body),
          });
          const response = await fetch(request1);
          return await response.json()
    }
    catch(err){
        console.error(err)
    }
}