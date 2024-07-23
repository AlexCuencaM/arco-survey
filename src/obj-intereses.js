
( () => {
    const gruposPalabrasIntereses = [
        {
          grupo: 1,
          palabras: [
            "Conocimiento y Teoría",
            "Logros y Avances",
            "Estructura y Tradiciones",
            "Armonía y Unión",
            "Retorno de inversiones y beneficios",
            "Solidario y generoso"
          ]
        },
        {
          grupo: 2,
          palabras: [
            "Ser un líder",
            "Proteger mis creencias",
            "Apreciar la belleza y la naturaleza",
            "Emplear mi tiempo de la mejor manera",
            "Servir a los demás",
            "Expandir mi conocimiento"
          ]
        },
        {
          grupo: 3,
          palabras: [
            "Trabajo voluntario",
            "Aprender nuevos conceptos",
            "Hacer el papel de mentor y organizar a los demás",
            "Invertir/ Gastar dinero",
            "Disfrutar de una actuación",
            "Rutinas establecidas"
          ]
        },
        {
          grupo: 4,
          palabras: [
            "Reconocimiento",
            "Educación continua",
            "Valores tradicionales",
            "Ayudar a los demás",
            "Incrementar mi patrimonio personal",
            "Momentos de tranquilidad"
          ]
        },
        {
          grupo: 5,
          palabras: [
            "Disfrutar la experiencia",
            "Investigar sobre nuevos temas",
            "Desarrollar un negocio",
            "Guiar a los demás",
            "Aplicar mis principios",
            "Apoyar esfuerzos humanitarios"
          ]
        },
        {
          grupo: 6,
          palabras: [
            "Establecer estructura y costumbres",
            "Ayudar a los necesitados",
            "Roles de liderazgo",
            "Generar recursos para el futuro",
            "Educación adicional",
            "Embellecer mi entorno"
          ]
        },
        {
          grupo: 7,
          palabras: [
            "Fomentar la armonía y balance",
            "Lograr una posición elevada",
            "Contribuir a la caridad",
            "Maximizar los recursos",
            "Incrementar mis conocimientos",
            "Trabajar en un ambiente estructurado"
          ]
        },
        {
          grupo: 8,
          palabras: [
            "Ayudar a los indigentes",
            "Crear una estrategia para ganar",
            "Aprendizaje de por vida",
            "Llevar una vida balanceada",
            "Mejorar la productividad",
            "Sistema de vida basado en principios"
          ]
        },
        {
          grupo: 9,
          palabras: [
            "Líder humanitario",
            "Líder reconocido",
            "Líder empresarial",
            "Líder pacifista",
            "Líder intelectual",
            "Líder basado en principios"
          ]
        },
        {
          grupo: 10,
          palabras: [
            "Ayudar a los enfermos y desamparados",
            "Desarrollar un negocio",
            "Desarrollar y mantener tradiciones",
            "Generar un ambiente atractivo",
            "Desarrollar recursos educativos",
            "Desarrollar un equipo ganador"
          ]
        },
        {
          grupo: 11,
          palabras: [
            "Ayudar a los demás",
            "Mejorar mi posición",
            "Tener flexibilidad financiera",
            "Expandir mis conocimientos",
            "Expansión creativa",
            "Compartir mis creencias"
          ]
        },
        {
          grupo: 12,
          palabras: [
            "Aplicar nuevos conceptos",
            "Experimentar el ambiente",
            "Retribuir a la sociedad",
            "Retorno de mis inversiones",
            "Dirigir a un grupo",
            "Actividades tradicionales"
          ]
        }
      ];
    const questionNumberedAnswers = (question) =>{
        const results = [];
        let i = 0;
        for (let value of question.palabras) {
            i++;
            results.push(`
                <div class="card">
                    <div class="card-content">
                        <div class="content is-flex is-align-content-center">
                            <p class="has-text-weight-bold">${i})&ensp;</p>
                            ${value}
                        </div>
                    </div>
                </div>
            `)

        }
        return `${results.join(" ")}`;
    }
    const questionGroup = (question) =>{
        return `<article class="message">
            <div class="message-header">
                <p>Grupo ${question.grupo} de palabras</p>
            </div>
            <div class="message-body">
                <div class ="grid">
                    <div class="cell sortable">
                        ${questionNumberedAnswers(question)}
                    </div>
                </div>
            </div>
          </article>`
    }
    
    document.getElementById("list").innerHTML = gruposPalabrasIntereses.map(questionGroup).join(" ")
    const listPanel = document.querySelectorAll(".grid .cell.sortable").forEach(panel => {
        const sortable = Sortable.create(panel, {
            onUpdate: 
            function (evt) {
            panel.querySelectorAll("p").forEach((p, index) => {
                p.innerHTML = index + 1 + ')&ensp;'
            })
        },});
    });
    document.querySelector(".button.is-success").addEventListener("click", e => {
        window.location = "./surveyType.html"
    });
} )();