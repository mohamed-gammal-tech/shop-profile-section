function makeActive(element) {
    // Remove 'active' class from all elements
    var links = document.getElementsByClassName('nav-link');
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove('active');
    }
  
    // Add 'active' class to the element that was clicked
    element.classList.add('active');
  }
  