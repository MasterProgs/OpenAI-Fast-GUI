# README

This Electron app provides a simple interface for accessing the OpenAI chatbot. It loads the chatbot at https://chat.openai.com/chat in a browser window, and allows the user to toggle the visibility of the window using the global shortcut specified in the `SHORTCUT` environment variable.

## Requirements

- Node.js
- Electron
- dotenv

## Usage

1. Clone the repository and navigate to the project directory.
2. Install the required dependencies by running `npm install`.
3. Set the `SHORTCUT` environment variable to the desired global shortcut.
4. Start the app by running `npm start`.
5. Press the `SHORTCUT` key to toggle the visibility of the chatbot window.

# .env file
- Create .env file in the same folder as the executable

For example, the content can be :
```
SHORTCUT=Control+Alt+,
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
