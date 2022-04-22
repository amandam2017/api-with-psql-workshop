const searchResultsElem = document.querySelector('.searchResults');
const garmentsTemplate = Handlebars.compile(garmentsTemplateText.innerHTML);


// garments end point
const garmentsList = () => {
	axios.get('http://localhost:4017/api/garments').then(function (result) {
		console.log(result.data);
		searchResultsElem.innerHTML = garmentsTemplate({
			garments: result.data.garments
		})
	})
}

garmentsList();