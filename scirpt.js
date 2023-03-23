<nav id="navbar" class="flex justify-around text-lg items-center p-8 fixed bg-transparent w-full">
  <div>
    <h4>Logo</h4>
  </div>
  <div class="flex gap-5">
    <h5>uno</h5>
    <h5>dos</h5>
    <h5>tres</h5>
  </div>
</nav>

<script>
  const navbar = document.getElementById('navbar');
  const scrollPosition = () => window.pageYOffset;

  const addNavbarColor = () => {
    navbar.classList.add('bg-black');
    navbar.classList.remove('bg-transparent');
  };

  const removeNavbarColor = () => {
    navbar.classList.remove('bg-black');
    navbar.classList.add('bg-transparent');
  };

  const handleScroll = () => {
    if (scrollPosition() > 0) {
      addNavbarColor();
    } else {
      removeNavbarColor();
    }
  };

  window.addEventListener('scroll', handleScroll);
</script>
