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
// Select section
const sections = document.querySelectorAll('section');

// Select navigation bar <ul>
const navbar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// Check if section is in the viewport
function inViewport(section) {
  // Get the section position relative to the viewport
  let rect = section.getBoundingClientRect();
  // Rule to check if section is in the viewport
  let rectInViewport = rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2;
  // Return true or false
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
    // Create a navigation <li> element
    let menuItem = document.createElement('li');
    // Create <a> element
    let link = document.createElement('a');

    // Set class name to <li>
    menuItem.className = 'menu__link';
    // Grab section id and set as href
    link.href = '#' + section.id;
    // Grab section id and set to data-nav
    link.dataset.nav = section.id;
    // Grab data-nav from section and set as innerText to <a>
    link.innerText = section.dataset.nav;

    // Append <a> to <li>
    menuItem.appendChild(link);
    // Append <li> to <nav>
    navbar.appendChild(menuItem);
  }
}

// Add active class to section when it is in the viewport
function setActiveClass(event) {
  for (let section of sections) {
    // Select link <a>
    const menuItem = document.querySelector('a[data-nav="' + section.id + '"]');  // "a[data-nav="section1"]"
    // Set active state if section is in the viewport
    if (inViewport(section)) {
      // Set active state to section
      section.classList.add('section__active');
      // Set active state to link <a>
      menuItem.classList.add('menu__link__active');
    } else {
      section.classList.remove('section__active');
      menuItem.classList.remove('menu__link__active');
    }
  }
}

// Scroll to anchor ID using scrollTO event
function handleMenuClick(event) {
  event.preventDefault();
  event.stopPropagation();
  // Scroll into section
  let section = document.getElementById(event.target.dataset.nav);
  // Grab section coordinates
  let rect = section.getBoundingClientRect();
  // Add smooth behaviour
  window.scrollTo({top: window.scrollY + rect.y - navbar.clientHeight, behavior: 'smooth'});
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
