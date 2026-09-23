# What Should I Do Today?

A small front-end website that recommends an activity based on the user's current mood
and energy level.

## Project Objective

The project helps users quickly choose a simple activity. It also demonstrates semantic
HTML5, organized CSS3, responsive layouts, and original vanilla JavaScript written as
ES6 modules.

## Screenshot

A final screenshot will be added after the visual design is complete.

## Technology Requirements

- HTML5
- CSS3 with Grid and Flexbox
- Vanilla JavaScript (ES6 modules)
- Node.js and npm for development checks only
- ESLint
- Prettier

No back end, jQuery, Bootstrap, or component framework is used.

## Install and Use

1. Clone or download this repository.
2. Run `npm install` to install development tools.
3. Start a local static server from the project directory.
4. Open `index.html` through that server.

The site has no build step. To run the project checks:

```sh
npm run lint
npm run format:check
```

## Pages

- `index.html` — Mood and energy activity recommender
- `activities.html` — Complete activity list
- `ai-ideas.html` — AI-assisted activity ideas

## Author

[Ziyong Liu](./index.html)

## Class

[CS5610 Web Development, Fall 2026](https://johnguerra.co/classes/webDevelopment_online_fall_2026/)

## Video Demonstration

The public video link will be added before submission.

## Generative AI Use

OpenAI Codex assisted with organizing the assignment requirements, drafting the design
document, creating the initial project structure, and brainstorming the content on the
AI Ideas page. The hosted model's exact version was not exposed in the interface.

Main prompts included:

- Organize the assignment requirements into a readable document.
- Create a clean three-page vanilla HTML, CSS, and JavaScript project scaffold.
- Recommend activities from predefined data based on mood and energy without calling a
  live AI service.

All generated material should be reviewed, understood, and edited by the author before
submission.

## Development Note

The project uses the ESLint configuration provided for the class.

## License

This project is licensed under the [MIT License](./LICENSE).
