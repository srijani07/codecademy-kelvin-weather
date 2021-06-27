var readlineSync = require('readline-sync');

function kelvinToCelsius(temperatureKelvin) {
return temperatureKelvin-273;
}

function kelvinToFahrenheit(temperatureKelvin) {
    return ((9*kelvinToCelsius(temperatureKelvin)/5) +32);
}
var temperatureKelvin = readlineSync.question('Enter the temperature in Kelvin : \n');
console.log(temperatureKelvin+"K in Celsius scale is : "+kelvinToCelsius(temperatureKelvin)+"°C");
console.log(temperatureKelvin+"K in Fahrenheit scale is : "+kelvinToFahrenheit(temperatureKelvin)+"°F");