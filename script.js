const navbar = document.getElementById('navbar');
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
const toPageOne = document.querySelectorAll('.to-page-one');
const toPageTwo = document.querySelectorAll('.to-page-two');
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

const removeNavbarColor = () => {
  navbar.classList.remove('bg-black');
  navbar.classList.add('bg-transparent');
  navbar.classList.remove('text-white');
  navbar.classList.remove('opacity-70');
};

const handleScroll = () => {
  if (scrollPosition() > 0) {
    addNavbarColor();
  } else {
    removeNavbarColor();
  }
};

window.addEventListener('scroll', handleScroll);
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
}, 10000);


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
toPageTwo.forEach((button) => {
  button.addEventListener('click', () => {
    //Hide first page
    grassModalPageOne.classList.add('hidden');
    grassModalPageOneNavigation.classList.add('hidden');
    //Show second page
    grassModalPageTwo.classList.remove('hidden');
    grassModalPageTwoNavigation.classList.remove('hidden');
  });
});

toPageOne.forEach((button) => {
  button.addEventListener('click', () => {
    //Show first page
    grassModalPageOne.classList.remove('hidden');
    grassModalPageOneNavigation.classList.remove('hidden');
    //Hide second page
    grassModalPageTwo.classList.add('hidden');
    grassModalPageTwoNavigation.classList.add('hidden');
  });
});
//#endregion

//#endregion

