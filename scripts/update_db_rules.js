const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const db = new sqlite3.Database('dnd_srd.db');

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS rules (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        source TEXT,
        title TEXT,
        content TEXT
    )`);

    const rules = JSON.parse(fs.readFileSync('scripts/rules.json', 'utf8'));
    const stmt = db.prepare("INSERT INTO rules (source, title, content) VALUES (?, ?, ?)");
    rules.forEach(r => {
        stmt.run(r.source, r.title, r.content);
    });
    stmt.finalize();

    console.log('Rules added to database.');
});

db.close();
