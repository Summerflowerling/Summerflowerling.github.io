---

To see if you already have Node.js and NPM installed and check the installed version, run the following commands:
node -v
npm -v

---

To save api key pravite, install this:
npm install dotenv
so we can use environment variables

1.  install
2.  Create a new .env file in the root of your project.
3.  Fill the .env file with your API keys like this

---

upgrade to the latest version of npm using:
npm install -g npm@latest
npm install

---

1. What file would you look for in a project to see if it is using babel?
   .babelrc
2. Why are webpack and babel seen together so frequently?
   babel allows developers to use convenient ES6 syntax that works well with webpack in a front end application
3. Which environment is concerned with what happens on a server?
   prod or production

4. Install Webpack Dev Server
   It helps in live reloading of the page, only for Development mode, and automatically re-builds the application. (With this server, it allows us to run files and updates immedietly.)
   npm i -D webpack-dev-server => go to package.json => "build-dev":webpack-dev-server --config webpack.dev.js --open

5. To make webpack use a plugin, we have to do two things:
   1st: Add a require statement to the top of the webpack config file: const { CleanWebpackPlugin } = require('clean-webpack-plugin');

   2nd:Add the plugin to Plugins array in the module.exports.

6. What are some benefits of using IIFEs?
   *They keep varible out of the globle scope.
   *They run directly after being defined, so you don't have to name them.
   \*When you use them, you don't have to worry about variables you write overlapping with varibles from third party code.
7. Service worker
   service workers actually do is create a cached version of your website that they can supply if the server can’t be reached. But we don’t want that caching around our dev site, so we won’t add this to our dev config at all.

8. Files with names like **_bundle or main_** are the result of a build tool combining many assets into one.

9. Run development environment of the Application, using
   **_npm run build-dev._**

10. **_Mode_**
    \*Production is used when we intend to put the code into operation for the customers.

\*Development environment is used when you want to try some experiments, and make changes without breaking anything in a live setting.

11. Start your project, using **_npm run start_**

12. nstall Webpack and the command line instructions (CLI) tool using npm:
    **_ npm i webpack webpack-cli _**
    (A CLI is a terminal program that allows developers to run commands from the command line to communicate with the Webpack.

13. It is helpful to have babel even on projects that don’t have Webpack. Sometimes I’ll install it just for the convenience … like the convenience of no semicolons or being able to use import/export syntax.
    1. // npm i -D @babel/core @babel/preset-env babel-loader
    2. Create a new file .babelrc in the root of the project. Fill it with this code:
       //{ ‘presets’: ['@babel/preset-env'] }
    3. Get webpack to use babel. (If you are using webpack)
    4. Add this to webpack.config.js
       module: {
       rules: [
       {
       test: '/\.js$/',
       exclude: /node_modules/,
       loader: "babel-loader"
       }
       ]
       }

/Interview Question/
What are some examples of es6 syntax? Do you have a favorite?
ECMAScript 6 — New Features: Overview & Comparison:
http://es6-features.org/#SpreadOperator

1. In javascript, when you see the "new" keyword, what does it do and what does it say about the thing it is being called on?

2. Would you minify files for development or production? Why?

3. What is the purpose of a .map file?

4. What is wrong with this IIFE?
   `function foo() { ...javascript }();`
   Potentially there are other answers, but the big one that you shouldn’t miss, is that this is an invalid IIFE because it is a named function.

If I were asked this in an interview, I wouldn’t stop at saying why it is an invalid IIFE - a question like this is an opportunity to tell the interviewer everything you know about the topic.

It isn’t going too far to talk about a time that you used them, or a lightbulb moment you had while learning about it.
