/* USEFULL LINKS */
// https://www.brewerydb.com/developers
// key: 83c3578c4780db48dd6cf842b8017ddf
// getAllBeers: https://api.brewerydb.com/v2/beers?key=83c3578c4780db48dd6cf842b8017ddf
// http://dut-info-annecy.fr/dim2019/

/* HEADBAR */
/* ------------ Defining all elements in headbar ------------ */

let headbar = document.getElementById("headbar");
let allElements = document.querySelectorAll(".element");

allElements.forEach(element => {
    let headbarMenu = document.createElement("a");
    headbarMenu.innerText = element.title;
    headbarMenu.href = "#" + element.id;
    headbarMenu.classList.add("headbarMenu");
    headbar.append(headbarMenu);
});

/* ---------------------------------------------------------- */

let beerSearchName = document.querySelector("#beerSearchName");
let beerSearchButton = document.querySelector("#beerSearchButton");
beerSearchButton.addEventListener("click", e => {
    searchValue = beerSearchName.value;
    fetch("/beers/1/" + searchValue)
        .then(dataResponse => {
            if (dataResponse.ok) {
                dataResponse.json().then(data => {
                    displayProtocol(data);
                });
            }
        });
});

/* ---------------------------------------------------------- */

let searchValue = "";

/* Beer display */
let displayBeer = document.getElementById("displayBeer");

fetch("/beers")
    .then(dataResponse => {
        if (dataResponse.ok) {
            dataResponse.json().then(data => {
                displayProtocol(data);
            });
        }
    });

function displayProtocol(data) {
    displayBeers(data.data);
    displayPages(data.currentPage, data.numberOfPages);
}

function displayBeers(json) {
    // clear display
    displayBeer.innerHTML = "";

    //beer request
    json.forEach(beer => {
        let beerCell = document.createElement("div");
        beerCell.classList.add("beerCell");
        if (beer.labels)
            beerCell.style.backgroundImage = "url(" + beer.labels.medium + ")";
        else
            beerCell.style.backgroundImage = "url(https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg)";

        let beerTitle = document.createElement("div");
        beerTitle.textContent = beer.name;
        if(!beer.description)
            beerTitle.classList.add("noDesc");
        beerTitle.classList.add("beerTitle");

        beerCell.append(beerTitle);

        beerCell.addEventListener("click", e => {
            console.log(beer);
            switchDescription(true, beer.description);
        });

        displayBeer.append(beerCell);
    });
}

function displayPages(actualPage, totalPages) {
    let displayPageBeer = document.querySelector("#displayPageBeer");
    // Clear pages list
    displayPageBeer.innerHTML = "";
    
    for (let i = 1; i <= totalPages; i++) {
        if (i == actualPage) {
            let np = document.createElement("span");
            np.textContent += ("(" + i + ") ");
            displayPageBeer.append(np);
        }
        else {
            let a = document.createElement("span");
            a.textContent += (i + " ");
            a.classList.add("a");
            a.addEventListener("click", e => {
                window.scrollTo(0, 0);
                fetch("/beers/" + i + "/" + searchValue)
                    .then(dataResponse => {
                        if (dataResponse.ok) {
                            dataResponse.json().then(data => {
                                displayProtocol(data);
                            });
                        }
                    });
            });
            displayPageBeer.append(a);
        }
    }
}

function switchDescription(on, text = "") {
    let beerDescription = document.querySelector("#description");
    beerDescription.textContent = text || "No description";
    if (on) {
        beerDescription.style.opacity = 1;
        beerDescription.style.width = "95vw";
        beerDescription.style.height = "100vh";
        document.body.addEventListener("mouseup", descListener);
    } else {
        beerDescription.style.opacity = 0;
        beerDescription.style.width = "0";
        beerDescription.style.height = "0";
        document.body.removeEventListener("mouseup", descListener);
    }
}

function descListener() {
    switchDescription(false);
}