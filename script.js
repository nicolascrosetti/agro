const navbar = document.getElementById('navbar');
const navlogo = document.getElementById('navlogo');
const drawerNav = document.getElementById('drawer-nav');
const drawerBackdrop = document.getElementById('drawer-backdrop');
const scrollPosition = () => window.pageYOffset;
const productsBackdrop = document.getElementById('products-backdrop');
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
}

const hideDrawer = () => {
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
    removeNavbarColor();
    hideDrawer();
    drawerBackdrop.classList.add('hidden');
  } else {
    removeNavbarColor();
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
  showNavlogo();
});

//#endregion

//#region mobile navbar
mobileNavButton.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');

  window.setTimeout(() => {
    mobileNav.classList.toggle('opacity-0');
  }, 1);
});
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    navbarMobile.classList.add('opacity-50');
  } else {
    navbarMobile.classList.remove('opacity-50');
  }
});
//#endregion

const backgroundImage = document.getElementById('background-image');
const images = ['img/agro.jpg', 'img/agro2.jpg', 'img/agro3.jpg'];
let index = 0;

setInterval(() => {
  index = (index + 1) % images.length;
  backgroundImage.src = images[index];
}, 5000);


//#region Grass Modal
grassButton.addEventListener('click', () => {
  productsBackdrop.classList.remove('hidden');
  grassModal.classList.remove('hidden');
  grassModal.classList.add('flex');

  window.setTimeout(() => {
    grassModal.classList.remove('opacity-0');
    productsBackdrop.classList.remove('opacity-0');
    productsBackdrop.classList.add('opacity-70');
  }, 1);
});

closeModal.addEventListener('click', () => {
    grassModal.classList.add('opacity-0');
    productsBackdrop.classList.remove('opacity-70');
    productsBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      productsBackdrop.classList.add('hidden');
      grassModal.classList.add('hidden');
    }, 500);
  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    grassModal.classList.add('opacity-0');
    productsBackdrop.classList.remove('opacity-70');
    productsBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      productsBackdrop.classList.add('hidden');
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
  productsBackdrop.classList.remove('hidden');
  legumsModal.classList.remove('hidden');
  legumsModal.classList.add('flex');

  window.setTimeout(() => {
    legumsModal.classList.remove('opacity-0');
    productsBackdrop.classList.remove('opacity-0');
    productsBackdrop.classList.add('opacity-70');
  }, 1);
});

closeLegumsModal.addEventListener('click', () => {
    legumsModal.classList.add('opacity-0');
    productsBackdrop.classList.remove('opacity-70');
    productsBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      productsBackdrop.classList.add('hidden');
      legumsModal.classList.add('hidden');
    }, 500);
  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    legumsModal.classList.add('opacity-0');
    productsBackdrop.classList.remove('opacity-70');
    productsBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      productsBackdrop.classList.add('hidden');
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
  productsBackdrop.classList.remove('hidden');
  cerealsModal.classList.remove('hidden');
  cerealsModal.classList.add('flex');

  window.setTimeout(() => {
    cerealsModal.classList.remove('opacity-0');
    productsBackdrop.classList.remove('opacity-0');
    productsBackdrop.classList.add('opacity-70');
  }, 1);
});

closeCerealsModal.addEventListener('click', () => {
    cerealsModal.classList.add('opacity-0');
    productsBackdrop.classList.remove('opacity-70');
    productsBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      productsBackdrop.classList.add('hidden');
      cerealsModal.classList.add('hidden');
    }, 500);
  
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    // Aquí puedes hacer lo que necesites al presionar Esc
    cerealsModal.classList.add('opacity-0');
    productsBackdrop.classList.remove('opacity-70');
    productsBackdrop.classList.add('opacity-0');

    window.setTimeout(() => {
      productsBackdrop.classList.add('hidden');
      cerealsModal.classList.add('hidden');
    }, 500);
  }
});
//#endregion