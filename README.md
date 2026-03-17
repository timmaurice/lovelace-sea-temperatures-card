# Sea Temperatures Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg?style=flat-square)](https://github.com/hacs/integration)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/timmaurice/sea-temperatures-card?style=flat-square)
[![GH-downloads](https://img.shields.io/github/downloads/timmaurice/sea-temperatures-card/total?style=flat-square)](https://github.com/timmaurice/sea-temperatures-card/releases)
[![GH-last-commit](https://img.shields.io/github/last-commit/timmaurice/sea-temperatures-card.svg?style=flat-square)](https://github.com/timmaurice/sea-temperatures-card/commits/master)
[![GH-code-size](https://img.shields.io/github/languages/code-size/timmaurice/sea-temperatures-card.svg?style=flat-square)](https://github.com/timmaurice/sea-temperatures-card)
![GitHub](https://img.shields.io/github/license/timmaurice/sea-temperatures-card?style=flat-square)

A custom Lovelace card for Home Assistant to display sea temperatures rom the [Sea Temperatures integration](https://github.com/timmaurice/sea-temperatures).

<img src="https://raw.githubusercontent.com/timmaurice/lovelace-sea-temperatures-card/main/image.png" alt="Card Screenshot" />

## Features

- Displays current sea temperature for multiple places.
- Shows 24h trend indicators (🌊/📈/📉).
- Historical comparison: Yesterday, Last Week, Last Year.
- Averages section: Min, Max, and Avg temperatures.
- Premium, modern design with smooth animations.
- Fully customizable through the visual editor.

## Localization

The editor is available in the following languages:

- English
- German

<details>
<summary>Contributing Translations</summary>

If you would like to contribute a new translation:

1.  Fork the repository on GitHub.
1.  In the `src/translation` directory, copy `en.json` and rename it to your language code (e.g., `fr.json` for French).
1.  Translate all the values in the new file.
1.  Import new file in `localize.ts` and add it to `translations` array.
1.  Submit a pull request with your changes.

</details>

## Installation

### HACS (Recommended)

This card is available in the Home Assistant Community Store (HACS).

<a href="https://my.home-assistant.io/redirect/hacs_repository/?owner=timmaurice&repository=lovelace-sea-temperatures-card&category=plugin" target="_blank" rel="noreferrer noopener"><img src="https://my.home-assistant.io/badges/hacs_repository.svg" alt="Open your Home Assistant instance and open a repository inside the Home Assistant Community Store." /></a>

<details>
<summary>Manual Installation</summary>

1.  Download the `sea-temperatures-card.js` file from the latest release.
2.  Place it in your `config/www` directory.
3.  Add the resource reference to your Lovelace configuration under `Settings` -> `Dashboards` -> `...` -> `Resources`.
    - URL: `/local/sea-temperatures-card.js`
    - Resource Type: `JavaScript Module`

You can now add the card to your dashboard.

</details>

## Configuration

| Name                | Type                    | Default      | Description                                                                                  |
| ------------------- | ----------------------- | ------------ | -------------------------------------------------------------------------------------------- |
| `type`              | string                  | **Required** | `custom:sea-temperatures-card`                                                               |
| `title`             | string                  | `(none)`     | The title of the card.                                                                       |
| `places`            | list (string or object) | **Required** | A list of device IDs. To set a custom name, use an object: `{ device: '...', name: '...' }`. |
| `show_last_updated` | boolean                 | `true`       | Show the last updated timestamp.                                                             |
| `show_trend`        | boolean                 | `true`       | Show 24h trend indicators.                                                                   |
| `show_stats`        | boolean                 | `true`       | Show statistics (Yesterday, Last Week, Last Year).                                           |
| `show_chart`        | boolean                 | `true`       | Show historical 30-day D3 chart.                                                             |
| `chart_smoothing`   | string                  | `smooth`     | Algorithm for D3 chart drawing. Valid options: `smooth`, `linear`, `step`                    |

### Example

```yaml
type: custom:sea-temperatures-card
title: Sea Temperatures
places:
  - device: your_device_id
    name: Baltic Sea
  - device: another_device_id
    name: North Sea
```

## Development

<details>
<summary>To contribute to the development, you'll need to set up a build environment.</summary>

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/timmaurice/sea-temperatures-card.git
    cd sea-temperatures-card
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Start the development server:**
    This command will build for changes in the `src` directory and rebuild the card.

    ```bash
    npm run build
    ```

4.  In your Home Assistant instance, you will need to configure Lovelace to use the local development version of the card from `dist/sea-temperatures-card.js`.
</details>

---

For further assistance or to [report issues](https://github.com/timmaurice/sea-temperatures-card/issues), please visit the [GitHub repository](https://github.com/timmaurice/sea-temperatures-card).

![Star History Chart](https://api.star-history.com/svg?repos=timmaurice/sea-temperatures-card&type=Date)

## ☕ Support My Work

[<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" height="30" />](https://www.buymeacoffee.com/timmaurice)
