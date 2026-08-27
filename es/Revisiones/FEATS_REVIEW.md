# 📋 Análisis de Dotes - Cambios Necesarios

## Dotes Mencionadas en PDFs (8 ago 2026) vs. Archivo Actual

### ✅ DOTES ENCONTRADAS (16)

#### Dotes de Origen - CRÍTICAS (7)

| Dote | Línea | Estado Actual | Cambio Necesario |
|------|-------|---|---|
| **Afortunado** | 66 | 3 puntos de suerte fijos | ✅ ACTUALIZADO - Eliminada dependencia de competencia |
| **Alerta** | 78 | Ventaja iniciativa + visión + sueño | ✅ ACTUALIZADO - Simplificada mecánica |
| **Atacante salvaje** | 88 | Dos dados daño, elegir mejor | ✅ Parece correcto |
| **Duro** | 94 | +2x nivel al inicio, +2 por nivel | ✅ Simple y directo |
| **Fabricante** | 100 | Competencia 1 herramienta + tabla simplificada | ✅ ACTUALIZADO - Simplificada y alineada |
| **Habilidoso** | 125 | Competencia 3 habilidades/herramientas | ✅ Simplificado |
| **Iniciado en la magia** | 131 | 2 trucos + 1 conjuro nivel 1 | ⬜ PDF: simplificar conjuros (¿2 trucos + 1 nivel 1 de clase específica?) |

#### Dotes Generales - REVISAR (20+)

**Chef** (274)
- Actual: Aumento Cons/Sab, competencia cocina, comida, golosinas
- Cambio: ⬜ Revisar si las golosinas deben tener límites diferentes

**Tough (Robusto)** 
- ❌ NO ENCONTRADO en archivo. Probablemente llamado "Duro" (línea 94)

**Matón de taberna** (145)
- Actual: Ataque mejorado, repetir 1s, armas improvisadas, empujar
- Cambio: ⬜ PDF: eliminar beneficio de daño adicional sin armas, mantener empuje garantizado

**Iniciado en la magia** (131)
- Actual: 2 trucos + 1 hechizo nivel 1
- Cambio: ⬜ Permitir elegir trucos de cualquier clase (PDF: clérigo, druida O mago, no restricción)

**Magic Initiate** - Mismo que "Iniciado en la magia"

---

## ⚠️ PROBLEMAS IDENTIFICADOS

### 1. **Dependencia de bonificador por competencia**
Dotes que usan `bonificador por competencia`:
- ✅ Afortunado (línea 72) - Puntos de suerte
- ✅ Sanador (línea 175) - Dice "bonificador por competencia"
- ✅ Muy otras... 

**Cambio necesario según PDF:** Revisar si estas dependencias son intencionales o deben ser constantes.

### 2. **Competencia con herramientas en Dotes de Origen**
- ✅ Fabricante (línea 106) - Gana competencia con herramientas de artesano
- ⬜ Musician (línea 165) - Competencia con instrumentos (musicales, no herramientas)

**Cambio necesario:** Si character-origins elimina herramientas, las dotes que las otorgan podrían tener más impacto.

### 3. **Requisitos de Nivel mínimo**
Muchas dotes generales tienen prerrequisito `Nivel 4+`. 
- ¿Esto se mantiene o cambia?

### 4. **Falta de clasificación clara de "nivel de acceso"**
El archivo está organizado por categoría (Origen, General, Combate, Épico) pero no por nivel.
- ¿Seguir así o reorganizar?

---

## 📊 RESUMEN POR CATEGORÍA

| Categoría | Cantidad | Cambios Necesarios |
|-----------|----------|---|
| **Origen** | 7 | ✅ 7 - Revisar dependencias |
| **General** | 36+ | ⬜ 20+ - Revisar específicamente |
| **Estilo de Combate** | 9 | ✅ Parecen OK |
| **Don Épico** | 12 | ✅ Parecen OK |
| **TOTAL** | 64+ | ⬜ ~25-30 requieren revisión |

---

## 🎯 PRÓXIMOS PASOS SUGERIDOS

### ✅ COMPLETADOS (Prioridad ALTA)
- [x] Revisar Afortunado (bonificador de suerte) → 3 puntos fijos
- [x] Revisar Alerta (iniciativa) → Ventaja + beneficios sensoriales
- [x] Revisar Fabricante (herramientas) → 1 herramienta + tabla simplificada

### ⏳ PENDIENTE (Prioridad MEDIA)
- [ ] Auditar todas las dotes que usan "bonificador por competencia" (~20 más)
- [ ] Verificar si competencias con herramientas deben existir en otras dotes
- [ ] Revisar Matón de taberna (empuje garantizado vs condicional)

### ⏳ PENDIENTE (Prioridad BAJA)
- [ ] Reorganizar por nivel de acceso si es necesario
- [ ] Revisar dotes "puramente narrativas" vs mecánicas
- [ ] Filtrar dotes excesivamente situacionales

---

**Nota:** El archivo tiene ~868 líneas. Las dotes están bien estructuradas, pero los cambios específicos requieren:
- Leer las notas de reunión en detalle (timestamps en PDFs)
- Decidir sobre cada dependencia de bonificador
- Verificar compatibilidad con cambios en character-origins.md
