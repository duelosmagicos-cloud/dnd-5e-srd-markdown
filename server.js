const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

const db = new sqlite3.Database('dnd_srd.db');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: "D&D 5e SRD API (2024)",
        endpoints: [
            "/criaturas",
            "/clases",
            "/clases/:name/features",
            "/spells",
            "/feats",
            "/species",
            "/backgrounds",
            "/items",
            "/rules",
            "/export"
        ]
    });
});

// Helper to parse JSON parameters
const parseParams = (row) => {
    if (row && row.parameters) {
        try {
            row.parameters = JSON.parse(row.parameters);
        } catch (e) {
            console.error('Error parsing parameters', e);
        }
    }
    return row;
};

// Endpoints for Criaturas
app.get('/criaturas', (req, res) => {
    const { type, name, cr } = req.query;
    let query = "SELECT * FROM criaturas WHERE 1=1";
    const params = [];

    if (type) {
        query += " AND type = ?";
        params.push(type);
    }
    if (name) {
        query += " AND name LIKE ?";
        params.push(`%${name}%`);
    }
    if (cr) {
        query += " AND json_extract(parameters, '$.cr') = ?";
        params.push(cr);
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(parseParams));
    });
});

app.get('/criaturas/:id', (req, res) => {
    db.get("SELECT * FROM criaturas WHERE id = ?", [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: "Not found" });
        res.json(parseParams(row));
    });
});

// Endpoints for Spells
app.get('/spells', (req, res) => {
    const { name, level } = req.query;
    let query = "SELECT * FROM spells WHERE 1=1";
    const params = [];

    if (name) {
        query += " AND name LIKE ?";
        params.push(`%${name}%`);
    }
    if (level) {
        query += " AND parameters LIKE ?";
        params.push(`%Level ${level}%`);
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(parseParams));
    });
});

// Endpoints for Classes and Features
app.get('/clases', (req, res) => {
    db.all("SELECT * FROM clases", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(parseParams));
    });
});

app.get('/clases/:name/features', (req, res) => {
    db.all("SELECT * FROM features WHERE class_name = ?", [req.params.name], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Endpoints for Origins
app.get('/species', (req, res) => {
    db.all("SELECT * FROM species", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(parseParams));
    });
});

app.get('/backgrounds', (req, res) => {
    db.all("SELECT * FROM backgrounds", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(parseParams));
    });
});

app.get('/feats', (req, res) => {
    db.all("SELECT * FROM feats", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(parseParams));
    });
});

app.get('/rules', (req, res) => {
    const { search } = req.query;
    let query = "SELECT * FROM rules WHERE 1=1";
    const params = [];

    if (search) {
        query += " AND (title LIKE ? OR content LIKE ?)";
        params.push(`%${search}%`, `%${search}%`);
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Endpoints for Items
app.get('/items', (req, res) => {
    const { type, name } = req.query;
    let query = "SELECT * FROM items WHERE 1=1";
    const params = [];

    if (type) {
        query += " AND type = ?";
        params.push(type);
    }
    if (name) {
        query += " AND name LIKE ?";
        params.push(`%${name}%`);
    }

    db.all(query, params, (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows.map(parseParams));
    });
});

app.get('/export', (req, res) => {
    const data = {};
    const tables = ['criaturas', 'clases', 'features', 'spells', 'backgrounds', 'species', 'items', 'feats', 'rules'];
    let completed = 0;

    tables.forEach(table => {
        db.all(`SELECT * FROM ${table}`, [], (err, rows) => {
            if (!err) {
                data[table] = rows.map(parseParams);
            }
            completed++;
            if (completed === tables.length) {
                res.json(data);
            }
        });
    });
});

app.listen(port, () => {
    console.log(`D&D SRD API listening at http://localhost:${port}`);
});
