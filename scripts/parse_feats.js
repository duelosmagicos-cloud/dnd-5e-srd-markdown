const fs = require('fs');

function parseFeats(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const categories = content.split('\n### ');
    categories.shift(); // intro

    const allFeats = [];

    categories.forEach(categorySection => {
        const lines = categorySection.split('\n');
        const categoryName = lines[0].trim();

        const featBlocks = categorySection.split('\n#### ');
        featBlocks.shift(); // category intro

        featBlocks.forEach(block => {
            const blockLines = block.split('\n');
            const name = blockLines[0].trim();
            const parameters = { category: categoryName };
            let description = '';

            for (let i = 1; i < blockLines.length; i++) {
                const line = blockLines[i].trim();
                if (line.startsWith('_') && line.endsWith('_')) {
                    if (line.includes('Prerequisite:')) {
                        parameters.prerequisite = line.replace(/_/g, '').trim();
                    } else {
                        parameters.info = line.replace(/_/g, '').trim();
                    }
                } else if (line) {
                    description += line + '\n';
                }
            }

            allFeats.push({ name, description: description.trim(), parameters });
        });
    });

    return allFeats;
}

const feats = parseFeats('feats.md');
fs.writeFileSync('scripts/feats.json', JSON.stringify(feats, null, 2));
console.log(`Parsed ${feats.length} feats.`);
