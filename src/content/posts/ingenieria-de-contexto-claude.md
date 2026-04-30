---
title: "Dejé de escribir prompts. Empecé a escribir archivos."
excerpt: "Cada conversación con un chatbot empieza de cero. No sabe quién eres ni qué hiciste ayer. Cómo construí un sistema de archivos que le da contexto persistente a Claude, y por qué la ingeniería de contexto importa más que el prompting."
date: 2026-02-25
tags: ["IA", "Claude", "Productividad"]
image: "https://cdn.rauljcamacho.online/posts/2026/02/ingenieria-de-contexto-claude-hero.webp"
imageAlt: "Editor de código con archivos Markdown abiertos"
author: "Raul J. Camacho"
draft: false
---

Dejé de escribir prompts. Empecé a escribir archivos.

Suena raro, pero es el cambio que más impacto ha tenido en cómo uso IA este año.

## El problema con los chatbots tradicionales

El problema con ChatGPT y herramientas similares es que cada conversación empieza de cero. No sabe quién eres. No sabe qué hiciste ayer. No conoce tu tono de voz, tus proyectos, ni tus clientes. Eres un extraño cada vez que abres el chat.

En febrero migré todo mi sistema de conocimiento de Notion a Obsidian — archivos Markdown en una carpeta local — y configuré Claude Cowork para que trabaje directamente sobre esa carpeta. No como chatbot. Como colaborador.

## Lo que construí en dos sesiones (~3 horas)

- Una bóveda de Obsidian con estructura definida: `Inbox`, `Base de Conocimiento`, `Clientes`, `Reuniones`, `Contenido`.
- Un archivo `CLAUDE.md` que le dice a Claude cómo operar en la bóveda: convenciones de nombres, estructura de carpetas, reglas de comportamiento, wikilinks.
- Tres archivos de contexto personal: `about-me.md` (quién soy, mi stack, mis clientes), `brand-voice.md` (mi tono, qué suena bien, qué suena mal), `working-style.md` (cómo quiero que se comporte).
- Skills especializados para crear notas, tomar notas de reuniones, organizar conocimiento y generar contenido.
- Agents autónomos para procesar el `Inbox`, auditar la bóveda, investigar temas y responder consultas.
- Un sistema de sesiones que le da a Claude "memoria" entre conversaciones — resúmenes que persisten en archivos y se leen al iniciar cada sesión.

## El resultado

Cuando Claude abre mi carpeta, sabe quién soy, cómo trabajo, qué proyectos tengo activos, y qué tono usar cuando escribe. No necesito explicarle nada. El contexto está en los archivos.

## La clave no es el prompting

Es la ingeniería de contexto.

Mientras mejor sean tus archivos, menos prompting necesitas. Y a diferencia de un prompt — que se usa una vez y se evapora — estos archivos hacen efecto compuesto. Cada semana que los refinas, Claude mejora en tu trabajo específico.
