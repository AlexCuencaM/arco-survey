( () => {
    // Function Body...
    // loggingUnsuccessfully();
    const preguntasArquetipos = [
      {
        id: 1,
        pregunta: "Cuando te diriges a las personas, utilizas palabras...",
        opciones: {
          a: "Impositivas, acusadoras, de reclamo",
          b: "De cortesía, educadas, simpáticas, neutras",
          c: "Escogidas, abstractas, complicadas, utilizas oraciones largas",
          d: "Jocosas, confiadas. A veces sin sentido o relación"
        }
      },
      {
        id: 2,
        pregunta: "Con cuál de éstas palabras te identificas más…",
        opciones: {
          a: "Independiente",
          b: "Disciplinado",
          c: "Pacífico",
          d: "Divertido"
        }
      },
      {
        id: 3,
        pregunta: "Los contenidos más comunes en tus temas de conversación son:",
        opciones: {
          a: "Anécdotas, historias familiares, amistad",
          b: "Estadísticas, aspectos técnicos, tecnología, detalles y curiosidades",
          c: "De chistes, actividades amenas, lo que serás en el futuro, las cosas que sabes hacer",
          d: "De poder, influencia, control"
        }
      },
      {
        id: 4,
        pregunta: "Cuando entablas una relación interpersonal tu comunicación tiene un estilo.",
        opciones: {
          a: "Concreto y especializado, cuidadoso del estilo y confiabilidad de la información",
          b: "A veces vago, original, ocurrente. Orientado a ser el centro de atención.",
          c: "Directo, concreto y orientado hacia el control. Las cosas son blancas o negras.",
          d: "A ratos poco concreto, muy explicativo y cuidadoso, orientado a no dañar al otro."
        }
      },
      {
        id: 5,
        pregunta: "Te caracterizas por ser una persona..",
        opciones: {
          a: "Mucho movimiento, gesticulaciones y expresión facial abundante",
          b: "Erguida, rápida y tensa, a veces rígida corporalmente.",
          c: "Movimientos lentos y poco gesticulación, el cuerpo protege a la persona",
          d: "Controlas tus movimientos, quieres que sean perfectos y equilibrados. Extrema rigidez."
        }
      },
      {
        id: 6,
        pregunta: "Con cuál de éstas descripciones te identificas más:",
        opciones: {
          a: "Perfeccionista",
          b: "Comprensivo-Comprensiva",
          c: "Simpático-Simpática",
          d: "Osado-Osada"
        }
      },
      {
        id: 7,
        pregunta: "En las conversaciones tu tono de voz es...",
        opciones: {
          a: "Bajo y monótono (poca modulación).",
          b: "Lineal con tendencia a la pronunciación acentuada y seca.",
          c: "Alto con modulaciones variadas. Tu ánimo la influyen a menudo.",
          d: "Alto, intenso avasallante a veces, duro y tenso. Algunos dicen que eres gritón."
        }
      },
      {
        id: 8,
        pregunta: "Tu velocidad al hablar es...",
        opciones: {
          a: "Moderada, pausada",
          b: "Rápida",
          c: "Rápida y tajante",
          d: "Lenta con ritmo característico."
        }
      },
      {
        id: 9,
        pregunta: "Tu expresión facial más común es…",
        opciones: {
          a: "Relajada, sonriente, muchas muecas y buen contacto visual.",
          b: "Dura y seria, entrecejo fruncido, a veces dientes apretados y mirada fija",
          c: "Relajada y sonriente, muchas expresiones de empatía, cariño, etc.",
          d: "Calmada, fija y sin expresiones evidentes. Imperturbable a veces."
        }
      },
      {
        id: 10,
        pregunta: "En el Ciclo de Ventas, su mayor fortaleza es:",
        opciones: {
          a: "Preparar la estrategia para lograr la reunión, la venta o la negociación",
          b: "Desarrollar relaciones, caerle bien al cliente",
          c: "La acción: visitar clientes, llamadas telefónicas, cerrar el negocio",
          d: "Descubrir nuevas formas de lograr más ventas, visualizar las metas, mantener una actitud positiva."
        }
      },
      {
        id: 11,
        pregunta: "En actividades cotidianas te caracterizas por...",
        opciones: {
          a: "Ser más bien lento, no funcionas con precisión o te cuesta concentrarte.",
          b: "Ser mas bien metódico, calmado y muy ordenado.",
          c: "Ser ansioso, muy rápido, poco ordenado y te aburres con facilidad.",
          d: "Querer todo a la vez."
        }
      },
      {
        id: 12,
        pregunta: "Qué actitud asumes frente a los errores de los otros?",
        opciones: {
          a: "Corriges, sufres mucho, piensas que es falta de precisión.",
          b: "Haces frecuentemente caso omiso y tomas en cuenta a la persona y su esfuerzo personal.",
          c: "Poco tolerante, acusas inmediatamente. Los hechos son los hechos",
          d: "Corriges evitando hacerlo sentir mal. Te involucras aunque tengas que hacer sacrificios."
        }
      },
      {
        id: 13,
        pregunta: "De tu participación en un grupo, por lo general te interesa obtener...",
        opciones: {
          a: "Ser conocido, reconocimiento a tus méritos. Proyectarte.",
          b: "Influencias, contactos importantes. Hay objetivos detrás de las cosas que haces.",
          c: "Amistades y sinceridad.",
          d: "Conocimiento y sabiduría."
        }
      },
      {
        id: 14,
        pregunta: "Por lo general tu estado de ánimo es...",
        opciones: {
          a: "Explosivo, ansioso, tenso, invasivo.",
          b: "Calmado, buena disposición.",
          c: "Calmado, tenso, imperturbable, prefieres estar sólo.",
          d: "Impulsivo, explosivo, alegre, irrelevante."
        }
      },
      {
        id: 15,
        pregunta: "En tu casa o en la oficina eres...",
        opciones: {
          a: "Poco ordenado, aunque puedes mejorarlo, siempre serás despreocupado.",
          b: "Eres extremadamente metódico, ordenado, detallista y cuidadoso",
          c: "Poco ordenado, creativo, te gusta pasar de un tema a otro cuando deja de ser novedoso.",
          d: "Organizado, rápido, no te gusta perder el tiempo."
        }
      },
      {
        id: 16,
        pregunta: "En tu lograr tus metas principalmente en el campo del conocimiento y perfección.",
        opciones: {
          a: "Quedar bien ante la gente, lograr ser reconocido y admirado.",
          b: "Logras tus metas, lo que te has propuesto. Alcanzar el poder.",
          c: "En ser feliz, aceptado y querido.",
          d: "En ser feliz, aceptado y querido."
        }
      },
      {
        id: 17,
        pregunta: "Qué actitudes asumes en situaciones de conflicto…",
        opciones: {
          a: "Puedes estallar y por lo general te vas por la tangente, sin embargo, eres bueno escuchando cuando te lo propones y puedes negociar.",
          b: "Explosivo, atacas y defiendes apasionadamente tus opiniones. Te cuesta admitir equivocaciones. Frecuentemente no dejas hablar y a veces no escuchas.",
          c: "Evitas las confrontaciones y las situaciones tensas. Sabes ceder y quedar amigo.",
          d: "Eres racional y calculador, escondes y manejas tus emociones. Inflexible con tus reglas"
        }
      },
      {
        id: 18,
        pregunta: "En la negociación...",
        opciones: {
          a: "Presionas.",
          b: "Concilias.",
          c: "Analizas.",
          d: "Enfrías situaciones."
        }
      },
      {
        id: 19,
        pregunta: "Cuando tomas decisiones te motiva...",
        opciones: {
          a: "La amistad, el sentimiento.",
          b: "La información que posees.",
          c: "Tu olfato/intuición.",
          d: "Lograr tus metas."
        }
      },
      {
        id: 20,
        pregunta: "En la negociación...",
        opciones: {
          a: "Te gusta demostrar que tienes la razón.",
          b: "Te gusta sobresalir.",
          c: "Te gusta tener el control.",
          d: "Te gusta sentirte bien."
        }
      }
    ];
    const questionAnswers = (question) =>{
        const results = [];
        for (let [key, value] of Object.entries(question.opciones)) {
            results.push(`<a class="panel-block">
                  <span class="panel-icon">
                    ${key}
                  </span>
                  ${value}
                </a>`)
        }
        return `
                <p class="panel-heading">${question.id}. ${question.pregunta}</p>
                ${results.join(" ")}    `   
    }
    const questionGroup = (question) =>{
        return `<article class="panel is-link">
            ${questionAnswers(question)}
          </article>`
    }
    
    document.getElementById("list").innerHTML = preguntasArquetipos.map(questionGroup).join(" ")
    document.querySelectorAll("article").forEach(article => {

        article.addEventListener("click", e => {
            const clickedEl = e.target;
            const link = clickedEl.tagName === "SPAN" ? clickedEl.parentElement : clickedEl;
            article.querySelectorAll("a.panel-block").forEach(panelLink => {
                panelLink.classList.remove('is-active');
            })
            link.classList.toggle('is-active');
            console.log(link);
        })
    })
    document.querySelector(".button.is-success").addEventListener("click", e => {
        window.location = "./surveyType.html"
    });
} )();


