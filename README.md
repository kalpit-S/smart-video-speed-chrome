# Smart Video Speed (Chrome)

## Overview

Smart Video Speed is a versatile browser extension that provides users with the ability to control video playback speeds on any website using convenient keyboard shortcuts. Unique to YouTube videos, it features an advanced automatic speed adjustment based on the speaker's words per minute.

## Features

- **Hotkey Controls**: Increase or decrease video speed with preset keyboard shortcuts.
- **Dynamic Speed Adjustment**: Automatically adjusts the video speed to match a target WPM.
- **Customizable Presets**: Set custom speed presets to allow quick switching.
- **User-friendly Interface**: A simple, intuitive options page for easy customization of settings.

## Installation

Note: This extension has been submitted to the Chrome Web Store and is currently awaiting approval. Once approved, it will be available for direct installation. In the meantime, you can manually install the extension by following these steps:

1. Download the extension's `.zip` file from the GitHub repository release section.
2. Unzip the downloaded file on your computer.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable "Developer mode" at the top-right corner.
5. Click on "Load unpacked" and select the unzipped folder for your extension.

## Usage

The extension offers customizable keyboard shortcuts to control video speed. The default shortcuts for Windows/Linux and Mac are:

For Windows/Linux:

- **Increase Video Speed**: `Ctrl + Shift + Period`
- **Decrease Video Speed**: `Ctrl + Shift + Comma`
- **Activate Dynamic Speed**: `Ctrl + Shift + Y`

For Mac:

- **Increase Video Speed**: `Control + Shift + Period`
- **Decrease Video Speed**: `Control + Shift + Comma`
- **Activate Dynamic Speed**: `Control + Shift + Y`

To customize these shortcuts or to set shortcuts for preset speeds, go to `chrome://extensions/shortcuts` in your Chrome browser and adjust them as needed.

## Settings

- **Default Speed**: Sets the starting playback speed for videos upon loading. (may be unreliable with ads)
- **Speed Increment Amount**: Determines the magnitude of speed change each time the playback speed is adjusted.
- **Target Words Per Minute**: Specifies the preferred speech rate for videos under dynamic speed adjustment. (may be unreliable with ads)
- **Apply Target Words Per Minute Speed on Page Load**: Option to automatically open transcript and adjust video speed based on target WPM on page load.
- **Preset Speeds**: Three customizable speed settings for quick selection, offering a convenient way to switch between frequently used playback speeds.

## Contributing

Contributions to improve Smart Video Speed are welcome. Follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Submit a pull request with a clear description of the changes.

## License

This extension is released under the MIT License..

## Support

For support, feature requests, or bug reports, please file an issue. Feel free to star, fork, or watch the repository for updates..

---

## Possible future updates

- Music Video Exclusion: Exclude music videos from getting affected by default speed settings

- Enhanced Transcript Analysis: The extension could analyze the upcoming transcript from that point to determine the speaker's pace and adjust the video speed accordingly, allowing for more localized control.

- Context-Sensitive Speed Adjustment: For example, if a video has complex math, then it probably shouldn't be sped up as much as other videos
