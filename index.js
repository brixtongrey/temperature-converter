
function convertToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(fahrenheit) {
  const celsius = convertToCelsius(fahrenheit);

    if (celsius < 0) {
    console.log("very cold");
  } else if (celsius < 20) {
    console.log("cold");
  } else if (celsius < 30) {
    console.log("warm");
  } else if (celsius < 40) {
    console.log("hot");
  } else if (celsius >= 40) {
    console.log("very hot");
  }
}


const input = prompt("Enter temperature in Fahrenheit:");

const fahrenheitTemp = Number(input);

