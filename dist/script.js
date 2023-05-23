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
const productsSection = document.getElementById('products');
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

//navbar links scroll and carrousel init
window.onload = function() {
  new Glide('.glide', {
    type: 'carousel',
    perView: 3,
    focusAt: 'center',
    breakpoints: {
      768: {
        perView: 1
      }
    }
  }).mount();
  
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

//#region carrousel
let isMouseEnterNewImage = false;
let isNewImage = false;
let isMouseEnterTrack = false;

const glideCarrousel = document.querySelector('#gallery');
const glideArrows = document.querySelectorAll('.glide__arrows');

setTimeout(() => {
  let activeSlide = document.querySelector('.glide__slide--active img');

  activeSlide.addEventListener('mouseenter', handleActiveSlideMouseEnter);
  activeSlide.addEventListener('mouseleave', handleActiveSlideMouseLeave);
  
  glideArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      setTimeout(() => {
        activeSlide.removeEventListener('mouseenter', handleActiveSlideMouseEnter);
        activeSlide.removeEventListener('mouseleave', handleActiveSlideMouseLeave);
        activeSlide = document.querySelector('.glide__slide--active img');
        activeSlide.addEventListener('mouseenter', handleActiveSlideMouseEnter);
        activeSlide.addEventListener('mouseleave', handleActiveSlideMouseLeave);
        console.log(activeSlide);

      }, 500);
    });
  });

  /* glideArrows.forEach((arrow) => {
    arrow.addEventListener('click', () => {
  
      const removeCurrentImage = () => {
        const newImage = document.querySelector('.hover-image');
  
        if(newImage){
          //eliminar imagen actual
          console.log('eliminar al clickear flecha');
          newImage.classList.remove('hover-image-scaled');
          setTimeout(() => {
            newImage.remove();
          }, 500);
          isNewImage = false;
        }
      }
      const createNewImage = () =>{
        //reemplazarla por imagen siguiente
      if(!isNewImage){
        //seleccionar slide del medio
        activeSlide = document.querySelector('.glide__slide--active img');
        //obtener src, coordenadas y width y height de slide del medio
        const src = activeSlide.getAttribute('src');
        const imageRect = activeSlide.getBoundingClientRect();
        const imageX = imageRect.left + window.scrollX;
        const imageY = imageRect.top + window.scrollY;
        const imageWidth = imageRect.width;
        const imageHeight = imageRect.height;
      
        //crear la nueva imagen con las mismas propiedades que la imagen original
        const newImage = document.createElement('img');
        newImage.classList.add('hover-image');
        newImage.src = src;
        newImage.style.position = 'absolute';
        newImage.style.left = `${imageX}px`;
        newImage.style.top = `${imageY}px`;
        newImage.style.width = `${imageWidth}px`;
        newImage.style.height = `${imageHeight}px`;
      
        setTimeout(() => {
          document.body.appendChild(newImage);
          setTimeout(() => {  
            newImage.classList.add('hover-image-scaled');
          }, 100);
        }, 100);
  
        // Agregar la nueva imagen al cuerpo del documento  
        newImage.addEventListener('mouseenter', () =>{
          console.log('adentro de nueva imagen');
          isMouseEnterNewImage = true;
        });
      
        newImage.addEventListener('mouseleave', () =>{
          console.log('fuera de nueva imagen');
          isMouseEnterNewImage = false;
      
          setTimeout(() => {
            if(isMouseEnterTrack){
              console.log('salio de nueva imagen pero sigue en track');
            }else{
              console.log('eliminar al salir de nueva imagen');
              newImage.classList.remove('hover-image-scaled');
              setTimeout(() => {
                newImage.remove();
                isNewImage = false;
              }, 200);
            }
          }, 100);
        });
      
        isNewImage = true;
        }
      }

      removeCurrentImage();
      setTimeout(() => {
        createNewImage();
      }, 400);
      
    });
  }); */
}, 1000); 

const handleActiveSlideMouseEnter = () => {
  isMouseEnterTrack = true;
  
    if(!isNewImage){
    //seleccionar slide del medio
    activeSlide = document.querySelector('.glide__slide--active img');
    //obtener src, coordenadas y width y height de slide del medio
    const src = activeSlide.getAttribute('src');
    const imageRect = activeSlide.getBoundingClientRect();
    const imageX = imageRect.left + window.scrollX;
    const imageY = imageRect.top + window.scrollY;
    const imageWidth = imageRect.width;
    const imageHeight = imageRect.height;
  
    //crear la nueva imagen con las mismas propiedades que la imagen original
    const newImage = document.createElement('img');
    newImage.classList.add('hover-image');
    newImage.src = src;
    newImage.style.position = 'absolute';
    newImage.style.left = `${imageX}px`;
    newImage.style.top = `${imageY}px`;
    newImage.style.width = `${imageWidth}px`;
    newImage.style.height = `${imageHeight}px`;
  
    setTimeout(() => {
      newImage.classList.add('hover-image-scaled');
    }, 100);
  
    // Agregar la nueva imagen al cuerpo del documento
    document.body.appendChild(newImage);
  
    newImage.addEventListener('mouseenter', () =>{
      console.log('adentro de nueva imagen');
      isMouseEnterNewImage = true;
    });
  
    newImage.addEventListener('mouseleave', () =>{
      console.log('fuera de nueva imagen');
      isMouseEnterNewImage = false;
  
      setTimeout(() => {
        if(isMouseEnterTrack){
          console.log('salio de nueva imagen pero sigue en track');
        }else{
          console.log('eliminar al salir de nueva imagen');
          newImage.classList.remove('hover-image-scaled');
          setTimeout(() => {
            newImage.remove();
          }, 500);
          isNewImage = false;
        }
      }, 100);
    });
  
    isNewImage = true;
    }
}

const handleActiveSlideMouseLeave = () => {
  isMouseEnterTrack = false;
  
    if(!isNewImage){
    //seleccionar slide del medio
    activeSlide = document.querySelector('.glide__slide--active img');
    //obtener src, coordenadas y width y height de slide del medio
    const src = activeSlide.getAttribute('src');
    const imageRect = activeSlide.getBoundingClientRect();
    const imageX = imageRect.left + window.scrollX;
    const imageY = imageRect.top + window.scrollY;
    const imageWidth = imageRect.width;
    const imageHeight = imageRect.height;
  
    //crear la nueva imagen con las mismas propiedades que la imagen original
    const newImage = document.createElement('img');
    newImage.classList.add('hover-image');
    newImage.src = src;
    newImage.style.position = 'absolute';
    newImage.style.left = `${imageX}px`;
    newImage.style.top = `${imageY}px`;
    newImage.style.width = `${imageWidth}px`;
    newImage.style.height = `${imageHeight}px`;
  
    setTimeout(() => {
      newImage.classList.add('hover-image-scaled');
    }, 100);
  
    // Agregar la nueva imagen al cuerpo del documento
    document.body.appendChild(newImage);
  
    newImage.addEventListener('mouseenter', () =>{
      console.log('adentro de nueva imagen');
      isMouseEnterNewImage = true;
    });
  
    newImage.addEventListener('mouseleave', () =>{
      console.log('fuera de nueva imagen');
      isMouseEnterNewImage = false;
  
      setTimeout(() => {
        if(isMouseEnterTrack){
          console.log('salio de nueva imagen pero sigue en track');
        }else{
          console.log('eliminar al salir de nueva imagen');
          newImage.classList.remove('hover-image-scaled');
          setTimeout(() => {
            newImage.remove();
          }, 500);
          isNewImage = false;
        }
      }, 100);
    });
  
    isNewImage = true;
    }
}



//#endregion

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

//#region Modals
const bodySection = document.getElementById('body');
const modalsSection = document.getElementById('modals');
const closeCurrentModal = (currentModal) => {
  currentModal.classList.add('opacity-0');
  bodyBackdrop.classList.add('opacity-0');
  
  window.setTimeout(() => {
    bodyBackdrop.classList.add('hidden');
    currentModal.classList.add('hidden');
  }, 500);

  bodySection.classList.remove('hidden');
  modalsSection.classList.add('hidden');
  modalsSection.classList.remove('flex');

  let target = productsSection;
  if (target) {
    let targetPos = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPos,
      behavior: 'auto'
    });
  }
}
const showCurrentModal = (currentModal) => {
  bodySection.classList.add('hidden');
  modalsSection.classList.add('flex');
  modalsSection.classList.remove('hidden');

  bodyBackdrop.classList.remove('hidden');
  currentModal.classList.remove('hidden');
  currentModal.classList.add('flex');

  window.setTimeout(() => {
    currentModal.classList.remove('opacity-0');
    bodyBackdrop.classList.remove('opacity-0');
  }, 1);
}

//#region Grass Modal
grassButton.addEventListener('click', () => {
  showCurrentModal(grassModal);
});

closeModal.addEventListener('click', () => {
  closeCurrentModal(grassModal);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    closeCurrentModal(grassModal);
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
  showCurrentModal(legumsModal);
});

closeLegumsModal.addEventListener('click', () => {
    closeCurrentModal(legumsModal);
  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    closeCerealsModal(legumsModal);
  }
});
//#endregion

//#region Cereals Modal
const cerealsModal = document.getElementById('cereals-modal');
const closeCerealsModal = document.getElementById('close-cereals-modal');
const cerealsButton = document.getElementById('cereals-button');

cerealsButton.addEventListener('click', () => {
  showCurrentModal(cerealsModal);
});

closeCerealsModal.addEventListener('click', () => {
  closeCurrentModal(cerealsModal);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    closeCurrentModal(cerealsModal);
  }
});
//#endregion

//#region Nuts and Seeds Modal
const nutsandseedsModal = document.getElementById('nutsandseeds-modal');
const closeNutsandseedsModal = document.getElementById('close-nutsandseeds-modal');
const nutsandseedsButton = document.getElementById('nutsandseeds-button');

nutsandseedsButton.addEventListener('click', () => {
  showCurrentModal(nutsandseedsModal);
});

closeNutsandseedsModal.addEventListener('click', () => {
  closeCurrentModal(nutsandseedsModal);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    closeCurrentModal(nutsandseedsModal);
  }
});
//#endregion

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