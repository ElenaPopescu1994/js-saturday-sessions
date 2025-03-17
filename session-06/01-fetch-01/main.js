console.log();

fetch(`https://api.chucknorris.io/jokes/random`)
    .then(function(response) {
        console.log(`response received`);
        console.log(response);
        return response.json();
    })
    .then(function(apiData) {
        console.log(`response has been parsed as JSON`);
        console.log(apiData.value);
    });

console.log(`after request fire`);
