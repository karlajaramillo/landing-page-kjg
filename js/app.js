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

document.addEventListener("DOMContentLoaded", function(event) {
  console.log('DOM is ready');
  
  /**
  * Define Global Variables
  */
  //Section variable
  const sections = document.querySelectorAll('section');
  console.log(sections);

  //Navigation bar variable
  const navbar = document.querySelector('#navbar__list');
  console.log(navbar);

  let viewSection = [];

  /**
   * End Global Variables
   * Start Helper Functions
   * 
  */


  // Create the navigation menu looping through sections and grabbing data-nav
  function addMenu() {
    for (const section of sections) {
      let coordinates = section.getBoundingClientRect();
      console.log("top: "  + coordinates.top + " and bottom: " + coordinates.bottom);
      // create a navigation <li> element
      let navLi = document.createElement('li');
      // create <a> element
      let link = document.createElement('a');

      // set class name to <li>
      navLi.className = 'menu__link';
      // grab section id and set as href
      link.href = '#' + section.id;
      // grab section id and set to data-nav 
      link.dataset.nav = section.id;
      //grab data-nav from section and set as innerText to <a>
      link.innerText = section.dataset.nav;

      // add click listener
      link.addEventListener('click', handleMenuClick);

      //append <a> to <li>
      navLi.appendChild(link);
      //append <li> to <nav>
      navbar.appendChild(navLi);
    }
  }

  //Scroll to section
  function handleMenuClick(event) {
    event.preventDefault();
    // scroll into section
    let section = document.getElementById(event.target.dataset.nav);
    console.log(section);
    let coordinates = section.getBoundingClientRect();

    console.log("window:scrollY: " + window.scrollY);
    console.log("section.y: " + coordinates.y);
    console.log("navbar.clientHeight: " + navbar.clientHeight);
    console.log("window.scrollY + section.y - navbar.clientHeight: " + (window.scrollY + coordinates.top - navbar.clientHeight));
    //scroll: window.scrollY + 
    window.scrollTo({top: window.scrollY + coordinates.y - navbar.clientHeight, behavior: 'smooth'});
    //section.scrollIntoView({ behavior: 'smooth' });
  }

  //Check if section is the viewport 
  function inViewport(section) {
    //Get the section position relative to the viewport
    let rect = section.getBoundingClientRect();
    //let rectInViewport = rect.top > -navbar.clientHeight && rect.top < window.innerHeight;
    let rectInViewport = rect.top <= window.innerHeight/2 && rect.bottom >= window.innerHeight/2;

    console.log("==========");
    console.log("section: " + section.id);
    console.log("rec.top: " + rect.top);
    console.log("rec.bottom: " + rect.bottom);
    console.log("window.innerHeight/2: " + window.innerHeight/2);

    return rectInViewport;
    //Check if section is inside the viewport, using the height of navbar (208px)
    //console.log(rect);
    //console.log("window.innerHeight: " + window.innerHeight);
    //Check if section is inside the viewport
    //let rectInViewport = (rect.top >= -window.innerHeight/2 && 
    //                      rect.bottom - rect.top <= window.innerHeight);
                          // rect.bottom <= -window.scrollY);
    //console.log(rect.top >= -window.innerHeight/2);
    //console.log(rect.bottom - rect.top <= window.innerHeight);
    
  }

  //Add active class to the section in the viewport
  document.addEventListener('scroll', setActiveClass);

  function setActiveClass(event) {
    for (section of sections) {
      const menuItem = document.querySelector('a[data-nav="' + section.id + '"]');  //result: "a[data-nav="section3"]"
  
      if (inViewport(section)) {
        console.log(section.id + "is active");
        section.classList.add('your-active-class');
        menuItem.classList.add('active_li');
      } else {
        console.log(section.id + "is inactive");
        section.classList.remove('your-active-class');
        menuItem.classList.remove('active_li');
      }
    }
  }
  

  //Trigger addMenu function
  addMenu();

  //Trigger setActiveClass
  setActiveClass();   
});





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// var myElement = document.querySelector( 'div' );

// // Listen for the scroll event

// document.addEventListener( 'scroll', event => {
 
//   // Check the viewport status

//   if( inViewport( myElement ) ){
    
//     myElement.style.background = 'red';
    
//   } else {
    
//     myElement.style.background = '';
    
//   }
  
// })