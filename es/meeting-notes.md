# Meeting Notes — July 22, 2026

**Date:** July 22, 2026, at 20:38 UTC
**Meeting Records:** Transcript & Summary

---

## Executive Summary

The meeting defined the web development of a simplified role-playing game based on Dungeons & Dragons (D&D) with commercial monetization on Steam.

### Simplified Design Approach
The project will prioritize accessibility for beginners by automating calculations and removing complex mechanics, such as spell slots and alignments.

### Technical Architecture
The team will build a PC-oriented web application using React, prioritizing local data storage on the user's device over external servers to ensure performance, privacy, and lower maintenance costs.

### Commercialization and Combat Mechanics
The title will be commercialized on Steam under a combat system utilizing action points and cooldowns to replace traditional resource management.

---

## Next Steps / Action Items

| Owner | Task | Description |
| :--- | :--- | :--- |
| **EasyIndustry, Francoenter** | Review Character Creation | Analyze character creation files to define which elements remain unchanged and which are simplified. |
| **EasyIndustry, Francoenter** | Automate Stats | Configure the system so the computer automatically assigns ability scores and levels during character creation. |
| **EasyIndustry, Francoenter** | Simplify Equipment | Design a preset-based equipment system to reduce complexity for players. |
| **EasyIndustry** | Translate Repository | Translate all repository documents and files to Spanish (delegated to Jules). |
| **EasyIndustry** | Review Mechanics | Review the character creation files and rewrite them to incorporate the discussed modifications. |
| **Jules (Juls)** | **Translate Notes** | **Translate the meeting documents (this transcript/summary) to English for subsequent review.** |
| **EasyIndustry** | Implement GitHub | Set up the GitHub repository to manage notes and use Pull Requests for technical discussions. |
| **The Group** | Adjust Balance | Modify the equipment system, species, and economic balance during future work sessions. |
| **EasyIndustry** | Modify Files | Implement the discussed design changes based on the collected meeting notes. |
| **Francoenter** | Send Email | Share the email address via WhatsApp. |
| **EasyIndustry** | Share Notes | Send the key points document to the collaborator for review. |
| **The Group** | Plan Meeting | Prepare the equipment mechanics details for the next work session. |

---

## Detailed Meeting Minutes

### 1. Introduction and Setup
* **Participants:** EasyIndustry and Francoenter.
* **Audio Check:** Both verified audio quality and noted they are using the Gemini AI assistant to record notes in real-time.
* **Objective:** Francoenter stated that the goal is to establish a solid, agreed-upon project baseline before conducting any technical development, noting he is not a mechanical expert in D&D rules.

### 2. Design Philosophy and Justification
* **Introductory Focus:** Francoenter proposed tailoring the project strictly as an introductory tool or game for players new to D&D.
* **Double-Edged Freedom:** While the original tabletop game offers immense freedom that benefits veteran players, this flexibility can be overwhelming and intimidating for beginners due to the massive volume of stats, rules, and math required from the start.

### 3. Automation and Simplification of Complex Mechanics
* **Computer-Aided Math:** The platform will handle complex math calculations and multiple dice rolls automatically.
* **Lizy's Paladin Example:** Francoenter recalled a past campaign where a player named Lizy had to roll and add four different dice for a single strike due to stacked abilities (unarmed strike, mark, divine smite, and radiant damage). The proposed app will calculate these totals instantly.
* **Competitive Differentiation:** While physical D&D Starter/Essentials Kits (with pre-generated sheets and power cards) and games like *Solasta: Crown of the Magister* exist, Francoenter's goal is to enable players to create their own simplified characters autonomously rather than handing them pre-made sheets.
* **Inspiration:** *For The King* was cited as a prime model for accessible, direct attribute and item design.

### 4. Spell System Optimization
* **Streamlined Spells:** The spell catalog will be significantly optimized and reduced.
* **Removal of Niche Spells:** Many utility spells (such as *Prestidigitation*, which beginners often confuse with laundry-cleaning acts) rely too heavily on DM creativity and specific scenarios, leading to them being rarely used by casual players.
* **Spell Slot Alternatives:** Spell slots are deemed too confusing for beginners. The team proposed a mana point system where higher-level spells have proportionally higher mana costs, simplifying resource tracking while retaining a power progression feel.

### 5. Quick Character Creation Interface
* **Quick Creation:** EasyIndustry shared his screen to show a fast character creation interface on YouTube, where a character is configured quickly by choosing only class, species, and background, leaving the rest of the attributes to defaults.
* **No Advanced Customizations:** The team agreed to avoid advanced custom proficiencies or complex subclass branches at early levels to keep the development scope manageable and aligned with the project's simplicity.

### 6. Mitigating Missing / Failure Frustration
* **AC Dichotomy:** The binary hit/miss nature of traditional Armor Class (AC) can cause high frustration if a player rolls poorly consecutively.
* **Progressive / Glancing Damage:** Francoenter proposed a system where missing the AC threshold by a narrow margin still deals partial damage (e.g., 1/3 or 1/2 damage) so players do not feel completely useless during a turn.
* **Daggerheart Inspiration:** EasyIndustry associated this with Critical Role’s *Daggerheart* system, which utilizes 2d12 (representing "hope" and "fear"), evasion, armor, and damage thresholds.

### 7. Project Phases
* **Phase Zero (Current):** Conceptualization, note-taking, and defining which rules to keep, modify, or discard.
* **Phase One:** Implementation of hardcoded core D&D rules processed internally by the computer. For example, selecting a Barbarian will automatically assign the highest scores to Strength.
* **Phase Two:** Direct mechanical simplifications, such as grouping and condensing the extensive skill list (e.g., merging Insight and Intimidation into a single "Persuasion/Convincing" skill).
* **Phase Three:** Introducing custom design modifications (like the progressive glancing damage).
* **Ultimate Goal:** Francoenter emphasized that the target is not a brand-new roleplaying system, but rather ensuring a novice player can understand about 60% of a real D&D session after playing this game.

### 8. Software Architecture and Data Management
* **PC-First Web App:** Because of performance limitations on mobile emulators (e.g., Android Studio/Kotlin using too much RAM), native mobile development is discarded for early phases. The team will build a PC-oriented web application using React, which can later be packaged via Electron for Steam.
* **No Cloud Backend:** Final user characters and game data will be stored strictly locally on the device.
* **Monolithic Data Pack:** Since EasyIndustry works as a backend developer for tracing systems, he suggested packaging the rule database directly into the web build as a large JSON file loaded via JavaScript.

### 9. Dungeon Master (DM) Tools
* **DM Controls:** Designed for tables of around four players, including the DM. The DM can create virtual rooms, preload maps, trigger transitions, add monsters/NPCs, preset dialogue options, and configure skill checks.
* **Roleplay Remains Free:** The platform will not automate the narrative or roleplaying aspect; this remains completely in the hands of the DM and players.

### 10. Background and Alignment Design Changes
* **Numeric Decoupling:** Alignments and backgrounds will no longer grant numeric attribute bonuses (e.g., +1 or +2 to specific ability scores).
* **Identity Over Min-Maxing:** Francoenter noted that the original system penalizes creativity by forcing players to choose backgrounds that do not fit their characters just to get optimal math bonuses.
* **Fantino Example:** EasyIndustry shared frustration with his own character "Fantino", who had a persuasive/silver-tongued background despite being designed as an introvert.
* **Role over Math:** Backgrounds and species will strictly grant interpretative traits and thematic contextual feats (e.g., a soldier gets weapon proficiency, a thief gets stealth), but no raw ability score increases. Alignments are removed entirely.

### 11. Inventory, Consumables, and Tools Simplification
* **Starting Presets:** Equipment will be completely pre-configured based on the selected class to prevent complex early-game shopping decisions.
* **Merged Artisan Tools:** The extensive list of artisan tools is collapsed. Instead of separate blacksmith, herbalism, or alchemist kits, they are merged into generic multi-functional items (e.g., a single mortar for any potion, a single hammer for smithing).
* **Active Consumables:** Inspired by *Baldur's Gate 3*, food/rations will be transformed into active bonus action consumables (e.g., jerky heals 1-2 HP, fish grants clarity, ointments heal over time), giving classes like Bards a frequent use for unused bonus actions.

### 12. Workspace & Methodology
* **Schedule:** Standard meeting times set for Tuesdays and Thursdays (or Fridays) after 4:30 or 5:00 PM. Changes will be pushed to GitHub for review before sessions.
* **GitHub workflow:** EasyIndustry explained that using Markdown (.md) files on GitHub is ideal. They agreed to use Pull Requests to discuss changes before committing directly to the documents.
