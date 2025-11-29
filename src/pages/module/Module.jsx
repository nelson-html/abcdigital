import React, { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useProgress } from '@/hooks/useProgress'
import PlayerYoutube from '@/components/PlayerYoutube'
import { useTTS } from '@/tts/useTTS'

const content = {
   1: {
      title: "Uso básico de celulares",
      lessons: [
         {
            id: "1-1",
            title: "Navegación básica",
            text: "La navegación en un celular se realiza principalmente mediante gestos táctiles y botones físicos. Los gestos más importantes son: Tocar (tap) para seleccionar apps o elementos; Deslizar (swipe) hacia arriba, abajo o a los lados para navegar entre pantallas; Pellizcar (pinch) con dos dedos para hacer zoom en fotos o textos; y Mantener presionado para acceder a opciones adicionales. Los botones físicos principales incluyen el botón de encendido/apagado (lateral derecho), que también sirve para bloquear la pantalla; los botones de volumen (lateral izquierdo) para ajustar el sonido; y en algunos modelos, el botón de inicio (frontal inferior) para volver a la pantalla principal. Para regresar a la pantalla anterior, usa el botón de retroceso (◁) o desliza desde el borde izquierdo. La barra de notificaciones se abre deslizando desde arriba hacia abajo, mostrando mensajes y configuraciones rápidas. Practica estos gestos básicos para familiarizarte con tu dispositivo y ganar confianza en su uso diario.",
            video: "dQw4w9WgXcQ",
            images: ["/assets/Botones_del_celular.avif"],
         },
         {
            id: "1-2",
            title: "Instalar apps",
            text: "Para instalar aplicaciones en tu celular, primero abre la tienda de aplicaciones: Google Play Store en Android o App Store en iPhone. Usa el ícono de búsqueda (lupa) en la parte superior para encontrar la app que necesitas, escribe el nombre completo o palabras clave relacionadas. Una vez que encuentres la aplicación correcta, verifica que sea del desarrollador oficial leyendo el nombre del creador debajo del título. Presiona el botón Instalar (Android) o Obtener (iPhone) y espera a que se descargue e instale automáticamente. Algunas apps requieren permisos como acceso a la cámara o ubicación; lee cuidadosamente qué permisos solicita antes de aceptar. Para actualizar tus apps, ve a la sección 'Mis aplicaciones' o 'Actualizaciones' en la tienda y presiona 'Actualizar todo' o actualiza apps individuales. Mantener tus aplicaciones actualizadas es importante para la seguridad y para acceder a nuevas funciones. Si una app no funciona correctamente, puedes desinstalarla manteniendo presionado su ícono y seleccionando 'Desinstalar'.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo1/cel2.webp"],
         },
         {
            id: "1-3",
            title: "Configuraciones",
            text: "El menú de Configuraciones o Ajustes (ícono de engranaje) es el centro de control de tu celular. Para conectarte a Wi-Fi, ve a Configuraciones > Wi-Fi, activa el interruptor y selecciona tu red de la lista; ingresa la contraseña si es necesaria. El Wi-Fi ahorra datos móviles y suele ser más rápido. Para ajustar el brillo de pantalla, busca 'Pantalla' o 'Visualización' en Configuraciones y mueve el control deslizante; activa el brillo automático para que se ajuste según la luz ambiente y ahorre batería. El volumen se controla con los botones laterales, pero en Configuraciones > Sonido puedes ajustar volúmenes separados para llamadas, notificaciones, multimedia y alarmas. Otras configuraciones importantes incluyen: Bluetooth para conectar auriculares o altavoces inalámbricos; Modo avión para desactivar todas las conexiones en vuelos; Ahorro de batería para extender la duración; y Almacenamiento para ver cuánto espacio queda disponible. Explora estas opciones con calma para personalizar tu dispositivo según tus necesidades.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo1/cel3.webp"],
         },
         {
            id: "1-4",
            title: "Accesibilidad",
            text: "Las funciones de Accesibilidad hacen que el celular sea más fácil de usar para personas con diferentes necesidades. Encuentra estas opciones en Configuraciones > Accesibilidad. El tamaño de texto se puede aumentar para leer más cómodamente; algunos celulares también permiten hacer más grande todo en pantalla con la opción 'Zoom de pantalla'. El lector de pantalla (TalkBack en Android, VoiceOver en iPhone) lee en voz alta todo lo que tocas en la pantalla, ideal para personas con problemas de visión; actívalo con precaución ya que cambia completamente la forma de navegar. El alto contraste y los temas oscuros reducen el cansancio visual. Para personas con dificultades auditivas, están las subtítulos automáticos que transcriben audio a texto, y las notificaciones visuales que hacen parpadear la luz del flash cuando llega un mensaje. También puedes activar gestos de amplificación para hacer zoom triple tocando la pantalla. Estas herramientas están diseñadas para que todos puedan usar la tecnología de manera cómoda y efectiva.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo1/cel4.webp"],
         },
      ],
   },
   2: {
      title: "Uso básico de computadoras",
      lessons: [
         {
            id: "2-1",
            title: "Escritorio",
            text: "El escritorio es la pantalla principal de tu computadora donde aparecen íconos de programas y archivos. Para organizar tus archivos, crea carpetas haciendo clic derecho en un espacio vacío y seleccionando 'Nueva carpeta'; nómbrala según su contenido (por ejemplo: 'Documentos personales', 'Fotos 2024'). Puedes mover archivos arrastrándolos con el mouse: haz clic sobre el archivo, mantén presionado y muévelo a la carpeta deseada. Para seleccionar múltiples archivos, mantén presionada la tecla Ctrl (Windows) o Command (Mac) mientras haces clic en cada archivo. El explorador de archivos (ícono de carpeta en la barra de tareas) te permite navegar por todas tus carpetas: las principales son 'Documentos', 'Descargas', 'Imágenes' y 'Escritorio'. Para buscar archivos, usa la barra de búsqueda en la esquina superior derecha del explorador. Mantén tu escritorio ordenado guardando archivos en carpetas apropiadas en lugar de dejarlos sueltos; esto facilita encontrar lo que necesitas y mejora el rendimiento de tu computadora.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo2/pc1.webp"],
         },
         {
            id: "2-2",
            title: "Navegador",
            text: "El navegador web (Chrome, Firefox, Edge, Safari) es tu puerta de entrada a Internet. La barra de direcciones en la parte superior sirve para escribir direcciones web (URLs) o buscar información directamente. Las pestañas te permiten tener múltiples páginas abiertas simultáneamente: abre una nueva pestaña con Ctrl+T (Windows) o Command+T (Mac), y ciérrala con Ctrl+W. Para navegar entre pestañas, usa Ctrl+Tab o haz clic en cada pestaña. El historial guarda un registro de todas las páginas que has visitado; accede a él con Ctrl+H para volver a sitios que visitaste antes. Los marcadores o favoritos te permiten guardar sitios importantes: presiona Ctrl+D para agregar la página actual a marcadores, y organízalos en carpetas para encontrarlos fácilmente. El botón de retroceso (flecha izquierda) te lleva a la página anterior, y el de avanzar (flecha derecha) te devuelve si retrocediste. Usa el modo incógnito (Ctrl+Shift+N) cuando no quieras que se guarde tu historial de navegación. Aprende estos atajos para navegar más eficientemente por Internet.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo2/pc2.webp"],
         },
         {
            id: "2-3",
            title: "Sistema operativo",
            text: "El sistema operativo (Windows, macOS, Linux) es el software principal que hace funcionar tu computadora. Mantenerlo actualizado es crucial para seguridad y rendimiento. En Windows, las actualizaciones se gestionan desde Configuración > Windows Update; en Mac, desde Preferencias del Sistema > Actualización de software. Configura las actualizaciones automáticas para que se instalen sin que tengas que recordarlo. La gestión de usuarios permite que varias personas usen la misma computadora con sus propios archivos y configuraciones privadas. Para crear un nuevo usuario en Windows, ve a Configuración > Cuentas > Familia y otros usuarios. Cada usuario debe tener su propia contraseña segura. El administrador de tareas (Ctrl+Shift+Esc en Windows, Command+Option+Esc en Mac) muestra qué programas están ejecutándose y cuánta memoria y procesador usan; úsalo para cerrar programas que no responden. Aprende también a reiniciar tu computadora correctamente usando el menú Inicio, no apagándola directamente con el botón de encendido, para evitar pérdida de datos.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo2/pc3.webp"],
         },
         {
            id: "2-4",
            title: "Atajos",
            text: "Los atajos de teclado te permiten trabajar más rápido sin usar el mouse. Los más importantes son: Ctrl+C (copiar) selecciona texto o archivos y los guarda temporalmente; Ctrl+V (pegar) coloca lo copiado en la ubicación actual; Ctrl+X (cortar) es como copiar pero elimina el original. Ctrl+Z deshace la última acción, muy útil si cometes un error. Ctrl+S guarda tu trabajo actual (úsalo frecuentemente para no perder cambios). Ctrl+F abre una búsqueda dentro del documento o página actual. Alt+Tab cambia entre ventanas abiertas rápidamente. Para capturar pantalla en Windows, usa la tecla 'Impr Pant' (captura todo) o 'Windows+Shift+S' (captura un área seleccionada); en Mac, usa 'Command+Shift+3' (pantalla completa) o 'Command+Shift+4' (área seleccionada). Ctrl+A selecciona todo el contenido. Windows+L bloquea tu computadora cuando te alejas. Practica estos atajos diariamente hasta que se vuelvan automáticos; notarás una gran mejora en tu productividad.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo2/pc4.webp"],
         },
      ],
   },
   3: {
      title: "Navegación segura",
      lessons: [
         {
            id: "3-1",
            title: "Riesgos",
            text: "En Internet existen diversos riesgos que debes conocer para protegerte. El phishing es cuando recibes correos o mensajes falsos que parecen ser de bancos, empresas o instituciones legítimas, pero buscan robar tus contraseñas o datos personales. Señales de alerta: errores de ortografía, direcciones de correo extrañas, urgencia excesiva ('tu cuenta será cerrada hoy'), y enlaces sospechosos. Nunca hagas clic en enlaces de correos inesperados; en su lugar, ve directamente al sitio web oficial escribiendo la dirección en tu navegador. Los fraudes en línea incluyen ofertas demasiado buenas para ser verdad, sorteos falsos, y tiendas que nunca envían productos. Verifica siempre que el sitio web tenga 'https://' (la 's' significa seguro) y un candado en la barra de direcciones antes de ingresar información personal o de pago. Desconfía de mensajes que piden dinero urgente, incluso si parecen venir de conocidos (su cuenta podría estar hackeada). Nunca compartas códigos de verificación que recibes por SMS. Si algo parece sospechoso, confía en tu instinto y verifica con la organización directamente por teléfono.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo3/sec1.webp"],
         },
         {
            id: "3-2",
            title: "Contraseñas",
            text: "Las contraseñas seguras son tu primera línea de defensa contra hackers. Una buena contraseña debe tener al menos 12 caracteres e incluir mayúsculas, minúsculas, números y símbolos (ejemplo: 'Mi#Gat0Come@3pm'). Evita usar información personal como tu nombre, fecha de nacimiento o '123456'. Nunca uses la misma contraseña para múltiples sitios; si un sitio es hackeado, todos tus demás cuentas estarían en riesgo. Para recordar múltiples contraseñas, usa un administrador de contraseñas como LastPass, 1Password o el integrado en tu navegador; estos programas guardan todas tus contraseñas de forma segura y solo necesitas recordar una contraseña maestra. Activa la autenticación de dos factores (2FA) en todas las cuentas importantes (correo, banco, redes sociales); esto requiere un código adicional de tu celular además de la contraseña, haciendo casi imposible que alguien acceda sin tu permiso. Cambia tus contraseñas cada 6-12 meses, especialmente si sospechas que alguna cuenta fue comprometida. Nunca compartas tus contraseñas con nadie, ni siquiera con familiares.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo3/sec2.webp"],
         },
         {
            id: "3-3",
            title: "Privacidad",
            text: "Proteger tu privacidad en línea es esencial en la era digital. En redes sociales (Facebook, Instagram, Twitter), revisa la configuración de privacidad: decide quién puede ver tus publicaciones (público, amigos, solo yo), quién puede enviarte solicitudes de amistad, y quién puede etiquetarte en fotos. Evita compartir información sensible como tu dirección completa, número de teléfono, o planes de viaje en tiempo real. Los permisos de aplicaciones controlan qué puede acceder cada app en tu dispositivo. Revisa regularmente qué apps tienen acceso a tu ubicación, cámara, micrófono y contactos; si una app de linterna pide acceso a tus contactos, es sospechoso. En celulares, ve a Configuración > Privacidad/Permisos para revisar y revocar accesos innecesarios. Las cookies son pequeños archivos que los sitios web guardan para rastrearte; puedes borrarlas regularmente desde la configuración de tu navegador. Considera usar extensiones de navegador como Privacy Badger o uBlock Origin para bloquear rastreadores. Lee las políticas de privacidad de servicios importantes para entender cómo usan tus datos.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo3/sec3.webp"],
         },
         {
            id: "3-4",
            title: "Actualizaciones",
            text: "Mantener tus dispositivos y aplicaciones actualizados es una de las medidas de seguridad más importantes y fáciles. Las actualizaciones no solo traen nuevas funciones, sino que corrigen vulnerabilidades de seguridad que los hackers podrían explotar. Configura actualizaciones automáticas siempre que sea posible: en Windows ve a Configuración > Windows Update y activa 'Actualizaciones automáticas'; en Mac, Preferencias del Sistema > Actualización de software > 'Mantener automáticamente actualizado mi Mac'. En celulares, activa actualizaciones automáticas en la Play Store o App Store. Actualiza también tus navegadores web, antivirus, y aplicaciones importantes regularmente. Cuando veas notificaciones de actualización, no las ignores o pospongas indefinidamente. Las actualizaciones de seguridad críticas deben instalarse lo antes posible. Reinicia tus dispositivos después de actualizaciones importantes para asegurar que los cambios se apliquen correctamente. Un sistema desactualizado es como dejar la puerta de tu casa abierta; los ciberdelincuentes buscan activamente dispositivos sin actualizar porque son más fáciles de atacar.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo3/sec4.webp"],
         },
      ],
   },
   4: {
      title: "Búsqueda y evaluación",
      lessons: [
         {
            id: "4-1",
            title: "Motores",
            text: "Los motores de búsqueda como Google, Bing o DuckDuckGo son herramientas poderosas si sabes usarlas correctamente. Para búsquedas efectivas, usa palabras clave específicas en lugar de preguntas completas; por ejemplo, busca 'receta pan casero fácil' en vez de '¿cómo hago pan en casa?'. Usa comillas para buscar frases exactas: \"cambio climático\" encontrará esas palabras juntas. El signo menos excluye términos: 'jaguar -auto' buscará sobre el animal, no el coche. El operador site: limita resultados a un sitio específico: 'site:wikipedia.org inteligencia artificial'. Usa OR para buscar alternativas: 'café OR té'. El operador .. busca rangos numéricos: 'laptop $300..$500'. Para encontrar tipos de archivos específicos, usa filetype:: 'presupuesto filetype:pdf'. Prueba diferentes combinaciones de palabras si no encuentras lo que buscas inicialmente. Los primeros resultados no siempre son los mejores; revisa al menos la primera página completa. Aprende estos trucos y tus búsquedas serán mucho más precisas y rápidas.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo4/search1.webp"],
         },
         {
            id: "4-2",
            title: "Verificación",
            text: "En la era de la desinformación, verificar fuentes es una habilidad esencial. No creas todo lo que lees en Internet; siempre contrasta información con múltiples fuentes confiables. Fuentes confiables incluyen sitios gubernamentales (.gov), instituciones educativas (.edu), organizaciones reconocidas, y medios de comunicación establecidos. Verifica la autoría: ¿quién escribió el artículo? ¿Tiene credenciales en el tema? Revisa la fecha de publicación; información desactualizada puede ser engañosa, especialmente en temas de salud o tecnología. Busca sesgos: ¿el sitio tiene una agenda política o comercial? Usa herramientas de verificación de hechos como Snopes, FactCheck.org, o las secciones de verificación de medios reconocidos. Para noticias, aplica la regla de las tres fuentes: si solo una fuente reporta algo importante, espera confirmación de otras. Desconfía de titulares sensacionalistas o que provocan emociones fuertes. Verifica imágenes con búsqueda inversa de Google para detectar fotos fuera de contexto. Desarrollar pensamiento crítico te protege de desinformación y te hace un ciudadano digital más informado.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo4/search2.webp"],
         },
         {
            id: "4-3",
            title: "Filtros",
            text: "Los filtros de búsqueda te ayudan a encontrar exactamente lo que necesitas entre millones de resultados. En Google, después de buscar, haz clic en 'Herramientas' para acceder a filtros avanzados. El filtro de tiempo te permite ver solo resultados de la última hora, día, semana, mes, año, o un rango personalizado; útil para noticias recientes o información actualizada. El filtro de imágenes te permite buscar por tamaño, color, tipo (fotos, dibujos, clipart), derechos de uso (importante si necesitas usar la imagen legalmente), y más. Para noticias, puedes filtrar por fecha y ordenar por relevancia o fecha. El filtro de videos permite especificar duración, calidad, y fecha de subida. La búsqueda avanzada (google.com/advanced_search) ofrece opciones adicionales como región, idioma, y dominio. Puedes combinar filtros para búsquedas muy específicas, como 'imágenes de gatos naranjas, tamaño grande, con licencia de uso libre, subidas el último mes'. Dominar estos filtros te ahorra tiempo y mejora significativamente la calidad de tus resultados.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo4/search3.webp"],
         },
         {
            id: "4-4",
            title: "Citas",
            text: "Citar correctamente las fuentes que usas es fundamental para la integridad académica y profesional, y para dar crédito a los autores originales. Cuando uses información de Internet en trabajos, presentaciones o artículos, siempre indica de dónde proviene. Los formatos de citación más comunes son APA, MLA, y Chicago; tu institución o profesor te indicará cuál usar. Una cita básica de sitio web incluye: autor (si está disponible), título del artículo, nombre del sitio web, fecha de publicación, y URL. Ejemplo en APA: García, M. (2024). Guía de tecnología. TechSitio. https://ejemplo.com. Usa herramientas como Citation Machine, EasyBib, o Zotero que generan citas automáticamente en diferentes formatos. Cuando parafrasees (reescribas con tus palabras), aún debes citar la fuente original. Las citas directas (copiar texto exacto) deben ir entre comillas y con la cita completa. El plagio (usar trabajo ajeno sin atribución) es una falta grave; siempre es mejor citar de más que de menos. Mantener un registro de tus fuentes mientras investigas facilita crear la bibliografía después.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo4/search4.webp"],
         },
      ],
   },
   5: {
      title: "Comunicación digital",
      lessons: [
         {
            id: "5-1",
            title: "Email",
            text: "El correo electrónico sigue siendo una herramienta fundamental de comunicación profesional y personal. Para redactar un email efectivo, comienza con un asunto claro que resuma el contenido (ejemplo: 'Consulta sobre proyecto - Fecha límite'). Usa un saludo apropiado: formal ('Estimado/a Sr./Sra.') para contextos profesionales, o informal ('Hola') para conocidos. El cuerpo debe ser conciso y bien estructurado; usa párrafos cortos y ve al punto rápidamente. Termina con una despedida (Saludos, Atentamente) y tu nombre. Para adjuntar archivos, haz clic en el ícono de clip y selecciona el archivo; verifica que sea el correcto antes de enviar. Menciona en el email que adjuntaste algo ('Adjunto encontrarás...'). Usa CC (copia) para incluir personas que deben estar informadas, y CCO (copia oculta) cuando los destinatarios no deben ver las direcciones de otros. Revisa ortografía antes de enviar. Organiza tu bandeja de entrada con carpetas y etiquetas. Responde emails importantes dentro de 24-48 horas. Ten cuidado con 'Responder a todos'; úsalo solo cuando todos necesiten ver tu respuesta.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo5/comm1.webp"],
         },
         {
            id: "5-2",
            title: "Mensajería",
            text: "Las aplicaciones de mensajería instantánea como WhatsApp, Telegram, o Signal son esenciales para comunicación rápida. Para crear un grupo, abre la app, busca la opción 'Nuevo grupo', selecciona contactos, asigna un nombre descriptivo y opcionalmente una foto. Los grupos son útiles para coordinar familia, amigos o equipos de trabajo. Como administrador, puedes controlar quién puede enviar mensajes y cambiar la información del grupo. Las notas de voz son prácticas cuando escribir es inconveniente: mantén presionado el ícono del micrófono, habla claramente, y suelta para enviar. Sé considerado; las notas muy largas pueden ser molestas. Usa mensajes de texto para información importante que debe quedar por escrito. Puedes compartir ubicación en tiempo real, útil cuando te reúnes con alguien. Las videollamadas en WhatsApp se inician tocando el ícono de cámara. Activa las notificaciones para mensajes importantes pero silencia grupos muy activos para evitar distracciones. Usa el modo avión o 'No molestar' cuando necesites concentrarte. Respeta la privacidad; no compartas mensajes privados sin permiso.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo5/comm2.webp"],
         },
         {
            id: "5-3",
            title: "Videoconferencia",
            text: "Las plataformas de videoconferencia como Zoom, Google Meet, o Microsoft Teams son esenciales para trabajo remoto y educación. Antes de una reunión, prueba tu equipo: verifica que tu cámara funcione (generalmente hay un botón para activarla/desactivarla), que tu micrófono capte bien tu voz (usa audífonos para evitar eco), y que tu conexión a Internet sea estable. Elige un fondo apropiado o usa fondos virtuales si la plataforma lo permite. Para unirte a una reunión, haz clic en el enlace que te enviaron o ingresa el código de reunión en la app. Llega unos minutos antes para resolver problemas técnicos. Durante la reunión, silencia tu micrófono cuando no hables para evitar ruido de fondo; actívalo solo al hablar. Usa el chat para hacer preguntas sin interrumpir. La función de compartir pantalla te permite mostrar documentos o presentaciones; selecciona qué ventana compartir (no toda tu pantalla si tienes información privada abierta). Aprende los atajos de teclado de tu plataforma (generalmente Alt+A para audio, Alt+V para video). Vístete apropiadamente y mantén contacto visual mirando a la cámara.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo5/comm3.webp"],
         },
         {
            id: "5-4",
            title: "Etiqueta",
            text: "La etiqueta digital o netiqueta son las normas de comportamiento en línea que promueven comunicación respetuosa y efectiva. Respeto es fundamental: trata a otros como quieres ser tratado, incluso en desacuerdos. Evita ESCRIBIR EN MAYÚSCULAS (se interpreta como gritar) y el lenguaje ofensivo. La claridad es clave: sé específico y directo, pero cortés. Usa puntuación y ortografía correctas; mensajes descuidados pueden malinterpretarse o parecer poco profesionales. Piensa antes de publicar: una vez en Internet, es difícil borrar completamente algo. Pregúntate: ¿es verdad? ¿es necesario? ¿es amable? En redes sociales, evita sobrepublicar y respetar opiniones diferentes. No compartas información personal de otros sin permiso. En grupos de trabajo, manténte en el tema y no envíes mensajes irrelevantes. Responde oportunamente a mensajes importantes, pero no esperes respuestas inmediatas de otros. Usa emojis con moderación en contextos profesionales. Reconoce errores y discúlpate cuando sea necesario. La comunicación digital carece de tono vocal y lenguaje corporal, así que sé extra claro con tus intenciones. Trata las comunicaciones digitales con la misma seriedad que las presenciales.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo5/comm4.webp"],
         },
      ],
   },
   6: {
      title: "Productividad",
      lessons: [
         {
            id: "6-1",
            title: "Documentos",
            text: "Los procesadores de texto como Microsoft Word, Google Docs, o LibreOffice Writer son herramientas esenciales para crear documentos. Para crear un documento nuevo, abre la aplicación y selecciona 'Documento en blanco' o usa una plantilla prediseñada para cartas, currículums, o informes. Usa estilos de título (Título 1, Título 2) en lugar de solo agrandar texto; esto crea estructura y permite generar tablas de contenido automáticas. Para dar formato, selecciona el texto y usa las opciones de la barra de herramientas: negrita (Ctrl+B), cursiva (Ctrl+I), subrayado (Ctrl+U), cambiar fuente y tamaño. Usa viñetas y numeración para listas organizadas. Inserta imágenes desde Insertar > Imagen, y ajústalas usando las opciones de ajuste de texto. La revisión ortográfica (generalmente con líneas rojas bajo errores) te ayuda a corregir; haz clic derecho para ver sugerencias. Usa Ctrl+S frecuentemente para guardar tu trabajo. La función Buscar y Reemplazar (Ctrl+H) es útil para cambios masivos. Aprende a usar tablas para organizar información. Exporta documentos como PDF cuando quieras que el formato no cambie al compartir.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo6/prod1.webp"],
         },
         {
            id: "6-2",
            title: "Hojas de cálculo",
            text: "Las hojas de cálculo como Excel, Google Sheets, o LibreOffice Calc son poderosas para organizar datos numéricos y realizar cálculos. Una hoja está compuesta de celdas organizadas en filas (números) y columnas (letras); cada celda tiene una dirección como A1, B5. Para ingresar datos, haz clic en una celda y escribe. Las fórmulas comienzan con '=' y permiten cálculos automáticos. Fórmulas básicas: =SUMA(A1:A10) suma un rango de celdas, =PROMEDIO(B1:B5) calcula el promedio, =A1*B1 multiplica dos celdas, =MAX(C1:C20) encuentra el valor máximo. Usa referencias de celda en fórmulas para que se actualicen automáticamente cuando cambien los datos. Las tablas (Insertar > Tabla) facilitan filtrar y ordenar datos. Crea gráficos (Insertar > Gráfico) para visualizar datos; elige el tipo apropiado (barras, líneas, circular). Usa formato condicional para resaltar celdas según criterios (ejemplo: valores mayores a 100 en rojo). Aprende filtros para mostrar solo datos que cumplan condiciones. Las hojas de cálculo son ideales para presupuestos, inventarios, calificaciones, y análisis de datos.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo6/prod2.webp"],
         },
         {
            id: "6-3",
            title: "Colaboración",
            text: "Las herramientas de colaboración en línea como Google Workspace, Microsoft 365, o Notion permiten trabajar en equipo en tiempo real. Para compartir un documento, haz clic en 'Compartir' o 'Ícono de compartir', ingresa los correos de colaboradores, y define permisos: 'Puede editar' permite modificar el documento, 'Puede comentar' solo permite agregar comentarios sin cambiar el contenido, 'Puede ver' es solo lectura. Usa comentarios (Insertar > Comentario o Ctrl+Alt+M) para hacer sugerencias o preguntas sin modificar el texto; menciona a personas con '@nombre' para notificarles. El modo de sugerencias (en Word/Docs) registra cambios propuestos que otros pueden aceptar o rechazar, ideal para revisiones. El historial de versiones muestra quién hizo qué cambios y cuándo; puedes restaurar versiones anteriores si algo salió mal. Edición simultánea permite que varias personas trabajen al mismo tiempo; verás cursores de colores mostrando dónde están otros. Establece normas de equipo: quién puede hacer qué, cómo nombrar archivos, dónde guardarlos. La colaboración digital aumenta productividad y permite trabajo remoto efectivo.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo6/prod3.webp"],
         },
         {
            id: "6-4",
            title: "Almacenamiento",
            text: "El almacenamiento en la nube como Google Drive, OneDrive, Dropbox, o iCloud te permite guardar archivos en Internet y acceder a ellos desde cualquier dispositivo. Ventajas: tus archivos están respaldados (si tu computadora se daña, no pierdes nada), puedes acceder desde celular, tablet o cualquier computadora, y facilita compartir archivos grandes. Para subir archivos, abre tu servicio de nube, haz clic en 'Subir' o arrastra archivos a la ventana del navegador. Crea carpetas para organizar (Trabajo, Personal, Fotos, etc.) igual que en tu computadora. La mayoría de servicios ofrecen 15GB gratuitos (Google Drive) o más; puedes comprar espacio adicional si lo necesitas. Activa la sincronización automática en tu computadora para que archivos en carpetas específicas se respalden automáticamente. Usa enlaces compartidos para enviar archivos grandes que no caben en email; configura si el enlace permite editar o solo ver. La papelera guarda archivos eliminados por 30 días; puedes recuperarlos si los borraste por error. Revisa regularmente qué ocupa más espacio y elimina archivos innecesarios. El almacenamiento en nube es esencial para trabajo moderno y seguridad de datos.",
            video: "dQw4w9WgXcQ",
            images: ["/img/modulo6/prod4.webp"],
         },
      ],
   },
};

export default function Module() {
  const { id } = useParams()
  const data = content[id]
  const { markCompleted, isLessonCompleted } = useProgress()
  const { speakElement } = useTTS()
  const textRefs = useRef({})

  if (!data) return <section className="p-4 text-center">Módulo no encontrado.</section>

  return (
    <section className="mx-auto max-w-4xl p-6 space-y-8 animate-fade-in">
      <header className="space-y-3 text-center">
        <h1 className="text-4xl font-bold gradient-text">{data.title}</h1>
        <p className="text-gray-600 text-lg">Completa las lecciones y marca tu progreso.</p>
      </header>

      <ul className="space-y-6">
        {data.lessons.map((lesson, index) => (
          <li 
            key={lesson.id} 
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover-lift animate-scale-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <article aria-labelledby={`h-${lesson.id}`}>
              {/* Gradient accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-t-2xl"></div>
              
              <div ref={el => textRefs.current[lesson.id] = el}>
                <h2 
                  id={`h-${lesson.id}`} 
                  className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-sm">
                    {index + 1}
                  </span>
                  {lesson.title}
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">{lesson.text}</p>
              </div>

              {/* Seccion de imagenes */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {lesson.images.map((src, i) => (
                  <div key={i} className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                    <img 
                      loading="lazy" 
                      src={src} 
                      alt={`${lesson.title} - Imagen ${i+1}`} 
                      className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
                ))}
              </div>

              {/* Seccion de youtube */}
              <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
                <PlayerYoutube videoId={lesson.video} title={lesson.title} />
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                {isLessonCompleted(id, lesson.id) ? (
                  <button 
                    disabled
                    className="flex-1 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-blue-500 to-cyan-500 text-white cursor-default shadow-md opacity-90"
                  >
                    ✓ Completado
                  </button>
                ) : (
                  <button 
                    onClick={() => markCompleted(id, lesson.id)} 
                    className="flex-1 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                  >
                    ✓ Marcar completado
                  </button>
                )}
                <button 
                  onClick={() => speakElement(textRefs.current[lesson.id])} 
                  className="flex-1 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  🔊 Leer lección
                </button>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  )
}
