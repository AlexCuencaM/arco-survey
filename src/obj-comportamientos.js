

( () => {
    const gruposPalabrasComportamientos = [
        {
          grupo: 1,
          palabras: ["Entusiasta", "Contento, Satisfecho", "Positivo, Confiado en sí mismo", "En paz, tranquilo"]
        },
        {
          grupo: 2,
          palabras: ["Cuidadoso, Calculador", "Audaz, Atrevido", "Apoya a los demás", "Encantador, Agradable"]
        },
        {
          grupo: 3,
          palabras: ["Expresivo", "Atrevido, Toma riesgos", "Diplomático, discreto", "Satisfecho, Contento"]
        },
        {
          grupo: 4,
          palabras: ["Respetuoso, muestra respeto", "Pionero, explorador, emprendedor", "Optimista", "Servicial, le gusta complacer a los demás, disponible"]
        },
        {
          grupo: 5,
          palabras: ["Dispuesto a hacer las cosas, amable", "Ansioso, impaciente", "Metódico", "Animado, alegre, entusiasta"]
        },
        {
          grupo: 6,
          palabras: ["Lógico", "Obediente, hace las cosas como le dicen, cumplidor", "Inconquistable, determinado", "Divertido, juguetón, alegre"]
        },
        {
          grupo: 7,
          palabras: ["Aventurero, Toma riesgos", "Analítico", "Cordial, cálido, amable", "Moderado, evita extremos"]
        },
        {
          grupo: 8,
          palabras: ["Sociable, disfruta de la compañía de otros", "Estructurado", "Vigoroso, incansable", "Benévolo, tolera las acciones de los demás"]
        },
        {
          grupo: 9,
          palabras: ["Competitivo, busca ganar", "Considerado, atento, amable", "Extrovertido, le gusta pasarla bien, sociable", "Armonioso, adaptable"]
        },
        {
          grupo: 10,
          palabras: ["Agresivo, retador, toma la acción", "Alma de la fiesta, extrovertido, entretenido", "Ingenuo, los demás toman ventaja de él", "Temeroso, intimidado"]
        },
        {
          grupo: 11,
          palabras: ["Anima a los demás", "Comprensivo, compasivo, solidario", "Tolerante", "Agresivo"]
        },
        {
          grupo: 12,
          palabras: ["Elocuente, conversador", "Controlado, restringido", "Convencional, rutinario", "Decisivo, certero, firme en la toma de decisiones"]
        },
        {
          grupo: 13,
          palabras: ["Disciplinado, tiene auto-control", "Generoso, dispuesto a compartir", "Animado, utiliza muchos gestos para expresarse", "Persistente, implacable, se rehúsa a renunciar"]
        },
        {
          grupo: 14,
          palabras: ["Sociable, disfruta de la compañía de los demás", "Paciente, consistente, deliberado", "Autónomo, independiente", "Habla suavemente, apacible, reservado"]
        },
        {
          grupo: 15,
          palabras: ["Amable, gentil", "Persuasivo, convincente", "Humilde, reservado, modesto", "Le cae bien a los demás"]
        },
        {
          grupo: 16,
          palabras: ["Cautivador", "Amable, gusta de dar y ayudar", "Resignado, cede", "De carácter fuerte, dominante"]
        },
        {
          grupo: 17,
          palabras: ["Buena compañía, sociable", "Sencillo", "Extrovertido, habla libre y audazmente", "Restringido, reservado, controlado"]
        },
        {
          grupo: 18,
          palabras: ["Objetivo, se fundamenta en hechos para opinar", "Amable, atento", "Voluntarioso, obstinado", "Divertido, alegre"]
        },
        {
          grupo: 19,
          palabras: ["Atractivo, encantador, atrae a los demás", "Sistemático", "Obstinado, inflexible", "Complaciente"]
        },
        {
          grupo: 20,
          palabras: ["Inquieto, capaz de descansar o relajarse", "Amigable, amistoso", "Popular, agradable para la mayoría", "Ordenado, organizado"]
        },
        {
          grupo: 21,
          palabras: ["Desafiante, asertivo", "Crítico", "Casual, relajado", "Alegre, despreocupado"]
        },
        {
          grupo: 22,
          palabras: ["Valiente, atrevido, con coraje", "Inspirador, motivador", "Evita la confrontación", "Callado, reservado"]
        },
        {
          grupo: 23,
          palabras: ["Cauteloso, precavido, cuidadoso", "Determinado, decidido, inquebrantable, firme", "Convincente, seguro de sí", "Complaciente, bondadoso"]
        },
        {
          grupo: 24,
          palabras: ["Jovial, bromista", "Organizado", "Vigoroso, osado, atrevido", "Sereno, calmado, no se entusiasma fácilmente"]
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
    
    document.getElementById("list").innerHTML = gruposPalabrasComportamientos.map(questionGroup).join(" ")
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