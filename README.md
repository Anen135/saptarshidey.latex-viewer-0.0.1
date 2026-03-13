# LaTeX Code Viewer (Enhanced Fork)

![Screenshot](https://github.com/DarkMortal/DarkMortal/assets/67017303/ec7fdb17-0f0b-4a5a-be29-8718261a0885)

A LaTeX code previewer built using **MathJax** and VS Code **WebView**, based on the original [LaTeX Viewer by Saptarshi Dey](https://marketplace.visualstudio.com/items?itemName=SaptarshiDey.latex-viewer).  

This fork adds improvements while keeping the simplicity of the original extension.

---

## Features

- Live preview of LaTeX code using MathJax.
- Input state **persists when switching between tabs**.
- Clean and responsive layout with textarea for input.
- Works with VS Code >= 1.79.0.

---

## Installation

1. Clone or download this repository.
2. Run `npm install` or `yarn` to install dependencies.
3. Compile the extension with `yarn run package` or `npm run package`.
4. Install the resulting `.vsix` file in VS Code via **Extensions → Install from VSIX**.

---

## Usage

1. Press `Ctrl+Shift+P` (Cmd+Shift+P on Mac) to open the command palette.
2. Run the command **"Start LaTeX Viewer Extension"**.
3. Enter LaTeX code in the input field and see live preview below.

---

## License

Copyright (c) 2026 Saptarshi Dey
Modifications Copyright (c) 2026 Anen135