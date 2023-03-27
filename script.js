const navbar = document.getElementById('navbar');
const scrollPosition = () => window.pageYOffset;
const grassModal = document.getElementById('grass-modal');
const productsBackdrop = document.getElementById('products-backdrop');
const closeModal = document.getElementById('close-modal');
const grassButton = document.getElementById('grass-button');
const toPageOne = document.getElementById('to-page-one');
const toPageTwo = document.getElementById('to-page-two');
//Grass Modal Navigation
const grassModalPageOne = document.getElementById('grass-modal-page-one');
const grassModalPageTwo = document.getElementById('grass-modal-page-two');
const grassModalPageOneNavigation = document.getElementById('grass-modal-page-one-navigation');
const grassModalPageTwoNavigation = document.getElementById('grass-modal-page-two-navigation');

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

//Grass Modal
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

//Grass Modal Navigation
toPageTwo.addEventListener('click', () => {
  //Hide first page
  grassModalPageOne.classList.add('hidden');
  grassModalPageOneNavigation.classList.add('hidden');
  //Show second page
  grassModalPageTwo.classList.remove('hidden');
  grassModalPageTwoNavigation.classList.remove('hidden');
});

toPageOne.addEventListener('click', () => {
  //Show first page
  grassModalPageOne.classList.remove('hidden');
  grassModalPageOneNavigation.classList.remove('hidden');
  //Hide second page
  grassModalPageTwo.classList.add('hidden');
  grassModalPageTwoNavigation.classList.add('hidden');
});