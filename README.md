# This is my Personal Portfolio

A modern and responsive personal portfolio and art gallery website, showcasing watercolor artworks and professional information. This project is built with React and features a dynamic dark mode based on user's system preferences.
Check here: (https://summerflowerling.github.io/)

## Features

*   **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
*   **Art Gallery:** A dedicated section to display watercolor artworks with a modal for larger views.
*   **About Me:** Detailed information about professional experience and interests.
*   **Contact Section:** Easy ways to connect, including social media links and an email button.
*   **Dark Mode Support:** Automatically adjusts theme based on the user's system preference (light/dark mode).
*   **Modular CSS:** Styles are organized using CSS Modules for better maintainability and component-level styling.
*   **Centralized Styling:** Color variables are managed in a single file for easy theme customization.
*   **Custom Fonts:** Utilizes Google Fonts for a unique typographic style.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Vite:** A fast build tool that provides a lightning-fast development experience.
*   **React Router DOM:** For declarative routing in React applications.
*   **CSS Modules:** For scoped and modular CSS.
*   **Google Fonts:** For custom typography (`Prata`, `Cormorant Infant`, `Tangerine`).

## Getting Started

Follow these steps to get a local copy of the project up and running on your machine.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed.

*   [Node.js (includes npm)](https://nodejs.org/en/download/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    cd Summerflowerling.github.io
    ```
    (Replace `<your-repository-url>` with the actual URL of your GitHub repository.)

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

### Running the Development Server

To run the project in development mode:

```bash
npm run dev
```

This will start the development server, usually at `http://localhost:5173`. Open your browser and navigate to this address to see the application.

## Deployment to GitHub Pages

This project can be easily deployed to GitHub Pages.

1.  **Build the project for production:**
    ```bash
    npm run build
    ```
    This command will create a `dist` folder in your project root, containing all the static files optimized for production.

2.  **Deploy the `dist` folder:**
    You can deploy the `dist` folder to GitHub Pages using various methods. A common approach is to push the contents of the `dist` folder to a `gh-pages` branch. You might need to configure your `package.json` for GitHub Pages deployment or use a tool like `gh-pages`.

    *   **Using `gh-pages` package (Recommended for React apps):**
        First, install the `gh-pages` package:
        ```bash
        npm install --save-dev gh-pages
        ```
        Then, add the following scripts to your `package.json`:
        ```json
        "homepage": "https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>",
        "scripts": {
          "predeploy": "npm run build",
          "deploy": "gh-pages -d dist"
        }
        ```
        Replace `<YOUR_GITHUB_USERNAME>` and `<YOUR_REPOSITORY_NAME>` with your actual GitHub username and repository name.

        Finally, run the deploy script:
        ```bash
        npm run deploy
        ```
        This will build your app and push the `dist` folder content to the `gh-pages` branch. Remember to set your GitHub Pages source to the `gh-pages` branch in your repository settings.

## Project Structure

```
.
├── public/                 # Static assets (images, etc.)
├── src/
│   ├── assets/             # General assets (e.g., react.svg)
│   ├── components/         # Reusable React components (e.g., Header.tsx)
│   │   └── Header.tsx
│   │   └── Header.module.css
│   ├── pages/              # Page-level components (e.g., Gallery.tsx, About.tsx, Contact.tsx)
│   │   ├── About.tsx
│   │   ├── About.module.css
│   │   ├── Contact.tsx
│   │   ├── Contact.module.css
│   │   ├── Gallery.tsx
│   │   └── Gallery.module.css
│   ├── styles/             # Global styles and variables
│   │   └── variables.css
│   ├── App.tsx             # Main application component
│   ├── index.css           # Global base styles
│   └── main.tsx            # Entry point for the React application
├── index.html              # Main HTML file
├── package.json            # Project dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── .gitignore              # Files and directories to ignore in Git
```

## Credits

*   **Icons:** Icons made by [Pixel perfect](https://www.flaticon.com/authors/pixel-perfect) from [www.flaticon.com](https://www.flaticon.com/).
*   **Fonts:** Google Fonts ([Prata](https://fonts.google.com/specimen/Prata), [Cormorant Infant](https://fonts.google.com/specimen/Cormorant+Infant), [Tangerine](https://fonts.google.com/specimen/Tangerine)).
>>>>>>> Stashed changes
>>>>>>> Stashed changes
