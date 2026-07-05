const fs = require('fs');

function parseSpells(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const sections = content.split('\n#### ');
    const spells = [];

    // The first section is the introduction, skip it
    for (let i = 1; i < sections.length; i++) {
        const section = sections[i];
        const lines = section.split('\n');
        const name = lines[0].trim();

        const spell = {
            name: name,
            parameters: {}
        };

        let description = '';
        let readingDescription = false;

        for (let j = 1; j < lines.length; j++) {
            const line = lines[j].trim();
            if (!line) continue;

            if (line.startsWith('_') && line.endsWith('_')) {
                spell.parameters.level_school = line.replace(/_/g, '').trim();
            } else if (line.startsWith('**Casting Time:**')) {
                spell.parameters.casting_time = line.replace('**Casting Time:**', '').trim();
            } else if (line.startsWith('**Range:**')) {
                spell.parameters.range = line.replace('**Range:**', '').trim();
            } else if (line.startsWith('**Components:**')) {
                spell.parameters.components = line.replace('**Components:**', '').trim();
            } else if (line.startsWith('**Duration:**')) {
                spell.parameters.duration = line.replace('**Duration:**', '').trim();
                readingDescription = true;
            } else if (readingDescription) {
                if (line.startsWith('_Using a Higher-Level Spell Slot._')) {
                    spell.parameters.higher_level = line.replace('_Using a Higher-Level Spell Slot._', '').trim();
                } else if (line.startsWith('_Cantrip Upgrade._')) {
                    spell.parameters.higher_level = line.replace('_Cantrip Upgrade._', '').trim();
                } else if (!line.startsWith('<')) {
                    description += line + '\n';
                }
            }
        }
        spell.description = description.trim();
        spells.push(spell);
    }

    return spells;
}

const spells = parseSpells('spells.md');
fs.writeFileSync('scripts/spells.json', JSON.stringify(spells, null, 2));
console.log(`Parsed ${spells.length} spells.`);
