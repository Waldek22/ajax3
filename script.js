var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');
$('#search').click(searchCountries);

function searchCountries() {
  		var countryName = $('#country-name').val();
  	if(!countryName.length) countryName = 'Poland';
  	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}	
function showCountriesList(resp) {
  countriesList.empty();
  
  resp.forEach(function(item){

   	var countryBox = $('<div>', {"class": "country-box"});

	countryBox.appendTo(countriesList);
	
   	$('<h1>').text(item.name).appendTo(countryBox);
   	$('<div>', {"class": "row"}).appendTo(countryBox);
   	
   	var countryBoxRow = $('<div>', {"class": "row"});
   	
   	countryBoxRow.appendTo(countryBox);
   	
   	createData("Capital:", item.capital);
   	createData("Region:", item.region);
   	createData("Timezone::", item.timezones);
   	createData("Currency:", item.currencies);
   	createData("Language:", item.languages);
   	
    function createData(info, data) {
	  	$('<p>', {"class": "box-text-1 col-xs-2"}).text(info).appendTo(countryBoxRow);
	   	$('<p>', {"class": "box-text-2 col-xs-8"}).text(data).appendTo(countryBoxRow);
  	}
});

}
