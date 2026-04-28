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