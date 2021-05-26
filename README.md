# cellscript.io
**cellscript.io** is a real-time, 4X-style empire-building strategy game set in a procedurally generated 2D world where the player controls units by writing Javascript code. It is available to play for free at [cellscript.io](https://cellscript.io).

This is the monorepo for the game's source code. It includes all the npm packages published under the `@cellscript` scope.

## Development Roadmap
**cellscript.io** is currently in development. You can track the progress of the project in the table below.

|ETA|Status|Task|
|---|---|---|
|May 2, 2021|✅|Create Git repository and upload boilerplate project.
|May 9, 2021|🚧|Implement state manager (`@cellscript/redux`), with support for immutability and reversible operations for both objects and arrays.
|May 16, 2021|-|Implement barebones game engine (`@cellscript/engine`) with support for spawning cells, moving them between two points (euclidean distance), and deleting them.
|May 23, 2021|-|Implement the `Engine` type in the API (`@cellscript/api`). Add support for spawn and delete cell actions.
|May 30, 2021|-|Implement the `Vector`, `Location`, and `Unit` types in the API.
|Jun 6, 2021|-|Support loading and execution of user-written scripts in engine and API. Support moving a cell to another location via script.
|Jun 13, 2021|-|Implement React web application for editing Javascript code (`@cellscript/game-web`).
|Jun 20, 2021|-|Add non-interactive animated canvas to UI that displays cells as simple geometric shapes.
|Jun 27, 2021|-|Implement cell inventory. Add trees to the initial map. Support gathering trees. 
|Jul 4, 2021|-|Add `say` method. Create simple integration test for game. Implement and launch web server (`@cellscript/web-server`).
|**Jul 4, 2021**|**-**|**Release alpha version 0.0.1**

## Licensing
This code is licensed under the [MIT License](./LICENSE), which grants permission to download, use, modify, or distribute the code.

## Contributing
cellscript.io is open source, meaning anyone can contribute. See the [Contributing](docs/contributing.md) guide for more details.
