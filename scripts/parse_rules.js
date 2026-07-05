const fs = require('fs');

function parseRules(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const fileName = filePath.replace('.md', '');

    if (filePath === 'rules-glossary.md') {
        const sections = content.split('\n#### ');
        sections.shift();
        return sections.map(section => {
            const lines = section.split('\n');
            const title = lines[0].trim();
            const body = lines.slice(1).join('\n').trim();
            return {
                source: fileName,
                title: title,
                content: body
            };
        });
    } else {
        const sections = content.split('\n## ');
        return sections.map(section => {
            const lines = section.split('\n');
            const title = lines[0].replace('# ', '').trim();
            const body = lines.slice(1).join('\n').trim();
            return {
                source: fileName,
                title: title,
                content: body
            };
        });
    }
}

const rulesFiles = ['rules-glossary.md', 'playing-the-game.md', 'gameplay-toolbox.md', 'character-creation.md', 'monsters.md'];
let allRules = [];

rulesFiles.forEach(file => {
    if (fs.existsSync(file)) {
        allRules = allRules.concat(parseRules(file));
    }
});

fs.writeFileSync('scripts/rules.json', JSON.stringify(allRules, null, 2));
console.log(`Parsed ${allRules.length} rule sections.`);
