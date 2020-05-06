/**
 * Define Global Variables
 */

let sections = document.querySelectorAll("section");
let navBarMenu = document.querySelector(".navbar__menu");

/**
 * End Global Variables
 */

// build the nav
function createMenu(){
    let menu = document.createElement("UL");

    for (i=1 ; i<=sections.length ; i++){
        let listItem = document.createElement("LI");
        listItem.innerText = `Section ${i}`;
        listItem.className = "listItem";
        listItem.setAttribute("id",`listItem${i}`);
        menu.appendChild(listItem);
    }
    
    navBarMenu.appendChild(menu);
}

createMenu();


// Scroll to section on link click
let listItem = document.querySelectorAll(".listItem");

for (i=0 ; i<sections.length ; i++){
    listItem[i].addEventListener("click", scrollToSection(i))
};

function scrollToSection(sectionID){
    return function(){
        sections[sectionID].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        let activeSection = document.querySelector(".active-class");
        activeSection.classList.remove("active-class");
        toggleActive(sectionID);
    }
}
    
// Set sections as active

function toggleActive(sectionID){
    sections[sectionID].classList.add("active-class");
    listItem[sectionID].classList.add("active-class");
}