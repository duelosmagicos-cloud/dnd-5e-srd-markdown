Plataforma de la maqueta:

- html
- 2D (Por lo menos al principio)
librerias:

Motores y Librerías 2D   Phaser: Es la librería 2D más popular, completa y madura del ecosistema web. Incluye manejo de sprites, física, cámara, entradas de usuario, mapas de tiles y soporte para WebGL y Canvas.   PixiJS: Es un motor de renderizado 2D ultrarrápido basado en WebGL. No es un motor de juegos completo (no incluye sistemas de física por defecto), pero es ideal para construir animaciones e interfaces complejas o como base para un motor propio.   KAPLAY.js (antes Kaboom.js): Una librería moderna y muy amigable pensada para crear juegos 2D de forma rápida e intuitiva. Usa un sistema basado en componentes fácil de entender para principiantes y soporta TypeScript.   Excalibur.js: Un motor de videojuegos 2D diseñado nativamente en TypeScript, con ciclo de vida completo (escenas, UI, animaciones, sonido y física).

Partes:
Tablero : 10x10 con obstaculos (agua, arboles, piedras)- > Combate sencillo 

Tirada de iniciacion es igual.

- 2 personajes jugadores (Lvl 2 - 6 acciones)
    - Personaje marcial - (hp : 23 | Stand array | dd: D6 |da : D8)
    - Personaje Magico - (hp : 18 | Stand array | dd: D4 | da: D4)
- 5 enemigos sencillos (6 acciones)
    - 2 distancia (lvl 1 | hp: 10 | dd: D4 | da : D6)
    - 2 melee  (lvl 1 | hp: 14 | dd: D6 |da: D8)
    - semi boss (lvl 2 | hp: 30 | dd: D8 | da: D12)

COstes:
movimiento: cada punto de accion son 3 casillas