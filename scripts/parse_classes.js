const fs = require('fs');

function parseClasses(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const sections = content.split('\n## ');
    const classes = [];
    const allFeatures = [];

    sections.forEach(section => {
        if (!section.trim() || section.startsWith('# ')) return;

        const lines = section.split('\n');
        const className = lines[0].trim();
        if (className === 'Becoming a Character ...' || className === 'Level Advancement' || className === 'Multiclassing' || className === 'Trinkets') return;

        const classObj = {
            name: className,
            description: '',
            parameters: {}
        };

        // Find core traits table
        const coreTraitsMatch = section.match(/\*\*Core [\w\s]+ Traits\*\*\s*<table>[\s\S]+?<\/table>/);
        if (coreTraitsMatch) {
            classObj.parameters.core_traits = coreTraitsMatch[0];
        }

        // Find features table
        const featuresTableMatch = section.match(/\*\*[\w\s]+ Features\*\*\s*<table>[\s\S]+?<\/table>/);
        if (featuresTableMatch) {
            classObj.parameters.features_table = featuresTableMatch[0];
        }

        // Split by #### to get individual features
        const features = section.split('\n#### ');
        features.shift(); // skip introduction

        features.forEach(feature => {
            const featureLines = feature.split('\n');
            const featureTitle = featureLines[0].trim();
            const featureDescription = featureLines.slice(1).join('\n').trim();

            allFeatures.push({
                class_name: className,
                name: featureTitle,
                description: featureDescription
            });
        });

        classes.push(classObj);
    });

    return { classes, allFeatures };
}

const { classes, allFeatures } = parseClasses('classes.md');
fs.writeFileSync('scripts/classes.json', JSON.stringify(classes, null, 2));
fs.writeFileSync('scripts/features.json', JSON.stringify(allFeatures, null, 2));
console.log(`Parsed ${classes.length} classes and ${allFeatures.length} features.`);
