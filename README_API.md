# D&D 5e SRD API (2024)

Esta API proporciona acceso programático al contenido del D&D 5e SRD 5.2.1 (2024). Los datos han sido extraídos de archivos Markdown y cargados en una base de datos SQLite con campos JSON para máxima flexibilidad.

## Requisitos

- Node.js (v18 o superior recomendado)
- npm

## Instalación

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. (Opcional) Si deseas regenerar la base de datos desde los archivos MD:
   ```bash
   node scripts/parse_monsters.js
   node scripts/parse_spells.js
   node scripts/parse_classes.js
   node scripts/parse_origins.js
   node scripts/parse_items.js
   node scripts/parse_feats.js
   node scripts/parse_rules.js
   node scripts/import_all.js
   ```
   *Nota: La base de datos `dnd_srd.db` ya viene pre-poblada.*

## Ejecución

Inicia el servidor:
```bash
node server.js
```
La API estará disponible en `http://localhost:3000`.

## Endpoints

### 1. Criaturas (Monstruos y Animales)
- `GET /criaturas`: Lista todas las criaturas.
- `GET /criaturas?name=Aboleth`: Filtra por nombre.
- `GET /criaturas?cr=10`: Filtra por Challenge Rating.
- `GET /criaturas?type=monster`: Filtra por tipo (siempre 'monster' por ahora).

Cada criatura incluye un objeto `parameters` con:
- Estadísticas base: `ac`, `hp`, `speed`, `cr`.
- Atributos (STR, DEX, CON, INT, WIS, CHA) con score, modificador y salvación.
- Listas de `traits`, `actions`, `legendary_actions`, etc.

### 2. Clases y Características
- `GET /clases`: Lista las 12 clases básicas.
- `GET /clases/:name/features`: Lista todas las características (features) de una clase específica (ej. `/clases/Barbarian/features`).

### 3. Hechizos
- `GET /spells`: Lista todos los hechizos.
- `GET /spells?name=Fireball`: Filtra por nombre.
- `GET /spells?level=3`: Filtra por nivel.

### 4. Orígenes (Especies y Trasfondos)
- `GET /species`: Lista las especies jugables y sus rasgos.
- `GET /backgrounds`: Lista los trasfondos (backgrounds) y sus beneficios.

### 5. Feats (Dotes)
- `GET /feats`: Lista todas las dotes categorizadas por Origin, General, Fighting Style y Epic Boon.

### 6. Equipamiento e Ítems Mágicos
- `GET /items`: Lista todo el equipo.
- `GET /items?type=equipment`: Solo equipo normal.
- `GET /items?type=magic_item`: Solo ítems mágicos.

### 7. Reglas y Glosario
- `GET /rules`: Lista todas las secciones de reglas y definiciones del glosario.
- `GET /rules?search=Rage`: Busca términos específicos en el glosario o reglas.

### 8. Exportación Total
- `GET /export`: Devuelve toda la base de datos en un único objeto JSON. Ideal para importar en herramientas como Xano o servicios No-Code.

## Estructura de Datos
Se ha utilizado una tabla `criaturas` general como solicitaste, con un campo `parameters` en formato JSON para manejar la variabilidad de rasgos entre diferentes seres. Las clases están separadas de sus `features` para facilitar la construcción de un "character builder".
