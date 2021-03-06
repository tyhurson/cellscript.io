# Scripts
This document provides more details about each script defined in `package.json`.

### `audit`
Performs a [vulnerability audit](https://classic.yarnpkg.com/en/docs/cli/audit) against each package. If there is a known security issue with a dependency of one of the packages, this command will fail.

### `bootstrap`
Installs all the dependencies of each package and links any cross-dependencies if necessary.

### `build`
Builds each package, checking for Typescript errors.

### `clean`
Removes `node_modules` from each package and cleans up build artifacts from each package.

### `detect-dupes`
Checks for [duplicate code](https://github.com/kucherenko/jscpd) in each package. This command fails if there is any duplicate code detected.

### `format`
Reformats `.js`, `.jsx`, `.ts`, `.tsx`, and `.json` files using [Prettier](https://prettier.io/).

### `lint`
Runs [ESLint](https://eslint.org/) against each package. If the linter returns any warnings or errors, this command will fail.

### `reset`
Runs `clean` and also removes the root `node_modules` directory and any lock files generated by `npm` or `yarn`. Useful if yarn or lerna is in a bad state. Note: It is necessary to run `yarn install` once after resetting. You can then run `yarn bootstrap`.

### `setup-dev-env`
Globally installs [yarn](https://yarnpkg.com/) and [lerna](https://github.com/lerna/lerna), if not already installed. This command only needs to be run once.

### `test`
Executes the [unit tests](https://jestjs.io/) within each package. This command will fail if there are any unit test failures.

### `version:major`
Bumps the major version (`x._._`) of each package. This command is reserved for the maintainer. Do not commit package version changes.

### `version:minor`
Bumps the minor version (`_.x._`) of each package. See above.

### `version:patch`
Bumps the patch version (`_._.x`) of each package. See above.