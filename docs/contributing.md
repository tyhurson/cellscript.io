# Contributing
Thanks for your interest in contributing. **cellscript.io** is currently in development and is not accepting pull requests at this time. Please check back later.

## Prerequisites
You must have the following packages installed on your machine.
* Node.js + `npm` (see [Installing Node.js via package manager
  ](https://nodejs.org/en/download/package-manager/))
* `git` (see [Getting Started - Installing Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git))

You can verify that the packages are installed by running `node -v && npm -v && git --version`.

## Initial Setup
These steps only need to be completed once.

1. Ensure you have completed all the prerequisites (see above).
2. Clone this repository via `git clone`. Alternatively, you can [download](https://github.com/tyhurson/cellscript.io/archive/refs/heads/main.zip) the compressed project and extract it using `unzip`, [7-Zip](https://www.7-zip.org/download.html), or some other extraction utility.
```
git clone git@github.com:tyhurson/cellscript.io.git
```
3. Navigate into the root directory of the cloned project and execute `npm run init`. This will execute the `init` script within `package.json`. This script will globally install `yarn` and `lerna`, and then run `lerna bootstrap` (the equivalent of `npm install`).
```
cd cellscript.io/
npm run init
```
4. Run `yarn verify` to verify that all the packages build successfully and all the unit tests pass. This may take several seconds.
```
yarn verify
```
