const fs = require('fs');
const path = require('path');

function parseMonsters(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const sections = content.split('\n## ');
    const monsters = [];

    sections.forEach(section => {
        if (!section.trim() || section.startsWith('# ')) return;

        // Split by ### to get individual stat blocks
        const blocks = section.split('\n### ');
        blocks.shift(); // remove the part before the first ###

        blocks.forEach(block => {
            const blockLines = block.split('\n');
            const name = blockLines[0].trim();
            const parameters = {
                traits: [],
                actions: [],
                bonus_actions: [],
                reactions: [],
                legendary_actions: []
            };

            let currentSection = 'base';
            let description = '';

            // Extract ability scores from table
            const tableMatch = block.match(/<tbody>[\s\S]+?<\/tbody>/);
            if (tableMatch) {
                const tbody = tableMatch[0];
                const rows = tbody.match(/<tr>[\s\S]+?<\/tr>/g);
                if (rows) {
                    rows.forEach(row => {
                        const cols = row.match(/<td>[\s\S]+?<\/td>/g);
                        if (cols && cols.length >= 4) {
                            const ability = cols[0].replace(/<\/?strong>/g, '').replace(/<\/?td>/g, '').trim();
                            if (['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].includes(ability)) {
                                parameters[ability.toLowerCase()] = {
                                    score: parseInt(cols[1].replace(/<\/?td>/g, '').trim()),
                                    mod: cols[2].replace(/<\/?td>/g, '').trim(),
                                    save: cols[3].replace(/<\/?td>/g, '').trim()
                                };
                            }
                        }
                        if (cols && cols.length >= 8) {
                            const ability = cols[4].replace(/<\/?strong>/g, '').replace(/<\/?td>/g, '').trim();
                            if (['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].includes(ability)) {
                                parameters[ability.toLowerCase()] = {
                                    score: parseInt(cols[5].replace(/<\/?td>/g, '').trim()),
                                    mod: cols[6].replace(/<\/?td>/g, '').trim(),
                                    save: cols[7].replace(/<\/?td>/g, '').trim()
                                };
                            }
                        }
                        if (cols && cols.length >= 12) {
                             const ability = cols[8].replace(/<\/?strong>/g, '').replace(/<\/?td>/g, '').trim();
                            if (['STR', 'DEX', 'CON', 'INT', 'WIS', 'CHA'].includes(ability)) {
                                parameters[ability.toLowerCase()] = {
                                    score: parseInt(cols[9].replace(/<\/?td>/g, '').trim()),
                                    mod: cols[10].replace(/<\/?td>/g, '').trim(),
                                    save: cols[11].replace(/<\/?td>/g, '').trim()
                                };
                            }
                        }
                    });
                }
            }

            for (let i = 1; i < blockLines.length; i++) {
                let line = blockLines[i].trim();
                if (!line || line.startsWith('<table') || line.startsWith('</table') || line.startsWith('<thead>') || line.startsWith('</thead>') || line.startsWith('<tbody>') || line.startsWith('</tbody>') || line.startsWith('<tr>') || line.startsWith('</tr>') || line.startsWith('<td>') || line.startsWith('</td>') || line.startsWith('<th>') || line.startsWith('</th>')) continue;

                if (line.startsWith('_') && line.endsWith('_') && !line.includes('**')) {
                    // Check if it's actually the size/type/alignment line
                    if (line.includes('Aberration') || line.includes('Beast') || line.includes('Celestial') || line.includes('Construct') || line.includes('Dragon') || line.includes('Elemental') || line.includes('Fey') || line.includes('Fiend') || line.includes('Giant') || line.includes('Humanoid') || line.includes('Monstrosity') || line.includes('Ooze') || line.includes('Plant') || line.includes('Undead')) {
                        const parts = line.replace(/_/g, '').split(',');
                        parameters.size_type = parts[0].trim();
                        parameters.alignment = parts[1] ? parts[1].trim() : '';
                    }
                } else if (line.startsWith('**AC**')) {
                    const acMatch = line.match(/\*\*AC\*\*\s*(\d+)/);
                    if (acMatch) parameters.ac = parseInt(acMatch[1]);
                    const initMatch = line.match(/\*\*Initiative\*\*\s*([+-]\d+)\s*\((\d+)\)/);
                    if (initMatch) {
                        parameters.initiative_mod = initMatch[1];
                        parameters.initiative_score = parseInt(initMatch[2]);
                    }
                } else if (line.startsWith('**HP**')) {
                    const hpMatch = line.match(/\*\*HP\*\*\s*(\d+)\s*\(([^)]+)\)/);
                    if (hpMatch) {
                        parameters.hp = parseInt(hpMatch[1]);
                        parameters.hp_formula = hpMatch[2];
                    }
                } else if (line.startsWith('**Speed**')) {
                    parameters.speed = line.replace('**Speed**', '').trim();
                } else if (line.startsWith('**Skills**')) {
                    parameters.skills = line.replace('**Skills**', '').trim();
                } else if (line.startsWith('**Resistances**')) {
                    parameters.resistances = line.replace('**Resistances**', '').trim();
                } else if (line.startsWith('**Immunities**')) {
                    parameters.immunities = line.replace('**Immunities**', '').trim();
                } else if (line.startsWith('**Vulnerabilities**')) {
                    parameters.vulnerabilities = line.replace('**Vulnerabilities**', '').trim();
                } else if (line.startsWith('**Gear**')) {
                    parameters.gear = line.replace('**Gear**', '').trim();
                } else if (line.startsWith('**Senses**')) {
                    parameters.senses = line.replace('**Senses**', '').trim();
                } else if (line.startsWith('**Languages**')) {
                    parameters.languages = line.replace('**Languages**', '').trim();
                } else if (line.startsWith('**CR**')) {
                    const crMatch = line.match(/\*\*CR\*\*\s*([^\s(]+)/);
                    if (crMatch) parameters.cr = crMatch[1];
                } else if (line.startsWith('#### ')) {
                    currentSection = line.replace('#### ', '').toLowerCase().replace(/ /g, '_');
                    parameters[currentSection] = parameters[currentSection] || [];
                } else if (line.startsWith('**_') && currentSection !== 'base') {
                    parameters[currentSection].push(line);
                } else if (currentSection === 'base' && !line.startsWith('<')) {
                    description += line + ' ';
                } else if (currentSection !== 'base' && !line.startsWith('<')) {
                    if (parameters[currentSection] && Array.isArray(parameters[currentSection]) && parameters[currentSection].length > 0) {
                        parameters[currentSection][parameters[currentSection].length - 1] += '\n' + line;
                    }
                }
            }

            monsters.push({
                name,
                type: 'monster',
                description: description.trim(),
                parameters
            });
        });
    });

    return monsters;
}

const monstersAZ = parseMonsters('monsters-A-Z.md');
const animals = parseMonsters('animals.md');

const allMonsters = [];
const seen = new Set();

[...monstersAZ, ...animals].forEach(m => {
    if (!seen.has(m.name)) {
        allMonsters.push(m);
        seen.add(m.name);
    }
});

fs.writeFileSync('scripts/monsters.json', JSON.stringify(allMonsters, null, 2));
console.log(`Parsed ${allMonsters.length} unique monsters with improved ability score and field extraction.`);
