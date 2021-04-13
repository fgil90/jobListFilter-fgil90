
//variables

let main = findElement("main");
let filtersContainer = findElement(".filters-container");
let filtersLeft = findElement(".filters-left");

let currentFilters = [];

//function definitions

function findElement(id) {
    return document.querySelector(id);
}

function findElements(id) {
    return document.querySelectorAll(id);
}

function removeThis(event) {
    event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}

function changeFilters(event) {

    let f = event.target.textContent;

    //checks if filters include f. If it does, remove it, if it doesn't, add it.
    (currentFilters.includes(f)) ? currentFilters.splice(currentFilters.indexOf(f), 1) : currentFilters.push(f);

    populateFiltersContainer();
    filterResults();

}

function populateFiltersContainer() {

    filtersLeft.innerHTML = '';

    currentFilters.forEach(element => {
        filtersLeft.innerHTML +=
            `<div class="filter-container">
            <p onclick="changeFilters(event)" class="filter">${element}</p>
        </div>`;
    });

    (filtersLeft.innerHTML == '') ? filtersContainer.classList.add('hidden') : filtersContainer.classList.remove('hidden');

}

function removeAllFilters() {
    currentFilters = [];
    populateFiltersContainer();
    filterResults();
}

function addButtons(list){
    let output ='';

    if (list.length > 0) {
        for (i = 0; i < list.length; i++) {
            output += "<button value='languages' onclick='changeFilters(event)' class='language'>" + list[i] + "</button>";
        }
    }
    return output;
}


function populateMainDiv() {
    main.innerHTML = '';

    data.forEach(element => {
        let lang = addButtons(element.languages);
        let tools = addButtons(element.tools);        

        let component =
            `<div class="component">
                <div class="logo-container">
                    <img class="logo" src="${element.logo}" alt="">
                </div>
                <section class="info-left">
                    <em class="company">${element.company}</em>
                    ${element.new ? "<h2 class='new'>NEW!</h2>" : ''}
                    ${element.featured ? "<h2 class='featured'>FEATURED!</h2>" : ''}

                    <h1 class="position">${element.position}</h1>
                    <ul>
                        <li class="postedAt">${element.postedAt}</li>
                        <li class="contract">${element.contract}</li>
                        <li class="location">${element.location}</li>
                    </ul>
                    
                </section>
                <section class="info-right">
                    <button value="role" class="role" onclick="changeFilters(event)">${element.role}</button>
                    <button value="level" class="level" onclick="changeFilters(event)">${element.level}</button>
                    ${lang}
                    ${tools}
                </section>
            </div>`

        main.innerHTML += component;
    });
}

function filterResults() {
    let componentArray = findElements(".component");
    componentArray.forEach(element => {
        element.classList.remove('hidden');
    });

    componentArray.forEach(elementA => {
        currentFilters.forEach(elementF => {
            
            let regex = new RegExp(elementF, "i");

            if (!regex.test(elementA.innerHTML)) {
                elementA.classList.add('hidden');
            } else if(!elementA.classList.contains('hidden')){
                elementA.classList.remove('hidden');
            }
        });
    });
}

//function calls
populateMainDiv();
