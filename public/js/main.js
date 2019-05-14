/* USEFULL LINKS */
// https://www.brewerydb.com/developers
// key: 83c3578c4780db48dd6cf842b8017ddf
// getAllBeers: https://sandbox-api.brewerydb.com/v2/beers?key=83c3578c4780db48dd6cf842b8017ddf
// http://dut-info-annecy.fr/dim2019/

/* HEADBAR */
/* ------------ Defining all elements in headbar ------------ */

let headbar = document.getElementById("headbar");
let allElements = document.querySelectorAll(".element");

allElements.forEach(element => {
    console.log(element.title);
    let headbarMenu = document.createElement("a");
    headbarMenu.innerText = element.title;
    headbarMenu.href = "#" + element.id;
    headbarMenu.classList.add("headbarMenu");
    headbar.append(headbarMenu);
});

/* ---------------------------------------------------------- */

//temp json
let json = [{
    "name": "12th Of Never",
    "description": "Tropically Hoppy. Light, yet Full-Bodied. Bright and Citrusy. Word.\r\nThe magical, mystical 12th of Never is a blend of Old and New School hops that play bright citrus, rich coconut, and papaya-esque flavors, all on a solid stage of English puffed wheat. Tropically hoppy. Light, yet full-bodied. Bright and citrusy. The 12th of Never Ale is everything we\u2019ve learned about making hop-forward beer expressed in a moderate voice.  Pale, cold, slightly alcoholic and bitter.  It\u2019s all we know.\r\n\r\nThese 12oz mini-kegs (AKA cans) are an exciting new option for us, and we are stoopid stoked at the opportunity for y'all to take us to all those new, nelophobic locations\u2026"
}, {
    "name": "16 So Fine Red Wheat Wine",
    "description": "For our super heady 16 year anniversary beer we stepped on the gas and headed down the road less traveled! Our b-day present to ourselves was a racy Red Wheat Wine. The brew rips down the road at 11% ABV fueld by a 45% wheat bomb with an after burner hop shot of Amarillo, Willamette, Nelson Sauvignon, and US Goldings that pushes this baby to the limit of sensory overload. Get in. Sit down. Hold on. Shut up."
}];

/* Beer display */
let displayBeer = document.getElementById("displayBeer");
//beer request
json.forEach(beer => {
    let beerCell = document.createElement("div");
    beerCell.classList.add("beerCell");
    let beerText = document.createElement("div");
    beerText.textContent = "Name: " + beer.name + "\n Description: " + beer.description;
    beerText.classList.add("beerText");
    beerCell.append(beerText);
    displayBeer.append(beerCell);
})