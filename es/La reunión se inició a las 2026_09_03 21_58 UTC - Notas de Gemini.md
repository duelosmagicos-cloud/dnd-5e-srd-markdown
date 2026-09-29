sept 3, 2026

## **Reunión del 3 sept 2026 a las 21:58 UTC**

Registros de la reunión [Transcripción](https://docs.google.com/document/d/1nDoRW3klnYGhGDV8-04GtdGEXCnJBV5xdYsyLGw5MgE/edit?usp=drive_web&tab=t.a1sgxfls96af) 

### **Resumen**

Se analizaron parámetros técnicos de juego junto con una reforma integral del sistema de combate.

**Reglas generales y herramientas**  
El flujo de trabajo integra asistencia técnica mediante inteligencia artificial. Se analizó el diseño del inventario y la gestión de verticalidad utilizando estructuras de cuadrícula.

**Reforma del combate**  
Se acordó reemplazar la Clase de Armadura estática por dados de defensa para eliminar el sistema binario de acierto o fallo. Este cambio transforma el combate en un enfrentamiento dinámico de dado contra dado.

**Estandarización del sistema**  
La clasificación de hechizos mediante etiquetas funcionales facilita la organización técnica. Se exploró una base de 10 puntos de acción por turno para la gestión de capacidades.

### **Decisiones**

## ***Acordada***

* **Reglas de competencia y armadura establecidas** Se establece que todos los personajes poseen competencia básica, el uso de armadura ligera es estándar, y el uso de armadura mediana o pesada sin entrenamiento conlleva una desventaja en pruebas de fuerza y destreza.  
* **Método de cálculo de estadísticas** Se acuerda utilizar el valor medio para la determinación de las estadísticas de los personajes.  
* **Implementación de verticalidad en juego 2D** Se aprueba la implementación de verticalidad (niveles o capas) dentro del diseño del juego 2D top-down.  
* **Limitación de la verticalidad en mapas** La verticalidad se limita a diferencias de elevación de un solo nivel, gestionada mediante azulejos de borde especiales, en lugar de capas 3D completas.  
* **Sistema de visibilidad de mapas** Los mapas del juego se restringen a un sistema de visibilidad desde arriba, renderizando el entorno en un formato 2D estilo Doom.  
* **Configuración opcional de la sintonía** La sintonía se establece como una mecánica opcional que puede activarse a nivel de objeto o de aventura.  
* **Eliminación de mecánicas de desgaste** Se eliminan las mecánicas de desgaste y rotura de objetos durante el combate; el estado 'Roto' se define exclusivamente como una propiedad controlada por el GM.  
* **Sistema de inventario espacial** La gestión del inventario se establece mediante un sistema espacial basado en cuadrículas, eliminando la carga basada en peso.  
* **Mecánicas de capacidad de carga** Se conservan las mecánicas tradicionales para la capacidad de empujar, tirar y arrastrar.  
* **Sistema de puntos de acción** Se reemplazan los espacios de conjuro tradicionales por un sistema de recursos basado en puntos de acción y tiempos de recarga.  
* **Integración de tiradas de salvación** Se eliminan las tiradas de salvación como tipo de tirada diferenciada y se integran en las pruebas de característica estándar.  
* **Sistema porcentual de ataque** Las tiradas de ataque se estructuran en un sistema de zonas porcentuales que reemplaza los resultados binarios de acierto/fallo, manteniendo las reglas de Crítico y Pifia.  
* **Normalización de resultados de daño** Los resultados de daño se fijan al valor promedio de los dados para reducir la varianza y trasladar la dependencia mecánica a la precisión del ataque.  
* **Eliminación de Clase de Armadura y ataque** Se eliminan las mecánicas de Clase de Armadura (CA) y las tiradas de ataque, reemplazándolas por un sistema donde los jugadores realizan tiradas de daño y los enemigos realizan tiradas de defensa con dados.

### **Próximos pasos**

- [ ] \[EasyIndustry\] Implementar competencia armas: Implementar la regla de competencia en armas dentro del sistema de personajes.  
- [ ] \[EasyIndustry\] Auditar columnas hechizos: Ejecutar auditorías en las columnas del archivo Spells CCB para corregir errores en la clasificación de datos.  
- [ ] \[EasyIndustry\] Verificar niveles hechizos: Revisar el archivo MD correspondiente para corregir los niveles de los hechizos y asegurar una clasificación correcta.  
- [ ] \[EasyIndustry\] Corregir errores MD: Arreglar el documento MD corrigiendo los hechizos que presentan caracteres separados.  
- [ ] \[Claudio\] Revisar Hechizos: Clasificar la totalidad de los hechizos utilizando las etiquetas de combate, rol, situacional o específico y añadir observaciones técnicas.  
- [ ] \[El grupo\] Definir Puntos Acción: Establecer el sistema numérico de puntos de acción por turno y los costos asociados a cada movimiento o técnica básica.  
- [ ] \[El grupo\] Analizar Gameplay: Revisar los 6 archivos de las reglas centrales que no fueron abordados anteriormente para asegurar su consistencia con las nuevas mecánicas implementadas.  
- [ ] \[El grupo\] Resolver Inconsistencias Clases: Corregir el desfasaje en las clases lanzadoras para unificar el sistema de puntos de acción y eliminar las tablas de espacios de conjuro tradicionales.  
- [ ] \[Francoenter\] Crear esquema: Crear un esquema visual para clarificar la nueva lógica de combate y sus proporciones.  
- [ ] \[EasyIndustry\] Comitear cambios: Subir al repositorio los cambios acordados sobre la estructura de combate y la eliminación de la clase de armadura.  
- [ ] \[El grupo\] Ajustar Armor Class: Modificar los valores de defensa para los objetos y criaturas del sistema.  
- [ ] \[El grupo\] Revisar reglamento: Continuar con la lectura pendiente de la documentación del sistema.

### **Detalles**

* **Uso de Inteligencia Artificial en el flujo de trabajo**: EasyIndustry y Francoenter discuten la integración de Claude como asistente para gestionar tareas técnicas y administrativas. EasyIndustry explica que utiliza la herramienta para redactar correos, responder mensajes en Slack y actuar como un backend senior, proporcionando contexto para diagnosticar errores y probar entornos de test ([00:01:02](#00:01:02)) ([00:45:45](#00:45:45)). EasyIndustry destaca la importancia de supervisar el trabajo de la IA con paciencia, tratando el proceso como si se guiara a un personal junior para garantizar resultados correctos antes de enviarlos a producción ([00:47:22](#00:47:22)).  
* **Cultura popular y proyecciones**: Francoenter comenta sobre el reestreno de la película \*Endgame\* en cines, la cual incluirá 4 minutos adicionales para realizar una conexión con \*Doomsday\* y una promoción especial con un balde de Iron Man ([00:28:23](#00:28:23)). EasyIndustry y Francoenter conversan brevemente sobre la industria aeroespacial y las declaraciones de Elon Musk sobre puertos espaciales, relacionando estos temas con la trama de la película \*Don't Look Up\* y la posibilidad de que existan preparativos ante un apocalipsis inminente ([00:29:59](#00:29:59)).  
* **Definición de competencias y reglas de equipamiento**: Se revisa la implementación de las reglas del juego. Se determina que todos los personajes poseerán competencia básica y armadura ligera. Los participantes acuerdan que el uso de armadura mediana o pesada sin entrenamiento resultará en una desventaja durante las pruebas de fuerza y destreza, además de afectar la velocidad de movimiento ([00:33:55](#00:33:55)). Se establece la necesidad de continuar con la estandarización de las armas marciales y los paquetes de inicio de equipamiento ([00:36:04](#00:36:04)).  
* **Análisis de combate en Divinity Original Sin 2**: EasyIndustry comparte su experiencia jugando \*Divinity Original Sin 2\* para comprender el ritmo y las mecánicas de combate que desean implementar en su proyecto ([00:36:04](#00:36:04)). EasyIndustry manifiesta frustración por la dificultad de ciertos combates, como el de los cocodrilos, que requieren que todos los compañeros alcancen un nivel específico para tener éxito. Se discute la importancia de encontrar soluciones creativas o astutas para resolver combates difíciles, en lugar de depender únicamente de una técnica preestablecida ([00:38:02](#00:38:02)).  
* **Actualización del estado del proyecto y clases**: EasyIndustry informa que ha actualizado el documento de estatus del proyecto, donde se registra el progreso de las tareas ([00:39:37](#00:39:37)). Se menciona que la revisión y definición de las clases de personajes ya se ha trabajado, aunque quedan detalles pendientes por la complejidad de ciertas mecánicas ([00:41:38](#00:41:38)). EasyIndustry y Francoenter identifican inconsistencias en el archivo \*Spells CCB\*, por lo que EasyIndustry solicita a Claude realizar auditorías en las columnas de descripción y nivel, utilizando el documento \*Markdown\* (MD) original como referencia para corregir los errores ([00:43:52](#00:43:52)).  
* **Glosario, nomenclatura y definiciones de reglas**: Los participantes repasan el glosario del sistema y confirman la eliminación de los alineamientos (\*Alignments\*). Se establecen las reglas para el uso de etiquetas entre corchetes para acciones y se aclara que el sistema de energía solo aplica durante el combate, mientras que fuera de este las acciones son libres ([00:48:48](#00:48:48)). Se definen términos como "Aventura" y "Encuentro" para estandarizar el lenguaje del Dungeon Master y mejorar la comprensión de las escenas y los combates ([00:51:37](#00:51:37)).  
* **Diseño de verticalidad y niveles**: Francoenter y EasyIndustry debaten sobre la complejidad técnica de implementar la verticalidad en un juego que, por defecto, se visualiza en dos dimensiones ([00:53:45](#00:53:45)). EasyIndustry argumenta que es posible calcular hechizos como cilindros o esferas utilizando trigonometría, independientemente de la dimensión visual ([00:55:42](#00:55:42)). Se discuten los desafíos de programar el \*layering\* (capas de pisos) y cómo resolver ataques que atraviesan techos o niveles, concluyendo que, en situaciones ambiguas, el Dungeon Master tomará la decisión final basándose en la cobertura y la lógica del entorno ([00:57:11](#00:57:11)).  
* **Verticalidad en el diseño de mapas**: Francoenter y EasyIndustry discuten cómo implementar la verticalidad en los mapas del juego. Acuerdan evitar estructuras 3D complejas y optar por un diseño similar a \*Pokémon\*, donde la altura se define mediante propiedades en los bordes de las casillas o zonas de transición ([01:00:27](#01:00:27)). Esto facilitará la gestión de hechizos y el movimiento entre niveles (bajo/alto) sin complicar la programación ([01:04:52](#01:04:52)).  
* **Motor y renderizado**: Se analiza la viabilidad técnica, comparando el enfoque con el motor de \*Doom\*, que utiliza trucos visuales para simular tridimensionalidad en un entorno esencialmente 2D, lo cual consideran suficiente para sus necesidades ([01:06:02](#01:06:02)).  
* **Mecánicas de combate y estados**: Confirman que el sistema de Clase de Armadura (CA), las acciones de ataque y el concepto de actitud de los monstruos se mantendrán sin cambios sustanciales ([01:07:19](#01:07:19)).  
* **Sintonía de objetos**: Determinan que la sintonía (attunement) de objetos mágicos será una configuración opcional al crear una aventura, permitiendo que el Director de Juego decida si desea incluirla o no, en lugar de que sea una regla universal ([01:08:39](#01:08:39)).  
* **Visión y estados de salud**: Acuerdan simplificar los niveles de visión (Dark Vision y Super Dark Vision). Debaten el estado "ensangrentado" como una pista visual para el jugador sobre la salud del enemigo, y deciden implementar una configuración opcional para ocultar los puntos de vida de los enemigos y mejorar la experiencia de usuario ([01:11:50](#01:11:50)).  
* **Gestión de objetos y durabilidad**: Descartan incluir mecánicas complejas de desgaste o rotura de armas por uso, considerándolas innecesarias fuera de economías específicas de juegos multijugador masivos. Acuerdan que la rotura de objetos será una decisión discrecional del Director de Juego ([01:14:58](#01:14:58)).  
* **Inventario**: Optan por abandonar el sistema de inventario basado en peso y adoptar uno basado en espacio o cuadrícula (similar a \*Resident Evil 4\* o \*Backpack Hero\*), donde la capacidad de arrastrar o empujar objetos se mantendrá vinculada a la fuerza y tamaño de la criatura ([01:21:07](#01:21:07)).  
* **Challenge Rating (CR)**: Deciden que el cálculo del valor de desafío (CR) se hará de forma automática por el sistema para no afectar al desarrollo de las reglas ([01:26:04](#01:26:04)).  
* **Clasificación de hechizos**: Acuerdan realizar una revisión de los hechizos asignándoles etiquetas (tags) como "Combate", "Roleo" o "Situacional". Esta estrategia busca facilitar la limpieza y clasificación de hechizos, priorizando la eliminación de aquellos demasiado específicos ([01:29:12](#01:29:12)) ([01:36:18](#01:36:18)).  
* **Consistencia del sistema**: Identifican una contradicción crítica donde las clases de personaje aún declaran utilizar espacios de conjuro tradicionales en lugar del sistema de puntos de acción y tiempos de recarga previamente acordado. Establecen que esta corrección es una prioridad para la próxima reunión ([01:39:33](#01:39:33)).  
* **Bonificador de competencia**: Debaten sobre el uso del bonificador de competencia, concluyendo que se mantendrá como un valor de fondo para el escalado de dotes y cálculos de hechizos, aunque se reducirá su protagonismo en otros sistemas para simplificar ([01:42:34](#01:42:34)).  
* **Sistema de Puntos de Acción**: Comienzan a definir la base de un sistema de puntos de acción, proponiendo un estándar inicial de 10 puntos por turno para gestionar las capacidades de los personajes ([01:46:05](#01:46:05)).  
* **Revisión de tiradas de ataque**: Proponen reformar el sistema de ataques para eliminar el resultado binario de "acierto o fallo". Buscan implementar un sistema basado en zonas de proximidad a la Clase de Armadura (CA), donde el resultado varía en un 25% de incremento según la tirada, para reducir la frustración del jugador al no realizar ninguna acción efectiva durante varios turnos ([01:49:29](#01:49:29)).  
* **Desafíos en el sistema de combate actual**: EasyIndustry y Francoenter discuten la dificultad de equilibrar el daño de los personajes con los valores fijos de la Clase de Armadura (CA), señalando que en niveles bajos es difícil alcanzar los objetivos y que el sistema actual resulta confuso para los principiantes debido a la complejidad de las tiradas de ataque y daño ([01:59:26](#01:59:26)).  
* **Evaluación de la utilidad de la Clase de Armadura**: Los participantes analizan el origen histórico de la Clase de Armadura, identificando que su función principal es unificar factores defensivos como la esquiva y la protección física en un solo número para agilizar el combate ([02:02:53](#02:02:53)). Sin embargo, critican la naturaleza binaria de "acertar o fallar" del sistema actual, argumentando que puede ser frustrante para les jugadores y proponen buscar un enfoque más gradual similar al de otros juegos de rol ([02:04:19](#02:04:19)).  
* **Propuesta de una mecánica basada en dados**: EasyIndustry y Francoenter exploran la posibilidad de reemplazar el sistema actual utilizando dos dados, como 2d12 o 2d10, donde la diferencia entre los resultados determine la efectividad del ataque o el porcentaje de daño realizado ([02:07:09](#02:07:09)). Discuten cómo este método podría gestionar bonificadores, como la marca del cazador, y reducir la frustración que genera el fallar un ataque ([02:05:51](#02:05:51)).  
* **Refinamiento de la mecánica de dados**: Tras analizar la propuesta, debaten sobre la escala matemática del sistema de dos dados, enfocándose en cómo las diferencias entre resultados positivos y negativos pueden representar tanto el acierto como la mitigación de daño ([02:08:37](#02:08:37)). Trabajan en definir los rangos de éxito y fallo para asegurar que el sistema sea equilibrado y funcional ([02:11:22](#02:11:22)).  
* **Desarrollo de un sistema de defensa activa**: Los participantes proponen eliminar la tirada de ataque tradicional y la Clase de Armadura estática, reemplazándolas por un sistema donde el atacante tira daño y el defensor tira dados de defensa ([02:13:59](#02:13:59)). EasyIndustry sugiere que el Dungeon Master podría realizar las tiradas de defensa de forma oculta para determinar cuánto daño es absorbido, añadiendo una capa interactiva al combate en lugar de depender únicamente de una probabilidad binaria ([02:17:19](#02:17:19)) ([02:21:03](#02:21:03)).  
* **Estandarización y reemplazo de la Clase de Armadura**: EasyIndustry y Francoenter acuerdan que la Clase de Armadura ya no existirá como estadística estática, sino que será reemplazada por "dados de defensa" (como d8 o d10 según el equipamiento) ([02:23:43](#02:23:43)). Concluyen que este enfoque es más dinámico y sencillo, ya que estandariza el combate a un enfrentamiento de "dado contra dado" ([02:26:03](#02:26:03)) ([02:30:32](#02:30:32)).  
* **Planificación de los próximos pasos**: Los participantes deciden proceder con este nuevo sistema de combate, reconociendo que requerirá un trabajo posterior para ajustar todos los valores de ítems, armas y enemigos según la nueva metodología ([02:30:32](#02:30:32)). Acuerdan que, para futuras sesiones, continuarán revisando el resto de las reglas del juego ([02:31:55](#02:31:55)).

*Revisa las notas de Gemini para asegurarte de que sean precisas. [Obtén sugerencias y descubre cómo Gemini toma notas](https://support.google.com/meet/answer/14754931)*

*Cómo es la calidad de **estas notas específicas?** [Responde una breve encuesta](https://google.qualtrics.com/jfe/form/SV_5bXzKQfylMIhSXc?confid=n5nt6lWjWu-tWzIvQMAUDxITOBEBMgUIigIgABgFCA&detailLevel=standard&hasImages=False&entryPoint=footerMain&isGoogler=False) para darnos tu opinión; por ejemplo, cuán útiles te resultaron las notas.*

sept 3, 2026

## **Reunión del 3 sept 2026 a las 21:58 UTC \- Transcripción**

### **00:01:02** {#00:01:02}

**EasyIndustry:** Imaginate, estoy quemadísimo. Y si me tomo un un tecito de esos mágicos, voy a morir antes de tiempo, ¿no? Si me tomo un tecito mágico, me muero antes de tiempo. Sí, ese toma tipo 8 nu, ¿no? ¿Qué? tipo 89, No. Por favor, decime que no podés. Quédate ahí. Pero mostrámelo. Oh. No. Listo, ya está. No puedo. Ya está. Me gasté todos sus tokens. No puedo hacer más nada. ¿Querías que usemos IA? Ahí tenés. Estoy le estoy le estoy contestando a todos por día, Claudio, a todos el CO. ¿Viste esa viste esa conversación que estaba el pelado ese que está insultando? Te dije que el co mandó un mensaje y el pelado abajo diciendo que es urgente. Esa misma conversación la contesté con Claud, tipo, ya no hablo más con nadie que hable Claud. Clar. ¿Estás escuchando música o es de afuera? Es de afuera. ¿Cómo voy a escuchar esa música? Es que se escucha muy fuerte. ¿Cómo voy a escuchar yo esa música?

### **00:10:04**

**EasyIndustry:** Que me quiero comer sandwichito con pan de flauta, de salame o mortal de queso con vinagre. Lo haces vos. H acá dame también cinco más que tengo que ir a comprar algo. Explica. Estás para esa, ¿no? También cualquier cosa. Pero tenés hambre. Hay papines, hay milanesas. Yo ya yo comí a las 4 de la tarde. ¿Cómo eso? Es una merienda cena. Ya no como más nada. ¿Cómo se llama? Meriena. Claro. Merio. Merienda. Pero va primero la merienda y después cena. Ah, mena, mena. La mena, la nena. Acá arriba para arriba sin que nadie sepa. Está mi vieja sola. Si queres d unit. No, pero ahora tengo reunión por eso. Ah. Hur M. Sí. No Yeah. Voy estar sin la cámara, así Vamos a hacer. Bueno, compré algo rico. Pepino. La mesita yo. Sí. para tomar no trabaj de pedirte Eh, ya me traigas SP He.

**Francoenter:** ¿Qué onda?

### **00:28:23** {#00:28:23}

**EasyIndustry:** Está bien.

**Francoenter:** Todo

**EasyIndustry:** Dale.

**Francoenter:** tranca

**EasyIndustry:** Yo un poquito hecho cuero.

**Francoenter:** por frío o por

**EasyIndustry:** Cansancio.

**Francoenter:** cansancio.

**EasyIndustry:** Hoy fue un día bastante exigente.

**Francoenter:** imprimieron 5 millones de de las pochocleras de de Engame yo

**EasyIndustry:** ¿Cómo?

**Francoenter:** tipo viste que ahora están ahora entre comillas eh como en un par de semanas van a sacar de vuelta, o sea, van a hacer un rescreening en el cine de Endgame, ¿viste? de Marvel dice que le van a agregar

**EasyIndustry:** Eh, en serio.

**Francoenter:** como 4 minutos extra con para hacer la conexión con Doomsday y estaba, ¿cómo que se dice? Le pusieron, ah, no me sa la palabra, como un balde, un balde especial, ¿viste? Están metiendo un balde especial con la promoción de la cabeza de Iron Man.

**EasyIndustry:** Ah, sí. Ah.

**Francoenter:** tenía un amigo que estaba comprando entradas a lo loco porque él es recontrafan y quería el balde de Iron Man

**EasyIndustry:** ¿Quién?

**Francoenter:** para no un amigo no lo

**EasyIndustry:** ¿Quién quería? Ah.

**Francoenter:** conoc que que quería agarrar quería sí o sí ese balde y entonces Так.

**EasyIndustry:** Así.

**Francoenter:** comprando entradas a lo

**EasyIndustry:** Qué piola,

### **00:29:59** {#00:29:59}

**Francoenter:** loco.

**EasyIndustry:** che. Pero no van a hacer primero la la primera de directamente a man.

**Francoenter:** Por lo que entiendo,

**EasyIndustry:** Mira, e bueno, me gustaría ir a verlo. Dicen que van a reenar game en el cine. Ah, sí, quería ver. Y sería bueno. Sí. Otro. Sí, dale. Oh, ahí la puse, ahí lo puse a Claudio a

**Francoenter:** Claudio.

**EasyIndustry:** laburar. Hoy me gasté todo el agua de África,

**Francoenter:** Y bueno,

**EasyIndustry:** boludo.

**Francoenter:** de todas formas casi no tiene nada. que es como un día más para eso, ¿viste? Como

**EasyIndustry:** Al punto que están viendo de usar que dijo Elon Má que iba a ser una especie de puerto espacial.

**Francoenter:** no lo había escuchado

**EasyIndustry:** No dijo bien para qué, pero yo supongo que es para llevar los centros de datos de arriba

**Francoenter:** y me bajé. O tal vez para lo de ir a Marte.

**EasyIndustry:** también o para hacer un hotel espacial y recibir extraterrestres.

**Francoenter:** Todo lo que sea meterle ganas al coso, a la industria aeroespacial, yo lo haco.

**EasyIndustry:** Bien. Sí, yo también. Y aparte yo lo hablaba con Denise, que seguramente ellos saben que viene un meteorito o una un apocalipsis inminente.

### **00:32:14**

**EasyIndustry:** Entonces están poniendo toda la guita en ver cómo sobrevivir en el espacio,

**Francoenter:** Adiós, imbéciles. Ah.

**EasyIndustry:** como la película esa no mires arriba.

**Francoenter:** Mm.

**EasyIndustry:** La viste me da miedo per

**Francoenter:** No, pero más o menos la conozco.

**EasyIndustry:** boludo. Bueno, ¿qué

**Francoenter:** Sí,

**EasyIndustry:** arranquemos?

**Francoenter:** dale. Qué frío,

**EasyIndustry:** Bueno,

**Francoenter:** frío,

**EasyIndustry:** a ver.

**Francoenter:** frío. A ver, habíamos

**EasyIndustry:** Próximos casos.

**Francoenter:** dicho

**EasyIndustry:** Consultar sobre las competencias. pedir a la herramienta. Me acá laía,"¿Qué tan aplico la simplificación de equipo inicial en las 12 clases? Solo eliminar los paquetes kits o literal solo arma más arrojadizas más oro.

**Francoenter:** Y es que después de eso, ¿qué más hay? la armadura, supongo,

**EasyIndustry:** los kits y la ropa.

**Francoenter:** ¿no? Por eso, o sea,

**EasyIndustry:** Pero

**Francoenter:** ropa, al menos creo yo, cuando cuando hablamos de ropa, estamos hablando de la ropa bonita, ropa, eso no,

**EasyIndustry:** no, eso no viene.

**Francoenter:** eso yo creo que se va junto a los kits y después de eso no hay

**EasyIndustry:** Mm, mm,

**Francoenter:** mucho más.

**EasyIndustry:** mm.

### **00:33:55** {#00:33:55}

**EasyIndustry:** untenedor y traigo algo para tomar. Bueno, vigilaron si viene Nina. Bueno, vos vas a hacer mis ojos. No se tiene que subir la gata. chat, cuídenme la mesa. Bueno, dice, consultar sobre competencias, pedir a la herramienta de inteligencia artificial que clasifique cómo aplicar las competencias de entrenamiento armadura, incluyendo penalizaciones por falta de competencia.

**Francoenter:** Sí, eso ya lo habíamos decidido.

**EasyIndustry:** Ah, sí.

**Francoenter:** O sea, espera.

**EasyIndustry:** Jo.

**Francoenter:** Eh, ¿me lo puedes volver a repetir a ver si lo escuché bien?

**EasyIndustry:** Oh, está en el resumen. No te lo mandé. No lo subí. No lo subí

**Francoenter:** Eh,

**EasyIndustry:** tampoco.

**Francoenter:** pues

**EasyIndustry:** Merda,

**Francoenter:** esto está en revisiones.

**EasyIndustry:** que todavía no lo subí y yo tengo que

**Francoenter:** es

**EasyIndustry:** autenttificarlo. Ahora sí. Ahora sí está revisiones y la la reunión es la última y está en MD porque no la baja en PDF que le cuesta más leerla.

**Francoenter:** A ver, español revisiones. competencia,

**EasyIndustry:** H

**Francoenter:** sea se determina que todos los personajes tienen competencia con básica y usa así, eso lo habíamos dicho. Se establece que todos los personajes tienen armadura ligera, mientras que el uso de armadura mediana pesada sin entrenamiento ocurrirá con una desventaja en prueba de fuerza y destreza.

### **00:36:04** {#00:36:04}

**Francoenter:** Sí, velocidad de movimiento. Sí, eso está

**EasyIndustry:** Ya puedes la

**Francoenter:** bien.

**EasyIndustry:** cámara.

**Francoenter:** Los próximos pasos.

**EasyIndustry:** regular armas marciales, implementar la regla de competencia.

**Francoenter:** Vale, consultar sobre competencia pedir la herramienta de

**EasyIndustry:** sa no tiene que ser algo dulce o o

**Francoenter:** indarizar

**EasyIndustry:** brazoso.

**Francoenter:** estadísticas. Utilizar el valor medio de los dos. Sí, eso está bien. O sea, eso eso no lo hizo todavía.

**EasyIndustry:** Lo está haciendo

**Francoenter:** Ah,

**EasyIndustry:** ahora.

**Francoenter:** regla reglar armas marciales. Implementar la regla de competencia en armas en el personaje. Sí, está bien. Probar consumibles. Eso para después. Definir equipamiento, los paquetes de inicio. Bueno, eso ya estaban diciendo. Probar combate, jugar el juego Divinity Original 2 para experimentar el ritmo de combate. Hiciste la

**EasyIndustry:** So De hecho, la hice la tarea y me frustré porque no puedo no puedo matar los cocodrilos de

**Francoenter:** tarea

**EasyIndustry:** m\*\*\*\*\*. Son más difícil que la m\*\*\*\*\* el combate del

**Francoenter:** los cocodrilos.

**EasyIndustry:** Divinity.

**Francoenter:** Ahora no los recuerdo esos.

**EasyIndustry:** Son los de los que están en la isla.

**Francoenter:** Pasa lo jugé esa banda y no recuerdo todo

### **00:38:02** {#00:38:02}

**EasyIndustry:** Básicamente son cuatro, tres cocodrilos que te tiran un meteorito de aceite y uno se teletransporta y pega zarpado y son un nivel arriba y son cuatro, ¿viste? Es como que primero tenés que encontrar a todos tus compañeros en los cuatro y subirlos a todos por lo menos un nivel que todos en nivel cuatro. Si no es imposible.

**Francoenter:** Si eso te parece un pijazo.

**EasyIndustry:** Y me falta el y recién arranco.

**Francoenter:** Por eso esperar que llegues a la parte de la guacha de fuego.

**EasyIndustry:** Sí, ya está. No,

**Francoenter:** Ah.

**EasyIndustry:** me de hecho hay había uno que lo igual me gustó tener que hacer esto. Uno que lo lo gané con astucia, no lo gané con técnica. Okay. Había uno que dice al principio, cuando recién llegas a la isla esa, te dice,"Están jugando a tal tipo, porque desapareció y de repente estás explorando y lo encontras al tipo y el tipo es un asesino, es un guardia de seguridad que mata gente y y está como convertido en una bestia, no sé si está corrompido o algo. Y no puedes escapar. Si te lo cruzaste, cagaste porque no puedes escapar de esa pelea. Y yo creo que yo me elegí a la mina y me la mató de un saque, así que tuve que agarrar al chavoncito.

### **00:39:37** {#00:39:37}

**EasyIndustry:** Me agarré al príncipe, al príncipe rojo y me fui corriendo para dentro. O sea, alcanzarme, p\*\*\*. Y y los mataron los de adentro al chavón. Yo le fui, le le hice KS a lo que le estaban pegando y le di tipo el último golpe y lo maté así,

**Francoenter:** Así de

**EasyIndustry:** pero me la mató la mina,

**Francoenter:** fácil.

**EasyIndustry:** pero de un saque. Fue tipo, ¿qué? Así que bueno, eso me gustó, tener que rebuscármelas para no como el Paldurs que si no están recontraatega es la verdad que es bastante fácil.

**Francoenter:** Y ahora vamos a sacar el tres.

**EasyIndustry:** El Divinity.

**Francoenter:** Sí, veremos cómo será.

**EasyIndustry:** Bueno, ahí terminó Claudio

**Francoenter:** Dale.

**EasyIndustry:** comitéo. Listo, todo subido. El chavón siempre actualiza un documento que se llama status, revisión status. Ahí va cargando todo lo que hace.

**Francoenter:** Ah, okay.

**EasyIndustry:** Bueno, ¿qué nos faltaría hacer

**Francoenter:** Y bueno,

**EasyIndustry:** entonces?

**Francoenter:** lo que estamos diciendo de acá, establecer las acciones y los costos de cada movimiento durante bla bla, que más o menos, ¿viste cómo se juega?

**EasyIndustry:** Sí, el R glossar.

**Francoenter:** Sí. Y después creo que habíamos dejado, ¿dónde está la nota?

### **00:41:38** {#00:41:38}

**Francoenter:** Yo sé que habíamos dicho algo de para la siguiente. Vemos esto. Acá está todo lo de horse boyfriend y toda la boludo.

**EasyIndustry:** ¿Qué cosa?

**Francoenter:** Eh, juraría que habíamos dicho que íbamos a hacer la para hoy, o sea, ¿qué íbamos a hacer hoy la vez anterior, viste? como que ya lo habíamos dejado como la siguiente hacemos esto. No lo estoy encontrando. No sé si era solo eso de la energía o si era algo

**EasyIndustry:** Eh,

**Francoenter:** más

**EasyIndustry:** pasa que la última vez ya dice revisar clases, revisar y definir las clases de los

**Francoenter:** por eso,

**EasyIndustry:** personajes.

**Francoenter:** pero las clases como que ya lo habíamos hecho porque no cambiamos mucho que yo

**EasyIndustry:** No, no, de hecho ya ya las

**Francoenter:** recuerdo.

**EasyIndustry:** actualicé,

**Francoenter:** Bueno, a ver, para ser justo nos habíamos quedado la mitad de las clases, no las habíamos visto todas,

**EasyIndustry:** ¿no? Pero después dijimos,

**Francoenter:** pero

**EasyIndustry:** como esto es

**Francoenter:** tipo como mucho, ¿viste? Después cuando se ponen mecánicas que tienen clases distintas,

**EasyIndustry:** repetitivo,

**Francoenter:** como no sé, el bardo y su y su inspiración es así.

**EasyIndustry:** y industry la última que dijo,"Chao, tengo un poco de hambre. Boyfriend,

### **00:43:52** {#00:43:52}

**EasyIndustry:** eso estabas leyendo.

**Francoenter:** Eso es lo último de

**EasyIndustry:** Ah,

**Francoenter:** todo.

**EasyIndustry:** estábamos viendo lo del Aristotopas.

**Francoenter:** Las clásicas para todas las edades.

**EasyIndustry:** Aristopas.

**Francoenter:** El pie.

**EasyIndustry:** Bueno, ya fue. Vamos viendo lo que encontramos.

**Francoenter:** Dale. Bueno, los de hechizos al final se lo mandaste, Claudio para que lo haga,

**EasyIndustry:** Lo de hechizos, ¿no? Ya se lo digo.

**Francoenter:** porque esa era una cosa que nos habíamos quedado

**EasyIndustry:** Sí, para que le voy a hablar. ¿Qué haces,

**Francoenter:** Eh,

**EasyIndustry:** Claudio? Escúchame, hay una inconsistencia en los hechizos. en el Spells CCB. Eh, por favor, ejecuta un par de de auditorías de las de las columnas. Yeah. Porque vi que algunas estaban corridas, qué sé yo, algunas dicen efecto y tienen la descripción de

**Francoenter:** Y además el nivel estaba

**EasyIndustry:** ese y animás. Ah,

**Francoenter:** mal.

**EasyIndustry:** los niveles estaban mal en chequearlo con el MD correspondiente para poder seguir clasificando los el CCB.

**Francoenter:** Igual está seguro que el MD original está

**EasyIndustry:** Otro, amor.

**Francoenter:** Bien.

**EasyIndustry:** Sí, ya me voy a fijar. A ver, si está bien el MD.

### **00:45:45** {#00:45:45}

**EasyIndustry:** Listo. Claudio se la rebanca. Todo el mundo me lo está tirando abajo en las redes. No, dicen que esto es una m\*\*\*\*\*,

**Francoenter:** Los pelotos de la R no saben nada, solo hablan.

**EasyIndustry:** boludo.

**Francoenter:** Manga de down.

**EasyIndustry:** Yo hacía yo hacía cosas zarpadas con Géminis y

**Francoenter:** Impresionante.

**EasyIndustry:** después cuando cuando encontré Cloud, cuando empecé a usar Cloud para el auro, dije fa.

**Francoenter:** Fa

**EasyIndustry:** Así dice, ese mismo sonido.

**Francoenter:** fa

**EasyIndustry:** Y ahora todo el mundo se queja de Claudio, pero hoy hoy por ejemplo todo, no sé si alguno usaste Slack,

**Francoenter:** lo conozco, pero no lo usé.

**EasyIndustry:** e todos los slack de que me hablaron a mí los respondí todos con Claud.

**Francoenter:** La clásica hace mis mails. No tengo ganas de pensar. Manda

**EasyIndustry:** Básicamente,

**Francoenter:** WhatsApp.

**EasyIndustry:** básicamente yo soy el backen de Claudio, yo soy como el senior. Entonces le digo,"Revisaste mail, revisaste mail, no, revisaste Slack." me dice,"Está diciendo tal cosa y como yo tengo conectados los MSP de todas las bases de datos de la empresa y de la aplicación, este, les doy un poco de contexto y le digo, andá a buscar el trigger de esta tabla, andá buscar la función que está en tal lugar." O sea,

### **00:47:22** {#00:47:22}

**EasyIndustry:** le doy contexto y el chavón va y me dice,"Pa, pa." Sí, ya lo diagnostiqué y el problema es este, piola, le digo, y generé como todo un un ambiente de test, ¿viste? Para que él pruebe ahí dentro del backend. Entonces digo, bueno, probá el ambiente de test,

**Francoenter:** C'est

**EasyIndustry:** tírame el resultado y si funciona, puséalo a producción. Sí, funcionó todo, qué sé yo. Listo. Y digo, a ver, ¿qué le vas a decir? Le voy a decir tal cosa y ahí estoy leyendo que solamente probó una sola. cosa, ¿viste? Y le digo,"Espera, vos le vas a decir esto, pero probaste tal cosa." No, no me fijé. Y empieza otra vez to

**Francoenter:** con la hay que simplemente hay que tener paciencia y darle de

**EasyIndustry:** como si fuese un junior.

**Francoenter:** poquito

**EasyIndustry:** Como si yo no fuera junior, ¿viste? Pero más junior.

**Francoenter:** macho, señor.

**EasyIndustry:** Claro. ¿Qué sería un baby?

**Francoenter:** Try.

**EasyIndustry:** Bueno, vamos a mientras este hace spens ahí, mientras me mientras estoy quemando un bosque de Sudáfrica,

**Francoenter:** Mhm.

**EasyIndustry:** vemos el ruí.

### **00:48:48** {#00:48:48}

**EasyIndustry:** Bien,

**Francoenter:** Let's go.

**EasyIndustry:** esta vez no te voy a compartir pantalla.

**Francoenter:** Está bien.

**EasyIndustry:** Me da paja.

**Francoenter:** Tranca. Total, mientras estemos leyendo lo

**EasyIndustry:** Sí, sí. Bueno,

**Francoenter:** mismo.

**EasyIndustry:** convenciones de glosario. Sí, está perfecto. Bueno, habla vos porque yo voy a

**Francoenter:** A ver. Bueno, igual utiliza la siguiente convención. etiquetas entre corchetes.

**EasyIndustry:** comer.

**Francoenter:** Algunas entradas tienen una etiqueta entre corchetes después del nombre de entrada como atacar acción. No sé que ahí básicamente explica simplemente que es etiquetas. ¿Tú o tú? Ay, Dios. Vamos a explicar español

**EasyIndustry:** Pero eso es tipo traducido o está

**Francoenter:** ahora.

**EasyIndustry:** bien platquito. Sí, mejor.

**Francoenter:** Es que, o sea, sí. Está bien,

**EasyIndustry:** A ver,

**Francoenter:** pero son cosas

**EasyIndustry:** espera.

**Francoenter:** como,

**EasyIndustry:** No lo estaba leyendo. Si quieres.

**Francoenter:** no digo lo que digo es que son estas reglas son no importan, boludo, simplemente están explicando lo que son la etimología,

**EasyIndustry:** Ah,

**Francoenter:** ¿no? La etimología, la la

**EasyIndustry:** la nomenclatura.

**Francoenter:** nomenclatura, es como es como los tutoriales, ¿viste?

### **00:50:04**

**Francoenter:** Cuando te dicen WD para moverte. Sí, sí, ya sé.

**EasyIndustry:** Bueno, entonces vamos con la definición de la regla que está

**Francoenter:** Igual, primero antes de eso,

**EasyIndustry:** abajo.

**Francoenter:** una cosa que quería eh los eh los Alightment los habíamos

**EasyIndustry:** habíamos sacado.

**Francoenter:** sacado, ¿no? Bueno,

**EasyIndustry:** Ajá.

**Francoenter:** estaba no recordaba y bueno, todos estos ya, bueno, las pruebas de característica que dijimos que quedaban la simplemente a ver simplemente son la cosa de los puntitos puntuación de característica de modificador. Una creatura tiene puntuación de características fuerza de bla. Sí, eso sigue estando.

**EasyIndustry:** Gracias, amor.

**Francoenter:** Esto da,

**EasyIndustry:** Pete

**Francoenter:** o sea, esto es lo que va a cambiar acá.

**EasyIndustry:** la

**Francoenter:** O sea, obviamente el sistema de energía solo es cuando estás en

**EasyIndustry:** Gracias.

**Francoenter:** combate. Cuando estás fuera de combate las acciones siguen siendo libres, ¿no? Por así decirlo.

**EasyIndustry:** Sí.

**Francoenter:** Bueno, acá explica lo de ventaja. Me encanta. Aventura. Una aventura es una serie de encuentros. A través de sus juegos surge una historia. Véase también encuentro. Menos mal, boludo.

**EasyIndustry:** Paraá.

**Francoenter:** Ahora me vas a explicar lo que es serie y lo que es

### **00:51:37** {#00:51:37}

**EasyIndustry:** No, no, pero que esto es reimportante. Posta,

**Francoenter:** No.

**EasyIndustry:** posta que es importante porque le da palabras específicas a a cosas. Por ejemplo, en cuando haces el storytelling o cuando haces la parte de, ¿cómo se llama? Lo de lo que es el Dunion Master, el Dunion Master es tiene que calcular todo en encuentros y escenas. Entonces para ahí, para el jugador es medio una pelotudez porque él va fluyendo, digamos, a través de todas las cosas que pasan. Pero en realidad esto es e esto viene bajado directamente de Dion Master. Esto es como cosas ultra específicas de Dion Master. Por ahí el jugador no tiene por qué saber, pero bueno, capaz que vos te interesaba.

**Francoenter:** elamiento dijimos que ya no iba.

**EasyIndustry:** Parece una boludez.

**Francoenter:** Cuidado.

**EasyIndustry:** Ahí lo arregló. arreglasse el MD también que vi que tenía algunos hechizos. Los últimos tenían como los carácteres muy separados.

**Francoenter:** ¿Cuál es acá que dice área de efectos y te pone seis tipos de área de efecto? Cono y línea,

**EasyIndustry:** Mm.

**Francoenter:** está bien, son entendibles. Lo mismo cubo y esfera.

**EasyIndustry:** Ese

**Francoenter:** Pero, ¿qué c\*\*\*\*\* es un cilindro?

**EasyIndustry:** se usa en el hechizo, yo lo usé en el hechizo e uno que puedes invocar una tormenta.

### **00:53:45** {#00:53:45}

**EasyIndustry:** Entonces, vos puedes invocar una tormenta que es una nube y esa nube está en el aire, pero su efecto es hacia abajo y afecta todo lo que está en el en el radio Okay. de esa nube hacia abajo. Entonces es todo un cilindro lo que

**Francoenter:** Bueno,

**EasyIndustry:** afecta.

**Francoenter:** Ya que estamos hablando de ese tema, términos verticalidad en el juego. ¿Qué opinas?

**EasyIndustry:** Yo estoy yo estoy a favor.

**Francoenter:** Yo también estoy a favor, pero o sea, sí,

**EasyIndustry:** 2D.

**Francoenter:** porque al menos la mi idea mi idea del del juego es que fuera do D, ¿viste? top down. La cosa es que si bien obviamente se puede hacer verticalidad en ciertas cosas sin problema, ¿no? Decis esta área técnicamente está más elevada que esta y de eso no hay mucho problema. Como mucho sería que un nivel hacia arriba y un nivel hacia abajo, tipo, no no haríamos muchos pisos.

**EasyIndustry:** Si lo tenés, es que no importa.

**Francoenter:** ¿Qué cosa?

**EasyIndustry:** Eso no tienen muchas consecuencias de complejidad porque es la misma programación de un nivel o 20\. Lo que es más complejo es esa altura, esa elevación.

**Francoenter:** No sé por eso, pero estoy pensando cómo está cómo afecta a las otras cosas que hechizos y

**EasyIndustry:** Para mí el ahí tienes dos formas de

### **00:55:42** {#00:55:42}

**Francoenter:** cosas.

**EasyIndustry:** calcular los hechizos. Si en línea recta de forma trigonométrica, como dice la regla que hay que hacerlo, este, que va a ser más fácil calcularlo, digamos, con con la compu o como se te cante

**Francoenter:** Obie

**EasyIndustry:** a vos, pero básicamente todo se puede resolver este con trigonometría, sin aunque no est en 3D. Y con respecto, para mí lo que sí es complejo es que si hay más de un nivel es que si va a haber

**Francoenter:** Por eso es lo que estoy pensando.

**EasyIndustry:** capas.

**Francoenter:** Imagínate que tiras una columna en una torre. y la tiras en el piso abajo de todo.

**EasyIndustry:** No, no se va a caer la

**Francoenter:** Supongamos que es un hechizo que que que lo que digo es le,

**EasyIndustry:** torre.

**Francoenter:** o sea, supongamos no que no es una tormenta, pero qué sé yo, un hechizo que puede atravesar paredes.

**EasyIndustry:** Ajá.

**Francoenter:** No harías que le pegue a todos los niveles para arriba.

**EasyIndustry:** No solamente e espera porque tiene tiene el juego tiene esas determinaciones, esas reglas. Ah. justamente si el hechizo afecta en línea recta, no afecta en cubo.

**Francoenter:** No, pero yo dije cilindro,

**EasyIndustry:** El cilindro sí afecta,

**Francoenter:** por

**EasyIndustry:** pero no es un problema porque igual,

### **00:57:11** {#00:57:11}

**Francoenter:** eso

**EasyIndustry:** bueno, una esfera también pegaría en ese caso.

**Francoenter:** depende que tan grande, pero sí.

**EasyIndustry:** Por eso para mí no es un problema. Para mí lo más complejo es el layering, los pisos, este,

**Francoenter:** No, no, pero por eso

**EasyIndustry:** en cada turno que se vea un layer u otro,

**Francoenter:** es

**EasyIndustry:** eso para mí es más complejo a nivel programación que el a nivel diseño de nivel.

**Francoenter:** a ¿Qué te referís con que se vea porque sería complicado

**EasyIndustry:** Y sí, eh, porque es online,

**Francoenter:** eso.

**EasyIndustry:** entonces, ah, cierto, el que se le ve siempre es la persona que tiene su personaje, entonces siempre va a ver su capa, digamos. Entonces,

**Francoenter:** Sí,

**EasyIndustry:** no creo que haya un problema.

**Francoenter:** es que a ver, estoy intentando pensar.

**EasyIndustry:** Listo.

**Francoenter:** Imagínate que creamos un mapa, ¿no?

**EasyIndustry:** Sí,

**Francoenter:** Digamos es una casa que tiene tres pisos. Okay.

**EasyIndustry:** sí.

**Francoenter:** Supongamos que dibujamos el primer piso, hacemos todos los cuartos y ponemos que haya una escalera. La cosa es, supónete que un personaje quiere decir,"Le quiero pegar un tiro al techo." ¿Cómo hace

**EasyIndustry:** Sí.

**Francoenter:** eso?

**EasyIndustry:** Y cómo hace nada como haríamos nosotros.

### **00:58:57**

**EasyIndustry:** le dice el al coso y y que decida el el dungeon master lo que pasa, qué sé yo. Ahí no, no el juego solamente nos íbamos a ocupar de cosas como estandarizar los

**Francoenter:** Es que por eso,

**EasyIndustry:** combates

**Francoenter:** imagínate que estás en un combate y sabes que hay un enemigo. Arriba tuyo.

**EasyIndustry:** y ahí tiene ahí tiene 100% de

**Francoenter:** ¿Dónde?

**EasyIndustry:** cobertura.

**Francoenter:** Suponete que es un hechizo que te permite porque qué s yo, es una casa de madera, no se va a bancar mucho, ¿eh?

**EasyIndustry:** Sí,

**Francoenter:** Y le pegas al techo y vos sabés que hay un enemigo porque no sé, sos un elfo y escuchas muy bien y escuchas los pasos del tipo arriba.

**EasyIndustry:** a mí me parece K. Si vos apuntás bien sin ver porque no podés ver. Ah, vos decís que como es 2D no podrías apuntar al techo.

**Francoenter:** S, por eso estoy pensando cómo cómo se

**EasyIndustry:** Pero si estás en combate,

**Francoenter:** aplica.

**EasyIndustry:** si estás en combate es porque te estás viendo.

**Francoenter:** Pero suponer que que te estás peleando con alguien abajo y escuchas a los refuerzos arriba.

**EasyIndustry:** Okay. Y depende, se puede romper el techo y caer todos bajo.

### **01:00:27** {#01:00:27}

**Francoenter:** supone ponerle. Por eso estoy pensando,

**EasyIndustry:** Ahí le ponés Ahí le ponés una Ahí le ponés una propiedad a la alayer,

**Francoenter:** no sé, no no estoy hablando de eso. No no no estoy no estoy hablando de cómo programarlo,

**EasyIndustry:** digamos.

**Francoenter:** estoy hablando de cómo lo diseñarías en un juego para que se vea y se haga eso, ¿entendés? Porque tipo,

**EasyIndustry:** Ah.

**Francoenter:** vos tenés el mapa y vos el mapa lo estás viendo desde arriba. Vos estás en esa altura. Supongo que lo que haría sería, podrías mover tu cámara a la siguiente layer que esté a

**EasyIndustry:** Claro.

**Francoenter:** oscuras porque no tenés visión en ella,

**EasyIndustry:** Y y ahí seleccionar un

**Francoenter:** pero y ahí seleccionas un cuadrado y decís,

**EasyIndustry:** objetivo.

**Francoenter:** "Tírame mi hechizo ahí." Y si programas para que el piso sea destruible, que sea

**EasyIndustry:** Ahí lo complejo sería que si yo apunto a

**Francoenter:** destruido.

**EasyIndustry:** otra ahí, ahí yo estoy pensando ya en problemas que pueden llegar a surgir, pero bueno, son problemas del futuro, me parece,

**Francoenter:** A ver, tirarlo por ahí.

**EasyIndustry:** y la mayoría de los juegos cuando vos estás en un layer y y subís eh

**Francoenter:** Salgo.

### **01:01:52**

**EasyIndustry:** layer y hacés clic sobre esa superficie. Generalmente lo más normal es que si no lo programaste de antemano es que el digas, no puedes acceder, no puedes, no llega hasta acá tu hechizo porque no es que le estoy apuntando a la pared,

**Francoenter:** Sí,

**EasyIndustry:** al techo, sino que le estoy apuntando al piso desde abajo. Entonces,

**Francoenter:** estáendo.

**EasyIndustry:** yo creo que habría que ser astutos en en no darle la oportunidad al usuario que crea que lo puede hacer.

**Francoenter:** Por eso es por eso que estaba pensando en que tal vez no estoy por eso no estoy 100% seguro qué tanto debíamos aplicar verticalidad.

**EasyIndustry:** Te entiendo. Para mí sí, pero como solamente exploración, no tan dinámico.

**Francoenter:** Eh, ¿sabes qué? Yo yo creo, yo creo. ¿Qué te parece esto?

**EasyIndustry:** No.

**Francoenter:** La única verticalidad que hacemos es tipo en el en el mismo mapa, o sea, no puede ser otro piso, sino que tiene que ser algo que está que estás vos. No sé, imagínate que vos estás en un en un valle y una estás en un teatro, ¿no? Y tenés la parte que está elevada del teatro y la parte que estás abajo,

**EasyIndustry:** Sí,

**Francoenter:** ¿viste? Donde estás vos.

**EasyIndustry:** ya te entendí.

### **01:03:25**

**EasyIndustry:** Como un es una superficie sin capas en el mismo

**Francoenter:** Exacto.

**EasyIndustry:** lugar más

**Francoenter:** Simplemente que las esos lugares tienen la propiedad de que son

**EasyIndustry:** altos.

**Francoenter:** de que tienen más alto y lo y lo mismo para si hay más bajos,

**EasyIndustry:** Bueno,

**Francoenter:** ¿no?

**EasyIndustry:** claro,

**Francoenter:** Entonces como mucho hay un nivel más alto y un nivel más bajo y hasta ahí lo va a hacer.

**EasyIndustry:** como Pokémon.

**Francoenter:** Exacto. Como Pokémon

**EasyIndustry:** Y solamente para ir de un lugar a otro, sí o sí necesitas como un una zona de transición o pueden dependiendo de esa

**Francoenter:** si tenés algo para volar o si o si puedes escalar ahí ya depende

**EasyIndustry:** altura

**Francoenter:** de Exacto.

**EasyIndustry:** del salto.

**Francoenter:** O sea, lo que sería sería todo lo que son la eh tenés las tenés las dos zonas, ¿no? Una que es la nivel en sentido de altura alto y una de la bajo. Y lo importante, pero esa esas dos programadas son lo mismo. Técnicamente lo que importa,

**EasyIndustry:** Sí, son pisos.

**Francoenter:** sí, lo que importa es el borde que la separa. Eso sí sería un tile especial en donde ahí le ponemos todas las las

**EasyIndustry:** las

**Francoenter:** propiedades que hace, que digas, qué sé yo, por ejemplo,

**EasyIndustry:** propiedades.

### **01:04:52** {#01:04:52}

**Francoenter:** tal vez tu hechizo no alcanza porque está tan alto que que no le puedes aunque aunque sea solo un nivel, decimos la propiedad es que está a 100 met de altura, ¿entendés? Algo así.

**EasyIndustry:** Ya te entendí. Sí, sí, sí. para que se sienta la tridimensionalidad de un efecto en área que es esférico.

**Francoenter:** Exacto. Pero no no nos podemos a pensar más en 3D.

**EasyIndustry:** ¿Está bien?

**Francoenter:** Son solo tres niveles con estatus,

**EasyIndustry:** Sí, sí, sí,

**Francoenter:** con

**EasyIndustry:** sí. Yo opino que pueden ser no solamente tres,

**Francoenter:** valores,

**EasyIndustry:** sino que con diferentes alturas. Este, lo que sí,

**Francoenter:** ¿no? No tendrían que pasar uno debajo de otro.

**EasyIndustry:** eso no tendría que pasar y lo otro es que en Pokémon si viste que si no tenés como un paso de una altura a otra no podés

**Francoenter:** Sí, sí.

**EasyIndustry:** ir.

**Francoenter:** Por eso para mí ese ese paso está definido por los bordes.

**EasyIndustry:** Claro, por No, pero no es tipo dependiendo qué altura es, porque si yo tengo un paso, no sé, de un metro, ahí pueden Todos,

**Francoenter:** Por eso los bordes,

**EasyIndustry:** hasta el más chiquito, hasta el HFlin puede

**Francoenter:** por eso te por eso te digo que está definido por los bordes.

### **01:06:02** {#01:06:02}

**EasyIndustry:** pasar.

**Francoenter:** El borde va a tener un valor que va a ser la altura y ahí vamos a tener diferentes acciones que te permiten dependiendo de la altura, ¿viste? Si es 1 metro, sí, cualquiera lo puede escalar,

**EasyIndustry:** Ya 2 met quizá necesitas una tirada de de

**Francoenter:** pero ya 2 met ahí te ve. Exacto. Y ya si son 10 met,

**EasyIndustry:** atletismo,

**Francoenter:** ¿viste? Tenes que tener sí o sí un poder que te permita volar o

**EasyIndustry:** un hechizo volar. Sí, está bien. Estoy de acuerdo. Estoy de acuerdo.

**Francoenter:** algo.

**EasyIndustry:** Pero a los lugares sí puedes ingresar eh, como si fuese mapa, pero si vos salís, aparece el techo.

**Francoenter:** Sí.

**EasyIndustry:** Dale, estoy

**Francoenter:** O sea,

**EasyIndustry:** conforme.

**Francoenter:** la idea es que eh todos los mapas se vean 100% haya visibilidad si los estás mirando desde arriba, en pocas palabras,

**EasyIndustry:** Está bien.

**Francoenter:** como el Doom.

**EasyIndustry:** Okay.

**Francoenter:** ¿Sabías que técnicamente el Doom no es 3D?

**EasyIndustry:** No, porque no me acuerdo cómo renderizaba,

**Francoenter:** Es básicamente una imagen 2D que te la de

**EasyIndustry:** pero

**Francoenter:** la la forma que con con trucos visuales te hace parecer que es 3D,

### **01:07:19** {#01:07:19}

**EasyIndustry:** sí.

**Francoenter:** pero es literal una imagen 2D. Todo no tiene espacios reales 3D, por eso es que no podes tener plataformas o escaleras pasando por debajo de cosas.

**EasyIndustry:** No, es todo paramétrico.

**Francoenter:** Es es todo 2D.

**EasyIndustry:** Claro, pero digo, el mapa es todo paramétrico, o sea, está pensado en código más que con assets en 3D.

**Francoenter:** Exacto.

**EasyIndustry:** Sí, por eso puede correr en una prueba de embarazo.

**Francoenter:** Igual eso de la prueba de embarazo,

**EasyIndustry:** Es posta,

**Francoenter:** ¿no?

**EasyIndustry:** boludo.

**Francoenter:** Solo usaban la la pantallita,

**EasyIndustry:** La pantallita decí vos.

**Francoenter:** lo tenían conectado en coso de costado.

**EasyIndustry:** Bueno, seguimos.

**Francoenter:** Dale.

**EasyIndustry:** Área de efecto tiene un punto de origen y un

**Francoenter:** Sí, está bien. Eso es como funcionan las áreas de efecto en general,

**EasyIndustry:** lugar

**Francoenter:** lo cual está bien, ¿no? Vamos a cambiar. Y después viene lo de cobertura, que ya lo habíamos dicho. Clase armadura queda como Sí,

**EasyIndustry:** sin sin objeciones.

**Francoenter:** está bien. Tal vez como muchos después vemos valores específicos en el sentido de si nos parece que algo está muy fuerte o muy débil,

**EasyIndustry:** Está

**Francoenter:** pero en funcionamiento en sí está bien.

### **01:08:39** {#01:08:39}

**Francoenter:** Bueno, entrenamiento de armadura, ya lo dijimos. Igual este

**EasyIndustry:** H

**Francoenter:** sigla es lo que dijimos básicamente.

**EasyIndustry:** bien. Ahora queé. Cuando realizas la acción de atacar, puedes hacer una tirada de ataque con un arma, golpe sin armas, equipar o desequipar armas, moverse entre ataques.

**Francoenter:** Todo eso queda, ¿no?

**EasyIndustry:** Sí.

**Francoenter:** la tirada de ataque, la clásica, en donde vamos a tener ahí que es la acción básicamente actitud.

**EasyIndustry:** H

**Francoenter:** Un monsto tiene una actitud inicial, es un personaje jugador amistoso, tigre, indiferente. Está bien, eso queda más que nada porque se utiliza para los hechizos,

**EasyIndustry:** Sí, sí,

**Francoenter:** ¿no?

**EasyIndustry:** sí.

**Francoenter:** sintonía atunment.

**EasyIndustry:** Y para la Bueno, esto es para sintonizarse con con cosas mágicos.

**Francoenter:** Esto

**EasyIndustry:** Lo usé muy pocas veces. Hay hay dung master que le importan, hay otros que no.

**Francoenter:** en tu opinión.

**EasyIndustry:** Para mí, eh, si vos creés que la historia, si la historia ronda alrededor de EMS, tiene sentido. Para mí debe ser opcional una, eso es una opción cuando configura el má cuando

**Francoenter:** cuando creas un

**EasyIndustry:** no,

**Francoenter:** ítem.

**EasyIndustry:** cuando en el item sí es requiere sintonía.

### **01:10:24**

**EasyIndustry:** Ahora, para mí hay un togel mayor a un mayor nivel que es cuando creas la

**Francoenter:** Ah, cuando creas la aventura en sí le pones como hay atmos y

**EasyIndustry:** Sí,

**Francoenter:** listo.

**EasyIndustry:** exacto.

**Francoenter:** Okay.

**EasyIndustry:** Sí, porque algunos le importa, qué sé yo,

**Francoenter:** Okay.

**EasyIndustry:** capaz que te bajaste un assets que tenía sintonía y vos no querés no lo querés usar.

**Francoenter:** Sí, está bien, está bien.

**EasyIndustry:** Me parece que está

**Francoenter:** Está bien.

**EasyIndustry:** bien.

**Francoenter:** Igual creo que también debería tener la categoría dentro por si por ahí te gusta que en general el coso, pero querés editar uno para que ese específico no lo tengas.

**EasyIndustry:** Es que sí o sí es que sí o sí lo tiene que tener sí o sí.

**Francoenter:** Por

**EasyIndustry:** Eh,

**Francoenter:** ejemplo,

**EasyIndustry:** hay objetos eh muy poderosos que sí o sí necesitas sincronizarte.

**Francoenter:** no la última,

**EasyIndustry:** No sé si viste la película de Dungeons and Dragons, la última, ¿eh? Bueno, había un objeto que era muy potente, que era era crucial que uno de los personajes se pueda

**Francoenter:** No.

**EasyIndustry:** sintonizar, o sea, no podían cumplir la misión si no se podía sintonizar. Así que por eso te digo, depende mucho de la aventura. Si está orientada a un objeto mágico para cumplir una misión importante, sí es una cuestión que tener que sea una propiedad del objeto.

### **01:11:50** {#01:11:50}

**Francoenter:** Okay,

**EasyIndustry:** Bien.

**Francoenter:** llegado. Hemos hablado de esto. de los diferentes niveles de visión

**EasyIndustry:** Sí, creo que las habíamos simplificado.

**Francoenter:** simplificado. Eh, creo que era como la que podías mirar con otras cosas que no sean que no

**EasyIndustry:** Bueno,

**Francoenter:** sean ojos.

**EasyIndustry:** sí,

**Francoenter:** Dark Vision y Super Dark Vision.

**EasyIndustry:** sí.

**Francoenter:** Y creo que eso era todo.

**EasyIndustry:** Habría que aplicar, habría que aplicar eso mismo acá,

**Francoenter:** Sí.

**EasyIndustry:** buscar dónde lo hicimos y aplicarlo acá. Creo que estaba en Character Creation.

**Francoenter:** S creo que estaba por ahí.

**EasyIndustry:** Bueno, ensangrentado. Bueno,

**Francoenter:** Eso se usada en hechizos, ¿no?

**EasyIndustry:** esto no se usa en 5.5, eh, pero no dice acá qué es lo que genera.

**Francoenter:** Yo pensaría que es como hechizos de sangre al estilo necromándicos o de vampiros ahí que te dice,"Ah, como estás ensangrentado, puedo hacer una espada con tu sangre que te pincha

**EasyIndustry:** Sí,

**Francoenter:** todo por

**EasyIndustry:** podrías podrías en las dos las dos cosas,

**Francoenter:** eso,

**EasyIndustry:** pero acá está hablando de una cuestión

**Francoenter:** pero

**EasyIndustry:** específica, por eso no dice que ensangrentado te quita vida, sino que si tenés la mitad de tus puntos de vida,

### **01:13:17**

**Francoenter:** no por eso no digo que no,

**EasyIndustry:** está

**Francoenter:** pero por eso no digo que te quita vida,

**EasyIndustry:** ensangrentado.

**Francoenter:** digo justamente que es ese hechizo solo se puede castear porque estás ensangrentada que es

**EasyIndustry:** Sí, sí, sí.

**Francoenter:** un pero la cosa eso lo que hace o cumple alguna cosa

**EasyIndustry:** Es lo mismo,

**Francoenter:** más.

**EasyIndustry:** ¿eh? No, no, solamente es está relacionado el estado con los puntos de

**Francoenter:** Bueno, por ahora que quede a menos que después cuando veamos los

**EasyIndustry:** golpe.

**Francoenter:** hechizos, porque si, o sea, me parece bien si hay varias cosas con lo que interactúa, ¿viste? Si

**EasyIndustry:** Para mí tiene más que ver con uno mientras está

**Francoenter:** no

**EasyIndustry:** roleando. El en realidad esto es como una especie de pista para el para el jugador porque la mayoría de las veces en un juego sí, pero cuando estamos nosotros cuando jugamos en el juego de mesa no sabemos cuántos hit points tiene un monstruo. Entonces, el estado ensangrentado a vos te da como la pista de que llegaste a la mitad del daño.

**Francoenter:** Está bien, entiendo.

**EasyIndustry:** Estaría bueno ponerlo.

**Francoenter:** No.

**EasyIndustry:** estaría, me gustaría, me gustaría y yo sé que va en contra del user experience, pero probar por lo menos una configuración que sea opcional de que no se vean los hit points, Ok.

### **01:14:58** {#01:14:58}

**Francoenter:** Eso está bien.

**EasyIndustry:** Yo sí poder ver los míos, pero no poder verlo de los

**Francoenter:** Eso,

**EasyIndustry:** demás.

**Francoenter:** eso que sea simplemente una cosa de de opciones, un tok así general como dijiste el del atunment.

**EasyIndustry:** Sí, sí.

**Francoenter:** Eso para mí está

**EasyIndustry:** Okay.

**Francoenter:** bien.

**EasyIndustry:** Bien. Acción adicional vuela.

**Francoenter:** Todo lo que es acciones adicionales, simplemente van a ser acciones normales que nosotros vamos a decidir que tengan menos puntos,

**EasyIndustry:** Sí.

**Francoenter:** que se gaste menos puntos. Lo romper

**EasyIndustry:** Ok.

**Francoenter:** objetos. Yo no sé qué tanto yo no creo. Tipo, entiendo si estamos hablando cuestiones de historia, ¿no? Como usaste este ítem mágico y ya está y se rompió. Esas cosas sí, pero los objetos en general yo no

**EasyIndustry:** Para mí, para mí es un estado,

**Francoenter:** sé.

**EasyIndustry:** es un estado del es una propiedad del objeto Este, vamos a poner de esta forma. Vamos a decir que, por ejemplo, no ponemos algo de desgaste o o que un objeto se

**Francoenter:** Por

**EasyIndustry:** rompa en un combate por esfuerzo, no.

**Francoenter:** esto.

**EasyIndustry:** Vamos a decir que por alguna decisión el máster decide que un objeto se rompa. Entonces, que dentro de las opciones de del estado de un objeto, de una propiedad, que sea que esté roto nada más.

### **01:16:39**

**Francoenter:** Sí, sí. Por eso, eso es mi punto, porque es como al menos en mi opinión todos los que son eh eh qué se qué se dice las mecánicas de desgaste de items,

**EasyIndustry:** Sí, suena

**Francoenter:** nunca les vi la gracia porque no nunca es como algo que que siento que

**EasyIndustry:** c\*\*\*\*\*.

**Francoenter:** está lo suficiente bien diseñado como para traer es como cuando ponen mecánicas de de comida en la mayoría de de los juegos de supervivencia.

**EasyIndustry:** Sí.

**Francoenter:** Siento que lo único que pasa es al principio te estás recontra muriendo de hambre y a los la primera hora del juego ya conseguiste una forma de hacer comida de manera, ¿cómo decirlo?

**EasyIndustry:** Si es un Sio tiene sentido.

**Francoenter:** Continua y después nunca más.

**EasyIndustry:** Si es un MMO tiene sentido porque esos son esos son los que te

**Francoenter:** Hasta ahí.

**EasyIndustry:** estabilizan la economía de un MMO si es si es que el MMO tiene

**Francoenter:** Sí.

**EasyIndustry:** economía, pero si no no. Para mí solamente tiene sentido en un MMO nada más.

**Francoenter:** Sí, pero en los MMO más que ser de comida es son bufos. Las cosas como son, son bufos de una y

**EasyIndustry:** No solamente de la comida,

**Francoenter:** listo.

**EasyIndustry:** sino de los de las que las armas se rompan.

**Francoenter:** hace,

**EasyIndustry:** M.

**Francoenter:** eso también es porque simplemente puedes agarrar y como puedes farmear infinitamente oro está hecho para que te gastes, ¿no?

### **01:18:02**

**Francoenter:** Eso sí,

**EasyIndustry:** Es para

**Francoenter:** pero obviamente este este no es el caso.

**EasyIndustry:** No,

**Francoenter:** Así que todo lo que es romper armas, chao. Es simplemente un coso que el DM decide puede activarlo porque se le pintó,

**EasyIndustry:** sí.

**Francoenter:** ¿viste? Le rompiste las bolas al mago y el mago hizo y te

**EasyIndustry:** Listo.

**Francoenter:** deshizo por

**EasyIndustry:** Clic derecho. Clic derecho. Estado roto. Ya está por por hill.

**Francoenter:** pelotudo. Chao.

**EasyIndustry:** Bien. Esto clase de armadura de objetos es dato nada

**Francoenter:** Sí, es un dato.

**EasyIndustry:** más.

**Francoenter:** sé qué tanto le usaríamos específicamente porque

**EasyIndustry:** Esto es,

**Francoenter:** porque

**EasyIndustry:** por ejemplo, si quieren si quieren entrar a la fuerza a una casa y ahí y existe la una puerta, pero está cerrada y la queres romper.

**Francoenter:** claro, ve si es de madera o si es de piedra, le ya viene con los Está

**EasyIndustry:** Claro. Y si no después está justamente esto, los puntos de golpe de los objetos. Con esto está bueno. Justamente para

**Francoenter:** Bueno,

**EasyIndustry:** eso.

**Francoenter:** dale. Eso que

**EasyIndustry:** Tipos de daño y objeto de daño. Luz brillante.

**Francoenter:** quede

**EasyIndustry:** ¡Uf\! Y encima no se explica, acá se explica en cómo jugar el juego.

### **01:19:36**

**EasyIndustry:** Bueno, lo brillante, quemarse.

**Francoenter:** velocidad de excavación.

**EasyIndustry:** de

**Francoenter:** Está bien. Eso, eso queda.

**EasyIndustry:** che, dice, mira esto. Quemarse. Una criatura objeto en llamas recibe uno. Ah, tiene que estar en llamas.

**Francoenter:** Ese es el estado de de estar quemado.

**EasyIndustry:** Está bien, está bien. Velocidad de excavación al

**Francoenter:** Siento que esto al pedo, o sea,

**EasyIndustry:** pedo.

**Francoenter:** simplemente le design la velocidad a la criatura y decí,"Se está excavando porque es un topo, flaco. No va a estar corriendo el

**EasyIndustry:** Claro. O si es un ponerle una persona

**Francoenter:** topo.

**EasyIndustry:** con mutada con topo. Eh, tenés eso escriben en la habilidad. Tenés velocidad en movimiento bajo la tierra tanto ya

**Francoenter:** Sí,

**EasyIndustry:** está o no

**Francoenter:** sí.

**EasyIndustry:** bien

**Francoenter:** A ver, esto que dice,

**EasyIndustry:** truco.

**Francoenter:** ¿viste? Que dice ver también velocidad. Ver esto, todo eso. Ver también, ¿dónde están? Están más abajo acá o bueno,

**EasyIndustry:** idea.

**Francoenter:** veamos después. Una campaña es una serie de aventuras veces también aventura. Bueno, el truco ya sabemos lo que es está bien la capacidad de carga.

### **01:21:07** {#01:21:07}

**Francoenter:** Bueno, acá a mí me gustaría, como habíamos dicho antes, para mí que sea solo lo que es eh el ¿cómo que se dice? el management del inventorio que sea sin peso,

**EasyIndustry:** el el management del inventario pesos.

**Francoenter:** que sea simplemente tenés tu mochila, tenés estos espacios, los objetos ocupan, tienen diferentes formas y diferentes tamaños.

**EasyIndustry:** H sí.

**Francoenter:** ¿Sabes que justo estaba jugando un juego en el celular?

**EasyIndustry:** Hm.

**Francoenter:** Es recontra Pay to win, la verdad que, o sea, el juego está piola, pero es es le ponen tantas pelotudes pain encima.

**EasyIndustry:** ¿Cuál es?

**Francoenter:** Se llama overheaded Hero. Esa es de obviamente, ¿no? Sí, P to win. O sea, estás piol que cada pelotudez que te muestran te te piden guita, ¿viste? Es como tenés este personaje, oh, querés comprarte más espacios para tu mochila, paga. Oh, querés tener más mascotita, paga. Oh, querés conseguir diferentes cosas, paga.

**EasyIndustry:** Básicamente es pagar por calidad de vida.

**Francoenter:** Ni siquiera por calidad de vida, es casi por jugar, te diría, porque es como dos tercios de la porque obviamente obviamente es un juego de esos que tienen energía, ¿no?

**EasyIndustry:** Sí.

### **01:22:29**

**Francoenter:** Eso necesariamente no me molesta. Lo que sí me molesta es

**EasyIndustry:** Ah,

**Francoenter:** que sí,

**EasyIndustry:** básicamente gestión de es gestión de

**Francoenter:** es que es que básicamente son todos como duelos uno versus uno, ¿viste?

**EasyIndustry:** equipamiento.

**Francoenter:** Donde vos vas agarrando ítems y los vas eh mezclando. Hay diferentes combinaciones y vas sacando ahí diferentes combos por son que que

**EasyIndustry:** No

**Francoenter:** bufea los ítems que tiene a la izquierda,

**EasyIndustry:** parece

**Francoenter:** a la derecha, ¿viste? cosas así que es bastante es bastante creo que hay uno en Steam que se llama Backpack Hero, que es bastante parecido a ese que no lo jugué.

**EasyIndustry:** backpack hero o el back battle. Este backpack battles. Este está muy bueno.

**Francoenter:** Entonces,

**EasyIndustry:** Está online. No puede ser. Mira.

**Francoenter:** pero sí, bueno, no digo exactamente así, no, obviamente no no diría de tener bufos y cosas para los Pero en el sentido de que o vos tenés diferentes mochilas con diferentes espacios y los íems tienen diferentes cosas, tal vez más parecido al al Resident Evil 4 y que sea solo eso.

**EasyIndustry:** Claro. Bueno, este lo viste vos.

**Francoenter:** Eh, no.

**EasyIndustry:** Listo. Y está está te busca un oponente, entonces dependiendo lo que vos tenés, pelea contra el otro.

### **01:24:12**

**Francoenter:** Sí, se bastante. He visto algún par

**EasyIndustry:** Y el piola, lo piola es que vos es lo que te decía antes,

**Francoenter:** similares.

**EasyIndustry:** vos te puedes agregar como te puedes agregar como espacios de mochila y te agregas más cosas.

**Francoenter:** Co?

**EasyIndustry:** E yo me imaginaba algo así.

**Francoenter:** Por eso yo yo también estoy

**EasyIndustry:** Okay.

**Francoenter:** diciendo con este juego que estaba jugando que es más o menos la idea que tenía.

**EasyIndustry:** Pack war. Sí, porque los los íems siempre se dejan mucho de lado.

**Francoenter:** Bueno,

**EasyIndustry:** Bueno,

**Francoenter:** lo dejamos hacer simplemente tenés un espacio y tal vez como mucho hacemos

**EasyIndustry:** sí, esto claro espacio

**Francoenter:** que los espacios escalen con tu fuerza

**EasyIndustry:** puede ser. Sí.

**Francoenter:** o más que con tu fuerza,

**EasyIndustry:** Em igual esto quizás capacidad de

**Francoenter:** con tu tamaño de quer criatura.

**EasyIndustry:** carga. Esto sí, esto sí lo podemos dejar, ¿no? Cargar de llevar, pero sí de arrastrar, empujar,

**Francoenter:** Eso sí que si tenés bueno,

**EasyIndustry:** eso sí lo dejamos.

**Francoenter:** pero eso no sería más allá de los Eso no es con fuerza más que tamaño de la capacidad de carga.

**EasyIndustry:** Es que el tamaño ya te da una fuerza innata.

**Francoenter:** Sí, pero por ejemplo, si sos un enano y tenés más fuerza que una persona normal,

### **01:26:04** {#01:26:04}

**EasyIndustry:** Y pero vos sos mediano, ¿o no?

**Francoenter:** no recuerdo.

**EasyIndustry:** Un humano es mediano también, eh, casi todos, excepto los hobbits, son medianos. Todos, inclusive los que son gigantes. ¿Cómo se llaman los? Tiene un nombre los gigantes, no me acuerdo, pero todos esos son todos medianos. Ya grande, por ejemplo, es un dragón chico, un dragón joven y enorme, un dragón anciano y gigantesco,

**Francoenter:** Hm.

**EasyIndustry:** ya alguna aberración, algo tipo el Kraken. Bien, pero esto es tipo sin esfuerzo. Esto es lo que mueve raza. empuja todo sin esfuerzo.

**Francoenter:** Es que 100 kg es como muy poquito en mi opinión para si algo gargan pero pero incluso sin esfuerzo,

**EasyIndustry:** Bueno, pero es tipo sin esfuerzo.

**Francoenter:** o sea, si estamos hablando el cracken 100 kg, boludo, no es sin esfuerzo.

**EasyIndustry:** Bueno,

**Francoenter:** Ni me di cuenta que los moví.

**EasyIndustry:** puede ser. No sé, depende del cracken si hizo sus series. Este, esto te dice que no necesita una tirada a partir de acá. Y puede ser que necesites una tirada, pero qué se lleva va mucho del master.

**Francoenter:** Tam.

**EasyIndustry:** Valor de desafío. Uh, eso es una v\*\*\*\*, ¿eh?

### **01:27:47**

**EasyIndustry:** Igual está dice lo que es para saber nada más. Ya está definido en el coso. Me parece que está

**Francoenter:** Sí, o sea,

**EasyIndustry:** bien.

**Francoenter:** realmente no nos afecta nada a nosotros en lo que

**EasyIndustry:** No, se lo vamos a poner tal cual y si un máster arma su su

**Francoenter:** vamos.

**EasyIndustry:** batalla se lo va a calcular automáticamente. Y chao.

**Francoenter:** Es que sé.

**EasyIndustry:** Bien. Hoja de personaje. Nada. Hechizado. Bueno, nada.

**Francoenter:** Siento siento como que lo que estamos leyendo es un poco random, ¿no? Como que salta de una cosa a otra cosa. Es así en el libro.

**EasyIndustry:** Vamosar.

**Francoenter:** Tal vez es por el diferente formato, porque en el libro, ¿viste? tenés más horizontalidad, por así decirlo,

**EasyIndustry:** Sí.

**Francoenter:** en cómo están separadas las las secciones de la página, pero siento como que estamos hablando, bueno, esto se puede empujar y bueno, y esto es el hechizo de de Charmed y esto es luz y es como

**EasyIndustry:** Es que este está está todo por coso,

**Francoenter:** que

**EasyIndustry:** está todo por sí,

**Francoenter:** alfabético.

**EasyIndustry:** por orden alfabético, ¿eh? Pero el glosario va básicamente es como un diccionario.

### **01:29:12** {#01:29:12}

**EasyIndustry:** Yo creo que esto esto lo podríamos saltar y lo que podríamos hacer es definir todo lo demás y

**Francoenter:** y después volver acá.

**EasyIndustry:** y después que esto le digo a Claudio que sea coincidente con los demás. y ya está. Si no lo usamos, lo sacamos de las reglas a esto y lo usamos solamente como un glosario propio para buscar definiciones nada más, porque es eso básicamente.

**Francoenter:** Co?

**EasyIndustry:** Bueno, entonces un R.

**Francoenter:** ¿Qué nos queda?

**EasyIndustry:** ¿Qué nos queda?

**Francoenter:** Los hechizos lo hizo Claudia.

**EasyIndustry:** Sí.

**Francoenter:** Podríamos estar viendo eso.

**EasyIndustry:** A

**Francoenter:** Eh,

**EasyIndustry:** ver,

**Francoenter:** habíamos visto ems, creo que habíamos empezado a verlos, pero después no recuerdo si

**EasyIndustry:** no vimos nada de íems. ¿Preferís equipamiento? Ya lo editó todo.

**Francoenter:** lo que vos prefieras. Solo estoy viendo qué qué es lo que nos queda.

**EasyIndustry:** Yo prefiero los hechizos.

**Francoenter:** Nos queda hechizos, nos queda

**EasyIndustry:** para mí es esto es de chino, boludo.

**Francoenter:** íems.

**EasyIndustry:** Es este laburo de chino que para mí es más del más del orden de la del nivelar que de las reglas en sí. Espera,

**Francoenter:** No sé.

**EasyIndustry:** voy aar.

**Francoenter:** una cuestión de porque viste que estábamos viendo qué hechizos nos parecían una m\*\*\*\*\* que lo borrábamos c\*\*\*\*\*.

### **01:30:58**

**EasyIndustry:** de Voy a preguntar a Claudio directamente. Chat, ¿qué nos faltaría por rev?

**Francoenter:** ¿Sabes qué?

**EasyIndustry:** ¿Me te puedes fijar,

**Francoenter:** Ya que

**EasyIndustry:** por favor? E de todos los MD que hay traducidos al español,

**Francoenter:** está

**EasyIndustry:** ¿qué sería lo que faltaría revisar? Si sabes que se hicieron cambios en todos con el estatus revision, ¿qué faltaría que quedó fuera de completamente todos los análisis? Ahí te digo,

**Francoenter:** ¿Sabes que sería una buena idea? Creo que sería mejora que lo estuviéramos haciendo nosotros.

**EasyIndustry:** que lo haga

**Francoenter:** Sí. Eh, tipo, dejémosle en claro cuáles son los hechizos,

**EasyIndustry:** Ahí.

**Francoenter:** los tipos de hechizos que no queremos, ¿no?, que son todos esos hechizos muy heavis de rol que son muy eh eh como específicos, ¿no? Sustanciales, no sustanciales, como de las situacionales.

**EasyIndustry:** Hm.

**Francoenter:** Entonces le dejamos como esa definición, le pedimos que nos traiga una lista de esos hechizos y y vemos solo esa lista y decimos,

**EasyIndustry:** Le puedo decir,

**Francoenter:** "Bueno,

**EasyIndustry:** le puedo decir que los clasifique, que agregue una clasificación más.

**Francoenter:** sí." Y ahí decidimos de esos específicos. Bueno,

**EasyIndustry:** Claro.

**Francoenter:** todos estos son los que vuelan porque nos parece muy muy de

### **01:32:30**

**EasyIndustry:** Sí, sí, sí, sí, sí, sí.

**Francoenter:** gordo

**EasyIndustry:** Olvídate que ahí lo dejé a Claudio con

**Francoenter:** trarder.

**EasyIndustry:** algo. Está revisando todo. Le voy a decir a Google

**Francoenter:** Y se que salió

**EasyIndustry:** 3.8 Flash.

**Francoenter:** all fin me volvió a contestar, ¿sabes por qué?

**EasyIndustry:** ¿Por qué?

**Francoenter:** Lo tengo. No, técnicamente lo tenía gratis con la Wade, pero es el plus que es,

**EasyIndustry:** Sí,

**Francoenter:** o sea, no el plus, el el básico que es una m\*\*\*\*\*.

**EasyIndustry:** el pro.

**Francoenter:** No, no el pro.

**EasyIndustry:** Ah,

**Francoenter:** Sí,

**EasyIndustry:** uno más bajo todavía.

**Francoenter:** más bajo. Por eso es una poronga, boludo. Lo intenté usar y literalmente me gasté todo lo de una semana en un día en hacer una boludez un proyecto.

**EasyIndustry:** Claro.

**Francoenter:** Pero pero lo bueno es que si con ese mismo plan de de la universidad podés tener el Pro a 75% de descuento.

**EasyIndustry:** Uh, o sea, 5000 pesos.

**Francoenter:** Sí. Eh, ocho, en realidad son \$ y y es lo que

**EasyIndustry:** Mira, está bastante bien.

**Francoenter:** estoy lo que estoy pagando ahora, así que

**EasyIndustry:** Bueno, ahí sí,

### **01:33:44**

**Francoenter:** piol.

**EasyIndustry:** ahí sí que porque después tenés los cinco teras de coso y toda la toda la

**Francoenter:** Sí,

**EasyIndustry:** frula esa que está buenísima,

**Francoenter:** aunque no lo uso mucho también el YouTube Premium singular,

**EasyIndustry:** ¿no? Claro,

**Francoenter:** pero no lo pirateo YouTube,

**EasyIndustry:** eso está bueno.

**Francoenter:** papá.

**EasyIndustry:** Claro. Le voy a decir al otro, a Géminis, a ver. Este no tiene para audio. No tiene para audio esto.

**Francoenter:** Chan çan

**EasyIndustry:** Buah. Bu. Y no tengo whisper acá. Esp. Me voy a poner whisper. ¿Qué hice? No importa. Te dejo encargado que revises los spells. Bien, agregar un par de columnas más uno, observaciones y la segunda categoría. En categoría vas a elegir entre las siguientes. Va a ser eh situacional o específica. ¿Cómo le ponemos? situacional gu específico,

**Francoenter:** Sí, pero además serían situacional, o sea, está la situacional

**EasyIndustry:** específ ultra específica

**Francoenter:** eh también

**EasyIndustry:** Dạ.

**Francoenter:** qué serían lo Yeah. Amos por combate y de

**EasyIndustry:** Eh, claro. Combate,

**Francoenter:** roleo.

**EasyIndustry:** combate, roleo. Roleo, roleo, roleo.

### **01:36:18** {#01:36:18}

**EasyIndustry:** Suacional no espa.

**Francoenter:** en vez de categorías que sean

**EasyIndustry:** Sí, tax. Exacto.

**Francoenter:** tags,

**EasyIndustry:** Eh, en tax, la segunda TX.

**Francoenter:** porque por ejemplo algo como calentar

**EasyIndustry:** Si es más fácil parar ahí adentro.

**Francoenter:** metales,

**EasyIndustry:** Eh, es en combate, sirve y es situacional.

**Francoenter:** por

**EasyIndustry:** Entonces, sería situacional, específica,

**Francoenter:** Co?

**EasyIndustry:** combate, roleo. ¿Y qué otra se te se te ocurre?

**Francoenter:** Es que no hay mucho más.

**EasyIndustry:** Bueno, em, y acá le voy a poner una que es se va a llamar inventa una tú. Si no hay ninguna que corresponda, puedes mezclar hasta dos tags por eh hechizo, no más de no más de dos. Así es más fácil de clasificar. ¿Qué te parece?

**Francoenter:** siempre priorizando el el específico,

**EasyIndustry:** Claro, siempre poniendo el principal al principio, el principal primero. catalogarlos para saber si se pueden implementar en otro entorno. Y las observaciones adjúntalas si fue muy específica la elección o cuando inventas. M. Eh, revisa el 100% de los pisos CB SP. dije,"Te dejo encargado." Y me sorprende de Gémini 7 para arriba que es una es una nave la velocidad que responde.

### **01:39:33** {#01:39:33}

**EasyIndustry:** Eso no te sorprendió comparado con

**Francoenter:** Sí, pasa,

**EasyIndustry:** Cloud.

**Francoenter:** o sea, no lo usé mucho claro, pero sí hace bastante rápido las

**EasyIndustry:** Es muy zarpado la Sí, sí.

**Francoenter:** cosas.

**EasyIndustry:** De hecho, se puso a revisar cosas que no le dije, como el git status. Rechma,

**Francoenter:** ¿Qué te importa,

**EasyIndustry:** ¿qué te importa el git status? Bueno, lo dejo. Claudio,

**Francoenter:** la

**EasyIndustry:** ¿cómo venís? ¿No tenés más token? Dice, repasé ta archivos que nunca aparecen en ningún análisis. De los dos archivos, seis no figuran mención y un análisis. Nadie tocó. Gameplay Toolbox,

**Francoenter:** verdad?

**EasyIndustry:** que ahí está el ritmo de viaje, reglas opcionales del juego. Después está Play in the game, nunca lo tocamos. Reglas centrales de cómo jugar, combate, descanso.

**Francoenter:** Bueno, esa es el que tenemos que tocar bastante.

**EasyIndustry:** Podíamos empezar por ahí. La brecha más grave que encontré. Qué escandaloso. Dice,"No solo es no revisado, es una inconsistencia activa. Character Creation declara oficialmente, los hechizos se gestionan mediante un sistema de punto de acción y tiempos de recarga en lugar de espacios de conjuro tradicionales.

### **01:41:01**

**EasyIndustry:** Esta decisión fue tomada ta ta ta ta, pero clases nunca se actualizó. Las 12 clases lanzadores sin con tabla espacio de conjuro. Bueno,

**Francoenter:** Técnicamente nunca cambiaron.

**EasyIndustry:** sí tiene esas cosas Claudio que es un es rebautista.

**Francoenter:** Bueno, pero está bien. Prefiero que las tengas, que no las tengas.

**EasyIndustry:** Sí,

**Francoenter:** Eh,

**EasyIndustry:** está bien.

**Francoenter:** bueno,

**EasyIndustry:** Pendientes que quedaron abiertos y nunca se cerraron por sesión.

**Francoenter:** igual no habíamos dicho el hecho de que no iba a haber espacio de conjuros y simplemente ibas a tener tus conjuros en general,

**EasyIndustry:** Ajá. Y ya está.

**Francoenter:** simplemente lo que lo que te limitaba era tu energía.

**EasyIndustry:** Claro.

**Francoenter:** Eso sí lo habíamos dicho.

**EasyIndustry:** Dice fusionar, dice pendientes que quedaron abiertos y nunca se cerraron por sesión. Fusionar tiradas de salvación con pruebas de característica, suprimir acciones adicionales en combate o el 8 de agosto Quitar dependencia al bonificador de competencia en dotes.

**Francoenter:** Sí, yo creo yo creo que mejor dejamos el el bonificador de

**EasyIndustry:** Revisar.

**Francoenter:** competencia.

**EasyIndustry:** Oh, ¿por qué me hiciste pensar una banda la otra

**Francoenter:** Es que es que pasa pasa que,

**EasyIndustry:** vez?

**Francoenter:** o sea, no igual los todos los otros cambios están eh no no digo cambiar, pero lo que digo es porque eh de todo lo que estuvimos viendo y y y claramente lo estamos hablando hace ya un buen tiempo y hasta ahora no lo definimos,

### **01:42:34** {#01:42:34}

**Francoenter:** es porque hay problemas, es el de que en el bonificador de competencia cuando no cuando tiene que ver con las habilidades en sí, sino cuando tiene que ver con e con con cómo funciona con ciertos hechizos, cómo funciona con ciertas cosas, ¿me entendés? Porque por ejemplo, recuerdo que estábamos viendo hechizos, no estábamos viendo fits que sí los modificamos bien, pero algunos fits para para que se mantuvieran decentes y escalaran a lo largo de todos los niveles, escalaban con el bonificador de competencia, ¿no? y después de eso mismo volvió a aparecer creo que cuando era creación de de las razas y también cuando era la creación de las clases. Y es como siento que a esas alturas estamos haciendo tantos cambios que no son necesarios para esas cosas específicas, ¿me entendés?

**EasyIndustry:** Bueno, no sé.

**Francoenter:** O sea, el bonificador de competencia queda para algunas cosas sí lo sacamos, o sea, las cosas que definimos hasta ahora para mí eso está bien para las cosas que no estamos definiendo y que las estamos dejando como de costado, que la seguimos pateando para adelante y seguimos pateando para adelante. Como justamente dice Claudio,

**EasyIndustry:** Bueno, me dice Claudio, me dice,"Si tuviera que priorizar para la próxima reunión primero cerrar el desfasaje de puntos de acción en clases es el que generan la regla contradictoria activa. Después decidir qué hacer con los seis archivos nunca tocados por ahí in the game.

### **01:44:33**

**EasyIndustry:** Primero porque son los que definen las reglas centrales y probablemente la ya contradicen alguna de las simplificaciones que fueron acordando.

**Francoenter:** Yeah.

**EasyIndustry:** Entonces digo, porque acuérdate que hoy encima metí todo lo de las clases que saca todo el tema de la bonificación. M. Pero para mí,

**Francoenter:** Pero es que qué hay que

**EasyIndustry:** a mí me gustaba, a mí me gustaba el cambio ese de que ahora son skill

**Francoenter:** hacer, no. Sí,

**EasyIndustry:** points.

**Francoenter:** eso eso no no es lo que digo para cambiar, tipo, por eso, repito, los cambios que hicimos hasta ahora me parece que está bien. Lo que me parece que está mal son las cosas que nos estamos saltando, que son todo lo que es eh la todas las mecánicas que están hech que están pensadas para que escalen con eso a en los siguientes niveles, cosa de que no se quede atrás, ¿me entendés? que ahora ahora exactamente no recuerdo cuáles eran, recuerdo que las habíamos visto.

**EasyIndustry:** Sí.

**Francoenter:** Entonces, creo creo que la existencia del bonificador tiene que estar simplemente no va a afectar a las cosas que sí cambiamos, ¿me entendés?

**EasyIndustry:** Sí,

**Francoenter:** Tal vez,

**EasyIndustry:** creo que sí.

**Francoenter:** tal vez es directamente un punto, o sea, tal vez es algo que el jugador ni siquiera ve, pero es un stat que sí existe para que la computadora pueda manejar bien los números

### **01:46:05** {#01:46:05}

**EasyIndustry:** Claro.

**Francoenter:** de fondo para los hechizos. Sí, boludo, se hace.

**EasyIndustry:** Entonces, ¿qué qué hacemos?

**Francoenter:** Yo creo que ahora lo que mejor podemos hacer es sentarnos y definir bien el sistema de acciones.

**EasyIndustry:** Bueno, dejamos las cosas de lo otro para después.

**Francoenter:** Sí, primero pensemos lo est al menos por ahora solo pongamos un número,

**EasyIndustry:** Bueno,

**Francoenter:** después vemos si lo cambiamos, ¿no? Pero digamos, supongamos tenemos 10 puntos de acción por turno. Ponel

**EasyIndustry:** sí.

**Francoenter:** vamos a tener porque la idea también es que no puedas hacer todo lo que podías hacer, ¿eh? O sea, la idea es que al menos en en los primeros niveles sea como lo como el el sistema de de acción principal y bonus y de movimiento que hay. que hay siempre, ¿no? Así que intentemos primero a partir de esa base y después avanzamos.

**EasyIndustry:** Bueno,

**Francoenter:** ¿Cuánto dirías que cuesta un A ver,

**EasyIndustry:** yo un una acción,

**Francoenter:** decir lo que vas a decir?

**EasyIndustry:** no decía si yo ya estoy en playing the

**Francoenter:** C.

**EasyIndustry:** game.

**Francoenter:** Okay, pero por eso es algo que tenemos que definir. Yoía primero vayamos poniéndole números y después lo vamos modificando,

**EasyIndustry:** Sí, sí,

### **01:47:53**

**Francoenter:** ¿me entendés?

**EasyIndustry:** sí, sí. Primero hay que buscarlo. Fuerza.

**Francoenter:** A ver, todo lo que es característica y modificador de característica queda igual, ¿no?

**EasyIndustry:** Sí,

**Francoenter:** Todo lo que es prueba de 20,

**EasyIndustry:** está

**Francoenter:** lo

**EasyIndustry:** bien.

**Francoenter:** mismo.

**EasyIndustry:** Bonificador de competencia. Acá está. Este volaría,

**Francoenter:** Si es para lo que son cosas de fuerza y todo eso, sí, o sea,

**EasyIndustry:** ¿no?

**Francoenter:** para lo que son características,

**EasyIndustry:** El el bonificador de competencia era para los skids,

**Francoenter:** por eso no. Pero además también lo utilizaban para otra,

**EasyIndustry:** se usa para todo.

**Francoenter:** por eso para lo que son las skills. Ahí sí

**EasyIndustry:** Okay,

**Francoenter:** huelen.

**EasyIndustry:** vamos a dejar el estándar por ahí como un numerito ahí flotando sin darle mucha bola para darle más foco en las skills. Pero esto quedado, queda bien.

**Francoenter:** Tá.

**EasyIndustry:** Clase dificultad está bien. Tiradas de salvación esto vuela.

**Francoenter:** Sí, ahora son simplemente, o sea, más que vuela es se combinó

**EasyIndustry:** Se combina con lo otro. Modificador de características.

**Francoenter:** Sí.

**EasyIndustry:** La tirada de salvación. Ah, bueno, esto huele a todo.

### **01:49:29** {#01:49:29}

**EasyIndustry:** Sumas tu bonificador, tirar salvación, clase de dificultad, todo esto fuera. Tiradas de ataque. Esto queda. Combate.

**Francoenter:** queda,

**EasyIndustry:** ¿Cómo jug el juego?

**Francoenter:** pero recordemos que le poníamos eso de las las zonas grises para que no fuera tan le pifiaste o le

**EasyIndustry:** Sí.

**Francoenter:** pegaste,

**EasyIndustry:** ¿Dónde está eso?

**Francoenter:** o sea, ¿dónde está? ¿En qué sentido?

**EasyIndustry:** Eso es en la clase de dificultad.

**Francoenter:** Sí, sería como una combinación, no sé si tanto en la clase de dificultad como es que son

**EasyIndustry:** Entonces,

**Francoenter:** ambas,

**EasyIndustry:** en la tirada de daño, en las tiradas de ataque,

**Francoenter:** ¿eh? Es no la ha tirado de daño, la tirada de

**EasyIndustry:** laidad de ataque,

**Francoenter:** ataque.

**EasyIndustry:** esta se modificaba. para que el ataque ahora tenga un

**Francoenter:** O sea, para que sea así,

**EasyIndustry:** gris

**Francoenter:** antes eran solo dos estados, ¿no? Tenías el estado de acertaste y el estado de erraste.

**EasyIndustry:** y el crítico y la pifia.

**Francoenter:** Ahora, ahora son cuatro más o menos. van a estar el pegaste neutral, el fallaste de no sé, supongamos que estamos en es dependiendo de Mfig.

### **01:50:59**

**Francoenter:** No, de la dificultad de la tirada.

**EasyIndustry:** H

**Francoenter:** Pongámosle un eh 25% más o 25% menos.

**EasyIndustry:** sí.

**Francoenter:** Esa esas son las primeras dos zonas, ¿no? Si tenés un 25, por ejemplo, si tenés un 10, 25% más es 2,5. Lo redondeamos, no sé, a dos, creo, ¿no? Siempre, siempre redondeando para abajo.

**EasyIndustry:** Todo por abajo del 5 10% no pega.

**Francoenter:** Pues entonces, no, entonces es si la tirada de salvación, digo, si la la dificultad de la tirada tiene que ser un 10, ¿no? Si sacaste un 2,5 más, o sea, un 12 para arriba,

**EasyIndustry:** Hm.

**Francoenter:** es un 50% más de daño.

**EasyIndustry:** Pega. Claro. Con bonificación.

**Francoenter:** Si es un si es 25% menos, o sea, 2,5 menos, o sea, de 8 para abajo, ahí pega con menos con una una desbonificación lo que trae de

**EasyIndustry:** Hm. Un de

**Francoenter:** UFO y después

**EasyIndustry:** UFO.

**Francoenter:** para entonces ahí es como el centro 25 para la derecha, 25 para la izquierda, ¿no?

### **01:52:20**

**EasyIndustry:** Hm.

**Francoenter:** Y después yendo aún más a los a los costados serían otros 25% para cada lado, en donde es un bufo aún más grande y un bufo aún más débil dependiendo si si tiraste alto o bajo,

**EasyIndustry:** Hm.

**Francoenter:** ¿verdad?

**EasyIndustry:** Claro,

**Francoenter:** Y después de eso tenés las e eh sí,

**EasyIndustry:** las fallas y los críticos.

**Francoenter:** la falla de críticos.

**EasyIndustry:** Y el crítico era el que pegaba el doble, va uno completo.

**Francoenter:** Sí,

**EasyIndustry:** Eso se mantiene.

**Francoenter:** sí.

**EasyIndustry:** El crítico y la falla se mantienen. Bueno,

**Francoenter:** Entonces, a ver,

**EasyIndustry:** listo.

**Francoenter:** quiero hacerme un dibujito yo para para asegurarme que lo estoy pensando bien.

**EasyIndustry:** Perdón que a las 9 podemos cortar.

**Francoenter:** S, no pruebo. es un cuatro. Sí, básicamente son porque por ejemplo un crítico, un crítico siempre sacar un 20, ¿no?

**EasyIndustry:** Creo que estoy teniendo sentimientos encontrados con esto.

**Francoenter:** Por eso porque estoy intentando dejarlo dejármelo bien claro y estoy intentando pensarlo bien en todos los Dale,

**EasyIndustry:** No, espera, te puedo decir por qué.

**Francoenter:** tir

**EasyIndustry:** Porque para el porcentaje de daño ya existen los daños, los dados de daño.

**Francoenter:** Está bien, pero eso lo podemos cambiar para para nerfear.

### **01:54:09**

**Francoenter:** es le es sacarle el poder a los dados de daño para dárselos a la a los de ataque.

**EasyIndustry:** Entonces tiras una vez sola y el daño Lo lo Okay,

**Francoenter:** Sí, tranquilamente lo podrías hacer así,

**EasyIndustry:** ahí tiene más sentido porque si no son doble porcentaje del de todos los

**Francoenter:** eso porque, o sea,

**EasyIndustry:** daños

**Francoenter:** la idea es más que nada es que no pierdas no perder

**EasyIndustry:** la tirada.

**Francoenter:** tú. Exacto. Es no es no sentirte que que no hiciste nada en tres turnos porque tuviste malos dados.

**EasyIndustry:** Okay, está

**Francoenter:** Está bien, podes pegar poco,

**EasyIndustry:** bien.

**Francoenter:** pero poco es infinitamente mejor que no

**EasyIndustry:** Sí,

**Francoenter:** pegar.

**EasyIndustry:** porque ya me ya me estaba imaginando ponerle que saca el más alto, ¿no? O un 75% y saca 21 de

**Francoenter:** Sí.

**EasyIndustry:** daño. Es una c\*\*\*\*\*. Se siente horrible igual.

**Francoenter:** Sí.

**EasyIndustry:** Entonces, para eso dejamos el daño medio de los dados, o sea, la mitad de los del máximo de los de todo el daño a la mitad. Si es un dado de 12, seis pegas. Si son dos de seis, seis. Lo mismo y que solamente se maneje con el porcentaje y los dados de la tirada de ataque.

### **01:55:37**

**EasyIndustry:** ¿Te parece?

**Francoenter:** Sí,

**EasyIndustry:** Perfecto.

**Francoenter:** estoy viendo. A ver. Los mira, yo estoy compartiendo. Sí, sí, déjame seleccionar mi pantalla. m\*\*\*\*\*. En realidad así exactamente no es como quiero que esté. En realidad querría que esté así,

**EasyIndustry:** es que en realidad es es una ecuación

**Francoenter:** no sé, o sea,

**EasyIndustry:** porque

**Francoenter:** no estoy pensando, estaba pensando más o menos como estaba

**EasyIndustry:** entonces en el medio en el medio está justo la CA

**Francoenter:** explicando. O sea, en el medio este es tu CA,

**EasyIndustry:** Ca,

**Francoenter:** pero no quiero que sea un solo valor,

**EasyIndustry:** sea,

**Francoenter:** sino quiero que sea una zona. O sea, por eso

**EasyIndustry:** pero vos en esa zona pegas lo mismo y pero le quitas

**Francoenter:** sí,

**EasyIndustry:** el le quitas el propósito al Sea.

**Francoenter:** pero no no quiero que Yeah.

**EasyIndustry:** Ah. Boludo,

**Francoenter:** Eh, no, porque si vos tenés un CA por acá, vas a va a ser esta la zona en la que pegué, o sea,

**EasyIndustry:** no,

**Francoenter:** es Sí,

**EasyIndustry:** no se corre el del medio.

**Francoenter:** por eso todos los valores van a ser proporcionales, se van a ir moviendo hacia un costado.

### **01:57:18**

**EasyIndustry:** Claro, pero ¿qué pasa cuando vos llegas a 20? Una ciudad de 20, es muy difícil sacar 30 con los dados. Si tenés siempre un D20 para tirar. Bueno,

**Francoenter:** Vamos a llegar a eso.

**EasyIndustry:** tengo eh y

**Francoenter:** Vamos a llegar a

**EasyIndustry:** hay por ejemplo en nivel 4 con armadura

**Francoenter:** eso.

**EasyIndustry:** puedes tener una CA1 tranquilamente como yo. Yo tengo CA1, tengo escudo, armadura pesada. Y solamente hay un dado de 20\.

**Francoenter:** Ok.

**EasyIndustry:** ¿Cómo haces ahí? Es una tirada difícil.

**Francoenter:** cuenta

**EasyIndustry:** Yo creo que

**Francoenter:** cer 100% así más o menos.

**EasyIndustry:** entonces el valor que está en el medio es el quiebre. es el el break point que sería la CA. Vamos a decir que la CA es 18, ¿no? Si yo pego 19, estaría pegando un 25%

**Francoenter:** 25% más.

**EasyIndustry:** más, pero no tengo 50, tengo 25 o 100\. Si estoy pegando 17\. estaría pegando, no sé, un 10% menos, ponerle una cosa así

**Francoenter:** Es que por eso tengo que pensar esa

**EasyIndustry:** rara

**Francoenter:** lógica.

### **01:59:26** {#01:59:26}

**EasyIndustry:** y aparte tenés que restarle más cosas porque a uno vas a llegar o a qué

**Francoenter:** Estaba

**EasyIndustry:** o esto proporcional hasta el final.

**Francoenter:** pensando proporc que sea todo proporcional, pero como dijiste, si solo tenemos los dados de 20, ¿qué pasa cuando llegamos a eso?

**EasyIndustry:** para eso. Si no, entonces siempre usamos los dados de daño.

**Francoenter:** Sí, eso no es mala.

**EasyIndustry:** El problema que en el nivel dos tr no no hay personajes que lleguen ni a palo a 10 con daño, con nada, así que todas las CA tienen que estar por abajo tres cuad. Bueno, es difícil esto.

**Francoenter:** Sí, por

**EasyIndustry:** Es difícil.

**Francoenter:** eso.

**EasyIndustry:** Este, no me desagrada eso que hiciste ahí. Lo único que para abajo tenés menos

**Francoenter:** Hay que pegarle,

**EasyIndustry:** números.

**Francoenter:** hay que pegarle más una vuelta. a lo que es eh cómo se integraría esto específicamente a a unos dragons a menos que cambiemos todo el sistema de cómo se pegue y

**EasyIndustry:** Es que si vos pones esto,

**Francoenter:** listo.

**EasyIndustry:** sí o sí, tenés que fixiar, fijar los valores de daño de todo para no tirar,

**Francoenter:** Por

**EasyIndustry:** para no hacer la coso de daño.

**Francoenter:** eso.

**EasyIndustry:** Igual me gusta, me gusta mucho eso.

### **02:01:07**

**EasyIndustry:** Me gusta mucho que cómo es es lo que sufren la mayoría de los principiantes. ¿Cómo que ya tiré el dado y tengo que volver a tirar?

**Francoenter:** Sí. Y bueno, sí, tal lo que podríamos hacer es que simplemente tal vez esto muy loco,

**EasyIndustry:** Entonces,

**Francoenter:** pero que no haya armor class y que sea directamente tus dados un a 20 y y

**EasyIndustry:** 1 a 20\.

**Francoenter:** si te sale un un 1 es porque es porque le pifiaste,

**EasyIndustry:** Vos decís que no haya armor class que que no haya armor class y

**Francoenter:** ¿eh?

**EasyIndustry:** que directamente tiras tu dado de daño y no lo la tirada de

**Francoenter:** Sí.

**EasyIndustry:** ataque.

**Francoenter:** Y ya después lo que son todos los los poderes ahí ya es matemática que tendríamos que

**EasyIndustry:** Espera, déjame ver,

**Francoenter:** cambiar.

**EasyIndustry:** déjame ver cómo es la tirada de ataque de heart. Muy resumido, porque creo que esto lo habían resuelto.

**Francoenter:** Y si alguien más ya lo pensó, mejor.

**EasyIndustry:** Dos de 12, dado la esperanza y dado el miedo. Eh, éxito, fallo supera o iguala a la evasión o dificultad del objetivo, que es lo mismo la CA.

**Francoenter:** Eso es básicamente sea,

**EasyIndustry:** Sí.

**Francoenter:** pero con otra.

**EasyIndustry:** Consecuencia, esperanza más alto, éxito o fallo.

### **02:02:53** {#02:02:53}

**EasyIndustry:** Con esperanza ganas un punto de esperanza.

**Francoenter:** Igual antes de pensar todo eso,

**EasyIndustry:** Esto

**Francoenter:** Vamos, vamos para,

**EasyIndustry:** Recomplejo.

**Francoenter:** vamos, mirémoslo por este lado. ¿Para qué existe la CA?

**EasyIndustry:** La CA existe para determinar cuándo se pega, cuando un ataque cae,

**Francoenter:** Sí, sí, por eso, pero eh e,

**EasyIndustry:** pega.

**Francoenter:** o sea, eso es lo que hace.

**EasyIndustry:** Sí.

**Francoenter:** Pero la cosa es, ¿para qué crearon la CA? Bueno, no sé si existía en la primera versión. ¿Para qué creó este sistema de específicamente?

**EasyIndustry:** A ver, vamos a

**Francoenter:** ¿Qué quería lograr?

**EasyIndustry:** prontar.

**Francoenter:** Porque si no simplemente hacemos que seamos que no exista la CA, que sea simplemente tus ataques como la gran mayoría de los juegos. RPGs en donde no hay un armor clas,

**EasyIndustry:** Sí,

**Francoenter:** simplemente le pegas al bicho y y si sos no te jodes porque el bicho tiene chopor 200 de vida y listo.

**EasyIndustry:** acá dice, mira, la clase armadura existe en Di por dos razones. Una la herencia histórica proviene de las reglas de combate naval bélico, Aeroncloud y Chain Mail, donde los barcos se clasificaban según su espesor blindaje, primera clase, segunda clase, etcétera.

### **02:04:19** {#02:04:19}

**EasyIndustry:** Abstracción y velocidad. Unifica en un solo número tres factores defensivos: esquiva, protección física, magia o resistencia natural. Evita tener que hacer tiradas separadas de acertar, esquivar, absorber daño, resolviendo todo el impacto en una sola tirada de

**Francoenter:** Está bien,

**EasyIndustry:** 20\.

**Francoenter:** pero todo eso realmente lo necesitamos.

**EasyIndustry:** Es que vos ponete el otro lado porque es una garcha no pegar, pero es un alivio que el enemigo le r también.

**Francoenter:** Sí,

**EasyIndustry:** Y

**Francoenter:** pero tal vez eso lo podemos hacer con que sea una cuestión de que está bien, el enemigo te puede,

**EasyIndustry:** bueno,

**Francoenter:** ¿cómo decirlo? Solo es un alivio que el enemigo no te pegue porque uno o dos golpes te pueden dejar en el piso instantáneamente, ¿me entendés?

**EasyIndustry:** Puede ser que sea todo más granulado, más gradual.

**Francoenter:** Sí, más más al estilo como un un RPG que jugabas, ¿viste?

**EasyIndustry:** Cara, los RPG pegan

**Francoenter:** que yo Pokémon todos te todos pegan,

**EasyIndustry:** todos.

**Francoenter:** pero obviamente hay ataques y hay ataques y hay críticos y hay coso y dentro de todo

**EasyIndustry:** Voy a decir que tiene que ser muy malo el ataque para fallar.

**Francoenter:** tipo y tiene que ser muy pete,

**EasyIndustry:** para

**Francoenter:** pero obviamente un ataque débil,

### **02:05:51** {#02:05:51}

**EasyIndustry:** mí.

**Francoenter:** o sea, si estamos hablando de un ataque que te pega un 50% menos o algo así, y sigue siendo algo que Sigue siendo un alivio porque es como,

**EasyIndustry:** Sí.

**Francoenter:** uf, ni lo sentí, ¿me

**EasyIndustry:** Yo todavía pienso pienso que estamos yendo por el camino correcto.

**Francoenter:** entendés?

**EasyIndustry:** Eh, me parece que esto habrá que retocarlo, pero está bien así pensado. ¿Por qué? Primero porque sacas la tirada de daño que es supercleja. tenés que eh agregarle bonificadores, eh talentos, cosas de tu especie, este un montón de cosas y ya viendo tirado el de 20, o sea, después de saber si le pegas, tenés que tirar toda esa matemática que está buena para gente que le gusta hacerse las boils.

**Francoenter:** O sea, dentro dentro de a ver, dentro de todo la matemática en sí no la odio tanto, ciertas cosas, ciertas cosas, porque justamente como decís, cuando cuando hay que empezar a sumar 15 millones de dados distintos,

**EasyIndustry:** Está bueno para pegar.

**Francoenter:** eh, está bueno si te estás haciendo una will, si sos alguien que conoce, si no es como que sos un qué chotas tengo que hacer,

**EasyIndustry:** Claro,

**Francoenter:** ¿no?

**EasyIndustry:** si no es un martirio. Si no es un

**Francoenter:** Pero dentro de todo siento que está, ¿cómo decirlo?

### **02:07:09** {#02:07:09}

**EasyIndustry:** martirio.

**Francoenter:** Me gusta que haya un par de dados no más que se sumen, como por ejemplo, el ejemplo mejor es la la marca de cazador, ¿no?

**EasyIndustry:** Sí.

**Francoenter:** Si vos le pusiste la marca de cazador, ya sabes que le vas a vas a tener que tirar un dado extra por eso, ¿me entendés?

**EasyIndustry:** Sí.

**Francoenter:** Entonces ahí se siente bien porque es algo que vos hiciste específicamente.

**EasyIndustry:** Bueno, y y ¿qué te parece esta? Yo veo una dualidad en tu gráfico. La dualidad es que va para un lado positivo, para otro es negativo. ¿Qué tal si ponemos ponerle como dice acá dos de 12, uno de cada color? Y la diferencia es lo que pegas o el porcentaje de lo que pegas. Por ejemplo, si te salen dos de 12, ¿es algo bueno o es algo malo? Y es como que se cancela. Es lo mismo que algo dos, el mismo número.

**Francoenter:** Pero que se cancele, ¿qué implique? Que no hagas daño.

**EasyIndustry:** No, que por ahí pega el medio,

**Francoenter:** Ah, okay. Entonces, que sea

**EasyIndustry:** como que se divide.

**Francoenter:** Sí.

**EasyIndustry:** Ahora si sacaste uno más que otro, gana uno o gana el otro.

### **02:08:37** {#02:08:37}

**EasyIndustry:** Si si salió el verde, si salió 12 verde y menos el otro, pegas al palo, pegas al máximo. O si no dos de 10\. Con dos de 10 es más fácil todavía.

**Francoenter:** Pero creo que ahí ya te est Sí, pero con ese sistema Entonces, Te tocaría mucho, mucho esto y mucho esto y muy poco de esto y

**EasyIndustry:** Claro, pero lo peor que te puede pasar es que te toque un 10 rojo y un

**Francoenter:** esto.

**EasyIndustry:** un 10 rojo y algo y un menor en el otro. Por ahí puede safar si es tipo 10 rojos, nueve

**Francoenter:** Por cierto, porque por eso siempre estamos considerando estamos

**EasyIndustry:** verde.

**Francoenter:** basándonos el daño en la solo en el resultado o estamos fijándonos en los distintos tipos de diferencias.

**EasyIndustry:** Yo no sé, no sé, estoy pensando en voz alta,

**Francoenter:** Por eso, porque y imagínate esto,

**EasyIndustry:** pero esos dos dados me gusta,

**Francoenter:** tenés,

**EasyIndustry:** me gusta como dualidad de que están compitiendo una cosa contra la otra, ¿viste?

**Francoenter:** ¿sabes? Prefería usar los D20 nada más para porque creo que es un poco más icónico,

**EasyIndustry:** Y

**Francoenter:** pero pero sé eh no,

**EasyIndustry:** sí, yo puse uno, pero usamos los dos que quieras y total es lo

### **02:09:59**

**Francoenter:** pero lo que decía es que, por ejemplo,

**EasyIndustry:** mismo.

**Francoenter:** tenés el dado eh rojo y el dado verde, ¿no?

**EasyIndustry:** Sí.

**Francoenter:** Tú ponete que en el de 10 acá te salió un 10 rojo y acá te salió lo peor que te puede salir un un o

**EasyIndustry:** Hm. Uno. No.

**Francoenter:** cero. 1 un digamos.

**EasyIndustry:** Sí.

**Francoenter:** ¿Qué sería eso? Eso lo contarías como un \-9.

**EasyIndustry:** Ponele un menos. Vamos a probar a ver qué

**Francoenter:** Por eso, por eso y por ejemplo, supongamos que en otro en otra tirada te volvió a tocar un 10,

**EasyIndustry:** pasa.

**Francoenter:** pero acá te tocó un eh un cu,

**EasyIndustry:** Sí,

**Francoenter:** entonces ahí sería un menos sería un \-6 y y dependiendo si es un \-9,

**EasyIndustry:** \-6. Claro,

**Francoenter:** un \-6, te quedarías acá o

**EasyIndustry:** claro.

**Francoenter:** acá.

**EasyIndustry:** Ahí está tu porcentaje. Ahora, ¿qué pasa si los dos sacan? Por eso te decía, por eso te decía usar 12, porque eh excluís un poquito los las puntas,

**Francoenter:** divido por

**EasyIndustry:** ¿no? Tenés en ese esos dos,

**Francoenter:** cuatro.

**EasyIndustry:** esos cuatro son el último que sería el cer y del otro lado el 20\. Y en el medio del CA tenés ese \-1 men+ 1, tenés como ese coso en el medio.

### **02:11:22** {#02:11:22}

**EasyIndustry:** Te quedan 10 para variar. ¿Entendés?

**Francoenter:** Ahí,

**EasyIndustry:** Si vos yo le pongo vos a agregarle una rayita

**Francoenter:** ahí me perdí para

**EasyIndustry:** más al lado del del 100\.

**Francoenter:** al lado de 100 que tipo acá poner que

**EasyIndustry:** Sí, ahí. Sí, ahí. Ahí. Y otra al lado del cero del lado derecha. Bien. Ahí.

**Francoenter:** Justo esto para que voy a cambiar de

**EasyIndustry:** Ahora tenés bien ahí tenés 11

**Francoenter:** color.

**EasyIndustry:** de un lado y 11 del otro. Ahora, agrégale a la CA en el medio, a Ahí, ahí tenés 12 de un lado y 12 del otro y los 10 que te quedan en el medio es el porcentaje, digamos.

**Francoenter:** Claro. O sea,

**EasyIndustry:** Y ahí ten los topes.

**Francoenter:** de acá a acá tenés 10 y acá tenés el

**EasyIndustry:** Claro.

**Francoenter:** centro que son y los puntos que serían dos en el medio y uno en cada costado.

**EasyIndustry:** Ajá.

**Francoenter:** Me gusta, me gusta.

**EasyIndustry:** Habría que probarlo, qué sé yo, pero habría que probarlo tipo en en persona con los

**Francoenter:** Habría que probarlo, obvio.

### **02:12:39**

**Francoenter:** Entonces,

**EasyIndustry:** dados.

**Francoenter:** la mecánica sería que siempre tiras dos dados y dependiendo la diferencia entre esos dos tes bonito,

**EasyIndustry:** Sí.

**Francoenter:** pero lo importante sería la CA, entonces ya no

**EasyIndustry:** Eh,

**Francoenter:** existe.

**EasyIndustry:** no, la CA está ahí. Por ahí podemos hacer que la CA sea la que corra ese

**Francoenter:** es que por eso,

**EasyIndustry:** límite.

**Francoenter:** pero entonces ahí volvemos porque eso era originalmente mi idea,

**EasyIndustry:** Sí, sí,

**Francoenter:** pero el problema está que pasa,

**EasyIndustry:** sí,

**Francoenter:** cómo escala ese límite porque como vos dijiste,

**EasyIndustry:** sí,

**Francoenter:** si tenés uno que es de 18,

**EasyIndustry:** sí.

**Francoenter:** entonces vas a tener el de 50% y el de 25 va a ser una cosa así.

**EasyIndustry:** No, no. Y para eso tirate entonces no te

**Francoenter:** Va a ser así, así y uno así y uno así.

**EasyIndustry:** un No, ponerle que la Cad máxima poner que es 17, ¿no? O 16 es la C máxima. Entonces tiras un D4 y un D10 o un D1. Ahí está, un D1 y un D4, que ambas sumbas en 16\. No, ahí me fui a la v\*\*\*\*.

**Francoenter:** Por eso ya hay que

### **02:13:59** {#02:13:59}

**EasyIndustry:** Y si sacas 16 le pegas del tope,

**Francoenter:** Así.

**EasyIndustry:** ¿no? Igual no lo pensé bien todavía, pero bueno, quizás con dos dados está más podemos solucionar todo, daño y

**Francoenter:** Por eso para mí el problema no es eso.

**EasyIndustry:** coso.

**Francoenter:** O sea, definitivamente me gusta la idea de combinar la tirada de de ataque y la de daño todo en uno solo para no pegar vueltas.

**EasyIndustry:** Sí,

**Francoenter:** Eso sí,

**EasyIndustry:** sí.

**Francoenter:** creo que ya definámoslo como que va.

**EasyIndustry:** Sí.

**Francoenter:** El problema que tengo es esto,

**EasyIndustry:** Bueno,

**Francoenter:** es justamente lo que cómo escala la sea porque,

**EasyIndustry:** la CA.

**Francoenter:** o sea, mi opinión lo mejor sería simplemente sacarla y quedarnos más o menos con lo que dijimos

**EasyIndustry:** Sí.

**Francoenter:** acá de tipo la la porque la se existe para para la dificultad, por así decir.

**EasyIndustry:** Bueno, entonces es así,

**Francoenter:** Aí

**EasyIndustry:** mira. Vamos a decir, vamos Uh. Se me ocurre algo, Piola, a ver qué te parece esto.

**Francoenter:** A

**EasyIndustry:** Es igual que la sea. Es igual.

**Francoenter:** ver.

**EasyIndustry:** Vamos a decir que tu arma junto a todos tu arma hace eh D6, ¿no? Y más los potenciadores, bonificadores, lo que quieras.

### **02:15:14**

**Francoenter:** Ça

**EasyIndustry:** Ahora, la armadura del objetivo es si no tiene armadura, por ejemplo, no tiene no tiene una un escudo que te da más dos de armadura, la CA, eh, tenés que elegir un dado negativo más chico o más grande, como que le Claro, porque no existen dados de dos. Es una moneda.

**Francoenter:** esa

**EasyIndustry:** Claro, pero que no sé, te agregue dados,

**Francoenter:** moneda.

**EasyIndustry:** te agregue un D4 negativo o positivo a tu ataque. Entonces, lo definís todo solamente con los dados.

**Francoenter:** era entonces cómo funcionaría.

**EasyIndustry:** La armadura puede ser una bonificación directamente en los dados.

**Francoenter:** Bueno, sí, pero entonces ahí básicamente lo que estás haciendo es remover el armor class un bufo, un debufo a tus dados.

**EasyIndustry:** Por eso.

**Francoenter:** Está

**EasyIndustry:** Ah, pero ahí la c\*\*\*\*\*

**Francoenter:** bien.

**EasyIndustry:** es que uno no sabe cuál es la CA del objetivo. No, no sirve, no sirve, no sirve.

**Francoenter:** Para mí, yo creo, yo creo que es mejor simplemente que no haya sea y lo que y todo lo que es e la el balanceo de los enemigos que sea simplemente por cuestiones de vida y de daño.

**EasyIndustry:** Sí, sí. Si no también podemos e en vez de que la ponerle yo tiro el daño con los dos dados, ¿no? Eso me va a dar una cantidad de daño específica, como yo no sé el daño que le hago al enemigo, el dunion master puede tirar los daños, los dados de defensa, ponerle o un dado de armor class.

### **02:17:19** {#02:17:19}

**EasyIndustry:** Entonces en el en el dado de armor class le sale la si hay reducción de daño o no. Entonces ahí tenés todo combinado, tenés el Y algo que me parece más lógico todavía es que darle la oportunidad al enemigo que se defienda, no solamente atacar y yo le ré, ¿me entendés? O me esquivó intuitivamente como hace

**Francoenter:** Eh,

**EasyIndustry:** Spider-Man.

**Francoenter:** ¿me me podrías dar un ejemplo de cómo está funcionando? Me está costando seguirte.

**EasyIndustry:** Sí, yo tir los dos dados de daño tuyo, no saca un valor X.

**Francoenter:** Ça

**EasyIndustry:** Ahora el Dunion Master tira sus dados. de Armor Class y con esos que son secretos dice,"Bueno, me hiciste daño, no me hiciste daño, pero se lo anota y no te dice nada. O sí, anota y dice, ¿cuánto es?" Es como un ataque y respuesta. Eso digo.

**Francoenter:** Okay, está bien.

**EasyIndustry:** Dados contra otros dados.

**Francoenter:** Pero por eso, pero entonces en ese caso esos dados tipo el Armor Class deja de existir y son simplemente dados que están, o sea, el Armor Class deja de existir como un stat de por sí, pero si existe como un un valor que te bufea o te desbufea tus

**EasyIndustry:** Claro,

**Francoenter:** dados.

**EasyIndustry:** no es e en realidad viste que a veces viste como dice tu tu ataque de espada es un dejo.

### **02:18:52**

**EasyIndustry:** ¿Por qué no podemos decir tu escudo es un D4 o tu armadura te da un D4 de defensa?

**Francoenter:** Todo lo que está diciendo es que no usamos para nada esto.

**EasyIndustry:** Entonces, estoy diciendo sí, pero vos cuando te cuando cuando te pegan te tenés que defender y te

**Francoenter:** Eh,

**EasyIndustry:** defendés con tus daños de con tus dados de defensa. Es bastante es bastante

**Francoenter:** por eso ponerle no sea más o menos te lo voy entendiendo,

**EasyIndustry:** trambólico.

**Francoenter:** pero poner dame un ejemplo con números. Un ejemplo concreto, no sé, suponete

**EasyIndustry:** Sí, vamos a decir un D4 de Tenés un D4 que es un un solo dado,

**Francoenter:** tengo

**EasyIndustry:** un D4 de armadura, ¿no?

**Francoenter:** Sí,

**EasyIndustry:** Y el chavón tiene dos de ataque.

**Francoenter:** pero eso los D8,

**EasyIndustry:** Uno verde, un uno verde.

**Francoenter:** los D8 esos se definen por sus items o por su por su personaje en sí,

**EasyIndustry:** Si querés los dos de 10 o dos de 20,

**Francoenter:** no es No,

**EasyIndustry:** como vos

**Francoenter:** por eso por eso eso es lo que te estoy preguntando.

**EasyIndustry:** quieras.

**Francoenter:** Eh, es son siempre los mismos dados los de ataque.

**EasyIndustry:** No sé, no sé todavía. Estoy pensando en voz

### **02:20:04**

**Francoenter:** Por eso, porque si porque una cosa es que tus dados cambien dependiendo de tu de tus ataques,

**EasyIndustry:** alta

**Francoenter:** ¿no? Por ejemplo, te pego con una espadita, entonces es un D6 versus te pego con mi Superman doble de la muerte, que es un de 10\.

**EasyIndustry:** por eso. Pero no es uno,

**Francoenter:** Eh,

**EasyIndustry:** eh, son dos de 10\.

**Francoenter:** sí, sí, está bien,

**EasyIndustry:** Es uno positivo y uno

**Francoenter:** pero lo que Sí, sí, sí. O sea, eso,

**EasyIndustry:** negativo.

**Francoenter:** pero lo que digo es si es si vamos a considerar que los dados escalan o no.

**EasyIndustry:** No sé todavía.

**Francoenter:** Bueno, pero supongamos que sí.

**EasyIndustry:** Hay que probarlo.

**Francoenter:** Supong supong los dados escalan y dos de

**EasyIndustry:** Sí, tiro dos de 10\.

**Francoenter:** 10\.

**EasyIndustry:** Me sale uno negativo dos y uno positivo 8\.

**Francoenter:** Perfecto.

**EasyIndustry:** Resultado es positivo seis.

**Francoenter:** Entonces tenés un más 6\. Sí.

**EasyIndustry:** Y ahora ese sería el daño directo que voy a hacer, como para no andar haciendo porcentuales del daño del arma. Pon l.

**Francoenter:** S.

**EasyIndustry:** Por eso te decía que puedes calar el dado. Entonces el chavón tiene un escudo de cuatro.

### **02:21:03** {#02:21:03}

**EasyIndustry:** Entonces el dunion Master no dice nada, dice tira su dado y dice,"Listo, pegó", me dice,"No me dice cuánto daño,

**Francoenter:** Está bien, está bien.

**EasyIndustry:** si no quiere el Duner Master dice,

**Francoenter:** Pero pero decime qué es lo que ve el Dun Master.

**EasyIndustry:** bueno, me tiene que pegar seis." Tira su D4. El D4 da tres, entonces se resta tres del daño, del daño total. Se resta tres. Él se aguantó tres de daño con la armadura o lo esquivó como vos

**Francoenter:** Okay, por eso entonces básicamente lo que estás diciendo es que tu armor

**EasyIndustry:** quieras.

**Francoenter:** class de defensa que funciona exactamente igual como el de el stat de ataque y por eso te digo que no ya no estamos utilizando esto. ya sería algo separado. Es otro sistema en donde es simplemente es básicamente dos tiradas de ataque, simplemente que uno se son dos tiradas de daño,

**EasyIndustry:** Dos tiradas de daño son.

**Francoenter:** solo que es uno de recibido y el otro es de de hacerlo.

**EasyIndustry:** Sí.

**Francoenter:** No me parece mal necesariamente, simplemente que ahora ya no hay tiradas de ataque, solo hay tiradas de daño y estas tiradas de daño van a depender todas de tu tus tus ataques, ¿no? Como dijimos antes,

**EasyIndustry:** Sí, igual que siempre.

### **02:22:24**

**Francoenter:** igual que

**EasyIndustry:** Lo que pasa que ahora ahora lo que está bueno,

**Francoenter:** siempre.

**EasyIndustry:** va, pienso que está bueno, es que es yo pude hacer daño, pude haber hecho daño, pero el otro se defendió, ¿me entendés? No es que no dice,"Uy, le pifié, que es una v\*\*\*\* pifiarle, le di, pero el otro redujo un poco el daño." Está bien,

**Francoenter:** S

**EasyIndustry:** puede pasar. Puede pasar que no reduzca nada el daño, qué sé yo. No sé, no lo no lo pensé, no lo escalé todavía. Este puede ser que sea todo porcentual los dados. Entonces son mis dos de 20

**Francoenter:** Sí, igual igual como estamos poniendo otros dados más, existe menos la posibilidad de que justo te bloquee todo el daño siempre. Está bien. Sí, creo que está bien porque al fin y al cabo, tipo, lo que queríamos eliminar era el hecho de sentir de que siempre dependías mucho de una binaria al principio y acá ya no es binario porque ya él tiene que tirar dados

**EasyIndustry:** Sí.

**Francoenter:** que son, no es un me defendí o no, es un cuánto me defendí.

**EasyIndustry:** Claro,

**Francoenter:** Así que va a haber menos casos en el que se dé. No hice nada por tres turnos seguidos,

### **02:23:43** {#02:23:43}

**EasyIndustry:** claro.

**Francoenter:** así

**EasyIndustry:** Y ponele que ponele que no sé,

**Francoenter:** que

**EasyIndustry:** tenés un bufo y te agregas un D4 positivo a tu tirada y eso me parece un bufo.

**Francoenter:** sé, por

**EasyIndustry:** es más fa. fácil de escalar. Bueno, tu tu daño a base es ese, tu daño a base

**Francoenter:** No solo, no solo es más fácil de escalear,

**EasyIndustry:** como

**Francoenter:** sino que ya está hecho. O sea, básicamente lo que hicimos es borramos la tirada de ataque.

**EasyIndustry:** sí que ya no es estadística.

**Francoenter:** Borramos la tirada de ataque. O sea, como que ya no

**EasyIndustry:** No,

**Francoenter:** está,

**EasyIndustry:** esa estadística en el sentido de ya no es probabilidad de que vos le

**Francoenter:** ¿no? Por es por eso es que ya directamente no no existe la tirada de ataque.

**EasyIndustry:** pegues.

**Francoenter:** Vos tenés tu daño, la tirada de daño sigue existiendo, pero ahora existe lo que es la tirada de defensa que es del monstruo y

**EasyIndustry:** Sí, sí,

**Francoenter:** que e se tira exactamente igual a la tirada de daño.

**EasyIndustry:** sí.

**Francoenter:** Tiene que salirle el valor con las cosas que

**EasyIndustry:** Sí,

**Francoenter:** detiene.

**EasyIndustry:** hay que ver si todos tienen la posibilidad de defenderse.

**Francoenter:** Yo creo que debería ser que sí debería ser así porque debería ser tu armor class.

### **02:24:58**

**Francoenter:** Tipo, estamos reemplazando el armor class con

**EasyIndustry:** Okay, claro,

**Francoenter:** eso.

**EasyIndustry:** pero hay cosas que tienen armor class 10,

**Francoenter:** Bueno, si si existe si existe algo que tiene armor class cero,

**EasyIndustry:** menos de 10\.

**Francoenter:** sí, pero que digo es que incluso si tiene 10 men 10, eso obviamente después lo vemos porque vamos a tener que cambiar todos los valores de Armor Class a este nuevo valor de defensa, ¿me entendés? Porque no es lo mismo una,

**EasyIndustry:** Okay.

**Francoenter:** por ejemplo, ¿cuánto qué qué cuánto te da defensa? No sé, una armadura de metal dos.

**EasyIndustry:** Eh, dos.

**Francoenter:** Ahora vos dirías que está bien que una espada pegue un de seis versus que una armadura de metal pegue solo solo dos de defensa.

**EasyIndustry:** Ah, pero estamos comparando peras con manzanas ahí.

**Francoenter:** Exacto. Por eso. Entonces todos los valores que son de armor class los vamos a tener que cambiar.

**EasyIndustry:** Ah, okay, claro. Sí, sí, tenés razón.

**Francoenter:** Entonces es tal vez arma van a estar un poco más

**EasyIndustry:** Todos los dados de golpe y de defensa van a ser van a tener ahí o está

**Francoenter:** estandarizad. Entonces, la armadura en vez de darte dos de armor class tiene un de ocho,

### **02:26:03** {#02:26:03}

**EasyIndustry:** bien.

**Francoenter:** ¿me entendés?

**EasyIndustry:** Claro,

**Francoenter:** O un de 10 porque es una armadura pesada por ahí.

**EasyIndustry:** claro, che, me gusta,

**Francoenter:** Sí, me gusta,

**EasyIndustry:** me gusta.

**Francoenter:** me gusta.

**EasyIndustry:** Está es dinámico.

**Francoenter:** es dinámico y incluso creo que es más sencillo porque no hay que pensar mucho,

**EasyIndustry:** Sí, sí,

**Francoenter:** es mis dados versus tus dados y listo.

**EasyIndustry:** claro. Sí, sí, sí. Tal cual.

**Francoenter:** Sí,

**EasyIndustry:** Y y me gusta esto de que de que

**Francoenter:** en realidad.

**EasyIndustry:** solamente solamente depende de mí de que el ataque sea bueno. No es que eso nunca me gustó de un chan que no te puedas defender.

**Francoenter:** A ver si encuentra.

**EasyIndustry:** Yo sé que es es suerte también me entendé tirar un dado, pero eso de que yo no tener cómo responder a tu ataque no me

**Francoenter:** O,

**EasyIndustry:** gusta para nada.

**Francoenter:** ahora no recuerdo dónde lo había hecho, pero una That's Había hecho un coso así hace banda.

**EasyIndustry:** Había un chavón cogiéndose una mina, caballito.

**Francoenter:** Eh,

**EasyIndustry:** Vi un chavón cogiéndose una mina caballito. dice

**Francoenter:** ¿qué? ¿Cuál? Esto. Ah, ese,

### **02:27:12**

**EasyIndustry:** vieja.

**Francoenter:** este, boludo. Ese est esta es mi mi cosa de boludo ese de dibujar cuando estoy pedo. No, pero no encuentro igual lo que había hecho era re cualquiera,

**EasyIndustry:** Mira.

**Francoenter:** pero sí recuerdo porque hace mucho había pensado en un juego que era así al estilo de tirar dados que estaba más o menos basado en un juego que había jugado acá. Esta estaba en celular, pero creo que también estaba acá. No era Dice Hero.

**EasyIndustry:** Ah, ya sé cuál decís.

**Francoenter:** Eh eh no

**EasyIndustry:** el que tienes que tirar los dedos y van rebotando.

**Francoenter:** sé, eh tiene un nombre.

**EasyIndustry:** No.

**Francoenter:** A ver si lo encuentro. Igual no es exactamente así, pero sí es más o menos parecido. Tenías tanto vos como el enemigo tiraban dados. y decidías a quién pegarle, con qué defenderte, pero no importa, no no es tan igual a lo que estamos diciendo, pero más o menos en la idea de que es es un sistema de puro dados voz contra el enemigo.

**EasyIndustry:** Genial. Me gusta, me gusta.

**Francoenter:** No, este no es, pero sé

**EasyIndustry:** Ese que está ahí abajo, ¿no? Es al lado del brawler

**Francoenter:** abajo.

**EasyIndustry:** Mystic.

**Francoenter:** Este no. Ah, no.

**EasyIndustry:** Ese

### **02:28:49**

**Francoenter:** Yo recuerdo que era como T Hero 2\. Tal vez, tal vez era como Dun Shah die. Tun,

**EasyIndustry:** dais. Ah, no.

**Francoenter:** no creo, tal vez era este. Creo creo que sí era este. O sea, que esto se ve nada que ver, pero creo que sí es este. Lo estaba escribiendo bien, simplemente que era, no es como que es el es un es que es muy parecido a este. Así, pero no tenía exactamente este. Tal vez es porque la yo creo que jugué la

**EasyIndustry:** Ah, mira, es lo mismo.

**Francoenter:** secuela

**EasyIndustry:** mismo.

**Francoenter:** giro. Esto no parece. Es que tenía tenía una un diseño más bonito, yo lo recuerdo.

**EasyIndustry:** Yeah. que ya la quedó. El

**Francoenter:** Puede ser,

**EasyIndustry:** juego

**Francoenter:** pero qué raro que me aparezca el primero y no me aparezca el segundo.

**EasyIndustry:** no existe, te dice flashaaste.

**Francoenter:** Yo sé que existe. No, no me pueden gaslitear a mí. Yo lo jugué.

**EasyIndustry:** Capaz que fue una demo y la me creyeron

**Francoenter:** Es real, es real. No sé si si lo creo que nunca lo desinstalé,

**EasyIndustry:** loco.

**Francoenter:** pero lo tenía en el otro celular que ya está hecho pija, pero pija mal.

### **02:30:32** {#02:30:32}

**Francoenter:** Pero sí, bueno, básicamente el sistema era como este, ¿viste? Era como que el enemigo tiraba sus dados, vos tirabas los tuyos y la diferencia y se hacía ahí, ¿quién pegaba? ¿Cuánto pegabas?

**EasyIndustry:** Claro, está bueno. Bueno, voy a comitear esto último y vamos

**Francoenter:** Dale. Bueno,

**EasyIndustry:** cerrando.

**Francoenter:** en la siguiente entonces nos sentamos, nos ponemos a Bueno, nada, más o menos el sistema ya quedó. Es después cuando vayamos viendo todos los íems, todos los armor class de todos los bichos. Ahí vamos a tener que ponernos a pensar, ¿no?

**EasyIndustry:** Sí,

**Francoenter:** Pero pero el sistema en sí ya lo dejamos que son

**EasyIndustry:** este este de ataque.

**Francoenter:** Sí, o sea, es ya no existe el armor class, ya no existe la tirada de ataque. Ahora digo, o sea, la tirada de Sí, la de ataque, porque la otra es la de daño. Ahora simplemente es la tirada de daño, que siguen funcionando exactamente igual como funciona ahora. No, si vos tenés un ataque que tu tirada de daño es tiras un D4, bueno, todavía sigue siendo eso, es tiras un

**EasyIndustry:** Pero se le agrega el dado negativo para equilibrar o o

**Francoenter:** D4.

**EasyIndustry:** no.

**Francoenter:** Esa creo que tenemos que ver eh cuando lo por

### **02:31:55** {#02:31:55}

**EasyIndustry:** Claro, porque ya es porcentual de por sí el dado, ¿no? Algo

**Francoenter:** eso por eso es esa veamos cuando

**EasyIndustry:** negativo.

**Francoenter:** lo no me sale la palabra. Cuando lo probemos, probemos. Pero por por ahora,

**EasyIndustry:** Dale.

**Francoenter:** dejémoslo es como un ese dado extra puede existir.

**EasyIndustry:** Sí.

**Francoenter:** Pasa que si te si empezas a tirar un montón de cosas ahí es cuando ya se te empieza a complicar la cosa.

**EasyIndustry:** Sí, sí. No,

**Francoenter:** Pero

**EasyIndustry:** yo porque también hay hay hechizos o hay armas que tienen dos dos dados que vas a tirar

**Francoenter:** por eso,

**EasyIndustry:** cuatro.

**Francoenter:** por eso o y si le sumas cosas como la marca del cazador y volver ese

**EasyIndustry:** Sí,

**Francoenter:** ahí.

**EasyIndustry:** por eso no. No,

**Francoenter:** Bueno,

**EasyIndustry:** está bien.

**Francoenter:** entonces dejémoslo como que simplemente es tirar tus dados de daño.

**EasyIndustry:** Dado contra dado. Sí.

**Francoenter:** Es tirar tus dados de daño como los tiras ahora. Tiras tu dado de daño de una y el enemigo tira su dado defensa, que los valores lo vamos a decidir nosotros.

**EasyIndustry:** Sí, sí.

**Francoenter:** están más o menos basados en el armor class. Pero no exactamente, no vamos a tener que los vamos a tener que

**EasyIndustry:** Sí, sí,

**Francoenter:** rehacer nosotros,

**EasyIndustry:** sí, sí.

**Francoenter:** pero listo, está definido eso. Así es como funciona. Ya después los números los vamos a ver cuando toquemos el armor class de los items y

**EasyIndustry:** Perfecto,

**Francoenter:** cuando toquemos el armor class de los bichos.

**EasyIndustry:** perfecto. Me convence. Genial. Bueno,

**Francoenter:** Y ah,

**EasyIndustry:** che,

**Francoenter:** y antes la siguiente que

**EasyIndustry:** hay que seguir viendo los rules,

**Francoenter:** vemos,

**EasyIndustry:** los el play in the game. Hay que seguir viendo.

**Francoenter:** vamos a seguir con lo que es todo play, que nos quedamos más o menos por la mitad,

**EasyIndustry:** Sí, sí,

**Francoenter:** creo.

**EasyIndustry:** sí.

**Francoenter:** Bien, listo.

**EasyIndustry:** Listo.

**Francoenter:** Ahora sí.

**EasyIndustry:** Bueno, che, nos estamos viendo.

**Francoenter:** Dale suerte.

**EasyIndustry:** Adiós.

### **La transcripción finalizó después de 02:34:02**

*Esta transcripción editable se generó por computadora y puede contener errores. Los usuarios también pueden cambiar el texto después de que se cree.*