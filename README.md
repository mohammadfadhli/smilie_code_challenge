## Built With

[![React][React.js]][React-url]
[![Tailwind][Tailwind.css]][Tailwind-url]

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

* vite
  ```sh
  npm create vite@latest
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/mohammadfadhli/smilie_code_challenge.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Ensure .env file contains the following API link`
   ```js
    VITE_WEATHER_API=https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&hourly=relativehumidity_2m,direct_radiation&daily=temperature_2m_max,temperature_2m_min&timezone=Asia%2FSingapore&start_date=2023-10-01&end_date=2023-10-10
   ```

### Running the App

1. Run the development server
   ```sh
   npm run dev
   ```
2. Open on the browser
   ```sh
   http://localhost:5173/
   ```

## Acknowledgments

* [Recharts](https://recharts.org/en-US/): a composable charting library built on React components

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Tailwind.css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[Tailwind-url]: https://tailwindcss.com/
