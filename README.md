# My Pokemon App
My Pokemon App is a React-based web application that allows users to browse and view details of various Pokémon. The application leverages the PokeAPI to fetch Pokémon data and displays it in a user-friendly interface with pagination and detailed views for each Pokémon.

## Features
Browse Pokémon: View a list of Pokémon with pagination.
View Details: Click on a Pokémon to view detailed information about it.
Responsive Design: The application is designed to be responsive and works well on both desktop and mobile devices.

## Technologies Used
React: A JavaScript library for building user interfaces.
React Router: For handling routing within the application.
Tailwind CSS: A utility-first CSS framework for styling.
PokeAPI: An API to fetch Pokémon data.
TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.
Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/my-pokemon-app.git
cd my-pokemon-app
```

2. Install dependencies:

``` npm install ```

3. Run the development server:

``` npm run dev ```

4. Build the CSS:

``` npm run build:css ```

## Project Structure

my-pokemon-app/
├── src/
│   ├── components/
│   │   ├── PokemonList.tsx
│   │   ├── PokemonData.tsx
│   │   └── ... (other components)
│   ├── index.css
│   ├── App.tsx
│   └── ... (other files)
├── public/
│   └── index.html
├── dist/
│   └── styles.css
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md

## Usage

Browse Pokémon: Navigate to the home page to see a list of Pokémon. Use the pagination buttons to navigate through different pages.

View Details: Click on a Pokémon to view its details, including its abilities and other information.