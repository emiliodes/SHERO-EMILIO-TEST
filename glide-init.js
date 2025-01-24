document.addEventListener('DOMContentLoaded', function () {
  new Glide('#products.glide', {
    type: 'carousel',
    perView: 3, 
    gap: 30,
    autoplay: 1500,
    breakpoints: {
      1024: {
        perView: 2 
      },
      600: {
        perView: 1
      }
    }
  }).mount();
});