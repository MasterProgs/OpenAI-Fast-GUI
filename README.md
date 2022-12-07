# OpenAI-Fast-GUI

![image](https://user-images.githubusercontent.com/47997521/206051216-28f3a5bd-e49c-4358-9007-962ac0b5112c.png)

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

## .env file
- Create .env file in the same folder as the executable

For example, the content can be :
```
SHORTCUT=Control+Alt+,
```

## How to auto-start the program ?
### Linux:

1. Open your system's startup manager. This is usually located in the System Settings or Preferences menu.
2. Add a new startup item and specify the path to the executable file for the program that you want to run at startup.
3. Save your changes and restart your computer to see if the program is running at startup.

### Windows:

1. Press the Windows key + R to open the Run dialog.
2. Type "shell:startup" and press Enter to open the startup folder.
3. Right-click on the startup folder and select "New" and then "Shortcut" from the context menu.
4. In the "Create Shortcut" dialog, type the path to the executable file for the program that you want to run at startup.
5. Click "Next" and give the shortcut a name.
6. Click "Finish" to create the shortcut and add it to the startup folder.
7. Restart your computer to see if the program is running at startup.

### macOS:

1. Open the System Preferences and go to the Users & Groups section.
2. Select your user account and go to the Login Items tab.
3. Click the "+" button and select the "Other..." option.
4. In the "Select Application" dialog, navigate to the executable file for the program that you want to run at startup.
5. Select the executable file and click "Add" to add it to the list of login items.
6. Save your changes and restart your computer to see if the program is running at startup.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
