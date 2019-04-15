	function weatherBalloon( cityID ) {
	  var key = '4d2453f3e759e62791f60c330479bb71';
	  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	  .then(function(resp) { return resp.json() }) // Convert data to json
	  .then(function(data) {
	    // console.log(data);
	    drawWeather(data);
	  })
	  .catch(function() {
	    // catch any errors
	  });
	}

	window.onload = function() {
	  weatherBalloon( 3996063 ); //6167865
	}

	function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	
	document.getElementById('temp').innerHTML = celcius + '&deg;' + 'C';
	
}