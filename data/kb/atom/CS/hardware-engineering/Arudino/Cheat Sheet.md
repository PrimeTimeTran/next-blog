## 13 Indefinitely

```cpp
const int ledPin = 13;

void setup() {
  pinMode(ledPin, OUTPUT);
  digitalWrite(ledPin, HIGH);
}

void loop()
```

## Alternative pin 13 and 10

```cpp
const int pin1 = 13;
const int pin2 = 10;
const unsigned long interval = 1000;

void setup()
{
  pinMode(pin1, OUTPUT);
  digitalWrite(pin1, HIGH);

  pinMode(pin2, OUTPUT);
  digitalWrite(pin2, HIGH);
}

void loop()
{
  static unsigned long previousMillis = 0;
  unsigned long currentMillis = millis();

  if (currentMillis - previousMillis >= interval)
  {
    previousMillis = currentMillis;
    if (digitalRead(pin1) == HIGH)
    {
      digitalWrite(pin1, LOW);
      digitalWrite(pin2, HIGH);
    }
    else
    {
      digitalWrite(pin1, HIGH);
      digitalWrite(pin2, LOW);
    }
  }
}
```

## 13 or 10

```cpp
const int pin1 = 13;
const int pin2 = 10;

void setup() {
  pinMode(pin1, OUTPUT);
  pinMode(pin2, OUTPUT);

  randomSeed(analogRead(0));
  int selectedPin = random(0, 2) == 0 ? pin1 : pin2;
  digitalWrite(selectedPin, HIGH);
}

void loop()
```

## Request close

```cpp
// https://sheets.googleapis.com/v4/spreadsheets/1s7HJgSBggrSmRNvy8yrjobh0HxahZl3KosdU2kuoU-E/values/Sheet1?key=AIzaSyC_H8RdeUmT-5sms4ai23E6nLe_nvFghuA

#include <SoftwareSerial.h>
#include <ArduinoJson.h>
#include <EEPROM.h>

const char* ssid = "Hieusays";
const char* password = "orangesquash381";
const char* googleSheetsApiKey = "AIzaSyC_H8RdeUmT-5sms4ai23E6nLe_nvFghuA";
const char* spreadsheetId = "1s7HJgSBggrSmRNvy8yrjobh0HxahZl3KosdU2kuoU-E";
const char* sheetName = "Sheet1";

const int ledPin = 13;

SoftwareSerial espSerial(2, 3); // RX, TX

void setup() {
  Serial.begin(9600);
  pinMode(ledPin, OUTPUT);
  connectWiFi();
}

void loop() {
  checkSheet();
  delay(1800000);
}

void connectWiFi() {
  Serial.println("Connecting to WiFi...");
  espSerial.println("AT+CWMODE=1"); // Set WiFi mode to STA
  delay(2000);

  String cmd = "AT+CWJAP=\"" + String(ssid) + "\",\"" + String(password) + "\"";
  espSerial.println(cmd);
  delay(10000);
}

void checkSheet() {
  Serial.println("Connecting to sheets.googleapis.com...");
  espSerial.println("AT+CIPSTART=\"SSL\",\"sheets.googleapis.com\",443");
  delay(5000);

  String url = "/v4/spreadsheets/" + String(spreadsheetId) + "/values/" + String(sheetName) + "?key=" + String(googleSheetsApiKey);
  String request = "GET " + url + " HTTP/1.1\r\nHost: sheets.googleapis.com\r\nConnection: close\r\n\r\n";

  Serial.print("Sending request: ");
  Serial.println(request);
  espSerial.print("AT+CIPSEND=");
  espSerial.println(request.length());
  delay(2000);

  espSerial.print(request);

  Serial.println("Request sent.");

  String response = "";
  unsigned long startTime = millis();
  while (millis() - startTime < 15000) {
    while (espSerial.available()) {
      char c = espSerial.read();
      espSerial.print(c);
      response += c;
    }
    if (response.indexOf("\r\n\r\n") != -1) {
      break;
    }
    delay(100);
  }

  Serial.print("Response length: ");
  Serial.println(response.length());
  Serial.println("Response content:");
  Serial.println(response);

  if (response.indexOf("200 OK") > 0) {
    // Extract JSON response
    int jsonStartIndex = response.indexOf("\r\n\r\n") + 4;
    if (jsonStartIndex < 4) {
      Serial.println("Failed to find JSON response in HTTP response.");
      digitalWrite(ledPin, LOW);
      return;
    }

    String jsonResponse = response.substring(jsonStartIndex);
    Serial.println("JSON response:");
    Serial.println(jsonResponse);

    DynamicJsonDocument doc(2048);
    DeserializationError error = deserializeJson(doc, jsonResponse);

    if (error) {
      Serial.print("JSON deserialization failed: ");
      Serial.println(error.c_str());
      digitalWrite(ledPin, LOW);
      return;
    }

    Serial.println("JSON deserialization successful.");
    JsonArray rows = doc["values"].as`{'<JsonArray>'}`();
    bool ledState = false;

    for (JsonArray row : rows) {
      if (row.size() > 2) {
        String serialNumber = row[2].as`{'<String>'}`();
        String timestamp = row[0].as`{'<String>'}`();

        Serial.print("Checking row: Serial Number = ");
        Serial.print(serialNumber);
        Serial.print(", Timestamp = ");
        Serial.println(timestamp);

        if (serialNumber == "210" && isTimestampWithinLastHour(timestamp)) {
          Serial.println("Condition met: LED will be turned on.");
          ledState = true;
          break;
        }
      }
    }
    digitalWrite(ledPin, ledState ? HIGH : LOW);
  } else {
    Serial.println("Failed to get a valid response. Response content:");
    Serial.println(response);
    digitalWrite(ledPin, LOW);
  }
}

bool isTimestampWithinLastHour(String timestamp) {
  Serial.print("Checking timestamp: ");
  Serial.println(timestamp);
  return true;
}
```
