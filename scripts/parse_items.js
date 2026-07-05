const fs = require('fs');

function parseEquipment(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const sections = content.split('\n#### ');
    sections.shift(); // intro

    const equipment = sections.map(section => {
        const lines = section.split('\n');
        const nameAndPrice = lines[0].trim();
        const name = nameAndPrice.split(' (')[0];
        const price = nameAndPrice.includes('(') ? nameAndPrice.split(' (')[1].replace(')', '') : '';

        const description = lines.slice(1).join('\n').trim();
        return { name, description, parameters: { price } };
    });

    return equipment;
}

function parseMagicItems(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const sections = content.split('\n#### ');
    sections.shift(); // intro

    const items = sections.map(section => {
        const lines = section.split('\n');
        const name = lines[0].trim();
        const infoLine = lines[1].trim();
        const parameters = { info: infoLine };
        const description = lines.slice(2).join('\n').trim();
        return { name, description, parameters };
    });

    return items;
}

const equipment = parseEquipment('equipment.md');
const magicItems = parseMagicItems('magic-items.md');

fs.writeFileSync('scripts/equipment.json', JSON.stringify(equipment, null, 2));
fs.writeFileSync('scripts/magic_items.json', JSON.stringify(magicItems, null, 2));
console.log(`Parsed ${equipment.length} equipment and ${magicItems.length} magic items.`);
