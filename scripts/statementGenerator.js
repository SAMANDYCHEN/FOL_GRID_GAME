// scripts/statementGenerator.js

import { easyTemplates, mediumTemplates, hardTemplates } from './templateBanks/templates.js';

// Return an array of templates based on selected difficulty
export function getTemplatesByDifficulty(difficulty) {
    switch (difficulty) {
        case 'easy':
            return easyTemplates;
        case 'medium':
            return mediumTemplates;
        case 'hard':
            return hardTemplates;
        default:
            console.error("Invalid difficulty level; defaulting to easy.");
            return easyTemplates;
    }
}