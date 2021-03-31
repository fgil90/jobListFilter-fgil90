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


function renderList(filter) {
    findElement("main").innerHTML = '';
    
    data.forEach(element => {
        console.log(element.languages[filter], element.tools[filter]);
        // const check = filter === "" || element.languages[filter] || element.tools[filter];
        /** mas eu tive uma ideia melhor
         * pq olha so
         * ta vendo que ele aparece ali em cima? isso aqui precisa so ir nessa div, ver se tem algo la com os ID
         * e dai ela filtra aqui. nao precisa nem passar param
         * 
         * 
         * se liga
        */
        const check = true;
        console.log(check);


        if(check) {

            let langs = "";
            element.languages.forEach(lang =>{
                langs += `<button class="language" onclick=filterList()>${lang}</button>`

                // l = addElement('p', "language", infoRight);
                // l.textContent = lang;
            })
            console.log(langs);

            const div = `<div class="component">
            <div class="logo-container">
              <img class="logo" src="${element.logo}"">
            </div>
            <section class="info-left">
              <em class="company">${element.company}</em>
              ${!element.new ? '' : "<h2 class='new'>NEW!</h2>"}
              <h2 class="featured">featured</h2>
      
              <h1 class="position">Senior Frontend Developer</h1>
              <ul>
                <li class="postedAt">1d ago</li>
                <li class="contract">Full Time</li>
                <li class="location">USA only</li>
              </ul>
              
            </section>
            <section class="info-right">
              <p class="role">Frontend</p>
              <p class="level">Senior</p>
              ${langs}
              <p class="tools"></p>
            </section>
          </div>`
          console.log(div);

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
            
            let toolsArray = element.tools;

            logo.src = element.logo;
            company.textContent = element.company;
            _new.textContent = "NEW!"
            featured.textContent = "FEATURED"
            console.log(!element.new)
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

            
            
            toolsArray.forEach(tool =>{
                t = addElement('p', "tool", infoRight);
                t.textContent = tool;
            })
        }      
    
    });
}

renderList("css");

function filterList() {
    console.log("adicionar os inputs + <p> no filtro");
}


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




