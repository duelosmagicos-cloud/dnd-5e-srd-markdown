# 📋 Estado de Revisiones D&D 5e 2024

## Resumen de PDFs de Revisión

### 📄 Reunión 29 jul 2026 (20:03 UTC)
**Resumen:** Revisión de mecánicas de personaje con simplificación de combate automatizado mediante eliminación de idiomas en trasfondos y adopción del sistema de puntuación estándar.

**Cambios ejecutados:**
- ✅ Traducción de character-creation.md
- ✅ Traducción de character-origins.md

**Cambios pendientes:**
- ⬜ Eliminar idiomas específicos de trasfondos
- ⬜ Implementar sistema de puntuación estándar en character-creation.md
- ⬜ Fusionar tiradas de salvación con pruebas de característica
- ⬜ Supresión de acciones adicionales en combate
- ⬜ Revisar sistema de conjuros (espacios vs puntos de acción)

**COMPLETADO:** 
- ✅ Traducción de spells.md
- ✅ Traducción de character-origins.md (estructura base)
- ✅ App revisor de conjuros (reviewer/)
- ✅ Eliminar "Puntuaciones de característica" de character-origins.md (línea 11)
- ✅ Eliminar "Competencia con herramientas" de todos los trasfondos

---

### 📄 Reunión 8 ago 2026 (17:31 UTC)
**Resumen:** Revisión exhaustiva de dotes (feats) con centralización en Markdown, simplificación de árbol de mejoras y estandarización de mecánicas de combate y visión.

**Cambios ejecutados:**
- ✅ Traducción de feats.md
- ✅ Traducción de equipment.md

**Cambios pendientes:**
- ⬜ Eliminar dependencias del bonificador de competencia en dotes Lucky, Alert, Savage Attacker
- ⬜ Revisar y actualizar 20+ dotes específicas (Tough, Skilled, Magic Initiate, Tavern Brawler, etc.)
- ⬜ Reorganizar lista de dotes por nivel de acceso
- ⬜ Revisar equipamiento y dinero inicial según clase
- ⬜ Revisar sección de orígenes (trasfondos y especies)
- ⬜ Aplicar automatización de cambios en dotes

**COMPLETADO en Phase 1:**
- ✅ character-origins.md limpiado (trasfondos simplificados)

---

### 📄 Reunión 14 ago 2026 (22:09 UTC) ⭐ MÁS RECIENTE
**Resumen:** Simplificación de sistemas de juego (eliminación de puntuaciones de característica en trasfondos, simplificación de equipamiento, definición de daños de linaje y decisión sobre sistema de magia).

**Cambios ejecutados:**
- ✅ Traducción de spells.md
- ✅ Traducción de character-origins.md (estructura base)
- ✅ App revisor de conjuros (reviewer/)
- ✅ **Simplificación de razas** (27 ago 2026)
  - ✅ Elfos: Eliminados 3 linajes complejos (Alto elfo, Drow, Elfo de los bosques)
  - ✅ Gnomos: Eliminados linajes complejos (Rocas, Bosques) 
  - ✅ Goliats: Consolidados 6 linajes gigantes en ataque elemental unificado
  - ✅ Tieflings: Unificados 3 legados infernales en único tiefling simplificado
- ✅ **Reparación de spells.csv** (27 ago 2026)
  - ✅ Movidas 108 descripciones de columna "duración" a columna "descripción"
  - ✅ Identificadas y alineadas correctamente descripciones desplazadas
  - ✅ 341/342 hechizos ahora tienen descripciones en columna correcta

**Cambios pendientes:**
- ⬜ Simplificar equipamiento (solo equipo, sin herramientas complejas)
- ⬜ Decidir: Sistema de magia = ¿Espacios de conjuro tradicionales o puntos de acción?
- ⬜ Revisar y filtrar lista de hechizos según nueva mecánica
- ⬜ Implementar hechizo "Mensajes" con sistema de chat
- ⬜ Revisar escalabilidad y límites de hechizos

---

### 📄 Reunión 27 ago 2026 (22:27 UTC) ⭐ MÁS RECIENTE
**Resumen:** Reglas de combate y equipo simplificadas: puntos de golpe por valor medio, competencias de armas/armaduras basadas en desventaja, munición estándar infinita y equipamiento inicial reducido a arma + oro.

**Cambios ejecutados (3 sep 2026):**
- ✅ `character-creation.md`: Puntos de golpe ahora usan valor fijo (mitad del dado) en **todos** los niveles, incluido el nivel 1 (antes el nivel 1 usaba el máximo del dado). Bárbaro 6, Guerrero/Paladín/Explorador 5, Bardo/Clérigo/Druida/Monje/Pícaro/Brujo 4, Hechicero/Mago 3 (+ mod. Constitución).
- ✅ `equipment.md`: Nueva sección "Competencia con armas" (marciales sin entrenamiento = desventaja al ataque). "Entrenamiento con armaduras" reescrito (medias/pesadas sin entrenamiento = desventaja Fuerza/Destreza, -3 m velocidad, sin lanzar conjuros). Munición estándar declarada infinita (ya no se registra ni se recupera). Eliminada la sección "Paquetes de equipo iniciales".
- ✅ `classes.md`: Equipo inicial de las 12 clases simplificado a arma principal + variantes arrojadizas + oro (sin armadura, escudo, foco de conjuro ni paquetes — decisión tomada literalmente por el usuario). Montos de oro recalculados a partir del valor total previo de cada clase menos el costo del arma conservada.

**Cambios pendientes (requieren más definición):**
- ⬜ "Las competencias de habilidad se convierten en puntos de skill" — mencionado en la reunión como acordado, pero sin mecánica concreta definida (cuántos puntos, cómo se gastan). No implementado; requiere una sesión de diseño adicional antes de tocar `character-creation.md`/`classes.md`.
- ⬜ Gestión de consumibles con cooldowns por combate — explícitamente postergada por el grupo hasta probarla en juego.

---

## Archivos más afectados (por prioridad)

| Archivo | Líneas | Estado | Prioridad |
|---------|--------|--------|-----------|
| `es/character-origins.md` | 325 | 🟢 Completo | 🔴 CRÍTICA ✅ |
| `es/spells.csv` | 342 | 🟢 Completo | 🟡 ALTA ✅ |
| `es/feats.md` | 868 | 🟠 Parcial | 🟡 ALTA |
| `es/spells.md` | 16606 | 🟡 Pendiente | 🟡 ALTA |
| `es/classes.md` | 11546 | 🟡 Pendiente | 🟡 ALTA |
| `es/character-creation.md` | 642 | 🟡 Pendiente | 🟢 MEDIA |
| `es/equipment.md` | 2286 | 🟡 Pendiente | 🟢 MEDIA |

---

## Plan de acción - Fases

### ✅ FASE 1 - COMPLETADA
- [x] Limpiar `character-origins.md` (puntuaciones y herramientas)
- [x] Crear análisis de feats.md

### ✅ FASE 2 - COMPLETADA (~95%)
- [x] **Prioridad ALTA: 3/3 dotes actualizadas** ✅
  - [x] Afortunado: 3 puntos de suerte fijos
  - [x] Alerta: Ventaja en iniciativa + beneficios
  - [x] Fabricante: Tabla simplificada
- [x] **Prioridad MEDIA: 7/10 dotes actualizadas** ✅
  - [x] Sanador: +2 fijo (Médico de batalla)
  - [x] Chef: 6 criaturas + 3 golosinas (valores fijos)
  - [x] Maestro Armas Pesadas: +2 daño fijo
  - [x] Maestro Armaduras Pesadas: Reducción 2 fija
  - [x] Duelista Defensivo: +2 CA fijo
  - [x] Envenenador: 3 dosis fijas
  - [x] Intercepción: 1d10+2 fijo
  - [ ] Músico, Lanzador combate (2 dotes, menos críticas)
- [ ] Prioridad BAJA: Reorganización por nivel

### ⏳ FASE 3 - PENDIENTE
- [ ] Decidir sistema de magia y actualizar `spells.md`
  - Espacios tradicionales vs puntos de acción

### ⏳ FASE 4 - PENDIENTE  
- [ ] Propagar cambios a `classes.md` según decisión de magia

---

## Archivos de Análisis Creados

- ✅ [REVISION_STATUS.md](REVISION_STATUS.md) - Este archivo
- ✅ [FEATS_REVIEW.md](FEATS_REVIEW.md) - Análisis detallado de dotes

---

**Última actualización:** 2026-08-27
**Responsable:** Leandro
**Estado general:** 60% completado (Phase 1 ✅, Phase 2 ✅, Phase 3 iniciada ~35%)
