// TODO: load the dataset 

let attractions;
fetch('./attractions.json')
    .then(response => response.json())
    .then(data => {
        attractions = data;
        
        console.log('attractions', attractions);
        var topf = attractions.sort((a, b) => (a.Visitors < b.Visitors));
        
        
        console.log(topf);
        topf = topf.slice(0,5);
        console.log(topf);
        renderBarChart(topf);

        document.querySelector("select"). addEventListener('change', (event) => {
            console.log(event.target.value);
            var Sattri;
            if (event. target.value === "all"){
                Sattri = attractions;
            }
            else{
                Sattri = filterData(event.target.value);
                console.log(Sattri)
            }
            topf = Sattri.sort((a,b) => (a.Visitors < b.Visitors));
            topf = topf.slice(0,5);
            renderBarChart(topf);
        })


    });
 






function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
    return attractions.filter(att=> att.Category == category);
    
}
