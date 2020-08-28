//init storage
const storage = new Storage();

//get Location Data

const weatherLocation = storage.getLocationData();


//Init Weathe  object

const weather = new Weather(weatherLocation.city);

const ui = new UI();


//Get Weather on DOM Load

document.addEventListener('DOMContentLoaded', getWeather);

//Change Location
document.getElementById('w-change-btn').addEventListener('click', (e)=>
{
 	const city = document.getElementById('city').value;

 	weather.changeLocation(city);

 	storage.setLocationData(city);

 	//Get Location and display
 	getWeather();
 	//close Modal
 	$('#locModal').modal('hide');

});


function getWeather(){
	weather.getWeather()
	.then(results => {
		ui.paint(results);
	})
	.catch(err => console.log(err));
}
