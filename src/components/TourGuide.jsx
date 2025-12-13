import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useLocation, useParams } from "react-router-dom";

export default function TourGuide() {
   const location = useLocation();
   const { id } = useParams();

   // Configuración del tour para la página de inicio
   const homePageTour = () => {
      const driverObj = driver({
         showProgress: true,
         showButtons: ["next", "previous", "close"],
         nextBtnText: "Siguiente",
         prevBtnText: "Anterior",
         doneBtnText: "Finalizar",
         progressText: "{{current}} de {{total}}",
         steps: [
            {
               element: "#app-logo",
               popover: {
                  title: "¡Bienvenido a ABC Digital! 👋",
                  description:
                     "Esta es tu plataforma educativa gratuita para aprender habilidades digitales básicas. Aquí podrás aprender a usar celulares, computadoras, navegar de forma segura en internet y mucho más. Te guiaremos paso a paso por todas las funcionalidades.",
                  side: "bottom",
                  align: "start",
               },
            },
            {
               element: "#nav-inicio",
               popover: {
                  title: "Navegación: Inicio 🏠",
                  description:
                     "Este enlace te lleva a la página principal donde verás todos los módulos educativos disponibles. Siempre puedes volver aquí para elegir otro módulo o revisar tu progreso general.",
                  side: "bottom",
                  align: "start",
               },
            },
            {
               element: "#nav-conocenos",
               popover: {
                  title: "Navegación: Conócenos 👥",
                  description:
                     "En esta sección puedes conocer más sobre el proyecto ABC Digital, quiénes somos, nuestra misión de hacer la educación digital accesible para todos, y cómo puedes contactarnos si tienes preguntas.",
                  side: "bottom",
                  align: "start",
               },
            },
            {
               element: "#hero-section",
               popover: {
                  title: "Centro de Aprendizaje 📚",
                  description:
                     "Aquí encontrarás todos los módulos educativos organizados por temas. Cada módulo contiene varias lecciones con videos explicativos y contenido escrito. Puedes aprender a tu propio ritmo, sin presiones.",
                  side: "bottom",
                  align: "center",
               },
            },
            {
               element: "#module-card-1",
               popover: {
                  title: "Módulo 1: Uso Básico de Celulares 📱",
                  description:
                     "Este módulo te enseña lo fundamental para usar un celular: cómo navegar por las pantallas, instalar y usar aplicaciones, configurar ajustes básicos, tomar fotos, enviar mensajes y mucho más. Ideal si estás empezando con smartphones.",
                  side: "left",
                  align: "start",
               },
            },
            {
               popover: {
                  title: "Módulo 2: Uso Básico de Computadoras 💻",
                  description:
                     "Aprende a usar una computadora desde cero: cómo encenderla y apagarla correctamente, navegar por el escritorio, usar el mouse y teclado, abrir programas, gestionar archivos y carpetas, y usar un navegador web.",
                  side: "center",
               },
            },
            {
               popover: {
                  title: "Módulo 3: Navegación Segura 🔒",
                  description:
                     "La seguridad en internet es crucial. Este módulo te enseña a identificar riesgos en línea, crear contraseñas seguras, proteger tu información personal, reconocer estafas y fraudes, y navegar de forma segura.",
                  side: "center",
               },
            },
            {
               popover: {
                  title: "Módulo 4: Búsqueda y Evaluación 🔍",
                  description:
                     "Aprende a buscar información en internet de forma efectiva usando Google y otros buscadores. También te enseñamos a verificar si la información es confiable, identificar noticias falsas y usar fuentes confiables.",
                  side: "center",
               },
            },
            {
               popover: {
                  title: "Módulo 5: Comunicación Digital 💬",
                  description:
                     "Descubre cómo comunicarte en el mundo digital: usar correo electrónico (email), aplicaciones de mensajería como WhatsApp, hacer videollamadas, compartir archivos y fotos, y mantener una comunicación respetuosa en línea.",
                  side: "center",
               },
            },
            {
               popover: {
                  title: "Módulo 6: Productividad 📊",
                  description:
                     "Herramientas para ser más productivo: crear documentos de texto, hojas de cálculo básicas, presentaciones, usar herramientas de colaboración en línea como Google Docs, y organizar tu trabajo digital.",
                  side: "center",
               },
            },
            {
               element: "#module-progress-1",
               popover: {
                  title: "Barra de Progreso 📈",
                  description:
                     "Esta barra muestra tu avance en cada módulo. Se actualiza automáticamente cuando completas lecciones. El porcentaje indica cuántas lecciones has terminado del total. ¡Motívate viendo tu progreso!",
                  side: "top",
                  align: "center",
               },
            },
            {
               element: "#module-button-1",
               popover: {
                  title: "Entrar al Módulo ▶️",
                  description:
                     "Haz clic en este botón para acceder a las lecciones del módulo. Verás una lista de todas las lecciones disponibles, cada una con un video explicativo y contenido escrito. Puedes hacerlas en el orden que prefieras.",
                  side: "top",
                  align: "center",
               },
            },
            {
               element: "#tts-button",
               popover: {
                  title: "Lector de Texto (TTS) 🔊",
                  description:
                     "Esta es una función de accesibilidad muy útil. Al activarla, el sistema leerá en voz alta el contenido de la página. Perfecto si prefieres escuchar en lugar de leer, o si tienes dificultades visuales. Puedes ajustar la velocidad de lectura en los controles.",
                  side: "left",
                  align: "start",
               },
            },
            {
               popover: {
                  title: "¡Listo para Empezar! 🎉",
                  description:
                     "Ya conoces todas las funcionalidades de ABC Digital. Recuerda: puedes aprender a tu propio ritmo, repetir lecciones cuantas veces quieras, y no hay límite de tiempo. ¡Disfruta aprendiendo y desarrollando tus habilidades digitales!",
               },
            },
         ],
         onDestroyStarted: () => {
            driverObj.destroy();
         },
      });

      driverObj.drive();
   };

   // Tour para la página de módulo
   const modulePageTour = () => {
      const driverObj = driver({
         showProgress: true,
         showButtons: ["next", "previous", "close"],
         nextBtnText: "Siguiente",
         prevBtnText: "Anterior",
         doneBtnText: "Finalizar",
         progressText: "{{current}} de {{total}}",
         steps: [
            {
               element: "h1",
               popover: {
                  title: "Título del Módulo 📖",
                  description:
                     "Este es el módulo que seleccionaste. Aquí verás todas las lecciones que componen este tema educativo.",
                  side: "bottom",
                  align: "center",
               },
            },
            {
               element: ".max-w-md",
               popover: {
                  title: "Progreso del Módulo 📊",
                  description:
                     'Esta barra muestra cuántas lecciones has completado de este módulo específico. El número indica "lecciones completadas de total de lecciones". Se actualiza automáticamente cuando terminas una lección.',
                  side: "bottom",
                  align: "center",
               },
            },
            {
               element: "ul.grid",
               popover: {
                  title: "Lista de Lecciones 📝",
                  description:
                     "Aquí están todas las lecciones del módulo. Cada tarjeta muestra: el número de lección, el título, una vista previa del contenido, y si está completada o pendiente. Puedes hacerlas en cualquier orden.",
                  side: "top",
                  align: "start",
               },
            },
            {
               element: "li:first-child",
               popover: {
                  title: "Tarjeta de Lección 🎯",
                  description:
                     "Cada lección tiene: un número o ✓ (si está completada), el título de la lección, una vista previa del contenido, y un indicador de estado (Completada/Pendiente). Haz clic en cualquier tarjeta para ver la lección completa con su video.",
                  side: "right",
                  align: "start",
               },
            },
            {
               popover: {
                  title: "Cómo Completar una Lección ✅",
                  description:
                     'Para completar una lección: 1) Haz clic en la tarjeta para abrirla, 2) Mira el video y lee el contenido, 3) Haz clic en "Marcar como completada" al final. La lección se marcará con una ✓ verde y tu progreso se actualizará automáticamente.',
               },
            },
            {
               element: "#tts-button",
               popover: {
                  title: "Lector de Texto 🔊",
                  description:
                     "El lector de texto también funciona aquí. Puede leer los títulos y descripciones de las lecciones en voz alta para ayudarte a decidir cuál hacer primero.",
                  side: "left",
                  align: "start",
               },
            },
            {
               popover: {
                  title: "¡Comienza a Aprender! 🚀",
                  description:
                     "Ahora puedes empezar con las lecciones. Recuerda: no hay prisa, puedes tomarte el tiempo que necesites. Cada lección tiene un video explicativo y contenido escrito. ¡Mucho éxito en tu aprendizaje!",
               },
            },
         ],
         onDestroyStarted: () => {
            driverObj.destroy();
         },
      });

      driverObj.drive();
   };

   // Verificar si es la primera visita y ejecutar el tour apropiado
   useEffect(() => {
      const hasSeenHomeTour = localStorage.getItem(
         "abc-digital-home-tour-completed"
      );
      const hasSeenModuleTour = localStorage.getItem(
         "abc-digital-module-tour-completed"
      );

      // Tour de home page
      if (!hasSeenHomeTour && location.pathname === "/") {
         const timer = setTimeout(() => {
            homePageTour();
            localStorage.setItem(
               "abc-digital-home-tour-completed",
               "true"
            );
         }, 1500);

         return () => clearTimeout(timer);
      }

      // Tour de module page
      if (
         !hasSeenModuleTour &&
         location.pathname.includes("/modulo/") &&
         !location.pathname.includes("/leccion/")
      ) {
         const timer = setTimeout(() => {
            modulePageTour();
            localStorage.setItem(
               "abc-digital-module-tour-completed",
               "true"
            );
         }, 1500);

         return () => clearTimeout(timer);
      }
   }, [location.pathname]);

   // No renderizar nada (sin botón flotante)
   return null;
}
