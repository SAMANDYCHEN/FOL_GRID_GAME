# Logic Grid Game

This repository contains an **interactive logic puzzle game** that uses a **5×5 grid** of shapes, colors, and numbers to help users practice logical reasoning. The project includes multiple levels of difficulty—**Easy, Medium, and Hard**—and features various logic templates (e.g., universal or existential statements, adjacency rules, value thresholds) to generate statements and corresponding grids.

## Table of Contents

1. [Features](#features)  
2. [Project Structure](#project-structure)  
3. [Getting Started](#getting-started)  
4. [Usage Instructions](#usage-instructions)  



---

## Features

- **Dynamic Grid Generation**: Automatically creates a 5×5 grid of random shapes, colors, and numerical values.  
- **Three Difficulty Levels**: Each level (Easy, Medium, Hard) has different sets of logical templates.  
- **Statement & Grid Matching**:  
  - The program can generate a logical statement (in both natural language and FOL style).  
  - It then produces a grid that either satisfies or violates the statement.  
- **Multiple-Choice Interaction**: Users see one **correct** statement (matching the grid) and several **incorrect** ones, then select which is correct.  
- **Immediate Feedback**: Alerts indicate whether the selected statement is correct or not.  
- **Extensible Templates**: Additional logic statements can be created or expanded (e.g., adjacency checks, numeric checks, color constraints, shape constraints).  

---

## Project Structure
FOL GAME/
├── index.html
├── css/
│   └── style.css
├── scripts/
│   ├── main.js
│   ├── utils.js
│   ├── grid.js
│   ├── statementGenerator.js
│   └── templateBanks/
│       ├── templates.js
│       ├── easyTemplates/
│       │   ├── easyTemplate_01.js
│       │   ├── easyTemplate_02.js
│       │   ├── easyTemplate_03.js
│       │   ├── easyTemplate_04.js
│       │   ├── easyTemplate_05.js
│       │   └── easyTemplate_06.js
│       ├── mediumTemplates/
│       │   ├── mediumTemplate_01.js
│       │   ├── mediumTemplate_02.js
│       │   ├── mediumTemplate_03.js
│       │   ├── mediumTemplate_04.js
│       │   ├── mediumTemplate_05.js
│       │   └── mediumTemplate_06.js
│       ├── hardTemplates/
│       │   ├── hardTemplate_01.js
│       │   ├── hardTemplate_02.js
│       │   ├── hardTemplate_03.js
│       │   ├── hardTemplate_04.js
│       │   ├── hardTemplate_05.js
│       │   └── hardTemplate_06.js
└── README.md

### Key Files

- **index.html**  
  Main HTML page containing the interface (difficulty dropdown, grid container, statement text, option buttons).  

- **css/style.css**  
  Styles for the overall layout, grid cells, buttons, etc.  

- **scripts/main.js**  
  Central orchestrator. Initializes the game, handles user input, and coordinates grid display and statement generation.  

- **scripts/utils.js**  
  Helper functions: random array selection, integer generation, color mapping, etc.  

- **scripts/grid.js**  
  Responsible for rendering and clearing the 5×5 grid in the DOM.  

- **scripts/statementGenerator.js**  
  Exposes a function (`getTemplatesByDifficulty`) to retrieve templates based on difficulty level.  

- **scripts/templateBanks/templates.js**  
  Aggregates all individual templates from `easyTemplates`, `mediumTemplates`, and `hardTemplates` into arrays for easy import.


---

## Usage Instructions

1. **Select Difficulty**  
   Pick “Easy,” “Medium,” or “Hard” from the dropdown.  
2. **Observe the Generated Grid**  
   A random logic template is chosen, and a 5×5 grid is produced.  
3. **Statements**  
   - You’ll see four statement options: one **correct** (aligned with the grid) and three **incorrect**.  
   - Each statement appears in both **natural language** and a **FOL-style** expression.  
4. **Choose**  
   Click a statement. An alert indicates whether your choice was correct.  
5. **Next Question**  
   Press “Next Question” to generate a new grid and new statements.

---

