# Gatling load test

## Vereisten

- Java 11 of nieuwer
- Maven
- De test-app draait op `http://localhost:3000`

## Installatie

De Gatling Maven-plugin downloadt de Gatling-engine en dependencies automatisch bij de eerste run. Vanuit deze map:

```powershell
mvn test-compile
```

## Test uitvoeren

Start eerst de test-app vanuit `test-app`:

```powershell
npm start
```

Open daarna een tweede terminal in deze map en voer de simulatie uit:

```powershell
mvn gatling:test -Dgatling.simulationClass=BlackFridaySimulation
```

De HTML-resultaten komen in `target\gatling\`.

Je kunt een andere server meegeven met:

```powershell
mvn gatling:test -Dgatling.simulationClass=BlackFridaySimulation -DbaseUrl=http://localhost:3000
```
