int soil = 0;
int rainpercent = 0;
int moisture;

bool lastState = false;

void setup() {
    Serial.begin(9600);
    Serial.setTimeout(50);

    pinMode(7, OUTPUT);
    digitalWrite(7, HIGH); 
}

void loop() {

    
    if (Serial.available() > 0) {
        String s = Serial.readStringUntil('\n');
        int commaIndex = s.indexOf(',');

        if (s.length()>0 && commaIndex != -1) {
            soil = s.substring(0, commaIndex).toInt();
            rainpercent = s.substring(commaIndex + 1).toInt();
        }
    }
    

   
    moisture = analogRead(A0);

    Serial.println(moisture);

    bool needsWater = false;

    if (soil == 1) { 
        if (moisture > 650 && rainpercent < 40) needsWater = true;
    } else { 
        if (moisture > 550 && rainpercent < 50) needsWater = true;
    }

    
    if (needsWater) {
        digitalWrite(7, LOW);
    } else {
        digitalWrite(7, HIGH);
    }

    
    if (needsWater != lastState) {
        if (needsWater) {
          Serial.println("Pump ON");
        }
          
        else {
          Serial.println("Pump OFF");
          
        }
        
        
        lastState = needsWater;
    }
    Serial.print("soil:");
    Serial.println(soil==1?"black soil":"red soil");
    Serial.print("rain percentage: ");
    Serial.println(rainpercent);
    Serial.print("moisture level: ");
    Serial.println(moisture);

    delay(1000);
}
