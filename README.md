# Weather App

A simple and responsive weather application built with vanilla JavaScript, HTML, and SCSS, fetching real-time weather data from the OpenWeatherMap API.

## Technologies Used

*   **JavaScript (Vanilla JS):** The core of the application for dynamic interactions and API calls.
*   **HTML5:** For structuring the application.
*   **SCSS/CSS:** For styling and creating a modern, responsive design.

## Features

*   **Real-Time Weather Data:** Get up-to-date weather information for any city.
*   **Dynamic Weather Icons:** Icons change based on current weather conditions (e.g., sunny, rainy, cloudy).
*   **Responsive Design:** Works seamlessly on desktop, tablet, and mobile devices.
*   **Error Handling:** Displays user-friendly error messages for invalid inputs or API issues.
*   **Loader:** Shows a loading indicator while fetching data.

## Acknowledgments

*   Thanks to [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
*   Inspired by various weather apps and tutorials.

## Getting Started

To run this project locally, follow these steps:

1.  Clone the repository:

    ```bash
    git clone 
    ```

2.  Navigate to the project directory:

    ```bash
    cd Weather-App-JS-Native
    ```

3.  Install dependencies (if using a bundler like Parcel -  *optional, likely not needed for vanilla JS project*):

    ```bash
    npm install
    ```

4.  Start the development server (if using a bundler like Parcel - *optional,  likely not needed for vanilla JS project*):

    ```bash
    npm start
    ```

5.  Open the `index.html` file directly in your browser.  If you are using a bundler, it might be at `http://localhost:1234` or similar.

## How It Works

The app uses the OpenWeatherMap API to fetch weather data based on the city name entered by the user.

The fetched data is dynamically displayed on the screen, including temperature, humidity, wind speed, and weather conditions.

Weather icons are updated based on the current weather (e.g., sun, rain, clouds).

If the user enters an invalid city name or the API request fails, an error message is displayed.

## Live Demo

Check out the live demo of the project: 

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeatureName`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeatureName`).
5.  Open a pull request.