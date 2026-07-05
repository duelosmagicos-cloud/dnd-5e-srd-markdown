const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('dnd_srd.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS feats (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        description TEXT,
        parameters TEXT
    )`);

    const feats = JSON.parse(fs.readFileSync('scripts/feats.json', 'utf8'));
    const stmtFeat = db.prepare("INSERT INTO feats (name, description, parameters) VALUES (?, ?, ?)");
    feats.forEach(f => {
        stmtFeat.run(f.name, f.description, JSON.stringify(f.parameters));
    });
    stmtFeat.finalize();

    console.log('Feats added to database.');
});

db.close();
