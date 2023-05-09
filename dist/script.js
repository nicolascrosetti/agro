const bodyBackdrop = document.getElementById('body-backdrop');
const navbar = document.getElementById('navbar');
const navlogo = document.getElementById('navlogo');
const drawerNav = document.getElementById('drawer-nav');
const drawerBackdrop = document.getElementById('drawer-backdrop');
const drawerItems = document.querySelectorAll('.drawer-item');
const scrollPosition = () => window.pageYOffset;
const productsBackdrop = document.getElementById('products-backdrop');
const closeDrawer = document.getElementById('close-drawer');
//mobile navbar
const mobileNavButton = document.getElementById('mobile-nav-button');
const mobileNav = document.getElementById('mobile-nav');
const navbarMobile = document.getElementById('navbarMobile');
//Grass Modal
const grassModal = document.getElementById('grass-modal');
const closeModal = document.getElementById('close-modal');
const grassButton = document.getElementById('grass-button');
const toOneBack = document.getElementById('to-one-back');
const toOneNumber = document.getElementById('to-one-number');
const toTwoBack = document.getElementById('to-two-back');
const toTwoNumber = document.getElementById('to-two-number');
//Grass Modal Navigation
const grassModalPageOne = document.getElementById('grass-modal-page-one');
const grassModalPageTwo = document.getElementById('grass-modal-page-two');
const grassModalPageOneNavigation = document.getElementById('grass-modal-page-one-navigation');
const grassModalPageTwoNavigation = document.getElementById('grass-modal-page-two-navigation');

//navbar links scroll
window.onload = function() {
  var links = document.querySelectorAll('a[href^="#"]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function(event) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        event.preventDefault();
        var targetPos = target.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  }
};

//#region language
const englishButton = document.querySelectorAll('.english-button');
const spanishButton = document.querySelectorAll('.spanish-button');
const dataLanguage = document.querySelectorAll('[data-language]')

englishButton.forEach((enButton) => {
  spanishButton.forEach((esButton) => {
    enButton.addEventListener('click', () => {
      englishButton.forEach((btn) => {
        btn.classList.add('text-blue-400');
      });
      spanishButton.forEach((btn) => {
        btn.classList.remove('text-blue-400');
      });

      dataLanguage.forEach((element) => {     
        if(element.getAttribute('data-language') == 'spanish'){
          element.classList.add('hidden');
        }
        if(element.getAttribute('data-language') == 'english'){
          element.classList.remove('hidden');
        }
      });
    });

    esButton.addEventListener('click', () => {
      englishButton.forEach((btn) => {
        btn.classList.remove('text-blue-400');
      });
      spanishButton.forEach((btn) => {
        btn.classList.add('text-blue-400');
      });


      dataLanguage.forEach((element) => {     
        if(element.getAttribute('data-language') == 'spanish'){
          element.classList.remove('hidden');
        }
        if(element.getAttribute('data-language') == 'english'){
          element.classList.add('hidden');
        }
      });
    });
  });
});
//#endregion
 
//#region navbar
const addNavbarColor = () => {
  navbar.classList.add('bg-black');
  navbar.classList.remove('bg-transparent');
  navbar.classList.add('text-white');
  navbar.classList.add('opacity-70');
};

const hideNavbar = () => {
  navbar.classList.add('opacity-0');
  navbar.classList.remove('z-40');
  navbar.classList.add('-z-50');
}

const showNavbar = () => {
  navbar.classList.remove('opacity-0');
  navbar.classList.add('z-40');
  navbar.classList.remove('-z-50');
}

const showDrawer = () => {
  drawerNav.classList.remove('opacity-0');
  drawerNav.classList.add('z-50');
  drawerNav.classList.remove('-z-50');
  setTimeout(() => {
    drawerNav.style.transform = 'translateX(0)';
  }, 50);
}

const hideDrawer = () => {
  setTimeout(() => {
    drawerNav.style.transform = 'translateX(-100%)';
  }, 50);
  drawerNav.classList.add('opacity-0');
  drawerNav.classList.remove('z-50');
  drawerNav.classList.add('-z-50');
}

const showNavlogo = () => {
  navlogo.classList.remove('opacity-0');
  navlogo.classList.add('opacity-50');
  navlogo.classList.remove('-z-50');
  navlogo.classList.add('z-50');
}

const hideNavlogo = () => {
  navlogo.classList.add('opacity-0');
  navlogo.classList.remove('opacity-50');
  navlogo.classList.add('-z-50');
  navlogo.classList.remove('z-50');
}

const removeNavbarColor = () => {
  navbar.classList.remove('bg-black');
  navbar.classList.add('bg-transparent');
  navbar.classList.remove('text-white');
  navbar.classList.remove('opacity-70');
};

const handleScroll = () => {
  if (scrollPosition() > 0) {
    showNavlogo();
    hideNavbar();
  } else {
    showNavbar();
    hideNavlogo();
  }
};

window.addEventListener('scroll', handleScroll);

navlogo.addEventListener('click', () => {
  showDrawer();
  drawerBackdrop.classList.remove('hidden');
  window.setTimeout(() => {
    hideNavlogo();
  }, 100);
  
});

drawerBackdrop.addEventListener('click', () => {
  hideDrawer();
  drawerBackdrop.classList.add('hidden');
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Do something for small screens
    handleMobileScroll();
  } else {
    // Do something for larger screens
    showNavlogo();
  }
});

closeDrawer.addEventListener('click', () => {
  hideDrawer();
  drawerBackdrop.classList.add('hidden');
  if (window.matchMedia("(max-width: 768px)").matches) {
    // Do something for small screens
    handleMobileScroll();
  } else {
    // Do something for larger screens
    showNavlogo();
  }
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    hideDrawer();
    drawerBackdrop.classList.add('hidden');
    showNavlogo();
  }
});

drawerItems.forEach((item) => {
  item.addEventListener('click', () => {
    console.log('drawer item clicked');
    hideDrawer();
    drawerBackdrop.classList.add('hidden');
  })
});

//#endregion

//#region mobile navbar

const hideNavbarMobile = () => {
  navbarMobile.classList.add('opacity-0');
  navbarMobile.classList.remove('z-40');
  navbarMobile.classList.add('-z-50');
}

const showNavbarMobile = () => {
  navbarMobile.classList.remove('opacity-0');
  navbarMobile.classList.add('z-40');
  navbarMobile.classList.remove('-z-50');
}

const handleMobileScroll = () => {
  if (scrollPosition() > 0) {
    showNavlogo();
    hideNavbarMobile();
  } else {
    showNavbarMobile();
    hideNavlogo();
  }
};

window.addEventListener('scroll', handleMobileScroll);

mobileNavButton.addEventListener('click', () => {
  showDrawer();
  drawerBackdrop.classList.remove('hidden');
  hideNavbarMobile();
});
//#endregion

//#region background images
/* const backgroundImage = document.getElementById('background-image');
const images = ['img/agro.jpg', 'img/agro2.jpg', 'img/agro3.jpg', 'img/agro4.jpg', 'img/agro5.jpg'];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  backgroundImage.src = images[index];
}, 5000); */

const backgroundImageSecondary = document.getElementById('background-image-secondary');
const imagesSecondary = ['img/agro2.jpg', 'img/agro3.jpg', 'img/agro4.jpg', 'img/agro5.jpg','img/agro.jpg'];
let indexSecondary = 0;

const backgroundImage = document.getElementById('background-image');
const images = ['img/agro.jpg', 'img/agro2.jpg', 'img/agro3.jpg', 'img/agro4.jpg', 'img/agro5.jpg'];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  backgroundImage.style.opacity = '0';
  setTimeout(() => {
    backgroundImage.src = images[index];
    backgroundImage.style.opacity = '1';

    setTimeout(() => {
      indexSecondary = (indexSecondary + 1) % imagesSecondary.length;
      backgroundImageSecondary.src = imagesSecondary[indexSecondary];
    }, 1000)
  }, 1000);
}, 5000);



//#endregion

//#region Grass Modal
grassButton.addEventListener('click', () => {
  bodyBackdrop.classList.remove('hidden');
  grassModal.classList.remove('hidden');
  grassModal.classList.add('flex');

  window.setTimeout(() => {
    grassModal.classList.remove('opacity-0');
    bodyBackdrop.classList.remove('opacity-0');
  }, 1);
});

closeModal.addEventListener('click', () => {
    grassModal.classList.add('opacity-0');
    bodyBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      bodyBackdrop.classList.add('hidden');
      grassModal.classList.add('hidden');
    }, 500);
  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    grassModal.classList.add('opacity-0');
    bodyBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      bodyBackdrop.classList.add('hidden');
      grassModal.classList.add('hidden');
    }, 500);
  }
});

//#region Grass Modal Navigation
toTwoBack.addEventListener('click', () => {
  //Hide first page
  grassModalPageOne.classList.add('hidden');
  grassModalPageOneNavigation.classList.add('hidden');
  //Show second page
  grassModalPageTwo.classList.add('grid');
  grassModalPageTwo.classList.remove('hidden');
  grassModalPageTwoNavigation.classList.add('flex');
  grassModalPageTwoNavigation.classList.remove('hidden');
});

toTwoNumber.addEventListener('click', () => {
  //Hide first page
  grassModalPageOne.classList.add('hidden');
  grassModalPageOneNavigation.classList.add('hidden');
  //Show second page
  grassModalPageTwo.classList.add('grid');
  grassModalPageTwo.classList.remove('hidden');
  grassModalPageTwoNavigation.classList.add('flex');
  grassModalPageTwoNavigation.classList.remove('hidden');
});

toOneBack.addEventListener('click', () => {
  //Show first page
  grassModalPageOne.classList.remove('hidden');
  grassModalPageOneNavigation.classList.remove('hidden');
  //Hide second page
  grassModalPageTwo.classList.add('hidden');
  grassModalPageTwoNavigation.classList.add('hidden');
});

toOneNumber.addEventListener('click', () => {
  //Show first page
  grassModalPageOne.classList.remove('hidden');
  grassModalPageOneNavigation.classList.remove('hidden');
  //Hide second page
  grassModalPageTwo.classList.add('hidden');
  grassModalPageTwoNavigation.classList.add('hidden');
});

  


//#endregion

//#endregion

//#region Legums Modal
const legumsModal = document.getElementById('legums-modal');
const closeLegumsModal = document.getElementById('close-legums-modal');
const legumsButton = document.getElementById('legums-button');

legumsButton.addEventListener('click', () => {
  bodyBackdrop.classList.remove('hidden');
  legumsModal.classList.remove('hidden');
  legumsModal.classList.add('flex');

  window.setTimeout(() => {
    legumsModal.classList.remove('opacity-0');
    bodyBackdrop.classList.remove('opacity-0');
  }, 1);
});

closeLegumsModal.addEventListener('click', () => {
    legumsModal.classList.add('opacity-0');
    bodyBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      bodyBackdrop.classList.add('hidden');
      legumsModal.classList.add('hidden');
    }, 500);
  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    legumsModal.classList.add('opacity-0');
    bodyBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      bodyBackdrop.classList.add('hidden');
      legumsModal.classList.add('hidden');
    }, 500);
  }
});
//#endregion

//#region Cereals Modal
const cerealsModal = document.getElementById('cereals-modal');
const closeCerealsModal = document.getElementById('close-cereals-modal');
const cerealsButton = document.getElementById('cereals-button');

cerealsButton.addEventListener('click', () => {
  bodyBackdrop.classList.remove('hidden');
  cerealsModal.classList.remove('hidden');
  cerealsModal.classList.add('flex');

  window.setTimeout(() => {
    cerealsModal.classList.remove('opacity-0');
    bodyBackdrop.classList.remove('opacity-0');
  }, 1);
});

closeCerealsModal.addEventListener('click', () => {
    cerealsModal.classList.add('opacity-0');
    bodyBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      bodyBackdrop.classList.add('hidden');
      cerealsModal.classList.add('hidden');
    }, 500);
  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    cerealsModal.classList.add('opacity-0');
    bodyBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      bodyBackdrop.classList.add('hidden');
      cerealsModal.classList.add('hidden');
    }, 500);
  }
});
//#endregion

//#region Nuts and Seeds Modal
const nutsandseedsModal = document.getElementById('nutsandseeds-modal');
const closeNutsandseedsModal = document.getElementById('close-nutsandseeds-modal');
const nutsandseedsButton = document.getElementById('nutsandseeds-button');

nutsandseedsButton.addEventListener('click', () => {
  bodyBackdrop.classList.remove('hidden');
  nutsandseedsModal.classList.remove('hidden');
  nutsandseedsModal.classList.add('flex');

  window.setTimeout(() => {
    nutsandseedsModal.classList.remove('opacity-0');
    bodyBackdrop.classList.remove('opacity-0');
  }, 1);
});

closeNutsandseedsModal.addEventListener('click', () => {
    nutsandseedsModal.classList.add('opacity-0');
    bodyBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      bodyBackdrop.classList.add('hidden');
      nutsandseedsModal.classList.add('hidden');
    }, 500);
  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    nutsandseedsModal.classList.add('opacity-0');
    bodyBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      bodyBackdrop.classList.add('hidden');
      nutsandseedsModal.classList.add('hidden');
    }, 500);
  }
});
//#endregion

//#region Philosophy Cards
const philosophySquares = document.querySelectorAll('.philosophy-square');
const cardsTextOne = document.querySelectorAll('.card-text-one');
const cardsTextTwo = document.querySelectorAll('.card-text-two');

philosophySquares.forEach((philosophySquare, i) => {
  philosophySquare.addEventListener('click', () => {
    philosophySquare.classList.toggle('rotate');
    window.setTimeout(() => {
      /* cardsTextOne[i].classList.toggle('rotate');
      cardsTextTwo[i].classList.toggle('rotate'); */
      cardsTextOne[i].classList.toggle('hidden');
      cardsTextTwo[i].classList.toggle('hidden');
    }, 200);
  });
});
//#endregion

//#region Drawer Sections Color
const sections = document.querySelectorAll('section');
const drawerLinks = document.querySelectorAll('.drawer-link');

function setActiveLink() {
  const scrollPosition = window.scrollY;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop - sectionHeight * 0.25 && scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25) {
      const currentId = section.getAttribute('id');
      // const currentLink = document.querySelector(`a[href="#${currentId}"]`);
      // const drawerItems= document.querySelectorAll('.nav-link');

      drawerLinks.forEach(link => {
        link.classList.remove('text-blue-500');

        if(link.getAttribute('href') == `#${currentId}`){
          link.classList.add('text-blue-500');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);
//#endregion