var $tbody = document.querySelector("tbody");
var $dataInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInputer = document.querySelector("#shape");
var $searchButton = document.querySelector("#search");
var $resetButton = document.querySelector("#reset");

//Add an event listener

$searchButton.addEventListener("click", searchData);
$resetButton.addEventListener("click", resetData);

//Set filteredData to dataSet
var filteredData = dataSet;
var resetData = dataSet;

//Set starting index and results per page
var startingIndex = 0;
var resultsPerPage = 1000;

function renderTable() {

    //Set the value of ending index
    var endingIndex = startingIndex + resultsPerPage;

    //Looping through data set
    for (var i = 0; i < filteredData.length; i++) {
            var $row = $tbody.insertRow(i);

        //Get current object & keys
        var currentSighting = filteredData[i];
        var fields = Object.keys(currentSighting);

        //Insert filteredSightings
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentSighting[field];
        };
    };
};
function searchData(event){
	event.preventDefault();

	var filteredDate = $dateInput.value.trim()
	if(filteredDate !=""){
		filteredData = dataSet.filter(function (data){
			var dataDate = data.datetime;
			return dataDate ===filteredDate;
		});
	

	};
	
	var filteredCity = $cityInput.value.trim().toLowerCase();
  	if (filteredCity !="") {
    	filteredData = filteredData.filter(function(data) {
     		var dataCity = data.city.toLowerCase();
      		return dataCity === filteredCity;

		});
	};

	var filteredState = $stateInput.value.trim().toLowerCase();
	if (filteredState !="") {
		filteredData = filteredData.filter(function(data) {
			var dataState = data.set.toLowerCase();
			return dataState === filteredState;
		});
	};


	var filteredCountry = $countryInput.value.trim().toLowerCase();
	if(filteredCountry !="") {
		fileteredData = filteredData.filter(function(data) {
			var dataCountry = data.country.toLowerCase();
			return dataCountry === filteredCountry;
		});
	};

		renderTable();

	}

		function resetData() {
  		filteredData = dataSet;
  		$dateInput.value = "";
  		$cityInput.value = "";
  		$stateInput.value = "";
  		$countryInput.value = "";
 		$shapeInput.value = "";
  		renderTable();


	}

	function resetForm() {
		document.getElementById("myForm").reset();
	}
    renderTable();
    