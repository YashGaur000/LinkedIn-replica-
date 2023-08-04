import getData from "../services/api-clients.js";

window.addEventListener('load', bindEvents); // addevent is callback fxn
function bindEvents(){
    document.getElementById('search').addEventListener('click', searchSongs);
}
async function searchSongs(){
    const singerName = document.getElementById('search-name').value;
    // getData(singerName, printData);
    const songObject = await getData(singerName);
    printData(songObject);
}

{/* <div class="card" style="width: 18rem;">
                        <img src="..." class="card-img-top" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                      </div> */}
function songCard(song){
    // const colDiv = document.createElement('div');
    // colDiv.className='col-4';
    // const cardDiv = document.createElement('div');
    // cardDiv.style='width: 18rem;';
    // cardDiv.className='card';
    // colDiv.appendChild(cardDiv);
    // const img = document.createElement('img');
    // img.src=song['artistViewUrl'];
    // img.className='card-img-top';
    // cardDiv.appendChild(img);
    // const cardBody = document.createElement('audio');
    // cardBody.className='card-body';
    // cardBody.control='controls';
    // cardBody.src=song['previewUrl'];
    // cardDiv.appendChild(cardBody);
    // document.getElementById('songs').appendChild(cardDiv);

    const colDiv=document.createElement('div');
    colDiv.className='col-4';

    const cardDiv=createElement('div');
    cardDiv.style="width: 18rem;";
    cardDiv.className='card';
    colDiv.appendChild(colDiv);

    const img = document.createElement('img');
    img.className='card-img-top';
    img.src=song['artistViewUrl'];
    cardDiv.appendChild(img);

    const cardBody = document.createElement('audio');
    cardBody.className='card-body';
    cardBody.control='controls';
    cardBody.src=song['previewUrl'];

    cardDiv.appendChild(cardBody);
    document.getElementById('songs').appendChild(cardDiv);


}
function printData(songObject){
    console.log('Object data', songObject);
    document.getElementById('songs').innerHTML='';
    const songs = songObject['results'];
    songs.forEach(song => songCard(song));
}
