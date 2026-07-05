const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const db = new sqlite3.Database('dnd_srd.db');

db.serialize(() => {
    // Create tables
    db.run(`CREATE TABLE IF NOT EXISTS criaturas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        type TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS clases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS features (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class_name TEXT,
        name TEXT,
        description TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS spells (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS backgrounds (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS species (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT,
        type TEXT
    )`);

    // Import Monsters
    const monsters = JSON.parse(fs.readFileSync('scripts/monsters.json', 'utf8'));
    const stmtMonster = db.prepare("INSERT INTO criaturas (name, type, description, parameters) VALUES (?, ?, ?, ?)");
    monsters.forEach(m => {
        stmtMonster.run(m.name, m.type, m.description, JSON.stringify(m.parameters));
    });
    stmtMonster.finalize();

    // Import Spells
    const spells = JSON.parse(fs.readFileSync('scripts/spells.json', 'utf8'));
    const stmtSpell = db.prepare("INSERT INTO spells (name, description, parameters) VALUES (?, ?, ?)");
    spells.forEach(s => {
        stmtSpell.run(s.name, s.description, JSON.stringify(s.parameters));
    });
    stmtSpell.finalize();

    // Import Classes
    const classes = JSON.parse(fs.readFileSync('scripts/classes.json', 'utf8'));
    const stmtClass = db.prepare("INSERT INTO clases (name, description, parameters) VALUES (?, ?, ?)");
    classes.forEach(c => {
        stmtClass.run(c.name, c.description, JSON.stringify(c.parameters));
    });
    stmtClass.finalize();

    // Import Features
    const features = JSON.parse(fs.readFileSync('scripts/features.json', 'utf8'));
    const stmtFeature = db.prepare("INSERT INTO features (class_name, name, description) VALUES (?, ?, ?)");
    features.forEach(f => {
        stmtFeature.run(f.class_name, f.name, f.description);
    });
    stmtFeature.finalize();

    // Import Backgrounds
    const backgrounds = JSON.parse(fs.readFileSync('scripts/backgrounds.json', 'utf8'));
    const stmtBg = db.prepare("INSERT INTO backgrounds (name, description, parameters) VALUES (?, ?, ?)");
    backgrounds.forEach(b => {
        stmtBg.run(b.name, b.description, JSON.stringify(b.parameters));
    });
    stmtBg.finalize();

    // Import Species
    const species = JSON.parse(fs.readFileSync('scripts/species.json', 'utf8'));
    const stmtSp = db.prepare("INSERT INTO species (name, description, parameters) VALUES (?, ?, ?)");
    species.forEach(s => {
        stmtSp.run(s.name, s.description, JSON.stringify(s.parameters));
    });
    stmtSp.finalize();

    // Import Items
    const equipment = JSON.parse(fs.readFileSync('scripts/equipment.json', 'utf8'));
    const magicItems = JSON.parse(fs.readFileSync('scripts/magic_items.json', 'utf8'));
    const stmtItem = db.prepare("INSERT INTO items (name, description, parameters, type) VALUES (?, ?, ?, ?)");
    equipment.forEach(e => {
        stmtItem.run(e.name, e.description, JSON.stringify(e.parameters), 'equipment');
    });
    magicItems.forEach(mi => {
        stmtItem.run(mi.name, mi.description, JSON.stringify(mi.parameters), 'magic_item');
    });
    stmtItem.finalize();

    console.log('Database populated successfully.');
});

db.close();
