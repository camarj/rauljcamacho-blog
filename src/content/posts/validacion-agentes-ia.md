---
title: "Velocidad sin validación: el agujero del ciclo de desarrollo con agentes"
excerpt: "El ciclo clásico de desarrollo se colapsó en intención → construir → observar → repetir. Pero las capas de confianza que hacían viable producción fueron eliminadas, no reemplazadas. Hipótesis sobre la pieza que falta."
date: 2026-03-18
tags: ["IA", "Agentes", "Desarrollo"]
image: "https://cdn.rauljcamacho.online/posts/2026/03/validacion-agentes-ia-hero.webp"
imageAlt: "Pantalla con métricas de despliegue y código en producción"
author: "Raul J. Camacho"
draft: false
---

El ciclo de desarrollo de software como lo conocemos está muerto.

El fin de semana leí un artículo de Boris Tane que pone en palabras lo que muchos estamos viendo en la práctica. El flujo clásico — Requerimientos → Diseño → Implementación → Testing → Code Review → Deploy — se colapsó en algo mucho más apretado: **intención → construir → observar → repetir**.

Pero hay un problema que casi nadie está discutiendo.

## Las capas de confianza fueron eliminadas, no reemplazadas

Code review, QA, security review, coherencia arquitectónica. Las capas que hacían viable llevar software a producción no fueron sustituidas por equivalentes automatizados. Fueron eliminadas en el proceso, sin más.

## Lo que dicen los datos

- **Google DORA 2025**: 90% más adopción de IA correlaciona con 9% más bugs y 91% más tiempo en code review.
- **Veracode 2025**: 45% del código generado por IA tiene fallas de seguridad.
- **METR 2025**: developers experimentados fueron **19% más lentos** con herramientas de IA, no más rápidos.
- **Anthropic 2026**: solo 0–20% de tareas se pueden delegar completamente a agentes.

Velocidad sin validación no es velocidad. Es deuda técnica acelerada.

## Cuatro cosas que nadie está resolviendo como sistema integrado

1. Verificación de que el código hace lo que se pidió, no lo que el agente interpretó.
2. Seguridad continua sin depender de review humano.
3. Validación de reglas de negocio — que compile no significa que sea correcto.
4. Coherencia arquitectónica cuando tienes cientos de commits diarios de agentes.

Hay herramientas atacando cada problema por separado: `Spec-Driven Development`, `SAST + LLMs`, agentes de seguridad. Pero nadie las está conectando. Son cuatro cerraduras en cuatro puertas de una casa sin techo.

## Mi hipótesis: una spec intermedia como punto de integración

La pieza que falta es una spec intermedia. Un artefacto único del que se deriven cuatro capas de validación: criterios de verificación, restricciones de seguridad, assertions de negocio, invariantes arquitectónicas.

Un artefacto, cuatro capas. ¿Es viable? Todavía no lo sé. Los componentes ya existen — lo que falta es la integración.

Si estás construyendo en este espacio y resolviste alguna de las cuatro capas, escríbeme. Es exactamente el tipo de conversación que me ayuda a pensar mejor.
