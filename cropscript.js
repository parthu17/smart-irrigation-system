let port;
let writer;
let rainChance = 50;

// 🔌 CONNECT TO ARDUINO
document.getElementById("connect").addEventListener("click", async () => {
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudRate: 9600 });

        writer = port.writable.getWriter();

        console.log("✅ Connected to Arduino");
    } catch (error) {
        console.log("Connection error:", error);
    }
});

// 🌧️ FETCH WEATHER
async function getWeather() {
    try {
        const apiKey = "7dd4d6e7ce3adb6c4c77cef20a133a77"; 
        const city = "Hyderabad";

        const url = `https://api.openweathermap.org/data/2.5/forecast?q=Hyderabad&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (!data.list || data.list.length===0) {
            document.getElementById("weather-info").textContent =
                "Weather not available";
            return;
        }

        rainChance = data.list[0].pop * 100;

        document.getElementById("weather-info").textContent =
            `Chance of rain: ${rainChance.toFixed(0)}%`;

        console.log("Rain:", rainChance);

    } catch (error) {
        console.log("Weather error:", error);
        document.getElementById("weather-info").textContent =
            "Error loading weather";
    }
}


document.querySelector("button[type='submit']").addEventListener("click", async () => {
    try {
        if (!writer) {
            alert("⚠️ Connect Arduino first!");
            return;
        }

        const soil = document.querySelector('input[name="soil"]:checked').value;

        const message = `${soil},${rainChance.toFixed(0)}\n`;

        await writer.write(new TextEncoder().encode(message));

        console.log("📤 Sent:", message);

    } catch (error) {
        console.log("Send error:", error);
    }
});


getWeather();