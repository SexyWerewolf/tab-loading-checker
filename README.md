# Tab Loading Checker

**Tab Loading Checker** is a simple and effective Firefox extension that helps you keep track of your tabs' loading statuses at a glance. The extension's icon in the toolbar changes based on whether any of your open tabs are still loading.

## Features

- **Green Icon:** When all tabs are fully loaded, the extension icon turns green.
- **Loading Animation:** If any tab is still loading, the extension icon displays an animated loading GIF.
- Quickly check the loading status of all your open tabs without needing to manually inspect each one.

## Screenshots

### Idle State (All Tabs Loaded)
![Idle State](https://github.com/SexyWerewolf/tab-loading-checker/blob/main/icon-demo.png?raw=true)

### Loading State (Tabs Loading)
![Loading State](https://github.com/SexyWerewolf/tab-loading-checker/blob/main/loading-demo.png?raw=true)

## Installation

1. Clone or download this repository.
2. Open Firefox and navigate to `about:debugging`.
3. Click on "This Firefox" or "This Nightly" depending on your version.
4. Click "Load Temporary Add-on" and select the `manifest.json` file from the cloned/downloaded directory.
5. The extension will be loaded temporarily for testing purposes. To make it permanent, consider submitting it to the Firefox Add-ons store.

## Usage

Once installed, you'll see the extension's icon in the Firefox toolbar. The icon will change dynamically:

- **Green:** When all tabs have finished loading.
- **Animated GIF:** When at least one tab is still loading.

This allows you to manage your browsing experience more efficiently by knowing when your tabs are fully ready without switching between them.

## Contributing

Feel free to fork this repository, create a branch, and submit pull requests. Contributions are welcome and appreciated!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
