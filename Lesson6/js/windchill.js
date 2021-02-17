/* The formula to calculate the wind chill factor is 
f=35.74 + 0.6215t - 35.75s ^0.16 + 0.4275ts^0.16 = 35.74 + 0.6215 t − 35.75 s 0.16 + 0.4275 t s 0.16
where f is the wind chill factor in Fahrenheit, t is the air average temperature in Fahrenheit, 
and s is the wind speed in miles per hour.

Input requirements: "Wind Chill Temperature is officially defined for temperatures at or below 10 °C (50 °F) 
and wind speeds above 4.8 kilometers per hour (3.0 mph)."
*/

const temperature = document.getElementById('temperature').innerHTML;
const windSpeed = document.getElementById('windSpeed').innerHTML;

let windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, .16)) + (0.4275 * temperature * Math.pow(windSpeed, .16));
 
if (temperature <= 50 && windSpeed > 3) {
     windChill = Math.round(windChill);
  } 
  
  else {
     windChill = "N/A";
  }

document.getElementById('windChill').innerHTML = windChill;