# Contributing
Thanks for your interest in contributing. **cellscript.io** is currently in development and is not accepting pull requests at this time. Please check back later.

## Required Software for Development

### Node.js
As this is a npm project, you must have Node.js installed.
To install Node.js + npm, see [Installing Node.js via package manager
  ](https://nodejs.org/en/download/package-manager/).

### yarn
If you have installed Node.js, you already have [npm](https://www.npmjs.com/). Execute `npm install --global yarn` to install [yarn](https://yarnpkg.com/). You should always use `yarn` to run scripts instead of `npm`.

### Git
We use [Git](https://git-scm.com/) for version control. To install Git, see [Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


## Recommended Software for Development

### Visual Studio Code or JetBrains WebStorm
It's recommended that you use an IDE that supports Typescript so that you can benefit from the various code assistance tools for Typescript. [Visual Studio Code](https://code.visualstudio.com/) is free to use and understands Typescript out of the box. [JetBrains WebStorm](https://www.jetbrains.com/webstorm/) is a more feature-rich IDE that includes out-of-the-box support for Typescript, as well as Javascript, HTML, CSS, and React- but requires a yearly subscription.

## Initial Development Environment Setup
1. Ensure you have all the required software (see above).
2. Clone this repository onto your local machine.
```
git clone https://github.com/tyhurson/cellscript.io.git
```
3. Navigate into the project root directory. Install each package within the project.
```
yarn install
yarn bootstrap
```
4. Verify that you can build each package and that all the unit tests pass.
```
yarn build
yarn test
```
