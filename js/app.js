/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navList = document.querySelector('#navbar__list');
const landingContainers = document.querySelectorAll('.landing__container');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isElementVisible(element, visibilityPercent) {

  visibilityPercent = visibilityPercent || 0;
  const rect = element.getBoundingClientRect();
  const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  const above = rect.bottom - visibilityPercent * viewHeight < 0;
  const below = rect.top - viewHeight + visibilityPercent * viewHeight  >= 0;

  return !above && !below;
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
landingContainers.forEach(function(landingContainer) {

    sectionId = landingContainer.parentNode.id;
    sectionName = landingContainer.firstElementChild.textContent;
    navList.insertAdjacentHTML('beforeend', `<li><a class= 'menu__link' href="#${sectionId}">${sectionName}</a></li>`);
  });

// Add class 'active' to section when near top of viewport
//Checks if section is in view and adds active-class with moving background and color change
for ( landingContainer of landingContainers ){

  let section = landingContainer.parentNode;
  document.addEventListener("scroll",function () {
    if (isElementVisible(section, 0.5)) {
        section.classList.add('your-active-class');
    }else{
      section.classList.remove("your-active-class");
    }
  });
};

// Scroll to anchor ID using scrollTO event
let links = document.querySelectorAll('nav ul li a');
 
for (let item of links) { 
  
  item.addEventListener('click', (evt)=> {
      let hashvalue = item.getAttribute('href')
      let target = document.querySelector(hashvalue)
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
      evt.preventDefault();
  });
};

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

