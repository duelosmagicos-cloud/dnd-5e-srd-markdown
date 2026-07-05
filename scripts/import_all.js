const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbFile = 'dnd_srd.db';
if (fs.existsSync(dbFile)) {
    fs.unlinkSync(dbFile);
}

const db = new sqlite3.Database(dbFile);

db.serialize(() => {
    // Create tables
    db.run(`CREATE TABLE criaturas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        type TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE clases (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE features (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        class_name TEXT,
        name TEXT,
        description TEXT
    )`);

    db.run(`CREATE TABLE spells (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE backgrounds (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE species (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT,
        type TEXT
    )`);

    db.run(`CREATE TABLE feats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    db.run(`CREATE TABLE rules (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        source TEXT,
        title TEXT,
        content TEXT
    )`);

    // Helper to insert data
    const insert = (table, data, mapping) => {
        const keys = Object.keys(mapping);
        const placeholders = keys.map(() => '?').join(', ');
        const columns = keys.join(', ');
        const stmt = db.prepare(`INSERT INTO ${table} (${columns}) VALUES (${placeholders})`);
        data.forEach(item => {
            const values = keys.map(k => {
                const val = mapping[k](item);
                return typeof val === 'object' ? JSON.stringify(val) : val;
            });
            stmt.run(...values);
        });
        stmt.finalize();
    };

    // Import all
    console.log('Importing monsters...');
    insert('criaturas', JSON.parse(fs.readFileSync('scripts/monsters.json', 'utf8')), {
        name: m => m.name,
        type: m => m.type,
        description: m => m.description,
        parameters: m => m.parameters
    });

    console.log('Importing spells...');
    insert('spells', JSON.parse(fs.readFileSync('scripts/spells.json', 'utf8')), {
        name: s => s.name,
        description: s => s.description,
        parameters: s => s.parameters
    });

    console.log('Importing classes...');
    insert('clases', JSON.parse(fs.readFileSync('scripts/classes.json', 'utf8')), {
        name: c => c.name,
        description: c => c.description,
        parameters: c => c.parameters
    });

    console.log('Importing features...');
    insert('features', JSON.parse(fs.readFileSync('scripts/features.json', 'utf8')), {
        class_name: f => f.class_name,
        name: f => f.name,
        description: f => f.description
    });

    console.log('Importing backgrounds...');
    insert('backgrounds', JSON.parse(fs.readFileSync('scripts/backgrounds.json', 'utf8')), {
        name: b => b.name,
        description: b => b.description,
        parameters: b => b.parameters
    });

    console.log('Importing species...');
    insert('species', JSON.parse(fs.readFileSync('scripts/species.json', 'utf8')), {
        name: s => s.name,
        description: s => s.description,
        parameters: s => s.parameters
    });

    console.log('Importing items...');
    const equipment = JSON.parse(fs.readFileSync('scripts/equipment.json', 'utf8'));
    const magicItems = JSON.parse(fs.readFileSync('scripts/magic_items.json', 'utf8'));
    const allItems = [
        ...equipment.map(i => ({ ...i, type: 'equipment' })),
        ...magicItems.map(i => ({ ...i, type: 'magic_item' }))
    ];
    insert('items', allItems, {
        name: i => i.name,
        description: i => i.description,
        parameters: i => i.parameters,
        type: i => i.type
    });

    console.log('Importing feats...');
    insert('feats', JSON.parse(fs.readFileSync('scripts/feats.json', 'utf8')), {
        name: f => f.name,
        description: f => f.description,
        parameters: f => f.parameters
    });

    console.log('Importing rules...');
    insert('rules', JSON.parse(fs.readFileSync('scripts/rules.json', 'utf8')), {
        source: r => r.source,
        title: r => r.title,
        content: r => r.content
    });

    console.log('Full data import complete.');
});

db.close();
