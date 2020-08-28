class Weather{
	constructor(city){
		this.apiKey='c0ee0fed1631b7f7d8442fa247a2ded3';
		this.city = city;
	}

	//Fetch Weathe API

	async getWeather(){
		const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${this.city},in&appid=${this.apiKey}`);
		//const responseData await response.json();
		return response.json();
	}

	//Change Location

	changeLocation(city) {
		this.city=city;
	}

}