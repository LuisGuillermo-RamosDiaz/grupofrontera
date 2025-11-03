document.addEventListener("DOMContentLoaded", function () {
    const infoMap = {
    payo: `
        <h2>Adelaido "Payo" Solís III</h2>
        <p><strong>Voz y Bajo Quinto de Grupo Frontera</strong></p><br>
        <p>Adelaido Solís III, conocido como "Payo", nació el 23 de marzo de 2003 en el Valle de Texas. Hijo de Norma A. Solís y Payo Solís II, desciende de una familia mexicana con raíces en Tamaulipas y Nuevo León. Su apodo es parte de un legado familiar que abarca tres generaciones. Desde niño mostró inclinación musical, aprendiendo a tocar bajo quinto y acordeón influenciado por su entorno familiar.</p><br>
        <p>Tras graduarse en 2022, fue contactado por Juan Javier Cantú de Grupo Frontera, quien lo descubrió por TikTok. Pese a su inicial desinterés, su padre lo convenció de unirse. El grupo se hizo viral con "No se va", grabada tras solo 16 horas de ensayo. La canción y su baile en TikTok impulsaron el reconocimiento internacional del grupo.</p><br>
        <p>Payo se consolidó como la voz del grupo, colaborando con figuras como Bad Bunny ("Un x100to"), Shakira ("Entre paréntesis") y Yahritza y Su Esencia ("Frágil"). Ha participado en álbumes como "El Comienzo" (2023) y "Jugando a Que No Pasa Nada" (2024), mezclando géneros como cumbia norteña, country, R&B y bachata.</p><br>
        <p>Fuera del escenario, se caracteriza por su humildad. En redes comparte su vida bajo @payo_frontera. Mide 1.80 m y destaca por su apariencia madura. En 2025 enfrentó una controversia política que desmintió junto al grupo, reafirmando su orgullo por sus raíces mexicanas.</p><br>
        <p>Actualmente, lidera Grupo Frontera junto a Cantú, Peña Jr., Acosta y Guerrero. Tras el despido de Brian Ortega, continúan su gira internacional. Payo representa el puente entre tradición y modernidad en la música regional mexicana.</p>
    `,

    juan: `
        <h2>Juan Javier Cantú</h2>
        <p><strong>Voz y Acordeón de Grupo Frontera</strong></p><br>
        <p>Juan Javier Cantú es cofundador y motor creativo de Grupo Frontera. Desde niño se formó en la música regional mexicana, dominando el acordeón bajo influencias del norteño y la cumbia. Antes de alcanzar la fama, trabajaba en empleos convencionales mientras la banda funcionaba como un proyecto paralelo en 2019.</p><br>
        <p>Su liderazgo y visión artística transformaron al grupo de una banda local de bodas y quinceañeras a un fenómeno internacional. Como vocalista y acordeonista, fusiona tradiciones mexicanas con pop, electrónica y R&B. Fue pieza clave en el éxito viral "No Se Va" (2022), incorporando congas y ritmos urbanos al sonido norteño.</p><br>
        <p>Colabora con el productor Edgar Barrera en éxitos como "Que Vuelvas" y "Un x100to", destacando por su convicción de que "el público nos hizo globales". Dirigió al grupo en momentos clave como el Grito de Independencia en el Zócalo (2023), invitado por el presidente López Obrador. A pesar de su bajo perfil personal, impulsa la evolución musical del grupo, con experimentaciones en géneros como el country y la bachata en el álbum "Jugando a Que No Pasa Nada" (2024).</p><br>
    `,
    julian: `
        <h2>Julian Peña Jr.</h2>
        <p><strong>Congas y Percusionista de Grupo Frontera</strong></p><br>
        <p>Julian Peña Jr. es el encargado de las congas y la energía rítmica de Grupo Frontera. Se integró al proyecto en 2019, tras dejar su trabajo como fotógrafo de bodas. Su estilo enérgico marcó el carácter distintivo del grupo, especialmente con su contribución esencial a "No Se Va", donde improvisó la base rítmica durante un ensayo maratónico de 16 horas.</p><br>
        <p>Además de su rol como percusionista, funge como animador en los conciertos, generando momentos virales al interactuar con el público. Su frase resume su entrega: "El comienzo es todo: sudor, lágrimas... ahora queremos que la gente sienta al cantar nuestras canciones".</p><br>
        <p>Peña representa el puente cultural del grupo, reafirmando sus raíces mexicanas durante momentos de controversia pública, como en 2025 cuando defendió el orgullo de ser fronterizo. Impulsa colaboraciones internacionales como "Los Dos" con Morat (2024), reforzando la identidad híbrida de Frontera.</p><br>
    `,
    beto: `
        <h2>Alberto "Beto" Acosta</h2>
        <p><strong>Bajo Quinto de Grupo Frontera</strong></p><br>
        <p>Antes de formar parte del grupo, Alberto Acosta trabajaba como fotógrafo de eventos como bodas y quinceañeras.</p><br>
        <p>Junto con Cantú co‑fundó el grupo en 2022. Su bajo quinto aporta el sonido regional moderno presente desde los covers caseros hasta los álbumes oficiales.</p><br>
        <p>Participó en “El Comienzo” (2023) y “Jugando a que no pasa nada” (2024), colaborando con artistas como Bad Bunny, Shakira, Nicki Nicole y Carín León.</p><br>
        <p>En entrevistas de 2025 expresó desacuerdo con el muro fronterizo, destacó la importancia de apoyar a la comunidad migrante mediante donaciones y acciones solidarias.</p>
    `,
    carlos: `
        <h2>Alberto "Beto" Acosta</h2>
        <p><strong>Bajo Quinto de Grupo Frontera</strong></p><br>
        <p>Alberto Acosta, apodado "Beto", es maestro del bajo quinto, instrumento esencial del norteño. Se unió a Grupo Frontera en sus inicios (2019), aportando su experiencia en grupos locales. Su bajo, construido por Bajosextos Hernández, se ha vuelto parte del sello distintivo del grupo, mezclando graves tradicionales con técnicas contemporáneas.</p><br>
        <p>En el álbum "El Comienzo" (2023), Beto consolidó el sonido característico de Frontera al integrar cumbia y corridos tumbados. Participó con un solo en "Bebe Dame" (junto a Fuerza Regida), que alcanzó el #1 en Billboard Latin Songs. Su estilo combina técnica con identidad cultural, afirmando que "venimos de Juan Gabriel y Vicente Fernández; ahora nos toca llevar la antorcha".</p><br>
        <p>En "Jugando a Que No Pasa Nada" (2024), contribuyó a explorar géneros como la bachata y el country sin perder la esencia regional. Fuera del escenario, es reconocido por su serenidad y compromiso con el trabajo colectivo dentro del grupo.</p>
    `
    };

    const ventana = document.getElementById('ventana-emergente');
    const modal = document.getElementById('contenedor-emergente');
    const modalContent = document.getElementById('contenido-ventana');
    const btnClose = document.getElementById('cerrar-ventana');

    document.querySelectorAll('.ver-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        modalContent.innerHTML = infoMap[id] || '<p>Información no disponible.</p>';
        ventana.classList.add('show');
        modal.classList.add('show');
    });
    });

    btnClose.addEventListener('click', () => {
    ventana.classList.remove('show');
    modal.classList.remove('show');
    });

    ventana.addEventListener('click', () => {
    ventana.classList.remove('show');
    modal.classList.remove('show');
    });
});
