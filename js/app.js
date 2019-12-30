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
*/
//Section variable
const sections = document.querySelectorAll('section');
console.log(sections);

//Navigation bar variable
const navbar = document.querySelector('#navbar__list');
console.log(navbar);

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Check if section is in the viewport
function inViewport(section) {
  //Get the section position relative to the viewport
  let rect = section.getBoundingClientRect();
  //let rectInViewport = rect.top > -navbar.clientHeight && rect.top < window.innerHeight;
  let rectInViewport = rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2;

  console.log('==========');
  console.log('section: ' + section.id);
  console.log('rec.top: ' + rect.top);
  console.log('rec.bottom: ' + rect.bottom);
  console.log('window.innerHeight/2: ' + window.innerHeight/2);

  return rectInViewport;
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// Build the nav
// Create the navigation menu looping through sections and grabbing data-nav
function addMenu() {
  for (let section of sections) {
    let rect = section.getBoundingClientRect();
    console.log('top: '  + rect.top + ' and bottom: ' + rect.bottom);
    // create a navigation <li> element
    let menuItem = document.createElement('li');
    // create <a> element
    let link = document.createElement('a');

    // set class name to <li>
    menuItem.className = 'menu__link';
    // grab section id and set as href
    link.href = '#' + section.id;
    // grab section id and set to data-nav
    link.dataset.nav = section.id;
    //grab data-nav from section and set as innerText to <a>
    link.innerText = section.dataset.nav;

    //append <a> to <li>
    menuItem.appendChild(link);
    //append <li> to <nav>
    navbar.appendChild(menuItem);
  }
}

// Add class 'active' to section when in viewport
function setActiveClass(event) {
  for (let section of sections) {
    const menuItem = document.querySelector('a[data-nav="' + section.id + '"]');  //result: "a[data-nav="section3"]"

    if (inViewport(section)) {
      console.log(section.id + 'is active');
      section.classList.add('section__active');
      menuItem.classList.add('menu__link__active');
    } else {
      console.log(section.id + 'is inactive');
      section.classList.remove('section__active');
      menuItem.classList.remove('menu__link__active');
    }
  }
}

// Scroll to anchor ID using scrollTO event
function handleMenuClick(event) {
  event.preventDefault();
  event.stopPropagation();
  // scroll into section
  let section = document.getElementById(event.target.dataset.nav);
  console.log(section);
  let rect = section.getBoundingClientRect();

  console.log('window:scrollY: ' + window.scrollY);
  console.log('section.y: ' + rect.y);
  console.log('navbar.clientHeight: ' + navbar.clientHeight);
  console.log('window.scrollY + section.y - navbar.clientHeight: ' + (window.scrollY + rect.top - navbar.clientHeight));
  //scroll: window.scrollY +
  window.scrollTo({top: window.scrollY + rect.y - navbar.clientHeight, behavior: 'smooth'});
  //section.scrollIntoView({ behavior: 'smooth' });
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener('DOMContentLoaded', addMenu);

// Set initial active section, of any
document.addEventListener('DOMContentLoaded', setActiveClass);

// Scroll to section on link click
navbar.addEventListener('click', handleMenuClick);

// Set sections as active
document.addEventListener('scroll', setActiveClass);
