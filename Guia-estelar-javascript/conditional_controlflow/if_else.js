// Else e If

let temperature = 37.2
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature >= 37 && temperature < 37.5

if (highTemperature) {
  console.log('Febre alta')
} else if (mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Temperatura Normal')
}
