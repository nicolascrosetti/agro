const navbar = document.getElementById('navbar');
const scrollPosition = () => window.pageYOffset;
const grassModal = document.getElementById('grass-modal');
const productsBackdrop = document.getElementById('products-backdrop');
const closeModal = document.getElementById('close-modal');
const grassButton = document.getElementById('grass-button');

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

grassButton.addEventListener('click', () => {
  productsBackdrop.classList.remove('hidden');
  grassModal.classList.remove('hidden');

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