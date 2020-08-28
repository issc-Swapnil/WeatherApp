class UI {
	constructor(){
		this.location = document.getElementById('w-location');
		this.desc = document.getElementById('w-desc');
		this.string = document.getElementById('w-string');
		this.icon = document.getElementById('w-icon');
		this.humidity = document.getElementById('w-humidity');
		this.feelsLike = document.getElementById('w-feels-like');
		this.dewpoint = document.getElementById('w-dewpoint');
	}


	paint(weather){

			//http://openweathermap.org/img/w/" + iconcode + ".png"

		this.location.textContent= weather.name;
		this.desc.textContent= weather.weather[0].description;
		this.string.textContent= weather.main.temp;
		this.icon.setAttribute('src', 'http://openweathermap.org/img/w/'+weather.weather[0].icon +'.png');
		this.humidity.textContent= `Realative Humidity: ${weather.main.humidity}`;  
		this.feelsLike.textContent= `Pressure: ${weather.main.pressure}`;  
		this.dewpoint.textContent= `Temp: ${weather.main.pressure}`;
	}
}