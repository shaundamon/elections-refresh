# Elections Results Auto-Refresh Chrome Extension

## Overview
The "Elections Results Auto-Refresh" Chrome extension is designed to automatically refresh the `results.elections.org.za/dashboards/npe` page at regular intervals to keep the user updated with the latest election results. Users can set the refresh interval through a simple popup interface.

## Features
- Automatically refreshes the specified page.
- Allows users to set a custom refresh interval.
- Notifies the user when the refresh interval is set.

## Files
- `background.js`: Handles the background tasks such as setting alarms and refreshing the page.
- `manifest.json`: Contains the metadata for the Chrome extension.
- `popup.html`: The HTML file for the popup interface where users can set the refresh interval.
- `popup.js`: Contains the script for handling user interactions in the popup.

## Installation
1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the directory where you downloaded the extension files.
5. The extension should now be installed and visible in your Chrome extensions list.

## Usage
1. Click on the extension icon in the Chrome toolbar to open the popup.
2. Enter the desired refresh interval (in seconds) in the input field.
3. Click the "Set Interval" button to apply the new refresh interval.


## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License
This project is licensed under the MIT License.