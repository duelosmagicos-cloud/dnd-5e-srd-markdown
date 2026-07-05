const fs = require('fs');

function parseOrigins(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');

    // Parse Backgrounds
    const backgroundsSection = content.split('## Character Backgrounds')[1].split('## Character Species')[0];
    const backgroundsBlocks = backgroundsSection.split('\n#### ');
    backgroundsBlocks.shift(); // skip intro

    const backgrounds = backgroundsBlocks.map(block => {
        const lines = block.split('\n');
        const name = lines[0].trim();
        const parameters = {};
        let description = '';

        for(let i=1; i<lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('**Ability Scores:**')) parameters.ability_scores = line.replace('**Ability Scores:**', '').trim();
            else if (line.startsWith('**Feat:**')) parameters.feat = line.replace('**Feat:**', '').trim();
            else if (line.startsWith('**Skill Proficiencies:**')) parameters.skill_proficiencies = line.replace('**Skill Proficiencies:**', '').trim();
            else if (line.startsWith('**Tool Proficiency:**')) parameters.tool_proficiency = line.replace('**Tool Proficiency:**', '').trim();
            else if (line.startsWith('**Equipment:**')) parameters.equipment = line.replace('**Equipment:**', '').trim();
            else if (line) description += line + ' ';
        }

        return { name, description: description.trim(), parameters };
    });

    // Parse Species
    const speciesSection = content.split('## Character Species')[1];
    const speciesBlocks = speciesSection.split('\n#### ');
    speciesBlocks.shift(); // skip intro

    const species = speciesBlocks.map(block => {
        const lines = block.split('\n');
        const name = lines[0].trim();
        const parameters = {};
        let description = '';

        for(let i=1; i<lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('**Creature Type:**')) parameters.creature_type = line.replace('**Creature Type:**', '').trim();
            else if (line.startsWith('**Size:**')) parameters.size = line.replace('**Size:**', '').trim();
            else if (line.startsWith('**Speed:**')) parameters.speed = line.replace('**Speed:**', '').trim();
            else if (line.startsWith('_')) {
                // Traits
                const traitName = line.split('.')[0].replace(/_/g, '').trim();
                parameters[traitName] = line;
            }
            else if (line) description += line + ' ';
        }

        return { name, description: description.trim(), parameters };
    });

    return { backgrounds, species };
}

const { backgrounds, species } = parseOrigins('character-origins.md');
fs.writeFileSync('scripts/backgrounds.json', JSON.stringify(backgrounds, null, 2));
fs.writeFileSync('scripts/species.json', JSON.stringify(species, null, 2));
console.log(`Parsed ${backgrounds.length} backgrounds and ${species.length} species.`);
