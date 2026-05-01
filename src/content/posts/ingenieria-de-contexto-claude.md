---
title: "Dejé de escribir prompts. Empecé a escribir archivos."
excerpt: "En febrero migré de Notion a Obsidian y configuré Claude Cowork para operar directo sobre los archivos. Documento aquí el setup completo: estructura, .claude/, skills, agents y memoria persistente."
date: 2026-02-25
tags: ["IA", "Claude", "Productividad"]
image: "https://cdn.rauljcamacho.online/posts/2026/02/ingenieria-de-contexto-claude-hero.webp"
imageAlt: "Editor de código con archivos Markdown abiertos"
author: "Raul J. Camacho"
draft: false
---

La mayoría de personas que usan IA en 2026 siguen atrapadas en el mismo loop: abrir ChatGPT, escribir un prompt, obtener una respuesta genérica, copiarla a algún lado, y repetir. Cada conversación empieza de cero. Cada respuesta ignora quién eres, cómo trabajas y qué has hecho antes.

Yo decidí romper ese loop. En febrero de 2026 migré todo mi sistema de conocimiento de Notion a Obsidian y lo configuré desde cero para que Claude Cowork (el modo agentic de escritorio de Anthropic) pudiera leer, escribir y operar directamente sobre mis archivos. No como un chatbot al que le hago preguntas, sino como un colaborador que entiende mi contexto, conoce mis proyectos y trabaja con mis reglas.

El resultado: un Segundo Cerebro donde la IA no es una herramienta externa sino parte integral del sistema. Y lo que voy a documentar aquí es exactamente cómo lo construí, archivo por archivo, decisión por decisión.

## Por qué Obsidian y no Notion

Notion fue mi sistema durante años. Funciona bien para equipos, tiene buena UI, las bases de datos son potentes. Pero tiene un problema fundamental para lo que quería hacer: tus datos viven en los servidores de Notion.

Obsidian es diferente. Todo son archivos .md en una carpeta local de tu computadora. Markdown puro. Sin vendor lock-in. Sin API de por medio. Sin formatos propietarios.

¿Por qué importa esto para IA? Porque Claude Cowork puede seleccionar una carpeta local y leer/escribir archivos directamente. Sin exportar. Sin importar. Sin copiar-pegar. Claude abre tu carpeta, lee todo lo que hay dentro, y trabaja sobre tus archivos reales.

Esta es la diferencia clave: en Notion necesitas un conector y una API para que la IA acceda a tu contenido. En Obsidian, le das acceso a la carpeta y ya está. Es la forma más directa de darle contexto real a un LLM.

## La estructura de la bóveda

Antes de crear un solo archivo de configuración, diseñé la estructura de carpetas. Esto es lo que uso:

```
Segundo Cerebro/
├── Inbox/ → Notas rápidas sin clasificar
├── Ideas de Proyectos/ → Conceptos y propuestas
├── Investigacion/ → Research de mercado y tecnología
├── Base de Conocimiento/ → Documentación técnica y guías
│   └── Context Engineering/ → Serie de 13 notas sobre el tema
├── Contenido & RRSS/ → Ideas de tweets, artículos, posts
├── Notas de Reuniones/ → Organizadas por categoría
│   ├── IA & LLMs/
│   ├── Automatizacion/
│   ├── Desarrollo/
│   └── Negocios/
├── Goals & Planes/ → Objetivos y planificación
└── Clientes/ → Gestión completa por cliente
    ├── _Templates/ → Templates reutilizables
    ├── _Indices/ → Índices globales cruzados
    └── {NombreCliente}/ → Carpeta por cliente
        ├── Proyectos/
        ├── PRDs/
        ├── Backlog/
        ├── Reuniones/
        └── Propuestas/
```

Hay algunas decisiones deliberadas aquí:

El Inbox como punto de entrada único. Todo lo que capturo rápido va al Inbox primero. Después se procesa y se mueve a la carpeta correcta. Esto evita que las notas queden regadas sin categorizar.

Notas de Reuniones por categoría, no por fecha. Agrupar por tema (IA, Automatización, Desarrollo, Negocios) hace más fácil encontrar patrones entre reuniones de temas similares.

Clientes como sistema autónomo. Cada cliente tiene su propia carpeta con subcarpetas estandarizadas. Los templates permiten inicializar un nuevo cliente en segundos. Los índices globales (`_Indices/`) dan vistas cruzadas de todos los PRDs, backlogs, reuniones y propuestas sin importar el cliente.

Un archivo índice por categoría. Cada carpeta principal tiene un archivo .md con el mismo nombre que funciona como punto de entrada y tabla de contenidos.

## El directorio .claude/, donde vive la configuración

Aquí es donde empieza lo interesante. Dentro de la raíz de la carpeta del proyecto (no dentro del Segundo Cerebro, sino al mismo nivel), creé un directorio .claude/ con esta estructura:

```
.claude/
├── CLAUDE.md → Instrucciones principales
├── skills/ → Skills especializados
│   ├── obsidian-note-creator/SKILL.md
│   ├── meeting-notes/SKILL.md
│   ├── knowledge-organizer/SKILL.md
│   └── content-ideas/SKILL.md
├── agents/ → Agentes autónomos
│   ├── vault-assistant/AGENT.md
│   ├── research-agent/AGENT.md
│   ├── review-agent/AGENT.md
│   └── inbox-processor/AGENT.md
└── sessions/ → Registro de sesiones de trabajo
    └── 2026-02-26 - Setup inicial.md
```

Este directorio es lo que Cowork lee automáticamente cuando seleccionas la carpeta. El archivo más importante es `CLAUDE.md`, el equivalente a las instrucciones de carpeta que mencionan en la documentación de Cowork, pero con esteroides.

## CLAUDE.md, el cerebro del sistema

Este es el archivo que le dice a Claude todo lo que necesita saber sobre tu bóveda. No es un prompt genérico. Es un documento de configuración específico para tu proyecto. Así se ve la estructura del mío:

```markdown
# CLAUDE.md: Segundo Cerebro (Obsidian Vault)

## Propietario
- Nombre: Raul
- Email: raulj.camacho@gmail.com
- Empresa: Inteliside (studio de tecnología)
- Idioma preferido: Español (puede alternar con inglés técnico)

## Archivos de contexto personal

| Archivo | Contenido |
|---|---|
| about-me | Perfil profesional, clientes, stack técnico, expertise |
| brand-voice | Voz de marca, tono, ejemplos, lo que suena mal |
| working-style | Preferencias de interacción, autonomía, formatos |

## Qué es esta bóveda
[Descripción del sistema y su propósito]

## Estructura de la bóveda
[Árbol de carpetas completo con descripciones]

## Convenciones
- Todos los archivos son .md (Markdown)
- Se usan [[wikilinks]] para enlaces internos
- Nombres descriptivos en español
- Notas de reuniones: "Nombre - DD MMM YYYY.md"
- Sin caracteres especiales excepto - y &
```

Pero el CLAUDE.md no se queda en la estructura. También incluye reglas de comportamiento:

```markdown
## Cómo Claude debe interactuar con esta bóveda

### Al crear nuevas notas
1. Respetar la estructura de carpetas existente
2. Usar el formato de nombres establecido
3. Incluir [[wikilinks]] cuando referencie otras notas existentes
4. Las notas rápidas van a Inbox/ por defecto

### Al trabajar con Clientes
1. Para un nuevo cliente: copiar la estructura de _Templates/
2. Cada documento debe tener [[wikilinks]] al índice del cliente
3. Las reuniones de clientes van en Clientes/{Cliente}/Reuniones/
4. Crear conexiones cruzadas con el resto de la bóveda

### Reglas importantes
1. Nunca eliminar archivos, solo mover o archivar
2. Preservar los wikilinks: si se renombra una nota, actualizar referencias
3. Mantener el español
4. No modificar .obsidian/
5. Respetar la jerarquía
```

Esto es context engineering aplicado. No le estás dando un prompt. Le estás dando un manual de operaciones que se carga automáticamente en cada sesión. Claude no tiene que adivinar cómo quieres que nombre los archivos, dónde ponerlos, o qué formato usar. Está todo documentado.

## Los tres archivos de contexto personal

Además del CLAUDE.md (que es sobre la bóveda), creé tres archivos que son sobre mí. Viven en la raíz del Segundo Cerebro y Claude los puede leer cuando necesita profundizar en quién soy y cómo trabajo:

### about-me.md

Este archivo responde: ¿quién eres y qué haces?

```markdown
# Sobre mí: Raul Camacho

## Quién soy
Soy Raul Camacho, founder de Inteliside, un studio de tecnología
enfocado en automatización, inteligencia artificial y desarrollo
de software para empresas.

## Qué hace Inteliside
1. Automatización empresarial: n8n como motor central
2. Desarrollo de software: Next.js, React, TypeScript, Supabase
3. Inteligencia artificial aplicada: Agentes, RAG, MCP servers

## Stack técnico principal

| Área | Tecnologías |
|---|---|
| Frontend | Next.js 15, React 18+, TypeScript, Tailwind, shadcn/ui |
| Backend | Supabase (PostgreSQL + Auth + Realtime), Edge Functions |
| Automatización | n8n, webhooks, SFTP, IMAP, SMTP |
| IA / LLMs | Claude, OpenAI GPT, LangChain, MCP Protocol |
| Infraestructura | Docker, Vercel, EasyPanel, Cloudflare R2, Redis |

## Clientes actuales
[Descripción anonimizada de cada cliente con contexto técnico]

## Áreas de expertise profundo
[Lista con detalle de cada área]
```

¿Por qué importa tener esto en un archivo? Porque cuando le pido a Claude que escriba un post de LinkedIn, que redacte un PRD, o que investigue una tecnología, tiene acceso directo a mi contexto profesional. No necesito explicarle cada vez quién soy o qué hago.

### brand-voice.md

Este archivo responde: ¿cómo te comunicas?

```markdown
# Brand Voice: Raul Camacho / Inteliside

## Resumen de voz
Mi estilo es técnico-opinionático: datos duros combinados con
opinión fuerte. Digo las cosas como son, sin suavizar ni inflar.

## Lo que SÍ hago
- Abro con el problema real, no con contexto innecesario
- Uso datos concretos: números, nombres de tecnologías, porcentajes
- Doy opiniones fuertes respaldadas por experiencia propia
- Uso ejemplos de casos reales

## Lo que NO hago
- Relleno o "fluff"
- Hype vacío sobre IA
- Tono corporativo genérico
- Buzzwords sin contexto

## Frases que representan mi voz
- "En logística los sistemas legacy no se reemplazan, se conectan."
- "La mejor automatización es la que tu equipo ni siquiera nota
  porque simplemente funciona."
- "Deja de pensar en mejores prompts y empieza a pensar en
  mejores archivos."

## Lo que suena mal (evitar)
- "Soluciones innovadoras de vanguardia" → Decir qué hace exactamente
- "Aprovechamos el poder de la IA" → Decir qué modelo, qué hace
- "Transformación digital end-to-end" → Decir qué se automatizó
```

Este archivo es posiblemente el que más impacto tiene en la calidad del output. Sin él, Claude escribe como IA genérica. Con él, el contenido empieza a sonar como algo que yo realmente escribiría.

### working-style.md

Este archivo responde: ¿cómo quieres que Claude se comporte?

```markdown
# Working Style: cómo quiero que Claude trabaje conmigo

## Regla #1: Pregunta antes de ejecutar
Siempre haz preguntas clarificadoras antes de empezar cualquier
tarea. No asumas mi intención. Si algo es ambiguo, pregúntame.

## Formato de respuestas
- Detallado pero eficiente. Sin relleno ni repetición.
- Sin preámbulos innecesarios, ve al punto.
- Tablas para datos estructurados.
- Español con términos técnicos en inglés.

## Nivel de autonomía

| Situación | Qué hacer |
|---|---|
| Tarea simple con contexto claro | Pregunta enfoque, luego ejecuta |
| Tarea compleja o multi-paso | Presenta plan antes de ejecutar |
| Toca archivos de clientes | SIEMPRE pregunta primero |
| Crear contenido público | Dame opciones, yo elijo |
| Investigación | Ejecuta y presenta resultados |

## Prioridades generales
1. Que funcione: primero lo correcto, después lo bonito
2. Que sea mantenible
3. Que ahorre tiempo
4. Que esté documentado
```

La tabla de autonomía es clave. Le dice a Claude exactamente cuándo puede actuar solo y cuándo debe consultarte. Esto evita dos problemas: que te pregunte todo (frustrante) o que ejecute sin preguntar en cosas sensibles (peligroso).

## Skills: instrucciones especializadas por tarea

Los skills son archivos SKILL.md que contienen instrucciones detalladas para tareas específicas. Creé cuatro para la bóveda:

| Skill | Función |
|---|---|
| obsidian-note-creator | Crear notas con formato correcto, frontmatter YAML, wikilinks |
| meeting-notes | Tomar y formatear notas de reuniones con action items SMART |
| knowledge-organizer | Procesar Inbox, conectar notas huérfanas, crear MOCs |
| content-ideas | Generar ideas de contenido para redes desde la bóveda |

Cada skill incluye no solo instrucciones sino también mejores prácticas de herramientas reales. Por ejemplo, el skill de meeting-notes incorpora prácticas de Asana, Fellow.app y Otter.ai. El de knowledge-organizer incluye principios de Zettelkasten, Maps of Content (MOCs) y el framework LYT de Nick Milo.

La idea es que cuando Claude ejecute una tarea, no solo siga reglas mecánicas, sino que aplique las mejores prácticas de la industria para esa tarea específica.

## Agents: configuraciones para tareas complejas

Los agents son un nivel más arriba que los skills. Son configuraciones completas de agentes autónomos con rol definido, herramientas disponibles, instrucciones paso a paso y criterios de éxito.

| Agent | Función |
|---|---|
| vault-assistant | Consultas generales, navegación, búsqueda en la bóveda |
| research-agent | Investigar temas combinando web + bóveda, crear notas |
| review-agent | Auditar la bóveda, detectar huérfanas/duplicados, sugerir conexiones |
| inbox-processor | Procesar el Inbox: clasificar, enriquecer y mover notas |

El review-agent es particularmente útil. Puede recorrer toda la bóveda, identificar notas que no están conectadas con nada (huérfanas), detectar contenido duplicado, y sugerir conexiones que no habías visto. Es como tener un librarian que organiza tu sistema de conocimiento.

## Instrucciones globales de Cowork

Todo lo anterior funciona cuando tienes la carpeta del Segundo Cerebro seleccionada en Cowork. Pero hay un nivel más: las instrucciones globales.

Las instrucciones globales se configuran en Settings > Cowork > Global Instructions dentro de Claude Desktop. Se cargan siempre, sin importar qué carpeta tengas abierta. Son tu contexto personal base.

Lo que puse en mis instrucciones globales es un destilado de los tres archivos de contexto:

```markdown
## Quién soy
Soy Raul Camacho, founder de Inteliside, studio de tecnología
enfocado en automatización (n8n), IA y desarrollo de software
(Next.js, React, TypeScript, Supabase).

## Cómo comunicarte conmigo
- Detallado pero eficiente: explicaciones completas sin relleno.
- Sin preámbulos innecesarios, ve al punto.
- Español como idioma principal. Términos técnicos en inglés.
- Tablas para datos estructurados.

## Regla de oro: pregunta antes de ejecutar
Siempre haz preguntas clarificadoras antes de empezar cualquier
tarea. Si algo es ambiguo, usa AskUserQuestion con opciones concretas.

## Autonomía por tipo de tarea
- Tarea simple con contexto claro → pregunta enfoque, luego ejecuta
- Tarea compleja → presenta plan antes de ejecutar
- Archivos de clientes → SIEMPRE pregunta primero
- Contenido público → dame opciones, yo elijo

## Mi voz de marca
Técnico-opinionático: datos duros + opinión fuerte. Sin hype vacío
sobre IA, sin tono corporativo genérico, sin buzzwords sin contexto.

## Prioridades
1. Que funcione
2. Que sea mantenible
3. Que ahorre tiempo
4. Que esté documentado
```

La jerarquía queda así:

| Capa | Cuándo se carga | Qué contiene |
|---|---|---|
| Instrucciones globales | Siempre, en toda sesión | Tu contexto personal base |
| CLAUDE.md | Al seleccionar la carpeta | Configuración específica del proyecto |
| Archivos de contexto | Cuando Claude los lee | Detalle profundo sobre ti y tu trabajo |
| Skills y Agents | Cuando se ejecuta una tarea específica | Instrucciones especializadas |

Cada capa se apila sobre la anterior. Las globales te dan una base. El CLAUDE.md agrega el contexto del proyecto. Los archivos de contexto dan profundidad. Los skills y agents dan precisión en la ejecución.

## Sistema de sesiones: memoria entre conversaciones

Cowork no tiene memoria entre sesiones. Cada conversación nueva empieza completamente en blanco. Esto es un problema real si estás trabajando en un proyecto durante semanas.

La solución: un directorio `.claude/sessions/` donde Claude guarda un resumen al final de cada sesión de trabajo significativa. El formato es simple:

```markdown
# Sesión: 26 Feb 2026

## Descripción
Sesión fundacional: se configuró desde cero el entorno .claude/
para la bóveda de Obsidian "Segundo Cerebro". Incluye CLAUDE.md,
sistema de Clientes con templates e índices, 4 skills y 4 agents.

## Acciones realizadas
[Lista de todo lo que se hizo]

## Archivos creados o modificados
[Lista con rutas]

## Decisiones tomadas
[Decisiones de diseño y sus razones]

## Pendientes
[Lo que queda por hacer]
```

El CLAUDE.md incluye un protocolo explícito para que Claude use este sistema:

- Al iniciar sesión: lee las descripciones de las últimas 2-3 sesiones para tener contexto rápido. Si el usuario dice "continuemos" o "¿en qué quedamos?", lee la sesión más reciente completa.
- Al cerrar sesión: crea automáticamente un resumen con el formato establecido. Siempre empieza con una sección `## Descripción` corta para poder escanear rápidamente.

Esto le da a Claude una forma de "memoria" entre sesiones sin necesidad de que el modelo la tenga nativamente. Es contexto persistido en archivos. Es el mismo principio que hace funcionar todo este sistema.

## El resultado

Después de dos sesiones de configuración, esto es lo que tengo funcionando:

- **Estructura organizada.** Una bóveda de Obsidian con estructura clara, convenciones definidas, y sistema de templates para clientes.
- **Claude como colaborador.** No como un chatbot, sino como un asistente que conoce mi bóveda, respeta mis reglas, usa mi tono de voz, y sabe cuándo preguntar antes de actuar.
- **Contexto que hace efecto compuesto.** Cada archivo de contexto que refino mejora la calidad de todas las interacciones futuras. Un brand-voice.md bien escrito cambia completamente cómo Claude genera contenido.
- **Sistema reproducible.** Todo es archivos .md. No hay configuración oculta, no hay magia. Puedo versionar esto en Git, replicarlo en otra máquina, o compartir la estructura con alguien más.

Lo más importante: la inversión de tiempo fue de aproximadamente 2-3 horas entre las dos sesiones. Y esas horas me devuelven valor en cada interacción con Claude de aquí en adelante.

## Lo que viene: Segundo Cerebro self-hosted con Claude Code

Todo lo que construí aquí corre en mi máquina local. Obsidian lee los archivos. Claude Cowork accede a la carpeta. Funciona, pero tiene una limitación: está atado a mi escritorio. Si cierro la laptop, se acabó.

El siguiente paso que estoy explorando es migrar toda esta estructura de archivos (el CLAUDE.md, los archivos de contexto, los skills, los agents, el sistema de sesiones) a un VPS y que sea Claude Code el que gestione ese proyecto. No Cowork. Claude Code corriendo directamente sobre la bóveda en un servidor.

La idea es construir algo similar a lo que hace OpenClaw (un clon de Claude Code self-hosted), pero con un enfoque diferente: usar el propio Claude Code con su nueva funcionalidad de acceso remoto para conectarme a la bóveda desde cualquier dispositivo. El Segundo Cerebro vive en el servidor, Claude Code opera sobre él, y yo me conecto cuando lo necesite, desde la laptop, el teléfono, o donde sea.

Eso requiere resolver varias cosas: montar la bóveda de Obsidian en el VPS con sincronización, configurar Claude Code como servicio, exponer el acceso remoto de forma segura, adaptar los skills y agents para que funcionen en ese entorno, y diseñar una capa de orquestación para que los agents puedan correr tareas en background de forma autónoma.

Básicamente: un Segundo Cerebro que no depende de que mi computadora esté encendida, gestionado por IA, accesible desde cualquier lugar.

Lo voy a documentar cuando lo tenga funcionando. Ese post va a ser significativamente más técnico que este.
