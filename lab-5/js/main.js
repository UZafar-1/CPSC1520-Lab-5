/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector('#video-game-form');
  let allGameList = document.querySelector('.all-games');
  let allGameListItems = document.querySelectorAll('.all-games li');
  let myGameList = document.querySelector('.my-favourite-games');
  let myGames = [];

  // event listener for step 1
  videoGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let platform = event.target.elements['platform-family'].value.toLowerCase();
  });

  function filterGames(platform) {
    allGameListItems.forEach(item => {
        if (item.innerText.toLowerCase().includes(platform.toLowerCase())) {
            item.classList.remove('hidden-item');
        } else {
            item.classList.add('hidden-item');
        }
    });
}

videoGameForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let platform = event.target.elements['platform-family'].value;
  filterGames(platform);
});


  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener('click', (event) => {
    let game = event.target.innerText;
  });

  function addToFavouriteGames(game) {
    if (!myGames.includes(game)) {
        myGames.push(game);
        renderFavouriteList(); // Update the favourites list in the DOM
    }
}

function renderFavouriteList() {
    myGameList.innerHTML = ''; // Reset the list
    myGames.forEach(game => {
        myGameList.innerHTML += `<li class="list-group-item">${game}</li>`;
    });
}

allGameList.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName == "LI") {
        addToFavouriteGames(event.target.innerText);
    }
});


  // event listener for step 3
  myGameList.addEventListener('click', (event) => {
    let favGame = event.target.innerText;
  });

  function removeFromFavouriteGames(game) {
    const index = myGames.indexOf(game);
    if (index > -1) {
        myGames.splice(index, 1); // Remove the game from the array
        renderFavouriteList(); // Update the favourites list in the DOM
    }
  }
  
  myGameList.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName == "LI") {
        removeFromFavouriteGames(event.target.innerText);
    }
  });



})();




