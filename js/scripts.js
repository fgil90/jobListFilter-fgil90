

function findElement(id) {
    return document.querySelector(id);
}

function findElements(id) {
    return document.querySelectorAll(id);
}

function addElement(tag, cssClass, attachTo){
    let obj = document.createElement(tag);
    obj.classList.add(cssClass)
    attachTo.appendChild(obj);

    return obj;
}

let main = findElement("main");

data.forEach(element => {
    let component = addElement('div', "component", main);
    let logoContainer = addElement('div', "logo-container", component);
    let logo = addElement('img', "logo", logoContainer);
    let infoLeft = addElement('section', "info-left", component);
    let company = addElement('em', "company", infoLeft);
    let _new = addElement('h2', "new", infoLeft);
    let featured = addElement('h2', "featured", infoLeft);
    let position = addElement('h1', "position", infoLeft);
    let ul = addElement('ul', "ul-left", infoLeft);
    let postedAt = addElement('li', "postedAt", ul);
    let contract = addElement('li', "contract", ul);
    let location = addElement('li', "location", ul);
    let infoRight = addElement('section', "info-right", component);
    let role = addElement('p', "role", infoRight);
    let level = addElement('p', "section", infoRight);

    let langArray = element.languages;
    let toolsArray = element.tools;

    logo.src = element.logo;
    company.textContent = element.company;
    _new.textContent = "NEW!"
    featured.textContent = "FEATURED"

    if (!element.new){
        _new.classList.add("hidden");
    }
    if (!element.featured){
        featured.classList.add("hidden");
    }

    position.textContent = element.position;
    postedAt.textContent = element.postedAt;
    contract.textContent = element.contract;
    location.textContent = element.location;
    role.textContent = element.role;
    level.textContent = element.level;

    langArray.forEach(lang =>{
        l = addElement('p', "language", infoRight);
        l.textContent = lang;
    })
    
    toolsArray.forEach(tool =>{
        t = addElement('p', "tool", infoRight);
        t.textContent = tool;
    })

});


function searchInData(data, property, query) {
    let size = data.length;
    let propertyArray = [];
    let regexp = new RegExp(query, "i")

    for (i = 0; i < size; i++) {

        let value = data[i][property];
        let isQueryInValue = regexp.test(value.toString());

        if (isQueryInValue) {
            propertyArray.push(data[i]["id"]);
        }

    }

    return propertyArray;

}

//Create main component div




