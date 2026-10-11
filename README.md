# Smart Irrigation System

An Arduino-based smart irrigation system designed to conserve water by combining soil moisture readings with rain forecast information. The system uses an Arduino Uno, a soil moisture sensor, a relay module, and a water pump, with a website providing the interface for user inputs and weather information.

## Project Objective

To reduce unnecessary water usage in irrigation by automating pump control based on soil moisture conditions and the probability of rain.

## Features

- **Soil Moisture Monitoring:** Reads soil moisture values using a soil moisture sensor.
- **Weather Integration:** Retrieves rain forecast probability using the OpenWeatherMap API.
- **Web Interface:** Allows users to select soil settings and send inputs to the Arduino.
- **Automated Irrigation Logic:** Evaluates soil moisture and rain probability against predefined thresholds.
- **Relay-Based Pump Control:** Switches the water pump ON or OFF according to the decision logic.
- **Hardware Demonstration:** Includes project photos and videos documenting the prototype and testing.

## Technologies Used

- Arduino Uno
- Arduino C/C++
- HTML and CSS
- JavaScript
- Web Serial API
- OpenWeatherMap Forecast API
- Soil moisture sensor
- Relay module and DC water pump

## System Architecture

```text
Weather API
     |
     v
Website (HTML, CSS, JavaScript)
     |
     | Soil setting + rain probability
     v
Arduino Uno <---- Soil Moisture Sensor
     |
     | Control signal
     v
Relay Module
     |
     v
Water Pump (ON/OFF)
```

## How It Works

1. The website retrieves weather forecast information and displays the probability of rain.
2. The user selects the soil setting through the website.
3. JavaScript sends the selected soil setting and rain probability to the Arduino through serial communication.
4. The Arduino reads the soil moisture sensor through analog pin `A0`.
5. The Arduino evaluates the moisture reading and rain probability using predefined thresholds.
6. The Arduino sends a control signal to the relay module.
7. The relay switches the pump ON when irrigation is required and OFF when the conditions do not require irrigation.

**Note:** The moisture thresholds must be calibrated for the actual sensor and soil conditions. Rain probability is a forecast, not a guarantee of rainfall.

## 📂 Repository Structure

```text
smart-irrigation-system/
├── croparduinofinal/
│   └── Arduino decision-making code
├── web-code/
│   └──cropindex.html
|   └──cropstyles.css
|   └──cropscript.js
├── irrigationSystem_images_video/
│   └── Project photos and videos
├── .gitignore
└── README.md
```

## 📸 Project Photos and Videos

Project photos and demonstration videos are available in the [`irrigationSystem_images_video`](./irrigationSystem_images_video/) folder.

The media documents the hardware setup and the system's testing process.The images are provided in .jpeg format while the video is provided
using a drive link.
```

## Running the Project

### 1. Upload the Arduino Code

1. Open the Arduino sketch inside `croparduinofinal/` using Arduino IDE.
2. Connect the Arduino Uno to your computer.
3. Select the appropriate board and port.
4. Upload the sketch.
5. Close the Arduino IDE Serial Monitor before connecting through the website.

### 2. Open the Website

1. Open the `web-code/` folder.
2. Open the main HTML file using a suitable local development server if required.
3. Use a browser that supports the Web Serial API.
4. Click the website's Arduino connection button and grant permission to access the serial device.
5. Select the soil setting and submit the inputs.

### 3. Weather API Configuration

The website uses the OpenWeatherMap API to retrieve forecast data. Configure a valid API key before running the website.

**Security:** Do not publish personal API keys in a public repository. If a key has already been committed, rotate it with the provider and remove it from the source code and Git history as appropriate.

## Testing and Calibration(Modify the moisture threshold of the analog sensor by recalibration)

- Measure sensor readings in dry and moist soil.
- Calibrate the moisture thresholds using actual readings.
- Verify relay switching under both irrigation-needed and irrigation-not-needed conditions.
- Confirm the pump's voltage and current requirements before powering it.
- Test the complete website-to-Arduino communication flow.
- Check the system's behavior when weather data or serial communication is unavailable.

## Limitations

- Sensor readings depend on soil type, sensor placement, and calibration.
- Weather information depends on network connectivity and API availability.
- The current design does not include tank-level monitoring.
- Reliable pump operation requires a suitable power supply and correct relay wiring.
- This project is an educational prototype and requires further testing before practical agricultural deployment.

## Future Improvements

- Live moisture readings and pump status on the website.
- Historical sensor data and irrigation logs.
- Improved error handling and connection status.
- Adjustable moisture thresholds.
- Optional rain and tank-level sensors.
- Improved weather-aware irrigation decisions.
- Safer configuration and management of API credentials.

## Project Context

Developed as an academic project on **Rural Development Schemes**, exploring how basic automation, soil sensing, and weather information can help support more efficient water usage in irrigation.

