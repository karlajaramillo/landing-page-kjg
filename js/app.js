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
      // create a navigation <li> element
      let navLi = document.createElement('li');
      console.log('adding li element');
      // set class name to <li>
      navLi.className = 'menu__link';
      // grab section id and set as data-nav to <li> 
      navLi.dataset.nav = section.id;
      //grab data-nav from section and set as innerText to <li>
      navLi.innerText = section.dataset.nav;
      //append <li> to <ul>
      navbar.appendChild(navLi);
    };
  };

  //Check if section is the viewport 
  function inViewport() {
    for (section of sections) {
      //Get the section position relative to the viewport
      let rect = section.getBoundingClientRect();
      console.log(rect);
      //Check if section is inside the viewport, using the height of navbar (208px)
      let rectInViewport =  rect.top > -200 & rect.top < window.innerHeight;
      console.log(rectInViewport);
      if (rectInViewport) {
        viewSection = section;
        console.log(viewSection);
      };
    };
    return viewSection;
  };

  //Add active class to the section in the viewport

  document.addEventListener( 'scroll', event => {
    if (viewSection) {
      viewSection.style.background = 'red';
      //add active class
      //

    } 
  
  });

  //Check for active state
  



  //Trigger addMenu function
  addMenu();

  //Trigger InViewport function
  inViewport();






    


    
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