var requestMovie = ()=>{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            var response = JSON.parse(this.responseText);
            console.log(response);
            
            var result = document.getElementById('resultRequest');
            /*.innerHTML = JSON.stringify(
                `<li>${response.results[0].title}</li>`
                );*/

                result.innerHTML = "";

                if(result.length == 0){
                    var tr = document.createElement('tr');
                    var td = document.createElement('td');
                    td.colSpan = 3;
                    td.innerHTML = 'Aucune donnée';
                    tr.appendChild(td);
                    result.appendChild(tr);
                 }
                 

                 response.results.forEach(function (c) {
                            var div = document.createElement('div');

                            var titre = document.createElement('td');
                            titre.innerHTML = c.title;
                            var picture = document.createElement('img');
                            picture.src = "https://image.tmdb.org/t/p/w300_and_h450_bestv2/"+c.poster_path;
                            var description = document.createElement('p');
                            description.textContent = c.overview
            
                            result.appendChild(div);
                            div.appendChild(titre);
                            div.appendChild(picture);
                            div.appendChild(description);
                       })
          
        }
    };
    request.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=cc4c125990f5777406886df6fdb3e266&language=en-US&query=avengers");
    request.send();
};

document.getElementById('btnClickGet').addEventListener('click', requestMovie);