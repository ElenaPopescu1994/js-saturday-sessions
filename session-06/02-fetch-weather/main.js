console.log(`fetch explained`);

console.log(`before request fire`);

/* fetch(`https://api.weatherapi.com/v1/current.json?q=Bucuresti&key=${weatherApi}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(apiData) {
        console.log(apiData);
    }); */

fetch(`https://api.weatherapi.com/v1/forecast.json?q=Bucuresti&days=1&key=${weatherApi}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (apiData) {
    console.log(apiData);
  });

console.log(`after request fire`);
